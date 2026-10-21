/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

var xl = Object.create;
var Gt = Object.defineProperty;
var kl = Object.getOwnPropertyDescriptor;
var Nl = Object.getOwnPropertyNames;
var Ll = Object.getPrototypeOf,
  Fl = Object.prototype.hasOwnProperty;
var Dl = (n, e, t) =>
  e in n
    ? Gt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (n[e] = t);
var O = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var Bl = (n, e, t, r) => {
  if ((e && typeof e == "object") || typeof e == "function")
    for (let s of Nl(e))
      !Fl.call(n, s) &&
        s !== t &&
        Gt(n, s, {
          get: () => e[s],
          enumerable: !(r = kl(e, s)) || r.enumerable,
        });
  return n;
};
var ti = (n, e, t) => (
  (t = n != null ? xl(Ll(n)) : {}),
  Bl(
    e || !n || !n.__esModule
      ? Gt(t, "default", { value: n, enumerable: !0 })
      : t,
    n
  )
);
var st = (n, e, t) => (Dl(n, typeof e != "symbol" ? e + "" : e, t), t);
var ri = O((Wt) => {
  "use strict";
  Object.defineProperty(Wt, "__esModule", { value: !0 });
  function Vl(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Vl(Wt, {
    CORE_OPERATORS: function () {
      return qt;
    },
    DEFAULTS: function () {
      return zt;
    },
    DEFAULT_CUSTOM_EASE: function () {
      return ql;
    },
    EASE_DEFAULTS: function () {
      return ni;
    },
    PERCENT_CANVAS_DURATION_S: function () {
      return $l;
    },
    RELATIONSHIP_TYPES: function () {
      return Ht;
    },
    STANDARD_TRIGGER_ALLOWED_CONTROLS: function () {
      return zl;
    },
    TimelineControlType: function () {
      return Ut;
    },
    TweenType: function () {
      return $t;
    },
    isValidControlType: function () {
      return jl;
    },
    tweenTypeFromName: function () {
      return Gl;
    },
    tweenTypeToName: function () {
      return Ul;
    },
  });
  var Ut;
  (function (n) {
    (n.STANDARD = "standard"),
      (n.SCROLL = "scroll"),
      (n.LOAD = "load"),
      (n.CONTINUOUS = "continuous");
  })(Ut || (Ut = {}));
  function jl(n) {
    return (
      n === "standard" || n === "scroll" || n === "load" || n === "continuous"
    );
  }
  var $t;
  (function (n) {
    (n[(n.To = 0)] = "To"),
      (n[(n.From = 1)] = "From"),
      (n[(n.FromTo = 2)] = "FromTo"),
      (n[(n.Set = 3)] = "Set");
  })($t || ($t = {}));
  function Gl(n) {
    switch (n) {
      case "to":
        return 0;
      case "from":
        return 1;
      case "both":
        return 2;
      case "set":
        return 3;
    }
  }
  function Ul(n) {
    switch (n) {
      case 0:
        return "to";
      case 1:
        return "from";
      case 2:
        return "both";
      case 3:
        return "set";
      default:
        return null;
    }
  }
  var qt;
  (function (n) {
    (n.AND = "wf:and"), (n.OR = "wf:or");
  })(qt || (qt = {}));
  var zt;
  (function (n) {
    n[(n.DURATION = 0.5)] = "DURATION";
  })(zt || (zt = {}));
  var $l = 1,
    Ht;
  (function (n) {
    (n.NONE = "none"),
      (n.WITHIN = "within"),
      (n.DIRECT_CHILD_OF = "direct-child-of"),
      (n.CONTAINS = "contains"),
      (n.DIRECT_PARENT_OF = "direct-parent-of"),
      (n.NEXT_TO = "next-to"),
      (n.NEXT_SIBLING_OF = "next-sibling-of"),
      (n.PREV_SIBLING_OF = "prev-sibling-of");
  })(Ht || (Ht = {}));
  var ni = {
      back: { type: "back", curve: "out", power: 1.7 },
      elastic: { type: "elastic", curve: "out", amplitude: 1, period: 0.3 },
      steps: { type: "steps", stepCount: 6 },
      rough: {
        type: "rough",
        templateCurve: "none.inOut",
        points: 20,
        strength: 1,
        taper: "none",
        randomizePoints: !0,
        clampPoints: !1,
      },
      slowMo: { type: "slowMo", linearRatio: 0.7, power: 0.7, yoyoMode: !1 },
      expoScale: {
        type: "expoScale",
        startingScale: 0.05,
        endingScale: 1,
        templateCurve: "none.inOut",
      },
      customWiggle: {
        type: "customWiggle",
        wiggles: 10,
        wiggleType: "easeOut",
      },
      customBounce: {
        type: "customBounce",
        strength: 0.7,
        squash: 1,
        endAtStart: !1,
      },
      customEase: {
        type: "customEase",
        bezierCurve: "M0,160 C40,160 24,96 80,96 136,96 120,0 160,0",
      },
    },
    ql = ni.back,
    zl = [
      "restart",
      "play",
      "reverse",
      "reverseFlipEase",
      "pause",
      "resume",
      "togglePlayReverse",
      "togglePlayReverseFlipEase",
      "stop",
      "none",
    ];
});
var si = O((Yt) => {
  "use strict";
  Object.defineProperty(Yt, "__esModule", { value: !0 });
  function Hl(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Hl(Yt, {
    claimPageLevelTriggerWin: function () {
      return Kl;
    },
    getPageLevelTriggerState: function () {
      return Wl;
    },
    hasPageLevelTriggerWon: function () {
      return Yl;
    },
    releasePageLevelTriggerFired: function () {
      return Ql;
    },
    resetPageLevelTriggerState: function () {
      return Xl;
    },
  });
  var Ae = new WeakMap();
  function Wl(n) {
    let e = Ae.get(n);
    return (
      e || ((e = { fired: !1, won: !1, deadline: void 0 }), Ae.set(n, e)), e
    );
  }
  function Yl(n) {
    return Ae.get(n)?.won === !0;
  }
  function Kl(n) {
    let e = Ae.get(n);
    e && (e.won = !0);
  }
  function Xl(n) {
    Ae.delete(n);
  }
  function Ql(n) {
    let e = Ae.get(n);
    e && ((e.fired = !1), (e.won = !1));
  }
});
var ii = O((Xt) => {
  "use strict";
  Object.defineProperty(Xt, "__esModule", { value: !0 });
  Object.defineProperty(Xt, "RuntimeBuilder", {
    enumerable: !0,
    get: function () {
      return Kt;
    },
  });
  var Kt = class {
    baseInfo;
    extensions = [];
    lifecycle = {};
    constructor(e) {
      this.baseInfo = e;
    }
    addTrigger(e, t) {
      let r = `${this.baseInfo.namespace}:${e}`;
      return (
        this.extensions.push({
          extensionPoint: "trigger",
          id: r,
          triggerType: r,
          implementation: t,
        }),
        this
      );
    }
    addRoleActivationObserver(e, t) {
      let r = `${this.baseInfo.namespace}:${e}`;
      return (
        this.extensions.push({
          extensionPoint: "roleActivationObserver",
          id: r,
          implementation: t,
        }),
        this
      );
    }
    addRoleAppliedQuery(e, t) {
      let r = `${this.baseInfo.namespace}:${e}`;
      return (
        this.extensions.push({
          extensionPoint: "roleAppliedQuery",
          id: r,
          implementation: t,
        }),
        this
      );
    }
    addAction(e, t) {
      let r = `${this.baseInfo.namespace}:${e}`;
      return (
        this.extensions.push({
          extensionPoint: "action",
          id: r,
          actionType: r,
          implementation: t,
        }),
        this
      );
    }
    addTargetResolver(e, t) {
      let r = `${this.baseInfo.namespace}:${e}`;
      return (
        this.extensions.push({
          extensionPoint: "targetResolver",
          id: r,
          resolverType: r,
          implementation: t,
        }),
        this
      );
    }
    addCondition(e, t) {
      let r = `${this.baseInfo.namespace}:${e}`;
      return (
        this.extensions.push({
          extensionPoint: "condition",
          id: r,
          conditionType: r,
          implementation: t,
        }),
        this
      );
    }
    onInitialize(e) {
      return (this.lifecycle.initialize = e), this;
    }
    onActivate(e) {
      return (this.lifecycle.activate = e), this;
    }
    onDeactivate(e) {
      return (this.lifecycle.deactivate = e), this;
    }
    onDispose(e) {
      return (this.lifecycle.dispose = e), this;
    }
    createManifest() {
      let e = this.extensions.map((t) => `${t.extensionPoint}:${t.id}`);
      return {
        id: [this.baseInfo.namespace, this.baseInfo.pluginId],
        version: this.baseInfo.version,
        name: this.baseInfo.displayName || this.baseInfo.pluginId,
        description: this.baseInfo.description || "",
        dependencies: this.baseInfo.dependencies,
        features: e,
      };
    }
    buildRuntime() {
      return {
        manifest: this.createManifest(),
        extensions: this.extensions,
        ...this.lifecycle,
      };
    }
  };
});
var oi = O((en) => {
  "use strict";
  Object.defineProperty(en, "__esModule", { value: !0 });
  function Zl(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Zl(en, {
    ConditionCategoryBuilder: function () {
      return at;
    },
    DesignBuilder: function () {
      return Jt;
    },
    TargetCategoryBuilder: function () {
      return it;
    },
    TriggerCategoryBuilder: function () {
      return ot;
    },
  });
  var Qt = class {
      categoryBuilder;
      groupConfig;
      properties;
      constructor(e, t) {
        (this.categoryBuilder = e),
          (this.groupConfig = t),
          (this.properties = []);
      }
      addProperty(e, t, r) {
        return (
          this.properties.push({
            id: e,
            schema: { ...t, description: r?.description || t.description },
          }),
          this
        );
      }
      addGroup(e) {
        return (
          this.categoryBuilder.finalizeGroup({
            ...this.groupConfig,
            properties: this.properties,
          }),
          this.categoryBuilder.clearCurrentGroupBuilder(),
          this.categoryBuilder.addGroup(e)
        );
      }
      getGroupData() {
        return { ...this.groupConfig, properties: this.properties };
      }
    },
    Zt = class {
      categoryId;
      config;
      displayGroups;
      currentGroupBuilder;
      constructor(e, t) {
        (this.categoryId = e),
          (this.config = t),
          (this.displayGroups = []),
          (this.currentGroupBuilder = null);
      }
      addGroup(e) {
        return (
          this.currentGroupBuilder &&
            this.finalizeGroup(this.currentGroupBuilder.getGroupData()),
          (this.currentGroupBuilder = new Qt(this, e)),
          this.currentGroupBuilder
        );
      }
      finalizeGroup(e) {
        this.displayGroups.push(e);
      }
      clearCurrentGroupBuilder() {
        this.currentGroupBuilder = null;
      }
      getDefinition() {
        this.currentGroupBuilder &&
          (this.finalizeGroup(this.currentGroupBuilder.getGroupData()),
          (this.currentGroupBuilder = null));
        let e = this.displayGroups.flatMap((t) => t.properties);
        return {
          id: this.categoryId,
          properties: e,
          propertyType: this.config.propertyType || "tween",
          displayGroups: this.displayGroups,
        };
      }
    },
    it = class {
      categoryId;
      config;
      targets;
      constructor(e, t) {
        (this.categoryId = e), (this.config = t), (this.targets = []);
      }
      addTargetSchema(e, t) {
        return this.targets.push({ id: e, schema: t }), this;
      }
      getDefinition() {
        return {
          id: this.categoryId,
          label: this.config.label,
          order: this.config.order,
          targets: this.targets,
        };
      }
    },
    ot = class {
      categoryId;
      config;
      triggers;
      constructor(e, t) {
        (this.categoryId = e), (this.config = t), (this.triggers = []);
      }
      addTriggerSchema(e, t) {
        return this.triggers.push({ id: e, schema: t }), this;
      }
      getDefinition() {
        return {
          id: this.categoryId,
          label: this.config.label,
          order: this.config.order,
          triggers: this.triggers,
        };
      }
    },
    at = class {
      categoryId;
      config;
      conditions;
      constructor(e, t) {
        (this.categoryId = e), (this.config = t), (this.conditions = []);
      }
      addConditionSchema(e, t) {
        return this.conditions.push({ id: e, schema: t }), this;
      }
      getDefinition() {
        return {
          id: this.categoryId,
          label: this.config.label,
          order: this.config.order,
          conditions: this.conditions,
        };
      }
    },
    Jt = class {
      baseInfo;
      categories = new Map();
      targetCategories = new Map();
      triggerCategories = new Map();
      conditionCategories = new Map();
      actionPresets = new Map();
      reducerHooks = [];
      constructor(e) {
        this.baseInfo = e;
      }
      addCategory(e, t = {}) {
        let r = new Zt(e, t);
        return this.categories.set(e, r), r;
      }
      addTargetCategory(e, t) {
        let r = new it(e, t);
        return this.targetCategories.set(e, r), r;
      }
      addTriggerCategory(e, t) {
        let r = new ot(e, t);
        return this.triggerCategories.set(e, r), r;
      }
      addConditionCategory(e, t) {
        let r = new at(e, t);
        return this.conditionCategories.set(e, r), r;
      }
      addActionPreset(e, t) {
        let r = `${this.baseInfo.namespace}:${e}`;
        return (
          this.actionPresets.set(r, {
            id: r,
            name: t.name,
            description: t.description,
            icon: t.icon,
            timelineIcon: t.timelineIcon,
            type: "plugin",
            categoryId: t.categoryId,
            action: t.action,
            customEditor: t.customEditor,
            targetFilter: t.targetFilter,
            designerTargetFilter: t.designerTargetFilter,
            customTargetComponent: t.customTargetComponent,
          }),
          this
        );
      }
      addReducerHooks(e) {
        return this.reducerHooks.push(e), this;
      }
      buildDesign() {
        let e = [];
        for (let [, o] of this.categories) e.push(o.getDefinition());
        let t = [];
        for (let [, o] of this.targetCategories) t.push(o.getDefinition());
        let r = [];
        for (let [, o] of this.triggerCategories) r.push(o.getDefinition());
        let s = [];
        for (let [, o] of this.conditionCategories) s.push(o.getDefinition());
        let i = [];
        for (let [, o] of this.actionPresets) i.push(o);
        return {
          namespace: this.baseInfo.namespace,
          pluginId: this.baseInfo.pluginId,
          version: this.baseInfo.version,
          displayName: this.baseInfo.displayName,
          description: this.baseInfo.description,
          categories: e.length > 0 ? e : void 0,
          targetCategories: t.length > 0 ? t : void 0,
          triggerCategories: r.length > 0 ? r : void 0,
          conditionCategories: s.length > 0 ? s : void 0,
          actionPresets: i.length > 0 ? i : void 0,
          reducerHooks:
            this.reducerHooks.length > 0 ? [...this.reducerHooks] : void 0,
        };
      }
    };
});
var ai = O((nn) => {
  "use strict";
  Object.defineProperty(nn, "__esModule", { value: !0 });
  Object.defineProperty(nn, "TransformBuilder", {
    enumerable: !0,
    get: function () {
      return tn;
    },
  });
  var tn = class {
    baseInfo;
    triggerTransforms = new Map();
    targetTransforms = new Map();
    conditionTransforms = new Map();
    actionTransforms = new Map();
    constructor(e) {
      this.baseInfo = e;
    }
    addTargetTransform(e, t) {
      return (
        this.targetTransforms.set(
          this.createExtensionKey(e),
          function (s, i, o) {
            return t(s, i, o);
          }
        ),
        this
      );
    }
    addTriggerTransform(e, t) {
      return (
        this.triggerTransforms.set(
          this.createExtensionKey(e),
          function (s, i, o) {
            return t(s, i, o);
          }
        ),
        this
      );
    }
    addConditionTransform(e, t) {
      return (
        this.conditionTransforms.set(
          this.createExtensionKey(e),
          function (s, i, o) {
            return t(s, i, o);
          }
        ),
        this
      );
    }
    addActionTransform(e, t) {
      return (
        this.actionTransforms.set(
          this.createExtensionKey(e),
          function (s, i, o) {
            return t(s, i, o);
          }
        ),
        this
      );
    }
    createExtensionKey(e) {
      return `${this.baseInfo.namespace}:${e}`;
    }
    buildTransform() {
      return {
        namespace: this.baseInfo.namespace,
        pluginId: this.baseInfo.pluginId,
        version: this.baseInfo.version,
        displayName: this.baseInfo.displayName,
        description: this.baseInfo.description,
        triggerTransforms: this.triggerTransforms,
        targetTransforms: this.targetTransforms,
        conditionTransforms: this.conditionTransforms,
        actionTransforms: this.actionTransforms,
      };
    }
  };
});
var ci = O((li) => {
  "use strict";
  Object.defineProperty(li, "__esModule", { value: !0 });
});
var K = O((pe) => {
  "use strict";
  Object.defineProperty(pe, "__esModule", { value: !0 });
  function Jl(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Jl(pe, {
    CORE_OPERATORS: function () {
      return X.CORE_OPERATORS;
    },
    DEFAULTS: function () {
      return X.DEFAULTS;
    },
    DEFAULT_CUSTOM_EASE: function () {
      return X.DEFAULT_CUSTOM_EASE;
    },
    EASE_DEFAULTS: function () {
      return X.EASE_DEFAULTS;
    },
    PERCENT_CANVAS_DURATION_S: function () {
      return X.PERCENT_CANVAS_DURATION_S;
    },
    RELATIONSHIP_TYPES: function () {
      return X.RELATIONSHIP_TYPES;
    },
    STANDARD_TRIGGER_ALLOWED_CONTROLS: function () {
      return X.STANDARD_TRIGGER_ALLOWED_CONTROLS;
    },
    TimelineControlType: function () {
      return X.TimelineControlType;
    },
    TweenType: function () {
      return X.TweenType;
    },
    claimPageLevelTriggerWin: function () {
      return Le.claimPageLevelTriggerWin;
    },
    getPageLevelTriggerState: function () {
      return Le.getPageLevelTriggerState;
    },
    hasPageLevelTriggerWon: function () {
      return Le.hasPageLevelTriggerWon;
    },
    isValidControlType: function () {
      return X.isValidControlType;
    },
    releasePageLevelTriggerFired: function () {
      return Le.releasePageLevelTriggerFired;
    },
    resetPageLevelTriggerState: function () {
      return Le.resetPageLevelTriggerState;
    },
    tweenTypeFromName: function () {
      return X.tweenTypeFromName;
    },
    tweenTypeToName: function () {
      return X.tweenTypeToName;
    },
  });
  var X = ri(),
    Le = si();
  lt(ii(), pe);
  lt(oi(), pe);
  lt(ai(), pe);
  lt(ci(), pe);
  function lt(n, e) {
    return (
      Object.keys(n).forEach(function (t) {
        t !== "default" &&
          !Object.prototype.hasOwnProperty.call(e, t) &&
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return n[t];
            },
          });
      }),
      n
    );
  }
});
var ee = O((rn) => {
  "use strict";
  Object.defineProperty(rn, "__esModule", { value: !0 });
  function ec(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  ec(rn, {
    DEFAULT_ROOT_FONT_SIZE_PX: function () {
      return rc;
    },
    EASING_NAMES: function () {
      return pc;
    },
    buildCustomEaseId: function () {
      return dc;
    },
    buildEaseContextId: function () {
      return fc;
    },
    debounce: function () {
      return cc;
    },
    defaultSplitClass: function () {
      return lc;
    },
    hasResolvableScrollUnit: function () {
      return oc;
    },
    isValidControlType: function () {
      return tc;
    },
    resolveScrollUnits: function () {
      return ac;
    },
    throttle: function () {
      return uc;
    },
    toSeconds: function () {
      return nc;
    },
  });
  var ct = K();
  function tc(n) {
    return (
      n === ct.TimelineControlType.STANDARD ||
      n === ct.TimelineControlType.SCROLL ||
      n === ct.TimelineControlType.LOAD ||
      n === ct.TimelineControlType.CONTINUOUS
    );
  }
  function nc(n) {
    return typeof n == "string" ? parseFloat(n) / 1e3 : n;
  }
  var rc = 16,
    ui = "vh|vw|rem",
    fi = "\\d+(?:\\.\\d+)?",
    sc = new RegExp(`${fi}(?:${ui})`),
    ic = new RegExp(`(${fi})(${ui})`, "g");
  function oc(n) {
    return sc.test(n);
  }
  function ac(n, e) {
    return n.replace(ic, (t, r, s) =>
      String(Math.round(parseFloat(r) * e[s] * 100) / 100)
    );
  }
  function lc(n) {
    return `gsap_split_${n}++`;
  }
  var cc = (
      n,
      e = 0,
      { leading: t = !1, trailing: r = !0, maxWait: s } = {}
    ) => {
      let i,
        o = 0,
        a,
        l,
        c = () => {
          (o = 0), (i = void 0), r && n.apply(a, l);
        };
      function u(...f) {
        (a = this), (l = f), o || ((o = performance.now()), t && n.apply(a, l));
        let d = performance.now() - o;
        if (s && d >= s) {
          clearTimeout(i), c();
          return;
        }
        clearTimeout(i), (i = setTimeout(c, e));
      }
      return (
        (u.cancel = () => {
          clearTimeout(i), (i = void 0), (o = 0);
        }),
        u
      );
    },
    uc = (n, e = 0, { leading: t = !0, trailing: r = !0, maxWait: s } = {}) => {
      let i = 0,
        o,
        a,
        l,
        c = (f) => {
          (i = f), (o = void 0), n.apply(a, l);
        };
      function u(...f) {
        let d = performance.now();
        !i && !t && (i = d);
        let p = e - (d - i);
        (a = this),
          (l = f),
          p <= 0 || (s && d - i >= s)
            ? (o && (clearTimeout(o), (o = void 0)), c(d))
            : r && !o && (o = setTimeout(() => c(performance.now()), p));
      }
      return (
        (u.cancel = () => {
          clearTimeout(o), (o = void 0), (i = 0);
        }),
        u
      );
    };
  function fc(n, e) {
    return `${n}-${e}`;
  }
  function dc(n, e) {
    return e ? `${n}-${e}` : n;
  }
  var pc = [
    "none",
    "power1.in",
    "power1.out",
    "power1.inOut",
    "power2.in",
    "power2.out",
    "power2.inOut",
    "power3.in",
    "power3.out",
    "power3.inOut",
    "power4.in",
    "power4.out",
    "power4.inOut",
    "back.in",
    "back.out",
    "back.inOut",
    "bounce.in",
    "bounce.out",
    "bounce.inOut",
    "circ.in",
    "circ.out",
    "circ.inOut",
    "elastic.in",
    "elastic.out",
    "elastic.inOut",
    "expo.in",
    "expo.out",
    "expo.inOut",
    "sine.in",
    "sine.out",
    "sine.inOut",
  ];
});
var di = O((sn) => {
  "use strict";
  Object.defineProperty(sn, "__esModule", { value: !0 });
  Object.defineProperty(sn, "EventManager", {
    enumerable: !0,
    get: function () {
      return ut;
    },
  });
  var Fe = ee(),
    Re = class {
      elementHandlers = new WeakMap();
      eventTypeHandlers = new Map();
      customEventTypes = new Map();
      delegatedHandlers = new Map();
      batchedEvents = new Map();
      batchFrameId = null;
      defaultMaxBatchSize = 10;
      defaultMaxBatchAge = 100;
      defaultErrorHandler = (e, t) =>
        console.error("[EventManager] Error handling event:", e, t);
      constructor() {}
      static getInstance() {
        return Re.instance || (Re.instance = new Re()), Re.instance;
      }
      addEventListener(e, t, r, s) {
        try {
          let i = s?.kind === "custom",
            o = {
              ...(i ? { delegate: !1, passive: !0, batch: !1 } : gc[t] || {}),
              ...s,
              errorHandler: s?.errorHandler || this.defaultErrorHandler,
            };
          if (!i && t === "load" && "complete" in e && e.complete)
            return (
              setTimeout(() => {
                try {
                  r(new Event("load"), e);
                } catch (u) {
                  o.errorHandler?.(u, new Event("load"));
                }
              }, 0),
              () => {}
            );
          if (!e || !e.addEventListener)
            throw new Error("Invalid element provided to addEventListener");
          let a = this.createWrappedHandler(r, o, e),
            l = this.registerHandler(e, t, r, a.handler, o, i, a.cleanup);
          if (i)
            return () => {
              this.removeHandler(e, t, r, !0), l.cleanup?.();
            };
          let c = new AbortController();
          return (
            o.delegate
              ? this.ensureDelegatedHandler(t)
              : (hc(o) || e).addEventListener(t, l.wrappedHandler, {
                  passive: o.passive,
                  capture: o.capture,
                  signal: c.signal,
                }),
            () => {
              c.abort(), this.removeHandler(e, t, r, !1);
            }
          );
        } catch (i) {
          return s?.errorHandler?.(i, new Event(t)), () => {};
        }
      }
      emit(e, t, r, s) {
        try {
          let i = this.customEventTypes.get(e);
          if (!i?.size) return;
          let o = new CustomEvent(e, {
            detail: t,
            bubbles: s?.bubbles ?? !0,
            cancelable: !0,
          });
          for (let a of i)
            if (!r || r === a.element || a.element.contains(r))
              try {
                a.wrappedHandler(o);
              } catch (l) {
                console.error(`[EventManager] Error emitting ${e}:`, l);
              }
        } catch (i) {
          console.error(`[EventManager] Error emitting custom event ${e}:`, i);
        }
      }
      dispose() {
        this.batchFrameId !== null &&
          (cancelAnimationFrame(this.batchFrameId),
          (this.batchFrameId = null),
          this.batchedEvents.clear());
        for (let [, e] of this.delegatedHandlers) e.controller.abort();
        for (let [, e] of this.eventTypeHandlers)
          for (let t of e) t.cleanup?.();
        for (let [, e] of this.customEventTypes) for (let t of e) t.cleanup?.();
        this.delegatedHandlers.clear(),
          (this.elementHandlers = new WeakMap()),
          this.eventTypeHandlers.clear(),
          this.customEventTypes.clear();
      }
      createWrappedHandler(e, t, r) {
        let s = (i) => {
          try {
            let o =
              t.target === "window"
                ? window
                : t.target === "document"
                ? document
                : r;
            e(i, o);
          } catch (o) {
            (t.errorHandler || this.defaultErrorHandler)(o, i);
          }
        };
        if (t.batch) {
          let i = (o) => {
            let a = o.type || "unknown";
            this.batchedEvents.has(a) || this.batchedEvents.set(a, []),
              this.batchedEvents
                .get(a)
                .push({
                  event: o,
                  target: r,
                  timestamp: o.timeStamp || performance.now(),
                }),
              this.batchFrameId == null &&
                (this.batchFrameId = requestAnimationFrame(() =>
                  this.processBatchedEvents()
                ));
          };
          if (t.throttleMs && t.throttleMs > 0) {
            let o = (0, Fe.throttle)(s, t.throttleMs);
            return { handler: i, cleanup: o.cancel };
          }
          if (t.debounceMs && t.debounceMs > 0) {
            let o = (0, Fe.debounce)(s, t.debounceMs);
            return { handler: i, cleanup: o.cancel };
          }
          return { handler: i };
        }
        if (t.throttleMs && t.throttleMs > 0) {
          let i = (0, Fe.throttle)(s, t.throttleMs);
          if (t.debounceMs && t.debounceMs > 0) {
            let o = (0, Fe.debounce)(i, t.debounceMs);
            return {
              handler: o,
              cleanup: () => {
                o.cancel?.(), i.cancel?.();
              },
            };
          }
          return { handler: i, cleanup: i.cancel };
        }
        if (t.debounceMs && t.debounceMs > 0) {
          let i = (0, Fe.debounce)(s, t.debounceMs);
          return { handler: i, cleanup: i.cancel };
        }
        return { handler: s };
      }
      processBatchedEvents() {
        if (this.batchFrameId === null) return;
        this.batchFrameId = null;
        let e = performance.now();
        for (let [t, r] of this.batchedEvents) {
          let s = this.eventTypeHandlers.get(t);
          if (!s?.size) continue;
          let i = r.filter((a) => e - a.timestamp < this.defaultMaxBatchAge);
          if (!i.length) continue;
          i.sort((a, l) => a.timestamp - l.timestamp);
          let o =
            i.length <= this.defaultMaxBatchSize
              ? i
              : i.slice(-this.defaultMaxBatchSize);
          for (let { event: a, target: l } of o) {
            let c = a;
            (c.batchTimestamp = e), (c.batchSize = o.length);
            for (let u of s)
              try {
                (u.config.delegate ||
                  u.config.target === "window" ||
                  u.config.target === "document" ||
                  l === a.target ||
                  l.contains(a.target)) &&
                  u.wrappedHandler(c);
              } catch (f) {
                (u.config.errorHandler || this.defaultErrorHandler)(f, c);
              }
          }
        }
        this.batchedEvents.clear();
      }
      ensureDelegatedHandler(e) {
        if (this.delegatedHandlers.has(e)) return;
        let t = new AbortController(),
          r = (i) => {
            let o = this.eventTypeHandlers.get(e);
            if (!o?.size) return;
            let a = i.composedPath
              ? i.composedPath()
              : i.target
              ? [i.target]
              : [];
            for (let l of a)
              if (l instanceof Element) {
                for (let c of o) {
                  if (!c.config.delegate) continue;
                  if (c.element === l || c.element.contains(l))
                    try {
                      c.wrappedHandler(i);
                    } catch (f) {
                      console.error(`[EventDelegator] Error for ${e}:`, f);
                    }
                }
                if (!i.bubbles) break;
              }
          },
          s = [
            "focus",
            "blur",
            "focusin",
            "focusout",
            "mouseenter",
            "mouseleave",
          ].includes(e);
        document.addEventListener(e, r, {
          passive: !1,
          capture: s,
          signal: t.signal,
        }),
          this.delegatedHandlers.set(e, { handler: r, controller: t });
      }
      registerHandler(e, t, r, s, i, o, a) {
        let l = {
          element: e,
          originalHandler: r,
          wrappedHandler: s,
          config: i,
          cleanup: a,
        };
        if (o) {
          let c = this.customEventTypes.get(t) || new Set();
          c.add(l), this.customEventTypes.set(t, c);
        } else {
          let c = this.elementHandlers.get(e) || new Set();
          c.add(l), this.elementHandlers.set(e, c);
          let u = this.eventTypeHandlers.get(t) || new Set();
          u.add(l), this.eventTypeHandlers.set(t, u);
        }
        return l;
      }
      removeHandler(e, t, r, s) {
        if (s) {
          let i = this.customEventTypes.get(t);
          if (!i?.size) return;
          for (let o of i)
            if (o.element === e && o.originalHandler === r) {
              i.delete(o),
                i.size || this.customEventTypes.delete(t),
                o.cleanup?.();
              break;
            }
        } else {
          let i = this.eventTypeHandlers.get(t);
          if (!i?.size) return;
          let o = this.elementHandlers.get(e);
          if (!o?.size) return;
          let a;
          for (let l of o)
            if (l.originalHandler === r) {
              a = l;
              break;
            }
          if (a) {
            if ((o.delete(a), i.delete(a), !i.size)) {
              this.eventTypeHandlers.delete(t);
              let l = this.delegatedHandlers.get(t);
              l && (l.controller.abort(), this.delegatedHandlers.delete(t));
            }
            a.cleanup?.();
          }
        }
      }
    },
    ut = Re;
  st(ut, "instance");
  function hc(n) {
    return n.target === "window"
      ? window
      : n.target === "document"
      ? document
      : null;
  }
  var gc = {
    load: { delegate: !1, passive: !0 },
    DOMContentLoaded: { target: "document", passive: !0 },
    readystatechange: { target: "document", passive: !0 },
    beforeunload: { target: "window", passive: !1 },
    unload: { target: "window", passive: !1 },
    pageshow: { target: "window", passive: !0 },
    pagehide: { target: "window", passive: !0 },
    click: { delegate: !0, passive: !1 },
    dblclick: { delegate: !0, passive: !0 },
    mousedown: { delegate: !0, passive: !0 },
    mouseup: { delegate: !0, passive: !0 },
    mousemove: { delegate: !0, batch: !0, passive: !0 },
    mouseenter: { delegate: !1, passive: !0 },
    mouseleave: { delegate: !1, passive: !0 },
    mouseout: { delegate: !0, passive: !0 },
    contextmenu: { delegate: !0, passive: !1 },
    wheel: { delegate: !0, throttleMs: 16, passive: !0, batch: !0 },
    touchstart: { delegate: !0, passive: !0 },
    touchend: { delegate: !0, passive: !1 },
    touchmove: { delegate: !0, batch: !0, passive: !0 },
    touchcancel: { delegate: !0, passive: !0 },
    pointerdown: { delegate: !0, passive: !0 },
    pointerup: { delegate: !0, passive: !0 },
    pointermove: { delegate: !0, batch: !0, passive: !0 },
    pointerenter: { delegate: !1, passive: !0 },
    pointerleave: { delegate: !1, passive: !0 },
    pointercancel: { delegate: !0, passive: !0 },
    keydown: { delegate: !0, passive: !1 },
    keyup: { delegate: !0, passive: !1 },
    keypress: { delegate: !0, passive: !1 },
    input: { delegate: !0, passive: !1 },
    change: { delegate: !0, passive: !1 },
    focus: { delegate: !1, passive: !0 },
    blur: { delegate: !1, passive: !0 },
    focusin: { delegate: !0, passive: !0 },
    focusout: { delegate: !0, passive: !0 },
    submit: { delegate: !0, passive: !1 },
    reset: { delegate: !0, passive: !1 },
    select: { delegate: !0, passive: !0 },
    selectionchange: { target: "document", passive: !0 },
    dragstart: { delegate: !0, passive: !1 },
    drag: { delegate: !0, passive: !0 },
    dragenter: { delegate: !0, passive: !1 },
    dragleave: { delegate: !0, passive: !0 },
    dragover: { delegate: !0, passive: !1 },
    drop: { delegate: !0, passive: !1 },
    dragend: { delegate: !0, passive: !0 },
    play: { delegate: !0, passive: !0 },
    pause: { delegate: !0, passive: !0 },
    ended: { delegate: !0, passive: !0 },
    timeupdate: { delegate: !0, batch: !0, passive: !0 },
    canplay: { delegate: !0, passive: !0 },
    canplaythrough: { delegate: !0, passive: !0 },
    loadeddata: { delegate: !0, passive: !0 },
    animationstart: { delegate: !0, passive: !0 },
    animationend: { delegate: !0, passive: !0 },
    animationiteration: { delegate: !0, passive: !0 },
    transitionstart: { delegate: !0, passive: !0 },
    transitionend: { delegate: !0, passive: !0 },
    transitionrun: { delegate: !0, passive: !0 },
    transitioncancel: { delegate: !0, passive: !0 },
    scroll: { delegate: !1, throttleMs: 16, passive: !0 },
    resize: { target: "window", throttleMs: 16, passive: !0 },
    intersection: { delegate: !1, passive: !0 },
    orientationchange: { target: "window", passive: !0 },
    visibilitychange: { target: "document", passive: !0 },
    storage: { target: "window", passive: !0 },
    online: { target: "window", passive: !0 },
    offline: { target: "window", passive: !0 },
    hashchange: { target: "window", passive: !0 },
    popstate: { target: "window", passive: !0 },
    copy: { delegate: !0, passive: !1 },
    cut: { delegate: !0, passive: !1 },
    paste: { delegate: !0, passive: !1 },
    compositionstart: { delegate: !0, passive: !1 },
    compositionupdate: { delegate: !0, passive: !1 },
    compositionend: { delegate: !0, passive: !1 },
    beforeinput: { delegate: !0, passive: !1 },
  };
});
var pi = O((an) => {
  "use strict";
  Object.defineProperty(an, "__esModule", { value: !0 });
  Object.defineProperty(an, "PluginRuntimeBridge", {
    enumerable: !0,
    get: function () {
      return on;
    },
  });
  var on = class {
    intervalHandlers = new Map();
    channelSubscribers = new Map();
    registerIntervalHandler(e, t) {
      let r = this.intervalHandlers.get(e);
      r !== t &&
        (r !== void 0 &&
          console.warn(
            "IX3: registerIntervalHandler called twice. The previous handler is being replaced; verify the plugin is registered exactly once (or use a unique pluginKey per concurrent handler).",
            { pluginKey: e }
          ),
        this.intervalHandlers.set(e, t));
    }
    fireInterval(e) {
      for (let [t, r] of this.intervalHandlers)
        try {
          r(e);
        } catch (s) {
          console.error(
            "IX3: interval handler threw. Continuing with the remaining handlers. Investigate the plugin to prevent silent data drift.",
            { pluginKey: t },
            s
          );
        }
    }
    publish(e, t, r) {
      let s = this.channelSubscribers.get(e);
      if (s) {
        for (let i of s.values())
          for (let o of i.slice())
            if (!(o.element && r && o.element !== r))
              try {
                o.cb(t);
              } catch (a) {
                console.error(
                  "IX3: channel subscriber threw. Continuing with remaining subscribers.",
                  { channel: e },
                  a
                );
              }
      }
    }
    subscribe(e, t, r, s) {
      let i = this.channelSubscribers.get(t);
      i || ((i = new Map()), this.channelSubscribers.set(t, i));
      let o = i.get(e) ?? [],
        a = { element: r, cb: s };
      return (
        o.push(a),
        i.set(e, o),
        () => {
          let l = this.channelSubscribers.get(t)?.get(e);
          if (!l) return;
          let c = l.indexOf(a);
          c !== -1 && l.splice(c, 1),
            l.length === 0 &&
              (this.channelSubscribers.get(t)?.delete(e),
              this.channelSubscribers.get(t)?.size === 0 &&
                this.channelSubscribers.delete(t));
        }
      );
    }
    destroyTimeline(e) {
      for (let [t, r] of this.channelSubscribers)
        r.delete(e), r.size === 0 && this.channelSubscribers.delete(t);
    }
  };
});
var hi = O((cn) => {
  "use strict";
  Object.defineProperty(cn, "__esModule", { value: !0 });
  Object.defineProperty(cn, "RuntimeMotionDriver", {
    enumerable: !0,
    get: function () {
      return ln;
    },
  });
  var ln = class {
    env;
    constructor(e) {
      this.env = e;
    }
    hasGsap() {
      return this.env.win.gsap != null;
    }
    hasObserver() {
      return this.env.win.Observer != null;
    }
    timeline() {
      return this.env.win.gsap?.timeline() ?? null;
    }
    to(...e) {
      return this.env.win.gsap?.to(...e) ?? null;
    }
    set(...e) {
      this.env.win.gsap?.set(...e);
    }
    getProperty(...e) {
      return this.env.win.gsap?.getProperty(...e) ?? 0;
    }
    quickSetter(...e) {
      return this.env.win.gsap?.quickSetter(...e) ?? null;
    }
    quickTo(...e) {
      return this.env.win.gsap?.quickTo(...e) ?? null;
    }
    addTicker(e) {
      let t = this.env.win.gsap;
      if (t?.ticker)
        return (
          t.ticker.add(e),
          () => {
            try {
              t.ticker?.remove(e);
            } catch {}
          }
        );
      let r = this.env.win,
        s = 0,
        i = !0,
        o = () => {
          i && (e(), i && (s = r.requestAnimationFrame(o)));
        };
      return (
        (s = r.requestAnimationFrame(o)),
        () => {
          (i = !1), r.cancelAnimationFrame(s);
        }
      );
    }
    createObserver(...e) {
      return this.env.win.Observer?.create(...e) ?? null;
    }
  };
});
var pn = O((dn) => {
  "use strict";
  Object.defineProperty(dn, "__esModule", { value: !0 });
  function mc(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  mc(dn, {
    analyzeSharedTimelineGroups: function () {
      return Tc;
    },
    triggerEmitsCallbackRole: function () {
      return Vc;
    },
    triggerRoutesByCallbackRole: function () {
      return De;
    },
  });
  var un = K(),
    yc = 10,
    vc = new Set(["wf:popover"]);
  function Tc(n, e, t, r, s, i) {
    let o = n.timelineIds ?? [];
    if (o.length < 2) return [];
    let a = !0,
      l = !1,
      c = 0,
      u = 0;
    for (let b of n.triggers) {
      let [y, T, R] = b;
      if (T?.controlType === un.TimelineControlType.CONTINUOUS) return [];
      if (
        (T?.controlType !== void 0 &&
          T.controlType !== un.TimelineControlType.STANDARD &&
          (a = !1),
        Nc(y, T) && (l = !0),
        kc(y, T))
      )
        return [];
      if (De(y, T)) {
        let w = R ? new Set(t(R, { trigger: b }, n)).size : 0;
        (u += w), w > 0 && c++;
      }
    }
    let f =
        a && n.triggers.some(([b]) => vc.has(b))
          ? bc(
              o,
              e,
              r,
              (b) => t(b, {}, n),
              s ? (b) => s(b, n) : void 0,
              u > 1,
              i
            )
          : void 0,
      d = f ? [f] : [],
      p = new Set(f?.members);
    if (
      o.some((b) => {
        let y = e.get(b),
          T = y?.settings?.control;
        return y?.triggerMetadata?.role != null && T != null && Pc.has(T);
      })
    )
      return [];
    if (l) return d;
    if (c > 1) return [];
    let h = u > 1;
    if (jc(n.triggers, t, n)) return d;
    let g = [],
      v = new Map();
    for (let b of o) {
      if (p.has(b)) continue;
      let y = e.get(b);
      if (!y || y.reuse || !y.actions?.length || Uc(y, r)) continue;
      if (s?.(y, n)) {
        let R = y.triggerMetadata?.role ? Oc(y, i) : void 0;
        if (R !== void 0) {
          let w = v.get(R);
          w ? w.push(b) : v.set(R, [b]);
        }
        continue;
      }
      if (h) continue;
      let T = new Set();
      for (let R of y.actions)
        if (R.targets)
          for (let w of R.targets) for (let I of t(w, {}, n)) T.add(I);
      g.push({ id: b, targets: T });
    }
    let S = [],
      E = (b) => {
        let y = b;
        for (let T = 0; T <= yc; T++) {
          let R = e.get(y)?.reuse?.sourceTimelineId;
          if (!R) return y;
          y = R;
        }
        return y;
      },
      m = (b, y) => {
        let T = new Set(b),
          R = new Set(),
          w = new Set(),
          I = (_) => {
            let k = _?.groupId;
            if (k != null) {
              if (R.has(k)) return !1;
              R.add(k);
            }
            let L = _?.triggerMetadata?.role;
            if (L != null) {
              if (w.has(L)) return !1;
              w.add(L);
            }
            return !0;
          };
        for (let _ of b) if (!I(e.get(_))) return;
        for (let _ of o) {
          if (T.has(_)) continue;
          let k = e.get(_);
          if (k?.reuse && T.has(E(_)) && !I(k)) return;
        }
        if (mi(b, e, (_) => t(_, {}, n), y)) return;
        let x = new Map(b.map((_) => [_, Rc(e.get(_), r, y)])),
          C = new Map();
        for (let _ of o) for (let [k, L] of x.get(_) ?? []) C.set(k, L);
        if (C.size > 0) {
          let _ = b.find((L) => {
            let G = x.get(L);
            if (G.size !== C.size) return !1;
            for (let [B, Y] of G) if (C.get(B) !== Y) return !1;
            return !0;
          });
          if (!_) return;
          let k = b.indexOf(_);
          if (k > 0) {
            let [L] = b.splice(k, 1);
            b.unshift(L);
          }
        }
        S.push({ primary: b[0], members: b });
      },
      A = new Set();
    for (let b = 0; b < g.length; b++) {
      if (A.has(b)) continue;
      let y = [g[b].id],
        T = new Set(g[b].targets);
      A.add(b);
      let R = !0;
      for (; R; ) {
        R = !1;
        for (let w = b + 1; w < g.length; w++)
          if (!A.has(w) && Ti(T, g[w].targets)) {
            y.push(g[w].id);
            for (let I of g[w].targets) T.add(I);
            A.add(w), (R = !0);
          }
      }
      y.length >= 2 && m(y);
    }
    for (let [b, y] of v) y.length >= 2 && m(y, b);
    return [...d, ...S];
  }
  function bc(n, e, t, r, s, i = !1, o) {
    let a = [],
      l = new Set();
    for (let u of n) {
      let f = e.get(u),
        d = f?.triggerMetadata?.role;
      if (d) {
        if (l.has(d)) return;
        l.add(d), !f?.reuse && a.push(u);
      }
    }
    if (a.length < 2 || mi(a, e, r, void 0, o)) return;
    let c = Sc(a, e, t, s);
    if (i) {
      let u = e.get(c.primary);
      if (!u || s?.(u) !== !0) return;
    }
    return c;
  }
  function Sc(n, e, t, r) {
    let s = (a) => Ec(e.get(a), t),
      i = (a) => {
        let l = e.get(a);
        return l != null && r?.(l) === !0;
      },
      o = r ? n.findIndex((a) => i(a) && s(a)) : -1;
    if (
      (o < 0 && r && (o = n.findIndex(i)), o < 0 && (o = n.findIndex(s)), o > 0)
    ) {
      let [a] = n.splice(o, 1);
      n.unshift(a);
    }
    return { primary: n[0], members: n };
  }
  function Ec(n, e) {
    if (!n?.actions) return !1;
    let t = new Map();
    for (let r of n.actions) {
      if (!r) continue;
      let s = r.tt ?? 0,
        i = r.splitText
          ? typeof r.splitText == "string"
            ? r.splitText
            : r.splitText.type
          : "none",
        o =
          i === "none"
            ? JSON.stringify(r.targets)
            : `${JSON.stringify(r.targets)}_split_${i}`,
        a = t.get(o) ?? new Set();
      t.set(o, a);
      let l = !1;
      for (let c of Object.values(r.properties ?? {}))
        for (let u of Object.keys(c || {})) a.has(u) ? (l = !0) : a.add(u);
      if ((s === 1 || s === 2) && !l && wc(r, e)) return !0;
    }
    return !1;
  }
  function wc(n, e) {
    for (let t in n.properties) {
      let r = e(t),
        s = n.properties[t];
      if (!(!r?.createTweenConfig || !s))
        try {
          let i = r.createTweenConfig(s);
          if (Object.keys(i.from ?? {}).length > 0) return !0;
        } catch {}
    }
    return !1;
  }
  function Oc(n, e) {
    if (!e || !n.actions?.length) return;
    let t;
    for (let r of n.actions) {
      if (!r.targets?.length) return;
      for (let s of r.targets) {
        let i = e(s);
        if (i === void 0) return;
        if (t === void 0) t = i;
        else if (t !== i) return;
      }
    }
    return t;
  }
  function mi(n, e, t, r, s) {
    let i = new Map();
    for (let o of n)
      for (let [a, l] of Ac(e.get(o), t, r, s)) {
        let c = i.get(a);
        if (c !== void 0 && c !== l) return !0;
        i.set(a, l);
      }
    return !1;
  }
  function Ac(n, e, t, r) {
    let s = [];
    for (let i of n?.actions ?? []) {
      if (!i?.splitText) continue;
      let o = typeof i.splitText == "string" ? void 0 : i.splitText.mask,
        a = o ? `mask_${o}` : "none";
      if (t !== void 0) {
        s.push([t, a]);
        continue;
      }
      for (let l of i.targets ?? []) {
        let c = e(l);
        if (c.length === 0) s.push([r?.(l) ?? JSON.stringify(l), a]);
        else for (let u of c) s.push([u, a]);
      }
    }
    return s;
  }
  function Rc(n, e, t) {
    let r = new Map();
    if (!n?.actions) return r;
    let s = new Map();
    for (let i of n.actions) {
      if (!i) continue;
      let o = i.tt ?? 0,
        a = i.splitText
          ? typeof i.splitText == "string"
            ? i.splitText
            : i.splitText.type
          : "none",
        l = a === "none" ? "" : `_split_${a}`,
        c = JSON.stringify(i.targets) + l,
        u =
          i.splitText && typeof i.splitText != "string"
            ? i.splitText.mask
            : void 0,
        f = u ? `_mask_${u}` : "",
        d = s.get(c) ?? new Set();
      s.set(c, d);
      let p = !1;
      for (let h of Object.values(i.properties ?? {}))
        for (let g of Object.keys(h || {})) d.has(g) ? (p = !0) : d.add(g);
      if ((o === 1 || o === 2) && !p) {
        let h = (t === void 0 ? c : t + l) + f;
        for (let [g, v] of _c(i, e)) r.set(`${h} ${g}`, v);
      }
    }
    return r;
  }
  function _c(n, e) {
    let t = [];
    for (let r in n.properties) {
      let s = e(r),
        i = n.properties[r];
      if (!(!s?.createTweenConfig || !i))
        try {
          let o = s.createTweenConfig(i);
          for (let [a, l] of Object.entries(o.from ?? {}))
            t.push([a, Mc(l, i)]);
        } catch {}
    }
    return t;
  }
  var Ic = 0;
  function Mc(n, e) {
    if (typeof n == "number" && Number.isNaN(n))
      return `NaN(${JSON.stringify(e) ?? ""})`;
    if (typeof n == "function") {
      let { legacyExpression: t } = n;
      return typeof t == "string" ? `fn(${t})` : `fn#${Ic++}`;
    }
    return JSON.stringify(n) ?? "undefined";
  }
  var Cc = new Set(["resume", "reverse", "reverseFlipEase", "pause", "stop"]),
    Pc = new Set(["resume", "pause", "stop"]),
    xc = new Set(["togglePlayReverse", "togglePlayReverseFlipEase"]);
  function kc(n, e) {
    if (!e) return !1;
    let t = De(n, e),
      r = (o) => !!(o && (Cc.has(o) || (!t && xc.has(o))));
    if (r(e.control)) return !0;
    let { ifTrue: s, ifFalse: i } = e.conditionalLogic ?? {};
    return r(s?.control) || r(i?.control);
  }
  function Nc(n, e) {
    return !e ||
      (e.controlType !== void 0 &&
        e.controlType !== un.TimelineControlType.STANDARD)
      ? !0
      : !(
          (e.assignedGroupId !== void 0 && e.assignedGroupId !== "") ||
          e.assignedTimelineRole ||
          De(n, e)
        );
  }
  function Lc(n, e) {
    return (
      n === fn && typeof e == "object" && e !== null && e.multiTimeline === !0
    );
  }
  var fn = "wf:hover",
    yi = new Set(["wf:navbar", "wf:dropdown", "wf:popover"]),
    gi = new Set(["wf:focus", "wf:blur"]),
    Fc = new Map([
      [fn, new Set(["mouseEnter", "mouseLeave"])],
      ["wf:navbar", new Set(["open", "close"])],
      ["wf:dropdown", new Set(["open", "close"])],
      ["wf:popover", new Set(["open", "close"])],
    ]);
  function De(n, e) {
    return yi.has(n) || Lc(n, e?.pluginConfig);
  }
  function Dc(n) {
    return typeof n?.assignedGroupId == "string" && n.assignedGroupId !== ""
      ? n.assignedGroupId
      : void 0;
  }
  function Bc(n) {
    let e = Dc(n);
    return e !== void 0
      ? `group:${e}`
      : n?.assignedTimelineRole
      ? `role:${n.assignedTimelineRole}`
      : void 0;
  }
  function vi(n, e) {
    if (n !== fn) return;
    let t = e?.pluginConfig;
    if (typeof t == "object" && t !== null) {
      let r = t.eventMode;
      return r === "enter" || r === "leave" ? r : void 0;
    }
  }
  function Vc(n, e, t) {
    if (Fc.get(n)?.has(t) === !1) return !1;
    if (yi.has(n)) {
      let s = e?.pluginConfig,
        i = typeof s == "object" && s !== null ? s.event : void 0;
      return i === "open" || i === "close" ? t === i : !0;
    }
    let r = vi(n, e);
    return r === "enter"
      ? t !== "mouseLeave"
      : r === "leave"
      ? t !== "mouseEnter"
      : !0;
  }
  function jc(n, e, t) {
    let r = [];
    for (let s of n) {
      let [i, o, a] = s,
        l = De(i, o) ? `callback:${r.length}` : Bc(o);
      l !== void 0 &&
        r.push({
          route: l,
          key: i,
          eventMode: vi(i, o),
          reactive: o.conditionalLogic != null,
          elements: a ? new Set(e(a, { trigger: s }, t)) : new Set(),
        });
    }
    for (let s = 0; s < r.length; s++)
      for (let i = s + 1; i < r.length; i++) {
        if (r[s].route === r[i].route) continue;
        let o = r[s].eventMode,
          a = r[i].eventMode,
          l = Ti(r[s].elements, r[i].elements),
          c = o !== void 0 && a !== void 0,
          u = r[s].reactive || r[i].reactive,
          f = r[s].reactive && r[i].reactive,
          d = r[s].key !== r[i].key && gi.has(r[s].key) && gi.has(r[i].key);
        if (l) {
          if (!(c && o !== a && !u)) return !0;
        } else if (c || d || f || Gc(r[s].elements, r[i].elements)) return !0;
      }
    return !1;
  }
  function Ti(n, e) {
    let [t, r] = n.size <= e.size ? [n, e] : [e, n];
    for (let s of t) if (r.has(s)) return !0;
    return !1;
  }
  function Gc(n, e) {
    for (let t of n)
      for (let r of e)
        if (t !== r && (t.contains(r) || r.contains(t))) return !0;
    return !1;
  }
  function Uc(n, e) {
    for (let t of n.actions ?? [])
      for (let r in t.properties) if (e(r)?.createCustomTween) return !0;
    return !1;
  }
});
var wi = O((hn) => {
  "use strict";
  Object.defineProperty(hn, "__esModule", { value: !0 });
  function $c(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  $c(hn, {
    MAX_ALIAS_DEPTH: function () {
      return Si;
    },
    resolveSourceTimelineId: function () {
      return Ei;
    },
    shouldFlipEaseForTimeline: function () {
      return qc;
    },
  });
  var bi = pn(),
    Si = 10;
  function Ei(n, e) {
    let t = e;
    for (let r = 0; r <= Si; r++) {
      let i = n.get(t)?.reuse?.sourceTimelineId;
      if (!i) return t;
      t = i;
    }
    return (
      console.warn(
        `IX3: Timeline reuse chain exceeded max depth for "${e}". Possible circular reference.`
      ),
      t
    );
  }
  function qc(n, e, t, r) {
    let {
        getInteractionsForTimelines: s,
        getReuseAliasesForSource: i,
        timelineGroupsEnabled: o,
      } = r,
      a = Ei(n, t),
      l = new Set([a, ...i(a)]),
      c = !1,
      u = (d) => {
        if (d === "reverseFlipEase" || d === "togglePlayReverseFlipEase")
          c = !0;
        else if (d === "reverse" || d === "togglePlayReverse") return !0;
        return !1;
      },
      f = new Map();
    if (o) for (let d of s(l)) f.set(d.id, d);
    else
      for (let d of l) {
        let p = e(d);
        p && f.set(p.id, p);
      }
    for (let d of f.values()) {
      let p = d.timelineIds ?? [];
      for (let [h, g] of d.triggers) {
        let v = g?.assignedGroupId,
          S = (0, bi.triggerRoutesByCallbackRole)(h, g);
        if (v === null && !S) continue;
        let E = g?.assignedTimelineRole,
          m =
            E != null
              ? p.filter((T) => n.get(T)?.triggerMetadata?.role === E)
              : null,
          A;
        if (S)
          A = p.filter((T) => {
            let R = n.get(T)?.triggerMetadata?.role;
            return R != null && (0, bi.triggerEmitsCallbackRole)(h, g, R);
          });
        else if (v != null) {
          let T = p.filter((R) => n.get(R)?.groupId === v);
          if (T.length === 0) continue;
          A = T;
        } else A = m;
        let b = (T) =>
            (T != null ? [T] : p).filter(
              (w) => (A == null || A.includes(w)) && l.has(w)
            ),
          y = g?.conditionalLogic;
        if (y) {
          for (let T of [y.ifTrue, y.ifFalse])
            if (T && b(T.targetTimelineId ?? void 0).length > 0 && u(T.control))
              return !1;
        } else
          for (let T of b()) {
            let R = n.get(T),
              w = (o ? R?.triggerMetadata?.role != null : R?.triggerMetadata)
                ? R?.settings?.control
                : g?.control;
            if (u(w)) return !1;
          }
      }
    }
    return c;
  }
});
var vn = O((yn) => {
  "use strict";
  Object.defineProperty(yn, "__esModule", { value: !0 });
  function zc(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  zc(yn, {
    SplitTextManager: function () {
      return mn;
    },
    getSplitTextType: function () {
      return Oi;
    },
  });
  var gn = ee(),
    mn = class {
      collectTargets;
      onAutoSplit;
      onSplitExtended;
      onSplitReused;
      globalSplitRegistry;
      constructor(e, t, r, s) {
        (this.collectTargets = e),
          (this.onAutoSplit = t),
          (this.onSplitExtended = r),
          (this.onSplitReused = s),
          (this.globalSplitRegistry = new Map());
      }
      splitForActions(e, t, r, s, i, o) {
        let a = this.analyzeSplitRequirements(e, t, r, o);
        for (let [l, { types: c, masks: u }] of a)
          this.doSplitText({ type: Hc(c), mask: Wc(u) }, [l], s, i);
      }
      analyzeSplitRequirements(e, t, r, s) {
        let i = new Map();
        for (let o of e) {
          let a = Oi(o);
          if (a === "none") continue;
          let l = typeof o.splitText == "object" ? o.splitText.mask : void 0;
          for (let c of this.collectTargets(o, t, r, s)) {
            if (c === document.body) continue;
            let u = i.get(c) || { types: new Set(), masks: new Set() };
            i.set(c, u), u.types.add(a), l && u.masks.add(l);
          }
        }
        return i;
      }
      doSplitText(e, t, r, s) {
        try {
          let i = ft(e.type);
          for (let o of t) {
            let a = this.globalSplitRegistry.get(o);
            if (a) {
              let p = new Set(ft(a.splitTextConfig.type));
              if (i.every((g) => p.has(g))) {
                (a.owner = r),
                  p.has("lines") &&
                    (this.onSplitReused(r), (r.timeline.data.splitLines = !0));
                continue;
              }
              a.splitInstance.revert(),
                this.globalSplitRegistry.delete(o),
                (e = {
                  type: [...new Set([...p, ...i])].join(", "),
                  mask: e.mask || a.splitTextConfig.mask,
                });
            }
            let l = {
                splitInstance: void 0,
                splitTextConfig: e,
                owner: r,
                lineSplit: void 0,
              },
              c = { type: e.type, tag: "span" },
              u = ft(e.type),
              { mask: f } = e;
            if (u.includes("lines")) {
              (r.timeline.data.splitLines = !0),
                (c.linesClass = (0, gn.defaultSplitClass)("line")),
                (c.autoSplit = !0);
              let p = { vars: c, width: 0 };
              o.closest("[popover]") && (l.lineSplit = p),
                (c.onSplit = (h) => {
                  (p.width = o.offsetWidth),
                    this.applySplitElementStyles(h, f),
                    this.onAutoSplit(l.owner, o);
                });
            }
            u.includes("words") &&
              (c.wordsClass = (0, gn.defaultSplitClass)("word")),
              u.includes("chars") &&
                (c.charsClass = (0, gn.defaultSplitClass)("letter")),
              f && (c.mask = f);
            let d = new s([o], c);
            this.applySplitElementStyles(d, f),
              (l.splitInstance = d),
              this.globalSplitRegistry.set(o, l),
              a && this.onSplitExtended(o);
          }
        } catch (i) {
          console.error("Error splitting text:", i);
        }
      }
      applySplitElementStyles(e, t) {
        let r = [
          [e.lines, "block"],
          [e.words, "inline-block"],
          [e.chars, "inline-block"],
        ];
        t && r.push([e.masks, t === "lines" ? "block" : "inline-block"]);
        for (let [s, i] of r)
          for (let o of s) {
            let { style: a } = o;
            (a.position = "relative"), (a.display = i);
          }
      }
      getSplitElements(e, t) {
        let r = [];
        for (let s of e) {
          let i = this.globalSplitRegistry.get(s);
          if (i && ft(i.splitTextConfig.type).includes(t)) {
            let a = i.splitInstance[t];
            a?.length && r.push(...a);
          }
        }
        return r.length > 0 ? r : e;
      }
      refreshLineSplits(e) {
        for (let [t, { splitInstance: r, lineSplit: s }] of this
          .globalSplitRegistry) {
          if (!s || !e.has(t)) continue;
          let i = t.offsetWidth;
          i && i !== s.width && r.split(s.vars);
        }
      }
      revertAll() {
        for (let [, e] of this.globalSplitRegistry) e.splitInstance.revert();
        this.globalSplitRegistry.clear();
      }
    };
  function Hc(n) {
    return (
      n.has("chars") && !n.has("words") && (n = new Set([...n, "words"])),
      ["lines", "words", "chars"].filter((r) => n.has(r)).join(", ")
    );
  }
  function Wc(n) {
    if (n.size !== 0) {
      if (n.has("lines")) return "lines";
      if (n.has("words")) return "words";
      if (n.has("chars")) return "chars";
    }
  }
  function Oi(n) {
    return n.splitText
      ? typeof n.splitText == "string"
        ? n.splitText
        : n.splitText.type
      : "none";
  }
  function ft(n) {
    return n.split(", ");
  }
});
var bn = O((Tn) => {
  "use strict";
  Object.defineProperty(Tn, "__esModule", { value: !0 });
  function Yc(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Yc(Tn, {
    convertEaseConfigToGSAP: function () {
      return Ri;
    },
    convertEaseConfigToLinear: function () {
      return Xc;
    },
    isAdvancedEase: function () {
      return Qc;
    },
    isBasicEase: function () {
      return Zc;
    },
  });
  var Be = ee();
  function Ai() {
    return {
      gsap: window.gsap,
      CustomEase: window.CustomEase,
      CustomWiggle: window.CustomWiggle,
      CustomBounce: window.CustomBounce,
    };
  }
  function Ri(n, e = Ai(), t) {
    return n == null
      ? "none"
      : typeof n == "number"
      ? Be.EASING_NAMES[n] || "none"
      : Kc(n, e, t);
  }
  function Kc(n, e, t) {
    switch (n.type) {
      case "back":
        return `back.${n.curve}(${n.power})`;
      case "elastic":
        return `elastic.${n.curve}(${n.amplitude}, ${n.period})`;
      case "steps":
        return `steps(${n.stepCount})`;
      case "rough": {
        let {
          templateCurve: r,
          points: s,
          strength: i,
          taper: o,
          randomizePoints: a,
          clampPoints: l,
        } = n;
        return `rough({ template: ${r}, strength: ${i}, points: ${s}, taper: ${o}, randomize: ${a}, clamp: ${l} })`;
      }
      case "slowMo":
        return `slow(${n.linearRatio}, ${n.power}, ${n.yoyoMode})`;
      case "expoScale":
        return `expoScale(${n.startingScale}, ${n.endingScale}, ${n.templateCurve})`;
      case "customWiggle": {
        let { CustomWiggle: r } = e;
        return r
          ? r.create((0, Be.buildCustomEaseId)("customIX3Wiggle", t), {
              wiggles: n.wiggles,
              type: n.wiggleType,
            })
          : null;
      }
      case "customBounce": {
        let { CustomBounce: r } = e;
        return r
          ? r.create((0, Be.buildCustomEaseId)("customIX3Bounce", t), {
              strength: n.strength,
              endAtStart: n.endAtStart,
              squash: n.squash,
              squashID: (0, Be.buildCustomEaseId)("customIX3Squash", t),
            })
          : null;
      }
      case "customEase": {
        let { CustomEase: r } = e;
        return r
          ? r.create(
              (0, Be.buildCustomEaseId)("customIX3Ease", t),
              n.bezierCurve
            )
          : null;
      }
      default:
        return "none";
    }
  }
  function Xc(n, e = Ai(), t = 20) {
    if (n == null) return "linear";
    let r = Ri(n, e);
    if (r === null) return "linear";
    if (typeof n == "object" && n.type === "steps")
      return `steps(${n.stepCount})`;
    let { gsap: s } = e;
    if (!s) return "linear";
    let i = s.parseEase(r);
    if (typeof i != "function") return "linear";
    let o = [];
    for (let a = 0; a <= t; a++) {
      let l = a / t,
        c = i(l);
      o.push({ t: Number(l.toFixed(4)), value: Number(c.toFixed(4)) });
    }
    return (
      "linear(" +
      o.map((a) => `${a.value} ${Math.round(a.t * 100)}%`).join(", ") +
      ")"
    );
  }
  function Qc(n) {
    return typeof n == "object" && n !== null;
  }
  function Zc(n) {
    return typeof n == "number";
  }
});
var wn = O((En) => {
  "use strict";
  Object.defineProperty(En, "__esModule", { value: !0 });
  function Jc(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Jc(En, {
    applyEase: function () {
      return Sn;
    },
    configHasVolatileValue: function () {
      return tu;
    },
    convertToGsapDefaults: function () {
      return nu;
    },
    getStaggerConfig: function () {
      return Ii;
    },
    isVolatileGsapValue: function () {
      return _i;
    },
  });
  var he = ee(),
    eu = bn();
  function _i(n) {
    return (
      typeof n == "function" ||
      (typeof n == "string" &&
        (n.startsWith("+=") || n.startsWith("-=") || n.startsWith("random(")))
    );
  }
  function tu(n) {
    for (let e of [n.to, n.from])
      if (e) {
        for (let t in e) if (_i(e[t])) return !0;
      }
    return !1;
  }
  function Sn(n, e, t) {
    let r = (0, eu.convertEaseConfigToGSAP)(e, void 0, t);
    r != null && (n.ease = r);
  }
  var Ii = (n, e) => {
    if (!n) return;
    let { ease: t, amount: r, from: s, grid: i, axis: o, each: a } = n,
      l = {};
    return (
      r != null && (l.amount = (0, he.toSeconds)(r)),
      a != null && (l.each = (0, he.toSeconds)(a)),
      s != null && (l.from = s),
      i != null && (l.grid = i),
      o != null && (l.axis = o),
      t != null && Sn(l, t, e),
      l
    );
  };
  function nu(n, e) {
    let t = {},
      r = e ? (0, he.buildEaseContextId)(e, "defaults") : void 0,
      s = e ? (0, he.buildEaseContextId)(e, "defaults-stagger") : void 0;
    if (
      (n.duration != null && (t.duration = (0, he.toSeconds)(n.duration)),
      n.ease != null && Sn(t, n.ease, r),
      n.delay != null &&
        (t.delay =
          typeof n.delay == "number" ? n.delay : (0, he.toSeconds)(n.delay)),
      n.repeat != null && (t.repeat = n.repeat),
      n.repeatDelay != null &&
        (t.repeatDelay = (0, he.toSeconds)(n.repeatDelay)),
      n.stagger != null)
    ) {
      let i = Ii(n.stagger, s);
      i && (t.stagger = i);
    }
    return n.yoyo != null && (t.yoyo = n.yoyo), t;
  }
});
var Ni = O((An) => {
  "use strict";
  Object.defineProperty(An, "__esModule", { value: !0 });
  Object.defineProperty(An, "ScrollMarkerFocusManager", {
    enumerable: !0,
    get: function () {
      return On;
    },
  });
  var ru =
      ".gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end",
    xi = "wf-ix3-marker-focus",
    ki = "wf-ix3-marker-owned",
    Mi = "wf-ix3-marker-focus-style",
    Ci = "marker-",
    su = `.${ki}{opacity:.4;pointer-events:auto!important;transition:opacity .15s ease;}.${xi}{opacity:1!important;}`;
  function Pi(n) {
    for (let e of Array.from(n.classList))
      if (e.startsWith(Ci)) return e.slice(Ci.length);
    return null;
  }
  var On = class {
    env;
    setsByStId;
    orderedStIds;
    stickyIId;
    hoverIId;
    stickyPinned;
    initialized;
    styleEl;
    constructor(e) {
      (this.env = e),
        (this.setsByStId = new Map()),
        (this.orderedStIds = []),
        (this.stickyIId = null),
        (this.hoverIId = null),
        (this.stickyPinned = !1),
        (this.initialized = !1),
        (this.styleEl = null),
        (this.onMouseOver = (t) => {
          let r = this.interactionForTarget(t.target);
          r != null && ((this.hoverIId = r), this.applyFocus());
        }),
        (this.onMouseOut = (t) => {
          let r = t.relatedTarget;
          this.interactionForTarget(r) == null &&
            this.hoverIId != null &&
            ((this.hoverIId = null), this.applyFocus());
        }),
        (this.onClick = (t) => {
          let r = this.interactionForTarget(t.target);
          r != null &&
            (t.stopPropagation(),
            (this.stickyIId = r),
            (this.stickyPinned = !0),
            this.applyFocus());
        }),
        (this.onRefresh = () => {
          this.applyFocus();
        });
    }
    register(e, t) {
      this.setsByStId.has(e) || this.orderedStIds.push(e),
        this.setsByStId.set(e, t),
        this.initialized || this.init(),
        this.stickyPinned || (this.stickyIId = this.computeDefaultSticky()),
        this.applyFocus();
    }
    unregister(e) {
      if (this.setsByStId.has(e)) {
        if (
          (this.setsByStId.delete(e),
          (this.orderedStIds = this.orderedStIds.filter((t) => t !== e)),
          this.setsByStId.size === 0)
        ) {
          this.destroy();
          return;
        }
        this.stickyPinned
          ? this.stickyIId != null &&
            !this.hasInteraction(this.stickyIId) &&
            ((this.stickyPinned = !1),
            (this.stickyIId = this.computeDefaultSticky()))
          : (this.stickyIId = this.computeDefaultSticky()),
          this.hoverIId != null &&
            !this.hasInteraction(this.hoverIId) &&
            (this.hoverIId = null),
          this.applyFocus();
      }
    }
    destroy() {
      if (this.initialized) {
        let { doc: e } = this.env;
        e.removeEventListener("mouseover", this.onMouseOver, !0),
          e.removeEventListener("mouseout", this.onMouseOut, !0),
          e.removeEventListener("click", this.onClick, !0),
          this.env.win.ScrollTrigger?.removeEventListener?.(
            "refresh",
            this.onRefresh
          ),
          this.styleEl?.remove(),
          (this.styleEl = null);
      }
      this.setsByStId.clear(),
        (this.orderedStIds = []),
        (this.stickyIId = null),
        (this.hoverIId = null),
        (this.stickyPinned = !1),
        (this.initialized = !1);
    }
    init() {
      let { doc: e } = this.env,
        t = e.getElementById(Mi);
      if (t?.tagName === "STYLE") this.styleEl = t;
      else {
        let r = e.createElement("style");
        (r.id = Mi),
          (r.textContent = su),
          (e.head || e.documentElement).appendChild(r),
          (this.styleEl = r);
      }
      e.addEventListener("mouseover", this.onMouseOver, !0),
        e.addEventListener("mouseout", this.onMouseOut, !0),
        e.addEventListener("click", this.onClick, !0),
        this.env.win.ScrollTrigger?.addEventListener?.(
          "refresh",
          this.onRefresh
        ),
        (this.initialized = !0);
    }
    get focusedIId() {
      return this.hoverIId ?? this.stickyIId;
    }
    hasInteraction(e) {
      for (let t of this.setsByStId.values()) if (t === e) return !0;
      return !1;
    }
    computeDefaultSticky() {
      let e = this.env.win.__wf_ix3_marker_focus;
      if (e != null && this.hasInteraction(e)) return e;
      let t = this.orderedStIds[0];
      return t != null ? this.setsByStId.get(t) ?? null : null;
    }
    reapplyFocus() {
      this.applyFocus();
    }
    applyFocus() {
      if (!this.initialized) return;
      let e = this.focusedIId,
        t = this.env.doc.querySelectorAll(ru);
      for (let r of Array.from(t)) {
        let s = Pi(r),
          i = s != null ? this.setsByStId.get(s) : void 0;
        r.classList.toggle(ki, i != null),
          r.classList.toggle(xi, i != null && i === e);
      }
    }
    interactionForTarget(e) {
      if (!(e instanceof Element)) return null;
      let t = Pi(e);
      return t == null ? null : this.setsByStId.get(t) ?? null;
    }
    onMouseOver;
    onMouseOut;
    onClick;
    onRefresh;
  };
});
var _n = O((Rn) => {
  "use strict";
  Object.defineProperty(Rn, "__esModule", { value: !0 });
  function iu(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  iu(Rn, {
    createSharedOutOfViewReset: function () {
      return au;
    },
    setupOutOfViewReset: function () {
      return ou;
    },
  });
  function ou(n, e, t, r, s) {
    let i = n.outOfViewReset;
    if (!i || i === "none") return;
    let o = t.IntersectionObserver;
    if (!o) return;
    let a = n.horizontal || !1,
      l = null,
      c = new o((u) => {
        for (let f of u) {
          let d = f.boundingClientRect,
            p = a ? d.left : d.top,
            h = l;
          (l = p),
            !f.isIntersecting &&
              (Fi(d, a, t) ||
                (r.totalProgress() === 0 && r.paused()) ||
                (Di(i, p, h) && r.pause(0)));
        }
      });
    c.observe(e), s(() => c.disconnect());
  }
  function Fi(n, e, t) {
    return e
      ? n.right > 0 && n.left < t.innerWidth
      : n.bottom > 0 && n.top < t.innerHeight;
  }
  function Di(n, e, t) {
    if (n === "both") return !0;
    if (t === null) return !1;
    let r = e > t,
      s = e < t;
    return (n === "scrollingDown" && s) || (n === "scrollingUp" && r);
  }
  function au(n, e, t) {
    let r = n.outOfViewReset;
    if (!r || r === "none") return null;
    let s = e.IntersectionObserver;
    if (!s) return null;
    let i = n.horizontal || !1,
      o = new Map(),
      a = new s((l) => {
        for (let c of l) {
          let u = c.target,
            f = o.get(u);
          if (!f) continue;
          let d = c.boundingClientRect,
            p = i ? d.left : d.top,
            h = f.lastPos;
          if (((f.lastPos = p), c.isIntersecting)) {
            f.crossAxisClipped = !1;
            continue;
          }
          let g = Fi(d, i, e);
          if (((f.crossAxisClipped = g), g)) {
            !f.timeline.paused() &&
              Li(u, f.timeline) &&
              (f.timeline.reversed() === !0
                ? f.timeline.progress() > 0 && f.timeline.progress(0)
                : f.timeline.progress() < 1 && f.timeline.progress(1));
            continue;
          }
          Di(r, p, h) &&
            (t(u),
            !(f.timeline.totalProgress() === 0 && f.timeline.paused()) &&
              f.timeline.pause(0));
        }
      });
    return {
      observe: (l, c) => {
        o.set(l, { timeline: c, lastPos: null, crossAxisClipped: !1 }),
          a.observe(l);
      },
      unobserve: (l) => {
        a.unobserve(l), o.delete(l), o.size === 0 && a.disconnect();
      },
      isCrossAxisClipped: (l) => {
        let c = o.get(l);
        return c?.crossAxisClipped === !0 && Li(l, c.timeline);
      },
    };
  }
  function Li(n, e) {
    for (let t of e.getChildren(!0, !0, !1))
      for (let r of t.targets()) {
        let s = r;
        if (s?.nodeType !== 1 || !n.contains(s)) return !1;
      }
    return !0;
  }
});
var Bi = O((In) => {
  "use strict";
  Object.defineProperty(In, "__esModule", { value: !0 });
  Object.defineProperty(In, "wireScrollDirection", {
    enumerable: !0,
    get: function () {
      return lu;
    },
  });
  function lu(n, e, t, r, s, i = !1) {
    r && (r.pause(), r.revert({ kill: !1 }), r.clear());
    let o = (d, p) => {
        p.pause(), p.clear(), !d.isActive() && (s?.(d), d.play(0));
      },
      a = {
        down: () => {
          if (r) return o(t, r);
          i && t.progress() === 0 && t.invalidate(), t.play();
        },
        up: () => (r ? o(r, t) : t.reverse()),
      },
      l = null,
      c = (d) => {
        d !== l && ((l = d), a[d]());
      },
      u = () => c("down"),
      f = () => c("up");
    if (((n.onEnter = u), e.directionEdgesOnly)) {
      n.onEnterBack = f;
      return;
    }
    (n.onLeave = u),
      (n.onEnterBack = f),
      (n.onLeaveBack = f),
      (n.onUpdate = (d) => c(d.direction > 0 ? "down" : "up"));
  }
});
var Cn = O((Mn) => {
  "use strict";
  Object.defineProperty(Mn, "__esModule", { value: !0 });
  function cu(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  cu(Mn, {
    createToggleActionHandlers: function () {
      return uu;
    },
    makeScrollActionHandler: function () {
      return Ve;
    },
  });
  function Ve(n, e) {
    let { timeline: t, hasVolatileValues: r } = e;
    return () => {
      if (n !== void 0)
        switch (n) {
          case "play":
            r && t.progress() === 0 && t.invalidate(), t.play();
            break;
          case "pause":
            t.pause();
            break;
          case "resume":
            r && t.progress() === 0 && t.invalidate(), t.resume();
            break;
          case "reverse":
            t.reverse();
            break;
          case "restart":
            r && t.invalidate(), t.restart();
            break;
          case "reset":
            t.pause(0);
            break;
          case "complete":
            r && t.progress() === 0 && t.invalidate(), t.progress(1);
            break;
          case "none":
            break;
          default: {
            let s = n;
            break;
          }
        }
    };
  }
  function uu(n, e) {
    let [t, r, s, i] = n,
      o = {};
    return (
      t !== "none" && (o.onEnter = Ve(t, e)),
      r !== "none" && (o.onLeave = Ve(r, e)),
      s !== "none" && (o.onEnterBack = Ve(s, e)),
      i !== "none" && (o.onLeaveBack = Ve(i, e)),
      o
    );
  }
});
var ji = O((xn) => {
  "use strict";
  Object.defineProperty(xn, "__esModule", { value: !0 });
  function fu(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  fu(xn, {
    buildGSAPConfig: function () {
      return vu;
    },
    composeScrollPosition: function () {
      return Pn;
    },
    hasBatchStagger: function () {
      return gu;
    },
  });
  var je = ee(),
    du = _n(),
    pu = Bi(),
    hu = Cn();
  function gu(n) {
    return n
      ? ((0, je.toSeconds)(n.amount) ?? 0) > 0 ||
          ((0, je.toSeconds)(n.each) ?? 0) > 0
      : !1;
  }
  function mu(n) {
    let e = parseFloat(n.getComputedStyle(n.document.documentElement).fontSize);
    return {
      vh: n.innerHeight / 100,
      vw: n.innerWidth / 100,
      rem: e || je.DEFAULT_ROOT_FONT_SIZE_PX,
    };
  }
  function Pn(n, e, t) {
    let r = (s) => (e ? `clamp(${s})` : s);
    return (0, je.hasResolvableScrollUnit)(n)
      ? () => r((0, je.resolveScrollUnits)(n, mu(t)))
      : r(n);
  }
  function Vi(n, e, t) {
    return t ? `clamp(${n})` : n || e;
  }
  function yu(n, e, t, r) {
    let s = {},
      i = (o) =>
        o && (o === document.body || (!r && o.parentElement === document.body));
    if (n.pin !== void 0) {
      if (typeof n.pin == "boolean") n.pin && !i(e) && (s.pin = n.pin);
      else {
        let o = t(n.pin, { triggerElement: e });
        o.length > 0 && !i(o[0]) && (s.pin = o[0]);
      }
      r &&
        s.pin !== void 0 &&
        ((s.anticipatePin = 0),
        (s.pinReparent = !1),
        (s.pinSpacing = n.pinSpacing !== !1));
    }
    if (n.endTrigger) {
      let o = t(n.endTrigger, { triggerElement: e });
      o.length > 0 && (s.endTrigger = o[0]);
    }
    if (n.scroller) {
      let o = t(n.scroller, { triggerElement: e });
      o.length > 0 ? (s.scroller = o[0]) : (s.scroller = window);
    }
    return s;
  }
  function vu(n, e, t, r, s, i = !1, o, a, l, c) {
    let u = n.split === !0,
      f = yu(n, e, s, u),
      d = [
        n.enter || "none",
        n.leave || "none",
        n.enterBack || "none",
        n.leaveBack || "none",
      ],
      p = {
        trigger: e,
        markers: n.showMarkers ?? !1,
        start: u
          ? Pn(n.start || "top bottom", n.clamp, o)
          : Vi(n.start, "top bottom", n.clamp),
        end: u
          ? Pn(n.end || "bottom top", n.clamp, o)
          : Vi(n.end, "bottom top", n.clamp),
        scrub: n.scrub ?? !1,
        horizontal: n.horizontal || !1,
        toggleActions: d.join(" "),
        id: t,
        ...f,
      };
    if (p.scrub !== !1) p.animation = r;
    else {
      if (u && n.scrollDirection)
        return (0, pu.wireScrollDirection)(p, n, r, l, c, i), p;
      let h = { timeline: r, hasVolatileValues: i },
        g = (0, hu.createToggleActionHandlers)(d, h);
      Object.assign(p, g), u && (0, du.setupOutOfViewReset)(n, e, o, r, a);
    }
    return p;
  }
});
var Ui = O((Ln) => {
  "use strict";
  Object.defineProperty(Ln, "__esModule", { value: !0 });
  Object.defineProperty(Ln, "ScrollController", {
    enumerable: !0,
    get: function () {
      return Nn;
    },
  });
  var Tu = ee(),
    bu = Ni(),
    Su = vn(),
    Eu = wn(),
    dt = ji(),
    wu = _n(),
    Ou = Cn(),
    Nn = class {
      env;
      host;
      scrollTriggers;
      scrollTriggerDisposers;
      markerFocus;
      constructor(e, t) {
        (this.env = e),
          (this.host = t),
          (this.scrollTriggers = new Map()),
          (this.scrollTriggerDisposers = new Map()),
          (this.markerFocus = new bu.ScrollMarkerFocusManager(e));
      }
      setupScrollControl(e, t, r, s, i) {
        if (typeof this.env.win.ScrollTrigger > "u") {
          console.warn("ScrollTrigger plugin is not available.");
          return;
        }
        let o = Gi(e, t, s);
        this.cleanupScrollTrigger(o);
        let a = this.host.getTimeline(e, s);
        if (!a) {
          console.warn(`Timeline ${e} not found`);
          return;
        }
        let l = i ? this.host.getTimeline(i, s) ?? void 0 : void 0,
          c = (0, dt.buildGSAPConfig)(
            r,
            s,
            o,
            a,
            this.host.resolveFn,
            this.host.getSubOrNull(e, s)?.hasVolatileValues ?? !1,
            this.env.win,
            (f) => this.addDisposer(o, f),
            l,
            l && ((f) => this.host.rebuildGroup(f === l ? i : e, s))
          ),
          u =
            c.animation === void 0 &&
            r.split === !0 &&
            r.scrollDirection !== void 0;
        u && i && l && this.host.drainGroup(i, s);
        try {
          let f = this.env.win.ScrollTrigger.create(c);
          this.scrollTriggers.set(o, f),
            r.showMarkers && this.markerFocus.register(o, t);
          let d = this.host.getSub(e, s);
          kn(d, o);
          let p = i ? this.host.getSubOrNull(i, s) : void 0;
          p &&
            (kn(p, o),
            p.scrollTriggerConfigs || (p.scrollTriggerConfigs = new Map())),
            d.scrollTriggerConfigs || (d.scrollTriggerConfigs = new Map()),
            u || d.scrollTriggerConfigs.set(o, c);
        } catch (f) {
          console.error("Failed to create ScrollTrigger:", f),
            this.cleanupScrollTrigger(o);
        }
      }
      setupScrollDirectionPair(e, t, r, s, i) {
        let a = this.host.timelineDefs.get(this.host.resolveAlias(t))?.actions
          ?.length
          ? t
          : void 0;
        for (let l of i) this.setupScrollControl(e, r, s, l, a);
      }
      setupScrollControls(e, t, r, s) {
        if (
          (this.maybePromoteReanchoredTimeline(e, r, s),
          this.shouldBatchScrollReveal(e, r, s))
        )
          this.setupScrollBatch(e, t, r, s);
        else for (let i of s) this.setupScrollControl(e, t, r, i);
      }
      shouldBatchScrollReveal(e, t, r) {
        return (
          this.passesScrollBatchGuards(t, r) &&
          this.host.isDynamic(this.host.resolveAlias(e))
        );
      }
      passesScrollBatchGuards(e, t) {
        return !(
          (e.scrub ?? !1) !== !1 ||
          !(0, dt.hasBatchStagger)(e.stagger) ||
          t.length <= 1 ||
          typeof this.env.win.ScrollTrigger?.batch != "function" ||
          e.pin ||
          e.endTrigger ||
          e.scroller ||
          e.scrollDirection
        );
      }
      maybePromoteReanchoredTimeline(e, t, r) {
        let s = this.host.resolveAlias(e);
        this.host.isReanchored(s) ||
          this.host.isDynamic(s) ||
          (this.passesScrollBatchGuards(t, r) &&
            (this.host.getInteractionForTimeline(s)?.triggers?.length !== 1 ||
              this.host.hasAlias(s) ||
              this.host.hasForeignOwner(s) ||
              (this.isReanchorEligible(s, r) &&
                this.host.promoteToPerElement(s))));
      }
      isReanchorEligible(e, t) {
        let r = this.host.timelineDefs.get(e);
        if (!r?.actions?.length) return !1;
        let s = this.host.getInteractionForTimeline(e),
          i = new Map(),
          o = new Set(t),
          a = !1;
        for (let l of r.actions) {
          if (!l.targets?.length || (0, Su.getSplitTextType)(l) === "lines")
            return !1;
          for (let c of l.targets) {
            a = !0;
            let u = c.length === 3 ? c[2] : void 0;
            if (
              !u ||
              u.relationship === "none" ||
              !u.filterBy ||
              u.firstMatchOnly
            )
              return !1;
            let f = this.host.resolveFn(u.filterBy, {}, s);
            if (!f.length) return !1;
            let d = new Set(f);
            if (d.size !== o.size || !t.every((p) => d.has(p))) return !1;
            for (let p of t) {
              let h = this.host.resolveFn(
                c,
                { triggerElement: p, anchorFilterToTrigger: !0 },
                s
              );
              for (let g of h) {
                let v = i.get(g);
                if (v && v !== p) return !1;
                i.set(g, p);
              }
            }
          }
        }
        return a;
      }
      setupScrollBatch(e, t, r, s) {
        let i = this.env.win,
          o = i.ScrollTrigger,
          a = i.gsap;
        if (typeof o?.batch != "function" || !a) {
          for (let y of s) this.setupScrollControl(e, t, r, y);
          return;
        }
        o.register?.(a);
        let l = (0, Eu.getStaggerConfig)(
            r.stagger,
            (0, Tu.buildEaseContextId)(`${e}-${t}-batch`, "stagger")
          ),
          [c, u, f, d] = [
            r.enter || "none",
            r.leave || "none",
            r.enterBack || "none",
            r.leaveBack || "none",
          ],
          p = new Map(),
          h = new Map(),
          g = (y) => {
            h.get(y)?.kill(), h.delete(y);
          },
          v = new Set(),
          S = (0, wu.createSharedOutOfViewReset)(r, i, g);
        for (let y of s) {
          let T = Gi(e, t, y);
          this.cleanupScrollTrigger(T), p.set(y, T);
          let R = this.host.getTimeline(e, y);
          this.addDisposer(T, () => {
            v.add(y), g(y);
          }),
            R &&
              S &&
              (S.observe(y, R), this.addDisposer(T, () => S.unobserve(y)));
        }
        let E = (y, T) => {
            if (T === "none") return;
            let R = this.host.getTimeline(e, y);
            if (!R) return;
            let w = this.host.getSubOrNull(e, y)?.hasVolatileValues ?? !1;
            (0, Ou.makeScrollActionHandler)(T, {
              timeline: R,
              hasVolatileValues: w,
            })();
          },
          m = (y) => {
            let T = this.host.getTimeline(e, y);
            !T ||
              T.progress() >= 1 ||
              (T.reversed() && T.reversed(!1), E(y, "complete"));
          },
          A = (y, T, R = !1) => {
            let w = y.filter((_) => !v.has(_));
            if (w.length === 0) return;
            let I = [],
              x = 1 / 0,
              C = l ? a.utils.distribute(l) : void 0;
            w.forEach((_, k) => {
              if ((g(_), T === "none")) return;
              if (R && T === "play" && S?.isCrossAxisClipped(_)) {
                m(_);
                return;
              }
              let L = C ? C(k, _, w) : 0;
              L < x && (x = L), I.push({ el: _, offset: L });
            });
            for (let { el: _, offset: k } of I) {
              let L = k - x;
              if (L > 0) {
                let G = a.delayedCall(L, () => {
                  if ((h.delete(_), T === "play" && S?.isCrossAxisClipped(_))) {
                    m(_);
                    return;
                  }
                  E(_, T);
                });
                h.set(_, G);
              } else E(_, T);
            }
          },
          b = {
            start: (0, dt.composeScrollPosition)(
              r.start || "top bottom",
              r.clamp,
              this.env.win
            ),
            end: (0, dt.composeScrollPosition)(
              r.end || "bottom top",
              r.clamp,
              this.env.win
            ),
            horizontal: r.horizontal || !1,
            onEnter: (y) => A(y, c, !0),
          };
        f !== "none" && (b.onEnterBack = (y) => A(y, f, !0)),
          u !== "none" && (b.onLeave = (y) => A(y, u)),
          d !== "none" && (b.onLeaveBack = (y) => A(y, d));
        try {
          let y = o.batch(s, b);
          for (let w of y) {
            let I = w.trigger;
            if (!I) continue;
            let x = p.get(I);
            if (!x) continue;
            this.scrollTriggers.set(x, w);
            let C = this.host.getSub(e, I);
            C && kn(C, x);
          }
          let T = s[0],
            R = T ? p.get(T) : void 0;
          if (r.showMarkers && T && R) {
            let w = `${R}_markers`,
              I = {
                trigger: T,
                start: b.start,
                end: b.end,
                horizontal: b.horizontal,
                markers: !0,
                id: w,
              },
              x = o.create(I);
            this.scrollTriggers.set(w, x),
              this.markerFocus.register(w, t),
              this.addDisposer(R, () => {
                x.kill(),
                  this.scrollTriggers.delete(w),
                  this.markerFocus.unregister(w);
              });
          }
        } catch (y) {
          console.error("Failed to create ScrollTrigger batch:", y);
          for (let T of p.values()) this.cleanupScrollTrigger(T);
        }
      }
      rebindScrollTriggers(e) {
        if (!(!e.scrollTriggerIds || !e.scrollTriggerConfigs))
          for (let t of e.scrollTriggerIds) {
            let r = this.scrollTriggers.get(t),
              s = e.scrollTriggerConfigs.get(t);
            if (r && s) {
              let i = { ...s, animation: e.timeline };
              if ((r.kill(), this.env.win.ScrollTrigger)) {
                let o = this.env.win.ScrollTrigger.create(i);
                this.scrollTriggers.set(t, o), this.markerFocus.reapplyFocus();
              }
            }
          }
      }
      cleanupSubScrollTriggers(e) {
        if (e.scrollTriggerIds) {
          for (let t of e.scrollTriggerIds) this.cleanupScrollTrigger(t);
          e.scrollTriggerIds.clear();
        }
        e.scrollTriggerConfigs?.clear();
      }
      cleanupScrollTrigger(e) {
        this.markerFocus.unregister(e);
        let t = this.scrollTriggers.get(e);
        t && (t.kill(), this.scrollTriggers.delete(e));
        let r = this.scrollTriggerDisposers.get(e);
        if (r) {
          for (let s of r) s();
          this.scrollTriggerDisposers.delete(e);
        }
      }
      addDisposer(e, t) {
        let r = this.scrollTriggerDisposers.get(e);
        r || ((r = new Set()), this.scrollTriggerDisposers.set(e, r)), r.add(t);
      }
      getScrollTriggers() {
        return this.scrollTriggers;
      }
      releaseScrollTrigger(e) {
        this.cleanupScrollTrigger(e);
      }
      destroyMarkerFocus() {
        this.markerFocus.destroy();
      }
    };
  function Gi(n, e, t) {
    return `st_${n}_${e}_${t.id || window.crypto.randomUUID().slice(0, 8)}`;
  }
  function kn(n, e) {
    n.scrollTriggerIds || (n.scrollTriggerIds = new Set()),
      n.scrollTriggerIds.add(e);
  }
});
var qi = O((Bn) => {
  "use strict";
  Object.defineProperty(Bn, "__esModule", { value: !0 });
  Object.defineProperty(Bn, "AnimationCoordinator", {
    enumerable: !0,
    get: function () {
      return Dn;
    },
  });
  var pt = K(),
    _e = ee(),
    Au = pi(),
    Ru = hi(),
    Fn = wi(),
    $i = vn(),
    Ge = wn(),
    _u = Ui(),
    Dn = class {
      timelineDefs;
      getHandler;
      getTargetResolver;
      resolveFn;
      getInteractionForTimeline;
      getInteractionsForTimelines;
      env;
      subs;
      dynamicFlags;
      reanchoredTimelines;
      causeTriggers;
      cleanupFns;
      scroll;
      aliases;
      flipEaseBySource;
      pluginRuntimeBridge;
      animation;
      sharedGroups;
      rewindSharedRefire;
      timelineGroupsEnabled;
      resolveAlias(e, t = 0) {
        if (t > Fn.MAX_ALIAS_DEPTH)
          return (
            console.warn(
              `IX3: Timeline alias chain exceeded max depth for "${e}". Possible circular reference.`
            ),
            e
          );
        let r = this.aliases.get(e);
        return r ? this.resolveAlias(r, t + 1) : e;
      }
      reuseAliasIndex;
      invalidateReuseAliasIndex() {
        this.reuseAliasIndex = null;
      }
      buildReuseAliasIndex() {
        let e = new Map();
        for (let [t] of this.timelineDefs) {
          let r = this.resolveSourceTimelineId(t);
          if (r === t) continue;
          let s = e.get(r);
          s ? s.push(t) : e.set(r, [t]);
        }
        return e;
      }
      getReuseAliasesForSource(e) {
        return (
          this.reuseAliasIndex ||
            (this.reuseAliasIndex = this.buildReuseAliasIndex()),
          this.reuseAliasIndex.get(e) ?? []
        );
      }
      hasAlias(e) {
        if (this.getReuseAliasesForSource(e).length > 0) return !0;
        for (let t of this.aliases.values()) if (t === e) return !0;
        return !1;
      }
      shouldFlipEaseForTimeline(e) {
        return (0, Fn.shouldFlipEaseForTimeline)(
          this.timelineDefs,
          this.getInteractionForTimeline,
          e,
          {
            getInteractionsForTimelines: this.getInteractionsForTimelines,
            getReuseAliasesForSource: (t) => this.getReuseAliasesForSource(t),
            timelineGroupsEnabled: this.timelineGroupsEnabled,
          }
        );
      }
      recomputeFlipEaseForSource(e) {
        let t = this.resolveSourceTimelineId(e),
          r = this.subs.get(t);
        if (!r) return;
        let s = this.shouldFlipEaseForTimeline(t);
        if (s !== this.flipEaseBySource.get(t)) {
          this.flipEaseBySource.set(t, s);
          for (let i of r.values()) this.scheduleRebuild(i);
        }
      }
      resolveSourceTimelineId(e) {
        return (0, Fn.resolveSourceTimelineId)(this.timelineDefs, e);
      }
      splitText;
      timelineTargetsCache;
      constructor(e, t, r, s, i, o, a) {
        (this.timelineDefs = e),
          (this.getHandler = t),
          (this.getTargetResolver = r),
          (this.resolveFn = s),
          (this.getInteractionForTimeline = i),
          (this.getInteractionsForTimelines = o),
          (this.env = a),
          (this.subs = new Map()),
          (this.dynamicFlags = new Map()),
          (this.reanchoredTimelines = new Set()),
          (this.causeTriggers = new Map()),
          (this.cleanupFns = new Map()),
          (this.aliases = new Map()),
          (this.flipEaseBySource = new Map()),
          (this.pluginRuntimeBridge = new Au.PluginRuntimeBridge()),
          (this.sharedGroups = new Map()),
          (this.rewindSharedRefire = !1),
          (this.timelineGroupsEnabled = !1),
          (this.reuseAliasIndex = null),
          (this.splitText = new $i.SplitTextManager(
            (l, c, u, f) => this.collectTargets(l, c, u, f),
            (l, c) => {
              l.rebuildState !== "init"
                ? this.scheduleRebuildForElement(c)
                : (l.rebuildState = "idle");
            },
            (l) => this.scheduleRebuildForElement(l),
            (l) => {
              l.rebuildState = "idle";
            }
          )),
          (this.timelineTargetsCache = new WeakMap()),
          (this.animation = new Ru.RuntimeMotionDriver(a)),
          (this.scroll = new _u.ScrollController(a, {
            timelineDefs: e,
            resolveFn: s,
            getInteractionForTimeline: i,
            resolveAlias: (l) => this.resolveAlias(l),
            getTimeline: (l, c) => this.getTimeline(l, c),
            getSub: (l, c) => this.getSub(l, c),
            getSubOrNull: (l, c) => this.getSubOrNull(l, c),
            isDynamic: (l) => !!this.dynamicFlags.get(l),
            isReanchored: (l) => this.reanchoredTimelines.has(l),
            hasAlias: (l) => this.hasAlias(l),
            hasForeignOwner: (l) =>
              this.getInteractionsForTimelines(new Set([l])).length > 1,
            promoteToPerElement: (l) => this.promoteToPerElement(l),
            rebuildGroup: (l, c) => this.rebuildScrollDirectionGroup(l, c),
            drainGroup: (l, c) => te(this.getSubOrNull(l, c)?.cleanupFns),
          }));
      }
      registerSharedGroup(e, t) {
        if (t.length < 2) return;
        let r = new Set();
        for (let i of t) {
          let o = this.sharedGroups.get(i);
          o && r.add(o);
        }
        if (r.size > 0) {
          for (let i of r) this.dissolveSharedGroup(i);
          return;
        }
        let s = { primary: e };
        for (let i of t)
          this.sharedGroups.set(i, s), i !== e && this.aliases.set(i, e);
      }
      dissolveSharedGroupForTimeline(e) {
        let t = this.sharedGroups.get(e);
        return t ? this.dissolveSharedGroup(t) : [];
      }
      dissolveSharedGroup(e) {
        let t = [];
        for (let [l, c] of this.sharedGroups) c === e && t.push(l);
        let r = t.indexOf(e.primary);
        r >= 0 && t.push(...t.splice(r, 1));
        let s = [],
          i = this.subs.get(e.primary);
        if (i)
          for (let [l, c] of i) {
            let u = c.timeline.totalProgress(),
              f = c.timeline.paused() === !0,
              d = u <= 0 && f,
              p = c.timeline.timeScale();
            s.push({
              id: c.timelineId,
              el: l,
              progress: u,
              reversed: c.timeline.reversed() === !0,
              paused: f,
              timeScale: typeof p == "number" && p !== 0 ? Math.abs(p) : 1,
              controlTypes: c.controlTypes,
              owningInteraction: c.owningInteraction,
              dormant: d,
            });
          }
        for (let l of t)
          this.sharedGroups.delete(l),
            this.aliases.get(l) === e.primary && this.aliases.delete(l);
        let o = [];
        for (let l of t) {
          let c = this.getInteractionForTimeline(l);
          c &&
            (this.createTimeline(l, c, { revertGlobalSplits: !1 }), o.push(l));
        }
        for (let { el: l, controlTypes: c, owningInteraction: u } of s)
          if (l != null)
            for (let f of t) {
              if (this.dynamicFlags.get(f) !== !0) continue;
              let d = this.ensureSubs(f);
              if (d.has(l)) continue;
              let p = this.buildSubTimeline(f, l, c, u);
              p && d.set(l, p);
            }
        let a = new Set(o);
        for (let {
          id: l,
          el: c,
          progress: u,
          reversed: f,
          paused: d,
          timeScale: p,
          dormant: h,
        } of s) {
          if (h) continue;
          let g = this.getSubOrNull(l, c)?.timeline;
          g &&
            (g.timeScale(p),
            g.reversed(f),
            g.totalProgress(u),
            a.add(l),
            !d && (f ? g.reverse() : g.play()));
        }
        return [...a];
      }
      createTimeline(e, t, r) {
        let s = this.timelineDefs.get(e);
        if (this.aliases.has(e)) return;
        let i = this.sharedGroups.get(e);
        if (
          (this.destroy(e, {
            reassignSharedPrimary: !1,
            revertGlobalSplits: r?.revertGlobalSplits,
          }),
          !s)
        )
          return;
        if ((i && this.sharedGroups.set(e, i), s.reuse?.sourceTimelineId)) {
          this.aliases.set(e, s.reuse.sourceTimelineId),
            this.recomputeFlipEaseForSource(s.reuse.sourceTimelineId);
          return;
        }
        let o = this.isDynamicTimeline(s, t);
        this.dynamicFlags.set(e, o), this.reanchoredTimelines.delete(e);
        let a = new Set(),
          l = new Set(),
          c = new Map();
        for (let u of t.triggers) {
          let [, f, d] = u;
          if (d)
            for (let h of this.resolveFn(d, { trigger: u }, t))
              l.add(h), c.has(h) || c.set(h, u);
          let p = f?.controlType;
          p && (0, _e.isValidControlType)(p) && a.add(p),
            p === pt.TimelineControlType.LOAD && !c.has(null) && c.set(null, u);
        }
        if ((this.causeTriggers.set(e, c), !l.size || !o)) {
          let u = this.buildSubTimeline(e, null, a, t);
          u && this.ensureSubs(e).set(null, u);
        }
        if (l.size) {
          let u = this.ensureSubs(e);
          for (let f of l)
            if (!u.has(f)) {
              let d = o
                ? this.buildSubTimeline(e, f, a, t)
                : this.getSub(e, null);
              o && d && u.set(f, d);
            }
        }
        this.flipEaseBySource.set(e, this.shouldFlipEaseForTimeline(e));
      }
      getTimeline(e, t) {
        return this.prepareIfShared(e, t), this.getSub(e, t)?.timeline;
      }
      prepareIfShared(e, t, r = !1) {
        let s = this.sharedGroups.get(e);
        if (!s) {
          let f = this.resolveSourceTimelineId(e);
          f !== e && this.sharedGroups.has(f) && this.prepareIfShared(f, t, r);
          return;
        }
        let i = this.timelineDefs.get(e);
        if (!i) return;
        let o = this.getSub(s.primary, t);
        if (!o) return;
        if (o.timelineId === e) {
          r && this.rewindExhausted(o);
          return;
        }
        let a = o.timelineId;
        te(o.cleanupFns);
        for (let f of [...(o.swapCleanupFns ?? [])].reverse()) f();
        o.swapCleanupFns?.clear(), te(this.cleanupFns.get(a));
        let l = o.timeline;
        l.clear(), l.progress(0);
        let c = (0, Ge.convertToGsapDefaults)(i.settings || {}, e);
        l.repeat(typeof c.repeat == "number" ? c.repeat : 0),
          l.repeatDelay(typeof c.repeatDelay == "number" ? c.repeatDelay : 0),
          l.yoyo(c.yoyo === !0);
        let u = typeof c.delay == "number" ? c.delay : 0;
        if (
          (l.delay(u),
          l.reversed(!!i.playInReverse),
          l.timeScale(
            typeof i.settings?.speed == "number" ? i.settings.speed : 1
          ),
          u > 0 && this.rewindSharedRefire && l.totalTime(-u),
          (o.timelineDef = { ...i, actions: i.actions || [] }),
          (o.timelineId = e),
          this.timelineTargetsCache.delete(o),
          this.env.win.SplitText && i.actions?.length)
        ) {
          let f = o.rebuildState;
          (o.rebuildState = "building"),
            this.splitText.splitForActions(
              i.actions,
              t,
              e,
              o,
              this.env.win.SplitText,
              o.owningInteraction
            );
          let d = o.rebuildState;
          o.rebuildState = d === "rebuild_pending" || d === "idle" ? "idle" : f;
        }
        (o.hasVolatileValues = !1), this.buildTimeline(o);
      }
      rewindExhausted(e) {
        if (!(e.timeline.totalProgress() >= 1)) return;
        e.hasVolatileValues && e.timeline.invalidate(),
          e.timeline.totalProgress(0);
        let r = e.timeline.delay();
        r > 0 && e.timeline.totalTime(-r);
      }
      getAllTimelines(e) {
        let t = this.resolveAlias(e),
          r = this.subs.get(t);
        if (!r) return [];
        for (let s of r.keys()) this.prepareIfShared(e, s);
        return Array.from(r.values()).map((s) => s.timeline);
      }
      invalidateVolatileFromStart(e, t) {
        let r = t != null ? t === 0 : e.timeline.progress() === 0;
        e.hasVolatileValues && r && e.timeline.invalidate();
      }
      setTimelineGroups(e) {
        this.timelineGroupsEnabled = e;
      }
      setRewindSharedRefire(e) {
        this.rewindSharedRefire = e;
      }
      play(e, t, r) {
        this.prepareIfShared(e, t, r == null && this.rewindSharedRefire);
        let s = this.getSub(e, t);
        s &&
          (this.refreshLineSplits(s),
          this.invalidateVolatileFromStart(s, r),
          s.timeline.play(r ?? void 0));
      }
      pause(e, t, r) {
        this.prepareIfShared(e, t);
        let s = this.getSubOrNull(e, t);
        s && (r !== void 0 ? s.timeline.pause(r) : s.timeline.pause());
      }
      resume(e, t, r) {
        this.prepareIfShared(e, t);
        let s = this.getSubOrNull(e, t);
        s &&
          (this.refreshLineSplits(s),
          this.invalidateVolatileFromStart(s, r),
          s.timeline.resume(r));
      }
      reverse(e, t, r) {
        this.prepareIfShared(e, t);
        let s = this.getSub(e, t);
        s && (this.refreshLineSplits(s), s.timeline.reverse(r));
      }
      restart(e, t) {
        this.prepareIfShared(e, t);
        let r = this.getSub(e, t);
        r &&
          (this.refreshLineSplits(r),
          r.hasVolatileValues && r.timeline.invalidate(),
          r.timeline.restart());
      }
      getTriggerMetadata(e) {
        return this.timelineDefs.get(e)?.triggerMetadata ?? null;
      }
      fireInterval(e, t, r = {}) {
        this.pluginRuntimeBridge.fireInterval({
          coordinator: this,
          timelineId: e,
          element: t,
          options: r,
          animation: this.animation,
        });
      }
      registerIntervalHandler(e, t) {
        this.pluginRuntimeBridge.registerIntervalHandler(e, t);
      }
      getOneShotTimelineContext(e) {
        let t = this.getTimelineDef(e);
        return t
          ? {
              timelineId: e,
              timelineDef: t,
              getFirstActionTargets: (r) => this.getFirstActionTargets(e, r),
              getActionTweenConfig: (r, s, i) =>
                this.getActionTweenConfig(r, s, i),
              buildActionTimeline: (r) => this.buildOneShotActionTimeline(e, r),
              registerCleanup: (r) => this.registerCleanup(e, r),
            }
          : null;
      }
      getTimelineDef(e) {
        return this.timelineDefs.get(this.resolveAlias(e));
      }
      getFirstActionTargets(e, t) {
        let s = this.getTimelineDef(e)?.actions?.[0];
        return s ? this.collectTargets(s, t, e) : [];
      }
      getActionTweenConfig(e, t, r) {
        let s = this.getHandler(t);
        if (!s?.createTweenConfig) return null;
        let i = e.properties[t] || {};
        return s.createTweenConfig(i, r);
      }
      registerCleanup(e, t, r) {
        let s = r === void 0 ? void 0 : this.getSubOrNull(e, r);
        if (s) {
          let o = s.swapCleanupFns ?? new Set();
          return (
            (s.swapCleanupFns = o),
            o.add(t),
            () => {
              o.delete(t);
            }
          );
        }
        let i = this.cleanupFns.get(e) ?? new Set();
        return (
          this.cleanupFns.set(e, i),
          i.add(t),
          () => {
            i.delete(t);
          }
        );
      }
      publishChannel(e, t, r) {
        this.pluginRuntimeBridge.publish(e, t, r);
      }
      subscribeChannel(e, t, r, s) {
        return this.pluginRuntimeBridge.subscribe(e, t, r, s);
      }
      buildOneShotActionTimeline(e, t) {
        let r = this.getTimelineDef(e);
        if (!r?.actions?.length) return null;
        let s = this.animation.timeline();
        if (!s) return null;
        t.beforeTweens?.(s);
        for (let i of r.actions)
          this.buildTweensForAction(
            i,
            t.targets,
            s,
            e,
            !1,
            t.varsTransform,
            void 0,
            void 0,
            void 0,
            t.cleanupBucket
          );
        return s;
      }
      togglePlayReverse(e, t) {
        this.prepareIfShared(e, t);
        let r = this.getSub(e, t);
        if (!r) return;
        this.refreshLineSplits(r);
        let s = r.timeline,
          i = s.progress();
        this.invalidateVolatileFromStart(r),
          i === 0
            ? s.play()
            : i === 1
            ? s.reverse()
            : s.reversed()
            ? s.play()
            : s.reverse();
      }
      seek(e, t, r) {
        this.getSubOrNull(e, r)?.timeline.seek(t);
      }
      setTimeScale(e, t, r) {
        this.prepareIfShared(e, r),
          (this.timelineGroupsEnabled
            ? this.getSub(e, r)
            : this.getSubOrNull(e, r)
          )?.timeline.timeScale(t);
      }
      setTotalProgress(e, t, r) {
        let s = this.getSubOrNull(e, r);
        s && (this.refreshLineSplits(s), s.timeline.totalProgress(t));
      }
      setContinuousProgress(e, t, r) {
        this.getSub(e, r)?.timeline.progress(Math.max(0, Math.min(1, t)));
      }
      isPlaying(e, t) {
        return !!this.getSubOrNull(e, t)?.timeline.isActive();
      }
      isPaused(e, t) {
        return !!this.getSubOrNull(e, t)?.timeline.paused();
      }
      destroy(e, t) {
        this.aliases.delete(e);
        let r = this.sharedGroups.get(e);
        if ((t?.reassignSharedPrimary ?? !0) && r && r.primary === e) {
          let a;
          for (let [l, c] of this.sharedGroups)
            if (c === r && l !== e) {
              a = l;
              break;
            }
          if (a) {
            (r.primary = a), this.aliases.delete(a);
            for (let [u, f] of this.sharedGroups)
              f === r && u !== e && u !== a && this.aliases.set(u, a);
            let l = this.timelineDefs.get(a),
              c = this.getInteractionForTimeline(a);
            this.dynamicFlags.set(
              a,
              !!(l && c && this.isDynamicTimeline(l, c))
            );
          }
        }
        let s = r && r.primary !== e ? r.primary : void 0;
        if (s) {
          let a = this.subs.get(s);
          if (a) {
            for (let l of a.values())
              if (l.timelineId === e) {
                for (let c of l.cleanupFns ?? []) c();
                l.cleanupFns?.clear();
                for (let c of [...(l.swapCleanupFns ?? [])].reverse()) c();
                l.swapCleanupFns?.clear(),
                  l.timeline.revert({ kill: !1 }),
                  l.timeline.clear(),
                  (l.rebuildState = l.timeline.data?.splitLines
                    ? "idle"
                    : "init"),
                  this.timelineTargetsCache.delete(l);
              }
          }
        }
        this.pluginRuntimeBridge.destroyTimeline(e);
        let i = this.subs.get(e),
          o = new Set();
        if (i) {
          for (let [, a] of i)
            a.timelineId !== e && o.add(a.timelineId), this.disposeSub(a);
          (t?.revertGlobalSplits ?? !0) && this.splitText.revertAll();
        }
        te(this.cleanupFns.get(e));
        for (let a of o) te(this.cleanupFns.get(a)), this.cleanupFns.delete(a);
        if (
          (this.cleanupFns.delete(e),
          this.subs.delete(e),
          this.dynamicFlags.delete(e),
          this.reanchoredTimelines.delete(e),
          this.causeTriggers.delete(e),
          this.flipEaseBySource.delete(e),
          this.sharedGroups.delete(e),
          (t?.reassignSharedPrimary ?? !0) && r)
        ) {
          let a,
            l = 0;
          for (let [c, u] of this.sharedGroups)
            if (u === r && ((a = c), ++l > 1)) break;
          if (l === 1 && a !== void 0) {
            let c = this.subs.get(a);
            if (c)
              for (let [u, f] of c)
                f.timelineId !== a && this.prepareIfShared(a, u);
            this.sharedGroups.delete(a);
          }
        }
      }
      isDynamicTimeline(e, t) {
        let r = t.triggers.some(
          ([, i]) => i?.controlType !== pt.TimelineControlType.LOAD
        );
        if (t.scope?.type === "component" && r) return !0;
        let s = e.actions;
        if (!s?.length) return !1;
        for (let i of s) {
          for (let o of i.targets ?? []) {
            if (this.getTargetResolver(o)?.isDynamic) return !0;
            if (o.length === 3 && o[2]) {
              let l = o[2];
              if (
                l.filterBy &&
                l.relationship !== "none" &&
                this.getTargetResolver(l.filterBy)?.isDynamic
              )
                return !0;
            }
          }
          if (r) {
            for (let o in i.properties)
              if (this.getHandler(o)?.requiresTriggerElementContext) return !0;
          }
        }
        return !1;
      }
      ensureSubs(e) {
        return (
          this.subs.has(e) || this.subs.set(e, new Map()), this.subs.get(e)
        );
      }
      getSub(e, t) {
        let r = this.resolveAlias(e),
          s = this.ensureSubs(r),
          i = this.dynamicFlags.get(r),
          o = s.get(i ? t : null);
        return (
          o || ((o = this.buildSubTimeline(r, t)), o && s.set(i ? t : null, o)),
          o
        );
      }
      getSubOrNull(e, t) {
        let r = this.resolveAlias(e),
          s = this.dynamicFlags.get(r);
        return this.subs.get(r)?.get(s ? t ?? null : null);
      }
      buildSubTimeline(e, t, r, s) {
        let i = this.timelineDefs.get(e),
          o = i?.actions,
          a = i?.settings,
          l = this.env.win.gsap;
        if (!l) return;
        let c = l.timeline({
            ...(0, Ge.convertToGsapDefaults)(a || {}, e),
            paused: !0,
            reversed: !!i?.playInReverse,
            data: { id: e, triggerEl: t || void 0 },
          }),
          u = i
            ? { ...i, actions: o || [] }
            : { id: e, pageId: "", deleted: !1, actions: [] },
          f = {
            timeline: c,
            timelineId: e,
            elementContext: t,
            timelineDef: u,
            rebuildState: "init",
            controlTypes: r,
            owningInteraction: s,
          };
        return (
          o?.length &&
            (this.env.win.SplitText &&
              this.splitText.splitForActions(
                o,
                t,
                e,
                f,
                this.env.win.SplitText,
                s
              ),
            this.buildTimeline(f),
            this.padTimelineToCanvas(f)),
          f
        );
      }
      padTimelineToCanvas(e) {
        let { canvasDuration: t } = e.timelineDef;
        if (t == null) return;
        let r = e.timeline;
        r.duration() < t && r.to({}, { duration: 0 }, t);
      }
      buildTimeline(e) {
        let t = e.timelineDef,
          r = e.elementContext,
          s = e.timeline,
          i = e.timelineId,
          o = new Map();
        for (let a = 0; a < t.actions.length; a++) {
          let l = t.actions[a];
          if (!l) continue;
          let c = JSON.stringify(l.targets),
            u = !0,
            f = (0, $i.getSplitTextType)(l),
            d = f === "none" ? c : `${c}_split_${f}`,
            p = (l.tt ?? 0) !== 0;
          for (let m of Object.values(l.properties ?? {})) {
            let A = o.get(d) || new Set();
            o.set(d, A);
            for (let b of Object.keys(m || {}))
              A.has(b) ? p && (u = !1) : A.add(b);
          }
          let h = this.collectTargetGroups(l, r, i, e.owningInteraction),
            g = h.flatMap((m) => m.elements);
          if (!g.length) {
            let m = !1;
            for (let A in l.properties)
              if (this.getHandler(A)?.createCustomTween) {
                m = !0;
                break;
              }
            if (!m) continue;
          }
          let v = this.collectDelegatedTargets(h, g),
            S = v ? v.plain : g,
            E = v ? g : void 0;
          (f !== "none" &&
            S.length > 0 &&
            this.env.win.SplitText &&
            ((S = this.splitText.getSplitElements(S, f)),
            (E = void 0),
            S.length === 0 && !v?.groups.length)) ||
            this.buildTweensForAction(
              l,
              S,
              s,
              i,
              u,
              void 0,
              r,
              t.triggerMetadata?.role,
              e,
              void 0,
              v?.groups,
              E
            );
        }
      }
      collectTargets(e, t, r, s) {
        return this.collectTargetGroups(e, t, r, s).flatMap((i) => i.elements);
      }
      collectTargetGroups(e, t, r, s) {
        let i = [];
        if (!e.targets) return i;
        let o = s ?? this.getInteractionForTimeline(r),
          a = t != null && this.reanchoredTimelines.has(this.resolveAlias(r)),
          l = (
            this.causeTriggers.get(r) ??
            this.causeTriggers.get(this.sharedGroups.get(r)?.primary ?? r)
          )?.get(t);
        for (let c of e.targets ?? []) {
          let u = this.resolveFn(
            c,
            t
              ? { triggerElement: t, anchorFilterToTrigger: a, causeTrigger: l }
              : { causeTrigger: l },
            o
          );
          i.push({ td: c, elements: u });
        }
        return i;
      }
      collectDelegatedTargets(e, t) {
        let r = null,
          s = new Set();
        for (let { td: o, elements: a } of e) {
          let l = this.getTargetResolver(o);
          if (l?.buildTween) {
            r ??= new Map();
            let c = r.get(l);
            c || r.set(l, (c = { resolver: l, targets: [] })),
              c.targets.push(...a);
          } else for (let c of a) s.add(c);
        }
        if (!r) return null;
        let i = new Set();
        for (let o of r.values()) for (let a of o.targets) i.add(a);
        return {
          groups: [...r.values()].filter((o) => o.targets.length > 0),
          plain: t.filter((o) => s.has(o) || !i.has(o)),
        };
      }
      buildTweensForAction(e, t, r, s, i, o, a, l, c, u, f, d) {
        let p = this.shouldFlipEaseForTimeline(s),
          h = c?.timelineDef.canvasDuration != null;
        for (let g in e.properties) {
          let v = g,
            S = this.getHandler(v);
          if (!S) continue;
          let E = e.properties[v] || {};
          try {
            let m = e.timing?.position;
            if (
              ((m =
                typeof m == "string" && m.endsWith("ms")
                  ? (0, _e.toSeconds)(m)
                  : m ?? 0),
              f?.length && typeof m == "string")
            ) {
              let w = `ix3-position-${e.id}-${g}`;
              r.addLabel(w, m), (m = w);
            }
            let A = e.timing?.duration ?? pt.DEFAULTS.DURATION,
              b = (0, Ge.getStaggerConfig)(
                e.timing?.stagger,
                (0, _e.buildEaseContextId)(e.id, "stagger")
              );
            b && A === 0 && (A = 0.001);
            let y = { id: e.id, presetId: e.presetId, color: e.color },
              T = {
                force3D: !0,
                ...(!i && { immediateRender: i }),
                data: y,
                ...(e.tt !== 3 && { duration: (0, _e.toSeconds)(A) }),
                ...(e.timing?.repeat != null && {
                  repeat: h && e.timing.repeat < 0 ? 0 : e.timing.repeat,
                }),
                ...(e.timing?.repeatDelay != null && {
                  repeatDelay: (0, _e.toSeconds)(e.timing.repeatDelay),
                }),
                ...(e.timing?.yoyo != null && { yoyo: e.timing.yoyo }),
                ...(b && { stagger: b }),
              };
            e.timing?.ease != null &&
              (0, Ge.applyEase)(
                T,
                e.timing.ease,
                (0, _e.buildEaseContextId)(e.id, "timing")
              ),
              p && (T.easeReverse = !0);
            let R = f?.length ? d ?? t.concat(...f.map((w) => w.targets)) : t;
            if (S.createTweenConfig) {
              let w = S.createTweenConfig(E, R);
              o?.(v, e, w),
                w.modifiers &&
                  (T.modifiers = { ...T.modifiers, ...w.modifiers }),
                c &&
                  !c.hasVolatileValues &&
                  (0, Ge.configHasVolatileValue)(w) &&
                  (c.hasVolatileValues = !0);
              let I = Object.keys(w.from || {}).length > 0,
                x = Object.keys(w.to || {}).length > 0,
                C = e.tt ?? 0;
              if (C === 0 && !x) continue;
              if (C === 1 && !I) continue;
              if (C === 2 && !I && !x) continue;
              if (C === 3 && !x) continue;
              (f?.length && t.length === 0) ||
                (C === 1
                  ? r.from(t, { ...T, ...w.from }, m)
                  : C === 2
                  ? r.fromTo(t, { ...w.from }, { ...T, ...w.to }, m)
                  : C === 3
                  ? r.set(t, { ...T, ...w.to }, m)
                  : r.to(t, { ...T, ...w.to }, m));
              for (let _ of f ?? []) {
                let k = _.resolver.buildTween({
                  timeline: r,
                  action: e,
                  tweenType: C,
                  config: w,
                  vars: { ...T },
                  targets: _.targets,
                  position: m ?? 0,
                });
                k && this.routeCleanup(k, s, c, u);
              }
            } else if (S.createCustomTween) {
              let w = S.createCustomTween(r, e, E, T, R, m || 0, {
                triggerElement: a ?? null,
                timelineRole: l,
                subscribeChannel: (I, x) =>
                  this.subscribeChannel(s, I, a ?? null, x),
                animation: this.animation,
              });
              w && this.routeCleanup(w, s, c, u);
            }
          } catch (m) {
            console.error("Error building tween:", m);
          }
        }
      }
      routeCleanup(e, t, r, s) {
        if (s != null) s.add(e);
        else if (r != null) {
          let i = r.cleanupFns ?? new Set();
          (r.cleanupFns = i), i.add(e);
        } else this.registerCleanup(t, e);
      }
      scheduleRebuild(e) {
        if (
          e.rebuildState === "building" ||
          e.rebuildState === "rebuild_pending"
        ) {
          e.rebuildState = "rebuild_pending";
          return;
        }
        (e.rebuildState = "building"),
          this.timelineTargetsCache.delete(e),
          this.rebuildTimelineOnTheFly(e);
      }
      rebuildTimelineOnTheFly(e) {
        let t = e.timeline.totalProgress(),
          r = e.controlTypes?.has(pt.TimelineControlType.LOAD) && t !== 1,
          s = e.timeline.isActive() || r,
          i = e.timeline.reversed() === !0;
        e.timeline.pause(),
          e.timeline.revert({ kill: !1 }),
          e.timeline.clear(),
          te(e.cleanupFns),
          this.buildTimeline(e),
          this.padTimelineToCanvas(e),
          e.timeline.totalProgress(t),
          e.scrollTriggerIds && e.scrollTriggerConfigs
            ? this.scroll.rebindScrollTriggers(e)
            : s && (i ? e.timeline.reverse() : e.timeline.play()),
          e.rebuildState === "rebuild_pending"
            ? ((e.rebuildState = "building"), this.rebuildTimelineOnTheFly(e))
            : (e.rebuildState = "idle");
      }
      disposeSub(e) {
        (e.rebuildState = "init"),
          e.timeline && (e.timeline.revert(), e.timeline.kill()),
          this.scroll.cleanupSubScrollTriggers(e),
          te(e.cleanupFns),
          te(e.swapCleanupFns),
          this.timelineTargetsCache.delete(e);
      }
      promoteToPerElement(e) {
        this.reanchoredTimelines.add(e),
          this.dynamicFlags.set(e, !0),
          this.discardBuiltSubs(e);
      }
      discardBuiltSubs(e) {
        let t = this.subs.get(e);
        if (t) {
          for (let [, r] of t) this.disposeSub(r);
          t.clear();
        }
        te(this.cleanupFns.get(e)), this.cleanupFns.delete(e);
      }
      rebuildScrollDirectionGroup(e, t) {
        let r = this.getSubOrNull(e, t);
        r &&
          (r.timeline.pause(),
          r.timeline.clear(),
          te(r.cleanupFns),
          this.timelineTargetsCache.delete(r),
          this.buildTimeline(r));
      }
      setupScrollControl(e, t, r, s, i) {
        this.scroll.setupScrollControl(e, t, r, s, i);
      }
      setupScrollDirectionPair(e, t, r, s, i) {
        this.scroll.setupScrollDirectionPair(e, t, r, s, i);
      }
      setupScrollControls(e, t, r, s) {
        this.scroll.setupScrollControls(e, t, r, s);
      }
      getScrollTriggers() {
        return this.scroll.getScrollTriggers();
      }
      releaseScrollTrigger(e) {
        this.scroll.releaseScrollTrigger(e);
      }
      destroyMarkerFocus() {
        this.scroll.destroyMarkerFocus();
      }
      refreshLineSplits(e) {
        e.timeline.data?.splitLines &&
          this.splitText.refreshLineSplits(this.getTimelineTargets(e));
      }
      getTimelineTargets(e) {
        let t = this.timelineTargetsCache.get(e);
        if (t) return t;
        t = new WeakSet();
        for (let r of e.timelineDef.actions ?? [])
          for (let s of this.collectTargets(
            r,
            e.elementContext,
            e.timelineId,
            e.owningInteraction
          ))
            t.add(s);
        return this.timelineTargetsCache.set(e, t), t;
      }
      scheduleRebuildForElement(e) {
        for (let [, t] of this.subs)
          for (let [, r] of t)
            this.getTimelineTargets(r).has(e) && this.scheduleRebuild(r);
      }
    };
  function te(n) {
    if (n) {
      for (let e of n) e();
      n.clear();
    }
  }
});
var zi = O((jn) => {
  "use strict";
  Object.defineProperty(jn, "__esModule", { value: !0 });
  Object.defineProperty(jn, "ConditionEvaluator", {
    enumerable: !0,
    get: function () {
      return Vn;
    },
  });
  var Ie = K(),
    Vn = class {
      getConditionEvaluator;
      sharedObservers = new Map();
      conditionCache = new Map();
      CACHE_TTL = 100;
      constructor(e) {
        this.getConditionEvaluator = e;
      }
      evaluateConditionsForTrigger = async (e, t) => {
        if (!e?.length) return !0;
        let r = e.some(([s]) => s === Ie.CORE_OPERATORS.OR);
        return this.evaluateCondition(
          [r ? Ie.CORE_OPERATORS.OR : Ie.CORE_OPERATORS.AND, { conditions: e }],
          t
        );
      };
      observeConditionsForTrigger = (e, t) => {
        if (!e?.length) return () => {};
        let r = [],
          s = [];
        for (let o of e)
          this.getConditionEvaluator(o)?.isReactive ?? !1
            ? r.push(o)
            : s.push(o[0]);
        if (r.length === 0) return () => {};
        let i = r.map((o) => this.getOrCreateSharedObserver(o, t));
        return () => {
          for (let o of i) o();
        };
      };
      disposeSharedObservers = () => {
        for (let [e, t] of this.sharedObservers)
          try {
            t.cleanup();
          } catch (r) {
            console.error("Error disposing shared observer: %s", e, r);
          }
        this.sharedObservers.clear(), this.conditionCache.clear();
      };
      observeCondition = (e, t) => {
        let r = this.getEvaluator(e);
        if (r?.observe)
          try {
            return r.observe(e, t);
          } catch (s) {
            console.error("Error setting up condition observer:", s);
          }
      };
      getEvaluator = (e) => {
        let [t] = e;
        return t === Ie.CORE_OPERATORS.AND || t === Ie.CORE_OPERATORS.OR
          ? this.getLogicalEvaluator(t)
          : this.getConditionEvaluator(e);
      };
      getLogicalEvaluator = (e) => ({
        evaluate: async (t, r) => {
          let [, s, i] = t,
            { conditions: o } = s || {};
          if (!Array.isArray(o)) return !1;
          if (!o.length) return !0;
          let a = e === Ie.CORE_OPERATORS.OR,
            l = i === 1;
          for (let c of o) {
            let u = await this.evaluateCondition(c, r);
            if (a ? u : !u) return a ? !l : !!l;
          }
          return a ? !!l : !l;
        },
        observe: (t, r) => {
          let [, s] = t,
            { conditions: i } = s || {};
          if (!Array.isArray(i)) return () => {};
          let o = i.map((a) =>
            this.observeCondition(a, async () =>
              r(await this.evaluateCondition(t))
            )
          );
          return () => o.forEach((a) => a && a());
        },
      });
      evaluateCondition = async (e, t) => {
        let r = this.generateConditionCacheKey(e, t),
          s = Date.now(),
          i = this.conditionCache.get(r);
        if (i && s - i.timestamp < this.CACHE_TTL) return i.result;
        let o = this.getEvaluator(e);
        if (!o)
          return (
            console.warn(`No evaluator found for condition type '${e[0]}'`), !1
          );
        try {
          let a = await o.evaluate(e, t);
          return this.conditionCache.set(r, { result: a, timestamp: s }), a;
        } catch (a) {
          return console.error("Error evaluating condition:", a), !1;
        }
      };
      generateConditionCacheKey = (e, t) => {
        let [r, s, i] = e,
          o = s ? JSON.stringify(s) : "",
          a = i ? ":negate" : "",
          l = t ? `:ctx:${t.id}` : "";
        return `${r}:${o}${a}${l}`;
      };
      invalidateConditionCache = (e) => {
        let [t] = e,
          r = [];
        for (let s of this.conditionCache.keys())
          s.startsWith(`${t}:`) && r.push(s);
        r.forEach((s) => this.conditionCache.delete(s));
      };
      generateObserverKey = (e) => {
        let [t, r, s] = e,
          i = r ? JSON.stringify(r) : "";
        return `${t}:${i}${s ? ":negate" : ""}`;
      };
      getOrCreateSharedObserver = (e, t) => {
        let r = this.generateObserverKey(e),
          s = this.sharedObservers.get(r);
        if (!s) {
          let i = this.getEvaluator(e);
          if (!i?.observe) return () => {};
          let o = new Set(),
            a = i.observe(e, async () => {
              this.invalidateConditionCache(e);
              let l = Array.from(o, async (c) => {
                try {
                  await c();
                } catch (u) {
                  console.error("Error in shared observer callback:", u);
                }
              });
              await Promise.allSettled(l);
            });
          if (!a) return () => {};
          (s = { cleanup: a, refCount: 0, callbacks: o }),
            this.sharedObservers.set(r, s);
        }
        return (
          s.callbacks.add(t),
          s.refCount++,
          () => this.releaseSharedObserver(r, t)
        );
      };
      releaseSharedObserver = (e, t) => {
        let r = this.sharedObservers.get(e);
        if (
          !(!r || !r.callbacks.delete(t)) &&
          ((r.refCount = Math.max(0, r.refCount - 1)),
          r.refCount <= 0 && r.callbacks.size === 0)
        ) {
          try {
            r.cleanup();
          } catch (i) {
            console.error("Error cleaning up shared observer:", i);
          }
          this.sharedObservers.delete(e);
        }
      };
    };
});
var Hi = O((Un) => {
  "use strict";
  Object.defineProperty(Un, "__esModule", { value: !0 });
  Object.defineProperty(Un, "ConditionalPlaybackManager", {
    enumerable: !0,
    get: function () {
      return Gn;
    },
  });
  var Iu = K(),
    Gn = class {
      matchMediaInstances = new Map();
      setupConditionalContext = (e, t, r) => {
        let { conditionalPlayback: s, triggers: i, id: o } = e;
        if (!s || s.length === 0) {
          t(null);
          return;
        }
        this.cleanup(o);
        let a = window.gsap?.matchMedia();
        if (!a) {
          t(null);
          return;
        }
        this.matchMediaInstances.set(o, a);
        let l = !0,
          c = i.some(
            ([, { controlType: u }]) => u === Iu.TimelineControlType.LOAD
          );
        a.add(this.buildConditionsObject(s), (u) => {
          if (c && !l) return !1;
          l = !1;
          let f = this.evaluateConditions(u.conditions || {}, s);
          return (!f || f.behavior === "skip-to-end") && t(f), r;
        });
      };
      cleanup = (e) => {
        let t = this.matchMediaInstances.get(e);
        t && (t.revert(), this.matchMediaInstances.delete(e));
      };
      destroy = () => {
        for (let [e] of this.matchMediaInstances) this.cleanup(e);
        this.matchMediaInstances.clear();
      };
      buildConditionsObject = (e) => {
        let t = {};
        for (let r of e)
          switch (r.type) {
            case "prefers-reduced-motion": {
              t.prefersReduced = "(prefers-reduced-motion: reduce)";
              break;
            }
            case "breakpoint": {
              (r.breakpoints || []).forEach((i) => {
                let o = Mu[i];
                o && (t[`breakpoint_${i}`] = o);
              });
              break;
            }
            default:
              break;
          }
        return (t.fallback = "(min-width: 0px)"), t;
      };
      evaluateConditions(e, t) {
        let r = [];
        for (let o of t)
          o.type === "prefers-reduced-motion" &&
            e.prefersReduced &&
            r.push({ condition: o, type: "prefers-reduced-motion" }),
            o.type === "breakpoint" &&
              (o.breakpoints || []).some((c) => e[`breakpoint_${c}`]) &&
              r.push({ condition: o, type: "breakpoint" });
        if (r.length === 0) return null;
        let s = r.find(({ condition: o }) => o.behavior === "dont-animate");
        if (s)
          return {
            behavior: "dont-animate",
            matchedConditions: {
              prefersReduced: s.type === "prefers-reduced-motion",
              breakpointMatched: s.type === "breakpoint",
            },
          };
        let i = r[0];
        return {
          behavior: i.condition.behavior,
          matchedConditions: {
            prefersReduced: i.type === "prefers-reduced-motion",
            breakpointMatched: i.type === "breakpoint",
          },
        };
      }
    },
    Mu = {
      tiny: "(max-width: 479px) and (min-width: 0px)",
      small: "(max-width: 767px) and (min-width: 480px)",
      medium: "(max-width: 991px) and (min-width: 768px)",
      main: "(min-width: 992px)",
    };
});
var Yi = O((qn) => {
  "use strict";
  Object.defineProperty(qn, "__esModule", { value: !0 });
  Object.defineProperty(qn, "PluginRegistry", {
    enumerable: !0,
    get: function () {
      return $n;
    },
  });
  var $n = class {
    plugins = new Map();
    extensionsByPoint = new Map();
    activePlugins = new Set();
    pluginStorage = new Map();
    constructor() {
      [
        "trigger",
        "action",
        "targetResolver",
        "condition",
        "roleActivationObserver",
        "roleAppliedQuery",
      ].forEach((e) => this.extensionsByPoint.set(e, new Map()));
    }
    async registerPlugin(e) {
      let t = Wi(e.manifest.id);
      if (this.plugins.has(t))
        throw new Error(`Plugin ${t} is already registered`);
      let r = Object.entries(e.manifest.dependencies ?? {});
      for (let [s] of r)
        if (!this.plugins.has(s))
          throw new Error(`Missing dependency: ${s} required by ${t}`);
      this.plugins.set(t, e), e.initialize && (await e.initialize());
      for (let s of e.extensions) this.registerExtension(s);
      r.length || (await this.activatePlugin(t));
    }
    registerExtension(e) {
      this.extensionsByPoint.has(e.extensionPoint) ||
        this.extensionsByPoint.set(e.extensionPoint, new Map());
      let t = this.extensionsByPoint.get(e.extensionPoint),
        r = e.id;
      if (t.has(r))
        throw new Error(
          `Extension ${r} is already registered for point ${e.extensionPoint}`
        );
      t.set(r, e);
    }
    async activatePlugin(e) {
      if (this.activePlugins.has(e)) return;
      let t = this.plugins.get(e);
      if (!t) throw new Error(`Cannot activate unknown plugin: ${e}`);
      let r = Object.keys(t.manifest.dependencies ?? {});
      for (let s of r) await this.activatePlugin(s);
      t.activate && (await t.activate()), this.activePlugins.add(e);
    }
    async deactivatePlugin(e) {
      if (!this.activePlugins.has(e)) return;
      let t = this.plugins.get(e);
      if (!t) throw new Error(`Cannot deactivate unknown plugin: ${e}`);
      t.deactivate && (await t.deactivate()), this.activePlugins.delete(e);
    }
    async unregisterPlugin(e, t) {
      let r = Wi([e, t]),
        s = this.plugins.get(r);
      if (s) {
        this.activePlugins.has(r) && (await this.deactivatePlugin(r));
        for (let i of s.extensions)
          i.extensionPoint === "condition" &&
            i.implementation.dispose &&
            (await i.implementation.dispose()),
            this.extensionsByPoint
              .get(i.extensionPoint)
              ?.delete(`${r}:${i.id}`);
        s.dispose && (await s.dispose()),
          this.plugins.delete(r),
          this.pluginStorage.delete(r);
      }
    }
    getExtensions(e) {
      return this.extensionsByPoint.get(e) || new Map();
    }
    getExtensionImpl(e, t) {
      return this.getExtensions(t).get(e)?.implementation;
    }
    getTriggerHandler([e]) {
      return this.getExtensionImpl(e, "trigger");
    }
    getRoleActivationObserver(e) {
      return this.getExtensionImpl(e, "roleActivationObserver");
    }
    getRoleAppliedQuery(e) {
      return this.getExtensionImpl(e, "roleAppliedQuery");
    }
    getActionHandler(e) {
      return this.getExtensionImpl(e, "action");
    }
    getTargetResolver([e]) {
      return this.getExtensionImpl(e, "targetResolver");
    }
    getConditionEvaluator([e]) {
      return this.getExtensionImpl(e, "condition");
    }
    getAllPlugins() {
      return this.plugins.values();
    }
  };
  function Wi(n) {
    return `${n[0]}:${n[1]}`;
  }
});
var Ue = O((Hn) => {
  "use strict";
  Object.defineProperty(Hn, "__esModule", { value: !0 });
  Object.defineProperty(Hn, "BaseTriggerStrategy", {
    enumerable: !0,
    get: function () {
      return zn;
    },
  });
  var zn = class {
    runTrigger;
    runTimelineAction;
    skipToEndState;
    constructor(e, t, r) {
      (this.runTrigger = e),
        (this.runTimelineAction = t),
        (this.skipToEndState = r);
    }
  };
});
var Xi = O((Xn) => {
  "use strict";
  Object.defineProperty(Xn, "__esModule", { value: !0 });
  Object.defineProperty(Xn, "StandardTriggerStrategy", {
    enumerable: !0,
    get: function () {
      return Kn;
    },
  });
  var Wn = K(),
    Cu = Ue();
  function Ki(n) {
    if (!n || typeof n != "object") return !1;
    let e = n;
    return e.type === "timeline-role" && typeof e.role == "string";
  }
  function Pu(n) {
    if (!n || typeof n != "object") return !1;
    let e = n;
    return e.type === "playback-control" && typeof e.control == "string";
  }
  function Yn(n) {
    if (!n || typeof n != "object") return !1;
    let e = n;
    return e.target instanceof HTMLElement && typeof e.type != "string";
  }
  var Kn = class extends Cu.BaseTriggerStrategy {
    getTimelineIdsForRole;
    resolveAssignedTimelineIds;
    notifyRoleActivationObservers;
    isInInteractionScope;
    isRoleApplied;
    constructor(e, t, r, s, i, o, a, l) {
      super(e, t, r),
        (this.getTimelineIdsForRole = s),
        (this.resolveAssignedTimelineIds = i),
        (this.notifyRoleActivationObservers = o),
        (this.isInInteractionScope = a),
        (this.isRoleApplied = l);
    }
    bind(e, t, r) {
      let {
          interactionId: s,
          elements: i,
          triggerHandler: o,
          eventManager: a,
          conditionalContext: l,
          cleanupMap: c,
          delay: u,
        } = r,
        f = e[1];
      for (let d of i) {
        if (!d) continue;
        let p = c.get(d);
        p || ((p = new Set()), c.set(d, p));
        let h = new Map(),
          g = (E) => {
            let m = E.settles;
            return (
              (E.settles = []),
              m.length
                ? () => {
                    for (let A of m)
                      try {
                        A();
                      } catch (b) {
                        console.error(
                          "Error in activation completion callback:",
                          b
                        );
                      }
                  }
                : void 0
            );
          },
          v = (E) => {
            if (E)
              try {
                E();
              } catch (m) {
                console.error("Error in activation completion callback:", m);
              }
          },
          S = o(e, d, a, (E) => {
            let m = Yn(E) ? E.target : d;
            if (m !== d && !this.isInInteractionScope(t, m)) return;
            let A = Pu(E) ? E.control : void 0,
              b = Ki(E) ? E.onComplete : void 0,
              y,
              T;
            if (Ki(E))
              (y = E.role), (T = this.getTimelineIdsForRole(t, E.role));
            else {
              let { assignedGroupId: I, assignedTimelineRole: x } = e[1];
              (y = I === null || I ? void 0 : x),
                (T = this.resolveAssignedTimelineIds(e, t));
            }
            let R = () =>
              Yn(E) &&
              E.skipIfActive === !0 &&
              y !== void 0 &&
              this.isRoleApplied(t, y, e, m);
            if (Yn(E)) {
              let I =
                  E.firstWins === !0 &&
                  t.triggers.some(
                    (C) => C !== e && (0, Wn.hasPageLevelTriggerWon)(C)
                  ),
                x =
                  (T?.length === 0 && y === void 0) ||
                  l?.behavior === "dont-animate";
              if ((!I && !x && (0, Wn.claimPageLevelTriggerWin)(e), I || R())) {
                v(b);
                return;
              }
            }
            if (T?.length === 0) {
              this.runTrigger(e, m, s, T, void 0, {
                onComplete: b,
                role: y,
              }).catch((I) => {
                console.error("Error in trigger execution:", I), v(b);
              });
              return;
            }
            if (l !== null) {
              if (l.behavior === "skip-to-end") {
                let I = [],
                  x = !1,
                  C = () => {
                    x ||
                      !y ||
                      ((x = !0),
                      this.notifyRoleActivationObservers(t, y, I, e, m));
                  };
                this.skipToEndState(t, m, f, T, A, C);
                for (let _ of I)
                  try {
                    _();
                  } catch (k) {
                    console.error(
                      "Error in role activation settle callback:",
                      k
                    );
                  }
              }
              v(b);
              return;
            }
            let w = (I) => {
              this.runTrigger(e, m, s, T, A, { onComplete: I, role: y }).catch(
                (x) => {
                  console.error("Error in trigger execution:", x), I?.();
                }
              );
            };
            if (f.conditionalLogic || !u) w(b);
            else {
              let I = h.get(m);
              if (I && A === I.control && y === I.role) b && I.settles.push(b);
              else {
                I && (clearTimeout(I.timer), g(I)?.(), h.delete(m));
                let x = {
                  control: A,
                  role: y,
                  settles: b ? [b] : [],
                  timer: setTimeout(() => {
                    if ((h.delete(m), R())) {
                      g(x)?.();
                      return;
                    }
                    w(g(x));
                  }, u * 1e3),
                };
                h.set(m, x);
              }
            }
          });
        S && p.add(S),
          p.add(() => {
            for (let E of h.values()) clearTimeout(E.timer), g(E)?.();
            h.size > 0 && (0, Wn.releasePageLevelTriggerFired)(e), h.clear();
          });
      }
    }
  };
});
var Qi = O((Zn) => {
  "use strict";
  Object.defineProperty(Zn, "__esModule", { value: !0 });
  Object.defineProperty(Zn, "LoadTriggerStrategy", {
    enumerable: !0,
    get: function () {
      return Qn;
    },
  });
  var xu = Ue(),
    Qn = class extends xu.BaseTriggerStrategy {
      loadInteractions;
      getTimeline;
      constructor(e, t, r, s, i) {
        super(e, t, r), (this.loadInteractions = s), (this.getTimeline = i);
      }
      bind(e, t, r) {
        if (window.__wf_ix3) return;
        let { conditionalContext: s, delay: i } = r,
          o = e[1];
        this.loadInteractions.push(() => {
          if (s !== null) {
            s.behavior === "skip-to-end" && this.skipToEndState(t, null);
            return;
          }
          let a = () => {
            for (let l of t.timelineIds ?? []) {
              let c = this.getTimeline(l, null);
              c &&
                (c.data.splitLines
                  ? document.fonts.ready.then(() => {
                      this.runTimelineAction(l, o, null);
                    })
                  : this.runTimelineAction(l, o, null));
            }
          };
          i ? setTimeout(a, i * 1e3) : a();
        });
      }
    };
});
var Zi = O((er) => {
  "use strict";
  Object.defineProperty(er, "__esModule", { value: !0 });
  Object.defineProperty(er, "ScrollTriggerStrategy", {
    enumerable: !0,
    get: function () {
      return Jn;
    },
  });
  var ku = Ue(),
    Jn = class extends ku.BaseTriggerStrategy {
      setupScrollControls;
      setupScrollDirectionPair;
      constructor(e, t, r, s, i) {
        super(e, t, r),
          (this.setupScrollControls = s),
          (this.setupScrollDirectionPair = i);
      }
      bind(e, t, r) {
        let { interactionId: s, elements: i, conditionalContext: o } = r,
          a = e[1].scrollTriggerConfig;
        if (!a) return;
        if (o !== null) {
          if (o.behavior === "skip-to-end")
            for (let d of i) d && this.skipToEndState(t, d);
          return;
        }
        let l = i.filter((d) => !!d);
        if (!l.length) return;
        if (a.split !== !0) {
          for (let d of l)
            for (let p of t.timelineIds ?? [])
              this.setupScrollControls(p, s, a, [d]);
          return;
        }
        let c = t.timelineIds ?? [],
          [u, f] = c;
        if (a.scrollDirection != null && u && f && c.length === 2) {
          this.setupScrollDirectionPair(u, f, s, a, l);
          return;
        }
        for (let d of c) this.setupScrollControls(d, s, a, l);
      }
    };
});
var Ji = O((rr) => {
  "use strict";
  Object.defineProperty(rr, "__esModule", { value: !0 });
  Object.defineProperty(rr, "ContinuousChannelManager", {
    enumerable: !0,
    get: function () {
      return tr;
    },
  });
  var tr = class {
      coordinator;
      resolveRole;
      channels;
      animation;
      constructor(e, t) {
        (this.coordinator = e),
          (this.resolveRole = t),
          (this.channels = new Map()),
          (this.animation = e.animation);
      }
      isPreviewEnabled() {
        return !(window.__wf_ix3 && window.__wf_ix3_continuous_preview === !1);
      }
      registerChannel(e) {
        let t = this.resolveRole(e.role);
        if (!t)
          return (
            console.warn(
              `IX3 Continuous: Failed to resolve role '${e.role}' to timeline ID. Channel registration skipped.`
            ),
            null
          );
        let r = new nr(
          {
            timelineId: t,
            initialValue: e.initialValue,
            element: e.element,
            smoothing: e.smoothing,
            animation: this.animation,
            isPreviewEnabled: () => this.isPreviewEnabled(),
          },
          this.coordinator
        );
        return this.channels.set(t, r), r;
      }
      fireInterval(e, t) {
        let r = this.resolveRole(e);
        r &&
          this.coordinator.fireInterval(r, t.element ?? null, {
            targetIndex: t.targetIndex,
            pluginPayload: t.pluginPayload,
          });
      }
      registerIntervalHandler(e, t) {
        this.coordinator.registerIntervalHandler(e, t);
      }
      getMetadata(e) {
        let t = this.resolveRole(e);
        return t ? this.coordinator.getTriggerMetadata(t) : null;
      }
      publishChannel(e, t, r) {
        this.coordinator.publishChannel(e, t, r);
      }
      cleanup() {
        for (let e of this.channels.values()) e.destroy();
        this.channels.clear();
      }
    },
    Nu = "power2.out",
    nr = class {
      coordinator;
      proxy;
      setter;
      timelineId;
      element;
      isPreviewEnabled;
      constructor(e, t) {
        (this.coordinator = t),
          (this.proxy = { p: e.initialValue }),
          (this.timelineId = e.timelineId),
          (this.element = e.element ?? null),
          (this.isPreviewEnabled = e.isPreviewEnabled);
        let r = (e.smoothing ?? 0) / 1e3;
        (this.setter =
          r > 0
            ? e.animation.quickTo(this.proxy, "p", {
                duration: r,
                ease: Nu,
                onUpdate: () => this.updateTimeline(this.proxy.p),
              })
            : null),
          this.updateTimeline(e.initialValue);
      }
      setProgress(e) {
        this.setter
          ? this.setter(e)
          : ((this.proxy.p = e), this.updateTimeline(e));
      }
      setImmediate(e) {
        this.setter
          ? this.setter(e, e)
          : ((this.proxy.p = e), this.updateTimeline(e));
      }
      destroy() {
        this.setter?.tween.kill();
      }
      updateTimeline(e) {
        this.isPreviewEnabled() &&
          this.coordinator.setContinuousProgress(
            this.timelineId,
            e,
            this.element
          );
      }
    };
});
var eo = O((ir) => {
  "use strict";
  Object.defineProperty(ir, "__esModule", { value: !0 });
  Object.defineProperty(ir, "ContinuousTriggerStrategy", {
    enumerable: !0,
    get: function () {
      return sr;
    },
  });
  var Lu = Ue(),
    Fu = Ji();
  function Du(n) {
    return n != null && "type" in n && n.type === "continuous";
  }
  var sr = class extends Lu.BaseTriggerStrategy {
    continuousCleanups;
    triggerCleanupFunctions;
    coordinator;
    getTimelineIdForRole;
    constructor(e, t, r, s, i, o, a) {
      super(e, t, r),
        (this.continuousCleanups = s),
        (this.triggerCleanupFunctions = i),
        (this.coordinator = o),
        (this.getTimelineIdForRole = a);
    }
    bind(e, t, r) {
      let {
        interactionId: s,
        elements: i,
        triggerHandler: o,
        conditionalContext: a,
      } = r;
      for (let l of i) {
        if (!l) continue;
        if (a !== null) {
          a.behavior === "skip-to-end" && this.skipToEndState(t, l);
          continue;
        }
        let c = (d) => this.getTimelineIdForRole(t, d),
          u = new Fu.ContinuousChannelManager(this.coordinator, c),
          f = o(e, l, r.eventManager, (d) => {
            if (Du(d)) {
              let p = d.setup(u),
                h = this.continuousCleanups.get(s);
              h || ((h = new Map()), this.continuousCleanups.set(s, h)),
                h.set(l, () => {
                  p(), u.cleanup();
                });
            }
          });
        if (f) {
          let d = this.triggerCleanupFunctions.get(s);
          d || ((d = new Map()), this.triggerCleanupFunctions.set(s, d));
          let p = d.get(l);
          p || ((p = new Set()), d.set(l, p)), p.add(f);
        }
      }
    }
  };
});
var so = O((or) => {
  "use strict";
  Object.defineProperty(or, "__esModule", { value: !0 });
  Object.defineProperty(or, "IX3", {
    enumerable: !0,
    get: function () {
      return ht;
    },
  });
  var ue = K(),
    Bu = di(),
    Vu = qi(),
    to = pn(),
    ju = zi(),
    Gu = Hi(),
    Uu = Yi(),
    J = ee(),
    $u = Xi(),
    qu = Qi(),
    zu = Zi(),
    Hu = eo();
  function Wu(n) {
    if (n === !0) return !0;
    if (!Array.isArray(n)) return !1;
    let e = n[1];
    return (typeof e == "string" || Array.isArray(e)) && e.length > 0;
  }
  function Yu(n) {
    let e = n[1].scrollTriggerConfig;
    return e?.split === !0 && Wu(e.pin);
  }
  var Ku = 200,
    no = 210,
    ro = "tl_pinonly_",
    ar = class {
      env;
      pluginReg;
      timelineDefs;
      interactions;
      triggeredElements;
      features;
      lastRoutedTimelineIds;
      lastActivatedRoles;
      releasedByTeardown;
      resolversHeld;
      triggerCleanupFunctions;
      continuousCleanups;
      conditionalPlaybackManager;
      triggerStrategies;
      windowSize;
      prevWindowSize;
      windowResizeSubscribers;
      debouncedWindowResize;
      bodyResizeObserver;
      triggerObservers;
      timelineRefCounts;
      interactionTimelineRefs;
      timelineToInteractionId;
      activeInteractionIds;
      reactiveCallbackQueues;
      debouncedReactiveCallback;
      pendingReactiveUpdates;
      reactiveExecutionContext;
      componentScopeSelectors;
      eventMgr;
      loadInteractions;
      coordinator;
      conditionEval;
      constructor(e) {
        (this.env = e),
          (this.pluginReg = new Uu.PluginRegistry()),
          (this.timelineDefs = new Map()),
          (this.interactions = new Map()),
          (this.triggeredElements = new Map()),
          (this.features = {}),
          (this.lastRoutedTimelineIds = new WeakMap()),
          (this.lastActivatedRoles = new WeakMap()),
          (this.releasedByTeardown = new Set()),
          (this.resolversHeld = new Set()),
          (this.triggerCleanupFunctions = new Map()),
          (this.continuousCleanups = new Map()),
          (this.windowSize = { w: 0, h: 0 }),
          (this.prevWindowSize = { w: 0, h: 0 }),
          (this.windowResizeSubscribers = new Set()),
          (this.debouncedWindowResize = (0, J.debounce)(() => {
            for (let t of this.windowResizeSubscribers) t();
          }, Ku)),
          (this.bodyResizeObserver = null),
          (this.triggerObservers = new Map()),
          (this.timelineRefCounts = new Map()),
          (this.interactionTimelineRefs = new Map()),
          (this.timelineToInteractionId = new Map()),
          (this.activeInteractionIds = new Set()),
          (this.reactiveCallbackQueues = new Map()),
          (this.pendingReactiveUpdates = new Map()),
          (this.reactiveExecutionContext = new Set()),
          (this.componentScopeSelectors = new Map()),
          (this.eventMgr = Bu.EventManager.getInstance()),
          (this.loadInteractions = []),
          (this.addEventListener = this.eventMgr.addEventListener.bind(
            this.eventMgr
          )),
          (this.emit = this.eventMgr.emit.bind(this.eventMgr)),
          (this.resolveTargets = (t, r, s) => {
            let i = s?.scope?.type === "component" ? s.scope : null,
              o = i?.componentId
                ? this.getComponentScopeSelector(i.componentId)
                : null,
              a = i?.variants?.length ? i.variants : null,
              l = s && r.interaction !== s ? { ...r, interaction: s } : r,
              c = this.resolveTargetsImpl(t, l, s, o),
              u = o ? !!this.pluginReg.getTargetResolver(t)?.isPageLevel : !1,
              f =
                o && r.triggerElement && !u
                  ? this.filterByInstance(c, o, r.triggerElement)
                  : c;
            return a && o && !u ? this.filterByVariant(f, o, a) : f;
          }),
          (this.isTargetDynamic = (t) =>
            !!this.pluginReg.getTargetResolver(t)?.isDynamic),
          (this.getInteractionForTimeline = (t) => {
            let r = this.timelineToInteractionId.get(t);
            if (r) return this.interactions.get(r);
          }),
          (this.getInteractionsForTimelines = (t) => {
            let r = [];
            for (let [s, i] of this.interactionTimelineRefs) {
              if (!this.activeInteractionIds.has(s)) continue;
              let o = !1;
              for (let l of t)
                if (i.has(l)) {
                  o = !0;
                  break;
                }
              if (!o) continue;
              let a = this.interactions.get(s);
              a && r.push(a);
            }
            return r;
          }),
          window.addEventListener("resize", this.debouncedWindowResize),
          (this.coordinator = new Vu.AnimationCoordinator(
            this.timelineDefs,
            this.pluginReg.getActionHandler.bind(this.pluginReg),
            this.pluginReg.getTargetResolver.bind(this.pluginReg),
            this.resolveTargets,
            this.getInteractionForTimeline,
            this.getInteractionsForTimelines,
            e
          )),
          (this.conditionEval = new ju.ConditionEvaluator(
            this.pluginReg.getConditionEvaluator.bind(this.pluginReg)
          )),
          (this.conditionalPlaybackManager =
            new Gu.ConditionalPlaybackManager()),
          (this.triggerStrategies = new Map([
            [
              ue.TimelineControlType.STANDARD,
              new $u.StandardTriggerStrategy(
                this.runTrigger.bind(this),
                this.runTimelineAction.bind(this),
                this.skipToEndState.bind(this),
                this.getTimelineIdsForRole.bind(this),
                this.resolveAssignedTimelineIds.bind(this),
                this.notifyRoleActivationObservers.bind(this),
                this.isInInteractionScope.bind(this),
                this.isRoleApplied.bind(this)
              ),
            ],
            [
              ue.TimelineControlType.LOAD,
              new qu.LoadTriggerStrategy(
                this.runTrigger.bind(this),
                this.runTimelineAction.bind(this),
                this.skipToEndState.bind(this),
                this.loadInteractions,
                this.coordinator.getTimeline.bind(this.coordinator)
              ),
            ],
            [
              ue.TimelineControlType.SCROLL,
              new zu.ScrollTriggerStrategy(
                this.runTrigger.bind(this),
                this.runTimelineAction.bind(this),
                this.skipToEndState.bind(this),
                this.coordinator.setupScrollControls.bind(this.coordinator),
                this.coordinator.setupScrollDirectionPair.bind(this.coordinator)
              ),
            ],
            [
              ue.TimelineControlType.CONTINUOUS,
              new Hu.ContinuousTriggerStrategy(
                this.runTrigger.bind(this),
                this.runTimelineAction.bind(this),
                this.skipToEndState.bind(this),
                this.continuousCleanups,
                this.triggerCleanupFunctions,
                this.coordinator,
                this.getTimelineIdForRole.bind(this)
              ),
            ],
          ])),
          (this.debouncedReactiveCallback = (0, J.debounce)(
            () => this.processPendingReactiveUpdates(),
            16,
            { leading: !1, trailing: !0, maxWait: 100 }
          ));
      }
      getCoordinator() {
        return this.coordinator;
      }
      setFeatures(e) {
        (this.features = { ...this.features, ...e }),
          this.coordinator.setRewindSharedRefire(
            this.features.timelineGroups === !0
          ),
          this.coordinator.setTimelineGroups(
            this.features.timelineGroups === !0
          );
      }
      addEventListener;
      emit;
      static async init(e) {
        return (this.instance = new ar(e)), this.instance;
      }
      async registerPlugin(e) {
        await this.pluginReg.registerPlugin(e);
      }
      register(e, t) {
        if (t?.length) {
          for (let r of t) this.timelineDefs.set(r.id, r);
          this.coordinator.invalidateReuseAliasIndex();
        }
        if (e?.length) {
          for (let r of e) {
            if (this.interactions.has(r.id)) {
              console.warn(
                `Interaction with ID ${r.id} already exists. Use update() to modify it.`
              );
              continue;
            }
            let s = this.withPinOnlyTimeline(r);
            this.interactions.set(s.id, s);
            let i = new Set();
            this.interactionTimelineRefs.set(s.id, i),
              this.conditionalPlaybackManager.setupConditionalContext(
                s,
                (o) => {
                  this.resolversHeld.add(s.id),
                    o?.behavior !== "skip-to-end" &&
                      this.activeInteractionIds.add(s.id);
                  for (let p of s.timelineIds ?? [])
                    i.add(p),
                      this.incrementTimelineRefCount(p),
                      this.timelineToInteractionId.set(p, s.id);
                  let a = new Set(),
                    l = new Set(),
                    c = new Set(s.timelineIds ?? []),
                    u = (p) =>
                      this.coordinator.getReuseAliasesForSource(p).some((h) => {
                        let g = this.timelineRefCounts.get(h) ?? 0,
                          v = c.has(h) ? 1 : 0;
                        return g - v > 0;
                      }),
                    f = (p) => {
                      if (
                        !(
                          (this.timelineRefCounts.get(p) ?? 0) <=
                            (c.has(p) ? 1 : 0) && !u(p)
                        )
                      ) {
                        a.add(p);
                        for (let g of this.coordinator.dissolveSharedGroupForTimeline(
                          p
                        ))
                          l.add(g);
                      }
                    };
                  for (let p of c) {
                    f(p);
                    let h = this.coordinator.resolveSourceTimelineId(p);
                    h !== p && f(h);
                  }
                  let d = (0, to.analyzeSharedTimelineGroups)(
                    s,
                    this.timelineDefs,
                    this.resolveTargets,
                    this.pluginReg.getActionHandler.bind(this.pluginReg),
                    this.coordinator.isDynamicTimeline.bind(this.coordinator),
                    this.features.timelineGroups
                      ? (p) =>
                          this.pluginReg
                            .getTargetResolver(p)
                            ?.instanceSharingKey?.(p)
                      : void 0
                  );
                  for (let p of d)
                    p.members.some((h) => a.has(h)) ||
                      this.coordinator.registerSharedGroup(
                        p.primary,
                        p.members
                      );
                  for (let p of s.timelineIds ?? [])
                    l.has(p) || this.coordinator.createTimeline(p, s);
                  for (let p of s.triggers ?? []) this.bindTrigger(p, s, o);
                  this.recomputeFlipEaseForOwnSources(s);
                },
                () => {
                  this.cleanupInteractionAnimations(s.id);
                }
              );
          }
          for (let r of this.loadInteractions) r();
          if (
            ((this.loadInteractions.length = 0),
            this.coordinator.getScrollTriggers().size > 0)
          ) {
            this.windowResizeSubscribers.add(() => {
              (this.windowSize.h = window.innerHeight),
                (this.windowSize.w = window.innerWidth);
            });
            let r = (0, J.debounce)(
                () => {
                  (this.prevWindowSize.h = this.windowSize.h),
                    (this.prevWindowSize.w = this.windowSize.w);
                },
                no,
                { leading: !0, trailing: !1 }
              ),
              s = (0, J.debounce)(() => {
                if (
                  !(
                    this.windowSize.h !== this.prevWindowSize.h ||
                    this.windowSize.w !== this.prevWindowSize.w
                  )
                )
                  for (let a of this.coordinator.getScrollTriggers().values())
                    a.refresh();
              }, no),
              i = (o) => {
                for (let a of o) a.target === document.body && (r(), s());
              };
            (this.bodyResizeObserver = new ResizeObserver(i)),
              document.body && this.bodyResizeObserver.observe(document.body);
          }
        }
        return this;
      }
      withPinOnlyTimeline(e) {
        if (e.timelineIds?.length || !e.triggers?.some(Yu)) return e;
        let t = `${ro}${e.id}`;
        return (
          this.timelineDefs.has(t) ||
            (this.timelineDefs.set(t, {
              id: t,
              deleted: !1,
              pageId: "",
              actions: [],
            }),
            this.coordinator.invalidateReuseAliasIndex()),
          { ...e, timelineIds: [t] }
        );
      }
      remove(e) {
        let t = Array.isArray(e) ? e : [e];
        for (let r of t) {
          if (!this.interactions.has(r)) {
            console.warn(
              `Interaction with ID ${r} not found, skipping removal.`
            );
            continue;
          }
          this.cleanupTriggerObservers(r),
            this.unbindAllTriggers(r),
            this.cleanupContinuousControlsForInteraction(r);
          let s = this.decrementTimelineReferences(r);
          this.cleanupUnusedTimelines(s),
            this.timelineDefs.delete(`${ro}${r}`) &&
              this.coordinator.invalidateReuseAliasIndex();
          let i = this.interactions.get(r);
          for (let l of i?.triggers ?? [])
            this.lastRoutedTimelineIds.delete(l),
              this.lastActivatedRoles.delete(l),
              (0, ue.resetPageLevelTriggerState)(l);
          this.interactions.delete(r),
            this.triggeredElements.delete(r),
            this.interactionTimelineRefs.delete(r),
            this.activeInteractionIds.delete(r),
            i && this.recomputeFlipEaseForOwnSources(i),
            this.conditionalPlaybackManager.cleanup(r);
          let o = this.resolversHeld.delete(r),
            a = this.releasedByTeardown.delete(r);
          o && !a && this.releaseTargetResolvers(r);
        }
        return this;
      }
      releaseTargetResolvers(e) {
        for (let { implementation: t } of this.pluginReg
          .getExtensions("targetResolver")
          .values())
          try {
            t.release?.(e);
          } catch (r) {
            console.error("Error releasing target resolver:", e, r);
          }
      }
      update(e, t) {
        let r = Array.isArray(e) ? e : [e],
          s = t ? (Array.isArray(t) ? t : [t]) : [];
        s.length && this.register([], s);
        for (let i of r) {
          let { id: o } = i;
          if (!this.interactions.has(o)) {
            console.warn(
              `Interaction with ID ${o} not found, registering as new.`
            ),
              this.register([i], []);
            continue;
          }
          this.remove(o), this.register([i], []);
        }
        return this;
      }
      destroyTimelineInstance(e) {
        this.coordinator.destroy(e);
        let t = `st_${e}_`;
        for (let r of [...this.coordinator.getScrollTriggers().keys()])
          r.startsWith(t) && this.coordinator.releaseScrollTrigger(r);
      }
      cleanupUnusedTimelines(e) {
        let t = new Set();
        for (let r of e)
          this.timelineDefs.get(r)?.reuse?.sourceTimelineId &&
            t.add(this.coordinator.resolveSourceTimelineId(r));
        for (let r of e)
          this.destroyTimelineInstance(r), this.timelineDefs.delete(r);
        this.coordinator.invalidateReuseAliasIndex();
        for (let r of t)
          e.has(r) || this.coordinator.recomputeFlipEaseForSource(r);
      }
      destroy() {
        let e = Array.from(this.interactions.keys());
        this.remove(e),
          (this.loadInteractions.length = 0),
          this.env.win.ScrollTrigger &&
            (this.env.win.ScrollTrigger.getAll().forEach((t) => t.kill()),
            this.bodyResizeObserver?.disconnect(),
            (this.bodyResizeObserver = null)),
          this.coordinator.destroyMarkerFocus(),
          window.removeEventListener("resize", this.debouncedWindowResize),
          this.cleanupAllContinuousControls();
        try {
          this.debouncedReactiveCallback.cancel();
        } catch (t) {
          console.error(
            "Error canceling debounced callback during destroy:",
            t
          );
        }
        this.pendingReactiveUpdates.clear(),
          this.reactiveCallbackQueues.clear(),
          this.reactiveExecutionContext.clear(),
          this.conditionEval.disposeSharedObservers(),
          this.conditionalPlaybackManager.destroy(),
          this.windowResizeSubscribers.clear(),
          this.timelineDefs.clear(),
          this.coordinator.invalidateReuseAliasIndex(),
          this.interactions.clear(),
          this.triggeredElements.clear(),
          this.triggerCleanupFunctions.clear(),
          this.triggerObservers.clear(),
          this.interactionTimelineRefs.clear(),
          this.activeInteractionIds.clear(),
          this.releasedByTeardown.clear(),
          this.resolversHeld.clear(),
          this.timelineToInteractionId.clear(),
          this.componentScopeSelectors.clear();
      }
      bindTrigger(e, t, r) {
        let s = t.id,
          i = this.pluginReg.getTriggerHandler(e),
          o = e[1];
        if (!i) {
          console.warn("No trigger handler:", e[0]);
          return;
        }
        let a = this.triggerCleanupFunctions.get(s) || new Map();
        this.triggerCleanupFunctions.set(s, a);
        let { delay: l = 0, controlType: c } = o,
          u = (0, J.toSeconds)(l),
          f = this.eventMgr,
          d = e[2],
          p = [];
        d && (p = this.resolveTargets(d, { trigger: e }, t));
        let h =
            c && (0, J.isValidControlType)(c)
              ? c
              : ue.TimelineControlType.STANDARD,
          g = this.triggerStrategies.get(h);
        g
          ? g.bind(e, t, {
              interactionId: s,
              elements: p,
              triggerHandler: i,
              eventManager: f,
              conditionalContext: r,
              cleanupMap: a,
              delay: u || 0,
            })
          : console.warn("No strategy found for control type:", c),
          o.conditionalLogic && this.setupTriggerReactiveMonitoring(e, t);
      }
      setupTriggerReactiveMonitoring(e, t) {
        let { conditionalLogic: r } = e[1];
        if (!r) return;
        let s = `${t.id}:${t.triggers.indexOf(e)}`;
        try {
          let i = this.conditionEval.observeConditionsForTrigger(
              r.conditions,
              async () => {
                await this.executeReactiveCallbackSafely(t.id, s, async () => {
                  if (
                    e[1].assignedInstances !== void 0 &&
                    !this.lastRoutedTimelineIds.has(e)
                  )
                    return;
                  let l =
                    (await this.conditionEval.evaluateConditionsForTrigger(
                      r.conditions,
                      t
                    ))
                      ? r.ifTrue
                      : r.ifFalse;
                  if (l) {
                    let c = this.triggeredElements.get(t.id);
                    if (!c) return;
                    let u = this.features.timelineGroups === !0,
                      f =
                        u && (0, to.triggerRoutesByCallbackRole)(e[0], e[1])
                          ? void 0
                          : this.resolveAssignedTimelineIds(e, t);
                    if (f?.length === 0) return;
                    let d = u ? this.lastRoutedTimelineIds.get(e) : void 0,
                      p = (g) => (u ? d?.get(g) : f ?? t.timelineIds ?? []),
                      h = [];
                    for (let g of c)
                      for (let v of p(g) ?? [])
                        h.push({
                          timelineId: v,
                          element: g,
                          action: "pause-reset",
                        });
                    await this.executeTimelineOperationsAsync(h),
                      c.forEach((g) => {
                        let v = u ? p(g) : f;
                        if (u && !v) return;
                        let { notifyObservers: S, settle: E } =
                          this.makeRoleActivationHooks(t, e, g);
                        this.executeConditionalOutcome(l, g, t, v, E, S);
                      });
                  }
                });
              }
            ),
            o = this.triggerObservers.get(t.id);
          o || ((o = new Map()), this.triggerObservers.set(t.id, o)),
            o.set(s, i);
        } catch (i) {
          console.error("Error setting up trigger reactive monitoring:", i);
        }
      }
      async executeReactiveCallbackSafely(e, t, r) {
        this.reactiveExecutionContext.has(t) ||
          (this.pendingReactiveUpdates.set(t, r),
          this.debouncedReactiveCallback());
      }
      async processPendingReactiveUpdates() {
        if (this.pendingReactiveUpdates.size === 0) return;
        let e = new Map(this.pendingReactiveUpdates);
        this.pendingReactiveUpdates.clear();
        let t = new Map();
        for (let [r, s] of e) {
          let i = r.split(":")[0];
          t.has(i) || t.set(i, []),
            t.get(i).push({ triggerKey: r, callback: s });
        }
        for (let [r, s] of t)
          await this.processInteractionReactiveUpdates(r, s);
      }
      async processInteractionReactiveUpdates(e, t) {
        let r = this.reactiveCallbackQueues.get(e);
        if (r)
          try {
            await r;
          } catch (i) {
            console.error("Error waiting for pending reactive callback:", i);
          }
        let s = this.executeInteractionUpdates(t);
        this.reactiveCallbackQueues.set(e, s);
        try {
          await s;
        } finally {
          this.reactiveCallbackQueues.get(e) === s &&
            this.reactiveCallbackQueues.delete(e);
        }
      }
      async executeInteractionUpdates(e) {
        for (let { triggerKey: t, callback: r } of e) {
          this.reactiveExecutionContext.add(t);
          try {
            await r();
          } catch (s) {
            console.error("Error in reactive callback for %s:", t, s);
          } finally {
            this.reactiveExecutionContext.delete(t);
          }
        }
      }
      async executeTimelineOperationsAsync(e) {
        if (e.length)
          return new Promise((t) => {
            Promise.resolve().then(() => {
              e.forEach(({ timelineId: r, element: s, action: i }) => {
                try {
                  if (!this.timelineDefs.has(r)) {
                    console.warn(`Timeline ${r} not found, skipping operation`);
                    return;
                  }
                  if (!s.isConnected) {
                    console.warn(
                      "Element no longer in DOM, skipping timeline operation"
                    );
                    return;
                  }
                  switch (i) {
                    case "pause-reset":
                      this.coordinator.pause(r, s, 0);
                      break;
                    default:
                      console.warn(`Unknown timeline action: ${i}`);
                  }
                } catch (o) {
                  console.error(
                    "Error executing timeline operation: %s, %s",
                    i,
                    r,
                    o
                  );
                }
              }),
                t();
            });
          });
      }
      getTimelineIdsForRole(e, t) {
        let r = e.timelineIds ?? [],
          s = r.filter(
            (i) => this.timelineDefs.get(i)?.triggerMetadata?.role === t
          );
        if (s.length === 0 && r.length > 0) {
          let i = r
            .map(
              (o) => this.timelineDefs.get(o)?.triggerMetadata?.role || "none"
            )
            .join(", ");
          console.warn(
            `IX3: No timelines found for role '${t}' in interaction '${e.id}'. Available roles: [${i}]`
          );
        }
        return s;
      }
      getTimelineIdForRole(e, t) {
        return this.getTimelineIdsForRole(e, t)[0];
      }
      getTimelineIdsForGroup(e, t) {
        return (e.timelineIds ?? []).filter(
          (r) => this.timelineDefs.get(r)?.groupId === t
        );
      }
      resolveAssignedTimelineIds(e, t) {
        let r = e[1];
        if (r.assignedGroupId === null) return [];
        if (r.assignedGroupId)
          return this.getTimelineIdsForGroup(t, r.assignedGroupId);
        if (r.assignedTimelineRole)
          return this.getTimelineIdsForRole(t, r.assignedTimelineRole);
      }
      hasRoleActivationObserver(e) {
        for (let t of e.triggers ?? [])
          if (this.pluginReg.getRoleActivationObserver(t[0])) return !0;
        return !1;
      }
      notifyRoleActivationObservers(e, t, r, s, i, o) {
        let a = this.triggerCleanupFunctions.get(e.id);
        if (!(!a || (o && a !== o)))
          for (let l of e.triggers ?? []) {
            let c = this.pluginReg.getRoleActivationObserver(l[0]);
            if (c)
              try {
                let u = l[2],
                  f = u
                    ? this.resolveTargets(
                        u,
                        i ? { trigger: l, triggerElement: i } : { trigger: l },
                        e
                      )
                    : [];
                if (f.length === 0) continue;
                let d = c(t, {
                  elements: f,
                  trigger: l,
                  causeTrigger: s,
                  causeElement: i,
                });
                d && r.push(d);
              } catch (u) {
                console.error(
                  "Error notifying role activation observer (target resolution or observer):",
                  l[0],
                  u
                );
              }
          }
      }
      isRoleApplied(e, t, r, s) {
        let i = !1;
        for (let o of e.triggers ?? []) {
          let a = this.pluginReg.getRoleAppliedQuery(o[0]),
            l = o[2];
          if (!(!a || !l))
            try {
              let c = this.resolveTargets(
                l,
                { trigger: o, triggerElement: s },
                e
              );
              if (c.length === 0) continue;
              let u = a(t, {
                elements: c,
                trigger: o,
                causeTrigger: r,
                causeElement: s,
              });
              if (u === !1) return !1;
              u === !0 && (i = !0);
            } catch (c) {
              return (
                console.error(
                  "Error asking role applied query (target resolution or query):",
                  o[0],
                  c
                ),
                !1
              );
            }
        }
        return i;
      }
      makeRoleActivationHooks(e, t, r) {
        let { assignedGroupId: s, assignedTimelineRole: i } = t[1],
          o =
            this.lastActivatedRoles.get(t)?.get(r) ??
            (s === null || s ? void 0 : i);
        if (!o || !this.hasRoleActivationObserver(e)) return {};
        let a = [],
          l = this.triggerCleanupFunctions.get(e.id);
        return {
          notifyObservers: () => {
            this.notifyRoleActivationObservers(e, o, a, t, r, l);
          },
          settle: () => {
            for (let c of a)
              try {
                c();
              } catch (u) {
                console.error("Error in role activation settle callback:", u);
              }
          },
        };
      }
      async runTrigger(e, t, r, s, i, o) {
        let a = o?.onComplete,
          l = o?.role,
          c = 0,
          u = !1,
          f = [],
          d = () => {
            if (!u) {
              u = !0;
              try {
                a?.();
              } catch (R) {
                console.error("Error in activation completion callback:", R);
              }
              for (let R of f)
                try {
                  R();
                } catch (w) {
                  console.error("Error in role activation settle callback:", w);
                }
            }
          };
        if (window.__wf_ix3) {
          d();
          return;
        }
        if (s?.length === 0) {
          this.lastRoutedTimelineIds.get(e)?.delete(t),
            this.lastActivatedRoles.get(e)?.delete(t),
            d();
          return;
        }
        let p = e[1],
          h = this.triggeredElements.get(r);
        h || this.triggeredElements.set(r, (h = new Set())), h.add(t);
        let g = this.interactions.get(r);
        if (!g || !g.triggers.includes(e)) {
          d();
          return;
        }
        let v = s ?? g.timelineIds ?? [];
        if (v.length === 0) {
          d();
          return;
        }
        c = v.length;
        let S = this.lastRoutedTimelineIds.get(e);
        S || this.lastRoutedTimelineIds.set(e, (S = new WeakMap())),
          S.set(t, v);
        let E = this.lastActivatedRoles.get(e);
        E || this.lastActivatedRoles.set(e, (E = new WeakMap())),
          l ? E.set(t, l) : E.delete(t);
        let m = !1,
          A = this.triggerCleanupFunctions.get(g.id),
          b = () => {
            m ||
              !l ||
              ((m = !0), this.notifyRoleActivationObservers(g, l, f, e, t, A));
          },
          y = a != null || (l != null && this.hasRoleActivationObserver(g)),
          T = () =>
            y
              ? () => {
                  --c <= 0 && d();
                }
              : void 0;
        try {
          if (p.conditionalLogic)
            try {
              let w = (await this.conditionEval.evaluateConditionsForTrigger(
                p.conditionalLogic.conditions,
                g
              ))
                ? p.conditionalLogic.ifTrue
                : p.conditionalLogic.ifFalse;
              w
                ? this.executeConditionalOutcome(w, t, g, v, y ? d : void 0, b)
                : d();
            } catch (R) {
              console.error("Error evaluating trigger conditional logic:", R);
              let w = T();
              v.forEach((I) => this.runTimelineAction(I, p, t, i, w, b));
            }
          else {
            let R = T();
            v.forEach((w) => this.runTimelineAction(w, p, t, i, R, b));
          }
        } catch (R) {
          console.error("Error in trigger execution:", R), d();
        }
      }
      skipToEndState(e, t, r, s, i, o) {
        (s ?? e.timelineIds ?? []).forEach((l) => {
          let c =
              i ?? (r ? this.getEffectivePlaybackConfig(l, r).control : void 0),
            u = this.features.timelineGroups === !0,
            f = u ? void 0 : this.coordinator.getTimeline(l, t);
          if (
            (!u && !f) ||
            c === "pause" ||
            c === "stop" ||
            c === "none" ||
            ((f ??= this.coordinator.getTimeline(l, t)), !f)
          )
            return;
          let d;
          switch (c) {
            case "reverse":
            case "reverseFlipEase":
              d = 0;
              break;
            case "togglePlayReverse":
            case "togglePlayReverseFlipEase":
              d = Math.round(1 - f.totalProgress());
              break;
            case "resume":
              d = f.reversed() ? 0 : 1;
              break;
            case "play":
            case "restart":
            case void 0:
              d = 1;
              break;
            default: {
              let p = c;
              d = 1;
              break;
            }
          }
          o?.(), this.coordinator.setTotalProgress(l, d, t ?? null);
        });
      }
      executeConditionalOutcome(e, t, r, s, i, o) {
        let {
            control: a,
            targetTimelineId: l,
            speed: c,
            jump: u,
            delay: f = 0,
          } = e,
          d = (0, J.toSeconds)(f);
        if (a === "none") {
          i?.();
          return;
        }
        let p = r.timelineIds ?? [],
          h;
        if (l) {
          if (!p.includes(l)) {
            console.warn(
              `Target timeline '${l}' not found in interaction '${
                r.id
              }'. Available timelines: ${p.join(", ")}`
            ),
              i?.();
            return;
          }
          h = [l];
        } else h = p;
        if (s) {
          let E = new Set(s);
          h = h.filter((m) => E.has(m));
        }
        if (h.length === 0) {
          i?.();
          return;
        }
        let g = h.length,
          v = i
            ? () => {
                --g <= 0 && i();
              }
            : void 0,
          S = () => {
            a !== "pause" && a !== "stop" && o?.(),
              h.forEach((E) => {
                c !== void 0 &&
                  (this.features.timelineGroups !== !0 ||
                    (a !== "pause" && a !== "stop")) &&
                  this.coordinator.setTimeScale(E, c, t);
                let m = (0, J.toSeconds)(u);
                switch (a) {
                  case "play":
                    this.coordinator.play(E, t, m);
                    break;
                  case "pause":
                    this.coordinator.pause(E, t, m);
                    break;
                  case "resume":
                    this.coordinator.resume(E, t, m);
                    break;
                  case "reverse":
                  case "reverseFlipEase":
                    this.coordinator.reverse(E, t, m);
                    break;
                  case "restart":
                    this.coordinator.restart(E, t);
                    break;
                  case "stop":
                    this.coordinator.pause(E, t, m);
                    break;
                  case "togglePlayReverse":
                  case "togglePlayReverseFlipEase":
                    this.coordinator.togglePlayReverse(E, t);
                    break;
                  default: {
                    this.coordinator.restart(E, t);
                    let A = a;
                    break;
                  }
                }
                v && this.notifyOnTimelineSettled(E, t, a, v);
              });
          };
        d
          ? setTimeout(() => {
              S();
            }, d * 1e3)
          : S();
      }
      getEffectivePlaybackConfig(e, t) {
        let r = this.timelineDefs.get(e);
        if (
          r &&
          (this.features.timelineGroups === !0
            ? r.triggerMetadata?.role != null
            : r.triggerMetadata)
        ) {
          let i = r.settings;
          return {
            control: i?.control,
            delay: i?.delay,
            jump: i?.jump,
            speed: i?.speed,
          };
        }
        let s =
          t.controlType && (0, J.isValidControlType)(t.controlType)
            ? t.controlType
            : ue.TimelineControlType.STANDARD;
        if (r?.groupId && s === ue.TimelineControlType.STANDARD) {
          let i = r.settings;
          return {
            control: t.control,
            delay: void 0,
            jump: i?.jump,
            speed: i?.speed,
          };
        }
        return {
          control: t.control,
          delay: void 0,
          jump: t.jump,
          speed: t.speed,
        };
      }
      runTimelineAction(e, t, r, s, i, o) {
        let {
            control: a,
            delay: l,
            jump: c,
            speed: u,
          } = this.getEffectivePlaybackConfig(e, t),
          f = s ?? a,
          d = this.timelineDefs.get(e);
        if (d?.reuse) {
          let v = d.reuse.sourceTimelineId;
          if (!this.timelineDefs.has(v)) {
            console.warn(`Timeline reuse: source '${v}' not found for '${e}'`),
              i?.();
            return;
          }
          e = v;
        }
        let p = () => {
            let v = this.features.timelineGroups === !0;
            if (v && f === "none") return;
            (!v || (f !== "pause" && f !== "stop")) &&
              this.coordinator.setTimeScale(e, u ?? 1, r);
            let S = (0, J.toSeconds)(c);
            switch (f) {
              case "play":
                this.coordinator.play(e, r, S);
                break;
              case "pause":
                this.coordinator.pause(e, r, S);
                break;
              case "resume":
                this.coordinator.resume(e, r, S);
                break;
              case "reverse":
              case "reverseFlipEase":
                this.coordinator.reverse(e, r, S);
                break;
              case "restart":
                this.coordinator.restart(e, r);
                break;
              case "togglePlayReverse":
              case "togglePlayReverseFlipEase":
                this.coordinator.togglePlayReverse(e, r);
                break;
              case "stop":
                this.coordinator.pause(e, r, S);
                break;
              case "none":
                break;
              case void 0:
                this.coordinator.restart(e, r);
                break;
              default: {
                let E = f;
                this.coordinator.restart(e, r);
                break;
              }
            }
          },
          h =
            i || o
              ? () => {
                  f !== "none" && f !== "pause" && f !== "stop" && o?.(),
                    p(),
                    i && this.notifyOnTimelineSettled(e, r, f, i);
                }
              : p,
          g = (0, J.toSeconds)(l);
        g && g > 0 ? setTimeout(h, g * 1e3) : h();
      }
      notifyOnTimelineSettled(e, t, r, s) {
        if (r === "pause" || r === "stop" || r === "none") {
          s();
          return;
        }
        let i = this.coordinator.getTimeline(e, t);
        if (!i) {
          s();
          return;
        }
        let o = i.reversed() ? "onReverseComplete" : "onComplete",
          a = o === "onReverseComplete" ? 0 : 1;
        if (!i.isActive() && i.totalProgress() === a) {
          s();
          return;
        }
        let l = i.eventCallback(o),
          c = !1,
          u,
          f = function (...d) {
            if (c) {
              l?.apply(this, d);
              return;
            }
            (c = !0), u?.(), i.eventCallback(o, l ?? null);
            try {
              l?.apply(this, d);
            } catch (p) {
              console.error(
                "Error in chained timeline completion callback:",
                p
              );
            }
            s();
          };
        i.eventCallback(o, f),
          (u = this.coordinator.registerCleanup(
            e,
            () => {
              c ||
                ((c = !0),
                i.eventCallback(o) === f && i.eventCallback(o, l ?? null),
                s());
            },
            t
          ));
      }
      resolveTargets;
      isTargetDynamic;
      getComponentScopeSelector(e) {
        let t = this.componentScopeSelectors.get(e);
        return (
          t ||
            ((t = `[data-wf-component-id="${CSS.escape(e)}"]`),
            this.componentScopeSelectors.set(e, t)),
          t
        );
      }
      resolveTargetsImpl(e, t, r, s) {
        let [i, o, a] = e;
        if (o === "*" && a && a.filterBy) {
          let d = this.resolveUniversalSelectorOptimized(a, t, r, s);
          if (d) return d;
        }
        let l = this.pluginReg.getTargetResolver([i, o]);
        if (!l) return [];
        let c = l.resolve([i, o], t),
          u = s && !l.isPageLevel ? this.filterByScope(c, s) : c;
        if (!u.length || !a || a.relationship === "none" || !a.filterBy)
          return u;
        let f =
          t.anchorFilterToTrigger && t.triggerElement
            ? [t.triggerElement]
            : this.resolveTargetsImpl(a.filterBy, t, r, s);
        return this.applyRelationshipFilter(
          u,
          a.relationship,
          f,
          a.firstMatchOnly
        );
      }
      resolveUniversalSelectorOptimized(e, t, r, s) {
        if (!e.filterBy) return null;
        let i =
            t.anchorFilterToTrigger && t.triggerElement
              ? [t.triggerElement]
              : this.resolveTargetsImpl(e.filterBy, t, r, s),
          o = i.length;
        if (!o) return [];
        let a = !!e.firstMatchOnly;
        switch (e.relationship) {
          case "direct-child-of": {
            let l = [];
            for (let c = 0; c < o; c++) {
              let u = i[c];
              if (!u) continue;
              let f = u.children;
              for (let d = 0; d < f.length; d++)
                if ((l.push(f[d]), a)) return l;
            }
            return l;
          }
          case "within": {
            let l = [];
            for (let c = 0; c < o; c++) {
              let u = i[c];
              if (!u) continue;
              let f = u.querySelectorAll("*");
              for (let d = 0; d < f.length; d++)
                if ((l.push(f[d]), a)) return l;
            }
            return l;
          }
          case "direct-parent-of": {
            let l = new Set(),
              c = [];
            for (let u = 0; u < o; u++) {
              let f = i[u];
              if (!f) continue;
              let d = f.parentElement;
              if (d && !l.has(d) && (l.add(d), c.push(d), a)) break;
            }
            return s ? this.filterByScope(c, s) : c;
          }
          case "next-sibling-of": {
            let l = [];
            for (let c = 0; c < o; c++) {
              let u = i[c];
              if (!u) continue;
              let f = u.nextElementSibling;
              if (f && (l.push(f), a)) break;
            }
            return s ? this.filterByScope(l, s) : l;
          }
          case "prev-sibling-of": {
            let l = [];
            for (let c = 0; c < o; c++) {
              let u = i[c];
              if (!u) continue;
              let f = u.previousElementSibling;
              if (f && (l.push(f), a)) break;
            }
            return s ? this.filterByScope(l, s) : l;
          }
          case "next-to": {
            let l = new Set(),
              c = [];
            for (let u = 0; u < o; u++) {
              let f = i[u];
              if (!f) continue;
              let d = f.parentElement;
              if (d) {
                let p = d.children;
                for (let h = 0; h < p.length; h++) {
                  let g = p[h];
                  if (g !== f && !l.has(g) && (l.add(g), c.push(g), a)) break;
                }
                if (a && c.length) break;
              }
            }
            return s ? this.filterByScope(c, s) : c;
          }
          case "contains": {
            let l = new Set(),
              c = [];
            for (let u = 0; u < o; u++) {
              let f = i[u];
              if (!f) continue;
              let d = f.parentElement;
              for (; d && !(l.has(d) || (l.add(d), c.push(d), a)); )
                d = d.parentElement;
              if (a && c.length) break;
            }
            return s ? this.filterByScope(c, s) : c;
          }
          default:
            return null;
        }
      }
      applyRelationshipFilter(e, t, r, s) {
        if (!e.length || !r.length) return [];
        if (t === "none") return e;
        let i = [],
          o = new Set();
        switch (t) {
          case "direct-child-of": {
            let a = new Set(r);
            for (let l = 0; l < e.length; l++) {
              let c = e[l];
              if (
                !o.has(c) &&
                c.parentElement &&
                a.has(c.parentElement) &&
                (o.add(c), i.push(c), s)
              )
                return i;
            }
            return i;
          }
          case "direct-parent-of": {
            let a = new Set();
            for (let l = 0; l < r.length; l++) {
              let c = r[l].parentElement;
              c && a.add(c);
            }
            for (let l = 0; l < e.length; l++) {
              let c = e[l];
              if (!o.has(c) && a.has(c) && (o.add(c), i.push(c), s)) return i;
            }
            return i;
          }
          case "next-sibling-of": {
            let a = new Set(r);
            for (let l = 0; l < e.length; l++) {
              let c = e[l];
              if (o.has(c)) continue;
              let u = c.previousElementSibling;
              if (u && a.has(u) && (o.add(c), i.push(c), s)) return i;
            }
            return i;
          }
          case "prev-sibling-of": {
            let a = new Set(r);
            for (let l = 0; l < e.length; l++) {
              let c = e[l];
              if (o.has(c)) continue;
              let u = c.nextElementSibling;
              if (u && a.has(u) && (o.add(c), i.push(c), s)) return i;
            }
            return i;
          }
          case "next-to": {
            let a = new Set(r),
              l = new Map();
            for (let c = 0; c < r.length; c++) {
              let u = r[c].parentElement;
              u && l.set(u, (l.get(u) ?? 0) + 1);
            }
            for (let c = 0; c < e.length; c++) {
              let u = e[c];
              if (o.has(u) || !u.parentElement) continue;
              let f = l.get(u.parentElement);
              if (f && !(a.has(u) && f <= 1) && (o.add(u), i.push(u), s))
                return i;
            }
            return i;
          }
          case "within": {
            let a = new Set(r);
            for (let l = 0; l < e.length; l++) {
              let c = e[l];
              if (o.has(c)) continue;
              let u = c.parentElement;
              for (; u; ) {
                if (a.has(u)) {
                  if ((o.add(c), i.push(c), s)) return i;
                  break;
                }
                u = u.parentElement;
              }
            }
            return i;
          }
          case "contains": {
            let a = new Set();
            for (let l = 0; l < r.length; l++) {
              let c = r[l].parentElement;
              for (; c && !a.has(c); ) a.add(c), (c = c.parentElement);
            }
            for (let l = 0; l < e.length; l++) {
              let c = e[l];
              if (!o.has(c) && a.has(c) && (o.add(c), i.push(c), s)) return i;
            }
            return i;
          }
          default:
            return [];
        }
      }
      filterByInstance(e, t, r) {
        if (!e.length) return e;
        let s = r.closest(t);
        if (!s) return e;
        let i = -1;
        for (let a = 0; a < e.length; a++)
          if (e[a]?.closest(t) !== s) {
            i = a;
            break;
          }
        if (i === -1) return e;
        let o = e.slice(0, i);
        for (let a = i + 1; a < e.length; a++) {
          let l = e[a];
          l?.closest(t) === s && o.push(l);
        }
        return o;
      }
      filterByScope(e, t) {
        if (!e.length) return e;
        let r = -1;
        for (let i = 0; i < e.length; i++)
          if (!e[i]?.closest(t)) {
            r = i;
            break;
          }
        if (r === -1) return e;
        let s = e.slice(0, r);
        for (let i = r + 1; i < e.length; i++) {
          let o = e[i];
          o?.closest(t) && s.push(o);
        }
        return s;
      }
      filterByVariant(e, t, r) {
        if (!e.length) return e;
        let s = (a) => {
            let l = a.closest(t);
            if (!l) return !1;
            let c = l.getAttribute("data-wf-variant-state");
            return c != null && r.includes(c);
          },
          i = -1;
        for (let a = 0; a < e.length; a++) {
          let l = e[a];
          if (!l || !s(l)) {
            i = a;
            break;
          }
        }
        if (i === -1) return e;
        let o = e.slice(0, i);
        for (let a = i + 1; a < e.length; a++) {
          let l = e[a];
          l && s(l) && o.push(l);
        }
        return o;
      }
      isInInteractionScope(e, t) {
        let r = e.scope;
        if (r?.type !== "component" || !r.componentId) return !0;
        let s = this.getComponentScopeSelector(r.componentId);
        return (
          (r.variants?.length
            ? this.filterByVariant([t], s, r.variants)
            : this.filterByScope([t], s)
          ).length > 0
        );
      }
      getInteractionForTimeline;
      getInteractionsForTimelines;
      recomputeFlipEaseForOwnSources(e) {
        if (this.features.timelineGroups !== !0) return;
        let t = new Set();
        for (let r of e.timelineIds ?? [])
          this.timelineDefs.has(r) &&
            t.add(this.coordinator.resolveSourceTimelineId(r));
        for (let r of t) this.coordinator.recomputeFlipEaseForSource(r);
      }
      incrementTimelineRefCount(e) {
        let t = this.timelineRefCounts.get(e) || 0;
        this.timelineRefCounts.set(e, t + 1);
      }
      decrementTimelineRefCount(e) {
        let t = this.timelineRefCounts.get(e) || 0,
          r = Math.max(0, t - 1);
        return this.timelineRefCounts.set(e, r), r;
      }
      decrementTimelineReferences(e) {
        let t = new Set(),
          r = this.interactionTimelineRefs.get(e);
        if (!r) return t;
        for (let s of r) this.decrementTimelineRefCount(s) === 0 && t.add(s);
        return t;
      }
      unbindAllTriggers(e) {
        let t = this.triggerCleanupFunctions.get(e);
        if (t) {
          for (let [, r] of t)
            for (let s of r)
              try {
                s();
              } catch (i) {
                console.error("Error during trigger cleanup:", i);
              }
          this.triggerCleanupFunctions.delete(e);
        }
      }
      cleanupTriggerObservers(e) {
        let t = this.triggerObservers.get(e);
        if (t) {
          for (let [r, s] of t) {
            try {
              s();
            } catch (i) {
              console.error("Error during trigger observer cleanup:", i);
            }
            this.pendingReactiveUpdates.delete(r),
              this.reactiveExecutionContext.delete(r);
          }
          this.reactiveCallbackQueues.delete(e),
            this.triggerObservers.delete(e);
        }
      }
      cleanupContinuousControlsForInteraction(e) {
        let t = this.continuousCleanups.get(e);
        if (t) {
          for (let [, r] of t)
            try {
              r();
            } catch (s) {
              console.error("Error during continuous control cleanup:", s);
            }
          this.continuousCleanups.delete(e);
        }
      }
      cleanupAllContinuousControls() {
        for (let [, e] of this.continuousCleanups)
          for (let [, t] of e)
            try {
              t();
            } catch (r) {
              console.error("Error during continuous control cleanup:", r);
            }
        this.continuousCleanups.clear();
      }
      cleanupInteractionAnimations(e) {
        this.unbindAllTriggers(e),
          this.activeInteractionIds.delete(e),
          this.cleanupContinuousControlsForInteraction(e);
        let t = this.interactionTimelineRefs.get(e);
        if (t)
          for (let s of t)
            this.decrementTimelineRefCount(s) === 0 &&
              this.destroyTimelineInstance(s);
        let r = this.interactions.get(e);
        r && this.recomputeFlipEaseForOwnSources(r),
          this.resolversHeld.delete(e) &&
            (this.releaseTargetResolvers(e), this.releasedByTeardown.add(e)),
          this.triggeredElements.delete(e);
        for (let s of this.interactions.get(e)?.triggers ?? [])
          this.lastRoutedTimelineIds.delete(s),
            this.lastActivatedRoles.delete(s);
      }
    },
    ht = ar;
  st(ht, "instance");
});
var oo = O((lr) => {
  "use strict";
  Object.defineProperty(lr, "__esModule", { value: !0 });
  function Xu(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Xu(lr, {
    EASING_NAMES: function () {
      return Zu.EASING_NAMES;
    },
    IX3: function () {
      return Qu.IX3;
    },
    convertEaseConfigToGSAP: function () {
      return io.convertEaseConfigToGSAP;
    },
    convertEaseConfigToLinear: function () {
      return io.convertEaseConfigToLinear;
    },
  });
  var Qu = so(),
    Zu = ee(),
    io = bn();
});
var lo = O((cr) => {
  "use strict";
  Object.defineProperty(cr, "__esModule", { value: !0 });
  function Ju(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Ju(cr, {
    BETA_FEATURES: function () {
      return $e;
    },
    adminRequired: function () {
      return M;
    },
    betaFeaturesTestingLib: function () {
      return nf;
    },
    getBetaFeatureDefinition: function () {
      return ef;
    },
    isBetaFeatureFlag: function () {
      return tf;
    },
  });
  var M = [],
    ao = [],
    $e = {
      figma: { shortcut: M, scope: ["user"] },
      rssUrl: { shortcut: ["* r s s u r l"], scope: ["user"] },
      disableBlockers: { shortcut: ["* z o o m"], scope: ["user"] },
      peek: { shortcut: ao, scope: ["user"] },
      ecShipStation: { shortcut: M, scope: ["user"] },
      betaception: { shortcut: ao, scope: ["user"] },
      fileUpload: { shortcut: M, scope: ["user"] },
      customClassInRichText: { shortcut: ["* c c c"], scope: ["user"] },
      allowCustomSiteHeader: { shortcut: M, scope: ["site"] },
      showFastlyAsEdgeIPs: { shortcut: M, scope: ["site"] },
      useNewBillingSystem: { shortcut: M, scope: ["user"] },
      useUserTaxCollection: { shortcut: M, scope: ["user"] },
      useTeamTaxCollection: { shortcut: M, scope: ["workspace"] },
      auditCorruptedCheckout: { shortcut: ["* a e c o m"], scope: ["user"] },
      auditLazyImage: { shortcut: ["* a l a z y"], scope: ["user"] },
      lab: { shortcut: ["* l a b"], scope: ["user"] },
      logicFlowsV2: { shortcut: M, scope: ["user"] },
      logicDev: { shortcut: M, scope: ["user"] },
      logicEventTriggers: { shortcut: M, scope: ["site"] },
      disableWorkspaceAnnotationEmailNotifications: {
        shortcut: M,
        scope: ["workspace"],
      },
      hasEnterpriseSite: { shortcut: M, scope: ["workspace"] },
      isEnterprisePartner: { shortcut: M, scope: ["workspace"] },
      isEnterprise: { shortcut: M, scope: ["workspace"] },
      isEnterprisePro: { shortcut: M, scope: ["workspace"] },
      isEnterpriseLite: { shortcut: M, scope: ["workspace"] },
      isEnterpriseSite: { shortcut: M, scope: ["site"] },
      disableWorkspaceReviewEmailNotifications: {
        shortcut: M,
        scope: ["workspace"],
      },
      enableUnlimitedWorkspaceLibraries: { shortcut: M, scope: ["workspace"] },
      isEnterpriseLiteSite: { shortcut: M, scope: ["site"] },
      enterpriseCustomSslCert: { shortcut: M, scope: ["site"] },
      enterpriseMarketingIntegrations: { shortcut: M, scope: ["workspace"] },
      hubspotMarketingIntegration: { shortcut: M, scope: ["workspace"] },
      pageBuilderRole: { shortcut: M, scope: ["workspace"] },
      testSiteBeta: { shortcut: ["* t s"], scope: ["site"] },
      testWorkspaceBeta: { shortcut: M, scope: ["workspace"] },
      testUserAndWorkspaceBeta: { shortcut: M, scope: ["user", "workspace"] },
      dl: { shortcut: M, scope: ["user", "workspace"], open: !0 },
      rolesNWorkspaces: { shortcut: M, scope: ["user"] },
      reactQueryDevtools: { shortcut: M, scope: ["user"] },
      auditInputLabels: { shortcut: ["* l a b e l"], scope: ["user"] },
      auditFocusStyles: { shortcut: ["* f o c u s"], scope: ["user"] },
      dns01CertValidation: { shortcut: M, scope: ["site"] },
      enableReactDashboard: { shortcut: M, scope: ["user"] },
      focusWithin: { shortcut: ["* w i t h i n"], scope: ["user"] },
      trialSubscription: { shortcut: M, scope: ["site"] },
      pluginComponents: { shortcut: M, scope: ["site"] },
      thirdPartyLibrariesAuthoring: { shortcut: M, scope: ["site"] },
      localization: { shortcut: M, scope: ["site"] },
      localizationCanPublishLocales: { shortcut: M, scope: ["site"] },
      jank: { shortcut: ["* j a n k"], scope: ["user"] },
      aiHelpFollowUps: { shortcut: M, scope: ["workspace"] },
      enterpriseSiteActivityLogBeta: { shortcut: M, scope: ["workspace"] },
      marketplacePaymentsCreator: { shortcut: M, scope: ["workspace"] },
      disableBS: { shortcut: ["* d b s"], scope: ["user"] },
      optimize: { shortcut: M, scope: ["site"] },
      optimizeStandalone: { shortcut: M, scope: ["workspace"] },
      analyze: { shortcut: M, scope: ["site"] },
      testUserBeta: { shortcut: M, scope: ["user"] },
      testUserBeta2: { shortcut: M, scope: ["user"] },
      testOAuthAppBeta: { shortcut: M, scope: ["oauthApplication"] },
    },
    ef = (n) => $e[n];
  function tf(n) {
    return n in $e;
  }
  var nf = {
    addBetaFlag: function (e, t) {
      $e[e] = t;
    },
    removeBetaFlag: function (e) {
      delete $e[e];
    },
  };
});
var co = O((ur) => {
  "use strict";
  Object.defineProperty(ur, "__esModule", { value: !0 });
  function rf(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  rf(ur, {
    createConstantsStore: function () {
      return sf;
    },
    selectAppName: function () {
      return of;
    },
    selectReadOnly: function () {
      return af;
    },
  });
  var sf = (n) => {
      function e() {
        return n;
      }
      return { initialState: n, reducer: e };
    },
    of = (n) => n.ConstantsStore.appName,
    af = (n) => n.ConstantsStore.readOnly;
});
var uo = O((fr) => {
  "use strict";
  Object.defineProperty(fr, "__esModule", { value: !0 });
  Object.defineProperty(fr, "WebflowEnvironments", {
    enumerable: !0,
    get: function () {
      return lf;
    },
  });
  var lf = Object.freeze({
    DESIGNER: "designer",
    EDITOR: "editor",
    SSR: "ssr",
    EXPORT: "export",
    LLM: "llm",
  });
});
var po = O((fo) => {
  "use strict";
  Object.defineProperty(fo, "__esModule", { value: !0 });
});
var ho = O((dr) => {
  "use strict";
  Object.defineProperty(dr, "__esModule", { value: !0 });
  Object.defineProperty(dr, "TARGET_AI_SITE_GEN_LIBRARY_SLUG", {
    enumerable: !0,
    get: function () {
      return cf;
    },
  });
  var cf = "ai-gen-82921b10-4b39-48f0-b346-808cf4903d29";
});
var To = O((pr) => {
  "use strict";
  Object.defineProperty(pr, "__esModule", { value: !0 });
  function uf(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  uf(pr, {
    instPathKey: function () {
      return mo;
    },
    instPathSetKey: function () {
      return df;
    },
    parseInstPathKey: function () {
      return yo;
    },
    parseInstPathSetKey: function () {
      return pf;
    },
    readInstPath: function () {
      return go;
    },
    readInstPathsFromTriggers: function () {
      return ff;
    },
  });
  function go(n) {
    if (!Array.isArray(n)) return null;
    let e = Array.isArray(n[0]) ? n[0] : n;
    if (!Array.isArray(e)) return null;
    let [t, r] = e;
    return typeof t == "string" && t !== "" && typeof r == "string" && r !== ""
      ? [t, r]
      : null;
  }
  function ff(n, e, t) {
    let r = [];
    for (let s of n ?? []) {
      if (s[0] !== e) continue;
      let i = s[2];
      if (!Array.isArray(i) || i[0] !== t) continue;
      let o = go(i[1]);
      o && r.push(o);
    }
    return r;
  }
  function mo(n, e) {
    return `${n} ${e}`;
  }
  function yo(n) {
    let e = n.split(" ");
    return e.length === 2 && e[0] && e[1] ? [e[0], e[1]] : null;
  }
  var vo = "|";
  function df(n) {
    return n.map(([e, t]) => mo(e, t)).join(vo);
  }
  function pf(n) {
    if (n === "") return [];
    let e = [];
    for (let t of n.split(vo)) {
      let r = yo(t);
      if (!r) return null;
      e.push(r);
    }
    return e;
  }
});
var bo = O((hr) => {
  "use strict";
  Object.defineProperty(hr, "__esModule", { value: !0 });
  function hf(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  hf(hr, {
    POPOVER_ANIMATED_ATTRIBUTE: function () {
      return Sf;
    },
    POPOVER_ANIMATION_CLOSE_COMMAND: function () {
      return Af;
    },
    POPOVER_ANIMATION_OPEN_COMMAND: function () {
      return Of;
    },
    POPOVER_BACKDROP_ANIMATED_ATTRIBUTE: function () {
      return yf;
    },
    POPOVER_BACKDROP_ANIMATION_PROPERTY: function () {
      return mf;
    },
    POPOVER_BACKDROP_KEYFRAMES_PREFIX: function () {
      return vf;
    },
    POPOVER_CLASS: function () {
      return gf;
    },
    POPOVER_COMMAND_EVENT: function () {
      return wf;
    },
    POPOVER_MASK_CLASS: function () {
      return Tf;
    },
    POPOVER_MASK_FOR_ATTRIBUTE: function () {
      return bf;
    },
    POPOVER_MODE_ATTRIBUTE: function () {
      return Ef;
    },
  });
  var gf = "w-popover",
    mf = "--w-backdrop-animation",
    yf = "data-w-popover-backdrop-animated",
    vf = "w-bd-",
    Tf = "w-popover-mask",
    bf = "data-w-popover-mask-for",
    Sf = "data-w-popover-animated",
    Ef = "data-w-popover-mode",
    wf = "webflow:popover-command",
    Of = "animation-open",
    Af = "animation-close";
});
var qe = O((oe) => {
  "use strict";
  Object.defineProperty(oe, "__esModule", { value: !0 });
  ge(lo(), oe);
  ge(co(), oe);
  ge(uo(), oe);
  ge(po(), oe);
  ge(ho(), oe);
  ge(To(), oe);
  ge(bo(), oe);
  function ge(n, e) {
    return (
      Object.keys(n).forEach(function (t) {
        t !== "default" &&
          !Object.prototype.hasOwnProperty.call(e, t) &&
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return n[t];
            },
          });
      }),
      n
    );
  }
});
var Tr = O((vr) => {
  "use strict";
  Object.defineProperty(vr, "__esModule", { value: !0 });
  function Rf(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Rf(vr, {
    COMPONENT_INSTANCE_TRIGGER_KEYS: function () {
      return Eo;
    },
    COMPONENT_TIMELINE_ROLES: function () {
      return Xf;
    },
    DEFAULT_DURATION_TRIGGER_MODE: function () {
      return Nf;
    },
    DEFAULT_DURATION_TRIGGER_SECONDS: function () {
      return Lf;
    },
    DEFAULT_MOUSE_FOLLOW_ANCHOR: function () {
      return Pf;
    },
    DEFAULT_MOUSE_MOVE_INTERVAL_DISTANCE: function () {
      return xf;
    },
    DURATION_TRIGGER_MODES: function () {
      return kf;
    },
    DURATION_TRIGGER_SECONDS_RANGE: function () {
      return yr;
    },
    HOVER_TIMELINE_ROLES: function () {
      return Zf;
    },
    INST_PATH_TARGET_KEYS: function () {
      return So;
    },
    IX3_POPOVER_STATE_EVENT: function () {
      return Df;
    },
    IX3_WF_EXTENSION_KEYS: function () {
      return gr;
    },
    MOUSE_MOVE_CHANNELS: function () {
      return Yf;
    },
    MOUSE_MOVE_TIMELINE_ROLES: function () {
      return jf;
    },
    POPOVER_ANIMATED_ATTRIBUTE: function () {
      return _f.POPOVER_ANIMATED_ATTRIBUTE;
    },
    POPOVER_TIMELINE_ROLES: function () {
      return Qf;
    },
    TIMELINE_ROLE_NAMES: function () {
      return j;
    },
    TargetScope: function () {
      return mr;
    },
    VELOCITY_CAPABLE_PROPS: function () {
      return wo;
    },
    canUseVelocityInfluenceProperty: function () {
      return Uf;
    },
    getEffectiveFollowMode: function () {
      return Mf;
    },
    getMouseFollowConfig: function () {
      return If;
    },
    getMouseMoveTimelineContext: function () {
      return gt;
    },
    getOppositeMouseFollowAxis: function () {
      return zf;
    },
    getSingleAxisMouseFollowMode: function () {
      return Cf;
    },
    isComponentInstanceTriggerKey: function () {
      return Vf;
    },
    isInstPathTargetKey: function () {
      return Bf;
    },
    isMouseMoveIntervalRole: function () {
      return $f;
    },
    isVelocityInfluenceEnabled: function () {
      return Gf;
    },
    minimumDurationSeconds: function () {
      return Ff;
    },
    mouseFollowAxisToRole: function () {
      return Hf;
    },
    mouseFollowRoleToAxis: function () {
      return qf;
    },
    mouseFollowRoleToSiblingRole: function () {
      return Wf;
    },
    narrowMouseMoveIntervalPayload: function () {
      return Kf;
    },
  });
  var _f = qe(),
    gr;
  (function (n) {
    (n.CLASS = "wf:class"),
      (n.BODY = "wf:body"),
      (n.ID = "wf:id"),
      (n.TRIGGER_ONLY = "wf:trigger-only"),
      (n.TRIGGER_ONLY_PARENT = "wf:trigger-only-parent"),
      (n.SELECTOR = "wf:selector"),
      (n.ATTRIBUTE = "wf:attribute"),
      (n.INST = "wf:inst"),
      (n.ANY_ELEMENT = "wf:any-element"),
      (n.VIEWPORT = "wf:viewport"),
      (n.POPOVER_ELEMENT = "wf:popover-element"),
      (n.POPOVER_BACKDROP = "wf:popover-backdrop"),
      (n.STYLE = "wf:style"),
      (n.TRANSFORM = "wf:transform"),
      (n.LOTTIE = "wf:lottie"),
      (n.SPLINE = "wf:spline"),
      (n.VARIABLE = "wf:variable"),
      (n.RIVE = "wf:rive"),
      (n.ANIMATE_RIVE = "wf:animate-rive"),
      (n.MOUSE_FOLLOW = "wf:mouse-follow"),
      (n.CLICK = "wf:click"),
      (n.HOVER = "wf:hover"),
      (n.LOAD = "wf:load"),
      (n.FOCUS = "wf:focus"),
      (n.BLUR = "wf:blur"),
      (n.SCROLL = "wf:scroll"),
      (n.SCROLL_SCRUB = "wf:scroll-scrub"),
      (n.SCROLL_ACTIONS = "wf:scroll-actions"),
      (n.SCROLL_DIRECTION = "wf:scroll-direction"),
      (n.CUSTOM = "wf:custom"),
      (n.CHANGE = "wf:change"),
      (n.MOUSE_MOVE = "wf:mouse-move"),
      (n.NAVBAR = "wf:navbar"),
      (n.DROPDOWN = "wf:dropdown"),
      (n.POPOVER = "wf:popover"),
      (n.EXIT_INTENT = "wf:exit-intent"),
      (n.DURATION = "wf:duration"),
      (n.PREFERS_REDUCED_MOTION = "wf:prefersReducedMotion"),
      (n.WEBFLOW_BREAKPOINTS = "wf:webflowBreakpoints"),
      (n.CUSTOM_MEDIA_QUERY = "wf:customMediaQuery"),
      (n.COLOR_SCHEME = "wf:colorScheme"),
      (n.ELEMENT_DATA_ATTRIBUTE = "wf:elementDataAttribute"),
      (n.CURRENT_TIME = "wf:currentTime"),
      (n.ELEMENT_STATE = "wf:elementState");
  })(gr || (gr = {}));
  var mr;
  (function (n) {
    (n.ALL = "all"),
      (n.PARENT = "parent"),
      (n.CHILDREN = "children"),
      (n.SIBLINGS = "siblings"),
      (n.NEXT = "next"),
      (n.PREVIOUS = "previous"),
      (n.FIRST_ANCESTOR = "first-ancestor"),
      (n.FIRST_DESCENDANT = "first-descendant"),
      (n.DESCENDANTS = "descendants"),
      (n.ANCESTORS = "ancestors");
  })(mr || (mr = {}));
  function If(n) {
    let e = n?.properties?.["wf:mouse-follow"];
    if (!(typeof e != "object" || e === null || Array.isArray(e))) return e;
  }
  function Mf(n) {
    return n?.followMode ?? "full";
  }
  function Cf(n) {
    return n === "x" ? "x-only" : "y-only";
  }
  var Pf = "50% 50%",
    xf = 100,
    kf = ["idle", "timeOnSite"],
    Nf = "timeOnSite",
    Lf = 5,
    yr = { min: 0, max: 3600 },
    Ff = (n) => (n === "idle" ? Math.max(1, yr.min) : yr.min),
    Df = "webflow:popover-state",
    So = ["wf:inst", "wf:popover-element", "wf:popover-backdrop"];
  function Bf(n) {
    return So.includes(n);
  }
  var Eo = ["wf:popover"];
  function Vf(n) {
    return Eo.includes(n);
  }
  var j = {
    MOUSE_X: "mouseX",
    MOUSE_Y: "mouseY",
    INTERVAL: "interval",
    OPEN: "open",
    CLOSE: "close",
    MOUSE_ENTER: "mouseEnter",
    MOUSE_LEAVE: "mouseLeave",
  };
  function gt(n) {
    return n === j.MOUSE_X
      ? { kind: "mouse-x", role: n, axis: "x", siblingRole: j.MOUSE_Y }
      : n === j.MOUSE_Y
      ? { kind: "mouse-y", role: n, axis: "y", siblingRole: j.MOUSE_X }
      : n === j.INTERVAL
      ? { kind: "interval", role: n }
      : { kind: "other", role: n ?? void 0 };
  }
  var jf = {
      MOUSE_X: { role: j.MOUSE_X, label: "Mouse X", usePercentCanvas: !0 },
      MOUSE_Y: { role: j.MOUSE_Y, label: "Mouse Y", usePercentCanvas: !0 },
      INTERVAL: { role: j.INTERVAL, label: "Interval" },
    },
    wo = new Set([
      "x",
      "y",
      "scale",
      "scaleX",
      "scaleY",
      "rotation",
      "skewX",
      "skewY",
      "opacity",
    ]);
  function Gf(n) {
    return (
      n?.pluginConfig?.type === "mouseMove" &&
      !!n.pluginConfig.velocityInfluence
    );
  }
  function Uf(n) {
    return wo.has(n);
  }
  function $f(n) {
    return gt(n).kind === "interval";
  }
  function qf(n) {
    let e = gt(n);
    return e.kind === "mouse-x" || e.kind === "mouse-y" ? e.axis : null;
  }
  function zf(n) {
    return n === "x" ? "y" : "x";
  }
  function Hf(n) {
    return n === "x" ? j.MOUSE_X : j.MOUSE_Y;
  }
  function Wf(n) {
    let e = gt(n);
    return e.kind === "mouse-x" || e.kind === "mouse-y" ? e.siblingRole : null;
  }
  var Yf = { POSITION: "wf:mouse-move:position", LEAVE: "wf:mouse-move:leave" };
  function Kf(n) {
    if (typeof n != "object" || n === null) return {};
    let e = n,
      t = {},
      r = e.cursorPos;
    return (
      typeof r == "object" &&
        r !== null &&
        typeof r.x == "number" &&
        typeof r.y == "number" &&
        (t.cursorPos = { x: r.x, y: r.y }),
      typeof e.velocityFactor == "number" &&
        (t.velocityFactor = e.velocityFactor),
      typeof e.dirX == "number" && (t.dirX = e.dirX),
      typeof e.dirY == "number" && (t.dirY = e.dirY),
      t
    );
  }
  var Xf = {
      OPEN: {
        role: j.OPEN,
        label: "Open",
        allowedControls: ["play", "restart"],
        defaultControl: "play",
      },
      CLOSE: {
        role: j.CLOSE,
        label: "Close",
        allowedControls: ["play", "restart", "reverse", "reverseFlipEase"],
        allowedControlsWhenReusing: ["reverse", "reverseFlipEase"],
        defaultControl: "play",
        defaultControlWhenReusing: "reverseFlipEase",
        autoReusesRole: j.OPEN,
      },
    },
    Qf = {
      OPEN: {
        role: j.OPEN,
        label: "Open actions",
        allowedControls: ["restart"],
        defaultControl: "restart",
      },
      CLOSE: {
        role: j.CLOSE,
        label: "Close actions",
        allowedControls: ["restart"],
        defaultControl: "restart",
      },
    },
    Zf = {
      MOUSE_ENTER: {
        role: j.MOUSE_ENTER,
        label: "Hover in actions",
        allowedControls: ["play", "restart"],
        defaultControl: "play",
      },
      MOUSE_LEAVE: {
        role: j.MOUSE_LEAVE,
        label: "Hover out actions",
        allowedControls: ["play", "restart", "reverse", "reverseFlipEase"],
        defaultControl: "play",
      },
    };
});
var Io = O((Er) => {
  "use strict";
  Object.defineProperty(Er, "__esModule", { value: !0 });
  function Jf(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Jf(Er, {
    createLoadedMouseFollowActionNormalizer: function () {
      return ad;
    },
    forTestSuite: function () {
      return ld;
    },
    getGroupedMouseFollowConfig: function () {
      return Sr;
    },
    getUnpairedMouseFollowAction: function () {
      return nd;
    },
    getUnpairedMouseFollowConfig: function () {
      return Oo;
    },
    remapMouseFollowActionGroupsInTimelines: function () {
      return od;
    },
    setGroupedMouseFollowActionConfig: function () {
      return td;
    },
    setMouseFollowActionConfig: function () {
      return Ao;
    },
    stripMouseFollowActionInstanceIds: function () {
      return rd;
    },
    stripMouseFollowConfigInstanceIds: function () {
      return br;
    },
  });
  var mt = Tr();
  function br(n) {
    let { groupId: e, syncedActionId: t, ...r } = n;
    return r;
  }
  function ed(n, e) {
    return { ...br(n), groupId: e };
  }
  function Sr(n, e, t) {
    let r = ed(n, e);
    return (
      t?.axis !== void 0 && (r.axis = t.axis),
      t?.followMode !== void 0 && (r.followMode = t.followMode),
      r
    );
  }
  function Oo(n, e = n.axis) {
    let { syncedActionId: t, ...r } = n,
      s =
        r.followMode === "full" && e
          ? (0, mt.getSingleAxisMouseFollowMode)(e)
          : r.followMode;
    return { ...r, ...(s !== void 0 ? { followMode: s } : {}) };
  }
  function yt(n, e) {
    let t = (0, mt.getMouseFollowConfig)(n);
    if (!t) return n;
    let r = e(t);
    return r === t
      ? n
      : {
          ...n,
          properties: {
            ...n.properties,
            [mt.IX3_WF_EXTENSION_KEYS.MOUSE_FOLLOW]: r,
          },
        };
  }
  function Ao(n, e) {
    return {
      ...n,
      properties: {
        ...n.properties,
        [mt.IX3_WF_EXTENSION_KEYS.MOUSE_FOLLOW]: e,
      },
    };
  }
  function td(n, e, t, r) {
    return Ao(n, Sr(e, t, r));
  }
  function nd(n, e) {
    return yt(n, (t) => Oo(t, e));
  }
  function rd(n) {
    return yt(n, br);
  }
  function sd(n, e, t) {
    return t[e] ? [n, e].sort().join(":") : `single:${n}`;
  }
  function id(n, e, t) {
    return (
      e.groupId ??
      (e.syncedActionId ? sd(n, e.syncedActionId, t) : `single:${n}`)
    );
  }
  function Ro(n, e) {
    let t = {};
    return (r, s = r.id) =>
      yt(r, (i) => {
        let o = id(s, i, e),
          a = t[o] ?? n(o);
        return (t[o] = a), Sr(i, a);
      });
  }
  function _o(n, e, t) {
    let r = t ?? Object.fromEntries(n.map((i) => [i.id, i.id])),
      s = Ro(() => e(), r);
    return (i, o) => s(i, o ?? i.id);
  }
  function od(
    n,
    { generateGroupId: e, actionIdMap: t, mapAction: r = (s) => s }
  ) {
    let s = _o(
      n.flatMap((i) => i.actions ?? []),
      e,
      t
    );
    return n.map((i) => {
      let o = !1,
        a = i.actions?.map((l) => {
          let c = l.id,
            u = r(l),
            f = s(u, c);
          return (o = o || f !== l), f;
        });
      return o && a ? { ...i, actions: a } : i;
    });
  }
  function ad(n) {
    let e = Object.fromEntries(n.map((r) => [r.id, r.id])),
      t = Ro((r) => r, e);
    return (r, s) => {
      let i = t(r);
      return s ? yt(i, (o) => (o.axis ? o : { ...o, axis: s })) : i;
    };
  }
  var ld = { createMouseFollowActionGroupRemapper: _o };
});
var Co = O((wr) => {
  "use strict";
  Object.defineProperty(wr, "__esModule", { value: !0 });
  function cd(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  cd(wr, {
    TRANSIENT_IX3_CLONE_ATTR: function () {
      return Mo;
    },
    isTransientIX3Clone: function () {
      return ud;
    },
  });
  var Mo = "data-ix3-clone",
    ud = (n) => !!n.closest?.(`[${Mo}]`);
});
var ne = O((Me) => {
  "use strict";
  Object.defineProperty(Me, "__esModule", { value: !0 });
  Object.defineProperty(Me, "CORE_PLUGIN_INFO", {
    enumerable: !0,
    get: function () {
      return fd;
    },
  });
  Or(Tr(), Me);
  Or(Io(), Me);
  Or(Co(), Me);
  function Or(n, e) {
    return (
      Object.keys(n).forEach(function (t) {
        t !== "default" &&
          !Object.prototype.hasOwnProperty.call(e, t) &&
          Object.defineProperty(e, t, {
            enumerable: !0,
            get: function () {
              return n[t];
            },
          });
      }),
      n
    );
  }
  var fd = { namespace: "wf", pluginId: "core", version: "1.0.0" };
});
var ze = O((Rr) => {
  "use strict";
  Object.defineProperty(Rr, "__esModule", { value: !0 });
  function dd(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  dd(Rr, {
    getScrollY: function () {
      return gd;
    },
    initScrollCache: function () {
      return hd;
    },
    noop: function () {
      return pd;
    },
  });
  var pd = () => {},
    Ar = 0,
    vt = 0,
    Ce = null;
  function hd() {
    (vt += 1),
      Ce ||
        ((Ce = () => {
          Ar = window.scrollY;
        }),
        (Ar = window.scrollY),
        window.addEventListener("scroll", Ce, { passive: !0 }));
    let n = !1;
    return () => {
      n ||
        ((n = !0),
        (vt = Math.max(0, vt - 1)),
        vt === 0 &&
          Ce &&
          (window.removeEventListener("scroll", Ce), (Ce = null)));
    };
  }
  function gd() {
    return Ar;
  }
});
var Po = O((_r) => {
  "use strict";
  Object.defineProperty(_r, "__esModule", { value: !0 });
  function md(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  md(_r, {
    getFirst: function () {
      return yd;
    },
    getSecond: function () {
      return vd;
    },
    pair: function () {
      return Td;
    },
  });
  var yd = (n) => n[0],
    vd = (n) => n[1],
    Td = (n, e) => [n, e];
});
var Tt = O((Ir) => {
  "use strict";
  Object.defineProperty(Ir, "__esModule", { value: !0 });
  function bd(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  bd(Ir, {
    TRANSIENT_IX3_CLONE_ATTR: function () {
      return xo.TRANSIENT_IX3_CLONE_ATTR;
    },
    isTransientIX3Clone: function () {
      return xo.isTransientIX3Clone;
    },
  });
  var xo = ne();
});
var Cr = O((Mr) => {
  "use strict";
  Object.defineProperty(Mr, "__esModule", { value: !0 });
  function Sd(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Sd(Mr, {
    elementTargetSelector: function () {
      return _d;
    },
    safeClosest: function () {
      return Ad;
    },
    safeGetElementById: function () {
      return Ed;
    },
    safeMatches: function () {
      return Rd;
    },
    safeQuerySelector: function () {
      return Od;
    },
    safeQuerySelectorAll: function () {
      return wd;
    },
  });
  var bt = Tt(),
    Ed = (n) => {
      try {
        let e = document.getElementById(n);
        return e && !(0, bt.isTransientIX3Clone)(e) ? e : null;
      } catch {
        return null;
      }
    },
    wd = (n, e) => {
      try {
        let t = e.querySelectorAll(n);
        if (t.length === 0) return [];
        let r = [];
        for (let s of t) (0, bt.isTransientIX3Clone)(s) || r.push(s);
        return r;
      } catch {
        return null;
      }
    },
    Od = (n, e) => {
      try {
        let t = e.querySelector(n);
        if (!t) return null;
        if (!(0, bt.isTransientIX3Clone)(t)) return t;
        let r = e.querySelectorAll(n);
        for (let s of r) if (!(0, bt.isTransientIX3Clone)(s)) return s;
        return null;
      } catch {
        return null;
      }
    },
    Ad = (n, e) => {
      try {
        return n.closest(e);
      } catch {
        return null;
      }
    },
    Rd = (n, e) => {
      try {
        return n.matches(e);
      } catch {
        return null;
      }
    },
    _d = (n) => `[data-wf-target*="${CSS.escape(`[${JSON.stringify(n)}`)}"]`;
});
var ko = O((Pr) => {
  "use strict";
  Object.defineProperty(Pr, "__esModule", { value: !0 });
  Object.defineProperty(Pr, "applyScope", {
    enumerable: !0,
    get: function () {
      return Md;
    },
  });
  var ae = ne(),
    St = Cr(),
    Id = Tt(),
    re = (n) => n.filter((e) => !(0, Id.isTransientIX3Clone)(e)),
    Md = (n, e) => {
      let t = re(n);
      if (!e) return t;
      if (Array.isArray(e)) {
        let [r, s] = e,
          i = [];
        switch (r) {
          case ae.TargetScope.FIRST_ANCESTOR:
            for (let o of t) {
              let a = s ? (0, St.safeClosest)(o, s) : null;
              a && i.push(a);
            }
            return re(i);
          case ae.TargetScope.FIRST_DESCENDANT:
            for (let o of t) {
              let a = s ? (0, St.safeQuerySelector)(s, o) : o.firstElementChild;
              a && i.push(a);
            }
            return re(i);
          case ae.TargetScope.DESCENDANTS:
            for (let o of t)
              i.push(...((0, St.safeQuerySelectorAll)(s, o) || []));
            return re(i);
          case ae.TargetScope.ANCESTORS:
            for (let o of t) {
              let a = o.parentElement;
              for (; a; )
                (!s || (0, St.safeMatches)(a, s)) && i.push(a),
                  (a = a.parentElement);
            }
            return re(i);
        }
      }
      switch (e) {
        case ae.TargetScope.CHILDREN:
          return re(t.flatMap((r) => [...r.children]));
        case ae.TargetScope.PARENT:
          return re(t.map((r) => r.parentElement).filter(Boolean));
        case ae.TargetScope.SIBLINGS:
          return re(
            t.flatMap((r) =>
              r.parentElement
                ? [...r.parentElement.children].filter((s) => s !== r)
                : []
            )
          );
        case ae.TargetScope.NEXT:
          return re(t.flatMap((r) => r.nextElementSibling || []));
        case ae.TargetScope.PREVIOUS:
          return re(t.flatMap((r) => r.previousElementSibling || []));
        default:
          return t;
      }
    };
});
var Bo = O((Nr) => {
  "use strict";
  Object.defineProperty(Nr, "__esModule", { value: !0 });
  function Cd(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Cd(Nr, {
    backdropDeclarations: function () {
      return kr;
    },
    buildBackdropTween: function () {
      return Dd;
    },
  });
  var He = K(),
    We = qe(),
    Ye = null,
    Pd = 0,
    xr = new WeakMap(),
    No = /random\(|[+\-*/]=|\/\*|[;{}]/,
    Pe = (n, e) => (typeof n == "number" ? n + e : n),
    Lo = { rotation: "", rotationZ: "", rotationX: "x ", rotationY: "y " };
  function kr(n) {
    let e = "",
      t = [[], [], []],
      r = [],
      s = [],
      i,
      o,
      a;
    for (let c in n) {
      let u = n[c];
      if (
        (typeof u != "number" && typeof u != "string") ||
        (typeof u == "string" && No.test(u))
      )
        continue;
      let f = c[0] === "y" ? 1 : c[0] === "z" ? 2 : 0;
      if (c === "x" || c === "y" || c === "z") t[f].push(Pe(u, "px"));
      else if (c === "xPercent" || c === "yPercent") t[f].push(Pe(u, "%"));
      else if (c === "scale") r[2] = u;
      else if (c === "scaleX" || c === "scaleY") r[c === "scaleY" ? 1 : 0] = u;
      else if (c === "skewX" || c === "skewY")
        s[c === "skewY" ? 1 : 0] = Pe(u, "deg");
      else if (c === "transformPerspective") i = Pe(u, "px");
      else if (Object.prototype.hasOwnProperty.call(Lo, c))
        a ??= { axis: Lo[c], angle: Pe(u, "deg") };
      else if (c === "width" || c === "height") e += `${c}:${Pe(u, "px")};`;
      else {
        let d =
          c === "autoAlpha"
            ? "opacity"
            : c.replace(/[A-Z]/g, (p) => "-" + p.toLowerCase());
        if (No.test(d)) continue;
        e += `${d}:${u};`;
      }
    }
    if (t.some((c) => c.length)) {
      let c = t.map((d) =>
          d.length > 1 ? `calc(${d.join(" + ")})` : d[0] ?? "0"
        ),
        u = t[2].length > 0,
        f = (u ? c : c.slice(0, 2)).join(" ");
      u && i ? (o = `translate3d(${c.join(", ")})`) : (e += `translate:${f};`);
    }
    r.length && (e += `scale:${r[0] ?? r[2] ?? 1} ${r[1] ?? r[2] ?? 1};`),
      a && !i && (e += `rotate:${a.axis}${a.angle};`);
    let l = [
      i && `perspective(${i})`,
      o,
      i && a && `rotate${a.axis.trim().toUpperCase()}(${a.angle})`,
      s.length && `skew(${s[0] ?? 0}, ${s[1] ?? 0})`,
    ]
      .filter(Boolean)
      .join(" ");
    return l && (e += `transform:${l};`), e;
  }
  function xd() {
    return (
      Ye?.isConnected ||
        ((Ye = document.createElement("style")), document.head.appendChild(Ye)),
      Ye.sheet
    );
  }
  function kd(n) {
    let e = Ye?.sheet;
    if (e)
      for (let t = e.cssRules.length - 1; t >= 0; t--)
        e.cssRules[t].name === n && e.deleteRule(t);
  }
  function Nd(n, e, t) {
    let r = xd();
    if (!r) return !1;
    let s = `@keyframes ${n}{${e ? `from{${e}}` : ""}${t ? `to{${t}}` : ""}}`;
    try {
      r.insertRule(s, r.cssRules.length);
    } catch {
      return !1;
    }
    return !0;
  }
  var Ld = (n) => `${n} 1s linear calc(var(--${n}, 1) * -1s) both paused`;
  function Do(n, e) {
    e.length
      ? (n.style.setProperty(
          We.POPOVER_BACKDROP_ANIMATION_PROPERTY,
          e.map(Ld).join(", ")
        ),
        n.setAttribute(We.POPOVER_BACKDROP_ANIMATED_ATTRIBUTE, ""))
      : (n.style.removeProperty(We.POPOVER_BACKDROP_ANIMATION_PROPERTY),
        n.removeAttribute(We.POPOVER_BACKDROP_ANIMATED_ATTRIBUTE));
  }
  function Fd(n, e, t) {
    let r = xr.get(n);
    r || xr.set(n, (r = []));
    let s = r.indexOf(e);
    if (s !== -1) {
      if (!t || s === r.length - 1) return;
      r.splice(s, 1);
    }
    r.push(e), Do(n, r);
  }
  function Fo(n, e) {
    let t = xr.get(n),
      r = t ? t.indexOf(e) : -1;
    !t || r === -1 || (t.splice(r, 1), Do(n, t));
  }
  function Dd({
    timeline: n,
    tweenType: e,
    config: t,
    vars: r,
    targets: s,
    position: i,
  }) {
    let o =
        e === He.TweenType.From || e === He.TweenType.FromTo ? kr(t.from) : "",
      a = e === He.TweenType.From ? "" : kr(t.to);
    if (!o && !a) return;
    let l = `${We.POPOVER_BACKDROP_KEYFRAMES_PREFIX}${++Pd}`;
    if (!Nd(l, o, a)) return;
    let c = `--${l}`,
      u = (S) => {
        for (let E of s)
          E.style.getPropertyValue(c) || E.style.setProperty(c, "0"),
            Fd(E, l, S);
      },
      f = 0,
      d = !1,
      { force3D: p, ...h } = r,
      g = {
        ...h,
        onStart() {
          (d = !1), (f = this.progress?.() ?? f), u(!0);
        },
        onUpdate() {
          let S = this.progress?.() ?? f,
            E = S !== f && d !== S < f;
          S !== f && (d = S < f), (f = S), u(E || e === He.TweenType.Set);
        },
      };
    e === He.TweenType.Set
      ? n.set(s, { ...g, [c]: 1 }, i)
      : n.fromTo(s, { [c]: 0 }, { ...g, [c]: 1 }, i);
    let v = (S) => {
      S.newState === "open" && Fo(S.currentTarget, l);
    };
    for (let S of s) S.addEventListener("beforetoggle", v);
    return () => {
      for (let S of s)
        S.removeEventListener("beforetoggle", v),
          Fo(S, l),
          S.style.removeProperty(c);
      kd(l);
    };
  }
});
var Ur = O((Gr) => {
  "use strict";
  Object.defineProperty(Gr, "__esModule", { value: !0 });
  function Bd(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Bd(Gr, {
    build: function () {
      return Gd;
    },
    popoverFromTriggerElement: function () {
      return Dr;
    },
    popoversByPath: function () {
      return xe;
    },
  });
  var se = Po(),
    me = ne(),
    H = qe(),
    q = Cr(),
    fe = ko(),
    Vd = Bo();
  function Dr(n, e) {
    if (!n) return null;
    let t = n.closest("." + H.POPOVER_MASK_CLASS);
    if (t) {
      let a = t.getAttribute(H.POPOVER_MASK_FOR_ATTRIBUTE),
        l = a ? (0, q.safeGetElementById)(a) : null;
      return l && e(l) ? l : null;
    }
    let s = n.closest("[popovertarget]")?.getAttribute("popovertarget"),
      i = s ? (0, q.safeGetElementById)(s) : null;
    if (i && e(i)) return i;
    let o = n.closest("." + H.POPOVER_CLASS);
    for (; o instanceof HTMLElement; ) {
      if (e(o)) return o;
      o = o.parentElement?.closest("." + H.POPOVER_CLASS) ?? null;
    }
    return null;
  }
  var Vo = (n) =>
    (0, H.readInstPathsFromTriggers)(
      n?.triggers,
      me.IX3_WF_EXTENSION_KEYS.POPOVER,
      me.IX3_WF_EXTENSION_KEYS.INST
    );
  function jd(n) {
    let e = [];
    for (let t of n?.triggers ?? []) {
      if (
        t[2]?.[0] !== me.IX3_WF_EXTENSION_KEYS.POPOVER_BACKDROP ||
        t[1]?.assignedGroupId === null
      )
        continue;
      let r = t[1]?.conditionalLogic;
      (!(r
        ? (r.ifTrue != null && r.ifTrue.control !== "none") ||
          (r.ifFalse != null && r.ifFalse.control !== "none")
        : t[1]?.control !== "none") &&
        (r != null || typeof t[1]?.assignedGroupId == "string")) ||
        e.push(t[1]?.assignedInstances);
    }
    return e;
  }
  var Ke = new WeakMap(),
    Br = new Set();
  function Vr(n) {
    let e = n.nextElementSibling;
    return e instanceof HTMLElement &&
      e.classList.contains(H.POPOVER_MASK_CLASS) &&
      e.getAttribute(H.POPOVER_MASK_FOR_ATTRIBUTE) === n.id
      ? e
      : null;
  }
  function jo(n) {
    let e = document.createElement("div");
    return (
      (e.className = H.POPOVER_MASK_CLASS),
      e.setAttribute("popover", "manual"),
      e.setAttribute(H.POPOVER_MASK_FOR_ATTRIBUTE, n.id),
      e.setAttribute("aria-hidden", "true"),
      n.after(e),
      e
    );
  }
  function Lr(n, e) {
    if (!n || !Br.has(n)) return;
    let t = (0, q.safeQuerySelectorAll)("." + H.POPOVER_MASK_CLASS, document);
    if (t?.length)
      for (let r of t) {
        let s = r.previousElementSibling;
        if (!(s instanceof HTMLElement) || Vr(s) !== r) {
          if (r.hasAttribute(H.POPOVER_MASK_FOR_ATTRIBUTE)) {
            let i = r.getAttribute(H.POPOVER_MASK_FOR_ATTRIBUTE),
              o = i ? (0, q.safeGetElementById)(i) : null;
            o && !Vr(o) && Ke.get(o)?.clear(), r.remove();
          }
          continue;
        }
        e.indexOf(s) === -1 && Ke.get(s)?.has(n) && Uo(s, n, !1);
      }
    (!e.length || !e.some((r) => Ke.get(r)?.has(n))) && Br.delete(n);
  }
  function Uo(n, e, t) {
    let r = Vr(n);
    if (!e) return r ?? (t ? jo(n) : null);
    let s = Ke.get(n) ?? new Set();
    return (
      Ke.set(n, s),
      t ? (s.add(e), Br.add(e)) : s.delete(e),
      s.size > 0 ? r ?? jo(n) : (r?.remove(), null)
    );
  }
  function xe(n, e) {
    let t = (0, q.safeQuerySelectorAll)(
      (0, q.elementTargetSelector)((0, se.pair)(n, e)),
      document
    );
    return t?.length ? [...t] : [];
  }
  var jr = (n) => JSON.stringify(n === me.TargetScope.ALL ? null : n ?? null),
    Fr = (n) => !!n?.filterBy && n?.relationship !== "none",
    Go = (n) => `trigger-parent|${jr(n)}`;
  function Gd(n) {
    let e = [],
      t = (c) => {
        let u = new Set(),
          f = [];
        for (let [d, p] of c)
          for (let h of xe(d, p)) u.has(h) || (u.add(h), f.push(h));
        return f;
      },
      r = (c, u) =>
        u != null &&
        (0, q.safeMatches)(
          c,
          (0, q.elementTargetSelector)((0, se.pair)(u[0], u[1]))
        ) === !0,
      s = (c, u) => c.some((f) => r(u, [f[0], f[1]])),
      i = (c, u, f, d, p) => {
        if (
          f ||
          d ||
          !p ||
          p[0] === me.IX3_WF_EXTENSION_KEYS.POPOVER ||
          u.length <= 1
        )
          return null;
        let h = new Set(),
          g = [];
        for (let [v, S] of u) {
          let E = r(c, [v, S]) ? [c] : xe(v, S);
          for (let m of E) h.has(m) || (h.add(m), g.push(m));
        }
        return g;
      },
      o = (c, u, f, d, p) => {
        let h = Vo(f),
          g = (0, H.readInstPath)(c),
          v =
            g && (!h.length || h.some((m) => m[0] === g[0] && m[1] === g[1]))
              ? g
              : null,
          S = (d ?? p)?.[1]?.assignedInstances,
          E = Dr(
            u,
            (m) => (!S || s(S, m)) && (r(m, v) || h.some((A) => r(m, A)))
          );
        return E
          ? i(E, h, S, d, p) ?? [E]
          : S
          ? (h.length ? t(h) : v ? xe(v[0], v[1]) : e).filter((A) => s(S, A))
          : !d && p && p[0] !== me.IX3_WF_EXTENSION_KEYS.POPOVER && h.length
          ? t(h)
          : v
          ? xe(v[0], v[1])
          : t(h);
      },
      a = (c, u, f, d, p, h) => {
        let g = Vo(f),
          v = Dr(u, (E) => (!d || s(d, E)) && g.some((m) => r(E, m)));
        if (v) return i(v, g, d, p, h) ?? [v];
        if (g.length) return t(g);
        let S = (0, H.readInstPath)(c);
        return S ? xe(S[0], S[1]) : e;
      },
      l = (c, u) => {
        let f = u?.scope;
        if (f?.type !== "component" || !f.componentId) return !0;
        let d = (0, q.safeClosest)(
          c.parentElement ?? c,
          `[data-wf-component-id="${CSS.escape(f.componentId)}"]`
        );
        if (!d) return !1;
        if (!f.variants?.length) return !0;
        let p = d.getAttribute("data-wf-variant-state");
        return p != null && f.variants.includes(p);
      };
    n.addTargetResolver("id", {
      resolve: ([, c]) => {
        let [u, f] = Array.isArray(c) ? c : [c],
          d = u ? (0, q.safeGetElementById)(u) : null;
        return d ? (0, fe.applyScope)([d], f) : e;
      },
    })
      .addTargetResolver("trigger-only", {
        resolve: ([, c], { triggerElement: u }) =>
          u ? (0, fe.applyScope)([u], Array.isArray(c) ? c[1] : void 0) : e,
        isDynamic: !0,
        instanceSharingKey: ([, c, u]) => {
          if (Fr(u)) return;
          let f = Array.isArray(c) ? c[1] : void 0;
          return f === me.TargetScope.PARENT ? Go(void 0) : `trigger|${jr(f)}`;
        },
      })
      .addTargetResolver("trigger-only-parent", {
        resolve: ([, c], { triggerElement: u }) => {
          if (!u) return e;
          let f = u.parentElement;
          return f instanceof HTMLElement
            ? (0, fe.applyScope)([f], Array.isArray(c) ? c[1] : void 0)
            : e;
        },
        isDynamic: !0,
        instanceSharingKey: ([, c, u]) =>
          Fr(u) ? void 0 : Go(Array.isArray(c) ? c[1] : void 0),
      })
      .addTargetResolver("inst", {
        resolve: ([, c], { triggerElement: u }) => {
          if (!Array.isArray(c)) return e;
          let [f, d] = c,
            p = Array.isArray(f),
            h = p ? (0, se.pair)(f[0], f[1]) : (0, se.pair)(f, d),
            g = (0, q.safeQuerySelectorAll)(
              (0, q.elementTargetSelector)(h),
              document
            );
          if (!g?.length) return e;
          let v = [...g];
          if (!u) return (0, fe.applyScope)(v, p ? d : void 0);
          let S = u.dataset.wfTarget;
          if (!S) return v;
          try {
            let E = JSON.parse(S),
              m = (0, se.getFirst)(h),
              A = E.find((b) => (0, se.getFirst)((0, se.getFirst)(b)) === m);
            return A
              ? (0, fe.applyScope)(
                  v.filter((b) =>
                    (b.dataset.wfTarget || "").includes(
                      `${JSON.stringify((0, se.getSecond)(A))}]`
                    )
                  ),
                  p ? d : void 0
                )
              : e;
          } catch {
            return e;
          }
        },
        isDynamic: !0,
        instanceSharingKey: ([, c, u]) => {
          if (Fr(u) || !Array.isArray(c)) return;
          let [f, d] = c,
            p = Array.isArray(f),
            h = p ? (0, se.pair)(f[0], f[1]) : (0, se.pair)(f, d);
          return `inst|${JSON.stringify(h)}|${jr(p ? d : void 0)}`;
        },
      })
      .addTargetResolver("class", {
        resolve: ([, c]) => {
          let [u, f] = Array.isArray(c) ? c : [c],
            d = u ? (0, q.safeQuerySelectorAll)(`.${u}`, document) : null;
          return d ? (0, fe.applyScope)([...d], f) : e;
        },
      })
      .addTargetResolver("selector", {
        resolve: ([, c]) => {
          let [u, f] = Array.isArray(c) ? c : [c],
            d = u ? (0, q.safeQuerySelectorAll)(u, document) : null;
          return d ? (0, fe.applyScope)([...d], f) : e;
        },
      })
      .addTargetResolver("body", {
        resolve: () => [document.body],
        isPageLevel: !0,
      })
      .addTargetResolver("attribute", {
        resolve: ([, c]) => {
          let [u, f] = Array.isArray(c) ? c : [c],
            d = u ? (0, q.safeQuerySelectorAll)(u, document) : null;
          return d ? (0, fe.applyScope)([...d], f) : e;
        },
      })
      .addTargetResolver("any-element", { resolve: () => e })
      .addTargetResolver("viewport", {
        resolve: () => [document.documentElement],
        isPageLevel: !0,
      })
      .addTargetResolver("popover-element", {
        resolve: (
          [, c],
          { triggerElement: u, interaction: f, trigger: d, causeTrigger: p }
        ) => o(c, u, f, d, p),
        isDynamic: !0,
      })
      .addTargetResolver("popover-backdrop", {
        resolve: (
          [, c],
          { triggerElement: u, interaction: f, trigger: d, causeTrigger: p }
        ) => {
          let h = (d ?? p)?.[1]?.assignedInstances,
            g = a(c, u, f, h, d, p);
          if (!g.length) return u || Lr(f?.id, []), e;
          let v = jd(f),
            S = [],
            E = [];
          for (let m of g) {
            if (!m.id || !l(m, f)) continue;
            S.push(m);
            let A = v.some((y) => !y || s(y, m)),
              b = Uo(m, f?.id, A);
            b && (!h || s(h, m)) && E.push(b);
          }
          return (
            u || Lr(f?.id, S),
            d ? (E.length ? E : e) : h ? g.filter((m) => s(h, m)) : g
          );
        },
        buildTween: Vd.buildBackdropTween,
        release: (c) => Lr(c, []),
        isDynamic: !0,
      });
  }
});
var qo = O((qr) => {
  "use strict";
  Object.defineProperty(qr, "__esModule", { value: !0 });
  Object.defineProperty(qr, "TouchScrollGuard", {
    enumerable: !0,
    get: function () {
      return $r;
    },
  });
  var $o = ze();
  function Ud(n) {
    let e = n;
    for (; e && e !== document.body && e !== document.documentElement; ) {
      if (e instanceof HTMLElement) {
        let t = getComputedStyle(e).overflowY;
        if (
          (t === "auto" || t === "scroll" || t === "overlay") &&
          e.scrollHeight > e.clientHeight
        )
          return e;
      }
      e = e.parentElement;
    }
    return null;
  }
  var $r = class {
    isScrolling = !1;
    toleranceDeg;
    refX = 0;
    refY = 0;
    lastY = 0;
    locked = null;
    effectFromBoundary = !1;
    scroller = null;
    maxScroll = 0;
    constructor(e, t, r) {
      this.toleranceDeg = r?.tolerance ?? 18;
      let s = (0, $o.initScrollCache)();
      t.addEventListener("abort", s);
      let i = (l) => {
          let c = l.touches[0];
          c &&
            ((this.refX = c.clientX),
            (this.refY = c.clientY),
            (this.lastY = c.clientY),
            (this.locked = null),
            (this.effectFromBoundary = !1),
            (this.isScrolling = !1),
            (this.scroller = Ud(l.target ?? e)),
            (this.maxScroll = this.scroller
              ? this.scroller.scrollHeight - this.scroller.clientHeight
              : document.documentElement.scrollHeight - window.innerHeight));
        },
        o = (l) => {
          let c = l.touches[0];
          if (!c) return;
          let u = c.clientY,
            f = c.clientX - this.refX,
            d = u - this.refY,
            p = u > this.lastY,
            h = u < this.lastY,
            g = this.scroller ? this.scroller.scrollTop : (0, $o.getScrollY)(),
            v = this.maxScroll,
            S = g <= 1 && p,
            E = v > 0 && g >= v - 1 && h;
          this.locked === null && this.decide(f, d, S || E),
            this.locked === "scroll" &&
              (S || E) &&
              ((this.refX = c.clientX),
              (this.refY = u),
              (this.locked = "effect"),
              (this.effectFromBoundary = !0)),
            this.locked === "effect" &&
              this.effectFromBoundary &&
              !(S || E) &&
              ((this.refX = c.clientX),
              (this.refY = u),
              (this.locked = null),
              (this.effectFromBoundary = !1)),
            (this.lastY = u),
            (this.isScrolling =
              this.locked === "scroll" ||
              this.locked === null ||
              (this.locked === "effect" && !l.cancelable && !(S || E))),
            this.locked === "effect" && l.cancelable && l.preventDefault();
        },
        a = () => {
          (this.locked = null), (this.isScrolling = !1);
        };
      e.addEventListener("touchstart", i, { passive: !0, signal: t }),
        e.addEventListener("touchmove", o, { passive: !1, signal: t }),
        e.addEventListener("touchend", a, { passive: !0, signal: t }),
        e.addEventListener("touchcancel", a, { passive: !0, signal: t });
    }
    decide(e, t, r) {
      if (Math.abs(e) < 10 && Math.abs(t) < 10) return;
      Math.atan2(Math.abs(e), Math.abs(t)) * (180 / Math.PI) > this.toleranceDeg
        ? ((this.locked = "effect"), (this.effectFromBoundary = !1))
        : r
        ? ((this.locked = "effect"), (this.effectFromBoundary = !0))
        : (this.locked = "scroll");
    }
  };
});
var zo = O((Hr) => {
  "use strict";
  Object.defineProperty(Hr, "__esModule", { value: !0 });
  Object.defineProperty(Hr, "VelocityController", {
    enumerable: !0,
    get: function () {
      return zr;
    },
  });
  var $d = {
    adaptiveMax: 2800,
    adaptAlpha: 0.05,
    adaptDecay: 0.99,
    hardMin: 600,
    hardMax: 4e3,
  };
  function qd(n, e) {
    let t = Math.max(e.hardMin, Math.min(e.hardMax, n));
    (e.adaptiveMax = Math.max(t, e.adaptiveMax * e.adaptDecay)),
      (e.adaptiveMax += (t - e.adaptiveMax) * e.adaptAlpha),
      (e.adaptiveMax = Math.max(e.hardMin, Math.min(e.hardMax, e.adaptiveMax)));
  }
  var zd = (n) => n * n;
  function Hd(n, e, t, r) {
    let s = Math.hypot(n, e);
    qd(s, t);
    let i = Math.max(1, t.adaptiveMax),
      o = zd(Math.min(1, s / i)),
      a = 0,
      l = 0;
    return (
      r.x && r.y
        ? s > 0 && ((a = n / s), (l = e / s))
        : r.x
        ? n !== 0 && (a = Math.sign(n))
        : r.y && e !== 0 && (l = Math.sign(e)),
      { n: o, dirX: a, dirY: l }
    );
  }
  var zr = class {
    config;
    velState;
    lastDirX;
    lastDirY;
    lastNormVelocity;
    get dirX() {
      return this.lastDirX;
    }
    get dirY() {
      return this.lastDirY;
    }
    constructor(e) {
      (this.config = e),
        (this.velState = { ...$d }),
        (this.lastDirX = 0),
        (this.lastDirY = 0),
        (this.lastNormVelocity = 0);
    }
    update(e, t) {
      let {
        n: r,
        dirX: s,
        dirY: i,
      } = Hd(e, t, this.velState, this.config.axes);
      (this.lastNormVelocity = r), (this.lastDirX = s), (this.lastDirY = i);
    }
    reset() {
      (this.lastDirX = 0), (this.lastDirY = 0), (this.lastNormVelocity = 0);
    }
    destroy() {
      this.reset();
    }
  };
});
var Ho = O((Yr) => {
  "use strict";
  Object.defineProperty(Yr, "__esModule", { value: !0 });
  Object.defineProperty(Yr, "IntervalController", {
    enumerable: !0,
    get: function () {
      return Wr;
    },
  });
  var Wd = ne(),
    Yd = 16,
    Wr = class {
      config;
      accum;
      lastX;
      lastY;
      initialized;
      cycleIndex;
      destroyed;
      constructor(e) {
        (this.config = e),
          (this.accum = 0),
          (this.lastX = 0),
          (this.lastY = 0),
          (this.initialized = !1),
          (this.cycleIndex = 0),
          (this.destroyed = !1),
          document.addEventListener(
            "visibilitychange",
            () => {
              document.visibilityState === "visible" && this.reset();
            },
            { signal: this.config.signal }
          );
      }
      get isActive() {
        return this.config.distance > 0;
      }
      update(e) {
        if (this.destroyed || !this.isActive) return;
        let { x: t, y: r, velocityFactor: s, dirX: i, dirY: o } = e;
        if (!this.initialized) {
          (this.lastX = t), (this.lastY = r), (this.initialized = !0);
          return;
        }
        let a = t - this.lastX,
          l = r - this.lastY;
        (this.lastX = t), (this.lastY = r);
        let { axes: c, distance: u } = this.config;
        c.x && c.y
          ? (this.accum += Math.hypot(a, l))
          : c.x
          ? (this.accum += Math.abs(a))
          : c.y && (this.accum += Math.abs(l));
        let f = 0;
        for (; this.accum >= u && f < Yd; ) {
          this.accum -= u;
          let d = {
            cursorPos: { x: t, y: r },
            velocityFactor: s,
            dirX: i,
            dirY: o,
          };
          this.config.channelManager.fireInterval?.(
            Wd.TIMELINE_ROLE_NAMES.INTERVAL,
            {
              targetIndex: this.cycleIndex++,
              element: this.config.element,
              pluginPayload: d,
            }
          ),
            f++;
        }
        this.accum >= u && (this.accum %= u);
      }
      reset() {
        (this.accum = 0), (this.initialized = !1), (this.cycleIndex = 0);
      }
      destroy() {
        (this.destroyed = !0), this.reset();
      }
    };
});
var ta = O((Xr) => {
  "use strict";
  Object.defineProperty(Xr, "__esModule", { value: !0 });
  Object.defineProperty(Xr, "fireMouseMoveInterval", {
    enumerable: !0,
    get: function () {
      return lp;
    },
  });
  var Kd = ne(),
    ea = Tt(),
    Kr = new Set(["x", "y"]),
    Xd = new Set(["scale", "scaleX", "scaleY"]),
    Wo = new WeakMap(),
    Yo = new WeakMap();
  function Qd(n) {
    let e = Wo.get(n);
    return (
      e ||
        ((e = {
          activeIntervalEls: new Map(),
          intervalClones: new Set(),
          baselineValues: new Map(),
        }),
        Wo.set(n, e)),
      e
    );
  }
  function Zd(n, e, t, r) {
    let s = Yo.get(n);
    s || ((s = new Set()), Yo.set(n, s)),
      !s.has(t) &&
        (s.add(t),
        r(() => {
          let i = e.activeIntervalEls.get(t);
          if (i)
            for (let o of i)
              e.intervalClones.has(o) &&
                (o.isConnected && o.remove(), e.intervalClones.delete(o));
          e.activeIntervalEls.delete(t),
            e.baselineValues.delete(t),
            s.delete(t);
        }));
  }
  function Ko(n) {
    if (n)
      for (let e in n) {
        if (!Kr.has(e)) continue;
        let t = n[e];
        (typeof t == "string" && (t.startsWith("+=") || t.startsWith("-="))) ||
          ((typeof t == "number" || typeof t == "string") && (n[e] = `+=${t}`));
      }
  }
  var Jd = /^random\((.*)\)([a-z%]*)$/i,
    ep = /^-?\d*\.?\d+$/;
  function tp(n, e) {
    let t = Jd.exec(n);
    if (!t) return null;
    let r = t[1] ?? "",
      s = t[2] ?? "",
      i = r.startsWith("[") && r.endsWith("]"),
      a = (i ? r.slice(1, -1) : r).split(",").map((c) => c.trim());
    if (!a.every((c) => ep.test(c))) return null;
    let l = a
      .map((c, u) => {
        let f = Number(c);
        return !i && u >= 2 ? Math.abs(e(f) - e(0)) : e(f);
      })
      .join(", ");
    return `random(${i ? `[${l}]` : l})${s}`;
  }
  function Xo(n, e, t, r) {
    if (n)
      for (let s in n) {
        let i = n[s];
        if (typeof i != "number" && typeof i != "string") continue;
        let o = !1,
          a = typeof i == "string" ? i : "";
        typeof i == "string" &&
          (i.startsWith("+=") || i.startsWith("-=")) &&
          ((o = !0), (a = (i.startsWith("-=") ? "-" : "") + i.slice(2)));
        let l, c;
        if (Kr.has(s)) {
          let p = s === "y" ? r : t;
          (l = (h) => h * e * p), (c = !0);
        } else if (s === "rotation") {
          let p = Math.abs(t) >= Math.abs(r) ? t : -r;
          (l = (h) => h * e * p), (c = o);
        } else
          Xd.has(s)
            ? ((l = o ? (p) => p * e : (p) => 1 + (p - 1) * e), (c = o))
            : ((l = (p) => p * e), (c = o));
        if (typeof i == "string" && a.startsWith("random(")) {
          let p = tp(a, l);
          if (p == null) continue;
          n[s] = c ? `+=${p}` : p;
          continue;
        }
        let u,
          f = "";
        if (typeof i == "number") u = i;
        else {
          if (((u = parseFloat(a)), isNaN(u))) continue;
          f = a.replace(/^-?[\d.]+/, "");
        }
        let d = l(u);
        n[s] = c ? `+=${d}${f}` : d;
      }
  }
  function np(n, e) {
    let t = n.getOneShotTimelineContext(e),
      r = t?.timelineDef;
    if (!t || !r?.actions?.length) return null;
    let s = r.triggerMetadata,
      i = s?.pluginConfig?.type === "mouseMove" ? s.pluginConfig : void 0;
    return s?.role !== "interval" && !i
      ? null
      : {
          oneShot: t,
          mouseMoveMeta: i ?? { type: "mouseMove" },
          axes: s?.axes,
        };
  }
  function rp(n, e, t, r, s) {
    let i = n.cloneNode(!0);
    i.removeAttribute("style"),
      i.removeAttribute("id"),
      i.removeAttribute("data-w-id"),
      i.setAttribute(ea.TRANSIENT_IX3_CLONE_ATTR, "true"),
      (i.style.position = "absolute"),
      (i.style.margin = "0"),
      (i.style.pointerEvents = "none"),
      n.insertAdjacentElement("beforebegin", i);
    let o = e.baselineValues.get(s)?.get(n);
    return o && r.set(i, { ...o }), e.intervalClones.add(i), t.add(i), i;
  }
  function sp(n, e) {
    let t = [],
      r = new Set();
    for (let s of n.timelineDef.actions)
      for (let i in s.properties) {
        let o = n.getActionTweenConfig(s, i, [e]);
        if (o) {
          for (let a of [o.to, o.from])
            if (a)
              for (let l of Object.keys(a)) Kr.has(l) ? t.push(l) : r.add(l);
        }
      }
    return { clearProps: t, baselineProps: r };
  }
  function ip(n, e, t, r, s) {
    let { clearProps: i, baselineProps: o } = sp(n, t);
    if (o.size > 0) {
      let a = {};
      for (let c of o) a[c] = e.getProperty(t, c);
      let l = r.baselineValues.get(s);
      l || ((l = new WeakMap()), r.baselineValues.set(s, l)), l.set(t, a);
    }
    i.length !== 0 && e.set(t, { clearProps: i.join(",") });
  }
  function Qo(n) {
    if (n)
      for (let e in n) {
        let t = n[e];
        typeof t == "function" &&
          "legacyExpression" in t &&
          (n[e] = t.legacyExpression);
      }
  }
  function op(n, e, t) {
    return (r, s, i) => {
      Qo(i.to),
        Qo(i.from),
        (
          s.pluginConfig?.type === "mouseMove"
            ? s.pluginConfig.velocityInfluence
            : !1
        )
          ? n != null && (Xo(i.to, n, e, t), i.from && Xo(i.from, n, e, t))
          : (Ko(i.to), i.from && Ko(i.from));
    };
  }
  function ap(n, e, t, r, s, i, o, a) {
    let [l] = t;
    if (l && (n.set(l, { zIndex: r + 1 + s }, 0), !(!i || (!o && !a))))
      for (let c of t) {
        let u = c.getBoundingClientRect(),
          f = {};
        if (o) {
          let d = Number(e.getProperty(c, "x")) || 0;
          f.x = i.x - (u.left + u.width / 2 - d);
        }
        if (a) {
          let d = Number(e.getProperty(c, "y")) || 0;
          f.y = i.y - (u.top + u.height / 2 - d);
        }
        n.set(c, f, 0);
      }
  }
  function Zo(n) {
    for (let e of n) e();
    n.clear();
  }
  function Jo(n, e, t) {
    n.activeIntervalEls.get(e)?.delete(t),
      n.intervalClones.has(t) &&
        (t.isConnected && t.remove(), n.intervalClones.delete(t));
  }
  var lp = ({
    coordinator: n,
    timelineId: e,
    element: t,
    options: r,
    animation: s,
  }) => {
    if (!s.hasGsap()) return;
    let i = r.targetIndex;
    if (i == null) return;
    let o = np(n, e);
    if (!o) return;
    let { oneShot: a, mouseMoveMeta: l, axes: c } = o,
      u = Qd(n),
      f = a
        .getFirstActionTargets(t)
        .filter((k) => !(0, ea.isTransientIX3Clone)(k));
    if (!f.length) return;
    let d = [f[i % f.length]],
      p = d,
      h = d[0],
      g = u.activeIntervalEls.get(e);
    g || ((g = new Set()), u.activeIntervalEls.set(e, g)),
      g.has(h) ? (p = [rp(h, u, g, s, e)]) : (ip(a, s, h, u, e), g.add(h));
    let v = p[0],
      S = c?.x === !1 && c?.y === !1,
      E = S || (c?.x ?? l?.setMouseX ?? !0),
      m = S || (c?.y ?? l?.setMouseY ?? !0),
      A = (0, Kd.narrowMouseMoveIntervalPayload)(r.pluginPayload),
      b = A.cursorPos,
      y = A.velocityFactor,
      T = A.dirX ?? 0,
      R = A.dirY ?? 0,
      w = new Set(),
      I = a.buildActionTimeline({
        targets: p,
        cleanupBucket: w,
        varsTransform: op(y, T, R),
        beforeTweens: (k) => {
          ap(k, s, p, f.length, i, b, E, m);
        },
      });
    if (!I) {
      Zo(w), Jo(u, e, v);
      return;
    }
    let x = null,
      C = !1,
      _ = (k) => {
        C || ((C = !0), x?.(), k && I.kill(), Zo(w), Jo(u, e, v));
      };
    (x = a.registerCleanup(() => _(!0))),
      I.eventCallback("onComplete", () => {
        _(!1);
      }),
      Zd(n, u, e, a.registerCleanup);
  };
});
var aa = O((Jr) => {
  "use strict";
  Object.defineProperty(Jr, "__esModule", { value: !0 });
  Object.defineProperty(Jr, "buildMouseMove", {
    enumerable: !0,
    get: function () {
      return vp;
    },
  });
  var de = ne(),
    Xe = ze(),
    cp = qo(),
    up = zo(),
    fp = Ho(),
    dp = ta(),
    pp = 50,
    na = 50,
    Qr = null;
  function hp() {
    return (
      Qr === null &&
        (Qr = "ontouchstart" in window || navigator.maxTouchPoints > 0),
      Qr
    );
  }
  var ia = 0,
    oa = 0,
    Et = 0,
    ye = null;
  function gp() {
    (Et += 1),
      ye ||
        ((ye = () => {
          (ia = window.innerWidth), (oa = window.innerHeight);
        }),
        ye(),
        window.addEventListener("resize", ye));
    let n = !1;
    return () => {
      n ||
        ((n = !0),
        (Et = Math.max(0, Et - 1)),
        Et === 0 &&
          ye &&
          (window.removeEventListener("resize", ye), (ye = null)));
    };
  }
  var wt = (n) => Math.max(0, Math.min(1, n));
  function mp(n, e, t) {
    return e === t || n === t || (n < t && e > t) || (n > t && e < t);
  }
  function Qe(n, e, t) {
    let r = n.tween;
    (n.tween = null),
      (n.takeoverTarget = null),
      (n.proxy.value = e),
      (n.lastValue = e),
      n.channel?.setProgress(e),
      t && r?.kill();
  }
  function ra(n, e) {
    if (n.tween) {
      if (n.proxy.value === e) {
        Qe(n, e, !0);
        return;
      }
      let t = n.tweenTarget - n.proxy.value,
        r = e - n.proxy.value;
      if (t * r < 0) {
        Qe(n, e, !0);
        return;
      }
      n.takeoverTarget = e;
      return;
    }
    (n.proxy.value = e), (n.lastValue = e), n.channel?.setProgress(e);
  }
  function Zr(n) {
    let e = n.tween;
    (n.tween = null), (n.takeoverTarget = null), e?.kill();
  }
  function sa(n, e, t, r) {
    Zr(e), (e.lastValue = e.proxy.value), (e.tweenTarget = t);
    let s = n.to(e.proxy, {
      value: t,
      duration: r,
      ease: "power2.out",
      onUpdate: () => {
        let i = e.proxy.value,
          o = e.takeoverTarget;
        if (o != null && mp(e.lastValue, i, o)) {
          Qe(e, o, !0);
          return;
        }
        (e.lastValue = i), e.channel?.setImmediate(i);
      },
      onComplete: () => {
        let i = e.takeoverTarget;
        (e.tween = null), (e.takeoverTarget = null), i != null && Qe(e, i, !1);
      },
    });
    if (!s) {
      Qe(e, t, !1);
      return;
    }
    e.tween = s;
  }
  function yp(n, e, t, r) {
    let s = Math.abs(t - n),
      i = Math.abs(r - e),
      o = Math.max(s, i);
    return 0.1 + Math.min(o / 0.5, 1) * 0.5;
  }
  function vp(n) {
    n.addTrigger("mouse-move", (e, t, r, s) => {
      let i = e[1].pluginConfig,
        o = e[2]?.[0] === de.IX3_WF_EXTENSION_KEYS.VIEWPORT;
      return (
        s({
          type: "continuous",
          setup: (a) => {
            let { animation: l } = a;
            if (!l.hasGsap() || !l.hasObserver()) return Xe.noop;
            let c = o ? gp() : Xe.noop;
            a.registerIntervalHandler(
              de.IX3_WF_EXTENSION_KEYS.MOUSE_MOVE,
              dp.fireMouseMoveInterval
            );
            let u = i?.smoothness ?? pp,
              f = (i?.restingState?.x ?? na) / 100,
              d = (i?.restingState?.y ?? na) / 100,
              p = a.registerChannel({
                role: de.TIMELINE_ROLE_NAMES.MOUSE_X,
                initialValue: f,
                element: t,
                smoothing: u,
              }),
              h = a.registerChannel({
                role: de.TIMELINE_ROLE_NAMES.MOUSE_Y,
                initialValue: d,
                element: t,
                smoothing: u,
              }),
              g = new AbortController(),
              { signal: v } = g,
              S = a.getMetadata(de.TIMELINE_ROLE_NAMES.INTERVAL),
              E = {
                x: S?.axes?.x !== !1 || S?.axes?.y === !1,
                y: S?.axes?.y !== !1 || S?.axes?.x === !1,
              },
              m = S
                ? new fp.IntervalController({
                    distance:
                      S.distance ?? de.DEFAULT_MOUSE_MOVE_INTERVAL_DISTANCE,
                    axes: E,
                    channelManager: a,
                    element: t,
                    signal: v,
                  })
                : null,
              A = m ? new up.VelocityController({ axes: E }) : null,
              b = {
                proxy: { value: f },
                channel: p,
                tween: null,
                takeoverTarget: null,
                lastValue: f,
                tweenTarget: f,
              },
              y = {
                proxy: { value: d },
                channel: h,
                tween: null,
                takeoverTarget: null,
                lastValue: d,
                tweenTarget: d,
              },
              T = !1,
              R = (B, Y) => {
                let Q = yp(b.proxy.value, y.proxy.value, B, Y);
                sa(l, b, B, Q), sa(l, y, Y, Q);
              },
              w = hp(),
              I = o ? document.documentElement : t,
              x = null;
            w && (x = new cp.TouchScrollGuard(I, v));
            let C = null,
              _ = () => {
                C = null;
              },
              k = () => (C || (C = t.getBoundingClientRect()), C);
            if (!o) {
              let B = new ResizeObserver(_);
              B.observe(t),
                v.addEventListener("abort", () => B.disconnect()),
                window.addEventListener("scroll", _, {
                  passive: !0,
                  capture: !0,
                  signal: v,
                }),
                window.visualViewport &&
                  window.visualViewport.addEventListener("resize", _, {
                    signal: v,
                  });
            }
            let L;
            try {
              if (
                ((L = l.createObserver({
                  target: I,
                  type: w ? "pointer,touch" : "pointer",
                  tolerance: 0,
                  onMove: (B) => {
                    if (x?.isScrolling || !a.isPreviewEnabled()) return;
                    let Y = B.x ?? 0,
                      Q = B.y ?? 0,
                      Z,
                      we;
                    if (o)
                      (Z = wt(Y / Math.max(1, ia))),
                        (we = wt(Q / Math.max(1, oa)));
                    else {
                      let ie = k();
                      (Z = wt((Y - ie.left) / Math.max(1, ie.width))),
                        (we = wt((Q - ie.top) / Math.max(1, ie.height)));
                    }
                    T ? (ra(b, Z), ra(y, we)) : ((T = !0), R(Z, we)),
                      a.publishChannel(
                        de.MOUSE_MOVE_CHANNELS.POSITION,
                        { x: Y, y: Q, triggerEl: t, isViewport: o },
                        t
                      ),
                      A &&
                        (A.update(B.velocityX, B.velocityY),
                        m.update({
                          x: Y,
                          y: Q,
                          velocityFactor: A.lastNormVelocity,
                          dirX: A.dirX,
                          dirY: A.dirY,
                        }));
                  },
                })),
                !L)
              )
                return m?.destroy(), A?.destroy(), g.abort(), c(), Xe.noop;
            } catch {
              return m?.destroy(), A?.destroy(), g.abort(), c(), Xe.noop;
            }
            let G = () => {
              a.isPreviewEnabled() &&
                ((T = !1),
                R(f, d),
                A?.reset(),
                a.publishChannel(de.MOUSE_MOVE_CHANNELS.LEAVE, void 0, t),
                m?.reset());
            };
            return (
              o
                ? (I.addEventListener("mouseleave", G, { signal: v }),
                  window.addEventListener("blur", G, { signal: v }))
                : t.addEventListener("mouseleave", G, { signal: v }),
              I.addEventListener("touchend", G, { signal: v, passive: !0 }),
              I.addEventListener("touchcancel", G, { signal: v, passive: !0 }),
              () => {
                L.kill(),
                  g.abort(),
                  Zr(b),
                  Zr(y),
                  m?.destroy(),
                  A?.destroy(),
                  c();
              }
            );
          },
        }),
        Xe.noop
      );
    });
  }
});
var ya = O((ns) => {
  "use strict";
  Object.defineProperty(ns, "__esModule", { value: !0 });
  Object.defineProperty(ns, "build", {
    enumerable: !0,
    get: function () {
      return bp;
    },
  });
  var Je = K(),
    F = ne(),
    ke = qe(),
    Ze = ze(),
    da = Ur(),
    Tp = aa();
  function bp(n) {
    Sp(n),
      Ep(n),
      (0, Tp.buildMouseMove)(n),
      wp(n),
      Op(n),
      Ip(n),
      Mp(n),
      xp(n),
      Lp(n),
      n.addTrigger("load", (t, r, s, i) => {
        let o = t[1],
          a = !1,
          l = () => {
            a || ((a = !0), i({ target: r }));
          };
        switch (o.pluginConfig?.triggerPoint) {
          case "immediate":
            return l(), Ze.noop;
          case "fullyLoaded":
            return document.readyState === "complete"
              ? (l(), Ze.noop)
              : s.addEventListener(window, "load", l);
          case "DOMContentLoaded":
          default:
            return document.readyState === "complete" ||
              document.readyState === "interactive"
              ? (l(), Ze.noop)
              : s.addEventListener(document, "DOMContentLoaded", l);
        }
      }),
      n.addTrigger("focus", (t, r, s, i) => {
        let o = t[1];
        return s.addEventListener(
          r,
          o.pluginConfig?.useFocusWithin ? "focusin" : "focus",
          i,
          { delegate: !o.pluginConfig?.useFocusWithin }
        );
      }),
      n.addTrigger("blur", (t, r, s, i) => {
        let o = t[1];
        return s.addEventListener(
          r,
          o.pluginConfig?.useFocusWithin ? "focusout" : "blur",
          i,
          { delegate: !o.pluginConfig?.useFocusWithin }
        );
      });
    let e = (t, r, s, i) => (i({ target: r }), Ze.noop);
    n.addTrigger("scroll", e),
      n.addTrigger("scroll-scrub", e),
      n.addTrigger("scroll-actions", e),
      n.addTrigger("scroll-direction", e),
      n.addTrigger("custom", (t, r, s, i) => {
        let a = t[1].pluginConfig?.eventName;
        return a
          ? s.addEventListener(r, a, i, { delegate: !1, kind: "custom" })
          : Ze.noop;
      }),
      n.addTrigger("change", (t, r, s, i) =>
        s.addEventListener(r, "change", i)
      );
  }
  function Sp(n) {
    let e = new WeakMap();
    n.addTrigger("click", (t, r, s, i) => {
      let [, o] = t,
        a = s.addEventListener(
          r,
          "click",
          (l) => {
            let c = o.pluginConfig?.click,
              u = e.get(r) || new WeakMap();
            e.set(r, u);
            let d = (u.get(t) || 0) + 1;
            switch ((u.set(t, d), c)) {
              case "each": {
                i(l);
                break;
              }
              case "first": {
                d === 1 && i(l);
                break;
              }
              case "second": {
                d === 2 && i(l);
                break;
              }
              case "odd": {
                d % 2 === 1 && i(l);
                break;
              }
              case "even": {
                d % 2 === 0 && i(l);
                break;
              }
              case "custom": {
                let p = o.pluginConfig?.custom;
                p && d === p && i(l);
                break;
              }
              default:
                i(l);
            }
          },
          { delegate: !0 }
        );
      return () => {
        a(), e.delete(r);
      };
    });
  }
  function Ep(n) {
    let e = new WeakMap();
    n.addTrigger("hover", (t, r, s, i) => {
      let [, o] = t,
        a = [],
        l = o.pluginConfig?.multiTimeline,
        c = o.pluginConfig?.eventMode,
        u = c !== "leave",
        f = c !== "enter";
      if (l === !0)
        return (
          u &&
            a.push(
              s.addEventListener(r, "mouseenter", () =>
                i({
                  type: "timeline-role",
                  role: F.TIMELINE_ROLE_NAMES.MOUSE_ENTER,
                })
              )
            ),
          f &&
            a.push(
              s.addEventListener(r, "mouseleave", () =>
                i({
                  type: "timeline-role",
                  role: F.TIMELINE_ROLE_NAMES.MOUSE_LEAVE,
                })
              )
            ),
          () => {
            a.forEach((p) => p()), (a.length = 0);
          }
        );
      if (l === !1) {
        if (
          o.control === void 0 ||
          o.control === "togglePlayReverse" ||
          o.control === "togglePlayReverseFlipEase"
        ) {
          let h =
            o.control === "togglePlayReverseFlipEase"
              ? "reverseFlipEase"
              : "reverse";
          if (
            (u &&
              a.push(
                s.addEventListener(r, "mouseenter", () =>
                  i({ type: "playback-control", control: "play" })
                )
              ),
            f)
          ) {
            let g = u ? h : "play";
            a.push(
              s.addEventListener(r, "mouseleave", () =>
                i({ type: "playback-control", control: g })
              )
            );
          }
        } else
          u && a.push(s.addEventListener(r, "mouseenter", (h) => i(h))),
            f && a.push(s.addEventListener(r, "mouseleave", (h) => i(h)));
        return () => {
          a.forEach((h) => h()), (a.length = 0);
        };
      }
      let d = (p, h) => {
        if ((o.pluginConfig?.type ?? "mouseenter") !== h) return;
        let v = o.pluginConfig?.hover || "each",
          S = e.get(r) || new Map();
        e.set(r, S);
        let m = (S.get(h) || 0) + 1;
        switch ((S.set(h, m), v)) {
          case "each": {
            i(p);
            break;
          }
          case "first": {
            m === 1 && i(p);
            break;
          }
          case "second": {
            m === 2 && i(p);
            break;
          }
          case "odd": {
            m % 2 === 1 && i(p);
            break;
          }
          case "even": {
            m % 2 === 0 && i(p);
            break;
          }
          case "custom": {
            let A = o.pluginConfig?.custom;
            A && m === A && i(p);
            break;
          }
          default:
            i(p);
        }
      };
      return (
        a.push(
          s.addEventListener(r, "mouseenter", (p) => {
            d(p, "mouseenter");
          })
        ),
        a.push(
          s.addEventListener(r, "mouseover", (p) => {
            d(p, "mouseover");
          })
        ),
        a.push(
          s.addEventListener(r, "mouseleave", (p) => {
            d(p, "mouseleave");
          })
        ),
        () => {
          a.forEach((p) => p()), (a.length = 0), e.delete(r);
        }
      );
    });
  }
  function pa(n, e) {
    n.addTrigger(e, (t, r, s, i) => {
      let o = t[1].pluginConfig?.event,
        a =
          o === F.TIMELINE_ROLE_NAMES.OPEN || o === F.TIMELINE_ROLE_NAMES.CLOSE
            ? o
            : void 0,
        l = "IX3_COMPONENT_STATE_CHANGE";
      return s.addEventListener(r, l, (c) => {
        let u = c.detail;
        if (!u || typeof u != "object") return;
        let { component: f, state: d } = u;
        f !== e ||
          !d ||
          (a && d !== a) ||
          i({ type: "timeline-role", role: d });
      });
    });
  }
  function wp(n) {
    pa(n, "navbar");
  }
  function Op(n) {
    pa(n, "dropdown");
  }
  var ve = new WeakMap();
  function Ap(n) {
    let e = (ve.get(n) ?? 0) + 1;
    ve.set(n, e), n.setAttribute(F.POPOVER_ANIMATED_ATTRIBUTE, "");
  }
  function Rp(n) {
    let e = (ve.get(n) ?? 1) - 1;
    if (e > 0) {
      ve.set(n, e);
      return;
    }
    ve.delete(n), n.removeAttribute(F.POPOVER_ANIMATED_ATTRIBUTE);
  }
  var la = new WeakMap();
  function ha(n) {
    n.released || ((n.released = !0), n.done?.());
  }
  function _p(n, e) {
    let t = la.get(n);
    if (t) return t;
    let r = { claims: 0, released: !1, dispatching: !0, done: e };
    return (
      la.set(n, r),
      Promise.resolve().then(() => {
        (r.dispatching = !1), r.claims === 0 && ha(r);
      }),
      r
    );
  }
  function ga(n) {
    n.claims++;
    let e = !1;
    return () => {
      e || ((e = !0), --n.claims <= 0 && !n.dispatching && ha(n));
    };
  }
  function Ip(n) {
    n.addTrigger("popover", (e, t, r, s) => {
      let i = e[1].pluginConfig?.event,
        o =
          i === F.TIMELINE_ROLE_NAMES.OPEN || i === F.TIMELINE_ROLE_NAMES.CLOSE
            ? i
            : void 0;
      Ap(t);
      let a = () => Rp(t),
        l = new Set(),
        c = r.addEventListener(t, F.IX3_POPOVER_STATE_EVENT, (u) => {
          let f = u.detail;
          if (!f || typeof f != "object") return;
          let { state: d, done: p } = f,
            h = _p(u, typeof p == "function" ? p : void 0);
          if (
            d !== F.TIMELINE_ROLE_NAMES.OPEN &&
            d !== F.TIMELINE_ROLE_NAMES.CLOSE
          )
            return;
          if (d === F.TIMELINE_ROLE_NAMES.OPEN) W.delete(t), Te.delete(t);
          else {
            let v = W.get(t);
            v?.delete(e), v && v.size === 0 && W.delete(t);
          }
          if (o && d !== o) return;
          d === F.TIMELINE_ROLE_NAMES.CLOSE && Te.set(t, h);
          let g = ga(h);
          l.add(g),
            s({
              type: "timeline-role",
              role: d,
              onComplete: () => {
                l.delete(g), g();
              },
            });
        });
      return () => {
        ve.get(t) === 1 &&
          (W.has(t) || At(t)) &&
          (W.delete(t), ts(t, ke.POPOVER_ANIMATION_CLOSE_COMMAND)),
          ve.get(t) === 1 && Te.delete(t),
          a(),
          c();
        for (let u of l) u();
        l.clear();
      };
    });
  }
  function ca(n, e) {
    let t =
      n.length > 1
        ? (0, da.popoverFromTriggerElement)(e, (r) => n.includes(r))
        : null;
    return t ? [t] : n;
  }
  function ua(n) {
    if (!At(n) || W.has(n)) return !1;
    let e = Te.get(n);
    return !e || e.released;
  }
  function At(n) {
    try {
      return n.matches(":popover-open");
    } catch {
      return !1;
    }
  }
  function ts(n, e, t) {
    let r = n.ownerDocument.defaultView;
    if (!r) return;
    let s =
      e === ke.POPOVER_ANIMATION_OPEN_COMMAND
        ? { type: e, source: t }
        : { type: e };
    n.dispatchEvent(new r.CustomEvent(ke.POPOVER_COMMAND_EVENT, { detail: s }));
  }
  function Mp(n) {
    n.addRoleAppliedQuery(
      "popover",
      (e, { elements: t, trigger: r, causeTrigger: s, causeElement: i }) => {
        if (!fa(s, r)) return;
        let o = ca(t, i);
        if (e === F.TIMELINE_ROLE_NAMES.OPEN) return o.every(ua);
        if (e === F.TIMELINE_ROLE_NAMES.CLOSE) return !o.some(ua);
      }
    ),
      n.addRoleActivationObserver(
        "popover",
        (e, { elements: t, trigger: r, causeTrigger: s, causeElement: i }) => {
          if (!fa(s, r)) return;
          let o = ca(t, i);
          if (e === F.TIMELINE_ROLE_NAMES.OPEN) {
            for (let u of o)
              W.delete(u),
                Te.delete(u),
                (!At(u) || (s !== void 0 && s !== r)) &&
                  ts(u, ke.POPOVER_ANIMATION_OPEN_COMMAND, i);
            return;
          }
          if (e !== F.TIMELINE_ROLE_NAMES.CLOSE) return;
          if (s === r) {
            for (let u of o) {
              let f = W.get(u);
              f?.delete(r), f && f.size === 0 && W.delete(u);
            }
            return;
          }
          let a = o.filter(At);
          if (a.length === 0) return;
          let l = {},
            c = a.map((u) => {
              let f = Te.get(u);
              return f && !f.released ? ga(f) : void 0;
            });
          for (let u of a) {
            let f = W.get(u);
            f || ((f = new Map()), W.set(u, f)), f.set(r, l);
          }
          return () => {
            for (let [u, f] of a.entries()) {
              let d = c[u];
              d && Promise.resolve().then(d);
              let p = W.get(f);
              p?.get(r) === l &&
                (p.delete(r),
                !(p.size > 0) &&
                  Promise.resolve().then(() => {
                    if (W.get(f) !== p || p.size > 0) return;
                    W.delete(f);
                    let h = Te.get(f);
                    (h && !h.released) ||
                      ts(f, ke.POPOVER_ANIMATION_CLOSE_COMMAND);
                  }));
            }
          };
        }
      );
  }
  var W = new WeakMap(),
    Te = new WeakMap();
  function fa(n, e) {
    if (!n || n === e) return !0;
    if (n[0] === e[0]) return !1;
    let t = n[1]?.assignedInstances;
    if (!t) return !0;
    let r = e[2],
      s = (0, ke.readInstPath)(r?.[1]);
    return s ? t.some(([i, o]) => i === s[0] && o === s[1]) : !1;
  }
  function Cp(n, e) {
    let t = n[1]?.assignedInstances;
    return t
      ? t.length
        ? [...new Set(t.flatMap(([r, s]) => (0, da.popoversByPath)(r, s)))]
        : []
      : [e];
  }
  function ma(n, e, t) {
    let r = n[1]?.pluginConfig?.firstWins === !0;
    for (let s of Cp(n, e)) t({ target: s, skipIfActive: !0, firstWins: r });
  }
  var Pp = 10;
  function xp(n) {
    n.addTrigger("exit-intent", (e, t, r, s) => {
      if ((0, Je.getPageLevelTriggerState)(e).fired) return () => {};
      let i = !1,
        o,
        a = () => {
          o?.(), (o = void 0);
        };
      return (
        (o = r.addEventListener(
          t,
          "mouseout",
          (l) => {
            if (i) return;
            let c = l;
            c.relatedTarget == null &&
              (c.clientY > Pp ||
                (c.clientY > 0 &&
                  typeof c.movementY == "number" &&
                  c.movementY >= 0) ||
                ((i = !0),
                ((0, Je.getPageLevelTriggerState)(e).fired = !0),
                a(),
                ma(e, t, s)));
          },
          {
            target: "document",
            delegate: !1,
            batch: !1,
            capture: !0,
            passive: !0,
          }
        )),
        a
      );
    });
  }
  var kp = [
      "pointermove",
      "pointerdown",
      "keydown",
      "scroll",
      "wheel",
      "touchstart",
      "touchmove",
    ],
    es = 100,
    Ot = new WeakMap();
  function Np(n, e) {
    let t = Ot.get(e);
    if (!t) {
      let s = {
          waiters: new Set(),
          cleanups: [],
          lastResetAt: -es,
          trailing: void 0,
        },
        i = () => {
          (s.trailing = void 0), (s.lastResetAt = performance.now());
          for (let a of s.waiters) a.restart();
        },
        o = () => {
          let a = performance.now() - s.lastResetAt;
          if (a >= es) {
            s.trailing !== void 0 && clearTimeout(s.trailing), i();
            return;
          }
          s.trailing === void 0 && (s.trailing = setTimeout(i, es - a));
        };
      (s.cleanups = kp.map((a) =>
        e.addEventListener(document.documentElement, a, () => o(), {
          target: "document",
          delegate: !1,
          batch: !1,
          capture: !0,
          passive: !0,
        })
      )),
        Ot.set(e, s),
        (t = s);
    }
    let r = t;
    return (
      r.waiters.add(n),
      () => {
        if ((r.waiters.delete(n), !(r.waiters.size > 0))) {
          for (let s of r.cleanups) s();
          (r.cleanups.length = 0),
            r.trailing !== void 0 && clearTimeout(r.trailing),
            (r.trailing = void 0),
            Ot.get(e) === r && Ot.delete(e);
        }
      }
    );
  }
  function Lp(n) {
    n.addTrigger("duration", (e, t, r, s) => {
      if ((0, Je.getPageLevelTriggerState)(e).fired) return () => {};
      let i = e[1]?.pluginConfig,
        o = i?.mode,
        a =
          o === "idle" || o === "timeOnSite"
            ? o
            : F.DEFAULT_DURATION_TRIGGER_MODE,
        l = i?.duration ?? F.DEFAULT_DURATION_TRIGGER_SECONDS,
        u =
          (Number.isFinite(l)
            ? Math.min(
                Math.max(l, (0, F.minimumDurationSeconds)(a)),
                F.DURATION_TRIGGER_SECONDS_RANGE.max
              )
            : F.DEFAULT_DURATION_TRIGGER_SECONDS) * 1e3,
        f,
        d = !1,
        p = () => {},
        h = () => {
          d ||
            ((d = !0),
            ((0, Je.getPageLevelTriggerState)(e).fired = !0),
            (f = void 0),
            p(),
            ma(e, t, s));
        };
      if (a === "timeOnSite") {
        let E = Date.now(),
          m = (0, Je.getPageLevelTriggerState)(e),
          A = m.deadline,
          b = typeof window.__wf_design < "u",
          y = A ?? (b ? E + u : E - performance.now() + u);
        return (
          A === void 0 && (m.deadline = y),
          (f = setTimeout(h, Math.max(0, y - E))),
          () => {
            f !== void 0 && clearTimeout(f);
          }
        );
      }
      let g = () => {
        d || (f !== void 0 && clearTimeout(f), (f = setTimeout(h, u)));
      };
      f = setTimeout(h, u);
      let v = Np({ restart: g }, r),
        S = !1;
      return (
        (p = () => {
          S || ((S = !0), v());
        }),
        () => {
          f !== void 0 && clearTimeout(f), p();
        }
      );
    });
  }
});
var Ne = O((rs) => {
  "use strict";
  Object.defineProperty(rs, "__esModule", { value: !0 });
  function Fp(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Fp(rs, {
    resolveToNumber: function () {
      return Dp;
    },
    resolveToString: function () {
      return Bp;
    },
  });
  function Dp(n, e) {
    if (typeof n == "number") return n;
    if (typeof n == "string") {
      let t = n;
      if (t.startsWith("var(")) {
        let s = t.slice(4, -1).split(",")[0]?.trim() ?? "";
        if (!s || ((t = getComputedStyle(e).getPropertyValue(s).trim()), !t))
          return;
      }
      let r = parseFloat(t);
      return isNaN(r) ? void 0 : r;
    }
  }
  function Bp(n, e) {
    if (typeof n == "string") {
      if (n.startsWith("var(")) {
        let t = n.slice(4, -1).split(",")[0]?.trim() ?? "";
        return (t && getComputedStyle(e).getPropertyValue(t).trim()) || void 0;
      }
      return n;
    }
  }
});
var Sa = O((os) => {
  "use strict";
  Object.defineProperty(os, "__esModule", { value: !0 });
  function Vp(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Vp(os, {
    buildMouseFollowAction: function () {
      return zp;
    },
    forTestSuite: function () {
      return $p;
    },
  });
  var ss = ne(),
    Rt = ze(),
    jp = 0.5,
    _t = 50;
  function Gp(n) {
    let e = 2166136261;
    for (let t = 0; t < n.length; t++)
      (e ^= n.charCodeAt(t)), (e = Math.imul(e, 16777619));
    return e >>> 0;
  }
  function Up(n) {
    let e = n >>> 0;
    return () => {
      e = (e + 1831565813) | 0;
      let t = Math.imul(e ^ (e >>> 15), 1 | e);
      return (
        (t ^= t + Math.imul(t ^ (t >>> 7), 61 | t)),
        ((t ^ (t >>> 14)) >>> 0) / 4294967296
      );
    };
  }
  function va(n, e, t) {
    if (n <= 1) return [0];
    if (typeof e == "number") {
      let r = Math.max(0, Math.min(n - 1, Math.floor(e))),
        s = [r];
      for (let i = 1; s.length < n; i++)
        r + i < n && s.push(r + i), r - i >= 0 && s.push(r - i);
      return s;
    }
    switch (e) {
      case "start":
        return Array.from({ length: n }, (r, s) => s);
      case "center": {
        let r = [],
          s = Math.floor((n - 1) / 2);
        r.push(s);
        for (let i = 1; r.length < n; i++)
          s + i < n && r.push(s + i), s - i >= 0 && r.push(s - i);
        return r;
      }
      case "random": {
        let r = t != null && t !== "" ? Up(Gp(t)) : Math.random,
          s = Array.from({ length: n }, (i, o) => o);
        for (let i = n - 1; i > 0; i--) {
          let o = Math.floor(r() * (i + 1));
          [s[i], s[o]] = [s[o], s[i]];
        }
        return s;
      }
      case "edges": {
        let r = [],
          s = 0,
          i = n - 1;
        for (; s <= i; ) r.push(s), s !== i && r.push(i), s++, i--;
        return r;
      }
      case "end":
      default:
        return Array.from({ length: n }, (r, s) => n - 1 - s);
    }
  }
  function is(n) {
    if (n == null) return _t;
    let e = typeof n == "number" ? n * 1e3 : parseFloat(n);
    return Number.isFinite(e) && e >= 0 ? e : _t;
  }
  var et = (n) => {
      if (typeof n != "string") return 0.5;
      let e = /^(-?\d+(?:\.\d+)?)%$/.exec(n.trim());
      if (e) return Math.max(0, Math.min(1, parseFloat(e[1]) / 100));
      let t = n.trim().toLowerCase();
      return t === "left" || t === "top"
        ? 0
        : t === "right" || t === "bottom"
        ? 1
        : 0.5;
    },
    Ta = (n, e) => {
      if (n?.amount != null) {
        let t = is(n.amount),
          r = e > 1 ? t / (e - 1) : _t;
        return Math.max(1, r);
      }
      return n?.each != null ? Math.max(1, is(n.each)) : 1;
    },
    ba = (n) => {
      if (!n) return { x: 0.5, y: 0.5 };
      if (typeof n == "string") {
        let [e, t] = n.trim().split(/\s+/);
        return { x: et(e ?? "50%"), y: et(t ?? "50%") };
      }
      return { x: et(n.x), y: et(n.y) };
    },
    $p = {
      DEFAULT_STAGGER_MS: _t,
      computeMouseFollowSmoothingMs: Ta,
      getChainOrder: va,
      parseAnchor: ba,
      parseAnchorAxis: et,
      staggerEachToMs: is,
    };
  function qp(n, e, t, r) {
    if (!t.length) return;
    let s = r?.animation;
    if (!s?.hasGsap()) return;
    let i =
        typeof window < "u" &&
        typeof window.matchMedia == "function" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      o = e,
      a = o?.leaveBehavior ?? "return",
      l = o?.onEnter ?? "animate",
      c = r?.timelineRole,
      u = c === "mouseX" ? "x" : c === "mouseY" ? "y" : o?.axis ?? "x",
      f = u,
      d = o?.followMode;
    if (
      d != null &&
      d !== "full" &&
      d !== (0, ss.getSingleAxisMouseFollowMode)(u)
    )
      return;
    let p = ba(o?.anchor),
      h = u === "x" ? p.x : p.y,
      g = t.map((P) => s.getProperty(P, f)),
      v = t.map((P) => s.quickSetter(P, f, "px"));
    if (v.some((P) => P == null)) return;
    let S = v,
      E = (0, Rt.initScrollCache)(),
      m = t.map((P) => {
        let N = P.getBoundingClientRect();
        return u === "x"
          ? N.left + N.width * h
          : N.top + N.height * h + (0, Rt.getScrollY)();
      }),
      A = n.timing?.stagger,
      b = t.length,
      y = Ta(A, b),
      T = A?.from,
      w = va(
        b,
        typeof T == "number" ||
          T === "start" ||
          T === "center" ||
          T === "edges" ||
          T === "end" ||
          T === "random"
          ? T
          : "end",
        o?.groupId ?? o?.syncedActionId
      );
    if (w.length === 0) return;
    let I = new Float64Array(b),
      x = w[0],
      C = { value: m[x] ?? 0 },
      _ = null,
      k = !1,
      L = 0,
      G = null,
      B = !1,
      Y = null,
      Q = performance.now(),
      Z = 0,
      we = () => {
        let P = performance.now(),
          N = Math.min(P - Q, 100);
        Q = P;
        let z = 1 - Math.exp(-N / y),
          U = !1;
        for (let $ = 0; $ < w.length; $++) {
          let V = w[$],
            Oe;
          if ($ === 0) Oe = C.value;
          else {
            let ei = w[$ - 1];
            Oe = m[ei] + I[ei];
          }
          let Js = Oe - m[V],
            jt = Js - I[V];
          Math.abs(jt) > jp
            ? ((I[V] = I[V] + jt * z), S[V](I[V]), (U = !0))
            : jt !== 0 && ((I[V] = Js), S[V](I[V]));
        }
        _?.isActive() && (U = !0), U || ie();
      },
      ie = () => {
        B && (Y?.(), (Y = null), (B = !1));
      },
      Qs = (P) => {
        _?.kill(), (_ = null), (Z = 0), (C.value = P);
        for (let N = 0; N < w.length; N++) {
          let z = w[N],
            U = P - m[z];
          (I[z] = U), S[z](U);
        }
        ie();
      },
      Ol = () => {
        _?.kill(), (_ = null), (Z = 0), (C.value = m[x] ?? 0);
        for (let P = 0; P < w.length; P++) {
          let N = w[P];
          (I[N] = 0), S[N](0);
        }
        ie();
      },
      ce = () => {
        B || ((Q = performance.now()), (Y = s.addTicker(we)), (B = !0));
      },
      Al = (P, N) => {
        (G = P),
          (L = N
            ? u === "x"
              ? window.innerWidth
              : window.innerHeight
            : u === "x"
            ? P.offsetWidth
            : P.offsetHeight);
      },
      Rl = (P) => {
        G || Al(P.triggerEl, P.isViewport);
        let N = u === "x" ? P.x : P.y + (0, Rt.getScrollY)();
        if (i) {
          (k = !0), Qs(N);
          return;
        }
        if (k)
          if (_) {
            let z = Math.max(Z - performance.now(), 50);
            _.kill();
            let U = s.to(C, {
              value: N,
              duration: z / 1e3,
              ease: "power2.out",
              onUpdate: ce,
              onComplete: () => {
                _ === U && ((_ = null), (Z = 0));
              },
            });
            if (!U) {
              (C.value = N), ce();
              return;
            }
            _ = U;
          } else C.value = N;
        else {
          if (((k = !0), l === "snap")) {
            Qs(N);
            return;
          }
          let z = Math.abs(N - C.value),
            $ = 0.1 + Math.min(z / (L || 1), 1) * 0.5;
          (Z = performance.now() + $ * 1e3), _?.kill();
          let V = s.to(C, {
            value: N,
            duration: $,
            ease: "power2.out",
            onUpdate: ce,
            onComplete: () => {
              _ === V && ((_ = null), (Z = 0));
            },
          });
          if (!V) {
            (C.value = N), ce();
            return;
          }
          _ = V;
        }
        ce();
      },
      _l = () => {
        if (((k = !1), a === "stay")) {
          ce();
          return;
        }
        if (i) {
          Ol();
          return;
        }
        let P = m[x] ?? 0,
          N = Math.abs(C.value - P),
          U = 0.1 + Math.min(N / (L || 1), 1) * 0.5;
        _?.kill();
        let $ = s.to(C, {
          value: P,
          duration: U,
          ease: "power2.out",
          onUpdate: ce,
          onComplete: () => {
            _ === $ && (_ = null);
          },
        });
        if (!$) {
          (C.value = P), ce();
          return;
        }
        _ = $;
      },
      Il = r?.subscribeChannel?.(ss.MOUSE_MOVE_CHANNELS.POSITION, Rl),
      Ml = r?.subscribeChannel?.(ss.MOUSE_MOVE_CHANNELS.LEAVE, _l),
      Zs = new AbortController(),
      { signal: Cl } = Zs,
      Vt = 0,
      Pl = () => {
        clearTimeout(Vt),
          (Vt = window.setTimeout(() => {
            G && (L = u === "x" ? G.offsetWidth : G.offsetHeight);
            for (let P = 0; P < t.length; P++) {
              let N = t[P],
                z = s.getProperty(N, f),
                U = typeof z == "number" ? z : parseFloat(String(z)),
                $ = Number.isFinite(U) ? U : 0,
                V = N.getBoundingClientRect(),
                Oe = u === "x" ? V.left + V.width * h : V.top + V.height * h;
              (m[P] = u === "x" ? Oe - $ : Oe - $ + (0, Rt.getScrollY)()),
                (I[P] = $);
            }
            if (!k) {
              let P = m[x];
              P !== void 0 &&
                (_?.isActive() && (_.kill(), (_ = null)), (C.value = P));
            }
          }, 250));
      };
    return (
      window.addEventListener("resize", Pl, { signal: Cl }),
      () => {
        _?.kill(), ie(), clearTimeout(Vt), Zs.abort(), Il?.(), Ml?.(), E();
        for (let P = 0; P < t.length; P++) s.set(t[P], { [f]: g[P] });
      }
    );
  }
  function zp(n) {
    n.addAction("mouse-follow", {
      requiresTriggerElementContext: !0,
      createCustomTween: (e, t, r, s, i, o, a) => qp(t, r, i, a),
    });
  }
});
var Aa = O((cs) => {
  "use strict";
  Object.defineProperty(cs, "__esModule", { value: !0 });
  function Hp(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Hp(cs, {
    applyAdditive: function () {
      return Zp;
    },
    formatRandom: function () {
      return ls;
    },
    formatRandomArray: function () {
      return wa;
    },
    isAdditiveValue: function () {
      return Wp;
    },
    isRandomArrayValue: function () {
      return Yp;
    },
    isRandomValue: function () {
      return as;
    },
    makeClamp: function () {
      return Jp;
    },
    makeRandomArrayPicker: function () {
      return Qp;
    },
    makeRandomPicker: function () {
      return Xp;
    },
  });
  function as(n) {
    if (typeof n != "object" || n === null) return !1;
    let e = n;
    return (
      e.type === "ix3-random" &&
      typeof e.min == "number" &&
      typeof e.max == "number" &&
      (e.step === void 0 || typeof e.step == "number") &&
      (e.unit === void 0 || typeof e.unit == "string")
    );
  }
  function Wp(n) {
    if (typeof n != "object" || n === null) return !1;
    let e = n;
    return (
      e.type === "ix3-additive" &&
      (typeof e.value == "number" || as(e.value)) &&
      (e.unit === void 0 || typeof e.unit == "string")
    );
  }
  function Yp(n) {
    if (typeof n != "object" || n === null) return !1;
    let e = n;
    return (
      e.type === "ix3-random-array" &&
      Array.isArray(e.values) &&
      e.values.every((t) => typeof t == "number" || typeof t == "string") &&
      (e.unit === void 0 || typeof e.unit == "string")
    );
  }
  function ls(n, e) {
    let t = n.unit ?? e ?? "",
      r = n.step != null ? `, ${n.step}` : "";
    return `random(${n.min}, ${n.max}${r})${t}`;
  }
  function wa(n, e) {
    let t = n.unit ?? e ?? "";
    return `random([${n.values.join(", ")}])${t}`;
  }
  function Ea(n) {
    let [e = "", t] = String(n).split("e"),
      r = (e.split(".")[1] || "").length;
    return t === void 0 ? r : Math.max(0, r - Number(t));
  }
  function Kp(n, e) {
    if (n <= 1) return 0;
    if (e === void 0) return Math.floor(Math.random() * n);
    let t = Math.floor(Math.random() * (n - 1));
    return t < e ? t : t + 1;
  }
  function Oa(n, e, t) {
    let r = new WeakMap(),
      s = (i, o) => {
        let a = Kp(n, r.get(o));
        return r.set(o, a), e(a);
      };
    return (s.legacyExpression = t), s;
  }
  function Xp(n) {
    let e = n.unit ?? "",
      t = (u) => (e ? `${u}${e}` : u),
      r = ls(n);
    if (!n.step) {
      let { min: u, max: f } = n,
        d = (p, h) => t(u + Math.random() * (f - u));
      return (d.legacyExpression = r), d;
    }
    let s = Math.abs(n.step),
      i = Math.min(n.min, n.max),
      o = Math.max(n.min, n.max),
      a = Math.round((o - i) / s),
      l = Math.max(Ea(i), Ea(s)),
      c = 10 ** l;
    return Oa(
      a + 1,
      (u) => {
        let f = i + u * s,
          d = l ? Math.round(f * c) / c : f;
        return t(Math.min(o, Math.max(i, d)));
      },
      r
    );
  }
  function Qp(n) {
    let e = n.unit ?? "",
      t = [...new Set(n.values)];
    return Oa(
      t.length,
      (r) => {
        let s = t[r] ?? 0;
        return typeof s == "number" && e ? `${s}${e}` : s;
      },
      wa(n)
    );
  }
  function Zp(n, e) {
    let t = n.unit ?? e ?? "";
    return as(n.value) ? `+=${ls(n.value, t)}` : `+=${n.value}${t}`;
  }
  function Jp(n, e) {
    let t = (r) => (r < n ? n : r > e ? e : r);
    return (r) => {
      if (typeof r == "number") return t(r);
      let s = parseFloat(r);
      if (Number.isNaN(s)) return r;
      let i = t(s);
      return i === s
        ? r
        : `${i}${r.replace(/^\s*[+-]?[\d.]+(?:e[+-]?\d+)?/i, "")}`;
    };
  }
});
var Ma = O((us) => {
  "use strict";
  Object.defineProperty(us, "__esModule", { value: !0 });
  Object.defineProperty(us, "build", {
    enumerable: !0,
    get: function () {
      return sh;
    },
  });
  var tt = Ne(),
    eh = Sa(),
    D = Aa();
  function Ra(n, e) {
    return e != null && typeof n == "string" && n.startsWith("var(")
      ? (0, tt.resolveToString)(n, e) ?? n
      : n;
  }
  var _a = new Set(["opacity", "autoAlpha"]),
    th = new Set(["scale", "scaleX", "scaleY", "z", "transformPerspective"]),
    nh = new Set(["xPercent", "yPercent"]),
    Ia = new Set(["width", "height"]);
  function It(n) {
    return n.startsWith("+=") || n.startsWith("-=") || n.startsWith("random(");
  }
  function rh(n) {
    if (_a.has(n)) return (0, D.makeClamp)(0, 1);
    if (th.has(n) || Ia.has(n)) return (0, D.makeClamp)(0, Number.MAX_VALUE);
  }
  function Mt(n) {
    return (
      (0, D.isRandomValue)(n) ||
      (0, D.isAdditiveValue)(n) ||
      (0, D.isRandomArrayValue)(n)
    );
  }
  function Ct(n, e) {
    let t = _a.has(n) ? 100 : 1,
      r = t !== 1 || nh.has(n),
      s = (i) => ({
        type: "ix3-random",
        min: i.min / t,
        max: i.max / t,
        step: i.step != null ? i.step / t : void 0,
      });
    if ((0, D.isRandomArrayValue)(e)) {
      let i = r
        ? {
            type: "ix3-random-array",
            values: e.values.map((o) => (typeof o == "number" ? o / t : o)),
          }
        : e;
      return (0, D.makeRandomArrayPicker)(i);
    }
    if ((0, D.isRandomValue)(e)) return (0, D.makeRandomPicker)(r ? s(e) : e);
    if (r) {
      let i = (0, D.isRandomValue)(e.value) ? s(e.value) : e.value / t;
      return (0, D.applyAdditive)({ type: "ix3-additive", value: i });
    }
    return (0, D.applyAdditive)(e);
  }
  function sh(n) {
    (0, eh.buildMouseFollowAction)(n),
      n
        .addAction("class", {
          createCustomTween: (e, t, r, s, i, o) => {
            let a = r.class,
              l = a?.selectors || [],
              c = a?.operation,
              u = l
                ? i.map((d) => ({ element: d, classList: [...d.classList] }))
                : [],
              f = () => {
                if (!(!c || !l))
                  for (let d of i)
                    c === "addClass"
                      ? l.forEach((p) => d.classList.add(p))
                      : c === "removeClass"
                      ? l.forEach((p) => d.classList.remove(p))
                      : c === "toggleClass" &&
                        l.forEach((p) => d.classList.toggle(p));
              };
            return (
              e.to(
                {},
                { duration: 0.001, onComplete: f, onReverseComplete: f },
                !o || o === 0 ? 0.001 : o
              ),
              () => {
                if (l) {
                  for (let d of u)
                    if (
                      d.element &&
                      (d.element instanceof HTMLElement &&
                        (d.element.className = ""),
                      d.element.classList)
                    )
                      for (let p of d.classList) d.element.classList.add(p);
                }
              }
            );
          },
        })
        .addAction("style", {
          createTweenConfig: (e, t) => {
            let r = { to: {}, from: {} },
              s = t?.[0];
            for (let i in e) {
              let o = e[i],
                a = Array.isArray(o) ? o[1] : o,
                l = Array.isArray(o) ? o[0] : void 0,
                c = Mt(a) ? Ct(i, a) : Ra(a, s),
                u = Mt(l) ? Ct(i, l) : l !== void 0 ? Ra(l, s) : void 0;
              c != null && (r.to[i] = c),
                u != null && !(0, D.isAdditiveValue)(a) && (r.from[i] = u),
                Ia.has(i) &&
                  (Mt(a) || Mt(l)) &&
                  (r.modifiers || (r.modifiers = {}),
                  (r.modifiers[i] = (0, D.makeClamp)(0, Number.MAX_VALUE)));
            }
            return r;
          },
        })
        .addAction("transform", {
          createTweenConfig: (e, t) => {
            let r = { to: {}, from: {} },
              s = t?.[0];
            for (let i in e) {
              let o = e[i],
                a = Array.isArray(o) ? o[1] : o,
                l = Array.isArray(o) ? o[0] : void 0,
                c = (0, D.isAdditiveValue)(a),
                u =
                  (0, D.isRandomValue)(a) || (0, D.isRandomArrayValue)(a) || c,
                f =
                  (0, D.isRandomValue)(l) ||
                  (0, D.isRandomArrayValue)(l) ||
                  (0, D.isAdditiveValue)(l);
              if (u || f) {
                let d = rh(i);
                d &&
                  (r.modifiers || (r.modifiers = {}),
                  (r.modifiers[i] = d),
                  i === "autoAlpha" && (r.modifiers.opacity = d),
                  i === "scale" &&
                    ((r.modifiers.scaleX = d), (r.modifiers.scaleY = d))),
                  u && (a = Ct(i, a)),
                  f && (l = Ct(i, l));
              }
              switch (i) {
                case "autoAlpha":
                case "opacity": {
                  if (a != null && typeof a == "string" && !It(a)) {
                    let d = s ? (0, tt.resolveToNumber)(a, s) : parseFloat(a);
                    a = d !== void 0 ? d / 100 : a;
                  }
                  if (l != null && typeof l == "string" && !It(l)) {
                    let d = s ? (0, tt.resolveToNumber)(l, s) : parseFloat(l);
                    l = d !== void 0 ? d / 100 : l;
                  }
                  break;
                }
                case "transformOrigin": {
                  typeof o == "string"
                    ? ((a = a || o), (l = a))
                    : typeof l == "string"
                    ? (a = l)
                    : typeof a == "string" && (l = a);
                  break;
                }
                case "xPercent":
                case "yPercent": {
                  if (a != null && typeof a == "string" && !It(a)) {
                    let d = s ? (0, tt.resolveToNumber)(a, s) : parseFloat(a);
                    a = d !== void 0 ? d : a;
                  }
                  if (l != null && typeof l == "string" && !It(l)) {
                    let d = s ? (0, tt.resolveToNumber)(l, s) : parseFloat(l);
                    l = d !== void 0 ? d : l;
                  }
                  break;
                }
              }
              a != null && (r.to[i] = a), l != null && !c && (r.from[i] = l);
            }
            return r;
          },
        });
  }
});
var xa = O((fs) => {
  "use strict";
  Object.defineProperty(fs, "__esModule", { value: !0 });
  Object.defineProperty(fs, "buildLottieAction", {
    enumerable: !0,
    get: function () {
      return oh;
    },
  });
  var ih = Ne();
  function oh(n) {
    n.addAction("lottie", {
      createCustomTween: (e, t, r, s, i, o) => {
        let a = r.lottie;
        if (!a || !i.length || !window.Webflow) return;
        let l = window.Webflow.require?.("lottie");
        if (!l) return;
        let c = [],
          u = !1;
        for (let f of i) {
          let d = Pa(a.from, f, Ca.FROM),
            p = Pa(a.to, f, Ca.TO),
            h = l.createInstance(f);
          if (!h) continue;
          c.push(h);
          let g = () => {
            if (u) return;
            let v = h.frames,
              S = Math.round(d * v),
              E = Math.round(p * v);
            h.gsapFrame === null && (h.gsapFrame = S);
            let m = s;
            m.ease || (m = { ...m, ease: "none" }),
              e.fromTo(h, { gsapFrame: S }, { gsapFrame: E, ...m }, o || 0);
          };
          h.isLoaded ? g() : h.onDataReady(g);
        }
        return () => {
          u = !0;
          for (let f of c) f.goToFrameAndStop(0), (f.gsapFrame = null);
        };
      },
    });
  }
  var Ca = { DURATION: 1, FROM: 0, TO: 1 };
  function Pa(n, e, t) {
    if (typeof n == "number") return n;
    let r = (0, ih.resolveToNumber)(n, e);
    return r !== void 0 ? r / 100 : t;
  }
});
var ps = O((ds) => {
  "use strict";
  Object.defineProperty(ds, "__esModule", { value: !0 });
  Object.defineProperty(ds, "RIVE_CONSTANTS", {
    enumerable: !0,
    get: function () {
      return ah;
    },
  });
  var ah = { MINIMUM_TIME: 0.001, MAX_BYTE_VALUE: 255 };
});
var ms = O((gs) => {
  "use strict";
  Object.defineProperty(gs, "__esModule", { value: !0 });
  function lh(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  lh(gs, {
    clearSurfaceCache: function () {
      return ch;
    },
    surfaceCache: function () {
      return hs;
    },
  });
  var hs = new WeakMap();
  function ch(n, e) {
    if (!e) return;
    let t = `${e.name}:${e.instanceName ?? ""}`,
      r = hs.get(n);
    r && (r.delete(t), r.size === 0 && hs.delete(n));
  }
});
var nt = O((ys) => {
  "use strict";
  Object.defineProperty(ys, "__esModule", { value: !0 });
  function uh(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  uh(ys, {
    parseVmKey: function () {
      return ph;
    },
    vmKey: function () {
      return fh;
    },
  });
  function fh(n, e, t) {
    return `vm:${n}:${e}:${t}`;
  }
  var dh = new Set([
    "string",
    "number",
    "boolean",
    "color",
    "enum",
    "trigger",
    "artboard",
  ]);
  function ph(n) {
    if (!n.startsWith("vm:")) return null;
    let e = n.lastIndexOf(":"),
      t = n.slice(e + 1);
    if (!dh.has(t)) return null;
    let r = n.slice(3, e),
      s = r.indexOf(":");
    return s === -1
      ? null
      : { vmName: r.slice(0, s), propName: r.slice(s + 1), propType: t };
  }
});
var Pt = O((vs) => {
  "use strict";
  Object.defineProperty(vs, "__esModule", { value: !0 });
  function hh(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  hh(vs, {
    getVmiProperty: function () {
      return ka;
    },
    storeOriginalValues: function () {
      return mh;
    },
  });
  var gh = nt();
  function mh(n, e) {
    let t = { viewModelProperties: {} };
    for (let r of n) yh(e, r.propertyName, r.propertyType, t);
    return t;
  }
  function yh(n, e, t, r) {
    let s = (0, gh.vmKey)(n.name, e, t);
    if (!(s in r.viewModelProperties)) {
      if (t === "artboard") {
        let o = n.riveInstance.viewModelInstance?.artboard?.(e)?.name;
        o != null && (r.viewModelProperties[s] = o);
        return;
      }
      let i = n.riveInstance.viewModelInstance
        ? vh(n.riveInstance.viewModelInstance, t, e)
        : null;
      i != null && (r.viewModelProperties[s] = i);
    }
  }
  function ka(n, e, t) {
    switch (e) {
      case "number":
        return n.number(t);
      case "boolean":
        return n.boolean(t);
      case "string":
        return n.string(t);
      case "color":
        return n.color(t);
      case "enum":
        return n.enum(t);
      default:
        return null;
    }
  }
  function vh(n, e, t) {
    let r = ka(n, e, t);
    return r ? r.value : void 0;
  }
});
var bs = O((Ts) => {
  "use strict";
  Object.defineProperty(Ts, "__esModule", { value: !0 });
  Object.defineProperty(Ts, "parseColorToAARRGGBB", {
    enumerable: !0,
    get: function () {
      return bh;
    },
  });
  var Th = ps();
  function bh(n) {
    let e = n.trim();
    if (!e) return null;
    try {
      let { red: t, green: r, blue: s, alpha: i } = Eh(e);
      return t === void 0 || r === void 0 || s === void 0
        ? null
        : ((Math.round(i * Th.RIVE_CONSTANTS.MAX_BYTE_VALUE) << 24) |
            (t << 16) |
            (r << 8) |
            s) >>>
            0;
    } catch {
      return null;
    }
  }
  var be = null;
  function Sh(n) {
    if (!be) {
      let e = document.createElement("canvas");
      if (((e.width = 1), (e.height = 1), (be = e.getContext("2d")), !be))
        return null;
    }
    return (
      (be.fillStyle = "#000000"),
      (be.fillStyle = n),
      be.fillStyle === "#000000" && n.toLowerCase() !== "black"
        ? null
        : be.fillStyle
    );
  }
  function Na(n, e, t) {
    let r = (1 - Math.abs(2 * t - 1)) * e,
      s = r * (1 - Math.abs(((n / 60) % 2) - 1)),
      i = t - r / 2,
      o,
      a,
      l;
    return (
      n >= 0 && n < 60
        ? ((o = r), (a = s), (l = 0))
        : n >= 60 && n < 120
        ? ((o = s), (a = r), (l = 0))
        : n >= 120 && n < 180
        ? ((o = 0), (a = r), (l = s))
        : n >= 180 && n < 240
        ? ((o = 0), (a = s), (l = r))
        : n >= 240 && n < 300
        ? ((o = s), (a = 0), (l = r))
        : ((o = r), (a = 0), (l = s)),
      {
        red: Math.round((o + i) * 255),
        green: Math.round((a + i) * 255),
        blue: Math.round((l + i) * 255),
      }
    );
  }
  function Eh(n) {
    let e,
      t,
      r,
      s = 1,
      i = n.replace(/\s/g, "").toLowerCase(),
      o = i;
    if (!o.startsWith("#") && !o.startsWith("rgb") && !o.startsWith("hsl")) {
      let a = Sh(i);
      a && (o = a);
    }
    if (o.startsWith("#")) {
      let a = o.substring(1);
      a.length === 3 || a.length === 4
        ? ((e = parseInt(a.charAt(0) + a.charAt(0), 16)),
          (t = parseInt(a.charAt(1) + a.charAt(1), 16)),
          (r = parseInt(a.charAt(2) + a.charAt(2), 16)),
          a.length === 4 && (s = parseInt(a.charAt(3) + a.charAt(3), 16) / 255))
        : (a.length === 6 || a.length === 8) &&
          ((e = parseInt(a.substring(0, 2), 16)),
          (t = parseInt(a.substring(2, 4), 16)),
          (r = parseInt(a.substring(4, 6), 16)),
          a.length === 8 && (s = parseInt(a.substring(6, 8), 16) / 255));
    } else if (o.startsWith("rgba")) {
      let a = o.match(/rgba\(([^)]+)\)/)?.[1]?.split(",");
      (e = parseInt(a?.[0] ?? "", 10)),
        (t = parseInt(a?.[1] ?? "", 10)),
        (r = parseInt(a?.[2] ?? "", 10)),
        (s = parseFloat(a?.[3] ?? ""));
    } else if (o.startsWith("rgb")) {
      let a = o.match(/rgb\(([^)]+)\)/)?.[1]?.split(",");
      (e = parseInt(a?.[0] ?? "", 10)),
        (t = parseInt(a?.[1] ?? "", 10)),
        (r = parseInt(a?.[2] ?? "", 10));
    } else if (o.startsWith("hsla")) {
      let a = o.match(/hsla\(([^)]+)\)/)?.[1]?.split(","),
        l = parseFloat(a?.[0] ?? ""),
        c = parseFloat(a?.[1]?.replace("%", "") ?? "") / 100,
        u = parseFloat(a?.[2]?.replace("%", "") ?? "") / 100;
      (s = parseFloat(a?.[3] ?? "")),
        ({ red: e, green: t, blue: r } = Na(l, c, u));
    } else if (o.startsWith("hsl")) {
      let a = o.match(/hsl\(([^)]+)\)/)?.[1]?.split(","),
        l = parseFloat(a?.[0] ?? ""),
        c = parseFloat(a?.[1]?.replace("%", "") ?? "") / 100,
        u = parseFloat(a?.[2]?.replace("%", "") ?? "") / 100;
      ({ red: e, green: t, blue: r } = Na(l, c, u));
    }
    if (
      Number.isNaN(e) ||
      Number.isNaN(t) ||
      Number.isNaN(r) ||
      Number.isNaN(s)
    )
      throw new Error(`Invalid color value: '${n}'`);
    return { red: e, green: t, blue: r, alpha: s };
  }
});
var Es = O((Ss) => {
  "use strict";
  Object.defineProperty(Ss, "__esModule", { value: !0 });
  Object.defineProperty(Ss, "setVmiValue", {
    enumerable: !0,
    get: function () {
      return Rh;
    },
  });
  var wh = nt(),
    Oh = Pt(),
    Ah = bs();
  function Rh(n, e, t, r, s, i) {
    let o = n.riveInstance.viewModelInstance;
    if (e === "trigger") {
      if (i) return;
      o?.trigger?.(t)?.fire?.();
      return;
    }
    if (!o) return;
    let a = (0, Oh.getVmiProperty)(o, e, t);
    if (!a) return;
    let l = s?.viewModelProperties[(0, wh.vmKey)(n.name, t, e)],
      c = i ? l ?? r : r,
      u = `${e}:${t}`;
    switch (e) {
      case "number":
        typeof c == "number" && ((a.value = c), (n.currentValues[u] = c));
        return;
      case "boolean":
        typeof c == "boolean" && ((a.value = c), (n.currentValues[u] = c));
        return;
      case "string":
        typeof c == "string" && ((a.value = c), (n.currentValues[u] = c));
        return;
      case "enum":
        typeof c == "string" && ((a.value = c), (n.currentValues[u] = c));
        return;
      case "color": {
        let f =
          typeof c == "number"
            ? c
            : typeof c == "string"
            ? (0, Ah.parseColorToAARRGGBB)(c)
            : null;
        f != null && ((a.value = f), (n.currentValues[u] = f));
        return;
      }
      default:
        return;
    }
  }
});
var Fa = O((ws) => {
  "use strict";
  Object.defineProperty(ws, "__esModule", { value: !0 });
  function _h(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  _h(ws, {
    createCleanupFunction: function () {
      return Ph;
    },
    restoreViewModelProperties: function () {
      return La;
    },
  });
  var Ih = nt(),
    Mh = Es(),
    Ch = ms();
  function La(n, e, t) {
    let r = n.viewModelInstance ?? null;
    if (r)
      for (let [s, i] of Object.entries(t.viewModelProperties)) {
        let o = (0, Ih.parseVmKey)(s);
        if (!o || o.vmName !== e) continue;
        let a = { name: e, riveInstance: n, currentValues: {} };
        if (o.propType === "artboard") {
          if (typeof i != "string") continue;
          let l = r.artboard?.(o.propName),
            c = n.getArtboard?.(i);
          l && c && (l.value = c);
          continue;
        }
        (0, Mh.setVmiValue)(a, o.propType, o.propName, i);
      }
  }
  function Ph(n, e, t) {
    return () => {
      !e || !n || (La(n, e.name, t), (0, Ch.clearSurfaceCache)(n, e));
    };
  }
});
var Va = O((Os) => {
  "use strict";
  Object.defineProperty(Os, "__esModule", { value: !0 });
  function xh(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  xh(Os, {
    interpolateAARRGGBB: function () {
      return Ba;
    },
    setupAnimateTimeline: function () {
      return Lh;
    },
  });
  var kh = Pt(),
    Nh = bs(),
    Da = Ne();
  function Ba(n, e, t) {
    let r = (n >>> 24) & 255,
      s = (n >>> 16) & 255,
      i = (n >>> 8) & 255,
      o = n & 255,
      a = (e >>> 24) & 255,
      l = (e >>> 16) & 255,
      c = (e >>> 8) & 255,
      u = e & 255,
      f = Math.round(r + (a - r) * t),
      d = Math.round(s + (l - s) * t),
      p = Math.round(i + (c - i) * t),
      h = Math.round(o + (u - o) * t);
    return ((f << 24) | (d << 16) | (p << 8) | h) >>> 0;
  }
  function Lh(n, e, t, r, s, i) {
    if (t.length === 0) return;
    let o = e.riveInstance.viewModelInstance;
    if (o)
      for (let a of t) {
        if (
          a.value === null ||
          a.value === void 0 ||
          !(0, kh.getVmiProperty)(o, a.propertyType, a.propertyName)
        )
          continue;
        let c,
          u = a.value;
        if (typeof u == "string" && u.startsWith("var(")) {
          if (
            (a.propertyType === "number"
              ? (c = (0, Da.resolveToNumber)(u, i))
              : a.propertyType === "color" &&
                (c = (0, Da.resolveToString)(u, i)),
            c === void 0)
          )
            continue;
        } else c = u;
        a.propertyType === "number"
          ? Fh(e, n, a.propertyName, c, r, s)
          : a.propertyType === "color" && Dh(e, n, a.propertyName, c, r, s);
      }
  }
  function Fh(n, e, t, r, s, i) {
    let o = n.riveInstance.viewModelInstance;
    if (!o) return;
    let a = o.number(t);
    if (!a) return;
    let l = typeof r == "number" ? r : parseFloat(String(r));
    if (isNaN(l)) return;
    let c = { v: a.value };
    e.to(
      c,
      {
        ...s,
        v: l,
        onStart() {
          let u = n.currentValues[`number:${t}`];
          (c.v = typeof u == "number" ? u : a.value), this.invalidate();
        },
        onUpdate: () => {
          a.value = c.v;
        },
      },
      i ?? 0
    );
  }
  function Dh(n, e, t, r, s, i) {
    let o = n.riveInstance.viewModelInstance;
    if (!o) return;
    let a = o.color(t);
    if (!a) return;
    let l = typeof r == "number" ? r : (0, Nh.parseColorToAARRGGBB)(String(r));
    if (l == null) return;
    let c = { fromPacked: a.value },
      u = { t: 0 };
    e.fromTo(
      u,
      { t: 0 },
      {
        ...s,
        t: 1,
        onStart() {
          let f = n.currentValues[`color:${t}`];
          (c.fromPacked = typeof f == "number" ? f : a.value),
            this.invalidate();
        },
        onUpdate: () => {
          a.value = Ba(c.fromPacked, l, u.t);
        },
      },
      i ?? 0
    );
  }
});
var qa = O((_s) => {
  "use strict";
  Object.defineProperty(_s, "__esModule", { value: !0 });
  function Bh(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Bh(_s, {
    resolveSurfaceArea: function () {
      return Rs;
    },
    setupAnimateAnimation: function () {
      return qh;
    },
    setupAnimation: function () {
      return $h;
    },
    setupTimeline: function () {
      return $a;
    },
  });
  var ja = ps(),
    As = ms(),
    Ga = Pt(),
    Ua = Fa(),
    Vh = Es(),
    jh = Va(),
    Gh = nt(),
    xt = Ne();
  function Rs(n, e) {
    if (!e) return null;
    let t = `${e.name}:${e.instanceName ?? ""}`,
      r = As.surfaceCache.get(n)?.get(t);
    if (r) return r;
    let i =
      (n.viewModelByName?.(e.name) ?? void 0)?.instanceByName?.(
        e.instanceName ?? ""
      ) ?? null;
    n.bindViewModelInstance?.(i);
    let o = { name: e.name, riveInstance: n, currentValues: {} },
      a = As.surfaceCache.get(n);
    return a || ((a = new Map()), As.surfaceCache.set(n, a)), a.set(t, o), o;
  }
  function $a(n, e, t, r, s, i) {
    if (t.length === 0) return;
    for (let l of t) {
      if (
        l.propertyType === "trigger" ||
        l.propertyType === "artboard" ||
        l.value === null ||
        l.value === void 0
      )
        continue;
      let c = l.value,
        u;
      typeof c == "string" && c.startsWith("var(")
        ? (u =
            l.propertyType === "number"
              ? (0, xt.resolveToNumber)(c, i)
              : l.propertyType === "color"
              ? (0, xt.resolveToString)(c, i)
              : void 0)
        : (u = c),
        u !== void 0 &&
          (e.currentValues[`${l.propertyType}:${l.propertyName}`] = u);
    }
    let o = (l) => {
        for (let c of t) {
          if (
            (c.propertyType !== "trigger" && c.value === null) ||
            c.value === void 0
          )
            continue;
          let u,
            f = c.value;
          if (typeof f == "string" && f.startsWith("var(")) {
            if (
              (c.propertyType === "number"
                ? (u = (0, xt.resolveToNumber)(f, i))
                : c.propertyType === "color" &&
                  (u = (0, xt.resolveToString)(f, i)),
              u === void 0)
            )
              continue;
          } else u = f;
          Uh(e, c.propertyName, c.propertyType, u, r, l);
        }
      },
      a = { int: 0 };
    n.to(
      a,
      {
        int: 1,
        duration: ja.RIVE_CONSTANTS.MINIMUM_TIME,
        onStart: () => {
          o(!1);
        },
        onReverseComplete: () => {
          o(!0);
        },
      },
      s ?? ja.RIVE_CONSTANTS.MINIMUM_TIME
    );
  }
  function Uh(n, e, t, r, s, i) {
    if (t === "artboard") {
      if (typeof r != "string") return;
      let o = n.riveInstance.viewModelInstance?.artboard?.(e);
      if (!o) return;
      if (i) {
        let l = (0, Gh.vmKey)(n.name, e, t),
          c = s?.viewModelProperties[l];
        if (typeof c == "string") {
          let u = n.riveInstance.getArtboard?.(c);
          u && (o.value = u);
        }
        return;
      }
      let a = n.riveInstance.getArtboard?.(r);
      if (!a) return;
      o.value = a;
      return;
    }
    (0, Vh.setVmiValue)(n, t, e, r, s, i);
  }
  function $h(n, e, t, r, s) {
    let i = e.animationSource,
      o = Rs(n, i);
    if (!o) return;
    let a = e.addedProperties ?? {},
      l = Object.values(a),
      c = (0, Ga.storeOriginalValues)(l, o);
    return $a(t, o, l, c, r, s), (0, Ua.createCleanupFunction)(n, i, c);
  }
  function qh(n, e, t, r, s, i) {
    let o = e.animationSource,
      a = Rs(n, o);
    if (!a) return;
    let l = e.addedProperties ?? {},
      c = Object.values(l),
      u = (0, Ga.storeOriginalValues)(c, a);
    return (
      (0, jh.setupAnimateTimeline)(t, a, c, r, s, i),
      (0, Ua.createCleanupFunction)(n, o, u)
    );
  }
});
var Xa = O((Is) => {
  "use strict";
  Object.defineProperty(Is, "__esModule", { value: !0 });
  function zh(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  zh(Is, {
    buildAnimateRiveAction: function () {
      return Yh;
    },
    buildRiveAction: function () {
      return Wh;
    },
  });
  var Wa = qa();
  function za(n) {
    return (
      typeof n == "object" &&
      n !== null &&
      "loaded" in n &&
      typeof n.loaded == "boolean"
    );
  }
  function Ha(n) {
    !n.isPlaying && n.play && n.play();
  }
  function Hh(n, e, t) {
    let s = e.getInstance(n)?.rive,
      i = za(s) ? s : null;
    if (i?.loaded) return Ha(i), t(i, n);
    let o,
      a = !1,
      l = () => {
        if (a || !n.isConnected) return;
        let u = e.getInstance(n)?.rive,
          f = za(u) ? u : null;
        f?.loaded && (Ha(f), (o = t(f, n))),
          n.removeEventListener("w-rive-load", l);
      };
    return (
      n.addEventListener("w-rive-load", l),
      () => {
        (a = !0), n.removeEventListener("w-rive-load", l), o?.();
      }
    );
  }
  function Ya(n, e, t) {
    let r = [];
    for (let s of n) {
      let i = Hh(s, e, t);
      i && r.push(i);
    }
    if (r.length !== 0)
      return () => {
        for (let s of r) s();
      };
  }
  function Ka() {
    return window.Webflow ? window.Webflow.require?.("rive") ?? null : null;
  }
  function Wh(n) {
    n.addAction("rive", {
      createCustomTween: (e, t, r, s, i, o) => {
        let a = r.rive;
        if (!a || !i.length) return;
        let l = Ka();
        if (l) return Ya(i, l, (c, u) => (0, Wa.setupAnimation)(c, a, e, o, u));
      },
    });
  }
  function Yh(n) {
    n.addAction("animate-rive", {
      createCustomTween: (e, t, r, s, i, o) => {
        let a = r.rive;
        if (!a || !i.length) return;
        let l = Ka();
        if (l)
          return Ya(i, l, (c, u) =>
            (0, Wa.setupAnimateAnimation)(c, a, e, s, o, u)
          );
      },
    });
  }
});
var Se = O((Ms) => {
  "use strict";
  Object.defineProperty(Ms, "__esModule", { value: !0 });
  function Kh(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Kh(Ms, {
    checkTt: function () {
      return eg;
    },
    hasBBoxUpdate: function () {
      return Zh;
    },
    hasIntensity: function () {
      return Xh;
    },
    hasMatrixUpdate: function () {
      return Jh;
    },
    hasRenderOrder: function () {
      return Qh;
    },
  });
  var kt = K(),
    Xh = (n) => "intensity" in n,
    Qh = (n) => "renderOrder" in n,
    Zh = (n) => "singleBBoxNeedsUpdate" in n && "recursiveBBoxNeedsUpdate" in n,
    Jh = (n) => "updateMatrix" in n && "updateMatrixWorld" in n,
    eg = (n, e) =>
      e === "from"
        ? n === kt.TweenType.From || n === kt.TweenType.FromTo
        : n === kt.TweenType.To || n === kt.TweenType.FromTo;
});
var Ps = O((Cs) => {
  "use strict";
  Object.defineProperty(Cs, "__esModule", { value: !0 });
  Object.defineProperty(Cs, "colorDataToCss", {
    enumerable: !0,
    get: function () {
      return tg;
    },
  });
  var tg = ({ r: n, g: e, b: t, a: r }) => {
    let s = (c) => Math.round(Math.min(1, Math.max(0, c)) * 255),
      i = s(n),
      o = s(e),
      a = s(t);
    if (r === void 0 || r >= 1) return `rgba(${i}, ${o}, ${a}, 1)`;
    let l = Math.min(1, Math.max(0, r));
    return `rgba(${i}, ${o}, ${a}, ${l})`;
  };
});
var Qa = O((xs) => {
  "use strict";
  Object.defineProperty(xs, "__esModule", { value: !0 });
  Object.defineProperty(xs, "storeOriginalState", {
    enumerable: !0,
    get: function () {
      return sg;
    },
  });
  var ng = Se(),
    rg = Ps(),
    sg = (n, e, t) => {
      let r = n.material,
        s = Array.isArray(r) ? r : r ? [r] : [],
        i = e.spline._scene.entityByUuid[t]?.color,
        o = i ? (0, rg.colorDataToCss)(i) : void 0,
        a = n.rotation;
      return {
        position: { ...n.position },
        rotation: { x: a._x ?? 0, y: a._y ?? 0, z: a._z ?? 0 },
        scale: { ...n.scale },
        ...(o ? { color: o } : {}),
        intensity: n.intensity,
        renderOrder: (0, ng.hasRenderOrder)(n) ? n.renderOrder : void 0,
        materials: s?.map((l) => ({
          transparent: l.transparent,
          depthWrite: l.depthWrite,
          alpha: l.alpha,
          layers: (l.layers ?? []).map((c) => ({
            visible: c.visible,
            alpha: c.alpha,
            alphaOverride: c.alphaOverride,
            ior: c.ior,
            thickness: c.thickness,
          })),
        })),
      };
    };
});
var rt = O((ks) => {
  "use strict";
  Object.defineProperty(ks, "__esModule", { value: !0 });
  Object.defineProperty(ks, "SPLINE_CONSTANTS", {
    enumerable: !0,
    get: function () {
      return ig;
    },
  });
  var ig = {
    OPACITY_RENDER_ORDER: 999,
    TRANSITION_END_OFFSET: 0.001,
    DEFAULT_TRANSITION_DURATION: 0.5,
    OPACITY_TRANSPARENCY_THRESHOLD: 0.01,
    DEFAULT_TRANSMISSION_IOR: 1.3,
    DEFAULT_TRANSMISSION_THICKNESS: 10,
    MIN_ZOOM_VALUE: 1e-4,
  };
});
var Nt = O((Ns) => {
  "use strict";
  Object.defineProperty(Ns, "__esModule", { value: !0 });
  function og(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  og(Ns, {
    getAppZoom: function () {
      return lg;
    },
    setAppZoom: function () {
      return cg;
    },
  });
  var ag = rt(),
    lg = (n) => {
      let e = n._camera;
      return e._cameraType === "OrthographicCamera"
        ? e.orthoCamera.zoom
        : e.perspCamera.zoom;
    },
    cg = (n, e) => {
      let t = e > 0 ? e : ag.SPLINE_CONSTANTS.MIN_ZOOM_VALUE;
      n.setZoom?.(t);
    };
});
var Fs = O((Ls) => {
  "use strict";
  Object.defineProperty(Ls, "__esModule", { value: !0 });
  Object.defineProperty(Ls, "createCleanupFunction", {
    enumerable: !0,
    get: function () {
      return fg;
    },
  });
  var ug = Nt(),
    Lt = Se(),
    fg = (n, e, t, r, s, i) => () => {
      if (!(!n || !t)) {
        if (
          (i && (n.state = void 0),
          Object.assign(n.position, t.position),
          Object.assign(n.rotation, {
            x: t.rotation.x,
            y: t.rotation.y,
            z: t.rotation.z,
          }),
          Object.assign(n.scale, t.scale),
          t.color && (n.color = t.color),
          r.spline?.intensity &&
            typeof r.spline.intensity == "object" &&
            t.intensity !== void 0 &&
            (0, Lt.hasIntensity)(n) &&
            (n.intensity = t.intensity),
          r.spline?.zoom && typeof r.spline.zoom == "object")
        ) {
          let o = e.spline;
          typeof o?.setZoom == "function" && (0, ug.setAppZoom)(o, s ?? 1);
        }
        if (t.materials) {
          let o = n.material,
            a = Array.isArray(o) ? o : o ? [o] : [];
          (0, Lt.hasRenderOrder)(n) && (n.renderOrder = t.renderOrder ?? 0);
          let l = Math.min(a.length, t.materials.length);
          for (let c = 0; c < l; c++) {
            let u = a[c],
              f = t.materials[c];
            if (!u || !f) continue;
            (u.transparent = f.transparent),
              (u.depthWrite = f.depthWrite),
              f.alpha !== void 0 && (u.alpha = f.alpha);
            let d = u.layers ?? [];
            for (let p = 0; p < d.length; p++) {
              let h = d[p],
                g = f.layers[p];
              !h ||
                !g ||
                ((h.visible = g.visible),
                g.alpha !== void 0 && (h.alpha = g.alpha),
                g.alphaOverride !== void 0 &&
                  (h.alphaOverride = g.alphaOverride),
                g.ior !== void 0 && (h.ior = g.ior),
                g.thickness !== void 0 && (h.thickness = g.thickness));
            }
          }
        }
        (0, Lt.hasMatrixUpdate)(n) &&
          (n.updateMatrix(), n.updateMatrixWorld(!0)),
          (0, Lt.hasBBoxUpdate)(n) &&
            ((n.singleBBoxNeedsUpdate = !0), (n.recursiveBBoxNeedsUpdate = !0)),
          e.spline.requestRender();
      }
    };
});
var Za = O((Ds) => {
  "use strict";
  Object.defineProperty(Ds, "__esModule", { value: !0 });
  function dg(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  dg(Ds, {
    warnNoObjectId: function () {
      return pg;
    },
    warnNoObjectsFound: function () {
      return gg;
    },
    warnObjectNotFound: function () {
      return hg;
    },
  });
  var pg = () => {},
    hg = (n) => {},
    gg = (n) => {};
});
var tl = O((Bs) => {
  "use strict";
  Object.defineProperty(Bs, "__esModule", { value: !0 });
  Object.defineProperty(Bs, "animateStateTransitions", {
    enumerable: !0,
    get: function () {
      return yg;
    },
  });
  var Ja = rt(),
    mg = Fs(),
    el = Se(),
    yg = (n, e, t, r, s, i, o, a, l, c) => {
      let u = [];
      n.forEach((d) => {
        if (!d.transition) {
          u.push(null);
          return;
        }
        let p = l.duration ?? Ja.SPLINE_CONSTANTS.DEFAULT_TRANSITION_DURATION,
          h = d.transition({
            from:
              e.stateName?.from && (0, el.checkTt)(a, "from")
                ? e.stateName.from
                : void 0,
            to:
              e.stateName?.to && (0, el.checkTt)(a, "to")
                ? e.stateName.to
                : null,
            autoPlay: !1,
            duration: p,
            delay: 0,
          });
        u.push(h);
        let g = { time: 0 };
        o.fromTo(
          g,
          { time: 0 },
          {
            ...l,
            time: p - Ja.SPLINE_CONSTANTS.TRANSITION_END_OFFSET,
            onUpdate: () => {
              h.seek(g.time);
            },
          },
          c || 0
        );
      });
      let f = n.map((d, p) =>
        (0, mg.createCleanupFunction)(d, t, r[p], s, i, u[p])
      );
      return () => f.forEach((d) => d?.());
    };
});
var rl = O((Vs) => {
  "use strict";
  Object.defineProperty(Vs, "__esModule", { value: !0 });
  function vg(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  vg(Vs, {
    animateColor: function () {
      return Eg;
    },
    animateIntensity: function () {
      return bg;
    },
    animateZoom: function () {
      return Sg;
    },
  });
  var nl = Nt(),
    Tg = Ps(),
    Ee = Se(),
    bg = (n, e, t, r, s, i) => {
      let o = e.intensity;
      if (!o || typeof o != "object") return;
      let a = n.intensity ?? 0,
        l = o.from && (0, Ee.checkTt)(r, "from") ? o.from : a,
        c = o.to && (0, Ee.checkTt)(r, "to") ? o.to : a,
        u = { v: l };
      t.fromTo(
        u,
        { v: l },
        {
          ...s,
          v: c,
          onUpdate: () => {
            (0, Ee.hasIntensity)(n) && (n.intensity = u.v);
          },
        },
        i || 0
      );
    },
    Sg = (n, e, t, r, s, i) => {
      let o = e.zoom;
      if (!o || typeof o != "object" || typeof n.spline?.setZoom != "function")
        return;
      let a = (0, nl.getAppZoom)(n.spline),
        l = o.from && (0, Ee.checkTt)(r, "from") ? o.from : a,
        c = o.to && (0, Ee.checkTt)(r, "to") ? o.to : a,
        u = { v: l };
      t.fromTo(
        u,
        { v: l },
        {
          ...s,
          v: c,
          onUpdate: () => {
            (0, nl.setAppZoom)(n.spline, u.v);
          },
        },
        i || 0
      );
    },
    Eg = (n, e, t, r, s, i, o, a) => {
      let l = e.color;
      if (!l || typeof l != "object" || (!l.from && !l.to)) return;
      let c = o.spline._scene.entityByUuid[a]?.color,
        u = (0, Tg.colorDataToCss)(c ?? { r: 255, g: 255, b: 255 }),
        f = l.from && (0, Ee.checkTt)(r, "from") ? l.from : u,
        d = l.to && (0, Ee.checkTt)(r, "to") ? l.to : u,
        p = window.gsap.utils.interpolate(f, d),
        h = { t: 0 };
      t.fromTo(
        h,
        { t: 0 },
        {
          ...s,
          t: 1,
          onUpdate: function () {
            n.color = p(h.t);
          },
        },
        i || 0
      );
    };
});
var il = O((js) => {
  "use strict";
  Object.defineProperty(js, "__esModule", { value: !0 });
  function wg(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  wg(js, {
    createPropertyObject: function () {
      return sl;
    },
    createTransformTargets: function () {
      return Og;
    },
  });
  var sl = (n, e, t) => {
      let r = {},
        s = t[e];
      return (
        ["X", "Y", "Z"].forEach((i) => {
          let o = `${e}${i}`,
            a = n[o],
            l = i.toLowerCase(),
            c = s[l];
          a &&
            typeof a == "object" &&
            (r[l] = { from: a.from ?? c, to: a.to ?? c });
        }),
        { props: r }
      );
    },
    Og = (n, e) => {
      let t = ["position", "rotation", "scale"],
        r = [];
      return (
        t.forEach((s) => {
          let { props: i } = sl(e, s, n);
          Object.keys(i).length > 0 && r.push({ object: n[s], props: i });
        }),
        r
      );
    };
});
var ol = O((Us) => {
  "use strict";
  Object.defineProperty(Us, "__esModule", { value: !0 });
  Object.defineProperty(Us, "fadeObject", {
    enumerable: !0,
    get: function () {
      return Mg;
    },
  });
  var Ft = rt(),
    Gs = Se(),
    Ag = (n, e, t, r, s, i) => {
      r.fromTo(n, { alpha: e }, { ...s, alpha: t }, i);
    },
    Rg = (n, e, t, r, s, i) => {
      let o = n.ior ?? Ft.SPLINE_CONSTANTS.DEFAULT_TRANSMISSION_IOR,
        a = n.thickness ?? Ft.SPLINE_CONSTANTS.DEFAULT_TRANSMISSION_THICKNESS;
      r.fromTo(
        n,
        { alpha: e, ior: o, thickness: a },
        {
          ...s,
          alpha: 1 - t,
          ior: window.gsap.utils.interpolate(o, 1, 1 - t),
          thickness: window.gsap.utils.interpolate(a, 0, 1 - t),
          onUpdate: () => {
            n.visible =
              n.alpha > Ft.SPLINE_CONSTANTS.OPACITY_TRANSPARENCY_THRESHOLD;
          },
        },
        i
      );
    },
    _g = (n, e, t, r, s, i) => {
      n.alphaOverride !== void 0 &&
        r.fromTo(n, { alphaOverride: e }, { ...s, alphaOverride: t }, i);
    },
    Ig = (n, e, t, r, s, i) => {
      if (!n.visible) return;
      let o = n.type;
      o === "color" || o === "depth" || o === "outline"
        ? Ag(n, e, t, r, s, i)
        : o === "transmission"
        ? Rg(n, e, t, r, s, i)
        : o === "light" && _g(n, e, t, r, s, i);
    },
    Mg = (n, e, t, r, s, i) => {
      if (!n) return;
      let o = n.material,
        a = o?.layers;
      if (a) {
        (o.transparent = !0),
          (0, Gs.hasRenderOrder)(n) &&
            (n.renderOrder = Ft.SPLINE_CONSTANTS.OPACITY_RENDER_ORDER);
        for (let l of a) {
          let c = l.type === "light" ? l.alphaOverride ?? 1 : l.alpha ?? 1,
            u = e.from !== void 0 && (0, Gs.checkTt)(r, "from") ? e.from : c,
            f = e.to !== void 0 && (0, Gs.checkTt)(r, "to") ? e.to : c;
          Ig(l, u, f, t, s, i);
        }
      }
    };
});
var ll = O((zs) => {
  "use strict";
  Object.defineProperty(zs, "__esModule", { value: !0 });
  Object.defineProperty(zs, "setupAnimation", {
    enumerable: !0,
    get: function () {
      return Fg;
    },
  });
  var Cg = Qa(),
    Pg = Fs(),
    xg = Nt(),
    $s = Za(),
    kg = tl(),
    qs = rl(),
    Ng = il(),
    Lg = ol(),
    Dt = Se(),
    al = rt(),
    Fg = (n, e, t, r, s, i) => {
      t.ease || (t = { ...t, ease: "none" });
      let { force3D: o, ...a } = t;
      if (((t = { ...a }), !n.spline?.findObjectById)) return;
      let l = e.spline,
        c = (e.objectId || "").split(",").filter(Boolean);
      if (c.length === 0) {
        (0, $s.warnNoObjectId)();
        return;
      }
      let u = c.flatMap((g) => {
        let v = n.spline.findObjectById?.(g);
        return v || ((0, $s.warnObjectNotFound)(g), []);
      });
      if (u.length === 0) {
        (0, $s.warnNoObjectsFound)(c);
        return;
      }
      let f = u.map((g) => (0, Cg.storeOriginalState)(g, n, c[0] ?? "")),
        d = (0, xg.getAppZoom)(n.spline);
      if (
        e.animatingState &&
        l?.stateName &&
        (l.stateName.from || l.stateName.to)
      )
        return (0, kg.animateStateTransitions)(u, l, n, f, e, d, r, s, t, i);
      if (!l) return;
      let p = Object.keys(l);
      if (p.length === 0 || (p.length === 1 && p[0] === "stateName")) return;
      u.forEach((g) => {
        (0, qs.animateIntensity)(g, l, r, s, t, i),
          (0, qs.animateZoom)(n, l, r, s, t, i),
          (0, qs.animateColor)(g, l, r, s, t, i, n, c[0] ?? "");
        let v = l.opacity && typeof l.opacity == "object" ? l.opacity : void 0;
        if (v !== void 0) {
          let E = {
              from: v.from !== void 0 ? v.from / 100 : void 0,
              to: v.to !== void 0 ? v.to / 100 : void 0,
            },
            m =
              t.immediateRender !== !1 &&
              E.from !== void 0 &&
              (0, Dt.checkTt)(s, "from")
                ? E.from
                : void 0;
          if (((0, Lg.fadeObject)(g, E, r, s, t, i), m !== void 0)) {
            let A = g.material,
              b = Array.isArray(A) ? A : A ? [A] : [];
            for (let y of b)
              (y.transparent = !0),
                (y.depthWrite =
                  m > al.SPLINE_CONSTANTS.OPACITY_TRANSPARENCY_THRESHOLD);
            (0, Dt.hasRenderOrder)(g) &&
              (g.renderOrder = al.SPLINE_CONSTANTS.OPACITY_RENDER_ORDER);
          }
        }
        (0, Ng.createTransformTargets)(g, l).forEach(
          ({ object: E, props: m }) => {
            if (Object.keys(m).length === 0) return;
            let A = {},
              b = {};
            Object.keys(m).forEach((y) => {
              let T = m[y];
              T &&
                typeof T == "object" &&
                ((A[y] =
                  (0, Dt.checkTt)(s, "from") && T.from ? T.from : E[y] ?? 0),
                (b[y] = (0, Dt.checkTt)(s, "to") && T.to ? T.to : E[y] ?? 0));
            }),
              !(Object.keys(A).length === 0 && Object.keys(b).length === 0) &&
                r.fromTo(E, A, { ...t, ...b }, i || 0);
          }
        );
      });
      let h = u.map((g, v) => (0, Pg.createCleanupFunction)(g, n, f[v], e, d));
      return () => h.forEach((g) => g?.());
    };
});
var fl = O((Hs) => {
  "use strict";
  Object.defineProperty(Hs, "__esModule", { value: !0 });
  Object.defineProperty(Hs, "buildSplineAction", {
    enumerable: !0,
    get: function () {
      return Gg;
    },
  });
  var cl = ll(),
    Bt = Ne(),
    Dg = new Set(["color", "stateName"]),
    Bg = new Set(["rotationX", "rotationY", "rotationZ"]),
    ul = Math.PI / 180;
  function Vg(n, e) {
    if (!n.spline) return n;
    let t = n.spline,
      r = {},
      s = !1;
    for (let [i, o] of Object.entries(t)) {
      if (!o || typeof o != "object") {
        r[i] = o;
        continue;
      }
      let a = o;
      if (Dg.has(i)) {
        let l = a.from !== void 0 ? (0, Bt.resolveToString)(a.from, e) : void 0,
          c = a.to !== void 0 ? (0, Bt.resolveToString)(a.to, e) : void 0;
        (l !== a.from || c !== a.to) && (s = !0), (r[i] = { from: l, to: c });
      } else {
        let l = a.from !== void 0 ? (0, Bt.resolveToNumber)(a.from, e) : void 0,
          c = a.to !== void 0 ? (0, Bt.resolveToNumber)(a.to, e) : void 0,
          u = l !== a.from,
          f = c !== a.to;
        (u || f) && (s = !0),
          Bg.has(i)
            ? (r[i] = {
                from: l !== void 0 && u ? l * ul : l,
                to: c !== void 0 && f ? c * ul : c,
              })
            : (r[i] = { from: l, to: c });
      }
    }
    return s ? { ...n, spline: r } : n;
  }
  function jg(n, e, t, r, s, i, o) {
    let a = e.getInstance(n);
    if (a) return (0, cl.setupAnimation)(a, t, r, s, i, o);
    let l,
      c = () => {
        let u = e.getInstance(n);
        u && (l = (0, cl.setupAnimation)(u, t, r, s, i, o)),
          n.removeEventListener("w-spline-load", c);
      };
    return (
      n.addEventListener("w-spline-load", c),
      () => {
        n.removeEventListener("w-spline-load", c), l?.();
      }
    );
  }
  function Gg(n) {
    n.addAction("spline", {
      createCustomTween: (e, t, r, s, i, o) => {
        let a = t.tt ?? 0;
        if (!i.length || !window.Webflow || !r.objectId) return;
        let l = window.Webflow.require?.("spline");
        if (!l) return;
        let c = [];
        for (let u of i) {
          let f = Vg(r, u),
            d = jg(u, l, f, s, e, a, o);
          d && c.push(d);
        }
        if (c.length !== 0)
          return () => {
            for (let u of c) u?.();
          };
      },
    });
  }
});
var vl = O((Ys) => {
  "use strict";
  Object.defineProperty(Ys, "__esModule", { value: !0 });
  Object.defineProperty(Ys, "buildVariableAction", {
    enumerable: !0,
    get: function () {
      return Ug;
    },
  });
  var Ws = K();
  function Ug(n) {
    n.addAction("variable", {
      createCustomTween: (e, t, r, s, i, o) => {
        let a = r.variable;
        if (!a) return;
        let l = Object.keys(a),
          c = l.length;
        if (c === 0) return;
        let u = (t.targets?.length ?? 0) > 0;
        if (u && i.length === 0) return;
        let f = u ? Array.from(new Set(i)) : $g(l),
          d = f.length,
          p = new Array(d),
          h = new Array(d);
        for (let b = 0; b < d; b++) {
          let y = f[b].style;
          p[b] = y;
          let T = new Array(c);
          for (let R = 0; R < c; R++) {
            let w = l[R];
            (T[R] = y.getPropertyValue(w)), y.removeProperty(w);
          }
          h[b] = T;
        }
        let g = t.tt ?? Ws.TweenType.To,
          v = o || 0,
          { force3D: S, ...E } = s,
          m = l.some((b) => a[b].startsWith("var(")),
          A = (b) => {
            let y = {};
            for (let T = 0; T < c; T++) {
              let R = l[T],
                w = a[R];
              y[R] = hl(
                (b &&
                  w.startsWith("var(") &&
                  b.getPropertyValue(w.slice(4, -1)).trim()) ||
                  w
              );
            }
            return y;
          };
        if (u)
          for (let b = 0; b < d; b++) {
            let y = f[b],
              T = A(m ? getComputedStyle(y) : null);
            dl(e, g, y, { ...T, ...E }, v, l);
          }
        else {
          let y = {
            ...A(m ? getComputedStyle(document.documentElement) : null),
            ...E,
          };
          for (let T = 0; T < d; T++) dl(e, g, f[T], y, v, l);
        }
        return () => {
          for (let b = 0; b < d; b++) {
            let y = p[b],
              T = h[b];
            for (let R = 0; R < c; R++) {
              let w = T[R];
              w ? y.setProperty(l[R], w) : y.removeProperty(l[R]);
            }
          }
        };
      },
    });
  }
  function $g(n) {
    let e = [document.documentElement];
    if (n.length === 0) return e;
    let t = zg(n) ?? Hg(n);
    for (let r = 0; r < t.length; r++) e.push(t[r]);
    return e;
  }
  function hl(n) {
    return n.replace(/(^|[^\d.])\.(\d)/g, "$10.$2");
  }
  function qg(n, e) {
    let t = getComputedStyle(n),
      r = null;
    for (let s = 0; s < e.length; s++) {
      let i = e[s],
        o = t.getPropertyValue(i).trim(),
        a = hl(o);
      a !== o && ((r ??= {})[i] = a);
    }
    return r;
  }
  function dl(n, e, t, r, s, i) {
    e === Ws.TweenType.From
      ? n.from(t, r, s)
      : e === Ws.TweenType.Set
      ? n.set(t, r, s)
      : (n.add(() => {
          let o = qg(t, i);
          o && window.gsap.set(t, o);
        }, s),
        n.to(t, r, s));
  }
  function zg(n) {
    let e = new Set([document.documentElement]),
      t = [],
      r = new Map();
    try {
      let s = document.styleSheets;
      for (let i = 0; i < s.length; i++) gl(s[i].cssRules, n, t, e, r);
      return t;
    } catch {
      return null;
    }
  }
  function gl(n, e, t, r, s) {
    for (let i = 0; i < n.length; i++) {
      let o = n[i];
      if (o instanceof CSSMediaRule) {
        let l = o.conditionText,
          c = s.get(l);
        c === void 0 && ((c = matchMedia(l).matches), s.set(l, c)),
          c && gl(o.cssRules, e, t, r, s);
        continue;
      }
      if (!(o instanceof CSSStyleRule)) continue;
      let a = o.style;
      for (let l = 0; l < e.length; l++)
        if (a.getPropertyValue(e[l])) {
          try {
            let c = document.querySelectorAll(o.selectorText);
            for (let u = 0; u < c.length; u++) {
              let f = c[u];
              r.has(f) || (r.add(f), t.push(f));
            }
          } catch {}
          break;
        }
    }
  }
  var ml = "__ix3__";
  function Hg(n) {
    let e = document.documentElement,
      t = document.body,
      r = [],
      s = n.length,
      i = [],
      o = [];
    yl(e, n, s, i, o), pl(t, n, s, r, i, o);
    let a = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT),
      l;
    for (; (l = a.nextNode()); ) pl(l, n, s, r, i, o);
    for (let c = 0; c < i.length; c++) {
      let u = i[c].style,
        f = o[c];
      for (let d = 0; d < s; d++) {
        let p = f[d];
        p ? u.setProperty(n[d], p) : u.removeProperty(n[d]);
      }
    }
    return r;
  }
  function yl(n, e, t, r, s) {
    let i = n.style,
      o = new Array(t);
    for (let a = 0; a < t; a++) {
      let l = e[a];
      (o[a] = i.getPropertyValue(l)), i.setProperty(l, ml);
    }
    r.push(n), s.push(o);
  }
  function pl(n, e, t, r, s, i) {
    let o = getComputedStyle(n);
    for (let a = 0; a < t; a++)
      if (o.getPropertyValue(e[a]) !== ml) {
        r.push(n), yl(n, e, t, s, i);
        return;
      }
  }
});
var bl = O((Ks) => {
  "use strict";
  Object.defineProperty(Ks, "__esModule", { value: !0 });
  Object.defineProperty(Ks, "plugin", {
    enumerable: !0,
    get: function () {
      return tm;
    },
  });
  var Wg = ya(),
    Yg = Ma(),
    Kg = xa(),
    Tl = Xa(),
    Xg = fl(),
    Qg = vl(),
    Zg = Ur(),
    Jg = K(),
    em = ne(),
    le = new Jg.RuntimeBuilder(em.CORE_PLUGIN_INFO);
  (0, Wg.build)(le);
  (0, Yg.build)(le);
  (0, Kg.buildLottieAction)(le);
  (0, Tl.buildRiveAction)(le);
  (0, Tl.buildAnimateRiveAction)(le);
  (0, Xg.buildSplineAction)(le);
  (0, Qg.buildVariableAction)(le);
  (0, Zg.build)(le);
  var tm = le.buildRuntime();
});
var Sl = O((Xs) => {
  "use strict";
  Object.defineProperty(Xs, "__esModule", { value: !0 });
  Object.defineProperty(Xs, "plugin", {
    enumerable: !0,
    get: function () {
      return nm.plugin;
    },
  });
  var nm = bl();
});
var El = ti(oo()),
  wl = ti(Sl());
async function rm() {
  try {
    let n = await El.IX3.init({ doc: document, win: window });
    return (
      await n.registerPlugin(wl.plugin),
      { register: (e, t) => n.register(e, t), destroy: () => n.destroy() }
    );
  } catch (n) {
    throw (console.error("[Devlink IX3] Engine initialization failed:", n), n);
  }
}
var $y = { createIX3Engine: rm };
export { rm as createIX3Engine, $y as default };
