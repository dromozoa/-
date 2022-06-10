local utf8 = require "utf8"
local scenario = require "scenario"

local g = love.graphics
local scenario_data
local scenario_measures
local frames_per_second
local fonts = {}
local textures = {}
local canvases = {}
local shaders = {}

local function prepare_font(filename, size)
  local key = filename .. "/" .. size
  local font = fonts[key]
  if not font then
    font = assert(g.newFont(assert(love.font.newRasterizer(filename, size))))
    fonts[key] = font
  end
  return font
end

local function prepare_text_chars(text, font)
  local height = font:getHeight()

  local chars = {}
  local width = 0
  for _, code in utf8.codes(text) do
    local char = utf8.char(code)
    local w = font:getWidth(char);
    chars[#chars + 1] = {
      font = font;
      char = char;
      width = w;
      margin_before = 0;
      margin_after = 0;
      height = height;
    }
    width = width + w
  end

  return chars, width
end

local function prepare_text(data, text_font, ruby_font)
  local text_x = 0

  for i = 1, #data do
    local item = data[i]
    local text_chars, text_width = prepare_text_chars(item.text, text_font)
    item.text_chars = text_chars

    if item.ruby then
      local ruby_chars, ruby_width = prepare_text_chars(item.ruby, ruby_font)
      item.ruby_chars = ruby_chars

      -- https://www.w3.org/TR/jlreq/
      -- 非常に素朴なルビの実装
      if text_width >= ruby_width then
        local margin = (text_width - ruby_width) / #ruby_chars / 2
        for j = 1, #ruby_chars do
          local ruby_char = ruby_chars[j]
          ruby_char.margin_before = margin
          ruby_char.margin_after = margin
        end
      else
        -- 前後にルビ一文字ずつはみだしてもよいものとする
        local ruby_width_first = ruby_chars[1].width
        local ruby_width_last = ruby_chars[#ruby_chars].width
        local overhanging_width =  ruby_width_first + ruby_width_last
        if text_width + overhanging_width >= ruby_width then
          ruby_chars[1].margin_before = (text_width - ruby_width) / 2
        else
          ruby_chars[1].margin_before = -overhanging_width / 2
          local margin = (ruby_width - text_width - overhanging_width) / #text_chars / 2
          for j = 1, #text_chars do
            local text_char = text_chars[j]
            text_char.margin_before = margin
            text_char.margin_after = margin
          end
        end
      end

      local ruby_x = text_x
      for j = 1, #ruby_chars do
        local ruby_char = ruby_chars[j]
        ruby_x = ruby_x + ruby_char.margin_before
        ruby_char.cx = ruby_x + ruby_char.width / 2
        ruby_x = ruby_x + ruby_char.width + ruby_char.margin_after
      end
    end

    for j = 1, #text_chars do
      local text_char = text_chars[j]
      text_char.sx = text_x
      text_x = text_x + text_char.margin_before
      text_char.cx = text_x + text_char.width / 2
      text_x = text_x + text_char.width + text_char.margin_after
      text_char.ex = text_x
    end
  end

  data.text_width = text_x
  data.text_height = text_font:getHeight()
end

function love.load(arg)
  love.keyboard.setKeyRepeat(true)

  for speaker, def in pairs(scenario.speakers) do
    if def.font_filename then
      def.text_font = prepare_font(def.font_filename, def.font_size)
      def.ruby_font = prepare_font(def.font_filename, def.font_size / 2)
    end
  end

  scenario_data = scenario.read(arg[1])
  for i = 1, #scenario_data do
    local data = scenario_data[i]
    local def = scenario.speakers[data.speaker]
    if def and def.text_font then
      prepare_text(data, def.text_font, def.ruby_font)
    end
  end

  frames_per_second = assert(tonumber(arg[2]))

  textures[1] = assert(g.newImage(assert(love.image.newImageData "texture2.png")))

  canvases.text_char = g.newCanvas(g.getWidth(), g.getHeight())
  canvases.text = g.newCanvas(g.getWidth(), g.getHeight())

  shaders.text = assert(g.newShader "shader-text.txt")
end

local function copy_color(source, alpha)
  local result = {}
  for i = 1, #source do
    result[i] = source[i]
  end
  if alpha then
    result[4] = alpha
  end
  return result
end

local function draw_text(data, frame)
  local def = scenario.speakers[data.speaker]
  if not (def and def.text_font) then
    return
  end

  if frame == 0 then
    return
  end

  local debug_rectangle = false

  local text_x = 0
  local text_i = 0
  local range_x

  for i = 1, #data do
    local item = data[i]
    local text_chars = item.text_chars
    local ruby_chars = item.ruby_chars
    local ruby_x = text_x

    for j = 1, #text_chars do
      local text_char = text_chars[j]
      local text_alpha = 1

      text_i = text_i + 1
      local k = text_i * 2
      if k == frame then
        text_alpha = 1
        range_x = text_char.ex
      elseif k == frame + 1 then
        text_alpha = 0.5
        range_x = text_char.cx
      end

      text_x = text_x + text_char.margin_before

      if text_alpha < 1 then
        g.setCanvas(canvases.text_char)
        g.clear()
      end

      local border_size = def.font_border_size
      if border_size then
        for dy = -border_size, border_size do
          for dx = -border_size, border_size do
            g.print({ copy_color(def.font_border_color, text_alpha), text_char.char }, text_char.font, text_x + dx, dy)
          end
        end
      end
      g.print({ copy_color(def.font_color, text_alpha), text_char.char }, text_char.font, text_x, 0)
      if debug_rectangle then
        g.setColor { 1, 0, 0, 1 }
        g.rectangle("line", text_x, 0, text_char.width, text_char.height)
        g.setColor { 1, 1, 1, 1 }
      end

      if text_alpha < 1 then
        g.setCanvas()
        shaders.text:send("alpha", text_alpha)
        g.setShader(shaders.text)
        g.push()
        g.origin()
        g.draw(canvases.text_char, 0, 0)
        g.pop()
        g.setShader()
      end

      text_x = text_x + text_char.width + text_char.margin_after

      if range_x then
        break
      end
    end

    if ruby_chars then
      for j = 1, #ruby_chars do
        local ruby_char = ruby_chars[j]
        if range_x and ruby_char.cx >= range_x then
          break
        end

        ruby_x = ruby_x + ruby_char.margin_before

        local border_size = def.font_border_size
        if border_size then
          for dy = -border_size, border_size do
            for dx = -border_size, border_size do
              g.print({ copy_color(def.font_border_color), ruby_char.char }, ruby_char.font, ruby_x + dx, -24 + dy)
            end
          end
        end
        g.print({ copy_color(def.font_color), ruby_char.char }, ruby_char.font, ruby_x, -24)
        if debug_rectangle then
          g.setColor { 1, 0, 0, 1 }
          g.rectangle("line", ruby_x, -24, ruby_char.width, ruby_char.height)
          g.setColor { 1, 1, 1, 1 }
        end
        ruby_x = ruby_x + ruby_char.width + ruby_char.margin_after
      end
    end

    if range_x then
      break
    end
  end
end

-- フレームは0起源とする
local current_frame = 0

function love.draw()
  g.draw(textures[1], 0, 0)

  local measure_data
  local measure_frame
  local measure_frame_end

  local time = current_frame / frames_per_second
  for i = 1, #scenario_data do
    local data = scenario_data[i]
    if data.time_start <= time and time < data.time_end then
      measure_data = data
      measure_frame = math.floor((time - data.time_start) * frames_per_second + 0.5)
      measure_frame_end = math.floor((data.time_end - data.time_start) * frames_per_second + 0.5)
      break
    end
  end

  if measure_data then
    g.setCanvas(canvases.text)
    g.clear()

    g.push()
    g.translate((g.getWidth() - measure_data.text_width) / 2, (g.getHeight() - measure_data.text_height) / 2)
    draw_text(measure_data, measure_frame)
    g.pop()

    g.setCanvas()

    local n = 16
    local alpha = 1
    if measure_frame >= measure_frame_end - n then
      local beta = (measure_frame_end - measure_frame) / n
      alpha = (math.sin((beta - 0.5) * math.pi) + 1) / 2
    end
    shaders.text:send("alpha", alpha)
    g.setShader(shaders.text)
    g.draw(canvases.text, 0, 0)
    g.setShader()
  end
end

function love.keypressed(key)
  if key == "h" then
    if love.keyboard.isDown("lshift", "rshift") then
      current_frame = current_frame - 30
    else
      current_frame = current_frame - 1
    end
    print("current_frame", current_frame)
  elseif key == "l" then
    if love.keyboard.isDown("lshift", "rshift") then
      current_frame = current_frame + 30
    else
      current_frame = current_frame + 1
    end
    print("current_frame", current_frame)
  end
end
