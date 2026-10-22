/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

var Bl = Object.create;
var Ut = Object.defineProperty;
var jl = Object.getOwnPropertyDescriptor;
var Gl = Object.getOwnPropertyNames;
var Ul = Object.getPrototypeOf,
  $l = Object.prototype.hasOwnProperty;
var ql = (n, e, t) =>
  e in n
    ? Ut(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (n[e] = t);
var w = (n, e) => () => (e || n((e = { exports: {} }).exports, e), e.exports);
var zl = (n, e, t, r) => {
  if ((e && typeof e == "object") || typeof e == "function")
    for (let s of Gl(e))
      !$l.call(n, s) &&
        s !== t &&
        Ut(n, s, {
          get: () => e[s],
          enumerable: !(r = jl(e, s)) || r.enumerable,
        });
  return n;
};
var io = (n, e, t) => (
  (t = n != null ? Bl(Ul(n)) : {}),
  zl(
    e || !n || !n.__esModule
      ? Ut(t, "default", { value: n, enumerable: !0 })
      : t,
    n
  )
);
var ot = (n, e, t) => (ql(n, typeof e != "symbol" ? e + "" : e, t), t);
var lo = w((Yt) => {
  "use strict";
  Object.defineProperty(Yt, "__esModule", { value: !0 });
  function Hl(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Hl(Yt, {
    CORE_OPERATORS: function () {
      return zt;
    },
    DEFAULTS: function () {
      return Ht;
    },
    DEFAULT_CUSTOM_EASE: function () {
      return Ql;
    },
    EASE_DEFAULTS: function () {
      return ao;
    },
    PERCENT_CANVAS_DURATION_S: function () {
      return Xl;
    },
    RELATIONSHIP_TYPES: function () {
      return Wt;
    },
    STANDARD_TRIGGER_ALLOWED_CONTROLS: function () {
      return Zl;
    },
    TimelineControlType: function () {
      return $t;
    },
    TweenType: function () {
      return qt;
    },
    isValidControlType: function () {
      return Wl;
    },
    tweenTypeFromName: function () {
      return Yl;
    },
    tweenTypeToName: function () {
      return Kl;
    },
  });
  var $t;
  (function (n) {
    (n.STANDARD = "standard"),
      (n.SCROLL = "scroll"),
      (n.LOAD = "load"),
      (n.CONTINUOUS = "continuous");
  })($t || ($t = {}));
  function Wl(n) {
    return (
      n === "standard" || n === "scroll" || n === "load" || n === "continuous"
    );
  }
  var qt;
  (function (n) {
    (n[(n.To = 0)] = "To"),
      (n[(n.From = 1)] = "From"),
      (n[(n.FromTo = 2)] = "FromTo"),
      (n[(n.Set = 3)] = "Set");
  })(qt || (qt = {}));
  function Yl(n) {
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
  function Kl(n) {
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
  var zt;
  (function (n) {
    (n.AND = "wf:and"), (n.OR = "wf:or");
  })(zt || (zt = {}));
  var Ht;
  (function (n) {
    n[(n.DURATION = 0.5)] = "DURATION";
  })(Ht || (Ht = {}));
  var Xl = 1,
    Wt;
  (function (n) {
    (n.NONE = "none"),
      (n.WITHIN = "within"),
      (n.DIRECT_CHILD_OF = "direct-child-of"),
      (n.CONTAINS = "contains"),
      (n.DIRECT_PARENT_OF = "direct-parent-of"),
      (n.NEXT_TO = "next-to"),
      (n.NEXT_SIBLING_OF = "next-sibling-of"),
      (n.PREV_SIBLING_OF = "prev-sibling-of");
  })(Wt || (Wt = {}));
  var ao = {
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
    Ql = ao.back,
    Zl = [
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
var co = w((Kt) => {
  "use strict";
  Object.defineProperty(Kt, "__esModule", { value: !0 });
  function Jl(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Jl(Kt, {
    claimPageLevelTriggerWin: function () {
      return nc;
    },
    getPageLevelTriggerState: function () {
      return ec;
    },
    hasPageLevelTriggerWon: function () {
      return tc;
    },
    releasePageLevelTriggerFired: function () {
      return sc;
    },
    resetPageLevelTriggerState: function () {
      return rc;
    },
  });
  var Ae = new WeakMap();
  function ec(n) {
    let e = Ae.get(n);
    return (
      e || ((e = { fired: !1, won: !1, deadline: void 0 }), Ae.set(n, e)), e
    );
  }
  function tc(n) {
    return Ae.get(n)?.won === !0;
  }
  function nc(n) {
    let e = Ae.get(n);
    e && (e.won = !0);
  }
  function rc(n) {
    Ae.delete(n);
  }
  function sc(n) {
    let e = Ae.get(n);
    e && ((e.fired = !1), (e.won = !1));
  }
});
var uo = w((Qt) => {
  "use strict";
  Object.defineProperty(Qt, "__esModule", { value: !0 });
  Object.defineProperty(Qt, "RuntimeBuilder", {
    enumerable: !0,
    get: function () {
      return Xt;
    },
  });
  var Xt = class {
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
var fo = w((tn) => {
  "use strict";
  Object.defineProperty(tn, "__esModule", { value: !0 });
  function oc(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  oc(tn, {
    ConditionCategoryBuilder: function () {
      return lt;
    },
    DesignBuilder: function () {
      return en;
    },
    TargetCategoryBuilder: function () {
      return it;
    },
    TriggerCategoryBuilder: function () {
      return at;
    },
  });
  var Zt = class {
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
    Jt = class {
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
          (this.currentGroupBuilder = new Zt(this, e)),
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
    at = class {
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
    lt = class {
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
    en = class {
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
        let r = new Jt(e, t);
        return this.categories.set(e, r), r;
      }
      addTargetCategory(e, t) {
        let r = new it(e, t);
        return this.targetCategories.set(e, r), r;
      }
      addTriggerCategory(e, t) {
        let r = new at(e, t);
        return this.triggerCategories.set(e, r), r;
      }
      addConditionCategory(e, t) {
        let r = new lt(e, t);
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
        for (let [, i] of this.categories) e.push(i.getDefinition());
        let t = [];
        for (let [, i] of this.targetCategories) t.push(i.getDefinition());
        let r = [];
        for (let [, i] of this.triggerCategories) r.push(i.getDefinition());
        let s = [];
        for (let [, i] of this.conditionCategories) s.push(i.getDefinition());
        let o = [];
        for (let [, i] of this.actionPresets) o.push(i);
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
          actionPresets: o.length > 0 ? o : void 0,
          reducerHooks:
            this.reducerHooks.length > 0 ? [...this.reducerHooks] : void 0,
        };
      }
    };
});
var po = w((rn) => {
  "use strict";
  Object.defineProperty(rn, "__esModule", { value: !0 });
  Object.defineProperty(rn, "TransformBuilder", {
    enumerable: !0,
    get: function () {
      return nn;
    },
  });
  var nn = class {
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
          function (s, o, i) {
            return t(s, o, i);
          }
        ),
        this
      );
    }
    addTriggerTransform(e, t) {
      return (
        this.triggerTransforms.set(
          this.createExtensionKey(e),
          function (s, o, i) {
            return t(s, o, i);
          }
        ),
        this
      );
    }
    addConditionTransform(e, t) {
      return (
        this.conditionTransforms.set(
          this.createExtensionKey(e),
          function (s, o, i) {
            return t(s, o, i);
          }
        ),
        this
      );
    }
    addActionTransform(e, t) {
      return (
        this.actionTransforms.set(
          this.createExtensionKey(e),
          function (s, o, i) {
            return t(s, o, i);
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
var go = w((ho) => {
  "use strict";
  Object.defineProperty(ho, "__esModule", { value: !0 });
});
var H = w((pe) => {
  "use strict";
  Object.defineProperty(pe, "__esModule", { value: !0 });
  function ic(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  ic(pe, {
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
      return Fe.claimPageLevelTriggerWin;
    },
    getPageLevelTriggerState: function () {
      return Fe.getPageLevelTriggerState;
    },
    hasPageLevelTriggerWon: function () {
      return Fe.hasPageLevelTriggerWon;
    },
    isValidControlType: function () {
      return X.isValidControlType;
    },
    releasePageLevelTriggerFired: function () {
      return Fe.releasePageLevelTriggerFired;
    },
    resetPageLevelTriggerState: function () {
      return Fe.resetPageLevelTriggerState;
    },
    tweenTypeFromName: function () {
      return X.tweenTypeFromName;
    },
    tweenTypeToName: function () {
      return X.tweenTypeToName;
    },
  });
  var X = lo(),
    Fe = co();
  ct(uo(), pe);
  ct(fo(), pe);
  ct(po(), pe);
  ct(go(), pe);
  function ct(n, e) {
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
var ee = w((sn) => {
  "use strict";
  Object.defineProperty(sn, "__esModule", { value: !0 });
  function ac(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  ac(sn, {
    DEFAULT_ROOT_FONT_SIZE_PX: function () {
      return uc;
    },
    EASING_NAMES: function () {
      return bc;
    },
    buildCustomEaseId: function () {
      return Tc;
    },
    buildEaseContextId: function () {
      return vc;
    },
    debounce: function () {
      return mc;
    },
    defaultSplitClass: function () {
      return gc;
    },
    hasResolvableScrollUnit: function () {
      return pc;
    },
    isValidControlType: function () {
      return lc;
    },
    resolveScrollUnits: function () {
      return hc;
    },
    throttle: function () {
      return yc;
    },
    toSeconds: function () {
      return cc;
    },
  });
  var ut = H();
  function lc(n) {
    return (
      n === ut.TimelineControlType.STANDARD ||
      n === ut.TimelineControlType.SCROLL ||
      n === ut.TimelineControlType.LOAD ||
      n === ut.TimelineControlType.CONTINUOUS
    );
  }
  function cc(n) {
    return typeof n == "string" ? parseFloat(n) / 1e3 : n;
  }
  var uc = 16,
    mo = "vh|vw|rem",
    yo = "\\d+(?:\\.\\d+)?",
    fc = new RegExp(`${yo}(?:${mo})`),
    dc = new RegExp(`(${yo})(${mo})`, "g");
  function pc(n) {
    return fc.test(n);
  }
  function hc(n, e) {
    return n.replace(dc, (t, r, s) =>
      String(Math.round(parseFloat(r) * e[s] * 100) / 100)
    );
  }
  function gc(n) {
    return `gsap_split_${n}++`;
  }
  var mc = (
      n,
      e = 0,
      { leading: t = !1, trailing: r = !0, maxWait: s } = {}
    ) => {
      let o,
        i = 0,
        a,
        l,
        c = () => {
          (i = 0), (o = void 0), r && n.apply(a, l);
        };
      function u(...f) {
        (a = this), (l = f), i || ((i = performance.now()), t && n.apply(a, l));
        let d = performance.now() - i;
        if (s && d >= s) {
          clearTimeout(o), c();
          return;
        }
        clearTimeout(o), (o = setTimeout(c, e));
      }
      return (
        (u.cancel = () => {
          clearTimeout(o), (o = void 0), (i = 0);
        }),
        u
      );
    },
    yc = (n, e = 0, { leading: t = !0, trailing: r = !0, maxWait: s } = {}) => {
      let o = 0,
        i,
        a,
        l,
        c = (f) => {
          (o = f), (i = void 0), n.apply(a, l);
        };
      function u(...f) {
        let d = performance.now();
        !o && !t && (o = d);
        let p = e - (d - o);
        (a = this),
          (l = f),
          p <= 0 || (s && d - o >= s)
            ? (i && (clearTimeout(i), (i = void 0)), c(d))
            : r && !i && (i = setTimeout(() => c(performance.now()), p));
      }
      return (
        (u.cancel = () => {
          clearTimeout(i), (i = void 0), (o = 0);
        }),
        u
      );
    };
  function vc(n, e) {
    return `${n}-${e}`;
  }
  function Tc(n, e) {
    return e ? `${n}-${e}` : n;
  }
  var bc = [
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
var vo = w((on) => {
  "use strict";
  Object.defineProperty(on, "__esModule", { value: !0 });
  Object.defineProperty(on, "EventManager", {
    enumerable: !0,
    get: function () {
      return ft;
    },
  });
  var De = ee(),
    _e = class {
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
        return _e.instance || (_e.instance = new _e()), _e.instance;
      }
      addEventListener(e, t, r, s) {
        try {
          let o = s?.kind === "custom",
            i = {
              ...(o ? { delegate: !1, passive: !0, batch: !1 } : Ec[t] || {}),
              ...s,
              errorHandler: s?.errorHandler || this.defaultErrorHandler,
            };
          if (!o && t === "load" && "complete" in e && e.complete)
            return (
              setTimeout(() => {
                try {
                  r(new Event("load"), e);
                } catch (u) {
                  i.errorHandler?.(u, new Event("load"));
                }
              }, 0),
              () => {}
            );
          if (!e || !e.addEventListener)
            throw new Error("Invalid element provided to addEventListener");
          let a = this.createWrappedHandler(r, i, e),
            l = this.registerHandler(e, t, r, a.handler, i, o, a.cleanup);
          if (o)
            return () => {
              this.removeHandler(e, t, r, !0), l.cleanup?.();
            };
          let c = new AbortController();
          return (
            i.delegate
              ? this.ensureDelegatedHandler(t)
              : (Sc(i) || e).addEventListener(t, l.wrappedHandler, {
                  passive: i.passive,
                  capture: i.capture,
                  signal: c.signal,
                }),
            () => {
              c.abort(), this.removeHandler(e, t, r, !1);
            }
          );
        } catch (o) {
          return s?.errorHandler?.(o, new Event(t)), () => {};
        }
      }
      emit(e, t, r, s) {
        try {
          let o = this.customEventTypes.get(e);
          if (!o?.size) return;
          let i = new CustomEvent(e, {
            detail: t,
            bubbles: s?.bubbles ?? !0,
            cancelable: !0,
          });
          for (let a of o)
            if (!r || r === a.element || a.element.contains(r))
              try {
                a.wrappedHandler(i);
              } catch (l) {
                console.error(`[EventManager] Error emitting ${e}:`, l);
              }
        } catch (o) {
          console.error(`[EventManager] Error emitting custom event ${e}:`, o);
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
        let s = (o) => {
          try {
            let i =
              t.target === "window"
                ? window
                : t.target === "document"
                ? document
                : r;
            e(o, i);
          } catch (i) {
            (t.errorHandler || this.defaultErrorHandler)(i, o);
          }
        };
        if (t.batch) {
          let o = (i) => {
            let a = i.type || "unknown";
            this.batchedEvents.has(a) || this.batchedEvents.set(a, []),
              this.batchedEvents
                .get(a)
                .push({
                  event: i,
                  target: r,
                  timestamp: i.timeStamp || performance.now(),
                }),
              this.batchFrameId == null &&
                (this.batchFrameId = requestAnimationFrame(() =>
                  this.processBatchedEvents()
                ));
          };
          if (t.throttleMs && t.throttleMs > 0) {
            let i = (0, De.throttle)(s, t.throttleMs);
            return { handler: o, cleanup: i.cancel };
          }
          if (t.debounceMs && t.debounceMs > 0) {
            let i = (0, De.debounce)(s, t.debounceMs);
            return { handler: o, cleanup: i.cancel };
          }
          return { handler: o };
        }
        if (t.throttleMs && t.throttleMs > 0) {
          let o = (0, De.throttle)(s, t.throttleMs);
          if (t.debounceMs && t.debounceMs > 0) {
            let i = (0, De.debounce)(o, t.debounceMs);
            return {
              handler: i,
              cleanup: () => {
                i.cancel?.(), o.cancel?.();
              },
            };
          }
          return { handler: o, cleanup: o.cancel };
        }
        if (t.debounceMs && t.debounceMs > 0) {
          let o = (0, De.debounce)(s, t.debounceMs);
          return { handler: o, cleanup: o.cancel };
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
          let o = r.filter((a) => e - a.timestamp < this.defaultMaxBatchAge);
          if (!o.length) continue;
          o.sort((a, l) => a.timestamp - l.timestamp);
          let i =
            o.length <= this.defaultMaxBatchSize
              ? o
              : o.slice(-this.defaultMaxBatchSize);
          for (let { event: a, target: l } of i) {
            let c = a;
            (c.batchTimestamp = e), (c.batchSize = i.length);
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
          r = (o) => {
            let i = this.eventTypeHandlers.get(e);
            if (!i?.size) return;
            let a = o.composedPath
              ? o.composedPath()
              : o.target
              ? [o.target]
              : [];
            for (let l of a)
              if (l instanceof Element) {
                for (let c of i) {
                  if (!c.config.delegate) continue;
                  if (c.element === l || c.element.contains(l))
                    try {
                      c.wrappedHandler(o);
                    } catch (f) {
                      console.error(`[EventDelegator] Error for ${e}:`, f);
                    }
                }
                if (!o.bubbles) break;
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
      registerHandler(e, t, r, s, o, i, a) {
        let l = {
          element: e,
          originalHandler: r,
          wrappedHandler: s,
          config: o,
          cleanup: a,
        };
        if (i) {
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
          let o = this.customEventTypes.get(t);
          if (!o?.size) return;
          for (let i of o)
            if (i.element === e && i.originalHandler === r) {
              o.delete(i),
                o.size || this.customEventTypes.delete(t),
                i.cleanup?.();
              break;
            }
        } else {
          let o = this.eventTypeHandlers.get(t);
          if (!o?.size) return;
          let i = this.elementHandlers.get(e);
          if (!i?.size) return;
          let a;
          for (let l of i)
            if (l.originalHandler === r) {
              a = l;
              break;
            }
          if (a) {
            if ((i.delete(a), o.delete(a), !o.size)) {
              this.eventTypeHandlers.delete(t);
              let l = this.delegatedHandlers.get(t);
              l && (l.controller.abort(), this.delegatedHandlers.delete(t));
            }
            a.cleanup?.();
          }
        }
      }
    },
    ft = _e;
  ot(ft, "instance");
  function Sc(n) {
    return n.target === "window"
      ? window
      : n.target === "document"
      ? document
      : null;
  }
  var Ec = {
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
var To = w((ln) => {
  "use strict";
  Object.defineProperty(ln, "__esModule", { value: !0 });
  Object.defineProperty(ln, "PluginRuntimeBridge", {
    enumerable: !0,
    get: function () {
      return an;
    },
  });
  var an = class {
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
        for (let o of s.values())
          for (let i of o.slice())
            if (!(i.element && r && i.element !== r))
              try {
                i.cb(t);
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
      let o = this.channelSubscribers.get(t);
      o || ((o = new Map()), this.channelSubscribers.set(t, o));
      let i = o.get(e) ?? [],
        a = { element: r, cb: s };
      return (
        i.push(a),
        o.set(e, i),
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
var bo = w((un) => {
  "use strict";
  Object.defineProperty(un, "__esModule", { value: !0 });
  Object.defineProperty(un, "RuntimeMotionDriver", {
    enumerable: !0,
    get: function () {
      return cn;
    },
  });
  var cn = class {
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
        o = !0,
        i = () => {
          o && (e(), o && (s = r.requestAnimationFrame(i)));
        };
      return (
        (s = r.requestAnimationFrame(i)),
        () => {
          (o = !1), r.cancelAnimationFrame(s);
        }
      );
    }
    createObserver(...e) {
      return this.env.win.Observer?.create(...e) ?? null;
    }
  };
});
var hn = w((pn) => {
  "use strict";
  Object.defineProperty(pn, "__esModule", { value: !0 });
  function wc(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  wc(pn, {
    analyzeSharedTimelineGroups: function () {
      return _c;
    },
    triggerEmitsCallbackRole: function () {
      return Hc;
    },
    triggerRoutesByCallbackRole: function () {
      return Ve;
    },
  });
  var fn = H(),
    Oc = 10,
    Ac = new Set(["wf:popover"]);
  function _c(n, e, t, r, s, o) {
    let i = n.timelineIds ?? [];
    if (i.length < 2) return [];
    let a = !0,
      l = !1,
      c = 0,
      u = 0;
    for (let E of n.triggers) {
      let [v, S, _] = E;
      if (S?.controlType === fn.TimelineControlType.CONTINUOUS) return [];
      if (
        (S?.controlType !== void 0 &&
          S.controlType !== fn.TimelineControlType.STANDARD &&
          (a = !1),
        Gc(v, S) && (l = !0),
        jc(v, S))
      )
        return [];
      if (Ve(v, S)) {
        let O = _ ? new Set(t(_, { trigger: E }, n)).size : 0;
        (u += O), O > 0 && c++;
      }
    }
    let f =
        a && n.triggers.some(([E]) => Ac.has(E))
          ? Rc(
              i,
              e,
              r,
              (E) => t(E, {}, n),
              s ? (E) => s(E, n) : void 0,
              u > 1,
              o
            )
          : void 0,
      d = f ? [f] : [],
      p = new Set(f?.members);
    if (
      i.some((E) => {
        let v = e.get(E),
          S = v?.settings?.control;
        return v?.triggerMetadata?.role != null && S != null && Vc.has(S);
      })
    )
      return [];
    if (l) return d;
    if (c > 1) return [];
    let h = u > 1;
    if (Wc(n.triggers, t, n)) return d;
    let g = [],
      y = new Map();
    for (let E of i) {
      if (p.has(E)) continue;
      let v = e.get(E);
      if (!v || v.reuse || !v.actions?.length || Kc(v, r)) continue;
      if (s?.(v, n)) {
        let _ = v.triggerMetadata?.role ? Pc(v, o) : void 0;
        if (_ !== void 0) {
          let O = y.get(_);
          O ? O.push(E) : y.set(_, [E]);
        }
        continue;
      }
      if (h) continue;
      let S = new Set();
      for (let _ of v.actions)
        if (_.targets)
          for (let O of _.targets) for (let I of t(O, {}, n)) S.add(I);
      g.push({ id: E, targets: S });
    }
    let T = [],
      b = (E) => {
        let v = E;
        for (let S = 0; S <= Oc; S++) {
          let _ = e.get(v)?.reuse?.sourceTimelineId;
          if (!_) return v;
          v = _;
        }
        return v;
      },
      m = (E, v) => {
        let S = new Set(E),
          _ = new Set(),
          O = new Set(),
          I = (R) => {
            let k = R?.groupId;
            if (k != null) {
              if (_.has(k)) return !1;
              _.add(k);
            }
            let L = R?.triggerMetadata?.role;
            if (L != null) {
              if (O.has(L)) return !1;
              O.add(L);
            }
            return !0;
          };
        for (let R of E) if (!I(e.get(R))) return;
        for (let R of i) {
          if (S.has(R)) continue;
          let k = e.get(R);
          if (k?.reuse && S.has(b(R)) && !I(k)) return;
        }
        if (Eo(E, e, (R) => t(R, {}, n), v)) return;
        let x = new Map(E.map((R) => [R, kc(e.get(R), r, v)])),
          M = new Map();
        for (let R of i) for (let [k, L] of x.get(R) ?? []) M.set(k, L);
        if (M.size > 0) {
          let R = E.find((L) => {
            let G = x.get(L);
            if (G.size !== M.size) return !1;
            for (let [V, K] of G) if (M.get(V) !== K) return !1;
            return !0;
          });
          if (!R) return;
          let k = E.indexOf(R);
          if (k > 0) {
            let [L] = E.splice(k, 1);
            E.unshift(L);
          }
        }
        T.push({ primary: E[0], members: E });
      },
      A = new Set();
    for (let E = 0; E < g.length; E++) {
      if (A.has(E)) continue;
      let v = [g[E].id],
        S = new Set(g[E].targets);
      A.add(E);
      let _ = !0;
      for (; _; ) {
        _ = !1;
        for (let O = E + 1; O < g.length; O++)
          if (!A.has(O) && Ao(S, g[O].targets)) {
            v.push(g[O].id);
            for (let I of g[O].targets) S.add(I);
            A.add(O), (_ = !0);
          }
      }
      v.length >= 2 && m(v);
    }
    for (let [E, v] of y) v.length >= 2 && m(v, E);
    return [...d, ...T];
  }
  function Rc(n, e, t, r, s, o = !1, i) {
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
    if (a.length < 2 || Eo(a, e, r, void 0, i)) return;
    let c = Ic(a, e, t, s);
    if (o) {
      let u = e.get(c.primary);
      if (!u || s?.(u) !== !0) return;
    }
    return c;
  }
  function Ic(n, e, t, r) {
    let s = (a) => Cc(e.get(a), t),
      o = (a) => {
        let l = e.get(a);
        return l != null && r?.(l) === !0;
      },
      i = r ? n.findIndex((a) => o(a) && s(a)) : -1;
    if (
      (i < 0 && r && (i = n.findIndex(o)), i < 0 && (i = n.findIndex(s)), i > 0)
    ) {
      let [a] = n.splice(i, 1);
      n.unshift(a);
    }
    return { primary: n[0], members: n };
  }
  function Cc(n, e) {
    if (!n?.actions) return !1;
    let t = new Map();
    for (let r of n.actions) {
      if (!r) continue;
      let s = r.tt ?? 0,
        o = r.splitText
          ? typeof r.splitText == "string"
            ? r.splitText
            : r.splitText.type
          : "none",
        i =
          o === "none"
            ? JSON.stringify(r.targets)
            : `${JSON.stringify(r.targets)}_split_${o}`,
        a = t.get(i) ?? new Set();
      t.set(i, a);
      let l = !1;
      for (let c of Object.values(r.properties ?? {}))
        for (let u of Object.keys(c || {})) a.has(u) ? (l = !0) : a.add(u);
      if ((s === 1 || s === 2) && !l && Mc(r, e)) return !0;
    }
    return !1;
  }
  function Mc(n, e) {
    for (let t in n.properties) {
      let r = e(t),
        s = n.properties[t];
      if (!(!r?.createTweenConfig || !s))
        try {
          let o = r.createTweenConfig(s);
          if (Object.keys(o.from ?? {}).length > 0) return !0;
        } catch {}
    }
    return !1;
  }
  function Pc(n, e) {
    if (!e || !n.actions?.length) return;
    let t;
    for (let r of n.actions) {
      if (!r.targets?.length) return;
      for (let s of r.targets) {
        let o = e(s);
        if (o === void 0) return;
        if (t === void 0) t = o;
        else if (t !== o) return;
      }
    }
    return t;
  }
  function Eo(n, e, t, r, s) {
    let o = new Map();
    for (let i of n)
      for (let [a, l] of xc(e.get(i), t, r, s)) {
        let c = o.get(a);
        if (c !== void 0 && c !== l) return !0;
        o.set(a, l);
      }
    return !1;
  }
  function xc(n, e, t, r) {
    let s = [];
    for (let o of n?.actions ?? []) {
      if (!o?.splitText) continue;
      let i = typeof o.splitText == "string" ? void 0 : o.splitText.mask,
        a = i ? `mask_${i}` : "none";
      if (t !== void 0) {
        s.push([t, a]);
        continue;
      }
      for (let l of o.targets ?? []) {
        let c = e(l);
        if (c.length === 0) s.push([r?.(l) ?? JSON.stringify(l), a]);
        else for (let u of c) s.push([u, a]);
      }
    }
    return s;
  }
  function kc(n, e, t) {
    let r = new Map();
    if (!n?.actions) return r;
    let s = new Map();
    for (let o of n.actions) {
      if (!o) continue;
      let i = o.tt ?? 0,
        a = o.splitText
          ? typeof o.splitText == "string"
            ? o.splitText
            : o.splitText.type
          : "none",
        l = a === "none" ? "" : `_split_${a}`,
        c = JSON.stringify(o.targets) + l,
        u =
          o.splitText && typeof o.splitText != "string"
            ? o.splitText.mask
            : void 0,
        f = u ? `_mask_${u}` : "",
        d = s.get(c) ?? new Set();
      s.set(c, d);
      let p = !1;
      for (let h of Object.values(o.properties ?? {}))
        for (let g of Object.keys(h || {})) d.has(g) ? (p = !0) : d.add(g);
      if ((i === 1 || i === 2) && !p) {
        let h = (t === void 0 ? c : t + l) + f;
        for (let [g, y] of Nc(o, e)) r.set(`${h} ${g}`, y);
      }
    }
    return r;
  }
  function Nc(n, e) {
    let t = [];
    for (let r in n.properties) {
      let s = e(r),
        o = n.properties[r];
      if (!(!s?.createTweenConfig || !o))
        try {
          let i = s.createTweenConfig(o);
          for (let [a, l] of Object.entries(i.from ?? {}))
            t.push([a, Fc(l, o)]);
        } catch {}
    }
    return t;
  }
  var Lc = 0;
  function Fc(n, e) {
    if (typeof n == "number" && Number.isNaN(n))
      return `NaN(${JSON.stringify(e) ?? ""})`;
    if (typeof n == "function") {
      let { legacyExpression: t } = n;
      return typeof t == "string" ? `fn(${t})` : `fn#${Lc++}`;
    }
    return JSON.stringify(n) ?? "undefined";
  }
  var Dc = new Set(["resume", "reverse", "reverseFlipEase", "pause", "stop"]),
    Vc = new Set(["resume", "pause", "stop"]),
    Bc = new Set(["togglePlayReverse", "togglePlayReverseFlipEase"]);
  function jc(n, e) {
    if (!e) return !1;
    let t = Ve(n, e),
      r = (i) => !!(i && (Dc.has(i) || (!t && Bc.has(i))));
    if (r(e.control)) return !0;
    let { ifTrue: s, ifFalse: o } = e.conditionalLogic ?? {};
    return r(s?.control) || r(o?.control);
  }
  function Gc(n, e) {
    return !e ||
      (e.controlType !== void 0 &&
        e.controlType !== fn.TimelineControlType.STANDARD)
      ? !0
      : !(
          (e.assignedGroupId !== void 0 && e.assignedGroupId !== "") ||
          e.assignedTimelineRole ||
          Ve(n, e)
        );
  }
  function Uc(n, e) {
    return (
      n === dn && typeof e == "object" && e !== null && e.multiTimeline === !0
    );
  }
  var dn = "wf:hover",
    wo = new Set(["wf:navbar", "wf:dropdown", "wf:popover"]),
    So = new Set(["wf:focus", "wf:blur"]),
    $c = new Map([
      [dn, new Set(["mouseEnter", "mouseLeave"])],
      ["wf:navbar", new Set(["open", "close"])],
      ["wf:dropdown", new Set(["open", "close"])],
      ["wf:popover", new Set(["open", "close"])],
    ]);
  function Ve(n, e) {
    return wo.has(n) || Uc(n, e?.pluginConfig);
  }
  function qc(n) {
    return typeof n?.assignedGroupId == "string" && n.assignedGroupId !== ""
      ? n.assignedGroupId
      : void 0;
  }
  function zc(n) {
    let e = qc(n);
    return e !== void 0
      ? `group:${e}`
      : n?.assignedTimelineRole
      ? `role:${n.assignedTimelineRole}`
      : void 0;
  }
  function Oo(n, e) {
    if (n !== dn) return;
    let t = e?.pluginConfig;
    if (typeof t == "object" && t !== null) {
      let r = t.eventMode;
      return r === "enter" || r === "leave" ? r : void 0;
    }
  }
  function Hc(n, e, t) {
    if ($c.get(n)?.has(t) === !1) return !1;
    if (wo.has(n)) {
      let s = e?.pluginConfig,
        o = typeof s == "object" && s !== null ? s.event : void 0;
      return o === "open" || o === "close" ? t === o : !0;
    }
    let r = Oo(n, e);
    return r === "enter"
      ? t !== "mouseLeave"
      : r === "leave"
      ? t !== "mouseEnter"
      : !0;
  }
  function Wc(n, e, t) {
    let r = [];
    for (let s of n) {
      let [o, i, a] = s,
        l = Ve(o, i) ? `callback:${r.length}` : zc(i);
      l !== void 0 &&
        r.push({
          route: l,
          key: o,
          eventMode: Oo(o, i),
          reactive: i.conditionalLogic != null,
          elements: a ? new Set(e(a, { trigger: s }, t)) : new Set(),
        });
    }
    for (let s = 0; s < r.length; s++)
      for (let o = s + 1; o < r.length; o++) {
        if (r[s].route === r[o].route) continue;
        let i = r[s].eventMode,
          a = r[o].eventMode,
          l = Ao(r[s].elements, r[o].elements),
          c = i !== void 0 && a !== void 0,
          u = r[s].reactive || r[o].reactive,
          f = r[s].reactive && r[o].reactive,
          d = r[s].key !== r[o].key && So.has(r[s].key) && So.has(r[o].key);
        if (l) {
          if (!(c && i !== a && !u)) return !0;
        } else if (c || d || f || Yc(r[s].elements, r[o].elements)) return !0;
      }
    return !1;
  }
  function Ao(n, e) {
    let [t, r] = n.size <= e.size ? [n, e] : [e, n];
    for (let s of t) if (r.has(s)) return !0;
    return !1;
  }
  function Yc(n, e) {
    for (let t of n)
      for (let r of e)
        if (t !== r && (t.contains(r) || r.contains(t))) return !0;
    return !1;
  }
  function Kc(n, e) {
    for (let t of n.actions ?? [])
      for (let r in t.properties) if (e(r)?.createCustomTween) return !0;
    return !1;
  }
});
var Co = w((gn) => {
  "use strict";
  Object.defineProperty(gn, "__esModule", { value: !0 });
  function Xc(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Xc(gn, {
    MAX_ALIAS_DEPTH: function () {
      return Ro;
    },
    resolveSourceTimelineId: function () {
      return Io;
    },
    shouldFlipEaseForTimeline: function () {
      return Qc;
    },
  });
  var _o = hn(),
    Ro = 10;
  function Io(n, e) {
    let t = e;
    for (let r = 0; r <= Ro; r++) {
      let o = n.get(t)?.reuse?.sourceTimelineId;
      if (!o) return t;
      t = o;
    }
    return (
      console.warn(
        `IX3: Timeline reuse chain exceeded max depth for "${e}". Possible circular reference.`
      ),
      t
    );
  }
  function Qc(n, e, t, r) {
    let {
        getInteractionsForTimelines: s,
        getReuseAliasesForSource: o,
        timelineGroupsEnabled: i,
      } = r,
      a = Io(n, t),
      l = new Set([a, ...o(a)]),
      c = !1,
      u = (d) => {
        if (d === "reverseFlipEase" || d === "togglePlayReverseFlipEase")
          c = !0;
        else if (d === "reverse" || d === "togglePlayReverse") return !0;
        return !1;
      },
      f = new Map();
    if (i) for (let d of s(l)) f.set(d.id, d);
    else
      for (let d of l) {
        let p = e(d);
        p && f.set(p.id, p);
      }
    for (let d of f.values()) {
      let p = d.timelineIds ?? [];
      for (let [h, g] of d.triggers) {
        let y = g?.assignedGroupId,
          T = (0, _o.triggerRoutesByCallbackRole)(h, g);
        if (y === null && !T) continue;
        let b = g?.assignedTimelineRole,
          m =
            b != null
              ? p.filter((S) => n.get(S)?.triggerMetadata?.role === b)
              : null,
          A;
        if (T)
          A = p.filter((S) => {
            let _ = n.get(S)?.triggerMetadata?.role;
            return _ != null && (0, _o.triggerEmitsCallbackRole)(h, g, _);
          });
        else if (y != null) {
          let S = p.filter((_) => n.get(_)?.groupId === y);
          if (S.length === 0) continue;
          A = S;
        } else A = m;
        let E = (S) =>
            (S != null ? [S] : p).filter(
              (O) => (A == null || A.includes(O)) && l.has(O)
            ),
          v = g?.conditionalLogic;
        if (v) {
          for (let S of [v.ifTrue, v.ifFalse])
            if (S && E(S.targetTimelineId ?? void 0).length > 0 && u(S.control))
              return !1;
        } else
          for (let S of E()) {
            let _ = n.get(S),
              O = (i ? _?.triggerMetadata?.role != null : _?.triggerMetadata)
                ? _?.settings?.control
                : g?.control;
            if (u(O)) return !1;
          }
      }
    }
    return c;
  }
});
var Tn = w((vn) => {
  "use strict";
  Object.defineProperty(vn, "__esModule", { value: !0 });
  function Zc(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Zc(vn, {
    SplitTextManager: function () {
      return yn;
    },
    getSplitTextType: function () {
      return Mo;
    },
  });
  var mn = ee(),
    yn = class {
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
      splitForActions(e, t, r, s, o, i) {
        let a = this.analyzeSplitRequirements(e, t, r, i);
        for (let [l, { types: c, masks: u }] of a)
          this.doSplitText({ type: Jc(c), mask: eu(u) }, [l], s, o);
      }
      analyzeSplitRequirements(e, t, r, s) {
        let o = new Map();
        for (let i of e) {
          let a = Mo(i);
          if (a === "none") continue;
          let l = typeof i.splitText == "object" ? i.splitText.mask : void 0;
          for (let c of this.collectTargets(i, t, r, s)) {
            if (c === document.body) continue;
            let u = o.get(c) || { types: new Set(), masks: new Set() };
            o.set(c, u), u.types.add(a), l && u.masks.add(l);
          }
        }
        return o;
      }
      doSplitText(e, t, r, s) {
        try {
          let o = dt(e.type);
          for (let i of t) {
            let a = this.globalSplitRegistry.get(i);
            if (a) {
              let p = new Set(dt(a.splitTextConfig.type));
              if (o.every((g) => p.has(g))) {
                (a.owner = r),
                  p.has("lines") &&
                    (this.onSplitReused(r), (r.timeline.data.splitLines = !0));
                continue;
              }
              a.splitInstance.revert(),
                this.globalSplitRegistry.delete(i),
                (e = {
                  type: [...new Set([...p, ...o])].join(", "),
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
              u = dt(e.type),
              { mask: f } = e;
            if (u.includes("lines")) {
              (r.timeline.data.splitLines = !0),
                (c.linesClass = (0, mn.defaultSplitClass)("line")),
                (c.autoSplit = !0);
              let p = { vars: c, width: 0 };
              i.closest("[popover]") && (l.lineSplit = p),
                (c.onSplit = (h) => {
                  (p.width = i.offsetWidth),
                    this.applySplitElementStyles(h, f),
                    this.onAutoSplit(l.owner, i);
                });
            }
            u.includes("words") &&
              (c.wordsClass = (0, mn.defaultSplitClass)("word")),
              u.includes("chars") &&
                (c.charsClass = (0, mn.defaultSplitClass)("letter")),
              f && (c.mask = f);
            let d = new s([i], c);
            this.applySplitElementStyles(d, f),
              (l.splitInstance = d),
              this.globalSplitRegistry.set(i, l),
              a && this.onSplitExtended(i);
          }
        } catch (o) {
          console.error("Error splitting text:", o);
        }
      }
      applySplitElementStyles(e, t) {
        let r = [
          [e.lines, "block"],
          [e.words, "inline-block"],
          [e.chars, "inline-block"],
        ];
        t && r.push([e.masks, t === "lines" ? "block" : "inline-block"]);
        for (let [s, o] of r)
          for (let i of s) {
            let { style: a } = i;
            (a.position = "relative"), (a.display = o);
          }
      }
      getSplitElements(e, t) {
        let r = [];
        for (let s of e) {
          let o = this.globalSplitRegistry.get(s);
          if (o && dt(o.splitTextConfig.type).includes(t)) {
            let a = o.splitInstance[t];
            a?.length && r.push(...a);
          }
        }
        return r.length > 0 ? r : e;
      }
      refreshLineSplits(e) {
        for (let [t, { splitInstance: r, lineSplit: s }] of this
          .globalSplitRegistry) {
          if (!s || !e.has(t)) continue;
          let o = t.offsetWidth;
          o && o !== s.width && r.split(s.vars);
        }
      }
      revertAll() {
        for (let [, e] of this.globalSplitRegistry) e.splitInstance.revert();
        this.globalSplitRegistry.clear();
      }
    };
  function Jc(n) {
    return (
      n.has("chars") && !n.has("words") && (n = new Set([...n, "words"])),
      ["lines", "words", "chars"].filter((r) => n.has(r)).join(", ")
    );
  }
  function eu(n) {
    if (n.size !== 0) {
      if (n.has("lines")) return "lines";
      if (n.has("words")) return "words";
      if (n.has("chars")) return "chars";
    }
  }
  function Mo(n) {
    return n.splitText
      ? typeof n.splitText == "string"
        ? n.splitText
        : n.splitText.type
      : "none";
  }
  function dt(n) {
    return n.split(", ");
  }
});
var Sn = w((bn) => {
  "use strict";
  Object.defineProperty(bn, "__esModule", { value: !0 });
  function tu(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  tu(bn, {
    convertEaseConfigToGSAP: function () {
      return xo;
    },
    convertEaseConfigToLinear: function () {
      return ru;
    },
    isAdvancedEase: function () {
      return su;
    },
    isBasicEase: function () {
      return ou;
    },
  });
  var Be = ee();
  function Po() {
    return {
      gsap: window.gsap,
      CustomEase: window.CustomEase,
      CustomWiggle: window.CustomWiggle,
      CustomBounce: window.CustomBounce,
    };
  }
  function xo(n, e = Po(), t) {
    return n == null
      ? "none"
      : typeof n == "number"
      ? Be.EASING_NAMES[n] || "none"
      : nu(n, e, t);
  }
  function nu(n, e, t) {
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
          strength: o,
          taper: i,
          randomizePoints: a,
          clampPoints: l,
        } = n;
        return `rough({ template: ${r}, strength: ${o}, points: ${s}, taper: ${i}, randomize: ${a}, clamp: ${l} })`;
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
  function ru(n, e = Po(), t = 20) {
    if (n == null) return "linear";
    let r = xo(n, e);
    if (r === null) return "linear";
    if (typeof n == "object" && n.type === "steps")
      return `steps(${n.stepCount})`;
    let { gsap: s } = e;
    if (!s) return "linear";
    let o = s.parseEase(r);
    if (typeof o != "function") return "linear";
    let i = [];
    for (let a = 0; a <= t; a++) {
      let l = a / t,
        c = o(l);
      i.push({ t: Number(l.toFixed(4)), value: Number(c.toFixed(4)) });
    }
    return (
      "linear(" +
      i.map((a) => `${a.value} ${Math.round(a.t * 100)}%`).join(", ") +
      ")"
    );
  }
  function su(n) {
    return typeof n == "object" && n !== null;
  }
  function ou(n) {
    return typeof n == "number";
  }
});
var On = w((wn) => {
  "use strict";
  Object.defineProperty(wn, "__esModule", { value: !0 });
  function iu(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  iu(wn, {
    applyEase: function () {
      return En;
    },
    configHasVolatileValue: function () {
      return lu;
    },
    convertToGsapDefaults: function () {
      return cu;
    },
    getStaggerConfig: function () {
      return No;
    },
    isVolatileGsapValue: function () {
      return ko;
    },
  });
  var he = ee(),
    au = Sn();
  function ko(n) {
    return (
      typeof n == "function" ||
      (typeof n == "string" &&
        (n.startsWith("+=") || n.startsWith("-=") || n.startsWith("random(")))
    );
  }
  function lu(n) {
    for (let e of [n.to, n.from])
      if (e) {
        for (let t in e) if (ko(e[t])) return !0;
      }
    return !1;
  }
  function En(n, e, t) {
    let r = (0, au.convertEaseConfigToGSAP)(e, void 0, t);
    r != null && (n.ease = r);
  }
  var No = (n, e) => {
    if (!n) return;
    let { ease: t, amount: r, from: s, grid: o, axis: i, each: a } = n,
      l = {};
    return (
      r != null && (l.amount = (0, he.toSeconds)(r)),
      a != null && (l.each = (0, he.toSeconds)(a)),
      s != null && (l.from = s),
      o != null && (l.grid = o),
      i != null && (l.axis = i),
      t != null && En(l, t, e),
      l
    );
  };
  function cu(n, e) {
    let t = {},
      r = e ? (0, he.buildEaseContextId)(e, "defaults") : void 0,
      s = e ? (0, he.buildEaseContextId)(e, "defaults-stagger") : void 0;
    if (
      (n.duration != null && (t.duration = (0, he.toSeconds)(n.duration)),
      n.ease != null && En(t, n.ease, r),
      n.delay != null &&
        (t.delay =
          typeof n.delay == "number" ? n.delay : (0, he.toSeconds)(n.delay)),
      n.repeat != null && (t.repeat = n.repeat),
      n.repeatDelay != null &&
        (t.repeatDelay = (0, he.toSeconds)(n.repeatDelay)),
      n.stagger != null)
    ) {
      let o = No(n.stagger, s);
      o && (t.stagger = o);
    }
    return n.yoyo != null && (t.yoyo = n.yoyo), t;
  }
});
var jo = w((_n) => {
  "use strict";
  Object.defineProperty(_n, "__esModule", { value: !0 });
  Object.defineProperty(_n, "ScrollMarkerFocusManager", {
    enumerable: !0,
    get: function () {
      return An;
    },
  });
  var uu =
      ".gsap-marker-start,.gsap-marker-end,.gsap-marker-scroller-start,.gsap-marker-scroller-end",
    Vo = "wf-ix3-marker-focus",
    Bo = "wf-ix3-marker-owned",
    Lo = "wf-ix3-marker-focus-style",
    Fo = "marker-",
    fu = `.${Bo}{opacity:.4;pointer-events:auto!important;transition:opacity .15s ease;}.${Vo}{opacity:1!important;}`;
  function Do(n) {
    for (let e of Array.from(n.classList))
      if (e.startsWith(Fo)) return e.slice(Fo.length);
    return null;
  }
  var An = class {
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
        t = e.getElementById(Lo);
      if (t?.tagName === "STYLE") this.styleEl = t;
      else {
        let r = e.createElement("style");
        (r.id = Lo),
          (r.textContent = fu),
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
        t = this.env.doc.querySelectorAll(uu);
      for (let r of Array.from(t)) {
        let s = Do(r),
          o = s != null ? this.setsByStId.get(s) : void 0;
        r.classList.toggle(Bo, o != null),
          r.classList.toggle(Vo, o != null && o === e);
      }
    }
    interactionForTarget(e) {
      if (!(e instanceof Element)) return null;
      let t = Do(e);
      return t == null ? null : this.setsByStId.get(t) ?? null;
    }
    onMouseOver;
    onMouseOut;
    onClick;
    onRefresh;
  };
});
var In = w((Rn) => {
  "use strict";
  Object.defineProperty(Rn, "__esModule", { value: !0 });
  function du(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  du(Rn, {
    createSharedOutOfViewReset: function () {
      return hu;
    },
    setupOutOfViewReset: function () {
      return pu;
    },
  });
  function pu(n, e, t, r, s) {
    let o = n.outOfViewReset;
    if (!o || o === "none") return;
    let i = t.IntersectionObserver;
    if (!i) return;
    let a = n.horizontal || !1,
      l = null,
      c = new i((u) => {
        for (let f of u) {
          let d = f.boundingClientRect,
            p = a ? d.left : d.top,
            h = l;
          (l = p),
            !f.isIntersecting &&
              (Uo(d, a, t) ||
                (r.totalProgress() === 0 && r.paused()) ||
                ($o(o, p, h) && r.pause(0)));
        }
      });
    c.observe(e), s(() => c.disconnect());
  }
  function Uo(n, e, t) {
    return e
      ? n.right > 0 && n.left < t.innerWidth
      : n.bottom > 0 && n.top < t.innerHeight;
  }
  function $o(n, e, t) {
    if (n === "both") return !0;
    if (t === null) return !1;
    let r = e > t,
      s = e < t;
    return (n === "scrollingDown" && s) || (n === "scrollingUp" && r);
  }
  function hu(n, e, t) {
    let r = n.outOfViewReset;
    if (!r || r === "none") return null;
    let s = e.IntersectionObserver;
    if (!s) return null;
    let o = n.horizontal || !1,
      i = new Map(),
      a = new s((l) => {
        for (let c of l) {
          let u = c.target,
            f = i.get(u);
          if (!f) continue;
          let d = c.boundingClientRect,
            p = o ? d.left : d.top,
            h = f.lastPos;
          if (((f.lastPos = p), c.isIntersecting)) {
            f.crossAxisClipped = !1;
            continue;
          }
          let g = Uo(d, o, e);
          if (((f.crossAxisClipped = g), g)) {
            !f.timeline.paused() &&
              Go(u, f.timeline) &&
              (f.timeline.reversed() === !0
                ? f.timeline.progress() > 0 && f.timeline.progress(0)
                : f.timeline.progress() < 1 && f.timeline.progress(1));
            continue;
          }
          $o(r, p, h) &&
            (t(u),
            !(f.timeline.totalProgress() === 0 && f.timeline.paused()) &&
              f.timeline.pause(0));
        }
      });
    return {
      observe: (l, c) => {
        i.set(l, { timeline: c, lastPos: null, crossAxisClipped: !1 }),
          a.observe(l);
      },
      unobserve: (l) => {
        a.unobserve(l), i.delete(l), i.size === 0 && a.disconnect();
      },
      isCrossAxisClipped: (l) => {
        let c = i.get(l);
        return c?.crossAxisClipped === !0 && Go(l, c.timeline);
      },
    };
  }
  function Go(n, e) {
    for (let t of e.getChildren(!0, !0, !1))
      for (let r of t.targets()) {
        let s = r;
        if (s?.nodeType !== 1 || !n.contains(s)) return !1;
      }
    return !0;
  }
});
var qo = w((Cn) => {
  "use strict";
  Object.defineProperty(Cn, "__esModule", { value: !0 });
  Object.defineProperty(Cn, "wireScrollDirection", {
    enumerable: !0,
    get: function () {
      return gu;
    },
  });
  function gu(n, e, t, r, s, o = !1) {
    r && (r.pause(), r.revert({ kill: !1 }), r.clear());
    let i = (d, p) => {
        p.pause(), p.clear(), !d.isActive() && (s?.(d), d.play(0));
      },
      a = {
        down: () => {
          if (r) return i(t, r);
          o && t.progress() === 0 && t.invalidate(), t.play();
        },
        up: () => (r ? i(r, t) : t.reverse()),
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
var Pn = w((Mn) => {
  "use strict";
  Object.defineProperty(Mn, "__esModule", { value: !0 });
  function mu(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  mu(Mn, {
    createToggleActionHandlers: function () {
      return yu;
    },
    makeScrollActionHandler: function () {
      return je;
    },
  });
  function je(n, e) {
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
  function yu(n, e) {
    let [t, r, s, o] = n,
      i = {};
    return (
      t !== "none" && (i.onEnter = je(t, e)),
      r !== "none" && (i.onLeave = je(r, e)),
      s !== "none" && (i.onEnterBack = je(s, e)),
      o !== "none" && (i.onLeaveBack = je(o, e)),
      i
    );
  }
});
var Ho = w((kn) => {
  "use strict";
  Object.defineProperty(kn, "__esModule", { value: !0 });
  function vu(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  vu(kn, {
    buildGSAPConfig: function () {
      return Au;
    },
    composeScrollPosition: function () {
      return xn;
    },
    hasBatchStagger: function () {
      return Eu;
    },
  });
  var Ge = ee(),
    Tu = In(),
    bu = qo(),
    Su = Pn();
  function Eu(n) {
    return n
      ? ((0, Ge.toSeconds)(n.amount) ?? 0) > 0 ||
          ((0, Ge.toSeconds)(n.each) ?? 0) > 0
      : !1;
  }
  function wu(n) {
    let e = parseFloat(n.getComputedStyle(n.document.documentElement).fontSize);
    return {
      vh: n.innerHeight / 100,
      vw: n.innerWidth / 100,
      rem: e || Ge.DEFAULT_ROOT_FONT_SIZE_PX,
    };
  }
  function xn(n, e, t) {
    let r = (s) => (e ? `clamp(${s})` : s);
    return (0, Ge.hasResolvableScrollUnit)(n)
      ? () => r((0, Ge.resolveScrollUnits)(n, wu(t)))
      : r(n);
  }
  function zo(n, e, t) {
    return t ? `clamp(${n})` : n || e;
  }
  function Ou(n, e, t, r) {
    let s = {},
      o = (i) =>
        i && (i === document.body || (!r && i.parentElement === document.body));
    if (n.pin !== void 0) {
      if (typeof n.pin == "boolean") n.pin && !o(e) && (s.pin = n.pin);
      else {
        let i = t(n.pin, { triggerElement: e });
        i.length > 0 && !o(i[0]) && (s.pin = i[0]);
      }
      r &&
        s.pin !== void 0 &&
        ((s.anticipatePin = 0),
        (s.pinReparent = !1),
        (s.pinSpacing = n.pinSpacing !== !1));
    }
    if (n.endTrigger) {
      let i = t(n.endTrigger, { triggerElement: e });
      i.length > 0 && (s.endTrigger = i[0]);
    }
    if (n.scroller) {
      let i = t(n.scroller, { triggerElement: e });
      i.length > 0 ? (s.scroller = i[0]) : (s.scroller = window);
    }
    return s;
  }
  function Au(n, e, t, r, s, o = !1, i, a, l, c) {
    let u = n.split === !0,
      f = Ou(n, e, s, u),
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
          ? xn(n.start || "top bottom", n.clamp, i)
          : zo(n.start, "top bottom", n.clamp),
        end: u
          ? xn(n.end || "bottom top", n.clamp, i)
          : zo(n.end, "bottom top", n.clamp),
        scrub: n.scrub ?? !1,
        horizontal: n.horizontal || !1,
        toggleActions: d.join(" "),
        id: t,
        ...f,
      };
    if (p.scrub !== !1) p.animation = r;
    else {
      if (u && n.scrollDirection)
        return (0, bu.wireScrollDirection)(p, n, r, l, c, o), p;
      let h = { timeline: r, hasVolatileValues: o },
        g = (0, Su.createToggleActionHandlers)(d, h);
      Object.assign(p, g), u && (0, Tu.setupOutOfViewReset)(n, e, i, r, a);
    }
    return p;
  }
});
var Yo = w((Fn) => {
  "use strict";
  Object.defineProperty(Fn, "__esModule", { value: !0 });
  Object.defineProperty(Fn, "ScrollController", {
    enumerable: !0,
    get: function () {
      return Ln;
    },
  });
  var _u = ee(),
    Ru = jo(),
    Iu = Tn(),
    Cu = On(),
    pt = Ho(),
    Mu = In(),
    Pu = Pn(),
    Ln = class {
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
          (this.markerFocus = new Ru.ScrollMarkerFocusManager(e));
      }
      setupScrollControl(e, t, r, s, o) {
        if (typeof this.env.win.ScrollTrigger > "u") {
          console.warn("ScrollTrigger plugin is not available.");
          return;
        }
        let i = Wo(e, t, s);
        this.cleanupScrollTrigger(i);
        let a = this.host.getTimeline(e, s);
        if (!a) {
          console.warn(`Timeline ${e} not found`);
          return;
        }
        let l = o ? this.host.getTimeline(o, s) ?? void 0 : void 0,
          c = (0, pt.buildGSAPConfig)(
            r,
            s,
            i,
            a,
            this.host.resolveFn,
            this.host.getSubOrNull(e, s)?.hasVolatileValues ?? !1,
            this.env.win,
            (f) => this.addDisposer(i, f),
            l,
            l && ((f) => this.host.rebuildGroup(f === l ? o : e, s))
          ),
          u =
            c.animation === void 0 &&
            r.split === !0 &&
            r.scrollDirection !== void 0;
        u && o && l && this.host.drainGroup(o, s);
        try {
          let f = this.env.win.ScrollTrigger.create(c);
          this.scrollTriggers.set(i, f),
            r.showMarkers && this.markerFocus.register(i, t);
          let d = this.host.getSub(e, s);
          Nn(d, i);
          let p = o ? this.host.getSubOrNull(o, s) : void 0;
          p &&
            (Nn(p, i),
            p.scrollTriggerConfigs || (p.scrollTriggerConfigs = new Map())),
            d.scrollTriggerConfigs || (d.scrollTriggerConfigs = new Map()),
            u || d.scrollTriggerConfigs.set(i, c);
        } catch (f) {
          console.error("Failed to create ScrollTrigger:", f),
            this.cleanupScrollTrigger(i);
        }
      }
      setupScrollDirectionPair(e, t, r, s, o) {
        let a = this.host.timelineDefs.get(this.host.resolveAlias(t))?.actions
          ?.length
          ? t
          : void 0;
        for (let l of o) this.setupScrollControl(e, r, s, l, a);
      }
      setupScrollControls(e, t, r, s) {
        if (
          (this.maybePromoteReanchoredTimeline(e, r, s),
          this.shouldBatchScrollReveal(e, r, s))
        )
          this.setupScrollBatch(e, t, r, s);
        else for (let o of s) this.setupScrollControl(e, t, r, o);
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
          !(0, pt.hasBatchStagger)(e.stagger) ||
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
          o = new Map(),
          i = new Set(t),
          a = !1;
        for (let l of r.actions) {
          if (!l.targets?.length || (0, Iu.getSplitTextType)(l) === "lines")
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
            if (d.size !== i.size || !t.every((p) => d.has(p))) return !1;
            for (let p of t) {
              let h = this.host.resolveFn(
                c,
                { triggerElement: p, anchorFilterToTrigger: !0 },
                s
              );
              for (let g of h) {
                let y = o.get(g);
                if (y && y !== p) return !1;
                o.set(g, p);
              }
            }
          }
        }
        return a;
      }
      setupScrollBatch(e, t, r, s) {
        let o = this.env.win,
          i = o.ScrollTrigger,
          a = o.gsap;
        if (typeof i?.batch != "function" || !a) {
          for (let v of s) this.setupScrollControl(e, t, r, v);
          return;
        }
        i.register?.(a);
        let l = (0, Cu.getStaggerConfig)(
            r.stagger,
            (0, _u.buildEaseContextId)(`${e}-${t}-batch`, "stagger")
          ),
          [c, u, f, d] = [
            r.enter || "none",
            r.leave || "none",
            r.enterBack || "none",
            r.leaveBack || "none",
          ],
          p = new Map(),
          h = new Map(),
          g = (v) => {
            h.get(v)?.kill(), h.delete(v);
          },
          y = new Set(),
          T = (0, Mu.createSharedOutOfViewReset)(r, o, g);
        for (let v of s) {
          let S = Wo(e, t, v);
          this.cleanupScrollTrigger(S), p.set(v, S);
          let _ = this.host.getTimeline(e, v);
          this.addDisposer(S, () => {
            y.add(v), g(v);
          }),
            _ &&
              T &&
              (T.observe(v, _), this.addDisposer(S, () => T.unobserve(v)));
        }
        let b = (v, S) => {
            if (S === "none") return;
            let _ = this.host.getTimeline(e, v);
            if (!_) return;
            let O = this.host.getSubOrNull(e, v)?.hasVolatileValues ?? !1;
            (0, Pu.makeScrollActionHandler)(S, {
              timeline: _,
              hasVolatileValues: O,
            })();
          },
          m = (v) => {
            let S = this.host.getTimeline(e, v);
            !S ||
              S.progress() >= 1 ||
              (S.reversed() && S.reversed(!1), b(v, "complete"));
          },
          A = (v, S, _ = !1) => {
            let O = v.filter((R) => !y.has(R));
            if (O.length === 0) return;
            let I = [],
              x = 1 / 0,
              M = l ? a.utils.distribute(l) : void 0;
            O.forEach((R, k) => {
              if ((g(R), S === "none")) return;
              if (_ && S === "play" && T?.isCrossAxisClipped(R)) {
                m(R);
                return;
              }
              let L = M ? M(k, R, O) : 0;
              L < x && (x = L), I.push({ el: R, offset: L });
            });
            for (let { el: R, offset: k } of I) {
              let L = k - x;
              if (L > 0) {
                let G = a.delayedCall(L, () => {
                  if ((h.delete(R), S === "play" && T?.isCrossAxisClipped(R))) {
                    m(R);
                    return;
                  }
                  b(R, S);
                });
                h.set(R, G);
              } else b(R, S);
            }
          },
          E = {
            start: (0, pt.composeScrollPosition)(
              r.start || "top bottom",
              r.clamp,
              this.env.win
            ),
            end: (0, pt.composeScrollPosition)(
              r.end || "bottom top",
              r.clamp,
              this.env.win
            ),
            horizontal: r.horizontal || !1,
            onEnter: (v) => A(v, c, !0),
          };
        f !== "none" && (E.onEnterBack = (v) => A(v, f, !0)),
          u !== "none" && (E.onLeave = (v) => A(v, u)),
          d !== "none" && (E.onLeaveBack = (v) => A(v, d));
        try {
          let v = i.batch(s, E);
          for (let O of v) {
            let I = O.trigger;
            if (!I) continue;
            let x = p.get(I);
            if (!x) continue;
            this.scrollTriggers.set(x, O);
            let M = this.host.getSub(e, I);
            M && Nn(M, x);
          }
          let S = s[0],
            _ = S ? p.get(S) : void 0;
          if (r.showMarkers && S && _) {
            let O = `${_}_markers`,
              I = {
                trigger: S,
                start: E.start,
                end: E.end,
                horizontal: E.horizontal,
                markers: !0,
                id: O,
              },
              x = i.create(I);
            this.scrollTriggers.set(O, x),
              this.markerFocus.register(O, t),
              this.addDisposer(_, () => {
                x.kill(),
                  this.scrollTriggers.delete(O),
                  this.markerFocus.unregister(O);
              });
          }
        } catch (v) {
          console.error("Failed to create ScrollTrigger batch:", v);
          for (let S of p.values()) this.cleanupScrollTrigger(S);
        }
      }
      rebindScrollTriggers(e) {
        if (!(!e.scrollTriggerIds || !e.scrollTriggerConfigs))
          for (let t of e.scrollTriggerIds) {
            let r = this.scrollTriggers.get(t),
              s = e.scrollTriggerConfigs.get(t);
            if (r && s) {
              let o = { ...s, animation: e.timeline };
              if ((r.kill(), this.env.win.ScrollTrigger)) {
                let i = this.env.win.ScrollTrigger.create(o);
                this.scrollTriggers.set(t, i), this.markerFocus.reapplyFocus();
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
  function Wo(n, e, t) {
    return `st_${n}_${e}_${t.id || window.crypto.randomUUID().slice(0, 8)}`;
  }
  function Nn(n, e) {
    n.scrollTriggerIds || (n.scrollTriggerIds = new Set()),
      n.scrollTriggerIds.add(e);
  }
});
var Qo = w((Bn) => {
  "use strict";
  Object.defineProperty(Bn, "__esModule", { value: !0 });
  Object.defineProperty(Bn, "AnimationCoordinator", {
    enumerable: !0,
    get: function () {
      return Vn;
    },
  });
  var ht = H(),
    Re = ee(),
    xu = To(),
    ku = bo(),
    Dn = Co(),
    Ko = Tn(),
    Ue = On(),
    Nu = Yo(),
    Vn = class {
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
        if (t > Dn.MAX_ALIAS_DEPTH)
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
        return (0, Dn.shouldFlipEaseForTimeline)(
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
          for (let o of r.values()) this.scheduleRebuild(o);
        }
      }
      resolveSourceTimelineId(e) {
        return (0, Dn.resolveSourceTimelineId)(this.timelineDefs, e);
      }
      splitText;
      timelineTargetsCache;
      constructor(e, t, r, s, o, i, a) {
        (this.timelineDefs = e),
          (this.getHandler = t),
          (this.getTargetResolver = r),
          (this.resolveFn = s),
          (this.getInteractionForTimeline = o),
          (this.getInteractionsForTimelines = i),
          (this.env = a),
          (this.subs = new Map()),
          (this.dynamicFlags = new Map()),
          (this.reanchoredTimelines = new Set()),
          (this.causeTriggers = new Map()),
          (this.cleanupFns = new Map()),
          (this.aliases = new Map()),
          (this.flipEaseBySource = new Map()),
          (this.pluginRuntimeBridge = new xu.PluginRuntimeBridge()),
          (this.sharedGroups = new Map()),
          (this.rewindSharedRefire = !1),
          (this.timelineGroupsEnabled = !1),
          (this.reuseAliasIndex = null),
          (this.splitText = new Ko.SplitTextManager(
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
          (this.animation = new ku.RuntimeMotionDriver(a)),
          (this.scroll = new Nu.ScrollController(a, {
            timelineDefs: e,
            resolveFn: s,
            getInteractionForTimeline: o,
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
        for (let o of t) {
          let i = this.sharedGroups.get(o);
          i && r.add(i);
        }
        if (r.size > 0) {
          for (let o of r) this.dissolveSharedGroup(o);
          return;
        }
        let s = { primary: e };
        for (let o of t)
          this.sharedGroups.set(o, s), o !== e && this.aliases.set(o, e);
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
          o = this.subs.get(e.primary);
        if (o)
          for (let [l, c] of o) {
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
        let i = [];
        for (let l of t) {
          let c = this.getInteractionForTimeline(l);
          c &&
            (this.createTimeline(l, c, { revertGlobalSplits: !1 }), i.push(l));
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
        let a = new Set(i);
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
        let o = this.sharedGroups.get(e);
        if (
          (this.destroy(e, {
            reassignSharedPrimary: !1,
            revertGlobalSplits: r?.revertGlobalSplits,
          }),
          !s)
        )
          return;
        if ((o && this.sharedGroups.set(e, o), s.reuse?.sourceTimelineId)) {
          this.aliases.set(e, s.reuse.sourceTimelineId),
            this.recomputeFlipEaseForSource(s.reuse.sourceTimelineId);
          return;
        }
        let i = this.isDynamicTimeline(s, t);
        this.dynamicFlags.set(e, i), this.reanchoredTimelines.delete(e);
        let a = new Set(),
          l = new Set(),
          c = new Map();
        for (let u of t.triggers) {
          let [, f, d] = u;
          if (d)
            for (let h of this.resolveFn(d, { trigger: u }, t))
              l.add(h), c.has(h) || c.set(h, u);
          let p = f?.controlType;
          p && (0, Re.isValidControlType)(p) && a.add(p),
            p === ht.TimelineControlType.LOAD && !c.has(null) && c.set(null, u);
        }
        if ((this.causeTriggers.set(e, c), !l.size || !i)) {
          let u = this.buildSubTimeline(e, null, a, t);
          u && this.ensureSubs(e).set(null, u);
        }
        if (l.size) {
          let u = this.ensureSubs(e);
          for (let f of l)
            if (!u.has(f)) {
              let d = i
                ? this.buildSubTimeline(e, f, a, t)
                : this.getSub(e, null);
              i && d && u.set(f, d);
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
        let o = this.timelineDefs.get(e);
        if (!o) return;
        let i = this.getSub(s.primary, t);
        if (!i) return;
        if (i.timelineId === e) {
          r && this.rewindExhausted(i);
          return;
        }
        let a = i.timelineId;
        te(i.cleanupFns);
        for (let f of [...(i.swapCleanupFns ?? [])].reverse()) f();
        i.swapCleanupFns?.clear(), te(this.cleanupFns.get(a));
        let l = i.timeline;
        l.clear(), l.progress(0);
        let c = (0, Ue.convertToGsapDefaults)(o.settings || {}, e);
        l.repeat(typeof c.repeat == "number" ? c.repeat : 0),
          l.repeatDelay(typeof c.repeatDelay == "number" ? c.repeatDelay : 0),
          l.yoyo(c.yoyo === !0);
        let u = typeof c.delay == "number" ? c.delay : 0;
        if (
          (l.delay(u),
          l.reversed(!!o.playInReverse),
          l.timeScale(
            typeof o.settings?.speed == "number" ? o.settings.speed : 1
          ),
          u > 0 && this.rewindSharedRefire && l.totalTime(-u),
          (i.timelineDef = { ...o, actions: o.actions || [] }),
          (i.timelineId = e),
          this.timelineTargetsCache.delete(i),
          this.env.win.SplitText && o.actions?.length)
        ) {
          let f = i.rebuildState;
          (i.rebuildState = "building"),
            this.splitText.splitForActions(
              o.actions,
              t,
              e,
              i,
              this.env.win.SplitText,
              i.owningInteraction
            );
          let d = i.rebuildState;
          i.rebuildState = d === "rebuild_pending" || d === "idle" ? "idle" : f;
        }
        (i.hasVolatileValues = !1), this.buildTimeline(i);
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
              getActionTweenConfig: (r, s, o) =>
                this.getActionTweenConfig(r, s, o),
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
        let o = e.properties[t] || {};
        return s.createTweenConfig(o, r);
      }
      registerCleanup(e, t, r) {
        let s = r === void 0 ? void 0 : this.getSubOrNull(e, r);
        if (s) {
          let i = s.swapCleanupFns ?? new Set();
          return (
            (s.swapCleanupFns = i),
            i.add(t),
            () => {
              i.delete(t);
            }
          );
        }
        let o = this.cleanupFns.get(e) ?? new Set();
        return (
          this.cleanupFns.set(e, o),
          o.add(t),
          () => {
            o.delete(t);
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
        for (let o of r.actions)
          this.buildTweensForAction(
            o,
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
          o = s.progress();
        this.invalidateVolatileFromStart(r),
          o === 0
            ? s.play()
            : o === 1
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
        let o = this.subs.get(e),
          i = new Set();
        if (o) {
          for (let [, a] of o)
            a.timelineId !== e && i.add(a.timelineId), this.disposeSub(a);
          (t?.revertGlobalSplits ?? !0) && this.splitText.revertAll();
        }
        te(this.cleanupFns.get(e));
        for (let a of i) te(this.cleanupFns.get(a)), this.cleanupFns.delete(a);
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
          ([, o]) => o?.controlType !== ht.TimelineControlType.LOAD
        );
        if (t.scope?.type === "component" && r) return !0;
        let s = e.actions;
        if (!s?.length) return !1;
        for (let o of s) {
          for (let i of o.targets ?? []) {
            if (this.getTargetResolver(i)?.isDynamic) return !0;
            if (i.length === 3 && i[2]) {
              let l = i[2];
              if (
                l.filterBy &&
                l.relationship !== "none" &&
                this.getTargetResolver(l.filterBy)?.isDynamic
              )
                return !0;
            }
          }
          if (r) {
            for (let i in o.properties)
              if (this.getHandler(i)?.requiresTriggerElementContext) return !0;
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
          o = this.dynamicFlags.get(r),
          i = s.get(o ? t : null);
        return (
          i || ((i = this.buildSubTimeline(r, t)), i && s.set(o ? t : null, i)),
          i
        );
      }
      getSubOrNull(e, t) {
        let r = this.resolveAlias(e),
          s = this.dynamicFlags.get(r);
        return this.subs.get(r)?.get(s ? t ?? null : null);
      }
      buildSubTimeline(e, t, r, s) {
        let o = this.timelineDefs.get(e),
          i = o?.actions,
          a = o?.settings,
          l = this.env.win.gsap;
        if (!l) return;
        let c = l.timeline({
            ...(0, Ue.convertToGsapDefaults)(a || {}, e),
            paused: !0,
            reversed: !!o?.playInReverse,
            data: { id: e, triggerEl: t || void 0 },
          }),
          u = o
            ? { ...o, actions: i || [] }
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
          i?.length &&
            (this.env.win.SplitText &&
              this.splitText.splitForActions(
                i,
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
          o = e.timelineId,
          i = new Map();
        for (let a = 0; a < t.actions.length; a++) {
          let l = t.actions[a];
          if (!l) continue;
          let c = JSON.stringify(l.targets),
            u = !0,
            f = (0, Ko.getSplitTextType)(l),
            d = f === "none" ? c : `${c}_split_${f}`,
            p = (l.tt ?? 0) !== 0;
          for (let m of Object.values(l.properties ?? {})) {
            let A = i.get(d) || new Set();
            i.set(d, A);
            for (let E of Object.keys(m || {}))
              A.has(E) ? p && (u = !1) : A.add(E);
          }
          let h = this.collectTargetGroups(l, r, o, e.owningInteraction),
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
          let y = this.collectDelegatedTargets(h, g),
            T = y ? y.plain : g,
            b = y ? g : void 0;
          (f !== "none" &&
            T.length > 0 &&
            this.env.win.SplitText &&
            ((T = this.splitText.getSplitElements(T, f)),
            (b = void 0),
            T.length === 0 && !y?.groups.length)) ||
            this.buildTweensForAction(
              l,
              T,
              s,
              o,
              u,
              void 0,
              r,
              t.triggerMetadata?.role,
              e,
              void 0,
              y?.groups,
              b
            );
        }
      }
      collectTargets(e, t, r, s) {
        return this.collectTargetGroups(e, t, r, s).flatMap((o) => o.elements);
      }
      collectTargetGroups(e, t, r, s) {
        let o = [];
        if (!e.targets) return o;
        let i = s ?? this.getInteractionForTimeline(r),
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
            i
          );
          o.push({ td: c, elements: u });
        }
        return o;
      }
      collectDelegatedTargets(e, t) {
        let r = null,
          s = new Set();
        for (let { td: i, elements: a } of e) {
          let l = this.getTargetResolver(i);
          if (l?.buildTween) {
            r ??= new Map();
            let c = r.get(l);
            c || r.set(l, (c = { resolver: l, targets: [] })),
              c.targets.push(...a);
          } else for (let c of a) s.add(c);
        }
        if (!r) return null;
        let o = new Set();
        for (let i of r.values()) for (let a of i.targets) o.add(a);
        return {
          groups: [...r.values()].filter((i) => i.targets.length > 0),
          plain: t.filter((i) => s.has(i) || !o.has(i)),
        };
      }
      buildTweensForAction(e, t, r, s, o, i, a, l, c, u, f, d) {
        let p = this.shouldFlipEaseForTimeline(s),
          h = c?.timelineDef.canvasDuration != null;
        for (let g in e.properties) {
          let y = g,
            T = this.getHandler(y);
          if (!T) continue;
          let b = e.properties[y] || {};
          try {
            let m = e.timing?.position;
            if (
              ((m =
                typeof m == "string" && m.endsWith("ms")
                  ? (0, Re.toSeconds)(m)
                  : m ?? 0),
              f?.length && typeof m == "string")
            ) {
              let O = `ix3-position-${e.id}-${g}`;
              r.addLabel(O, m), (m = O);
            }
            let A = e.timing?.duration ?? ht.DEFAULTS.DURATION,
              E = (0, Ue.getStaggerConfig)(
                e.timing?.stagger,
                (0, Re.buildEaseContextId)(e.id, "stagger")
              );
            E && A === 0 && (A = 0.001);
            let v = { id: e.id, presetId: e.presetId, color: e.color },
              S = {
                force3D: !0,
                ...(!o && { immediateRender: o }),
                data: v,
                ...(e.tt !== 3 && { duration: (0, Re.toSeconds)(A) }),
                ...(e.timing?.repeat != null && {
                  repeat: h && e.timing.repeat < 0 ? 0 : e.timing.repeat,
                }),
                ...(e.timing?.repeatDelay != null && {
                  repeatDelay: (0, Re.toSeconds)(e.timing.repeatDelay),
                }),
                ...(e.timing?.yoyo != null && { yoyo: e.timing.yoyo }),
                ...(E && { stagger: E }),
              };
            e.timing?.ease != null &&
              (0, Ue.applyEase)(
                S,
                e.timing.ease,
                (0, Re.buildEaseContextId)(e.id, "timing")
              ),
              p && (S.easeReverse = !0);
            let _ = f?.length ? d ?? t.concat(...f.map((O) => O.targets)) : t;
            if (T.createTweenConfig) {
              let O = T.createTweenConfig(b, _);
              i?.(y, e, O),
                O.modifiers &&
                  (S.modifiers = { ...S.modifiers, ...O.modifiers }),
                Xo(c, O);
              let I = Object.keys(O.from || {}).length > 0,
                x = Object.keys(O.to || {}).length > 0,
                M = e.tt ?? 0;
              if (M === 0 && !x) continue;
              if (M === 1 && !I) continue;
              if (M === 2 && !I && !x) continue;
              if (M === 3 && !x) continue;
              (f?.length && t.length === 0) ||
                (M === 1
                  ? r.from(t, { ...S, ...O.from }, m)
                  : M === 2
                  ? r.fromTo(t, { ...O.from }, { ...S, ...O.to }, m)
                  : M === 3
                  ? r.set(t, { ...S, ...O.to }, m)
                  : r.to(t, { ...S, ...O.to }, m));
              for (let R of f ?? []) {
                let k = R.resolver.buildTween({
                  timeline: r,
                  action: e,
                  tweenType: M,
                  config: O,
                  vars: { ...S },
                  targets: R.targets,
                  position: m ?? 0,
                });
                k && this.routeCleanup(k, s, c, u);
              }
            } else if (T.createCustomTween) {
              let O = T.createCustomTween(r, e, b, S, _, m || 0, {
                triggerElement: a ?? null,
                timelineRole: l,
                subscribeChannel: (I, x) =>
                  this.subscribeChannel(s, I, a ?? null, x),
                flagVolatileValues: (I) => Xo(c, I),
                animation: this.animation,
              });
              O && this.routeCleanup(O, s, c, u);
            }
          } catch (m) {
            console.error("Error building tween:", m);
          }
        }
      }
      routeCleanup(e, t, r, s) {
        if (s != null) s.add(e);
        else if (r != null) {
          let o = r.cleanupFns ?? new Set();
          (r.cleanupFns = o), o.add(e);
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
          r = e.controlTypes?.has(ht.TimelineControlType.LOAD) && t !== 1,
          s = e.timeline.isActive() || r,
          o = e.timeline.reversed() === !0;
        e.timeline.pause(),
          e.timeline.revert({ kill: !1 }),
          e.timeline.clear(),
          te(e.cleanupFns),
          this.buildTimeline(e),
          this.padTimelineToCanvas(e),
          e.timeline.totalProgress(t),
          e.scrollTriggerIds && e.scrollTriggerConfigs
            ? this.scroll.rebindScrollTriggers(e)
            : s && (o ? e.timeline.reverse() : e.timeline.play()),
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
      setupScrollControl(e, t, r, s, o) {
        this.scroll.setupScrollControl(e, t, r, s, o);
      }
      setupScrollDirectionPair(e, t, r, s, o) {
        this.scroll.setupScrollDirectionPair(e, t, r, s, o);
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
  function Xo(n, e) {
    n &&
      !n.hasVolatileValues &&
      (0, Ue.configHasVolatileValue)(e) &&
      (n.hasVolatileValues = !0);
  }
  function te(n) {
    if (n) {
      for (let e of n) e();
      n.clear();
    }
  }
});
var Zo = w((Gn) => {
  "use strict";
  Object.defineProperty(Gn, "__esModule", { value: !0 });
  Object.defineProperty(Gn, "ConditionEvaluator", {
    enumerable: !0,
    get: function () {
      return jn;
    },
  });
  var Ie = H(),
    jn = class {
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
        for (let i of e)
          this.getConditionEvaluator(i)?.isReactive ?? !1
            ? r.push(i)
            : s.push(i[0]);
        if (r.length === 0) return () => {};
        let o = r.map((i) => this.getOrCreateSharedObserver(i, t));
        return () => {
          for (let i of o) i();
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
          let [, s, o] = t,
            { conditions: i } = s || {};
          if (!Array.isArray(i)) return !1;
          if (!i.length) return !0;
          let a = e === Ie.CORE_OPERATORS.OR,
            l = o === 1;
          for (let c of i) {
            let u = await this.evaluateCondition(c, r);
            if (a ? u : !u) return a ? !l : !!l;
          }
          return a ? !!l : !l;
        },
        observe: (t, r) => {
          let [, s] = t,
            { conditions: o } = s || {};
          if (!Array.isArray(o)) return () => {};
          let i = o.map((a) =>
            this.observeCondition(a, async () =>
              r(await this.evaluateCondition(t))
            )
          );
          return () => i.forEach((a) => a && a());
        },
      });
      evaluateCondition = async (e, t) => {
        let r = this.generateConditionCacheKey(e, t),
          s = Date.now(),
          o = this.conditionCache.get(r);
        if (o && s - o.timestamp < this.CACHE_TTL) return o.result;
        let i = this.getEvaluator(e);
        if (!i)
          return (
            console.warn(`No evaluator found for condition type '${e[0]}'`), !1
          );
        try {
          let a = await i.evaluate(e, t);
          return this.conditionCache.set(r, { result: a, timestamp: s }), a;
        } catch (a) {
          return console.error("Error evaluating condition:", a), !1;
        }
      };
      generateConditionCacheKey = (e, t) => {
        let [r, s, o] = e,
          i = s ? JSON.stringify(s) : "",
          a = o ? ":negate" : "",
          l = t ? `:ctx:${t.id}` : "";
        return `${r}:${i}${a}${l}`;
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
          o = r ? JSON.stringify(r) : "";
        return `${t}:${o}${s ? ":negate" : ""}`;
      };
      getOrCreateSharedObserver = (e, t) => {
        let r = this.generateObserverKey(e),
          s = this.sharedObservers.get(r);
        if (!s) {
          let o = this.getEvaluator(e);
          if (!o?.observe) return () => {};
          let i = new Set(),
            a = o.observe(e, async () => {
              this.invalidateConditionCache(e);
              let l = Array.from(i, async (c) => {
                try {
                  await c();
                } catch (u) {
                  console.error("Error in shared observer callback:", u);
                }
              });
              await Promise.allSettled(l);
            });
          if (!a) return () => {};
          (s = { cleanup: a, refCount: 0, callbacks: i }),
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
          } catch (o) {
            console.error("Error cleaning up shared observer:", o);
          }
          this.sharedObservers.delete(e);
        }
      };
    };
});
var Jo = w(($n) => {
  "use strict";
  Object.defineProperty($n, "__esModule", { value: !0 });
  Object.defineProperty($n, "ConditionalPlaybackManager", {
    enumerable: !0,
    get: function () {
      return Un;
    },
  });
  var Lu = H(),
    Un = class {
      matchMediaInstances = new Map();
      setupConditionalContext = (e, t, r) => {
        let { conditionalPlayback: s, triggers: o, id: i } = e;
        if (!s || s.length === 0) {
          t(null);
          return;
        }
        this.cleanup(i);
        let a = window.gsap?.matchMedia();
        if (!a) {
          t(null);
          return;
        }
        this.matchMediaInstances.set(i, a);
        let l = !0,
          c = o.some(
            ([, { controlType: u }]) => u === Lu.TimelineControlType.LOAD
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
              (r.breakpoints || []).forEach((o) => {
                let i = Fu[o];
                i && (t[`breakpoint_${o}`] = i);
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
        for (let i of t)
          i.type === "prefers-reduced-motion" &&
            e.prefersReduced &&
            r.push({ condition: i, type: "prefers-reduced-motion" }),
            i.type === "breakpoint" &&
              (i.breakpoints || []).some((c) => e[`breakpoint_${c}`]) &&
              r.push({ condition: i, type: "breakpoint" });
        if (r.length === 0) return null;
        let s = r.find(({ condition: i }) => i.behavior === "dont-animate");
        if (s)
          return {
            behavior: "dont-animate",
            matchedConditions: {
              prefersReduced: s.type === "prefers-reduced-motion",
              breakpointMatched: s.type === "breakpoint",
            },
          };
        let o = r[0];
        return {
          behavior: o.condition.behavior,
          matchedConditions: {
            prefersReduced: o.type === "prefers-reduced-motion",
            breakpointMatched: o.type === "breakpoint",
          },
        };
      }
    },
    Fu = {
      tiny: "(max-width: 479px) and (min-width: 0px)",
      small: "(max-width: 767px) and (min-width: 480px)",
      medium: "(max-width: 991px) and (min-width: 768px)",
      main: "(min-width: 992px)",
    };
});
var ti = w((zn) => {
  "use strict";
  Object.defineProperty(zn, "__esModule", { value: !0 });
  Object.defineProperty(zn, "PluginRegistry", {
    enumerable: !0,
    get: function () {
      return qn;
    },
  });
  var qn = class {
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
      let t = ei(e.manifest.id);
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
      let r = ei([e, t]),
        s = this.plugins.get(r);
      if (s) {
        this.activePlugins.has(r) && (await this.deactivatePlugin(r));
        for (let o of s.extensions)
          o.extensionPoint === "condition" &&
            o.implementation.dispose &&
            (await o.implementation.dispose()),
            this.extensionsByPoint
              .get(o.extensionPoint)
              ?.delete(`${r}:${o.id}`);
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
  function ei(n) {
    return `${n[0]}:${n[1]}`;
  }
});
var $e = w((Wn) => {
  "use strict";
  Object.defineProperty(Wn, "__esModule", { value: !0 });
  Object.defineProperty(Wn, "BaseTriggerStrategy", {
    enumerable: !0,
    get: function () {
      return Hn;
    },
  });
  var Hn = class {
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
var ri = w((Qn) => {
  "use strict";
  Object.defineProperty(Qn, "__esModule", { value: !0 });
  Object.defineProperty(Qn, "StandardTriggerStrategy", {
    enumerable: !0,
    get: function () {
      return Xn;
    },
  });
  var Yn = H(),
    Du = $e();
  function ni(n) {
    if (!n || typeof n != "object") return !1;
    let e = n;
    return e.type === "timeline-role" && typeof e.role == "string";
  }
  function Vu(n) {
    if (!n || typeof n != "object") return !1;
    let e = n;
    return e.type === "playback-control" && typeof e.control == "string";
  }
  function Kn(n) {
    if (!n || typeof n != "object") return !1;
    let e = n;
    return e.target instanceof HTMLElement && typeof e.type != "string";
  }
  var Xn = class extends Du.BaseTriggerStrategy {
    getTimelineIdsForRole;
    resolveAssignedTimelineIds;
    notifyRoleActivationObservers;
    isInInteractionScope;
    isRoleApplied;
    constructor(e, t, r, s, o, i, a, l) {
      super(e, t, r),
        (this.getTimelineIdsForRole = s),
        (this.resolveAssignedTimelineIds = o),
        (this.notifyRoleActivationObservers = i),
        (this.isInInteractionScope = a),
        (this.isRoleApplied = l);
    }
    bind(e, t, r) {
      let {
          interactionId: s,
          elements: o,
          triggerHandler: i,
          eventManager: a,
          conditionalContext: l,
          cleanupMap: c,
          delay: u,
        } = r,
        f = e[1];
      for (let d of o) {
        if (!d) continue;
        let p = c.get(d);
        p || ((p = new Set()), c.set(d, p));
        let h = new Map(),
          g = (b) => {
            let m = b.settles;
            return (
              (b.settles = []),
              m.length
                ? () => {
                    for (let A of m)
                      try {
                        A();
                      } catch (E) {
                        console.error(
                          "Error in activation completion callback:",
                          E
                        );
                      }
                  }
                : void 0
            );
          },
          y = (b) => {
            if (b)
              try {
                b();
              } catch (m) {
                console.error("Error in activation completion callback:", m);
              }
          },
          T = i(e, d, a, (b) => {
            let m = Kn(b) ? b.target : d;
            if (m !== d && !this.isInInteractionScope(t, m)) return;
            let A = Vu(b) ? b.control : void 0,
              E = ni(b) ? b.onComplete : void 0,
              v,
              S;
            if (ni(b))
              (v = b.role), (S = this.getTimelineIdsForRole(t, b.role));
            else {
              let { assignedGroupId: I, assignedTimelineRole: x } = e[1];
              (v = I === null || I ? void 0 : x),
                (S = this.resolveAssignedTimelineIds(e, t));
            }
            let _ = () =>
              Kn(b) &&
              b.skipIfActive === !0 &&
              v !== void 0 &&
              this.isRoleApplied(t, v, e, m);
            if (Kn(b)) {
              let I =
                  b.firstWins === !0 &&
                  t.triggers.some(
                    (M) => M !== e && (0, Yn.hasPageLevelTriggerWon)(M)
                  ),
                x =
                  (S?.length === 0 && v === void 0) ||
                  l?.behavior === "dont-animate";
              if ((!I && !x && (0, Yn.claimPageLevelTriggerWin)(e), I || _())) {
                y(E);
                return;
              }
            }
            if (S?.length === 0) {
              this.runTrigger(e, m, s, S, void 0, {
                onComplete: E,
                role: v,
              }).catch((I) => {
                console.error("Error in trigger execution:", I), y(E);
              });
              return;
            }
            if (l !== null) {
              if (l.behavior === "skip-to-end") {
                let I = [],
                  x = !1,
                  M = () => {
                    x ||
                      !v ||
                      ((x = !0),
                      this.notifyRoleActivationObservers(t, v, I, e, m));
                  };
                this.skipToEndState(t, m, f, S, A, M);
                for (let R of I)
                  try {
                    R();
                  } catch (k) {
                    console.error(
                      "Error in role activation settle callback:",
                      k
                    );
                  }
              }
              y(E);
              return;
            }
            let O = (I) => {
              this.runTrigger(e, m, s, S, A, { onComplete: I, role: v }).catch(
                (x) => {
                  console.error("Error in trigger execution:", x), I?.();
                }
              );
            };
            if (f.conditionalLogic || !u) O(E);
            else {
              let I = h.get(m);
              if (I && A === I.control && v === I.role) E && I.settles.push(E);
              else {
                I && (clearTimeout(I.timer), g(I)?.(), h.delete(m));
                let x = {
                  control: A,
                  role: v,
                  settles: E ? [E] : [],
                  timer: setTimeout(() => {
                    if ((h.delete(m), _())) {
                      g(x)?.();
                      return;
                    }
                    O(g(x));
                  }, u * 1e3),
                };
                h.set(m, x);
              }
            }
          });
        T && p.add(T),
          p.add(() => {
            for (let b of h.values()) clearTimeout(b.timer), g(b)?.();
            h.size > 0 && (0, Yn.releasePageLevelTriggerFired)(e), h.clear();
          });
      }
    }
  };
});
var si = w((Jn) => {
  "use strict";
  Object.defineProperty(Jn, "__esModule", { value: !0 });
  Object.defineProperty(Jn, "LoadTriggerStrategy", {
    enumerable: !0,
    get: function () {
      return Zn;
    },
  });
  var Bu = $e(),
    Zn = class extends Bu.BaseTriggerStrategy {
      loadInteractions;
      getTimeline;
      constructor(e, t, r, s, o) {
        super(e, t, r), (this.loadInteractions = s), (this.getTimeline = o);
      }
      bind(e, t, r) {
        if (window.__wf_ix3) return;
        let { conditionalContext: s, delay: o } = r,
          i = e[1];
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
                      this.runTimelineAction(l, i, null);
                    })
                  : this.runTimelineAction(l, i, null));
            }
          };
          o ? setTimeout(a, o * 1e3) : a();
        });
      }
    };
});
var oi = w((tr) => {
  "use strict";
  Object.defineProperty(tr, "__esModule", { value: !0 });
  Object.defineProperty(tr, "ScrollTriggerStrategy", {
    enumerable: !0,
    get: function () {
      return er;
    },
  });
  var ju = $e(),
    er = class extends ju.BaseTriggerStrategy {
      setupScrollControls;
      setupScrollDirectionPair;
      constructor(e, t, r, s, o) {
        super(e, t, r),
          (this.setupScrollControls = s),
          (this.setupScrollDirectionPair = o);
      }
      bind(e, t, r) {
        let { interactionId: s, elements: o, conditionalContext: i } = r,
          a = e[1].scrollTriggerConfig;
        if (!a) return;
        if (i !== null) {
          if (i.behavior === "skip-to-end")
            for (let d of o) d && this.skipToEndState(t, d);
          return;
        }
        let l = o.filter((d) => !!d);
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
var ii = w((sr) => {
  "use strict";
  Object.defineProperty(sr, "__esModule", { value: !0 });
  Object.defineProperty(sr, "ContinuousChannelManager", {
    enumerable: !0,
    get: function () {
      return nr;
    },
  });
  var nr = class {
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
        let r = new rr(
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
    Gu = "power2.out",
    rr = class {
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
                ease: Gu,
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
var ai = w((ir) => {
  "use strict";
  Object.defineProperty(ir, "__esModule", { value: !0 });
  Object.defineProperty(ir, "ContinuousTriggerStrategy", {
    enumerable: !0,
    get: function () {
      return or;
    },
  });
  var Uu = $e(),
    $u = ii();
  function qu(n) {
    return n != null && "type" in n && n.type === "continuous";
  }
  var or = class extends Uu.BaseTriggerStrategy {
    continuousCleanups;
    triggerCleanupFunctions;
    coordinator;
    getTimelineIdForRole;
    constructor(e, t, r, s, o, i, a) {
      super(e, t, r),
        (this.continuousCleanups = s),
        (this.triggerCleanupFunctions = o),
        (this.coordinator = i),
        (this.getTimelineIdForRole = a);
    }
    bind(e, t, r) {
      let {
        interactionId: s,
        elements: o,
        triggerHandler: i,
        conditionalContext: a,
      } = r;
      for (let l of o) {
        if (!l) continue;
        if (a !== null) {
          a.behavior === "skip-to-end" && this.skipToEndState(t, l);
          continue;
        }
        let c = (d) => this.getTimelineIdForRole(t, d),
          u = new $u.ContinuousChannelManager(this.coordinator, c),
          f = i(e, l, r.eventManager, (d) => {
            if (qu(d)) {
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
var fi = w((ar) => {
  "use strict";
  Object.defineProperty(ar, "__esModule", { value: !0 });
  Object.defineProperty(ar, "IX3", {
    enumerable: !0,
    get: function () {
      return gt;
    },
  });
  var ue = H(),
    zu = vo(),
    Hu = Qo(),
    li = hn(),
    Wu = Zo(),
    Yu = Jo(),
    Ku = ti(),
    J = ee(),
    Xu = ri(),
    Qu = si(),
    Zu = oi(),
    Ju = ai();
  function ef(n) {
    if (n === !0) return !0;
    if (!Array.isArray(n)) return !1;
    let e = n[1];
    return (typeof e == "string" || Array.isArray(e)) && e.length > 0;
  }
  function tf(n) {
    let e = n[1].scrollTriggerConfig;
    return e?.split === !0 && ef(e.pin);
  }
  var nf = 200,
    ci = 210,
    ui = "tl_pinonly_",
    lr = class {
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
          (this.pluginReg = new Ku.PluginRegistry()),
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
          }, nf)),
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
          (this.eventMgr = zu.EventManager.getInstance()),
          (this.loadInteractions = []),
          (this.addEventListener = this.eventMgr.addEventListener.bind(
            this.eventMgr
          )),
          (this.emit = this.eventMgr.emit.bind(this.eventMgr)),
          (this.resolveTargets = (t, r, s) => {
            let o = s?.scope?.type === "component" ? s.scope : null,
              i = o?.componentId
                ? this.getComponentScopeSelector(o.componentId)
                : null,
              a = o?.variants?.length ? o.variants : null,
              l = s && r.interaction !== s ? { ...r, interaction: s } : r,
              c = this.resolveTargetsImpl(t, l, s, i),
              u = i ? !!this.pluginReg.getTargetResolver(t)?.isPageLevel : !1,
              f =
                i && r.triggerElement && !u
                  ? this.filterByInstance(c, i, r.triggerElement)
                  : c;
            return a && i && !u ? this.filterByVariant(f, i, a) : f;
          }),
          (this.isTargetDynamic = (t) =>
            !!this.pluginReg.getTargetResolver(t)?.isDynamic),
          (this.getInteractionForTimeline = (t) => {
            let r = this.timelineToInteractionId.get(t);
            if (r) return this.interactions.get(r);
          }),
          (this.getInteractionsForTimelines = (t) => {
            let r = [];
            for (let [s, o] of this.interactionTimelineRefs) {
              if (!this.activeInteractionIds.has(s)) continue;
              let i = !1;
              for (let l of t)
                if (o.has(l)) {
                  i = !0;
                  break;
                }
              if (!i) continue;
              let a = this.interactions.get(s);
              a && r.push(a);
            }
            return r;
          }),
          window.addEventListener("resize", this.debouncedWindowResize),
          (this.coordinator = new Hu.AnimationCoordinator(
            this.timelineDefs,
            this.pluginReg.getActionHandler.bind(this.pluginReg),
            this.pluginReg.getTargetResolver.bind(this.pluginReg),
            this.resolveTargets,
            this.getInteractionForTimeline,
            this.getInteractionsForTimelines,
            e
          )),
          (this.conditionEval = new Wu.ConditionEvaluator(
            this.pluginReg.getConditionEvaluator.bind(this.pluginReg)
          )),
          (this.conditionalPlaybackManager =
            new Yu.ConditionalPlaybackManager()),
          (this.triggerStrategies = new Map([
            [
              ue.TimelineControlType.STANDARD,
              new Xu.StandardTriggerStrategy(
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
              new Qu.LoadTriggerStrategy(
                this.runTrigger.bind(this),
                this.runTimelineAction.bind(this),
                this.skipToEndState.bind(this),
                this.loadInteractions,
                this.coordinator.getTimeline.bind(this.coordinator)
              ),
            ],
            [
              ue.TimelineControlType.SCROLL,
              new Zu.ScrollTriggerStrategy(
                this.runTrigger.bind(this),
                this.runTimelineAction.bind(this),
                this.skipToEndState.bind(this),
                this.coordinator.setupScrollControls.bind(this.coordinator),
                this.coordinator.setupScrollDirectionPair.bind(this.coordinator)
              ),
            ],
            [
              ue.TimelineControlType.CONTINUOUS,
              new Ju.ContinuousTriggerStrategy(
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
        return (this.instance = new lr(e)), this.instance;
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
            let o = new Set();
            this.interactionTimelineRefs.set(s.id, o),
              this.conditionalPlaybackManager.setupConditionalContext(
                s,
                (i) => {
                  this.resolversHeld.add(s.id),
                    i?.behavior !== "skip-to-end" &&
                      this.activeInteractionIds.add(s.id);
                  for (let p of s.timelineIds ?? [])
                    o.add(p),
                      this.incrementTimelineRefCount(p),
                      this.timelineToInteractionId.set(p, s.id);
                  let a = new Set(),
                    l = new Set(),
                    c = new Set(s.timelineIds ?? []),
                    u = (p) =>
                      this.coordinator.getReuseAliasesForSource(p).some((h) => {
                        let g = this.timelineRefCounts.get(h) ?? 0,
                          y = c.has(h) ? 1 : 0;
                        return g - y > 0;
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
                  let d = (0, li.analyzeSharedTimelineGroups)(
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
                  for (let p of s.triggers ?? []) this.bindTrigger(p, s, i);
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
                ci,
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
              }, ci),
              o = (i) => {
                for (let a of i) a.target === document.body && (r(), s());
              };
            (this.bodyResizeObserver = new ResizeObserver(o)),
              document.body && this.bodyResizeObserver.observe(document.body);
          }
        }
        return this;
      }
      withPinOnlyTimeline(e) {
        if (e.timelineIds?.length || !e.triggers?.some(tf)) return e;
        let t = `${ui}${e.id}`;
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
            this.timelineDefs.delete(`${ui}${r}`) &&
              this.coordinator.invalidateReuseAliasIndex();
          let o = this.interactions.get(r);
          for (let l of o?.triggers ?? [])
            this.lastRoutedTimelineIds.delete(l),
              this.lastActivatedRoles.delete(l),
              (0, ue.resetPageLevelTriggerState)(l);
          this.interactions.delete(r),
            this.triggeredElements.delete(r),
            this.interactionTimelineRefs.delete(r),
            this.activeInteractionIds.delete(r),
            o && this.recomputeFlipEaseForOwnSources(o),
            this.conditionalPlaybackManager.cleanup(r);
          let i = this.resolversHeld.delete(r),
            a = this.releasedByTeardown.delete(r);
          i && !a && this.releaseTargetResolvers(r);
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
        for (let o of r) {
          let { id: i } = o;
          if (!this.interactions.has(i)) {
            console.warn(
              `Interaction with ID ${i} not found, registering as new.`
            ),
              this.register([o], []);
            continue;
          }
          this.remove(i), this.register([o], []);
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
          o = this.pluginReg.getTriggerHandler(e),
          i = e[1];
        if (!o) {
          console.warn("No trigger handler:", e[0]);
          return;
        }
        let a = this.triggerCleanupFunctions.get(s) || new Map();
        this.triggerCleanupFunctions.set(s, a);
        let { delay: l = 0, controlType: c } = i,
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
              triggerHandler: o,
              eventManager: f,
              conditionalContext: r,
              cleanupMap: a,
              delay: u || 0,
            })
          : console.warn("No strategy found for control type:", c),
          i.conditionalLogic && this.setupTriggerReactiveMonitoring(e, t);
      }
      setupTriggerReactiveMonitoring(e, t) {
        let { conditionalLogic: r } = e[1];
        if (!r) return;
        let s = `${t.id}:${t.triggers.indexOf(e)}`;
        try {
          let o = this.conditionEval.observeConditionsForTrigger(
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
                        u && (0, li.triggerRoutesByCallbackRole)(e[0], e[1])
                          ? void 0
                          : this.resolveAssignedTimelineIds(e, t);
                    if (f?.length === 0) return;
                    let d = u ? this.lastRoutedTimelineIds.get(e) : void 0,
                      p = (g) => (u ? d?.get(g) : f ?? t.timelineIds ?? []),
                      h = [];
                    for (let g of c)
                      for (let y of p(g) ?? [])
                        h.push({
                          timelineId: y,
                          element: g,
                          action: "pause-reset",
                        });
                    await this.executeTimelineOperationsAsync(h),
                      c.forEach((g) => {
                        let y = u ? p(g) : f;
                        if (u && !y) return;
                        let { notifyObservers: T, settle: b } =
                          this.makeRoleActivationHooks(t, e, g);
                        this.executeConditionalOutcome(l, g, t, y, b, T);
                      });
                  }
                });
              }
            ),
            i = this.triggerObservers.get(t.id);
          i || ((i = new Map()), this.triggerObservers.set(t.id, i)),
            i.set(s, o);
        } catch (o) {
          console.error("Error setting up trigger reactive monitoring:", o);
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
          let o = r.split(":")[0];
          t.has(o) || t.set(o, []),
            t.get(o).push({ triggerKey: r, callback: s });
        }
        for (let [r, s] of t)
          await this.processInteractionReactiveUpdates(r, s);
      }
      async processInteractionReactiveUpdates(e, t) {
        let r = this.reactiveCallbackQueues.get(e);
        if (r)
          try {
            await r;
          } catch (o) {
            console.error("Error waiting for pending reactive callback:", o);
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
              e.forEach(({ timelineId: r, element: s, action: o }) => {
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
                  switch (o) {
                    case "pause-reset":
                      this.coordinator.pause(r, s, 0);
                      break;
                    default:
                      console.warn(`Unknown timeline action: ${o}`);
                  }
                } catch (i) {
                  console.error(
                    "Error executing timeline operation: %s, %s",
                    o,
                    r,
                    i
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
            (o) => this.timelineDefs.get(o)?.triggerMetadata?.role === t
          );
        if (s.length === 0 && r.length > 0) {
          let o = r
            .map(
              (i) => this.timelineDefs.get(i)?.triggerMetadata?.role || "none"
            )
            .join(", ");
          console.warn(
            `IX3: No timelines found for role '${t}' in interaction '${e.id}'. Available roles: [${o}]`
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
      notifyRoleActivationObservers(e, t, r, s, o, i) {
        let a = this.triggerCleanupFunctions.get(e.id);
        if (!(!a || (i && a !== i)))
          for (let l of e.triggers ?? []) {
            let c = this.pluginReg.getRoleActivationObserver(l[0]);
            if (c)
              try {
                let u = l[2],
                  f = u
                    ? this.resolveTargets(
                        u,
                        o ? { trigger: l, triggerElement: o } : { trigger: l },
                        e
                      )
                    : [];
                if (f.length === 0) continue;
                let d = c(t, {
                  elements: f,
                  trigger: l,
                  causeTrigger: s,
                  causeElement: o,
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
        let o = !1;
        for (let i of e.triggers ?? []) {
          let a = this.pluginReg.getRoleAppliedQuery(i[0]),
            l = i[2];
          if (!(!a || !l))
            try {
              let c = this.resolveTargets(
                l,
                { trigger: i, triggerElement: s },
                e
              );
              if (c.length === 0) continue;
              let u = a(t, {
                elements: c,
                trigger: i,
                causeTrigger: r,
                causeElement: s,
              });
              if (u === !1) return !1;
              u === !0 && (o = !0);
            } catch (c) {
              return (
                console.error(
                  "Error asking role applied query (target resolution or query):",
                  i[0],
                  c
                ),
                !1
              );
            }
        }
        return o;
      }
      makeRoleActivationHooks(e, t, r) {
        let { assignedGroupId: s, assignedTimelineRole: o } = t[1],
          i =
            this.lastActivatedRoles.get(t)?.get(r) ??
            (s === null || s ? void 0 : o);
        if (!i || !this.hasRoleActivationObserver(e)) return {};
        let a = [],
          l = this.triggerCleanupFunctions.get(e.id);
        return {
          notifyObservers: () => {
            this.notifyRoleActivationObservers(e, i, a, t, r, l);
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
      async runTrigger(e, t, r, s, o, i) {
        let a = i?.onComplete,
          l = i?.role,
          c = 0,
          u = !1,
          f = [],
          d = () => {
            if (!u) {
              u = !0;
              try {
                a?.();
              } catch (_) {
                console.error("Error in activation completion callback:", _);
              }
              for (let _ of f)
                try {
                  _();
                } catch (O) {
                  console.error("Error in role activation settle callback:", O);
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
        let y = s ?? g.timelineIds ?? [];
        if (y.length === 0) {
          d();
          return;
        }
        c = y.length;
        let T = this.lastRoutedTimelineIds.get(e);
        T || this.lastRoutedTimelineIds.set(e, (T = new WeakMap())),
          T.set(t, y);
        let b = this.lastActivatedRoles.get(e);
        b || this.lastActivatedRoles.set(e, (b = new WeakMap())),
          l ? b.set(t, l) : b.delete(t);
        let m = !1,
          A = this.triggerCleanupFunctions.get(g.id),
          E = () => {
            m ||
              !l ||
              ((m = !0), this.notifyRoleActivationObservers(g, l, f, e, t, A));
          },
          v = a != null || (l != null && this.hasRoleActivationObserver(g)),
          S = () =>
            v
              ? () => {
                  --c <= 0 && d();
                }
              : void 0;
        try {
          if (p.conditionalLogic)
            try {
              let O = (await this.conditionEval.evaluateConditionsForTrigger(
                p.conditionalLogic.conditions,
                g
              ))
                ? p.conditionalLogic.ifTrue
                : p.conditionalLogic.ifFalse;
              O
                ? this.executeConditionalOutcome(O, t, g, y, v ? d : void 0, E)
                : d();
            } catch (_) {
              console.error("Error evaluating trigger conditional logic:", _);
              let O = S();
              y.forEach((I) => this.runTimelineAction(I, p, t, o, O, E));
            }
          else {
            let _ = S();
            y.forEach((O) => this.runTimelineAction(O, p, t, o, _, E));
          }
        } catch (_) {
          console.error("Error in trigger execution:", _), d();
        }
      }
      skipToEndState(e, t, r, s, o, i) {
        (s ?? e.timelineIds ?? []).forEach((l) => {
          let c =
              o ?? (r ? this.getEffectivePlaybackConfig(l, r).control : void 0),
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
          i?.(), this.coordinator.setTotalProgress(l, d, t ?? null);
        });
      }
      executeConditionalOutcome(e, t, r, s, o, i) {
        let {
            control: a,
            targetTimelineId: l,
            speed: c,
            jump: u,
            delay: f = 0,
          } = e,
          d = (0, J.toSeconds)(f);
        if (a === "none") {
          o?.();
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
              o?.();
            return;
          }
          h = [l];
        } else h = p;
        if (s) {
          let b = new Set(s);
          h = h.filter((m) => b.has(m));
        }
        if (h.length === 0) {
          o?.();
          return;
        }
        let g = h.length,
          y = o
            ? () => {
                --g <= 0 && o();
              }
            : void 0,
          T = () => {
            a !== "pause" && a !== "stop" && i?.(),
              h.forEach((b) => {
                c !== void 0 &&
                  (this.features.timelineGroups !== !0 ||
                    (a !== "pause" && a !== "stop")) &&
                  this.coordinator.setTimeScale(b, c, t);
                let m = (0, J.toSeconds)(u);
                switch (a) {
                  case "play":
                    this.coordinator.play(b, t, m);
                    break;
                  case "pause":
                    this.coordinator.pause(b, t, m);
                    break;
                  case "resume":
                    this.coordinator.resume(b, t, m);
                    break;
                  case "reverse":
                  case "reverseFlipEase":
                    this.coordinator.reverse(b, t, m);
                    break;
                  case "restart":
                    this.coordinator.restart(b, t);
                    break;
                  case "stop":
                    this.coordinator.pause(b, t, m);
                    break;
                  case "togglePlayReverse":
                  case "togglePlayReverseFlipEase":
                    this.coordinator.togglePlayReverse(b, t);
                    break;
                  default: {
                    this.coordinator.restart(b, t);
                    let A = a;
                    break;
                  }
                }
                y && this.notifyOnTimelineSettled(b, t, a, y);
              });
          };
        d
          ? setTimeout(() => {
              T();
            }, d * 1e3)
          : T();
      }
      getEffectivePlaybackConfig(e, t) {
        let r = this.timelineDefs.get(e);
        if (
          r &&
          (this.features.timelineGroups === !0
            ? r.triggerMetadata?.role != null
            : r.triggerMetadata)
        ) {
          let o = r.settings;
          return {
            control: o?.control,
            delay: o?.delay,
            jump: o?.jump,
            speed: o?.speed,
          };
        }
        let s =
          t.controlType && (0, J.isValidControlType)(t.controlType)
            ? t.controlType
            : ue.TimelineControlType.STANDARD;
        if (r?.groupId && s === ue.TimelineControlType.STANDARD) {
          let o = r.settings;
          return {
            control: t.control,
            delay: void 0,
            jump: o?.jump,
            speed: o?.speed,
          };
        }
        return {
          control: t.control,
          delay: void 0,
          jump: t.jump,
          speed: t.speed,
        };
      }
      runTimelineAction(e, t, r, s, o, i) {
        let {
            control: a,
            delay: l,
            jump: c,
            speed: u,
          } = this.getEffectivePlaybackConfig(e, t),
          f = s ?? a,
          d = this.timelineDefs.get(e);
        if (d?.reuse) {
          let y = d.reuse.sourceTimelineId;
          if (!this.timelineDefs.has(y)) {
            console.warn(`Timeline reuse: source '${y}' not found for '${e}'`),
              o?.();
            return;
          }
          e = y;
        }
        let p = () => {
            let y = this.features.timelineGroups === !0;
            if (y && f === "none") return;
            (!y || (f !== "pause" && f !== "stop")) &&
              this.coordinator.setTimeScale(e, u ?? 1, r);
            let T = (0, J.toSeconds)(c);
            switch (f) {
              case "play":
                this.coordinator.play(e, r, T);
                break;
              case "pause":
                this.coordinator.pause(e, r, T);
                break;
              case "resume":
                this.coordinator.resume(e, r, T);
                break;
              case "reverse":
              case "reverseFlipEase":
                this.coordinator.reverse(e, r, T);
                break;
              case "restart":
                this.coordinator.restart(e, r);
                break;
              case "togglePlayReverse":
              case "togglePlayReverseFlipEase":
                this.coordinator.togglePlayReverse(e, r);
                break;
              case "stop":
                this.coordinator.pause(e, r, T);
                break;
              case "none":
                break;
              case void 0:
                this.coordinator.restart(e, r);
                break;
              default: {
                let b = f;
                this.coordinator.restart(e, r);
                break;
              }
            }
          },
          h =
            o || i
              ? () => {
                  f !== "none" && f !== "pause" && f !== "stop" && i?.(),
                    p(),
                    o && this.notifyOnTimelineSettled(e, r, f, o);
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
        let o = this.coordinator.getTimeline(e, t);
        if (!o) {
          s();
          return;
        }
        let i = o.reversed() ? "onReverseComplete" : "onComplete",
          a = i === "onReverseComplete" ? 0 : 1;
        if (!o.isActive() && o.totalProgress() === a) {
          s();
          return;
        }
        let l = o.eventCallback(i),
          c = !1,
          u,
          f = function (...d) {
            if (c) {
              l?.apply(this, d);
              return;
            }
            (c = !0), u?.(), o.eventCallback(i, l ?? null);
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
        o.eventCallback(i, f),
          (u = this.coordinator.registerCleanup(
            e,
            () => {
              c ||
                ((c = !0),
                o.eventCallback(i) === f && o.eventCallback(i, l ?? null),
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
        let [o, i, a] = e;
        if (i === "*" && a && a.filterBy) {
          let d = this.resolveUniversalSelectorOptimized(a, t, r, s);
          if (d) return d;
        }
        let l = this.pluginReg.getTargetResolver([o, i]);
        if (!l) return [];
        let c = l.resolve([o, i], t),
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
        let o =
            t.anchorFilterToTrigger && t.triggerElement
              ? [t.triggerElement]
              : this.resolveTargetsImpl(e.filterBy, t, r, s),
          i = o.length;
        if (!i) return [];
        let a = !!e.firstMatchOnly;
        switch (e.relationship) {
          case "direct-child-of": {
            let l = [];
            for (let c = 0; c < i; c++) {
              let u = o[c];
              if (!u) continue;
              let f = u.children;
              for (let d = 0; d < f.length; d++)
                if ((l.push(f[d]), a)) return l;
            }
            return l;
          }
          case "within": {
            let l = [];
            for (let c = 0; c < i; c++) {
              let u = o[c];
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
            for (let u = 0; u < i; u++) {
              let f = o[u];
              if (!f) continue;
              let d = f.parentElement;
              if (d && !l.has(d) && (l.add(d), c.push(d), a)) break;
            }
            return s ? this.filterByScope(c, s) : c;
          }
          case "next-sibling-of": {
            let l = [];
            for (let c = 0; c < i; c++) {
              let u = o[c];
              if (!u) continue;
              let f = u.nextElementSibling;
              if (f && (l.push(f), a)) break;
            }
            return s ? this.filterByScope(l, s) : l;
          }
          case "prev-sibling-of": {
            let l = [];
            for (let c = 0; c < i; c++) {
              let u = o[c];
              if (!u) continue;
              let f = u.previousElementSibling;
              if (f && (l.push(f), a)) break;
            }
            return s ? this.filterByScope(l, s) : l;
          }
          case "next-to": {
            let l = new Set(),
              c = [];
            for (let u = 0; u < i; u++) {
              let f = o[u];
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
            for (let u = 0; u < i; u++) {
              let f = o[u];
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
        let o = [],
          i = new Set();
        switch (t) {
          case "direct-child-of": {
            let a = new Set(r);
            for (let l = 0; l < e.length; l++) {
              let c = e[l];
              if (
                !i.has(c) &&
                c.parentElement &&
                a.has(c.parentElement) &&
                (i.add(c), o.push(c), s)
              )
                return o;
            }
            return o;
          }
          case "direct-parent-of": {
            let a = new Set();
            for (let l = 0; l < r.length; l++) {
              let c = r[l].parentElement;
              c && a.add(c);
            }
            for (let l = 0; l < e.length; l++) {
              let c = e[l];
              if (!i.has(c) && a.has(c) && (i.add(c), o.push(c), s)) return o;
            }
            return o;
          }
          case "next-sibling-of": {
            let a = new Set(r);
            for (let l = 0; l < e.length; l++) {
              let c = e[l];
              if (i.has(c)) continue;
              let u = c.previousElementSibling;
              if (u && a.has(u) && (i.add(c), o.push(c), s)) return o;
            }
            return o;
          }
          case "prev-sibling-of": {
            let a = new Set(r);
            for (let l = 0; l < e.length; l++) {
              let c = e[l];
              if (i.has(c)) continue;
              let u = c.nextElementSibling;
              if (u && a.has(u) && (i.add(c), o.push(c), s)) return o;
            }
            return o;
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
              if (i.has(u) || !u.parentElement) continue;
              let f = l.get(u.parentElement);
              if (f && !(a.has(u) && f <= 1) && (i.add(u), o.push(u), s))
                return o;
            }
            return o;
          }
          case "within": {
            let a = new Set(r);
            for (let l = 0; l < e.length; l++) {
              let c = e[l];
              if (i.has(c)) continue;
              let u = c.parentElement;
              for (; u; ) {
                if (a.has(u)) {
                  if ((i.add(c), o.push(c), s)) return o;
                  break;
                }
                u = u.parentElement;
              }
            }
            return o;
          }
          case "contains": {
            let a = new Set();
            for (let l = 0; l < r.length; l++) {
              let c = r[l].parentElement;
              for (; c && !a.has(c); ) a.add(c), (c = c.parentElement);
            }
            for (let l = 0; l < e.length; l++) {
              let c = e[l];
              if (!i.has(c) && a.has(c) && (i.add(c), o.push(c), s)) return o;
            }
            return o;
          }
          default:
            return [];
        }
      }
      filterByInstance(e, t, r) {
        if (!e.length) return e;
        let s = r.closest(t);
        if (!s) return e;
        let o = -1;
        for (let a = 0; a < e.length; a++)
          if (e[a]?.closest(t) !== s) {
            o = a;
            break;
          }
        if (o === -1) return e;
        let i = e.slice(0, o);
        for (let a = o + 1; a < e.length; a++) {
          let l = e[a];
          l?.closest(t) === s && i.push(l);
        }
        return i;
      }
      filterByScope(e, t) {
        if (!e.length) return e;
        let r = -1;
        for (let o = 0; o < e.length; o++)
          if (!e[o]?.closest(t)) {
            r = o;
            break;
          }
        if (r === -1) return e;
        let s = e.slice(0, r);
        for (let o = r + 1; o < e.length; o++) {
          let i = e[o];
          i?.closest(t) && s.push(i);
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
          o = -1;
        for (let a = 0; a < e.length; a++) {
          let l = e[a];
          if (!l || !s(l)) {
            o = a;
            break;
          }
        }
        if (o === -1) return e;
        let i = e.slice(0, o);
        for (let a = o + 1; a < e.length; a++) {
          let l = e[a];
          l && s(l) && i.push(l);
        }
        return i;
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
              } catch (o) {
                console.error("Error during trigger cleanup:", o);
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
            } catch (o) {
              console.error("Error during trigger observer cleanup:", o);
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
    gt = lr;
  ot(gt, "instance");
});
var pi = w((cr) => {
  "use strict";
  Object.defineProperty(cr, "__esModule", { value: !0 });
  function rf(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  rf(cr, {
    EASING_NAMES: function () {
      return of.EASING_NAMES;
    },
    IX3: function () {
      return sf.IX3;
    },
    convertEaseConfigToGSAP: function () {
      return di.convertEaseConfigToGSAP;
    },
    convertEaseConfigToLinear: function () {
      return di.convertEaseConfigToLinear;
    },
  });
  var sf = fi(),
    of = ee(),
    di = Sn();
});
var gi = w((ur) => {
  "use strict";
  Object.defineProperty(ur, "__esModule", { value: !0 });
  function af(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  af(ur, {
    BETA_FEATURES: function () {
      return qe;
    },
    adminRequired: function () {
      return C;
    },
    betaFeaturesTestingLib: function () {
      return uf;
    },
    getBetaFeatureDefinition: function () {
      return lf;
    },
    isBetaFeatureFlag: function () {
      return cf;
    },
  });
  var C = [],
    hi = [],
    qe = {
      figma: { shortcut: C, scope: ["user"] },
      rssUrl: { shortcut: ["* r s s u r l"], scope: ["user"] },
      disableBlockers: { shortcut: ["* z o o m"], scope: ["user"] },
      peek: { shortcut: hi, scope: ["user"] },
      ecShipStation: { shortcut: C, scope: ["user"] },
      betaception: { shortcut: hi, scope: ["user"] },
      fileUpload: { shortcut: C, scope: ["user"] },
      customClassInRichText: { shortcut: ["* c c c"], scope: ["user"] },
      allowCustomSiteHeader: { shortcut: C, scope: ["site"] },
      showFastlyAsEdgeIPs: { shortcut: C, scope: ["site"] },
      useNewBillingSystem: { shortcut: C, scope: ["user"] },
      useUserTaxCollection: { shortcut: C, scope: ["user"] },
      useTeamTaxCollection: { shortcut: C, scope: ["workspace"] },
      auditCorruptedCheckout: { shortcut: ["* a e c o m"], scope: ["user"] },
      auditLazyImage: { shortcut: ["* a l a z y"], scope: ["user"] },
      lab: { shortcut: ["* l a b"], scope: ["user"] },
      logicFlowsV2: { shortcut: C, scope: ["user"] },
      logicDev: { shortcut: C, scope: ["user"] },
      logicEventTriggers: { shortcut: C, scope: ["site"] },
      disableWorkspaceAnnotationEmailNotifications: {
        shortcut: C,
        scope: ["workspace"],
      },
      hasEnterpriseSite: { shortcut: C, scope: ["workspace"] },
      isEnterprisePartner: { shortcut: C, scope: ["workspace"] },
      isEnterprise: { shortcut: C, scope: ["workspace"] },
      isEnterprisePro: { shortcut: C, scope: ["workspace"] },
      isEnterpriseLite: { shortcut: C, scope: ["workspace"] },
      isEnterpriseSite: { shortcut: C, scope: ["site"] },
      disableWorkspaceReviewEmailNotifications: {
        shortcut: C,
        scope: ["workspace"],
      },
      enableUnlimitedWorkspaceLibraries: { shortcut: C, scope: ["workspace"] },
      isEnterpriseLiteSite: { shortcut: C, scope: ["site"] },
      enterpriseCustomSslCert: { shortcut: C, scope: ["site"] },
      enterpriseMarketingIntegrations: { shortcut: C, scope: ["workspace"] },
      hubspotMarketingIntegration: { shortcut: C, scope: ["workspace"] },
      pageBuilderRole: { shortcut: C, scope: ["workspace"] },
      testSiteBeta: { shortcut: ["* t s"], scope: ["site"] },
      testWorkspaceBeta: { shortcut: C, scope: ["workspace"] },
      testUserAndWorkspaceBeta: { shortcut: C, scope: ["user", "workspace"] },
      dl: { shortcut: C, scope: ["user", "workspace"], open: !0 },
      rolesNWorkspaces: { shortcut: C, scope: ["user"] },
      reactQueryDevtools: { shortcut: C, scope: ["user"] },
      auditInputLabels: { shortcut: ["* l a b e l"], scope: ["user"] },
      auditFocusStyles: { shortcut: ["* f o c u s"], scope: ["user"] },
      dns01CertValidation: { shortcut: C, scope: ["site"] },
      enableReactDashboard: { shortcut: C, scope: ["user"] },
      focusWithin: { shortcut: ["* w i t h i n"], scope: ["user"] },
      trialSubscription: { shortcut: C, scope: ["site"] },
      pluginComponents: { shortcut: C, scope: ["site"] },
      thirdPartyLibrariesAuthoring: { shortcut: C, scope: ["site"] },
      localization: { shortcut: C, scope: ["site"] },
      localizationCanPublishLocales: { shortcut: C, scope: ["site"] },
      jank: { shortcut: ["* j a n k"], scope: ["user"] },
      aiHelpFollowUps: { shortcut: C, scope: ["workspace"] },
      enterpriseSiteActivityLogBeta: { shortcut: C, scope: ["workspace"] },
      marketplacePaymentsCreator: { shortcut: C, scope: ["workspace"] },
      disableBS: { shortcut: ["* d b s"], scope: ["user"] },
      optimize: { shortcut: C, scope: ["site"] },
      optimizeStandalone: { shortcut: C, scope: ["workspace"] },
      analyze: { shortcut: C, scope: ["site"] },
      testUserBeta: { shortcut: C, scope: ["user"] },
      testUserBeta2: { shortcut: C, scope: ["user"] },
      testOAuthAppBeta: { shortcut: C, scope: ["oauthApplication"] },
    },
    lf = (n) => qe[n];
  function cf(n) {
    return n in qe;
  }
  var uf = {
    addBetaFlag: function (e, t) {
      qe[e] = t;
    },
    removeBetaFlag: function (e) {
      delete qe[e];
    },
  };
});
var mi = w((fr) => {
  "use strict";
  Object.defineProperty(fr, "__esModule", { value: !0 });
  function ff(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  ff(fr, {
    createConstantsStore: function () {
      return df;
    },
    selectAppName: function () {
      return pf;
    },
    selectReadOnly: function () {
      return hf;
    },
  });
  var df = (n) => {
      function e() {
        return n;
      }
      return { initialState: n, reducer: e };
    },
    pf = (n) => n.ConstantsStore.appName,
    hf = (n) => n.ConstantsStore.readOnly;
});
var yi = w((dr) => {
  "use strict";
  Object.defineProperty(dr, "__esModule", { value: !0 });
  Object.defineProperty(dr, "WebflowEnvironments", {
    enumerable: !0,
    get: function () {
      return gf;
    },
  });
  var gf = Object.freeze({
    DESIGNER: "designer",
    EDITOR: "editor",
    SSR: "ssr",
    EXPORT: "export",
    LLM: "llm",
  });
});
var Ti = w((vi) => {
  "use strict";
  Object.defineProperty(vi, "__esModule", { value: !0 });
});
var bi = w((pr) => {
  "use strict";
  Object.defineProperty(pr, "__esModule", { value: !0 });
  Object.defineProperty(pr, "TARGET_AI_SITE_GEN_LIBRARY_SLUG", {
    enumerable: !0,
    get: function () {
      return mf;
    },
  });
  var mf = "ai-gen-82921b10-4b39-48f0-b346-808cf4903d29";
});
var Ai = w((hr) => {
  "use strict";
  Object.defineProperty(hr, "__esModule", { value: !0 });
  function yf(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  yf(hr, {
    instPathKey: function () {
      return Ei;
    },
    instPathSetKey: function () {
      return Tf;
    },
    parseInstPathKey: function () {
      return wi;
    },
    parseInstPathSetKey: function () {
      return bf;
    },
    readInstPath: function () {
      return Si;
    },
    readInstPathsFromTriggers: function () {
      return vf;
    },
  });
  function Si(n) {
    if (!Array.isArray(n)) return null;
    let e = Array.isArray(n[0]) ? n[0] : n;
    if (!Array.isArray(e)) return null;
    let [t, r] = e;
    return typeof t == "string" && t !== "" && typeof r == "string" && r !== ""
      ? [t, r]
      : null;
  }
  function vf(n, e, t) {
    let r = [];
    for (let s of n ?? []) {
      if (s[0] !== e) continue;
      let o = s[2];
      if (!Array.isArray(o) || o[0] !== t) continue;
      let i = Si(o[1]);
      i && r.push(i);
    }
    return r;
  }
  function Ei(n, e) {
    return `${n} ${e}`;
  }
  function wi(n) {
    let e = n.split(" ");
    return e.length === 2 && e[0] && e[1] ? [e[0], e[1]] : null;
  }
  var Oi = "|";
  function Tf(n) {
    return n.map(([e, t]) => Ei(e, t)).join(Oi);
  }
  function bf(n) {
    if (n === "") return [];
    let e = [];
    for (let t of n.split(Oi)) {
      let r = wi(t);
      if (!r) return null;
      e.push(r);
    }
    return e;
  }
});
var _i = w((gr) => {
  "use strict";
  Object.defineProperty(gr, "__esModule", { value: !0 });
  function Sf(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Sf(gr, {
    POPOVER_ANIMATED_ATTRIBUTE: function () {
      return If;
    },
    POPOVER_ANIMATION_CLOSE_COMMAND: function () {
      return xf;
    },
    POPOVER_ANIMATION_OPEN_COMMAND: function () {
      return Pf;
    },
    POPOVER_BACKDROP_ANIMATED_ATTRIBUTE: function () {
      return Of;
    },
    POPOVER_BACKDROP_ANIMATION_PROPERTY: function () {
      return wf;
    },
    POPOVER_BACKDROP_KEYFRAMES_PREFIX: function () {
      return Af;
    },
    POPOVER_CLASS: function () {
      return Ef;
    },
    POPOVER_COMMAND_EVENT: function () {
      return Mf;
    },
    POPOVER_MASK_CLASS: function () {
      return _f;
    },
    POPOVER_MASK_FOR_ATTRIBUTE: function () {
      return Rf;
    },
    POPOVER_MODE_ATTRIBUTE: function () {
      return Cf;
    },
  });
  var Ef = "w-popover",
    wf = "--w-backdrop-animation",
    Of = "data-w-popover-backdrop-animated",
    Af = "w-bd-",
    _f = "w-popover-mask",
    Rf = "data-w-popover-mask-for",
    If = "data-w-popover-animated",
    Cf = "data-w-popover-mode",
    Mf = "webflow:popover-command",
    Pf = "animation-open",
    xf = "animation-close";
});
var ze = w((ae) => {
  "use strict";
  Object.defineProperty(ae, "__esModule", { value: !0 });
  ge(gi(), ae);
  ge(mi(), ae);
  ge(yi(), ae);
  ge(Ti(), ae);
  ge(bi(), ae);
  ge(Ai(), ae);
  ge(_i(), ae);
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
var br = w((Tr) => {
  "use strict";
  Object.defineProperty(Tr, "__esModule", { value: !0 });
  function kf(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  kf(Tr, {
    COMPONENT_INSTANCE_TRIGGER_KEYS: function () {
      return Ii;
    },
    COMPONENT_TIMELINE_ROLES: function () {
      return rd;
    },
    DEFAULT_DURATION_TRIGGER_MODE: function () {
      return Gf;
    },
    DEFAULT_DURATION_TRIGGER_SECONDS: function () {
      return Uf;
    },
    DEFAULT_MOUSE_FOLLOW_ANCHOR: function () {
      return Vf;
    },
    DEFAULT_MOUSE_MOVE_INTERVAL_DISTANCE: function () {
      return Bf;
    },
    DURATION_TRIGGER_MODES: function () {
      return jf;
    },
    DURATION_TRIGGER_SECONDS_RANGE: function () {
      return vr;
    },
    HOVER_TIMELINE_ROLES: function () {
      return od;
    },
    INST_PATH_TARGET_KEYS: function () {
      return Ri;
    },
    IX3_POPOVER_STATE_EVENT: function () {
      return qf;
    },
    IX3_WF_EXTENSION_KEYS: function () {
      return mr;
    },
    MOUSE_MOVE_CHANNELS: function () {
      return td;
    },
    MOUSE_MOVE_TIMELINE_ROLES: function () {
      return Wf;
    },
    POPOVER_ANIMATED_ATTRIBUTE: function () {
      return Nf.POPOVER_ANIMATED_ATTRIBUTE;
    },
    POPOVER_TIMELINE_ROLES: function () {
      return sd;
    },
    TIMELINE_ROLE_NAMES: function () {
      return j;
    },
    TargetScope: function () {
      return yr;
    },
    VELOCITY_CAPABLE_PROPS: function () {
      return Ci;
    },
    canUseVelocityInfluenceProperty: function () {
      return Kf;
    },
    getEffectiveFollowMode: function () {
      return Ff;
    },
    getMouseFollowConfig: function () {
      return Lf;
    },
    getMouseMoveTimelineContext: function () {
      return mt;
    },
    getOppositeMouseFollowAxis: function () {
      return Zf;
    },
    getSingleAxisMouseFollowMode: function () {
      return Df;
    },
    isComponentInstanceTriggerKey: function () {
      return Hf;
    },
    isInstPathTargetKey: function () {
      return zf;
    },
    isMouseMoveIntervalRole: function () {
      return Xf;
    },
    isVelocityInfluenceEnabled: function () {
      return Yf;
    },
    minimumDurationSeconds: function () {
      return $f;
    },
    mouseFollowAxisToRole: function () {
      return Jf;
    },
    mouseFollowRoleToAxis: function () {
      return Qf;
    },
    mouseFollowRoleToSiblingRole: function () {
      return ed;
    },
    narrowMouseMoveIntervalPayload: function () {
      return nd;
    },
  });
  var Nf = ze(),
    mr;
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
      (n.CUSTOM_PROPERTY = "wf:custom-property"),
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
  })(mr || (mr = {}));
  var yr;
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
  })(yr || (yr = {}));
  function Lf(n) {
    let e = n?.properties?.["wf:mouse-follow"];
    if (!(typeof e != "object" || e === null || Array.isArray(e))) return e;
  }
  function Ff(n) {
    return n?.followMode ?? "full";
  }
  function Df(n) {
    return n === "x" ? "x-only" : "y-only";
  }
  var Vf = "50% 50%",
    Bf = 100,
    jf = ["idle", "timeOnSite"],
    Gf = "timeOnSite",
    Uf = 5,
    vr = { min: 0, max: 3600 },
    $f = (n) => (n === "idle" ? Math.max(1, vr.min) : vr.min),
    qf = "webflow:popover-state",
    Ri = ["wf:inst", "wf:popover-element", "wf:popover-backdrop"];
  function zf(n) {
    return Ri.includes(n);
  }
  var Ii = ["wf:popover"];
  function Hf(n) {
    return Ii.includes(n);
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
  function mt(n) {
    return n === j.MOUSE_X
      ? { kind: "mouse-x", role: n, axis: "x", siblingRole: j.MOUSE_Y }
      : n === j.MOUSE_Y
      ? { kind: "mouse-y", role: n, axis: "y", siblingRole: j.MOUSE_X }
      : n === j.INTERVAL
      ? { kind: "interval", role: n }
      : { kind: "other", role: n ?? void 0 };
  }
  var Wf = {
      MOUSE_X: { role: j.MOUSE_X, label: "Mouse X", usePercentCanvas: !0 },
      MOUSE_Y: { role: j.MOUSE_Y, label: "Mouse Y", usePercentCanvas: !0 },
      INTERVAL: { role: j.INTERVAL, label: "Interval" },
    },
    Ci = new Set([
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
  function Yf(n) {
    return (
      n?.pluginConfig?.type === "mouseMove" &&
      !!n.pluginConfig.velocityInfluence
    );
  }
  function Kf(n) {
    return Ci.has(n);
  }
  function Xf(n) {
    return mt(n).kind === "interval";
  }
  function Qf(n) {
    let e = mt(n);
    return e.kind === "mouse-x" || e.kind === "mouse-y" ? e.axis : null;
  }
  function Zf(n) {
    return n === "x" ? "y" : "x";
  }
  function Jf(n) {
    return n === "x" ? j.MOUSE_X : j.MOUSE_Y;
  }
  function ed(n) {
    let e = mt(n);
    return e.kind === "mouse-x" || e.kind === "mouse-y" ? e.siblingRole : null;
  }
  var td = { POSITION: "wf:mouse-move:position", LEAVE: "wf:mouse-move:leave" };
  function nd(n) {
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
  var rd = {
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
    sd = {
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
    od = {
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
var Ni = w((wr) => {
  "use strict";
  Object.defineProperty(wr, "__esModule", { value: !0 });
  function id(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  id(wr, {
    createLoadedMouseFollowActionNormalizer: function () {
      return hd;
    },
    forTestSuite: function () {
      return gd;
    },
    getGroupedMouseFollowConfig: function () {
      return Er;
    },
    getUnpairedMouseFollowAction: function () {
      return cd;
    },
    getUnpairedMouseFollowConfig: function () {
      return Mi;
    },
    remapMouseFollowActionGroupsInTimelines: function () {
      return pd;
    },
    setGroupedMouseFollowActionConfig: function () {
      return ld;
    },
    setMouseFollowActionConfig: function () {
      return Pi;
    },
    stripMouseFollowActionInstanceIds: function () {
      return ud;
    },
    stripMouseFollowConfigInstanceIds: function () {
      return Sr;
    },
  });
  var yt = br();
  function Sr(n) {
    let { groupId: e, syncedActionId: t, ...r } = n;
    return r;
  }
  function ad(n, e) {
    return { ...Sr(n), groupId: e };
  }
  function Er(n, e, t) {
    let r = ad(n, e);
    return (
      t?.axis !== void 0 && (r.axis = t.axis),
      t?.followMode !== void 0 && (r.followMode = t.followMode),
      r
    );
  }
  function Mi(n, e = n.axis) {
    let { syncedActionId: t, ...r } = n,
      s =
        r.followMode === "full" && e
          ? (0, yt.getSingleAxisMouseFollowMode)(e)
          : r.followMode;
    return { ...r, ...(s !== void 0 ? { followMode: s } : {}) };
  }
  function vt(n, e) {
    let t = (0, yt.getMouseFollowConfig)(n);
    if (!t) return n;
    let r = e(t);
    return r === t
      ? n
      : {
          ...n,
          properties: {
            ...n.properties,
            [yt.IX3_WF_EXTENSION_KEYS.MOUSE_FOLLOW]: r,
          },
        };
  }
  function Pi(n, e) {
    return {
      ...n,
      properties: {
        ...n.properties,
        [yt.IX3_WF_EXTENSION_KEYS.MOUSE_FOLLOW]: e,
      },
    };
  }
  function ld(n, e, t, r) {
    return Pi(n, Er(e, t, r));
  }
  function cd(n, e) {
    return vt(n, (t) => Mi(t, e));
  }
  function ud(n) {
    return vt(n, Sr);
  }
  function fd(n, e, t) {
    return t[e] ? [n, e].sort().join(":") : `single:${n}`;
  }
  function dd(n, e, t) {
    return (
      e.groupId ??
      (e.syncedActionId ? fd(n, e.syncedActionId, t) : `single:${n}`)
    );
  }
  function xi(n, e) {
    let t = {};
    return (r, s = r.id) =>
      vt(r, (o) => {
        let i = dd(s, o, e),
          a = t[i] ?? n(i);
        return (t[i] = a), Er(o, a);
      });
  }
  function ki(n, e, t) {
    let r = t ?? Object.fromEntries(n.map((o) => [o.id, o.id])),
      s = xi(() => e(), r);
    return (o, i) => s(o, i ?? o.id);
  }
  function pd(
    n,
    { generateGroupId: e, actionIdMap: t, mapAction: r = (s) => s }
  ) {
    let s = ki(
      n.flatMap((o) => o.actions ?? []),
      e,
      t
    );
    return n.map((o) => {
      let i = !1,
        a = o.actions?.map((l) => {
          let c = l.id,
            u = r(l),
            f = s(u, c);
          return (i = i || f !== l), f;
        });
      return i && a ? { ...o, actions: a } : o;
    });
  }
  function hd(n) {
    let e = Object.fromEntries(n.map((r) => [r.id, r.id])),
      t = xi((r) => r, e);
    return (r, s) => {
      let o = t(r);
      return s ? vt(o, (i) => (i.axis ? i : { ...i, axis: s })) : o;
    };
  }
  var gd = { createMouseFollowActionGroupRemapper: ki };
});
var Fi = w((Or) => {
  "use strict";
  Object.defineProperty(Or, "__esModule", { value: !0 });
  function md(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  md(Or, {
    TRANSIENT_IX3_CLONE_ATTR: function () {
      return Li;
    },
    isTransientIX3Clone: function () {
      return yd;
    },
  });
  var Li = "data-ix3-clone",
    yd = (n) => !!n.closest?.(`[${Li}]`);
});
var ne = w((Ce) => {
  "use strict";
  Object.defineProperty(Ce, "__esModule", { value: !0 });
  Object.defineProperty(Ce, "CORE_PLUGIN_INFO", {
    enumerable: !0,
    get: function () {
      return vd;
    },
  });
  Ar(br(), Ce);
  Ar(Ni(), Ce);
  Ar(Fi(), Ce);
  function Ar(n, e) {
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
  var vd = { namespace: "wf", pluginId: "core", version: "1.0.0" };
});
var He = w((Rr) => {
  "use strict";
  Object.defineProperty(Rr, "__esModule", { value: !0 });
  function Td(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Td(Rr, {
    getScrollY: function () {
      return Ed;
    },
    initScrollCache: function () {
      return Sd;
    },
    noop: function () {
      return bd;
    },
  });
  var bd = () => {},
    _r = 0,
    Tt = 0,
    Me = null;
  function Sd() {
    (Tt += 1),
      Me ||
        ((Me = () => {
          _r = window.scrollY;
        }),
        (_r = window.scrollY),
        window.addEventListener("scroll", Me, { passive: !0 }));
    let n = !1;
    return () => {
      n ||
        ((n = !0),
        (Tt = Math.max(0, Tt - 1)),
        Tt === 0 &&
          Me &&
          (window.removeEventListener("scroll", Me), (Me = null)));
    };
  }
  function Ed() {
    return _r;
  }
});
var Di = w((Ir) => {
  "use strict";
  Object.defineProperty(Ir, "__esModule", { value: !0 });
  function wd(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  wd(Ir, {
    getFirst: function () {
      return Od;
    },
    getSecond: function () {
      return Ad;
    },
    pair: function () {
      return _d;
    },
  });
  var Od = (n) => n[0],
    Ad = (n) => n[1],
    _d = (n, e) => [n, e];
});
var bt = w((Cr) => {
  "use strict";
  Object.defineProperty(Cr, "__esModule", { value: !0 });
  function Rd(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Rd(Cr, {
    TRANSIENT_IX3_CLONE_ATTR: function () {
      return Vi.TRANSIENT_IX3_CLONE_ATTR;
    },
    isTransientIX3Clone: function () {
      return Vi.isTransientIX3Clone;
    },
  });
  var Vi = ne();
});
var Pr = w((Mr) => {
  "use strict";
  Object.defineProperty(Mr, "__esModule", { value: !0 });
  function Id(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Id(Mr, {
    elementTargetSelector: function () {
      return Nd;
    },
    safeClosest: function () {
      return xd;
    },
    safeGetElementById: function () {
      return Cd;
    },
    safeMatches: function () {
      return kd;
    },
    safeQuerySelector: function () {
      return Pd;
    },
    safeQuerySelectorAll: function () {
      return Md;
    },
  });
  var St = bt(),
    Cd = (n) => {
      try {
        let e = document.getElementById(n);
        return e && !(0, St.isTransientIX3Clone)(e) ? e : null;
      } catch {
        return null;
      }
    },
    Md = (n, e) => {
      try {
        let t = e.querySelectorAll(n);
        if (t.length === 0) return [];
        let r = [];
        for (let s of t) (0, St.isTransientIX3Clone)(s) || r.push(s);
        return r;
      } catch {
        return null;
      }
    },
    Pd = (n, e) => {
      try {
        let t = e.querySelector(n);
        if (!t) return null;
        if (!(0, St.isTransientIX3Clone)(t)) return t;
        let r = e.querySelectorAll(n);
        for (let s of r) if (!(0, St.isTransientIX3Clone)(s)) return s;
        return null;
      } catch {
        return null;
      }
    },
    xd = (n, e) => {
      try {
        return n.closest(e);
      } catch {
        return null;
      }
    },
    kd = (n, e) => {
      try {
        return n.matches(e);
      } catch {
        return null;
      }
    },
    Nd = (n) => `[data-wf-target*="${CSS.escape(`[${JSON.stringify(n)}`)}"]`;
});
var Bi = w((xr) => {
  "use strict";
  Object.defineProperty(xr, "__esModule", { value: !0 });
  Object.defineProperty(xr, "applyScope", {
    enumerable: !0,
    get: function () {
      return Fd;
    },
  });
  var le = ne(),
    Et = Pr(),
    Ld = bt(),
    re = (n) => n.filter((e) => !(0, Ld.isTransientIX3Clone)(e)),
    Fd = (n, e) => {
      let t = re(n);
      if (!e) return t;
      if (Array.isArray(e)) {
        let [r, s] = e,
          o = [];
        switch (r) {
          case le.TargetScope.FIRST_ANCESTOR:
            for (let i of t) {
              let a = s ? (0, Et.safeClosest)(i, s) : null;
              a && o.push(a);
            }
            return re(o);
          case le.TargetScope.FIRST_DESCENDANT:
            for (let i of t) {
              let a = s ? (0, Et.safeQuerySelector)(s, i) : i.firstElementChild;
              a && o.push(a);
            }
            return re(o);
          case le.TargetScope.DESCENDANTS:
            for (let i of t)
              o.push(...((0, Et.safeQuerySelectorAll)(s, i) || []));
            return re(o);
          case le.TargetScope.ANCESTORS:
            for (let i of t) {
              let a = i.parentElement;
              for (; a; )
                (!s || (0, Et.safeMatches)(a, s)) && o.push(a),
                  (a = a.parentElement);
            }
            return re(o);
        }
      }
      switch (e) {
        case le.TargetScope.CHILDREN:
          return re(t.flatMap((r) => [...r.children]));
        case le.TargetScope.PARENT:
          return re(t.map((r) => r.parentElement).filter(Boolean));
        case le.TargetScope.SIBLINGS:
          return re(
            t.flatMap((r) =>
              r.parentElement
                ? [...r.parentElement.children].filter((s) => s !== r)
                : []
            )
          );
        case le.TargetScope.NEXT:
          return re(t.flatMap((r) => r.nextElementSibling || []));
        case le.TargetScope.PREVIOUS:
          return re(t.flatMap((r) => r.previousElementSibling || []));
        default:
          return t;
      }
    };
});
var qi = w((Lr) => {
  "use strict";
  Object.defineProperty(Lr, "__esModule", { value: !0 });
  function Dd(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Dd(Lr, {
    backdropDeclarations: function () {
      return Nr;
    },
    buildBackdropTween: function () {
      return qd;
    },
  });
  var We = H(),
    Ye = ze(),
    Ke = null,
    Vd = 0,
    kr = new WeakMap(),
    ji = /random\(|[+\-*/]=|\/\*|[;{}]/,
    Pe = (n, e) => (typeof n == "number" ? n + e : n),
    Gi = { rotation: "", rotationZ: "", rotationX: "x ", rotationY: "y " };
  function Nr(n) {
    let e = "",
      t = [[], [], []],
      r = [],
      s = [],
      o,
      i,
      a;
    for (let c in n) {
      let u = n[c];
      if (
        (typeof u != "number" && typeof u != "string") ||
        (typeof u == "string" && ji.test(u))
      )
        continue;
      let f = c[0] === "y" ? 1 : c[0] === "z" ? 2 : 0;
      if (c === "x" || c === "y" || c === "z") t[f].push(Pe(u, "px"));
      else if (c === "xPercent" || c === "yPercent") t[f].push(Pe(u, "%"));
      else if (c === "scale") r[2] = u;
      else if (c === "scaleX" || c === "scaleY") r[c === "scaleY" ? 1 : 0] = u;
      else if (c === "skewX" || c === "skewY")
        s[c === "skewY" ? 1 : 0] = Pe(u, "deg");
      else if (c === "transformPerspective") o = Pe(u, "px");
      else if (Object.prototype.hasOwnProperty.call(Gi, c))
        a ??= { axis: Gi[c], angle: Pe(u, "deg") };
      else if (c === "width" || c === "height") e += `${c}:${Pe(u, "px")};`;
      else {
        let d =
          c === "autoAlpha"
            ? "opacity"
            : c.replace(/[A-Z]/g, (p) => "-" + p.toLowerCase());
        if (ji.test(d)) continue;
        e += `${d}:${u};`;
      }
    }
    if (t.some((c) => c.length)) {
      let c = t.map((d) =>
          d.length > 1 ? `calc(${d.join(" + ")})` : d[0] ?? "0"
        ),
        u = t[2].length > 0,
        f = (u ? c : c.slice(0, 2)).join(" ");
      u && o ? (i = `translate3d(${c.join(", ")})`) : (e += `translate:${f};`);
    }
    r.length && (e += `scale:${r[0] ?? r[2] ?? 1} ${r[1] ?? r[2] ?? 1};`),
      a && !o && (e += `rotate:${a.axis}${a.angle};`);
    let l = [
      o && `perspective(${o})`,
      i,
      o && a && `rotate${a.axis.trim().toUpperCase()}(${a.angle})`,
      s.length && `skew(${s[0] ?? 0}, ${s[1] ?? 0})`,
    ]
      .filter(Boolean)
      .join(" ");
    return l && (e += `transform:${l};`), e;
  }
  function Bd() {
    return (
      Ke?.isConnected ||
        ((Ke = document.createElement("style")), document.head.appendChild(Ke)),
      Ke.sheet
    );
  }
  function jd(n) {
    let e = Ke?.sheet;
    if (e)
      for (let t = e.cssRules.length - 1; t >= 0; t--)
        e.cssRules[t].name === n && e.deleteRule(t);
  }
  function Gd(n, e, t) {
    let r = Bd();
    if (!r) return !1;
    let s = `@keyframes ${n}{${e ? `from{${e}}` : ""}${t ? `to{${t}}` : ""}}`;
    try {
      r.insertRule(s, r.cssRules.length);
    } catch {
      return !1;
    }
    return !0;
  }
  var Ud = (n) => `${n} 1s linear calc(var(--${n}, 1) * -1s) both paused`;
  function $i(n, e) {
    e.length
      ? (n.style.setProperty(
          Ye.POPOVER_BACKDROP_ANIMATION_PROPERTY,
          e.map(Ud).join(", ")
        ),
        n.setAttribute(Ye.POPOVER_BACKDROP_ANIMATED_ATTRIBUTE, ""))
      : (n.style.removeProperty(Ye.POPOVER_BACKDROP_ANIMATION_PROPERTY),
        n.removeAttribute(Ye.POPOVER_BACKDROP_ANIMATED_ATTRIBUTE));
  }
  function $d(n, e, t) {
    let r = kr.get(n);
    r || kr.set(n, (r = []));
    let s = r.indexOf(e);
    if (s !== -1) {
      if (!t || s === r.length - 1) return;
      r.splice(s, 1);
    }
    r.push(e), $i(n, r);
  }
  function Ui(n, e) {
    let t = kr.get(n),
      r = t ? t.indexOf(e) : -1;
    !t || r === -1 || (t.splice(r, 1), $i(n, t));
  }
  function qd({
    timeline: n,
    tweenType: e,
    config: t,
    vars: r,
    targets: s,
    position: o,
  }) {
    let i =
        e === We.TweenType.From || e === We.TweenType.FromTo ? Nr(t.from) : "",
      a = e === We.TweenType.From ? "" : Nr(t.to);
    if (!i && !a) return;
    let l = `${Ye.POPOVER_BACKDROP_KEYFRAMES_PREFIX}${++Vd}`;
    if (!Gd(l, i, a)) return;
    let c = `--${l}`,
      u = (T) => {
        for (let b of s)
          b.style.getPropertyValue(c) || b.style.setProperty(c, "0"),
            $d(b, l, T);
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
          let T = this.progress?.() ?? f,
            b = T !== f && d !== T < f;
          T !== f && (d = T < f), (f = T), u(b || e === We.TweenType.Set);
        },
      };
    e === We.TweenType.Set
      ? n.set(s, { ...g, [c]: 1 }, o)
      : n.fromTo(s, { [c]: 0 }, { ...g, [c]: 1 }, o);
    let y = (T) => {
      T.newState === "open" && Ui(T.currentTarget, l);
    };
    for (let T of s) T.addEventListener("beforetoggle", y);
    return () => {
      for (let T of s)
        T.removeEventListener("beforetoggle", y),
          Ui(T, l),
          T.style.removeProperty(c);
      jd(l);
    };
  }
});
var $r = w((Ur) => {
  "use strict";
  Object.defineProperty(Ur, "__esModule", { value: !0 });
  function zd(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  zd(Ur, {
    build: function () {
      return Yd;
    },
    popoverFromTriggerElement: function () {
      return Vr;
    },
    popoversByPath: function () {
      return xe;
    },
  });
  var se = Di(),
    me = ne(),
    W = ze(),
    q = Pr(),
    fe = Bi(),
    Hd = qi();
  function Vr(n, e) {
    if (!n) return null;
    let t = n.closest("." + W.POPOVER_MASK_CLASS);
    if (t) {
      let a = t.getAttribute(W.POPOVER_MASK_FOR_ATTRIBUTE),
        l = a ? (0, q.safeGetElementById)(a) : null;
      return l && e(l) ? l : null;
    }
    let s = n.closest("[popovertarget]")?.getAttribute("popovertarget"),
      o = s ? (0, q.safeGetElementById)(s) : null;
    if (o && e(o)) return o;
    let i = n.closest("." + W.POPOVER_CLASS);
    for (; i instanceof HTMLElement; ) {
      if (e(i)) return i;
      i = i.parentElement?.closest("." + W.POPOVER_CLASS) ?? null;
    }
    return null;
  }
  var zi = (n) =>
    (0, W.readInstPathsFromTriggers)(
      n?.triggers,
      me.IX3_WF_EXTENSION_KEYS.POPOVER,
      me.IX3_WF_EXTENSION_KEYS.INST
    );
  function Wd(n) {
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
  var Xe = new WeakMap(),
    Br = new Set();
  function jr(n) {
    let e = n.nextElementSibling;
    return e instanceof HTMLElement &&
      e.classList.contains(W.POPOVER_MASK_CLASS) &&
      e.getAttribute(W.POPOVER_MASK_FOR_ATTRIBUTE) === n.id
      ? e
      : null;
  }
  function Hi(n) {
    let e = document.createElement("div");
    return (
      (e.className = W.POPOVER_MASK_CLASS),
      e.setAttribute("popover", "manual"),
      e.setAttribute(W.POPOVER_MASK_FOR_ATTRIBUTE, n.id),
      e.setAttribute("aria-hidden", "true"),
      n.after(e),
      e
    );
  }
  function Fr(n, e) {
    if (!n || !Br.has(n)) return;
    let t = (0, q.safeQuerySelectorAll)("." + W.POPOVER_MASK_CLASS, document);
    if (t?.length)
      for (let r of t) {
        let s = r.previousElementSibling;
        if (!(s instanceof HTMLElement) || jr(s) !== r) {
          if (r.hasAttribute(W.POPOVER_MASK_FOR_ATTRIBUTE)) {
            let o = r.getAttribute(W.POPOVER_MASK_FOR_ATTRIBUTE),
              i = o ? (0, q.safeGetElementById)(o) : null;
            i && !jr(i) && Xe.get(i)?.clear(), r.remove();
          }
          continue;
        }
        e.indexOf(s) === -1 && Xe.get(s)?.has(n) && Yi(s, n, !1);
      }
    (!e.length || !e.some((r) => Xe.get(r)?.has(n))) && Br.delete(n);
  }
  function Yi(n, e, t) {
    let r = jr(n);
    if (!e) return r ?? (t ? Hi(n) : null);
    let s = Xe.get(n) ?? new Set();
    return (
      Xe.set(n, s),
      t ? (s.add(e), Br.add(e)) : s.delete(e),
      s.size > 0 ? r ?? Hi(n) : (r?.remove(), null)
    );
  }
  function xe(n, e) {
    let t = (0, q.safeQuerySelectorAll)(
      (0, q.elementTargetSelector)((0, se.pair)(n, e)),
      document
    );
    return t?.length ? [...t] : [];
  }
  var Gr = (n) => JSON.stringify(n === me.TargetScope.ALL ? null : n ?? null),
    Dr = (n) => !!n?.filterBy && n?.relationship !== "none",
    Wi = (n) => `trigger-parent|${Gr(n)}`;
  function Yd(n) {
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
      o = (c, u, f, d, p) => {
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
        for (let [y, T] of u) {
          let b = r(c, [y, T]) ? [c] : xe(y, T);
          for (let m of b) h.has(m) || (h.add(m), g.push(m));
        }
        return g;
      },
      i = (c, u, f, d, p) => {
        let h = zi(f),
          g = (0, W.readInstPath)(c),
          y =
            g && (!h.length || h.some((m) => m[0] === g[0] && m[1] === g[1]))
              ? g
              : null,
          T = (d ?? p)?.[1]?.assignedInstances,
          b = Vr(
            u,
            (m) => (!T || s(T, m)) && (r(m, y) || h.some((A) => r(m, A)))
          );
        return b
          ? o(b, h, T, d, p) ?? [b]
          : T
          ? (h.length ? t(h) : y ? xe(y[0], y[1]) : e).filter((A) => s(T, A))
          : !d && p && p[0] !== me.IX3_WF_EXTENSION_KEYS.POPOVER && h.length
          ? t(h)
          : y
          ? xe(y[0], y[1])
          : t(h);
      },
      a = (c, u, f, d, p, h) => {
        let g = zi(f),
          y = Vr(u, (b) => (!d || s(d, b)) && g.some((m) => r(b, m)));
        if (y) return o(y, g, d, p, h) ?? [y];
        if (g.length) return t(g);
        let T = (0, W.readInstPath)(c);
        return T ? xe(T[0], T[1]) : e;
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
          if (Dr(u)) return;
          let f = Array.isArray(c) ? c[1] : void 0;
          return f === me.TargetScope.PARENT ? Wi(void 0) : `trigger|${Gr(f)}`;
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
          Dr(u) ? void 0 : Wi(Array.isArray(c) ? c[1] : void 0),
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
          let y = [...g];
          if (!u) return (0, fe.applyScope)(y, p ? d : void 0);
          let T = u.dataset.wfTarget;
          if (!T) return y;
          try {
            let b = JSON.parse(T),
              m = (0, se.getFirst)(h),
              A = b.find((E) => (0, se.getFirst)((0, se.getFirst)(E)) === m);
            return A
              ? (0, fe.applyScope)(
                  y.filter((E) =>
                    (E.dataset.wfTarget || "").includes(
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
          if (Dr(u) || !Array.isArray(c)) return;
          let [f, d] = c,
            p = Array.isArray(f),
            h = p ? (0, se.pair)(f[0], f[1]) : (0, se.pair)(f, d);
          return `inst|${JSON.stringify(h)}|${Gr(p ? d : void 0)}`;
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
        ) => i(c, u, f, d, p),
        isDynamic: !0,
      })
      .addTargetResolver("popover-backdrop", {
        resolve: (
          [, c],
          { triggerElement: u, interaction: f, trigger: d, causeTrigger: p }
        ) => {
          let h = (d ?? p)?.[1]?.assignedInstances,
            g = a(c, u, f, h, d, p);
          if (!g.length) return u || Fr(f?.id, []), e;
          let y = Wd(f),
            T = [],
            b = [];
          for (let m of g) {
            if (!m.id || !l(m, f)) continue;
            T.push(m);
            let A = y.some((v) => !v || s(v, m)),
              E = Yi(m, f?.id, A);
            E && (!h || s(h, m)) && b.push(E);
          }
          return (
            u || Fr(f?.id, T),
            d ? (b.length ? b : e) : h ? g.filter((m) => s(h, m)) : g
          );
        },
        buildTween: Hd.buildBackdropTween,
        release: (c) => Fr(c, []),
        isDynamic: !0,
      });
  }
});
var Xi = w((zr) => {
  "use strict";
  Object.defineProperty(zr, "__esModule", { value: !0 });
  Object.defineProperty(zr, "TouchScrollGuard", {
    enumerable: !0,
    get: function () {
      return qr;
    },
  });
  var Ki = He();
  function Kd(n) {
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
  var qr = class {
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
      let s = (0, Ki.initScrollCache)();
      t.addEventListener("abort", s);
      let o = (l) => {
          let c = l.touches[0];
          c &&
            ((this.refX = c.clientX),
            (this.refY = c.clientY),
            (this.lastY = c.clientY),
            (this.locked = null),
            (this.effectFromBoundary = !1),
            (this.isScrolling = !1),
            (this.scroller = Kd(l.target ?? e)),
            (this.maxScroll = this.scroller
              ? this.scroller.scrollHeight - this.scroller.clientHeight
              : document.documentElement.scrollHeight - window.innerHeight));
        },
        i = (l) => {
          let c = l.touches[0];
          if (!c) return;
          let u = c.clientY,
            f = c.clientX - this.refX,
            d = u - this.refY,
            p = u > this.lastY,
            h = u < this.lastY,
            g = this.scroller ? this.scroller.scrollTop : (0, Ki.getScrollY)(),
            y = this.maxScroll,
            T = g <= 1 && p,
            b = y > 0 && g >= y - 1 && h;
          this.locked === null && this.decide(f, d, T || b),
            this.locked === "scroll" &&
              (T || b) &&
              ((this.refX = c.clientX),
              (this.refY = u),
              (this.locked = "effect"),
              (this.effectFromBoundary = !0)),
            this.locked === "effect" &&
              this.effectFromBoundary &&
              !(T || b) &&
              ((this.refX = c.clientX),
              (this.refY = u),
              (this.locked = null),
              (this.effectFromBoundary = !1)),
            (this.lastY = u),
            (this.isScrolling =
              this.locked === "scroll" ||
              this.locked === null ||
              (this.locked === "effect" && !l.cancelable && !(T || b))),
            this.locked === "effect" && l.cancelable && l.preventDefault();
        },
        a = () => {
          (this.locked = null), (this.isScrolling = !1);
        };
      e.addEventListener("touchstart", o, { passive: !0, signal: t }),
        e.addEventListener("touchmove", i, { passive: !1, signal: t }),
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
var Qi = w((Wr) => {
  "use strict";
  Object.defineProperty(Wr, "__esModule", { value: !0 });
  Object.defineProperty(Wr, "VelocityController", {
    enumerable: !0,
    get: function () {
      return Hr;
    },
  });
  var Xd = {
    adaptiveMax: 2800,
    adaptAlpha: 0.05,
    adaptDecay: 0.99,
    hardMin: 600,
    hardMax: 4e3,
  };
  function Qd(n, e) {
    let t = Math.max(e.hardMin, Math.min(e.hardMax, n));
    (e.adaptiveMax = Math.max(t, e.adaptiveMax * e.adaptDecay)),
      (e.adaptiveMax += (t - e.adaptiveMax) * e.adaptAlpha),
      (e.adaptiveMax = Math.max(e.hardMin, Math.min(e.hardMax, e.adaptiveMax)));
  }
  var Zd = (n) => n * n;
  function Jd(n, e, t, r) {
    let s = Math.hypot(n, e);
    Qd(s, t);
    let o = Math.max(1, t.adaptiveMax),
      i = Zd(Math.min(1, s / o)),
      a = 0,
      l = 0;
    return (
      r.x && r.y
        ? s > 0 && ((a = n / s), (l = e / s))
        : r.x
        ? n !== 0 && (a = Math.sign(n))
        : r.y && e !== 0 && (l = Math.sign(e)),
      { n: i, dirX: a, dirY: l }
    );
  }
  var Hr = class {
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
        (this.velState = { ...Xd }),
        (this.lastDirX = 0),
        (this.lastDirY = 0),
        (this.lastNormVelocity = 0);
    }
    update(e, t) {
      let {
        n: r,
        dirX: s,
        dirY: o,
      } = Jd(e, t, this.velState, this.config.axes);
      (this.lastNormVelocity = r), (this.lastDirX = s), (this.lastDirY = o);
    }
    reset() {
      (this.lastDirX = 0), (this.lastDirY = 0), (this.lastNormVelocity = 0);
    }
    destroy() {
      this.reset();
    }
  };
});
var Zi = w((Kr) => {
  "use strict";
  Object.defineProperty(Kr, "__esModule", { value: !0 });
  Object.defineProperty(Kr, "IntervalController", {
    enumerable: !0,
    get: function () {
      return Yr;
    },
  });
  var ep = ne(),
    tp = 16,
    Yr = class {
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
        let { x: t, y: r, velocityFactor: s, dirX: o, dirY: i } = e;
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
        for (; this.accum >= u && f < tp; ) {
          this.accum -= u;
          let d = {
            cursorPos: { x: t, y: r },
            velocityFactor: s,
            dirX: o,
            dirY: i,
          };
          this.config.channelManager.fireInterval?.(
            ep.TIMELINE_ROLE_NAMES.INTERVAL,
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
var aa = w((Qr) => {
  "use strict";
  Object.defineProperty(Qr, "__esModule", { value: !0 });
  Object.defineProperty(Qr, "fireMouseMoveInterval", {
    enumerable: !0,
    get: function () {
      return gp;
    },
  });
  var np = ne(),
    ia = bt(),
    Xr = new Set(["x", "y"]),
    rp = new Set(["scale", "scaleX", "scaleY"]),
    Ji = new WeakMap(),
    ea = new WeakMap();
  function sp(n) {
    let e = Ji.get(n);
    return (
      e ||
        ((e = {
          activeIntervalEls: new Map(),
          intervalClones: new Set(),
          baselineValues: new Map(),
        }),
        Ji.set(n, e)),
      e
    );
  }
  function op(n, e, t, r) {
    let s = ea.get(n);
    s || ((s = new Set()), ea.set(n, s)),
      !s.has(t) &&
        (s.add(t),
        r(() => {
          let o = e.activeIntervalEls.get(t);
          if (o)
            for (let i of o)
              e.intervalClones.has(i) &&
                (i.isConnected && i.remove(), e.intervalClones.delete(i));
          e.activeIntervalEls.delete(t),
            e.baselineValues.delete(t),
            s.delete(t);
        }));
  }
  function ta(n) {
    if (n)
      for (let e in n) {
        if (!Xr.has(e)) continue;
        let t = n[e];
        (typeof t == "string" && (t.startsWith("+=") || t.startsWith("-="))) ||
          ((typeof t == "number" || typeof t == "string") && (n[e] = `+=${t}`));
      }
  }
  var ip = /^random\((.*)\)([a-z%]*)$/i,
    ap = /^-?\d*\.?\d+$/;
  function lp(n, e) {
    let t = ip.exec(n);
    if (!t) return null;
    let r = t[1] ?? "",
      s = t[2] ?? "",
      o = r.startsWith("[") && r.endsWith("]"),
      a = (o ? r.slice(1, -1) : r).split(",").map((c) => c.trim());
    if (!a.every((c) => ap.test(c))) return null;
    let l = a
      .map((c, u) => {
        let f = Number(c);
        return !o && u >= 2 ? Math.abs(e(f) - e(0)) : e(f);
      })
      .join(", ");
    return `random(${o ? `[${l}]` : l})${s}`;
  }
  function na(n, e, t, r) {
    if (n)
      for (let s in n) {
        let o = n[s];
        if (typeof o != "number" && typeof o != "string") continue;
        let i = !1,
          a = typeof o == "string" ? o : "";
        typeof o == "string" &&
          (o.startsWith("+=") || o.startsWith("-=")) &&
          ((i = !0), (a = (o.startsWith("-=") ? "-" : "") + o.slice(2)));
        let l, c;
        if (Xr.has(s)) {
          let p = s === "y" ? r : t;
          (l = (h) => h * e * p), (c = !0);
        } else if (s === "rotation") {
          let p = Math.abs(t) >= Math.abs(r) ? t : -r;
          (l = (h) => h * e * p), (c = i);
        } else
          rp.has(s)
            ? ((l = i ? (p) => p * e : (p) => 1 + (p - 1) * e), (c = i))
            : ((l = (p) => p * e), (c = i));
        if (typeof o == "string" && a.startsWith("random(")) {
          let p = lp(a, l);
          if (p == null) continue;
          n[s] = c ? `+=${p}` : p;
          continue;
        }
        let u,
          f = "";
        if (typeof o == "number") u = o;
        else {
          if (((u = parseFloat(a)), isNaN(u))) continue;
          f = a.replace(/^-?[\d.]+/, "");
        }
        let d = l(u);
        n[s] = c ? `+=${d}${f}` : d;
      }
  }
  function cp(n, e) {
    let t = n.getOneShotTimelineContext(e),
      r = t?.timelineDef;
    if (!t || !r?.actions?.length) return null;
    let s = r.triggerMetadata,
      o = s?.pluginConfig?.type === "mouseMove" ? s.pluginConfig : void 0;
    return s?.role !== "interval" && !o
      ? null
      : {
          oneShot: t,
          mouseMoveMeta: o ?? { type: "mouseMove" },
          axes: s?.axes,
        };
  }
  function up(n, e, t, r, s) {
    let o = n.cloneNode(!0);
    o.removeAttribute("style"),
      o.removeAttribute("id"),
      o.removeAttribute("data-w-id"),
      o.setAttribute(ia.TRANSIENT_IX3_CLONE_ATTR, "true"),
      (o.style.position = "absolute"),
      (o.style.margin = "0"),
      (o.style.pointerEvents = "none"),
      n.insertAdjacentElement("beforebegin", o);
    let i = e.baselineValues.get(s)?.get(n);
    return i && r.set(o, { ...i }), e.intervalClones.add(o), t.add(o), o;
  }
  function fp(n, e) {
    let t = [],
      r = new Set();
    for (let s of n.timelineDef.actions)
      for (let o in s.properties) {
        let i = n.getActionTweenConfig(s, o, [e]);
        if (i) {
          for (let a of [i.to, i.from])
            if (a)
              for (let l of Object.keys(a)) Xr.has(l) ? t.push(l) : r.add(l);
        }
      }
    return { clearProps: t, baselineProps: r };
  }
  function dp(n, e, t, r, s) {
    let { clearProps: o, baselineProps: i } = fp(n, t);
    if (i.size > 0) {
      let a = {};
      for (let c of i) a[c] = e.getProperty(t, c);
      let l = r.baselineValues.get(s);
      l || ((l = new WeakMap()), r.baselineValues.set(s, l)), l.set(t, a);
    }
    o.length !== 0 && e.set(t, { clearProps: o.join(",") });
  }
  function ra(n) {
    if (n)
      for (let e in n) {
        let t = n[e];
        typeof t == "function" &&
          "legacyExpression" in t &&
          (n[e] = t.legacyExpression);
      }
  }
  function pp(n, e, t) {
    return (r, s, o) => {
      ra(o.to),
        ra(o.from),
        (
          s.pluginConfig?.type === "mouseMove"
            ? s.pluginConfig.velocityInfluence
            : !1
        )
          ? n != null && (na(o.to, n, e, t), o.from && na(o.from, n, e, t))
          : (ta(o.to), o.from && ta(o.from));
    };
  }
  function hp(n, e, t, r, s, o, i, a) {
    let [l] = t;
    if (l && (n.set(l, { zIndex: r + 1 + s }, 0), !(!o || (!i && !a))))
      for (let c of t) {
        let u = c.getBoundingClientRect(),
          f = {};
        if (i) {
          let d = Number(e.getProperty(c, "x")) || 0;
          f.x = o.x - (u.left + u.width / 2 - d);
        }
        if (a) {
          let d = Number(e.getProperty(c, "y")) || 0;
          f.y = o.y - (u.top + u.height / 2 - d);
        }
        n.set(c, f, 0);
      }
  }
  function sa(n) {
    for (let e of n) e();
    n.clear();
  }
  function oa(n, e, t) {
    n.activeIntervalEls.get(e)?.delete(t),
      n.intervalClones.has(t) &&
        (t.isConnected && t.remove(), n.intervalClones.delete(t));
  }
  var gp = ({
    coordinator: n,
    timelineId: e,
    element: t,
    options: r,
    animation: s,
  }) => {
    if (!s.hasGsap()) return;
    let o = r.targetIndex;
    if (o == null) return;
    let i = cp(n, e);
    if (!i) return;
    let { oneShot: a, mouseMoveMeta: l, axes: c } = i,
      u = sp(n),
      f = a
        .getFirstActionTargets(t)
        .filter((k) => !(0, ia.isTransientIX3Clone)(k));
    if (!f.length) return;
    let d = [f[o % f.length]],
      p = d,
      h = d[0],
      g = u.activeIntervalEls.get(e);
    g || ((g = new Set()), u.activeIntervalEls.set(e, g)),
      g.has(h) ? (p = [up(h, u, g, s, e)]) : (dp(a, s, h, u, e), g.add(h));
    let y = p[0],
      T = c?.x === !1 && c?.y === !1,
      b = T || (c?.x ?? l?.setMouseX ?? !0),
      m = T || (c?.y ?? l?.setMouseY ?? !0),
      A = (0, np.narrowMouseMoveIntervalPayload)(r.pluginPayload),
      E = A.cursorPos,
      v = A.velocityFactor,
      S = A.dirX ?? 0,
      _ = A.dirY ?? 0,
      O = new Set(),
      I = a.buildActionTimeline({
        targets: p,
        cleanupBucket: O,
        varsTransform: pp(v, S, _),
        beforeTweens: (k) => {
          hp(k, s, p, f.length, o, E, b, m);
        },
      });
    if (!I) {
      sa(O), oa(u, e, y);
      return;
    }
    let x = null,
      M = !1,
      R = (k) => {
        M || ((M = !0), x?.(), k && I.kill(), sa(O), oa(u, e, y));
      };
    (x = a.registerCleanup(() => R(!0))),
      I.eventCallback("onComplete", () => {
        R(!1);
      }),
      op(n, u, e, a.registerCleanup);
  };
});
var pa = w((es) => {
  "use strict";
  Object.defineProperty(es, "__esModule", { value: !0 });
  Object.defineProperty(es, "buildMouseMove", {
    enumerable: !0,
    get: function () {
      return Ap;
    },
  });
  var de = ne(),
    Qe = He(),
    mp = Xi(),
    yp = Qi(),
    vp = Zi(),
    Tp = aa(),
    bp = 50,
    la = 50,
    Zr = null;
  function Sp() {
    return (
      Zr === null &&
        (Zr = "ontouchstart" in window || navigator.maxTouchPoints > 0),
      Zr
    );
  }
  var fa = 0,
    da = 0,
    wt = 0,
    ye = null;
  function Ep() {
    (wt += 1),
      ye ||
        ((ye = () => {
          (fa = window.innerWidth), (da = window.innerHeight);
        }),
        ye(),
        window.addEventListener("resize", ye));
    let n = !1;
    return () => {
      n ||
        ((n = !0),
        (wt = Math.max(0, wt - 1)),
        wt === 0 &&
          ye &&
          (window.removeEventListener("resize", ye), (ye = null)));
    };
  }
  var Ot = (n) => Math.max(0, Math.min(1, n));
  function wp(n, e, t) {
    return e === t || n === t || (n < t && e > t) || (n > t && e < t);
  }
  function Ze(n, e, t) {
    let r = n.tween;
    (n.tween = null),
      (n.takeoverTarget = null),
      (n.proxy.value = e),
      (n.lastValue = e),
      n.channel?.setProgress(e),
      t && r?.kill();
  }
  function ca(n, e) {
    if (n.tween) {
      if (n.proxy.value === e) {
        Ze(n, e, !0);
        return;
      }
      let t = n.tweenTarget - n.proxy.value,
        r = e - n.proxy.value;
      if (t * r < 0) {
        Ze(n, e, !0);
        return;
      }
      n.takeoverTarget = e;
      return;
    }
    (n.proxy.value = e), (n.lastValue = e), n.channel?.setProgress(e);
  }
  function Jr(n) {
    let e = n.tween;
    (n.tween = null), (n.takeoverTarget = null), e?.kill();
  }
  function ua(n, e, t, r) {
    Jr(e), (e.lastValue = e.proxy.value), (e.tweenTarget = t);
    let s = n.to(e.proxy, {
      value: t,
      duration: r,
      ease: "power2.out",
      onUpdate: () => {
        let o = e.proxy.value,
          i = e.takeoverTarget;
        if (i != null && wp(e.lastValue, o, i)) {
          Ze(e, i, !0);
          return;
        }
        (e.lastValue = o), e.channel?.setImmediate(o);
      },
      onComplete: () => {
        let o = e.takeoverTarget;
        (e.tween = null), (e.takeoverTarget = null), o != null && Ze(e, o, !1);
      },
    });
    if (!s) {
      Ze(e, t, !1);
      return;
    }
    e.tween = s;
  }
  function Op(n, e, t, r) {
    let s = Math.abs(t - n),
      o = Math.abs(r - e),
      i = Math.max(s, o);
    return 0.1 + Math.min(i / 0.5, 1) * 0.5;
  }
  function Ap(n) {
    n.addTrigger("mouse-move", (e, t, r, s) => {
      let o = e[1].pluginConfig,
        i = e[2]?.[0] === de.IX3_WF_EXTENSION_KEYS.VIEWPORT;
      return (
        s({
          type: "continuous",
          setup: (a) => {
            let { animation: l } = a;
            if (!l.hasGsap() || !l.hasObserver()) return Qe.noop;
            let c = i ? Ep() : Qe.noop;
            a.registerIntervalHandler(
              de.IX3_WF_EXTENSION_KEYS.MOUSE_MOVE,
              Tp.fireMouseMoveInterval
            );
            let u = o?.smoothness ?? bp,
              f = (o?.restingState?.x ?? la) / 100,
              d = (o?.restingState?.y ?? la) / 100,
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
              { signal: y } = g,
              T = a.getMetadata(de.TIMELINE_ROLE_NAMES.INTERVAL),
              b = {
                x: T?.axes?.x !== !1 || T?.axes?.y === !1,
                y: T?.axes?.y !== !1 || T?.axes?.x === !1,
              },
              m = T
                ? new vp.IntervalController({
                    distance:
                      T.distance ?? de.DEFAULT_MOUSE_MOVE_INTERVAL_DISTANCE,
                    axes: b,
                    channelManager: a,
                    element: t,
                    signal: y,
                  })
                : null,
              A = m ? new yp.VelocityController({ axes: b }) : null,
              E = {
                proxy: { value: f },
                channel: p,
                tween: null,
                takeoverTarget: null,
                lastValue: f,
                tweenTarget: f,
              },
              v = {
                proxy: { value: d },
                channel: h,
                tween: null,
                takeoverTarget: null,
                lastValue: d,
                tweenTarget: d,
              },
              S = !1,
              _ = (V, K) => {
                let Q = Op(E.proxy.value, v.proxy.value, V, K);
                ua(l, E, V, Q), ua(l, v, K, Q);
              },
              O = Sp(),
              I = i ? document.documentElement : t,
              x = null;
            O && (x = new mp.TouchScrollGuard(I, y));
            let M = null,
              R = () => {
                M = null;
              },
              k = () => (M || (M = t.getBoundingClientRect()), M);
            if (!i) {
              let V = new ResizeObserver(R);
              V.observe(t),
                y.addEventListener("abort", () => V.disconnect()),
                window.addEventListener("scroll", R, {
                  passive: !0,
                  capture: !0,
                  signal: y,
                }),
                window.visualViewport &&
                  window.visualViewport.addEventListener("resize", R, {
                    signal: y,
                  });
            }
            let L;
            try {
              if (
                ((L = l.createObserver({
                  target: I,
                  type: O ? "pointer,touch" : "pointer",
                  tolerance: 0,
                  onMove: (V) => {
                    if (x?.isScrolling || !a.isPreviewEnabled()) return;
                    let K = V.x ?? 0,
                      Q = V.y ?? 0,
                      Z,
                      we;
                    if (i)
                      (Z = Ot(K / Math.max(1, fa))),
                        (we = Ot(Q / Math.max(1, da)));
                    else {
                      let ie = k();
                      (Z = Ot((K - ie.left) / Math.max(1, ie.width))),
                        (we = Ot((Q - ie.top) / Math.max(1, ie.height)));
                    }
                    S ? (ca(E, Z), ca(v, we)) : ((S = !0), _(Z, we)),
                      a.publishChannel(
                        de.MOUSE_MOVE_CHANNELS.POSITION,
                        { x: K, y: Q, triggerEl: t, isViewport: i },
                        t
                      ),
                      A &&
                        (A.update(V.velocityX, V.velocityY),
                        m.update({
                          x: K,
                          y: Q,
                          velocityFactor: A.lastNormVelocity,
                          dirX: A.dirX,
                          dirY: A.dirY,
                        }));
                  },
                })),
                !L)
              )
                return m?.destroy(), A?.destroy(), g.abort(), c(), Qe.noop;
            } catch {
              return m?.destroy(), A?.destroy(), g.abort(), c(), Qe.noop;
            }
            let G = () => {
              a.isPreviewEnabled() &&
                ((S = !1),
                _(f, d),
                A?.reset(),
                a.publishChannel(de.MOUSE_MOVE_CHANNELS.LEAVE, void 0, t),
                m?.reset());
            };
            return (
              i
                ? (I.addEventListener("mouseleave", G, { signal: y }),
                  window.addEventListener("blur", G, { signal: y }))
                : t.addEventListener("mouseleave", G, { signal: y }),
              I.addEventListener("touchend", G, { signal: y, passive: !0 }),
              I.addEventListener("touchcancel", G, { signal: y, passive: !0 }),
              () => {
                L.kill(),
                  g.abort(),
                  Jr(E),
                  Jr(v),
                  m?.destroy(),
                  A?.destroy(),
                  c();
              }
            );
          },
        }),
        Qe.noop
      );
    });
  }
});
var wa = w((rs) => {
  "use strict";
  Object.defineProperty(rs, "__esModule", { value: !0 });
  Object.defineProperty(rs, "build", {
    enumerable: !0,
    get: function () {
      return Rp;
    },
  });
  var et = H(),
    F = ne(),
    ke = ze(),
    Je = He(),
    va = $r(),
    _p = pa();
  function Rp(n) {
    Ip(n),
      Cp(n),
      (0, _p.buildMouseMove)(n),
      Mp(n),
      Pp(n),
      Lp(n),
      Fp(n),
      Bp(n),
      Up(n),
      n.addTrigger("load", (t, r, s, o) => {
        let i = t[1],
          a = !1,
          l = () => {
            a || ((a = !0), o({ target: r }));
          };
        switch (i.pluginConfig?.triggerPoint) {
          case "immediate":
            return l(), Je.noop;
          case "fullyLoaded":
            return document.readyState === "complete"
              ? (l(), Je.noop)
              : s.addEventListener(window, "load", l);
          case "DOMContentLoaded":
          default:
            return document.readyState === "complete" ||
              document.readyState === "interactive"
              ? (l(), Je.noop)
              : s.addEventListener(document, "DOMContentLoaded", l);
        }
      }),
      n.addTrigger("focus", (t, r, s, o) => {
        let i = t[1];
        return s.addEventListener(
          r,
          i.pluginConfig?.useFocusWithin ? "focusin" : "focus",
          o,
          { delegate: !i.pluginConfig?.useFocusWithin }
        );
      }),
      n.addTrigger("blur", (t, r, s, o) => {
        let i = t[1];
        return s.addEventListener(
          r,
          i.pluginConfig?.useFocusWithin ? "focusout" : "blur",
          o,
          { delegate: !i.pluginConfig?.useFocusWithin }
        );
      });
    let e = (t, r, s, o) => (o({ target: r }), Je.noop);
    n.addTrigger("scroll", e),
      n.addTrigger("scroll-scrub", e),
      n.addTrigger("scroll-actions", e),
      n.addTrigger("scroll-direction", e),
      n.addTrigger("custom", (t, r, s, o) => {
        let a = t[1].pluginConfig?.eventName;
        return a
          ? s.addEventListener(r, a, o, { delegate: !1, kind: "custom" })
          : Je.noop;
      }),
      n.addTrigger("change", (t, r, s, o) =>
        s.addEventListener(r, "change", o)
      );
  }
  function Ip(n) {
    let e = new WeakMap();
    n.addTrigger("click", (t, r, s, o) => {
      let [, i] = t,
        a = s.addEventListener(
          r,
          "click",
          (l) => {
            let c = i.pluginConfig?.click,
              u = e.get(r) || new WeakMap();
            e.set(r, u);
            let d = (u.get(t) || 0) + 1;
            switch ((u.set(t, d), c)) {
              case "each": {
                o(l);
                break;
              }
              case "first": {
                d === 1 && o(l);
                break;
              }
              case "second": {
                d === 2 && o(l);
                break;
              }
              case "odd": {
                d % 2 === 1 && o(l);
                break;
              }
              case "even": {
                d % 2 === 0 && o(l);
                break;
              }
              case "custom": {
                let p = i.pluginConfig?.custom;
                p && d === p && o(l);
                break;
              }
              default:
                o(l);
            }
          },
          { delegate: !0 }
        );
      return () => {
        a(), e.delete(r);
      };
    });
  }
  function Cp(n) {
    let e = new WeakMap();
    n.addTrigger("hover", (t, r, s, o) => {
      let [, i] = t,
        a = [],
        l = i.pluginConfig?.multiTimeline,
        c = i.pluginConfig?.eventMode,
        u = c !== "leave",
        f = c !== "enter";
      if (l === !0)
        return (
          u &&
            a.push(
              s.addEventListener(r, "mouseenter", () =>
                o({
                  type: "timeline-role",
                  role: F.TIMELINE_ROLE_NAMES.MOUSE_ENTER,
                })
              )
            ),
          f &&
            a.push(
              s.addEventListener(r, "mouseleave", () =>
                o({
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
          i.control === void 0 ||
          i.control === "togglePlayReverse" ||
          i.control === "togglePlayReverseFlipEase"
        ) {
          let h =
            i.control === "togglePlayReverseFlipEase"
              ? "reverseFlipEase"
              : "reverse";
          if (
            (u &&
              a.push(
                s.addEventListener(r, "mouseenter", () =>
                  o({ type: "playback-control", control: "play" })
                )
              ),
            f)
          ) {
            let g = u ? h : "play";
            a.push(
              s.addEventListener(r, "mouseleave", () =>
                o({ type: "playback-control", control: g })
              )
            );
          }
        } else
          u && a.push(s.addEventListener(r, "mouseenter", (h) => o(h))),
            f && a.push(s.addEventListener(r, "mouseleave", (h) => o(h)));
        return () => {
          a.forEach((h) => h()), (a.length = 0);
        };
      }
      let d = (p, h) => {
        if ((i.pluginConfig?.type ?? "mouseenter") !== h) return;
        let y = i.pluginConfig?.hover || "each",
          T = e.get(r) || new Map();
        e.set(r, T);
        let m = (T.get(h) || 0) + 1;
        switch ((T.set(h, m), y)) {
          case "each": {
            o(p);
            break;
          }
          case "first": {
            m === 1 && o(p);
            break;
          }
          case "second": {
            m === 2 && o(p);
            break;
          }
          case "odd": {
            m % 2 === 1 && o(p);
            break;
          }
          case "even": {
            m % 2 === 0 && o(p);
            break;
          }
          case "custom": {
            let A = i.pluginConfig?.custom;
            A && m === A && o(p);
            break;
          }
          default:
            o(p);
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
  function Ta(n, e) {
    n.addTrigger(e, (t, r, s, o) => {
      let i = t[1].pluginConfig?.event,
        a =
          i === F.TIMELINE_ROLE_NAMES.OPEN || i === F.TIMELINE_ROLE_NAMES.CLOSE
            ? i
            : void 0,
        l = "IX3_COMPONENT_STATE_CHANGE";
      return s.addEventListener(r, l, (c) => {
        let u = c.detail;
        if (!u || typeof u != "object") return;
        let { component: f, state: d } = u;
        f !== e ||
          !d ||
          (a && d !== a) ||
          o({ type: "timeline-role", role: d });
      });
    });
  }
  function Mp(n) {
    Ta(n, "navbar");
  }
  function Pp(n) {
    Ta(n, "dropdown");
  }
  var ve = new WeakMap();
  function xp(n) {
    let e = (ve.get(n) ?? 0) + 1;
    ve.set(n, e), n.setAttribute(F.POPOVER_ANIMATED_ATTRIBUTE, "");
  }
  function kp(n) {
    let e = (ve.get(n) ?? 1) - 1;
    if (e > 0) {
      ve.set(n, e);
      return;
    }
    ve.delete(n), n.removeAttribute(F.POPOVER_ANIMATED_ATTRIBUTE);
  }
  var ha = new WeakMap();
  function ba(n) {
    n.released || ((n.released = !0), n.done?.());
  }
  function Np(n, e) {
    let t = ha.get(n);
    if (t) return t;
    let r = { claims: 0, released: !1, dispatching: !0, done: e };
    return (
      ha.set(n, r),
      Promise.resolve().then(() => {
        (r.dispatching = !1), r.claims === 0 && ba(r);
      }),
      r
    );
  }
  function Sa(n) {
    n.claims++;
    let e = !1;
    return () => {
      e || ((e = !0), --n.claims <= 0 && !n.dispatching && ba(n));
    };
  }
  function Lp(n) {
    n.addTrigger("popover", (e, t, r, s) => {
      let o = e[1].pluginConfig?.event,
        i =
          o === F.TIMELINE_ROLE_NAMES.OPEN || o === F.TIMELINE_ROLE_NAMES.CLOSE
            ? o
            : void 0;
      xp(t);
      let a = () => kp(t),
        l = new Set(),
        c = r.addEventListener(t, F.IX3_POPOVER_STATE_EVENT, (u) => {
          let f = u.detail;
          if (!f || typeof f != "object") return;
          let { state: d, done: p } = f,
            h = Np(u, typeof p == "function" ? p : void 0);
          if (
            d !== F.TIMELINE_ROLE_NAMES.OPEN &&
            d !== F.TIMELINE_ROLE_NAMES.CLOSE
          )
            return;
          if (d === F.TIMELINE_ROLE_NAMES.OPEN) Y.delete(t), Te.delete(t);
          else {
            let y = Y.get(t);
            y?.delete(e), y && y.size === 0 && Y.delete(t);
          }
          if (i && d !== i) return;
          d === F.TIMELINE_ROLE_NAMES.CLOSE && Te.set(t, h);
          let g = Sa(h);
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
          (Y.has(t) || _t(t)) &&
          (Y.delete(t), ns(t, ke.POPOVER_ANIMATION_CLOSE_COMMAND)),
          ve.get(t) === 1 && Te.delete(t),
          a(),
          c();
        for (let u of l) u();
        l.clear();
      };
    });
  }
  function ga(n, e) {
    let t =
      n.length > 1
        ? (0, va.popoverFromTriggerElement)(e, (r) => n.includes(r))
        : null;
    return t ? [t] : n;
  }
  function ma(n) {
    if (!_t(n) || Y.has(n)) return !1;
    let e = Te.get(n);
    return !e || e.released;
  }
  function _t(n) {
    try {
      return n.matches(":popover-open");
    } catch {
      return !1;
    }
  }
  function ns(n, e, t) {
    let r = n.ownerDocument.defaultView;
    if (!r) return;
    let s =
      e === ke.POPOVER_ANIMATION_OPEN_COMMAND
        ? { type: e, source: t }
        : { type: e };
    n.dispatchEvent(new r.CustomEvent(ke.POPOVER_COMMAND_EVENT, { detail: s }));
  }
  function Fp(n) {
    n.addRoleAppliedQuery(
      "popover",
      (e, { elements: t, trigger: r, causeTrigger: s, causeElement: o }) => {
        if (!ya(s, r)) return;
        let i = ga(t, o);
        if (e === F.TIMELINE_ROLE_NAMES.OPEN) return i.every(ma);
        if (e === F.TIMELINE_ROLE_NAMES.CLOSE) return !i.some(ma);
      }
    ),
      n.addRoleActivationObserver(
        "popover",
        (e, { elements: t, trigger: r, causeTrigger: s, causeElement: o }) => {
          if (!ya(s, r)) return;
          let i = ga(t, o);
          if (e === F.TIMELINE_ROLE_NAMES.OPEN) {
            for (let u of i)
              Y.delete(u),
                Te.delete(u),
                (!_t(u) || (s !== void 0 && s !== r)) &&
                  ns(u, ke.POPOVER_ANIMATION_OPEN_COMMAND, o);
            return;
          }
          if (e !== F.TIMELINE_ROLE_NAMES.CLOSE) return;
          if (s === r) {
            for (let u of i) {
              let f = Y.get(u);
              f?.delete(r), f && f.size === 0 && Y.delete(u);
            }
            return;
          }
          let a = i.filter(_t);
          if (a.length === 0) return;
          let l = {},
            c = a.map((u) => {
              let f = Te.get(u);
              return f && !f.released ? Sa(f) : void 0;
            });
          for (let u of a) {
            let f = Y.get(u);
            f || ((f = new Map()), Y.set(u, f)), f.set(r, l);
          }
          return () => {
            for (let [u, f] of a.entries()) {
              let d = c[u];
              d && Promise.resolve().then(d);
              let p = Y.get(f);
              p?.get(r) === l &&
                (p.delete(r),
                !(p.size > 0) &&
                  Promise.resolve().then(() => {
                    if (Y.get(f) !== p || p.size > 0) return;
                    Y.delete(f);
                    let h = Te.get(f);
                    (h && !h.released) ||
                      ns(f, ke.POPOVER_ANIMATION_CLOSE_COMMAND);
                  }));
            }
          };
        }
      );
  }
  var Y = new WeakMap(),
    Te = new WeakMap();
  function ya(n, e) {
    if (!n || n === e) return !0;
    if (n[0] === e[0]) return !1;
    let t = n[1]?.assignedInstances;
    if (!t) return !0;
    let r = e[2],
      s = (0, ke.readInstPath)(r?.[1]);
    return s ? t.some(([o, i]) => o === s[0] && i === s[1]) : !1;
  }
  function Dp(n, e) {
    let t = n[1]?.assignedInstances;
    return t
      ? t.length
        ? [...new Set(t.flatMap(([r, s]) => (0, va.popoversByPath)(r, s)))]
        : []
      : [e];
  }
  function Ea(n, e, t) {
    let r = n[1]?.pluginConfig?.firstWins === !0;
    for (let s of Dp(n, e)) t({ target: s, skipIfActive: !0, firstWins: r });
  }
  var Vp = 10;
  function Bp(n) {
    n.addTrigger("exit-intent", (e, t, r, s) => {
      if ((0, et.getPageLevelTriggerState)(e).fired) return () => {};
      let o = !1,
        i,
        a = () => {
          i?.(), (i = void 0);
        };
      return (
        (i = r.addEventListener(
          t,
          "mouseout",
          (l) => {
            if (o) return;
            let c = l;
            c.relatedTarget == null &&
              (c.clientY > Vp ||
                (c.clientY > 0 &&
                  typeof c.movementY == "number" &&
                  c.movementY >= 0) ||
                ((o = !0),
                ((0, et.getPageLevelTriggerState)(e).fired = !0),
                a(),
                Ea(e, t, s)));
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
  var jp = [
      "pointermove",
      "pointerdown",
      "keydown",
      "scroll",
      "wheel",
      "touchstart",
      "touchmove",
    ],
    ts = 100,
    At = new WeakMap();
  function Gp(n, e) {
    let t = At.get(e);
    if (!t) {
      let s = {
          waiters: new Set(),
          cleanups: [],
          lastResetAt: -ts,
          trailing: void 0,
        },
        o = () => {
          (s.trailing = void 0), (s.lastResetAt = performance.now());
          for (let a of s.waiters) a.restart();
        },
        i = () => {
          let a = performance.now() - s.lastResetAt;
          if (a >= ts) {
            s.trailing !== void 0 && clearTimeout(s.trailing), o();
            return;
          }
          s.trailing === void 0 && (s.trailing = setTimeout(o, ts - a));
        };
      (s.cleanups = jp.map((a) =>
        e.addEventListener(document.documentElement, a, () => i(), {
          target: "document",
          delegate: !1,
          batch: !1,
          capture: !0,
          passive: !0,
        })
      )),
        At.set(e, s),
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
            At.get(e) === r && At.delete(e);
        }
      }
    );
  }
  function Up(n) {
    n.addTrigger("duration", (e, t, r, s) => {
      if ((0, et.getPageLevelTriggerState)(e).fired) return () => {};
      let o = e[1]?.pluginConfig,
        i = o?.mode,
        a =
          i === "idle" || i === "timeOnSite"
            ? i
            : F.DEFAULT_DURATION_TRIGGER_MODE,
        l = o?.duration ?? F.DEFAULT_DURATION_TRIGGER_SECONDS,
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
            ((0, et.getPageLevelTriggerState)(e).fired = !0),
            (f = void 0),
            p(),
            Ea(e, t, s));
        };
      if (a === "timeOnSite") {
        let b = Date.now(),
          m = (0, et.getPageLevelTriggerState)(e),
          A = m.deadline,
          E = typeof window.__wf_design < "u",
          v = A ?? (E ? b + u : b - performance.now() + u);
        return (
          A === void 0 && (m.deadline = v),
          (f = setTimeout(h, Math.max(0, v - b))),
          () => {
            f !== void 0 && clearTimeout(f);
          }
        );
      }
      let g = () => {
        d || (f !== void 0 && clearTimeout(f), (f = setTimeout(h, u)));
      };
      f = setTimeout(h, u);
      let y = Gp({ restart: g }, r),
        T = !1;
      return (
        (p = () => {
          T || ((T = !0), y());
        }),
        () => {
          f !== void 0 && clearTimeout(f), p();
        }
      );
    });
  }
});
var Ne = w((ss) => {
  "use strict";
  Object.defineProperty(ss, "__esModule", { value: !0 });
  function $p(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  $p(ss, {
    resolveToNumber: function () {
      return qp;
    },
    resolveToString: function () {
      return zp;
    },
  });
  function qp(n, e) {
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
  function zp(n, e) {
    if (typeof n == "string") {
      if (n.startsWith("var(")) {
        let t = n.slice(4, -1).split(",")[0]?.trim() ?? "";
        return (t && getComputedStyle(e).getPropertyValue(t).trim()) || void 0;
      }
      return n;
    }
  }
});
var Ra = w((as) => {
  "use strict";
  Object.defineProperty(as, "__esModule", { value: !0 });
  function Hp(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Hp(as, {
    buildMouseFollowAction: function () {
      return Zp;
    },
    forTestSuite: function () {
      return Xp;
    },
  });
  var os = ne(),
    Rt = He(),
    Wp = 0.5,
    It = 50;
  function Yp(n) {
    let e = 2166136261;
    for (let t = 0; t < n.length; t++)
      (e ^= n.charCodeAt(t)), (e = Math.imul(e, 16777619));
    return e >>> 0;
  }
  function Kp(n) {
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
  function Oa(n, e, t) {
    if (n <= 1) return [0];
    if (typeof e == "number") {
      let r = Math.max(0, Math.min(n - 1, Math.floor(e))),
        s = [r];
      for (let o = 1; s.length < n; o++)
        r + o < n && s.push(r + o), r - o >= 0 && s.push(r - o);
      return s;
    }
    switch (e) {
      case "start":
        return Array.from({ length: n }, (r, s) => s);
      case "center": {
        let r = [],
          s = Math.floor((n - 1) / 2);
        r.push(s);
        for (let o = 1; r.length < n; o++)
          s + o < n && r.push(s + o), s - o >= 0 && r.push(s - o);
        return r;
      }
      case "random": {
        let r = t != null && t !== "" ? Kp(Yp(t)) : Math.random,
          s = Array.from({ length: n }, (o, i) => i);
        for (let o = n - 1; o > 0; o--) {
          let i = Math.floor(r() * (o + 1));
          [s[o], s[i]] = [s[i], s[o]];
        }
        return s;
      }
      case "edges": {
        let r = [],
          s = 0,
          o = n - 1;
        for (; s <= o; ) r.push(s), s !== o && r.push(o), s++, o--;
        return r;
      }
      case "end":
      default:
        return Array.from({ length: n }, (r, s) => n - 1 - s);
    }
  }
  function is(n) {
    if (n == null) return It;
    let e = typeof n == "number" ? n * 1e3 : parseFloat(n);
    return Number.isFinite(e) && e >= 0 ? e : It;
  }
  var tt = (n) => {
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
    Aa = (n, e) => {
      if (n?.amount != null) {
        let t = is(n.amount),
          r = e > 1 ? t / (e - 1) : It;
        return Math.max(1, r);
      }
      return n?.each != null ? Math.max(1, is(n.each)) : 1;
    },
    _a = (n) => {
      if (!n) return { x: 0.5, y: 0.5 };
      if (typeof n == "string") {
        let [e, t] = n.trim().split(/\s+/);
        return { x: tt(e ?? "50%"), y: tt(t ?? "50%") };
      }
      return { x: tt(n.x), y: tt(n.y) };
    },
    Xp = {
      DEFAULT_STAGGER_MS: It,
      computeMouseFollowSmoothingMs: Aa,
      getChainOrder: Oa,
      parseAnchor: _a,
      parseAnchorAxis: tt,
      staggerEachToMs: is,
    };
  function Qp(n, e, t, r) {
    if (!t.length) return;
    let s = r?.animation;
    if (!s?.hasGsap()) return;
    let o =
        typeof window < "u" &&
        typeof window.matchMedia == "function" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
      i = e,
      a = i?.leaveBehavior ?? "return",
      l = i?.onEnter ?? "animate",
      c = r?.timelineRole,
      u = c === "mouseX" ? "x" : c === "mouseY" ? "y" : i?.axis ?? "x",
      f = u,
      d = i?.followMode;
    if (
      d != null &&
      d !== "full" &&
      d !== (0, os.getSingleAxisMouseFollowMode)(u)
    )
      return;
    let p = _a(i?.anchor),
      h = u === "x" ? p.x : p.y,
      g = t.map((P) => s.getProperty(P, f)),
      y = t.map((P) => s.quickSetter(P, f, "px"));
    if (y.some((P) => P == null)) return;
    let T = y,
      b = (0, Rt.initScrollCache)(),
      m = t.map((P) => {
        let N = P.getBoundingClientRect();
        return u === "x"
          ? N.left + N.width * h
          : N.top + N.height * h + (0, Rt.getScrollY)();
      }),
      A = n.timing?.stagger,
      E = t.length,
      v = Aa(A, E),
      S = A?.from,
      O = Oa(
        E,
        typeof S == "number" ||
          S === "start" ||
          S === "center" ||
          S === "edges" ||
          S === "end" ||
          S === "random"
          ? S
          : "end",
        i?.groupId ?? i?.syncedActionId
      );
    if (O.length === 0) return;
    let I = new Float64Array(E),
      x = O[0],
      M = { value: m[x] ?? 0 },
      R = null,
      k = !1,
      L = 0,
      G = null,
      V = !1,
      K = null,
      Q = performance.now(),
      Z = 0,
      we = () => {
        let P = performance.now(),
          N = Math.min(P - Q, 100);
        Q = P;
        let z = 1 - Math.exp(-N / v),
          U = !1;
        for (let $ = 0; $ < O.length; $++) {
          let B = O[$],
            Oe;
          if ($ === 0) Oe = M.value;
          else {
            let oo = O[$ - 1];
            Oe = m[oo] + I[oo];
          }
          let so = Oe - m[B],
            Gt = so - I[B];
          Math.abs(Gt) > Wp
            ? ((I[B] = I[B] + Gt * z), T[B](I[B]), (U = !0))
            : Gt !== 0 && ((I[B] = so), T[B](I[B]));
        }
        R?.isActive() && (U = !0), U || ie();
      },
      ie = () => {
        V && (K?.(), (K = null), (V = !1));
      },
      no = (P) => {
        R?.kill(), (R = null), (Z = 0), (M.value = P);
        for (let N = 0; N < O.length; N++) {
          let z = O[N],
            U = P - m[z];
          (I[z] = U), T[z](U);
        }
        ie();
      },
      Pl = () => {
        R?.kill(), (R = null), (Z = 0), (M.value = m[x] ?? 0);
        for (let P = 0; P < O.length; P++) {
          let N = O[P];
          (I[N] = 0), T[N](0);
        }
        ie();
      },
      ce = () => {
        V || ((Q = performance.now()), (K = s.addTicker(we)), (V = !0));
      },
      xl = (P, N) => {
        (G = P),
          (L = N
            ? u === "x"
              ? window.innerWidth
              : window.innerHeight
            : u === "x"
            ? P.offsetWidth
            : P.offsetHeight);
      },
      kl = (P) => {
        G || xl(P.triggerEl, P.isViewport);
        let N = u === "x" ? P.x : P.y + (0, Rt.getScrollY)();
        if (o) {
          (k = !0), no(N);
          return;
        }
        if (k)
          if (R) {
            let z = Math.max(Z - performance.now(), 50);
            R.kill();
            let U = s.to(M, {
              value: N,
              duration: z / 1e3,
              ease: "power2.out",
              onUpdate: ce,
              onComplete: () => {
                R === U && ((R = null), (Z = 0));
              },
            });
            if (!U) {
              (M.value = N), ce();
              return;
            }
            R = U;
          } else M.value = N;
        else {
          if (((k = !0), l === "snap")) {
            no(N);
            return;
          }
          let z = Math.abs(N - M.value),
            $ = 0.1 + Math.min(z / (L || 1), 1) * 0.5;
          (Z = performance.now() + $ * 1e3), R?.kill();
          let B = s.to(M, {
            value: N,
            duration: $,
            ease: "power2.out",
            onUpdate: ce,
            onComplete: () => {
              R === B && ((R = null), (Z = 0));
            },
          });
          if (!B) {
            (M.value = N), ce();
            return;
          }
          R = B;
        }
        ce();
      },
      Nl = () => {
        if (((k = !1), a === "stay")) {
          ce();
          return;
        }
        if (o) {
          Pl();
          return;
        }
        let P = m[x] ?? 0,
          N = Math.abs(M.value - P),
          U = 0.1 + Math.min(N / (L || 1), 1) * 0.5;
        R?.kill();
        let $ = s.to(M, {
          value: P,
          duration: U,
          ease: "power2.out",
          onUpdate: ce,
          onComplete: () => {
            R === $ && (R = null);
          },
        });
        if (!$) {
          (M.value = P), ce();
          return;
        }
        R = $;
      },
      Ll = r?.subscribeChannel?.(os.MOUSE_MOVE_CHANNELS.POSITION, kl),
      Fl = r?.subscribeChannel?.(os.MOUSE_MOVE_CHANNELS.LEAVE, Nl),
      ro = new AbortController(),
      { signal: Dl } = ro,
      jt = 0,
      Vl = () => {
        clearTimeout(jt),
          (jt = window.setTimeout(() => {
            G && (L = u === "x" ? G.offsetWidth : G.offsetHeight);
            for (let P = 0; P < t.length; P++) {
              let N = t[P],
                z = s.getProperty(N, f),
                U = typeof z == "number" ? z : parseFloat(String(z)),
                $ = Number.isFinite(U) ? U : 0,
                B = N.getBoundingClientRect(),
                Oe = u === "x" ? B.left + B.width * h : B.top + B.height * h;
              (m[P] = u === "x" ? Oe - $ : Oe - $ + (0, Rt.getScrollY)()),
                (I[P] = $);
            }
            if (!k) {
              let P = m[x];
              P !== void 0 &&
                (R?.isActive() && (R.kill(), (R = null)), (M.value = P));
            }
          }, 250));
      };
    return (
      window.addEventListener("resize", Vl, { signal: Dl }),
      () => {
        R?.kill(), ie(), clearTimeout(jt), ro.abort(), Ll?.(), Fl?.(), b();
        for (let P = 0; P < t.length; P++) s.set(t[P], { [f]: g[P] });
      }
    );
  }
  function Zp(n) {
    n.addAction("mouse-follow", {
      requiresTriggerElementContext: !0,
      createCustomTween: (e, t, r, s, o, i, a) => Qp(t, r, o, a),
    });
  }
});
var Pa = w((us) => {
  "use strict";
  Object.defineProperty(us, "__esModule", { value: !0 });
  function Jp(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Jp(us, {
    applyAdditive: function () {
      return oh;
    },
    formatRandom: function () {
      return cs;
    },
    formatRandomArray: function () {
      return Ca;
    },
    isAdditiveValue: function () {
      return eh;
    },
    isRandomArrayValue: function () {
      return th;
    },
    isRandomValue: function () {
      return ls;
    },
    makeClamp: function () {
      return ih;
    },
    makeRandomArrayPicker: function () {
      return sh;
    },
    makeRandomPicker: function () {
      return rh;
    },
  });
  function ls(n) {
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
  function eh(n) {
    if (typeof n != "object" || n === null) return !1;
    let e = n;
    return (
      e.type === "ix3-additive" &&
      (typeof e.value == "number" || ls(e.value)) &&
      (e.unit === void 0 || typeof e.unit == "string")
    );
  }
  function th(n) {
    if (typeof n != "object" || n === null) return !1;
    let e = n;
    return (
      e.type === "ix3-random-array" &&
      Array.isArray(e.values) &&
      e.values.every((t) => typeof t == "number" || typeof t == "string") &&
      (e.unit === void 0 || typeof e.unit == "string")
    );
  }
  function cs(n, e) {
    let t = n.unit ?? e ?? "",
      r = n.step != null ? `, ${n.step}` : "";
    return `random(${n.min}, ${n.max}${r})${t}`;
  }
  function Ca(n, e) {
    let t = n.unit ?? e ?? "";
    return `random([${n.values.join(", ")}])${t}`;
  }
  function Ia(n) {
    let [e = "", t] = String(n).split("e"),
      r = (e.split(".")[1] || "").length;
    return t === void 0 ? r : Math.max(0, r - Number(t));
  }
  function nh(n, e) {
    if (n <= 1) return 0;
    if (e === void 0) return Math.floor(Math.random() * n);
    let t = Math.floor(Math.random() * (n - 1));
    return t < e ? t : t + 1;
  }
  function Ma(n, e, t) {
    let r = new WeakMap(),
      s = (o, i) => {
        let a = nh(n, r.get(i));
        return r.set(i, a), e(a);
      };
    return (s.legacyExpression = t), s;
  }
  function rh(n) {
    let e = n.unit ?? "",
      t = (u) => (e ? `${u}${e}` : u),
      r = cs(n);
    if (!n.step) {
      let { min: u, max: f } = n,
        d = (p, h) => t(u + Math.random() * (f - u));
      return (d.legacyExpression = r), d;
    }
    let s = Math.abs(n.step),
      o = Math.min(n.min, n.max),
      i = Math.max(n.min, n.max),
      a = Math.round((i - o) / s),
      l = Math.max(Ia(o), Ia(s)),
      c = 10 ** l;
    return Ma(
      a + 1,
      (u) => {
        let f = o + u * s,
          d = l ? Math.round(f * c) / c : f;
        return t(Math.min(i, Math.max(o, d)));
      },
      r
    );
  }
  function sh(n) {
    let e = n.unit ?? "",
      t = [...new Set(n.values)];
    return Ma(
      t.length,
      (r) => {
        let s = t[r] ?? 0;
        return typeof s == "number" && e ? `${s}${e}` : s;
      },
      Ca(n)
    );
  }
  function oh(n, e) {
    let t = n.unit ?? e ?? "";
    return ls(n.value) ? `+=${cs(n.value, t)}` : `+=${n.value}${t}`;
  }
  function ih(n, e) {
    let t = (r) => (r < n ? n : r > e ? e : r);
    return (r) => {
      if (typeof r == "number") return t(r);
      let s = parseFloat(r);
      if (Number.isNaN(s)) return r;
      let o = t(s);
      return o === s
        ? r
        : `${o}${r.replace(/^\s*[+-]?[\d.]+(?:e[+-]?\d+)?/i, "")}`;
    };
  }
});
var ds = w((fs) => {
  "use strict";
  Object.defineProperty(fs, "__esModule", { value: !0 });
  function ah(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  ah(fs, {
    build: function () {
      return dh;
    },
    createStyleTweenConfig: function () {
      return La;
    },
  });
  var nt = Ne(),
    lh = Ra(),
    D = Pa();
  function xa(n, e) {
    return e != null && typeof n == "string" && n.startsWith("var(")
      ? (0, nt.resolveToString)(n, e) ?? n
      : n;
  }
  var ka = new Set(["opacity", "autoAlpha"]),
    ch = new Set(["scale", "scaleX", "scaleY", "z", "transformPerspective"]),
    uh = new Set(["xPercent", "yPercent"]),
    Na = new Set(["width", "height"]);
  function Ct(n) {
    return n.startsWith("+=") || n.startsWith("-=") || n.startsWith("random(");
  }
  function fh(n) {
    if (ka.has(n)) return (0, D.makeClamp)(0, 1);
    if (ch.has(n) || Na.has(n)) return (0, D.makeClamp)(0, Number.MAX_VALUE);
  }
  function Mt(n) {
    return (
      (0, D.isRandomValue)(n) ||
      (0, D.isAdditiveValue)(n) ||
      (0, D.isRandomArrayValue)(n)
    );
  }
  function Pt(n, e) {
    let t = ka.has(n) ? 100 : 1,
      r = t !== 1 || uh.has(n),
      s = (o) => ({
        type: "ix3-random",
        min: o.min / t,
        max: o.max / t,
        step: o.step != null ? o.step / t : void 0,
      });
    if ((0, D.isRandomArrayValue)(e)) {
      let o = r
        ? {
            type: "ix3-random-array",
            values: e.values.map((i) => (typeof i == "number" ? i / t : i)),
          }
        : e;
      return (0, D.makeRandomArrayPicker)(o);
    }
    if ((0, D.isRandomValue)(e)) return (0, D.makeRandomPicker)(r ? s(e) : e);
    if (r) {
      let o = (0, D.isRandomValue)(e.value) ? s(e.value) : e.value / t;
      return (0, D.applyAdditive)({ type: "ix3-additive", value: o });
    }
    return (0, D.applyAdditive)(e);
  }
  function La(n, e) {
    let t = { to: {}, from: {} },
      r = e?.[0];
    for (let s in n) {
      let o = n[s],
        i = Array.isArray(o) ? o[1] : o,
        a = Array.isArray(o) ? o[0] : void 0,
        l = Mt(i) ? Pt(s, i) : xa(i, r),
        c = Mt(a) ? Pt(s, a) : a !== void 0 ? xa(a, r) : void 0;
      l != null && (t.to[s] = l),
        c != null && !(0, D.isAdditiveValue)(i) && (t.from[s] = c),
        Na.has(s) &&
          (Mt(i) || Mt(a)) &&
          (t.modifiers || (t.modifiers = {}),
          (t.modifiers[s] = (0, D.makeClamp)(0, Number.MAX_VALUE)));
    }
    return t;
  }
  function dh(n) {
    (0, lh.buildMouseFollowAction)(n),
      n
        .addAction("class", {
          createCustomTween: (e, t, r, s, o, i) => {
            let a = r.class,
              l = a?.selectors || [],
              c = a?.operation,
              u = l
                ? o.map((d) => ({ element: d, classList: [...d.classList] }))
                : [],
              f = () => {
                if (!(!c || !l))
                  for (let d of o)
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
                !i || i === 0 ? 0.001 : i
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
        .addAction("style", { createTweenConfig: La })
        .addAction("transform", {
          createTweenConfig: (e, t) => {
            let r = { to: {}, from: {} },
              s = t?.[0];
            for (let o in e) {
              let i = e[o],
                a = Array.isArray(i) ? i[1] : i,
                l = Array.isArray(i) ? i[0] : void 0,
                c = (0, D.isAdditiveValue)(a),
                u =
                  (0, D.isRandomValue)(a) || (0, D.isRandomArrayValue)(a) || c,
                f =
                  (0, D.isRandomValue)(l) ||
                  (0, D.isRandomArrayValue)(l) ||
                  (0, D.isAdditiveValue)(l);
              if (u || f) {
                let d = fh(o);
                d &&
                  (r.modifiers || (r.modifiers = {}),
                  (r.modifiers[o] = d),
                  o === "autoAlpha" && (r.modifiers.opacity = d),
                  o === "scale" &&
                    ((r.modifiers.scaleX = d), (r.modifiers.scaleY = d))),
                  u && (a = Pt(o, a)),
                  f && (l = Pt(o, l));
              }
              switch (o) {
                case "autoAlpha":
                case "opacity": {
                  if (a != null && typeof a == "string" && !Ct(a)) {
                    let d = s ? (0, nt.resolveToNumber)(a, s) : parseFloat(a);
                    a = d !== void 0 ? d / 100 : a;
                  }
                  if (l != null && typeof l == "string" && !Ct(l)) {
                    let d = s ? (0, nt.resolveToNumber)(l, s) : parseFloat(l);
                    l = d !== void 0 ? d / 100 : l;
                  }
                  break;
                }
                case "transformOrigin": {
                  typeof i == "string"
                    ? ((a = a || i), (l = a))
                    : typeof l == "string"
                    ? (a = l)
                    : typeof a == "string" && (l = a);
                  break;
                }
                case "xPercent":
                case "yPercent": {
                  if (a != null && typeof a == "string" && !Ct(a)) {
                    let d = s ? (0, nt.resolveToNumber)(a, s) : parseFloat(a);
                    a = d !== void 0 ? d : a;
                  }
                  if (l != null && typeof l == "string" && !Ct(l)) {
                    let d = s ? (0, nt.resolveToNumber)(l, s) : parseFloat(l);
                    l = d !== void 0 ? d : l;
                  }
                  break;
                }
              }
              a != null && (r.to[o] = a), l != null && !c && (r.from[o] = l);
            }
            return r;
          },
        });
  }
});
var Va = w((ps) => {
  "use strict";
  Object.defineProperty(ps, "__esModule", { value: !0 });
  Object.defineProperty(ps, "buildLottieAction", {
    enumerable: !0,
    get: function () {
      return hh;
    },
  });
  var ph = Ne();
  function hh(n) {
    n.addAction("lottie", {
      createCustomTween: (e, t, r, s, o, i) => {
        let a = r.lottie;
        if (!a || !o.length || !window.Webflow) return;
        let l = window.Webflow.require?.("lottie");
        if (!l) return;
        let c = [],
          u = !1;
        for (let f of o) {
          let d = Da(a.from, f, Fa.FROM),
            p = Da(a.to, f, Fa.TO),
            h = l.createInstance(f);
          if (!h) continue;
          c.push(h);
          let g = () => {
            if (u) return;
            let y = h.frames,
              T = Math.round(d * y),
              b = Math.round(p * y);
            h.gsapFrame === null && (h.gsapFrame = T);
            let m = s;
            m.ease || (m = { ...m, ease: "none" }),
              e.fromTo(h, { gsapFrame: T }, { gsapFrame: b, ...m }, i || 0);
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
  var Fa = { DURATION: 1, FROM: 0, TO: 1 };
  function Da(n, e, t) {
    if (typeof n == "number") return n;
    let r = (0, ph.resolveToNumber)(n, e);
    return r !== void 0 ? r / 100 : t;
  }
});
var gs = w((hs) => {
  "use strict";
  Object.defineProperty(hs, "__esModule", { value: !0 });
  Object.defineProperty(hs, "RIVE_CONSTANTS", {
    enumerable: !0,
    get: function () {
      return gh;
    },
  });
  var gh = { MINIMUM_TIME: 0.001, MAX_BYTE_VALUE: 255 };
});
var vs = w((ys) => {
  "use strict";
  Object.defineProperty(ys, "__esModule", { value: !0 });
  function mh(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  mh(ys, {
    clearSurfaceCache: function () {
      return yh;
    },
    surfaceCache: function () {
      return ms;
    },
  });
  var ms = new WeakMap();
  function yh(n, e) {
    if (!e) return;
    let t = `${e.name}:${e.instanceName ?? ""}`,
      r = ms.get(n);
    r && (r.delete(t), r.size === 0 && ms.delete(n));
  }
});
var rt = w((Ts) => {
  "use strict";
  Object.defineProperty(Ts, "__esModule", { value: !0 });
  function vh(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  vh(Ts, {
    parseVmKey: function () {
      return Sh;
    },
    vmKey: function () {
      return Th;
    },
  });
  function Th(n, e, t) {
    return `vm:${n}:${e}:${t}`;
  }
  var bh = new Set([
    "string",
    "number",
    "boolean",
    "color",
    "enum",
    "trigger",
    "artboard",
  ]);
  function Sh(n) {
    if (!n.startsWith("vm:")) return null;
    let e = n.lastIndexOf(":"),
      t = n.slice(e + 1);
    if (!bh.has(t)) return null;
    let r = n.slice(3, e),
      s = r.indexOf(":");
    return s === -1
      ? null
      : { vmName: r.slice(0, s), propName: r.slice(s + 1), propType: t };
  }
});
var xt = w((bs) => {
  "use strict";
  Object.defineProperty(bs, "__esModule", { value: !0 });
  function Eh(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Eh(bs, {
    getVmiProperty: function () {
      return Ba;
    },
    storeOriginalValues: function () {
      return Oh;
    },
  });
  var wh = rt();
  function Oh(n, e) {
    let t = { viewModelProperties: {} };
    for (let r of n) Ah(e, r.propertyName, r.propertyType, t);
    return t;
  }
  function Ah(n, e, t, r) {
    let s = (0, wh.vmKey)(n.name, e, t);
    if (!(s in r.viewModelProperties)) {
      if (t === "artboard") {
        let i = n.riveInstance.viewModelInstance?.artboard?.(e)?.name;
        i != null && (r.viewModelProperties[s] = i);
        return;
      }
      let o = n.riveInstance.viewModelInstance
        ? _h(n.riveInstance.viewModelInstance, t, e)
        : null;
      o != null && (r.viewModelProperties[s] = o);
    }
  }
  function Ba(n, e, t) {
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
  function _h(n, e, t) {
    let r = Ba(n, e, t);
    return r ? r.value : void 0;
  }
});
var Es = w((Ss) => {
  "use strict";
  Object.defineProperty(Ss, "__esModule", { value: !0 });
  Object.defineProperty(Ss, "parseColorToAARRGGBB", {
    enumerable: !0,
    get: function () {
      return Ih;
    },
  });
  var Rh = gs();
  function Ih(n) {
    let e = n.trim();
    if (!e) return null;
    try {
      let { red: t, green: r, blue: s, alpha: o } = Mh(e);
      return t === void 0 || r === void 0 || s === void 0
        ? null
        : ((Math.round(o * Rh.RIVE_CONSTANTS.MAX_BYTE_VALUE) << 24) |
            (t << 16) |
            (r << 8) |
            s) >>>
            0;
    } catch {
      return null;
    }
  }
  var be = null;
  function Ch(n) {
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
  function ja(n, e, t) {
    let r = (1 - Math.abs(2 * t - 1)) * e,
      s = r * (1 - Math.abs(((n / 60) % 2) - 1)),
      o = t - r / 2,
      i,
      a,
      l;
    return (
      n >= 0 && n < 60
        ? ((i = r), (a = s), (l = 0))
        : n >= 60 && n < 120
        ? ((i = s), (a = r), (l = 0))
        : n >= 120 && n < 180
        ? ((i = 0), (a = r), (l = s))
        : n >= 180 && n < 240
        ? ((i = 0), (a = s), (l = r))
        : n >= 240 && n < 300
        ? ((i = s), (a = 0), (l = r))
        : ((i = r), (a = 0), (l = s)),
      {
        red: Math.round((i + o) * 255),
        green: Math.round((a + o) * 255),
        blue: Math.round((l + o) * 255),
      }
    );
  }
  function Mh(n) {
    let e,
      t,
      r,
      s = 1,
      o = n.replace(/\s/g, "").toLowerCase(),
      i = o;
    if (!i.startsWith("#") && !i.startsWith("rgb") && !i.startsWith("hsl")) {
      let a = Ch(o);
      a && (i = a);
    }
    if (i.startsWith("#")) {
      let a = i.substring(1);
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
    } else if (i.startsWith("rgba")) {
      let a = i.match(/rgba\(([^)]+)\)/)?.[1]?.split(",");
      (e = parseInt(a?.[0] ?? "", 10)),
        (t = parseInt(a?.[1] ?? "", 10)),
        (r = parseInt(a?.[2] ?? "", 10)),
        (s = parseFloat(a?.[3] ?? ""));
    } else if (i.startsWith("rgb")) {
      let a = i.match(/rgb\(([^)]+)\)/)?.[1]?.split(",");
      (e = parseInt(a?.[0] ?? "", 10)),
        (t = parseInt(a?.[1] ?? "", 10)),
        (r = parseInt(a?.[2] ?? "", 10));
    } else if (i.startsWith("hsla")) {
      let a = i.match(/hsla\(([^)]+)\)/)?.[1]?.split(","),
        l = parseFloat(a?.[0] ?? ""),
        c = parseFloat(a?.[1]?.replace("%", "") ?? "") / 100,
        u = parseFloat(a?.[2]?.replace("%", "") ?? "") / 100;
      (s = parseFloat(a?.[3] ?? "")),
        ({ red: e, green: t, blue: r } = ja(l, c, u));
    } else if (i.startsWith("hsl")) {
      let a = i.match(/hsl\(([^)]+)\)/)?.[1]?.split(","),
        l = parseFloat(a?.[0] ?? ""),
        c = parseFloat(a?.[1]?.replace("%", "") ?? "") / 100,
        u = parseFloat(a?.[2]?.replace("%", "") ?? "") / 100;
      ({ red: e, green: t, blue: r } = ja(l, c, u));
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
var Os = w((ws) => {
  "use strict";
  Object.defineProperty(ws, "__esModule", { value: !0 });
  Object.defineProperty(ws, "setVmiValue", {
    enumerable: !0,
    get: function () {
      return Nh;
    },
  });
  var Ph = rt(),
    xh = xt(),
    kh = Es();
  function Nh(n, e, t, r, s, o) {
    let i = n.riveInstance.viewModelInstance;
    if (e === "trigger") {
      if (o) return;
      i?.trigger?.(t)?.fire?.();
      return;
    }
    if (!i) return;
    let a = (0, xh.getVmiProperty)(i, e, t);
    if (!a) return;
    let l = s?.viewModelProperties[(0, Ph.vmKey)(n.name, t, e)],
      c = o ? l ?? r : r,
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
            ? (0, kh.parseColorToAARRGGBB)(c)
            : null;
        f != null && ((a.value = f), (n.currentValues[u] = f));
        return;
      }
      default:
        return;
    }
  }
});
var Ua = w((As) => {
  "use strict";
  Object.defineProperty(As, "__esModule", { value: !0 });
  function Lh(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Lh(As, {
    createCleanupFunction: function () {
      return Bh;
    },
    restoreViewModelProperties: function () {
      return Ga;
    },
  });
  var Fh = rt(),
    Dh = Os(),
    Vh = vs();
  function Ga(n, e, t) {
    let r = n.viewModelInstance ?? null;
    if (r)
      for (let [s, o] of Object.entries(t.viewModelProperties)) {
        let i = (0, Fh.parseVmKey)(s);
        if (!i || i.vmName !== e) continue;
        let a = { name: e, riveInstance: n, currentValues: {} };
        if (i.propType === "artboard") {
          if (typeof o != "string") continue;
          let l = r.artboard?.(i.propName),
            c = n.getArtboard?.(o);
          l && c && (l.value = c);
          continue;
        }
        (0, Dh.setVmiValue)(a, i.propType, i.propName, o);
      }
  }
  function Bh(n, e, t) {
    return () => {
      !e || !n || (Ga(n, e.name, t), (0, Vh.clearSurfaceCache)(n, e));
    };
  }
});
var za = w((_s) => {
  "use strict";
  Object.defineProperty(_s, "__esModule", { value: !0 });
  function jh(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  jh(_s, {
    interpolateAARRGGBB: function () {
      return qa;
    },
    setupAnimateTimeline: function () {
      return $h;
    },
  });
  var Gh = xt(),
    Uh = Es(),
    $a = Ne();
  function qa(n, e, t) {
    let r = (n >>> 24) & 255,
      s = (n >>> 16) & 255,
      o = (n >>> 8) & 255,
      i = n & 255,
      a = (e >>> 24) & 255,
      l = (e >>> 16) & 255,
      c = (e >>> 8) & 255,
      u = e & 255,
      f = Math.round(r + (a - r) * t),
      d = Math.round(s + (l - s) * t),
      p = Math.round(o + (c - o) * t),
      h = Math.round(i + (u - i) * t);
    return ((f << 24) | (d << 16) | (p << 8) | h) >>> 0;
  }
  function $h(n, e, t, r, s, o) {
    if (t.length === 0) return;
    let i = e.riveInstance.viewModelInstance;
    if (i)
      for (let a of t) {
        if (
          a.value === null ||
          a.value === void 0 ||
          !(0, Gh.getVmiProperty)(i, a.propertyType, a.propertyName)
        )
          continue;
        let c,
          u = a.value;
        if (typeof u == "string" && u.startsWith("var(")) {
          if (
            (a.propertyType === "number"
              ? (c = (0, $a.resolveToNumber)(u, o))
              : a.propertyType === "color" &&
                (c = (0, $a.resolveToString)(u, o)),
            c === void 0)
          )
            continue;
        } else c = u;
        a.propertyType === "number"
          ? qh(e, n, a.propertyName, c, r, s)
          : a.propertyType === "color" && zh(e, n, a.propertyName, c, r, s);
      }
  }
  function qh(n, e, t, r, s, o) {
    let i = n.riveInstance.viewModelInstance;
    if (!i) return;
    let a = i.number(t);
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
      o ?? 0
    );
  }
  function zh(n, e, t, r, s, o) {
    let i = n.riveInstance.viewModelInstance;
    if (!i) return;
    let a = i.color(t);
    if (!a) return;
    let l = typeof r == "number" ? r : (0, Uh.parseColorToAARRGGBB)(String(r));
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
          a.value = qa(c.fromPacked, l, u.t);
        },
      },
      o ?? 0
    );
  }
});
var Xa = w((Cs) => {
  "use strict";
  Object.defineProperty(Cs, "__esModule", { value: !0 });
  function Hh(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Hh(Cs, {
    resolveSurfaceArea: function () {
      return Is;
    },
    setupAnimateAnimation: function () {
      return Zh;
    },
    setupAnimation: function () {
      return Qh;
    },
    setupTimeline: function () {
      return Ka;
    },
  });
  var Ha = gs(),
    Rs = vs(),
    Wa = xt(),
    Ya = Ua(),
    Wh = Os(),
    Yh = za(),
    Kh = rt(),
    kt = Ne();
  function Is(n, e) {
    if (!e) return null;
    let t = `${e.name}:${e.instanceName ?? ""}`,
      r = Rs.surfaceCache.get(n)?.get(t);
    if (r) return r;
    let o =
      (n.viewModelByName?.(e.name) ?? void 0)?.instanceByName?.(
        e.instanceName ?? ""
      ) ?? null;
    n.bindViewModelInstance?.(o);
    let i = { name: e.name, riveInstance: n, currentValues: {} },
      a = Rs.surfaceCache.get(n);
    return a || ((a = new Map()), Rs.surfaceCache.set(n, a)), a.set(t, i), i;
  }
  function Ka(n, e, t, r, s, o) {
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
              ? (0, kt.resolveToNumber)(c, o)
              : l.propertyType === "color"
              ? (0, kt.resolveToString)(c, o)
              : void 0)
        : (u = c),
        u !== void 0 &&
          (e.currentValues[`${l.propertyType}:${l.propertyName}`] = u);
    }
    let i = (l) => {
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
                ? (u = (0, kt.resolveToNumber)(f, o))
                : c.propertyType === "color" &&
                  (u = (0, kt.resolveToString)(f, o)),
              u === void 0)
            )
              continue;
          } else u = f;
          Xh(e, c.propertyName, c.propertyType, u, r, l);
        }
      },
      a = { int: 0 };
    n.to(
      a,
      {
        int: 1,
        duration: Ha.RIVE_CONSTANTS.MINIMUM_TIME,
        onStart: () => {
          i(!1);
        },
        onReverseComplete: () => {
          i(!0);
        },
      },
      s ?? Ha.RIVE_CONSTANTS.MINIMUM_TIME
    );
  }
  function Xh(n, e, t, r, s, o) {
    if (t === "artboard") {
      if (typeof r != "string") return;
      let i = n.riveInstance.viewModelInstance?.artboard?.(e);
      if (!i) return;
      if (o) {
        let l = (0, Kh.vmKey)(n.name, e, t),
          c = s?.viewModelProperties[l];
        if (typeof c == "string") {
          let u = n.riveInstance.getArtboard?.(c);
          u && (i.value = u);
        }
        return;
      }
      let a = n.riveInstance.getArtboard?.(r);
      if (!a) return;
      i.value = a;
      return;
    }
    (0, Wh.setVmiValue)(n, t, e, r, s, o);
  }
  function Qh(n, e, t, r, s) {
    let o = e.animationSource,
      i = Is(n, o);
    if (!i) return;
    let a = e.addedProperties ?? {},
      l = Object.values(a),
      c = (0, Wa.storeOriginalValues)(l, i);
    return Ka(t, i, l, c, r, s), (0, Ya.createCleanupFunction)(n, o, c);
  }
  function Zh(n, e, t, r, s, o) {
    let i = e.animationSource,
      a = Is(n, i);
    if (!a) return;
    let l = e.addedProperties ?? {},
      c = Object.values(l),
      u = (0, Wa.storeOriginalValues)(c, a);
    return (
      (0, Yh.setupAnimateTimeline)(t, a, c, r, s, o),
      (0, Ya.createCleanupFunction)(n, i, u)
    );
  }
});
var nl = w((Ms) => {
  "use strict";
  Object.defineProperty(Ms, "__esModule", { value: !0 });
  function Jh(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Jh(Ms, {
    buildAnimateRiveAction: function () {
      return ng;
    },
    buildRiveAction: function () {
      return tg;
    },
  });
  var Ja = Xa();
  function Qa(n) {
    return (
      typeof n == "object" &&
      n !== null &&
      "loaded" in n &&
      typeof n.loaded == "boolean"
    );
  }
  function Za(n) {
    !n.isPlaying && n.play && n.play();
  }
  function eg(n, e, t) {
    let s = e.getInstance(n)?.rive,
      o = Qa(s) ? s : null;
    if (o?.loaded) return Za(o), t(o, n);
    let i,
      a = !1,
      l = () => {
        if (a || !n.isConnected) return;
        let u = e.getInstance(n)?.rive,
          f = Qa(u) ? u : null;
        f?.loaded && (Za(f), (i = t(f, n))),
          n.removeEventListener("w-rive-load", l);
      };
    return (
      n.addEventListener("w-rive-load", l),
      () => {
        (a = !0), n.removeEventListener("w-rive-load", l), i?.();
      }
    );
  }
  function el(n, e, t) {
    let r = [];
    for (let s of n) {
      let o = eg(s, e, t);
      o && r.push(o);
    }
    if (r.length !== 0)
      return () => {
        for (let s of r) s();
      };
  }
  function tl() {
    return window.Webflow ? window.Webflow.require?.("rive") ?? null : null;
  }
  function tg(n) {
    n.addAction("rive", {
      createCustomTween: (e, t, r, s, o, i) => {
        let a = r.rive;
        if (!a || !o.length) return;
        let l = tl();
        if (l) return el(o, l, (c, u) => (0, Ja.setupAnimation)(c, a, e, i, u));
      },
    });
  }
  function ng(n) {
    n.addAction("animate-rive", {
      createCustomTween: (e, t, r, s, o, i) => {
        let a = r.rive;
        if (!a || !o.length) return;
        let l = tl();
        if (l)
          return el(o, l, (c, u) =>
            (0, Ja.setupAnimateAnimation)(c, a, e, s, i, u)
          );
      },
    });
  }
});
var Se = w((Ps) => {
  "use strict";
  Object.defineProperty(Ps, "__esModule", { value: !0 });
  function rg(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  rg(Ps, {
    checkTt: function () {
      return lg;
    },
    hasBBoxUpdate: function () {
      return ig;
    },
    hasIntensity: function () {
      return sg;
    },
    hasMatrixUpdate: function () {
      return ag;
    },
    hasRenderOrder: function () {
      return og;
    },
  });
  var Nt = H(),
    sg = (n) => "intensity" in n,
    og = (n) => "renderOrder" in n,
    ig = (n) => "singleBBoxNeedsUpdate" in n && "recursiveBBoxNeedsUpdate" in n,
    ag = (n) => "updateMatrix" in n && "updateMatrixWorld" in n,
    lg = (n, e) =>
      e === "from"
        ? n === Nt.TweenType.From || n === Nt.TweenType.FromTo
        : n === Nt.TweenType.To || n === Nt.TweenType.FromTo;
});
var ks = w((xs) => {
  "use strict";
  Object.defineProperty(xs, "__esModule", { value: !0 });
  Object.defineProperty(xs, "colorDataToCss", {
    enumerable: !0,
    get: function () {
      return cg;
    },
  });
  var cg = ({ r: n, g: e, b: t, a: r }) => {
    let s = (c) => Math.round(Math.min(1, Math.max(0, c)) * 255),
      o = s(n),
      i = s(e),
      a = s(t);
    if (r === void 0 || r >= 1) return `rgba(${o}, ${i}, ${a}, 1)`;
    let l = Math.min(1, Math.max(0, r));
    return `rgba(${o}, ${i}, ${a}, ${l})`;
  };
});
var rl = w((Ns) => {
  "use strict";
  Object.defineProperty(Ns, "__esModule", { value: !0 });
  Object.defineProperty(Ns, "storeOriginalState", {
    enumerable: !0,
    get: function () {
      return dg;
    },
  });
  var ug = Se(),
    fg = ks(),
    dg = (n, e, t) => {
      let r = n.material,
        s = Array.isArray(r) ? r : r ? [r] : [],
        o = e.spline._scene.entityByUuid[t]?.color,
        i = o ? (0, fg.colorDataToCss)(o) : void 0,
        a = n.rotation;
      return {
        position: { ...n.position },
        rotation: { x: a._x ?? 0, y: a._y ?? 0, z: a._z ?? 0 },
        scale: { ...n.scale },
        ...(i ? { color: i } : {}),
        intensity: n.intensity,
        renderOrder: (0, ug.hasRenderOrder)(n) ? n.renderOrder : void 0,
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
var st = w((Ls) => {
  "use strict";
  Object.defineProperty(Ls, "__esModule", { value: !0 });
  Object.defineProperty(Ls, "SPLINE_CONSTANTS", {
    enumerable: !0,
    get: function () {
      return pg;
    },
  });
  var pg = {
    OPACITY_RENDER_ORDER: 999,
    TRANSITION_END_OFFSET: 0.001,
    DEFAULT_TRANSITION_DURATION: 0.5,
    OPACITY_TRANSPARENCY_THRESHOLD: 0.01,
    DEFAULT_TRANSMISSION_IOR: 1.3,
    DEFAULT_TRANSMISSION_THICKNESS: 10,
    MIN_ZOOM_VALUE: 1e-4,
  };
});
var Lt = w((Fs) => {
  "use strict";
  Object.defineProperty(Fs, "__esModule", { value: !0 });
  function hg(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  hg(Fs, {
    getAppZoom: function () {
      return mg;
    },
    setAppZoom: function () {
      return yg;
    },
  });
  var gg = st(),
    mg = (n) => {
      let e = n._camera;
      return e._cameraType === "OrthographicCamera"
        ? e.orthoCamera.zoom
        : e.perspCamera.zoom;
    },
    yg = (n, e) => {
      let t = e > 0 ? e : gg.SPLINE_CONSTANTS.MIN_ZOOM_VALUE;
      n.setZoom?.(t);
    };
});
var Vs = w((Ds) => {
  "use strict";
  Object.defineProperty(Ds, "__esModule", { value: !0 });
  Object.defineProperty(Ds, "createCleanupFunction", {
    enumerable: !0,
    get: function () {
      return Tg;
    },
  });
  var vg = Lt(),
    Ft = Se(),
    Tg = (n, e, t, r, s, o) => () => {
      if (!(!n || !t)) {
        if (
          (o && (n.state = void 0),
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
            (0, Ft.hasIntensity)(n) &&
            (n.intensity = t.intensity),
          r.spline?.zoom && typeof r.spline.zoom == "object")
        ) {
          let i = e.spline;
          typeof i?.setZoom == "function" && (0, vg.setAppZoom)(i, s ?? 1);
        }
        if (t.materials) {
          let i = n.material,
            a = Array.isArray(i) ? i : i ? [i] : [];
          (0, Ft.hasRenderOrder)(n) && (n.renderOrder = t.renderOrder ?? 0);
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
        (0, Ft.hasMatrixUpdate)(n) &&
          (n.updateMatrix(), n.updateMatrixWorld(!0)),
          (0, Ft.hasBBoxUpdate)(n) &&
            ((n.singleBBoxNeedsUpdate = !0), (n.recursiveBBoxNeedsUpdate = !0)),
          e.spline.requestRender();
      }
    };
});
var sl = w((Bs) => {
  "use strict";
  Object.defineProperty(Bs, "__esModule", { value: !0 });
  function bg(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  bg(Bs, {
    warnNoObjectId: function () {
      return Sg;
    },
    warnNoObjectsFound: function () {
      return wg;
    },
    warnObjectNotFound: function () {
      return Eg;
    },
  });
  var Sg = () => {},
    Eg = (n) => {},
    wg = (n) => {};
});
var al = w((js) => {
  "use strict";
  Object.defineProperty(js, "__esModule", { value: !0 });
  Object.defineProperty(js, "animateStateTransitions", {
    enumerable: !0,
    get: function () {
      return Ag;
    },
  });
  var ol = st(),
    Og = Vs(),
    il = Se(),
    Ag = (n, e, t, r, s, o, i, a, l, c) => {
      let u = [];
      n.forEach((d) => {
        if (!d.transition) {
          u.push(null);
          return;
        }
        let p = l.duration ?? ol.SPLINE_CONSTANTS.DEFAULT_TRANSITION_DURATION,
          h = d.transition({
            from:
              e.stateName?.from && (0, il.checkTt)(a, "from")
                ? e.stateName.from
                : void 0,
            to:
              e.stateName?.to && (0, il.checkTt)(a, "to")
                ? e.stateName.to
                : null,
            autoPlay: !1,
            duration: p,
            delay: 0,
          });
        u.push(h);
        let g = { time: 0 };
        i.fromTo(
          g,
          { time: 0 },
          {
            ...l,
            time: p - ol.SPLINE_CONSTANTS.TRANSITION_END_OFFSET,
            onUpdate: () => {
              h.seek(g.time);
            },
          },
          c || 0
        );
      });
      let f = n.map((d, p) =>
        (0, Og.createCleanupFunction)(d, t, r[p], s, o, u[p])
      );
      return () => f.forEach((d) => d?.());
    };
});
var cl = w((Gs) => {
  "use strict";
  Object.defineProperty(Gs, "__esModule", { value: !0 });
  function _g(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  _g(Gs, {
    animateColor: function () {
      return Mg;
    },
    animateIntensity: function () {
      return Ig;
    },
    animateZoom: function () {
      return Cg;
    },
  });
  var ll = Lt(),
    Rg = ks(),
    Ee = Se(),
    Ig = (n, e, t, r, s, o) => {
      let i = e.intensity;
      if (!i || typeof i != "object") return;
      let a = n.intensity ?? 0,
        l = i.from && (0, Ee.checkTt)(r, "from") ? i.from : a,
        c = i.to && (0, Ee.checkTt)(r, "to") ? i.to : a,
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
        o || 0
      );
    },
    Cg = (n, e, t, r, s, o) => {
      let i = e.zoom;
      if (!i || typeof i != "object" || typeof n.spline?.setZoom != "function")
        return;
      let a = (0, ll.getAppZoom)(n.spline),
        l = i.from && (0, Ee.checkTt)(r, "from") ? i.from : a,
        c = i.to && (0, Ee.checkTt)(r, "to") ? i.to : a,
        u = { v: l };
      t.fromTo(
        u,
        { v: l },
        {
          ...s,
          v: c,
          onUpdate: () => {
            (0, ll.setAppZoom)(n.spline, u.v);
          },
        },
        o || 0
      );
    },
    Mg = (n, e, t, r, s, o, i, a) => {
      let l = e.color;
      if (!l || typeof l != "object" || (!l.from && !l.to)) return;
      let c = i.spline._scene.entityByUuid[a]?.color,
        u = (0, Rg.colorDataToCss)(c ?? { r: 255, g: 255, b: 255 }),
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
        o || 0
      );
    };
});
var fl = w((Us) => {
  "use strict";
  Object.defineProperty(Us, "__esModule", { value: !0 });
  function Pg(n, e) {
    for (var t in e) Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
  }
  Pg(Us, {
    createPropertyObject: function () {
      return ul;
    },
    createTransformTargets: function () {
      return xg;
    },
  });
  var ul = (n, e, t) => {
      let r = {},
        s = t[e];
      return (
        ["X", "Y", "Z"].forEach((o) => {
          let i = `${e}${o}`,
            a = n[i],
            l = o.toLowerCase(),
            c = s[l];
          a &&
            typeof a == "object" &&
            (r[l] = { from: a.from ?? c, to: a.to ?? c });
        }),
        { props: r }
      );
    },
    xg = (n, e) => {
      let t = ["position", "rotation", "scale"],
        r = [];
      return (
        t.forEach((s) => {
          let { props: o } = ul(e, s, n);
          Object.keys(o).length > 0 && r.push({ object: n[s], props: o });
        }),
        r
      );
    };
});
var dl = w((qs) => {
  "use strict";
  Object.defineProperty(qs, "__esModule", { value: !0 });
  Object.defineProperty(qs, "fadeObject", {
    enumerable: !0,
    get: function () {
      return Dg;
    },
  });
  var Dt = st(),
    $s = Se(),
    kg = (n, e, t, r, s, o) => {
      r.fromTo(n, { alpha: e }, { ...s, alpha: t }, o);
    },
    Ng = (n, e, t, r, s, o) => {
      let i = n.ior ?? Dt.SPLINE_CONSTANTS.DEFAULT_TRANSMISSION_IOR,
        a = n.thickness ?? Dt.SPLINE_CONSTANTS.DEFAULT_TRANSMISSION_THICKNESS;
      r.fromTo(
        n,
        { alpha: e, ior: i, thickness: a },
        {
          ...s,
          alpha: 1 - t,
          ior: window.gsap.utils.interpolate(i, 1, 1 - t),
          thickness: window.gsap.utils.interpolate(a, 0, 1 - t),
          onUpdate: () => {
            n.visible =
              n.alpha > Dt.SPLINE_CONSTANTS.OPACITY_TRANSPARENCY_THRESHOLD;
          },
        },
        o
      );
    },
    Lg = (n, e, t, r, s, o) => {
      n.alphaOverride !== void 0 &&
        r.fromTo(n, { alphaOverride: e }, { ...s, alphaOverride: t }, o);
    },
    Fg = (n, e, t, r, s, o) => {
      if (!n.visible) return;
      let i = n.type;
      i === "color" || i === "depth" || i === "outline"
        ? kg(n, e, t, r, s, o)
        : i === "transmission"
        ? Ng(n, e, t, r, s, o)
        : i === "light" && Lg(n, e, t, r, s, o);
    },
    Dg = (n, e, t, r, s, o) => {
      if (!n) return;
      let i = n.material,
        a = i?.layers;
      if (a) {
        (i.transparent = !0),
          (0, $s.hasRenderOrder)(n) &&
            (n.renderOrder = Dt.SPLINE_CONSTANTS.OPACITY_RENDER_ORDER);
        for (let l of a) {
          let c = l.type === "light" ? l.alphaOverride ?? 1 : l.alpha ?? 1,
            u = e.from !== void 0 && (0, $s.checkTt)(r, "from") ? e.from : c,
            f = e.to !== void 0 && (0, $s.checkTt)(r, "to") ? e.to : c;
          Fg(l, u, f, t, s, o);
        }
      }
    };
});
var hl = w((Ws) => {
  "use strict";
  Object.defineProperty(Ws, "__esModule", { value: !0 });
  Object.defineProperty(Ws, "setupAnimation", {
    enumerable: !0,
    get: function () {
      return qg;
    },
  });
  var Vg = rl(),
    Bg = Vs(),
    jg = Lt(),
    zs = sl(),
    Gg = al(),
    Hs = cl(),
    Ug = fl(),
    $g = dl(),
    Vt = Se(),
    pl = st(),
    qg = (n, e, t, r, s, o) => {
      t.ease || (t = { ...t, ease: "none" });
      let { force3D: i, ...a } = t;
      if (((t = { ...a }), !n.spline?.findObjectById)) return;
      let l = e.spline,
        c = (e.objectId || "").split(",").filter(Boolean);
      if (c.length === 0) {
        (0, zs.warnNoObjectId)();
        return;
      }
      let u = c.flatMap((g) => {
        let y = n.spline.findObjectById?.(g);
        return y || ((0, zs.warnObjectNotFound)(g), []);
      });
      if (u.length === 0) {
        (0, zs.warnNoObjectsFound)(c);
        return;
      }
      let f = u.map((g) => (0, Vg.storeOriginalState)(g, n, c[0] ?? "")),
        d = (0, jg.getAppZoom)(n.spline);
      if (
        e.animatingState &&
        l?.stateName &&
        (l.stateName.from || l.stateName.to)
      )
        return (0, Gg.animateStateTransitions)(u, l, n, f, e, d, r, s, t, o);
      if (!l) return;
      let p = Object.keys(l);
      if (p.length === 0 || (p.length === 1 && p[0] === "stateName")) return;
      u.forEach((g) => {
        (0, Hs.animateIntensity)(g, l, r, s, t, o),
          (0, Hs.animateZoom)(n, l, r, s, t, o),
          (0, Hs.animateColor)(g, l, r, s, t, o, n, c[0] ?? "");
        let y = l.opacity && typeof l.opacity == "object" ? l.opacity : void 0;
        if (y !== void 0) {
          let b = {
              from: y.from !== void 0 ? y.from / 100 : void 0,
              to: y.to !== void 0 ? y.to / 100 : void 0,
            },
            m =
              t.immediateRender !== !1 &&
              b.from !== void 0 &&
              (0, Vt.checkTt)(s, "from")
                ? b.from
                : void 0;
          if (((0, $g.fadeObject)(g, b, r, s, t, o), m !== void 0)) {
            let A = g.material,
              E = Array.isArray(A) ? A : A ? [A] : [];
            for (let v of E)
              (v.transparent = !0),
                (v.depthWrite =
                  m > pl.SPLINE_CONSTANTS.OPACITY_TRANSPARENCY_THRESHOLD);
            (0, Vt.hasRenderOrder)(g) &&
              (g.renderOrder = pl.SPLINE_CONSTANTS.OPACITY_RENDER_ORDER);
          }
        }
        (0, Ug.createTransformTargets)(g, l).forEach(
          ({ object: b, props: m }) => {
            if (Object.keys(m).length === 0) return;
            let A = {},
              E = {};
            Object.keys(m).forEach((v) => {
              let S = m[v];
              S &&
                typeof S == "object" &&
                ((A[v] =
                  (0, Vt.checkTt)(s, "from") && S.from ? S.from : b[v] ?? 0),
                (E[v] = (0, Vt.checkTt)(s, "to") && S.to ? S.to : b[v] ?? 0));
            }),
              !(Object.keys(A).length === 0 && Object.keys(E).length === 0) &&
                r.fromTo(b, A, { ...t, ...E }, o || 0);
          }
        );
      });
      let h = u.map((g, y) => (0, Bg.createCleanupFunction)(g, n, f[y], e, d));
      return () => h.forEach((g) => g?.());
    };
});
var yl = w((Ys) => {
  "use strict";
  Object.defineProperty(Ys, "__esModule", { value: !0 });
  Object.defineProperty(Ys, "buildSplineAction", {
    enumerable: !0,
    get: function () {
      return Kg;
    },
  });
  var gl = hl(),
    Bt = Ne(),
    zg = new Set(["color", "stateName"]),
    Hg = new Set(["rotationX", "rotationY", "rotationZ"]),
    ml = Math.PI / 180;
  function Wg(n, e) {
    if (!n.spline) return n;
    let t = n.spline,
      r = {},
      s = !1;
    for (let [o, i] of Object.entries(t)) {
      if (!i || typeof i != "object") {
        r[o] = i;
        continue;
      }
      let a = i;
      if (zg.has(o)) {
        let l = a.from !== void 0 ? (0, Bt.resolveToString)(a.from, e) : void 0,
          c = a.to !== void 0 ? (0, Bt.resolveToString)(a.to, e) : void 0;
        (l !== a.from || c !== a.to) && (s = !0), (r[o] = { from: l, to: c });
      } else {
        let l = a.from !== void 0 ? (0, Bt.resolveToNumber)(a.from, e) : void 0,
          c = a.to !== void 0 ? (0, Bt.resolveToNumber)(a.to, e) : void 0,
          u = l !== a.from,
          f = c !== a.to;
        (u || f) && (s = !0),
          Hg.has(o)
            ? (r[o] = {
                from: l !== void 0 && u ? l * ml : l,
                to: c !== void 0 && f ? c * ml : c,
              })
            : (r[o] = { from: l, to: c });
      }
    }
    return s ? { ...n, spline: r } : n;
  }
  function Yg(n, e, t, r, s, o, i) {
    let a = e.getInstance(n);
    if (a) return (0, gl.setupAnimation)(a, t, r, s, o, i);
    let l,
      c = () => {
        let u = e.getInstance(n);
        u && (l = (0, gl.setupAnimation)(u, t, r, s, o, i)),
          n.removeEventListener("w-spline-load", c);
      };
    return (
      n.addEventListener("w-spline-load", c),
      () => {
        n.removeEventListener("w-spline-load", c), l?.();
      }
    );
  }
  function Kg(n) {
    n.addAction("spline", {
      createCustomTween: (e, t, r, s, o, i) => {
        let a = t.tt ?? 0;
        if (!o.length || !window.Webflow || !r.objectId) return;
        let l = window.Webflow.require?.("spline");
        if (!l) return;
        let c = [];
        for (let u of o) {
          let f = Wg(r, u),
            d = Yg(u, l, f, s, e, a, i);
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
var Xs = w((Ks) => {
  "use strict";
  Object.defineProperty(Ks, "__esModule", { value: !0 });
  Object.defineProperty(Ks, "clearInlineCustomProperties", {
    enumerable: !0,
    get: function () {
      return Xg;
    },
  });
  function Xg(n, e) {
    let t = n.length,
      r = e.length,
      s = new Array(t);
    for (let o = 0; o < t; o++) {
      let i = n[o].style,
        a = new Array(r);
      for (let l = 0; l < r; l++) {
        let c = e[l];
        (a[l] = i.getPropertyValue(c)), i.removeProperty(c);
      }
      s[o] = a;
    }
    return () => {
      for (let o = 0; o < t; o++) {
        let i = n[o].style,
          a = s[o];
        for (let l = 0; l < r; l++) {
          let c = a[l];
          c ? i.setProperty(e[l], c) : i.removeProperty(e[l]);
        }
      }
    };
  }
});
var Ol = w((Zs) => {
  "use strict";
  Object.defineProperty(Zs, "__esModule", { value: !0 });
  Object.defineProperty(Zs, "buildVariableAction", {
    enumerable: !0,
    get: function () {
      return Zg;
    },
  });
  var Qs = H(),
    Qg = Xs();
  function Zg(n) {
    n.addAction("variable", {
      createCustomTween: (e, t, r, s, o, i) => {
        let a = r.variable;
        if (!a) return;
        let l = Object.keys(a),
          c = l.length;
        if (c === 0) return;
        let u = (t.targets?.length ?? 0) > 0;
        if (u && o.length === 0) return;
        let f = u ? Array.from(new Set(o)) : Jg(l),
          d = f.length,
          p = (0, Qg.clearInlineCustomProperties)(f, l),
          h = t.tt ?? Qs.TweenType.To,
          g = i || 0,
          { force3D: y, ...T } = s,
          b = l.some((A) => a[A].startsWith("var(")),
          m = (A) => {
            let E = {};
            for (let v = 0; v < c; v++) {
              let S = l[v],
                _ = a[S];
              E[S] = bl(
                (A &&
                  _.startsWith("var(") &&
                  A.getPropertyValue(_.slice(4, -1)).trim()) ||
                  _
              );
            }
            return E;
          };
        if (u)
          for (let A = 0; A < d; A++) {
            let E = f[A],
              v = m(b ? getComputedStyle(E) : null);
            vl(e, h, E, { ...v, ...T }, g, l);
          }
        else {
          let E = {
            ...m(b ? getComputedStyle(document.documentElement) : null),
            ...T,
          };
          for (let v = 0; v < d; v++) vl(e, h, f[v], E, g, l);
        }
        return p;
      },
    });
  }
  function Jg(n) {
    let e = [document.documentElement];
    if (n.length === 0) return e;
    let t = tm(n) ?? nm(n);
    for (let r = 0; r < t.length; r++) e.push(t[r]);
    return e;
  }
  function bl(n) {
    return n.replace(/(^|[^\d.])\.(\d)/g, "$10.$2");
  }
  function em(n, e) {
    let t = getComputedStyle(n),
      r = null;
    for (let s = 0; s < e.length; s++) {
      let o = e[s],
        i = t.getPropertyValue(o).trim(),
        a = bl(i);
      a !== i && ((r ??= {})[o] = a);
    }
    return r;
  }
  function vl(n, e, t, r, s, o) {
    e === Qs.TweenType.From
      ? n.from(t, r, s)
      : e === Qs.TweenType.Set
      ? n.set(t, r, s)
      : (n.add(() => {
          let i = em(t, o);
          i && window.gsap.set(t, i);
        }, s),
        n.to(t, r, s));
  }
  function tm(n) {
    let e = new Set([document.documentElement]),
      t = [],
      r = new Map();
    try {
      let s = document.styleSheets;
      for (let o = 0; o < s.length; o++) Sl(s[o].cssRules, n, t, e, r);
      return t;
    } catch {
      return null;
    }
  }
  function Sl(n, e, t, r, s) {
    for (let o = 0; o < n.length; o++) {
      let i = n[o];
      if (i instanceof CSSMediaRule) {
        let l = i.conditionText,
          c = s.get(l);
        c === void 0 && ((c = matchMedia(l).matches), s.set(l, c)),
          c && Sl(i.cssRules, e, t, r, s);
        continue;
      }
      if (!(i instanceof CSSStyleRule)) continue;
      let a = i.style;
      for (let l = 0; l < e.length; l++)
        if (a.getPropertyValue(e[l])) {
          try {
            let c = document.querySelectorAll(i.selectorText);
            for (let u = 0; u < c.length; u++) {
              let f = c[u];
              r.has(f) || (r.add(f), t.push(f));
            }
          } catch {}
          break;
        }
    }
  }
  var El = "__ix3__";
  function nm(n) {
    let e = document.documentElement,
      t = document.body,
      r = [],
      s = n.length,
      o = [],
      i = [];
    wl(e, n, s, o, i), Tl(t, n, s, r, o, i);
    let a = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT),
      l;
    for (; (l = a.nextNode()); ) Tl(l, n, s, r, o, i);
    for (let c = 0; c < o.length; c++) {
      let u = o[c].style,
        f = i[c];
      for (let d = 0; d < s; d++) {
        let p = f[d];
        p ? u.setProperty(n[d], p) : u.removeProperty(n[d]);
      }
    }
    return r;
  }
  function wl(n, e, t, r, s) {
    let o = n.style,
      i = new Array(t);
    for (let a = 0; a < t; a++) {
      let l = e[a];
      (i[a] = o.getPropertyValue(l)), o.setProperty(l, El);
    }
    r.push(n), s.push(i);
  }
  function Tl(n, e, t, r, s, o) {
    let i = getComputedStyle(n);
    for (let a = 0; a < t; a++)
      if (i.getPropertyValue(e[a]) !== El) {
        r.push(n), wl(n, e, t, s, o);
        return;
      }
  }
});
var Al = w((Js) => {
  "use strict";
  Object.defineProperty(Js, "__esModule", { value: !0 });
  Object.defineProperty(Js, "buildCustomPropertyAction", {
    enumerable: !0,
    get: function () {
      return om;
    },
  });
  var Le = H(),
    rm = ds(),
    sm = Xs();
  function om(n) {
    n.addAction("custom-property", {
      createCustomTween: (e, t, r, s, o, i, a) => {
        let l = Object.keys(r);
        if (l.length === 0 || o.length === 0) return;
        let c = Array.from(new Set(o)),
          u = l.filter(im),
          f = u.length > 0 ? (0, sm.clearInlineCustomProperties)(c, u) : void 0,
          d = (0, rm.createStyleTweenConfig)(r, c),
          p = t.tt ?? Le.TweenType.To,
          h = Object.keys(d.from).length > 0,
          g = Object.keys(d.to).length > 0;
        if (
          p === Le.TweenType.From
            ? !h
            : p === Le.TweenType.FromTo
            ? !h && !g
            : !g
        ) {
          f?.();
          return;
        }
        a?.flagVolatileValues?.(d);
        let y = u.length === l.length ? am(s) : { ...s };
        return (
          p === Le.TweenType.From
            ? e.from(c, { ...y, ...d.from }, i)
            : p === Le.TweenType.FromTo
            ? e.fromTo(c, { ...d.from }, { ...y, ...d.to }, i)
            : p === Le.TweenType.Set
            ? e.set(c, { ...y, ...d.to }, i)
            : e.to(c, { ...y, ...d.to }, i),
          f
        );
      },
    });
  }
  function im(n) {
    return n.charCodeAt(0) === 45 && n.charCodeAt(1) === 45;
  }
  function am(n) {
    let { force3D: e, ...t } = n;
    return t;
  }
});
var Rl = w((eo) => {
  "use strict";
  Object.defineProperty(eo, "__esModule", { value: !0 });
  Object.defineProperty(eo, "plugin", {
    enumerable: !0,
    get: function () {
      return ym;
    },
  });
  var lm = wa(),
    cm = ds(),
    um = Va(),
    _l = nl(),
    fm = yl(),
    dm = Ol(),
    pm = Al(),
    hm = $r(),
    gm = H(),
    mm = ne(),
    oe = new gm.RuntimeBuilder(mm.CORE_PLUGIN_INFO);
  (0, lm.build)(oe);
  (0, cm.build)(oe);
  (0, um.buildLottieAction)(oe);
  (0, _l.buildRiveAction)(oe);
  (0, _l.buildAnimateRiveAction)(oe);
  (0, fm.buildSplineAction)(oe);
  (0, dm.buildVariableAction)(oe);
  (0, pm.buildCustomPropertyAction)(oe);
  (0, hm.build)(oe);
  var ym = oe.buildRuntime();
});
var Il = w((to) => {
  "use strict";
  Object.defineProperty(to, "__esModule", { value: !0 });
  Object.defineProperty(to, "plugin", {
    enumerable: !0,
    get: function () {
      return vm.plugin;
    },
  });
  var vm = Rl();
});
var Cl = io(pi()),
  Ml = io(Il());
async function Tm() {
  try {
    let n = await Cl.IX3.init({ doc: document, win: window });
    return (
      await n.registerPlugin(Ml.plugin),
      { register: (e, t) => n.register(e, t), destroy: () => n.destroy() }
    );
  } catch (n) {
    throw (console.error("[Devlink IX3] Engine initialization failed:", n), n);
  }
}
var av = { createIX3Engine: Tm };
export { Tm as createIX3Engine, av as default };
