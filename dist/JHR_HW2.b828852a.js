// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"56AJI":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "f3e508fdb828852a";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            if (err.message) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"lhpGb":[function(require,module,exports,__globalThis) {
var _headerJs = require("./modules/header.js");
var _consoleJs = require("./modules/console.js");
var _sliderJs = require("./modules/slider.js");
var _animationsJs = require("./modules/animations.js");
console.log("Javascript file is connected");
const PS1 = new (0, _consoleJs.Console)("PlayStation 1", "1994", "PS1: The Pioneer", "The PlayStation One (PS1), released by Sony in 1994 (Japan) and 1995 (Worldwide), marked a turning point in the gaming industry. Originally born from a failed partnership with Nintendo, the console introduced CD-based gaming, allowing for improved graphics, enhanced sound, and larger game storage compared to cartridges. With its sleek design, easy development process, and strong third-party support, the PS1 quickly became one of the best-selling consoles of all time, surpassing 100 million units. Its success established Sony as a major player in the gaming industry and set the foundation for future PlayStation consoles.", "The PlayStation One (PS1) brought significant innovations to gaming, including CD-ROM technology for better graphics, sound, and larger games. It popularized 3D polygon-based graphics and introduced advanced audio with CD-quality sound and full voice acting. Memory cards allowed players to save progress independently, while the DualShock controller added analog sticks and vibration for enhanced gameplay. Strong third-party support contributed to a vast and diverse game library.", "The PlayStation One (PS1) featured various accessories that enhanced gameplay. The DualShock controller introduced analog sticks and vibration for better control and immersion. Memory cards were essential for saving progress since the console lacked internal storage. The Multitap allowed up to four players to connect, while the PlayStation Mouse provided better precision for certain games. The Link Cable enabled multiplayer gaming between two PS1 consoles on separate TVs, and the LCD Screen offered a portable gaming option when paired with a power adapter.", [
    "Final Fantasy VII",
    "Resident Evil 2",
    "Crash Bandicoot"
], 0 // index
);
const PS2 = new (0, _consoleJs.Console)("PlayStation 2", "2000", "PS2: The Legend", "The PlayStation 2 (PS2), released by Sony in 2000, built upon the success of its predecessor and became the best-selling console of all time. It introduced a powerful hardware upgrade, enabling improved graphics and performance, while maintaining backward compatibility with PS1 games. Built-in DVD player, the PS2 doubled as a multimedia device, contributing to its widespread popularity. Strong third-party support and a vast game library helped solidify its dominance in the gaming industry. Selling over 155 million units, the PS2 further cemented Sony's position as a leader in the console market.", "PS2 brought several key advancements to gaming. It introduced DVD-based games, offering larger storage capacity and better graphics. The console popularized motion capture and more detailed 3D environments, pushing the boundaries of game visuals. It also included backward compatibility with PS1 games, making it a versatile choice for gamers. The DualShock 2 controller refined the design with improved analog sticks and additional buttons. With strong third-party support and an enormous library, the PS2 solidified its place as one of the most influential consoles in gaming history.", "The PlayStation 2 (PS2) had several accessories that enhanced the gaming experience. The DualShock 2 controller featured improved analog sticks and buttons for more precise control. The PS2 Memory Card allowed players to save their progress and manage multiple game saves. The Multitap accessory enabled up to four players to join in compatible games. The PS2 EyeToy introduced motion-sensing technology for interactive gameplay, while the USB Keyboard and Mouse supported certain PC-style games. Additionally, the PlayStation 2 Network Adapter enabled online gaming, expanding the console's capabilities.", [
    "Grand Theft Auto: San Andreas",
    "Shadow of the Colossus",
    "God of War II"
], 1 // index
);
const PS3 = new (0, _consoleJs.Console)("PlayStation 3", "2006", "PS3: The Powerhouse", "The PlayStation 3 (PS3), released by Sony in 2006, was a major leap forward in gaming technology. It introduced Blu-ray disc support, offering much larger storage than DVDs, which allowed for high-definition graphics and expansive game worlds. The PS3 also featured a powerful processor (Cell Broadband Engine), making it capable of handling complex, graphically rich games. The PS3 became the first console to support HD gaming and online gaming through the PlayStation Network (PSN). With its sleek design, built-in Wi-Fi, and the ability to play HD movies and stream media, the PS3 was a multifunctional device. Selling over 87 million units, it played a key role in solidifying Sony's came an all-in-one entertainment device.", "The PlayStation 3 (PS3) brought several key evolutions that advanced gaming and entertainment. Blu-ray Technology was a major evolution, allowing for high-definition game and movie storage, offering much larger capacity than DVDs. This made the PS3 one of the first consoles to offer HD gaming and HD movie playback, setting the stage for the future of digital entertainment. The Cell Broadband Engine processor provided powerful hardware for complex graphics and faster load times, pushing the limits of what was possible in video games at the time. The PS3 also supported online connectivity via the PlayStation Network (PSN), enabling online multiplayer, digital downloads, and media streaming, marking a significant shift in how players interacted with games and content. Additionally, the PS3's wireless connectivity and Bluetooth support allowed for more flexible, untethered gameplay, and the Sixaxis and DualShock 3 controllers introduced motion-sensing and wireless technology, making gaming more interactive. The inclusion of a hard drive in every model also allowed players to store game data, downloadable content, and even media files, making the PS3 an all-in-one entertainment hub. These evolutions transformed the PS3 from just a gaming console into a complete home entertainment system, solidifying its place in gaming history.", "The PlayStation 3 (PS3) had a range of accessories that enhanced the gaming experience. The DualShock 3 controller added wireless connectivity and motion-sensing capabilities, improving gameplay immersion. The PlayStation Move motion controller allowed for more interactive experiences in compatible games, similar to other motion-based gaming systems. The PS3 Eye Camera offered motion tracking and was used for certain games and video chat. The PS3 Blu-ray Remote Control provided easy navigation of movies and media on the console, making it a great all-in-one entertainment device. External hard drives could be used for additional storage, while the PlayStation Headset allowed players to communicate during online multiplayer games. The Multitap accessory allowed more players to join in on local multiplayer games when supported, and the PlayStation Network (PSN) cards provided an easy way to add funds to the user's PSN account for digital content.", [
    "The Last of Us",
    "Uncharted 2: Among Thieves",
    "Red Dead Redemption"
], 2 // index
);
const PS4 = new (0, _consoleJs.Console)("PlayStation 4", "2013", "PS4: The Game-Changer", "The PlayStation 4 (PS4), released by Sony in 2013, represented a major leap forward in gaming, focusing on performance, connectivity, and social gaming. With its powerful hardware, including a custom AMD processor and 8GB of GDDR5 RAM, the PS4 delivered stunning graphics, fast load times, and smooth gameplay. The PS4 was designed for HD gaming and 4K media streaming, making it a hub for both gaming and entertainment. The console introduced a more user-friendly interface, improved PlayStation Network (PSN) services, and a strong focus on digital downloads and streaming. The PS4 also enhanced social features with the introduction of the Share button on the controller, allowing users to share gameplay, stream, and connect with friends seamlessly. With over 116 million units sold, the PS4 became one of the best-selling consoles of all time and established Sony as a dominant force in the gaming market.", "The PlayStation 4 (PS4) introduced several key innovations to gaming. The console was powered by an AMD x86-64 processor, delivering impressive graphics and faster performance compared to previous consoles. It also supported HD and 4K resolution for games and media, improving the visual experience.The DualShock 4 controller featured a touchpad, improved motion sensors, and an integrated light bar, offering a more dynamic and responsive gaming experience. The PS4 also introduced a more social gaming experience, allowing players to stream their gameplay directly to platforms like Twitch and YouTube, while the Share button made it easier to capture and share moments with friends. Additionally, the PS4 included built-in Wi-Fi, Blu-ray support, and access to PlayStation Plus, which provided online multiplayer and exclusive content. The console also offered VR compatibility with the PlayStation VR headset, making it one of the first mainstream consoles to embrace virtual reality.", "The PlayStation 4 (PS4) came with several accessories that enhanced the gaming experience. The DualShock 4 controller featured improved ergonomics, a touchpad, a built-in speaker, and a light bar for more interactive gameplay. The PlayStation Camera provided motion-tracking and voice recognition, supporting features like facial recognition and PSVR for virtual reality gaming. The PlayStation VR headset allowed players to experience immersive virtual reality gaming with a range of compatible titles. For multiplayer gaming, players could use the DualShock 4 Charging Station to charge multiple controllers at once. The PlayStation Move controllers were also compatible with PSVR for more immersive experiences. Additionally, the PlayStation Gold Wireless Headset offered high-quality sound and built-in surround sound for a more immersive audio experience during gaming sessions. The PlayStation TV allowed users to stream PS4 games to another TV in the house, while the PlayStation Now subscription service enabled access to a library of games via cloud streaming", [
    "Red Dead Redemption 2",
    "Marvel's Spider-Man",
    "The Last of Us Part II"
], 3 // index
);
const PS5 = new (0, _consoleJs.upgradedConsole)("PlayStation 5", "2020", "PS5: The Future", "The PlayStation 5 (PS5), released by Sony in November 2020, brought next-generation gaming to life with cutting-edge technology and design. Powered by a custom AMD processor, 16GB of GDDR6 RAM, and a custom SSD, the PS5 offers incredibly fast load times, enhanced graphics, and smoother performance. It supports 4K gaming at 120Hz, with the potential for 8K output, setting a new standard for visual quality and frame rates. The PS5 also introduced the DualSense controller, which features adaptive triggers and haptic feedback, creating an immersive experience with more dynamic and responsive gameplay. The console supports Ray Tracing, improving lighting, reflections, and shadow details in games, providing a more realistic visual experience. The PS5 also continues Sony\u2019s focus on digital integration, with a redesigned PlayStation Store and new features for online gaming, game streaming, and backward compatibility for most PS4 games. With its sleek design and innovative features, the PS5 quickly became a must-have for gamers and further cemented Sony's position as a leader in the gaming industry.", "The PlayStation 5 (PS5) brings several key advancements to gaming. Powered by a custom AMD Zen 2 processor and RDNA 2 graphics, the PS5 supports 4K resolution at 120Hz and even 8K output for a visually stunning experience. Its custom SSD drastically reduces load times, allowing for near-instant access to games and smoother transitions between levels. The DualSense controller is a standout feature, offering adaptive triggers that provide variable resistance depending on in-game actions, as well as haptic feedback for a more tactile gaming experience. The controller also includes a built-in microphone for voice chat, adding to its versatility. The PS5 supports Ray Tracing, which enhances the lighting and shadow effects in games, providing a more lifelike experience. Additionally, the PS5 includes 3D Audio, delivering an immersive sound experience with compatible headphones. The console also boasts backward compatibility for most PS4 games, allowing players to enjoy their existing library on the new system. Enhanced PlayStation Plus and PlayStation Now services provide access to a growing collection of games for streaming and download.", "The PlayStation 5 (PS5) offers several accessories that enhance the gaming experience. The DualSense controller is one of the standout features, with adaptive triggers, haptic feedback, and a built-in microphone for immersive gameplay. The PS5 HD Camera allows for streaming and video capture with 1080p resolution, making it ideal for content creators. The Pulse 3D Wireless Headset offers 3D audio support, delivering an immersive sound experience when playing compatible games. For charging, the DualSense Charging Station allows you to charge two controllers simultaneously, keeping them ready for multiplayer sessions. The Media Remote makes navigating streaming apps and media on the PS5 simple and convenient. Additionally, the PlayStation VR headset is compatible with the PS5, continuing Sony\u2019s push into virtual reality gaming, and PlayStation 5 Storage Expansion Cards allow players to add additional storage, ensuring enough space for the next-generation games.", [
    "God Of War Ragnarok",
    "Elden Ring",
    "Hogwarts Legacy"
], 4 // index
);
const consoles = [
    PS1,
    PS2,
    PS3,
    PS4,
    PS5
];
consoles.forEach((console1)=>{
    console1.consoleInfo();
    console1.gameInfo();
});
(0, _headerJs.initHeader)();
(0, _sliderJs.initSlider)(consoles);
(0, _animationsJs.initAnimations)();

},{"./modules/header.js":"cNpFK","./modules/console.js":"lz593","./modules/slider.js":"1o24h","./modules/animations.js":"9iY4a"}],"cNpFK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initHeader", ()=>initHeader);
function initHeader() {
    const burgerButton = document.querySelector("#burger-button");
    const navbarLinks = document.querySelector(".links-header");
    burgerButton.addEventListener("click", ()=>{
        navbarLinks.classList.toggle("active");
        burgerButton.classList.toggle("active");
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lz593":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Console", ()=>Console);
parcelHelpers.export(exports, "upgradedConsole", ()=>upgradedConsole);
const consoleCon = document.querySelector(".console-con");
class Console {
    constructor(name, release_date, alias, description, features, accessories, games = [], index){
        this.name = name;
        this.release_date = release_date;
        this.alias = alias;
        this.description = description;
        this.features = features;
        this.accessories = accessories;
        this.games = games;
        this.index = index;
    }
    consoleInfo() {
        consoleCon.innerHTML = `
          <div class="console-heading">
            <h4 class="console-release_date">${this.release_date}</h4>
            <h3 class="console-name">${this.name}</h3>
            <h4 class="console-nickname">${this.alias}</h4>
          </div>
          <p class="console-text">${this.description}</p>
          <div class="console-evolutions">
            <h5>Evolutions</h5>
            <p>${this.features}</p>
          </div>
          <div class="console-acessories">
            <h5>Accessories</h5>
            <p>${this.accessories}</p>
          </div>
          <div class="notable-games">
            <h5>Notable Games</h5>
            <div class="games-con"></div>
          </div>`;
    }
    gameInfo() {
        this.games.forEach((game)=>{
            const gameDiv = document.createElement("div");
            const gamesCon = document.querySelector(".games-con");
            let img = game.replace(/(?!\w|\s)./g, "").replace(/\s+/g, "").toLowerCase();
            gameDiv.innerHTML = `
                <img class="game-image"
                    src="images/${img}.webp"
                    alt="${game} poster"
                    />
                <p class="game-name"><span>${game}</span></p>
                `;
            gamesCon.appendChild(gameDiv);
        });
    }
}
class upgradedConsole extends Console {
    constructor(name, release_date, alias, description, features, accessories, games = [], extra, index){
        super(name, release_date, alias, description, features, accessories, games, index);
        this.extra = extra;
    }
    extraInfo() {
        let extraInfo = document.createElement("p");
        extraInfo.classList.add('console-extra');
        extraInfo.textContent = `One of the unique features of the ${this.name} is ${this.extra}.`;
        consoleCon.appendChild(extraInfo);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1o24h":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initSlider", ()=>initSlider);
function initSlider(consoles, index = 0) {
    const slideInfo = document.querySelector(".console-con");
    const track = document.querySelector(".carousel-track");
    const prevBtn = document.querySelector("#prevBtn");
    const nextBtn = document.querySelector("#nextBtn");
    let isAnimating = false;
    let currentIndex = index;
    function showConsoles(index) {
        const prevIndex = (index - 1 + consoles.length) % consoles.length;
        const nextIndex = (index + 1) % consoles.length;
        track.innerHTML = "";
        // previous img
        const prevImg = document.createElement("img");
        prevImg.src = `images/ps${prevIndex + 1}.png`;
        prevImg.classList.add("prev-img", "carousel-img");
        prevImg.addEventListener("click", ()=>prevSlide());
        // current img
        const currentImg = document.createElement("img");
        currentImg.src = `images/ps${index + 1}.png`;
        currentImg.classList.add("current-img", "carousel-img");
        // next img
        const nextImg = document.createElement("img");
        nextImg.src = `images/ps${nextIndex + 1}.png`;
        nextImg.classList.add("next-img", "carousel-img");
        nextImg.addEventListener("click", ()=>nextSlide());
        track.append(prevImg, currentImg, nextImg);
    }
    function showSlide(index) {
        slideInfo.innerHTML = "";
        animateConsole();
        const currentSlide = consoles[index];
        currentSlide.consoleInfo();
        currentSlide.gameInfo();
        if (index === 4) {
            currentSlide.extraInfo();
            console.log("extra showing");
        }
    }
    function animateConsole() {
        gsap.fromTo(".console-con", {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power1.out",
            scrollTrigger: {
                trigger: ".console-con",
                start: "top bottom",
                end: "bottom 50%"
            }
        });
    }
    function prevSlide() {
        if (isAnimating) return;
        isAnimating = true;
        gsap.fromTo(".carousel-img", {
            x: 0,
            opacity: 1
        }, {
            x: -300,
            opacity: 0,
            duration: 0.5,
            ease: "power1.out",
            onComplete: function() {
                currentIndex = (currentIndex - 1 + consoles.length) % consoles.length;
                showConsoles(currentIndex);
                showSlide(currentIndex);
                gsap.fromTo(".carousel-img", {
                    x: -300,
                    opacity: 0
                }, {
                    x: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: "power1.out",
                    onComplete: function() {
                        isAnimating = false;
                        console.log("prev");
                    }
                });
            }
        });
    }
    function nextSlide() {
        if (isAnimating) return;
        isAnimating = true;
        gsap.fromTo(".carousel-img", {
            x: 0,
            opacity: 1
        }, {
            x: 300,
            opacity: 0,
            duration: 0.5,
            ease: "power1.out",
            onComplete: ()=>{
                currentIndex = (currentIndex + 1) % consoles.length;
                showConsoles(currentIndex);
                showSlide(currentIndex);
                gsap.fromTo(".carousel-img", {
                    x: 300,
                    opacity: 0
                }, {
                    x: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: "power1.out",
                    onComplete: ()=>{
                        isAnimating = false;
                        console.log("next");
                    }
                });
            }
        });
    }
    showConsoles(currentIndex);
    showSlide(currentIndex);
    prevBtn.addEventListener("click", prevSlide);
    nextBtn.addEventListener("click", nextSlide);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9iY4a":[function(require,module,exports,__globalThis) {
// This file holds GSAP animations
// GSAP library is linked in index.html
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initAnimations", ()=>initAnimations);
function initAnimations() {
    gsap.from(".hero-content", {
        scrollTrigger: {
            trigger: ".hero-content",
            start: "top 50%",
            end: "bottom 50%",
            toggleActions: "play none none none",
            markers: false
        },
        duration: 2,
        opacity: 0,
        y: -50,
        ease: "ease2.inOut"
    });
    gsap.from(".story-text-con", {
        scrollTrigger: {
            trigger: ".story-paragraph-con",
            start: "top 90%",
            end: "bottom 50%",
            toggleActions: "play none none reverse",
            markers: false
        },
        duration: 1,
        opacity: 0,
        y: -50,
        ease: "ease2.inOut"
    });
    gsap.from(".story-divisory-line", {
        scrollTrigger: {
            trigger: ".story-paragraph-con",
            start: "top 90%",
            end: "bottom 50%",
            toggleActions: "play none none reverse",
            markers: false
        },
        duration: 2,
        opacity: 0,
        x: 100,
        ease: "ease2.inOut"
    });
    gsap.from(".story-text-con img", {
        scrollTrigger: {
            trigger: ".story-paragraph-con",
            start: "top 90%",
            end: "bottom 50%",
            toggleActions: "play none none reverse",
            markers: false
        },
        duration: 3,
        opacity: 0,
        y: -50,
        ease: "ease2.inOut"
    });
    gsap.from(".story-paragraph", {
        scrollTrigger: {
            trigger: ".story-paragraph",
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse",
            markers: false
        },
        duration: 1,
        opacity: 0,
        x: -100,
        ease: "ease2.inOut",
        stagger: 0.3
    });
    gsap.from(".story-image", {
        scrollTrigger: {
            trigger: ".story-image",
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse",
            markers: false
        },
        duration: 1,
        opacity: 0,
        x: 100,
        ease: "ease2.inOut"
    });
    gsap.from(".page-divs", 2, {
        scrollTrigger: {
            trigger: ".page-divs",
            start: "top bottom",
            end: "bottom 50%",
            toggleActions: "play none none reverse",
            markers: false
        },
        duration: 2,
        opacity: 0,
        ease: "ease2.inOut",
        y: -50
    });
    gsap.from(".page-divisory-line", 2, {
        scrollTrigger: {
            trigger: ".page-divs",
            start: "top bottom",
            end: "bottom 50%",
            toggleActions: "play none none reverse",
            markers: false
        },
        duration: 2,
        opacity: 0,
        ease: "ease2.inOut",
        y: -50
    });
}
gsap.from(".timeline-text", 2, {
    scrollTrigger: {
        trigger: ".timeline-text",
        start: "top bottom",
        end: "bottom 50%",
        toggleActions: "play none none reverse",
        markers: false
    },
    duration: 2,
    opacity: 0,
    ease: "ease2.inOut",
    y: -150
});
gsap.from(".carousel-buttons", 3, {
    scrollTrigger: {
        trigger: ".timeline-text",
        start: "top bottom",
        end: "bottom 50%",
        toggleActions: "play none none reverse",
        markers: false
    },
    duration: 5,
    opacity: 0,
    ease: "ease2.inOut"
});
gsap.from(".carousel-track", {
    scrollTrigger: {
        trigger: ".carousel-track",
        start: "top bottom",
        end: "bottom 50%",
        toggleActions: "play none none reverse",
        markers: false
    },
    duration: 1,
    opacity: 0,
    y: 30,
    ease: "ease2.inOut"
});
gsap.from(".console-con", 1, {
    scrollTrigger: {
        trigger: ".console-con",
        start: "top bottom",
        end: "bottom 50%",
        toggleActions: "play none none reverse",
        markers: false
    },
    duration: 1,
    opacity: 0,
    ease: "ease2.inOut",
    y: 50
});
gsap.from(".footer", 1, {
    scrollTrigger: {
        trigger: ".footer",
        start: "top 60%",
        end: "bottom 50%",
        toggleActions: "play none none reverse",
        markers: false
    },
    duration: 3,
    opacity: 0,
    ease: "ease2.inOut",
    y: -25
});
gsap.from(".footer img", {
    scrollTrigger: {
        trigger: ".footer",
        start: "top 60%",
        end: "bottom 50%",
        toggleActions: "play none none reverse",
        markers: false
    },
    duration: 1,
    y: 25,
    opacity: 0,
    scale: 0.75,
    ease: "ease2.inOut"
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["56AJI","lhpGb"], "lhpGb", "parcelRequire1ed6")

//# sourceMappingURL=JHR_HW2.b828852a.js.map
