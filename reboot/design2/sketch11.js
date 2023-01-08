// Copyright (C) 2022 Tomoyuki Fujimori <moyu@dromozoa.com>
//
// This file is part of 昭和横濱物語.
//
// 昭和横濱物語 is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// 昭和横濱物語 is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with 昭和横濱物語.  If not, see <http://www.gnu.org/licenses/>.

(() => {
"use strict";

const updateScene1 = () => {
  document.querySelector(".scene1 .output-client-width").textContent = document.documentElement.clientWidth;
  document.querySelector(".scene1 .output-client-height").textContent = document.documentElement.clientHeight;
  document.querySelector(".scene1 .output-inner-width").textContent = window.innerWidth;
  document.querySelector(".scene1 .output-inner-height").textContent = window.innerHeight;
};

document.addEventListener("DOMContentLoaded", () => {
  updateScene1();
  window.scroll(0, 320);

}, { once: true });

window.addEventListener("resize", () => {
  updateScene1();
});

window.addEventListener("orientationchange", () => {
  updateScene1();
});

})();
