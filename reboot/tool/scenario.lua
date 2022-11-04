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

local basename = require "basename"
local dirname = require "dirname"
local parse = require "parse"
local quote_html = require "quote_html"

local scenario_pathname = ...
local scenario_dirname = dirname(scenario_pathname)
local scenario_filename = basename(scenario_pathname)
local scenario = parse(scenario_dirname, scenario_filename)












local buffer = {}
for _, paragraph in ipairs(scenario) do
  io.write "<div>\n"
  for i, line in ipairs(paragraph) do
    for _, v in ipairs(line) do
      if type(v) == "string" then
        io.write("<span>", quote_html(v), "</span>")
      elseif v.ruby then
        io.write("<ruby>", quote_html(v[1]), "<rt>", quote_html(v.ruby), "</rt></ruby>")
      else
        io.write("<span>", quote_html(v[1]), "</span>")
      end
    end
    if i < #paragraph then
      io.write "<br>"
    end
    io.write "\n"
  end
  io.write "</div>\n"
end
