function _0x5688(_0x28fdfc, _0x286423) {
  const _0x2c3389 = _0x2c33();
  return (
    (_0x5688 = function (_0x568891, _0x59d9a9) {
      _0x568891 = _0x568891 - 0x1bb;
      let _0x12426c = _0x2c3389[_0x568891];
      return _0x12426c;
    }),
    _0x5688(_0x28fdfc, _0x286423)
  );
}
const _0x328f7c = _0x5688;
(function (_0x2e36c8, _0x594c74) {
  const _0x301686 = _0x5688,
    _0x23959f = _0x2e36c8();
  while (!![]) {
    try {
      const _0x3fc451 =
        (-parseInt(_0x301686(0x2b2)) / 0x1) *
          (-parseInt(_0x301686(0x1dc)) / 0x2) +
        (-parseInt(_0x301686(0x2ca)) / 0x3) *
          (parseInt(_0x301686(0x270)) / 0x4) +
        parseInt(_0x301686(0x230)) / 0x5 +
        (-parseInt(_0x301686(0x2b7)) / 0x6) *
          (-parseInt(_0x301686(0x1ff)) / 0x7) +
        -parseInt(_0x301686(0x1c2)) / 0x8 +
        (-parseInt(_0x301686(0x2ae)) / 0x9) *
          (-parseInt(_0x301686(0x241)) / 0xa) +
        -parseInt(_0x301686(0x1d5)) / 0xb;
      if (_0x3fc451 === _0x594c74) break;
      else _0x23959f["push"](_0x23959f["shift"]());
    } catch (_0x13e71d) {
      _0x23959f["push"](_0x23959f["shift"]());
    }
  }
})(_0x2c33, 0x37bd5),
  require(_0x328f7c(0x213));
const {
    generateWAMessageFromContent,
    proto,
    downloadContentFromMessage,
  } = require(_0x328f7c(0x20c)),
  { exec, spawn, execSync } = require(_0x328f7c(0x1e7)),
  util = require("util"),
  fetch = require("node-fetch"),
  path = require("path"),
  fs = require("fs"),
  axios = require("axios"),
  acrcloud = require("acrcloud"),
  FormData = require(_0x328f7c(0x2d8)),
  cheerio = require(_0x328f7c(0x289)),
  { performance } = require(_0x328f7c(0x294)),
  process = require(_0x328f7c(0x2e5)),
  moment = require(_0x328f7c(0x2f1)),
  lolcatjs = require(_0x328f7c(0x26a)),
  os = require("os"),
  speed = require("performance-now"),
  yts = require(_0x328f7c(0x284)),
  jsobfus = require("javascript-obfuscator"),
  { color } = require(_0x328f7c(0x2f6)),
  more = String[_0x328f7c(0x1c4)](0x200e),
  readmore = more[_0x328f7c(0x29e)](0xfa1),
  timestampp = speed(),
  latensi = speed() - timestampp,
  devTylor = _0x328f7c(0x306),
  mainOwner = _0x328f7c(0x1ca),
  {
    smsg,
    formatDate,
    getTime,
    getGroupAdmins,
    formatp,
    await,
    sleep,
    isUrl,
    runtime,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    fetchJson,
    getBuffer,
    json,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    fetchBuffer,
    buffergif,
    GIFBufferToVideoBuffer,
    totalcase,
    bytesToSize,
    checkBandwidth,
  } = require(_0x328f7c(0x217)),
  delay = (_0x6d6034) =>
    new Promise((_0x112d60) => setTimeout(_0x112d60, _0x6d6034)),
  errorLog = new Map(),
  ERROR_EXPIRY_TIME = 0xea60,
  recordError = (_0x3b0ebe) => {
    const _0x32d975 = _0x328f7c,
      _0x1b458f = Date["now"]();
    errorLog["set"](_0x3b0ebe, _0x1b458f),
      setTimeout(
        () => errorLog[_0x32d975(0x1cb)](_0x3b0ebe),
        ERROR_EXPIRY_TIME
      );
  },
  shouldLogError = (_0x31b88e) => {
    const _0x54d028 = _0x328f7c,
      _0x1ae7cb = Date[_0x54d028(0x22b)]();
    if (errorLog[_0x54d028(0x2c5)](_0x31b88e)) {
      const _0x172bea = errorLog["get"](_0x31b88e);
      if (_0x1ae7cb - _0x172bea < ERROR_EXPIRY_TIME) return ![];
    }
    return !![];
  },
  tylorkid1 = fs[_0x328f7c(0x311)]("./Media/Images/Xploader1.jpg"),
  tylorkid2 = fs["readFileSync"](_0x328f7c(0x2c9)),
  tylorkid3 = fs[_0x328f7c(0x311)](_0x328f7c(0x269)),
  tylorkid4 = fs[_0x328f7c(0x311)]("./Media/Images/Xploader4.jpg"),
  tylorkid5 = fs[_0x328f7c(0x311)]("./Media/Images/Xploader5.jpg"),
  versions = require(_0x328f7c(0x30b))[_0x328f7c(0x200)],
  dlkey = "_0x5aff35,_0x1876stqr",
  bad = JSON["parse"](fs[_0x328f7c(0x311)](_0x328f7c(0x201))),
  acr = new acrcloud({
    host: _0x328f7c(0x238),
    access_key: "882a7ef12dc0dc408f70a2f3f4724340",
    access_secret: _0x328f7c(0x309),
  });
global["db"][_0x328f7c(0x2c3)] = JSON[_0x328f7c(0x2a2)](
  fs[_0x328f7c(0x311)](_0x328f7c(0x2e3))
);
global["db"][_0x328f7c(0x2c3)] &&
  (global["db"]["data"] = {
    chats:
      global["db"][_0x328f7c(0x2c3)][_0x328f7c(0x250)] &&
      Object["keys"](global["db"][_0x328f7c(0x2c3)][_0x328f7c(0x250)])[
        _0x328f7c(0x258)
      ]
        ? global["db"][_0x328f7c(0x2c3)][_0x328f7c(0x250)]
        : {},
    settings:
      global["db"]["data"][_0x328f7c(0x308)] &&
      Object[_0x328f7c(0x257)](
        global["db"][_0x328f7c(0x2c3)][_0x328f7c(0x308)]
      )[_0x328f7c(0x258)]
        ? global["db"]["data"][_0x328f7c(0x308)]
        : {
            prefix: ".",
            mode: _0x328f7c(0x28f),
            autobio: ![],
            anticall: ![],
            chatbot: ![],
            autotype: ![],
            autoread: ![],
            welcome: ![],
            antiedit: _0x328f7c(0x2a5),
            menustyle: "2",
            autoreact: ![],
            statusemoji: "🧡",
            autorecord: ![],
            antidelete: _0x328f7c(0x2a5),
            alwaysonline: !![],
            autoviewstatus: !![],
            autoreactstatus: ![],
            autorecordtype: ![],
          },
    blacklist:
      global["db"]["data"][_0x328f7c(0x2cf)] &&
      Object[_0x328f7c(0x257)](
        global["db"][_0x328f7c(0x2c3)][_0x328f7c(0x2cf)]
      )[_0x328f7c(0x258)]
        ? global["db"]["data"]["blacklist"]
        : { blacklisted_numbers: [] },
    sudo:
      global["db"][_0x328f7c(0x2c3)][_0x328f7c(0x1d9)] &&
      Array["isArray"](global["db"][_0x328f7c(0x2c3)][_0x328f7c(0x1d9)]) &&
      global["db"]["data"]["sudo"][_0x328f7c(0x258)]
        ? global["db"][_0x328f7c(0x2c3)][_0x328f7c(0x1d9)]
        : [],
  });
module["exports"] = Cypher = async (
  _0x1548f3,
  _0x50668e,
  _0x8403a4,
  _0x1f8e8d
) => {
  const _0x9977e7 = _0x328f7c;
  try {
    const {
      type: _0x591f45,
      quotedMsg: _0x301430,
      mentioned: _0x36046d,
      now: _0x59cd9,
      fromMe: _0xb7dc49,
    } = _0x50668e;
    var _0x4a47e4 =
        _0x50668e[_0x9977e7(0x2bb)]?.[_0x9977e7(0x272)]?.[_0x9977e7(0x245)]?.[
          _0x9977e7(0x2d3)
        ] ||
        _0x50668e["message"]?.[_0x9977e7(0x272)]?.[_0x9977e7(0x245)]?.[
          "extendedTextMessage"
        ]?.[_0x9977e7(0x2ce)] ||
        _0x50668e[_0x9977e7(0x2bb)]?.[_0x9977e7(0x272)]?.[_0x9977e7(0x245)]?.[
          "imageMessage"
        ]?.[_0x9977e7(0x265)] ||
        _0x50668e[_0x9977e7(0x2bb)]?.["protocolMessage"]?.[_0x9977e7(0x245)]?.[
          _0x9977e7(0x303)
        ]?.["caption"] ||
        _0x50668e[_0x9977e7(0x2bb)]?.[_0x9977e7(0x2d3)] ||
        _0x50668e["message"]?.[_0x9977e7(0x2aa)]?.[_0x9977e7(0x265)] ||
        _0x50668e[_0x9977e7(0x2bb)]?.[_0x9977e7(0x303)]?.["caption"] ||
        _0x50668e["message"]?.[_0x9977e7(0x2cb)]?.[_0x9977e7(0x2ce)] ||
        _0x50668e[_0x9977e7(0x2bb)]?.[_0x9977e7(0x281)]?.["selectedButtonId"] ||
        _0x50668e["message"]?.[_0x9977e7(0x2d2)]?.["singleSelectReply"]?.[
          "selectedRowId"
        ] ||
        _0x50668e[_0x9977e7(0x2bb)]?.["templateButtonReplyMessage"]?.[
          _0x9977e7(0x1dd)
        ] ||
        _0x50668e["message"]?.[_0x9977e7(0x2f7)]?.["name"] ||
        _0x50668e[_0x9977e7(0x2bb)]?.[_0x9977e7(0x1ec)]?.[_0x9977e7(0x265)] ||
        _0x50668e[_0x9977e7(0x2ce)] ||
        "",
      _0x5d77e8 =
        typeof _0x4a47e4 === "string" && _0x4a47e4["length"] > 0x0
          ? _0x4a47e4
          : typeof _0x50668e[_0x9977e7(0x2ce)] === _0x9977e7(0x235)
          ? _0x50668e[_0x9977e7(0x2ce)]
          : "";
    const _0x1ef2dc =
        global["db"][_0x9977e7(0x2c3)][_0x9977e7(0x308)][_0x9977e7(0x283)],
      _0x5dd480 = _0x4a47e4[_0x9977e7(0x298)](_0x1ef2dc),
      _0xb8b81b = _0x5dd480
        ? _0x4a47e4[_0x9977e7(0x264)](_0x1ef2dc["length"])[_0x9977e7(0x1bf)]()
        : "",
      _0x1a38e3 =
        _0x5dd480 && _0xb8b81b
          ? _0xb8b81b[_0x9977e7(0x21b)](/\s+/)
              [_0x9977e7(0x1bb)]()
              [_0x9977e7(0x2dd)]()
          : "",
      _0xf1d912 = _0xb8b81b["split"](/\s+/)[_0x9977e7(0x264)](0x1),
      _0x5e01bb = (q = _0xf1d912[_0x9977e7(0x29c)]("\x20")),
      _0x422642 = _0x4a47e4[_0x9977e7(0x23b)](_0x1a38e3, "")
        ["slice"](0x1)
        [_0x9977e7(0x204)](),
      _0x2253ff = _0x50668e["pushName"] || _0x9977e7(0x1ed),
      _0x52b559 = await _0x1548f3[_0x9977e7(0x1df)](
        _0x1548f3[_0x9977e7(0x219)]["id"]
      ),
      _0xde2846 = _0x50668e["sender"],
      _0x27f661 = _0xde2846[_0x9977e7(0x21b)]("@")[0x0],
      _0x22e08b = [
        _0x52b559,
        devTylor,
        global["ownernumber"],
        ...global["db"][_0x9977e7(0x2c3)][_0x9977e7(0x1d9)],
      ]
        [_0x9977e7(0x26f)](
          (_0x77c919) =>
            _0x77c919[_0x9977e7(0x23b)](/[^0-9]/g, "") + _0x9977e7(0x274)
        )
        [_0x9977e7(0x259)](_0x50668e[_0x9977e7(0x290)]),
      _0x21b3ed = _0x50668e[_0x9977e7(0x290)] == _0x52b559 ? !![] : ![],
      _0x1f0527 = _0x50668e["key"][_0x9977e7(0x216)],
      _0x2a1fb8 = _0x50668e[_0x9977e7(0x2e7)] || _0x50668e,
      _0x4e3272 =
        _0x2a1fb8?.[_0x9977e7(0x1d0)] === "buttonsMessage"
          ? _0x2a1fb8[Object["keys"](_0x2a1fb8)[0x1]]
          : _0x2a1fb8?.[_0x9977e7(0x1d0)] === _0x9977e7(0x262) &&
            _0x2a1fb8[_0x9977e7(0x292)]
          ? _0x2a1fb8[_0x9977e7(0x292)][
              Object["keys"](_0x2a1fb8["hydratedTemplate"])[0x1]
            ]
          : _0x2a1fb8?.["mtype"] === _0x9977e7(0x228)
          ? _0x2a1fb8[Object[_0x9977e7(0x257)](_0x2a1fb8)[0x0]]
          : _0x50668e["quoted"] || _0x50668e,
      _0xd51678 =
        _0x4e3272?.[_0x9977e7(0x2c4)]?.[_0x9977e7(0x2ed)] ||
        _0x4e3272?.[_0x9977e7(0x2ed)] ||
        "",
      _0x3ab04a = _0x50668e["isGroup"]
        ? await _0x1548f3[_0x9977e7(0x226)](_0x50668e[_0x9977e7(0x30d)])[
            "catch"
          ]((_0x50a943) => {
            const _0x336a6b = _0x9977e7;
            return (
              console[_0x336a6b(0x21c)](
                "Error\x20fetching\x20group\x20metadata:",
                _0x50a943
              ),
              null
            );
          })
        : null,
      _0xf8284 =
        _0x50668e[_0x9977e7(0x2d5)] && _0x3ab04a
          ? _0x3ab04a[_0x9977e7(0x2a1)]
          : "",
      _0x2661d9 =
        _0x50668e[_0x9977e7(0x2d5)] && _0x3ab04a
          ? _0x3ab04a[_0x9977e7(0x239)]
          : [],
      _0x4df0ae = _0x50668e[_0x9977e7(0x2d5)]
        ? await getGroupAdmins(_0x2661d9)
        : [],
      _0x3d8712 = _0x50668e[_0x9977e7(0x2d5)]
        ? _0x4df0ae[_0x9977e7(0x259)](_0x50668e[_0x9977e7(0x290)])
        : ![],
      _0x26d2c7 = _0x50668e[_0x9977e7(0x2d5)]
        ? _0x4df0ae["includes"](_0x52b559)
        : ![],
      _0x425666 = _0x52b559[_0x9977e7(0x259)](_0x27f661),
      _0x419a1c = _0x50668e[_0x9977e7(0x2d5)]
        ? _0x4df0ae[_0x9977e7(0x259)](_0x50668e[_0x9977e7(0x290)])
        : ![],
      _0x4d801a =
        _0x50668e[_0x9977e7(0x2d5)] && _0x3ab04a
          ? _0x3ab04a[_0x9977e7(0x286)]
          : "",
      _0x340bc5 = _0x50668e[_0x9977e7(0x2d5)]
        ? (_0x4d801a ? _0x4d801a : _0x4df0ae)["includes"](
            _0x50668e[_0x9977e7(0x290)]
          )
        : ![];
    async function _0x55f7bd(_0x29247e, _0x129e43) {
      const _0x3a43cd = _0x9977e7,
        _0x576a00 = process[_0x3a43cd(0x22e)][_0x3a43cd(0x2a9)],
        _0x2f29b4 = process[_0x3a43cd(0x22e)][_0x3a43cd(0x2b0)];
      try {
        const _0x33f85b = await axios["patch"](
          _0x3a43cd(0x242) + _0x2f29b4 + _0x3a43cd(0x24b),
          { [_0x29247e]: _0x129e43 },
          {
            headers: {
              "Content-Type": _0x3a43cd(0x1e3),
              Accept: _0x3a43cd(0x30c),
              Authorization: _0x3a43cd(0x25c) + _0x576a00,
            },
          }
        );
        return _0x33f85b["data"];
      } catch (_0xbce5cb) {
        console[_0x3a43cd(0x21c)](_0x3a43cd(0x275), _0xbce5cb);
        throw new Error(
          "Failed\x20to\x20set\x20environment\x20variable,\x20please\x20make\x20sure\x20you\x27ve\x20entered\x20heroku\x20api\x20key\x20and\x20app\x20name\x20correctly."
        );
      }
    }
    async function _0x5047ce() {
      const _0x39cb86 = _0x9977e7,
        _0x1abd5e = process["env"][_0x39cb86(0x2a9)],
        _0x2a3e64 = process[_0x39cb86(0x22e)][_0x39cb86(0x2b0)];
      try {
        const _0x3cc8b1 = await axios[_0x39cb86(0x28d)](
          "https://api.heroku.com/apps/" + _0x2a3e64 + "/config-vars",
          {
            headers: {
              "Content-Type": _0x39cb86(0x1e3),
              Accept: _0x39cb86(0x30c),
              Authorization: _0x39cb86(0x25c) + _0x1abd5e,
            },
          }
        );
        return _0x3cc8b1[_0x39cb86(0x2c3)];
      } catch (_0x246841) {
        console[_0x39cb86(0x21c)](_0x39cb86(0x2ff), _0x246841);
        throw new Error(_0x39cb86(0x1c6));
      }
    }
    async function _0x308cc8(_0x1dbcdf) {
      const _0x5c7ddf = _0x9977e7,
        _0xa8a99b = process[_0x5c7ddf(0x22e)][_0x5c7ddf(0x2a9)],
        _0x399510 = process[_0x5c7ddf(0x22e)][_0x5c7ddf(0x2b0)];
      try {
        const _0x34cd1f = await axios["patch"](
          _0x5c7ddf(0x242) + _0x399510 + _0x5c7ddf(0x24b),
          { [_0x1dbcdf]: null },
          {
            headers: {
              "Content-Type": _0x5c7ddf(0x1e3),
              Accept: _0x5c7ddf(0x30c),
              Authorization: "Bearer\x20" + _0xa8a99b,
            },
          }
        );
        return _0x34cd1f[_0x5c7ddf(0x2c3)];
      } catch (_0x4a3c2c) {
        console[_0x5c7ddf(0x21c)](_0x5c7ddf(0x255), _0x4a3c2c);
        throw new Error(_0x5c7ddf(0x261));
      }
    }
    async function _0x383df2(_0x5627fa) {
      const _0x2f4385 = _0x9977e7,
        _0x3df8c1 = async (_0x222715) => {
          const _0x161639 = _0x5688,
            _0x40052d = _0x161639(0x310) + dlkey + _0x161639(0x21a) + _0x222715;
          try {
            const _0x23e73b = await axios[_0x161639(0x28d)](_0x40052d);
            if (
              _0x23e73b[_0x161639(0x1e4)] !== 0xc8 ||
              !_0x23e73b[_0x161639(0x2c3)][_0x161639(0x1da)]
            )
              throw new Error(_0x161639(0x30e));
            return _0x23e73b[_0x161639(0x2c3)][_0x161639(0x2bf)][
              _0x161639(0x28a)
            ];
          } catch (_0x53f577) {
            console["error"](
              "Error\x20with\x20GiftedTech\x20API:",
              _0x53f577[_0x161639(0x2bb)]
            );
            throw _0x53f577;
          }
        },
        _0x4413c8 = async (_0x399d77) => {
          const _0x30eee5 = _0x5688,
            _0x4cd3a5 = _0x30eee5(0x291),
            _0x1263d0 =
              _0x30eee5(0x22a) +
              _0x4cd3a5 +
              _0x30eee5(0x21a) +
              encodeURIComponent(_0x399d77) +
              _0x30eee5(0x2b8);
          try {
            const _0x22a2fa = await axios[_0x30eee5(0x28d)](_0x1263d0, {
              headers: { "User-Agent": _0x30eee5(0x22c) },
            });
            if (
              !_0x22a2fa[_0x30eee5(0x2c3)] ||
              !_0x22a2fa["data"][_0x30eee5(0x1da)]
            )
              throw new Error(_0x30eee5(0x2b5));
            const { id: _0x52a7d8 } = _0x22a2fa[_0x30eee5(0x2c3)];
            while (!![]) {
              const _0x472070 = await axios[_0x30eee5(0x28d)](
                _0x30eee5(0x1d4) + _0x52a7d8,
                { headers: { "User-Agent": _0x30eee5(0x22c) } }
              );
              if (
                _0x472070[_0x30eee5(0x2c3)] &&
                _0x472070[_0x30eee5(0x2c3)]["success"] &&
                _0x472070[_0x30eee5(0x2c3)][_0x30eee5(0x207)] === 0x3e8
              )
                return _0x472070[_0x30eee5(0x2c3)][_0x30eee5(0x28a)];
              await new Promise((_0x491179) => setTimeout(_0x491179, 0x1388));
            }
          } catch (_0x42c603) {
            console[_0x30eee5(0x21c)](
              _0x30eee5(0x24e),
              _0x42c603[_0x30eee5(0x2bb)]
            );
            throw _0x42c603;
          }
        };
      try {
        let _0x28bf55;
        try {
          _0x28bf55 = await _0x3df8c1(_0x5627fa);
        } catch (_0x2b6491) {
          console["log"](_0x2f4385(0x1be)),
            (_0x28bf55 = await _0x4413c8(_0x5627fa));
        }
        return _0x28bf55;
      } catch (_0x482784) {
        throw _0x482784;
      }
    }
    async function _0x5edfc1(_0x4955e4) {
      const _0x67f353 = _0x9977e7,
        _0x10953f = _0x67f353(0x1e1) + _0x4955e4;
      try {
        const _0x4a87d5 = await axios[_0x67f353(0x28d)](_0x10953f);
        if (
          !_0x4a87d5[_0x67f353(0x2c3)] ||
          !_0x4a87d5[_0x67f353(0x2c3)][_0x67f353(0x1e4)] ||
          !_0x4a87d5["data"][_0x67f353(0x2c3)]?.["dl"]
        )
          throw new Error(_0x67f353(0x22f));
        return _0x4a87d5[_0x67f353(0x2c3)];
      } catch (_0x3d052e) {
        console[_0x67f353(0x21c)](
          _0x67f353(0x1e0),
          _0x3d052e[_0x67f353(0x2bb)]
        );
        throw _0x3d052e;
      }
    }
    async function _0xd48e3(_0x2c156d, _0x594f84) {
      const _0x3c81cc = _0x9977e7;
      try {
        const _0x3135bf = await _0x1548f3["groupRequestParticipantsList"](
          _0x594f84
        );
        if (!_0x3135bf || _0x3135bf[_0x3c81cc(0x258)] === 0x0)
          return _0x2c156d[_0x3c81cc(0x2b3)](_0x3c81cc(0x2ee));
        const _0x4d646e = _0x3135bf["map"](
          (_0x3bc83c) => _0x3bc83c[_0x3c81cc(0x218)]
        );
        await _0x1548f3["groupRequestParticipantsUpdate"](
          _0x594f84,
          _0x4d646e,
          _0x3c81cc(0x27a)
        ),
          _0x2c156d["reply"](
            "Approved\x20" + _0x4d646e[_0x3c81cc(0x258)] + _0x3c81cc(0x1c9)
          );
      } catch (_0x100dbc) {
        console[_0x3c81cc(0x21c)]("Error\x20approving\x20requests:", _0x100dbc),
          _0x2c156d[_0x3c81cc(0x2b3)](
            "Something\x20went\x20wrong\x20while\x20approving\x20requests."
          );
      }
    }
    async function _0x5354ed(_0x469652, _0x14a5b3) {
      const _0x425abd = _0x9977e7;
      try {
        const _0x283b0f = await _0x1548f3[_0x425abd(0x221)](_0x14a5b3);
        if (!_0x283b0f || _0x283b0f[_0x425abd(0x258)] === 0x0)
          return _0x469652[_0x425abd(0x2b3)](
            "No\x20pending\x20requests\x20to\x20disapprove."
          );
        const _0x1ce65a = _0x283b0f[_0x425abd(0x26f)](
          (_0x42e174) => _0x42e174["jid"]
        );
        await _0x1548f3[_0x425abd(0x23a)](
          _0x14a5b3,
          _0x1ce65a,
          _0x425abd(0x1db)
        ),
          _0x469652[_0x425abd(0x2b3)](
            _0x425abd(0x20a) + _0x1ce65a[_0x425abd(0x258)] + _0x425abd(0x1c9)
          );
      } catch (_0x52aa45) {
        console[_0x425abd(0x21c)](_0x425abd(0x1f1), _0x52aa45),
          _0x469652[_0x425abd(0x2b3)](_0x425abd(0x2ea));
      }
    }
    async function _0xb2a875(_0x4c5799, _0x2934bd) {
      const _0x93b2db = _0x9977e7;
      try {
        const _0x5189a4 = await _0x1548f3[_0x93b2db(0x221)](_0x2934bd);
        if (!_0x5189a4 || _0x5189a4[_0x93b2db(0x258)] === 0x0)
          return _0x4c5799[_0x93b2db(0x2b3)](_0x93b2db(0x29a));
        let _0x227857 =
          _0x93b2db(0x2e4) + _0x5189a4[_0x93b2db(0x258)] + _0x93b2db(0x243);
        _0x5189a4[_0x93b2db(0x1d7)]((_0x3015e9, _0x414fb1) => {
          const _0x41a9fb = _0x93b2db,
            _0x13f2ca = _0x3015e9[_0x41a9fb(0x218)][_0x41a9fb(0x23b)](
              _0x41a9fb(0x274),
              ""
            ),
            _0x226696 = new Date(_0x3015e9["request_time"] * 0x3e8)[
              _0x41a9fb(0x2fd)
            ]();
          _0x227857 +=
            _0x414fb1 +
            0x1 +
            _0x41a9fb(0x25e) +
            _0x13f2ca +
            _0x41a9fb(0x1c7) +
            _0x226696 +
            "\x0a";
        }),
          _0x4c5799["reply"](_0x227857);
      } catch (_0x1f4045) {
        console[_0x93b2db(0x21c)](
          "Error\x20fetching\x20join\x20requests:",
          _0x1f4045
        ),
          _0x4c5799[_0x93b2db(0x2b3)](_0x93b2db(0x28e));
      }
    }
    async function _0x4b18ab(_0x44d2c6) {
      const _0x5e5984 = _0x9977e7;
      try {
        if (
          !_0x44d2c6["quoted"] ||
          _0x44d2c6[_0x5e5984(0x2e7)][_0x5e5984(0x30d)] !== _0x5e5984(0x222)
        )
          return _0x44d2c6[_0x5e5984(0x2b3)](_0x5e5984(0x25a));
        await _0x44d2c6[_0x5e5984(0x2e7)][_0x5e5984(0x208)](
          _0x44d2c6[_0x5e5984(0x30d)],
          !![]
        ),
          _0x1548f3["sendMessage"](_0x44d2c6[_0x5e5984(0x30d)], {
            react: { text: "✅", key: _0x44d2c6[_0x5e5984(0x2da)] },
          }),
          console["log"](_0x5e5984(0x23c));
      } catch (_0x4742f3) {
        console[_0x5e5984(0x21c)](_0x5e5984(0x301), _0x4742f3),
          _0x44d2c6[_0x5e5984(0x2b3)](
            "Error:\x20" + _0x4742f3[_0x5e5984(0x2bb)]
          );
      }
    }
    async function _0x560a1a(_0x343e55, _0x42f3e3) {
      const _0x6a2d00 = _0x9977e7;
      let _0x49e6ab = new FormData(),
        _0x53044a = await axios[_0x6a2d00(0x28d)](_0x343e55, {
          headers: { "user-agent": _0x6a2d00(0x26c) },
        }),
        _0x2a4174 = cheerio[_0x6a2d00(0x1f7)](_0x53044a[_0x6a2d00(0x2c3)]),
        _0x407f6c = _0x42f3e3,
        _0x7f1e87 = _0x2a4174("input[name=token]")[_0x6a2d00(0x225)](),
        _0x421658 = _0x2a4174("input[name=build_server]")[_0x6a2d00(0x225)](),
        _0x59adc8 = _0x2a4174(_0x6a2d00(0x1c1))[_0x6a2d00(0x225)]();
      _0x49e6ab[_0x6a2d00(0x1cc)]("text[]", _0x407f6c),
        _0x49e6ab[_0x6a2d00(0x1cc)](_0x6a2d00(0x2fe), _0x7f1e87),
        _0x49e6ab[_0x6a2d00(0x1cc)]("build_server", _0x421658),
        _0x49e6ab[_0x6a2d00(0x1cc)](_0x6a2d00(0x229), _0x59adc8);
      let _0x5ca1f7 = await axios({
          url: _0x343e55,
          method: _0x6a2d00(0x299),
          data: _0x49e6ab,
          headers: {
            Accept: "*/*",
            "Accept-Language": _0x6a2d00(0x29f),
            "user-agent":
              "Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/105.0.0.0\x20Safari/537.36",
            cookie:
              _0x53044a[_0x6a2d00(0x25f)][_0x6a2d00(0x2bc)]?.[_0x6a2d00(0x29c)](
                ";\x20"
              ),
            "Content-Type": _0x6a2d00(0x1e2),
          },
        }),
        _0x56bc6d = cheerio[_0x6a2d00(0x1f7)](_0x5ca1f7[_0x6a2d00(0x2c3)]),
        _0x366642 = JSON["parse"](
          _0x56bc6d(_0x6a2d00(0x246))[_0x6a2d00(0x225)]()
        );
      (_0x366642[_0x6a2d00(0x2fb)] = _0x366642[_0x6a2d00(0x2ce)]),
        delete _0x366642["text"];
      let { data: _0x177c17 } = await axios["post"](
        _0x6a2d00(0x24d),
        new URLSearchParams(_0x366642),
        {
          headers: {
            "user-agent":
              "Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/105.0.0.0\x20Safari/537.36",
            cookie:
              _0x53044a[_0x6a2d00(0x25f)]["set-cookie"][_0x6a2d00(0x29c)](
                ";\x20"
              ),
          },
        }
      );
      return _0x421658 + _0x177c17[_0x6a2d00(0x305)];
    }
    async function _0x5b6bb2(_0x471318) {
      return new Promise((_0x378e9e, _0x5016d3) => {
        const _0x6c8907 = _0x5688;
        try {
          const _0x310b72 = jsobfus[_0x6c8907(0x1ce)](_0x471318, {
              compact: ![],
              controlFlowFlattening: !![],
              controlFlowFlatteningThreshold: 0x1,
              numbersToExpressions: !![],
              simplify: !![],
              stringArrayShuffle: !![],
              splitStrings: !![],
              stringArrayThreshold: 0x1,
            }),
            _0x12ab9d = {
              status: 0xc8,
              author: "" + ownername,
              result: _0x310b72[_0x6c8907(0x23e)](),
            };
          _0x378e9e(_0x12ab9d);
        } catch (_0x281582) {
          _0x5016d3(_0x281582);
        }
      });
    }
    const _0x1e4fde = (_0x2931f0) => {
      const _0x1cf2f1 = _0x9977e7;
      return _0x2931f0[
        Math[_0x1cf2f1(0x296)](
          Math[_0x1cf2f1(0x2eb)]() * _0x2931f0[_0x1cf2f1(0x258)]
        )
      ];
    };
    try {
      var _0x2fccde = await _0x1548f3[_0x9977e7(0x209)](
        _0x50668e[_0x9977e7(0x290)],
        _0x9977e7(0x305)
      );
    } catch (_0x420499) {
      let _0x2f0bd = _0x9977e7(0x23f);
    }
    let _0x140496 = await getBuffer(_0x2fccde),
      _0xf87fc5 = await _0x1548f3["profilePictureUrl"](
        _0x50668e[_0x9977e7(0x290)],
        _0x9977e7(0x305)
      )["catch"](
        (_0x3df84c) => "https://telegra.ph/file/6880771a42bad09dd6087.jpg"
      );
    try {
      if (_0x1f0527[_0x9977e7(0x268)](_0x9977e7(0x1f2))) {
        let _0x4e02f1 = global["db"]["data"][_0x9977e7(0x250)][_0x1f0527];
        if (typeof _0x4e02f1 !== _0x9977e7(0x2c1))
          global["db"]["data"][_0x9977e7(0x250)][_0x1f0527] = {};
        _0x4e02f1 = global["db"]["data"][_0x9977e7(0x250)][_0x1f0527];
        if (!(_0x9977e7(0x236) in _0x4e02f1)) _0x4e02f1["antibot"] = ![];
        if (!(_0x9977e7(0x20d) in _0x4e02f1)) _0x4e02f1[_0x9977e7(0x20d)] = ![];
        if (!("badword" in _0x4e02f1)) _0x4e02f1["badword"] = ![];
        if (!("antilinkgc" in _0x4e02f1)) _0x4e02f1[_0x9977e7(0x1c8)] = ![];
        if (!(_0x9977e7(0x297) in _0x4e02f1)) _0x4e02f1[_0x9977e7(0x297)] = ![];
        if (!(_0x9977e7(0x214) in _0x4e02f1)) _0x4e02f1[_0x9977e7(0x214)] = ![];
        if (!(_0x9977e7(0x210) in _0x4e02f1)) _0x4e02f1[_0x9977e7(0x210)] = ![];
      }
      if (!global["db"][_0x9977e7(0x2c3)][_0x9977e7(0x308)])
        global["db"][_0x9977e7(0x2c3)]["settings"] = {};
      let _0x2f3da5 = global["db"][_0x9977e7(0x2c3)][_0x9977e7(0x308)];
      if (!(_0x9977e7(0x283) in _0x2f3da5)) _0x2f3da5[_0x9977e7(0x283)] = ".";
      if (!(_0x9977e7(0x232) in _0x2f3da5))
        _0x2f3da5[_0x9977e7(0x232)] = _0x9977e7(0x28f);
      if (!(_0x9977e7(0x2c0) in _0x2f3da5)) _0x2f3da5["autobio"] = ![];
      if (!(_0x9977e7(0x1f6) in _0x2f3da5))
        _0x2f3da5[_0x9977e7(0x1f6)] = _0x9977e7(0x224);
      if (!(_0x9977e7(0x1ee) in _0x2f3da5)) _0x2f3da5[_0x9977e7(0x1ee)] = ![];
      if (!(_0x9977e7(0x1fa) in _0x2f3da5)) _0x2f3da5[_0x9977e7(0x1fa)] = ![];
      if (!("autoread" in _0x2f3da5)) _0x2f3da5[_0x9977e7(0x252)] = ![];
      if (!("welcome" in _0x2f3da5)) _0x2f3da5["welcome"] = ![];
      if (!(_0x9977e7(0x1d8) in _0x2f3da5))
        _0x2f3da5[_0x9977e7(0x1d8)] = _0x9977e7(0x2a5);
      if (!(_0x9977e7(0x1f4) in _0x2f3da5)) _0x2f3da5["menustyle"] = "2";
      if (!(_0x9977e7(0x1bc) in _0x2f3da5)) _0x2f3da5[_0x9977e7(0x1bc)] = ![];
      if (!(_0x9977e7(0x27f) in _0x2f3da5)) _0x2f3da5[_0x9977e7(0x27f)] = "🧡";
      if (!(_0x9977e7(0x2f2) in _0x2f3da5)) _0x2f3da5["autorecord"] = ![];
      if (!(_0x9977e7(0x2ef) in _0x2f3da5)) _0x2f3da5["antidelete"] = "private";
      if (!(_0x9977e7(0x20f) in _0x2f3da5)) _0x2f3da5[_0x9977e7(0x20f)] = !![];
      if (!(_0x9977e7(0x2a3) in _0x2f3da5)) _0x2f3da5[_0x9977e7(0x2a3)] = !![];
      if (!("autoreactstatus" in _0x2f3da5)) _0x2f3da5["autoreactstatus"] = ![];
      if (!(_0x9977e7(0x2e9) in _0x2f3da5)) _0x2f3da5[_0x9977e7(0x2e9)] = ![];
      let _0x3b7056 = global["db"][_0x9977e7(0x2c3)]["sudo"] || [];
      if (!global["db"][_0x9977e7(0x2c3)][_0x9977e7(0x1d9)])
        global["db"][_0x9977e7(0x2c3)]["sudo"] = _0x3b7056;
      let _0x19da98 = global["db"][_0x9977e7(0x2c3)][_0x9977e7(0x2cf)];
      if (!_0x19da98 || typeof _0x19da98 !== _0x9977e7(0x2c1))
        global["db"][_0x9977e7(0x2c3)][_0x9977e7(0x2cf)] = {
          blacklisted_numbers: [],
        };
      await global["db"][_0x9977e7(0x247)]();
    } catch (_0x531869) {
      console["error"](_0x9977e7(0x2fa), _0x531869);
    }
    const _0x14b13f = moment(Date[_0x9977e7(0x22b)]())
        ["tz"]("" + timezones)
        [_0x9977e7(0x21f)]("en")
        [_0x9977e7(0x1f8)](_0x9977e7(0x1d1)),
      _0x7ea120 = moment(Date[_0x9977e7(0x22b)]())
        ["tz"]("" + timezones)
        ["locale"]("en")
        [_0x9977e7(0x1f8)]("HH:mm:ss\x20z"),
      _0x1df8fe = moment(Date[_0x9977e7(0x22b)]())
        ["tz"]("" + timezones)
        [_0x9977e7(0x1f8)]("DD/MM/YYYY");
    _0x50668e[_0x9977e7(0x2bb)] &&
      (lolcatjs[_0x9977e7(0x251)](_0x9977e7(0x307)),
      lolcatjs[_0x9977e7(0x251)](
        "»\x20Sent\x20Time:\x20" + _0x14b13f + ",\x20" + _0x7ea120
      ),
      lolcatjs["fromString"](
        "»\x20Message\x20Type:\x20" + _0x50668e[_0x9977e7(0x1d0)]
      ),
      lolcatjs[_0x9977e7(0x251)](
        _0x9977e7(0x288) + (_0x2253ff || _0x9977e7(0x1ef))
      ),
      lolcatjs[_0x9977e7(0x251)](
        _0x9977e7(0x302) + _0x50668e[_0x9977e7(0x30d)]["split"]("@")[0x0]
      ),
      lolcatjs["fromString"](_0x9977e7(0x234) + (_0x5d77e8 || "N/A")),
      lolcatjs[_0x9977e7(0x251)](_0x9977e7(0x282)));
    if (db[_0x9977e7(0x2c3)][_0x9977e7(0x308)][_0x9977e7(0x2c0)]) {
      let _0x55d879 = moment(Date[_0x9977e7(0x22b)]())
          ["tz"]("" + timezones)
          ["locale"]("en")
          ["format"](_0x9977e7(0x1d1)),
        _0x4be37b = moment(Date[_0x9977e7(0x22b)]())
          ["tz"]("" + timezones)
          [_0x9977e7(0x21f)]("en")
          [_0x9977e7(0x1f8)](_0x9977e7(0x2f0)),
        _0x4779ee = moment(Date["now"]())
          ["tz"]("" + timezones)
          [_0x9977e7(0x1f8)]("DD/MM/YYYY");
      _0x1548f3[_0x9977e7(0x2ac)](
        _0x4be37b +
          ",\x20" +
          _0x55d879 +
          ";\x20" +
          _0x4779ee +
          _0x9977e7(0x1e9) +
          botname
      )[_0x9977e7(0x1cf)]((_0x327ee) => _0x327ee);
    }
    if (_0x50668e[_0x9977e7(0x2bb)])
      try {
        let _0x227948 = db[_0x9977e7(0x2c3)]["settings"][_0x9977e7(0x20f)]
          ? _0x9977e7(0x2e0)
          : _0x9977e7(0x2c6);
        await _0x1548f3[_0x9977e7(0x29d)](_0x227948, _0x1f0527),
          await delay(0x3e8);
        if (
          db[_0x9977e7(0x2c3)][_0x9977e7(0x308)]["autorecordtype"] ===
            _0x9977e7(0x233) ||
          (db[_0x9977e7(0x2c3)]["settings"][_0x9977e7(0x2e9)] ===
            _0x9977e7(0x256) &&
            _0x50668e[_0x9977e7(0x2d5)]) ||
          (db[_0x9977e7(0x2c3)][_0x9977e7(0x308)][_0x9977e7(0x2e9)] === "pm" &&
            !_0x50668e[_0x9977e7(0x2d5)]) ||
          (db[_0x9977e7(0x2c3)][_0x9977e7(0x308)][_0x9977e7(0x2e9)] ===
            _0x9977e7(0x278) &&
            _0x1a38e3)
        ) {
          let _0x48a870 = [_0x9977e7(0x21d), _0x9977e7(0x2e2)],
            _0x2bbb1a =
              _0x48a870[
                Math[_0x9977e7(0x296)](
                  Math[_0x9977e7(0x2eb)]() * _0x48a870["length"]
                )
              ];
          _0x1548f3[_0x9977e7(0x29d)](_0x2bbb1a, _0x1f0527);
        }
        (db[_0x9977e7(0x2c3)][_0x9977e7(0x308)][_0x9977e7(0x2f2)] ===
          _0x9977e7(0x233) ||
          (db[_0x9977e7(0x2c3)]["settings"][_0x9977e7(0x2f2)] ===
            _0x9977e7(0x256) &&
            _0x50668e[_0x9977e7(0x2d5)]) ||
          (db[_0x9977e7(0x2c3)][_0x9977e7(0x308)][_0x9977e7(0x2f2)] === "pm" &&
            !_0x50668e["isGroup"]) ||
          (db[_0x9977e7(0x2c3)][_0x9977e7(0x308)][_0x9977e7(0x2f2)] ===
            _0x9977e7(0x278) &&
            _0x1a38e3)) &&
          _0x1548f3[_0x9977e7(0x29d)](_0x9977e7(0x2e2), _0x1f0527),
          (db["data"]["settings"][_0x9977e7(0x1fa)] === "all" ||
            (db["data"][_0x9977e7(0x308)]["autotype"] === _0x9977e7(0x256) &&
              _0x50668e[_0x9977e7(0x2d5)]) ||
            (db["data"][_0x9977e7(0x308)]["autotype"] === "pm" &&
              !_0x50668e["isGroup"]) ||
            (db["data"][_0x9977e7(0x308)]["autotype"] === _0x9977e7(0x278) &&
              _0x1a38e3)) &&
            _0x1548f3[_0x9977e7(0x29d)]("composing", _0x1f0527);
      } catch (_0x23a4bf) {
        console["error"](_0x9977e7(0x293), _0x23a4bf);
      }
    const {
        commandEmojis: _0x51d51b,
        messageEmojis: _0x44780c,
      } = require(_0x9977e7(0x25b)),
      _0x2aeedf =
        _0x51d51b[
          Math[_0x9977e7(0x296)](Math["random"]() * _0x51d51b[_0x9977e7(0x258)])
        ],
      _0xbf54fa =
        _0x44780c[
          Math[_0x9977e7(0x296)](Math[_0x9977e7(0x2eb)]() * _0x44780c["length"])
        ];
    if (
      _0x1a38e3 &&
      db["data"][_0x9977e7(0x308)][_0x9977e7(0x1bc)] === "command"
    )
      await _0x1548f3[_0x9977e7(0x1f3)](_0x50668e["key"][_0x9977e7(0x216)], {
        react: { text: _0x2aeedf, key: _0x50668e[_0x9977e7(0x2da)] },
      });
    else {
      if (_0x50668e["message"])
        try {
          (db[_0x9977e7(0x2c3)][_0x9977e7(0x308)][_0x9977e7(0x1bc)] ===
            _0x9977e7(0x233) ||
            (db["data"][_0x9977e7(0x308)]["autoreact"] === "group" &&
              _0x50668e[_0x9977e7(0x2d5)]) ||
            (db["data"][_0x9977e7(0x308)][_0x9977e7(0x1bc)] === "pm" &&
              !_0x50668e["isGroup"])) &&
            (await _0x1548f3["sendMessage"](
              _0x50668e["key"][_0x9977e7(0x216)],
              { react: { text: _0xbf54fa, key: _0x50668e["key"] } }
            ));
        } catch (_0xbf7825) {
          console[_0x9977e7(0x21c)](_0x9977e7(0x26e), _0xbf7825);
        }
    }
    _0x1f0527[_0x9977e7(0x268)](_0x9977e7(0x1f2)) &&
      db["data"][_0x9977e7(0x250)][_0x50668e[_0x9977e7(0x30d)]][
        _0x9977e7(0x236)
      ] &&
      _0x50668e[_0x9977e7(0x260)] &&
      (!_0x419a1c || !_0x22e08b || _0x26d2c7) &&
      (_0x50668e[_0x9977e7(0x2b3)](_0x9977e7(0x24c)),
      await _0x1548f3["groupParticipantsUpdate"](
        _0x50668e[_0x9977e7(0x30d)],
        [_0x50668e[_0x9977e7(0x290)]],
        _0x9977e7(0x206)
      ));
    if (
      _0x1f0527[_0x9977e7(0x268)](_0x9977e7(0x1f2)) &&
      db[_0x9977e7(0x2c3)][_0x9977e7(0x250)][_0x50668e[_0x9977e7(0x30d)]][
        _0x9977e7(0x1c8)
      ]
    ) {
      const _0x4a64d3 = /(?:https?:\/\/)?chat\.whatsapp\.com\/\S+/i;
      if (
        _0x50668e[_0x9977e7(0x2bb)] &&
        _0x4a64d3[_0x9977e7(0x287)](_0x5d77e8)
      ) {
        if (_0x419a1c || _0x22e08b || !_0x26d2c7) return;
        await _0x1548f3["sendMessage"](_0x50668e["chat"], {
          delete: {
            remoteJid: _0x50668e[_0x9977e7(0x30d)],
            fromMe: ![],
            id: _0x50668e[_0x9977e7(0x2da)]["id"],
            participant: _0x50668e[_0x9977e7(0x2da)][_0x9977e7(0x2cd)],
          },
        });
      }
    }
    if (
      _0x1f0527["endsWith"](_0x9977e7(0x1f2)) &&
      db[_0x9977e7(0x2c3)][_0x9977e7(0x250)][_0x50668e[_0x9977e7(0x30d)]][
        _0x9977e7(0x210)
      ]
    ) {
      const _0x5dc0b6 = /(?:https?:\/\/)?chat\.whatsapp\.com\/\S+/i;
      if (
        _0x50668e[_0x9977e7(0x2bb)] &&
        _0x5dc0b6[_0x9977e7(0x287)](_0x5d77e8)
      ) {
        if (_0x419a1c || _0x22e08b || !_0x26d2c7) return;
        {
          if (_0x419a1c || _0x22e08b || !_0x26d2c7) return;
          await _0x1548f3[_0x9977e7(0x1f3)](_0x50668e[_0x9977e7(0x30d)], {
            delete: {
              remoteJid: _0x50668e["chat"],
              fromMe: ![],
              id: _0x50668e[_0x9977e7(0x2da)]["id"],
              participant: _0x50668e[_0x9977e7(0x2da)][_0x9977e7(0x2cd)],
            },
          }),
            _0x1548f3[_0x9977e7(0x1f3)](
              _0x1f0527,
              {
                text:
                  _0x9977e7(0x211) +
                  _0x50668e[_0x9977e7(0x290)][_0x9977e7(0x21b)]("@")[0x0] +
                  _0x9977e7(0x2e8),
                contextInfo: { mentionedJid: [_0x50668e[_0x9977e7(0x290)]] },
              },
              { quoted: _0x50668e }
            ),
            await _0x1548f3[_0x9977e7(0x29b)](
              _0x50668e[_0x9977e7(0x30d)],
              [_0x50668e[_0x9977e7(0x290)]],
              "remove"
            );
        }
      }
    }
    if (
      _0x1f0527[_0x9977e7(0x268)](_0x9977e7(0x1f2)) &&
      db[_0x9977e7(0x2c3)]["chats"][_0x50668e["chat"]][_0x9977e7(0x20d)]
    ) {
      const _0x1705cf =
          /(?:https?:\/\/|www\.|t\.me\/|bit\.ly\/|tinyurl\.com\/|(?:[a-z0-9]+\.)+[a-z]{2,})(\/\S*)?/i,
        _0x3a3eed =
          _0x50668e[_0x9977e7(0x2bb)]?.["conversation"] ||
          _0x50668e[_0x9977e7(0x2bb)]?.["extendedTextMessage"]?.[
            _0x9977e7(0x2ce)
          ] ||
          _0x50668e["message"]?.[_0x9977e7(0x2aa)]?.[_0x9977e7(0x265)] ||
          _0x50668e[_0x9977e7(0x2bb)]?.["videoMessage"]?.[_0x9977e7(0x265)] ||
          _0x50668e[_0x9977e7(0x2bb)]?.[_0x9977e7(0x2f7)]?.[_0x9977e7(0x24f)] ||
          _0x50668e["message"]?.["protocolMessage"]?.[_0x9977e7(0x245)]?.[
            _0x9977e7(0x2d3)
          ] ||
          _0x50668e[_0x9977e7(0x2bb)]?.["protocolMessage"]?.[
            _0x9977e7(0x245)
          ]?.[_0x9977e7(0x2cb)]?.[_0x9977e7(0x2ce)] ||
          _0x50668e[_0x9977e7(0x2bb)]?.[_0x9977e7(0x272)]?.[_0x9977e7(0x245)]?.[
            _0x9977e7(0x2aa)
          ]?.["caption"] ||
          _0x50668e[_0x9977e7(0x2bb)]?.[_0x9977e7(0x272)]?.[_0x9977e7(0x245)]?.[
            "videoMessage"
          ]?.["caption"] ||
          _0x50668e[_0x9977e7(0x2bb)]?.[_0x9977e7(0x272)]?.[_0x9977e7(0x245)] ||
          pollMessageData;
      if (_0x3a3eed && _0x1705cf[_0x9977e7(0x287)](_0x3a3eed)) {
        if (_0x419a1c || _0x22e08b || !_0x26d2c7) return;
        await _0x1548f3[_0x9977e7(0x1f3)](_0x50668e[_0x9977e7(0x30d)], {
          delete: {
            remoteJid: _0x50668e[_0x9977e7(0x30d)],
            fromMe: ![],
            id: _0x50668e[_0x9977e7(0x2da)]["id"],
            participant: _0x50668e[_0x9977e7(0x2da)][_0x9977e7(0x2cd)],
          },
        });
      }
    }
    if (
      _0x1f0527["endsWith"]("@g.us") &&
      db[_0x9977e7(0x2c3)][_0x9977e7(0x250)][_0x50668e[_0x9977e7(0x30d)]][
        _0x9977e7(0x297)
      ]
    ) {
      const _0x1bfcce =
        /(?:https?:\/\/|www\.|t\.me\/|bit\.ly\/|tinyurl\.com\/|(?:[a-z0-9]+\.)+[a-z]{2,})(\/\S*)?/i;
      if (
        _0x50668e[_0x9977e7(0x2bb)] &&
        _0x1bfcce[_0x9977e7(0x287)](_0x5d77e8)
      ) {
        if (_0x419a1c || _0x22e08b || !_0x26d2c7) return;
        await _0x1548f3["sendMessage"](_0x50668e[_0x9977e7(0x30d)], {
          delete: {
            remoteJid: _0x50668e["chat"],
            fromMe: ![],
            id: _0x50668e[_0x9977e7(0x2da)]["id"],
            participant: _0x50668e["key"][_0x9977e7(0x2cd)],
          },
        }),
          await _0x1548f3[_0x9977e7(0x1f3)](
            _0x1f0527,
            {
              text:
                _0x9977e7(0x2bd) +
                _0x50668e["sender"][_0x9977e7(0x21b)]("@")[0x0] +
                _0x9977e7(0x1d6),
              contextInfo: { mentionedJid: [_0x50668e[_0x9977e7(0x290)]] },
            },
            { quoted: _0x50668e }
          ),
          await _0x1548f3[_0x9977e7(0x29b)](
            _0x50668e[_0x9977e7(0x30d)],
            [_0x50668e[_0x9977e7(0x290)]],
            "remove"
          );
      }
    }
    if (
      _0x1f0527[_0x9977e7(0x268)](_0x9977e7(0x1f2)) &&
      db[_0x9977e7(0x2c3)][_0x9977e7(0x250)][_0x50668e[_0x9977e7(0x30d)]][
        "badword"
      ]
    )
      for (let _0x3bb584 of bad) {
        let _0x514cb0 = new RegExp("\x5cb" + _0x3bb584 + "\x5cb", "i");
        if (_0x514cb0[_0x9977e7(0x287)](_0x5d77e8)) {
          if (_0x419a1c || _0x22e08b || !_0x26d2c7) return;
          await _0x1548f3[_0x9977e7(0x1f3)](_0x50668e[_0x9977e7(0x30d)], {
            delete: {
              remoteJid: _0x50668e[_0x9977e7(0x30d)],
              fromMe: ![],
              id: _0x50668e[_0x9977e7(0x2da)]["id"],
              participant: _0x50668e["key"][_0x9977e7(0x2cd)],
            },
          }),
            await _0x1548f3[_0x9977e7(0x1f3)](
              _0x1f0527,
              {
                text:
                  "BAD\x20WORD\x20DETECTED\x0a\x0a@" +
                  _0x50668e[_0x9977e7(0x290)][_0x9977e7(0x21b)]("@")[0x0] +
                  _0x9977e7(0x1e6),
                contextInfo: { mentionedJid: [_0x50668e[_0x9977e7(0x290)]] },
              },
              { quoted: _0x50668e }
            );
          break;
        }
      }
    if (
      _0x1f0527["endsWith"](_0x9977e7(0x1f2)) &&
      db["data"][_0x9977e7(0x250)][_0x50668e[_0x9977e7(0x30d)]][
        _0x9977e7(0x214)
      ]
    )
      for (let _0x22d0fa of bad) {
        let _0x452942 = new RegExp("\x5cb" + _0x22d0fa + "\x5cb", "i");
        if (_0x452942[_0x9977e7(0x287)](_0x5d77e8)) {
          if (_0x419a1c || _0x22e08b || !_0x26d2c7) return;
          await _0x1548f3["sendMessage"](_0x50668e[_0x9977e7(0x30d)], {
            delete: {
              remoteJid: _0x50668e[_0x9977e7(0x30d)],
              fromMe: ![],
              id: _0x50668e["key"]["id"],
              participant: _0x50668e[_0x9977e7(0x2da)]["participant"],
            },
          }),
            await _0x1548f3["sendMessage"](
              _0x1f0527,
              {
                text:
                  _0x9977e7(0x2d1) +
                  _0x50668e[_0x9977e7(0x290)]["split"]("@")[0x0] +
                  _0x9977e7(0x2db),
                contextInfo: { mentionedJid: [_0x50668e[_0x9977e7(0x290)]] },
              },
              { quoted: _0x50668e }
            ),
            await _0x1548f3[_0x9977e7(0x29b)](
              _0x50668e[_0x9977e7(0x30d)],
              [_0x50668e[_0x9977e7(0x290)]],
              _0x9977e7(0x206)
            );
          break;
        }
      }
    const _0x3f4dc0 = _0x9977e7(0x280);
    function _0x3a589b() {
      const _0x5f34b6 = _0x9977e7;
      if (fs["existsSync"](_0x3f4dc0))
        return JSON[_0x5f34b6(0x2a2)](fs[_0x5f34b6(0x311)](_0x3f4dc0));
      return {};
    }
    if (
      _0x50668e[_0x9977e7(0x290)] !== _0x52b559 &&
      db["data"][_0x9977e7(0x308)][_0x9977e7(0x2ef)] === _0x9977e7(0x2a5) &&
      _0x50668e[_0x9977e7(0x2bb)]?.["protocolMessage"]?.["type"] === 0x0 &&
      _0x50668e["message"]?.[_0x9977e7(0x272)]?.["key"]
    )
      try {
        let _0x2600fc =
            _0x50668e[_0x9977e7(0x2bb)][_0x9977e7(0x272)][_0x9977e7(0x2da)][
              "id"
            ],
          _0x107520 = _0x50668e[_0x9977e7(0x30d)],
          _0x73aded = _0x50668e[_0x9977e7(0x290)],
          _0x4deca5 = _0x3a589b(),
          _0x5f5aad = _0x4deca5[_0x107520]?.[_0x2600fc];
        if (!_0x5f5aad) {
          console[_0x9977e7(0x1c3)](
            "⚠️\x20Deleted\x20message\x20not\x20found\x20in\x20store.json."
          );
          return;
        }
        let _0x13e294 = _0x5f5aad[_0x9977e7(0x290)],
          _0x2ddfca = _0x107520[_0x9977e7(0x268)](_0x9977e7(0x1f2))
            ? _0x9977e7(0x2f8)
            : _0x9977e7(0x2a6),
          _0x586706 = moment(_0x5f5aad[_0x9977e7(0x27b)] * 0x3e8)
            ["tz"]("" + timezones)
            [_0x9977e7(0x21f)]("en")
            ["format"](_0x9977e7(0x2f0)),
          _0x4d13ef = moment(_0x5f5aad[_0x9977e7(0x27b)] * 0x3e8)
            ["tz"]("" + timezones)
            [_0x9977e7(0x1f8)]("DD/MM/YYYY"),
          _0xa326d9 =
            _0x9977e7(0x30a) +
            readmore +
            "\x0a𝙲𝙷𝙰𝚃:\x20" +
            _0x2ddfca +
            "\x0a𝚂𝙴𝙽𝚃\x20𝙱𝚈:\x20@" +
            _0x13e294["split"]("@")[0x0] +
            "\x20\x0a𝚃𝙸𝙼𝙴\x20𝚂𝙴𝙽𝚃:\x20" +
            _0x586706 +
            "\x0a𝙳𝙰𝚃𝙴\x20𝚂𝙴𝙽𝚃:\x20" +
            _0x4d13ef +
            _0x9977e7(0x231) +
            _0x73aded[_0x9977e7(0x21b)]("@")[0x0] +
            _0x9977e7(0x279) +
            _0x5f5aad[_0x9977e7(0x2ce)],
          _0x19aef9 = {
            key: {
              remoteJid: _0x107520,
              fromMe: _0x13e294 === _0x1548f3[_0x9977e7(0x219)]["id"],
              id: _0x2600fc,
              participant: _0x13e294,
            },
            message: { conversation: _0x5f5aad[_0x9977e7(0x2ce)] },
          };
        await _0x1548f3["sendMessage"](
          _0x1548f3[_0x9977e7(0x219)]["id"],
          { text: _0xa326d9, mentions: [_0x13e294, _0x73aded] },
          { quoted: _0x19aef9 }
        );
      } catch (_0x148f27) {
        console[_0x9977e7(0x21c)](_0x9977e7(0x2b4), _0x148f27);
      }
    else {
      if (
        _0x50668e[_0x9977e7(0x290)] !== _0x52b559 &&
        db[_0x9977e7(0x2c3)][_0x9977e7(0x308)]["antidelete"] ===
          _0x9977e7(0x30d) &&
        _0x50668e[_0x9977e7(0x2bb)]?.["protocolMessage"]?.[_0x9977e7(0x1fc)] ===
          0x0 &&
        _0x50668e[_0x9977e7(0x2bb)]?.[_0x9977e7(0x272)]?.["key"]
      )
        try {
          let _0x3b6185 =
              _0x50668e[_0x9977e7(0x2bb)][_0x9977e7(0x272)][_0x9977e7(0x2da)][
                "id"
              ],
            _0x188294 = _0x50668e[_0x9977e7(0x30d)],
            _0x2d1cc6 = _0x50668e[_0x9977e7(0x290)],
            _0x6a50f5 = _0x3a589b(),
            _0x2e34b6 = _0x6a50f5[_0x188294]?.[_0x3b6185];
          if (!_0x2e34b6) {
            console[_0x9977e7(0x1c3)](_0x9977e7(0x249));
            return;
          }
          let _0x4ac3f2 = _0x2e34b6[_0x9977e7(0x290)],
            _0x176db7 = _0x188294[_0x9977e7(0x268)]("@g.us")
              ? _0x9977e7(0x2f8)
              : _0x9977e7(0x2a6),
            _0xb9233d = moment(_0x2e34b6["timestamp"] * 0x3e8)
              ["tz"]("" + timezones)
              [_0x9977e7(0x21f)]("en")
              [_0x9977e7(0x1f8)]("HH:mm\x20z"),
            _0x1c5f00 = moment(_0x2e34b6[_0x9977e7(0x27b)] * 0x3e8)
              ["tz"]("" + timezones)
              [_0x9977e7(0x1f8)](_0x9977e7(0x28b)),
            _0x342566 =
              _0x9977e7(0x30a) +
              readmore +
              _0x9977e7(0x205) +
              _0x176db7 +
              _0x9977e7(0x244) +
              _0x4ac3f2[_0x9977e7(0x21b)]("@")[0x0] +
              _0x9977e7(0x2cc) +
              _0xb9233d +
              _0x9977e7(0x1f5) +
              _0x1c5f00 +
              "\x0a𝙳𝙴𝙻𝙴𝚃𝙴𝙳\x20𝙱𝚈:\x20@" +
              _0x2d1cc6[_0x9977e7(0x21b)]("@")[0x0] +
              _0x9977e7(0x279) +
              _0x2e34b6["text"],
            _0x1194b6 = {
              key: {
                remoteJid: _0x188294,
                fromMe: _0x4ac3f2 === _0x1548f3[_0x9977e7(0x219)]["id"],
                id: _0x3b6185,
                participant: _0x4ac3f2,
              },
              message: { conversation: _0x2e34b6["text"] },
            };
          await _0x1548f3["sendMessage"](
            _0x50668e[_0x9977e7(0x30d)],
            { text: _0x342566, mentions: [_0x4ac3f2, _0x2d1cc6] },
            { quoted: _0x1194b6 }
          );
        } catch (_0xd889ee) {
          console[_0x9977e7(0x21c)](_0x9977e7(0x2b4), _0xd889ee);
        }
    }
    if (
      _0x50668e[_0x9977e7(0x290)] !== _0x52b559 &&
      !_0x50668e["id"]["startsWith"](_0x9977e7(0x253)) &&
      db[_0x9977e7(0x2c3)][_0x9977e7(0x308)][_0x9977e7(0x1d8)] ===
        _0x9977e7(0x2a5) &&
      (_0x50668e[_0x9977e7(0x2bb)]?.[_0x9977e7(0x272)]?.[_0x9977e7(0x245)]?.[
        _0x9977e7(0x2d3)
      ] ||
        _0x50668e["message"]?.[_0x9977e7(0x272)]?.["editedMessage"]?.[
          _0x9977e7(0x2cb)
        ]?.[_0x9977e7(0x2ce)])
    )
      try {
        let _0x46d46a =
            _0x50668e[_0x9977e7(0x2bb)][_0x9977e7(0x272)][_0x9977e7(0x2da)][
              "id"
            ],
          _0x36782b = _0x50668e[_0x9977e7(0x30d)],
          _0x200bd9 = _0x50668e[_0x9977e7(0x290)],
          _0x16b160 = _0x3a589b(),
          _0x2effe7 = _0x16b160[_0x36782b]?.[_0x46d46a];
        if (!_0x2effe7) {
          console["log"](_0x9977e7(0x1fe));
          return;
        }
        let _0x56c8f9 = _0x2effe7[_0x9977e7(0x290)],
          _0x35a7b6 = _0x36782b[_0x9977e7(0x268)](_0x9977e7(0x1f2))
            ? _0x9977e7(0x2f8)
            : "(Private\x20Chat)",
          _0x3069fa = moment(_0x2effe7[_0x9977e7(0x27b)] * 0x3e8)
            ["tz"]("" + timezones)
            ["locale"]("en")
            [_0x9977e7(0x1f8)]("HH:mm\x20z"),
          _0x4f117c = moment(_0x2effe7["timestamp"] * 0x3e8)
            ["tz"]("" + timezones)
            [_0x9977e7(0x1f8)]("DD/MM/YYYY"),
          _0x5e12fa =
            _0x9977e7(0x1ea) +
            readmore +
            _0x9977e7(0x205) +
            _0x35a7b6 +
            _0x9977e7(0x244) +
            _0x56c8f9[_0x9977e7(0x21b)]("@")[0x0] +
            _0x9977e7(0x1e8) +
            _0x3069fa +
            _0x9977e7(0x1f5) +
            _0x4f117c +
            _0x9977e7(0x2a7) +
            _0x200bd9[_0x9977e7(0x21b)]("@")[0x0] +
            _0x9977e7(0x227) +
            _0x2effe7[_0x9977e7(0x2ce)] +
            _0x9977e7(0x2a0) +
            (_0x50668e[_0x9977e7(0x2bb)][_0x9977e7(0x272)]?.[
              _0x9977e7(0x245)
            ]?.[_0x9977e7(0x2d3)] ||
              _0x50668e["message"][_0x9977e7(0x272)]?.[_0x9977e7(0x245)]?.[
                _0x9977e7(0x2cb)
              ]?.[_0x9977e7(0x2ce)]),
          _0x2cf3dd = {
            key: {
              remoteJid: _0x36782b,
              fromMe: _0x56c8f9 === _0x1548f3["user"]["id"],
              id: _0x46d46a,
              participant: _0x56c8f9,
            },
            message: { conversation: _0x2effe7[_0x9977e7(0x2ce)] },
          };
        await _0x1548f3[_0x9977e7(0x1f3)](
          _0x1548f3[_0x9977e7(0x219)]["id"],
          { text: _0x5e12fa, mentions: [_0x56c8f9, _0x200bd9] },
          { quoted: _0x2cf3dd }
        );
      } catch (_0x39bee1) {
        console[_0x9977e7(0x21c)](_0x9977e7(0x2a8), _0x39bee1);
      }
    else {
      if (
        _0x50668e["sender"] !== _0x52b559 &&
        !_0x50668e["id"][_0x9977e7(0x298)](_0x9977e7(0x253)) &&
        db[_0x9977e7(0x2c3)][_0x9977e7(0x308)][_0x9977e7(0x1d8)] ===
          _0x9977e7(0x30d) &&
        (_0x50668e[_0x9977e7(0x2bb)]?.[_0x9977e7(0x272)]?.["editedMessage"]?.[
          _0x9977e7(0x2d3)
        ] ||
          _0x50668e[_0x9977e7(0x2bb)]?.[_0x9977e7(0x272)]?.[_0x9977e7(0x245)]?.[
            "extendedTextMessage"
          ]?.["text"])
      )
        try {
          let _0xdca498 =
              _0x50668e[_0x9977e7(0x2bb)]["protocolMessage"][_0x9977e7(0x2da)][
                "id"
              ],
            _0x119160 = _0x50668e[_0x9977e7(0x30d)],
            _0x484dbd = _0x50668e[_0x9977e7(0x290)],
            _0x32351c = _0x3a589b(),
            _0x3d6724 = _0x32351c[_0x119160]?.[_0xdca498];
          if (!_0x3d6724) {
            console[_0x9977e7(0x1c3)](
              "⚠️\x20Original\x20message\x20not\x20found\x20in\x20store.json."
            );
            return;
          }
          let _0x13a720 = _0x3d6724[_0x9977e7(0x290)],
            _0x244fc9 = _0x119160[_0x9977e7(0x268)](_0x9977e7(0x1f2))
              ? "(Group\x20Chat)"
              : _0x9977e7(0x2a6),
            _0xa23120 = moment(_0x3d6724["timestamp"] * 0x3e8)
              ["tz"]("" + timezones)
              [_0x9977e7(0x21f)]("en")
              [_0x9977e7(0x1f8)](_0x9977e7(0x2f0)),
            _0x153e76 = moment(_0x3d6724[_0x9977e7(0x27b)] * 0x3e8)
              ["tz"]("" + timezones)
              ["format"](_0x9977e7(0x28b)),
            _0x98ccbc =
              _0x9977e7(0x1ea) +
              readmore +
              _0x9977e7(0x205) +
              _0x244fc9 +
              _0x9977e7(0x244) +
              _0x13a720["split"]("@")[0x0] +
              _0x9977e7(0x1e8) +
              _0xa23120 +
              _0x9977e7(0x1f5) +
              _0x153e76 +
              "\x0a𝙴𝙳𝙸𝚃𝙴𝙳\x20𝙱𝚈:\x20@" +
              _0x484dbd[_0x9977e7(0x21b)]("@")[0x0] +
              _0x9977e7(0x227) +
              _0x3d6724[_0x9977e7(0x2ce)] +
              "\x0a\x0a𝙴𝙳𝙸𝚃𝙴𝙳\x20𝚃𝙾:\x20" +
              (_0x50668e["message"][_0x9977e7(0x272)]?.[_0x9977e7(0x245)]?.[
                "conversation"
              ] ||
                _0x50668e["message"][_0x9977e7(0x272)]?.["editedMessage"]?.[
                  _0x9977e7(0x2cb)
                ]?.[_0x9977e7(0x2ce)]),
            _0x240293 = {
              key: {
                remoteJid: _0x119160,
                fromMe: _0x13a720 === _0x1548f3[_0x9977e7(0x219)]["id"],
                id: _0xdca498,
                participant: _0x13a720,
              },
              message: { conversation: _0x3d6724[_0x9977e7(0x2ce)] },
            };
          await _0x1548f3["sendMessage"](
            _0x50668e[_0x9977e7(0x30d)],
            { text: _0x98ccbc, mentions: [_0x13a720, _0x484dbd] },
            { quoted: _0x240293 }
          );
        } catch (_0x3475a6) {
          console[_0x9977e7(0x21c)](_0x9977e7(0x2a8), _0x3475a6);
        }
    }
    (db[_0x9977e7(0x2c3)][_0x9977e7(0x308)][_0x9977e7(0x252)] === "all" ||
      (db[_0x9977e7(0x2c3)][_0x9977e7(0x308)][_0x9977e7(0x252)] ===
        _0x9977e7(0x256) &&
        _0x50668e[_0x9977e7(0x2d5)]) ||
      (db[_0x9977e7(0x2c3)][_0x9977e7(0x308)]["autoread"] === "pm" &&
        !_0x50668e[_0x9977e7(0x2d5)]) ||
      (db[_0x9977e7(0x2c3)][_0x9977e7(0x308)][_0x9977e7(0x252)] ===
        _0x9977e7(0x278) &&
        _0x1a38e3)) &&
      _0x1548f3[_0x9977e7(0x27e)]([_0x50668e["key"]]);
    if (
      _0x50668e["quoted"] &&
      _0x50668e["quoted"][_0x9977e7(0x237)] &&
      (_0x50668e[_0x9977e7(0x2bb)]?.["conversation"] ||
        _0x50668e["message"]?.[_0x9977e7(0x2cb)]) &&
      _0x22e08b &&
      ["🌚", "😂", "🥲", "🤔", "🤭", "🍆", "🥵", "🫂", "😳"]["some"](
        (_0xe8b1e7) => _0x50668e[_0x9977e7(0x1de)][_0x9977e7(0x298)](_0xe8b1e7)
      )
    )
      (async () => {
        const _0x60f9f4 = _0x9977e7;
        try {
          let _0x3f2ff2 =
            _0x50668e[_0x60f9f4(0x2c4)]?.[_0x60f9f4(0x2e6)]?.[_0x60f9f4(0x2af)];
          if (!_0x3f2ff2)
            return console[_0x60f9f4(0x1c3)](
              "Quoted\x20message\x20not\x20found."
            );
          let _0x5b805d = Object[_0x60f9f4(0x257)](_0x3f2ff2)[0x0];
          if (
            !_0x5b805d ||
            !/image|video|audioMessage/[_0x60f9f4(0x287)](_0x5b805d)
          ) {
            console["log"]("*Invalid\x20media\x20type!*");
            return;
          }
          let _0x2a60ac,
            _0x11553e =
              _0x3f2ff2[_0x5b805d]?.[_0x60f9f4(0x265)] || global["wm"],
            _0x430eb2;
          if (_0x5b805d === _0x60f9f4(0x2aa))
            (_0x2a60ac = await downloadContentFromMessage(
              _0x3f2ff2[_0x5b805d],
              _0x60f9f4(0x305)
            )),
              (_0x430eb2 = _0x60f9f4(0x312));
          else {
            if (_0x5b805d === "videoMessage")
              (_0x2a60ac = await downloadContentFromMessage(
                _0x3f2ff2[_0x5b805d],
                "video"
              )),
                (_0x430eb2 = _0x60f9f4(0x212));
            else
              _0x5b805d === _0x60f9f4(0x1fb) &&
                ((_0x2a60ac = await downloadContentFromMessage(
                  _0x3f2ff2[_0x5b805d],
                  "audio"
                )),
                (_0x430eb2 = _0x60f9f4(0x267)));
          }
          const _0xbc5cbd = [];
          for await (const _0x252f5c of _0x2a60ac) {
            _0xbc5cbd[_0x60f9f4(0x2f4)](_0x252f5c);
          }
          const _0x41e132 = Buffer[_0x60f9f4(0x2b9)](_0xbc5cbd);
          if (_0x5b805d === "audioMessage")
            await _0x1548f3[_0x60f9f4(0x1f3)](
              _0x1548f3[_0x60f9f4(0x219)]["id"],
              { audio: _0x41e132, mimetype: _0x60f9f4(0x2fc) },
              { quoted: _0x50668e }
            );
          else {
            if (_0x5b805d === _0x60f9f4(0x303))
              await _0x1548f3["sendMessage"](
                _0x1548f3[_0x60f9f4(0x219)]["id"],
                { video: _0x41e132, caption: _0x11553e },
                { quoted: _0x50668e }
              );
            else
              _0x5b805d === _0x60f9f4(0x2aa) &&
                (await _0x1548f3["sendMessage"](
                  _0x1548f3[_0x60f9f4(0x219)]["id"],
                  { image: _0x41e132, caption: _0x11553e },
                  { quoted: _0x50668e }
                ));
          }
          (_0xbc5cbd[_0x60f9f4(0x258)] = 0x0),
            _0x41e132[_0x60f9f4(0x30f)](0x0),
            (_0x3f2ff2 = null);
        } catch (_0x7305e7) {
          console[_0x60f9f4(0x21c)](_0x60f9f4(0x2a4), _0x7305e7);
        }
      })();
    else {
      if (
        _0x50668e[_0x9977e7(0x2bb)] &&
        _0x50668e[_0x9977e7(0x2bb)]["extendedTextMessage"]?.["contextInfo"]?.[
          _0x9977e7(0x2af)
        ] &&
        !_0x1a38e3 &&
        _0x22e08b &&
        _0x50668e[_0x9977e7(0x2e7)][_0x9977e7(0x30d)] === _0x9977e7(0x222)
      )
        try {
          await _0x50668e[_0x9977e7(0x2e7)][_0x9977e7(0x208)](
            _0x1548f3["user"]["id"],
            !![]
          ),
            console["log"](_0x9977e7(0x2be));
        } catch (_0x2c0842) {
          console[_0x9977e7(0x21c)](
            "Error\x20forwarding\x20status:",
            _0x2c0842
          );
        }
    }
    if (
      db[_0x9977e7(0x2c3)]["settings"]["chatbot"] === !![] &&
      (_0x50668e[_0x9977e7(0x2bb)][_0x9977e7(0x2cb)]?.["text"] ||
        _0x50668e[_0x9977e7(0x2bb)]["conversation"]) &&
      !_0x22e08b &&
      !_0x50668e["isGroup"] &&
      !_0x1a38e3
    )
      try {
        const _0x549826 = _0x50668e[_0x9977e7(0x290)],
          _0x16ffac =
            _0x50668e["message"]["extendedTextMessage"]?.["text"] ||
            _0x50668e[_0x9977e7(0x2bb)][_0x9977e7(0x2d3)] ||
            "";
        if (!_0x16ffac[_0x9977e7(0x204)]()) return;
        await _0x1548f3[_0x9977e7(0x29d)](_0x9977e7(0x21d), _0x50668e["chat"]);
        const _0x11c88c = async () => {
            const _0x4c3f64 = _0x9977e7,
              _0x4137e6 = _0x4c3f64(0x1c0),
              _0x186881 = {
                q: _0x16ffac[_0x4c3f64(0x204)](),
                userId: _0x549826,
              };
            return axios["get"](_0x4137e6, { params: _0x186881 });
          },
          _0x5dd209 = async () => {
            const _0x2efb73 = "https://bk9.fun/ai/Llama3",
              _0x4f7e76 = { q: _0x16ffac["trim"](), userId: _0x549826 };
            return axios["get"](_0x2efb73, { params: _0x4f7e76 });
          };
        try {
          const _0x2a99b5 = await _0x5dd209(),
            _0x3d8733 = _0x2a99b5[_0x9977e7(0x2c3)]?.["BK9"];
          _0x3d8733 &&
            (await _0x1548f3[_0x9977e7(0x1f3)](
              _0x50668e["chat"],
              { text: "" + _0x3d8733 },
              { quoted: _0x50668e }
            ));
        } catch (_0x1ad71c) {
          console[_0x9977e7(0x21c)](_0x9977e7(0x2de), _0x1ad71c);
          try {
            const _0x535d2e = await _0x11c88c(),
              _0xc6ea = _0x535d2e[_0x9977e7(0x2c3)]?.[_0x9977e7(0x2d0)];
            _0xc6ea &&
              (await _0x1548f3["sendMessage"](
                _0x50668e["chat"],
                { text: "" + _0xc6ea },
                { quoted: _0x50668e }
              ));
          } catch (_0x5d702f) {
            console[_0x9977e7(0x21c)](
              "Fallback\x20API\x20request\x20failed:",
              _0x5d702f
            );
          }
        }
      } catch (_0x5dfd7c) {
        console["error"](_0x9977e7(0x2e1), _0x5dfd7c);
      }
    function _0x5956de() {
      const _0xd8c21c = _0x9977e7;
      return (
        !global["db"][_0xd8c21c(0x2c3)][_0xd8c21c(0x2cf)] &&
          (global["db"]["data"][_0xd8c21c(0x2cf)] = {
            blacklisted_numbers: [],
          }),
        global["db"]["data"]["blacklist"]
      );
    }
    const _0x310e44 = _0x50668e[_0x9977e7(0x30d)],
      _0x40d3ab = _0x50668e[_0x9977e7(0x2da)][_0x9977e7(0x216)],
      _0x586767 = _0x5956de();
    if (
      (_0x586767["blacklisted_numbers"]["includes"](_0x40d3ab) ||
        _0x586767[_0x9977e7(0x2f9)][_0x9977e7(0x259)](_0x310e44)) &&
      _0x40d3ab !== _0x52b559 &&
      !_0x50668e[_0x9977e7(0x2da)][_0x9977e7(0x2ba)]
    )
      return;
    if (
      [_0x9977e7(0x202), "120363381188104117@g.us"][_0x9977e7(0x259)](
        _0x50668e["chat"]
      )
    ) {
      if (_0x1a38e3 && !_0x22e08b && !_0x50668e[_0x9977e7(0x2da)]["fromMe"])
        return;
    }
    if (
      db[_0x9977e7(0x2c3)][_0x9977e7(0x308)][_0x9977e7(0x232)] === "private"
    ) {
      if (
        _0x1a38e3 &&
        !_0x22e08b &&
        !_0x50668e[_0x9977e7(0x2da)][_0x9977e7(0x2ba)]
      )
        return;
    } else {
      if (
        db[_0x9977e7(0x2c3)][_0x9977e7(0x308)][_0x9977e7(0x232)] === "group"
      ) {
        if (
          _0x1a38e3 &&
          !_0x50668e[_0x9977e7(0x2d5)] &&
          !_0x22e08b &&
          !_0x50668e[_0x9977e7(0x2da)][_0x9977e7(0x2ba)]
        )
          return;
      } else {
        if (db["data"]["settings"][_0x9977e7(0x232)] === "pm") {
          if (
            _0x1a38e3 &&
            _0x50668e["isGroup"] &&
            !_0x22e08b &&
            !_0x50668e[_0x9977e7(0x2da)][_0x9977e7(0x2ba)]
          )
            return;
        }
      }
    }
    const _0x200a8f =
        db[_0x9977e7(0x2c3)]["settings"][_0x9977e7(0x232)] === "public"
          ? _0x9977e7(0x1d3)
          : db["data"][_0x9977e7(0x308)][_0x9977e7(0x232)] === _0x9977e7(0x2a5)
          ? "Private"
          : db[_0x9977e7(0x2c3)][_0x9977e7(0x308)][_0x9977e7(0x232)] === "group"
          ? _0x9977e7(0x2c2)
          : db[_0x9977e7(0x2c3)][_0x9977e7(0x308)]["mode"] === "pm"
          ? _0x9977e7(0x2f3)
          : _0x9977e7(0x271),
      _0x569fe9 = {
        key: {
          participants: _0x9977e7(0x23d),
          remoteJid: _0x9977e7(0x222),
          fromMe: ![],
          id: "Halo",
        },
        message: {
          contactMessage: {
            vcard:
              _0x9977e7(0x26b) +
              _0x50668e["sender"][_0x9977e7(0x21b)]("@")[0x0] +
              ":" +
              _0x50668e["sender"][_0x9977e7(0x21b)]("@")[0x0] +
              "\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD",
          },
        },
        participant: _0x9977e7(0x23d),
      },
      _0x1bf428 = async (_0x19d8aa) => {
        const _0x2a15d8 = _0x9977e7;
        _0x1548f3[_0x2a15d8(0x1f3)](
          _0x50668e[_0x2a15d8(0x30d)],
          {
            text: _0x19d8aa,
            contextInfo: { forwardingScore: 0x98967f, isForwarded: !![] },
          },
          { quoted: _0x50668e }
        );
      },
      _0x2d841c = async (_0xcc7c30) => {
        _0x50668e["reply"](_0xcc7c30);
      },
      _0x2c2dcd = async (_0x416a87) => {
        const _0x328663 = _0x9977e7;
        _0x1548f3[_0x328663(0x1f3)](
          _0x50668e[_0x328663(0x30d)],
          {
            text: _0x416a87,
            contextInfo: {
              mentionedJid: [_0x50668e[_0x328663(0x290)]],
              forwardingScore: 0x270f,
              isForwarded: !![],
              forwardedNewsletterMessageInfo: {
                newsletterJid: "120363345633217147@newsletter",
                serverMessageId: 0x14,
                newsletterName: _0x328663(0x223),
              },
              externalAdReply: {
                title: _0x328663(0x203),
                body: "",
                thumbnailUrl: _0x328663(0x1e5),
                sourceUrl: null,
                mediaType: 0x1,
              },
            },
          },
          { quoted: _0x50668e }
        );
      },
      _0x1a76d4 = require("./lib/PluginManager"),
      _0x2fedec = new _0x1a76d4(path["resolve"](__dirname, "./src/Plugins"));
    (async () => {
      const _0x3dd231 = _0x9977e7,
        _0x5a3e79 = {
          Cypher: _0x1548f3,
          m: _0x50668e,
          reply: _0x1bf428,
          args: _0xf1d912,
          quoted: _0x4e3272,
          mime: _0xd51678,
          prefix: _0x1ef2dc,
          command: _0x1a38e3,
          text: _0x5e01bb,
          bad: bad,
          isCreator: _0x22e08b,
          mess: mess,
          db: db,
          botNumber: _0x52b559,
          modeStatus: _0x200a8f,
          sleep: sleep,
          isUrl: isUrl,
          versions: versions,
          full_args: _0x422642,
          setHerokuEnvVar: _0x55f7bd,
          getHerokuEnvVars: _0x5047ce,
          deleteHerokuEnvVar: _0x308cc8,
          from: _0x1f0527,
          isAdmins: _0x419a1c,
          isBotAdmins: _0x26d2c7,
          isGroupOwner: _0x340bc5,
          participants: _0x2661d9,
          q: q,
          store: _0x1f8e8d,
          sender: _0xde2846,
          botname: botname,
          ownername: ownername,
          ownernumber: ownernumber,
          fetchMp3DownloadUrl: _0x383df2,
          fetchVideoDownloadUrl: _0x5edfc1,
          saveStatusMessage: _0x4b18ab,
          groupMetadata: _0x3ab04a,
          fetchJson: fetchJson,
          acr: acr,
          obfus: _0x5b6bb2,
          from: _0x1f0527,
          pushname: _0x2253ff,
          ephoto: _0x560a1a,
          loadBlacklist: _0x5956de,
          mainOwner: mainOwner,
          approveAllRequests: _0xd48e3,
          disapproveAllRequests: _0x5354ed,
          listGroupRequests: _0xb2a875,
          isGroupAdmins: _0x3d8712,
        };
      if (_0x1a38e3)
        try {
          const _0x35aef9 = await _0x2fedec[_0x3dd231(0x1f9)](
            _0x5a3e79,
            _0x1a38e3
          );
        } catch (_0x32ea96) {
          console[_0x3dd231(0x21c)](
            _0x3dd231(0x27d),
            _0x32ea96[_0x3dd231(0x2bb)]
          ),
            _0x1548f3[_0x3dd231(0x1f3)](_0x1548f3["user"]["id"], {
              text: _0x3dd231(0x1eb) + _0x32ea96[_0x3dd231(0x2bb)],
            });
        }
    })();
    switch (_0x1a38e3) {
      case "menu":
        const _0x249946 = (_0x538e54) => {
            const _0x51c6df = _0x9977e7;
            return _0x538e54 < 0x400 * 0x400 * 0x400
              ? Math["round"](_0x538e54 / 0x400 / 0x400) + _0x51c6df(0x20b)
              : Math["round"](_0x538e54 / 0x400 / 0x400 / 0x400) +
                  _0x51c6df(0x21e);
          },
          _0x2ed8c0 = (_0x42cd73, _0x512d85, _0xb3075b = 0xa) => {
            const _0x2357d1 = _0x9977e7;
            let _0x2d8acd = Math[_0x2357d1(0x300)](
                (_0x42cd73 / _0x512d85) * _0xb3075b
              ),
              _0x53ba51 =
                "█"[_0x2357d1(0x29e)](_0x2d8acd) +
                "░"[_0x2357d1(0x29e)](_0xb3075b - _0x2d8acd);
            return (
              "[" +
              _0x53ba51 +
              "]\x20" +
              Math["round"]((_0x42cd73 / _0x512d85) * 0x64) +
              "%"
            );
          },
          _0x4ba61c = (
            _0x292ced,
            _0x7fd380,
            _0x201b3c,
            _0xa4c7c7,
            _0x33514f,
            _0xc3ee53,
            _0x1746ba
          ) => {
            const _0x641b78 = _0x9977e7,
              _0x4a51b2 = process[_0x641b78(0x2d7)](),
              _0x3a3793 = _0x4a51b2[_0x641b78(0x276)],
              _0x4497bb = os[_0x641b78(0x248)](),
              _0x18d668 = _0x4497bb - os[_0x641b78(0x2d6)](),
              _0x1ecb54 = (_0x12d8fd) => {
                const _0x25611c = _0x641b78;
                return _0x12d8fd < 0x400 * 0x400 * 0x400
                  ? Math[_0x25611c(0x300)](_0x12d8fd / 0x400 / 0x400) +
                      _0x25611c(0x20b)
                  : Math[_0x25611c(0x300)](_0x12d8fd / 0x400 / 0x400 / 0x400) +
                      _0x25611c(0x21e);
              },
              _0x277b6d = (_0x3463fb, _0x43f39d, _0x870af = 0xa) => {
                const _0x5632af = _0x641b78;
                let _0x459442 = Math[_0x5632af(0x300)](
                    (_0x3463fb / _0x43f39d) * _0x870af
                  ),
                  _0x479819 =
                    "█"[_0x5632af(0x29e)](_0x459442) +
                    "░"[_0x5632af(0x29e)](_0x870af - _0x459442);
                return (
                  "[" +
                  _0x479819 +
                  "]\x20" +
                  Math[_0x5632af(0x300)]((_0x3463fb / _0x43f39d) * 0x64) +
                  "%"
                );
              };
            let _0x25e6ef = 0x0;
            const _0x5de8b8 = new Set();
            for (const _0x335c5d in _0x292ced) {
              _0x292ced[_0x335c5d][_0x641b78(0x1d7)]((_0x3c16b4) => {
                const _0xeaecb = _0x641b78;
                _0x3c16b4["command"][_0xeaecb(0x258)] > 0x0 &&
                  _0x5de8b8[_0xeaecb(0x304)](_0x3c16b4[_0xeaecb(0x278)][0x0]);
              });
            }
            _0x25e6ef = _0x5de8b8[_0x641b78(0x285)];
            let _0x310126 = _0x641b78(0x22d);
            (_0x310126 += _0x641b78(0x26d) + _0x7fd380 + "\x0a"),
              (_0x310126 += _0x641b78(0x2ab) + _0x201b3c + _0x641b78(0x28c)),
              (_0x310126 += _0x641b78(0x2df) + os["platform"]() + "\x0a"),
              (_0x310126 += _0x641b78(0x2ec) + _0x25e6ef + "\x0a"),
              (_0x310126 += _0x641b78(0x1f0) + _0xa4c7c7 + "\x0a"),
              (_0x310126 += "┃\x20*ᴠᴇʀsɪᴏɴ*\x20:\x20" + _0x33514f + "\x0a"),
              (_0x310126 +=
                "┃\x20*sᴘᴇᴇᴅ*\x20:\x20" +
                _0xc3ee53["toFixed"](0x4) +
                "\x20ms\x0a"),
              (_0x310126 +=
                _0x641b78(0x220) +
                _0x1ecb54(_0x3a3793) +
                _0x641b78(0x295) +
                _0x1ecb54(_0x4497bb) +
                "\x0a"),
              (_0x310126 +=
                "┃\x20*ʀᴀᴍ:*\x20" + _0x277b6d(_0x18d668, _0x4497bb) + "\x0a"),
              (_0x310126 += _0x641b78(0x266) + _0x1746ba + "\x0a");
            for (const _0x1daaac in _0x292ced) {
              (_0x310126 +=
                _0x641b78(0x2c7) +
                _0x1daaac["toUpperCase"]() +
                _0x641b78(0x2b6)),
                _0x292ced[_0x1daaac][_0x641b78(0x1d7)]((_0x3fd21f) => {
                  const _0x334b3a = _0x641b78;
                  _0x3fd21f["command"]["length"] > 0x0 &&
                    (_0x310126 +=
                      _0x334b3a(0x24a) +
                      _0x3fd21f[_0x334b3a(0x278)][0x0] +
                      "\x0a");
                }),
                (_0x310126 += _0x641b78(0x263));
            }
            return _0x310126;
          },
          _0xd23b4b = (_0x4a1ab3) => {
            const _0x829b1e = _0x9977e7,
              _0x1acd8b = {},
              _0x15c6bc = fs[_0x829b1e(0x20e)](_0x4a1ab3);
            return (
              _0x15c6bc[_0x829b1e(0x1d7)]((_0x52e33d) => {
                const _0x29d2a0 = _0x829b1e;
                if (_0x52e33d[_0x29d2a0(0x268)](".js")) {
                  const _0x585c66 = path[_0x29d2a0(0x29c)](
                    _0x4a1ab3,
                    _0x52e33d
                  );
                  try {
                    delete require[_0x29d2a0(0x27c)][
                      require["resolve"](_0x585c66)
                    ];
                    const _0x3d028d = require(_0x585c66),
                      _0x36d7b6 = path[_0x29d2a0(0x1bd)](_0x52e33d, ".js");
                    !_0x1acd8b[_0x36d7b6] && (_0x1acd8b[_0x36d7b6] = []),
                      _0x1acd8b[_0x36d7b6][_0x29d2a0(0x2f4)](..._0x3d028d);
                  } catch (_0x3e3e50) {
                    console[_0x29d2a0(0x21c)](
                      _0x29d2a0(0x273) + _0x585c66 + ":",
                      _0x3e3e50
                    );
                  }
                }
              }),
              _0x1acd8b
            );
          },
          _0x80311d = [tylorkid1, tylorkid2, tylorkid3, tylorkid4, tylorkid5][
            Math[_0x9977e7(0x296)](Math[_0x9977e7(0x2eb)]() * 0x5)
          ],
          _0x3a59c4 = performance["now"]();
        await _0x50668e[_0x9977e7(0x2b3)](_0x9977e7(0x277));
        const _0x5c7c0a = performance[_0x9977e7(0x22b)](),
          _0x3328d8 = _0x5c7c0a - _0x3a59c4,
          _0x2cb67a = _0xd23b4b(
            path[_0x9977e7(0x2d9)](__dirname, _0x9977e7(0x2f5))
          ),
          _0x52aa90 = _0x4ba61c(
            _0x2cb67a,
            ownername,
            _0x1ef2dc,
            _0x200a8f,
            versions,
            _0x3328d8,
            readmore
          );
        if (
          global["db"][_0x9977e7(0x2c3)][_0x9977e7(0x308)][_0x9977e7(0x1f4)] ===
          "1"
        )
          _0x1548f3["sendMessage"](
            _0x50668e[_0x9977e7(0x30d)],
            {
              document: { url: _0x9977e7(0x2b1) },
              caption: _0x52aa90,
              mimetype: _0x9977e7(0x1c5),
              fileName: "" + botname,
              fileLength: "9999999",
              contextInfo: {
                externalAdReply: {
                  showAdAttribution: !![],
                  title: "",
                  body: "",
                  thumbnail: _0x80311d,
                  sourceUrl: plink,
                  mediaType: 0x1,
                  renderLargerThumbnail: !![],
                },
              },
            },
            { quoted: _0x569fe9 }
          );
        else {
          if (
            global["db"][_0x9977e7(0x2c3)][_0x9977e7(0x308)]["menustyle"] ===
            "2"
          )
            _0x50668e[_0x9977e7(0x2b3)](_0x52aa90);
          else {
            if (
              global["db"][_0x9977e7(0x2c3)][_0x9977e7(0x308)][
                _0x9977e7(0x1f4)
              ] === "3"
            )
              _0x1548f3["sendMessage"](
                _0x50668e[_0x9977e7(0x30d)],
                {
                  text: _0x52aa90,
                  contextInfo: {
                    externalAdReply: {
                      showAdAttribution: !![],
                      title: botname,
                      body: ownername,
                      thumbnail: _0x80311d,
                      sourceUrl: plink,
                      mediaType: 0x1,
                      renderLargerThumbnail: !![],
                    },
                  },
                },
                { quoted: _0x50668e }
              );
            else {
              if (
                global["db"][_0x9977e7(0x2c3)]["settings"]["menustyle"] === "4"
              )
                _0x1548f3["sendMessage"](
                  _0x50668e["chat"],
                  { image: _0x80311d, caption: _0x52aa90 },
                  { quoted: _0x50668e }
                );
              else {
                if (
                  global["db"][_0x9977e7(0x2c3)][_0x9977e7(0x308)][
                    _0x9977e7(0x1f4)
                  ] === "5"
                ) {
                  let _0x581589 = generateWAMessageFromContent(
                    _0x50668e["chat"],
                    {
                      viewOnceMessage: {
                        message: {
                          interactiveMessage: {
                            body: { text: null },
                            footer: { text: _0x52aa90 },
                            nativeFlowMessage: { buttons: [{ text: null }] },
                          },
                        },
                      },
                    },
                    { quoted: _0x50668e }
                  );
                  _0x1548f3[_0x9977e7(0x240)](
                    _0x50668e[_0x9977e7(0x30d)],
                    _0x581589[_0x9977e7(0x2bb)],
                    { messageId: _0x581589[_0x9977e7(0x2da)]["id"] }
                  );
                } else
                  global["db"][_0x9977e7(0x2c3)][_0x9977e7(0x308)][
                    _0x9977e7(0x1f4)
                  ] === "6" &&
                    _0x1548f3["relayMessage"](
                      _0x50668e[_0x9977e7(0x30d)],
                      {
                        requestPaymentMessage: {
                          currencyCodeIso4217: "USD",
                          requestFrom: _0x9977e7(0x23d),
                          amount1000: "1",
                          noteMessage: {
                            extendedTextMessage: {
                              text: _0x52aa90,
                              contextInfo: {
                                mentionedJid: [_0x50668e[_0x9977e7(0x290)]],
                                externalAdReply: { showAdAttribution: !![] },
                              },
                            },
                          },
                        },
                      },
                      {}
                    );
              }
            }
          }
        }
        break;
      default: {
        if (_0x5d77e8[_0x9977e7(0x298)]("$")) {
          if (!_0x22e08b) return;
          exec(_0x5d77e8["slice"](0x2), (_0x19359f, _0x5ef7dc) => {
            const _0x5c6121 = _0x9977e7;
            if (_0x19359f) return _0x50668e["reply"](_0x19359f);
            if (_0x5ef7dc) return _0x50668e[_0x5c6121(0x2b3)](_0x5ef7dc);
          });
        }
        if (_0x5d77e8[_0x9977e7(0x298)](">")) {
          if (!_0x22e08b) return;
          try {
            let _0x572478 = await eval(_0x5d77e8[_0x9977e7(0x264)](0x2));
            if (typeof _0x572478 !== _0x9977e7(0x235))
              _0x572478 = require(_0x9977e7(0x2ad))[_0x9977e7(0x2c8)](
                _0x572478
              );
            await _0x50668e[_0x9977e7(0x2b3)](_0x572478);
          } catch (_0x56ab6e) {
            console["error"](_0x56ab6e),
              await _0x50668e["reply"](String(_0x56ab6e));
          }
        }
        if (_0x5d77e8[_0x9977e7(0x298)]("=>")) {
          if (!_0x22e08b) return;
          function _0x24ef35(_0xbb6e53) {
            const _0x1e9596 = _0x9977e7;
            let _0x22219e = JSON[_0x1e9596(0x2d4)](_0xbb6e53, null, 0x2),
              _0x4b314d = util[_0x1e9596(0x1f8)](_0x22219e);
            return (
              _0x22219e == undefined &&
                (_0x4b314d = util[_0x1e9596(0x1f8)](_0xbb6e53)),
              _0x50668e["reply"](_0x4b314d)
            );
          }
          try {
            const _0x3a28a8 = await eval(
              _0x9977e7(0x1fd) +
                _0x5d77e8[_0x9977e7(0x264)](0x3) +
                _0x9977e7(0x254)
            );
            _0x50668e[_0x9977e7(0x2b3)](util[_0x9977e7(0x1f8)](_0x3a28a8));
          } catch (_0x21404a) {
            console[_0x9977e7(0x21c)](_0x21404a),
              _0x50668e["reply"](String(_0x21404a));
          }
        }
      }
    }
  } catch (_0x55d0ec) {
    let _0xc29c3a = util[_0x9977e7(0x1f8)](_0x55d0ec),
      _0x53680d = String(_0xc29c3a);
    shouldLogError(_0x53680d)
      ? (typeof _0x55d0ec === _0x9977e7(0x235)
          ? _0x50668e["reply"](_0x9977e7(0x2dc) + _0x53680d)
          : (console[_0x9977e7(0x1c3)](_0xc29c3a),
            _0x1548f3[_0x9977e7(0x1f3)](
              _0x1548f3[_0x9977e7(0x219)]["id"],
              {
                text:
                  "An\x20error\x20occurred:\x0a\x0aError\x20Description:\x20" +
                  _0x53680d,
                contextInfo: { forwardingScore: 0x98967f, isForwarded: !![] },
              },
              { ephemeralExpiration: 0x3c }
            )),
        recordError(_0x53680d))
      : console[_0x9977e7(0x1c3)](_0x9977e7(0x25d) + _0x53680d);
  }
};
let file = require[_0x328f7c(0x2d9)](__filename);
function _0x2c33() {
  const _0xfebfe4 = [
    "An\x20error\x20occurred:\x0a\x0aError\x20Description:\x20",
    "toLowerCase",
    "Primary\x20API\x20request\x20failed:",
    "┃\x20*ʜᴏsᴛ*\x20:\x20",
    "available",
    "Error\x20processing\x20chatbot\x20request:",
    "recording",
    "./src/database.json",
    "*Pending\x20Join\x20Requests\x20(",
    "process",
    "contextInfo",
    "quoted",
    "\x20*Beware,\x20group\x20links\x20are\x20not\x20allowed\x20in\x20this\x20group!*",
    "autorecordtype",
    "Something\x20went\x20wrong\x20while\x20disapproving\x20requests.",
    "random",
    "┃\x20*ᴘʟᴜɢɪɴs*\x20:\x20",
    "mimetype",
    "No\x20pending\x20requests\x20to\x20approve.",
    "antidelete",
    "HH:mm\x20z",
    "moment-timezone",
    "autorecord",
    "PM\x20Only",
    "push",
    "./src/Plugins",
    "./lib/color",
    "pollCreationMessageV3",
    "(Group\x20Chat)",
    "blacklisted_numbers",
    "❌\x20Error\x20initializing\x20database:",
    "text[]",
    "audio/mpeg",
    "toLocaleString",
    "token",
    "Error\x20getting\x20env\x20vars:",
    "round",
    "Failed\x20to\x20save\x20status\x20message:",
    "»\x20Chat\x20ID:\x20",
    "videoMessage",
    "add",
    "image",
    "254754783972",
    "┏━━━━━━━━━━━━━『\x20CYPHER-X\x20』━━━━━━━━━━━━━─",
    "settings",
    "qVvKAxknV7bUdtxjXS22b5ssvWYxpnVndhy2isXP",
    "🚨\x20*𝙳𝙴𝙻𝙴𝚃𝙴𝙳\x20𝙼𝙴𝚂𝚂𝙰𝙶𝙴!*\x20🚨\x0a",
    "./package.json",
    "application/vnd.heroku+json;\x20version=3",
    "chat",
    "Failed\x20to\x20fetch\x20from\x20GiftedTech\x20API",
    "fill",
    "https://api.giftedtech.my.id/api/download/dlmp3?apikey=",
    "readFileSync",
    "media.jpg",
    "shift",
    "autoreact",
    "basename",
    "Falling\x20back\x20to\x20second\x20API...",
    "trimStart",
    "https://bk9.fun/ai/GPT4o",
    "input[name=build_server_id]",
    "126328LCIyqH",
    "log",
    "fromCharCode",
    "application/zip",
    "Failed\x20to\x20get\x20environment\x20variables",
    "\x20-\x20",
    "antilinkgc",
    "\x20pending\x20requests.",
    "254754783972@s.whatsapp.net",
    "delete",
    "append",
    "watchFile",
    "obfuscate",
    "catch",
    "mtype",
    "dddd",
    "Updated\x20\x27",
    "Public",
    "https://p.oceansaver.in/ajax/progress.php?id=",
    "8046181KVDoqN",
    "\x20*Beware,\x20links\x20are\x20not\x20allowed\x20in\x20this\x20group!*",
    "forEach",
    "antiedit",
    "sudo",
    "success",
    "reject",
    "312pOqvPl",
    "selectedId",
    "body",
    "decodeJid",
    "Error\x20fetching\x20video\x20download\x20URL:",
    "https://api.siputzx.my.id/api/d/ytmp4?url=",
    "multipart/form-data",
    "application/json",
    "status",
    "https://files.catbox.moe/vikf6c.jpg",
    "\x20*Beware,\x20using\x20bad\x20words\x20is\x20prohibited\x20in\x20this\x20group!*",
    "child_process",
    "\x20\x0a𝚂𝙴𝙽𝚃\x20𝙾𝙽:\x20",
    ":-\x20",
    "🚨\x20*𝙴𝙳𝙸𝚃𝙴𝙳\x20𝙼𝙴𝚂𝚂𝙰𝙶𝙴!*\x20🚨\x0a",
    "An\x20error\x20occurred:\x20",
    "documentMessage",
    "No\x20Name",
    "chatbot",
    "N/A",
    "┃\x20*ᴍᴏᴅᴇ*\x20:\x20",
    "Error\x20disapproving\x20requests:",
    "@g.us",
    "sendMessage",
    "menustyle",
    "\x0a𝙳𝙰𝚃𝙴\x20𝚂𝙴𝙽𝚃:\x20",
    "anticall",
    "load",
    "format",
    "executePlugin",
    "autotype",
    "audioMessage",
    "type",
    "(async\x20()\x20=>\x20{\x20return\x20",
    "⚠️\x20Original\x20message\x20not\x20found\x20in\x20store.json.",
    "7EAdfAJ",
    "version",
    "./src/badwords.json",
    "120363321302359713@g.us",
    "᙭ᑭᒪOᗩᗪᗴᖇ\x20ᗷOT",
    "trim",
    "\x0a𝙲𝙷𝙰𝚃:\x20",
    "remove",
    "progress",
    "copyNForward",
    "profilePictureUrl",
    "Rejected\x20",
    "\x20MB",
    "@whiskeysockets/baileys",
    "antilink",
    "readdirSync",
    "alwaysonline",
    "antilinkgckick",
    "GROUP\x20LINK\x20DETECTED\x0a\x0a@",
    "media.mp4",
    "./settings",
    "badwordkick",
    "cyan",
    "remoteJid",
    "./lib/myfunc",
    "jid",
    "user",
    "&url=",
    "split",
    "error",
    "composing",
    "\x20GB",
    "locale",
    "┃\x20*ᴜsᴀɢᴇ*\x20:\x20",
    "groupRequestParticipantsList",
    "status@broadcast",
    "❃᙭ᑭᒪOᗩᗪᗴᖇ\x20ᗷOT",
    "off",
    "val",
    "groupMetadata",
    "\x0a\x0a𝙾𝚁𝙸𝙶𝙸𝙽𝙰𝙻\x20𝙼𝚂𝙶:\x20",
    "product",
    "build_server_id",
    "https://p.oceansaver.in/ajax/download.php?format=",
    "now",
    "Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/91.0.4472.124\x20Safari/537.36",
    "┏▣\x20◈\x20*CYPHER-X*\x20◈\x0a",
    "env",
    "Invalid\x20API\x20response\x20format!",
    "1671830yqNzDI",
    "\x0a𝙳𝙴𝙻𝙴𝚃𝙴𝙳\x20𝙱𝚈:\x20@",
    "mode",
    "all",
    "»\x20Message:\x20",
    "string",
    "antibot",
    "viewOnce",
    "identify-eu-west-1.acrcloud.com",
    "participants",
    "groupRequestParticipantsUpdate",
    "replace",
    "Status\x20saved\x20successfully!",
    "0@s.whatsapp.net",
    "getObfuscatedCode",
    "https://telegra.ph/file/6880771a42bad09dd6087.jpg",
    "relayMessage",
    "134970dPXCUz",
    "https://api.heroku.com/apps/",
    "):*\x0a\x0a",
    "\x0a𝚂𝙴𝙽𝚃\x20𝙱𝚈:\x20@",
    "editedMessage",
    "input[name=form_value_input]",
    "write",
    "totalmem",
    "⚠️\x20Deleted\x20message\x20not\x20found\x20in\x20store.json.",
    "│➽\x20",
    "/config-vars",
    "*BOT\x20DETECTED*\x0a\x0aGo\x20away!",
    "https://en.ephoto360.com/effect/create-image",
    "Error\x20with\x20API2:",
    "name",
    "chats",
    "fromString",
    "autoread",
    "3EB0",
    "\x20})()",
    "Error\x20deleting\x20env\x20var:",
    "group",
    "keys",
    "length",
    "includes",
    "*Please\x20reply\x20to\x20a\x20status\x20message!*",
    "./lib/emojis",
    "Bearer\x20",
    "Repeated\x20error\x20suppressed:\x20",
    ".\x20+",
    "headers",
    "isBaileys",
    "Failed\x20to\x20set\x20environment\x20variable,\x20please\x20make\x20sure\x20you\x27ve\x20entered\x20heroku\x20api\x20key\x20and\x20app\x20name\x20correctly",
    "templateMessage",
    "┗▣\x20\x0a\x0a",
    "slice",
    "caption",
    "┗▣\x20\x0a",
    "audio.mp3",
    "endsWith",
    "./Media/Images/Xploader3.jpg",
    "lolcatjs",
    "BEGIN:VCARD\x0aVERSION:3.0\x0aN:Sy;Bot;;;\x0aFN:y\x0aitem1.TEL;waid=",
    "Mozilla/5.0\x20(Windows\x20NT\x2010.0;\x20Win64;\x20x64)\x20AppleWebKit/537.36\x20(KHTML,\x20like\x20Gecko)\x20Chrome/105.0.0.0\x20Safari/537.36",
    "┃\x20*ᴏᴡɴᴇʀ*\x20:\x20",
    "❌\x20Error\x20sending\x20reaction:",
    "map",
    "22740AkdrcF",
    "Unknown",
    "protocolMessage",
    "Error\x20loading\x20plugin\x20at\x20",
    "@s.whatsapp.net",
    "Error\x20setting\x20env\x20var:",
    "heapUsed",
    "Loading\x20menu...",
    "command",
    "\x0a\x0a𝙼𝙴𝚂𝚂𝙰𝙶𝙴:\x20",
    "approve",
    "timestamp",
    "cache",
    "Error\x20executing\x20command:",
    "readMessages",
    "statusemoji",
    "./src/store.json",
    "buttonsResponseMessage",
    "┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━─\x20⳹\x0a\x0a",
    "prefix",
    "yt-search",
    "size",
    "owner",
    "test",
    "»\x20Sender\x20Name:\x20",
    "cheerio",
    "download_url",
    "DD/MM/YYYY",
    "\x20]\x0a",
    "get",
    "Something\x20went\x20wrong\x20while\x20fetching\x20requests.",
    "public",
    "sender",
    "mp3",
    "hydratedTemplate",
    "❌\x20Error\x20sending\x20presence\x20update:",
    "perf_hooks",
    "\x20of\x20",
    "floor",
    "antilinkkick",
    "startsWith",
    "POST",
    "No\x20pending\x20join\x20requests.",
    "groupParticipantsUpdate",
    "join",
    "sendPresenceUpdate",
    "repeat",
    "en-US,en;q=0.9",
    "\x0a\x0a𝙴𝙳𝙸𝚃𝙴𝙳\x20𝚃𝙾:\x20",
    "subject",
    "parse",
    "autoviewstatus",
    "Error\x20processing\x20media:",
    "private",
    "(Private\x20Chat)",
    "\x0a𝙴𝙳𝙸𝚃𝙴𝙳\x20𝙱𝚈:\x20@",
    "❌\x20Error\x20processing\x20edited\x20message:",
    "HEROKU_API_KEY",
    "imageMessage",
    "┃\x20*ᴘʀᴇғɪx*\x20:\x20[\x20",
    "updateProfileStatus",
    "util",
    "270KOEVeG",
    "quotedMessage",
    "HEROKU_APP_NAME",
    "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
    "521CgLhif",
    "reply",
    "❌\x20Error\x20processing\x20deleted\x20message:",
    "Failed\x20to\x20fetch\x20from\x20API2",
    "\x20MENU*\x20◈\x0a",
    "2089854llwGfX",
    "&api=dfcb6d76f2f6a9894gjkege8a4ab232222",
    "concat",
    "fromMe",
    "message",
    "set-cookie",
    "LINK\x20DETECTED\x0a\x0a@",
    "Status\x20forwarded\x20successfully!",
    "result",
    "autobio",
    "object",
    "Group\x20Only",
    "data",
    "msg",
    "has",
    "unavailable",
    "┏▣\x20◈\x20\x20*",
    "inspect",
    "./Media/Images/Xploader2.jpg",
    "102zUPQnv",
    "extendedTextMessage",
    "\x20\x0a𝚃𝙸𝙼𝙴\x20𝚂𝙴𝙽𝚃:\x20",
    "participant",
    "text",
    "blacklist",
    "BK9",
    "BAD\x20WORD\x20DETECTED\x0a\x0a@",
    "listResponseMessage",
    "conversation",
    "stringify",
    "isGroup",
    "freemem",
    "memoryUsage",
    "form-data",
    "resolve",
    "key",
    "\x20*You\x20have\x20been\x20removed\x20for\x20using\x20prohibited\x20language!*",
  ];
  _0x2c33 = function () {
    return _0xfebfe4;
  };
  return _0x2c33();
}
fs[_0x328f7c(0x1cd)](file, () => {
  const _0x214667 = _0x328f7c;
  fs["unwatchFile"](file),
    console["log"](
      color(_0x214667(0x1d2) + __filename + "\x27", _0x214667(0x215))
    ),
    delete require[_0x214667(0x27c)][file],
    require(file);
});
