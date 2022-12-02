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

const D = globalThis.demeter ||= {};
if (D.includeGuard) {
  return;
}
D.includeGuard = true;

//-------------------------------------------------------------------------

D.requestAnimationFrame = () => new Promise(resolve => requestAnimationFrame(resolve));

const escapeHTMLTable = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
};

D.escapeHTML = source => source.replace(/[&<>"']/g, match => escapeHTMLTable[match]);

D.createElement = html => {
  const template = document.createElement("template");
  template.innerHTML = html;
  return template.content.firstElementChild;
};

D.createElements = html => {
  const template = document.createElement("template");
  template.innerHTML = html;
  return template.content.children;
};

D.numberToCssString = source => {
  if (-0.00005 < source && source < 0.00005) {
    return "0";
  } else {
    return source.toFixed(4).replace(/\.?0$/, "");
  }
};

//-------------------------------------------------------------------------

let bootException;
let booted;
let bootedFutures = [];

D.boot = async () => {
  return new Promise((resolve, reject) => {
    if (booted) {
      if (bootException === undefined) {
        resolve();
      } else {
        reject(bootException);
      }
    } else {
      bootedFutures.push({ resolve: resolve, reject: reject });
    }
  });
};

document.addEventListener("DOMContentLoaded", async () => {
  try {
    initializeInternalRoot();
    await Promise.all([ checkKerning() ]);
  } catch (e) {
    bootException = e;
  }
  booted = true;

  if (bootException === undefined) {
    bootedFutures.forEach(future => future.resolve());
  } else {
    bootedFutures.forEach(future => future.reject(bootException));
  }
  bootedFutures = undefined;
}, { once: true });

//-------------------------------------------------------------------------

let internalRoot;
let internalCanvas;
let internalLayout;

const initializeInternalRoot = () => {
  internalRoot = document.body.appendChild(D.createElement(`
    <div style="
      position: absolute;
      width: auto;
      height: auto;
      top: -1989px;
      left: -6417px;
    "></div>
  `)).attachShadow({ mode: "closed" });

  const view = internalRoot.appendChild(D.createElement(`
    <div>
      <div><canvas></canvas></div>
      <div style="
        position: relative;
        width: auto;
        height: auto;
      "></div>
    </div>
  `));
  internalCanvas = view.firstElementChild.firstElementChild;
  internalLayout = view.children[1];
};

//-------------------------------------------------------------------------

// Showa Yokohama Storyフォントは
//   U+E001:   800/1000
//   U+E002:   900/1000
//   Kerning: -300/1000
// という寸法を持つ。フォントサイズが100pxのとき、カーニングが有効ならば、文字
// 列"\uE001\uE0002"は幅140pxになる。

const checkKerning = async () => {
  const index = [...document.fonts].findIndex(fontFace => /Showa Yokohama Story/.test(fontFace.family));
  if (index === -1) {
    throw new Error("font-face 'Showa Yokohama Story' not found");
  }
  if ((await D.loadFontFace(index, 1000)).status !== "loaded") {
    throw new Error("font-face 'Showa Yokohama Story' not loaded");
  }

  const context = internalCanvas.getContext("2d");
  context.font = "100px 'Showa Yokohama Story'";
  D.featureKerning = Math.abs(context.measureText("\uE001\uE002").width - 140) < 1;
};

//-------------------------------------------------------------------------

// Firefox 107でFontFace.load()の返り値が（FontFace.loadedも）決定されない場合
// があった。FontFaceが新しい別のオブジェクトにさしかえられ、プロミスが迷子にな
// っているように見えた。そのため、ポーリングしてdocument.facesを監視することに
// した。

D.loadFontFace = async (index, timeout) => {
  const fontFace = [...document.fonts][index];
  if (fontFace.status === "loaded") {
    return { status: "loaded", elapsed: 0 };
  }
  fontFace.load();

  const start = await D.requestAnimationFrame();
  if ([...document.fonts][index].status === "loaded") {
    return { status: "loaded", elapsed: 0 };
  }

  if (!timeout || timeout < 0) {
    timeout = Infinity;
  }

  while (true) {
    const elapsed = await D.requestAnimationFrame() - start;
    if ([...document.fonts][index].status === "loaded") {
      return { status: "loaded", elapsed: elapsed };
    }
    if (timeout < elapsed) {
      return { status: "timeout", elapsed: elapsed };
    }
  }
};

D.loadFontFaces = async (timeout) => {
  const fontFaces = [...document.fonts].filter(fontFace => fontFace.status !== "loaded");
  if (fontFaces.length === 0) {
    return { status: "loaded", elapsed: 0 };
  }
  fontFaces.forEach(fontFace => fontFace.load());

  const start = await D.requestAnimationFrame();
  if ([...document.fonts].every(fontFace => fontFace.status === "loaded")) {
    return { status: "loaded", elapsed: 0 };
  }

  if (!timeout || timeout < 0) {
    timeout = Infinity;
  }

  while (true) {
    const elapsed = await D.requestAnimationFrame() - start;
    if ([...document.fonts].every(fontFace => fontFace.status === "loaded")) {
      return { status: "loaded", elapsed: elapsed };
    }
    if (timeout < elapsed) {
      return { status: "timeout", elapsed: elapsed };
    }
  }
};

//-------------------------------------------------------------------------

const isWhiteSpace = u => (
  // " " (SPACE)
  u === 0x20
  // "\t" (CHARACTER TABULATION)
  || u === 0x09
  // "\n" (LINE FEED)
  || u === 0x0A
  // "\r" (CARRIAGE RETURN)
  || u === 0x0D
) ? 1 : 0;

const canBreak = (u, v) => (
  // 行頭禁則
  D.jlreq.isLineStartProhibited(v)
  // 行末禁則
  || D.jlreq.isLineEndProhibited(u)
  // 連続するダッシュ・三点リーダ・二点リーダ
  || u === v && (u === 0x2014 || u === 0x2026 || u === 0x2025)
  // くの字
  || (u === 0x3033 || u === 0x3034) && v === 0x3035
  // 前置省略記号とアラビア数字
  || D.jlreq.isPrefixedAbbreviation(u) && 0x30 <= v && v <= 0x39
  // アラビア数字と後置省略記号
  || 0x30 <= u && u <= 0x39 && D.jlreq.isPostfixedAbbreviation(v)
  // 連続する欧文用文字
  || D.jlreq.isWesternCharacter(u) && D.jlreq.isWesternCharacter(v)
) ? 0 : 1;

//-------------------------------------------------------------------------

const parseChars = (source, fontSize, font) => {
  const context = internalCanvas.getContext("2d");
  context.font = `${D.numberToCssString(fontSize)}px ${font}`;
  return [...source].map(char => {
    const code = char.codePointAt(0);
    const width = context.measureText(char).width;
    return {
      char: char,
      code: code,
      width: width,
      advance: width,
      kerning: 0,
      spacingBudget: 0,
      spacingBudgeted: 0,
      spacingFallback: 0,
      spacing1: 0,
      spacing2: 0,
    };
  });
};

const updateChars = (source, fontSize, font) => {
  const context = internalCanvas.getContext("2d");
  context.font = `${D.numberToCssString(fontSize)}px ${font}`;
  source.forEach((u, i) => {
    const v = source[i + 1];
    if (v) {
      u.advance = context.measureText(u.char + v.char).width - v.width;
      u.kerning = u.width - u.advance;
      u.spacingBudget = fontSize * 0.25 * (isWhiteSpace(u.code) || canBreak(u.code, v.code));
    } else {
      u.spacingBudget = fontSize * 0.25;
    }
  });
};

const parseParagraphBreakTable = {
  "BR": true,
  "DIV": true,
  "P": true,
};

D.parseParagraph = (source, fontSize, font) => {
  const rubyFontSize = fontSize * 0.5;
  const result = [];
  let text;
  let item;

  const parse = node => {
    switch (node.nodeType) {
      case Node.ELEMENT_NODE:
        if (node.tagName === "RT") {
          updateChars(item.ruby = parseChars(node.textContent, rubyFontSize, font), rubyFontSize, font);
        } else {
          node.childNodes.forEach(parse);
          if (parseParagraphBreakTable[node.tagName]) {
            text = undefined;
          }
        }
        break;
      case Node.TEXT_NODE:
        if (!text) {
          result.push(text = { items: [], fontSize: fontSize, font: font });
        }
        text.items.push(item = {
          main: parseChars(node.textContent, fontSize, font),
          rubyOverhangPrev: 0,
          rubyOverhangNext: 0,
        });
        break;
    };
  };
  parse(source);

  result.forEach(text => updateChars(text.items.map(item => item.main).flat(), fontSize, font));

  return result;
};

//-------------------------------------------------------------------------

const setSpacingBudgeted = (source, request, tolerance) => {
  const remaining = source.reduce((acc, u) => acc + u.spacingBudget, 0);
  if (remaining <= request) {
    source.forEach(u => u.spacingBudgeted = u.spacingBudget);
    return request - remaining;
  }

  let spacing = request / source.length;
  if (spacing <= source.reduce((acc, u) => Math.min(acc, u.spacingBudget), Infinity)) {
    source.forEach(u => u.spacingBudgeted = spacing);
    return 0;
  }
  let lower = spacing;
  let upper = source.reduce((acc, u) => Math.max(acc, u.spacingBudget), -Infinity);
  let actual;

  for (let cycle = 0; cycle < 16; ++cycle) {
    spacing = (lower + upper) * 0.5;
    actual = source.reduce((acc, u) => acc + Math.min(spacing, u.spacingBudget), 0);
    if (Math.abs(request - actual) <= tolerance) {
      break;
    } else if (request > actual) {
      lower = spacing;
    } else {
      upper = spacing;
    }
  }

  source.forEach(u => u.spacingBudgeted = Math.min(spacing, u.spacingBudget));
  return request - actual;
};

const setSpacingFallback = (source, request) => {
  const spacing = request / source.length;
  source.forEach(u => u.spacingFallback = spacing);
};

const setSpacing = (source, request, tolerance) => {
  if (request > tolerance) {
    request = setSpacingBudgeted(source.filter(u => isWhiteSpace(u.code)), request, tolerance);
    if (request > tolerance) {
      request = setSpacingBudgeted(source.filter(u => !isWhiteSpace(u.code) && u.spacingBudget > 0), request, tolerance);
      if (request > tolerance) {
        setSpacingFallback(source, request);
      }
    }
  }
  source.forEach(u => u.spacing1 = u.spacingBudgeted + u.spacingFallback);
};

//-------------------------------------------------------------------------

const addSpacingBudgeted = (source, request, tolerance) => {
  const remaining = source.reduce((acc, u) => acc + u.spacingBudget - u.spacingBudgeted, 0);
  if (remaining <= request) {
    source.forEach(u => u.spacingBudgeted = u.spacingBudget);
    return request - remaining;
  }

  let spacing = request / source.length;
  let lower = source.reduce((acc, u) => Math.min(acc, u.spacingBudgeted), Infinity) + spacing;
  let upper = source.reduce((acc, u) => Math.max(acc, u.spacingBudget), -Infinity);
  let actual;

  for (let cycle = 0; cycle < 16; ++cycle) {
    spacing = (lower + upper) * 0.5;
    actual = source.reduce((acc, u) => acc + Math.max(0, Math.min(spacing, u.spacingBudget) - u.spacingBudgeted), 0);
    if (Math.abs(request - actual) <= tolerance) {
      break;
    } else if (request > actual) {
      lower = spacing;
    } else {
      upper = spacing;
    }
  }

  source.forEach(u => u.spacingBudgeted = Math.max(Math.min(spacing, u.spacingBudget), u.spacingBudgeted));
  return request - actual;
};

const addSpacingFallback = (source, request, tolerance) => {
  let spacing = request / source.length;
  let lower = source.reduce((acc, u) => Math.min(acc, u.spacingFallback), Infinity) + spacing;
  let upper = source.reduce((acc, u) => Math.max(acc, u.spacingFallback), -Infinity) + spacing;

  for (let cycle = 0; cycle < 16; ++cycle) {
    spacing = (lower + upper) * 0.5;
    const actual = source.reduce((acc, u) => acc + Math.max(0, spacing - u.spacingFallback), 0);
    if (Math.abs(actual - request) <= tolerance) {
      break;
    } else if (actual > request) {
      upper = spacing;
    } else {
      lower = spacing;
    }
  }

  source.forEach(u => u.spacingFallback = Math.max(spacing, u.spacingFallback));
};

const addSpacing = (source, request, tolerance) => {
  if (request > tolerance) {
    request = addSpacingBudgeted(source.filter(u => isWhiteSpace(u.code)), request, tolerance);
    if (request > tolerance) {
      request = addSpacingBudgeted(source.filter(u => !isWhiteSpace(u.code) && u.spacingBudget > 0), request, tolerance);
      if (request > tolerance) {
        addSpacingFallback(source, request, tolerance);
      }
    }
  }
  source.forEach(u => u.spacing2 = u.spacingBudgeted + u.spacingFallback - u.spacing1);
};

//-------------------------------------------------------------------------

const getRubyOverhang = u => u && D.jlreq.canRubyOverhang(u.code) ? u.advance * 0.5 : 0;

const updateItem = (prev, item, next) => {
  if (item.ruby) {
    const mainWidth = item.main.reduce((width, u) => width + u.advance, 0);
    const rubyWidth = item.ruby.reduce((width, u) => width + u.advance, 0) + item.ruby.slice(-1)[0].kerning;

    const rubyOverhangPrev = getRubyOverhang(prev && !prev.ruby && prev.main.slice(-1)[0]);
    const rubyOverhangNext = getRubyOverhang(next && !next.ruby && next.main[0]);
    const rubyOverhangSum = rubyOverhangPrev + rubyOverhangNext;
    const rubyOverhang = Math.max(0, Math.min(rubyWidth - mainWidth, rubyOverhangSum));
    const rubyOverhangRatio = rubyOverhangSum > 0 ? rubyOverhang / rubyOverhangSum : 0;

    const spacing = rubyWidth - mainWidth - rubyOverhang;
    setSpacing(spacing > 0 ? item.main : item.ruby, Math.abs(spacing), 0.25);

    item.rubyOverhangPrev = rubyOverhangPrev * rubyOverhangRatio;
    item.rubyOverhangNext = rubyOverhangNext * rubyOverhangRatio;
  } else {
    item.rubyOverhangPrev = 0;
    item.rubyOverhangNext = 0;
  }
};

//-------------------------------------------------------------------------

// 改行「直前」の文字の位置を求める。
const breakMain = (source, maxWidth) => {
  // 行に入りきらない最初の文字の位置を求める。
  let advance = 0;
  const limit = source.findIndex(u => maxWidth < (advance += u.advance + u.spacing1) + u.kerning);
  // 空行が生成されても一文字は含める。
  if (limit < 1) {
    return source.length === 1 ? -1 : limit;
  }
  // 分割禁止規則を考慮して改行位置を求める。
  const index = source.slice(1, limit + 1).findLastIndex((v, i) => canBreak(source[i].code, v.code));
  // 行の末尾が空白の場合は次の行に送る。
  return index === -1 ? limit - 1 : Math.max(0, index - isWhiteSpace(source[index].code));
};

// 改行「直後」の文字の位置を求める。
const breakRuby = (source, maxWidth) => {
  // 文字の左右にアキを配分して、行に入りきらない最初の文字の位置を求める。
  let advance = 0;
  const limit = source.findIndex(u => maxWidth < (advance += u.advance + u.spacing1) + u.kerning - u.spacing1 * 0.5);
  // 分割禁止規則を考慮して改行位置を求める。
  const index = source.slice(1, limit + 1).findLastIndex((v, i) => canBreak(source[i].code, v.code));
  // 行の末尾が空白の場合は次の行に送る。
  return index === -1 ? limit : index - isWhiteSpace(source[index].code) + 1;
};

//-------------------------------------------------------------------------

D.composeText = (source, maxWidth) => {
  const lines = [];
  let line1 = [...source.items];
  let line2 = [];

  while (true) {
    line1.forEach((item, i) => updateItem(line1[i - 1], item, line1[i + 1]));

    while (true) {
      let mainIndex = breakMain(line1.map(item => item.main).flat(), maxWidth);
      if (mainIndex === -1) {
        break;
      }
      const itemIndex = line1.findIndex(item => {
        if (mainIndex < item.main.length) {
          return true;
        } else {
          mainIndex -= item.main.length;
          return false;
        }
      });

      const item = line1[itemIndex];
      if (mainIndex === item.main.length - 1) {
        if (item.rubyOverhangNext > 0) {
          updateItem(line1[itemIndex - 1], item, undefined);
          continue;
        }
        line2 = [ ...line1.splice(itemIndex + 1), ...line2 ];
        break;
      }

      const item1 = {
        main: item.main.slice(0, mainIndex + 1),
        rubyOverhangPrev: item.rubyOverhangPrev,
        rubyOverhangNext: 0,
      };

      const item2 = {
        main: item.main.slice(mainIndex + 1),
        rubyOverhangPrev: 0,
        rubyOverhangNext: item.rubyOverhangNext,
      };

      line2 = [ item2, ...line1.splice(itemIndex + 1), ...line2 ];
      line1.pop();
      line1.push(item1);

      if (item.ruby) {
        const width = item1.main.reduce((width, u) => width + u.advance + u.spacing1, 0) + item1.main.slice(-1)[0].kerning + item.rubyOverhangPrev;
        const index = breakRuby(item.ruby, width);
        if (index === -1) {
          item1.ruby = item.ruby;
        } else {
          if (index > 0) {
            item1.ruby = item.ruby.slice(0, index);
          }

          // ルビの行頭の空白を削除する。
          const ruby = item.ruby.slice(index);
          if (isWhiteSpace(ruby[0].code)) {
            ruby.shift();
          }
          if (ruby.length > 0) {
            item2.ruby = ruby;
          }
        }
      }

      updateItem(line1[itemIndex - 1], item1, undefined);
      break;
    }

    lines.push(line1);
    if (line2.length === 0) {
      break;
    }

    // 本文の行頭の空白を削除する。
    const item = line2[0];
    if (isWhiteSpace(item.main[0].code)) {
      if (item.main.length === 1) {
        if (!item.ruby) {
          line2.shift();
        }
      } else {
        item.main.shift();
      }
    }

    line1 = line2;
    line2 = [];
  }

  // 文字の位置を確定させる。
  // 本文の位置を決める。
  // 本文の位置に合わせて、ルビの位置を決め直す。

  lines.slice(0, -1).forEach(line => {
    if (line.length === 1) {
      // ひとつのルビで行が埋まっている場合、ルビ文字を均等割りする必要がある。
      const item = line[0];
      const chars = [...item.main];
      const width = chars.reduce((acc, u) => acc + u.advance, 0) + chars.slice(-1)[0].kerning;

      const u = chars.pop();
      u.spacingBudgeted = 0;
      u.spacingFallback = 0;
      u.spacing1 = 0;
      u.spacing2 = 0;

      setSpacing(chars, maxWidth - width, 0.25);
      chars.forEach(u => {
        u.spacing2 = u.spacing1;
        u.spacing1 = 0;
      });

      if (item.ruby) {
        const chars = [...item.ruby];
        const width = chars.reduce((acc, u) => acc + u.advance, 0) + chars.slice(-1)[0].kerning;
        const u = chars.pop();
        u.spacingBudgeted = 0;
        u.spacingFallback = 0;
        u.spacing1 = 0;
        u.spacing2 = 0;

        setSpacing(chars, maxWidth - width, 0.25);
        chars.forEach(u => {
          u.spacing2 = u.spacing1;
          u.spacing1 = 0;
        });
      }

    } else {
      const chars = line.map(item => item.main).flat();
      const width = chars.reduce((acc, u) => acc + u.advance + u.spacing1, 0) + chars.slice(-1)[0].kerning;
      // 本文の位置を決める。均等揃え。
      addSpacing(chars.slice(0, -1), maxWidth - width, 0.25);

      // 親文字の字間が変わっているかもしれない。
      // はみださなくてもよくなっているかも。
      let progress = 0;
      line.forEach((item, j) => {
        const mainWidth = item.main.reduce((acc, u) => acc + u.advance + u.spacing1 + u.spacing2, 0);
        if (item.ruby) {
          const rubyWidth = item.ruby.reduce((width, u) => width + u.advance, 0) + item.ruby.slice(-1)[0].kerning;

          const prev = line[j - 1];
          const next = line[j + 1];
          const rubyOverhangPrev = getRubyOverhang(prev && !prev.ruby && prev.main.slice(-1)[0]);
          const rubyOverhangNext = getRubyOverhang(next && !next.ruby && next.main[0]);
          const rubyOverhangSum = rubyOverhangPrev + rubyOverhangNext;
          const rubyOverhang = Math.max(0, Math.min(rubyWidth - mainWidth, rubyOverhangSum));
          const rubyOverhangRatio = rubyOverhangSum > 0 ? rubyOverhang / rubyOverhangSum : 0;


          const spacing = mainWidth + rubyOverhang - rubyWidth;
          console.log(progress, mainWidth, rubyOverhang, rubyWidth, spacing);
          console.assert(spacing >= 0, spacing);
          if (spacing >= 0) {
            setSpacing(item.ruby, spacing, 0.25);
          }

          item.rubyOverhangPrev = rubyOverhangPrev * rubyOverhangRatio;
          item.rubyOverhangNext = rubyOverhangNext * rubyOverhangRatio;
        }
        progress += mainWidth;
      });

    }
  });

  const view = D.createElement(`
    <div style="
      position: relative;
      height: ${D.numberToCssString(source.fontSize * lines.length * 2)}px;
    "><div style="
        position: absolute;
      "></div><div></div></div>
  `);
  lines.forEach((line, i) => {
    let progress = 0;
    line.forEach((item, j) => {
      if (item.ruby) {
        let x = progress - item.rubyOverhangPrev;
        const y = source.fontSize * (i * 2 - 0.75);

        let align = "center";
        if (j === 0) {
          align = "left";
        } else if (i < lines.length - 1 && j === line.length - 1) {
          align = "right";
        }

        item.ruby.forEach(u => {
          view.firstElementChild.append(D.createElement(`
            <span style="
              position: absolute;
              display: inline-block;
              top: ${D.numberToCssString(y)}px;
              left: ${D.numberToCssString(x)}px;
              width: ${D.numberToCssString(u.advance + u.spacing1)}px;
              font: ${D.numberToCssString(source.fontSize * 0.5)}px ${D.escapeHTML(source.font)};
              line-height: ${D.numberToCssString(source.fontSize * 2)}px;
              text-align: ${align};
            ">${D.escapeHTML(u.char)}</span>
          `));
          x += u.advance + u.spacing1 + u.spacing2;
        });
      }

      progress += item.main.reduce((acc, u) => acc + u.advance + u.spacing1 + u.spacing2, 0);

    });
  });

  lines.forEach((line, i) => {
    const div = D.createElement(`
      <div style="
        line-height: ${D.numberToCssString(source.fontSize * 2)}px;
      "></div>
    `);
    line.forEach((item, j) => {
      item.main.forEach(u => {
        let align = "center";
        if (j === 0) {
          align = "left";
        } else if (i < lines.length - 1 && j === line.length - 1) {
          align = "right";
        }

        div.append(D.createElement(`
          <span style="
            display: inline-block;
            width: ${D.numberToCssString(u.advance + u.spacing1)}px;
            margin-right: ${D.numberToCssString(u.spacing2)}px;
            text-align: ${align};
          ">${D.escapeHTML(u.char)}</span>
        `));
      });
    });
    view.children[1].append(div);
  });
  return view;
};

//-------------------------------------------------------------------------

})();
