"use strict";
var precacheConfig = [["/index.html", "6e90474c27eda1fa7858de5c7aeaa375"], ["/static/css/main.564b37dc.css", "b862e158b6ff50ffa36db621e7b236fb"], ["/static/js/main.f8f50173.js", "0ff3d66869f3cea0565b5629efa17507"], ["/static/media/CenturyGothic-Bold.dd41cae1.woff", "dd41cae19454f1cbfe55d99d07082a20"], ["/static/media/MADEEvolveSansEVO-Bold.d41d8cd9.woff", "d41d8cd98f00b204e9800998ecf8427e"], ["/static/media/MADEEvolveSansEVO-Bold.d70b2790.woff2", "d70b27901f57de3e71f1289715050a89"], ["/static/media/MyriadPro-Regular.891a5477.woff2", "891a54771d79c00d064882f6e64dfd4d"], ["/static/media/MyriadPro-Regular.d41d8cd9.woff", "d41d8cd98f00b204e9800998ecf8427e"], ["/static/media/Raleway-Black.f449ab73.woff", "f449ab73d7a52a1820fafccb8bd773bf"], ["/static/media/Raleway-Black.f6df5724.woff2", "f6df572468c5ab2fdc0884822a56a88d"], ["/static/media/Raleway-Bold.8f86399c.woff", "8f86399ca6e05a99f70cc97739e93b3b"], ["/static/media/Raleway-Bold.e1069da9.woff2", "e1069da9202f3c0df6d14e71737d13e3"], ["/static/media/Raleway-ExtraBold.182ea285.woff2", "182ea28501066db9fed546b05719759a"], ["/static/media/Raleway-ExtraBold.ff74d6d3.woff", "ff74d6d34ec14bac72d1c703afd25018"], ["/static/media/bogdan.b1a9bbe8.jpg", "b1a9bbe83bae5312ebbfb37d2ee2fd11"], ["/static/media/cater.c3701e4a.gif", "c3701e4a7e55434d0e951e26db703994"], ["/static/media/circle.ee6309d8.png", "ee6309d8ff14e8dc140de4f800428241"], ["/static/media/client1.430fbe30.jpg", "430fbe3084f232db60469b66338c8bf2"], ["/static/media/demsol.be0636de.gif", "be0636de799506be2b24d62ac708c6f9"], ["/static/media/gjovtanecka.6c4584e5.gif", "6c4584e58f4adb33d0566240a2b16362"], ["/static/media/icomoon.360f51eb.eot", "360f51eb5ef3621b68ff5ff7c8e4eb7c"], ["/static/media/icomoon.7ce2d0ec.woff", "7ce2d0ec431f48ac338aaa78f5d2b29d"], ["/static/media/icomoon.bb09c56c.ttf", "bb09c56c287a1c78196406dc489d437c"], ["/static/media/icomoon.e23f2c69.svg", "e23f2c69111c5cf78abe7ddba61e8267"], ["/static/media/koma.9138132b.gif", "9138132b739cad07a750216948431031"], ["/static/media/kucherstudio.1a79284d.gif", "1a79284d241abf959c2578f689291d48"], ["/static/media/logo-head-white.6bf8ca71.svg", "6bf8ca715dd7c258e40d049a63eb50ca"], ["/static/media/logo-head.8bd1df20.svg", "8bd1df2060f67fc9b262961565aa1cbf"], ["/static/media/misha.0ea0d248.jpg", "0ea0d24856a40ab269f414a1e797385b"], ["/static/media/nazar.a76dc050.jpg", "a76dc0506a21873c9d160375ee5ebdc0"], ["/static/media/page-circle.f090f01c.png", "f090f01c7715551c56b99b19d9e03fb8"], ["/static/media/ruslan.c6d178f9.jpg", "c6d178f9bf3e867e072e3a2038d8fea8"], ["/static/media/sofia.e0704d9c.jpg", "e0704d9cced5da9a60f1d7aa3c77d2dc"], ["/static/media/taras.7e503d6e.jpg", "7e503d6eee22536d1deb99c37ae85f46"], ["/static/media/taras1.baf87fe7.jpg", "baf87fe74aad54b6fa52077457ba8951"], ["/static/media/yura.000bd3d8.jpg", "000bd3d8f953d76c618bb1a9adeb16f8"], ["/styles.css", "875f3efdd9c0bf5e9a500d8bf40d2cfc"]],
    cacheName = "sw-precache-v3-sw-precache-webpack-plugin-" + (self.registration ? self.registration.scope : ""),
    ignoreUrlParametersMatching = [/^utm_/], addDirectoryIndex = function (e, a) {
        var t = new URL(e);
        return "/" === t.pathname.slice(-1) && (t.pathname += a), t.toString()
    }, cleanResponse = function (a) {
        return a.redirected ? ("body" in a ? Promise.resolve(a.body) : a.blob()).then(function (e) {
            return new Response(e, {headers: a.headers, status: a.status, statusText: a.statusText})
        }) : Promise.resolve(a)
    }, createCacheKey = function (e, a, t, c) {
        var n = new URL(e);
        return c && n.pathname.match(c) || (n.search += (n.search ? "&" : "") + encodeURIComponent(a) + "=" + encodeURIComponent(t)), n.toString()
    }, isPathWhitelisted = function (e, a) {
        if (0 === e.length) return !0;
        var t = new URL(a).pathname;
        return e.some(function (e) {
            return t.match(e)
        })
    }, stripIgnoredUrlParameters = function (e, t) {
        var a = new URL(e);
        return a.hash = "", a.search = a.search.slice(1).split("&").map(function (e) {
            return e.split("=")
        }).filter(function (a) {
            return t.every(function (e) {
                return !e.test(a[0])
            })
        }).map(function (e) {
            return e.join("=")
        }).join("&"), a.toString()
    }, hashParamName = "_sw-precache", urlsToCacheKeys = new Map(precacheConfig.map(function (e) {
        var a = e[0], t = e[1], c = new URL(a, self.location), n = createCacheKey(c, hashParamName, t, /\.\w{8}\./);
        return [c.toString(), n]
    }));

function setOfCachedUrls(e) {
    return e.keys().then(function (e) {
        return e.map(function (e) {
            return e.url
        })
    }).then(function (e) {
        return new Set(e)
    })
}

self.addEventListener("install", function (e) {
    e.waitUntil(caches.open(cacheName).then(function (c) {
        return setOfCachedUrls(c).then(function (t) {
            return Promise.all(Array.from(urlsToCacheKeys.values()).map(function (a) {
                if (!t.has(a)) {
                    var e = new Request(a, {credentials: "same-origin"});
                    return fetch(e).then(function (e) {
                        if (!e.ok) throw new Error("Request for " + a + " returned a response with status " + e.status);
                        return cleanResponse(e).then(function (e) {
                            return c.put(a, e)
                        })
                    })
                }
            }))
        })
    }).then(function () {
        return self.skipWaiting()
    }))
}), self.addEventListener("activate", function (e) {
    var t = new Set(urlsToCacheKeys.values());
    e.waitUntil(caches.open(cacheName).then(function (a) {
        return a.keys().then(function (e) {
            return Promise.all(e.map(function (e) {
                if (!t.has(e.url)) return a.delete(e)
            }))
        })
    }).then(function () {
        return self.clients.claim()
    }))
}), self.addEventListener("fetch", function (a) {
    if ("GET" === a.request.method) {
        var e, t = stripIgnoredUrlParameters(a.request.url, ignoreUrlParametersMatching), c = "index.html";
        (e = urlsToCacheKeys.has(t)) || (t = addDirectoryIndex(t, c), e = urlsToCacheKeys.has(t));
        var n = "/index.html";
        !e && "navigate" === a.request.mode && isPathWhitelisted(["^(?!\\/__).*"], a.request.url) && (t = new URL(n, self.location).toString(), e = urlsToCacheKeys.has(t)), e && a.respondWith(caches.open(cacheName).then(function (e) {
            return e.match(urlsToCacheKeys.get(t)).then(function (e) {
                if (e) return e;
                throw Error("The cached response that was expected is missing.")
            })
        }).catch(function (e) {
            return console.warn('Couldn\'t serve response for "%s" from cache: %O', a.request.url, e), fetch(a.request)
        }))
    }
});