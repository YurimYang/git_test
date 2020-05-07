/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
"use strict";const bootstrap=require("./bootstrap");function parseURLQueryArgs(){return(window.location.search||"").split(/[?&]/).filter((function(e){return!!e})).map((function(e){return e.split("=")})).filter((function(e){return 2===e.length})).reduce((function(e,n){return e[n[0]]=decodeURIComponent(n[1]),e}),{})}function registerDeveloperKeybindings(e){const n=require("electron").ipcRenderer,o="darwin"===process.platform?"meta-alt-73":"ctrl-shift-73",t="darwin"===process.platform?"meta-82":"ctrl-82";let r=function(r){const s=function(e){return[e.ctrlKey?"ctrl-":"",e.metaKey?"meta-":"",e.altKey?"alt-":"",e.shiftKey?"shift-":"",e.keyCode].join("")}(r);s===o||"123"===s?n.send("vscode:toggleDevTools"):s!==t||e||n.send("vscode:reloadWindow")};return window.addEventListener("keydown",r),function(){r&&(window.removeEventListener("keydown",r),r=void 0)}}function onUnexpectedError(e,n){const o=require("electron").ipcRenderer;n&&o.send("vscode:openDevTools"),console.error("[uncaught exception]: "+e),
e&&e.stack&&console.error(e.stack)}exports.assign=function(e,n){return Object.keys(n).reduce((function(e,o){return e[o]=n[o],e}),e)},exports.load=function(e,n,o){const t=require("electron").webFrame,r=require("path"),s=parseURLQueryArgs(),i=JSON.parse(s.config||"{}")||{},a=i.zoomLevel;"number"==typeof a&&0!==a&&t.setZoomLevel(a),process.on("uncaughtException",(function(e){onUnexpectedError(e,c)}));const c=(process.env.VSCODE_DEV||!!i.extensionDevelopmentPath)&&!i.extensionTestsPath;let d;(c||o&&o.forceEnableDeveloperKeybindings)&&(d=registerDeveloperKeybindings(o&&o.disallowReloadKeybinding)),exports.assign(process.env,i.userEnv),bootstrap.enableASARSupport(r.join(i.appRoot,"node_modules")),o&&"function"==typeof o.canModifyDOM&&o.canModifyDOM(i);const l=bootstrap.setupNLS();let p=l.availableLanguages["*"]||"en";"zh-tw"===p?p="zh-Hant":"zh-cn"===p&&(p="zh-Hans"),window.document.documentElement.setAttribute("lang",p)
;const u=require(i.appRoot+"/out/vs/loader.js"),f=u.require,m=u.require.define,g=u.require.nodeRequire;window.nodeRequire=g,window.require=f,m("fs",["original-fs"],(function(e){return e})),window.MonacoEnvironment={};const h={baseUrl:bootstrap.uriFromPath(i.appRoot)+"/out","vs/nls":l,
nodeModules:["electron","original-fs","debug","strip-ansi","applicationinsights","diagnostic-channel","diagnostic-channel-publishers","zone.js","chokidar","graceful-fs","http-proxy-agent","ms","https-proxy-agent","agent-base","iconv-lite","jschardet","keytar","nan","prebuild-install","minimist","native-is-elevated","native-keymap","native-watchdog","node-pty","onigasm-umd","semver-umd","spdlog","bindings","file-uri-to-path","sudo-prompt","v8-inspect-profiler","chrome-remote-interface","vscode-nsfw","vscode-proxy-agent","vscode-ripgrep","vscode-sqlite3","vscode-textmate","vsda","xterm","xterm-addon-search","xterm-addon-unicode11","xterm-addon-web-links","xterm-addon-webgl","yauzl","yazl","vscode-windows-ca-certs","node-addon-api","vscode-windows-registry","windows-foreground-love","windows-mutex","windows-process-tree","ansi-regex","anymatch","braces","buffer-crc32","fd-slicer","fs-extra","fsevents","glob-parent","is-binary-path","is-glob","lodash.isinteger","lodash.isundefined","mkdirp","normalize-path","oniguruma","github-from-package","readdirp","safer-buffer","socks-proxy-agent","binary-extensions","commander","detect-libc","es6-promisify","expand-template","fill-range","is-extglob","jsonfile","napi-build-utils","node-abi","semver","noop-logger","npmlog","os-homedir","pend","picomatch","pump","rc","simple-get","socks","smart-buffer","tar-fs","tunnel-agent","universalify","which-pm-runs","ws","are-we-there-yet","async-limiter","chownr","console-control-strings","decompress-response","deep-extend","end-of-stream","es6-promise","gauge","ini","ip","once","safe-buffer","set-blocking","simple-concat","strip-json-comments","tar-stream","to-regex-range","ultron","aproba","bl","buffer-alloc","delegates","fs-constants","has-unicode","is-number","mimic-response","object-assign","readable-stream","signal-exit","string-width","to-buffer","wide-align","is-fullwidth-code-point","wrappy","xtend","buffer-alloc-unsafe","buffer-fill","code-point-at","core-util-is","inherits","isarray","process-nextick-args","string_decoder","util-deprecate","number-is-nan","assert","async_hooks","buffer","child_process","cluster","console","constants","crypto","dgram","dns","domain","events","fs","http","http2","https","inspector","module","net","os","path","perf_hooks","process","punycode","querystring","readline","repl","stream","string_decoder","sys","timers","tls","trace_events","tty","url","util","v8","vm","worker_threads","zlib","config"]
};i.nodeCachedDataDir&&(h.nodeCachedData={path:i.nodeCachedDataDir,seed:e.join("")}),o&&"function"==typeof o.beforeLoaderConfig&&o.beforeLoaderConfig(i,h),f.config(h),l.pseudo&&f(["vs/nls"],(function(e){e.setPseudoTranslation(l.pseudo)})),o&&"function"==typeof o.beforeRequire&&o.beforeRequire(),f(e,e=>{try{const t=n(e,i);t&&"function"==typeof t.then&&t.then(()=>{d&&o&&o.removeDeveloperKeybindingsAfterLoad&&d()},e=>{onUnexpectedError(e,c)})}catch(e){onUnexpectedError(e,c)}},onUnexpectedError)};
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/ff915844119ce9485abfe8aa9076ec76b5300ddd/core/bootstrap-window.js.map
