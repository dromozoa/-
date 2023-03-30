// Copyright (C) 2023 煙人計画 <moyu@vaporoid.com>
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

addEventListener("install", ev => {
  // activate状態に移行する。
  ev.waitUntil(skipWaiting());
});

addEventListener("activate", ev => {
  // controllerになる。
  ev.waitUntil(clients.claim());
});

const regexHostname = /^(?:localhost|vaporoid\.com)$/i;
const regexPathname = /^\/sys\/[^\/]+\//;
const isCacheTarget = url => regexHostname.test(url.hostname) && regexPathname.test(url.pathname);

addEventListener("fetch", ev => {
  ev.respondWith((async () => {
    const cache = await caches.open("昭和横濱物語");
    const cachedResponse = await cache.match(ev.request);
    if (cachedResponse) {
      return cachedResponse;
    }
    const response = await fetch(ev.request);
    if (isCacheTarget(new URL(ev.request.url))) {
      cache.put(ev.request, response.clone());
    }
    return response;
  })());
});

})();
