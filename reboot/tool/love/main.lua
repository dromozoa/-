-- Copyright (C) 2022 Tomoyuki Fujimori <moyu@dromozoa.com>
--
-- This file is part of 昭和横濱物語.
--
-- 昭和横濱物語 is free software: you can redistribute it and/or modify
-- it under the terms of the GNU General Public License as published by
-- the Free Software Foundation, either version 3 of the License, or
-- (at your option) any later version.
--
-- 昭和横濱物語 is distributed in the hope that it will be useful,
-- but WITHOUT ANY WARRANTY; without even the implied warranty of
-- MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
-- GNU General Public License for more details.
--
-- You should have received a copy of the GNU General Public License
-- along with 昭和横濱物語.  If not, see <http://www.gnu.org/licenses/>.

package.path = "../?.lua;"..package.path
local basename = require "basename"
local table_unpack = table.unpack or unpack

--------------------------------------------------------------------------------

local function new_byte_data(pathname)
  -- love.filesystemの外のファイルを扱うためにネイティブ入出力を用いる。
  local handle = assert(io.open(pathname, "rb"))
  local byte_data = love.data.newByteData(handle:read "*a")
  handle:close()
  return byte_data
end

local function new_file_data(pathname)
  return love.filesystem.newFileData(new_byte_data(pathname), basename(pathname))
end

local function new_image_data(pathname)
  return love.image.newImageData(new_file_data(pathname))
end

local function write_image_data(image_data, pathname)
  -- https://love2d.org/wiki/ImageEncodeFormat
  local format = assert(pathname:match "[^.]+$"):lower()
  assert(format == "tga" or format == "png")
  local data = image_data:encode(format)
  local handle = assert(io.open(pathname, "wb"))
  handle:write(data:getString())
  handle:close()
end

--------------------------------------------------------------------------------

local function luminance(r, g, b, a)
  -- libpngのマニュアルで引用されている式を使う。
  -- https://poynton.ca/notes/colour_and_gamma/ColorFAQ.html#RTFToC9
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) * a
end

local function binarize(image_data, fn)
  -- love.graphicsを使わないのでヘッドレスで処理できる。
  local image_data = image_data:clone()
  local W = image_data:getWidth()
  local H = image_data:getHeight()

  for j = 0, H - 1 do
    for i = 0, W - 1 do
      if fn(luminance(image_data:getPixel(i, j))) then
        image_data:setPixel(i, j, 1, 1, 1, 1)
      else
        image_data:setPixel(i, j, 0, 0, 0, 0)
      end
    end
  end

  return image_data
end

local function scanline(image_data, fn)
  -- 二値画像を線分の集合に変換する。
  local W = image_data:getWidth()
  local H = image_data:getHeight()

  -- 画素(i,j)が左上(i,j)が右下(i+1,j+1)の正方形で表されるような座標系で表現する。
  local line_data = {
    width = W + 1;
    height = H + 1;
  }

  -- 全体の重心を計算する
  local gx = 0
  local gy = 0
  local gn = 0

  for j = 0, H - 1 do
    local lines = { y1 = j, y2 = j + 1}
    local x1
    -- 各行の重心を計算する
    local m = 0
    local n = 0

    local u = false
    for i = 0, W do
      local v = false
      if i < W then
        v = fn(luminance(image_data:getPixel(i, j)))
      end

      if v then
        if not u then
          assert(not x1)
          x1 = i
        end

        m = m + i + 0.5
        n = n + 1

        gx = gx + i + 0.5
        gy = gy + j + 0.5
        gn = gn + 1

      elseif u then
        local x2 = i
        lines[#lines + 1] = { x1 = x1, x2 = x2 }
        x1 = nil
      end

      u = v
    end

    if n > 0 then
      lines.gx = m / n
    end
    lines.gy = j + 0.5
    lines.n = n

    line_data[#line_data + 1] = lines
  end

  assert(gn > 0)
  line_data.gx = gx / gn
  line_data.gy = gy / gn

  -- 各行の重心から、最小二乗法で軸となる直線x=ay+bを求める。
  local sum_x = 0
  local sum_y = 0
  local sum_xy = 0
  local sum_yy = 0
  local n = 0

  for _, lines in ipairs(line_data) do
    if lines.gx then
      local x = lines.gx
      local y = lines.gy
      sum_x = sum_x + x
      sum_y = sum_y + y
      sum_xy = sum_xy + x * y
      sum_yy = sum_yy + y * y
      n = n + 1
    end
  end

  local d = n * sum_yy - sum_y * sum_y
  local a = (n * sum_xy - sum_x * sum_y) / d
  local b = (sum_x * sum_yy - sum_y * sum_xy) / d
  line_data.axis = { a = a, b = b }

  for _, lines in ipairs(line_data) do
    if not lines.gx then
      lines.gx = a * lines.gy + b
    end
  end

  return line_data
end

--------------------------------------------------------------------------------

local commands = {}

local operators = {
  ["=="] = function (a, b) return a == b end;
  ["~="] = function (a, b) return a ~= b end;
  ["<="] = function (a, b) return a <= b end;
  [">="] = function (a, b) return a >= b end;
  ["<"] = function (a, b) return a < b end;
  [">"] = function (a, b) return a > b end;
}

function commands.binarize(expression, source_pathname, target_pathname)
  local op, b = assert(expression:match "^%s*([=~<>]+)%s*(.*)$")
  local fn = assert(operators[op])
  local b = assert(tonumber(b))

  local source_image_data = new_image_data(source_pathname)
  local result_image_data = binarize(source_image_data, function (a) return fn(a, b) end)
  write_image_data(result_image_data, target_pathname)
end

function commands.scanline(expression, source_pathname, target_pathname)
  local op, b = assert(expression:match "^%s*([=~<>]+)%s*(.*)$")
  local fn = assert(operators[op])
  local b = assert(tonumber(b))

  local image_data = new_image_data(source_pathname)
  local line_data = scanline(image_data, function (a) return fn(a, b) end)
  local W = line_data.width
  local H = line_data.height

  local handle = assert(io.open(target_pathname, "wb"))
  handle:write('<svg xmlns="http://www.w3.org/2000/svg" width="', W, '" height="', H, '" viewBox="0 0 ', W, ' ', H, '">\n')
  handle:write [[
<defs>
  <radialGradient id="gravity-center">
    <stop offset="0%" stop-color="#f00" stop-opacity="1" />
    <stop offset="100%" stop-color="#f00" stop-opacity="0" />
  </radialGradient>
  <style>
    rect.line {
      fill: #666;
    }
    circle.gravity-center {
      fill: url(#gravity-center);
    }
    line.axis {
      stroke: #000;
    }
  </style>
</defs>
]]

  for _, lines in ipairs(line_data) do
    local y1 = lines.y1
    local y2 = lines.y2
    for _, line in ipairs(lines) do
      local x1 = line.x1
      local x2 = line.x2
      handle:write('<rect x="', x1, '" y="', y1, '" width="', x2 - x1, '" height="', y2 - y1, '" class="line"/>\n')
    end
  end

  -- 各行の重心
  for _, lines in ipairs(line_data) do
    if lines.gx then
      handle:write('<circle cx="', lines.gx, '" cy="', lines.gy, '" r="2" class="gravity-center"/>\n')
    end
  end

  -- 全体の重心
  handle:write('<circle cx="', line_data.gx, '" cy="', line_data.gy, '" r="8" class="gravity-center"/>\n')

  -- 軸となる直線x=ay+b
  local a = line_data.axis.a
  local b = line_data.axis.b
  handle:write('<line x1="', a + b, '" y1="0" x2="', a * H + b, '" y2="', H, '" class="axis"/>\n')

  handle:write '</svg>\n'
  handle:close()
end

--------------------------------------------------------------------------------

local class = {}
local game = {}

local function prepare_silhouette(pathname)
  local image_data = new_image_data(pathname)

  local line_data = scanline(image_data, function (y) return y > 0.5 end)
  local image = love.graphics.newImage(image_data)
  return {
    pathaname = pathaname;
    line_data = line_data;
    image_data = image_data;
    image = image;
  }
end

function class.play(...)
  game.frame = 0
  game.silhouettes = {...}
  for i, pathname in ipairs(game.silhouettes) do
    game.silhouettes[i] = prepare_silhouette(pathname)
  end
  game.font = love.graphics.newFont(love.font.newRasterizer("ShareTech-Regular.ttf", 20))
end

function love.load(arg)
  local command = commands[arg[1]]
  if command then
    command(table_unpack(arg, 2))
    love.event.quit()
    return
  end

  class.play(table_unpack(arg, 2))
end

local function compare_length(a, b)
  local t = a.x2 - a.x1
  local u = b.x2 - b.x1
  if t == u then
    return a.x1 < b.x1
  else
    return t < u
  end
end

local function compare_x(a, b)
  if a.x1 == b.x1 then
    return a.x2 < b.x2
  else
    return a.x1 < b.x1
  end
end

local seed_x = 1000 * love.math.random()
local seed_y = 1000 * love.math.random()
local seed_z = 1000 * love.math.random()
local m = 2
local reseed = true

function love.draw()
  local g = love.graphics

  if reseed then
    seed_x = 1000 * love.math.random()
    seed_y = 1000 * love.math.random()
    seed_z = 1000 * love.math.random()
  end

  local silhouettes = {
    -- { 0, 1 }; { 1, 2 }; { 2, 1 };

    { 0, 1 };
    { 1, 1 };
    { 1, 2 };
    { 2, 2 };
    { 2, 1 };
    { 1, 0 };
    { 0, 2 };
    { 2, 0 };
  }
  local i = math.floor(game.frame / 120)
  local j = i % #silhouettes + 1
  local prev = silhouettes[j][1]
  local this = silhouettes[j][2]
  prev = game.silhouettes[prev]
  this = game.silhouettes[this]

  local t = math.min((game.frame % 120) / 79, 1)
  local p = (1 - math.cos(math.pi * t)) * 0.5
  local q = 1 - p
  local scale = 400

  local colors = {
    { 1, 0, 0 };
    { 0, 1, 0 };
    { 0, 0, 1 };
  }

  -- #029D93
  -- local colors = {
  --   { 0x02/0xFF, 0, 0 };
  --   { 0, 0x9D/0xFF, 0 };
  --   { 0, 0, 0x93/0xFF };
  -- }

  -- local colors = {
  --   { 1, 1, 1 };
  -- }

  local W, H = love.window.getMode()
  g.push()
  g.translate((W - game.silhouettes[1].image_data:getWidth()) * 0.5, (H - game.silhouettes[1].image_data:getHeight()) * 0.5)

  g.clear()
  g.setLineWidth(1)
  g.setLineStyle "rough"

  local blend_mode = g.getBlendMode()
  g.setBlendMode "add"
  if prev and this then
    assert(#prev.line_data == #this.line_data)

    if true then

      for j = 1, #prev.line_data, m do
        local prev_lines = prev.line_data[j]
        local this_lines = this.line_data[j]
        local y = this_lines.y1

        -- どちらかに線分がなければ、中点を基準とする。
        if #this_lines == 0 then
          for i, line in ipairs(prev_lines) do
            for c, color in ipairs(colors) do
              local x1 = line.x1
              local x2 = line.x2
              local x3 = (x1 + x2) * 0.5
              x1 = x3 + (x1 - x3) * q
              x2 = x3 + (x2 - x3) * q
              x1 = x1 + scale * (1 - q) * (love.math.noise(seed_x * x1, seed_y * y, seed_z * c) - 0.5) * 2
              x2 = x2 + scale * (1 - q) * (love.math.noise(seed_x * x2, seed_y * y, seed_z * c) - 0.5) * 2
              g.setColor(color[1] * q, color[2] * q, color[3] * q)
              -- g.setColor(color[1], color[2], color[3])
              g.line(x1, y, x2, y)
            end
          end
        elseif #prev_lines == 0 then
          for i, line in ipairs(this_lines) do
            for c, color in ipairs(colors) do
              local x1 = line.x1
              local x2 = line.x2
              local x3 = (x1 + x2) * 0.5
              x1 = x3 + (x1 - x3) * p
              x2 = x3 + (x2 - x3) * p
              x1 = x1 + scale * (1 - p) * (love.math.noise(seed_x * x1, seed_y * y, seed_z * c) - 0.5) * 2
              x2 = x2 + scale * (1 - p) * (love.math.noise(seed_x * x2, seed_y * y, seed_z * c) - 0.5) * 2
              g.setColor(color[1] * p, color[2] * p, color[3] * p)
              -- g.setColor(color[1], color[2], color[3])
              g.line(x1, y, x2, y)
            end
          end
        else
          local P = {}
          local Q = {}
          for i, line in ipairs(prev_lines) do
            P[i] = { x1 = line.x1, x2 = line.x2 }
          end
          for i, line in ipairs(this_lines) do
            Q[i] = { x1 = line.x1, x2 = line.x2 }
          end

          table.sort(P, compare_length)
          table.sort(Q, compare_length)

          -- 線分が少ないほうのいちばん長い線分を分割する
          while #P < #Q do
            local t = P[#P]
            local x = (t.x1 + t.x2) * 0.5
            local u = { x1 = x, x2 = t.x2 }
            t.x2 = x
            P[#P + 1] = u
            table.sort(P, compare_length)
          end

          while #Q < #P do
            local t = Q[#Q]
            local x = (t.x1 + t.x2) * 0.5
            local u = { x1 = x, x2 = t.x2 }
            t.x2 = x
            Q[#Q + 1] = u
            table.sort(Q, compare_length)
          end

          table.sort(P, compare_x)
          table.sort(Q, compare_x)

          local r = (math.max(p, q) - 0.5) * 2
          -- assert(r >= 0.5)

          for i = 1, #P do
            local prev_line = P[i]
            local this_line = Q[i]

            for c, color in ipairs(colors) do
              local x1 = prev_line.x1 * q + this_line.x1 * p
              local x2 = prev_line.x2 * q + this_line.x2 * p
              x1 = x1 + scale * (1 - r) * (love.math.noise(seed_x * x1, seed_y * y, seed_z * c) - 0.5) * 2
              x2 = x2 + scale * (1 - r) * (love.math.noise(seed_x * x2, seed_y * y, seed_z * c) - 0.5) * 2
              g.setColor(color[1], color[2], color[3])
              g.line(x1, y, x2, y)
            end
          end

        end
      end

    else

      for j = 1, #prev.line_data, m do
        local lines = prev.line_data[j]
        local y = lines.y1
        for i, line in ipairs(lines) do
          for c, color in ipairs(colors) do
            local x1 = line.x1
            local x2 = line.x2
            local x3 = (x1 + x2) * 0.5
            x1 = x3 + (x1 - x3) * q
            x2 = x3 + (x2 - x3) * q
            x1 = x1 + scale * (1 - q) * (love.math.noise(seed_x * x1, seed_y * y, seed_z * c) - 0.5) * 2
            x2 = x2 + scale * (1 - q) * (love.math.noise(seed_x * x2, seed_y * y, seed_z * c) - 0.5) * 2
            g.setColor(color[1] * q, color[2] * q, color[3] * q)
            -- g.setColor(color[1], color[2], color[3])
            g.line(x1, y, x2, y)
          end
        end
      end

      for j = 1, #this.line_data, m do
        local lines = this.line_data[j]
        local y = lines.y1
        for i, line in ipairs(lines) do
          for c, color in ipairs(colors) do
            local x1 = line.x1
            local x2 = line.x2
            local x3 = (x1 + x2) * 0.5
            x1 = x3 + (x1 - x3) * p
            x2 = x3 + (x2 - x3) * p
            x1 = x1 + scale * (1 - p) * (love.math.noise(seed_x * x1, seed_y * y, seed_z * c) - 0.5) * 2
            x2 = x2 + scale * (1 - p) * (love.math.noise(seed_x * x2, seed_y * y, seed_z * c) - 0.5) * 2
            g.setColor(color[1] * p, color[2] * p, color[3] * p)
            g.line(x1, y, x2, y)
          end
        end
      end

    end

  elseif prev then
    for j = 1, #prev.line_data, m do
      local lines = prev.line_data[j]
      local y = lines.y1
      for i, line in ipairs(lines) do
        for c, color in ipairs(colors) do
          local x1 = line.x1
          local x2 = line.x2
          local x3 = (x1 + x2) * 0.5
          x1 = x3 + (x1 - x3) * q
          x2 = x3 + (x2 - x3) * q
          x1 = x1 + scale * (1 - q) * (love.math.noise(seed_x * x1, seed_y * y, seed_z * c) - 0.5) * 2
          x2 = x2 + scale * (1 - q) * (love.math.noise(seed_x * x2, seed_y * y, seed_z * c) - 0.5) * 2
          g.setColor(color[1] * q, color[2] * q, color[3] * q)
          g.line(x1, y, x2, y)
        end
      end
    end
  elseif this then
    for j = 1, #this.line_data, m do
      local lines = this.line_data[j]
      local y = lines.y1
      for i, line in ipairs(lines) do
        for c, color in ipairs(colors) do
          local x1 = line.x1
          local x2 = line.x2
          local x3 = (x1 + x2) * 0.5
          x1 = x3 + (x1 - x3) * p
          x2 = x3 + (x2 - x3) * p
          x1 = x1 + scale * (1 - p) * (love.math.noise(seed_x * x1, seed_y * y, seed_z * c) - 0.5) * 2
          x2 = x2 + scale * (1 - p) * (love.math.noise(seed_x * x2, seed_y * y, seed_z * c) - 0.5) * 2
          g.setColor(color[1] * p, color[2] * p, color[3] * p)
          g.line(x1, y, x2, y)
        end
      end
    end
  end
  g.setBlendMode(blend_mode)
  g.pop()

  if game.fps then
    g.setColor(1, 1, 1)
    g.print("FPS: "..love.timer.getFPS(), game.font, 20, 20)
  end

  if game.running then
    game.frame = game.frame + 1
    -- if game.frame % 120 == 0 then
    --   game.running = false
    --   game.frame = game.frame - 1
    --   local t = love.timer.getTime() - game.start
    --   game.start = nil
    --   print("elapsed: "..t)
    -- end
  end
end

function love.keypressed(key)
  if key == "h" then
    -- vi風のキーバインド
    game.frame = game.frame - 1
  elseif key == "l" then
    -- vi風のキーバインド
    game.frame = game.frame + 1
  elseif key == "f" then
    game.fps = not game.fps
  elseif key == "s" then
    game.running = not game.running
    if game.running then
      game.frame = math.floor((game.frame + 1) / 120) * 120
      game.start = love.timer.getTime()
    end
  end
end

function love.quit()
end
