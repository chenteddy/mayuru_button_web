(function() {
    var e = {
            721: function(e, t, a) {
                "use strict";
                var o = a(963),
                    n = a(252),
                    r = JSON.parse('{"ag":true,"d9":true,"u2":{"TW":{"title":"まゆる 按鈕","fullName":"まゆる 按鈕"},"JP":{"title":"まゆる ボタン","fullName":"まゆる ボタン"},"EN":{"title":"Mayuru Button","fullName":"Mayuru Button"}},"ng":"<div style=\\"text-align: center;font-size: 20px;\\">你的麻油癮又發作了嗎？試試這個吧～你會覺得好多了！</div>","Fs":{"icon":"img/logo.svg","lit":"https://lit.link/en/mayuru","youtube":"https://www.youtube.com/@mayuru_24","twitter":"https://twitter.com/mayuru_24"},"zY":[],"p4":[{"background":"#000000","color":"#FFFFFF","name":"まゆる X (Twitter)","url":"https://twitter.com/mayuru_24"},{"background":"#000000","color":"#FFFFFF","name":"Sub X (Twitter)","url":"https://twitter.com/mayuru_sub"},{"background":"#ff2500","color":"#FFFFFF","name":"まゆる YouTube","url":"https://www.youtube.com/@mayuru_24"},{"background":"#ff2500","color":"#FFFFFF","name":"Sub YouTube","url":"https://www.youtube.com/@mayuru_ninjaninja"},{"background":"#0280fc","color":"#FFFFFF","name":"Twitcasting","url":"https://twitcasting.tv/mayuru_24"},{"background":"#f300fd","color":"#FFFFFF","name":"Instagram","url":"https://www.instagram.com/mayuru__24/"},{"background":"#000000","color":"#FFFFFF","name":"TikTok","url":"https://www.tiktok.com/@mayuru__24"},{"background":"#f5e1df","color":"#000000","name":"niconico","url":"https://nico.ms/mylist/71219831?ref=sp_other"},{"background":"#f3969a","color":"#FFFFFF","name":"マシュマロ/Marshmallow","url":"https://marshmallow-qa.com/mayuru"},{"background":"#ff2500","color":"#FFFFFF","name":"Official Web Shop","url":"https://mayuru.booth.pm/"},{"background":"#f56600","color":"#FFFFFF","name":"Amazon ほしい物リスト","url":"https://www.amazon.co.jp/hz/wishlist/ls/C67URRWW182?ref_=wl_share"}],"Mv":{"author":[{"name":"KM","url":"https://twitter.com/nishinokm"}],"info":[""],"githubUrl":"https://github.com/chenteddy/mayuru_button/"},"iV":{"text":"MAYURU","size":"24px","color":"white","img":"","imgWidth":"100%","imgHeight":"56%"},"pN":"MYR_BIG.jpg","G3":""}'),
                    l = a(262),
                    i = a(577),
                    s = a(652);
                const m = (0, s.Z)();
                var c, u, p, h, g, d = m;
                (function(e) {
                    e["search"] = "search", e["name"] = "name"
                })(c || (c = {})),
                function(e) {
                    e["randomPlay"] = "randomPlay", e["stopPlay"] = "stopPlay", e["autoScroll"] = "autoScroll", e["nameClick"] = "nameClick", e["search"] = "search"
                }(u || (u = {})),
                function(e) {
                    e["title"] = "info.title", e["toGithub"] = "info.toGithub", e["notOfficial"] = "info.notOfficial", e["fullName"] = "info.fullName", e["vtbbtn"] = "vtbbtn", e["voiceTotal"] = "voiceTotal", e["hideVoiceTotal"] = "hideVoiceTotal", e["newVoice"] = "newVoice", e["hideNewVoice"] = "hideNewVoice", e["lastDate"] = "lastDate", e["hideLastDate"] = "hideLastDate", e["voiceTotalTip"] = "voiceTotalTip", e["playTimes"] = "playTimes", e["playTimes2"] = "playTimes2", e["lang"] = "lang"
                }(p || (p = {})),
                function(e) {
                    e["randomplay"] = "action.randomplay", e["stopvoice"] = "action.stopvoice", e["overlap"] = "action.overlap", e["overlapTip"] = "action.overlapTip", e["autoRandom"] = "action.autoRandom", e["autoRandomTip"] = "action.autoRandomTip", e["loop"] = "action.loop", e["loopTip1"] = "action.loopTip_1", e["loopTip2"] = "action.loopTip_2", e["loopTip3"] = "action.loopTip_3", e["showInfo"] = "action.showInfo", e["noplay"] = "action.noplay"
                }(h || (h = {})),
                function(e) {
                    e["randomPlay"] = "readme.randomPlay", e["stop"] = "readme.stop", e["overlapOn"] = "readme.overlapOn", e["overlapOff"] = "readme.overlapOff", e["autoRandomOn"] = "readme.autoRandomOn", e["autoRandomOff"] = "readme.autoRandomOff", e["loop0"] = "readme.loop_0", e["loop1"] = "readme.loop_1", e["loop2"] = "readme.loop_2", e["loop3"] = "readme.loop_3", e["showInfoOn"] = "readme.showInfoOn", e["showInfoOff"] = "readme.showInfoOff"
                }(g || (g = {}));
                const y = e => ((0, n.dD)("data-v-2960a0ce"), e = e(), (0, n.Cn)(), e),
                    v = {
                        class: "error"
                    },
                    w = y((() => (0, n._)("svg", {
                        viewBox: "0 0 1024 1024",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "18",
                        height: "18"
                    }, [(0, n._)("path", {
                        d: "M231.849057 0h96.603773v96.603774h-96.603773zM347.773585 0h96.603773v96.603774h-96.603773zM463.698113 0h96.603774v96.603774h-96.603774zM579.622642 0h96.603773v96.603774h-96.603773zM695.54717 0h96.603773v96.603774h-96.603773zM231.849057 115.924528h96.603773v96.603774h-96.603773zM115.924528 115.924528h96.603774v96.603774H115.924528zM347.773585 115.924528h96.603773v96.603774h-96.603773zM463.698113 115.924528h96.603774v96.603774h-96.603774zM579.622642 115.924528h96.603773v96.603774h-96.603773zM695.54717 115.924528h96.603773v96.603774h-96.603773zM347.773585 231.849057h96.603773v96.603773h-96.603773zM463.698113 231.849057h96.603774v96.603773h-96.603774zM579.622642 231.849057h96.603773v96.603773h-96.603773zM231.849057 347.773585h96.603773v96.603773h-96.603773zM463.698113 347.773585h96.603774v96.603773h-96.603774zM695.54717 347.773585h96.603773v96.603773h-96.603773zM231.849057 463.698113h96.603773v96.603774h-96.603773zM347.773585 463.698113h96.603773v96.603774h-96.603773zM579.622642 463.698113h96.603773v96.603774h-96.603773zM695.54717 463.698113h96.603773v96.603774h-96.603773zM231.849057 579.622642h96.603773v96.603773h-96.603773zM463.698113 579.622642h96.603774v96.603773h-96.603774zM695.54717 579.622642h96.603773v96.603773h-96.603773zM347.773585 695.54717h96.603773v96.603773h-96.603773zM463.698113 695.54717h96.603774v96.603773h-96.603774zM579.622642 695.54717h96.603773v96.603773h-96.603773zM811.471698 115.924528h96.603774v96.603774h-96.603774zM231.849057 927.396226h96.603773v96.603774h-96.603773zM347.773585 927.396226h96.603773v96.603774h-96.603773zM463.698113 927.396226h96.603774v96.603774h-96.603774zM579.622642 927.396226h96.603773v96.603774h-96.603773zM695.54717 927.396226h96.603773v96.603774h-96.603773zM231.849057 811.471698h96.603773v96.603774h-96.603773zM115.924528 811.471698h96.603774v96.603774H115.924528zM347.773585 811.471698h96.603773v96.603774h-96.603773zM463.698113 811.471698h96.603774v96.603774h-96.603774zM579.622642 811.471698h96.603773v96.603774h-96.603773zM695.54717 811.471698h96.603773v96.603774h-96.603773zM811.471698 811.471698h96.603774v96.603774h-96.603774zM0 792.150943v-96.603773h96.603774v96.603773zM0 676.226415v-96.603773h96.603774v96.603773zM0 560.301887v-96.603774h96.603774v96.603774zM0 444.377358v-96.603773h96.603774v96.603773zM0 328.45283v-96.603773h96.603774v96.603773zM115.924528 792.150943v-96.603773h96.603774v96.603773zM115.924528 676.226415v-96.603773h96.603774v96.603773zM115.924528 560.301887v-96.603774h96.603774v96.603774zM115.924528 444.377358v-96.603773h96.603774v96.603773zM115.924528 328.45283v-96.603773h96.603774v96.603773zM927.396226 792.150943v-96.603773h96.603774v96.603773zM927.396226 676.226415v-96.603773h96.603774v96.603773zM927.396226 560.301887v-96.603774h96.603774v96.603774zM927.396226 444.377358v-96.603773h96.603774v96.603773zM927.396226 328.45283v-96.603773h96.603774v96.603773zM811.471698 792.150943v-96.603773h96.603774v96.603773zM811.471698 676.226415v-96.603773h96.603774v96.603773zM811.471698 560.301887v-96.603774h96.603774v96.603774zM811.471698 444.377358v-96.603773h96.603774v96.603773zM811.471698 328.45283v-96.603773h96.603774v96.603773z",
                        fill: "#999999"
                    })], -1))),
                    j = [w];

                function f(e, t) {
                    return (0, n.wg)(), (0, n.iD)("div", v, j)
                }
                var S = a(744);
                const U = {},
                    T = (0, S.Z)(U, [
                        ["render", f],
                        ["__scopeId", "data-v-2960a0ce"]
                    ]);
                var z = T;
                const P = e => ((0, n.dD)("data-v-0112ce25"), e = e(), (0, n.Cn)(), e),
                    k = {
                        class: "loading"
                    },
                    A = P((() => (0, n._)("svg", {
                        viewBox: "0 0 1024 1024",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "18",
                        height: "18"
                    }, [(0, n._)("path", {
                        d: "M955.733333 765.866667c0 0 0 2.133333 0 2.133333-12.8 21.333333-38.4 27.733333-57.6 14.933333-19.2-10.666667-27.733333-36.266667-17.066667-57.6l0 0c36.266667-64 57.6-136.533333 57.6-213.333333s-21.333333-151.466667-57.6-213.333333l0 0c-10.666667-19.2-4.266667-44.8 17.066667-57.6 21.333333-12.8 46.933333-4.266667 57.6 14.933333 0 0 0 2.133333 0 2.133333 42.666667 74.666667 68.266667 162.133333 68.266667 253.866667S998.4 691.2 955.733333 765.866667zM768 955.733333C768 955.733333 765.866667 955.733333 768 955.733333c-76.8 42.666667-164.266667 68.266667-256 68.266667s-179.2-25.6-253.866667-68.266667c0 0-2.133333 0-2.133333 0-21.333333-12.8-27.733333-38.4-14.933333-57.6 12.8-21.333333 38.4-27.733333 57.6-14.933333 0 0 0 0 2.133333 0l0 0C362.666667 917.333333 435.2 938.666667 512 938.666667s149.333333-21.333333 211.2-57.6l0 0c0 0 0 0 2.133333 0 21.333333-12.8 46.933333-4.266667 57.6 14.933333C795.733333 917.333333 789.333333 942.933333 768 955.733333zM727.466667 142.933333 727.466667 142.933333C663.466667 106.666667 590.933333 85.333333 512 85.333333s-151.466667 21.333333-213.333333 57.6l0 0c-19.2 10.666667-44.8 4.266667-57.6-17.066667C228.266667 106.666667 234.666667 81.066667 256 68.266667c0 0 2.133333 0 2.133333 0C332.8 25.6 420.266667 0 512 0s179.2 25.6 253.866667 68.266667c0 0 2.133333 0 2.133333 0 21.333333 12.8 27.733333 38.4 14.933333 57.6C772.266667 147.2 746.666667 153.6 727.466667 142.933333zM125.866667 782.933333C106.666667 795.733333 81.066667 789.333333 68.266667 768c0 0 0-2.133333 0-2.133333C25.6 691.2 0 603.733333 0 512s25.6-179.2 68.266667-253.866667c0 0 0-2.133333 0-2.133333 12.8-21.333333 38.4-27.733333 57.6-14.933333 21.333333 12.8 27.733333 38.4 14.933333 57.6 0 0 0 0 0 2.133333l0 0C106.666667 362.666667 85.333333 435.2 85.333333 512s21.333333 149.333333 57.6 211.2l0 0c0 0 0 0 0 2.133333C153.6 746.666667 147.2 772.266667 125.866667 782.933333z"
                    })], -1))),
                    W = [A];

                function J(e, t) {
                    return (0, n.wg)(), (0, n.iD)("div", k, W)
                }
                const b = {},
                    M = (0, S.Z)(b, [
                        ["render", J],
                        ["__scopeId", "data-v-0112ce25"]
                    ]);
                var C = M;
                const I = a(241).keys().map((e => e.substring(2)));
                let O, F, x = [];
                I.forEach((e => {
                    if ("locales.json" === e) O = a(903)(`./${e}`);
                    else if ("category.json" === e) F = a(903)(`./${e}`);
                    else {
                        const t = a(903)(`./${e}`);
                        x = [...x, ...t]
                    }
                }));
                const _ = (0, l.iH)(r.ag ?? !0),
                    N = (0, l.iH)(r.d9 ?? !0),
                    B = (0, l.qj)({
                        loading: !0,
                        error: !1,
                        nowPlay: null,
                        overlap: !1,
                        autoRandom: !1,
                        loop: 0,
                        showInfo: !1,
                        showHide: !1
                    }),
                    D = localStorage.getItem("info");
                D && (B.showInfo = "true" === D);
                const E = (0, l.iH)(window.innerWidth > 550);
                window.onresize = () => {
                    const e = window.innerWidth > 550;
                    E.value !== e && (E.value = e)
                };
                const H = (0, l.iH)(!1),
                    R = [];
                F.forEach((e => {
                    const t = {
                        ...e,
                        voiceList: []
                    };
                    x.forEach((a => {
                        a.category === e.name && t.voiceList.push(a)
                    })), R.push(t)
                }));
                const L = {},
                    V = {
                        title: "unknown",
                        voiceList: []
                    },
                    Y = [];
                x.forEach((e => {
                    e.mark && e.mark.title ? L[e.mark.title] ? L[e.mark.title].list.push(e) : L[e.mark.title] = {
                        url: e.mark.url,
                        list: [e]
                    } : V.voiceList.push(e)
                }));
                for (const Go in L) Y.unshift({
                    title: Go,
                    url: L[Go].url,
                    voiceList: L[Go].list
                });
                Y.push(V);
                const q = (0, n.Fl)((() => B.showInfo ? Y : R)),
                    Q = (0, n.Fl)((() => {
                        const e = [];
                        return q.value.forEach((t => {
                            t.voiceList.forEach((t => {
                                e.push(t)
                            }))
                        })), e
                    })),
                    Z = (0, l.iH)({
                        title: "",
                        time: "",
                        url: ""
                    }),
                    G = (0, l.qj)({
                        value: "",
                        list: [],
                        index: 0
                    }),
                    K = (0, l.iH)(0),
                    X = localStorage.getItem("play");
                X && (K.value = Number(X) || 0);
                const $ = (0, l.iH)(0);
                var ee = a(500);
                const te = e => ((0, n.dD)("data-v-5430d24e"), e = e(), (0, n.Cn)(), e),
                    ae = ["title"],
                    oe = te((() => (0, n._)("svg", {
                        viewBox: "0 0 1024 1024",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24"
                    }, [(0, n._)("path", {
                        d: "M689.066667 170.666667c-40.533333 0-132.266667 19.2-177.066667 119.466666C467.2 189.866667 377.6 170.666667 334.933333 170.666667 211.2 170.666667 128 266.666667 128 373.333333 128 631.466667 512 853.333333 512 853.333333s384-221.866667 384-480c0-106.666667-83.2-202.666667-206.933333-202.666666z"
                    })], -1))),
                    ne = [oe],
                    re = ["title"],
                    le = te((() => (0, n._)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        height: "24",
                        width: "24",
                        role: "img",
                        "aria-hidden": "true"
                    }, [(0, n._)("path", {
                        d: "M18,18H6V6H18V18Z"
                    })], -1))),
                    ie = [le],
                    se = ["title"],
                    me = te((() => (0, n._)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        height: "24",
                        width: "24",
                        role: "img",
                        "aria-hidden": "true"
                    }, [(0, n._)("path", {
                        d: "M19 3V21H15V3H19M14 3V21H10V3H14M9 3V21H5V3H9Z"
                    })], -1))),
                    ce = [me],
                    ue = ["title"],
                    pe = te((() => (0, n._)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        height: "24",
                        width: "24",
                        role: "img",
                        "aria-hidden": "true"
                    }, [(0, n._)("path", {
                        d: "M14.83,13.41L13.42,14.82L16.55,17.95L14.5,20H20V14.5L17.96,16.54L14.83,13.41M14.5,4L16.54,6.04L4,18.59L5.41,20L17.96,7.46L20,9.5V4M10.59,9.17L5.41,4L4,5.41L9.17,10.58L10.59,9.17Z"
                    })], -1))),
                    he = [pe],
                    ge = ["title"],
                    de = {
                        key: 0,
                        width: "24",
                        height: "24",
                        xmlns: "http://www.w3.org/2000/svg"
                    },
                    ye = te((() => (0, n._)("path", {
                        d: "m17,17l-10,0l0,-3l-4,4l4,4l0,-3l12,0l0,-6l-2,0m-10,-6l10,0l0,3l4,-4l-4,-4l0,3l-12,0l0,6l2,0l0,-4z"
                    }, null, -1))),
                    ve = [ye],
                    we = {
                        key: 1,
                        width: "24",
                        height: "24",
                        xmlns: "http://www.w3.org/2000/svg"
                    },
                    je = te((() => (0, n._)("path", {
                        d: "m17,17l-10,0l0,-3l-4,4l4,4l0,-3l12,0l0,-6l-2,0m-10,-6l10,0l0,3l4,-4l-4,-4l0,3l-12,0l0,6l2,0l0,-4z"
                    }, null, -1))),
                    fe = te((() => (0, n._)("text", {
                        "font-weight": "bold",
                        transform: "matrix(0.37833114108120997,0,0,0.4339360947245867,9.614645136687502,5.776567408197169) ",
                        "xml:space": "preserve",
                        "text-anchor": "start",
                        "font-family": "'Trebuchet MS', Gadget, sans-serif",
                        "font-size": "24",
                        y: "21.67922",
                        x: "-1.13436"
                    }, "1", -1))),
                    Se = [je, fe],
                    Ue = {
                        key: 2,
                        width: "24",
                        height: "24",
                        xmlns: "http://www.w3.org/2000/svg"
                    },
                    Te = te((() => (0, n._)("path", {
                        d: "m17,17l-10,0l0,-3l-4,4l4,4l0,-3l12,0l0,-6l-2,0m-10,-6l10,0l0,3l4,-4l-4,-4l0,3l-12,0l0,6l2,0l0,-4z"
                    }, null, -1))),
                    ze = te((() => (0, n._)("text", {
                        "font-weight": "bold",
                        transform: "matrix(0.37833114108120997,0,0,0.4339360947245867,9.614645136687502,5.776567408197169) ",
                        "xml:space": "preserve",
                        "text-anchor": "start",
                        "font-family": "'Trebuchet MS', Gadget, sans-serif",
                        "font-size": "24",
                        y: "21.67922",
                        x: "-1.13436"
                    }, "C", -1))),
                    Pe = [Te, ze],
                    ke = {
                        key: 3,
                        width: "24",
                        height: "24",
                        xmlns: "http://www.w3.org/2000/svg"
                    },
                    Ae = te((() => (0, n._)("path", {
                        d: "m17,17l-10,0l0,-3l-4,4l4,4l0,-3l12,0l0,-6l-2,0m-10,-6l10,0l0,3l4,-4l-4,-4l0,3l-12,0l0,6l2,0l0,-4z"
                    }, null, -1))),
                    We = te((() => (0, n._)("text", {
                        "font-weight": "bold",
                        transform: "matrix(0.37833114108120997,0,0,0.4339360947245867,9.614645136687502,5.776567408197169) ",
                        "xml:space": "preserve",
                        "text-anchor": "start",
                        "font-family": "'Trebuchet MS', Gadget, sans-serif",
                        "font-size": "24",
                        y: "21.67922",
                        x: "-1.13436"
                    }, "A", -1))),
                    Je = [Ae, We],
                    be = ["title"],
                    Me = te((() => (0, n._)("svg", {
                        viewBox: "0 0 1024 1024",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24"
                    }, [(0, n._)("path", {
                        d: "M694.857143 768v73.142857q0 14.857143-10.857143 25.714286t-25.714286 10.857143H365.714286q-14.857143 0-25.714286-10.857143t-10.857143-25.714286v-73.142857q0-14.857143 10.857143-25.714286t25.714286-10.857143h36.571428V512h-36.571428q-14.857143 0-25.714286-10.857143t-10.857143-25.714286V402.285714q0-14.857143 10.857143-25.714285t25.714286-10.857143h219.428571q14.857143 0 25.714286 10.857143t10.857143 25.714285v329.142857h36.571428q14.857143 0 25.714286 10.857143t10.857143 25.714286zM621.714286 109.714286v109.714285q0 14.857143-10.857143 25.714286t-25.714286 10.857143H438.857143q-14.857143 0-25.714286-10.857143t-10.857143-25.714286V109.714286q0-14.857143 10.857143-25.714286t25.714286-10.857143h146.285714q14.857143 0 25.714286 10.857143t10.857143 25.714286z"
                    })], -1))),
                    Ce = [Me];
                var Ie = (0, n.aZ)({
                    props: {
                        type: String
                    },
                    setup(e) {
                        const {
                            t: t
                        } = (0, ee.QT)(), a = () => {
                            d.emit(u.randomPlay)
                        }, o = () => {
                            d.emit(u.stopPlay)
                        }, r = () => {
                            B.overlap = !B.overlap
                        }, s = () => {
                            B.loop = 0, B.autoRandom = !B.autoRandom
                        }, m = () => {
                            B.autoRandom = !1, B.loop < 3 ? B.loop += 1 : B.loop = 0
                        }, c = () => {
                            B.showInfo = !B.showInfo, localStorage.setItem("info", B.showInfo.toString()), document.body.scrollTop = 0, document.documentElement.scrollTop = 0, Z.value = null
                        };
                        return (u, p) => "randomPlay" === e.type ? ((0, n.wg)(), (0, n.iD)("div", {
                            key: 0,
                            class: "icon",
                            title: (0, l.SU)(t)((0, l.SU)(h).randomplay),
                            onClick: a
                        }, ne, 8, ae)) : "stopPlay" === e.type ? ((0, n.wg)(), (0, n.iD)("div", {
                            key: 1,
                            class: "icon",
                            title: (0, l.SU)(t)((0, l.SU)(h).stopvoice),
                            onClick: o
                        }, ie, 8, re)) : "overlapChange" === e.type ? ((0, n.wg)(), (0, n.iD)("div", {
                            key: 2,
                            class: (0, i.C_)(["icon", {
                                "icon-active": (0, l.SU)(B).overlap
                            }]),
                            title: (0, l.SU)(t)((0, l.SU)(h).overlap),
                            onClick: r
                        }, ce, 10, se)) : "autoRandomChange" === e.type ? ((0, n.wg)(), (0, n.iD)("div", {
                            key: 3,
                            class: (0, i.C_)(["icon", {
                                "icon-active": (0, l.SU)(B).autoRandom
                            }]),
                            title: (0, l.SU)(t)((0, l.SU)(h).autoRandom),
                            onClick: s
                        }, he, 10, ue)) : "loopChange" === e.type ? ((0, n.wg)(), (0, n.iD)("div", {
                            key: 4,
                            class: (0, i.C_)(["icon", {
                                "icon-active": 0 !== (0, l.SU)(B).loop
                            }]),
                            title: (0, l.SU)(t)((0, l.SU)(h).loop),
                            onClick: m
                        }, [0 === (0, l.SU)(B).loop ? ((0, n.wg)(), (0, n.iD)("svg", de, ve)) : (0, n.kq)("", !0), 1 === (0, l.SU)(B).loop ? ((0, n.wg)(), (0, n.iD)("svg", we, Se)) : 2 === (0, l.SU)(B).loop ? ((0, n.wg)(), (0, n.iD)("svg", Ue, Pe)) : 3 === (0, l.SU)(B).loop ? ((0, n.wg)(), (0, n.iD)("svg", ke, Je)) : (0, n.kq)("", !0)], 10, ge)) : "changeShowInfo" === e.type ? ((0, n.wg)(), (0, n.iD)("div", {
                            key: 5,
                            class: (0, i.C_)(["icon", {
                                "icon-active": (0, l.SU)(B).showInfo
                            }]),
                            onClick: c,
                            title: (0, l.SU)(t)((0, l.SU)(h).showInfo)
                        }, Ce, 10, be)) : (0, n.kq)("", !0)
                    }
                });
                const Oe = (0, S.Z)(Ie, [
                    ["__scopeId", "data-v-5430d24e"]
                ]);
                var Fe = Oe;
                const xe = {
                        class: "control"
                    },
                    _e = {
                        class: "wrapper"
                    },
                    Ne = {
                        key: 0,
                        class: "playing"
                    },
                    Be = {
                        key: 1,
                        class: "playing"
                    },
                    De = {
                        class: "btn-wrapper"
                    };
                var Ee = (0, n.aZ)({
                    setup(e) {
                        (0, o.sj)((e => ({
                            "50505f19": (0, l.SU)(g),
                            "8f1d4602": (0, l.SU)(y)
                        })));
                        const {
                            t: t
                        } = (0, ee.QT)(), a = (0, n.Fl)((() => B.overlap ? t(h.overlapTip) : B.nowPlay ? t("voice." + B.nowPlay.name) : B.autoRandom ? t(h.autoRandomTip) : 1 === B.loop ? t(h.loopTip1) : 2 === B.loop ? t(h.loopTip2) : 3 === B.loop ? t(h.loopTip3) : t(h.noplay))), r = (0, l.iH)(!1), s = (0, l.iH)(t(h.noplay)), m = (0, l.iH)("");
                        (0, n.YP)(a, (e => {
                            r.value ? s.value = e : m.value = e, r.value = !r.value
                        }));
                        const c = (0, n.Fl)((() => B.showInfo && Z.value && Z.value.time ? `(${Z.value.time})` : "")),
                            p = () => {
                                B.nowPlay && d.emit(u.nameClick, B.nowPlay.name)
                            },
                            g = (0, n.Fl)((() => B.error && !B.overlap ? "line-through" : "none")),
                            y = (0, n.Fl)((() => B.nowPlay ? "pointer" : ""));
                        return (e, t) => ((0, n.wg)(), (0, n.j4)(o.uT, {
                            name: "slide-up",
                            appear: ""
                        }, {
                            default: (0, n.w5)((() => [(0, n._)("div", xe, [(0, n._)("div", _e, [(0, n.Wm)(o.uT, {
                                name: "slide-up-text"
                            }, {
                                default: (0, n.w5)((() => [r.value ? ((0, n.wg)(), (0, n.iD)("div", Be, [(0, n._)("div", {
                                    class: "text",
                                    onClick: t[1] || (t[1] = e => p())
                                }, [(0, n.Uk)((0, i.zw)(m.value + (0, l.SU)(c)) + " ", 1), (0, n.Wm)(o.uT, {
                                    name: "fade"
                                }, {
                                    default: (0, n.w5)((() => [(0, l.SU)(B).nowPlay && (0, l.SU)(B).loading ? ((0, n.wg)(), (0, n.j4)(C, {
                                        key: 0,
                                        class: "tip"
                                    })) : (0, n.kq)("", !0)])),
                                    _: 1
                                }), (0, n.Wm)(o.uT, {
                                    name: "fade-delay"
                                }, {
                                    default: (0, n.w5)((() => [(0, l.SU)(B).nowPlay && (0, l.SU)(B).error && !(0, l.SU)(B).overlap ? ((0, n.wg)(), (0, n.j4)(z, {
                                        key: 0,
                                        class: "tip"
                                    })) : (0, n.kq)("", !0)])),
                                    _: 1
                                })])])) : ((0, n.wg)(), (0, n.iD)("div", Ne, [(0, n._)("div", {
                                    class: "text",
                                    onClick: t[0] || (t[0] = e => p())
                                }, [(0, n.Uk)((0, i.zw)(s.value + (0, l.SU)(c)) + " ", 1), (0, n.Wm)(o.uT, {
                                    name: "fade"
                                }, {
                                    default: (0, n.w5)((() => [(0, l.SU)(B).nowPlay && (0, l.SU)(B).loading ? ((0, n.wg)(), (0, n.j4)(C, {
                                        key: 0,
                                        class: "tip"
                                    })) : (0, n.kq)("", !0)])),
                                    _: 1
                                }), (0, n.Wm)(o.uT, {
                                    name: "fade-delay"
                                }, {
                                    default: (0, n.w5)((() => [(0, l.SU)(B).nowPlay && (0, l.SU)(B).error && !(0, l.SU)(B).overlap ? ((0, n.wg)(), (0, n.j4)(z, {
                                        key: 0,
                                        class: "tip"
                                    })) : (0, n.kq)("", !0)])),
                                    _: 1
                                })])]))])),
                                _: 1
                            })]), (0, n._)("div", De, [(0, n.Wm)(Fe, {
                                type: "randomPlay"
                            }), (0, n.Wm)(Fe, {
                                type: "stopPlay"
                            }), (0, n.Wm)(Fe, {
                                type: "overlapChange"
                            }), (0, n.Wm)(Fe, {
                                type: "autoRandomChange"
                            }), (0, n.Wm)(Fe, {
                                type: "loopChange"
                            }), (0, n.Wm)(Fe, {
                                type: "changeShowInfo"
                            })])])])),
                            _: 1
                        }))
                    }
                });
                const He = (0, S.Z)(Ee, [
                    ["__scopeId", "data-v-6ca8b91e"]
                ]);
                var Re = He,
                    Le = a(893);
                const Ve = ["href"],
                    Ye = ["src"];
                var qe = (0, n.aZ)({
                    props: {
                        url: null,
                        img: null
                    },
                    setup(e) {
                        return (t, a) => ((0, n.wg)(), (0, n.iD)("a", {
                            href: e.url,
                            class: "icon",
                            target: "_blank"
                        }, [(0, n._)("img", {
                            draggable: "false",
                            src: e.img,
                            alt: ""
                        }, null, 8, Ye)], 8, Ve))
                    }
                });
                const Qe = (0, S.Z)(qe, [
                    ["__scopeId", "data-v-773e725c"]
                ]);
                var Ze = Qe;
                const Ge = e => ((0, n.dD)("data-v-773bfe95"), e = e(), (0, n.Cn)(), e),
                    Ke = {
                        class: "footer"
                    },
                    Xe = {
                        class: "author"
                    },
                    $e = Ge((() => (0, n._)("div", null, "©2023", -1))),
                    et = {
                        key: 0,
                        style: {
                            "margin-left": "5px"
                        }
                    },
                    tt = ["href"],
                    at = {
                        class: "info"
                    },
                    ot = ["innerHTML"],
                    nt = Ge((() => (0, n._)("div", null, [(0, n.Uk)(" Powered by "), (0, n._)("a", {
                        href: "https://github.com/blacktunes/voices-button-cli"
                    }, "voices-button-cli")], -1))),
                    rt = {
                        class: "text-right"
                    },
                    lt = {
                        class: "git"
                    },
                    it = ["href"];
                var st = (0, n.aZ)({
                    setup(e) {
                        const t = r.Mv,
                            {
                                t: a
                            } = (0, ee.QT)(),
                            s = t && t.author ? t.author : [],
                            m = t && t.info ? t.info : [],
                            c = t && t.githubUrl ? t.githubUrl : void 0;
                        "1701997211510".substring(0, "1701997211510".length - 3);
                        return (e, t) => ((0, n.wg)(), (0, n.j4)(o.uT, {
                            name: "fade",
                            appear: ""
                        }, {
                            default: (0, n.w5)((() => [(0, n._)("div", Ke, [(0, n._)("div", null, [(0, n._)("div", Xe, [$e, ((0, n.wg)(!0), (0, n.iD)(n.HY, null, (0, n.Ko)((0, l.SU)(s), ((e, t) => ((0, n.wg)(), (0, n.iD)(n.HY, {
                                key: t
                            }, [t > 0 ? ((0, n.wg)(), (0, n.iD)("a", et, "&")) : (0, n.kq)("", !0), (0, n._)("a", {
                                style: {
                                    "margin-left": "5px"
                                },
                                href: e.url,
                                target: "_blank"
                            }, (0, i.zw)(e.name), 9, tt)], 64)))), 128))]), (0, n._)("div", at, [((0, n.wg)(!0), (0, n.iD)(n.HY, null, (0, n.Ko)((0, l.SU)(m), ((e, t) => ((0, n.wg)(), (0, n.iD)("div", {
                                key: t,
                                innerHTML: e
                            }, null, 8, ot)))), 128))]), nt]), (0, n._)("div", rt, [(0, n._)("div", lt, [(0, n.Wm)(Ze, {
                                class: "btn",
                                url: (0, l.SU)(c),
                                img: (0, l.SU)(Le)
                            }, null, 8, ["url", "img"]), (0, n._)("a", {
                                href: (0, l.SU)(c),
                                target: "_blank"
                            }, (0, i.zw)((0, l.SU)(a)((0, l.SU)(p).toGithub)), 9, it)]), (0, n._)("div", null, (0, i.zw)((0, l.SU)(a)((0, l.SU)(p).notOfficial)), 1)])])])),
                            _: 1
                        }))
                    }
                });
                const mt = (0, S.Z)(st, [
                    ["__scopeId", "data-v-773bfe95"]
                ]);
                var ct = mt,
                    ut = a(641),
                    pt = a(915),
                    ht = a(302);
                const gt = e => Math.floor(Math.random() * Math.floor(e)),
                    dt = e => F.find((t => t.name === e)),
                    yt = e => ((0, n.dD)("data-v-2a250814"), e = e(), (0, n.Cn)(), e),
                    vt = {
                        class: "search"
                    },
                    wt = {
                        class: "search-info"
                    },
                    jt = ["onKeyup", "onKeydown"],
                    ft = {
                        class: "total"
                    },
                    St = {
                        key: 0
                    },
                    Ut = {
                        class: "clear"
                    },
                    Tt = yt((() => (0, n._)("path", {
                        d: "M510.4 67.2c-246.6 0-446.5 199.9-446.5 446.5s199.9 446.5 446.5 446.5 446.5-199.9 446.5-446.5S757 67.2 510.4 67.2z m223.9 670.5c-24.1 24.1-63.5 24.1-87.6 0L510.4 601.4 374 737.7c-24.1 24.1-63.5 24.1-87.6 0-24.1-24.1-24.1-63.5 0-87.6l136.3-136.3-136.3-136.4c-24.1-24.1-24.1-63.5 0-87.6 24.1-24.1 63.5-24.1 87.6 0l136.3 136.3 136.3-136.3c24.1-24.1 63.5-24.1 87.6 0 24.1 24.1 24.1 63.5 0 87.6L598 513.7 734.3 650c24.1 24.1 24.1 63.6 0 87.7z"
                    }, null, -1))),
                    zt = [Tt],
                    Pt = {
                        key: 1,
                        viewBox: "0 0 1024 1024",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "30",
                        height: "30"
                    },
                    kt = yt((() => (0, n._)("path", {
                        d: "M995.209792 859.621209c17.352203 17.350157 28.086685 41.318034 28.086685 67.807339 0 52.928466-42.916439 95.869465-95.869465 95.869465-26.463722 0-50.429553-10.734482-67.781756-28.086685l0 0L578.68426 714.24726c-57.097416 33.703613-123.432217 53.401234-194.509019 53.401234-211.783451 0-383.472741-171.688267-383.472741-383.472741S172.390767 0.703011 384.176264 0.703011s383.472741 171.687244 383.472741 383.471718c0 71.076802-19.696598 137.41058-53.402257 194.483436L995.209792 859.621209 995.209792 859.621209zM384.176264 96.54587c-158.831448 0-287.605324 128.772852-287.605324 287.62886 0 158.832472 128.772852 287.606347 287.605324 287.606347S671.781588 543.007201 671.781588 384.17473C671.779541 225.318722 543.008736 96.54587 384.176264 96.54587z"
                    }, null, -1))),
                    At = [kt],
                    Wt = yt((() => (0, n._)("svg", {
                        viewBox: "0 0 1024 1024",
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "30",
                        height: "30"
                    }, [(0, n._)("path", {
                        d: "M268.8 876.8c-32 32-32 86.4 0 121.6 32 32 86.4 32 118.4 0l419.2-425.6c32-32 32-86.4 0-121.6L387.2 25.6c-16-16-38.4-25.6-60.8-25.6S284.8 9.6 265.6 25.6c-32 32-32 86.4 0 121.6l275.2 281.6c22.4 25.6 41.6 51.2 41.6 86.4s-22.4 64-41.6 86.4l-272 275.2z",
                        fill: "#ddd"
                    })], -1))),
                    Jt = [Wt];
                var bt = (0, n.aZ)({
                    setup(e) {
                        (0, o.sj)((e => ({
                            f1c904da: (0, l.SU)(p),
                            "6cd0891e": (0, l.SU)(g),
                            "8f873720": (0, l.SU)(h)
                        })));
                        const {
                            t: t,
                            te: a,
                            locale: r
                        } = (0, ee.QT)();
                        (0, n.YP)((() => B.showInfo), (() => {
                            s()
                        }));
                        const s = () => {
                                G.value.length < 1 && (H.value = !1), G.value = "", G.list.length = 0
                            },
                            m = e => {
                                if (G.list.length = 0, e || !(G.value.length < 1))
                                    for (const o of Q.value) {
                                        const n = o.translate[r.value];
                                        if (e) {
                                            if (o.name === e) {
                                                G.list.push(o.name);
                                                break
                                            }
                                        } else {
                                            const e = dt(o.category),
                                                r = a(`voicecategory.${e["name"]}`) && Boolean(t(`voicecategory.${e["name"]}`));
                                            B.showHide ? n && n.toUpperCase().includes(G.value.toUpperCase()) && r && !e.hide && G.list.push(o.name) : n && n.toUpperCase().includes(G.value.toUpperCase()) && r && !e.hide && !o.hide && G.list.push(o.name)
                                        }
                                    }
                            },
                            c = () => {
                                d.emit(u.autoScroll)
                            };
                        d.on(u.search, (e => {
                            m(e)
                        }));
                        const p = (0, n.Fl)((() => G.value ? "calc(100% - 30px)" : "100%")),
                            h = (0, n.Fl)((() => G.value ? "30px" : "0")),
                            g = (0, n.Fl)((() => G.value ? "" : "0 10px 10px 0"));
                        return (e, t) => ((0, n.wg)(), (0, n.iD)("div", vt, [(0, n._)("div", wt, [(0, n.wy)((0, n._)("input", {
                            type: "text",
                            "onUpdate:modelValue": t[0] || (t[0] = e => (0, l.SU)(G).value = e),
                            onKeyup: (0, o.D2)(c, ["enter"]),
                            onKeydown: (0, o.D2)(s, ["esc"]),
                            onInput: t[1] || (t[1] = e => m())
                        }, null, 40, jt), [
                            [o.nr, (0, l.SU)(G).value]
                        ]), (0, n._)("div", ft, [(0, n.Wm)(o.uT, {
                            name: "fade"
                        }, {
                            default: (0, n.w5)((() => [(0, l.SU)(G).list.length > 0 ? ((0, n.wg)(), (0, n.iD)("p", St, (0, i.zw)((0, l.SU)(G).index > 0 ? `${(0,l.SU)(G).index}/${(0,l.SU)(G).list.length}` : `${(0,l.SU)(G).list.length}`), 1)) : (0, n.kq)("", !0)])),
                            _: 1
                        })]), (0, n._)("div", Ut, [(0, l.SU)(G).value.length > 0 ? ((0, n.wg)(), (0, n.iD)("svg", {
                            key: 0,
                            onClick: s,
                            style: {
                                cursor: "pointer"
                            },
                            viewBox: "0 0 1024 1024",
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "15",
                            height: "30"
                        }, zt)) : ((0, n.wg)(), (0, n.iD)("svg", Pt, At))])]), (0, l.SU)(G).value ? ((0, n.wg)(), (0, n.iD)("div", {
                            key: 0,
                            class: "next",
                            onClick: c
                        }, Jt)) : (0, n.kq)("", !0)]))
                    }
                });
                const Mt = (0, S.Z)(bt, [
                    ["__scopeId", "data-v-2a250814"]
                ]);
                var Ct = Mt;
                const It = e => ((0, n.dD)("data-v-5c8b1d55"), e = e(), (0, n.Cn)(), e),
                    Ot = {
                        class: "header"
                    },
                    Ft = ["src"],
                    xt = {
                        key: 1,
                        class: "logo"
                    },
                    _t = It((() => (0, n._)("svg", {
                        viewBox: "0 0 1024 1024",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        "p-id": "8859",
                        width: "30",
                        height: "30"
                    }, [(0, n._)("path", {
                        d: "M995.209792 859.621209c17.352203 17.350157 28.086685 41.318034 28.086685 67.807339 0 52.928466-42.916439 95.869465-95.869465 95.869465-26.463722 0-50.429553-10.734482-67.781756-28.086685l0 0L578.68426 714.24726c-57.097416 33.703613-123.432217 53.401234-194.509019 53.401234-211.783451 0-383.472741-171.688267-383.472741-383.472741S172.390767 0.703011 384.176264 0.703011s383.472741 171.687244 383.472741 383.471718c0 71.076802-19.696598 137.41058-53.402257 194.483436L995.209792 859.621209 995.209792 859.621209zM384.176264 96.54587c-158.831448 0-287.605324 128.772852-287.605324 287.62886 0 158.832472 128.772852 287.606347 287.605324 287.606347S671.781588 543.007201 671.781588 384.17473C671.779541 225.318722 543.008736 96.54587 384.176264 96.54587z",
                        "p-id": "8860"
                    })], -1))),
                    Nt = [_t],
                    Bt = {
                        key: 0,
                        style: {
                            overflow: "hidden"
                        }
                    },
                    Dt = ["title"],
                    Et = It((() => (0, n._)("svg", {
                        viewBox: "0 0 1024 1024",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        "p-id": "1269",
                        width: "30",
                        height: "30"
                    }, [(0, n._)("path", {
                        d: "M512 0c282.773333 0 512 229.226667 512 512S794.773333 1024 512 1024 0 794.773333 0 512 229.226667 0 512 0z m169.749333 554.666667H342.250667c9.429333 217.792 89.813333 384 169.749333 384 79.914667 0 160.32-166.208 169.749333-384z m-424.917333 0l-169.386667 0.021333c15.658667 157.568 117.034667 289.92 256.853334 349.76-50.282667-85.738667-82.069333-210.346667-87.466667-349.76z m679.722667 0.021333h-169.386667c-5.397333 139.434667-37.184 264.021333-87.466667 349.738667 139.818667-59.797333 241.194667-192.170667 256.853334-349.738667zM344.32 119.573333l-4.736 2.048C202.176 182.378667 102.912 313.536 87.466667 469.333333h169.386666c5.397333-139.434667 37.184-264.042667 87.466667-349.76zM512 85.333333l-3.2 0.085334c-78.848 4.352-157.226667 169.045333-166.549333 383.914666h339.498666C672.32 251.562667 591.936 85.333333 512 85.333333z m167.701333 34.218667l3.136 5.44C731.306667 210.496 761.877333 332.8 767.146667 469.333333h169.386666c-15.637333-157.589333-117.034667-289.941333-256.853333-349.781333z",
                        "p-id": "1270"
                    })], -1))),
                    Ht = [Et];
                var Rt = (0, n.aZ)({
                    setup(e) {
                        const t = r.Fs || {},
                            a = e => {
                                let t = !1;
                                const a = () => {
                                    e.value && (e.value.style.animation = t ? "logo 1s" : "logo-restart 1s", t = !t)
                                };
                                return a
                            },
                            s = [{
                                url: t.lit,
                                img: ht
                            }, {
                                url: t.youtube,
                                img: pt
                            }, {
                                url: t.twitter,
                                img: ut
                            }],
                            m = (0, l.iH)(),
                            c = a(m),
                            u = (0, l.iH)(!!t.icon),
                            h = () => {
                                u.value = !1
                            },
                            g = () => {
                                H.value = !H.value, H.value || (G.value = "", G.list.length = 0)
                            },
                            {
                                t: d,
                                locale: y
                            } = (0, ee.QT)(),
                            v = () => {
                                G.value = "", G.list.length = 0, "zh-TW" === y.value ? (y.value = "ja-JP", localStorage.setItem("lang", "ja-JP"), document.title = d(p.title)) : "ja-JP" === y.value ? (y.value = "en-US", localStorage.setItem("lang", "en-US"), document.title = d(p.title)) : (y.value = "zh-TW", localStorage.setItem("lang", "zh-TW"), document.title = d(p.title))
                            },
                            w = () => {
                                j.value && !B.showHide && (B.showHide = !0, H.value || (G.value = "", G.list.length = 0))
                            },
                            j = (0, n.Fl)((() => Number(d(p.hideVoiceTotal)) > Number(d(p.voiceTotal))));
                        return (0, n.bv)((() => {
                            if (_.value) {
                                const e = localStorage.getItem("lang");
                                e && ["zh-TW", "en-US", "ja-JP"].includes(e) && (y.value = e), document.title = d(p.title)
                            }
                        })), (e, a) => ((0, n.wg)(), (0, n.j4)(o.uT, {
                            name: "slide-down",
                            appear: ""
                        }, {
                            default: (0, n.w5)((() => [(0, n._)("div", Ot, [u.value ? ((0, n.wg)(), (0, n.iD)("img", {
                                key: 0,
                                class: "logo",
                                ref_key: "logo",
                                ref: m,
                                onClick: a[0] || (a[0] = (...e) => (0, l.SU)(c) && (0, l.SU)(c)(...e)),
                                src: (0, l.SU)(t).icon || "",
                                onError: h
                            }, null, 40, Ft)) : ((0, n.wg)(), (0, n.iD)("div", xt)), (0, n._)("div", {
                                class: (0, i.C_)(["title", {
                                    pointer: !(0, l.SU)(B).showHide && (0, l.SU)(j)
                                }]),
                                onClick: w
                            }, (0, i.zw)((0, l.SU)(d)((0, l.SU)(p).title)), 3), ((0, n.wg)(), (0, n.iD)(n.HY, null, (0, n.Ko)(s, ((e, t) => ((0, n.wg)(), (0, n.iD)(n.HY, {
                                key: t
                            }, [e.url ? ((0, n.wg)(), (0, n.j4)(Ze, {
                                key: 0,
                                url: e.url,
                                img: e.img
                            }, null, 8, ["url", "img"])) : (0, n.kq)("", !0)], 64)))), 64)), (0, l.SU)(E) ? (0, n.kq)("", !0) : ((0, n.wg)(), (0, n.iD)("div", {
                                key: 2,
                                class: "search-btn",
                                onClick: g
                            }, Nt)), (0, n.Wm)(o.uT, {
                                name: "search"
                            }, {
                                default: (0, n.w5)((() => [(0, l.SU)(E) ? ((0, n.wg)(), (0, n.iD)("div", Bt, [(0, n.Wm)(Ct)])) : (0, n.kq)("", !0)])),
                                _: 1
                            }), (0, l.SU)(_) ? ((0, n.wg)(), (0, n.iD)("div", {
                                key: 3,
                                class: "btn",
                                title: (0, l.SU)(d)((0, l.SU)(p).lang),
                                onClick: v
                            }, Ht, 8, Dt)) : (0, n.kq)("", !0)])])),
                            _: 1
                        }))
                    }
                });
                const Lt = (0, S.Z)(Rt, [
                    ["__scopeId", "data-v-5c8b1d55"]
                ]);
                var Vt = Lt,
                    Yt = (0, n.aZ)({
                        setup(e) {
                            const t = r.iV || {};
                            if (t && (t.text || t.img)) {
                                const e = t.text || "",
                                    a = t.size || "16px",
                                    o = t.color || "",
                                    n = t.imgWidth || "100%",
                                    r = t.imgHeight || "100%",
                                    l = t.img ? `padding-right:${n};padding-top:${r};background:url('${location.origin}/img/${t.img}') no-repeat;background-size:100% 100%` : "";
                                console.log(`%c${e}%c `, `font-size:${a};color:${o}`, l)
                            }
                            return (e, t) => {
                                const a = (0, n.up)("router-view");
                                return (0, n.wg)(), (0, n.iD)(n.HY, null, [(0, n.Wm)(Vt), (0, n.Wm)(a, {
                                    style: {
                                        "min-height": "calc(100vh - 48px - 78px)"
                                    }
                                }), (0, n.Wm)(Re), (0, n.Wm)(ct)], 64)
                            }
                        }
                    });
                const qt = Yt;
                var Qt = qt;
                const Zt = {
                        ...O["zh-TW"],
                        voice: {},
                        voicecategory: {}
                    },
                    Gt = {
                        ...O["en-US"],
                        voice: {},
                        voicecategory: {}
                    },
                    Kt = {
                        ...O["ja-JP"],
                        voice: {},
                        voicecategory: {}
                    },
                    Xt = r.u2 || {};
                Zt.info = {
                    ...Zt.info,
                    ...Xt["TW"] || {
                        title: "語音按鈕",
                        fullName: ""
                    }
                }, Gt.info = {
                    ...Gt.info,
                    ...Xt["EN"] || {
                        title: "Voices Button",
                        fullName: ""
                    }
                }, Kt.info = {
                    ...Kt.info,
                    ...Xt["JP"] || {
                        title: "ボイスボタン",
                        fullName: ""
                    }
                };
                for (const Go of F) Go.translate && (Go.translate["zh-TW"] && (Zt.voicecategory[Go.name] = Go.translate["zh-TW"]), Go.translate["en-US"] && (Gt.voicecategory[Go.name] = Go.translate["en-US"]), Go.translate["ja-JP"] && (Kt.voicecategory[Go.name] = Go.translate["ja-JP"]));
                let $t = 0,
                    ea = 0,
                    ta = 0,
                    aa = 0,
                    oa = 0,
                    na = 0;
                for (const Go of x)
                    if (Go.translate) {
                        const e = dt(Go.category);
                        Go.translate["zh-TW"] && e.translate["zh-TW"] && (Zt.voice[Go.name] = Go.translate["zh-TW"], Go.hide || e.hide ? aa++ : $t++), Go.translate["en-US"] && e.translate["en-US"] && (Gt.voice[Go.name] = Go.translate["en-US"], Go.hide || e.hide ? oa++ : ea++), Go.translate["ja-JP"] && e.translate["ja-JP"] && (Kt.voice[Go.name] = Go.translate["ja-JP"], Go.hide || e.hide ? na++ : ta++)
                    } Zt.voiceTotal = $t.toString(), Gt.voiceTotal = ea.toString(), Kt.voiceTotal = ta.toString(), Zt.hideVoiceTotal = ($t + aa).toString(), Gt.hideVoiceTotal = (ea + oa).toString(), Kt.hideVoiceTotal = (ta + na).toString();
                let ra = "",
                    la = "",
                    ia = "",
                    sa = null,
                    ma = null,
                    ca = null,
                    ua = "",
                    pa = "",
                    ha = "",
                    ga = null,
                    da = null,
                    ya = null;
                for (const Go of x)
                    if (Go.date) {
                        const e = new Date(Go.date),
                            t = dt(Go.category);
                        Go.translate["zh-TW"] && t.translate["zh-TW"] && (Go.hide || t.hide || (sa || (sa = e, ra = Go.date), e > sa && (sa = e, ra = Go.date)), ga || (ga = e, ua = Go.date), e > ga && (ga = e, ua = Go.date)), Go.translate["en-US"] && t.translate["en-US"] && (Go.hide || t.hide || (ma || (ma = e, la = Go.date), e > ma && (ma = e, la = Go.date)), da || (da = e, pa = Go.date), e > da && (da = e, pa = Go.date)), Go.translate["ja-JP"] && t.translate["ja-JP"] && (Go.hide || t.hide || (ca || (ca = e, ia = Go.date), e > ca && (ca = e, ia = Go.date)), ya || (ya = e, ha = Go.date), e > ya && (ya = e, ha = Go.date))
                    } Zt.lastDate = ra || "", Gt.lastDate = la || "", Kt.lastDate = ia || "", Zt.hideLastDate = ua || "", Gt.hideLastDate = pa || "", Kt.hideLastDate = ha || "", Zt.newVoice = x.filter((e => e.date && e.date === ra && e.translate["zh-TW"] && F.find((t => t.name === e.category)).translate["zh-TW"])).length.toString() || "", Gt.newVoice = x.filter((e => e.date && e.date === la && e.translate["en-US"] && F.find((t => t.name === e.category)).translate["en-US"])).length.toString() || "", Gt.newVoice = x.filter((e => e.date && e.date === ia && e.translate["ja-JP"] && F.find((t => t.name === e.category)).translate["ja-JP"])).length.toString() || "", Zt.hideNewVoice = x.filter((e => e.date && e.date === ua && e.translate["zh-TW"] && F.find((t => t.name === e.category)).translate["zh-TW"])).length.toString() || "", Gt.hideNewVoice = x.filter((e => e.date && e.date === pa && e.translate["en-US"] && F.find((t => t.name === e.category)).translate["en-US"])).length.toString() || "", Gt.hideNewVoice = x.filter((e => e.date && e.date === ha && e.translate["ja-JP"] && F.find((t => t.name === e.category)).translate["ja-JP"])).length.toString() || "";
                const va = (0, ee.o)({
                    locale: /en/i.test(navigator.language) && _.value ? "en-US" : /jp/i.test(navigator.language) && _.value ? "ja-JP" : "zh-TW",
                    messages: {
                        "zh-TW": Zt,
                        "en-US": Gt,
                        "ja-JP": Kt
                    }
                });
                var wa = va,
                    ja = a(119);
                const fa = ["href"];
                var Sa = (0, n.aZ)({
                    props: {
                        name: String,
                        url: String,
                        color: {
                            type: String,
                            default: null
                        },
                        background: {
                            type: String,
                            default: null
                        },
                        disabled: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    setup(e) {
                        return (t, a) => ((0, n.wg)(), (0, n.iD)("div", {
                            class: (0, i.C_)(["btn", {
                                disabled: e.disabled
                            }]),
                            style: (0, i.j5)({
                                background: e.background
                            })
                        }, [(0, l.SU)(N) ? ((0, n.wg)(), (0, n.iD)("div", {
                            key: 0,
                            class: "left",
                            style: (0, i.j5)({
                                borderColor: `transparent transparent ${e.background} transparent`
                            })
                        }, null, 4)) : (0, n.kq)("", !0), (0, l.SU)(N) ? ((0, n.wg)(), (0, n.iD)("div", {
                            key: 1,
                            class: "right",
                            style: (0, i.j5)({
                                borderColor: `transparent transparent ${e.background} transparent`
                            })
                        }, null, 4)) : (0, n.kq)("", !0), (0, n._)("a", {
                            href: e.url,
                            target: "_blank",
                            style: (0, i.j5)({
                                color: e.color
                            })
                        }, (0, i.zw)(e.name), 13, fa)], 6))
                    }
                });
                const Ua = (0, S.Z)(Sa, [
                    ["__scopeId", "data-v-491f48a4"]
                ]);
                var Ta = Ua;
                const za = {
                        class: "card-wrapper"
                    },
                    Pa = {
                        key: 0,
                        class: "card-header"
                    },
                    ka = {
                        class: "card-text"
                    };

                function Aa(e, t) {
                    return (0, n.wg)(), (0, n.iD)("div", za, [e.$slots.header ? ((0, n.wg)(), (0, n.iD)("div", Pa, [(0, n.WI)(e.$slots, "header", {}, void 0, !0)])) : (0, n.kq)("", !0), (0, n._)("div", ka, [(0, n.WI)(e.$slots, "default", {}, void 0, !0)])])
                }
                const Wa = {},
                    Ja = (0, S.Z)(Wa, [
                        ["render", Aa],
                        ["__scopeId", "data-v-1eb6ef2c"]
                    ]);
                var ba = Ja;
                const Ma = e => ((0, n.dD)("data-v-4492cd0d"), e = e(), (0, n.Cn)(), e),
                    Ca = {
                        class: "new-icon"
                    },
                    Ia = Ma((() => (0, n._)("div", null, "n", -1))),
                    Oa = Ma((() => (0, n._)("div", null, "e", -1))),
                    Fa = Ma((() => (0, n._)("div", null, "w", -1))),
                    xa = [Ia, Oa, Fa];

                function _a(e, t) {
                    return (0, n.wg)(), (0, n.iD)("div", Ca, xa)
                }
                const Na = {},
                    Ba = (0, S.Z)(Na, [
                        ["render", _a],
                        ["__scopeId", "data-v-4492cd0d"]
                    ]);
                var Da = Ba;
                const Ea = ["src"],
                    Ha = {
                        key: 2,
                        class: "left"
                    },
                    Ra = {
                        key: 3,
                        class: "right"
                    },
                    La = ["href", "filename"],
                    Va = {
                        class: "text"
                    };
                var Ya = (0, n.aZ)({
                    props: {
                        text: String,
                        name: String,
                        newIcon: {
                            type: Boolean,
                            default: !1
                        },
                        showPic: {
                            type: String,
                            default: null
                        },
                        disable: {
                            type: Boolean,
                            default: !1
                        },
                        url: {
                            type: String,
                            default: null
                        }
                    },
                    setup(e, {
                        expose: t
                    }) {
                        const a = (0, l.iH)(),
                            o = (0, l.iH)(0),
                            r = (0, l.iH)(!1),
                            s = (0, l.iH)(!1),
                            m = (0, l.iH)(!1);
                        let c = null;
                        return (0, n.YP)(o, (e => {
                            0 === e ? (m.value = !1, c = setTimeout((() => {
                                a.value.style.transition = "width 0.2s linear", a.value.style.width = "0"
                            }), 200)) : (m.value = !0, clearTimeout(c), c = null, a.value.style.transition = "width 0.25s linear", a.value.style.width = e + 1 + "%")
                        })), t({
                            progress: o,
                            lowlight: r,
                            highlight: s
                        }), (t, o) => ((0, n.wg)(), (0, n.iD)("div", {
                            class: (0, i.C_)(["wrapper", {
                                lowlight: r.value,
                                highlight: s.value || m.value,
                                disable: e.disable
                            }])
                        }, [e.newIcon ? ((0, n.wg)(), (0, n.j4)(Da, {
                            key: 0,
                            class: "new-icon"
                        })) : (0, n.kq)("", !0), e.showPic ? ((0, n.wg)(), (0, n.iD)("img", {
                            key: 1,
                            class: "pic",
                            src: e.showPic
                        }, null, 8, Ea)) : (0, n.kq)("", !0), (0, l.SU)(N) ? ((0, n.wg)(), (0, n.iD)("div", Ha)) : (0, n.kq)("", !0), (0, l.SU)(N) ? ((0, n.wg)(), (0, n.iD)("div", Ra)) : (0, n.kq)("", !0), (0, n._)("a", {
                            class: "btn",
                            href: e.url,
                            filename: e.url,
                            target: "_blank"
                        }, [(0, n._)("div", {
                            class: "progress",
                            ref_key: "progressRef",
                            ref: a
                        }, null, 512), (0, n._)("span", Va, (0, i.zw)(e.text), 1)], 8, La)], 2))
                    }
                });
                const qa = (0, S.Z)(Ya, [
                    ["__scopeId", "data-v-6b3e20d1"]
                ]);
                var Qa = qa;
                const Za = r.pN,
                    Ga = r.G3,
                    Ka = e => {
                        const t = (0, ja.tv)(),
                            a = (0, l.iH)("");
                        (0, n.YP)(G, (t => {
                            for (const o in e) e[o] && (t.value.length > 0 ? e[o].lowlight = !t.list.includes(o) : e[o].lowlight = !1, e[o].highlight = o === a.value)
                        })), (0, n.YP)((() => G.value), ((e, o) => {
                            o && (c.search in t.currentRoute.value.query || c.name in t.currentRoute.value.query) && t.push({
                                query: {}
                            }), e !== o && (G.index = 0), a.value && (a.value = "")
                        })), d.on(u.autoScroll, (() => {
                            if (G.list && G.list.length > 0)
                                for (const t in e)
                                    if (G.index + 1 > G.list.length && (G.index = 0), t === G.list[G.index]) {
                                        G.index++;
                                        const o = document.documentElement.scrollTop + e[t].$el.getBoundingClientRect().top - 200;
                                        a.value = t, window.scrollTo({
                                            top: o,
                                            behavior: "smooth"
                                        });
                                        break
                                    }
                        })), Xa(G, t)
                    },
                    Xa = (e, t) => {
                        (0, n.bv)((() => {
                            const a = () => {
                                (0, n.Y3)((() => {
                                    setTimeout((() => {
                                        e.list.length > 0 && d.emit(u.autoScroll)
                                    }), 500)
                                }))
                            };
                            t.isReady().then((() => {
                                t.currentRoute.value.query[c.name] ? (H.value = !0, e.value = t.currentRoute.value.query[c.name], d.emit(u.search, t.currentRoute.value.query[c.name]), a()) : t.currentRoute.value.query[c.search] && (H.value = !0, e.value = t.currentRoute.value.query[c.search], d.emit(u.search), a())
                            }))
                        }))
                    },
                    $a = () => {
                        ++K.value, ++$.value, localStorage.setItem("play", K.value.toString())
                    },
                    eo = e => {
                        const {
                            t: t,
                            te: a,
                            locale: o
                        } = (0, ee.QT)();
                        "mediaSession" in navigator && (navigator.mediaSession.setActionHandler("nexttrack", (() => {
                            m()
                        })), navigator.mediaSession.setActionHandler("previoustrack", (() => {
                            m()
                        })), navigator.mediaSession.setActionHandler("pause", (() => {
                            l.has("once") && l.get("once").audio.pause(), navigator.mediaSession.playbackState = "paused"
                        })));
                        let n = null;
                        const r = () => {
                                B.loading = !0, B.nowPlay = null, B.error = !1, Z.value = null
                            },
                            l = new Map,
                            i = e => {
                                if (B.overlap) {
                                    const t = (new Date).getTime();
                                    s(e, t)
                                } else if (y(), B.nowPlay && B.nowPlay.name === e.name ? (clearTimeout(n), n = setTimeout((() => {
                                        s(e, "once")
                                    }), 250)) : s(e, "once"), "mediaSession" in navigator) {
                                    const a = {
                                        title: t("voice." + e.name),
                                        artist: t(p.fullName),
                                        album: t(p.title),
                                        artwork: Za ? [{
                                            src: `/img/${Za}`,
                                            sizes: "128x128"
                                        }] : []
                                    };
                                    navigator.mediaSession.metadata = new window.MediaMetadata(a), navigator.mediaSession.playbackState = "playing"
                                }
                            },
                            s = (t, a) => {
                                r(), "once" === a && l.has(a) && (l.get(a).audio.oncanplay = null);
                                const o = U(t.path);
                                l.set(a, {
                                    name: t.name,
                                    audio: new Audio(o)
                                }), B.overlap || (B.nowPlay = t, t.mark && (Z.value = t.mark)), l.get(a).audio.play(), l.get(a).audio.onerror = () => {
                                    Ga && l.get(a).audio.src.startsWith(Ga) ? (l.get(a).audio.src = `./mayuru_button_web/voices/${t.path}`, l.get(a).audio.play()) : (B.loading = !1, B.error = !0)
                                }, l.get(a).audio.oncanplay = () => {
                                    $a(), B.loading = !1;
                                    const o = l.get(a).audio.duration;
                                    let n = 0;
                                    l.get(a).audio.ontimeupdate = () => {
                                        n = Number((l.get(a).audio.currentTime / o * 100).toFixed(0));
                                        let r = 0;
                                        for (const e of l.keys()) l.get(e).name === t.name && r++;
                                        e[t.name].progress = r > 1 ? 100 : n
                                    }, l.get(a).audio.onended = () => {
                                        e[t.name].progress = 0, l.delete(a), B.loop > 0 ? c(t) : r(), B.autoRandom && m()
                                    }
                                }
                            };
                        d.on(u.randomPlay, (() => {
                            m()
                        }));
                        const m = () => {
                                const e = [];
                                q.value.forEach((t => {
                                    v(t) && t.voiceList.forEach((t => {
                                        w(t) && e.push(t)
                                    }))
                                })), i(e[gt(e.length)])
                            },
                            c = e => {
                                if (1 === B.loop) i(e);
                                else if (2 === B.loop) {
                                    let t = [];
                                    if (B.showInfo)
                                        if (e.mark && e.mark.title) {
                                            const a = q.value.find((t => e.mark && t.title === e.mark.title && t.voiceList));
                                            t = a ? a.voiceList : []
                                        } else {
                                            const e = q.value.find((e => "unknown" === e.title && e.voiceList));
                                            t = e ? e.voiceList : []
                                        }
                                    else {
                                        const a = q.value.find((t => t.name === e.category && t.voiceList));
                                        t = a ? a.voiceList : []
                                    }
                                    const a = t[h(e, t)];
                                    a && i(a)
                                } else if (3 === B.loop) {
                                    const t = Q.value[h(e, Q.value)];
                                    t && i(t)
                                }
                            },
                            h = (e, t) => {
                                let a = -1;
                                for (const o in t) {
                                    if (Number(o) === t.length - 1) {
                                        a = 0;
                                        break
                                    }
                                    if (t[o].name === e.name) {
                                        a = Number(o) + 1, g(t[a]) || (a = h(t[a], t));
                                        break
                                    }
                                }
                                return a
                            },
                            g = e => {
                                const t = q.value.some((t => B.showInfo ? e.mark ? t.title === e.mark.title : "unknown" === t.title : t.name === e.category && Boolean(t.translate[o.value]))) && Boolean(e.translate[o.value]);
                                return B.showHide ? t : t && !e.hide
                            };
                        d.on(u.stopPlay, (() => {
                            y()
                        }));
                        const y = () => {
                                clearTimeout(n);
                                for (const t of l.keys()) {
                                    l.get(t).audio.pause(), l.get(t).audio.onerror = null, l.get(t).audio.oncanplay = null, l.get(t).audio.ontimeupdate = null, l.get(t).audio.onended = null;
                                    const a = l.get(t).name;
                                    e[a].progress = 0
                                }
                                l.clear(), r(), "mediaSession" in navigator && (navigator.mediaSession.playbackState = "none")
                            },
                            v = e => {
                                const o = e.voiceList.every((e => !w(e)));
                                return !o && (B.showInfo ? Boolean(e["title"]) : B.showHide ? a(`voicecategory.${e["name"]}`) && Boolean(t(`voicecategory.${e["name"]}`)) : a(`voicecategory.${e["name"]}`) && Boolean(t(`voicecategory.${e["name"]}`)) && !e.hide)
                            },
                            w = e => {
                                if (B.showHide) return a(`voice.${e.name}`) && Boolean(t(`voice.${e.name}`));
                                {
                                    let o = !0;
                                    if (B.showInfo) {
                                        const n = dt(e.category);
                                        o = a(`voicecategory.${n["name"]}`) && Boolean(t(`voicecategory.${n["name"]}`)) && !n.hide
                                    }
                                    return a(`voice.${e.name}`) && Boolean(t(`voice.${e.name}`)) && !e.hide && o
                                }
                            },
                            j = e => B.showInfo && e && e.time ? e.time : "",
                            f = e => !!e && (B.showHide ? e === t(p.hideLastDate) : e === t(p.lastDate)),
                            S = e => e && Boolean(e[o.value]) ? `./mayuru_button_web/voices/img/${e[o.value]}` : void 0,
                            U = e => Ga ? `${Ga}/${e}` : `./mayuru_button_web/voices/${e}`;
                        return {
                            playSetting: B,
                            voices: q,
                            play: i,
                            isShowCategory: v,
                            isShowVoice: w,
                            isShowTime: j,
                            isShowNewIcon: f,
                            getPicUrl: S,
                            getDownloadUrl: U
                        }
                    },
                    to = e => {
                        d.on(u.nameClick, (t => {
                            if (t)
                                for (const a in e)
                                    if (a === t) {
                                        const t = document.documentElement.scrollTop + e[a].$el.getBoundingClientRect().top - 200;
                                        window.scrollTo({
                                            top: t,
                                            behavior: "smooth"
                                        });
                                        break
                                    }
                        }))
                    },
                    ao = {
                        key: 0
                    },
                    oo = {
                        class: "category"
                    },
                    no = ["href"],
                    ro = {
                        class: "content"
                    };
                var lo = (0, n.aZ)({
                    setup(e) {
                        const {
                            t: t
                        } = (0, ee.QT)(), a = (0, l.qj)({}), {
                            playSetting: r,
                            voices: s,
                            play: m,
                            isShowCategory: c,
                            isShowVoice: u,
                            isShowTime: p,
                            isShowNewIcon: h,
                            getPicUrl: g,
                            getDownloadUrl: d
                        } = eo(a);
                        return Ka(a), to(a), (e, y) => ((0, n.wg)(!0), (0, n.iD)(n.HY, null, (0, n.Ko)((0, l.SU)(s), (e => ((0, n.wg)(), (0, n.j4)(o.W3, {
                            key: e.name || e.title,
                            name: "fade"
                        }, {
                            default: (0, n.w5)((() => [(0, l.SU)(c)(e) ? ((0, n.wg)(), (0, n.iD)("div", ao, [(0, n.Wm)(ba, null, {
                                header: (0, n.w5)((() => [(0, n._)("div", oo, [(0, l.SU)(r).showInfo ? ((0, n.wg)(), (0, n.iD)("a", {
                                    key: 0,
                                    href: e["url"],
                                    target: "_blank"
                                }, (0, i.zw)("unknown" === e["title"] ? (0, l.SU)(t)("unknown") : e["title"]), 9, no)) : ((0, n.wg)(), (0, n.iD)(n.HY, {
                                    key: 1
                                }, [(0, n.Uk)((0, i.zw)((0, l.SU)(t)(`voicecategory.${e["name"]}`)), 1)], 64))])])),
                                default: (0, n.w5)((() => [(0, n._)("div", ro, [((0, n.wg)(!0), (0, n.iD)(n.HY, null, (0, n.Ko)(e.voiceList, (e => ((0, n.wg)(), (0, n.iD)(n.HY, {
                                    key: e.name
                                }, [(0, l.SU)(u)(e) ? ((0, n.wg)(), (0, n.j4)(Qa, {
                                    key: 0,
                                    url: (0, l.SU)(d)(e.path),
                                    title: (0, l.SU)(p)(e.mark),
                                    text: (0, l.SU)(t)(`voice.${e.name}`),
                                    name: e.name,
                                    newIcon: (0, l.SU)(h)(e.date),
                                    showPic: (0, l.SU)(g)(e.usePicture),
                                    ref_for: !0,
                                    ref: t => {
                                        (0, l.SU)(a)[e.name] = t
                                    },
                                    onClick: (0, o.iM)((t => (0, l.SU)(m)(e)), ["prevent"])
                                }, null, 8, ["url", "title", "text", "name", "newIcon", "showPic", "onClick"])) : (0, n.kq)("", !0)], 64)))), 128))])])),
                                _: 2
                            }, 1024)])) : (0, n.kq)("", !0)])),
                            _: 2
                        }, 1024)))), 128))
                    }
                });
                const io = (0, S.Z)(lo, [
                    ["__scopeId", "data-v-4613b6c7"]
                ]);
                var so = io;
                const mo = e => ((0, n.dD)("data-v-2cda301e"), e = e(), (0, n.Cn)(), e),
                    co = {
                        class: "text"
                    },
                    uo = mo((() => (0, n._)("svg", {
                        t: "1616130580549",
                        viewBox: "0 0 1024 1024",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        "p-id": "2219",
                        width: "16",
                        height: "16"
                    }, [(0, n._)("path", {
                        d: "M325.048 93.511l-60.030 59.435 357.181 359.631-360.184 356.603 59.522 59.93 420.207-416.043z",
                        "p-id": "2220"
                    })], -1))),
                    po = [uo],
                    ho = {
                        class: "collapse"
                    },
                    go = {
                        class: "collapse-item"
                    };
                var yo = (0, n.aZ)({
                    props: {
                        title: {
                            type: String,
                            default: ""
                        }
                    },
                    setup(e) {
                        const t = (0, l.iH)(!1),
                            a = () => {
                                t.value = !t.value
                            };
                        return (r, l) => ((0, n.wg)(), (0, n.j4)(ba, null, {
                            header: (0, n.w5)((() => [(0, n._)("div", {
                                class: "title",
                                onClick: a
                            }, [(0, n._)("div", co, (0, i.zw)(e.title), 1), (0, n._)("div", {
                                class: (0, i.C_)(["icon", {
                                    show: t.value
                                }])
                            }, po, 2)])])),
                            default: (0, n.w5)((() => [(0, n.wy)((0, n._)("div", ho, [(0, n._)("div", go, [(0, n.WI)(r.$slots, "default")])], 512), [
                                [o.F8, t.value]
                            ])])),
                            _: 3
                        }))
                    }
                });
                const vo = (0, S.Z)(yo, [
                    ["__scopeId", "data-v-2cda301e"]
                ]);
                var wo = vo;
                const jo = ["innerHTML"],
                    fo = {
                        class: "readme-icon"
                    },
                    So = {
                        key: 0,
                        class: "line"
                    },
                    Uo = {
                        class: "tip"
                    },
                    To = {
                        key: 1,
                        class: "line"
                    },
                    zo = {
                        class: "tip"
                    },
                    Po = {
                        class: "line"
                    },
                    ko = {
                        class: "tip"
                    },
                    Ao = {
                        class: "line"
                    },
                    Wo = {
                        class: "tip"
                    },
                    Jo = {
                        class: "line"
                    },
                    bo = {
                        class: "tip"
                    },
                    Mo = {
                        class: "line"
                    },
                    Co = {
                        class: "tip"
                    };
                var Io = (0, n.aZ)({
                    setup(e) {
                        const t = r.ng || "",
                            {
                                t: a
                            } = (0, ee.QT)(),
                            o = (0, n.Fl)((() => B.overlap ? a(g.overlapOn) : a(g.overlapOff))),
                            s = (0, n.Fl)((() => B.autoRandom ? a(g.autoRandomOn) : a(g.autoRandomOff))),
                            m = (0, n.Fl)((() => 1 === B.loop ? a(g.loop1) : 2 === B.loop ? a(g.loop2) : 3 === B.loop ? a(g.loop3) : a(g.loop0))),
                            c = (0, n.Fl)((() => B.showInfo ? a(g.showInfoOn) : a(g.showInfoOff)));
                        return (e, r) => ((0, n.wg)(), (0, n.j4)(wo, {
                            title: "README"
                        }, {
                            default: (0, n.w5)((() => [(0, l.SU)(t).length > 0 ? ((0, n.wg)(), (0, n.iD)("div", {
                                key: 0,
                                class: "text",
                                innerHTML: (0, l.SU)(t)
                            }, null, 8, jo)) : (0, n.kq)("", !0), (0, n._)("div", fo, [(0, l.SU)(B).nowPlay ? ((0, n.wg)(), (0, n.iD)("div", To, [(0, n.Wm)(Fe, {
                                type: "stopPlay"
                            }), (0, n._)("div", zo, (0, i.zw)((0, l.SU)(a)((0, l.SU)(g).stop)), 1)])) : ((0, n.wg)(), (0, n.iD)("div", So, [(0, n.Wm)(Fe, {
                                type: "randomPlay"
                            }), (0, n._)("div", Uo, (0, i.zw)((0, l.SU)(a)((0, l.SU)(g).randomPlay)), 1)])), (0, n._)("div", Po, [(0, n.Wm)(Fe, {
                                type: "overlapChange"
                            }), (0, n._)("div", ko, (0, i.zw)((0, l.SU)(o)), 1)]), (0, n._)("div", Ao, [(0, n.Wm)(Fe, {
                                type: "autoRandomChange"
                            }), (0, n._)("div", Wo, (0, i.zw)((0, l.SU)(s)), 1)]), (0, n._)("div", Jo, [(0, n.Wm)(Fe, {
                                type: "loopChange"
                            }), (0, n._)("div", bo, (0, i.zw)((0, l.SU)(m)), 1)]), (0, n._)("div", Mo, [(0, n.Wm)(Fe, {
                                type: "changeShowInfo"
                            }), (0, n._)("div", Co, (0, i.zw)((0, l.SU)(c)), 1)])])])),
                            _: 1
                        }))
                    }
                });
                const Oo = (0, S.Z)(Io, [
                    ["__scopeId", "data-v-3ae6b48e"]
                ]);
                var Fo = Oo,
                    xo = (0, n.aZ)({
                        setup(e) {
                            return (e, t) => ((0, n.wg)(), (0, n.j4)(o.uT, {
                                name: "search-card"
                            }, {
                                default: (0, n.w5)((() => [(0, l.SU)(E) ? (0, n.kq)("", !0) : ((0, n.wg)(), (0, n.j4)(ba, {
                                    key: 0,
                                    class: (0, i.C_)(["search-wrapper", {
                                        "show-search": (0, l.SU)(H)
                                    }])
                                }, {
                                    default: (0, n.w5)((() => [(0, n.Wm)(Ct, {
                                        class: "search"
                                    })])),
                                    _: 1
                                }, 8, ["class"]))])),
                                _: 1
                            }))
                        }
                    });
                const _o = (0, S.Z)(xo, [
                    ["__scopeId", "data-v-145fa6d6"]
                ]);
                var No = _o;
                const Bo = {
                        class: "index"
                    },
                    Do = {
                        style: {
                            "text-align": "center"
                        }
                    },
                    Eo = {
                        style: {
                            "text-align": "center"
                        }
                    },
                    Ho = {
                        class: "content"
                    },
                    Ro = {
                        class: "content"
                    };
                var Lo = (0, n.aZ)({
                    setup(e) {
                        const t = r.zY || [],
                            a = r.p4 || [],
                            s = (e, t) => t.value ? (t.value.style.animation = e ? "voice 0.3s linear" : "voice-restart 0.3s linear", !e) : e,
                            m = (e, t, a) => {
                                let o = !1;
                                (0, n.YP)((() => e.showInfo), (() => {
                                    o = s(o, a)
                                })), (0, n.YP)(t, (() => {
                                    o = s(o, a)
                                }))
                            },
                            {
                                t: c,
                                locale: u
                            } = (0, ee.QT)(),
                            h = (0, l.iH)();
                        m(B, u, h);
                        const g = (0, n.Fl)((() => {
                                const e = c(p.voiceTotalTip) + ": ";
                                return B.showHide ? `${e}${c(p.hideVoiceTotal)} ${c(p.hideLastDate)?`(+${c(p.hideNewVoice)} · ${c(p.hideLastDate)})`:""}` : `${e}${c(p.voiceTotal)} ${c(p.lastDate)?`(+${c(p.newVoice)} · ${c(p.lastDate)})`:""}`
                            })),
                            d = (0, n.Fl)((() => `${c(p.playTimes)} ${K.value}${$.value>0?`(+${$.value})`:""} ${c(p.playTimes2)}`));
                        return (e, r) => ((0, n.wg)(), (0, n.j4)(o.uT, {
                            name: "first",
                            appear: ""
                        }, {
                            default: (0, n.w5)((() => [(0, n._)("div", Bo, [(0, n.Wm)(No), (0, n.Wm)(Fo), (0, n._)("div", {
                                ref_key: "voice",
                                ref: h
                            }, [(0, n.Wm)(so)], 512), (0, n.Wm)(ba, null, {
                                default: (0, n.w5)((() => [(0, n._)("div", Do, (0, i.zw)((0, l.SU)(g)), 1)])),
                                _: 1
                            }), (0, n.Wm)(ba, null, {
                                default: (0, n.w5)((() => [(0, n._)("div", Eo, (0, i.zw)((0, l.SU)(d)), 1)])),
                                _: 1
                            }), (0, l.SU)(t).length > 0 ? ((0, n.wg)(), (0, n.j4)(ba, {
                                key: 0
                            }, {
                                default: (0, n.w5)((() => [(0, n._)("div", Ho, [((0, n.wg)(!0), (0, n.iD)(n.HY, null, (0, n.Ko)((0, l.SU)(t), (e => ((0, n.wg)(), (0, n.j4)(Ta, {
                                    key: e.name,
                                    class: "btn",
                                    name: e.name,
                                    url: e.url,
                                    color: e.color,
                                    background: e.background
                                }, null, 8, ["name", "url", "color", "background"])))), 128))])])),
                                _: 1
                            })) : (0, n.kq)("", !0), (0, l.SU)(a).length > 0 ? ((0, n.wg)(), (0, n.j4)(ba, {
                                key: 1
                            }, {
                                default: (0, n.w5)((() => [(0, n._)("div", Ro, [((0, n.wg)(!0), (0, n.iD)(n.HY, null, (0, n.Ko)((0, l.SU)(a), (e => ((0, n.wg)(), (0, n.j4)(Ta, {
                                    key: e.name,
                                    class: "btn",
                                    name: e.name,
                                    url: e.url,
                                    color: e.color,
                                    background: e.background
                                }, null, 8, ["name", "url", "color", "background"])))), 128))])])),
                                _: 1
                            })) : (0, n.kq)("", !0)])])),
                            _: 1
                        }))
                    }
                });
                const Vo = (0, S.Z)(Lo, [
                    ["__scopeId", "data-v-290964a1"]
                ]);
                var Yo = Vo;
                const qo = [{
                        path: "/",
                        name: "Index",
                        component: Yo
                    }, {
                        path: "/:catchAll(.*)",
                        redirect: "/"
                    }],
                    Qo = (0, ja.p7)({
                        history: (0, ja.PO)("/"),
                        routes: qo
                    });
                var Zo = Qo;
                (0, o.ri)(Qt).use(Zo).use(wa).mount("#app")
            },
            903: function(e, t, a) {
                var o = {
                    "./01_voices": 411,
                    "./01_voices.json": 411,
                    "./02_voices": 81,
                    "./02_voices.json": 81,
                    "./03_voices": 211,
                    "./03_voices.json": 211,
                    "./04_voices": 900,
                    "./04_voices.json": 900,
                    "./05_voices": 91,
                    "./05_voices.json": 91,
                    "./06_voices": 175,
                    "./06_voices.json": 175,
                    "./category": 127,
                    "./category.json": 127,
                    "./locales": 206,
                    "./locales.json": 206
                };

                function n(e) {
                    var t = r(e);
                    return a(t)
                }

                function r(e) {
                    if (!a.o(o, e)) {
                        var t = new Error("Cannot find module '" + e + "'");
                        throw t.code = "MODULE_NOT_FOUND", t
                    }
                    return o[e]
                }
                n.keys = function() {
                    return Object.keys(o)
                }, n.resolve = r, e.exports = n, n.id = 903
            },
            241: function(e, t, a) {
                var o = {
                    "./01_voices.json": 411,
                    "./02_voices.json": 81,
                    "./03_voices.json": 211,
                    "./04_voices.json": 900,
                    "./05_voices.json": 91,
                    "./06_voices.json": 175,
                    "./category.json": 127,
                    "./locales.json": 206
                };

                function n(e) {
                    var t = r(e);
                    return a(t)
                }

                function r(e) {
                    if (!a.o(o, e)) {
                        var t = new Error("Cannot find module '" + e + "'");
                        throw t.code = "MODULE_NOT_FOUND", t
                    }
                    return o[e]
                }
                n.keys = function() {
                    return Object.keys(o)
                }, n.resolve = r, e.exports = n, n.id = 241
            },
            893: function(e) {
                "use strict";
                e.exports = "data:image/png;base64,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"
            },
            302: function(e) {
                "use strict";
                e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAVFBMVEWUlPusrPubm/vHx/zr6/6lpfudnfuWlvu1tfzLy/2envvU1P2mpvvOzv2+vvyxsfzX1/3e3v3l5f7Cwvzj4/24uPz19f6qqvvb2/3Dw/z39/6iovtMs7mRAAAAmklEQVQ4je3QuRLDIAwE0AVhJCABg68k/v//jPH4aNIlRQpv9WZYgQbgyl+Fm0+8nQVxgD3pV+n+LAQFEILdeEck4oFY7QXDSAOPxa2cIsaYVSs5budNrpMqVD6WC2TKKHYsxxJdrJN3sR2eCwtTp8vUm6OQgxPjXm2Jqa8ko8XR0Jh5f0Kp2SedvJ4Xei8WVnuG5S+/78pv8wbjCQWX+6tDzgAAAABJRU5ErkJggg=="
            },
            641: function(e) {
                "use strict";
                e.exports = "data:image/png;base64,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"
            },
            915: function(e) {
                "use strict";
                e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF4AAABeCAYAAACq0qNuAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAuIwAALiMBeKU/dgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAPGSURBVHic7ZzLbhRHFIa/MlYAE2KLm7llFZBBsAAW8AyAEEIKz8DboCyTPAJRJDYhbxDEBlggFkiAhAFhYw8GzCUIXCyqR26kwT41XTNVnv4/qTQ9rdNTZ/75daanp+uAEEIIIYQQQgghhBBCCCGEEEKIfnG5JvawHdgF7AB+BCaqx8lqewKYqh2yHRivPe9uf67t+wy8rT1fAt5X4zWwXG0vAx1gwX0bPzSSCu+DWD8DB4CD1fY+YJog8s7a4w8p527AJ2ABWKzGAjAHPAeeVuMZMOvCh5aEvoX3MAacB34FThCE3pEor1LpED6Iu8BfwA0HK0Ob3cMRD7c8+JaPmx5mhiX6GQ+dAt50KWPRw+lYHaNKjQ/l5DawO3aiEWceOOXCd4GJscgJfkOi92IPcDXmALPjPRwCHsQc0zJWgMMOHlmCYxx/Fom+FmMEjczBVo7G59I6jlkDY4Sf7iORtrHHGijh0zIQ4c0v2mLk+EyYhTedpXjYDHzsO51mPCFcUNubaf4YPLDFhQtva2J1fE63PyCcUf2ZMQcrDqPrrcJnre8OlhxcIVwNNf8sz0RS4Yuo7w5uAMcp2/1JhZ9skEhSau6/BLzInU8PptYPsQu/pUEiA8HBdcqs/ZstQVbhTS82bAqt/SaTbljH1yms9id1fNHCQ1HuT+r4IktNLwpwfzuFh+zub1ep6UUm94/+WY2FDO5PWmpEYqzC57oy2RgPUx7+AP4h3Fo4aExaja8fAsD/DRLJhodzhPo+DMG7mLSyOn5DCZ/B5XVMWlkdv2FKTSaX1zFpNTKOz+zyOklrfNGOL8DldUa/xhfk8jqj7XgPF4HfKe9P8KSOX2qQSFJqLr9OeaIDvLIEWR0/1yCRZBRWy7/HvCXI6njTiw2KQmv59zBppRua0mK+oSlmYcIrjP+gt5iOC0tJ1yXm6mTWcrNBMGsUI3wRX7CFMxDh5fj1kfCZeGkNjBH+fh+JtI171sCYs5pfCLdM6+/C3qwAhxw8tgSbRXTwEPi736xawDWr6BC/pP4AYUm91kN9yxxhSf1z6wFRZaNaq3+B0D5EBDrAhRjR+8bDTNUyJHfnjNzjPw+H+9GwaaOgs8Bl4CTtahR0B7gG/OvC9ZloUrfG2kpoh7W/ejxYbe+uRrct1k7KuS3wI6stsRYJ5+LzhNLxDJittmcdfEg1ac5mcNtY/SC6zd8mCfsnCM3ffgI2VYeMV/vW4i2rzeG+AG+qfe+Bd4SGcN3mcIuEZnDv0rwjIYQQQgghhBBCCCGEEEIIIYQQw+IrC4tWUf+RgfQAAAAASUVORK5CYII="
            },
            411: function(e) {
                "use strict";
                e.exports = JSON.parse('[{"name":"nicecontinuscoinchalin","path":"nicecontinuscoinchalin.mp3","date":"2023-12-07","translate":{"zh-TW":"NICE 銀幣 洽鈴","en-US":"Nice continus coin CHA-LIN","ja-JP":"ナイス・コンティナズ・コイン・チャー・リン"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"TC","mark":{"title":"","time":"","url":""}},{"name":"o茶ariado","path":"o茶ariado.mp3","date":"2023-12-07","translate":{"zh-TW":"謝謝你送的茶~~","en-US":"Thanks to your tea~","ja-JP":"お茶ありがとう～"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"TC","mark":{"title":"","time":"","url":""}},{"name":"tabederu yo212","path":"tabederu yo.mp3","date":"2023-12-07","translate":{"zh-TW":"都吃得下呦~","en-US":"All I can eat yo~","ja-JP":"食べ出るよ～"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"TC","mark":{"title":"","time":"","url":""}},{"name":"nice item23","path":"nice item.mp3","date":"2023-12-07","translate":{"zh-TW":"Nice item","en-US":"Nice item","ja-JP":"ナイス・アイテム "},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"nice","mark":{"title":"","time":"","url":""}}]')
            },
            81: function(e) {
                "use strict";
                e.exports = JSON.parse('[{"name":"YADA","path":"YADA.mp3","date":"2023-12-07","translate":{"zh-TW":"做到了~","en-US":"I did it~","ja-JP":"いやだ~"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"可愛聲音","mark":{"title":"","time":"","url":""}},{"name":"ano","path":"ano.mp3","date":"2023-12-07","translate":{"zh-TW":"ANO~","en-US":"ANO~","ja-JP":"あのー~"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"可愛聲音","mark":{"title":"","time":"","url":""}},{"name":"laugh1","path":"laugh1.mp3","date":"2023-12-07","translate":{"zh-TW":"笑聲 1","en-US":"Laugh 1","ja-JP":"笑い 1"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"可愛聲音","mark":{"title":"","time":"","url":""}},{"name":"are","path":"are.mp3","date":"2023-12-07","translate":{"zh-TW":"阿勒 (快)","en-US":"are (fast)","ja-JP":"アレ (快)"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"可愛聲音","mark":{"title":"","time":"","url":""}},{"name":"are2","path":"are2.mp3","date":"2023-12-07","translate":{"zh-TW":"阿勒","en-US":"are","ja-JP":"アレ"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"可愛聲音","mark":{"title":"","time":"","url":""}},{"name":"皆","path":"大家.mp3","date":"2023-12-07","translate":{"zh-TW":"大家~","en-US":"everyone~","ja-JP":"皆~"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"可愛聲音","mark":{"title":"","time":"","url":""}},{"name":"edo","path":"edo.mp3","date":"2023-12-07","translate":{"zh-TW":"EDO~","en-US":"EDO~","ja-JP":"えど～"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"可愛聲音","mark":{"title":"","time":"","url":""}},{"name":"dogana","path":"dogana.mp3","date":"2023-12-07","translate":{"zh-TW":"DOGANA~","en-US":"What do you think~","ja-JP":"どうがな～"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"可愛聲音","mark":{"title":"","time":"","url":""}},{"name":"dewane","path":"dewane.mp3","date":"2023-12-07","translate":{"zh-TW":"DEWANE~","en-US":"DEWANE~","ja-JP":"でわね～"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"可愛聲音","mark":{"title":"","time":"","url":""}},{"name":"daisukidesu","path":"daisukidesu.mp3","date":"2023-12-07","translate":{"zh-TW":"最喜歡了~","en-US":"I love it~","ja-JP":"大好きです~"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"可愛聲音","mark":{"title":"","time":"","url":""}},{"name":"hayai ne","path":"hayai ne.mp3","date":"2023-12-07","translate":{"zh-TW":"很快捏~","en-US":"It\'s fast~","ja-JP":"早い ね~"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"可愛聲音","mark":{"title":"","time":"","url":""}},{"name":"hayai","path":"hayai.mp3","date":"2023-12-07","translate":{"zh-TW":"HAYAYA~","en-US":"HAYAYA~","ja-JP":"はやや~"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"可愛聲音","mark":{"title":"","time":"","url":""}},{"name":"hiyo","path":"hiyo.mp3","date":"2023-12-07","translate":{"zh-TW":"HYO~","en-US":"HYO~","ja-JP":"ひょ～"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"可愛聲音","mark":{"title":"","time":"","url":""}},{"name":"iine","path":"iine.mp3","date":"2023-12-07","translate":{"zh-TW":"很好捏~","en-US":"It\'s good~","ja-JP":"いいね~"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"可愛聲音","mark":{"title":"","time":"","url":""}},{"name":"kinono","path":"kinono.mp3","date":"2023-12-07","translate":{"zh-TW":"昨天的~","en-US":"Yesterday~","ja-JP":"昨日の~"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"可愛聲音","mark":{"title":"","time":"","url":""}},{"name":"kurukuru","path":"kurukuru.mp3","date":"2023-12-07","translate":{"zh-TW":"咕嚕咕嚕~","en-US":"KURUKURU~","ja-JP":"くるくる~"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"可愛聲音","mark":{"title":"","time":"","url":""}},{"name":"sosososo","path":"sosososo.mp3","date":"2023-12-07","translate":{"zh-TW":"SOSOSOSO~","en-US":"SOSOSOSO~","ja-JP":"そそそそ~"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"可愛聲音","mark":{"title":"","time":"","url":""}},{"name":"ㄟ修","path":"ㄟ修.mp3","date":"2023-12-07","translate":{"zh-TW":"嘿修","en-US":"HEYSHOW~","ja-JP":"へしょ~"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"可愛聲音","mark":{"title":"","time":"","url":""}},{"name":"耶 嘿咻","path":"耶 嘿咻.mp3","date":"2023-12-07","translate":{"zh-TW":"耶 嘿咻~","en-US":"YA HEYSHOW~","ja-JP":"いえ　へえしょ~"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"可愛聲音","mark":{"title":"","time":"","url":""}},{"name":"耶修","path":"耶修.mp3","date":"2023-12-07","translate":{"zh-TW":"耶修","en-US":"A SHOW~","ja-JP":"いえーしょ"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"可愛聲音","mark":{"title":"","time":"","url":""}},{"name":"sono","path":"sono.mp3","date":"2023-12-07","translate":{"zh-TW":"這個","en-US":"This~","ja-JP":"その~"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"可愛聲音","mark":{"title":"","time":"","url":""}},{"name":"ureshi","path":"ureshi.mp3","date":"2023-12-07","translate":{"zh-TW":"好開心","en-US":"I am happy~","ja-JP":"嬉しい～"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"可愛聲音","mark":{"title":"","time":"","url":""}},{"name":"今wa","path":"今wa.mp3","date":"2023-12-07","translate":{"zh-TW":"今天呀~","en-US":"Today~","ja-JP":"今日は～"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"可愛聲音","mark":{"title":"","time":"","url":""}},{"name":"uisho","path":"uisho.mp3","date":"2023-12-07","translate":{"zh-TW":"嗚嘿咻~","en-US":"UISHO~","ja-JP":"うーしょ"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"可愛聲音","mark":{"title":"","time":"","url":""}}]')
            },
            211: function(e) {
                "use strict";
                e.exports = JSON.parse('[{"name":"smui_ne","path":"smuine.mp3","date":"2023-12-07","translate":{"zh-TW":"有點冷捏~","en-US":"It\'s cold NE~","ja-JP":"寒ね~"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"短句","mark":{"title":"","time":"","url":""}},{"name":"anonani","path":"anonani.mp3","date":"2023-12-07","translate":{"zh-TW":"那個什麼~","en-US":"What is this~","ja-JP":"あの なに～"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"短句","mark":{"title":"","time":"","url":""}},{"name":"senbu_sa","path":"全部saa.mp3","date":"2023-12-07","translate":{"zh-TW":"全部sa~","en-US":"ALL~","ja-JP":"全部さ～"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"短句","mark":{"title":"","time":"","url":""}},{"name":"大丈夫 kana","path":"大丈夫kana.mp3","date":"2023-12-07","translate":{"zh-TW":"大丈夫 kana~","en-US":"It\'s OK ~","ja-JP":"大丈夫がな～"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"短句","mark":{"title":"","time":"","url":""}},{"name":"可愛對吧 恩亨","path":"可愛對吧 恩亨.mp3","date":"2023-12-07","translate":{"zh-TW":"可愛對吧 恩亨~","en-US":"It\'s cute right~?","ja-JP":"かわいいね　ふふ～"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"短句","mark":{"title":"","time":"","url":""}},{"name":"結構ne","path":"結構ne.mp3","date":"2023-12-07","translate":{"zh-TW":"結構ne~","en-US":"So ne~","ja-JP":"結構ね～"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"短句","mark":{"title":"","time":"","url":""}},{"name":"heart i bai","path":"heart i bai.mp3","date":"2023-12-07","translate":{"zh-TW":"好多愛心~","en-US":"So many heart~","ja-JP":"ハード 多い～"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"短句","mark":{"title":"","time":"","url":""}},{"name":"nanikora","path":"nanikora.mp3","date":"2023-12-07","translate":{"zh-TW":"那是什麼~","en-US":"What is this~","ja-JP":"なにこれ～"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"短句","mark":{"title":"","time":"","url":""}},{"name":"oishi yone","path":"oishi yone.mp3","date":"2023-12-07","translate":{"zh-TW":"好吃吧~","en-US":"Yummy~","ja-JP":"美味しいよね～"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"短句","mark":{"title":"","time":"","url":""}},{"name":"tabederu yo","path":"tabederu yo.mp3","date":"2023-12-07","translate":{"zh-TW":"都吃得下呦~","en-US":"All I can eat~","ja-JP":"食べてるよ～"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"短句","mark":{"title":"","time":"","url":""}},{"name":"mayuru yogada","path":"mayuru yogada.mp3","date":"2023-12-07","translate":{"zh-TW":"まゆる 太好了~","en-US":"MAYURU is great~","ja-JP":"まゆる 良かった"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"短句","mark":{"title":"","time":"","url":""}},{"name":"new mayuru","path":"new mayuru.mp3","date":"2023-12-07","translate":{"zh-TW":"NEW まゆる","en-US":"NEW MAYURU~","ja-JP":"NEW まゆる"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"短句","mark":{"title":"","time":"","url":""}},{"name":"oshiedene22","path":"oshiedene.mp3","date":"2023-12-07","translate":{"zh-TW":"告訴我吧ね~","en-US":"Tell me NE~","ja-JP":"教えてね~"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"短句","mark":{"title":"","time":"","url":""}},{"name":"sukoine e~","path":"sukoine e~.mp3","date":"2023-12-07","translate":{"zh-TW":"很厲害捏~ 欸?!","en-US":"It\'s great ~","ja-JP":"すごいね　え～"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"短句","mark":{"title":"","time":"","url":""}},{"name":"金曜日","path":"金曜日.mp3","date":"2023-12-07","translate":{"zh-TW":"星期五","en-US":"Friday","ja-JP":"金曜日"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"短句","mark":{"title":"","time":"","url":""}},{"name":"頑張de","path":"頑張de.mp3","date":"2023-12-07","translate":{"zh-TW":"加油~!","en-US":"Fighting~","ja-JP":"頑張って～"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"短句","mark":{"title":"","time":"","url":""}},{"name":"tanoshigadayode","path":"tanoshigadayode.mp3","date":"2023-12-07","translate":{"zh-TW":"很開心 DAYODE~","en-US":"I am happy DAYODE~","ja-JP":"楽しいだよね～"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"短句","mark":{"title":"","time":"","url":""}},{"name":"yogadayo","path":"yogadayo.mp3","date":"2023-12-07","translate":{"zh-TW":"太好了 DAYO~","en-US":"Wonderful~","ja-JP":"良かったよ～"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"短句","mark":{"title":"","time":"","url":""}},{"name":"今天一天辛苦了","path":"今天一天辛苦了.mp3","date":"2023-12-07","translate":{"zh-TW":"今天一天辛苦了","en-US":"Thank you for your hard work today~","ja-JP":"今日もお疲れ様です～"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"短句","mark":{"title":"","time":"","url":""}},{"name":"tanz no","path":"tanz no.mp3","date":"2023-12-07","translate":{"zh-TW":"Tanz醬的~","en-US":"TanZ\'s~","ja-JP":"TanZちゃんの～"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"短句","mark":{"title":"","time":"","url":""}}]')
            },
            900: function(e) {
                "use strict";
                e.exports = JSON.parse('[{"name":"nicecontinuscoinchalin2","path":"nicecontinuscoinchalin.mp3","date":"2023-12-07","translate":{"zh-TW":"NICE 銀幣 洽鈴","en-US":"Nice continus coin CHA-LIN","ja-JP":"ナイス・コンティナズ・コイン・チャー・リン"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"nice","mark":{"title":"","time":"","url":""}},{"name":"nice item","path":"nice item.mp3","date":"2023-12-07","translate":{"zh-TW":"Nice item","en-US":"Nice item!","ja-JP":"ナイス・アイテム "},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"nice","mark":{"title":"","time":"","url":""}},{"name":"nice初comment","path":"nice初comment.mp3","date":"2023-12-07","translate":{"zh-TW":"Nice初comment","en-US":"Nice first comment","ja-JP":"ナイス・初・コメント "},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"nice","mark":{"title":"","time":"","url":""}}]')
            },
            91: function(e) {
                "use strict";
                e.exports = JSON.parse('[{"name":"ne(長)","path":"ne(長).mp3","date":"2023-12-07","translate":{"zh-TW":"ね(長)","en-US":"NE(long)","ja-JP":"ね(長)"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"ne","mark":{"title":"","time":"","url":""}},{"name":"ne(平淡)","path":"ne(平淡).mp3","date":"2023-12-07","translate":{"zh-TW":"ね(平淡)","en-US":"NE(long)","ja-JP":"ね(平)"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"ne","mark":{"title":"","time":"","url":""}},{"name":"ne mosa","path":"ne mosa.mp3","date":"2023-12-07","translate":{"zh-TW":"ね もさ","en-US":"NE MOSA","ja-JP":"ね もさ"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"ne","mark":{"title":"","time":"","url":""}},{"name":"ne mochododa","path":"ne mojododa.mp3","date":"2023-12-07","translate":{"zh-TW":"ね 等一下啦","en-US":"NE wait me~","ja-JP":"ね もちょっと だ～"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"ne","mark":{"title":"","time":"","url":""}},{"name":"hayai ne32","path":"hayai ne.mp3","date":"2023-12-07","translate":{"zh-TW":"很快ね~","en-US":"It is fast NE~","ja-JP":"早いね~"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"ne","mark":{"title":"","time":"","url":""}},{"name":"iine32","path":"iine.mp3","date":"2023-12-07","translate":{"zh-TW":"很好ね~","en-US":"It is good NE~","ja-JP":"いいね~"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"ne","mark":{"title":"","time":"","url":""}},{"name":"oshiedene","path":"oshiedene.mp3","date":"2023-12-07","translate":{"zh-TW":"告訴我吧ね~","en-US":"Tell me NE~","ja-JP":"教えてね~"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"ne","mark":{"title":"","time":"","url":""}},{"name":"sukoine e~2","path":"sukoine e~.mp3","date":"2023-12-07","translate":{"zh-TW":"很厲害捏~ 欸?!","en-US":"Isn\'t it good ?","ja-JP":"すごいね　え～"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"ne","mark":{"title":"","time":"","url":""}},{"name":"今ne","path":"今ne.mp3","date":"2023-12-07","translate":{"zh-TW":"今天ね~","en-US":"Today NE~","ja-JP":"今ね～"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"ne","mark":{"title":"","time":"","url":""}}]')
            },
            175: function(e) {
                "use strict";
                e.exports = JSON.parse('[{"name":"こんにちは 恩亨","path":"こんにちは 恩亨.mp3","date":"2023-12-07","translate":{"zh-TW":"晚安 哼哼~","en-US":"Good evening FUFU","ja-JP":"こんにちは　ふふ"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"fufu","mark":{"title":"","time":"","url":""}},{"name":"不安定嚕呼呼","path":"不安定嚕呼呼.mp3","date":"2023-12-07","translate":{"zh-TW":"不安定嚕哼哼","en-US":"FUANTING RUFUFU","ja-JP":"不安定るふふ"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"fufu","mark":{"title":"","time":"","url":""}},{"name":"乎哼哼","path":"乎哼哼.mp3","date":"2023-12-07","translate":{"zh-TW":"呼哼哼","en-US":"HUFUFU","ja-JP":"ふふふ～"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"fufu","mark":{"title":"","time":"","url":""}},{"name":"恩哼哼","path":"恩哼哼.mp3","date":"2023-12-07","translate":{"zh-TW":"嗯哼哼","en-US":"NFUFU","ja-JP":"うふふ～"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"fufu","mark":{"title":"","time":"","url":""}},{"name":"謝謝 哼哼","path":"謝謝 哼哼.mp3","date":"2023-12-07","translate":{"zh-TW":"謝謝 哼哼","en-US":"Thank FUFU","ja-JP":"ありがとう　ふふ"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"fufu","mark":{"title":"","time":"","url":""}},{"name":"love u 哼哼","path":"love u 哼哼.mp3","date":"2023-12-07","translate":{"zh-TW":"Love you 哼哼","en-US":"Love you FUFU","ja-JP":"Love you　ふふ"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"fufu","mark":{"title":"","time":"","url":""}},{"name":"yoroshikune 哼哼","path":"yoroshikune 哼哼.mp3","date":"2023-12-07","translate":{"zh-TW":"請多指教捏 哼哼","en-US":"Nice to meet you FUFU","ja-JP":"よろしくね　ふふ"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"fufu","mark":{"title":"","time":"","url":""}},{"name":"可愛對吧 恩亨312","path":"可愛對吧 恩亨.mp3","date":"2023-12-07","translate":{"zh-TW":"可愛對吧 恩亨~","en-US":"Isn\'t it cute? FUFU~","ja-JP":"かわいいね　ふふ～"},"usePicture":{"zh-TW":"myr400.jpg","en-US":"myr400.jpg","ja-JP":"myr400.jpg"},"category":"fufu","mark":{"title":"","time":"","url":""}}]')
            },
            127: function(e) {
                "use strict";
                e.exports = JSON.parse('[{"name":"可愛聲音","translate":{"zh-TW":"可愛聲音","en-US":"Cute voice","ja-JP":"かわいい声"}},{"name":"fufu","translate":{"zh-TW":"哼哼","en-US":"HMM~","ja-JP":"ふふ"}},{"name":"ne","translate":{"zh-TW":"NE 系列","en-US":"NE series","ja-JP":"ね"}},{"name":"nice","translate":{"zh-TW":"NICE 系列","en-US":"Nice series","ja-JP":"ナイス"}},{"name":"短句","translate":{"zh-TW":"短句","en-US":"Short","ja-JP":"短い"}},{"name":"TC","translate":{"zh-TW":"Twicasting","en-US":"Twicasting","ja-JP":"Twicasting"}}]')
            },
            206: function(e) {
                "use strict";
                e.exports = JSON.parse('{"zh-TW":{"info":{"toGithub":"前往 KM 的 Github","notOfficial":"本網頁為觀眾們自主開發，與 まゆる 本人尚未官方合作。"},"action":{"randomplay":"隨機選一個","stopvoice":"停止播放","overlap":"開啟聲音重疊","overlapTip":"目前聲音會重疊喔~","autoRandom":"自動隨機播放","autoRandomTip":"目前會隨機播放喔~","loop":"開啟循環","loopTip_1":"正在單曲循環~","loopTip_2":"正在分類循環~","loopTip_3":"正在全部循環~","showInfo":"切換分類模式","noplay":"目前沒有在播放聲音~"},"readme":{"randomPlay":"使用此按鈕讓まゆる隨機發出一個聲音","stop":"使用此按鈕讓まゆる安靜","overlapOn":"現在可以同時播放許多聲音~","overlapOff":"使用此按鈕讓多個聲音重疊","autoRandomOn":"現在播放結束會隨機播放下一個按鈕~","autoRandomOff":"使用此按鈕可以開啟隨機播放","loop_0":"使用此按鈕可以切換連續播放模式","loop_1":"現在是單曲循環模式","loop_2":"現在是分類循環模式","loop_3":"現在是全部循環模式","showInfoOn":"使用此按鈕可以切換成分類排序","showInfoOff":"使用此按鈕可以查看聲音的出處"},"vtbbtn":"VTs","voiceTotalTip":"目前蒐集的まゆる聲音數量","playTimes":"你總共播放了","playTimes2":"次~","lang":"日本語に切り替える","unknown":"我不知道聲音來源QQ"},"en-US":{"info":{"toGithub":"Go to KM\'s Github","notOfficial":"This webpage is independently developed by the audience and is not officially affiliated with Mayuru."},"action":{"randomplay":"Randomly select one","stopvoice":"Stop playing","overlap":"Enable voice overlap","overlapTip":"Voices are currently overlapping~","autoRandom":"Auto random playback","autoRandomTip":"Currently playing randomly~","loop":"Enable loop","loopTip_1":"Currently in single track loop~","loopTip_2":"Currently in category loop~","loopTip_3":"Currently in all loop~","showInfo":"Toggle category mode","noplay":"No sound is currently playing~"},"readme":{"randomPlay":"Use this button to have Mayuru randomly emit a sound","stop":"Use this button to make Mayuru quiet","overlapOn":"Now you can play many sounds simultaneously~","overlapOff":"Use this button to make multiple sounds overlap","autoRandomOn":"Now, after playing ends, the next button will be played randomly~","autoRandomOff":"Use this button to enable random playback","loop_0":"Use this button to switch continuous playback mode","loop_1":"Currently in single track loop mode","loop_2":"Currently in category loop mode","loop_3":"Currently in all loop mode","showInfoOn":"Use this button to switch to category sorting","showInfoOff":"Use this button to view the source of the sound"},"vtbbtn":"VTs","voiceTotalTip":"Current number of collected Mayuru\'s sounds","playTimes":"You have played a total of","playTimes2":"times~","lang":"切換至繁體中文","unknown":"I don\'t know the source of the sound QQ"},"ja-JP":{"info":{"toGithub":"KMのGithubへ移動","notOfficial":"このウェブページは視聴者によって独自に開発され、まゆる本人とはまだ公式に協力していません。"},"action":{"randomplay":"ランダムに選ぶ","stopvoice":"再生を停止","overlap":"音声の重複を有効にする","overlapTip":"現在、音声が重複しています～","autoRandom":"自動ランダム再生","autoRandomTip":"現在、ランダムに再生されます～","loop":"ループを有効にする","loopTip_1":"現在、単曲ループ中～","loopTip_2":"現在、カテゴリーループ中～","loopTip_3":"現在、すべてのループ中～","showInfo":"カテゴリーモードを切り替える","noplay":"現在、音声は再生されていません～"},"readme":{"randomPlay":"このボタンを使用して、まゆるにランダムに音声を発するようにします","stop":"このボタンを使用して、まゆるを静かにします","overlapOn":"今、多くの音声を同時に再生できます～","overlapOff":"このボタンを使用して、複数の音声が重なります","autoRandomOn":"現在、再生が終了すると次のボタンがランダムに再生されます～","autoRandomOff":"このボタンを使用して、ランダム再生を有効にします","loop_0":"このボタンを使用して、連続再生モードを切り替えます","loop_1":"現在、単曲ループモードです","loop_2":"現在、カテゴリーループモードです","loop_3":"現在、すべてのループモードです","showInfoOn":"このボタンを使用して、カテゴリーのソートに切り替えます","showInfoOff":"このボタンを使用して、音声の出所を表示します"},"vtbbtn":"VTs","voiceTotalTip":"現在のまゆるの音声の収集数","playTimes":"合計で再生回数 =","playTimes2":"","lang":"Switch to English","unknown":"音声の出所がわかりません QQ"}}')
            }
        },
        t = {};

    function a(o) {
        var n = t[o];
        if (void 0 !== n) return n.exports;
        var r = t[o] = {
            exports: {}
        };
        return e[o](r, r.exports, a), r.exports
    }
    a.m = e,
        function() {
            var e = [];
            a.O = function(t, o, n, r) {
                if (!o) {
                    var l = 1 / 0;
                    for (c = 0; c < e.length; c++) {
                        o = e[c][0], n = e[c][1], r = e[c][2];
                        for (var i = !0, s = 0; s < o.length; s++)(!1 & r || l >= r) && Object.keys(a.O).every((function(e) {
                            return a.O[e](o[s])
                        })) ? o.splice(s--, 1) : (i = !1, r < l && (l = r));
                        if (i) {
                            e.splice(c--, 1);
                            var m = n();
                            void 0 !== m && (t = m)
                        }
                    }
                    return t
                }
                r = r || 0;
                for (var c = e.length; c > 0 && e[c - 1][2] > r; c--) e[c] = e[c - 1];
                e[c] = [o, n, r]
            }
        }(),
        function() {
            a.d = function(e, t) {
                for (var o in t) a.o(t, o) && !a.o(e, o) && Object.defineProperty(e, o, {
                    enumerable: !0,
                    get: t[o]
                })
            }
        }(),
        function() {
            a.g = function() {
                if ("object" === typeof globalThis) return globalThis;
                try {
                    return this || new Function("return this")()
                } catch (e) {
                    if ("object" === typeof window) return window
                }
            }()
        }(),
        function() {
            a.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
        }(),
        function() {
            var e = {
                143: 0
            };
            a.O.j = function(t) {
                return 0 === e[t]
            };
            var t = function(t, o) {
                    var n, r, l = o[0],
                        i = o[1],
                        s = o[2],
                        m = 0;
                    if (l.some((function(t) {
                            return 0 !== e[t]
                        }))) {
                        for (n in i) a.o(i, n) && (a.m[n] = i[n]);
                        if (s) var c = s(a)
                    }
                    for (t && t(o); m < l.length; m++) r = l[m], a.o(e, r) && e[r] && e[r][0](), e[r] = 0;
                    return a.O(c)
                },
                o = self["webpackChunkmayuru_button"] = self["webpackChunkmayuru_button"] || [];
            o.forEach(t.bind(null, 0)), o.push = t.bind(null, o.push.bind(o))
        }();
    var o = a.O(void 0, [114], (function() {
        return a(721)
    }));
    o = a.O(o)
})();