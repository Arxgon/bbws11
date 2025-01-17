function scrollAndFocus(t, e, i, o, n) {
    var s;
    (s = jQuery)("body").addClass("scrolling"),
        s(t).closest("#mainNav").length &&
            s(t).parents(".collapse.show").collapse("hide"),
        s("html, body").animate(
            { scrollTop: s(e).offset().top - (o || 0) },
            300,
            function () {
                s("body").removeClass("scrolling"),
                    setTimeout(function () {
                        s(i).focus();
                    }, 500),
                    n &&
                        s("html, body").animate({
                            scrollTop: s(e).offset().top - (o || 0),
                        });
            }
        );
}
function aspectRatioSVG() {
    $(window).width() < 1950
        ? $(".shape-divider svg[preserveAspectRatio]").each(function () {
              $(this).parent().hasClass("shape-divider-horizontal-animation")
                  ? $(this).attr("preserveAspectRatio", "none")
                  : $(this).attr("preserveAspectRatio", "xMinYMin");
          })
        : $(".shape-divider svg[preserveAspectRatio]").each(function () {
              $(this).attr("preserveAspectRatio", "none");
          });
}
if (
    ((window.theme = {}),
    (window.theme.fn = {
        getOptions: function (t) {
            if ("object" == typeof t) return t;
            if ("string" != typeof t) return {};
            try {
                return JSON.parse(t.replace(/'/g, '"').replace(";", ""));
            } catch (t) {
                return {};
            }
        },
        execPluginFunction: function (t, e) {
            for (
                var i = Array.prototype.slice.call(arguments, 2),
                    o = t.split("."),
                    n = o.pop(),
                    s = 0;
                s < o.length;
                s++
            )
                e = e[o[s]];
            return e[n].apply(e, i);
        },
        intObs: function (t, e, i, o) {
            var n = document.querySelectorAll(t),
                s = { rootMargin: "0px 0px 200px 0px" };
            Object.keys(i).length && (s = $.extend(s, i));
            var a = new IntersectionObserver(function (t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    if (n.intersectionRatio > 0) {
                        if ("string" == typeof e) Function("return " + e)();
                        else e.call($(n.target));
                        o || a.unobserve(n.target);
                    }
                }
            }, s);
            $(n).each(function () {
                a.observe($(this)[0]);
            });
        },
        intObsInit: function (t, e) {
            var i = document.querySelectorAll(t),
                o = new IntersectionObserver(
                    function (t) {
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i];
                            if (n.intersectionRatio > 0) {
                                var s,
                                    a = $(n.target),
                                    r = theme.fn.getOptions(
                                        a.data("plugin-options")
                                    );
                                r && (s = r),
                                    theme.fn.execPluginFunction(e, a, s),
                                    o.unobserve(n.target);
                            }
                        }
                    },
                    { rootMargin: "200px" }
                );
            $(i).each(function () {
                o.observe($(this)[0]);
            });
        },
        dynIntObsInit: function (t, e, i) {
            var o = document.querySelectorAll(t);
            $(o).each(function () {
                var t,
                    o = $(this),
                    n = theme.fn.getOptions(o.data("plugin-options"));
                n && (t = n);
                var s = theme.fn.mergeOptions(i, t),
                    a = {
                        rootMargin: theme.fn.getRootMargin(e, s),
                        threshold: 0,
                    };
                if (s.forceInit) theme.fn.execPluginFunction(e, o, s);
                else {
                    var r = new IntersectionObserver(function (t) {
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i];
                            n.intersectionRatio > 0 &&
                                (theme.fn.execPluginFunction(e, o, s),
                                r.unobserve(n.target));
                        }
                    }, a);
                    r.observe(o[0]);
                }
            });
        },
        getRootMargin: function (t, e) {
            switch (t) {
                case "themePluginCounter":
                case "themePluginAnimate":
                case "themePluginIcon":
                case "themePluginRandomImages":
                    return e.accY
                        ? "0px 0px " + e.accY + "px 0px"
                        : "0px 0px 200px 0px";
                default:
                    return "0px 0px 200px 0px";
            }
        },
        mergeOptions: function (t, e) {
            var i = {};
            for (var o in t) i[o] = t[o];
            for (var o in e) i[o] = e[o];
            return i;
        },
        execOnceTroughEvent: function (t, e, i) {
            var o = this.formatDataName(e);
            return (
                $(t).on(e, function () {
                    $(this).data(o) ||
                        (i.call($(this)), $(this).data(o, !0), $(this).off(e));
                }),
                this
            );
        },
        execOnceTroughWindowEvent: function (t, e, i) {
            var o = this.formatDataName(e);
            return (
                $(t).on(e, function () {
                    $(this).data(o) ||
                        (i(), $(this).data(o, !0), $(this).off(e));
                }),
                this
            );
        },
        formatDataName: function (t) {
            return (t = t.replace(".", ""));
        },
        isElementInView: function (t) {
            return t[0].getBoundingClientRect().top <= window.innerHeight / 3;
        },
    }),
    (function () {
        "use strict";
        if ("object" == typeof window)
            if (
                "IntersectionObserver" in window &&
                "IntersectionObserverEntry" in window &&
                "intersectionRatio" in
                    window.IntersectionObserverEntry.prototype
            )
                "isIntersecting" in
                    window.IntersectionObserverEntry.prototype ||
                    Object.defineProperty(
                        window.IntersectionObserverEntry.prototype,
                        "isIntersecting",
                        {
                            get: function () {
                                return this.intersectionRatio > 0;
                            },
                        }
                    );
            else {
                var t = (function (t) {
                        for (var e = window.document, i = n(e); i; )
                            i = n((e = i.ownerDocument));
                        return e;
                    })(),
                    e = [],
                    i = null,
                    o = null;
                (a.prototype.THROTTLE_TIMEOUT = 100),
                    (a.prototype.POLL_INTERVAL = null),
                    (a.prototype.USE_MUTATION_OBSERVER = !0),
                    (a._setupCrossOriginUpdater = function () {
                        return (
                            i ||
                                (i = function (t, i) {
                                    (o =
                                        t && i
                                            ? p(t, i)
                                            : {
                                                  top: 0,
                                                  bottom: 0,
                                                  left: 0,
                                                  right: 0,
                                                  width: 0,
                                                  height: 0,
                                              }),
                                        e.forEach(function (t) {
                                            t._checkForIntersections();
                                        });
                                }),
                            i
                        );
                    }),
                    (a._resetCrossOriginUpdater = function () {
                        (i = null), (o = null);
                    }),
                    (a.prototype.observe = function (t) {
                        if (
                            !this._observationTargets.some(function (e) {
                                return e.element == t;
                            })
                        ) {
                            if (!t || 1 != t.nodeType)
                                throw new Error("target must be an Element");
                            this._registerInstance(),
                                this._observationTargets.push({
                                    element: t,
                                    entry: null,
                                }),
                                this._monitorIntersections(t.ownerDocument),
                                this._checkForIntersections();
                        }
                    }),
                    (a.prototype.unobserve = function (t) {
                        (this._observationTargets =
                            this._observationTargets.filter(function (e) {
                                return e.element != t;
                            })),
                            this._unmonitorIntersections(t.ownerDocument),
                            0 == this._observationTargets.length &&
                                this._unregisterInstance();
                    }),
                    (a.prototype.disconnect = function () {
                        (this._observationTargets = []),
                            this._unmonitorAllIntersections(),
                            this._unregisterInstance();
                    }),
                    (a.prototype.takeRecords = function () {
                        var t = this._queuedEntries.slice();
                        return (this._queuedEntries = []), t;
                    }),
                    (a.prototype._initThresholds = function (t) {
                        var e = t || [0];
                        return (
                            Array.isArray(e) || (e = [e]),
                            e.sort().filter(function (t, e, i) {
                                if (
                                    "number" != typeof t ||
                                    isNaN(t) ||
                                    t < 0 ||
                                    t > 1
                                )
                                    throw new Error(
                                        "threshold must be a number between 0 and 1 inclusively"
                                    );
                                return t !== i[e - 1];
                            })
                        );
                    }),
                    (a.prototype._parseRootMargin = function (t) {
                        var e = (t || "0px").split(/\s+/).map(function (t) {
                            var e = /^(-?\d*\.?\d+)(px|%)$/.exec(t);
                            if (!e)
                                throw new Error(
                                    "rootMargin must be specified in pixels or percent"
                                );
                            return { value: parseFloat(e[1]), unit: e[2] };
                        });
                        return (
                            (e[1] = e[1] || e[0]),
                            (e[2] = e[2] || e[0]),
                            (e[3] = e[3] || e[1]),
                            e
                        );
                    }),
                    (a.prototype._monitorIntersections = function (e) {
                        var i = e.defaultView;
                        if (i && -1 == this._monitoringDocuments.indexOf(e)) {
                            var o = this._checkForIntersections,
                                s = null,
                                a = null;
                            this.POLL_INTERVAL
                                ? (s = i.setInterval(o, this.POLL_INTERVAL))
                                : (r(i, "resize", o, !0),
                                  r(e, "scroll", o, !0),
                                  this.USE_MUTATION_OBSERVER &&
                                      "MutationObserver" in i &&
                                      (a = new i.MutationObserver(o)).observe(
                                          e,
                                          {
                                              attributes: !0,
                                              childList: !0,
                                              characterData: !0,
                                              subtree: !0,
                                          }
                                      )),
                                this._monitoringDocuments.push(e),
                                this._monitoringUnsubscribes.push(function () {
                                    var t = e.defaultView;
                                    t &&
                                        (s && t.clearInterval(s),
                                        l(t, "resize", o, !0)),
                                        l(e, "scroll", o, !0),
                                        a && a.disconnect();
                                });
                            var d =
                                (this.root &&
                                    (this.root.ownerDocument || this.root)) ||
                                t;
                            if (e != d) {
                                var c = n(e);
                                c &&
                                    this._monitorIntersections(c.ownerDocument);
                            }
                        }
                    }),
                    (a.prototype._unmonitorIntersections = function (e) {
                        var i = this._monitoringDocuments.indexOf(e);
                        if (-1 != i) {
                            var o =
                                (this.root &&
                                    (this.root.ownerDocument || this.root)) ||
                                t;
                            if (
                                !this._observationTargets.some(function (t) {
                                    var i = t.element.ownerDocument;
                                    if (i == e) return !0;
                                    for (; i && i != o; ) {
                                        var s = n(i);
                                        if ((i = s && s.ownerDocument) == e)
                                            return !0;
                                    }
                                    return !1;
                                })
                            ) {
                                var s = this._monitoringUnsubscribes[i];
                                if (
                                    (this._monitoringDocuments.splice(i, 1),
                                    this._monitoringUnsubscribes.splice(i, 1),
                                    s(),
                                    e != o)
                                ) {
                                    var a = n(e);
                                    a &&
                                        this._unmonitorIntersections(
                                            a.ownerDocument
                                        );
                                }
                            }
                        }
                    }),
                    (a.prototype._unmonitorAllIntersections = function () {
                        var t = this._monitoringUnsubscribes.slice(0);
                        (this._monitoringDocuments.length = 0),
                            (this._monitoringUnsubscribes.length = 0);
                        for (var e = 0; e < t.length; e++) t[e]();
                    }),
                    (a.prototype._checkForIntersections = function () {
                        if (this.root || !i || o) {
                            var t = this._rootIsInDom(),
                                e = t
                                    ? this._getRootRect()
                                    : {
                                          top: 0,
                                          bottom: 0,
                                          left: 0,
                                          right: 0,
                                          width: 0,
                                          height: 0,
                                      };
                            this._observationTargets.forEach(function (o) {
                                var n = o.element,
                                    a = d(n),
                                    r = this._rootContainsTarget(n),
                                    l = o.entry,
                                    c =
                                        t &&
                                        r &&
                                        this._computeTargetAndRootIntersection(
                                            n,
                                            a,
                                            e
                                        ),
                                    p = null;
                                this._rootContainsTarget(n)
                                    ? (i && !this.root) || (p = e)
                                    : (p = {
                                          top: 0,
                                          bottom: 0,
                                          left: 0,
                                          right: 0,
                                          width: 0,
                                          height: 0,
                                      });
                                var h = (o.entry = new s({
                                    time:
                                        window.performance &&
                                        performance.now &&
                                        performance.now(),
                                    target: n,
                                    boundingClientRect: a,
                                    rootBounds: p,
                                    intersectionRect: c,
                                }));
                                l
                                    ? t && r
                                        ? this._hasCrossedThreshold(l, h) &&
                                          this._queuedEntries.push(h)
                                        : l &&
                                          l.isIntersecting &&
                                          this._queuedEntries.push(h)
                                    : this._queuedEntries.push(h);
                            }, this),
                                this._queuedEntries.length &&
                                    this._callback(this.takeRecords(), this);
                        }
                    }),
                    (a.prototype._computeTargetAndRootIntersection = function (
                        e,
                        n,
                        s
                    ) {
                        if ("none" != window.getComputedStyle(e).display) {
                            for (
                                var a,
                                    r,
                                    l,
                                    c,
                                    h,
                                    f,
                                    g,
                                    v,
                                    m = n,
                                    w = u(e),
                                    y = !1;
                                !y && w;

                            ) {
                                var b = null,
                                    C =
                                        1 == w.nodeType
                                            ? window.getComputedStyle(w)
                                            : {};
                                if ("none" == C.display) return null;
                                if (w == this.root || 9 == w.nodeType)
                                    if (((y = !0), w == this.root || w == t))
                                        i && !this.root
                                            ? !o ||
                                              (0 == o.width && 0 == o.height)
                                                ? ((w = null),
                                                  (b = null),
                                                  (m = null))
                                                : (b = o)
                                            : (b = s);
                                    else {
                                        var k = u(w),
                                            x = k && d(k),
                                            _ =
                                                k &&
                                                this._computeTargetAndRootIntersection(
                                                    k,
                                                    x,
                                                    s
                                                );
                                        x && _
                                            ? ((w = k), (b = p(x, _)))
                                            : ((w = null), (m = null));
                                    }
                                else {
                                    var $ = w.ownerDocument;
                                    w != $.body &&
                                        w != $.documentElement &&
                                        "visible" != C.overflow &&
                                        (b = d(w));
                                }
                                if (
                                    (b &&
                                        ((a = b),
                                        (r = m),
                                        void 0,
                                        void 0,
                                        void 0,
                                        void 0,
                                        void 0,
                                        void 0,
                                        (l = Math.max(a.top, r.top)),
                                        (c = Math.min(a.bottom, r.bottom)),
                                        (h = Math.max(a.left, r.left)),
                                        (v = c - l),
                                        (m =
                                            ((g =
                                                (f = Math.min(
                                                    a.right,
                                                    r.right
                                                )) - h) >= 0 &&
                                                v >= 0 && {
                                                    top: l,
                                                    bottom: c,
                                                    left: h,
                                                    right: f,
                                                    width: g,
                                                    height: v,
                                                }) ||
                                            null)),
                                    !m)
                                )
                                    break;
                                w = w && u(w);
                            }
                            return m;
                        }
                    }),
                    (a.prototype._getRootRect = function () {
                        var e;
                        if (this.root && !f(this.root)) e = d(this.root);
                        else {
                            var i = f(this.root) ? this.root : t,
                                o = i.documentElement,
                                n = i.body;
                            e = {
                                top: 0,
                                left: 0,
                                right: o.clientWidth || n.clientWidth,
                                width: o.clientWidth || n.clientWidth,
                                bottom: o.clientHeight || n.clientHeight,
                                height: o.clientHeight || n.clientHeight,
                            };
                        }
                        return this._expandRectByRootMargin(e);
                    }),
                    (a.prototype._expandRectByRootMargin = function (t) {
                        var e = this._rootMarginValues.map(function (e, i) {
                                return "px" == e.unit
                                    ? e.value
                                    : (e.value * (i % 2 ? t.width : t.height)) /
                                          100;
                            }),
                            i = {
                                top: t.top - e[0],
                                right: t.right + e[1],
                                bottom: t.bottom + e[2],
                                left: t.left - e[3],
                            };
                        return (
                            (i.width = i.right - i.left),
                            (i.height = i.bottom - i.top),
                            i
                        );
                    }),
                    (a.prototype._hasCrossedThreshold = function (t, e) {
                        var i =
                                t && t.isIntersecting
                                    ? t.intersectionRatio || 0
                                    : -1,
                            o = e.isIntersecting
                                ? e.intersectionRatio || 0
                                : -1;
                        if (i !== o)
                            for (var n = 0; n < this.thresholds.length; n++) {
                                var s = this.thresholds[n];
                                if (s == i || s == o || s < i != s < o)
                                    return !0;
                            }
                    }),
                    (a.prototype._rootIsInDom = function () {
                        return !this.root || h(t, this.root);
                    }),
                    (a.prototype._rootContainsTarget = function (e) {
                        var i =
                            (this.root &&
                                (this.root.ownerDocument || this.root)) ||
                            t;
                        return h(i, e) && (!this.root || i == e.ownerDocument);
                    }),
                    (a.prototype._registerInstance = function () {
                        e.indexOf(this) < 0 && e.push(this);
                    }),
                    (a.prototype._unregisterInstance = function () {
                        var t = e.indexOf(this);
                        -1 != t && e.splice(t, 1);
                    }),
                    (window.IntersectionObserver = a),
                    (window.IntersectionObserverEntry = s);
            }
        function n(t) {
            try {
                return (t.defaultView && t.defaultView.frameElement) || null;
            } catch (t) {
                return null;
            }
        }
        function s(t) {
            (this.time = t.time),
                (this.target = t.target),
                (this.rootBounds = c(t.rootBounds)),
                (this.boundingClientRect = c(t.boundingClientRect)),
                (this.intersectionRect = c(
                    t.intersectionRect || {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0,
                    }
                )),
                (this.isIntersecting = !!t.intersectionRect);
            var e = this.boundingClientRect,
                i = e.width * e.height,
                o = this.intersectionRect,
                n = o.width * o.height;
            this.intersectionRatio = i
                ? Number((n / i).toFixed(4))
                : this.isIntersecting
                ? 1
                : 0;
        }
        function a(t, e) {
            var i,
                o,
                n,
                s = e || {};
            if ("function" != typeof t)
                throw new Error("callback must be a function");
            if (s.root && 1 != s.root.nodeType && 9 != s.root.nodeType)
                throw new Error("root must be a Document or Element");
            (this._checkForIntersections =
                ((i = this._checkForIntersections.bind(this)),
                (o = this.THROTTLE_TIMEOUT),
                (n = null),
                function () {
                    n ||
                        (n = setTimeout(function () {
                            i(), (n = null);
                        }, o));
                })),
                (this._callback = t),
                (this._observationTargets = []),
                (this._queuedEntries = []),
                (this._rootMarginValues = this._parseRootMargin(s.rootMargin)),
                (this.thresholds = this._initThresholds(s.threshold)),
                (this.root = s.root || null),
                (this.rootMargin = this._rootMarginValues
                    .map(function (t) {
                        return t.value + t.unit;
                    })
                    .join(" ")),
                (this._monitoringDocuments = []),
                (this._monitoringUnsubscribes = []);
        }
        function r(t, e, i, o) {
            "function" == typeof t.addEventListener
                ? t.addEventListener(e, i, o || !1)
                : "function" == typeof t.attachEvent &&
                  t.attachEvent("on" + e, i);
        }
        function l(t, e, i, o) {
            "function" == typeof t.removeEventListener
                ? t.removeEventListener(e, i, o || !1)
                : "function" == typeof t.detatchEvent &&
                  t.detatchEvent("on" + e, i);
        }
        function d(t) {
            var e;
            try {
                e = t.getBoundingClientRect();
            } catch (t) {}
            return e
                ? ((e.width && e.height) ||
                      (e = {
                          top: e.top,
                          right: e.right,
                          bottom: e.bottom,
                          left: e.left,
                          width: e.right - e.left,
                          height: e.bottom - e.top,
                      }),
                  e)
                : { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
        }
        function c(t) {
            return !t || "x" in t
                ? t
                : {
                      top: t.top,
                      y: t.top,
                      bottom: t.bottom,
                      left: t.left,
                      x: t.left,
                      right: t.right,
                      width: t.width,
                      height: t.height,
                  };
        }
        function p(t, e) {
            var i = e.top - t.top,
                o = e.left - t.left;
            return {
                top: i,
                left: o,
                height: e.height,
                width: e.width,
                bottom: i + e.height,
                right: o + e.width,
            };
        }
        function h(t, e) {
            for (var i = e; i; ) {
                if (i == t) return !0;
                i = u(i);
            }
            return !1;
        }
        function u(e) {
            var i = e.parentNode;
            return 9 == e.nodeType && e != t
                ? n(e)
                : (i && i.assignedSlot && (i = i.assignedSlot.parentNode),
                  i && 11 == i.nodeType && i.host ? i.host : i);
        }
        function f(t) {
            return t && 9 === t.nodeType;
        }
    })(),
    (function (t) {
        t.extend({
            browserSelector: function () {
                var e;
                (e = navigator.userAgent || navigator.vendor || window.opera),
                    ((jQuery.browser = jQuery.browser || {}).mobile =
                        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
                            e
                        ) ||
                        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                            e.substr(0, 4)
                        ));
                var i = "ontouchstart" in window || navigator.msMaxTouchPoints,
                    o = navigator.userAgent.toLowerCase(),
                    n = function (t) {
                        return o.indexOf(t) > -1;
                    },
                    s = "gecko",
                    a = "webkit",
                    r = "safari",
                    l = "opera",
                    d = document.documentElement,
                    p = [
                        !/opera|webtv/i.test(o) && /msie\s(\d)/.test(o)
                            ? "ie ie" +
                              parseFloat(navigator.appVersion.split("MSIE")[1])
                            : n("firefox/2")
                            ? s + " ff2"
                            : n("firefox/3.5")
                            ? s + " ff3 ff3_5"
                            : n("firefox/3")
                            ? s + " ff3"
                            : n("gecko/")
                            ? s
                            : n("opera")
                            ? l +
                              (/version\/(\d+)/.test(o)
                                  ? " " + l + RegExp.jQuery1
                                  : /opera(\s|\/)(\d+)/.test(o)
                                  ? " " + l + RegExp.jQuery2
                                  : "")
                            : n("konqueror")
                            ? "konqueror"
                            : n("chrome")
                            ? a + " chrome"
                            : n("iron")
                            ? a + " iron"
                            : n("applewebkit/")
                            ? a +
                              " " +
                              r +
                              (/version\/(\d+)/.test(o)
                                  ? " " + r + RegExp.jQuery1
                                  : "")
                            : n("mozilla/")
                            ? s
                            : "",
                        n("j2me")
                            ? "mobile"
                            : n("iphone")
                            ? "iphone"
                            : n("ipod")
                            ? "ipod"
                            : n("mac")
                            ? "mac"
                            : n("darwin")
                            ? "mac"
                            : n("webtv")
                            ? "webtv"
                            : n("win")
                            ? "win"
                            : n("freebsd")
                            ? "freebsd"
                            : n("x11") || n("linux")
                            ? "linux"
                            : "",
                        "js",
                    ];
                (c = p.join(" ")),
                    t.browser.mobile && (c += " mobile"),
                    i && (c += " touch"),
                    (d.className += " " + c),
                    /Edge/.test(navigator.userAgent) &&
                        t("html").removeClass("chrome").addClass("edge"),
                    !window.ActiveXObject && "ActiveXObject" in window
                        ? t("html").removeClass("gecko").addClass("ie ie11")
                        : (t("body").hasClass("dark") &&
                              t("html").addClass("dark"),
                          t("body").hasClass("boxed") &&
                              t("html").addClass("boxed"));
            },
        }),
            t.browserSelector(),
            (theme.globalWindowWidth = t(window).width());
        t(window).width();
        (window.onresize = function () {
            theme.globalWindowWidth = t(window).width();
        }),
            /iPad|iPhone|iPod/.test(navigator.platform) &&
                t(document).ready(function (t) {
                    t(".thumb-info").attr("onclick", "return true");
                }),
            t('a[data-bs-toggle="tab"]').length &&
                (t('a[data-bs-toggle="tab"]').on("shown.bs.tab", function (e) {
                    var i = t(t(e.target).attr("href"));
                    i.length &&
                        i.find(".owl-carousel").trigger("refresh.owl.carousel"),
                        t(this)
                            .parents(".nav-tabs")
                            .find(".active")
                            .removeClass("active"),
                        t(this).addClass("active").parent().addClass("active");
                }),
                window.location.hash &&
                    t(window).on("load", function () {
                        "*" !== window.location.hash &&
                            t(window.location.hash).get(0) &&
                            new bootstrap.Tab(
                                t(
                                    'a.nav-link[href="' +
                                        window.location.hash +
                                        '"]:not([data-hash])'
                                )[0]
                            ).show();
                    })),
            t("html").hasClass("disable-onload-scroll") ||
                !window.location.hash ||
                ["#*"].includes(window.location.hash) ||
                (window.scrollTo(0, 0),
                t(window).on("load", function () {
                    setTimeout(function () {
                        var e = window.location.hash,
                            i = t(window).width() < 768 ? 180 : 90;
                        t(e).length &&
                            (t("a[href$='" + window.location.hash + "']").is(
                                "[data-hash-offset]"
                            )
                                ? (i = parseInt(
                                      t(
                                          "a[href$='" +
                                              window.location.hash +
                                              "']"
                                      )
                                          .first()
                                          .attr("data-hash-offset")
                                  ))
                                : t("html").is("[data-hash-offset]") &&
                                  (i = parseInt(
                                      t("html").attr("data-hash-offset")
                                  )),
                            isNaN(i) && (i = 0),
                            t("body").addClass("scrolling"),
                            t("html, body").animate(
                                { scrollTop: t(e).offset().top - i },
                                600,
                                "easeOutQuad",
                                function () {
                                    t("body").removeClass("scrolling");
                                }
                            ));
                    }, 1);
                })),
            t.fn.extend({
                textRotator: function (e) {
                    e = t.extend(
                        { fadeSpeed: 500, pauseSpeed: 100, child: null },
                        e
                    );
                    return this.each(function () {
                        var i = e,
                            o = t(this);
                        if (
                            (t(o.children(), o).each(function () {
                                t(this).hide();
                            }),
                            i.child)
                        )
                            n = i.child;
                        else var n = t(o).children(":first");
                        t(n).fadeIn(i.fadeSpeed, function () {
                            t(n)
                                .delay(i.pauseSpeed)
                                .fadeOut(i.fadeSpeed, function () {
                                    var e = t(this).next();
                                    0 == e.length &&
                                        (e = t(o).children(":first")),
                                        t(o).textRotator({
                                            child: e,
                                            fadeSpeed: i.fadeSpeed,
                                            pauseSpeed: i.pauseSpeed,
                                        });
                                });
                        });
                    });
                },
            });
        var e = {
            $wrapper: t(".notice-top-bar"),
            $closeBtn: t(".notice-top-bar-close"),
            $header: t("#header"),
            $body: t(".body"),
            init: function () {
                return (
                    t.cookie("portoNoticeTopBarClose")
                        ? (this.$wrapper
                              .parent()
                              .prepend(
                                  "\x3c!-- Notice Top Bar removed by cookie --\x3e"
                              ),
                          this.$wrapper.remove())
                        : this.build().events(),
                    this
                );
            },
            build: function () {
                var e = this;
                return (
                    t(window).on("load", function () {
                        setTimeout(function () {
                            e.$body.css({
                                "margin-top": e.$wrapper.outerHeight(),
                                transition: "ease margin 300ms",
                            }),
                                t("#noticeTopBarContent").textRotator({
                                    fadeSpeed: 500,
                                    pauseSpeed: 5e3,
                                }),
                                ["absolute", "fixed"].includes(
                                    e.$header.css("position")
                                ) &&
                                    e.$header.css({
                                        top: e.$wrapper.outerHeight(),
                                        transition: "ease top 300ms",
                                    }),
                                t(window).trigger("notice.top.bar.opened");
                        }, 1e3);
                    }),
                    this
                );
            },
            events: function () {
                var e = this;
                return (
                    e.$closeBtn.on("click", function (i) {
                        i.preventDefault(),
                            e.$body.animate(
                                { "margin-top": 0 },
                                300,
                                function () {
                                    e.$wrapper.remove(), e.saveCookie();
                                }
                            ),
                            ["absolute", "fixed"].includes(
                                e.$header.css("position")
                            ) && e.$header.animate({ top: 0 }, 300),
                            e.$header.hasClass("header-effect-shrink") &&
                                e.$header
                                    .find(".header-body")
                                    .animate({ top: 0 }, 300),
                            t(window).trigger("notice.top.bar.closed");
                    }),
                    this
                );
            },
            checkCookie: function () {
                return !!t.cookie("portoNoticeTopBarClose");
            },
            saveCookie: function () {
                return t.cookie("portoNoticeTopBarClose", !0), this;
            },
        };
        if (
            (t(".notice-top-bar").length && e.init(),
            t(".image-hotspot").length &&
                t(".image-hotspot")
                    .append('<span class="ring"></span>')
                    .append('<span class="circle"></span>'),
            t("body[data-plugin-page-transition]").length)
        ) {
            var i = !1;
            t(document).on("click", "a", function (e) {
                i = t(this);
            }),
                t(window).on("beforeunload", function (e) {
                    if ("object" == typeof i) {
                        var o = i.attr("href");
                        0 == o.indexOf("mailto:") ||
                            0 == o.indexOf("tel:") ||
                            i.data("rm-from-transition") ||
                            t("body").addClass("page-transition-active");
                    }
                }),
                t(window).on("pageshow", function (e) {
                    e.persisted &&
                        (t("html").hasClass("safari") &&
                            window.location.reload(),
                        t("body").removeClass("page-transition-active"));
                });
        }
        t(".thumb-info-floating-caption").length &&
            (t(".thumb-info-floating-caption")
                .on("mouseenter", function () {
                    t(".thumb-info-floating-caption-title").length ||
                        (t(".body").append(
                            '<div class="thumb-info-floating-caption-title">' +
                                t(this).data("title") +
                                "</div>"
                        ),
                        t(this).data("type") &&
                            t(".thumb-info-floating-caption-title")
                                .append(
                                    '<div class="thumb-info-floating-caption-type">' +
                                        t(this).data("type") +
                                        "</div>"
                                )
                                .css({ "padding-bottom": 22 }),
                        t(this).hasClass("thumb-info-floating-caption-clean") &&
                            t(".thumb-info-floating-caption-title").addClass(
                                "bg-transparent"
                            ));
                })
                .on("mouseout", function () {
                    t(".thumb-info-floating-caption-title").remove();
                }),
            t(document).on("mousemove", function (e) {
                t(".thumb-info-floating-caption-title").css({
                    position: "fixed",
                    left: e.clientX - 20,
                    top: e.clientY + 20,
                });
            })),
            t("[data-toggle-text-click]").on("click", function () {
                t(this).text(function (e, i) {
                    return i === t(this).attr("data-toggle-text-click")
                        ? t(this).attr("data-toggle-text-click-alt")
                        : t(this).attr("data-toggle-text-click");
                });
            }),
            t(".shape-divider").length &&
                (aspectRatioSVG(),
                t(window).on("resize", function () {
                    aspectRatioSVG();
                })),
            t(".shape-divider-horizontal-animation").length &&
                theme.fn.intObs(
                    ".shape-divider-horizontal-animation",
                    function () {
                        for (var e = 0; e <= 1; e++) {
                            var i = t(this).find("svg:nth-child(1)").clone();
                            t(this).append(i);
                        }
                        t(this).addClass("start");
                    },
                    {}
                ),
            t("[data-porto-toggle-class]").on("click", function (e) {
                e.preventDefault(),
                    t(this).toggleClass(t(this).data("porto-toggle-class"));
            });
        var o = t(window);
        o.on("resize dynamic.height.resize", function () {
            t("[data-dynamic-height]").each(function () {
                var e = t(this),
                    i = JSON.parse(
                        e
                            .data("dynamic-height")
                            .replace(/'/g, '"')
                            .replace(";", "")
                    );
                o.width() < 576 && e.height(i[4]),
                    o.width() > 575 && o.width() < 768 && e.height(i[3]),
                    o.width() > 767 && o.width() < 992 && e.height(i[2]),
                    o.width() > 991 && o.width() < 1200 && e.height(i[1]),
                    o.width() > 1199 && e.height(i[0]);
            });
        }),
            o.width() < 992 && o.trigger("dynamic.height.resize"),
            t("[data-trigger-play-video]").length &&
                theme.fn.execOnceTroughEvent(
                    "[data-trigger-play-video]",
                    "mouseover.trigger.play.video",
                    function () {
                        var e = t(t(this).data("trigger-play-video"));
                        t(this).on("click", function (i) {
                            i.preventDefault(),
                                "yes" ==
                                t(this).data("trigger-play-video-remove")
                                    ? t(this).animate(
                                          { opacity: 0 },
                                          300,
                                          function () {
                                              e[0].play(), t(this).remove();
                                          }
                                      )
                                    : setTimeout(function () {
                                          e[0].play();
                                      }, 300);
                        });
                    }
                ),
            t("video[data-auto-play]").length &&
                t(window).on("load", function () {
                    t("video[data-auto-play]").each(function () {
                        var e = t(this);
                        setTimeout(function () {
                            t("#" + e.attr("id")).length &&
                                ("yes" ==
                                t(
                                    '[data-trigger-play-video="#' +
                                        e.attr("id") +
                                        '"]'
                                ).data("trigger-play-video-remove")
                                    ? t(
                                          '[data-trigger-play-video="#' +
                                              e.attr("id") +
                                              '"]'
                                      ).animate(
                                          { opacity: 0 },
                                          300,
                                          function () {
                                              e[0].play(),
                                                  t(
                                                      '[data-trigger-play-video="#' +
                                                          e.attr("id") +
                                                          '"]'
                                                  ).remove();
                                          }
                                      )
                                    : setTimeout(function () {
                                          e[0].play();
                                      }, 300));
                        }, 100);
                    });
                }),
            t("[data-remove-min-height]").length &&
                t(window).on("load", function () {
                    t("[data-remove-min-height]").each(function () {
                        t(this).css({ "min-height": 0 });
                    });
                }),
            t(".style-switcher-open-loader").length &&
                t(".style-switcher-open-loader").on("click", function (e) {
                    e.preventDefault(),
                        t(this).addClass("style-switcher-open-loader-loading");
                    var i = t(this).data("base-path"),
                        o = t(this).data("skin-src"),
                        n = document.createElement("script");
                    n.src =
                        i +
                        "master/style-switcher/style.switcher.localstorage.js";
                    var s = document.createElement("script");
                    (s.src = i + "master/style-switcher/style.switcher.js"),
                        (s.id = "styleSwitcherScript"),
                        s.setAttribute("data-base-path", i),
                        s.setAttribute("data-skin-src", o),
                        (s.onload = function () {
                            setTimeout(function () {
                                !(function e() {
                                    t(".style-switcher-open").length
                                        ? t(".style-switcher-open").trigger(
                                              "click"
                                          )
                                        : window.setTimeout(e, 100);
                                })();
                            }, 500);
                        }),
                        document.body.appendChild(n),
                        document.body.appendChild(s);
                });
    })(jQuery),
    document.addEventListener("lazybeforeunveil", function (t) {
        var e = t.target.getAttribute("data-bg-src");
        e && (t.target.style.backgroundImage = "url(" + e + ")");
    }),
    (function (t) {
        "function" == typeof define && define.amd
            ? define(["jquery"], t)
            : "object" == typeof exports
            ? t(require("jquery"))
            : t(jQuery);
    })(function (t) {
        var e = function (i, o) {
            (this.$element = t(i)),
                (this.options = t.extend(
                    {},
                    e.DEFAULTS,
                    this.dataOptions(),
                    o
                )),
                this.init();
        };
        (e.DEFAULTS = {
            from: 0,
            to: 0,
            speed: 1e3,
            refreshInterval: 100,
            decimals: 0,
            formatter: function (t, e) {
                return t.toFixed(e.decimals);
            },
            onUpdate: null,
            onComplete: null,
        }),
            (e.prototype.init = function () {
                (this.value = this.options.from),
                    (this.loops = Math.ceil(
                        this.options.speed / this.options.refreshInterval
                    )),
                    (this.loopCount = 0),
                    (this.increment =
                        (this.options.to - this.options.from) / this.loops);
            }),
            (e.prototype.dataOptions = function () {
                var t = {
                        from: this.$element.data("from"),
                        to: this.$element.data("to"),
                        speed: this.$element.data("speed"),
                        refreshInterval: this.$element.data("refresh-interval"),
                        decimals: this.$element.data("decimals"),
                    },
                    e = Object.keys(t);
                for (var i in e) {
                    var o = e[i];
                    void 0 === t[o] && delete t[o];
                }
                return t;
            }),
            (e.prototype.update = function () {
                (this.value += this.increment),
                    this.loopCount++,
                    this.render(),
                    "function" == typeof this.options.onUpdate &&
                        this.options.onUpdate.call(this.$element, this.value),
                    this.loopCount >= this.loops &&
                        (clearInterval(this.interval),
                        (this.value = this.options.to),
                        "function" == typeof this.options.onComplete &&
                            this.options.onComplete.call(
                                this.$element,
                                this.value
                            ));
            }),
            (e.prototype.render = function () {
                var t = this.options.formatter.call(
                    this.$element,
                    this.value,
                    this.options
                );
                this.$element.text(t);
            }),
            (e.prototype.restart = function () {
                this.stop(), this.init(), this.start();
            }),
            (e.prototype.start = function () {
                this.stop(),
                    this.render(),
                    (this.interval = setInterval(
                        this.update.bind(this),
                        this.options.refreshInterval
                    ));
            }),
            (e.prototype.stop = function () {
                this.interval && clearInterval(this.interval);
            }),
            (e.prototype.toggle = function () {
                this.interval ? this.stop() : this.start();
            }),
            (t.fn.countTo = function (i) {
                return this.each(function () {
                    var o = t(this),
                        n = o.data("countTo"),
                        s = "object" == typeof i ? i : {},
                        a = "string" == typeof i ? i : "start";
                    (!n || "object" == typeof i) &&
                        (n && n.stop(),
                        o.data("countTo", (n = new e(this, s)))),
                        n[a].call(n);
                });
            });
    }),
    (function (t) {
        t.fn.visible = function (e, i, o, n) {
            if (!(this.length < 1)) {
                var s = this.length > 1 ? this.eq(0) : this,
                    a = null != n,
                    r = t(a ? n : window),
                    l = a ? r.position() : 0,
                    d = s.get(0),
                    c = r.outerWidth(),
                    p = r.outerHeight(),
                    h =
                        ((o = o || "both"),
                        !0 !== i || d.offsetWidth * d.offsetHeight);
                if ("function" == typeof d.getBoundingClientRect) {
                    var u = d.getBoundingClientRect(),
                        f = a
                            ? u.top - l.top >= 0 && u.top < p + l.top
                            : u.top >= 0 && u.top < p,
                        g = a
                            ? u.bottom - l.top > 0 && u.bottom <= p + l.top
                            : u.bottom > 0 && u.bottom <= p,
                        v = a
                            ? u.left - l.left >= 0 && u.left < c + l.left
                            : u.left >= 0 && u.left < c,
                        m = a
                            ? u.right - l.left > 0 && u.right < c + l.left
                            : u.right > 0 && u.right <= c,
                        w = e ? f || g : f && g,
                        y = e ? v || m : v && m;
                    if ("both" === o) return h && w && y;
                    if ("vertical" === o) return h && w;
                    if ("horizontal" === o) return h && y;
                } else {
                    var b = a ? 0 : l,
                        C = b + p,
                        k = r.scrollLeft(),
                        x = k + c,
                        _ = s.position(),
                        $ = _.top,
                        O = $ + s.height(),
                        T = _.left,
                        S = T + s.width(),
                        I = !0 === e ? O : $,
                        D = !0 === e ? $ : O,
                        z = !0 === e ? S : T,
                        P = !0 === e ? T : S;
                    if ("both" === o)
                        return !!h && D <= C && I >= b && P <= x && z >= k;
                    if ("vertical" === o) return !!h && D <= C && I >= b;
                    if ("horizontal" === o) return !!h && P <= x && z >= k;
                }
            }
        };
    })(jQuery),
    (function (t) {
        "use strict";
        "function" == typeof define && define.amd
            ? define(["jquery"], t)
            : "undefined" != typeof module && module.exports
            ? (module.exports = t(require("jquery")))
            : t(jQuery);
    })(function (t) {
        var e = -1,
            i = -1,
            o = function (t) {
                return parseFloat(t) || 0;
            },
            n = function (e) {
                var i = t(e),
                    n = null,
                    s = [];
                return (
                    i.each(function () {
                        var e = t(this),
                            i = e.offset().top - o(e.css("margin-top")),
                            a = s.length > 0 ? s[s.length - 1] : null;
                        null === a
                            ? s.push(e)
                            : Math.floor(Math.abs(n - i)) <= 1
                            ? (s[s.length - 1] = a.add(e))
                            : s.push(e),
                            (n = i);
                    }),
                    s
                );
            },
            s = function (e) {
                var i = {
                    byRow: !0,
                    property: "height",
                    target: null,
                    remove: !1,
                };
                return "object" == typeof e
                    ? t.extend(i, e)
                    : ("boolean" == typeof e
                          ? (i.byRow = e)
                          : "remove" === e && (i.remove = !0),
                      i);
            },
            a = (t.fn.matchHeight = function (e) {
                var i = s(e);
                if (i.remove) {
                    var o = this;
                    return (
                        this.css(i.property, ""),
                        t.each(a._groups, function (t, e) {
                            e.elements = e.elements.not(o);
                        }),
                        this
                    );
                }
                return this.length <= 1 && !i.target
                    ? this
                    : (a._groups.push({ elements: this, options: i }),
                      a._apply(this, i),
                      this);
            });
        (a.version = "0.7.2"),
            (a._groups = []),
            (a._throttle = 80),
            (a._maintainScroll = !1),
            (a._beforeUpdate = null),
            (a._afterUpdate = null),
            (a._rows = n),
            (a._parse = o),
            (a._parseOptions = s),
            (a._apply = function (e, i) {
                var r = s(i),
                    l = t(e),
                    d = [l],
                    c = t(window).scrollTop(),
                    p = t("html").outerHeight(!0),
                    h = l.parents().filter(":hidden");
                return (
                    h.each(function () {
                        var e = t(this);
                        e.data("style-cache", e.attr("style"));
                    }),
                    h.css("display", "block"),
                    r.byRow &&
                        !r.target &&
                        (l.each(function () {
                            var e = t(this),
                                i = e.css("display");
                            "inline-block" !== i &&
                                "flex" !== i &&
                                "inline-flex" !== i &&
                                (i = "block"),
                                e.data("style-cache", e.attr("style")),
                                e.css({
                                    display: i,
                                    "padding-top": "0",
                                    "padding-bottom": "0",
                                    "margin-top": "0",
                                    "margin-bottom": "0",
                                    "border-top-width": "0",
                                    "border-bottom-width": "0",
                                    height: "100px",
                                    overflow: "hidden",
                                });
                        }),
                        (d = n(l)),
                        l.each(function () {
                            var e = t(this);
                            e.attr("style", e.data("style-cache") || "");
                        })),
                    t.each(d, function (e, i) {
                        var n = t(i),
                            s = 0;
                        if (r.target) s = r.target.outerHeight(!1);
                        else {
                            if (r.byRow && n.length <= 1)
                                return void n.css(r.property, "");
                            n.each(function () {
                                var e = t(this),
                                    i = e.attr("style"),
                                    o = e.css("display");
                                "inline-block" !== o &&
                                    "flex" !== o &&
                                    "inline-flex" !== o &&
                                    (o = "block");
                                var n = { display: o };
                                (n[r.property] = ""),
                                    e.css(n),
                                    e.outerHeight(!1) > s &&
                                        (s = e.outerHeight(!1)),
                                    i
                                        ? e.attr("style", i)
                                        : e.css("display", "");
                            });
                        }
                        n.each(function () {
                            var e = t(this),
                                i = 0;
                            (r.target && e.is(r.target)) ||
                                ("border-box" !== e.css("box-sizing") &&
                                    ((i +=
                                        o(e.css("border-top-width")) +
                                        o(e.css("border-bottom-width"))),
                                    (i +=
                                        o(e.css("padding-top")) +
                                        o(e.css("padding-bottom")))),
                                e.css(r.property, s - i + "px"));
                        });
                    }),
                    h.each(function () {
                        var e = t(this);
                        e.attr("style", e.data("style-cache") || null);
                    }),
                    a._maintainScroll &&
                        t(window).scrollTop(
                            (c / p) * t("html").outerHeight(!0)
                        ),
                    this
                );
            }),
            (a._applyDataApi = function () {
                var e = {};
                t("[data-match-height], [data-mh]").each(function () {
                    var i = t(this),
                        o = i.attr("data-mh") || i.attr("data-match-height");
                    e[o] = o in e ? e[o].add(i) : i;
                }),
                    t.each(e, function () {
                        this.matchHeight(!0);
                    });
            });
        var r = function (e) {
            a._beforeUpdate && a._beforeUpdate(e, a._groups),
                t.each(a._groups, function () {
                    a._apply(this.elements, this.options);
                }),
                a._afterUpdate && a._afterUpdate(e, a._groups);
        };
        (a._update = function (o, n) {
            if (n && "resize" === n.type) {
                var s = t(window).width();
                if (s === e) return;
                e = s;
            }
            o
                ? -1 === i &&
                  (i = setTimeout(function () {
                      r(n), (i = -1);
                  }, a._throttle))
                : r(n);
        }),
            t(a._applyDataApi);
        var l = t.fn.on ? "on" : "bind";
        t(window)[l]("load", function (t) {
            a._update(!1, t);
        }),
            t(window)[l]("resize orientationchange", function (t) {
                a._update(!0, t);
            });
    }),
    (function (t) {
        "function" == typeof define && define.amd
            ? define(["jquery"], t)
            : "object" == typeof exports
            ? (module.exports = t(require("jquery")))
            : t(jQuery);
    })(function (t) {
        var e,
            i = (e = new Image()).srcset && e.sizes;
        (t.waitForImages = {
            hasImageProperties: [
                "backgroundImage",
                "listStyleImage",
                "borderImage",
                "borderCornerImage",
                "cursor",
            ],
            hasImageAttributes: ["srcset"],
        }),
            (t.expr.pseudos["has-src"] = function (e) {
                return t(e).is('img[src][src!=""]');
            }),
            (t.expr.pseudos.uncached = function (e) {
                return !!t(e).is(":has-src") && !e.complete;
            }),
            (t.fn.waitForImages = function () {
                var e,
                    o,
                    n,
                    s,
                    a = 0,
                    r = t.Deferred(),
                    l = this,
                    d = [],
                    c = t.waitForImages.hasImageProperties || [],
                    p = t.waitForImages.hasImageAttributes || [],
                    h = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
                if (
                    (t.isPlainObject(arguments[0])
                        ? ((s = arguments[0].waitForAll),
                          (n = arguments[0].each),
                          (o = arguments[0].finished))
                        : 1 === arguments.length &&
                          "boolean" === t.type(arguments[0])
                        ? (s = arguments[0])
                        : ((o = arguments[0]),
                          (n = arguments[1]),
                          (s = arguments[2])),
                    (o = o || t.noop),
                    (n = n || t.noop),
                    (s = !!s),
                    !t.isFunction(o) || !t.isFunction(n))
                )
                    throw new TypeError("An invalid callback was supplied.");
                return (
                    this.each(function () {
                        var e = t(this);
                        s
                            ? e
                                  .find("*")
                                  .addBack()
                                  .each(function () {
                                      var e = t(this);
                                      e.is("img:has-src") &&
                                          !e.is("[srcset]") &&
                                          d.push({
                                              src: e.attr("src"),
                                              element: e[0],
                                          }),
                                          t.each(c, function (t, i) {
                                              var o,
                                                  n = e.css(i);
                                              if (!n) return !0;
                                              for (; (o = h.exec(n)); )
                                                  d.push({
                                                      src: o[2],
                                                      element: e[0],
                                                  });
                                          }),
                                          t.each(p, function (t, i) {
                                              if (!e.attr(i)) return !0;
                                              d.push({
                                                  src: e.attr("src"),
                                                  srcset: e.attr("srcset"),
                                                  element: e[0],
                                              });
                                          });
                                  })
                            : e.find("img:has-src").each(function () {
                                  d.push({ src: this.src, element: this });
                              });
                    }),
                    (e = d.length),
                    (a = 0),
                    0 === e && (o.call(l), r.resolveWith(l)),
                    t.each(d, function (s, d) {
                        var c = new Image(),
                            p = "load.waitForImages error.waitForImages";
                        t(c).one(p, function i(s) {
                            var c = [a, e, "load" == s.type];
                            if (
                                (a++,
                                n.apply(d.element, c),
                                r.notifyWith(d.element, c),
                                t(this).off(p, i),
                                a == e)
                            )
                                return o.call(l[0]), r.resolveWith(l[0]), !1;
                        }),
                            i &&
                                d.srcset &&
                                ((c.srcset = d.srcset), (c.sizes = d.sizes)),
                            (c.src = d.src);
                    }),
                    r.promise()
                );
            });
    }),
    (function (t, e) {
        fontSpy = function (t, i) {
            var o = e("html"),
                n = e("body");
            if ("string" != typeof t || "" === t)
                throw "A valid fontName is required. fontName must be a string and must not be an empty string.";
            var s = {
                    font: t,
                    fontClass: t.toLowerCase().replace(/\s/g, ""),
                    success: function () {},
                    failure: function () {},
                    testFont: "Courier New",
                    testString: "QW@HhsXJ",
                    glyphs: "",
                    delay: 50,
                    timeOut: 1e3,
                    callback: e.noop,
                },
                a = e.extend(s, i),
                r = e("<span>" + a.testString + a.glyphs + "</span>")
                    .css("position", "absolute")
                    .css("top", "-9999px")
                    .css("left", "-9999px")
                    .css("visibility", "hidden")
                    .css("fontFamily", a.testFont)
                    .css("fontSize", "250px");
            n.append(r);
            var l = r.outerWidth();
            r.css("fontFamily", a.font + "," + a.testFont);
            var d = function () {
                var t = r.outerWidth();
                l !== t
                    ? (a.callback(),
                      o.addClass(a.fontClass),
                      a && a.success && a.success(),
                      r.remove())
                    : a.timeOut < 0
                    ? (o.addClass("no-" + a.fontClass),
                      a && a.failure && a.failure(),
                      a.callback(new Error("FontSpy timeout")),
                      r.remove())
                    : (setTimeout(d, a.delay),
                      (a.timeOut = a.timeOut - a.delay));
            };
            d();
        };
    })(0, jQuery),
    (function (t) {
        "use strict";
        t.fn.pin = function (e) {
            var i = 0,
                o = [],
                n = !1,
                s = t(window);
            e = e || {};
            var a = function () {
                    for (var i = 0, a = o.length; i < a; i++) {
                        var r = o[i];
                        if (e.minWidth && s.outerWidth() <= e.minWidth)
                            r.parent().is(".pin-wrapper") && r.unwrap(),
                                r.css({
                                    width: "",
                                    left: "",
                                    top: "",
                                    position: "",
                                }),
                                e.activeClass && r.removeClass(e.activeClass),
                                (n = !0);
                        else {
                            n = !1;
                            var l = e.containerSelector
                                    ? r.closest(e.containerSelector)
                                    : t(document.body),
                                d = r.offset(),
                                c = l.offset(),
                                p = r.parent().offset();
                            r.parent().is(".pin-wrapper") ||
                                r.wrap("<div class='pin-wrapper'>");
                            var h = t.extend(
                                { top: 0, bottom: 0 },
                                e.padding || {}
                            );
                            r.data("pin", {
                                pad: h,
                                from:
                                    (e.containerSelector ? c.top : d.top) -
                                    h.top,
                                to:
                                    c.top +
                                    l.height() -
                                    r.outerHeight() -
                                    h.bottom,
                                end: c.top + l.height(),
                                parentTop: p.top,
                            }),
                                r.css({ width: r.outerWidth() }),
                                r.parent().css("height", r.outerHeight());
                        }
                    }
                },
                r = function () {
                    if (!n) {
                        i = s.scrollTop();
                        for (var a = [], r = 0, l = o.length; r < l; r++) {
                            var d = t(o[r]),
                                c = d.data("pin");
                            if (c) {
                                a.push(d);
                                var p = c.from - c.pad.bottom,
                                    h = c.to - c.pad.top;
                                p + d.outerHeight() > c.end
                                    ? d.css("position", "")
                                    : p < i && h > i
                                    ? ("fixed" != d.css("position") &&
                                          d
                                              .css({
                                                  left: d.offset().left,
                                                  top: c.pad.top,
                                              })
                                              .css("position", "fixed"),
                                      e.activeClass &&
                                          d.addClass(e.activeClass))
                                    : i >= h
                                    ? (d
                                          .css({
                                              left: "",
                                              top: h - c.parentTop + c.pad.top,
                                          })
                                          .css("position", "absolute"),
                                      e.activeClass &&
                                          d.addClass(e.activeClass))
                                    : (d.css({
                                          position: "",
                                          top: "",
                                          left: "",
                                      }),
                                      e.activeClass &&
                                          d.removeClass(e.activeClass));
                            }
                        }
                        o = a;
                    }
                },
                l = function () {
                    a(), r();
                };
            return (
                this.each(function () {
                    var e = t(this),
                        i = t(this).data("pin") || {};
                    (i && i.update) ||
                        (o.push(e),
                        t("img", this).one("load", a),
                        (i.update = l),
                        t(this).data("pin", i));
                }),
                s.scroll(r),
                s.resize(function () {
                    a();
                }),
                a(),
                s.on("load", l),
                this
            );
        };
    })(jQuery),
    (function (t) {
        "use strict";
        var e,
            i = { action: function () {}, runOnLoad: !1, duration: 500 },
            o = !1,
            n = {
                init: function () {
                    for (var e = 0; e <= arguments.length; e++) {
                        var o = arguments[e];
                        switch (typeof o) {
                            case "function":
                                i.action = o;
                                break;
                            case "boolean":
                                i.runOnLoad = o;
                                break;
                            case "number":
                                i.duration = o;
                        }
                    }
                    return this.each(function () {
                        i.runOnLoad && i.action(),
                            t(this).resize(function () {
                                n.timedAction.call(this);
                            });
                    });
                },
                timedAction: function (t, n) {
                    var s = function () {
                            var t = i.duration;
                            if (o) {
                                var n = new Date() - e;
                                if ((t = i.duration - n) <= 0)
                                    return (
                                        clearTimeout(o),
                                        (o = !1),
                                        void i.action()
                                    );
                            }
                            a(t);
                        },
                        a = function (t) {
                            o = setTimeout(s, t);
                        };
                    (e = new Date()),
                        "number" == typeof n && (i.duration = n),
                        "function" == typeof t && (i.action = t),
                        o || s();
                },
            };
        t.fn.afterResize = function (t) {
            return n[t]
                ? n[t].apply(this, Array.prototype.slice.call(arguments, 1))
                : n.init.apply(this, arguments);
        };
    })(jQuery),
    jQuery(document).ready(function (t) {
        var e,
            o,
            n = 2500,
            s = 3800,
            a = s - 3e3,
            r = 50,
            l = 150,
            d = 500,
            c = d + 800,
            p = 600,
            h = 1500;
        function u(e) {
            var i = v(e);
            if (e.parents(".word-rotator").hasClass("type")) {
                var o = e.parent(".word-rotator-words");
                o.addClass("selected").removeClass("waiting"),
                    setTimeout(function () {
                        o.removeClass("selected"),
                            e
                                .removeClass("is-visible")
                                .addClass("is-hidden")
                                .children("i")
                                .removeClass("in")
                                .addClass("out");
                    }, d),
                    setTimeout(function () {
                        f(i, l);
                    }, c);
            } else if (e.parents(".word-rotator").hasClass("letters")) {
                var h = e.children("i").length >= i.children("i").length;
                !(function e(i, o, s, a) {
                    i.removeClass("in").addClass("out");
                    i.is(":last-child")
                        ? s &&
                          setTimeout(function () {
                              u(v(o));
                          }, n)
                        : setTimeout(function () {
                              e(i.next(), o, s, a);
                          }, a);
                    if (
                        i.is(":last-child") &&
                        t("html").hasClass("no-csstransitions")
                    ) {
                        var r = v(o);
                        m(o, r);
                    }
                })(e.find("i").eq(0), e, h, r),
                    g(i.find("i").eq(0), i, h, r);
            } else
                e.parents(".word-rotator").hasClass("clip")
                    ? e
                          .parents(".word-rotator-words")
                          .stop(!0, !0)
                          .animate({ width: "2px" }, p, function () {
                              m(e, i), f(i);
                          })
                    : e.parents(".word-rotator").hasClass("loading-bar")
                    ? (e
                          .parents(".word-rotator-words")
                          .removeClass("is-loading"),
                      m(e, i),
                      setTimeout(function () {
                          u(i);
                      }, s),
                      setTimeout(function () {
                          e.parents(".word-rotator-words").addClass(
                              "is-loading"
                          );
                      }, a))
                    : (m(e, i),
                      setTimeout(function () {
                          u(i);
                      }, n));
        }
        function f(t, e) {
            t.parents(".word-rotator").hasClass("type")
                ? (g(t.find("i").eq(0), t, !1, e),
                  t.addClass("is-visible").removeClass("is-hidden"))
                : t.parents(".word-rotator").hasClass("clip") &&
                  (document.hasFocus()
                      ? t
                            .parents(".word-rotator-words")
                            .stop(!0, !0)
                            .animate(
                                { width: t.outerWidth() + 10 },
                                p,
                                function () {
                                    setTimeout(function () {
                                        u(t);
                                    }, h);
                                }
                            )
                      : (t
                            .parents(".word-rotator-words")
                            .stop(!0, !0)
                            .animate({ width: t.outerWidth() + 10 }),
                        setTimeout(function () {
                            u(t);
                        }, h)));
        }
        function g(t, e, i, o) {
            t.addClass("in").removeClass("out"),
                t.is(":last-child")
                    ? (e.parents(".word-rotator").hasClass("type") &&
                          setTimeout(function () {
                              e.parents(".word-rotator-words").addClass(
                                  "waiting"
                              );
                          }, 200),
                      i ||
                          setTimeout(function () {
                              u(e);
                          }, n),
                      e.closest(".word-rotator").hasClass("type") ||
                          e
                              .closest(".word-rotator-words")
                              .stop(!0, !0)
                              .animate({ width: e.outerWidth() }))
                    : setTimeout(function () {
                          g(t.next(), e, i, o);
                      }, o);
        }
        function v(t) {
            return t.is(":last-child") ? t.parent().children().eq(0) : t.next();
        }
        function m(t, e) {
            if (
                (t.removeClass("is-visible").addClass("is-hidden"),
                e.removeClass("is-hidden").addClass("is-visible"),
                !e.closest(".word-rotator").hasClass("clip"))
            ) {
                var i = 0,
                    o = e.outerWidth() > t.outerWidth() ? 0 : 600;
                (e.closest(".word-rotator").hasClass("loading-bar") ||
                    e.closest(".word-rotator").hasClass("slide")) &&
                    ((i = 3), (o = 0)),
                    setTimeout(function () {
                        e.closest(".word-rotator-words")
                            .stop(!0, !0)
                            .animate({ width: e.outerWidth() + i });
                    }, o);
            }
        }
        (e = ".word-rotator"),
            (o = n),
            theme.fn.intObs(
                e,
                function () {
                    t(this).hasClass("letters") &&
                        t(this)
                            .find("b")
                            .each(function () {
                                var e = t(this),
                                    o = e.text().split(""),
                                    n = e.hasClass("is-visible");
                                for (i in o)
                                    e.parents(".rotate-2").length > 0 &&
                                        (o[i] = "<em>" + o[i] + "</em>"),
                                        (o[i] = n
                                            ? '<i class="in">' + o[i] + "</i>"
                                            : "<i>" + o[i] + "</i>");
                                var s = o.join("");
                                e.html(s).css("opacity", 1);
                            });
                    var e = t(this);
                    if (e.hasClass("loading-bar"))
                        (o = s),
                            setTimeout(function () {
                                e.find(".word-rotator-words").addClass(
                                    "is-loading"
                                );
                            }, a);
                    else if (e.hasClass("clip")) {
                        var n = e.find(".word-rotator-words"),
                            r = n.outerWidth() + 10;
                        n.css("width", r);
                    } else if (!e.hasClass("type")) {
                        var l = e.find(".word-rotator-words b"),
                            d = 0;
                        l.each(function () {
                            var e = t(this).outerWidth();
                            e > d && (d = e);
                        }),
                            e.find(".word-rotator-words").css("width", d);
                    }
                    setTimeout(function () {
                        u(e.find(".is-visible").eq(0));
                    }, o);
                },
                {}
            );
    }),
    (function (t) {
        t.fn.hover3d = function (e) {
            var i = t.extend(
                {
                    selector: null,
                    perspective: 1e3,
                    sensitivity: 20,
                    invert: !1,
                    shine: !1,
                    hoverInClass: "hover-in",
                    hoverOutClass: "hover-out",
                    hoverClass: "hover-3d",
                },
                e
            );
            return this.each(function () {
                var e = t(this),
                    o = e.find(i.selector);
                (currentX = 0),
                    (currentY = 0),
                    i.shine && o.append('<div class="shine"></div>');
                var n = t(this).find(".shine");
                e.css({
                    perspective: i.perspective + "px",
                    transformStyle: "preserve-3d",
                }),
                    o.css({
                        perspective: i.perspective + "px",
                        transformStyle: "preserve-3d",
                    }),
                    n.css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        transform: "translateZ(1px)",
                        "z-index": 9,
                    }),
                    e.on("mouseenter", function () {
                        return (
                            o.addClass(i.hoverInClass + " " + i.hoverClass),
                            (currentX = currentY = 0),
                            void setTimeout(function () {
                                o.removeClass(i.hoverInClass);
                            }, 1e3)
                        );
                    }),
                    e.on("mousemove", function (t) {
                        return (function (t) {
                            var e = o.innerWidth(),
                                s = o.innerHeight(),
                                a = Math.round(t.pageX - o.offset().left),
                                r = Math.round(t.pageY - o.offset().top),
                                l = i.invert
                                    ? (e / 2 - a) / i.sensitivity
                                    : -(e / 2 - a) / i.sensitivity,
                                d = i.invert
                                    ? -(s / 2 - r) / i.sensitivity
                                    : (s / 2 - r) / i.sensitivity,
                                c = a - e / 2,
                                p = r - s / 2,
                                h = (180 * Math.atan2(p, c)) / Math.PI - 90;
                            h < 0 && (h += 360),
                                o.css({
                                    perspective: i.perspective + "px",
                                    transformStyle: "preserve-3d",
                                    transform:
                                        "rotateY(" +
                                        l +
                                        "deg) rotateX(" +
                                        d +
                                        "deg)",
                                }),
                                n.css(
                                    "background",
                                    "linear-gradient(" +
                                        h +
                                        "deg, rgba(255,255,255," +
                                        (t.offsetY / s) * 0.5 +
                                        ") 0%,rgba(255,255,255,0) 80%)"
                                );
                        })(t);
                    }),
                    e.on("mouseleave", function () {
                        return (
                            o.addClass(i.hoverOutClass + " " + i.hoverClass),
                            o.css({
                                perspective: i.perspective + "px",
                                transformStyle: "preserve-3d",
                                transform: "rotateX(0) rotateY(0)",
                            }),
                            void setTimeout(function () {
                                o.removeClass(
                                    i.hoverOutClass + " " + i.hoverClass
                                ),
                                    (currentX = currentY = 0);
                            }, 1e3)
                        );
                    });
            });
        };
    })(jQuery),
    function (t) {
        t.isFunction(t.fn.hover3d) &&
            t(".hover-effect-3d").length &&
            theme.fn.execOnceTroughEvent(
                ".hover-effect-3d",
                "mouseover.trigger.hover3d",
                function () {
                    t(this).each(function () {
                        t(this).hover3d({ selector: ".thumb-info" });
                    });
                }
            );
    }.apply(this, [jQuery]),
    $("[data-title-border]").length)
) {
    var $pageHeaderTitleBorder = $(
            '<span class="page-header-title-border"></span>'
        ),
        $pageHeaderTitle = $("[data-title-border]"),
        $window = $(window);
    $pageHeaderTitle.before($pageHeaderTitleBorder);
    var setPageHeaderTitleBorderWidth = function () {
        $pageHeaderTitleBorder.width($pageHeaderTitle.width());
    };
    $window.afterResize(function () {
        setPageHeaderTitleBorderWidth();
    }),
        setPageHeaderTitleBorderWidth(),
        $pageHeaderTitleBorder.addClass("visible");
}
!(function (t) {
    var e = {
        $wrapper: t(".footer-reveal"),
        init: function () {
            this.build(), this.events();
        },
        build: function () {
            var e = this.$wrapper.outerHeight(!0);
            e > t(window).height() - t(".header-body").height()
                ? (t("#footer").removeClass("footer-reveal"),
                  t("body").css("margin-bottom", 0))
                : (t("#footer").addClass("footer-reveal"),
                  t("body").css("margin-bottom", e));
        },
        events: function () {
            var e = this,
                i = t(window);
            i.on("load", function () {
                i.afterResize(function () {
                    e.build();
                });
            });
        },
    };
    t(".footer-reveal").length && e.init();
})(jQuery),
    $("[data-reinit-plugin]").length &&
        $("[data-reinit-plugin]").on("click", function (t) {
            t.preventDefault();
            var e = $(this).data("reinit-plugin"),
                i = $(this).data("reinit-plugin-function"),
                o = $(this).data("reinit-plugin-element"),
                n = theme.fn.getOptions($(this).data("reinit-plugin-options"));
            $(o).data(e).destroy(),
                setTimeout(function () {
                    theme.fn.execPluginFunction(i, $(o), n);
                }, 1e3);
        }),
    $("[data-copy-to-clipboard]").length &&
        theme.fn.intObs(
            "[data-copy-to-clipboard]",
            function () {
                var t = $(this);
                t.wrap(
                    '<div class="copy-to-clipboard-wrapper position-relative"></div>'
                );
                var e = $(
                    '<a href="#" class="btn btn-primary btn-px-2 py-1 text-0 position-absolute top-8 right-8">COPY</a>'
                );
                t.parent().prepend(e),
                    e.on("click", function (e) {
                        e.preventDefault();
                        var i = $(this),
                            o = $(
                                '<textarea class="d-block opacity-0" style="height: 0;">'
                            );
                        i.parent().append(o),
                            o.val(t.text()),
                            o[0].select(),
                            o[0].setSelectionRange(0, 99999),
                            document.execCommand("copy"),
                            i.addClass("copied"),
                            setTimeout(function () {
                                i.removeClass("copied");
                            }, 1e3),
                            o.remove();
                    });
            },
            { rootMargin: "0px 0px 0px 0px" }
        ),
    function (t, e) {
        t = t || {};
        var i = function (t, e) {
            return this.initialize(t, e);
        };
        (i.defaults = {
            accX: 0,
            accY: -80,
            delay: 100,
            duration: "750ms",
            minWindowWidth: 767,
            forceAnimation: !1,
            flagClassOnly: !1,
        }),
            (i.prototype = {
                initialize: function (t, e) {
                    return t.data("__animate")
                        ? this
                        : ((this.$el = t),
                          this.setData().setOptions(e).build(),
                          this);
                },
                setData: function () {
                    return this.$el.data("__animate", this), this;
                },
                setOptions: function (t) {
                    return (
                        (this.options = e.extend(!0, {}, i.defaults, t, {
                            wrapper: this.$el,
                        })),
                        this
                    );
                },
                build: function () {
                    var t = this;
                    if (t.options.flagClassOnly) {
                        var i = t.options.wrapper.attr(
                            "data-appear-animation-delay"
                        )
                            ? t.options.wrapper.attr(
                                  "data-appear-animation-delay"
                              )
                            : t.options.delay;
                        return (
                            t.options.wrapper.css({
                                "animation-delay": i + "ms",
                                "transition-delay": i + "ms",
                            }),
                            t.options.wrapper.addClass(
                                t.options.wrapper.attr("data-appear-animation")
                            ),
                            this
                        );
                    }
                    return (
                        e("body").hasClass("loading-overlay-showing")
                            ? e(window).on(
                                  "loading.overlay.ready",
                                  function () {
                                      t.animate();
                                  }
                              )
                            : t.animate(),
                        this
                    );
                },
                animate: function () {
                    var i = this,
                        o = this.options.wrapper,
                        n = 0,
                        s = this.options.duration,
                        a = o.offset().top,
                        r = e(window).scrollTop();
                    return o.data("appear-animation-svg")
                        ? (o.find("[data-appear-animation]").each(function () {
                              var i,
                                  o = e(this),
                                  n = t.fn.getOptions(o.data("plugin-options"));
                              n && (i = n), o.themePluginAnimate(i);
                          }),
                          this)
                        : i.options.firstLoadNoAnim
                        ? (o.removeClass("appear-animation"),
                          o.closest(".owl-carousel").get(0) &&
                              setTimeout(function () {
                                  o.closest(".owl-carousel").on(
                                      "change.owl.carousel",
                                      function () {
                                          (i.options.firstLoadNoAnim = !1),
                                              o.removeData("__animate"),
                                              o.themePluginAnimate(i.options);
                                      }
                                  );
                              }, 500),
                          this)
                        : (o.addClass("appear-animation animated"),
                          (!e("html").hasClass("no-csstransitions") &&
                              e(window).width() > i.options.minWindowWidth &&
                              a >= r) ||
                          1 == i.options.forceAnimation
                              ? ((n = o.attr("data-appear-animation-delay")
                                    ? o.attr("data-appear-animation-delay")
                                    : i.options.delay),
                                "750ms" !=
                                    (s = o.attr(
                                        "data-appear-animation-duration"
                                    )
                                        ? o.attr(
                                              "data-appear-animation-duration"
                                          )
                                        : i.options.duration) &&
                                    o.css("animation-duration", s),
                                o.css("animation-delay", n + "ms"),
                                o.addClass(
                                    o.attr("data-appear-animation") +
                                        " appear-animation-visible"
                                ),
                                o.trigger("animation:show"))
                              : o.addClass("appear-animation-visible"),
                          this);
                },
            }),
            e.extend(t, { PluginAnimate: i }),
            (e.fn.themePluginAnimate = function (t) {
                return this.map(function () {
                    var o = e(this);
                    return o.data("__animate")
                        ? o.data("__animate")
                        : new i(o, t);
                });
            });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        t = t || {};
        var i = function (t, e) {
            return this.initialize(t, e);
        };
        (i.defaults = {
            animationName: "fadeIn",
            animationSpeed: 50,
            startDelay: 500,
            minWindowWidth: 768,
            letterClass: "",
        }),
            (i.prototype = {
                initialize: function (t, e) {
                    if (t.data("__animatedLetters")) return this;
                    return (
                        (this.$el = t),
                        (this.initialText = t.text()),
                        this.setData().setOptions(e).build().events(),
                        this
                    );
                },
                setData: function () {
                    return this.$el.data("__animatedLetters", this), this;
                },
                setOptions: function (t) {
                    return (
                        (this.options = e.extend(!0, {}, i.defaults, t, {
                            wrapper: this.$el,
                        })),
                        this
                    );
                },
                build: function () {
                    var t = this,
                        i = t.$el.text().split("");
                    if (e(window).width() < t.options.minWindowWidth)
                        return this;
                    if (t.options.firstLoadNoAnim)
                        return (
                            t.$el.css({ visibility: "visible" }),
                            t.$el.closest(".owl-carousel").get(0) &&
                                setTimeout(function () {
                                    t.$el
                                        .closest(".owl-carousel")
                                        .on("change.owl.carousel", function () {
                                            (t.options.firstLoadNoAnim = !1),
                                                t.build();
                                        });
                                }, 500),
                            this
                        );
                    if (
                        (t.$el.addClass("initialized"),
                        t.setMinHeight(),
                        t.$el.text(""),
                        "typeWriter" == t.options.animationName)
                    ) {
                        t.$el.append(
                            '<span class="letters-wrapper"></span><span class="typeWriter"></pre>'
                        );
                        var o = 0,
                            n = function () {
                                var e = setTimeout(function () {
                                    var e = i[o];
                                    t.$el
                                        .find(".letters-wrapper")
                                        .append(
                                            '<span class="letter ' +
                                                (t.options.letterClass
                                                    ? t.options.letterClass +
                                                      " "
                                                    : "") +
                                                '">' +
                                                e +
                                                "</span>"
                                        ),
                                        o++,
                                        n();
                                }, t.options.animationSpeed);
                                o >= i.length && clearTimeout(e);
                            };
                        n();
                    } else
                        setTimeout(function () {
                            for (var e = 0; e < i.length; e++) {
                                var o = i[e];
                                t.$el.append(
                                    '<span class="letter ' +
                                        (t.options.letterClass
                                            ? t.options.letterClass + " "
                                            : "") +
                                        t.options.animationName +
                                        ' animated" style="animation-delay: ' +
                                        e * t.options.animationSpeed +
                                        'ms;">' +
                                        o +
                                        "</span>"
                                );
                            }
                        }, t.options.startDelay);
                    return this;
                },
                setMinHeight: function () {
                    return (
                        this.$el.closest(".owl-carousel").get(0)
                            ? (this.$el
                                  .closest(".owl-carousel")
                                  .addClass("d-block"),
                              this.$el.css("min-height", this.$el.height()),
                              this.$el
                                  .closest(".owl-carousel")
                                  .removeClass("d-block"))
                            : this.$el.css("min-height", this.$el.height()),
                        this
                    );
                },
                destroy: function () {
                    return (
                        this.$el.html(this.initialText).css("min-height", ""),
                        this
                    );
                },
                events: function () {
                    var t = this;
                    return (
                        t.$el.on("animated.letters.destroy", function () {
                            t.destroy();
                        }),
                        t.$el.on("animated.letters.initialize", function () {
                            t.build();
                        }),
                        this
                    );
                },
            }),
            e.extend(t, { PluginAnimatedLetters: i }),
            (e.fn.themePluginAnimatedLetters = function (t) {
                return this.map(function () {
                    var o = e(this);
                    return o.data("__animatedLetters")
                        ? o.data("__animatedLetters")
                        : new i(o, t);
                });
            });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        t = t || {};
        var i = function (t, e) {
            return this.initialize(t, e);
        };
        (i.defaults = {}),
            (i.prototype = {
                initialize: function (t, e) {
                    return (
                        (this.$el = t),
                        this.setData().setOptions(e).build(),
                        this
                    );
                },
                setData: function () {
                    return this.$el.data("__beforeafter", this), this;
                },
                setOptions: function (t) {
                    return (
                        (this.options = e.extend(!0, {}, i.defaults, t, {
                            wrapper: this.$el,
                        })),
                        this
                    );
                },
                build: function () {
                    if (!e.isFunction(e.fn.twentytwenty)) return this;
                    return (
                        this.options.wrapper.twentytwenty(this.options), this
                    );
                },
            }),
            e.extend(t, { PluginBeforeAfter: i }),
            (e.fn.themePluginBeforeAfter = function (t) {
                return this.map(function () {
                    var o = e(this);
                    return o.data("__beforeafter")
                        ? o.data("__beforeafter")
                        : new i(o, t);
                });
            });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        t = t || {};
        var i = function (t, e) {
            return this.initialize(t, e);
        };
        (i.defaults = {
            autoplay: !0,
            autoplayTimeout: 7e3,
            disableAutoPlayOnClick: !0,
        }),
            (i.prototype = {
                initialize: function (t, e) {
                    return t.data("__carouselLight")
                        ? this
                        : ((this.$el = t),
                          (this.clickFlag = !0),
                          this.setData()
                              .setOptions(e)
                              .build()
                              .owlNav()
                              .owlDots()
                              .autoPlay()
                              .events(),
                          this);
                },
                setData: function () {
                    return this.$el.data("__carouselLight", this), this;
                },
                setOptions: function (t) {
                    return (
                        (this.options = e.extend(!0, {}, i.defaults, t, {
                            wrapper: this.$el,
                        })),
                        this
                    );
                },
                build: function () {
                    return (
                        this.$el
                            .css("opacity", 1)
                            .find(".owl-item:first-child")
                            .addClass("active"),
                        this.$el.trigger("initialized.owl.carousel"),
                        this.carouselNavigate(),
                        this
                    );
                },
                changeSlide: function (t) {
                    var e = this,
                        i = e.$el.find(".owl-item.active");
                    e.$el.find(".owl-item.active").addClass("removing"),
                        i.removeClass("fadeIn").addClass("fadeOut animated"),
                        setTimeout(function () {
                            setTimeout(function () {
                                i.removeClass("active");
                            }, 400),
                                t
                                    .addClass("active")
                                    .removeClass("fadeOut")
                                    .addClass("fadeIn animated");
                        }, 200),
                        e.$el
                            .find(".owl-dot")
                            .removeClass("active")
                            .eq(t.index())
                            .addClass("active"),
                        e.$el.trigger({
                            type: "change.owl.carousel",
                            nextSlideIndex: t.index(),
                            prevSlideIndex: i.index(),
                        }),
                        setTimeout(function () {
                            e.$el.trigger({
                                type: "changed.owl.carousel",
                                nextSlideIndex: t.index(),
                                prevSlideIndex: i.index(),
                            });
                        }, 500);
                },
                owlNav: function () {
                    var t = this,
                        e = t.$el.find(".owl-next");
                    return (
                        t.$el.find(".owl-prev").on("click", function (e) {
                            if (
                                (e.preventDefault(),
                                t.options.disableAutoPlayOnClick &&
                                    window.clearInterval(t.autoPlayInterval),
                                t.avoidMultipleClicks())
                            )
                                return !1;
                            t.owlPrev();
                        }),
                        e.on("click", function (e) {
                            if (
                                (e.preventDefault(),
                                t.options.disableAutoPlayOnClick &&
                                    window.clearInterval(t.autoPlayInterval),
                                t.avoidMultipleClicks())
                            )
                                return !1;
                            t.owlNext();
                        }),
                        this
                    );
                },
                owlDots: function () {
                    var t = this;
                    return (
                        t.$el.find(".owl-dot").on("click", function (i) {
                            if (
                                (($this = e(this)),
                                i.preventDefault(),
                                t.options.disableAutoPlayOnClick &&
                                    window.clearInterval(t.autoPlayInterval),
                                t.avoidMultipleClicks())
                            )
                                return !1;
                            var o = e(this).index();
                            if ($this.hasClass("active")) return !1;
                            t.changeSlide(t.$el.find(".owl-item").eq(o));
                        }),
                        this
                    );
                },
                owlPrev: function () {
                    this.$el.find(".owl-item.active").prev().get(0)
                        ? this.changeSlide(
                              this.$el.find(".owl-item.active").prev()
                          )
                        : this.changeSlide(
                              this.$el.find(".owl-item:last-child")
                          );
                },
                owlNext: function () {
                    this.$el.find(".owl-item.active").next().get(0)
                        ? this.changeSlide(
                              this.$el.find(".owl-item.active").next()
                          )
                        : this.changeSlide(this.$el.find(".owl-item").eq(0));
                },
                avoidMultipleClicks: function () {
                    var t = this;
                    return (
                        !t.clickFlag ||
                        (t.clickFlag &&
                            ((t.clickFlag = !1),
                            setTimeout(function () {
                                t.clickFlag = !0;
                            }, 1e3)),
                        !1)
                    );
                },
                autoPlay: function () {
                    var t = this;
                    this.options.wrapper;
                    return (
                        t.options.autoplay &&
                            (t.autoPlayInterval = window.setInterval(
                                function () {
                                    t.owlNext();
                                },
                                t.options.autoplayTimeout
                            )),
                        this
                    );
                },
                carouselNavigate: function () {
                    var t = this,
                        i = this.options.wrapper;
                    return (
                        e("[data-carousel-navigate]").get(0) &&
                            (e(
                                '[data-carousel-navigate-id="#' +
                                    i.attr("id") +
                                    '"]'
                            ).each(function () {
                                var i = e(this),
                                    o = e(i.data("carousel-navigate-id")).get(
                                        0
                                    ),
                                    n = i.data("carousel-navigate-to");
                                o &&
                                    i.on("click", function () {
                                        t.options.disableAutoPlayOnClick &&
                                            window.clearInterval(
                                                t.autoPlayInterval
                                            ),
                                            t.changeSlide(
                                                t.$el
                                                    .find(".owl-item")
                                                    .eq(parseInt(n) - 1)
                                            );
                                    });
                            }),
                            i.on("change.owl.carousel", function (t) {
                                e(
                                    '[data-carousel-navigate-id="#' +
                                        i.attr("id") +
                                        '"]'
                                ).removeClass("active");
                            }),
                            i.on("changed.owl.carousel", function (t) {
                                e(
                                    '[data-carousel-navigate-id="#' +
                                        i.attr("id") +
                                        '"][data-carousel-navigate-to="' +
                                        (t.nextSlideIndex + 1) +
                                        '"]'
                                ).addClass("active");
                            })),
                        this
                    );
                },
                events: function () {
                    var i = this;
                    i.$el.on("change.owl.carousel", function (t) {
                        i.$el
                            .find(
                                "[data-appear-animation]:not(.background-image-wrapper), [data-plugin-animated-letters]"
                            )
                            .addClass("invisible"),
                            i.$el
                                .find("[data-plugin-animated-letters]")
                                .trigger("animated.letters.destroy"),
                            i.$el
                                .find(
                                    ".owl-item:not(.active) [data-carousel-onchange-show]"
                                )
                                .removeClass("d-none");
                    }),
                        i.$el.on("changed.owl.carousel", function (o) {
                            setTimeout(function () {
                                i.$el
                                    .find(
                                        ".owl-item.cloned [data-appear-animation]"
                                    )
                                    .get(0) &&
                                    i.$el
                                        .find(
                                            ".owl-item.cloned [data-appear-animation]"
                                        )
                                        .each(function () {
                                            var i,
                                                o = e(this),
                                                n = t.fn.getOptions(
                                                    o.data("plugin-options")
                                                );
                                            n && (i = n),
                                                o.themePluginAnimate(i);
                                        }),
                                    i.$el
                                        .find(
                                            ".owl-item.active [data-appear-animation]:not(.background-image-wrapper), [data-plugin-animated-letters]"
                                        )
                                        .removeClass("invisible"),
                                    i.$el
                                        .find(
                                            ".owl-item.active [data-plugin-animated-letters]"
                                        )
                                        .trigger("animated.letters.initialize"),
                                    i.$el
                                        .find(
                                            ".owl-item.cloned.active [data-plugin-video-background]"
                                        )
                                        .trigger("video.background.initialize");
                            }, 500);
                        });
                },
            }),
            e.extend(t, { PluginCarouselLight: i }),
            (e.fn.themePluginCarouselLight = function (t) {
                return this.map(function () {
                    var o = e(this);
                    return o.data("__carouselLight")
                        ? o.data("__carouselLight")
                        : new i(o, t);
                });
            });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        t = t || {};
        var i = function (t, e) {
            return this.initialize(t, e);
        };
        (i.defaults = {
            loop: !0,
            responsive: {
                0: { items: 1 },
                479: { items: 1 },
                768: { items: 2 },
                979: { items: 3 },
                1199: { items: 4 },
            },
            navText: [],
            refresh: !1,
        }),
            (i.prototype = {
                initialize: function (t, i) {
                    if (t.data("__carousel")) return this;
                    if (((this.$el = t), t.find("[data-icon]").get(0))) {
                        var o = this;
                        return (
                            e(window).on("icon.rendered", function () {
                                if (t.data("__carousel")) return this;
                                setTimeout(function () {
                                    o.setData().setOptions(i).build();
                                }, 1e3);
                            }),
                            this
                        );
                    }
                    return this.setData().setOptions(i).build(), this;
                },
                setData: function () {
                    return this.$el.data("__carousel", this), this;
                },
                setOptions: function (t) {
                    return (
                        (this.options = e.extend(!0, {}, i.defaults, t, {
                            wrapper: this.$el,
                        })),
                        this
                    );
                },
                build: function () {
                    if (!e.isFunction(e.fn.owlCarousel)) return this;
                    var i = this,
                        o = this.options.wrapper;
                    if (
                        (o.addClass("owl-theme"),
                        o.addClass("owl-loading"),
                        "rtl" == e("html").attr("dir") &&
                            (this.options = e.extend(!0, {}, this.options, {
                                rtl: !0,
                            })),
                        1 == this.options.items &&
                            (this.options.responsive = {}),
                        this.options.items > 4 &&
                            (this.options = e.extend(!0, {}, this.options, {
                                responsive: {
                                    1199: { items: this.options.items },
                                },
                            })),
                        this.options.autoHeight)
                    ) {
                        var n = [];
                        o.find(".owl-item").each(function () {
                            e(this).hasClass("active") &&
                                n.push(e(this).height());
                        }),
                            e(window).afterResize(function () {
                                o.find(".owl-stage-outer").height(
                                    Math.max.apply(null, n)
                                );
                            }),
                            e(window).on("load", function () {
                                o.find(".owl-stage-outer").height(
                                    Math.max.apply(null, n)
                                );
                            });
                    }
                    if (
                        (o
                            .owlCarousel(this.options)
                            .addClass("owl-carousel-init animated fadeIn"),
                        setTimeout(function () {
                            o.removeClass("animated fadeIn");
                        }, 1e3),
                        o.closest(".owl-carousel-wrapper").get(0) &&
                            setTimeout(function () {
                                o.closest(".owl-carousel-wrapper").css({
                                    height: "",
                                });
                            }, 500),
                        o.prev().hasClass("owl-carousel-loader") &&
                            o.prev().remove(),
                        i.navigationOffsets(),
                        o.hasClass("nav-outside") &&
                            (e(window).on(
                                "owl.carousel.nav.outside",
                                function () {
                                    e(window).width() < 992
                                        ? ((i.options.stagePadding = 40),
                                          o.addClass("stage-margin"))
                                        : ((i.options.stagePadding = 0),
                                          o.removeClass("stage-margin")),
                                        o
                                            .owlCarousel("destroy")
                                            .owlCarousel(i.options),
                                        i.navigationOffsets();
                                }
                            ),
                            e(window).on("load", function () {
                                e(window).afterResize(function () {
                                    e(window).trigger(
                                        "owl.carousel.nav.outside"
                                    );
                                });
                            }),
                            e(window).trigger("owl.carousel.nav.outside")),
                        o.hasClass("nav-svg-arrows-1"))
                    ) {
                        o.find(".owl-next, .owl-prev").append(
                            '<svg version="1.1" viewBox="0 0 15.698 8.706" width="17" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon stroke="#212121" stroke-width="0.1" fill="#212121" points="11.354,0 10.646,0.706 13.786,3.853 0,3.853 0,4.853 13.786,4.853 10.646,8 11.354,8.706 15.698,4.353 "/></svg>'
                        );
                    }
                    if (
                        (o.attr("data-sync") &&
                            o.on("change.owl.carousel", function (t) {
                                if (
                                    t.namespace &&
                                    "position" === t.property.name
                                ) {
                                    var i = t.relatedTarget.relative(
                                        t.property.value,
                                        !0
                                    );
                                    e(o.data("sync")).owlCarousel(
                                        "to",
                                        i,
                                        300,
                                        !0
                                    );
                                }
                            }),
                        o.hasClass("carousel-center-active-item"))
                    ) {
                        var s = o.find(".owl-item.active"),
                            a = Math.floor(
                                (o.find(".owl-item.active").length - 1) / 2
                            );
                        s.eq(a).addClass("current"),
                            o.on("change.owl.carousel", function (t) {
                                o.find(".owl-item").removeClass("current"),
                                    setTimeout(function () {
                                        var t = o.find(".owl-item.active"),
                                            e = Math.floor(
                                                (o.find(".owl-item.active")
                                                    .length -
                                                    1) /
                                                    2
                                            );
                                        t.eq(e).addClass("current");
                                    }, 100);
                            }),
                            o.trigger("refresh.owl.carousel");
                    }
                    return (
                        (i.options.animateIn || i.options.animateOut) &&
                            (o.on("change.owl.carousel", function (t) {
                                o
                                    .find(
                                        "[data-appear-animation], [data-plugin-animated-letters]"
                                    )
                                    .addClass("d-none"),
                                    o
                                        .find("[data-plugin-animated-letters]")
                                        .trigger("animated.letters.destroy"),
                                    o
                                        .find(
                                            ".owl-item:not(.active) [data-carousel-onchange-show]"
                                        )
                                        .removeClass("d-none");
                            }),
                            o.on("changed.owl.carousel", function (i) {
                                setTimeout(function () {
                                    o
                                        .find("[data-appear-animation]")
                                        .each(function () {
                                            var i,
                                                o = e(this),
                                                n = t.fn.getOptions(
                                                    o.data("plugin-options")
                                                );
                                            n && (i = n),
                                                o.themePluginAnimate(i);
                                        }),
                                        o
                                            .find(
                                                ".owl-item.active [data-appear-animation], [data-plugin-animated-letters]"
                                            )
                                            .removeClass("d-none"),
                                        o
                                            .find(
                                                ".owl-item.active [data-plugin-animated-letters]"
                                            )
                                            .trigger(
                                                "animated.letters.initialize"
                                            ),
                                        o
                                            .find(
                                                ".owl-item.cloned.active [data-plugin-video-background]"
                                            )
                                            .trigger(
                                                "video.background.initialize"
                                            );
                                }, 10);
                            })),
                        o.find("[data-icon]").length &&
                            o.on(
                                "change.owl.carousel drag.owl.carousel",
                                function () {
                                    o.find(".owl-item.cloned [data-icon]").each(
                                        function () {
                                            var i,
                                                o = e(this),
                                                n = t.fn.getOptions(
                                                    o.data("plugin-options")
                                                );
                                            n && (i = n), o.themePluginIcon(i);
                                        }
                                    );
                                }
                            ),
                        o.find("[data-plugin-video-background]").get(0) &&
                            e(window).resize(),
                        o.removeClass("owl-loading"),
                        o.css("height", "auto"),
                        i.carouselNavigate(),
                        i.options.refresh && o.owlCarousel("refresh"),
                        this
                    );
                },
                navigationOffsets: function () {
                    var t = this.options.wrapper,
                        e = "none" != t.find(".owl-nav").css("transform"),
                        i = "none" != t.find(".owl-dots").css("transform");
                    return (
                        this.options.navHorizontalOffset &&
                            !this.options.navVerticalOffset &&
                            (e
                                ? t
                                      .find(".owl-nav")
                                      .css({
                                          left: this.options
                                              .navHorizontalOffset,
                                      })
                                : t
                                      .find(".owl-nav")
                                      .css({
                                          transform:
                                              "translate3d(" +
                                              this.options.navHorizontalOffset +
                                              ", 0, 0)",
                                      })),
                        this.options.navVerticalOffset &&
                            !this.options.navHorizontalOffset &&
                            (e
                                ? t
                                      .find(".owl-nav")
                                      .css({
                                          top:
                                              "calc( 50% - " +
                                              this.options.navVerticalOffset +
                                              " )",
                                      })
                                : t
                                      .find(".owl-nav")
                                      .css({
                                          transform:
                                              "translate3d(0, " +
                                              this.options.navVerticalOffset +
                                              ", 0)",
                                      })),
                        this.options.navVerticalOffset &&
                            this.options.navHorizontalOffset &&
                            (e
                                ? t
                                      .find(".owl-nav")
                                      .css({
                                          top:
                                              "calc( 50% - " +
                                              this.options.navVerticalOffset +
                                              " )",
                                          left: this.options
                                              .navHorizontalOffset,
                                      })
                                : t
                                      .find(".owl-nav")
                                      .css({
                                          transform:
                                              "translate3d(" +
                                              this.options.navHorizontalOffset +
                                              ", " +
                                              this.options.navVerticalOffset +
                                              ", 0)",
                                      })),
                        this.options.dotsHorizontalOffset &&
                            !this.options.dotsVerticalOffset &&
                            t
                                .find(".owl-dots")
                                .css({
                                    transform:
                                        "translate3d(" +
                                        this.options.dotsHorizontalOffset +
                                        ", 0, 0)",
                                }),
                        this.options.dotsVerticalOffset &&
                            !this.options.dotsHorizontalOffset &&
                            (i
                                ? t
                                      .find(".owl-dots")
                                      .css({
                                          top:
                                              "calc( 50% - " +
                                              this.options.dotsVerticalOffset +
                                              " )",
                                      })
                                : t
                                      .find(".owl-dots")
                                      .css({
                                          transform:
                                              "translate3d(0, " +
                                              this.options.dotsVerticalOffset +
                                              ", 0)",
                                      })),
                        this.options.dotsVerticalOffset &&
                            this.options.dotsHorizontalOffset &&
                            t
                                .find(".owl-dots")
                                .css({
                                    transform:
                                        "translate3d(" +
                                        this.options.dotsHorizontalOffset +
                                        ", " +
                                        this.options.dotsVerticalOffset +
                                        ", 0)",
                                }),
                        this
                    );
                },
                carouselNavigate: function () {
                    var t = this.options.wrapper,
                        i = t.data("owl.carousel");
                    return (
                        e("[data-carousel-navigate]").get(0) &&
                            (e(
                                '[data-carousel-navigate-id="#' +
                                    t.attr("id") +
                                    '"]'
                            ).each(function () {
                                var t = e(this),
                                    o = e(t.data("carousel-navigate-id")).get(
                                        0
                                    ),
                                    n = t.data("carousel-navigate-to");
                                o &&
                                    t.on("click", function () {
                                        i.to(parseInt(n) - 1);
                                    });
                            }),
                            t.on("change.owl.carousel", function () {
                                e(
                                    '[data-carousel-navigate-id="#' +
                                        t.attr("id") +
                                        '"]'
                                ).removeClass("active");
                            }),
                            t.on("changed.owl.carousel", function (i) {
                                e(
                                    '[data-carousel-navigate-id="#' +
                                        t.attr("id") +
                                        '"][data-carousel-navigate-to="' +
                                        (i.item.index + 1) +
                                        '"]'
                                ).addClass("active");
                            })),
                        this
                    );
                },
            }),
            e.extend(t, { PluginCarousel: i }),
            (e.fn.themePluginCarousel = function (t) {
                return this.map(function () {
                    var o = e(this);
                    return o.data("__carousel")
                        ? o.data("__carousel")
                        : new i(o, t);
                });
            });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        t = t || {};
        var i = function (t, e) {
            return this.initialize(t, e);
        };
        (i.defaults = {
            accX: 0,
            accY: -150,
            delay: 1,
            barColor: "#0088CC",
            trackColor: "#f2f2f2",
            scaleColor: !1,
            scaleLength: 5,
            lineCap: "round",
            lineWidth: 13,
            size: 175,
            rotate: 0,
            animate: { duration: 2500, enabled: !0 },
        }),
            (i.prototype = {
                initialize: function (t, e) {
                    return t.data("__chartCircular")
                        ? this
                        : ((this.$el = t),
                          this.setData().setOptions(e).build(),
                          this);
                },
                setData: function () {
                    return this.$el.data("__chartCircular", this), this;
                },
                setOptions: function (t) {
                    return (
                        (this.options = e.extend(!0, {}, i.defaults, t, {
                            wrapper: this.$el,
                        })),
                        this
                    );
                },
                build: function () {
                    if (!e.isFunction(e.fn.easyPieChart)) return this;
                    var t = this.options.wrapper,
                        i = t.attr("data-percent") ? t.attr("data-percent") : 0,
                        o = t.find(".percent");
                    return (
                        e.extend(!0, this.options, {
                            onStep: function (t, e, i) {
                                o.html(parseInt(i));
                            },
                        }),
                        t.attr("data-percent", 0),
                        t.easyPieChart(this.options),
                        setTimeout(function () {
                            t.data("easyPieChart").update(i),
                                t.attr("data-percent", i);
                        }, this.options.delay),
                        this
                    );
                },
            }),
            e.extend(t, { PluginChartCircular: i }),
            (e.fn.themePluginChartCircular = function (t) {
                return this.map(function () {
                    var o = e(this);
                    return o.data("__chartCircular")
                        ? o.data("__chartCircular")
                        : new i(o, t);
                });
            });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        t = t || {};
        var i = function (t, e) {
            return this.initialize(t, e);
        };
        (i.defaults = {
            date: "2030/06/10 12:00:00",
            textDay: "DAY",
            textHour: "HRS",
            textMin: "MIN",
            textSec: "SEC",
            uppercase: !0,
            numberClass: "",
            wrapperClass: "",
            insertHTMLbefore: "",
            insertHTMLafter: "",
        }),
            (i.prototype = {
                initialize: function (t, e) {
                    return t.data("__countdown")
                        ? this
                        : ((this.$el = t),
                          this.setData().setOptions(e).build(),
                          this);
                },
                setData: function () {
                    return this.$el.data("__countdown", this), this;
                },
                setOptions: function (t) {
                    return (
                        (this.options = e.extend(!0, {}, i.defaults, t, {
                            wrapper: this.$el,
                        })),
                        this
                    );
                },
                build: function () {
                    if (!e.isFunction(e.fn.countTo)) return this;
                    var t = this,
                        i = this.options.wrapper,
                        o = t.options.numberClass
                            ? " " + t.options.numberClass
                            : "",
                        n = t.options.wrapperClass
                            ? " " + t.options.wrapperClass
                            : "";
                    return (
                        t.options.uppercase
                            ? i
                                  .countdown(t.options.date)
                                  .on("update.countdown", function (i) {
                                      e(this).html(
                                          i.strftime(
                                              t.options.insertHTMLbefore +
                                                  '<span class="days' +
                                                  n +
                                                  '"><span class="' +
                                                  o +
                                                  '">%D</span> ' +
                                                  t.options.textDay +
                                                  '<div class="d-inline text-uppercase">%!d</div></span> <span class="hours' +
                                                  n +
                                                  '"><span class="' +
                                                  o +
                                                  '">%H</span> ' +
                                                  t.options.textHour +
                                                  '</span> <span class="minutes' +
                                                  n +
                                                  '"><span class="' +
                                                  o +
                                                  '">%M</span> ' +
                                                  t.options.textMin +
                                                  '</span> <span class="seconds' +
                                                  n +
                                                  '"><span class="' +
                                                  o +
                                                  '">%S</span> ' +
                                                  t.options.textSec +
                                                  "</span> " +
                                                  t.options.insertHTMLafter
                                          )
                                      );
                                  })
                            : i
                                  .countdown(t.options.date)
                                  .on("update.countdown", function (i) {
                                      e(this).html(
                                          i.strftime(
                                              t.options.insertHTMLbefore +
                                                  '<span class="days' +
                                                  n +
                                                  '"><span class="' +
                                                  o +
                                                  '">%D</span> ' +
                                                  t.options.textDay +
                                                  '%!d</span> <span class="hours' +
                                                  n +
                                                  '"><span class="' +
                                                  o +
                                                  '">%H</span> ' +
                                                  t.options.textHour +
                                                  '</span> <span class="minutes' +
                                                  n +
                                                  '"><span class="' +
                                                  o +
                                                  '">%M</span> ' +
                                                  t.options.textMin +
                                                  '</span> <span class="seconds' +
                                                  n +
                                                  '"><span class="' +
                                                  o +
                                                  '">%S</span> ' +
                                                  t.options.textSec +
                                                  "</span> " +
                                                  t.options.insertHTMLafter
                                          )
                                      );
                                  }),
                        this
                    );
                },
            }),
            e.extend(t, { PluginCountdown: i }),
            (e.fn.themePluginCountdown = function (t) {
                return this.map(function () {
                    var o = e(this);
                    return o.data("__countdown")
                        ? o.data("__countdown")
                        : new i(o, t);
                });
            });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        t = t || {};
        var i = function (t, e) {
            return this.initialize(t, e);
        };
        (i.defaulst = {
            accX: 0,
            accY: 0,
            appendWrapper: !1,
            prependWrapper: !1,
            speed: 3e3,
            refreshInterval: 100,
            decimals: 0,
            onUpdate: null,
            onComplete: null,
        }),
            (i.prototype = {
                initialize: function (t, e) {
                    return t.data("__counter")
                        ? this
                        : ((this.$el = t),
                          this.setData().setOptions(e).build(),
                          this);
                },
                setData: function () {
                    return this.$el.data("__counter", this), this;
                },
                setOptions: function (t) {
                    return (
                        (this.options = e.extend(!0, {}, i.defaults, t, {
                            wrapper: this.$el,
                        })),
                        this
                    );
                },
                build: function () {
                    if (!e.isFunction(e.fn.countTo)) return this;
                    var t = this,
                        i = this.options.wrapper;
                    return (
                        e.extend(t.options, {
                            onComplete: function () {
                                if (i.data("append"))
                                    if (t.options.appendWrapper) {
                                        var o = e(t.options.appendWrapper);
                                        o.append(i.data("append")),
                                            i.html(i.html() + o[0].outerHTML);
                                    } else i.html(i.html() + i.data("append"));
                                if (i.data("prepend"))
                                    if (t.options.prependWrapper) {
                                        var n = e(t.options.prependWrapper);
                                        n.append(i.data("prepend")),
                                            i.html(i.html() + n[0].outerHTML);
                                    } else i.html(i.data("prepend") + i.html());
                            },
                        }),
                        i.countTo(t.options),
                        this
                    );
                },
            }),
            e.extend(t, { PluginCounter: i }),
            (e.fn.themePluginCounter = function (t) {
                return this.map(function () {
                    var o = e(this);
                    return o.data("__counter")
                        ? o.data("__counter")
                        : new i(o, t);
                });
            });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        t = t || {};
        var i = function (t, e) {
            return this.initialize(t, e);
        };
        (i.defaulst = {}),
            (i.prototype = {
                initialize: function (t, e) {
                    return t.data("__cursorEffect")
                        ? this
                        : ((this.$el = t),
                          this.setData().setOptions(e).build().events(),
                          this);
                },
                setData: function () {
                    return this.$el.data("__cursorEffect", this), this;
                },
                setOptions: function (t) {
                    return (
                        (this.options = e.extend(!0, {}, i.defaults, t, {
                            wrapper: this.$el,
                        })),
                        this
                    );
                },
                build: function () {
                    var t = this;
                    (t.clientX = -100),
                        (t.clientY = -100),
                        t.options.hideMouseCursor &&
                            t.$el.addClass("hide-mouse-cursor");
                    var e = document.createElement("DIV");
                    e.className = "cursor-outer";
                    var i = document.createElement("DIV");
                    if (
                        ((i.className = "cursor-inner"),
                        t.options.cursorOuterColor &&
                            (e.style =
                                "border-color: " +
                                t.options.cursorOuterColor +
                                ";"),
                        t.options.cursorInnerColor &&
                            (i.style =
                                "background-color: " +
                                t.options.cursorInnerColor +
                                ";"),
                        t.options.size)
                    )
                        switch (t.options.size) {
                            case "small":
                                t.$el.addClass("cursor-effect-size-small");
                                break;
                            case "big":
                                t.$el.addClass("cursor-effect-size-big");
                        }
                    t.options.style && t.$el.addClass(t.options.style),
                        document.body.prepend(e),
                        document.body.prepend(i);
                    var o = function () {
                        (e.style.transform =
                            "translate(" +
                            t.clientX +
                            "px, " +
                            t.clientY +
                            "px)"),
                            (i.style.transform =
                                "translate(" +
                                t.clientX +
                                "px, " +
                                t.clientY +
                                "px)"),
                            (t.loopInside = requestAnimationFrame(o));
                    };
                    return (t.loop = requestAnimationFrame(o)), this;
                },
                events: function () {
                    var t = this,
                        i = e(".cursor-outer"),
                        o = e(".cursor-inner"),
                        n = i[0].getBoundingClientRect(),
                        s = i.css("border-radius");
                    return (
                        document.addEventListener("mousemove", function (e) {
                            t.isStuck ||
                                ((t.clientX = e.clientX - 20),
                                (t.clientY = e.clientY - 20)),
                                i.removeClass("opacity-0");
                        }),
                        (t.isStuck = !1),
                        e("[data-cursor-effect-hover]").on(
                            "mouseenter",
                            function (n) {
                                i.addClass("cursor-outer-hover"),
                                    o.addClass("cursor-inner-hover");
                                var s = e(this).data(
                                    "cursor-effect-hover-color"
                                );
                                switch (
                                    (i.addClass("cursor-color-" + s),
                                    o.addClass("cursor-color-" + s),
                                    e(this).data("cursor-effect-hover"))
                                ) {
                                    case "fit":
                                        var a =
                                            e(this)[0].getBoundingClientRect();
                                        (t.clientX = a.x),
                                            (t.clientY = a.y),
                                            i
                                                .css({
                                                    width: a.width,
                                                    height: a.height,
                                                    "border-radius":
                                                        e(this).css(
                                                            "border-radius"
                                                        ),
                                                })
                                                .addClass("cursor-outer-fit"),
                                            o.addClass("opacity-0"),
                                            (t.isStuck = !0);
                                        break;
                                    case "plus":
                                        o.addClass("cursor-inner-plus");
                                }
                            }
                        ),
                        e("[data-cursor-effect-hover]").on(
                            "mouseleave",
                            function () {
                                i.removeClass("cursor-outer-hover"),
                                    o.removeClass("cursor-inner-hover");
                                var a = e(this).data(
                                    "cursor-effect-hover-color"
                                );
                                switch (
                                    (i.removeClass("cursor-color-" + a),
                                    o.removeClass("cursor-color-" + a),
                                    e(this).data("cursor-effect-hover"))
                                ) {
                                    case "fit":
                                        i
                                            .css({
                                                width: n.width,
                                                height: n.height,
                                                "border-radius": s,
                                            })
                                            .removeClass("cursor-outer-fit"),
                                            o.removeClass("opacity-0"),
                                            (t.isStuck = !1);
                                        break;
                                    case "plus":
                                        o.removeClass("cursor-inner-plus");
                                }
                            }
                        ),
                        e(window).on("scroll", function () {
                            i.hasClass("cursor-outer-fit") &&
                                i
                                    .addClass("opacity-0")
                                    .removeClass("cursor-outer-fit");
                        }),
                        this
                    );
                },
                destroy: function () {
                    this.$el.removeClass(
                        "hide-mouse-cursor cursor-effect-size-small cursor-effect-size-big cursor-effect-style-square"
                    ),
                        cancelAnimationFrame(this.loop),
                        cancelAnimationFrame(this.loopInside),
                        document.querySelector(".cursor-outer").remove(),
                        document.querySelector(".cursor-inner").remove(),
                        this.$el.removeData("__cursorEffect", this);
                },
            }),
            e.extend(t, { PluginCursorEffect: i }),
            (e.fn.themePluginCursorEffect = function (t) {
                return this.map(function () {
                    var o = e(this);
                    return o.data("__cursorEffect")
                        ? o.data("__cursorEffect")
                        : new i(o, t);
                });
            });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        "use strict";
        t = t || {};
        var i = function (t, e) {
            return this.initialize(t, e);
        };
        (i.defaults = {
            startPos: "top",
            speed: 3,
            horizontal: !1,
            isInsideSVG: !1,
            transition: !1,
            transitionDelay: 0,
            transitionDuration: 500,
        }),
            (i.prototype = {
                initialize: function (t, e) {
                    return t.data("__floatElement")
                        ? this
                        : ((this.$el = t),
                          this.setData().setOptions(e).build(),
                          this);
                },
                setData: function () {
                    return this.$el.data("__floatElement", this), this;
                },
                setOptions: function (t) {
                    return (
                        (this.options = e.extend(!0, {}, i.defaults, t, {
                            wrapper: this.$el,
                        })),
                        this
                    );
                },
                build: function () {
                    var i,
                        o = this,
                        n = this.options.wrapper,
                        s = e(window);
                    return n.data("plugin-float-element-svg")
                        ? (n
                              .find("[data-plugin-float-element]")
                              .each(function () {
                                  var i,
                                      o = e(this),
                                      n = t.fn.getOptions(
                                          o.data("plugin-options")
                                      );
                                  n && (i = n), o.themePluginFloatElement(i);
                              }),
                          this)
                        : (o.options.style && n.attr("style", o.options.style),
                          s.width() > 767 &&
                              ("none" == o.options.startPos
                                  ? (i = "")
                                  : "top" == o.options.startPos
                                  ? (n.css({ top: 0 }), (i = ""))
                                  : (n.css({ bottom: 0 }), (i = "-")),
                              o.options.transition &&
                                  n.css({
                                      transition:
                                          "ease-out transform " +
                                          o.options.transitionDuration +
                                          "ms " +
                                          o.options.transitionDelay +
                                          "ms",
                                  }),
                              o.movement(i),
                              s.on("scroll", function () {
                                  o.movement(i);
                              })),
                          this);
                },
                movement: function (t) {
                    var i = this.options.wrapper,
                        o = e(window),
                        n = o.scrollTop(),
                        s = i.offset().top - n,
                        a =
                            ((this.options.isInsideSVG ? 2 : 100) * s) /
                            o.height();
                    i.visible(!0) &&
                        (this.options.horizontal
                            ? i.css({
                                  transform:
                                      "translate3d(" +
                                      t +
                                      a / this.options.speed +
                                      "%, " +
                                      t +
                                      a / this.options.speed +
                                      "%, 0)",
                              })
                            : i.css({
                                  transform:
                                      "translate3d(0, " +
                                      t +
                                      a / this.options.speed +
                                      "%, 0)",
                              }));
                },
            }),
            e.extend(t, { PluginFloatElement: i }),
            (e.fn.themePluginFloatElement = function (t) {
                return this.map(function () {
                    var o = e(this);
                    return o.data("__floatElement")
                        ? o.data("__floatElement")
                        : new i(o, t);
                });
            });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        t = t || {};
        var i = function (t, e) {
            return this.initialize(t, e);
        };
        (i.defaults = { cookieBarShowDelay: 3e3 }),
            (i.prototype = {
                initialize: function (t, e) {
                    return (
                        (this.$el = t),
                        this.setData().setOptions(e).build().events(),
                        this
                    );
                },
                setData: function () {
                    return this.$el.data("__gdpr", this), this;
                },
                setOptions: function (t) {
                    return (
                        (this.options = e.extend(!0, {}, i.defaults, t, {
                            wrapper: this.$el,
                        })),
                        this
                    );
                },
                build: function () {
                    var t = this;
                    if (
                        (e.cookie("porto-privacy-bar") ||
                            setTimeout(function () {
                                t.options.wrapper.addClass("show");
                            }, t.options.cookieBarShowDelay),
                        e.cookie("porto-gdpr-preferences"))
                    )
                        for (
                            var i = e
                                    .cookie("porto-gdpr-preferences")
                                    .split(","),
                                o = 0;
                            o < i.length;
                            o++
                        )
                            e('input[value="' + i[o] + '"]').get(0) &&
                                e('input[value="' + i[o] + '"]').is(
                                    ":checkbox"
                                ) &&
                                e('input[value="' + i[o] + '"]').prop(
                                    "checked",
                                    !0
                                );
                    return this;
                },
                events: function () {
                    var t = this;
                    return (
                        t.options.wrapper
                            .find(".gdpr-agree-trigger")
                            .on("click", function (i) {
                                i.preventDefault(),
                                    e.cookie("porto-privacy-bar", !0),
                                    t.removeCookieBar();
                            }),
                        t.options.wrapper
                            .find(".gdpr-preferences-trigger")
                            .on("click", function (t) {
                                t.preventDefault(),
                                    e(".gdpr-preferences-popup").toggleClass(
                                        "show"
                                    );
                            }),
                        e(".gdpr-close-popup").on("click", function (t) {
                            t.preventDefault(),
                                e(".gdpr-preferences-popup").toggleClass(
                                    "show"
                                );
                        }),
                        e(".gdpr-preferences-popup").on("click", function (t) {
                            e(t.target)
                                .closest(".gdpr-preferences-popup-content")
                                .get(0) ||
                                e(".gdpr-preferences-popup").toggleClass(
                                    "show"
                                );
                        }),
                        e(".gdpr-preferences-form").on("submit", function (i) {
                            i.preventDefault();
                            var o = e(this);
                            o.find('button[type="submit"]').text("SAVING...");
                            var n = [];
                            o.find(".gdpr-input").each(function () {
                                ((e(this).is(":checkbox") &&
                                    e(this).is(":checked")) ||
                                    e(this).is(":hidden")) &&
                                    n.push(e(this).val());
                            }),
                                e.cookie("porto-privacy-bar", !0),
                                e.cookie("porto-gdpr-preferences", n),
                                setTimeout(function () {
                                    o
                                        .find('button[type="submit"]')
                                        .text("SAVED!")
                                        .removeClass("btn-primary")
                                        .addClass("btn-success"),
                                        setTimeout(function () {
                                            e(
                                                ".gdpr-preferences-popup"
                                            ).toggleClass("show"),
                                                t.removeCookieBar(),
                                                o
                                                    .find(
                                                        'button[type="submit"]'
                                                    )
                                                    .text("SAVE PREFERENCES")
                                                    .removeClass("btn-success")
                                                    .addClass("btn-primary"),
                                                location.reload();
                                        }, 500);
                                }, 1e3);
                        }),
                        e(".gdpr-reset-cookies").on("click", function (e) {
                            e.preventDefault(),
                                t.clearCookies(),
                                location.reload();
                        }),
                        e(".gdpr-open-preferences").on("click", function (t) {
                            t.preventDefault(),
                                e(".gdpr-preferences-popup").toggleClass(
                                    "show"
                                );
                        }),
                        this
                    );
                },
                removeCookieBar: function () {
                    var t = this;
                    return (
                        t.options.wrapper
                            .addClass("removing")
                            .on("transitionend", function () {
                                setTimeout(function () {
                                    t.options.wrapper.removeClass(
                                        "show removing"
                                    );
                                }, 500);
                            }),
                        this
                    );
                },
                clearCookies: function () {
                    return (
                        e.removeCookie("porto-privacy-bar"),
                        e.removeCookie("porto-gdpr-preferences"),
                        this
                    );
                },
            }),
            e.extend(t, { PluginGDPR: i }),
            (e.fn.themePluginGDPR = function (t) {
                return this.map(function () {
                    var o = e(this);
                    return o.data("__gdpr") ? o.data("__gdpr") : new i(o, t);
                });
            });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        t = t || {};
        var i = function (t, e) {
            return this.initialize(t, e);
        };
        (i.defaults = {}),
            (i.prototype = {
                initialize: function (t, e) {
                    return (
                        (this.$el = t),
                        this.setData().setOptions(e).build(),
                        this
                    );
                },
                setData: function () {
                    return this.$el.data("__gdprwrapper", this), this;
                },
                setOptions: function (t) {
                    return (
                        (this.options = e.extend(!0, {}, i.defaults, t, {
                            wrapper: this.$el,
                        })),
                        this
                    );
                },
                build: function () {
                    var t = this;
                    return (
                        e.cookie("porto-gdpr-preferences") &&
                            -1 !=
                                e
                                    .cookie("porto-gdpr-preferences")
                                    .indexOf(t.options.checkCookie) &&
                            e.ajax({
                                url: t.options.ajaxURL,
                                cache: !1,
                                complete: function (e) {
                                    setTimeout(function () {
                                        t.options.wrapper.html(e.responseText);
                                    }, 1e3);
                                },
                            }),
                        this
                    );
                },
            }),
            e.extend(t, { PluginGDPRWrapper: i }),
            (e.fn.themePluginGDPRWrapper = function (t) {
                return this.map(function () {
                    var o = e(this);
                    return o.data("__gdprwrapper")
                        ? o.data("__gdprwrapper")
                        : new i(o, t);
                });
            });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        "use strict";
        t = t || {};
        var i = function (t, e) {
            return this.initialize(t, e);
        };
        (i.defaults = {
            color: "#2388ED",
            animated: !1,
            delay: 300,
            onlySVG: !1,
            removeClassAfterInit: !1,
            fadeIn: !0,
            accY: 0,
        }),
            (i.prototype = {
                initialize: function (t, e) {
                    return t.data("__icon")
                        ? this
                        : ((this.$el = t),
                          this.setData().setOptions(e).build(),
                          this);
                },
                setData: function () {
                    return this.$el.data("__icon", this), this;
                },
                setOptions: function (t) {
                    return (
                        (this.options = e.extend(!0, {}, i.defaults, t, {
                            wrapper: this.$el,
                        })),
                        this
                    );
                },
                build: function () {
                    var t = this,
                        i = this.options.wrapper,
                        o = t.options.color,
                        n = i.offset().top,
                        s = e(window).scrollTop(),
                        a =
                            t.options.animated && !t.options.strokeBased
                                ? 200
                                : 100;
                    if ("file:" === window.location.protocol)
                        return (
                            i.css({ opacity: 1, width: i.attr("width") }),
                            t.options.extraClass &&
                                i.addClass(t.options.extraClass),
                            t.options.extraClass.indexOf("-color-light") > 0 &&
                                i.css({ filter: "invert(1)" }),
                            void e(window).trigger("icon.rendered")
                        );
                    t.options.duration && (a = t.options.duration);
                    e.get({
                        url: i.attr("src"),
                        success: function (r, l, d) {
                            var c = t.options.fadeIn
                                    ? e(
                                          '<div class="animated-icon animated fadeIn">' +
                                              d.responseText +
                                              "</div>"
                                      )
                                    : e(
                                          '<div class="animated-icon animated">' +
                                              d.responseText +
                                              "</div>"
                                      ),
                                p =
                                    "icon_" +
                                    Math.floor(26 * Math.random()) +
                                    Date.now();
                            if (
                                (c.find("svg").attr("id", p),
                                c.find("svg").attr(
                                    "data-filename",
                                    i
                                        .attr("src")
                                        .split(/(\\|\/)/g)
                                        .pop()
                                ),
                                i.attr("width") &&
                                    c
                                        .find("svg")
                                        .attr("width", i.attr("width"))
                                        .attr("height", i.attr("width")),
                                i.attr("height") &&
                                    c
                                        .find("svg")
                                        .attr("height", i.attr("height")),
                                t.options.svgViewBox &&
                                    c
                                        .find("svg")
                                        .attr("viewBox", t.options.svgViewBox),
                                i.replaceWith(c),
                                t.options.extraClass &&
                                    c.addClass(t.options.extraClass),
                                t.options.removeClassAfterInit &&
                                    c.removeClass(
                                        t.options.removeClassAfterInit
                                    ),
                                t.options.onlySVG)
                            )
                                return e(window).trigger("icon.rendered"), this;
                            i = c;
                            var h = new Vivus(p, {
                                start: "manual",
                                type: "sync",
                                selfDestroy: !0,
                                duration: a,
                                onReady: function (i) {
                                    var n = document.createElementNS(
                                            "http://www.w3.org/2000/svg",
                                            "style"
                                        ),
                                        s = "";
                                    ((t.options.animated &&
                                        !t.options.strokeBased) ||
                                        (!t.options.animated &&
                                            o &&
                                            !t.options.strokeBased)) &&
                                        ((s =
                                            "stroke-width: 0.1px; fill-opacity: 0; transition: ease fill-opacity 300ms;"),
                                        (n.textContent =
                                            "#" +
                                            p +
                                            " path, #" +
                                            p +
                                            " line, #" +
                                            p +
                                            " rect, #" +
                                            p +
                                            " circle, #" +
                                            p +
                                            " polyline { fill: " +
                                            o +
                                            "; stroke: " +
                                            o +
                                            "; " +
                                            s +
                                            (t.options.svgStyle
                                                ? t.options.svgStyle
                                                : "") +
                                            " } .finished path { fill-opacity: 1; }"),
                                        i.el.appendChild(n)),
                                        ((t.options.animated &&
                                            t.options.strokeBased) ||
                                            (!t.options.animated &&
                                                o &&
                                                t.options.strokeBased)) &&
                                            ((n.textContent =
                                                "#" +
                                                p +
                                                " path, #" +
                                                p +
                                                " line, #" +
                                                p +
                                                " rect, #" +
                                                p +
                                                " circle, #" +
                                                p +
                                                " polyline { stroke: " +
                                                o +
                                                "; " +
                                                (t.options.svgStyle
                                                    ? t.options.svgStyle
                                                    : "") +
                                                "}"),
                                            i.el.appendChild(n)),
                                        e.event.trigger(
                                            "theme.plugin.icon.svg.ready"
                                        );
                                },
                            });
                            t.options.animated ||
                                (setTimeout(function () {
                                    h.finish();
                                }, 10),
                                i.css({ opacity: 1 })),
                                t.options.animated && e(window).width() > 767
                                    ? (i.visible(!0)
                                          ? t.startIconAnimation(h, i)
                                          : n < s && t.startIconAnimation(h, i),
                                      e(window).on("scroll", function () {
                                          i.visible(!0) &&
                                              t.startIconAnimation(h, i);
                                      }))
                                    : (i.css({ opacity: 1 }),
                                      h.finish(),
                                      e(window).on(
                                          "theme.plugin.icon.svg.ready",
                                          function () {
                                              setTimeout(function () {
                                                  h.el.setAttribute(
                                                      "class",
                                                      "finished"
                                                  ),
                                                      h.finish();
                                              }, 300);
                                          }
                                      )),
                                e(window).trigger("icon.rendered");
                        },
                    });
                    return this;
                },
                startIconAnimation: function (t, i) {
                    e({ to: 0 }).animate(
                        { to: 1 },
                        this.options.strokeBased
                            ? this.options.delay
                            : this.options.delay + 300,
                        function () {
                            i.css({ opacity: 1 });
                        }
                    ),
                        e({ to: 0 }).animate(
                            { to: 1 },
                            this.options.delay,
                            function () {
                                t.play(1),
                                    setTimeout(function () {
                                        t.el.setAttribute("class", "finished");
                                    }, 5 * t.duration);
                            }
                        );
                },
            }),
            e.extend(t, { PluginIcon: i }),
            (e.fn.themePluginIcon = function (t) {
                return this.map(function () {
                    var o = e(this);
                    return o.data("__icon") ? o.data("__icon") : new i(o, t);
                });
            });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        t = t || {};
        var i = function (t, e) {
            return this.initialize(t, e);
        };
        (i.defaults = {
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            gallery: {
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%",
            },
            image: {
                tError: '<a href="%url%">The image</a> could not be loaded.',
            },
            ajax: {
                tError: '<a href="%url%">The content</a> could not be loaded.',
            },
            callbacks: {
                open: function () {
                    e("html").addClass("lightbox-opened");
                },
                close: function () {
                    e("html").removeClass("lightbox-opened");
                },
            },
        }),
            (i.prototype = {
                initialize: function (t, e) {
                    return t.data("__lightbox")
                        ? this
                        : ((this.$el = t),
                          this.setData().setOptions(e).build(),
                          this);
                },
                setData: function () {
                    return this.$el.data("__lightbox", this), this;
                },
                setOptions: function (t) {
                    return (
                        (this.options = e.extend(!0, {}, i.defaults, t, {
                            wrapper: this.$el,
                        })),
                        this
                    );
                },
                build: function () {
                    return e.isFunction(e.fn.magnificPopup)
                        ? (this.options.wrapper.magnificPopup(this.options),
                          this)
                        : this;
                },
            }),
            e.extend(t, { PluginLightbox: i }),
            (e.fn.themePluginLightbox = function (t) {
                return this.map(function () {
                    var o = e(this);
                    return o.data("__lightbox")
                        ? o.data("__lightbox")
                        : new i(o, t);
                });
            });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        "use strict";
        t = t || {};
        var i = [
                '<div class="loading-overlay">',
                '<div class="bounce-loader"><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>',
                "</div>",
            ].join(""),
            o = [
                '<div class="loading-overlay loading-overlay-percentage">',
                '<div class="page-loader-progress-wrapper"><span class="page-loader-progress">0</span><span class="page-loader-progress-symbol">%</span></div>',
                "</div>",
            ].join(""),
            n = [
                '<div class="loading-overlay">',
                '<div class="bounce-loader"><div class="cssload-thecube"><div class="cssload-cube cssload-c1"></div><div class="cssload-cube cssload-c2"></div><div class="cssload-cube cssload-c4"></div><div class="cssload-cube cssload-c3"></div></div></div>',
                "</div>",
            ].join(""),
            s = [
                '<div class="loading-overlay">',
                '<div class="bounce-loader"><span class="cssload-cube-progress"><span class="cssload-cube-progress-inner"></span></span></div>',
                "</div>",
            ].join(""),
            a = [
                '<div class="loading-overlay">',
                '<div class="bounce-loader"><div class="cssload-float-rings-loader"><div class="cssload-float-rings-inner cssload-one"></div><div class="cssload-float-rings-inner cssload-two"></div><div class="cssload-float-rings-inner cssload-three"></div></div></div>',
                "</div>",
            ].join(""),
            r = [
                '<div class="loading-overlay">',
                '<div class="bounce-loader"><div class="cssload-float-bars-container"><ul class="cssload-float-bars-flex-container"><li><span class="cssload-float-bars-loading"></span></li></div></div></div>',
                "</div>",
            ].join(""),
            l = [
                '<div class="loading-overlay">',
                '<div class="bounce-loader"><div class="cssload-speeding-wheel-container"><div class="cssload-speeding-wheel"></div></div></div>',
                "</div>",
            ].join(""),
            d = [
                '<div class="loading-overlay">',
                '<div class="bounce-loader"><div class="cssload-zenith-container"><div class="cssload-zenith"></div></div></div>',
                "</div>",
            ].join(""),
            c = [
                '<div class="loading-overlay">',
                '<div class="bounce-loader"><div class="cssload-spinning-square-loading"></div></div>',
                "</div>",
            ].join(""),
            p = [
                '<div class="loading-overlay">',
                '<div class="bounce-loader"><div class="wrapper-pulse"><div class="cssload-pulse-loader"></div></div></div>',
                "</div>",
            ].join(""),
            h = function (t, e, i) {
                return this.initialize(t, e, i);
            };
        (h.prototype = {
            options: {
                css: {},
                hideDelay: 500,
                progressMinTimeout: 0,
                effect: "default",
            },
            initialize: function (t, e, i) {
                (this.$wrapper = t),
                    this.setVars()
                        .setOptions(e, i)
                        .build()
                        .events()
                        .dynamicShowHideEvents(),
                    this.$wrapper.data("loadingOverlay", this);
            },
            setVars: function () {
                return (
                    (this.$overlay = this.$wrapper.find(".loading-overlay")),
                    (this.pageStatus = null),
                    (this.progress = null),
                    (this.animationInterval = 33),
                    this
                );
            },
            setOptions: function (i, o) {
                return (
                    this.$overlay.get(0) || this.matchProperties(),
                    (this.options = o
                        ? e.extend(!0, {}, this.options, i)
                        : e.extend(
                              !0,
                              {},
                              this.options,
                              i,
                              t.fn.getOptions(
                                  this.$wrapper.data("plugin-options")
                              )
                          )),
                    (this.loaderClass = this.getLoaderClass(
                        this.options.css.backgroundColor
                    )),
                    this
                );
            },
            build: function () {
                var t = this;
                if (!this.$overlay.closest(document.documentElement).get(0)) {
                    if (this.$cachedOverlay)
                        this.$overlay = this.$cachedOverlay.clone();
                    else {
                        switch (t.options.effect) {
                            case "percentageProgress1":
                                this.$overlay = e(o).clone();
                                break;
                            case "percentageProgress2":
                                (this.$overlay = e(o).clone()),
                                    this.$overlay
                                        .addClass(
                                            "loading-overlay-percentage-effect-2"
                                        )
                                        .prepend(
                                            '<div class="loading-overlay-background-layer"></div>'
                                        );
                                break;
                            case "cubes":
                                this.$overlay = e(n).clone();
                                break;
                            case "cubeProgress":
                                this.$overlay = e(s).clone();
                                break;
                            case "floatRings":
                                this.$overlay = e(a).clone();
                                break;
                            case "floatBars":
                                this.$overlay = e(r).clone();
                                break;
                            case "speedingWheel":
                                this.$overlay = e(l).clone();
                                break;
                            case "zenith":
                                this.$overlay = e(d).clone();
                                break;
                            case "spinningSquare":
                                this.$overlay = e(c).clone();
                                break;
                            case "pulse":
                                this.$overlay = e(p).clone();
                                break;
                            case "default":
                            default:
                                this.$overlay = e(i).clone();
                        }
                        this.options.css &&
                            (this.$overlay.css(this.options.css),
                            this.$overlay
                                .find(".loader")
                                .addClass(this.loaderClass));
                    }
                    this.$wrapper.prepend(this.$overlay);
                }
                return (
                    this.$cachedOverlay ||
                        (this.$cachedOverlay = this.$overlay.clone()),
                    ["percentageProgress1", "percentageProgress2"].includes(
                        t.options.effect
                    ) &&
                        (t.updateProgress(),
                        t.options.isDynamicHideShow &&
                            setTimeout(function () {
                                (t.progress = "complete"),
                                    e(".page-loader-progress").text(100),
                                    ["percentageProgress2"].includes(
                                        t.options.effect
                                    ) &&
                                        e(
                                            ".loading-overlay-background-layer"
                                        ).css({ width: "100%" });
                            }, 2800)),
                    this
                );
            },
            events: function () {
                var t = this;
                return (
                    this.options.startShowing && t.show(),
                    (this.$wrapper.is("body") ||
                        this.options.hideOnWindowLoad) &&
                        e(window).on("load error", function () {
                            setTimeout(function () {
                                t.hide();
                            }, t.options.progressMinTimeout);
                        }),
                    this.options.listenOn &&
                        e(this.options.listenOn)
                            .on(
                                "loading-overlay:show beforeSend.ic",
                                function (e) {
                                    e.stopPropagation(), t.show();
                                }
                            )
                            .on(
                                "loading-overlay:hide complete.ic",
                                function (e) {
                                    e.stopPropagation(), t.hide();
                                }
                            ),
                    this.$wrapper
                        .on("loading-overlay:show beforeSend.ic", function (e) {
                            return (
                                e.target === t.$wrapper.get(0) &&
                                (e.stopPropagation(), t.show(), !0)
                            );
                        })
                        .on("loading-overlay:hide complete.ic", function (e) {
                            return (
                                e.target === t.$wrapper.get(0) &&
                                (e.stopPropagation(), t.hide(), !0)
                            );
                        }),
                    ["percentageProgress1", "percentageProgress2"].includes(
                        t.options.effect
                    ) &&
                        e(window).on("load", function () {
                            setTimeout(function () {
                                (t.pageStatus = "complete"),
                                    e(".page-loader-progress").text(100),
                                    ["percentageProgress2"].includes(
                                        t.options.effect
                                    ) &&
                                        e(
                                            ".loading-overlay-background-layer"
                                        ).css({ width: "100%" });
                            }, t.options.progressMinTimeout);
                        }),
                    this
                );
            },
            show: function () {
                this.build(),
                    (this.position = this.$wrapper
                        .css("position")
                        .toLowerCase()),
                    ("relative" == this.position &&
                        "absolute" == this.position &&
                        "fixed" == this.position) ||
                        this.$wrapper.css({ position: "relative" }),
                    this.$wrapper.addClass("loading-overlay-showing");
            },
            hide: function () {
                var t = this;
                setTimeout(function () {
                    t.$wrapper.removeClass("loading-overlay-showing"),
                        ("relative" == this.position &&
                            "absolute" == this.position &&
                            "fixed" == this.position) ||
                            t.$wrapper.css({ position: "" }),
                        e(window).trigger("loading.overlay.ready");
                }, t.options.hideDelay);
            },
            updateProgress: function () {
                var t = this,
                    i = function () {
                        "complete" == t.pageStatus
                            ? (e(".page-loader-progress").text(100),
                              setTimeout(function () {
                                  e(".page-loader-progress").addClass("d-none");
                              }, 700))
                            : (null == t.progress && (t.progress = 1),
                              (t.progress = t.progress + 1),
                              t.progress >= 0 && t.progress <= 30
                                  ? ((t.animationInterval += 1),
                                    e(".page-loader-progress").text(t.progress))
                                  : t.progress > 30 && t.progress <= 60
                                  ? ((t.animationInterval += 2),
                                    e(".page-loader-progress").text(t.progress))
                                  : t.progress > 60 && t.progress <= 80
                                  ? ((t.animationInterval += 40),
                                    e(".page-loader-progress").text(t.progress))
                                  : t.progress > 80 && t.progress <= 90
                                  ? ((t.animationInterval += 80),
                                    e(".page-loader-progress").text(t.progress))
                                  : t.progress > 90 && t.progress <= 95
                                  ? ((t.animationInterval += 150),
                                    e(".page-loader-progress").text(t.progress))
                                  : t.progress > 95 && t.progress <= 99
                                  ? ((t.animationInterval += 400),
                                    e(".page-loader-progress").text(t.progress))
                                  : t.progress >= 100 &&
                                    e(".page-loader-progress").text(99),
                              ["percentageProgress2"].includes(
                                  t.options.effect
                              ) &&
                                  e(".loading-overlay-background-layer").css({
                                      width: t.progress + "%",
                                  }),
                              (self.loopInside = setTimeout(
                                  i,
                                  t.animationInterval
                              )));
                    };
                return i(), this;
            },
            matchProperties: function () {
                var t, i, o;
                for (
                    i = (o = ["backgroundColor", "borderRadius"]).length, t = 0;
                    t < i;
                    t++
                ) {
                    var n = {};
                    (n[o[t]] = this.$wrapper.css(o[t])),
                        e.extend(this.options.css, n);
                }
            },
            getLoaderClass: function (t) {
                if (!t || "transparent" === t || "inherit" === t)
                    return "black";
                var e, i, o, n;
                return (
                    (i = t).indexOf("#") > -1
                        ? (o = i.replace("#", ""))
                        : ((n = i.match(/\d+/g)),
                          (o =
                              ("0" + parseInt(n[0], 10).toString(16)).slice(
                                  -2
                              ) +
                              ("0" + parseInt(n[1], 10).toString(16)).slice(
                                  -2
                              ) +
                              ("0" + parseInt(n[2], 10).toString(16)).slice(
                                  -2
                              ))),
                    3 === o.length && (o += o),
                    (e = o),
                    (299 * parseInt(e.substr(0, 2), 16) +
                        587 * parseInt(e.substr(2, 2), 16) +
                        114 * parseInt(e.substr(4, 2), 16)) /
                        1e3 >=
                    128
                        ? "black"
                        : "white"
                );
            },
            dynamicShowHide: function (t) {
                return (
                    e("body").removeData("loadingOverlay"),
                    e(".loading-overlay").remove(),
                    "" == t
                        ? this
                        : (e("body").loadingOverlay(
                              { effect: t || "pulse", isDynamicHideShow: !0 },
                              !0
                          ),
                          e("body").data("loadingOverlay").show(),
                          setTimeout(function () {
                              e("body").data("loadingOverlay").hide();
                          }, 3e3),
                          this)
                );
            },
            dynamicShowHideEvents: function () {
                var t = this;
                return (
                    e(document)
                        .off("click.loading-overlay-button")
                        .on(
                            "click.loading-overlay-button",
                            ".loading-overlay-button",
                            function (i) {
                                i.preventDefault(),
                                    t.dynamicShowHide(e(this).data("effect"));
                            }
                        ),
                    e(document)
                        .off("change.loading-overlay-select")
                        .on(
                            "change.loading-overlay-select",
                            ".loading-overlay-select",
                            function () {
                                t.dynamicShowHide(e(this).val());
                            }
                        ),
                    this
                );
            },
        }),
            e.extend(t, { LoadingOverlay: h }),
            (e.fn.loadingOverlay = function (t, i) {
                return this.each(function () {
                    var o = e(this),
                        n = o.data("loadingOverlay");
                    if (n) return n;
                    var s = t || o.data("loading-overlay-options") || {};
                    return new h(o, s, i);
                });
            }),
            e("[data-loading-overlay]").loadingOverlay();
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        t = t || {};
        var i = function (t, e) {
            return this.initialize(t, e);
        };
        (i.defaults = {}),
            (i.prototype = {
                initialize: function (t, e) {
                    return t.data("__masonry")
                        ? this
                        : ((this.$el = t),
                          this.setData().setOptions(e).build(),
                          this);
                },
                setData: function () {
                    return this.$el.data("__masonry", this), this;
                },
                setOptions: function (t) {
                    return (
                        (this.options = e.extend(!0, {}, i.defaults, t, {
                            wrapper: this.$el,
                        })),
                        this
                    );
                },
                build: function () {
                    if (!e.isFunction(e.fn.isotope)) return this;
                    var t = this;
                    e(window);
                    if (
                        ((t.$loader = !1),
                        t.options.wrapper.parents(".masonry-loader").get(0) &&
                            ((t.$loader =
                                t.options.wrapper.parents(".masonry-loader")),
                            t.createLoader()),
                        t.options.wrapper.one(
                            "layoutComplete",
                            function (e, i) {
                                t.removeLoader();
                            }
                        ),
                        t.options.wrapper.waitForImages(function () {
                            t.options.wrapper.isotope(t.options);
                        }),
                        e("html").hasClass("ie10") ||
                            e("html").hasClass("ie11"))
                    )
                        parseInt(
                            t.options.wrapper.children().css("padding-left")
                        ),
                            parseInt(
                                t.options.wrapper
                                    .children()
                                    .css("padding-right")
                            );
                    return (
                        e(window).on("resize", function () {
                            setTimeout(function () {
                                t.options.wrapper.isotope("layout");
                            }, 300);
                        }),
                        setTimeout(function () {
                            t.removeLoader();
                        }, 3e3),
                        this
                    );
                },
                createLoader: function () {
                    var t = [
                        '<div class="bounce-loader">',
                        '<div class="bounce1"></div>',
                        '<div class="bounce2"></div>',
                        '<div class="bounce3"></div>',
                        "</div>",
                    ].join("");
                    return this.$loader.append(t), this;
                },
                removeLoader: function () {
                    var t = this;
                    t.$loader &&
                        (t.$loader.removeClass("masonry-loader-showing"),
                        setTimeout(function () {
                            t.$loader.addClass("masonry-loader-loaded");
                        }, 300));
                },
            }),
            e.extend(t, { PluginMasonry: i }),
            (e.fn.themePluginMasonry = function (t) {
                return this.map(function () {
                    var o = e(this);
                    return o.data("__masonry")
                        ? o.data("__masonry")
                        : new i(o, t);
                });
            });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        t = t || {};
        var i = function (t, e) {
            return this.initialize(t, e);
        };
        (i.defaults = {
            byRow: !0,
            property: "height",
            target: null,
            remove: !1,
        }),
            (i.prototype = {
                initialize: function (t, e) {
                    return t.data("__matchHeight")
                        ? this
                        : ((this.$el = t),
                          this.setData().setOptions(e).build(),
                          this);
                },
                setData: function () {
                    return this.$el.data("__matchHeight", this), this;
                },
                setOptions: function (t) {
                    return (
                        (this.options = e.extend(!0, {}, i.defaults, t, {
                            wrapper: this.$el,
                        })),
                        this
                    );
                },
                build: function () {
                    if (!e.isFunction(e.fn.matchHeight)) return this;
                    return this.options.wrapper.matchHeight(this.options), this;
                },
            }),
            e.extend(t, { PluginMatchHeight: i }),
            (e.fn.themePluginMatchHeight = function (t) {
                return this.map(function () {
                    var o = e(this);
                    return o.data("__matchHeight")
                        ? o.data("__matchHeight")
                        : new i(o, t);
                });
            });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        t = t || {};
        var i = function (t, e) {
            return this.initialize(t, e);
        };
        (i.defaults = {
            speed: 1.5,
            horizontalPosition: "50%",
            offset: 0,
            parallaxDirection: "top",
            parallaxHeight: "180%",
            scrollableParallax: !1,
            scrollableParallaxMinWidth: 991,
            startOffset: 7,
            transitionDuration: "200ms",
            cssProperty: "width",
            cssValueStart: 40,
            cssValueEnd: 100,
            cssValueUnit: "vw",
        }),
            (i.prototype = {
                initialize: function (t, e) {
                    return t.data("__parallax")
                        ? this
                        : ((this.$el = t),
                          this.setData().setOptions(e).build(),
                          this);
                },
                setData: function () {
                    return this.$el.data("__parallax", this), this;
                },
                setOptions: function (t) {
                    return (
                        (this.options = e.extend(!0, {}, i.defaults, t, {
                            wrapper: this.$el,
                        })),
                        this
                    );
                },
                build: function () {
                    var t,
                        i,
                        o,
                        n,
                        s = this,
                        a = e(window);
                    if (
                        !(
                            s.options.scrollableParallax &&
                            e(window).width() >
                                s.options.scrollableParallaxMinWidth
                        )
                    ) {
                        (o = s.options.fadeIn
                            ? e(
                                  '<div class="parallax-background fadeIn animated"></div>'
                              )
                            : e('<div class="parallax-background"></div>')).css(
                            {
                                "background-image":
                                    "url(" +
                                    s.options.wrapper.data("image-src") +
                                    ")",
                                "background-size": "cover",
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: s.options.parallaxHeight,
                            }
                        ),
                            s.options.wrapper.prepend(o),
                            s.options.wrapper.css({
                                position: "relative",
                                overflow: "hidden",
                            });
                        var r = function () {
                            a.on("scroll resize", function () {
                                (t = s.options.wrapper.offset()),
                                    (i =
                                        -(a.scrollTop() - (t.top - 100)) /
                                        (s.options.speed + 2)),
                                    (plxPos =
                                        i < 0 ? Math.abs(i) : -Math.abs(i)),
                                    (n = e('html[dir="rtl"]').get(0)
                                        ? " rotateY(180deg)"
                                        : ""),
                                    "bottom" == s.options.parallaxDirection &&
                                        (s.options.offset = 250);
                                var r = plxPos - 50 + s.options.offset;
                                "bottom" == s.options.parallaxDirection &&
                                    (r = r < 0 ? Math.abs(r) : -Math.abs(r)),
                                    o.css({
                                        transform:
                                            "translate3d(0, " +
                                            r +
                                            "px, 0)" +
                                            n,
                                        "background-position-x":
                                            s.options.horizontalPosition,
                                    });
                            }),
                                a.trigger("scroll");
                        };
                        return (
                            e.browser.mobile
                                ? 1 == s.options.enableOnMobile
                                    ? r()
                                    : s.options.wrapper.addClass(
                                          "parallax-disabled"
                                      )
                                : r(),
                            this
                        );
                    }
                    var l = s.options.wrapper.find(
                        ".scrollable-parallax-wrapper"
                    );
                    if (l.get(0)) {
                        var d =
                                e(window).scrollTop() >
                                s.options.wrapper.offset().top +
                                    e(window).outerHeight()
                                    ? s.options.cssValueEnd
                                    : s.options.cssValueStart,
                            c = s.options.cssValueUnit
                                ? s.options.cssValueUnit
                                : "";
                        l.css({
                            "background-image":
                                "url(" +
                                s.options.wrapper.data("image-src") +
                                ")",
                            "background-size": "cover",
                            "background-position": "center",
                            "background-attachment": "fixed",
                            transition:
                                "ease " +
                                s.options.cssProperty +
                                " " +
                                s.options.transitionDuration,
                            width: d + "%",
                        }),
                            e(window).on("scroll", function (t) {
                                if (s.options.wrapper.visible(!0)) {
                                    var i = e(window),
                                        o = i.scrollTop(),
                                        n = s.options.wrapper.offset().top - o,
                                        a = Math.abs(
                                            +(n - i.height()) /
                                                (s.options.startOffset
                                                    ? s.options.startOffset
                                                    : 7)
                                        );
                                    a <= s.options.cssValueEnd &&
                                        d <= s.options.cssValueEnd &&
                                        (d = s.options.cssValueStart + a),
                                        d > s.options.cssValueEnd &&
                                            (d = s.options.cssValueEnd),
                                        d < s.options.cssValueStart &&
                                            (d = s.options.cssValueStart);
                                    var r = {};
                                    (r[s.options.cssProperty] = d + c),
                                        l.css(r);
                                }
                            });
                    }
                },
            }),
            e.extend(t, { PluginParallax: i }),
            (e.fn.themePluginParallax = function (t) {
                return this.map(function () {
                    var o = e(this);
                    return o.data("__parallax")
                        ? o.data("__parallax")
                        : new i(o, t);
                });
            });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        t = t || {};
        var i = function (t, e) {
            return this.initialize(t, e);
        };
        (i.defaults = { accX: 0, accY: -50, delay: 1 }),
            (i.prototype = {
                initialize: function (t, e) {
                    return t.data("__progressBar")
                        ? this
                        : ((this.$el = t),
                          this.setData().setOptions(e).build(),
                          this);
                },
                setData: function () {
                    return this.$el.data("__progressBar", this), this;
                },
                setOptions: function (t) {
                    return (
                        (this.options = e.extend(!0, {}, i.defaults, t, {
                            wrapper: this.$el,
                        })),
                        this
                    );
                },
                build: function () {
                    var t,
                        e = this.options.wrapper;
                    return (
                        (t = e.attr("data-appear-animation-delay")
                            ? e.attr("data-appear-animation-delay")
                            : this.options.delay),
                        e.addClass(e.attr("data-appear-animation")),
                        setTimeout(function () {
                            e.animate(
                                {
                                    width: e.attr(
                                        "data-appear-progress-animation"
                                    ),
                                },
                                1500,
                                "easeOutQuad",
                                function () {
                                    e.find(".progress-bar-tooltip").animate(
                                        { opacity: 1 },
                                        500,
                                        "easeOutQuad"
                                    );
                                }
                            );
                        }, t),
                        this
                    );
                },
            }),
            e.extend(t, { PluginProgressBar: i }),
            (e.fn.themePluginProgressBar = function (t) {
                return this.map(function () {
                    var o = e(this);
                    return o.data("__progressBar")
                        ? o.data("__progressBar")
                        : new i(o, t);
                });
            });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        t = t || {};
        var i = function (t, e) {
            return this.initialize(t, e);
        };
        (i.defaults = {
            minWindowWidth: 0,
            random: !0,
            imagesListURL: null,
            lightboxImagesListURL: null,
            delay: null,
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            stopAtImageIndex: !1,
            stopAfterFewSeconds: !1,
            stopAfterXTimes: !1,
            accY: 0,
        }),
            (i.prototype = {
                initialize: function (t, e) {
                    return (
                        (this.$el = t),
                        (this.st = ""),
                        (this.times = 0),
                        (this.perImageIndex = 0),
                        (!t.is("img") || void 0 !== e.imagesListURL) &&
                            (this.setData().setOptions(e).build(), this)
                    );
                },
                setData: function () {
                    return this.$el.data("__randomimages", this), this;
                },
                setOptions: function (t) {
                    return (
                        (this.options = e.extend(!0, {}, i.defaults, t, {
                            wrapper: this.$el,
                        })),
                        this
                    );
                },
                build: function () {
                    var t = this;
                    return (
                        !(e(window).width() < t.options.minWindowWidth) &&
                        (t.$el.is("img")
                            ? ((t.isInsideLightbox =
                                  !!t.$el.closest(".lightbox").length),
                              t.isInsideLightbox &&
                                  t.options.lightboxImagesListURL &&
                                  t.options.lightboxImagesListURL.push(
                                      t.$el.closest(".lightbox").attr("href")
                                  ),
                              t.options.imagesListURL.push(t.$el.attr("src")),
                              (t.lastIndex =
                                  t.options.imagesListURL.length - 1),
                              0 == t.options.random &&
                                  e(".plugin-random-images").each(function (t) {
                                      t ==
                                          e(".plugin-random-images").length -
                                              1 && e(this).addClass("the-last");
                                  }),
                              setTimeout(
                                  function () {
                                      t.recursiveTimeout(
                                          t.perImageTag,
                                          null == t.options.delay
                                              ? 3e3
                                              : t.options.delay
                                      );
                                  },
                                  null == t.options.delay
                                      ? 300
                                      : t.options.delay / 3
                              ))
                            : setTimeout(
                                  t.recursiveTimeout(
                                      t.perWrapper,
                                      t.options.delay
                                          ? t.options.delay
                                          : getPerWrapperHighDelay(),
                                      !1
                                  ),
                                  300
                              ),
                        t.options.stopAfterFewSeconds &&
                            setTimeout(function () {
                                clearTimeout(t.st);
                            }, t.options.stopAfterFewSeconds),
                        this)
                    );
                },
                perImageTag: function () {
                    var t = this,
                        e = t.options.random
                            ? Math.floor(
                                  Math.random() * t.options.imagesListURL.length
                              )
                            : t.lastIndex;
                    if ("" !== t.lastIndex && t.lastIndex == e)
                        if (t.options.random)
                            for (; e == t.lastIndex; )
                                e = Math.floor(
                                    Math.random() *
                                        t.options.imagesListURL.length
                                );
                        else
                            -1 == (e -= 1) &&
                                (e = t.options.imagesListURL.length - 1);
                    return (
                        t.$el.addClass("animated"),
                        t.$el
                            .removeClass(t.options.animateIn)
                            .addClass(t.options.animateOut),
                        setTimeout(function () {
                            t.$el
                                .attr("src", t.options.imagesListURL[e])
                                .removeClass(t.options.animateOut)
                                .addClass(t.options.animateIn),
                                t.isInsideLightbox &&
                                    t.options.lightboxImagesListURL &&
                                    t.$el
                                        .closest(".lightbox")
                                        .attr(
                                            "href",
                                            t.options.lightboxImagesListURL[e]
                                        );
                        }, 1e3),
                        (t.lastIndex = e),
                        t.times++,
                        (t.perImageIndex = e),
                        this
                    );
                },
                getPerWrapperHighDelay: function () {
                    var t = this.$el,
                        i = 0;
                    return (
                        t.find("img").each(function () {
                            var t = e(this);
                            t.data("rimage-delay") &&
                                parseInt(t.data("rimage-delay")) > i &&
                                (i = parseInt(t.data("rimage-delay")));
                        }),
                        i
                    );
                },
                perWrapper: function () {
                    var t = this,
                        i = t.$el;
                    return (
                        (t.options.imagesListURL = []),
                        i.find("img").each(function () {
                            var i = e(this);
                            t.options.imagesListURL.push(i.attr("src"));
                        }),
                        (t.options.imagesListURL = t.shuffle(
                            t.options.imagesListURL
                        )),
                        i.find("img").each(function (i) {
                            var o = e(this),
                                n = o.data("rimage-animate-in")
                                    ? o.data("rimage-animate-in")
                                    : t.options.animateIn,
                                s = o.data("rimage-animate-out")
                                    ? o.data("rimage-animate-out")
                                    : t.options.animateOut,
                                a = o.data("rimage-delay")
                                    ? o.data("rimage-delay")
                                    : 2e3;
                            o.addClass("animated"),
                                setTimeout(function () {
                                    o.removeClass(n).addClass(s);
                                }, a / 2),
                                setTimeout(function () {
                                    o.attr("src", t.options.imagesListURL[i])
                                        .removeClass(s)
                                        .addClass(n);
                                }, a);
                        }),
                        t.times++,
                        this
                    );
                },
                recursiveTimeout: function (t, i) {
                    var o = this,
                        n = function () {
                            null !== t && t.call(o),
                                (o.st = setTimeout(n, null == i ? 1e3 : i)),
                                0 == o.options.random &&
                                    (o.$el.hasClass("the-last")
                                        ? e(".plugin-random-images").trigger(
                                              "rimages.start"
                                          )
                                        : clearTimeout(o.st)),
                                o.options.stopAtImageIndex &&
                                    parseInt(o.options.stopAtImageIndex) ==
                                        o.perImageIndex &&
                                    clearTimeout(o.st),
                                o.options.stopAfterXTimes == o.times &&
                                    clearTimeout(o.st);
                        };
                    n(),
                        o.$el.on("rimages.start", function () {
                            clearTimeout(o.st),
                                (o.st = setTimeout(n, null == i ? 1e3 : i));
                        });
                },
                shuffle: function (t) {
                    for (var e = t.length - 1; e > 0; e--) {
                        var i = Math.floor(Math.random() * (e + 1)),
                            o = t[e];
                        (t[e] = t[i]), (t[i] = o);
                    }
                    return t;
                },
            }),
            e.extend(t, { PluginRandomImages: i }),
            (e.fn.themePluginRandomImages = function (t) {
                return this.map(function () {
                    var o = e(this);
                    return o.data("__randomimages")
                        ? o.data("__randomimages")
                        : new i(o, t);
                });
            });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        t = t || {};
        var i = function (t, e) {
            return this.initialize(t, e);
        };
        (i.defaults = {
            buttonOpenLabel:
                'Read More <i class="fas fa-chevron-down text-2 ms-1"></i>',
            buttonCloseLabel:
                'Read Less <i class="fas fa-chevron-up text-2 ms-1"></i>',
            enableToggle: !0,
            maxHeight: 110,
            overlayColor: "#FFF",
            overlayHeight: 100,
            startOpened: !1,
            align: "left",
        }),
            (i.prototype = {
                initialize: function (t, e) {
                    return (
                        (this.$el = t),
                        this.setData().setOptions(e).build().events(),
                        this.options.startOpened &&
                            this.options.wrapper
                                .find(".readmore-button-wrapper > a")
                                .trigger("click"),
                        this
                    );
                },
                setData: function () {
                    return this.$el.data("__readmore", this), this;
                },
                setOptions: function (t) {
                    return (
                        (this.options = e.extend(!0, {}, i.defaults, t, {
                            wrapper: this.$el,
                        })),
                        this
                    );
                },
                build: function () {
                    this.options.wrapper.addClass("position-relative"),
                        this.options.wrapper.append(
                            '<div class="readmore-overlay"></div>'
                        );
                    var t =
                        "linear-gradient(180deg, rgba(2, 0, 36, 0) 0%, " +
                        this.options.overlayColor +
                        " 100%)";
                    switch (
                        (e("html").hasClass("safari") &&
                            (t =
                                "-webkit-linear-gradient(top, rgba(2, 0, 36, 0) 0%, " +
                                this.options.overlayColor +
                                " 100%)"),
                        this.options.wrapper
                            .find(".readmore-overlay")
                            .css({
                                background: t,
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                width: "100%",
                                height: this.options.overlayHeight,
                                "z-index": 1,
                            }),
                        this.options.wrapper
                            .find(".readmore-button-wrapper")
                            .removeClass("d-none")
                            .css({
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                width: "100%",
                                "z-index": 2,
                            }),
                        this.options.wrapper
                            .find(".readmore-button-wrapper > a")
                            .html(this.options.buttonOpenLabel),
                        this.options.wrapper.css({
                            height: this.options.maxHeight,
                            "overflow-y": "hidden",
                        }),
                        this.options.align)
                    ) {
                        case "center":
                            this.options.wrapper
                                .find(".readmore-button-wrapper")
                                .addClass("text-center");
                            break;
                        case "right":
                            this.options.wrapper
                                .find(".readmore-button-wrapper")
                                .addClass("text-right");
                            break;
                        case "left":
                        default:
                            this.options.wrapper
                                .find(".readmore-button-wrapper")
                                .addClass("text-left");
                    }
                    return this;
                },
                events: function () {
                    var t = this;
                    return (
                        (t.readMore = function () {
                            t.options.wrapper
                                .find(
                                    ".readmore-button-wrapper > a:not(.readless)"
                                )
                                .on("click", function (i) {
                                    i.preventDefault();
                                    var o = e(this);
                                    setTimeout(function () {
                                        t.options.wrapper.animate(
                                            {
                                                height: t.options.wrapper[0]
                                                    .scrollHeight,
                                            },
                                            function () {
                                                t.options.enableToggle ||
                                                    o.fadeOut(),
                                                    o
                                                        .html(
                                                            t.options
                                                                .buttonCloseLabel
                                                        )
                                                        .addClass("readless")
                                                        .off("click"),
                                                    t.readLess(),
                                                    t.options.wrapper
                                                        .find(
                                                            ".readmore-overlay"
                                                        )
                                                        .fadeOut(),
                                                    t.options.wrapper.css({
                                                        "max-height": "none",
                                                        overflow: "visible",
                                                    }),
                                                    t.options.wrapper
                                                        .find(
                                                            ".readmore-button-wrapper"
                                                        )
                                                        .animate({
                                                            bottom: -20,
                                                        });
                                            }
                                        );
                                    }, 200);
                                });
                        }),
                        (t.readLess = function () {
                            t.options.wrapper
                                .find(".readmore-button-wrapper > a.readless")
                                .on("click", function (i) {
                                    i.preventDefault();
                                    var o = e(this);
                                    t.options.wrapper
                                        .find(".readmore-button-wrapper")
                                        .animate({ bottom: 0 }),
                                        t.options.wrapper
                                            .find(".readmore-overlay")
                                            .fadeIn(),
                                        setTimeout(function () {
                                            t.options.wrapper
                                                .height(
                                                    t.options.wrapper[0]
                                                        .scrollHeight
                                                )
                                                .animate(
                                                    {
                                                        height: t.options
                                                            .maxHeight,
                                                    },
                                                    function () {
                                                        o
                                                            .html(
                                                                t.options
                                                                    .buttonOpenLabel
                                                            )
                                                            .removeClass(
                                                                "readless"
                                                            )
                                                            .off("click"),
                                                            t.readMore(),
                                                            t.options.wrapper.css(
                                                                {
                                                                    overflow:
                                                                        "hidden",
                                                                }
                                                            );
                                                    }
                                                );
                                        }, 200);
                                });
                        }),
                        t.readMore(),
                        this
                    );
                },
            }),
            e.extend(t, { PluginReadMore: i }),
            (e.fn.themePluginReadMore = function (t) {
                return this.map(function () {
                    var o = e(this);
                    return o.data("__readmore")
                        ? o.data("__readmore")
                        : new i(o, t);
                });
            });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        t = t || {};
        var i = function (t, e) {
            return this.initialize(t, e);
        };
        (i.defaults = {
            sliderType: "standard",
            sliderLayout: "fullwidth",
            delay: 9e3,
            gridwidth: 1170,
            gridheight: 500,
            spinner: "spinner3",
            disableProgressBar: "on",
            parallax: { type: "off", bgparallax: "off" },
            navigation: {
                keyboardNavigation: "off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation: "off",
                onHoverStop: "off",
                touch: {
                    touchenabled: "on",
                    swipe_threshold: 75,
                    swipe_min_touches: 1,
                    swipe_direction: "horizontal",
                    drag_block_vertical: !1,
                },
                arrows: {
                    enable: !0,
                    hide_onmobile: !1,
                    hide_under: 0,
                    hide_onleave: !0,
                    hide_delay: 200,
                    hide_delay_mobile: 1200,
                    left: {
                        h_align: "left",
                        v_align: "center",
                        h_offset: 30,
                        v_offset: 0,
                    },
                    right: {
                        h_align: "right",
                        v_align: "center",
                        h_offset: 30,
                        v_offset: 0,
                    },
                },
            },
            addOnTypewriter: { enable: !1 },
            addOnWhiteboard: { enable: !1 },
            whiteboard: {
                movehand: {
                    src: "../vendor/rs-plugin/revolution-addons/whiteboard/assets/images/hand_point_right.png",
                    width: 400,
                    height: 1e3,
                    handtype: "right",
                    transform: { transformX: 50, transformY: 50 },
                    jittering: {
                        distance: "80",
                        distance_horizontal: "100",
                        repeat: "5",
                        offset: "10",
                        offset_horizontal: "0",
                    },
                    rotation: { angle: "10", repeat: "3" },
                },
                writehand: {
                    src: "../vendor/rs-plugin/revolution-addons/whiteboard/assets/images/write_right_angle.png",
                    width: 572,
                    height: 691,
                    handtype: "right",
                    transform: { transformX: 50, transformY: 50 },
                    jittering: {
                        distance: "80",
                        distance_horizontal: "100",
                        repeat: "5",
                        offset: "10",
                        offset_horizontal: "0",
                    },
                    rotation: { angle: "10", repeat: "3" },
                },
            },
            addOnParticles: { enable: !1 },
            particles: {
                startSlide: "first",
                endSlide: "last",
                zIndex: "1",
                particles: {
                    number: { value: 80 },
                    color: { value: "#ffffff" },
                    shape: {
                        type: "circle",
                        stroke: { width: 0, color: "#ffffff", opacity: 1 },
                        image: { src: "" },
                    },
                    opacity: {
                        value: 0.5,
                        random: !0,
                        min: 0.25,
                        anim: {
                            enable: !1,
                            speed: 3,
                            opacity_min: 0,
                            sync: !1,
                        },
                    },
                    size: {
                        value: 2,
                        random: !1,
                        min: 30,
                        anim: { enable: !1, speed: 40, size_min: 1, sync: !1 },
                    },
                    line_linked: {
                        enable: !0,
                        distance: 150,
                        color: "#ffffff",
                        opacity: 0.4,
                        width: 1,
                    },
                    move: {
                        enable: !0,
                        speed: 6,
                        direction: "none",
                        random: !0,
                        min_speed: 6,
                        straight: !1,
                        out_mode: "out",
                    },
                },
                interactivity: {
                    events: {
                        onhover: { enable: !1, mode: "repulse" },
                        onclick: { enable: !1, mode: "repulse" },
                    },
                    modes: {
                        grab: { distance: 400, line_linked: { opacity: 0.5 } },
                        bubble: { distance: 400, size: 40, opacity: 0.4 },
                        repulse: { distance: 200 },
                    },
                },
            },
            addOnCountdown: {
                enable: !1,
                targetdate: new Date().getTime() + 864e6,
                slidechanges: [
                    { days: 0, hours: 0, minutes: 0, seconds: 0, slide: 2 },
                ],
            },
            addOnSlicey: { enable: !1 },
            addOnFilmstrip: { enable: !1 },
            addOnBeforeAfter: {
                enable: !1,
                options: {
                    cursor: "move",
                    carousel: !1,
                    arrowStyles: {
                        leftIcon: "fa-icon-caret-left",
                        rightIcon: "fa-icon-caret-right",
                        topIcon: "fa-icon-caret-up",
                        bottomIcon: "fa-icon-caret-down",
                        size: "35",
                        color: "#ffffff",
                        spacing: "10",
                        bgColor: "transparent",
                        padding: "0",
                        borderRadius: "0",
                    },
                    dividerStyles: {
                        width: "1",
                        color: "rgba(255, 255, 255, 0.5)",
                    },
                },
            },
            addOnPanorama: { enable: !1 },
            addOnRevealer: { enable: !1 },
            revealer: {
                direction: "open_horizontal",
                color: "#ffffff",
                duration: "1500",
                delay: "0",
                easing: "Power2.easeInOut",
                overlay_enabled: !0,
                overlay_color: "#000000",
                overlay_duration: "1500",
                overlay_delay: "0",
                overlay_easing: "Power2.easeInOut",
                spinner: "1",
                spinnerColor: "#006dd2",
                spinnerHtml:
                    "<div class='rsaddon-revealer-spinner rsaddon-revealer-spinner-1'><div class='rsaddon-revealer-1'><span style='background: {{color}}'></span><span style='background: {{color}}'></span><span style='background: {{color}}'></span><span style='background: {{color}}'></span><span style='background: {{color}}'></span><span style='background: {{color}}'></span><span style='background: {{color}}'></span><span style='background: {{color}}'></span><span style='background: {{color}}'></span><span style='background: {{color}}'></span></div></div />",
            },
            addOnDuotone: { enable: !1 },
            addOnBubblemorph: { enable: !1 },
            addOnDistortion: { enable: !1 },
        }),
            (i.prototype = {
                initialize: function (t, e) {
                    return t.data("__revolution")
                        ? this
                        : ((this.$el = t),
                          this.setData().setOptions(e).build().events(),
                          this);
                },
                setData: function () {
                    return this.$el.data("__revolution", this), this;
                },
                setOptions: function (t) {
                    return (
                        (this.options = e.extend(!0, {}, i.defaults, t, {
                            wrapper: this.$el,
                        })),
                        this
                    );
                },
                build: function () {
                    return e.isFunction(e.fn.revolution)
                        ? (1 == this.options.wrapper.find("> ul > li").length &&
                              (this.options.wrapper.addClass(
                                  "slider-single-slide"
                              ),
                              e.extend(this.options.navigation, {
                                  bullets: { enable: !1 },
                              })),
                          "fullscreen" == this.options.sliderLayout &&
                              this.options.wrapper
                                  .closest(".slider-container")
                                  .addClass("fullscreen-slider"),
                          this.options.wrapper.revolution(this.options),
                          this.options.addOnTypewriter.enable &&
                              RsTypewriterAddOn(e, this.options.wrapper),
                          this.options.addOnWhiteboard.enable &&
                              this.options.wrapper.rsWhiteBoard(),
                          this.options.addOnParticles.enable &&
                              RsParticlesAddOn(this.options.wrapper),
                          this.options.addOnCountdown.enable &&
                              tp_countdown(
                                  this.options.wrapper,
                                  this.options.addOnCountdown.targetdate,
                                  this.options.addOnCountdown.slidechanges
                              ),
                          this.options.addOnSlicey.enable &&
                              this.options.wrapper.revSliderSlicey(),
                          this.options.addOnFilmstrip.enable &&
                              RsFilmstripAddOn(
                                  e,
                                  this.options.wrapper,
                                  "../vendor/rs-plugin/revolution-addons/filmstrip/",
                                  !1
                              ),
                          this.options.addOnBeforeAfter.enable &&
                              RevSliderBeforeAfter(
                                  e,
                                  this.options.wrapper,
                                  this.options.addOnBeforeAfter.options
                              ),
                          this.options.addOnPanorama.enable &&
                              RsAddonPanorama(e, this.options.wrapper),
                          this.options.addOnRevealer.enable &&
                              RsRevealerAddOn(
                                  e,
                                  this.options.wrapper,
                                  this.options.revealer.spinnerHtml
                              ),
                          this.options.addOnDuotone.enable &&
                              RsAddonDuotone(
                                  e,
                                  this.options.wrapper,
                                  !0,
                                  "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
                                  "1000"
                              ),
                          this.options.addOnBubblemorph.enable &&
                              BubbleMorphAddOn(e, this.options.wrapper, !1),
                          this.options.addOnDistortion.enable &&
                              RsLiquideffectAddOn(e, this.options.wrapper),
                          this)
                        : this;
                },
                events: function () {
                    return this;
                },
            }),
            e.extend(t, { PluginRevolutionSlider: i }),
            (e.fn.themePluginRevolutionSlider = function (t) {
                return this.map(function () {
                    var o = e(this);
                    return o.data("__revolution")
                        ? o.data("__revolution")
                        : new i(o, t);
                });
            });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        t = t || {};
        var i = function (t, e) {
            return this.initialize(t, e);
        };
        (i.defaults = { target: "#header", debugMode: !1 }),
            (i.prototype = {
                initialize: function (t, e) {
                    return (
                        null != document.querySelector(e.target) &&
                        ((this.$el = t),
                        this.setData().setOptions(e),
                        this.options.debugMode && this.debugMode(),
                        this.build(),
                        this)
                    );
                },
                setData: function () {
                    return this.$el.data("__scrollSpy", this), this;
                },
                setOptions: function (t) {
                    return (
                        (this.options = e.extend(!0, {}, i.defaults, t, {
                            wrapper: this.$el,
                        })),
                        this
                    );
                },
                build: function () {
                    var t =
                            null !=
                                document.querySelector(this.options.target) &&
                            document.querySelector(this.options.target),
                        i =
                            "#header" == t || ".wrapper-spy" == t
                                ? t.querySelectorAll(".header-nav .nav > li a")
                                : t.querySelectorAll(".nav > li a"),
                        o = Object.keys(i).map(function (t, e) {
                            return i[t].hash;
                        });
                    (o = o.filter(function (t) {
                        return "" != t;
                    })),
                        (this.sectionIDs = o);
                    for (var n = 0; n < o.length; n++) {
                        var s = "-20% 0px -80% 0px";
                        if (e(o[n]).data("spy-offset")) {
                            var a = e(o[n]).data("spy-offset"),
                                r = parseInt(a) < 0;
                            s = s
                                .split(" ")
                                .map(function (t, e) {
                                    if (t.indexOf("%") > 0) {
                                        var i = parseInt(t.replace("%", "")),
                                            o = 0;
                                        switch (e) {
                                            case 0:
                                                o = r ? i - a : Math.abs(i) + a;
                                                break;
                                            case 2:
                                                o = r ? i + a : Math.abs(i) - a;
                                        }
                                        return (
                                            r
                                                ? (o += "%")
                                                : (o = "-" + o + "%"),
                                            o
                                        );
                                    }
                                    return t;
                                })
                                .join(" ");
                        }
                        var l = o[n];
                        this.scrollSpyIntObs(
                            l,
                            function () {
                                var i = e(this);
                                "#header" == t || ".wrapper-spy" == t
                                    ? (e(
                                          "#header .header-nav .nav > li a"
                                      ).removeClass("active"),
                                      e(
                                          '#header .header-nav .nav > li a[href="#' +
                                              i[0].id +
                                              '"]'
                                      ).addClass("active"))
                                    : (e(t)
                                          .find(".nav > li a")
                                          .removeClass("active"),
                                      e(t)
                                          .find(
                                              '.nav > li a[href="#' +
                                                  i[0].id +
                                                  '"]'
                                          )
                                          .addClass("active"));
                            },
                            { rootMargin: s, threshold: 0 },
                            !0,
                            n,
                            !0
                        );
                    }
                    return this;
                },
                scrollSpyIntObs: function (t, i, o, n, s, a) {
                    var r = this,
                        l = document.querySelectorAll(t),
                        d = { rootMargin: "0px 0px 200px 0px" };
                    Object.keys(o).length && (d = e.extend(d, o));
                    var c = new IntersectionObserver(function (t) {
                        for (var o = 0; o < t.length; o++) {
                            var l = t[o];
                            if (l.intersectionRatio > 0) {
                                if ("string" == typeof i)
                                    Function("return " + i)();
                                else i.call(e(l.target));
                                n || c.unobserve(l.target);
                            } else
                                0 == a &&
                                    s == r.sectionIDs.length - 1 &&
                                    (e(
                                        "#header .header-nav .nav > li a"
                                    ).removeClass("active"),
                                    e(
                                        '#header .header-nav .nav > li a[href="#' +
                                            l.target.id +
                                            '"]'
                                    )
                                        .parent()
                                        .prev()
                                        .find("a")
                                        .addClass("active")),
                                    (a = !1);
                        }
                    }, d);
                    return (
                        e(l).each(function () {
                            c.observe(e(this)[0]);
                        }),
                        this
                    );
                },
                debugMode: function () {
                    function t(t) {
                        return (...e) =>
                            (function (t, e, o) {
                                return e.forEach(i), t(e, o);
                            })(t, ...e);
                    }
                    const e = {
                        rootColor: "#9428AB",
                        enterColor: "#B35C00",
                        exitColor: "#035570",
                        interColor: "#9CAF00BB",
                    };
                    function i(t) {
                        !(function (t, e = {}, i) {
                            const { width: o, left: n, height: s, top: a } = t,
                                r = document.createElement("div");
                            if (
                                ((r.style.position = "fixed"),
                                (r.style.width = o + "px"),
                                (r.style.left = n + "px"),
                                (r.style.top = a + "px"),
                                (r.style.height = s + "px"),
                                (r.style.pointerEvents = "none"),
                                (r.style.transition = "opacity 2s ease-in"),
                                (r.style.zIndex = 9999999999),
                                Object.assign(r.style, e),
                                requestAnimationFrame(() =>
                                    requestAnimationFrame(() => {
                                        r.style.opacity = 0;
                                    })
                                ),
                                r.addEventListener("transitionend", () => {
                                    document.body.removeChild(r);
                                }),
                                document.body.appendChild(r),
                                i)
                            ) {
                                var l = document.createElement("div");
                                (l.style.backgroundColor = "#000"),
                                    (l.style.color = "#FFF"),
                                    (l.style.paddingTop = "10px"),
                                    (l.style.paddingRight = "10px"),
                                    (l.style.paddingLeft = "10px"),
                                    (l.style.paddingBottom = "10px"),
                                    (l.innerHTML = i.target.id),
                                    r.appendChild(l);
                            }
                        })(
                            t.rootBounds,
                            {
                                border: `${Math.min(
                                    10,
                                    t.rootBounds.height / 2
                                )}px solid ${e.rootColor}`,
                                overflow: "hidden",
                                boxSizing: "border-box",
                            },
                            t
                        );
                    }
                    return (
                        "undefined" != typeof window &&
                            (window.IntersectionObserver = class extends (
                                IntersectionObserver
                            ) {
                                constructor(e, i) {
                                    super(t(e), i);
                                }
                            }),
                        this
                    );
                },
            }),
            e.extend(t, { PluginScrollSpy: i }),
            (e.fn.themePluginScrollSpy = function (t) {
                return this.map(function () {
                    var o = e(this);
                    return o.data("__scrollSpy")
                        ? o.data("__scrollSpy")
                        : new i(o, t);
                });
            });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        (t = t || {}),
            e.extend(t, {
                PluginScrollToTop: {
                    defaults: {
                        wrapper: e("body"),
                        offset: 150,
                        buttonClass: "scroll-to-top",
                        iconClass: "fas fa-chevron-up",
                        delay: 1e3,
                        visibleMobile: !1,
                        label: !1,
                        easing: "easeOutBack",
                    },
                    initialize: function (t) {
                        if (
                            ((initialized = !0),
                            !e("body[data-plugin-section-scroll]").get(0))
                        )
                            return this.setOptions(t).build().events(), this;
                    },
                    setOptions: function (t) {
                        return (
                            (this.options = e.extend(!0, {}, this.defaults, t)),
                            this
                        );
                    },
                    build: function () {
                        var t;
                        return (
                            (t = e("<a />")
                                .addClass(this.options.buttonClass)
                                .attr({ href: "#" })
                                .append(
                                    e("<i />").addClass(this.options.iconClass)
                                )),
                            this.options.label &&
                                t.append(
                                    e("<span />").html(this.options.label)
                                ),
                            this.options.wrapper.append(t),
                            (this.$el = t),
                            this
                        );
                    },
                    events: function () {
                        var t = this,
                            i = !1;
                        return (
                            t.$el.on("click", function (i) {
                                return (
                                    i.preventDefault(),
                                    e("html").animate(
                                        { scrollTop: 0 },
                                        t.options.delay,
                                        t.options.easing
                                    ),
                                    !1
                                );
                            }),
                            e(window).scroll(function () {
                                i ||
                                    ((i = !0),
                                    e(window).scrollTop() > t.options.offset
                                        ? (t.$el
                                              .stop(!0, !0)
                                              .addClass("visible"),
                                          (i = !1))
                                        : (t.$el
                                              .stop(!0, !0)
                                              .removeClass("visible"),
                                          (i = !1)));
                            }),
                            this
                        );
                    },
                },
            });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        t = t || {};
        var i = function (t, e) {
            return this.initialize(t, e);
        };
        (i.updateModals = function () {
            i.updateBootstrapModal();
        }),
            (i.updateBootstrapModal = function () {
                if (
                    !(
                        void 0 !== e.fn.modal &&
                        void 0 !== e.fn.modal.Constructor &&
                        void 0 !== e.fn.modal.Constructor.prototype &&
                        void 0 !== e.fn.modal.Constructor.prototype.enforceFocus
                    )
                )
                    return !1;
                var t = e.fn.modal.Constructor.prototype.enforceFocus;
                e.fn.modal.Constructor.prototype.enforceFocus = function () {
                    t.apply(this);
                    var i = this.$element.find(".scrollable");
                    i &&
                        (e.isFunction(e.fn.themePluginScrollable) &&
                            i.themePluginScrollable(),
                        e.isFunction(e.fn.nanoScroller) && i.nanoScroller());
                };
            }),
            (i.defaults = {
                contentClass: "scrollable-content",
                paneClass: "scrollable-pane",
                sliderClass: "scrollable-slider",
                alwaysVisible: !0,
                preventPageScrolling: !0,
            }),
            (i.prototype = {
                initialize: function (t, e) {
                    return t.data("__scrollable")
                        ? this
                        : ((this.$el = t),
                          this.setData().setOptions(e).build(),
                          this);
                },
                setData: function () {
                    return this.$el.data("__scrollable", this), this;
                },
                setOptions: function (t) {
                    return (
                        (this.options = e.extend(!0, {}, i.defaults, t, {
                            wrapper: this.$el,
                        })),
                        this
                    );
                },
                build: function () {
                    return (
                        this.options.wrapper.nanoScroller(this.options), this
                    );
                },
            }),
            e.extend(t, { PluginScrollable: i }),
            (e.fn.themePluginScrollable = function (t) {
                return this.each(function () {
                    var o = e(this);
                    return o.data("__scrollable")
                        ? o.data("__scrollable")
                        : new i(o, t);
                });
            }),
            e(function () {
                i.updateModals();
            });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        t = t || {};
        var i = function (t, e) {
            return this.initialize(t, e);
        };
        (i.defaults = {
            targetClass: ".section",
            dotsNav: !0,
            changeHeaderLogo: !0,
            headerLogoDark: "img/logo-default-slim.png",
            headerLogoLight: "img/logo-default-slim-dark.png",
        }),
            (i.prototype = {
                initialize: function (t, e) {
                    return t.data("__sectionScroll")
                        ? this
                        : ((this.$el = t),
                          this.setData().setOptions(e).build().events(),
                          this);
                },
                setData: function () {
                    return this.$el.data("__sectionScroll", this), this;
                },
                setOptions: function (t) {
                    return (
                        (this.options = e.extend(!0, {}, i.defaults, t, {
                            wrapper: this.$el,
                        })),
                        this
                    );
                },
                build: function () {
                    var t = this;
                    this.options.wrapper;
                    e("html").hasClass("side-header-overlay-full-screen")
                        ? (t.$header = e(".sticky-wrapper"))
                        : (t.$header = e("#header")),
                        t.updateSectionsHeight(),
                        e(this.options.targetClass).wrap(
                            '<div class="section-wrapper"></div>'
                        ),
                        e(".section-wrapper").each(function () {
                            e(this).height(
                                e(this).find(".section-scroll").outerHeight()
                            );
                        }),
                        e(".section-wrapper").first().addClass("active");
                    var i = !1,
                        o = !1,
                        n = "",
                        s = 0,
                        a = 0;
                    e(window).on("touchstart", function (t) {
                        s = t.changedTouches[0].screenY;
                    });
                    var r =
                        "onwheel" in document
                            ? "wheel"
                            : void 0 !== document.onmousewheel
                            ? "mousewheel"
                            : "DOMMouseScroll";
                    return (
                        e(window).width() < 992 &&
                            e("html").hasClass("touch") &&
                            (r =
                                "onwheel" in document
                                    ? "wheel touchend"
                                    : void 0 !== document.onmousewheel
                                    ? "mousewheel touchend"
                                    : "DOMMouseScroll touchend"),
                        e(window).width() < 992 &&
                            (e("html").removeClass("overflow-hidden"),
                            e(window).on("scroll", function () {
                                var t = 0;
                                e(".section-scroll").each(function () {
                                    if (
                                        e(this).offset().top <=
                                        e(window).scrollTop() + 50
                                    ) {
                                        var i = e(".section-wrapper")
                                            .eq(t)
                                            .find(".section-scroll");
                                        e(
                                            ".section-scroll-dots-navigation > ul > li"
                                        ).removeClass("active"),
                                            e(
                                                ".section-scroll-dots-navigation > ul > li"
                                            )
                                                .eq(t)
                                                .addClass("active"),
                                            e(window).trigger({
                                                type: "section.scroll.mobile.change.header.color",
                                                currentSection: i,
                                            });
                                    }
                                    t++;
                                });
                            }),
                            e(window).on(
                                "section.scroll.mobile.change.header.color",
                                function (i) {
                                    if (void 0 !== i.currentSection) {
                                        var o = i.currentSection.data(
                                            "section-scroll-header-color"
                                        );
                                        e("#header .header-nav")
                                            .removeClass(
                                                "header-nav-light-text header-nav-dark-text"
                                            )
                                            .addClass(
                                                "header-nav-" + o + "-text"
                                            ),
                                            e("#header .header-nav-features")
                                                .removeClass(
                                                    "header-nav-features-dark header-nav-features-light"
                                                )
                                                .addClass(
                                                    "header-nav-features-" + o
                                                ),
                                            e("#header .header-social-icons")
                                                .removeClass(
                                                    "social-icons-icon-dark social-icons-icon-light"
                                                )
                                                .addClass(
                                                    "social-icons-icon-" + o
                                                ),
                                            t.options.changeHeaderLogo &&
                                                null != o &&
                                                ("light" == o
                                                    ? e(
                                                          "#header .header-logo img"
                                                      ).attr(
                                                          "src",
                                                          t.options
                                                              .headerLogoLight
                                                      )
                                                    : "dark" == o &&
                                                      e(
                                                          "#header .header-logo img"
                                                      ).attr(
                                                          "src",
                                                          t.options
                                                              .headerLogoDark
                                                      )),
                                            t.$header.css({ opacity: 1 });
                                    }
                                }
                            )),
                        e(window).on(r, function (r) {
                            if (
                                !(
                                    e(window).width() < 992 ||
                                    (e(window).width() < 992 &&
                                        e("html").hasClass("touch") &&
                                        (e(r.target)
                                            .closest(
                                                ".section-scroll-dots-navigation"
                                            )
                                            .get(0) ||
                                            e(r.target)
                                                .closest(".header-body")
                                                .get(0) ||
                                            e(r.target)
                                                .closest(".owl-carousel")
                                                .get(0))) ||
                                    e(
                                        "html.side-header-overlay-full-screen.side-header-hide"
                                    ).get(0)
                                )
                            ) {
                                var l =
                                    null == r.originalEvent.wheelDelta
                                        ? r.originalEvent.deltaY > 0
                                        : r.originalEvent.wheelDelta < 0;
                                if (
                                    !(
                                        e(window).width() < 992 &&
                                        e("html").hasClass("touch") &&
                                        ((a =
                                            event.changedTouches[0].screenY) <=
                                            s && (n = "up"),
                                        a >= s && (n = "down"),
                                        a == s)
                                    )
                                ) {
                                    var d,
                                        c = e(".section-wrapper")
                                            .eq(t.getCurrentIndex())
                                            .find(".section-scroll"),
                                        p = t.getNextSection(l, n);
                                    if (
                                        ((d =
                                            t.getCurrentIndex() ==
                                            e(".section-wrapper").length - 1
                                                ? e(document).height()
                                                : p.offset().top),
                                        e(window).width() < 992 &&
                                            e("html").hasClass("touch") &&
                                            setTimeout(function () {
                                                e(".section-wrapper")
                                                    .eq(t.getCurrentIndex())
                                                    .find(".section-scroll")
                                                    .hasClass(
                                                        "section-scroll-scrollable"
                                                    )
                                                    ? e("html").removeClass(
                                                          "overflow-hidden"
                                                      )
                                                    : e("html").addClass(
                                                          "overflow-hidden"
                                                      );
                                            }, 1200),
                                        !c.hasClass(
                                            "section-scroll-scrollable"
                                        ) ||
                                            i ||
                                            o)
                                    ) {
                                        if (!i && !o) {
                                            if (l || "up" == n) {
                                                if (
                                                    t.getCurrentIndex() ==
                                                    e(".section-wrapper")
                                                        .length -
                                                        1
                                                )
                                                    return !1;
                                                t.changeSectionActiveState(p),
                                                    setTimeout(function () {
                                                        t.moveTo(
                                                            p.offset().top
                                                        );
                                                    }, 150);
                                            } else {
                                                if (0 == t.getCurrentIndex())
                                                    return !1;
                                                t.changeSectionActiveState(p),
                                                    p.height() >
                                                    e(window).height()
                                                        ? t.moveTo(
                                                              c.offset().top -
                                                                  e(
                                                                      window
                                                                  ).height()
                                                          )
                                                        : setTimeout(
                                                              function () {
                                                                  t.moveTo(
                                                                      p.offset()
                                                                          .top
                                                                  );
                                                              },
                                                              150
                                                          );
                                            }
                                            t.changeDotsActiveState(),
                                                t.$header.css({
                                                    opacity: 0,
                                                    transition:
                                                        "ease opacity 500ms",
                                                }),
                                                p.css({
                                                    position: "relative",
                                                    opacity: 1,
                                                    "z-index": 1,
                                                    transform:
                                                        "translate3d(0,0,0) scale(1)",
                                                }),
                                                c.css({
                                                    position: "fixed",
                                                    width: "100%",
                                                    top: 0,
                                                    left: 0,
                                                    opacity: 0,
                                                    "z-index": 0,
                                                    transform:
                                                        "translate3d(0,0,-10px) scale(0.7)",
                                                    transition:
                                                        "ease transform 600ms, ease opacity 600ms",
                                                }),
                                                setTimeout(function () {
                                                    c.css({
                                                        position: "relative",
                                                        opacity: 1,
                                                        transform:
                                                            "translate3d(0,0,-10px) scale(1)",
                                                    }),
                                                        e(window).trigger(
                                                            "section.scroll.change.header.color"
                                                        ),
                                                        setTimeout(function () {
                                                            i = !1;
                                                        }, 500);
                                                }, 1e3),
                                                (i = !0);
                                        }
                                    } else {
                                        if (l || "up" == n) {
                                            if (
                                                e(window).scrollTop() +
                                                    e(window).height() >=
                                                d
                                            ) {
                                                if (
                                                    ((i = !0),
                                                    setTimeout(function () {
                                                        e(window).trigger(
                                                            "section.scroll.change.header.color"
                                                        ),
                                                            setTimeout(
                                                                function () {
                                                                    i = !1;
                                                                },
                                                                500
                                                            );
                                                    }, 1e3),
                                                    t.getCurrentIndex() ==
                                                        e(".section-wrapper")
                                                            .length -
                                                            1)
                                                )
                                                    return !1;
                                                t.moveTo(
                                                    c.offset().top +
                                                        c.outerHeight()
                                                ),
                                                    t.changeSectionActiveState(
                                                        p
                                                    ),
                                                    t.$header.css({
                                                        opacity: 0,
                                                        transition:
                                                            "ease opacity 500ms",
                                                    });
                                            }
                                            if (!e("html").hasClass("touch"))
                                                for (var h = 1; h < 100; h++)
                                                    if (
                                                        (e(
                                                            "body, html"
                                                        ).scrollTop(
                                                            e(
                                                                window
                                                            ).scrollTop() + 1
                                                        ),
                                                        e(window).scrollTop() +
                                                            e(
                                                                window
                                                            ).height() >=
                                                            d)
                                                    ) {
                                                        (o = !0),
                                                            setTimeout(
                                                                function () {
                                                                    e(
                                                                        window
                                                                    ).trigger(
                                                                        "section.scroll.change.header.color"
                                                                    ),
                                                                        (o =
                                                                            !1);
                                                                },
                                                                500
                                                            );
                                                        break;
                                                    }
                                        } else {
                                            if (
                                                e(window).scrollTop() <=
                                                c.offset().top
                                            ) {
                                                if (
                                                    ((i = !0),
                                                    setTimeout(function () {
                                                        e(window).trigger(
                                                            "section.scroll.change.header.color"
                                                        ),
                                                            setTimeout(
                                                                function () {
                                                                    i = !1;
                                                                },
                                                                500
                                                            );
                                                    }, 1e3),
                                                    0 == t.getCurrentIndex())
                                                )
                                                    return !1;
                                                t.moveTo(
                                                    c.offset().top -
                                                        e(window).height()
                                                ),
                                                    t.changeSectionActiveState(
                                                        p
                                                    ),
                                                    t.$header.css({
                                                        opacity: 0,
                                                        transition:
                                                            "ease opacity 500ms",
                                                    });
                                            }
                                            if (!e("html").hasClass("touch"))
                                                for (h = 1; h < 100; h++)
                                                    if (
                                                        (e(
                                                            "body, html"
                                                        ).scrollTop(
                                                            e(
                                                                window
                                                            ).scrollTop() - 1
                                                        ),
                                                        e(window).scrollTop() <=
                                                            c.offset().top)
                                                    ) {
                                                        (o = !0),
                                                            setTimeout(
                                                                function () {
                                                                    e(
                                                                        window
                                                                    ).trigger(
                                                                        "section.scroll.change.header.color"
                                                                    ),
                                                                        (o =
                                                                            !1);
                                                                },
                                                                500
                                                            );
                                                        break;
                                                    }
                                        }
                                        t.changeDotsActiveState();
                                    }
                                }
                            }
                        }),
                        this.options.dotsNav && t.dotsNavigation(),
                        setTimeout(function () {
                            if (e(window.location.hash).get(0))
                                t.moveTo(
                                    e(window.location.hash).parent().offset()
                                        .top
                                ),
                                    t.changeSectionActiveState(
                                        e(window.location.hash)
                                    ),
                                    t.changeDotsActiveState(),
                                    t.updateHash(!0);
                            else {
                                var i = window.location.hash,
                                    o = i.replace("#", "");
                                i || (o = 1),
                                    t.moveTo(
                                        e(".section-wrapper")
                                            .eq(o - 1)
                                            .offset().top
                                    ),
                                    t.changeSectionActiveState(
                                        e(".section-wrapper")
                                            .eq(o - 1)
                                            .find(".section-scroll")
                                    ),
                                    t.changeDotsActiveState(),
                                    t.updateHash(!0);
                            }
                            e(window).trigger("section.scroll.ready"),
                                e(window).trigger(
                                    "section.scroll.change.header.color"
                                );
                        }, 500),
                        this
                    );
                },
                updateSectionsHeight: function () {
                    return (
                        e(".section-scroll").css({ height: "" }),
                        e(".section-scroll").each(function () {
                            e(this).outerHeight() < e(window).height() + 3
                                ? e(this).css({ height: "100vh" })
                                : e(this).addClass("section-scroll-scrollable");
                        }),
                        e(".section-wrapper").each(function () {
                            e(this).height(
                                e(this).find(".section-scroll").outerHeight()
                            );
                        }),
                        this
                    );
                },
                updateHash: function (t) {
                    if (window.location.hash) {
                        if (!t) {
                            var i = e(".section-wrapper")
                                    .eq(this.getCurrentIndex())
                                    .find(".section-scroll"),
                                o = i.attr("id")
                                    ? i.attr("id")
                                    : i.parent().index() + 1;
                            window.location.hash = o;
                        }
                    } else window.location.hash = 1;
                    return this;
                },
                getCurrentIndex: function () {
                    return e(".section-wrapper.active").index();
                },
                moveTo: function (t, i) {
                    var o = this;
                    return (
                        e("body, html").animate(
                            { scrollTop: t },
                            1e3,
                            "easeOutQuint"
                        ),
                        setTimeout(function () {
                            o.updateHash();
                        }, 500),
                        this
                    );
                },
                getNextSection: function (t, i) {
                    return t || "up" == i
                        ? e(".section-wrapper")
                              .eq(this.getCurrentIndex() + 1)
                              .find(".section-scroll")
                        : e(".section-wrapper")
                              .eq(this.getCurrentIndex() - 1)
                              .find(".section-scroll");
                },
                changeSectionActiveState: function (t) {
                    return (
                        e(".section-wrapper").removeClass("active"),
                        t.parent().addClass("active"),
                        this
                    );
                },
                changeDotsActiveState: function () {
                    return (
                        e(
                            ".section-scroll-dots-navigation > ul > li"
                        ).removeClass("active"),
                        e(".section-scroll-dots-navigation > ul > li")
                            .eq(this.getCurrentIndex())
                            .addClass("active"),
                        this
                    );
                },
                dotsNavigation: function () {
                    var t = this,
                        i = e(
                            '<div class="section-scroll-dots-navigation"><ul class="list list-unstyled"></ul></div>'
                        ),
                        o = t.getCurrentIndex();
                    t.options.dotsClass && i.addClass(t.options.dotsClass);
                    for (var n = 0; n < e(".section-scroll").length; n++) {
                        var s = e(".section-wrapper")
                            .eq(n)
                            .find(".section-scroll")
                            .data("section-scroll-title");
                        i.find("> ul").append(
                            "<li" +
                                (o == n ? ' class="active"' : "") +
                                '><a href="#' +
                                n +
                                '" data-nav-id="' +
                                n +
                                '"><span>' +
                                s +
                                "</span></a></li>"
                        );
                    }
                    return (
                        e(".body").append(i),
                        i
                            .find("a[data-nav-id]")
                            .on("click touchstart", function (i) {
                                i.preventDefault();
                                var o = e(this);
                                e(".section-scroll").css({
                                    opacity: 0,
                                    transition: "ease opacity 300ms",
                                }),
                                    t.$header.css({
                                        opacity: 0,
                                        transition: "ease opacity 500ms",
                                    }),
                                    setTimeout(function () {
                                        t.moveTo(
                                            e(".section-wrapper")
                                                .eq(o.data("nav-id"))
                                                .offset().top
                                        ),
                                            e(".section-wrapper").removeClass(
                                                "active"
                                            ),
                                            e(".section-wrapper")
                                                .eq(o.data("nav-id"))
                                                .addClass("active"),
                                            e(".section-wrapper")
                                                .eq(t.getCurrentIndex())
                                                .find(".section-scroll")
                                                .css({ opacity: 1 }),
                                            setTimeout(function () {
                                                e(".section-scroll").css({
                                                    opacity: 1,
                                                }),
                                                    e(window).trigger(
                                                        "section.scroll.change.header.color"
                                                    );
                                            }, 500),
                                            e(window).width() > 991 &&
                                                t.changeDotsActiveState();
                                    }, 500);
                            }),
                        this
                    );
                },
                events: function () {
                    var t = this;
                    return (
                        e(window).on("section.scroll.ready", function () {
                            e(window).scrollTop(0);
                        }),
                        e(window).on(
                            "section.scroll.change.header.color",
                            function () {
                                var i = e(".section-wrapper")
                                    .eq(t.getCurrentIndex())
                                    .find(".section-scroll")
                                    .data("section-scroll-header-color");
                                e("#header .header-nav")
                                    .removeClass(
                                        "header-nav-light-text header-nav-dark-text"
                                    )
                                    .addClass("header-nav-" + i + "-text"),
                                    e("#header .header-nav-features")
                                        .removeClass(
                                            "header-nav-features-dark header-nav-features-light"
                                        )
                                        .addClass("header-nav-features-" + i),
                                    e("#header .header-social-icons")
                                        .removeClass(
                                            "social-icons-icon-dark social-icons-icon-light"
                                        )
                                        .addClass("social-icons-icon-" + i),
                                    t.options.changeHeaderLogo &&
                                        null != i &&
                                        ("light" == i
                                            ? e(
                                                  "#header .header-logo img"
                                              ).attr(
                                                  "src",
                                                  t.options.headerLogoLight
                                              )
                                            : "dark" == i &&
                                              e(
                                                  "#header .header-logo img"
                                              ).attr(
                                                  "src",
                                                  t.options.headerLogoDark
                                              )),
                                    t.$header.css({ opacity: 1 });
                            }
                        ),
                        e(document).ready(function () {
                            e(window).afterResize(function () {
                                t.updateSectionsHeight(),
                                    e(window).width() < 992 &&
                                        e("html").removeClass(
                                            "overflow-hidden"
                                        );
                            });
                        }),
                        this
                    );
                },
            }),
            e.extend(t, { PluginSectionScroll: i }),
            (e.fn.themePluginSectionScroll = function (t) {
                return this.map(function () {
                    var o = e(this);
                    return o.data("__sectionScroll")
                        ? o.data("__sectionScroll")
                        : new i(o, t);
                });
            });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        t = t || {};
        var i = function (t, e) {
            return this.initialize(t, e);
        };
        (i.defaults = {
            useHash: !0,
            itemSelector: ".isotope-item",
            layoutMode: "masonry",
            filter: "*",
            hiddenStyle: { opacity: 0 },
            visibleStyle: { opacity: 1 },
            stagger: 30,
            isOriginLeft: "rtl" != e("html").attr("dir"),
        }),
            (i.prototype = {
                initialize: function (t, e) {
                    return t.data("__sort")
                        ? this
                        : ((this.$el = t),
                          this.setData().setOptions(e).build(),
                          this);
                },
                setData: function () {
                    return this.$el.data("__sort", this), this;
                },
                setOptions: function (t) {
                    return (
                        (this.options = e.extend(!0, {}, i.defaults, t, {
                            wrapper: this.$el,
                        })),
                        this
                    );
                },
                build: function () {
                    if (!e.isFunction(e.fn.isotope)) return this;
                    var t = this,
                        i = this.options.wrapper,
                        o = e(
                            '.sort-destination[data-sort-id="' +
                                i.attr("data-sort-id") +
                                '"]'
                        );
                    e(window);
                    if (o.get(0)) {
                        if (
                            ((t.$source = i),
                            (t.$destination = o),
                            (t.$loader = !1),
                            t.setParagraphHeight(o),
                            t.$destination
                                .parents(".sort-destination-loader")
                                .get(0) &&
                                ((t.$loader = t.$destination.parents(
                                    ".sort-destination-loader"
                                )),
                                t.createLoader()),
                            o.attr("data-filter", "*"),
                            o.one("layoutComplete", function (i, o) {
                                t.removeLoader(),
                                    e("[data-plugin-sticky]").length &&
                                        setTimeout(function () {
                                            e("[data-plugin-sticky]").each(
                                                function () {
                                                    e(this)
                                                        .data("__sticky")
                                                        .build(),
                                                        e(window).trigger(
                                                            "resize"
                                                        );
                                                }
                                            );
                                        }, 500);
                            }),
                            e("html").hasClass("ie10") ||
                                e("html").hasClass("ie11"))
                        )
                            parseInt(
                                t.options.wrapper.children().css("padding-left")
                            ),
                                parseInt(
                                    t.options.wrapper
                                        .children()
                                        .css("padding-right")
                                );
                        o.waitForImages(function () {
                            o.isotope(t.options), t.events();
                        }),
                            setTimeout(function () {
                                t.removeLoader();
                            }, 3e3);
                    }
                    return this;
                },
                events: function () {
                    var t = this,
                        i = null,
                        o = e(window);
                    return (
                        t.$source.find("a").click(function (o) {
                            return (
                                o.preventDefault(),
                                (i = e(this).parent().data("option-value")),
                                t.setFilter(i),
                                o.originalEvent &&
                                    t.$source.trigger("filtered"),
                                this
                            );
                        }),
                        t.$destination.trigger("filtered"),
                        t.$source.trigger("filtered"),
                        t.options.useHash && t.hashEvents(),
                        o.on("resize sort.resize", function () {
                            setTimeout(function () {
                                t.$destination.isotope("layout");
                            }, 300);
                        }),
                        setTimeout(function () {
                            o.trigger("sort.resize");
                        }, 300),
                        this
                    );
                },
                setFilter: function (t) {
                    var i = this,
                        o = t;
                    return (
                        i.$source.find(".active").removeClass("active"),
                        i.$source
                            .find(
                                'li[data-option-value="' +
                                    t +
                                    '"], li[data-option-value="' +
                                    t +
                                    '"] > a'
                            )
                            .addClass("active"),
                        (i.options.filter = o),
                        i.$destination.attr("data-current-page") &&
                            (o =
                                o +
                                "[data-page-rel=" +
                                i.$destination.attr("data-current-page") +
                                "]"),
                        i.$destination
                            .attr("data-filter", t)
                            .isotope({ filter: o })
                            .one("arrangeComplete", function (t, o) {
                                i.options.useHash &&
                                    (("" == window.location.hash &&
                                        "*" ==
                                            i.options.filter.replace(
                                                ".",
                                                ""
                                            )) ||
                                        (window.location.hash =
                                            i.options.filter.replace(".", ""))),
                                    e(window).trigger("scroll");
                            })
                            .trigger("filtered"),
                        this
                    );
                },
                hashEvents: function () {
                    var t = this,
                        i = null,
                        o = null,
                        n = "." + location.hash.replace("#", "");
                    return (
                        e(location.hash).length && (n = "."),
                        "." != n && ".*" != n && t.setFilter(n),
                        e(window).on("hashchange", function (e) {
                            (o = "." + location.hash.replace("#", "")),
                                (i = "." == o || ".*" == o ? "*" : o),
                                t.setFilter(i);
                        }),
                        this
                    );
                },
                setParagraphHeight: function () {
                    var t = 0,
                        i = e("span.thumb-info-caption p", this.$destination);
                    return (
                        i.each(function () {
                            e(this).height() > t && (t = e(this).height() + 10);
                        }),
                        i.height(t),
                        this
                    );
                },
                createLoader: function () {
                    var t = [
                        '<div class="bounce-loader">',
                        '<div class="bounce1"></div>',
                        '<div class="bounce2"></div>',
                        '<div class="bounce3"></div>',
                        "</div>",
                    ].join("");
                    return this.$loader.append(t), this;
                },
                removeLoader: function () {
                    var t = this;
                    t.$loader &&
                        (t.$loader.removeClass(
                            "sort-destination-loader-showing"
                        ),
                        setTimeout(function () {
                            t.$loader.addClass(
                                "sort-destination-loader-loaded"
                            );
                        }, 300));
                },
            }),
            e.extend(t, { PluginSort: i }),
            (e.fn.themePluginSort = function (t) {
                return this.map(function () {
                    var o = e(this);
                    return o.data("__sort") ? o.data("__sort") : new i(o, t);
                });
            });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        t = t || {};
        var i = function (t, e) {
            return this.initialize(t, e);
        };
        (i.defaults = {
            theme: "krajee-fas",
            color: "primary",
            showClear: !1,
            showCaption: !1,
        }),
            (i.prototype = {
                initialize: function (t, e) {
                    return (
                        (this.$el = t),
                        this.setData().setOptions(e).build(),
                        this
                    );
                },
                setData: function () {
                    return this.$el.data("__starrating", this), this;
                },
                setOptions: function (t) {
                    return (
                        (this.options = e.extend(!0, {}, i.defaults, t, {
                            wrapper: this.$el,
                        })),
                        this
                    );
                },
                build: function () {
                    if (!e.isFunction(e.fn.rating)) return this;
                    return (
                        this.options.wrapper.rating(this.options),
                        this.options.wrapper
                            .parents(".rating-container")
                            .addClass("rating-" + this.options.color),
                        this.options.extraClass &&
                            this.options.wrapper
                                .parents(".rating-container")
                                .addClass(this.options.extraClass),
                        this
                    );
                },
            }),
            e.extend(t, { PluginStarRating: i }),
            (e.fn.themePluginStarRating = function (t) {
                return this.map(function () {
                    var o = e(this);
                    return o.data("__starrating")
                        ? o.data("__starrating")
                        : new i(o, t);
                });
            });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        t = t || {};
        var i = function (t, e) {
            return this.initialize(t, e);
        };
        (i.defaults = { minWidth: 991, activeClass: "sticky-active" }),
            (i.prototype = {
                initialize: function (t, e) {
                    return t.data("__sticky")
                        ? this
                        : ((this.$el = t),
                          this.setData().setOptions(e).build().events(),
                          this);
                },
                setData: function () {
                    return this.$el.data("__sticky", this), this;
                },
                setOptions: function (t) {
                    return (
                        (this.options = e.extend(!0, {}, i.defaults, t, {
                            wrapper: this.$el,
                        })),
                        this
                    );
                },
                build: function () {
                    if (!e.isFunction(e.fn.pin)) return this;
                    var t = this,
                        i = e(window);
                    if (
                        (t.options.wrapper.pin(t.options),
                        t.options.wrapper.hasClass(
                            "sticky-wrapper-transparent"
                        ) &&
                            t.options.wrapper
                                .parent()
                                .addClass("position-absolute w-100"),
                        i.afterResize(function () {
                            t.options.wrapper
                                .removeAttr("style")
                                .removeData("pin"),
                                t.options.wrapper.pin(t.options),
                                i.trigger("scroll");
                        }),
                        t.options.wrapper.find("img").attr("data-change-src"))
                    ) {
                        var o = t.options.wrapper.find("img"),
                            n = o.attr("src"),
                            s = o.attr("data-change-src");
                        t.changeLogoSrc = function (t) {
                            t ? o.attr("src", s) : o.attr("src", n);
                        };
                    }
                    return this;
                },
                events: function () {
                    var t = this,
                        i = e(window),
                        o = t.options.wrapper.find("img"),
                        n = !0,
                        s = !1,
                        a = t.options.wrapper.hasClass(
                            "sticky-wrapper-effect-1"
                        )
                            ? "sticky-effect-active"
                            : "sticky-active";
                    i.on("scroll sticky.effect.active", function () {
                        t.options.wrapper.hasClass(a)
                            ? n &&
                              (o.attr("data-change-src") && t.changeLogoSrc(!0),
                              (n = !1),
                              (s = !0))
                            : s &&
                              (o.attr("data-change-src") && t.changeLogoSrc(!1),
                              (s = !1),
                              (n = !0));
                    });
                    var r = !1;
                    t.options.stickyStartEffectAt &&
                        (t.options.stickyStartEffectAt < i.scrollTop() &&
                            (t.options.wrapper.addClass("sticky-effect-active"),
                            i.trigger("sticky.effect.active")),
                        i.on("scroll", function () {
                            t.options.stickyStartEffectAt < i.scrollTop()
                                ? (t.options.wrapper.addClass(
                                      "sticky-effect-active"
                                  ),
                                  (r = !0),
                                  i.trigger("sticky.effect.active"))
                                : (r &&
                                      (t.options.wrapper
                                          .find(".sticky-body")
                                          .addClass("position-fixed"),
                                      (r = !1)),
                                  0 == i.scrollTop() &&
                                      t.options.wrapper
                                          .find(".sticky-body")
                                          .removeClass("position-fixed"),
                                  t.options.wrapper.removeClass(
                                      "sticky-effect-active"
                                  ));
                        })),
                        e('[data-bs-toggle="collapse"]').get(0) &&
                            e('[data-bs-toggle="collapse"]').on(
                                "click",
                                function () {
                                    setTimeout(function () {
                                        t.build(), e(window).trigger("scroll");
                                    }, 1e3);
                                }
                            );
                },
            }),
            e.extend(t, { PluginSticky: i }),
            (e.fn.themePluginSticky = function (t) {
                return this.map(function () {
                    var o = e(this);
                    return o.data("__sticky")
                        ? o.data("__sticky")
                        : new i(o, t);
                });
            });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        t = t || {};
        var i = function (t, e) {
            return this.initialize(t, e);
        };
        (i.defaults = { duration: 350, isAccordion: !1 }),
            (i.prototype = {
                initialize: function (t, e) {
                    return t.data("__toggle")
                        ? this
                        : ((this.$el = t),
                          this.setData().setOptions(e).build(),
                          this);
                },
                setData: function () {
                    return this.$el.data("__toggle", this), this;
                },
                setOptions: function (t) {
                    return (
                        (this.options = e.extend(!0, {}, i.defaults, t, {
                            wrapper: this.$el,
                        })),
                        this
                    );
                },
                build: function () {
                    var t = this,
                        i = this.options.wrapper.find("> .toggle"),
                        o = null;
                    return (
                        i.each(function () {
                            (o = e(this)).hasClass("active") &&
                                (o.find("> p").addClass("preview-active"),
                                o
                                    .find("> .toggle-content")
                                    .slideDown(t.options.duration)),
                                t.events(o);
                        }),
                        t.options.isAccordion &&
                            (t.options.duration = t.options.duration / 2),
                        this
                    );
                },
                events: function (t) {
                    var i = this,
                        o = 0,
                        n = 0,
                        s = null;
                    t.find("> label, > .toggle-title").click(function (t) {
                        var a = e(this),
                            r = a.parent(),
                            l = a.parents(".toggle"),
                            d = null,
                            c = null;
                        (i.options.isAccordion &&
                            void 0 !== t.originalEvent &&
                            (c = l.find(
                                ".toggle.active > label, .toggle.active > .toggle-title"
                            ))[0] == a[0]) ||
                            (r.toggleClass("active"),
                            r.find("> p").get(0) &&
                                ((d = r.find("> p")),
                                (o = d.css("height")),
                                d.css("height", "auto"),
                                (n = d.css("height")),
                                d.css("height", o)),
                            (s = r.find("> .toggle-content")),
                            r.hasClass("active")
                                ? (e(d).animate(
                                      { height: n },
                                      i.options.duration,
                                      function () {
                                          e(this).addClass("preview-active");
                                      }
                                  ),
                                  s.slideDown(i.options.duration, function () {
                                      c && c.trigger("click");
                                  }))
                                : (e(d).animate(
                                      { height: 0 },
                                      i.options.duration,
                                      function () {
                                          e(this).removeClass("preview-active");
                                      }
                                  ),
                                  s.slideUp(i.options.duration)));
                    });
                },
            }),
            e.extend(t, { PluginToggle: i }),
            (e.fn.themePluginToggle = function (t) {
                return this.map(function () {
                    var o = e(this);
                    return o.data("__toggle")
                        ? o.data("__toggle")
                        : new i(o, t);
                });
            });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        t = t || {};
        var i = function (t, e) {
            return this.initialize(t, e);
        };
        (i.defaults = {
            username: null,
            count: 2,
            URL: "php/twitter-feed.php",
            iconColor: !1,
        }),
            (i.prototype = {
                initialize: function (t, e) {
                    return t.data("__tweets")
                        ? this
                        : ((this.$el = t),
                          this.setData().setOptions(e).build(),
                          this);
                },
                setData: function () {
                    return this.$el.data("__tweets", this), this;
                },
                setOptions: function (t) {
                    return (
                        (this.options = e.extend(!0, {}, i.defaults, t, {
                            wrapper: this.$el,
                        })),
                        this
                    );
                },
                build: function () {
                    if (
                        null == this.options.username ||
                        "" == this.options.username
                    )
                        return this;
                    var t = this.options.wrapper;
                    return (
                        e
                            .ajax({
                                type: "GET",
                                data: {
                                    twitter_screen_name: this.options.username,
                                    tweets_to_display: this.options.count,
                                    icon_color: this.options.iconColor,
                                },
                                url: this.options.URL,
                            })
                            .done(function (e) {
                                t.html(e).find("a").attr("target", "_blank");
                            }),
                        this
                    );
                },
            }),
            e.extend(t, { PluginTweets: i }),
            (e.fn.themePluginTweets = function (t) {
                return this.map(function () {
                    var o = e(this);
                    return o.data("__tweets")
                        ? o.data("__tweets")
                        : new i(o, t);
                });
            });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        (t = t || {}),
            e.extend(t, {
                PluginValidation: {
                    defaults: {
                        formClass: "needs-validation",
                        validator: {
                            highlight: function (t) {
                                e(t)
                                    .addClass("is-invalid")
                                    .removeClass("is-valid")
                                    .parent()
                                    .removeClass("has-success")
                                    .addClass("has-danger");
                            },
                            success: function (t, i) {
                                e(i)
                                    .removeClass("is-invalid")
                                    .addClass("is-valid")
                                    .parent()
                                    .removeClass("has-danger")
                                    .addClass("has-success")
                                    .find("label.error")
                                    .remove();
                            },
                            errorPlacement: function (t, e) {
                                "radio" == e.attr("type") ||
                                "checkbox" == e.attr("type")
                                    ? t.appendTo(e.parent().parent())
                                    : t.insertAfter(e);
                            },
                        },
                        validateCaptchaURL:
                            "php/contact-form-verify-captcha.php",
                        refreshCaptchaURL:
                            "php/contact-form-refresh-captcha.php",
                    },
                    initialize: function (t) {
                        return (
                            (initialized = !0), this.setOptions(t).build(), this
                        );
                    },
                    setOptions: function (t) {
                        return (
                            (this.options = e.extend(!0, {}, this.defaults, t)),
                            this
                        );
                    },
                    build: function () {
                        return e.isFunction(e.validator)
                            ? (this.addMethods(),
                              this.setMessageGroups(),
                              e.validator.setDefaults(this.options.validator),
                              e("." + this.options.formClass).validate(),
                              this)
                            : this;
                    },
                    addMethods: function () {
                        var t = this;
                        e.validator.addMethod(
                            "captcha",
                            function (i, o, n) {
                                var s = !1;
                                if (
                                    (e.ajax({
                                        url: t.options.validateCaptchaURL,
                                        type: "POST",
                                        async: !1,
                                        dataType: "json",
                                        data: { captcha: e.trim(i) },
                                        success: function (t) {
                                            "success" == t.response && (s = !0);
                                        },
                                    }),
                                    s)
                                )
                                    return !0;
                            },
                            ""
                        ),
                            e("#refreshCaptcha").on("click", function (i) {
                                i.preventDefault(),
                                    e.get(
                                        t.options.refreshCaptchaURL,
                                        function (t) {
                                            e("#captcha-image").attr("src", t);
                                        }
                                    );
                            });
                    },
                    setMessageGroups: function () {
                        e(
                            ".checkbox-group[data-msg-required], .radio-group[data-msg-required]"
                        ).each(function () {
                            var t = e(this).data("msg-required");
                            e(this).find("input").attr("data-msg-required", t);
                        });
                    },
                },
            });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        t = t || {};
        var i = function (t, e) {
            return this.initialize(t, e);
        };
        (i.defaults = {
            overlay: !1,
            volume: 1,
            playbackRate: 1,
            muted: !0,
            loop: !0,
            autoplay: !0,
            position: "50% 50%",
            posterType: "detect",
            className: "vide-video-wrapper",
        }),
            (i.prototype = {
                initialize: function (t, e) {
                    return (
                        (this.$el = t),
                        this.setData().setOptions(e).build().events(),
                        this
                    );
                },
                setData: function () {
                    return this.$el.data("__videobackground", this), this;
                },
                setOptions: function (t) {
                    return (
                        (this.options = e.extend(!0, {}, i.defaults, t, {
                            path: this.$el.data("video-path"),
                            wrapper: this.$el,
                        })),
                        this
                    );
                },
                build: function () {
                    var t = this;
                    if (!e.isFunction(e.fn.vide) || !this.options.path)
                        return this;
                    if (this.options.overlay) {
                        var i = this.options.overlayClass;
                        this.options.wrapper.prepend(e("<div />").addClass(i));
                    }
                    this.options.wrapper
                        .vide(this.options.path, this.options)
                        .first()
                        .css("z-index", 0),
                        t.changePoster(),
                        t.options.wrapper.closest(".owl-carousel").get(0) &&
                            t.options.wrapper
                                .closest(".owl-carousel")
                                .on("initialized.owl.carousel", function () {
                                    e(".owl-item.cloned")
                                        .find(
                                            "[data-plugin-video-background] .vide-video-wrapper"
                                        )
                                        .remove(),
                                        e(".owl-item.cloned")
                                            .find(
                                                "[data-plugin-video-background]"
                                            )
                                            .vide(t.options.path, t.options)
                                            .first()
                                            .css("z-index", 0),
                                        t.changePoster(
                                            t.options.wrapper.closest(
                                                ".owl-carousel"
                                            )
                                        );
                                });
                    var o = t.options.wrapper.find(".video-background-play");
                    if (o.get(0)) {
                        var n = t.options.wrapper.find(
                            ".video-background-play-wrapper"
                        );
                        t.options.wrapper
                            .find(".video-background-play")
                            .on("click", function (e) {
                                e.preventDefault(),
                                    n.get(0)
                                        ? n.animate(
                                              { opacity: 0 },
                                              300,
                                              function () {
                                                  n
                                                      .parent()
                                                      .height(n.outerHeight()),
                                                      n.remove();
                                              }
                                          )
                                        : o.animate(
                                              { opacity: 0 },
                                              300,
                                              function () {
                                                  o.remove();
                                              }
                                          ),
                                    setTimeout(function () {
                                        t.options.wrapper
                                            .find("video")[0]
                                            .play();
                                    }, 500);
                            });
                    }
                    return (
                        e(window).trigger("vide.video.inserted.on.dom"), this
                    );
                },
                changePoster: function (t) {
                    return t && this.options.changePoster
                        ? (t
                              .find(
                                  ".owl-item [data-plugin-video-background] .vide-video-wrapper"
                              )
                              .css({
                                  "background-image":
                                      "url(" + this.options.changePoster + ")",
                              }),
                          this)
                        : (this.options.changePoster &&
                              this.options.wrapper
                                  .find(".vide-video-wrapper")
                                  .css({
                                      "background-image":
                                          "url(" +
                                          this.options.changePoster +
                                          ")",
                                  }),
                          this);
                },
                events: function () {
                    var t = this;
                    return (
                        t.options.wrapper.on(
                            "video.background.initialize",
                            function () {
                                t.build();
                            }
                        ),
                        this
                    );
                },
            }),
            e.extend(t, { PluginVideoBackground: i }),
            (e.fn.themePluginVideoBackground = function (t) {
                return this.map(function () {
                    var o = e(this);
                    return o.data("__videobackground")
                        ? o.data("__videobackground")
                        : new i(o, t);
                });
            });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        t = t || {};
        var i = !1;
        e.extend(t, {
            Account: {
                defaults: { wrapper: e("#headerAccount") },
                initialize: function (t, e) {
                    return i
                        ? this
                        : ((i = !0),
                          (this.$wrapper = t || this.defaults.wrapper),
                          this.setOptions(e).events(),
                          this);
                },
                setOptions: function (i) {
                    return (
                        (this.options = e.extend(
                            !0,
                            {},
                            this.defaults,
                            i,
                            t.fn.getOptions(
                                this.$wrapper.data("plugin-options")
                            )
                        )),
                        this
                    );
                },
                events: function () {
                    var t = this;
                    e(window).on("load", function () {
                        e(document).ready(function () {
                            setTimeout(function () {
                                t.$wrapper
                                    .find("input")
                                    .on("focus", function () {
                                        t.$wrapper.addClass("open"),
                                            e(document).mouseup(function (e) {
                                                t.$wrapper.is(e.target) ||
                                                    0 !==
                                                        t.$wrapper.has(e.target)
                                                            .length ||
                                                    t.$wrapper.removeClass(
                                                        "open"
                                                    );
                                            });
                                    });
                            }, 1500);
                        });
                    }),
                        e("#headerSignUp").on("click", function (e) {
                            e.preventDefault(),
                                t.$wrapper
                                    .addClass("signup")
                                    .removeClass("signin")
                                    .removeClass("recover"),
                                t.$wrapper
                                    .find(".signup-form input:first")
                                    .focus();
                        }),
                        e("#headerSignIn").on("click", function (e) {
                            e.preventDefault(),
                                t.$wrapper
                                    .addClass("signin")
                                    .removeClass("signup")
                                    .removeClass("recover"),
                                t.$wrapper
                                    .find(".signin-form input:first")
                                    .focus();
                        }),
                        e("#headerRecover").on("click", function (e) {
                            e.preventDefault(),
                                t.$wrapper
                                    .addClass("recover")
                                    .removeClass("signup")
                                    .removeClass("signin"),
                                t.$wrapper
                                    .find(".recover-form input:first")
                                    .focus();
                        }),
                        e("#headerRecoverCancel").on("click", function (e) {
                            e.preventDefault(),
                                t.$wrapper
                                    .addClass("signin")
                                    .removeClass("signup")
                                    .removeClass("recover"),
                                t.$wrapper
                                    .find(".signin-form input:first")
                                    .focus();
                        });
                },
            },
        });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        t = t || {};
        var o = !1;
        e.extend(t, {
            Nav: {
                defaults: {
                    wrapper: e("#mainNav"),
                    scrollDelay: 600,
                    scrollAnimation: "easeOutQuad",
                },
                initialize: function (t, e) {
                    return o
                        ? this
                        : ((o = !0),
                          (this.$wrapper = t || this.defaults.wrapper),
                          this.setOptions(e).build().events(),
                          this);
                },
                setOptions: function (i) {
                    return (
                        (this.options = e.extend(
                            !0,
                            {},
                            this.defaults,
                            i,
                            t.fn.getOptions(
                                this.$wrapper.data("plugin-options")
                            )
                        )),
                        this
                    );
                },
                build: function () {
                    var t,
                        o = this,
                        n = e("html"),
                        s = e("#header"),
                        a = e("#header .header-nav-main");
                    if (
                        (o.$wrapper.find("a[data-thumb-preview]").length &&
                            o.$wrapper
                                .find("a[data-thumb-preview]")
                                .each(function () {
                                    (t = e("<span />")
                                        .addClass(
                                            "thumb-info thumb-info-preview"
                                        )
                                        .append(
                                            e("<span />")
                                                .addClass("thumb-info-wrapper")
                                                .append(
                                                    e("<span />")
                                                        .addClass(
                                                            "thumb-info-image"
                                                        )
                                                        .css(
                                                            "background-image",
                                                            "url(" +
                                                                e(this).data(
                                                                    "thumb-preview"
                                                                ) +
                                                                ")"
                                                        )
                                                )
                                        )),
                                        e(this).append(t);
                                }),
                        n.hasClass("side-header") ||
                            n.hasClass("side-header-hamburguer-sidebar"))
                    )
                        (n.hasClass("side-header-right") ||
                            n.hasClass(
                                "side-header-hamburguer-sidebar-right"
                            )) &&
                            (n.hasClass("side-header-right-no-reverse") ||
                                s
                                    .find(".dropdown-submenu")
                                    .addClass("dropdown-reverse"));
                    else {
                        var r = !1;
                        (o.checkReverse = function () {
                            r ||
                                (o.$wrapper
                                    .find(".dropdown, .dropdown-submenu")
                                    .removeClass("dropdown-reverse"),
                                o.$wrapper
                                    .find(
                                        ".dropdown:not(.manual):not(.dropdown-mega), .dropdown-submenu:not(.manual)"
                                    )
                                    .each(function () {
                                        e(this)
                                            .find(".dropdown-menu")
                                            .visible(!1, !0, "horizontal") ||
                                            e(this).addClass(
                                                "dropdown-reverse"
                                            );
                                    }),
                                (r = !0));
                        }),
                            e(window).on("resize", function () {
                                r = !1;
                            }),
                            s.on("mouseover", function () {
                                o.checkReverse();
                            });
                    }
                    (a.hasClass("header-nav-main-clone-items") &&
                        a.find("nav > ul > li > a").each(function () {
                            var t = e(this).parent(),
                                i = e(this).clone(),
                                o = e(this).clone(),
                                n = e(
                                    '<span class="wrapper-items-cloned"></span>'
                                );
                            e(this).addClass("item-original"),
                                o.addClass("item-two"),
                                t.prepend(n),
                                n.append(i).append(o);
                        }),
                    e("#header.header-floating-icons").length &&
                        e(window).width() > 991) &&
                        {
                            $menuFloating: e(
                                "#header.header-floating-icons .header-container > .header-row"
                            ),
                            build: function () {
                                this.init();
                            },
                            init: function () {
                                var t = this,
                                    i = 0;
                                e(window).scroll(function () {
                                    var o =
                                            (100 * e(window).scrollTop()) /
                                            (e(document).height() -
                                                e(window).height()),
                                        n = e(this).scrollTop();
                                    (i =
                                        e(document).height() /
                                        e(window).height()),
                                        t.$menuFloating
                                            .find(
                                                ".header-column > .header-row"
                                            )
                                            .css({
                                                transform:
                                                    "translateY( calc(" +
                                                    o +
                                                    "vh - " +
                                                    n / i +
                                                    "px) )",
                                            });
                                });
                            },
                        }.build();
                    if (e(".header-nav-links-vertical-slide").length) {
                        var l = {
                            $mainNav: e("#mainNav"),
                            $mainNavItem: e("#mainNav li"),
                            build: function () {
                                this.menuNav();
                            },
                            menuNav: function () {
                                this.$mainNavItem.on("click", function (t) {
                                    var o = e(this),
                                        n = e(this).parent(),
                                        s = e(this).find("ul").first(),
                                        a = e(this).closest(".next-menu"),
                                        r =
                                            o.hasClass("dropdown") ||
                                            o.hasClass("dropdown-submenu"),
                                        l = o.hasClass("back-button"),
                                        d =
                                            s.find("> li").length *
                                                s.find("> li").outerHeight() -
                                            s.outerHeight(),
                                        c =
                                            a.find("> li").length *
                                                a.find("> li").outerHeight() -
                                            a.outerHeight();
                                    if (r) {
                                        for (
                                            n.addClass("next-menu"),
                                                s.addClass("visible"),
                                                n.css({
                                                    overflow: "visible",
                                                    "overflow-y": "visible",
                                                }),
                                                d > 0 &&
                                                    s.css({
                                                        overflow: "hidden",
                                                        "overflow-y": "scroll",
                                                    }),
                                                i = 0;
                                            i < s.find("> li").length;
                                            i++
                                        )
                                            s.outerHeight() <
                                                e(
                                                    ".header-row-side-header"
                                                ).outerHeight() -
                                                    100 &&
                                                s.css({
                                                    height:
                                                        s.outerHeight() +
                                                        s
                                                            .find("> li")
                                                            .outerHeight(),
                                                });
                                        s.css({ "padding-top": d + "px" });
                                    }
                                    l &&
                                        (n
                                            .parent()
                                            .parent()
                                            .removeClass("next-menu"),
                                        n.removeClass("visible"),
                                        c > 0 &&
                                            a.css({
                                                overflow: "hidden",
                                                "overflow-y": "scroll",
                                            })),
                                        t.stopPropagation();
                                });
                            },
                        };
                        e(window).trigger("resize"),
                            e(window).width() > 991 && l.build(),
                            e(document).ready(function () {
                                e(window).afterResize(function () {
                                    e(window).width() > 991 && l.build();
                                });
                            });
                    }
                    if (
                        (e(".header-nav-main-mobile-dark").length &&
                            e(
                                "#header:not(.header-transparent-dark-bottom-border):not(.header-transparent-light-bottom-border)"
                            ).addClass("header-no-border-bottom"),
                        e(window).width() > 991)
                    ) {
                        var d = !1;
                        s.find(".header-nav-main nav > ul > li > a").on(
                            "focus",
                            function () {
                                e(window).width() > 991 &&
                                    (d ||
                                        ((d = !0),
                                        e(this).trigger("blur"),
                                        o.focusMenuWithChildren()));
                            }
                        );
                    }
                    return this;
                },
                focusMenuWithChildren: function () {
                    var t,
                        e,
                        i,
                        o = document.querySelector(
                            "html:not(.side-header):not(.side-header-hamburguer-sidebar):not(.side-header-overlay-full-screen) .header-nav-main > nav"
                        );
                    if (!o) return !1;
                    for (
                        e = 0, i = (t = o.getElementsByTagName("a")).length;
                        e < i;
                        e++
                    )
                        t[e].addEventListener("focus", n, !0),
                            t[e].addEventListener("blur", n, !0);
                    function n() {
                        for (
                            var t = this;
                            -1 === t.className.indexOf("header-nav-main");

                        )
                            "li" === t.tagName.toLowerCase() &&
                                (-1 !==
                                t.className.indexOf("accessibility-open")
                                    ? (t.className = t.className.replace(
                                          " accessibility-open",
                                          ""
                                      ))
                                    : (t.className += " accessibility-open")),
                                (t = t.parentElement);
                    }
                },
                events: function () {
                    var i = this,
                        o = e("html"),
                        n = e("#header"),
                        s = e(window),
                        a = e(".header-body").outerHeight();
                    n.hasClass("header") && (n = e(".header")),
                        n.find('a[href="#"]').on("click", function (t) {
                            t.preventDefault();
                        }),
                        o.hasClass("side-header-hamburguer-sidebar")
                            ? n
                                  .find(
                                      ".dropdown-toggle, .dropdown-submenu > a"
                                  )
                                  .append(
                                      '<i class="fas fa-chevron-down fa-chevron-right"></i>'
                                  )
                            : n
                                  .find(
                                      ".dropdown-toggle, .dropdown-submenu > a"
                                  )
                                  .append(
                                      '<i class="fas fa-chevron-down"></i>'
                                  ),
                        n
                            .find(
                                '.dropdown-toggle[href="#"], .dropdown-submenu a[href="#"], .dropdown-toggle[href!="#"] .fa-chevron-down, .dropdown-submenu a[href!="#"] .fa-chevron-down'
                            )
                            .on("click", function (i) {
                                if ((i.preventDefault(), s.width() < 992)) {
                                    e(this).closest("li").toggleClass("open");
                                    var r =
                                        n.hasClass("header-effect-shrink") &&
                                        o.hasClass("sticky-header-active")
                                            ? t.StickyHeader.options
                                                  .stickyHeaderContainerHeight
                                            : a;
                                    e(".header-body").animate(
                                        {
                                            height:
                                                e(
                                                    ".header-nav-main nav"
                                                ).outerHeight(!0) +
                                                r +
                                                10,
                                        },
                                        0
                                    );
                                }
                            }),
                        n.find("li a.active").addClass("current-page-active"),
                        n
                            .find(
                                '.header-nav-click-to-open .dropdown-toggle[href="#"], .header-nav-click-to-open .dropdown-submenu a[href="#"], .header-nav-click-to-open .dropdown-toggle > i'
                            )
                            .on("click", function (t) {
                                if (
                                    (!e("html").hasClass(
                                        "side-header-hamburguer-sidebar"
                                    ) &&
                                        s.width() > 991 &&
                                        (t.preventDefault(),
                                        t.stopPropagation()),
                                    s.width() > 991)
                                ) {
                                    if (
                                        (t.preventDefault(),
                                        t.stopPropagation(),
                                        n
                                            .find("li a.active")
                                            .removeClass("active"),
                                        "I" == e(this).prop("tagName")
                                            ? e(this)
                                                  .parent()
                                                  .addClass("active")
                                            : e(this).addClass("active"),
                                        e(this).closest("li").hasClass("open"))
                                    )
                                        e(this)
                                            .closest("li")
                                            .removeClass("open"),
                                            n
                                                .find("li a.active")
                                                .removeClass("active"),
                                            n
                                                .find(
                                                    "li a.current-page-active"
                                                )
                                                .addClass("active");
                                    else {
                                        var i = e(this).closest("li"),
                                            o = !1;
                                        "I" == e(this).prop("tagName") &&
                                            (e(
                                                "#header .dropdown.open"
                                            ).removeClass("open"),
                                            e(
                                                "#header .dropdown-menu .dropdown-submenu.open"
                                            ).removeClass("open")),
                                            e(this)
                                                .parent()
                                                .hasClass("dropdown-submenu") &&
                                                (o = !0),
                                            e(this)
                                                .closest(".dropdown-menu")
                                                .find(".dropdown-submenu.open")
                                                .removeClass("open"),
                                            e(this)
                                                .parent(".dropdown")
                                                .parent()
                                                .find(".dropdown.open")
                                                .removeClass("open"),
                                            o ||
                                                e(this)
                                                    .parent()
                                                    .find(
                                                        ".dropdown-submenu.open"
                                                    )
                                                    .removeClass("open"),
                                            i.addClass("open"),
                                            e(document)
                                                .off("click.nav-click-to-open")
                                                .on(
                                                    "click.nav-click-to-open",
                                                    function (t) {
                                                        i.is(t.target) ||
                                                            0 !==
                                                                i.has(t.target)
                                                                    .length ||
                                                            (i.removeClass(
                                                                "open"
                                                            ),
                                                            i
                                                                .parents(
                                                                    ".open"
                                                                )
                                                                .removeClass(
                                                                    "open"
                                                                ),
                                                            n
                                                                .find(
                                                                    "li a.active"
                                                                )
                                                                .removeClass(
                                                                    "active"
                                                                ),
                                                            n
                                                                .find(
                                                                    "li a.current-page-active"
                                                                )
                                                                .addClass(
                                                                    "active"
                                                                ));
                                                    }
                                                );
                                    }
                                    s.trigger({
                                        type: "resize",
                                        from: "header-nav-click-to-open",
                                    });
                                }
                            }),
                        n.find("[data-collapse-nav]").on("click", function (t) {
                            e(this).parents(".collapse").removeClass("show");
                        }),
                        n
                            .find(".header-nav-features-toggle")
                            .on("click", function (t) {
                                t.preventDefault();
                                var i = e(this).parent();
                                if (
                                    e(this)
                                        .siblings(
                                            ".header-nav-features-dropdown"
                                        )
                                        .hasClass("show")
                                )
                                    e(this)
                                        .siblings(
                                            ".header-nav-features-dropdown"
                                        )
                                        .removeClass("show");
                                else {
                                    var o = e(this).siblings(
                                        ".header-nav-features-dropdown"
                                    );
                                    e(
                                        ".header-nav-features-dropdown.show"
                                    ).removeClass("show"),
                                        o.addClass("show"),
                                        e(document)
                                            .off(
                                                "click.header-nav-features-toggle"
                                            )
                                            .on(
                                                "click.header-nav-features-toggle",
                                                function (t) {
                                                    i.is(t.target) ||
                                                        0 !==
                                                            i.has(t.target)
                                                                .length ||
                                                        e(
                                                            ".header-nav-features-dropdown.show"
                                                        ).removeClass("show");
                                                }
                                            ),
                                        e(this).attr("data-focus") &&
                                            e(
                                                "#" + e(this).attr("data-focus")
                                            ).focus();
                                }
                            });
                    var r = e(".hamburguer-btn:not(.side-panel-toggle)"),
                        l = e(
                            "#header.side-header, #header.side-header-overlay-full-screen"
                        );
                    if (
                        (r.on("click", function () {
                            "false" != e(this).attr("data-set-active") &&
                                e(this).toggleClass("active"),
                                l.toggleClass("side-header-hide"),
                                o.toggleClass("side-header-hide"),
                                s.trigger("resize");
                        }),
                        e(".hamburguer-close:not(.side-panel-toggle)").on(
                            "click",
                            function () {
                                e(
                                    ".hamburguer-btn:not(.hamburguer-btn-side-header-mobile-show)"
                                ).trigger("click");
                            }
                        ),
                        e(".header-nav-main nav").on(
                            "show.bs.collapse",
                            function () {
                                e(this).removeClass("closed"),
                                    e("html").addClass("mobile-menu-opened"),
                                    e(".header-body").animate({
                                        height:
                                            e(".header-body").outerHeight() +
                                            e(
                                                ".header-nav-main nav"
                                            ).outerHeight(!0) +
                                            10,
                                    }),
                                    e("#header").is(
                                        ".header-bottom-slider, .header-below-slider"
                                    ) &&
                                        !e("html").hasClass(
                                            "sticky-header-active"
                                        ) &&
                                        i.scrollToTarget(e("#header"), 0);
                            }
                        ),
                        e(".header-nav-main nav").on(
                            "hide.bs.collapse",
                            function () {
                                e(this).addClass("closed"),
                                    e("html").removeClass("mobile-menu-opened"),
                                    e(".header-body").animate(
                                        {
                                            height:
                                                e(
                                                    ".header-body"
                                                ).outerHeight() -
                                                e(
                                                    ".header-nav-main nav"
                                                ).outerHeight(!0),
                                        },
                                        function () {
                                            e(this).height("auto");
                                        }
                                    );
                            }
                        ),
                        // s.on("stickyHeader.activate", function () {
                        //     s.width() < 992 &&
                        //         n.hasClass("header-effect-shrink") &&
                        //         "true" ==
                        //             e(".header-btn-collapse-nav").attr(
                        //                 "aria-expanded"
                        //             ) &&
                        //         e(".header-body").animate({
                        //             height:
                        //                 e(".header-nav-main nav").outerHeight(
                        //                     !0
                        //                 ) +
                        //                 t.StickyHeader.options
                        //                     .stickyHeaderContainerHeight +
                        //                 (e(".header-nav-bar").length
                        //                     ? e(".header-nav-bar").outerHeight()
                        //                     : 0),
                        //         });
                        // }),
                        // s.on("stickyHeader.deactivate", function () {
                        //     s.width() < 992 &&
                        //         n.hasClass("header-effect-shrink") &&
                        //         "true" ==
                        //             e(".header-btn-collapse-nav").attr(
                        //                 "aria-expanded"
                        //             ) &&
                        //         e(".header-body").animate({
                        //             height:
                        //                 a +
                        //                 e(".header-nav-main nav").outerHeight(
                        //                     !0
                        //                 ) +
                        //                 10,
                        //         });
                        // }),
                        s.on("resize.removeOpen", function (t) {
                            "header-nav-click-to-open" != t.from &&
                                setTimeout(function () {
                                    s.width() > 991 &&
                                        n
                                            .find(".dropdown.open")
                                            .removeClass("open");
                                }, 100);
                        }),
                        e(document).ready(function () {
                            if (s.width() > 991) {
                                var t = !1;
                                s.on("resize", function (i) {
                                    "header-nav-click-to-open" != i.from &&
                                        (n
                                            .find(".dropdown.open")
                                            .removeClass("open"),
                                        s.width() < 992 &&
                                            0 == t &&
                                            ((a =
                                                e(
                                                    ".header-body"
                                                ).outerHeight()),
                                            (t = !0),
                                            setTimeout(function () {
                                                t = !1;
                                            }, 500)));
                                });
                            }
                        }),
                        o.hasClass("side-header") &&
                            (s.width() < 992 &&
                                n.css({
                                    height:
                                        e(
                                            ".header-body .header-container"
                                        ).outerHeight() +
                                        (parseInt(
                                            e(".header-body").css(
                                                "border-top-width"
                                            )
                                        ) +
                                            parseInt(
                                                e(".header-body").css(
                                                    "border-bottom-width"
                                                )
                                            )),
                                }),
                            e(document).ready(function () {
                                s.afterResize(function () {
                                    s.width() < 992
                                        ? n.css({
                                              height:
                                                  e(
                                                      ".header-body .header-container"
                                                  ).outerHeight() +
                                                  (parseInt(
                                                      e(".header-body").css(
                                                          "border-top-width"
                                                      )
                                                  ) +
                                                      parseInt(
                                                          e(".header-body").css(
                                                              "border-bottom-width"
                                                          )
                                                      )),
                                          })
                                        : n.css({ height: "" });
                                });
                            })),
                        e("[data-hash]").length &&
                            e("[data-hash]").on("mouseover", function () {
                                var t = e(this);
                                if (!t.data("__dataHashBinded")) {
                                    var n = t.attr("href"),
                                        a = t.is("[data-hash-offset]")
                                            ? t.data("hash-offset")
                                            : 0,
                                        r = t.is("[data-hash-delay]")
                                            ? t.data("hash-delay")
                                            : 0,
                                        d = !!t.is("[data-hash-force]");
                                    e(n).length ||
                                        (n = "#" + (n = n.split("#"))[1]),
                                        -1 != n.indexOf("#") &&
                                            e(n).length &&
                                            t.on("click", function (c) {
                                                c.preventDefault(),
                                                    (e(c.target).is("i") &&
                                                        !d) ||
                                                        setTimeout(function () {
                                                            if (
                                                                (t
                                                                    .parents(
                                                                        ".collapse.show"
                                                                    )
                                                                    .collapse(
                                                                        "hide"
                                                                    ),
                                                                l.addClass(
                                                                    "side-header-hide"
                                                                ),
                                                                o.addClass(
                                                                    "side-header-hide"
                                                                ),
                                                                s.trigger(
                                                                    "resize"
                                                                ),
                                                                i.scrollToTarget(
                                                                    n,
                                                                    a
                                                                ),
                                                                t.data(
                                                                    "hash-trigger-click"
                                                                ))
                                                            ) {
                                                                var r = e(
                                                                        t.data(
                                                                            "hash-trigger-click"
                                                                        )
                                                                    ),
                                                                    d = t.data(
                                                                        "hash-trigger-click-delay"
                                                                    )
                                                                        ? t.data(
                                                                              "hash-trigger-click-delay"
                                                                          )
                                                                        : 0;
                                                                r.length &&
                                                                    setTimeout(
                                                                        function () {
                                                                            r.closest(
                                                                                ".nav-tabs"
                                                                            )
                                                                                .length
                                                                                ? new bootstrap.Tab(
                                                                                      r[0]
                                                                                  ).show()
                                                                                : r.trigger(
                                                                                      "click"
                                                                                  );
                                                                        },
                                                                        d
                                                                    );
                                                            }
                                                        }, r);
                                            }),
                                        e(this).data("__dataHashBinded", !0);
                                }
                            }),
                        e("#header.header-floating-icons").length &&
                            e("#header.header-floating-icons [data-hash]")
                                .off()
                                .each(function () {
                                    var t = e(this).attr("href"),
                                        i = e(this).is("[data-hash-offset]")
                                            ? e(this).data("hash-offset")
                                            : 0;
                                    e(t).length &&
                                        e(this).on("click", function (o) {
                                            o.preventDefault(),
                                                e("html, body").animate(
                                                    {
                                                        scrollTop:
                                                            e(t).offset().top -
                                                            i,
                                                    },
                                                    600,
                                                    "easeOutQuad",
                                                    function () {}
                                                );
                                        });
                                }),
                        e(".side-panel-toggle").length)
                    ) {
                        var d = e("html").attr("class");
                        e(".side-panel-toggle").on("click", function (t) {
                            var i = e(this).data("extra-class"),
                                o = i ? 100 : 0,
                                n =
                                    !!e(this).data("is-active") &&
                                    e(this).data("is-active");
                            if ((t.preventDefault(), n))
                                return (
                                    e("html").removeClass("side-panel-open"),
                                    e(this).data("is-active", !1),
                                    !1
                                );
                            i &&
                                (e(".side-panel-wrapper").css(
                                    "transition",
                                    "none"
                                ),
                                e("html")
                                    .removeClass()
                                    .addClass(d)
                                    .addClass(i)),
                                setTimeout(function () {
                                    e(".side-panel-wrapper").css(
                                        "transition",
                                        ""
                                    ),
                                        e("html").toggleClass(
                                            "side-panel-open"
                                        );
                                }, o),
                                e(this).data("is-active", !0);
                        }),
                            e(document).on("click", function (t) {
                                e(t.target).closest(".side-panel-wrapper")
                                    .length ||
                                    e(t.target).hasClass("side-panel-toggle") ||
                                    (e(
                                        ".hamburguer-btn.side-panel-toggle:not(.side-panel-close)"
                                    ).removeClass("active"),
                                    e("html").removeClass("side-panel-open"));
                            });
                    }
                    return this;
                },
                scrollToTarget: function (i, o, n) {
                    var s = this;
                    return (
                        e("body").addClass("scrolling"),
                        e("html, body").animate(
                            { scrollTop: e(i).offset().top - o },
                            s.options.scrollDelay,
                            s.options.scrollAnimation,
                            function () {
                                e("body").removeClass("scrolling"),
                                    t.fn.isElementInView(e(i)) ||
                                        (0 == n &&
                                            (s.scrollToTarget(i, o, !1),
                                            (n = !0)));
                            }
                        ),
                        this
                    );
                },
            },
        });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        t = t || {};
        var i = !1;
        e.extend(t, {
            Newsletter: {
                defaults: { wrapper: e("#newsletterForm") },
                initialize: function (t, e) {
                    return i
                        ? this
                        : ((i = !0),
                          (this.$wrapper = t || this.defaults.wrapper),
                          this.setOptions(e).build(),
                          this);
                },
                setOptions: function (i) {
                    return (
                        (this.options = e.extend(
                            !0,
                            {},
                            this.defaults,
                            i,
                            t.fn.getOptions(
                                this.$wrapper.data("plugin-options")
                            )
                        )),
                        this
                    );
                },
                build: function () {
                    if (!e.isFunction(e.fn.validate)) return this;
                    var t = this,
                        i = t.$wrapper.find("#newsletterEmail"),
                        o = e("#newsletterSuccess"),
                        n = e("#newsletterError");
                    return (
                        t.$wrapper.validate({
                            submitHandler: function (s) {
                                e.ajax({
                                    type: "POST",
                                    url: t.$wrapper.attr("action"),
                                    data: { email: i.val() },
                                    dataType: "json",
                                    success: function (t) {
                                        "success" == t.response
                                            ? (o.removeClass("d-none"),
                                              n.addClass("d-none"),
                                              i
                                                  .val("")
                                                  .blur()
                                                  .closest(".control-group")
                                                  .removeClass("success")
                                                  .removeClass("error"))
                                            : (n.html(t.message),
                                              n.removeClass("d-none"),
                                              o.addClass("d-none"),
                                              i
                                                  .blur()
                                                  .closest(".control-group")
                                                  .removeClass("success")
                                                  .addClass("error"));
                                    },
                                });
                            },
                            rules: {
                                newsletterEmail: { required: !0, email: !0 },
                            },
                            errorPlacement: function (t, e) {},
                        }),
                        this
                    );
                },
            },
        });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        t = t || {};
        var i = !1;
        e.extend(t, {
            Search: {
                defaults: { wrapper: e("#searchForm") },
                initialize: function (t, e) {
                    return i
                        ? this
                        : ((i = !0),
                          (this.$wrapper = t || this.defaults.wrapper),
                          this.setOptions(e).build(),
                          this);
                },
                setOptions: function (i) {
                    return (
                        (this.options = e.extend(
                            !0,
                            {},
                            this.defaults,
                            i,
                            t.fn.getOptions(
                                this.$wrapper.data("plugin-options")
                            )
                        )),
                        this
                    );
                },
                build: function () {
                    return e.isFunction(e.fn.validate)
                        ? (this.$wrapper.validate({
                              errorPlacement: function (t, e) {},
                          }),
                          t.fn.execOnceTroughEvent(
                              "#header",
                              "mouseover.search.reveal",
                              function () {
                                  e(".header-nav-features-search-reveal").each(
                                      function () {
                                          var t = e(this),
                                              i = e("#header"),
                                              o = e("html");
                                          t
                                              .find(
                                                  ".header-nav-features-search-show-icon"
                                              )
                                              .on("click", function () {
                                                  t.addClass("show"),
                                                      i.addClass("search-show"),
                                                      o.addClass("search-show"),
                                                      e(
                                                          "#headerSearch"
                                                      ).focus();
                                              }),
                                              t
                                                  .find(
                                                      ".header-nav-features-search-hide-icon"
                                                  )
                                                  .on("click", function () {
                                                      t.removeClass("show"),
                                                          i.removeClass(
                                                              "search-show"
                                                          ),
                                                          o.removeClass(
                                                              "search-show"
                                                          );
                                                  });
                                      }
                                  );
                              }
                          ),
                          this)
                        : this;
                },
            },
        });
    }.apply(this, [window.theme, jQuery]),
    function (t, e) {
        t = t || {};
        var i = !1;
        e.extend(t, {
            StickyHeader: {
                defaults: {
                    wrapper: e("#header"),
                    headerBody: e("#header .header-body"),
                    stickyEnabled: !0,
                    stickyEnableOnBoxed: !0,
                    stickyEnableOnMobile: !1,
                    stickyStartAt: 0,
                    stickyStartAtElement: !1,
                    stickySetTop: 0,
                    stickyEffect: "",
                    stickyHeaderContainerHeight: !1,
                    stickyChangeLogo: !1,
                    stickyChangeLogoWrapper: !0,
                    stickyForce: !1,
                    stickyScrollUp: !1,
                    stickyScrollValue: 0,
                },
                initialize: function (t, o) {
                    return i
                        ? this
                        : ((i = !0),
                          (this.$wrapper = t || this.defaults.wrapper),
                          this.$wrapper.hasClass("header") &&
                              (this.$wrapper = e(
                                  ".header[data-plugin-options]"
                              )),
                          this.setOptions(o).build().events(),
                          this);
                },
                setOptions: function (i) {
                    return (
                        (this.options = e.extend(
                            !0,
                            {},
                            this.defaults,
                            i,
                            t.fn.getOptions(
                                this.$wrapper.data("plugin-options")
                            )
                        )),
                        this
                    );
                },
                build: function () {
                    if (
                        e(window).width() < 992 &&
                        0 == this.options.stickyEnableOnMobile
                    )
                        return (
                            e("html").addClass("sticky-header-mobile-enabled"),
                            this
                        );
                    if (
                        (!this.options.stickyEnableOnBoxed &&
                            e("html").hasClass("boxed")) ||
                        (e("html").hasClass("side-header-hamburguer-sidebar") &&
                            !this.options.stickyForce) ||
                        !this.options.stickyEnabled
                    )
                        return this;
                    var i = this;
                    i.options.wrapper.hasClass("header") &&
                        ((i.options.wrapper = e(".header")),
                        (i.options.headerBody = e(".header .header-body")));
                    var o = e("html"),
                        n = e(window),
                        s = o.hasClass("side-header"),
                        a = i.options.wrapper.find(".header-top").outerHeight(),
                        r = i.options.wrapper
                            .find(".header-container")
                            .outerHeight();
                    if (
                        (o.addClass("sticky-header-enabled"),
                        parseInt(i.options.stickySetTop) < 0 &&
                            o.addClass("sticky-header-negative"),
                        i.options.stickyScrollUp &&
                            o.addClass("sticky-header-scroll-direction"),
                        e(".notice-top-bar").get(0) &&
                            ((1 != parseInt(i.options.stickySetTop) &&
                                "shrink" != i.options.stickyEffect) ||
                                e(".body").on(
                                    "transitionend webkitTransitionEnd oTransitionEnd",
                                    function () {
                                        setTimeout(function () {
                                            o.hasClass(
                                                "sticky-header-active"
                                            ) ||
                                                i.options.headerBody.animate(
                                                    {
                                                        top: e(
                                                            ".notice-top-bar"
                                                        ).outerHeight(),
                                                    },
                                                    300,
                                                    function () {
                                                        o.hasClass(
                                                            "sticky-header-active"
                                                        ) &&
                                                            i.options.headerBody.css(
                                                                "top",
                                                                0
                                                            );
                                                    }
                                                );
                                        }, 0);
                                    }
                                )),
                        i.options.stickyStartAtElement)
                    ) {
                        var l = e(i.options.stickyStartAtElement);
                        e(window).on(
                            "scroll resize sticky.header.resize",
                            function () {
                                i.options.stickyStartAt = l.offset().top;
                            }
                        ),
                            e(window).trigger("sticky.header.resize");
                    }
                    i.options.wrapper.find(".header-top").get(0),
                        s ||
                            (e(".header-logo-sticky-change").get(0)
                                ? n.on("stickyChangeLogo.loaded", function () {
                                      i.options.wrapper.css(
                                          "height",
                                          i.options.headerBody.outerHeight()
                                      );
                                  })
                                : i.options.wrapper.css(
                                      "height",
                                      i.options.headerBody.outerHeight()
                                  ),
                            "shrink" == i.options.stickyEffect &&
                                (e(document).ready(function () {
                                    n.scrollTop() >= i.options.stickyStartAt
                                        ? i.options.wrapper
                                              .find(".header-container")
                                              .on(
                                                  "transitionend webkitTransitionEnd oTransitionEnd",
                                                  function () {
                                                      i.options.headerBody.css(
                                                          "position",
                                                          "fixed"
                                                      );
                                                  }
                                              )
                                        : o.hasClass("boxed") ||
                                          i.options.headerBody.css(
                                              "position",
                                              "fixed"
                                          );
                                }),
                                i.options.wrapper
                                    .find(".header-container")
                                    .css("height", r),
                                i.options.wrapper
                                    .find(".header-top")
                                    .css("height", a))),
                        i.options.stickyHeaderContainerHeight &&
                            i.options.wrapper
                                .find(".header-container")
                                .css(
                                    "height",
                                    i.options.wrapper
                                        .find(".header-container")
                                        .outerHeight()
                                ),
                        o.hasClass("boxed") &&
                            "shrink" == i.options.stickyEffect &&
                            i.boxedLayout();
                    var d = !0,
                        c = !1,
                        p = i.options.stickyStartAt;
                    if (
                        ((i.checkStickyHeader = function () {
                            var t = e(".notice-top-bar");
                            if (
                                (t.get(0)
                                    ? (i.options.stickyStartAt = t.data(
                                          "sticky-start-at"
                                      )
                                          ? t.data("sticky-start-at")
                                          : e(".notice-top-bar").outerHeight())
                                    : o.hasClass("boxed")
                                    ? (i.options.stickyStartAt = p + 25)
                                    : (i.options.stickyStartAt = p),
                                n.width() > 991 && o.hasClass("side-header"))
                            )
                                return (
                                    o.removeClass("sticky-header-active"),
                                    void (d = !0)
                                );
                            n.scrollTop() >= parseInt(i.options.stickyStartAt)
                                ? d &&
                                  (i.activateStickyHeader(), (d = !1), (c = !0))
                                : c &&
                                  (i.deactivateStickyHeader(),
                                  (c = !1),
                                  (d = !0)),
                                i.options.stickyScrollUp &&
                                    ((i.options.stickyScrollNewValue =
                                        window.pageYOffset),
                                    i.options.stickyScrollValue -
                                        i.options.stickyScrollNewValue <
                                    0
                                        ? o
                                              .removeClass(
                                                  "sticky-header-scroll-up"
                                              )
                                              .addClass(
                                                  "sticky-header-scroll-down"
                                              )
                                        : i.options.stickyScrollValue -
                                              i.options.stickyScrollNewValue >
                                              0 &&
                                          o
                                              .removeClass(
                                                  "sticky-header-scroll-down"
                                              )
                                              .addClass(
                                                  "sticky-header-scroll-up"
                                              ),
                                    (i.options.stickyScrollValue =
                                        i.options.stickyScrollNewValue));
                        }),
                        (i.activateStickyHeader = function () {
                            if (n.width() < 992) {
                                if (0 == i.options.stickyEnableOnMobile)
                                    return (
                                        i.deactivateStickyHeader(),
                                        i.options.headerBody.css({
                                            position: "relative",
                                        }),
                                        !1
                                    );
                            } else if (s)
                                return void i.deactivateStickyHeader();
                            if (
                                (o.addClass("sticky-header-active"),
                                "reveal" == i.options.stickyEffect &&
                                    (i.options.headerBody.css(
                                        "top",
                                        "-" + i.options.stickyStartAt + "px"
                                    ),
                                    i.options.headerBody.animate(
                                        { top: i.options.stickySetTop },
                                        400,
                                        function () {}
                                    )),
                                "shrink" == i.options.stickyEffect)
                            )
                                if (
                                    (i.options.wrapper
                                        .find(".header-top")
                                        .get(0) &&
                                        i.options.wrapper
                                            .find(".header-top")
                                            .css({
                                                height: 0,
                                                "min-height": 0,
                                                overflow: "hidden",
                                            }),
                                    i.options.stickyHeaderContainerHeight)
                                )
                                    i.options.wrapper
                                        .find(".header-container")
                                        .css({
                                            height: i.options
                                                .stickyHeaderContainerHeight,
                                            "min-height": 0,
                                        });
                                else {
                                    i.options.wrapper
                                        .find(".header-container")
                                        .css({
                                            height: (r / 3) * 2,
                                            "min-height": 0,
                                        });
                                    var a = r - (r / 3) * 2;
                                    e(".main")
                                        .css({
                                            // transform:
                                            //     "translate3d(0, -" +
                                            //     a +
                                            //     "px, 0)",
                                            transition: "ease transform 300ms",
                                        })
                                        .addClass(
                                            "has-sticky-header-transform"
                                        ),
                                        o.hasClass("boxed") &&
                                            i.options.headerBody.css(
                                                "position",
                                                "fixed"
                                            );
                                }
                            i.options.headerBody.css(
                                "top",
                                i.options.stickySetTop
                            ),
                                i.options.stickyChangeLogo && i.changeLogo(!0),
                                e("[data-sticky-header-style]").length &&
                                    e("[data-sticky-header-style]").each(
                                        function () {
                                            var i = e(this),
                                                o = t.fn.getOptions(
                                                    i.data(
                                                        "sticky-header-style-active"
                                                    )
                                                ),
                                                s = t.fn.getOptions(
                                                    i.data(
                                                        "sticky-header-style"
                                                    )
                                                );
                                            n.width() > s.minResolution &&
                                                i.css(o);
                                        }
                                    ),
                                e.event.trigger({
                                    type: "stickyHeader.activate",
                                });
                        }),
                        (i.deactivateStickyHeader = function () {
                            if (
                                (o.removeClass("sticky-header-active"),
                                e(window).width() < 992 &&
                                    0 == i.options.stickyEnableOnMobile)
                            )
                                return !1;
                            "shrink" == i.options.stickyEffect &&
                                (o.hasClass("boxed")
                                    ? (i.options.headerBody.css(
                                          "position",
                                          "absolute"
                                      ),
                                      n.scrollTop() > e(".body").offset().top &&
                                          i.options.headerBody.css(
                                              "position",
                                              "fixed"
                                          ))
                                    : i.options.headerBody.css(
                                          "position",
                                          "fixed"
                                      ),
                                i.options.wrapper.find(".header-top").get(0) &&
                                    (i.options.wrapper
                                        .find(".header-top")
                                        .css({
                                            height: a,
                                            overflow: "visible",
                                        }),
                                    i.options.wrapper.find(
                                        ".header-top [data-icon]"
                                    ).length &&
                                        t.fn.intObsInit(
                                            ".header-top [data-icon]:not(.svg-inline--fa)",
                                            "themePluginIcon"
                                        )),
                                i.options.wrapper
                                    .find(".header-container")
                                    .css({ height: r })),
                                i.options.headerBody.css("top", 0),
                                i.options.stickyChangeLogo && i.changeLogo(!1),
                                e("[data-sticky-header-style]").length &&
                                    e("[data-sticky-header-style]").each(
                                        function () {
                                            var i = e(this),
                                                o = t.fn.getOptions(
                                                    i.data(
                                                        "sticky-header-style-deactive"
                                                    )
                                                ),
                                                s = t.fn.getOptions(
                                                    i.data(
                                                        "sticky-header-style"
                                                    )
                                                );
                                            n.width() > s.minResolution &&
                                                i.css(o);
                                        }
                                    ),
                                e.event.trigger({
                                    type: "stickyHeader.deactivate",
                                });
                        }),
                        parseInt(i.options.stickyStartAt) <= 0 &&
                            i.activateStickyHeader(),
                        i.options.stickyChangeLogo)
                    ) {
                        var h = i.options.wrapper.find(".header-logo"),
                            u = h.find("img"),
                            f = u.attr("width"),
                            g = u.attr("height"),
                            v = parseInt(
                                u.attr("data-sticky-top")
                                    ? u.attr("data-sticky-top")
                                    : 0
                            ),
                            m = parseInt(
                                u.attr("data-sticky-width")
                                    ? u.attr("data-sticky-width")
                                    : "auto"
                            ),
                            w = parseInt(
                                u.attr("data-sticky-height")
                                    ? u.attr("data-sticky-height")
                                    : "auto"
                            );
                        i.options.stickyChangeLogoWrapper &&
                            h.css({
                                width: u.outerWidth(!0),
                                height: u.outerHeight(!0),
                            }),
                            (i.changeLogo = function (t) {
                                t
                                    ? u.css({ top: v, width: m, height: w })
                                    : u.css({ top: 0, width: f, height: g });
                            }),
                            e.event.trigger({
                                type: "stickyChangeLogo.loaded",
                            });
                    }
                    var y,
                        b = !1;
                    return (
                        (i.checkSideHeader = function () {
                            n.width() < 992 &&
                                0 == b &&
                                ((y = i.options.headerBody.height()), (b = !0)),
                                0 == i.options.stickyStartAt &&
                                    s &&
                                    i.options.wrapper.css("min-height", 0),
                                i.options.stickyStartAt > 0 &&
                                    s &&
                                    n.width() < 992 &&
                                    i.options.wrapper.css("min-height", y);
                        }),
                        this
                    );
                },
                events: function () {
                    var t = this;
                    return e(window).width() < 992 &&
                        0 == this.options.stickyEnableOnMobile
                        ? this
                        : (!this.options.stickyEnableOnBoxed &&
                              e("body").hasClass("boxed")) ||
                          (e("html").hasClass(
                              "side-header-hamburguer-sidebar"
                          ) &&
                              !this.options.stickyForce) ||
                          !this.options.stickyEnabled
                        ? this
                        : (t.options.alwaysStickyEnabled
                              ? t.activateStickyHeader()
                              : e(window).on("scroll resize", function () {
                                    e(window).width() < 992 &&
                                    0 == t.options.stickyEnableOnMobile
                                        ? (t.options.headerBody.css({
                                              position: "",
                                          }),
                                          "shrink" == t.options.stickyEffect &&
                                              t.options.wrapper
                                                  .find(".header-top")
                                                  .css({ height: "" }),
                                          t.deactivateStickyHeader())
                                        : t.checkStickyHeader();
                                }),
                          e(window).on("load resize", function () {
                              t.checkSideHeader();
                          }),
                          e(window).on("layout.boxed", function () {
                              t.boxedLayout();
                          }),
                          this);
                },
                boxedLayout: function () {
                    var t = this,
                        i = e(window);
                    return (
                        e("html").hasClass("boxed") &&
                            "shrink" == t.options.stickyEffect &&
                            (0 == parseInt(t.options.stickyStartAt) &&
                                i.width() > 991 &&
                                (t.options.stickyStartAt = 30),
                            t.options.headerBody.css({
                                position: "absolute",
                                top: 0,
                            }),
                            i.on("scroll", function () {
                                i.scrollTop() > e(".body").offset().top
                                    ? t.options.headerBody.css({
                                          position: "fixed",
                                          top: 0,
                                      })
                                    : t.options.headerBody.css({
                                          position: "absolute",
                                          top: 0,
                                      });
                            })),
                        this
                    );
                },
            },
        });
    }.apply(this, [window.theme, jQuery]);
