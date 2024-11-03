/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var polaris_app;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.federation/entry.5887b7e08de1c0b7b3d2dc801b1f1886.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.federation/entry.5887b7e08de1c0b7b3d2dc801b1f1886.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var F_codespace_fe_system_node_modules_pnpm_module_federation_webpack_bundler_runtime_0_6_15_node_modules_module_federation_webpack_bundler_runtime_dist_index_cjs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/.pnpm/@module-federation+webpack-bundler-runtime@0.6.15/node_modules/@module-federation/webpack-bundler-runtime/dist/index.cjs.js */ \"../../node_modules/.pnpm/@module-federation+webpack-bundler-runtime@0.6.15/node_modules/@module-federation/webpack-bundler-runtime/dist/index.cjs.js\");\n/* harmony import */ var F_codespace_fe_system_node_modules_pnpm_module_federation_webpack_bundler_runtime_0_6_15_node_modules_module_federation_webpack_bundler_runtime_dist_index_cjs_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(F_codespace_fe_system_node_modules_pnpm_module_federation_webpack_bundler_runtime_0_6_15_node_modules_module_federation_webpack_bundler_runtime_dist_index_cjs_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nif(!__webpack_require__.federation.runtime){\n\tvar prevFederation = __webpack_require__.federation;\n\t__webpack_require__.federation = {}\n\tfor(var key in (F_codespace_fe_system_node_modules_pnpm_module_federation_webpack_bundler_runtime_0_6_15_node_modules_module_federation_webpack_bundler_runtime_dist_index_cjs_js__WEBPACK_IMPORTED_MODULE_0___default())){\n\t\t__webpack_require__.federation[key] = (F_codespace_fe_system_node_modules_pnpm_module_federation_webpack_bundler_runtime_0_6_15_node_modules_module_federation_webpack_bundler_runtime_dist_index_cjs_js__WEBPACK_IMPORTED_MODULE_0___default())[key];\n\t}\n\tfor(var key in prevFederation){\n\t\t__webpack_require__.federation[key] = prevFederation[key];\n\t}\n}\nif(!__webpack_require__.federation.instance){\n\n\t__webpack_require__.federation.instance = __webpack_require__.federation.runtime.init(__webpack_require__.federation.initOptions);\n\tif(__webpack_require__.federation.attachShareScopeMap){\n\t\t__webpack_require__.federation.attachShareScopeMap(__webpack_require__)\n\t}\n\tif(__webpack_require__.federation.installInitialConsumes){\n\t\t__webpack_require__.federation.installInitialConsumes()\n\t}\n\n\tif(!__webpack_require__.federation.isMFRemote && __webpack_require__.federation.prefetch){\n\t__webpack_require__.federation.prefetch()\n\t}\n}\n\n//# sourceURL=webpack://playground/./node_modules/.federation/entry.5887b7e08de1c0b7b3d2dc801b1f1886.js?");

/***/ }),

/***/ "../../node_modules/.pnpm/@module-federation+runtime@0.6.15/node_modules/@module-federation/runtime/dist/index.cjs.js":
/*!****************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@module-federation+runtime@0.6.15/node_modules/@module-federation/runtime/dist/index.cjs.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar polyfills = __webpack_require__(/*! ./polyfills.cjs.js */ \"../../node_modules/.pnpm/@module-federation+runtime@0.6.15/node_modules/@module-federation/runtime/dist/polyfills.cjs.js\");\nvar sdk = __webpack_require__(/*! @module-federation/sdk */ \"../../node_modules/.pnpm/@module-federation+sdk@0.6.15/node_modules/@module-federation/sdk/dist/index.cjs.js\");\nvar share = __webpack_require__(/*! ./share.cjs.js */ \"../../node_modules/.pnpm/@module-federation+runtime@0.6.15/node_modules/@module-federation/runtime/dist/share.cjs.js\");\n\n// Function to match a remote with its name and expose\n// id: pkgName(@federation/app1) + expose(button) = @federation/app1/button\n// id: alias(app1) + expose(button) = app1/button\n// id: alias(app1/utils) + expose(loadash/sort) = app1/utils/loadash/sort\nfunction matchRemoteWithNameAndExpose(remotes, id) {\n    for (const remote of remotes){\n        // match pkgName\n        const isNameMatched = id.startsWith(remote.name);\n        let expose = id.replace(remote.name, '');\n        if (isNameMatched) {\n            if (expose.startsWith('/')) {\n                const pkgNameOrAlias = remote.name;\n                expose = `.${expose}`;\n                return {\n                    pkgNameOrAlias,\n                    expose,\n                    remote\n                };\n            } else if (expose === '') {\n                return {\n                    pkgNameOrAlias: remote.name,\n                    expose: '.',\n                    remote\n                };\n            }\n        }\n        // match alias\n        const isAliasMatched = remote.alias && id.startsWith(remote.alias);\n        let exposeWithAlias = remote.alias && id.replace(remote.alias, '');\n        if (remote.alias && isAliasMatched) {\n            if (exposeWithAlias && exposeWithAlias.startsWith('/')) {\n                const pkgNameOrAlias = remote.alias;\n                exposeWithAlias = `.${exposeWithAlias}`;\n                return {\n                    pkgNameOrAlias,\n                    expose: exposeWithAlias,\n                    remote\n                };\n            } else if (exposeWithAlias === '') {\n                return {\n                    pkgNameOrAlias: remote.alias,\n                    expose: '.',\n                    remote\n                };\n            }\n        }\n    }\n    return;\n}\n// Function to match a remote with its name or alias\nfunction matchRemote(remotes, nameOrAlias) {\n    for (const remote of remotes){\n        const isNameMatched = nameOrAlias === remote.name;\n        if (isNameMatched) {\n            return remote;\n        }\n        const isAliasMatched = remote.alias && nameOrAlias === remote.alias;\n        if (isAliasMatched) {\n            return remote;\n        }\n    }\n    return;\n}\n\nfunction registerPlugins$1(plugins, hookInstances) {\n    const globalPlugins = share.getGlobalHostPlugins();\n    // Incorporate global plugins\n    if (globalPlugins.length > 0) {\n        globalPlugins.forEach((plugin)=>{\n            if (plugins == null ? void 0 : plugins.find((item)=>item.name !== plugin.name)) {\n                plugins.push(plugin);\n            }\n        });\n    }\n    if (plugins && plugins.length > 0) {\n        plugins.forEach((plugin)=>{\n            hookInstances.forEach((hookInstance)=>{\n                hookInstance.applyPlugin(plugin);\n            });\n        });\n    }\n    return plugins;\n}\n\nasync function loadEsmEntry({ entry, remoteEntryExports }) {\n    return new Promise((resolve, reject)=>{\n        try {\n            if (!remoteEntryExports) {\n                import(/* webpackIgnore: true */ entry).then(resolve).catch(reject);\n            } else {\n                resolve(remoteEntryExports);\n            }\n        } catch (e) {\n            reject(e);\n        }\n    });\n}\nasync function loadSystemJsEntry({ entry, remoteEntryExports }) {\n    return new Promise((resolve, reject)=>{\n        try {\n            if (!remoteEntryExports) {\n                //@ts-ignore\n                if (false) {} else {\n                    new Function('callbacks', `System.import(\"${entry}\").then(callbacks[0]).catch(callbacks[1])`)([\n                        resolve,\n                        reject\n                    ]);\n                }\n            } else {\n                resolve(remoteEntryExports);\n            }\n        } catch (e) {\n            reject(e);\n        }\n    });\n}\nasync function loadEntryScript({ name, globalName, entry, createScriptHook }) {\n    const { entryExports: remoteEntryExports } = share.getRemoteEntryExports(name, globalName);\n    if (remoteEntryExports) {\n        return remoteEntryExports;\n    }\n    return sdk.loadScript(entry, {\n        attrs: {},\n        createScriptHook: (url, attrs)=>{\n            const res = createScriptHook.emit({\n                url,\n                attrs\n            });\n            if (!res) return;\n            if (res instanceof HTMLScriptElement) {\n                return res;\n            }\n            if ('script' in res || 'timeout' in res) {\n                return res;\n            }\n            return;\n        }\n    }).then(()=>{\n        const { remoteEntryKey, entryExports } = share.getRemoteEntryExports(name, globalName);\n        share.assert(entryExports, `\n      Unable to use the ${name}'s '${entry}' URL with ${remoteEntryKey}'s globalName to get remoteEntry exports.\n      Possible reasons could be:\\n\n      1. '${entry}' is not the correct URL, or the remoteEntry resource or name is incorrect.\\n\n      2. ${remoteEntryKey} cannot be used to get remoteEntry exports in the window object.\n    `);\n        return entryExports;\n    }).catch((e)=>{\n        throw e;\n    });\n}\nasync function loadEntryDom({ remoteInfo, remoteEntryExports, createScriptHook }) {\n    const { entry, entryGlobalName: globalName, name, type } = remoteInfo;\n    switch(type){\n        case 'esm':\n        case 'module':\n            return loadEsmEntry({\n                entry,\n                remoteEntryExports\n            });\n        case 'system':\n            return loadSystemJsEntry({\n                entry,\n                remoteEntryExports\n            });\n        default:\n            return loadEntryScript({\n                entry,\n                globalName,\n                name,\n                createScriptHook\n            });\n    }\n}\nasync function loadEntryNode({ remoteInfo, createScriptHook }) {\n    const { entry, entryGlobalName: globalName, name, type } = remoteInfo;\n    const { entryExports: remoteEntryExports } = share.getRemoteEntryExports(name, globalName);\n    if (remoteEntryExports) {\n        return remoteEntryExports;\n    }\n    return sdk.loadScriptNode(entry, {\n        attrs: {\n            name,\n            globalName,\n            type\n        },\n        createScriptHook: (url, attrs)=>{\n            const res = createScriptHook.emit({\n                url,\n                attrs\n            });\n            if (!res) return;\n            if ('url' in res) {\n                return res;\n            }\n            return;\n        }\n    }).then(()=>{\n        const { remoteEntryKey, entryExports } = share.getRemoteEntryExports(name, globalName);\n        share.assert(entryExports, `\n      Unable to use the ${name}'s '${entry}' URL with ${remoteEntryKey}'s globalName to get remoteEntry exports.\n      Possible reasons could be:\\n\n      1. '${entry}' is not the correct URL, or the remoteEntry resource or name is incorrect.\\n\n      2. ${remoteEntryKey} cannot be used to get remoteEntry exports in the window object.\n    `);\n        return entryExports;\n    }).catch((e)=>{\n        throw e;\n    });\n}\nfunction getRemoteEntryUniqueKey(remoteInfo) {\n    const { entry, name } = remoteInfo;\n    return sdk.composeKeyWithSeparator(name, entry);\n}\nasync function getRemoteEntry({ origin, remoteEntryExports, remoteInfo }) {\n    const uniqueKey = getRemoteEntryUniqueKey(remoteInfo);\n    if (remoteEntryExports) {\n        return remoteEntryExports;\n    }\n    if (!share.globalLoading[uniqueKey]) {\n        const loadEntryHook = origin.remoteHandler.hooks.lifecycle.loadEntry;\n        const createScriptHook = origin.loaderHook.lifecycle.createScript;\n        share.globalLoading[uniqueKey] = loadEntryHook.emit({\n            createScriptHook,\n            remoteInfo,\n            remoteEntryExports\n        }).then((res)=>{\n            if (res) {\n                return res;\n            }\n            return sdk.isBrowserEnv() ? loadEntryDom({\n                remoteInfo,\n                remoteEntryExports,\n                createScriptHook\n            }) : loadEntryNode({\n                remoteInfo,\n                createScriptHook\n            });\n        });\n    }\n    return share.globalLoading[uniqueKey];\n}\nfunction getRemoteInfo(remote) {\n    return polyfills._extends({}, remote, {\n        entry: 'entry' in remote ? remote.entry : '',\n        type: remote.type || share.DEFAULT_REMOTE_TYPE,\n        entryGlobalName: remote.entryGlobalName || remote.name,\n        shareScope: remote.shareScope || share.DEFAULT_SCOPE\n    });\n}\n\nlet Module = class Module {\n    async getEntry() {\n        if (this.remoteEntryExports) {\n            return this.remoteEntryExports;\n        }\n        // Get remoteEntry.js\n        const remoteEntryExports = await getRemoteEntry({\n            origin: this.host,\n            remoteInfo: this.remoteInfo,\n            remoteEntryExports: this.remoteEntryExports\n        });\n        share.assert(remoteEntryExports, `remoteEntryExports is undefined \\n ${sdk.safeToString(this.remoteInfo)}`);\n        this.remoteEntryExports = remoteEntryExports;\n        return this.remoteEntryExports;\n    }\n    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types\n    async get(id, expose, options, remoteSnapshot) {\n        const { loadFactory = true } = options || {\n            loadFactory: true\n        };\n        // Get remoteEntry.js\n        const remoteEntryExports = await this.getEntry();\n        if (!this.inited) {\n            const localShareScopeMap = this.host.shareScopeMap;\n            const remoteShareScope = this.remoteInfo.shareScope || 'default';\n            if (!localShareScopeMap[remoteShareScope]) {\n                localShareScopeMap[remoteShareScope] = {};\n            }\n            const shareScope = localShareScopeMap[remoteShareScope];\n            const initScope = [];\n            const remoteEntryInitOptions = {\n                version: this.remoteInfo.version || ''\n            };\n            // Help to find host instance\n            Object.defineProperty(remoteEntryInitOptions, 'shareScopeMap', {\n                value: localShareScopeMap,\n                // remoteEntryInitOptions will be traversed and assigned during container init, ,so this attribute is not allowed to be traversed\n                enumerable: false\n            });\n            const initContainerOptions = await this.host.hooks.lifecycle.beforeInitContainer.emit({\n                shareScope,\n                // @ts-ignore shareScopeMap will be set by Object.defineProperty\n                remoteEntryInitOptions,\n                initScope,\n                remoteInfo: this.remoteInfo,\n                origin: this.host\n            });\n            if (typeof (remoteEntryExports == null ? void 0 : remoteEntryExports.init) === 'undefined') {\n                share.logger.error('The remote entry interface does not contain \"init\"', '\\n', 'Ensure the name of this remote is not reserved or in use. Check if anything already exists on window[nameOfRemote]', '\\n', 'Ensure that window[nameOfRemote] is returning a {get,init} object.');\n            }\n            await remoteEntryExports.init(initContainerOptions.shareScope, initContainerOptions.initScope, initContainerOptions.remoteEntryInitOptions);\n            await this.host.hooks.lifecycle.initContainer.emit(polyfills._extends({}, initContainerOptions, {\n                id,\n                remoteSnapshot,\n                remoteEntryExports\n            }));\n        }\n        this.lib = remoteEntryExports;\n        this.inited = true;\n        let moduleFactory;\n        moduleFactory = await this.host.loaderHook.lifecycle.getModuleFactory.emit({\n            remoteEntryExports,\n            expose,\n            moduleInfo: this.remoteInfo\n        });\n        // get exposeGetter\n        if (!moduleFactory) {\n            moduleFactory = await remoteEntryExports.get(expose);\n        }\n        share.assert(moduleFactory, `${share.getFMId(this.remoteInfo)} remote don't export ${expose}.`);\n        const wrapModuleFactory = this.wraperFactory(moduleFactory, id);\n        if (!loadFactory) {\n            return wrapModuleFactory;\n        }\n        const exposeContent = await wrapModuleFactory();\n        return exposeContent;\n    }\n    wraperFactory(moduleFactory, id) {\n        function defineModuleId(res, id) {\n            if (res && typeof res === 'object' && Object.isExtensible(res) && !Object.getOwnPropertyDescriptor(res, Symbol.for('mf_module_id'))) {\n                Object.defineProperty(res, Symbol.for('mf_module_id'), {\n                    value: id,\n                    enumerable: false\n                });\n            }\n        }\n        if (moduleFactory instanceof Promise) {\n            return async ()=>{\n                const res = await moduleFactory();\n                // This parameter is used for bridge debugging\n                defineModuleId(res, id);\n                return res;\n            };\n        } else {\n            return ()=>{\n                const res = moduleFactory();\n                // This parameter is used for bridge debugging\n                defineModuleId(res, id);\n                return res;\n            };\n        }\n    }\n    constructor({ remoteInfo, host }){\n        this.inited = false;\n        this.lib = undefined;\n        this.remoteInfo = remoteInfo;\n        this.host = host;\n    }\n};\n\nclass SyncHook {\n    on(fn) {\n        if (typeof fn === 'function') {\n            this.listeners.add(fn);\n        }\n    }\n    once(fn) {\n        // eslint-disable-next-line @typescript-eslint/no-this-alias\n        const self = this;\n        this.on(function wrapper(...args) {\n            self.remove(wrapper);\n            // eslint-disable-next-line prefer-spread\n            return fn.apply(null, args);\n        });\n    }\n    emit(...data) {\n        let result;\n        if (this.listeners.size > 0) {\n            // eslint-disable-next-line prefer-spread\n            this.listeners.forEach((fn)=>{\n                result = fn(...data);\n            });\n        }\n        return result;\n    }\n    remove(fn) {\n        this.listeners.delete(fn);\n    }\n    removeAll() {\n        this.listeners.clear();\n    }\n    constructor(type){\n        this.type = '';\n        this.listeners = new Set();\n        if (type) {\n            this.type = type;\n        }\n    }\n}\n\nclass AsyncHook extends SyncHook {\n    emit(...data) {\n        let result;\n        const ls = Array.from(this.listeners);\n        if (ls.length > 0) {\n            let i = 0;\n            const call = (prev)=>{\n                if (prev === false) {\n                    return false; // Abort process\n                } else if (i < ls.length) {\n                    return Promise.resolve(ls[i++].apply(null, data)).then(call);\n                } else {\n                    return prev;\n                }\n            };\n            result = call();\n        }\n        return Promise.resolve(result);\n    }\n}\n\n// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types\nfunction checkReturnData(originalData, returnedData) {\n    if (!share.isObject(returnedData)) {\n        return false;\n    }\n    if (originalData !== returnedData) {\n        // eslint-disable-next-line no-restricted-syntax\n        for(const key in originalData){\n            if (!(key in returnedData)) {\n                return false;\n            }\n        }\n    }\n    return true;\n}\nclass SyncWaterfallHook extends SyncHook {\n    emit(data) {\n        if (!share.isObject(data)) {\n            share.error(`The data for the \"${this.type}\" hook should be an object.`);\n        }\n        for (const fn of this.listeners){\n            try {\n                const tempData = fn(data);\n                if (checkReturnData(data, tempData)) {\n                    data = tempData;\n                } else {\n                    this.onerror(`A plugin returned an unacceptable value for the \"${this.type}\" type.`);\n                    break;\n                }\n            } catch (e) {\n                share.warn(e);\n                this.onerror(e);\n            }\n        }\n        return data;\n    }\n    constructor(type){\n        super(), this.onerror = share.error;\n        this.type = type;\n    }\n}\n\nclass AsyncWaterfallHook extends SyncHook {\n    emit(data) {\n        if (!share.isObject(data)) {\n            share.error(`The response data for the \"${this.type}\" hook must be an object.`);\n        }\n        const ls = Array.from(this.listeners);\n        if (ls.length > 0) {\n            let i = 0;\n            const processError = (e)=>{\n                share.warn(e);\n                this.onerror(e);\n                return data;\n            };\n            const call = (prevData)=>{\n                if (checkReturnData(data, prevData)) {\n                    data = prevData;\n                    if (i < ls.length) {\n                        try {\n                            return Promise.resolve(ls[i++](data)).then(call, processError);\n                        } catch (e) {\n                            return processError(e);\n                        }\n                    }\n                } else {\n                    this.onerror(`A plugin returned an incorrect value for the \"${this.type}\" type.`);\n                }\n                return data;\n            };\n            return Promise.resolve(call(data));\n        }\n        return Promise.resolve(data);\n    }\n    constructor(type){\n        super(), this.onerror = share.error;\n        this.type = type;\n    }\n}\n\nclass PluginSystem {\n    applyPlugin(plugin) {\n        share.assert(share.isPlainObject(plugin), 'Plugin configuration is invalid.');\n        // The plugin's name is mandatory and must be unique\n        const pluginName = plugin.name;\n        share.assert(pluginName, 'A name must be provided by the plugin.');\n        if (!this.registerPlugins[pluginName]) {\n            this.registerPlugins[pluginName] = plugin;\n            Object.keys(this.lifecycle).forEach((key)=>{\n                const pluginLife = plugin[key];\n                if (pluginLife) {\n                    this.lifecycle[key].on(pluginLife);\n                }\n            });\n        }\n    }\n    removePlugin(pluginName) {\n        share.assert(pluginName, 'A name is required.');\n        const plugin = this.registerPlugins[pluginName];\n        share.assert(plugin, `The plugin \"${pluginName}\" is not registered.`);\n        Object.keys(plugin).forEach((key)=>{\n            if (key !== 'name') {\n                this.lifecycle[key].remove(plugin[key]);\n            }\n        });\n    }\n    // eslint-disable-next-line @typescript-eslint/no-shadow\n    inherit({ lifecycle, registerPlugins }) {\n        Object.keys(lifecycle).forEach((hookName)=>{\n            share.assert(!this.lifecycle[hookName], `The hook \"${hookName}\" has a conflict and cannot be inherited.`);\n            this.lifecycle[hookName] = lifecycle[hookName];\n        });\n        Object.keys(registerPlugins).forEach((pluginName)=>{\n            share.assert(!this.registerPlugins[pluginName], `The plugin \"${pluginName}\" has a conflict and cannot be inherited.`);\n            this.applyPlugin(registerPlugins[pluginName]);\n        });\n    }\n    constructor(lifecycle){\n        this.registerPlugins = {};\n        this.lifecycle = lifecycle;\n        this.lifecycleKeys = Object.keys(lifecycle);\n    }\n}\n\nfunction defaultPreloadArgs(preloadConfig) {\n    return polyfills._extends({\n        resourceCategory: 'sync',\n        share: true,\n        depsRemote: true,\n        prefetchInterface: false\n    }, preloadConfig);\n}\nfunction formatPreloadArgs(remotes, preloadArgs) {\n    return preloadArgs.map((args)=>{\n        const remoteInfo = matchRemote(remotes, args.nameOrAlias);\n        share.assert(remoteInfo, `Unable to preload ${args.nameOrAlias} as it is not included in ${!remoteInfo && sdk.safeToString({\n            remoteInfo,\n            remotes\n        })}`);\n        return {\n            remote: remoteInfo,\n            preloadConfig: defaultPreloadArgs(args)\n        };\n    });\n}\nfunction normalizePreloadExposes(exposes) {\n    if (!exposes) {\n        return [];\n    }\n    return exposes.map((expose)=>{\n        if (expose === '.') {\n            return expose;\n        }\n        if (expose.startsWith('./')) {\n            return expose.replace('./', '');\n        }\n        return expose;\n    });\n}\nfunction preloadAssets(remoteInfo, host, assets, // It is used to distinguish preload from load remote parallel loading\nuseLinkPreload = true) {\n    const { cssAssets, jsAssetsWithoutEntry, entryAssets } = assets;\n    if (host.options.inBrowser) {\n        entryAssets.forEach((asset)=>{\n            const { moduleInfo } = asset;\n            const module = host.moduleCache.get(remoteInfo.name);\n            if (module) {\n                getRemoteEntry({\n                    origin: host,\n                    remoteInfo: moduleInfo,\n                    remoteEntryExports: module.remoteEntryExports\n                });\n            } else {\n                getRemoteEntry({\n                    origin: host,\n                    remoteInfo: moduleInfo,\n                    remoteEntryExports: undefined\n                });\n            }\n        });\n        if (useLinkPreload) {\n            const defaultAttrs = {\n                rel: 'preload',\n                as: 'style'\n            };\n            cssAssets.forEach((cssUrl)=>{\n                const { link: cssEl, needAttach } = sdk.createLink({\n                    url: cssUrl,\n                    cb: ()=>{\n                    // noop\n                    },\n                    attrs: defaultAttrs,\n                    createLinkHook: (url, attrs)=>{\n                        const res = host.loaderHook.lifecycle.createLink.emit({\n                            url,\n                            attrs\n                        });\n                        if (res instanceof HTMLLinkElement) {\n                            return res;\n                        }\n                        return;\n                    }\n                });\n                needAttach && document.head.appendChild(cssEl);\n            });\n        } else {\n            const defaultAttrs = {\n                rel: 'stylesheet',\n                type: 'text/css'\n            };\n            cssAssets.forEach((cssUrl)=>{\n                const { link: cssEl, needAttach } = sdk.createLink({\n                    url: cssUrl,\n                    cb: ()=>{\n                    // noop\n                    },\n                    attrs: defaultAttrs,\n                    createLinkHook: (url, attrs)=>{\n                        const res = host.loaderHook.lifecycle.createLink.emit({\n                            url,\n                            attrs\n                        });\n                        if (res instanceof HTMLLinkElement) {\n                            return res;\n                        }\n                        return;\n                    },\n                    needDeleteLink: false\n                });\n                needAttach && document.head.appendChild(cssEl);\n            });\n        }\n        if (useLinkPreload) {\n            const defaultAttrs = {\n                rel: 'preload',\n                as: 'script'\n            };\n            jsAssetsWithoutEntry.forEach((jsUrl)=>{\n                const { link: linkEl, needAttach } = sdk.createLink({\n                    url: jsUrl,\n                    cb: ()=>{\n                    // noop\n                    },\n                    attrs: defaultAttrs,\n                    createLinkHook: (url, attrs)=>{\n                        const res = host.loaderHook.lifecycle.createLink.emit({\n                            url,\n                            attrs\n                        });\n                        if (res instanceof HTMLLinkElement) {\n                            return res;\n                        }\n                        return;\n                    }\n                });\n                needAttach && document.head.appendChild(linkEl);\n            });\n        } else {\n            const defaultAttrs = {\n                fetchpriority: 'high',\n                type: (remoteInfo == null ? void 0 : remoteInfo.type) === 'module' ? 'module' : 'text/javascript'\n            };\n            jsAssetsWithoutEntry.forEach((jsUrl)=>{\n                const { script: scriptEl, needAttach } = sdk.createScript({\n                    url: jsUrl,\n                    cb: ()=>{\n                    // noop\n                    },\n                    attrs: defaultAttrs,\n                    createScriptHook: (url, attrs)=>{\n                        const res = host.loaderHook.lifecycle.createScript.emit({\n                            url,\n                            attrs\n                        });\n                        if (res instanceof HTMLScriptElement) {\n                            return res;\n                        }\n                        return;\n                    },\n                    needDeleteScript: true\n                });\n                needAttach && document.head.appendChild(scriptEl);\n            });\n        }\n    }\n}\n\nfunction assignRemoteInfo(remoteInfo, remoteSnapshot) {\n    const remoteEntryInfo = share.getRemoteEntryInfoFromSnapshot(remoteSnapshot);\n    if (!remoteEntryInfo.url) {\n        share.error(`The attribute remoteEntry of ${remoteInfo.name} must not be undefined.`);\n    }\n    let entryUrl = sdk.getResourceUrl(remoteSnapshot, remoteEntryInfo.url);\n    if (!sdk.isBrowserEnv() && !entryUrl.startsWith('http')) {\n        entryUrl = `https:${entryUrl}`;\n    }\n    remoteInfo.type = remoteEntryInfo.type;\n    remoteInfo.entryGlobalName = remoteEntryInfo.globalName;\n    remoteInfo.entry = entryUrl;\n    remoteInfo.version = remoteSnapshot.version;\n    remoteInfo.buildVersion = remoteSnapshot.buildVersion;\n}\nfunction snapshotPlugin() {\n    return {\n        name: 'snapshot-plugin',\n        async afterResolve (args) {\n            const { remote, pkgNameOrAlias, expose, origin, remoteInfo } = args;\n            if (!share.isRemoteInfoWithEntry(remote) || !share.isPureRemoteEntry(remote)) {\n                const { remoteSnapshot, globalSnapshot } = await origin.snapshotHandler.loadRemoteSnapshotInfo(remote);\n                assignRemoteInfo(remoteInfo, remoteSnapshot);\n                // preloading assets\n                const preloadOptions = {\n                    remote,\n                    preloadConfig: {\n                        nameOrAlias: pkgNameOrAlias,\n                        exposes: [\n                            expose\n                        ],\n                        resourceCategory: 'sync',\n                        share: false,\n                        depsRemote: false\n                    }\n                };\n                const assets = await origin.remoteHandler.hooks.lifecycle.generatePreloadAssets.emit({\n                    origin,\n                    preloadOptions,\n                    remoteInfo,\n                    remote,\n                    remoteSnapshot,\n                    globalSnapshot\n                });\n                if (assets) {\n                    preloadAssets(remoteInfo, origin, assets, false);\n                }\n                return polyfills._extends({}, args, {\n                    remoteSnapshot\n                });\n            }\n            return args;\n        }\n    };\n}\n\n// name\n// name:version\nfunction splitId(id) {\n    const splitInfo = id.split(':');\n    if (splitInfo.length === 1) {\n        return {\n            name: splitInfo[0],\n            version: undefined\n        };\n    } else if (splitInfo.length === 2) {\n        return {\n            name: splitInfo[0],\n            version: splitInfo[1]\n        };\n    } else {\n        return {\n            name: splitInfo[1],\n            version: splitInfo[2]\n        };\n    }\n}\n// Traverse all nodes in moduleInfo and traverse the entire snapshot\nfunction traverseModuleInfo(globalSnapshot, remoteInfo, traverse, isRoot, memo = {}, remoteSnapshot) {\n    const id = share.getFMId(remoteInfo);\n    const { value: snapshotValue } = share.getInfoWithoutType(globalSnapshot, id);\n    const effectiveRemoteSnapshot = remoteSnapshot || snapshotValue;\n    if (effectiveRemoteSnapshot && !sdk.isManifestProvider(effectiveRemoteSnapshot)) {\n        traverse(effectiveRemoteSnapshot, remoteInfo, isRoot);\n        if (effectiveRemoteSnapshot.remotesInfo) {\n            const remoteKeys = Object.keys(effectiveRemoteSnapshot.remotesInfo);\n            for (const key of remoteKeys){\n                if (memo[key]) {\n                    continue;\n                }\n                memo[key] = true;\n                const subRemoteInfo = splitId(key);\n                const remoteValue = effectiveRemoteSnapshot.remotesInfo[key];\n                traverseModuleInfo(globalSnapshot, {\n                    name: subRemoteInfo.name,\n                    version: remoteValue.matchedVersion\n                }, traverse, false, memo, undefined);\n            }\n        }\n    }\n}\n// eslint-disable-next-line max-lines-per-function\nfunction generatePreloadAssets(origin, preloadOptions, remote, globalSnapshot, remoteSnapshot) {\n    const cssAssets = [];\n    const jsAssets = [];\n    const entryAssets = [];\n    const loadedSharedJsAssets = new Set();\n    const loadedSharedCssAssets = new Set();\n    const { options } = origin;\n    const { preloadConfig: rootPreloadConfig } = preloadOptions;\n    const { depsRemote } = rootPreloadConfig;\n    const memo = {};\n    traverseModuleInfo(globalSnapshot, remote, (moduleInfoSnapshot, remoteInfo, isRoot)=>{\n        let preloadConfig;\n        if (isRoot) {\n            preloadConfig = rootPreloadConfig;\n        } else {\n            if (Array.isArray(depsRemote)) {\n                // eslint-disable-next-line array-callback-return\n                const findPreloadConfig = depsRemote.find((remoteConfig)=>{\n                    if (remoteConfig.nameOrAlias === remoteInfo.name || remoteConfig.nameOrAlias === remoteInfo.alias) {\n                        return true;\n                    }\n                    return false;\n                });\n                if (!findPreloadConfig) {\n                    return;\n                }\n                preloadConfig = defaultPreloadArgs(findPreloadConfig);\n            } else if (depsRemote === true) {\n                preloadConfig = rootPreloadConfig;\n            } else {\n                return;\n            }\n        }\n        const remoteEntryUrl = sdk.getResourceUrl(moduleInfoSnapshot, share.getRemoteEntryInfoFromSnapshot(moduleInfoSnapshot).url);\n        if (remoteEntryUrl) {\n            entryAssets.push({\n                name: remoteInfo.name,\n                moduleInfo: {\n                    name: remoteInfo.name,\n                    entry: remoteEntryUrl,\n                    type: 'remoteEntryType' in moduleInfoSnapshot ? moduleInfoSnapshot.remoteEntryType : 'global',\n                    entryGlobalName: 'globalName' in moduleInfoSnapshot ? moduleInfoSnapshot.globalName : remoteInfo.name,\n                    shareScope: '',\n                    version: 'version' in moduleInfoSnapshot ? moduleInfoSnapshot.version : undefined\n                },\n                url: remoteEntryUrl\n            });\n        }\n        let moduleAssetsInfo = 'modules' in moduleInfoSnapshot ? moduleInfoSnapshot.modules : [];\n        const normalizedPreloadExposes = normalizePreloadExposes(preloadConfig.exposes);\n        if (normalizedPreloadExposes.length && 'modules' in moduleInfoSnapshot) {\n            var _moduleInfoSnapshot_modules;\n            moduleAssetsInfo = moduleInfoSnapshot == null ? void 0 : (_moduleInfoSnapshot_modules = moduleInfoSnapshot.modules) == null ? void 0 : _moduleInfoSnapshot_modules.reduce((assets, moduleAssetInfo)=>{\n                if ((normalizedPreloadExposes == null ? void 0 : normalizedPreloadExposes.indexOf(moduleAssetInfo.moduleName)) !== -1) {\n                    assets.push(moduleAssetInfo);\n                }\n                return assets;\n            }, []);\n        }\n        function handleAssets(assets) {\n            const assetsRes = assets.map((asset)=>sdk.getResourceUrl(moduleInfoSnapshot, asset));\n            if (preloadConfig.filter) {\n                return assetsRes.filter(preloadConfig.filter);\n            }\n            return assetsRes;\n        }\n        if (moduleAssetsInfo) {\n            const assetsLength = moduleAssetsInfo.length;\n            for(let index = 0; index < assetsLength; index++){\n                const assetsInfo = moduleAssetsInfo[index];\n                const exposeFullPath = `${remoteInfo.name}/${assetsInfo.moduleName}`;\n                origin.remoteHandler.hooks.lifecycle.handlePreloadModule.emit({\n                    id: assetsInfo.moduleName === '.' ? remoteInfo.name : exposeFullPath,\n                    name: remoteInfo.name,\n                    remoteSnapshot: moduleInfoSnapshot,\n                    preloadConfig,\n                    remote: remoteInfo,\n                    origin\n                });\n                const preloaded = share.getPreloaded(exposeFullPath);\n                if (preloaded) {\n                    continue;\n                }\n                if (preloadConfig.resourceCategory === 'all') {\n                    cssAssets.push(...handleAssets(assetsInfo.assets.css.async));\n                    cssAssets.push(...handleAssets(assetsInfo.assets.css.sync));\n                    jsAssets.push(...handleAssets(assetsInfo.assets.js.async));\n                    jsAssets.push(...handleAssets(assetsInfo.assets.js.sync));\n                // eslint-disable-next-line no-constant-condition\n                } else if (preloadConfig.resourceCategory = 'sync') {\n                    cssAssets.push(...handleAssets(assetsInfo.assets.css.sync));\n                    jsAssets.push(...handleAssets(assetsInfo.assets.js.sync));\n                }\n                share.setPreloaded(exposeFullPath);\n            }\n        }\n    }, true, memo, remoteSnapshot);\n    if (remoteSnapshot.shared) {\n        const collectSharedAssets = (shareInfo, snapshotShared)=>{\n            const registeredShared = share.getRegisteredShare(origin.shareScopeMap, snapshotShared.sharedName, shareInfo, origin.sharedHandler.hooks.lifecycle.resolveShare);\n            // If the global share does not exist, or the lib function does not exist, it means that the shared has not been loaded yet and can be preloaded.\n            if (registeredShared && typeof registeredShared.lib === 'function') {\n                snapshotShared.assets.js.sync.forEach((asset)=>{\n                    loadedSharedJsAssets.add(asset);\n                });\n                snapshotShared.assets.css.sync.forEach((asset)=>{\n                    loadedSharedCssAssets.add(asset);\n                });\n            }\n        };\n        remoteSnapshot.shared.forEach((shared)=>{\n            var _options_shared;\n            const shareInfos = (_options_shared = options.shared) == null ? void 0 : _options_shared[shared.sharedName];\n            if (!shareInfos) {\n                return;\n            }\n            // if no version, preload all shared\n            const sharedOptions = shared.version ? shareInfos.find((s)=>s.version === shared.version) : shareInfos;\n            if (!sharedOptions) {\n                return;\n            }\n            const arrayShareInfo = share.arrayOptions(sharedOptions);\n            arrayShareInfo.forEach((s)=>{\n                collectSharedAssets(s, shared);\n            });\n        });\n    }\n    const needPreloadJsAssets = jsAssets.filter((asset)=>!loadedSharedJsAssets.has(asset));\n    const needPreloadCssAssets = cssAssets.filter((asset)=>!loadedSharedCssAssets.has(asset));\n    return {\n        cssAssets: needPreloadCssAssets,\n        jsAssetsWithoutEntry: needPreloadJsAssets,\n        entryAssets\n    };\n}\nconst generatePreloadAssetsPlugin = function() {\n    return {\n        name: 'generate-preload-assets-plugin',\n        async generatePreloadAssets (args) {\n            const { origin, preloadOptions, remoteInfo, remote, globalSnapshot, remoteSnapshot } = args;\n            if (share.isRemoteInfoWithEntry(remote) && share.isPureRemoteEntry(remote)) {\n                return {\n                    cssAssets: [],\n                    jsAssetsWithoutEntry: [],\n                    entryAssets: [\n                        {\n                            name: remote.name,\n                            url: remote.entry,\n                            moduleInfo: {\n                                name: remoteInfo.name,\n                                entry: remote.entry,\n                                type: remoteInfo.type || 'global',\n                                entryGlobalName: '',\n                                shareScope: ''\n                            }\n                        }\n                    ]\n                };\n            }\n            assignRemoteInfo(remoteInfo, remoteSnapshot);\n            const assets = generatePreloadAssets(origin, preloadOptions, remoteInfo, globalSnapshot, remoteSnapshot);\n            return assets;\n        }\n    };\n};\n\nfunction getGlobalRemoteInfo(moduleInfo, origin) {\n    const hostGlobalSnapshot = share.getGlobalSnapshotInfoByModuleInfo({\n        name: origin.options.name,\n        version: origin.options.version\n    });\n    // get remote detail info from global\n    const globalRemoteInfo = hostGlobalSnapshot && 'remotesInfo' in hostGlobalSnapshot && hostGlobalSnapshot.remotesInfo && share.getInfoWithoutType(hostGlobalSnapshot.remotesInfo, moduleInfo.name).value;\n    if (globalRemoteInfo && globalRemoteInfo.matchedVersion) {\n        return {\n            hostGlobalSnapshot,\n            globalSnapshot: share.getGlobalSnapshot(),\n            remoteSnapshot: share.getGlobalSnapshotInfoByModuleInfo({\n                name: moduleInfo.name,\n                version: globalRemoteInfo.matchedVersion\n            })\n        };\n    }\n    return {\n        hostGlobalSnapshot: undefined,\n        globalSnapshot: share.getGlobalSnapshot(),\n        remoteSnapshot: share.getGlobalSnapshotInfoByModuleInfo({\n            name: moduleInfo.name,\n            version: 'version' in moduleInfo ? moduleInfo.version : undefined\n        })\n    };\n}\nclass SnapshotHandler {\n    async loadSnapshot(moduleInfo) {\n        const { options } = this.HostInstance;\n        const { hostGlobalSnapshot, remoteSnapshot, globalSnapshot } = this.getGlobalRemoteInfo(moduleInfo);\n        const { remoteSnapshot: globalRemoteSnapshot, globalSnapshot: globalSnapshotRes } = await this.hooks.lifecycle.loadSnapshot.emit({\n            options,\n            moduleInfo,\n            hostGlobalSnapshot,\n            remoteSnapshot,\n            globalSnapshot\n        });\n        return {\n            remoteSnapshot: globalRemoteSnapshot,\n            globalSnapshot: globalSnapshotRes\n        };\n    }\n    // eslint-disable-next-line max-lines-per-function\n    async loadRemoteSnapshotInfo(moduleInfo) {\n        const { options } = this.HostInstance;\n        await this.hooks.lifecycle.beforeLoadRemoteSnapshot.emit({\n            options,\n            moduleInfo\n        });\n        let hostSnapshot = share.getGlobalSnapshotInfoByModuleInfo({\n            name: this.HostInstance.options.name,\n            version: this.HostInstance.options.version\n        });\n        if (!hostSnapshot) {\n            hostSnapshot = {\n                version: this.HostInstance.options.version || '',\n                remoteEntry: '',\n                remotesInfo: {}\n            };\n            share.addGlobalSnapshot({\n                [this.HostInstance.options.name]: hostSnapshot\n            });\n        }\n        // In dynamic loadRemote scenarios, incomplete remotesInfo delivery may occur. In such cases, the remotesInfo in the host needs to be completed in the snapshot at runtime.\n        // This ensures the snapshot's integrity and helps the chrome plugin correctly identify all producer modules, ensuring that proxyable producer modules will not be missing.\n        if (hostSnapshot && 'remotesInfo' in hostSnapshot && !share.getInfoWithoutType(hostSnapshot.remotesInfo, moduleInfo.name).value) {\n            if ('version' in moduleInfo || 'entry' in moduleInfo) {\n                hostSnapshot.remotesInfo = polyfills._extends({}, hostSnapshot == null ? void 0 : hostSnapshot.remotesInfo, {\n                    [moduleInfo.name]: {\n                        matchedVersion: 'version' in moduleInfo ? moduleInfo.version : moduleInfo.entry\n                    }\n                });\n            }\n        }\n        const { hostGlobalSnapshot, remoteSnapshot, globalSnapshot } = this.getGlobalRemoteInfo(moduleInfo);\n        const { remoteSnapshot: globalRemoteSnapshot, globalSnapshot: globalSnapshotRes } = await this.hooks.lifecycle.loadSnapshot.emit({\n            options,\n            moduleInfo,\n            hostGlobalSnapshot,\n            remoteSnapshot,\n            globalSnapshot\n        });\n        // global snapshot includes manifest or module info includes manifest\n        if (globalRemoteSnapshot) {\n            if (sdk.isManifestProvider(globalRemoteSnapshot)) {\n                const remoteEntry = sdk.isBrowserEnv() ? globalRemoteSnapshot.remoteEntry : globalRemoteSnapshot.ssrRemoteEntry || globalRemoteSnapshot.remoteEntry || '';\n                const moduleSnapshot = await this.getManifestJson(remoteEntry, moduleInfo, {});\n                // eslint-disable-next-line @typescript-eslint/no-shadow\n                const globalSnapshotRes = share.setGlobalSnapshotInfoByModuleInfo(polyfills._extends({}, moduleInfo, {\n                    // The global remote may be overridden\n                    // Therefore, set the snapshot key to the global address of the actual request\n                    entry: remoteEntry\n                }), moduleSnapshot);\n                return {\n                    remoteSnapshot: moduleSnapshot,\n                    globalSnapshot: globalSnapshotRes\n                };\n            } else {\n                const { remoteSnapshot: remoteSnapshotRes } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({\n                    options: this.HostInstance.options,\n                    moduleInfo,\n                    remoteSnapshot: globalRemoteSnapshot,\n                    from: 'global'\n                });\n                return {\n                    remoteSnapshot: remoteSnapshotRes,\n                    globalSnapshot: globalSnapshotRes\n                };\n            }\n        } else {\n            if (share.isRemoteInfoWithEntry(moduleInfo)) {\n                // get from manifest.json and merge remote info from remote server\n                const moduleSnapshot = await this.getManifestJson(moduleInfo.entry, moduleInfo, {});\n                // eslint-disable-next-line @typescript-eslint/no-shadow\n                const globalSnapshotRes = share.setGlobalSnapshotInfoByModuleInfo(moduleInfo, moduleSnapshot);\n                const { remoteSnapshot: remoteSnapshotRes } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({\n                    options: this.HostInstance.options,\n                    moduleInfo,\n                    remoteSnapshot: moduleSnapshot,\n                    from: 'global'\n                });\n                return {\n                    remoteSnapshot: remoteSnapshotRes,\n                    globalSnapshot: globalSnapshotRes\n                };\n            } else {\n                share.error(`\n          Cannot get remoteSnapshot with the name: '${moduleInfo.name}', version: '${moduleInfo.version}' from __FEDERATION__.moduleInfo. The following reasons may be causing the problem:\\n\n          1. The Deploy platform did not deliver the correct data. You can use __FEDERATION__.moduleInfo to check the remoteInfo.\\n\n          2. The remote '${moduleInfo.name}' version '${moduleInfo.version}' is not released.\\n\n          The transformed module info: ${JSON.stringify(globalSnapshotRes)}\n        `);\n            }\n        }\n    }\n    getGlobalRemoteInfo(moduleInfo) {\n        return getGlobalRemoteInfo(moduleInfo, this.HostInstance);\n    }\n    async getManifestJson(manifestUrl, moduleInfo, extraOptions) {\n        const getManifest = async ()=>{\n            let manifestJson = this.manifestCache.get(manifestUrl);\n            if (manifestJson) {\n                return manifestJson;\n            }\n            try {\n                let res = await this.loaderHook.lifecycle.fetch.emit(manifestUrl, {});\n                if (!res || !(res instanceof Response)) {\n                    res = await fetch(manifestUrl, {});\n                }\n                manifestJson = await res.json();\n                share.assert(manifestJson.metaData && manifestJson.exposes && manifestJson.shared, `${manifestUrl} is not a federation manifest`);\n                this.manifestCache.set(manifestUrl, manifestJson);\n                return manifestJson;\n            } catch (err) {\n                delete this.manifestLoading[manifestUrl];\n                share.error(`Failed to get manifestJson for ${moduleInfo.name}. The manifest URL is ${manifestUrl}. Please ensure that the manifestUrl is accessible.\n          \\n Error message:\n          \\n ${err}`);\n            }\n        };\n        const asyncLoadProcess = async ()=>{\n            const manifestJson = await getManifest();\n            const remoteSnapshot = sdk.generateSnapshotFromManifest(manifestJson, {\n                version: manifestUrl\n            });\n            const { remoteSnapshot: remoteSnapshotRes } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({\n                options: this.HostInstance.options,\n                moduleInfo,\n                manifestJson,\n                remoteSnapshot,\n                manifestUrl,\n                from: 'manifest'\n            });\n            return remoteSnapshotRes;\n        };\n        if (!this.manifestLoading[manifestUrl]) {\n            this.manifestLoading[manifestUrl] = asyncLoadProcess().then((res)=>res);\n        }\n        return this.manifestLoading[manifestUrl];\n    }\n    constructor(HostInstance){\n        this.loadingHostSnapshot = null;\n        this.manifestCache = new Map();\n        this.hooks = new PluginSystem({\n            beforeLoadRemoteSnapshot: new AsyncHook('beforeLoadRemoteSnapshot'),\n            loadSnapshot: new AsyncWaterfallHook('loadGlobalSnapshot'),\n            loadRemoteSnapshot: new AsyncWaterfallHook('loadRemoteSnapshot')\n        });\n        this.manifestLoading = share.Global.__FEDERATION__.__MANIFEST_LOADING__;\n        this.HostInstance = HostInstance;\n        this.loaderHook = HostInstance.loaderHook;\n    }\n}\n\nclass SharedHandler {\n    // register shared in shareScopeMap\n    registerShared(globalOptions, userOptions) {\n        const { shareInfos, shared } = share.formatShareConfigs(globalOptions, userOptions);\n        const sharedKeys = Object.keys(shareInfos);\n        sharedKeys.forEach((sharedKey)=>{\n            const sharedVals = shareInfos[sharedKey];\n            sharedVals.forEach((sharedVal)=>{\n                const registeredShared = share.getRegisteredShare(this.shareScopeMap, sharedKey, sharedVal, this.hooks.lifecycle.resolveShare);\n                if (!registeredShared && sharedVal && sharedVal.lib) {\n                    this.setShared({\n                        pkgName: sharedKey,\n                        lib: sharedVal.lib,\n                        get: sharedVal.get,\n                        loaded: true,\n                        shared: sharedVal,\n                        from: userOptions.name\n                    });\n                }\n            });\n        });\n        return {\n            shareInfos,\n            shared\n        };\n    }\n    async loadShare(pkgName, extraOptions) {\n        const { host } = this;\n        // This function performs the following steps:\n        // 1. Checks if the currently loaded share already exists, if not, it throws an error\n        // 2. Searches globally for a matching share, if found, it uses it directly\n        // 3. If not found, it retrieves it from the current share and stores the obtained share globally.\n        const shareInfo = share.getTargetSharedOptions({\n            pkgName,\n            extraOptions,\n            shareInfos: host.options.shared\n        });\n        if (shareInfo == null ? void 0 : shareInfo.scope) {\n            await Promise.all(shareInfo.scope.map(async (shareScope)=>{\n                await Promise.all(this.initializeSharing(shareScope, {\n                    strategy: shareInfo.strategy\n                }));\n                return;\n            }));\n        }\n        const loadShareRes = await this.hooks.lifecycle.beforeLoadShare.emit({\n            pkgName,\n            shareInfo,\n            shared: host.options.shared,\n            origin: host\n        });\n        const { shareInfo: shareInfoRes } = loadShareRes;\n        // Assert that shareInfoRes exists, if not, throw an error\n        share.assert(shareInfoRes, `Cannot find ${pkgName} Share in the ${host.options.name}. Please ensure that the ${pkgName} Share parameters have been injected`);\n        // Retrieve from cache\n        const registeredShared = share.getRegisteredShare(this.shareScopeMap, pkgName, shareInfoRes, this.hooks.lifecycle.resolveShare);\n        const addUseIn = (shared)=>{\n            if (!shared.useIn) {\n                shared.useIn = [];\n            }\n            share.addUniqueItem(shared.useIn, host.options.name);\n        };\n        if (registeredShared && registeredShared.lib) {\n            addUseIn(registeredShared);\n            return registeredShared.lib;\n        } else if (registeredShared && registeredShared.loading && !registeredShared.loaded) {\n            const factory = await registeredShared.loading;\n            registeredShared.loaded = true;\n            if (!registeredShared.lib) {\n                registeredShared.lib = factory;\n            }\n            addUseIn(registeredShared);\n            return factory;\n        } else if (registeredShared) {\n            const asyncLoadProcess = async ()=>{\n                const factory = await registeredShared.get();\n                shareInfoRes.lib = factory;\n                shareInfoRes.loaded = true;\n                addUseIn(shareInfoRes);\n                const gShared = share.getRegisteredShare(this.shareScopeMap, pkgName, shareInfoRes, this.hooks.lifecycle.resolveShare);\n                if (gShared) {\n                    gShared.lib = factory;\n                    gShared.loaded = true;\n                }\n                return factory;\n            };\n            const loading = asyncLoadProcess();\n            this.setShared({\n                pkgName,\n                loaded: false,\n                shared: registeredShared,\n                from: host.options.name,\n                lib: null,\n                loading\n            });\n            return loading;\n        } else {\n            if (extraOptions == null ? void 0 : extraOptions.customShareInfo) {\n                return false;\n            }\n            const asyncLoadProcess = async ()=>{\n                const factory = await shareInfoRes.get();\n                shareInfoRes.lib = factory;\n                shareInfoRes.loaded = true;\n                addUseIn(shareInfoRes);\n                const gShared = share.getRegisteredShare(this.shareScopeMap, pkgName, shareInfoRes, this.hooks.lifecycle.resolveShare);\n                if (gShared) {\n                    gShared.lib = factory;\n                    gShared.loaded = true;\n                }\n                return factory;\n            };\n            const loading = asyncLoadProcess();\n            this.setShared({\n                pkgName,\n                loaded: false,\n                shared: shareInfoRes,\n                from: host.options.name,\n                lib: null,\n                loading\n            });\n            return loading;\n        }\n    }\n    /**\n   * This function initializes the sharing sequence (executed only once per share scope).\n   * It accepts one argument, the name of the share scope.\n   * If the share scope does not exist, it creates one.\n   */ // eslint-disable-next-line @typescript-eslint/member-ordering\n    initializeSharing(shareScopeName = share.DEFAULT_SCOPE, extraOptions) {\n        const { host } = this;\n        const from = extraOptions == null ? void 0 : extraOptions.from;\n        const strategy = extraOptions == null ? void 0 : extraOptions.strategy;\n        let initScope = extraOptions == null ? void 0 : extraOptions.initScope;\n        const promises = [];\n        if (from !== 'build') {\n            const { initTokens } = this;\n            if (!initScope) initScope = [];\n            let initToken = initTokens[shareScopeName];\n            if (!initToken) initToken = initTokens[shareScopeName] = {\n                from: this.host.name\n            };\n            if (initScope.indexOf(initToken) >= 0) return promises;\n            initScope.push(initToken);\n        }\n        const shareScope = this.shareScopeMap;\n        const hostName = host.options.name;\n        // Creates a new share scope if necessary\n        if (!shareScope[shareScopeName]) {\n            shareScope[shareScopeName] = {};\n        }\n        // Executes all initialization snippets from all accessible modules\n        const scope = shareScope[shareScopeName];\n        const register = (name, shared)=>{\n            var _activeVersion_shareConfig;\n            const { version, eager } = shared;\n            scope[name] = scope[name] || {};\n            const versions = scope[name];\n            const activeVersion = versions[version];\n            const activeVersionEager = Boolean(activeVersion && (activeVersion.eager || ((_activeVersion_shareConfig = activeVersion.shareConfig) == null ? void 0 : _activeVersion_shareConfig.eager)));\n            if (!activeVersion || activeVersion.strategy !== 'loaded-first' && !activeVersion.loaded && (Boolean(!eager) !== !activeVersionEager ? eager : hostName > activeVersion.from)) {\n                versions[version] = shared;\n            }\n        };\n        const initFn = (mod)=>mod && mod.init && mod.init(shareScope[shareScopeName], initScope);\n        const initRemoteModule = async (key)=>{\n            const { module } = await host.remoteHandler.getRemoteModuleAndOptions({\n                id: key\n            });\n            if (module.getEntry) {\n                let remoteEntryExports;\n                try {\n                    remoteEntryExports = await module.getEntry();\n                } catch (error) {\n                    remoteEntryExports = await host.remoteHandler.hooks.lifecycle.errorLoadRemote.emit({\n                        id: key,\n                        error,\n                        from: 'runtime',\n                        lifecycle: 'beforeLoadShare',\n                        origin: host\n                    });\n                }\n                if (!module.inited) {\n                    await initFn(remoteEntryExports);\n                    module.inited = true;\n                }\n            }\n        };\n        Object.keys(host.options.shared).forEach((shareName)=>{\n            const sharedArr = host.options.shared[shareName];\n            sharedArr.forEach((shared)=>{\n                if (shared.scope.includes(shareScopeName)) {\n                    register(shareName, shared);\n                }\n            });\n        });\n        // TODO: strategy==='version-first' need to be removed in the future\n        if (host.options.shareStrategy === 'version-first' || strategy === 'version-first') {\n            host.options.remotes.forEach((remote)=>{\n                if (remote.shareScope === shareScopeName) {\n                    promises.push(initRemoteModule(remote.name));\n                }\n            });\n        }\n        return promises;\n    }\n    // The lib function will only be available if the shared set by eager or runtime init is set or the shared is successfully loaded.\n    // 1. If the loaded shared already exists globally, then it will be reused\n    // 2. If lib exists in local shared, it will be used directly\n    // 3. If the local get returns something other than Promise, then it will be used directly\n    loadShareSync(pkgName, extraOptions) {\n        const { host } = this;\n        const shareInfo = share.getTargetSharedOptions({\n            pkgName,\n            extraOptions,\n            shareInfos: host.options.shared\n        });\n        if (shareInfo == null ? void 0 : shareInfo.scope) {\n            shareInfo.scope.forEach((shareScope)=>{\n                this.initializeSharing(shareScope, {\n                    strategy: shareInfo.strategy\n                });\n            });\n        }\n        const registeredShared = share.getRegisteredShare(this.shareScopeMap, pkgName, shareInfo, this.hooks.lifecycle.resolveShare);\n        const addUseIn = (shared)=>{\n            if (!shared.useIn) {\n                shared.useIn = [];\n            }\n            share.addUniqueItem(shared.useIn, host.options.name);\n        };\n        if (registeredShared) {\n            if (typeof registeredShared.lib === 'function') {\n                addUseIn(registeredShared);\n                if (!registeredShared.loaded) {\n                    registeredShared.loaded = true;\n                    if (registeredShared.from === host.options.name) {\n                        shareInfo.loaded = true;\n                    }\n                }\n                return registeredShared.lib;\n            }\n            if (typeof registeredShared.get === 'function') {\n                const module = registeredShared.get();\n                if (!(module instanceof Promise)) {\n                    addUseIn(registeredShared);\n                    this.setShared({\n                        pkgName,\n                        loaded: true,\n                        from: host.options.name,\n                        lib: module,\n                        shared: registeredShared\n                    });\n                    return module;\n                }\n            }\n        }\n        if (shareInfo.lib) {\n            if (!shareInfo.loaded) {\n                shareInfo.loaded = true;\n            }\n            return shareInfo.lib;\n        }\n        if (shareInfo.get) {\n            const module = shareInfo.get();\n            if (module instanceof Promise) {\n                throw new Error(`\n        The loadShareSync function was unable to load ${pkgName}. The ${pkgName} could not be found in ${host.options.name}.\n        Possible reasons for failure: \\n\n        1. The ${pkgName} share was registered with the 'get' attribute, but loadShare was not used beforehand.\\n\n        2. The ${pkgName} share was not registered with the 'lib' attribute.\\n\n      `);\n            }\n            shareInfo.lib = module;\n            this.setShared({\n                pkgName,\n                loaded: true,\n                from: host.options.name,\n                lib: shareInfo.lib,\n                shared: shareInfo\n            });\n            return shareInfo.lib;\n        }\n        throw new Error(`\n        The loadShareSync function was unable to load ${pkgName}. The ${pkgName} could not be found in ${host.options.name}.\n        Possible reasons for failure: \\n\n        1. The ${pkgName} share was registered with the 'get' attribute, but loadShare was not used beforehand.\\n\n        2. The ${pkgName} share was not registered with the 'lib' attribute.\\n\n      `);\n    }\n    initShareScopeMap(scopeName, shareScope, extraOptions = {}) {\n        const { host } = this;\n        this.shareScopeMap[scopeName] = shareScope;\n        this.hooks.lifecycle.initContainerShareScopeMap.emit({\n            shareScope,\n            options: host.options,\n            origin: host,\n            scopeName,\n            hostShareScopeMap: extraOptions.hostShareScopeMap\n        });\n    }\n    setShared({ pkgName, shared, from, lib, loading, loaded, get }) {\n        const { version, scope = 'default' } = shared, shareInfo = polyfills._object_without_properties_loose(shared, [\n            \"version\",\n            \"scope\"\n        ]);\n        const scopes = Array.isArray(scope) ? scope : [\n            scope\n        ];\n        scopes.forEach((sc)=>{\n            if (!this.shareScopeMap[sc]) {\n                this.shareScopeMap[sc] = {};\n            }\n            if (!this.shareScopeMap[sc][pkgName]) {\n                this.shareScopeMap[sc][pkgName] = {};\n            }\n            if (!this.shareScopeMap[sc][pkgName][version]) {\n                this.shareScopeMap[sc][pkgName][version] = polyfills._extends({\n                    version,\n                    scope: [\n                        'default'\n                    ]\n                }, shareInfo, {\n                    lib,\n                    loaded,\n                    loading\n                });\n                if (get) {\n                    this.shareScopeMap[sc][pkgName][version].get = get;\n                }\n                return;\n            }\n            const registeredShared = this.shareScopeMap[sc][pkgName][version];\n            if (loading && !registeredShared.loading) {\n                registeredShared.loading = loading;\n            }\n        });\n    }\n    _setGlobalShareScopeMap(hostOptions) {\n        const globalShareScopeMap = share.getGlobalShareScope();\n        const identifier = hostOptions.id || hostOptions.name;\n        if (identifier && !globalShareScopeMap[identifier]) {\n            globalShareScopeMap[identifier] = this.shareScopeMap;\n        }\n    }\n    constructor(host){\n        this.hooks = new PluginSystem({\n            afterResolve: new AsyncWaterfallHook('afterResolve'),\n            beforeLoadShare: new AsyncWaterfallHook('beforeLoadShare'),\n            // not used yet\n            loadShare: new AsyncHook(),\n            resolveShare: new SyncWaterfallHook('resolveShare'),\n            // maybe will change, temporarily for internal use only\n            initContainerShareScopeMap: new SyncWaterfallHook('initContainerShareScopeMap')\n        });\n        this.host = host;\n        this.shareScopeMap = {};\n        this.initTokens = {};\n        this._setGlobalShareScopeMap(host.options);\n    }\n}\n\nclass RemoteHandler {\n    formatAndRegisterRemote(globalOptions, userOptions) {\n        const userRemotes = userOptions.remotes || [];\n        return userRemotes.reduce((res, remote)=>{\n            this.registerRemote(remote, res, {\n                force: false\n            });\n            return res;\n        }, globalOptions.remotes);\n    }\n    setIdToRemoteMap(id, remoteMatchInfo) {\n        const { remote, expose } = remoteMatchInfo;\n        const { name, alias } = remote;\n        this.idToRemoteMap[id] = {\n            name: remote.name,\n            expose\n        };\n        if (alias && id.startsWith(name)) {\n            const idWithAlias = id.replace(name, alias);\n            this.idToRemoteMap[idWithAlias] = {\n                name: remote.name,\n                expose\n            };\n            return;\n        }\n        if (alias && id.startsWith(alias)) {\n            const idWithName = id.replace(alias, name);\n            this.idToRemoteMap[idWithName] = {\n                name: remote.name,\n                expose\n            };\n        }\n    }\n    // eslint-disable-next-line max-lines-per-function\n    // eslint-disable-next-line @typescript-eslint/member-ordering\n    async loadRemote(id, options) {\n        const { host } = this;\n        try {\n            const { loadFactory = true } = options || {\n                loadFactory: true\n            };\n            // 1. Validate the parameters of the retrieved module. There are two module request methods: pkgName + expose and alias + expose.\n            // 2. Request the snapshot information of the current host and globally store the obtained snapshot information. The retrieved module information is partially offline and partially online. The online module information will retrieve the modules used online.\n            // 3. Retrieve the detailed information of the current module from global (remoteEntry address, expose resource address)\n            // 4. After retrieving remoteEntry, call the init of the module, and then retrieve the exported content of the module through get\n            // id: pkgName(@federation/app1) + expose(button) = @federation/app1/button\n            // id: alias(app1) + expose(button) = app1/button\n            // id: alias(app1/utils) + expose(loadash/sort) = app1/utils/loadash/sort\n            const { module, moduleOptions, remoteMatchInfo } = await this.getRemoteModuleAndOptions({\n                id\n            });\n            const { pkgNameOrAlias, remote, expose, id: idRes, remoteSnapshot } = remoteMatchInfo;\n            const moduleOrFactory = await module.get(idRes, expose, options, remoteSnapshot);\n            const moduleWrapper = await this.hooks.lifecycle.onLoad.emit({\n                id: idRes,\n                pkgNameOrAlias,\n                expose,\n                exposeModule: loadFactory ? moduleOrFactory : undefined,\n                exposeModuleFactory: loadFactory ? undefined : moduleOrFactory,\n                remote,\n                options: moduleOptions,\n                moduleInstance: module,\n                origin: host\n            });\n            this.setIdToRemoteMap(id, remoteMatchInfo);\n            if (typeof moduleWrapper === 'function') {\n                return moduleWrapper;\n            }\n            return moduleOrFactory;\n        } catch (error) {\n            const { from = 'runtime' } = options || {\n                from: 'runtime'\n            };\n            const failOver = await this.hooks.lifecycle.errorLoadRemote.emit({\n                id,\n                error,\n                from,\n                lifecycle: 'onLoad',\n                origin: host\n            });\n            if (!failOver) {\n                throw error;\n            }\n            return failOver;\n        }\n    }\n    // eslint-disable-next-line @typescript-eslint/member-ordering\n    async preloadRemote(preloadOptions) {\n        const { host } = this;\n        await this.hooks.lifecycle.beforePreloadRemote.emit({\n            preloadOps: preloadOptions,\n            options: host.options,\n            origin: host\n        });\n        const preloadOps = formatPreloadArgs(host.options.remotes, preloadOptions);\n        await Promise.all(preloadOps.map(async (ops)=>{\n            const { remote } = ops;\n            const remoteInfo = getRemoteInfo(remote);\n            const { globalSnapshot, remoteSnapshot } = await host.snapshotHandler.loadRemoteSnapshotInfo(remote);\n            const assets = await this.hooks.lifecycle.generatePreloadAssets.emit({\n                origin: host,\n                preloadOptions: ops,\n                remote,\n                remoteInfo,\n                globalSnapshot,\n                remoteSnapshot\n            });\n            if (!assets) {\n                return;\n            }\n            preloadAssets(remoteInfo, host, assets);\n        }));\n    }\n    registerRemotes(remotes, options) {\n        const { host } = this;\n        remotes.forEach((remote)=>{\n            this.registerRemote(remote, host.options.remotes, {\n                force: options == null ? void 0 : options.force\n            });\n        });\n    }\n    async getRemoteModuleAndOptions(options) {\n        const { host } = this;\n        const { id } = options;\n        let loadRemoteArgs;\n        try {\n            loadRemoteArgs = await this.hooks.lifecycle.beforeRequest.emit({\n                id,\n                options: host.options,\n                origin: host\n            });\n        } catch (error) {\n            loadRemoteArgs = await this.hooks.lifecycle.errorLoadRemote.emit({\n                id,\n                options: host.options,\n                origin: host,\n                from: 'runtime',\n                error,\n                lifecycle: 'beforeRequest'\n            });\n            if (!loadRemoteArgs) {\n                throw error;\n            }\n        }\n        const { id: idRes } = loadRemoteArgs;\n        const remoteSplitInfo = matchRemoteWithNameAndExpose(host.options.remotes, idRes);\n        share.assert(remoteSplitInfo, `\n        Unable to locate ${idRes} in ${host.options.name}. Potential reasons for failure include:\\n\n        1. ${idRes} was not included in the 'remotes' parameter of ${host.options.name || 'the host'}.\\n\n        2. ${idRes} could not be found in the 'remotes' of ${host.options.name} with either 'name' or 'alias' attributes.\n        3. ${idRes} is not online, injected, or loaded.\n        4. ${idRes}  cannot be accessed on the expected.\n        5. The 'beforeRequest' hook was provided but did not return the correct 'remoteInfo' when attempting to load ${idRes}.\n      `);\n        const { remote: rawRemote } = remoteSplitInfo;\n        const remoteInfo = getRemoteInfo(rawRemote);\n        const matchInfo = await host.sharedHandler.hooks.lifecycle.afterResolve.emit(polyfills._extends({\n            id: idRes\n        }, remoteSplitInfo, {\n            options: host.options,\n            origin: host,\n            remoteInfo\n        }));\n        const { remote, expose } = matchInfo;\n        share.assert(remote && expose, `The 'beforeRequest' hook was executed, but it failed to return the correct 'remote' and 'expose' values while loading ${idRes}.`);\n        let module = host.moduleCache.get(remote.name);\n        const moduleOptions = {\n            host: host,\n            remoteInfo\n        };\n        if (!module) {\n            module = new Module(moduleOptions);\n            host.moduleCache.set(remote.name, module);\n        }\n        return {\n            module,\n            moduleOptions,\n            remoteMatchInfo: matchInfo\n        };\n    }\n    registerRemote(remote, targetRemotes, options) {\n        const { host } = this;\n        const normalizeRemote = ()=>{\n            if (remote.alias) {\n                // Validate if alias equals the prefix of remote.name and remote.alias, if so, throw an error\n                // As multi-level path references cannot guarantee unique names, alias being a prefix of remote.name is not supported\n                const findEqual = targetRemotes.find((item)=>{\n                    var _item_alias;\n                    return remote.alias && (item.name.startsWith(remote.alias) || ((_item_alias = item.alias) == null ? void 0 : _item_alias.startsWith(remote.alias)));\n                });\n                share.assert(!findEqual, `The alias ${remote.alias} of remote ${remote.name} is not allowed to be the prefix of ${findEqual && findEqual.name} name or alias`);\n            }\n            // Set the remote entry to a complete path\n            if ('entry' in remote) {\n                if (sdk.isBrowserEnv() && !remote.entry.startsWith('http')) {\n                    remote.entry = new URL(remote.entry, window.location.origin).href;\n                }\n            }\n            if (!remote.shareScope) {\n                remote.shareScope = share.DEFAULT_SCOPE;\n            }\n            if (!remote.type) {\n                remote.type = share.DEFAULT_REMOTE_TYPE;\n            }\n        };\n        this.hooks.lifecycle.beforeRegisterRemote.emit({\n            remote,\n            origin: host\n        });\n        const registeredRemote = targetRemotes.find((item)=>item.name === remote.name);\n        if (!registeredRemote) {\n            normalizeRemote();\n            targetRemotes.push(remote);\n            this.hooks.lifecycle.registerRemote.emit({\n                remote,\n                origin: host\n            });\n        } else {\n            const messages = [\n                `The remote \"${remote.name}\" is already registered.`,\n                (options == null ? void 0 : options.force) ? 'Hope you have known that OVERRIDE it may have some unexpected errors' : 'If you want to merge the remote, you can set \"force: true\".'\n            ];\n            if (options == null ? void 0 : options.force) {\n                // remove registered remote\n                this.removeRemote(registeredRemote);\n                normalizeRemote();\n                targetRemotes.push(remote);\n                this.hooks.lifecycle.registerRemote.emit({\n                    remote,\n                    origin: host\n                });\n            }\n            sdk.warn(messages.join(' '));\n        }\n    }\n    removeRemote(remote) {\n        try {\n            const { host } = this;\n            const { name } = remote;\n            const remoteIndex = host.options.remotes.findIndex((item)=>item.name === name);\n            if (remoteIndex !== -1) {\n                host.options.remotes.splice(remoteIndex, 1);\n            }\n            const loadedModule = host.moduleCache.get(remote.name);\n            if (loadedModule) {\n                const remoteInfo = loadedModule.remoteInfo;\n                const key = remoteInfo.entryGlobalName;\n                if (globalThis[key]) {\n                    var _Object_getOwnPropertyDescriptor;\n                    if ((_Object_getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor(globalThis, key)) == null ? void 0 : _Object_getOwnPropertyDescriptor.configurable) {\n                        delete globalThis[key];\n                    } else {\n                        // @ts-ignore\n                        globalThis[key] = undefined;\n                    }\n                }\n                const remoteEntryUniqueKey = getRemoteEntryUniqueKey(loadedModule.remoteInfo);\n                if (share.globalLoading[remoteEntryUniqueKey]) {\n                    delete share.globalLoading[remoteEntryUniqueKey];\n                }\n                host.snapshotHandler.manifestCache.delete(remoteInfo.entry);\n                // delete unloaded shared and instance\n                let remoteInsId = remoteInfo.buildVersion ? sdk.composeKeyWithSeparator(remoteInfo.name, remoteInfo.buildVersion) : remoteInfo.name;\n                const remoteInsIndex = globalThis.__FEDERATION__.__INSTANCES__.findIndex((ins)=>{\n                    if (remoteInfo.buildVersion) {\n                        return ins.options.id === remoteInsId;\n                    } else {\n                        return ins.name === remoteInsId;\n                    }\n                });\n                if (remoteInsIndex !== -1) {\n                    const remoteIns = globalThis.__FEDERATION__.__INSTANCES__[remoteInsIndex];\n                    remoteInsId = remoteIns.options.id || remoteInsId;\n                    const globalShareScopeMap = share.getGlobalShareScope();\n                    let isAllSharedNotUsed = true;\n                    const needDeleteKeys = [];\n                    Object.keys(globalShareScopeMap).forEach((instId)=>{\n                        const shareScopeMap = globalShareScopeMap[instId];\n                        shareScopeMap && Object.keys(shareScopeMap).forEach((shareScope)=>{\n                            const shareScopeVal = shareScopeMap[shareScope];\n                            shareScopeVal && Object.keys(shareScopeVal).forEach((shareName)=>{\n                                const sharedPkgs = shareScopeVal[shareName];\n                                sharedPkgs && Object.keys(sharedPkgs).forEach((shareVersion)=>{\n                                    const shared = sharedPkgs[shareVersion];\n                                    if (shared && typeof shared === 'object' && shared.from === remoteInfo.name) {\n                                        if (shared.loaded || shared.loading) {\n                                            shared.useIn = shared.useIn.filter((usedHostName)=>usedHostName !== remoteInfo.name);\n                                            if (shared.useIn.length) {\n                                                isAllSharedNotUsed = false;\n                                            } else {\n                                                needDeleteKeys.push([\n                                                    instId,\n                                                    shareScope,\n                                                    shareName,\n                                                    shareVersion\n                                                ]);\n                                            }\n                                        } else {\n                                            needDeleteKeys.push([\n                                                instId,\n                                                shareScope,\n                                                shareName,\n                                                shareVersion\n                                            ]);\n                                        }\n                                    }\n                                });\n                            });\n                        });\n                    });\n                    if (isAllSharedNotUsed) {\n                        remoteIns.shareScopeMap = {};\n                        delete globalShareScopeMap[remoteInsId];\n                    }\n                    needDeleteKeys.forEach(([insId, shareScope, shareName, shareVersion])=>{\n                        var _globalShareScopeMap_insId_shareScope_shareName, _globalShareScopeMap_insId_shareScope, _globalShareScopeMap_insId;\n                        (_globalShareScopeMap_insId = globalShareScopeMap[insId]) == null ? true : (_globalShareScopeMap_insId_shareScope = _globalShareScopeMap_insId[shareScope]) == null ? true : (_globalShareScopeMap_insId_shareScope_shareName = _globalShareScopeMap_insId_shareScope[shareName]) == null ? true : delete _globalShareScopeMap_insId_shareScope_shareName[shareVersion];\n                    });\n                    globalThis.__FEDERATION__.__INSTANCES__.splice(remoteInsIndex, 1);\n                }\n                const { hostGlobalSnapshot } = getGlobalRemoteInfo(remote, host);\n                if (hostGlobalSnapshot) {\n                    const remoteKey = hostGlobalSnapshot && 'remotesInfo' in hostGlobalSnapshot && hostGlobalSnapshot.remotesInfo && share.getInfoWithoutType(hostGlobalSnapshot.remotesInfo, remote.name).key;\n                    if (remoteKey) {\n                        delete hostGlobalSnapshot.remotesInfo[remoteKey];\n                        if (//eslint-disable-next-line no-extra-boolean-cast\n                        Boolean(share.Global.__FEDERATION__.__MANIFEST_LOADING__[remoteKey])) {\n                            delete share.Global.__FEDERATION__.__MANIFEST_LOADING__[remoteKey];\n                        }\n                    }\n                }\n                host.moduleCache.delete(remote.name);\n            }\n        } catch (err) {\n            share.logger.log('removeRemote fail: ', err);\n        }\n    }\n    constructor(host){\n        this.hooks = new PluginSystem({\n            beforeRegisterRemote: new SyncWaterfallHook('beforeRegisterRemote'),\n            registerRemote: new SyncWaterfallHook('registerRemote'),\n            beforeRequest: new AsyncWaterfallHook('beforeRequest'),\n            onLoad: new AsyncHook('onLoad'),\n            handlePreloadModule: new SyncHook('handlePreloadModule'),\n            errorLoadRemote: new AsyncHook('errorLoadRemote'),\n            beforePreloadRemote: new AsyncHook('beforePreloadRemote'),\n            generatePreloadAssets: new AsyncHook('generatePreloadAssets'),\n            // not used yet\n            afterPreloadRemote: new AsyncHook(),\n            loadEntry: new AsyncHook()\n        });\n        this.host = host;\n        this.idToRemoteMap = {};\n    }\n}\n\nclass FederationHost {\n    initOptions(userOptions) {\n        this.registerPlugins(userOptions.plugins);\n        const options = this.formatOptions(this.options, userOptions);\n        this.options = options;\n        return options;\n    }\n    async loadShare(pkgName, extraOptions) {\n        return this.sharedHandler.loadShare(pkgName, extraOptions);\n    }\n    // The lib function will only be available if the shared set by eager or runtime init is set or the shared is successfully loaded.\n    // 1. If the loaded shared already exists globally, then it will be reused\n    // 2. If lib exists in local shared, it will be used directly\n    // 3. If the local get returns something other than Promise, then it will be used directly\n    loadShareSync(pkgName, extraOptions) {\n        return this.sharedHandler.loadShareSync(pkgName, extraOptions);\n    }\n    initializeSharing(shareScopeName = share.DEFAULT_SCOPE, extraOptions) {\n        return this.sharedHandler.initializeSharing(shareScopeName, extraOptions);\n    }\n    initRawContainer(name, url, container) {\n        const remoteInfo = getRemoteInfo({\n            name,\n            entry: url\n        });\n        const module = new Module({\n            host: this,\n            remoteInfo\n        });\n        module.remoteEntryExports = container;\n        this.moduleCache.set(name, module);\n        return module;\n    }\n    // eslint-disable-next-line max-lines-per-function\n    // eslint-disable-next-line @typescript-eslint/member-ordering\n    async loadRemote(id, options) {\n        return this.remoteHandler.loadRemote(id, options);\n    }\n    // eslint-disable-next-line @typescript-eslint/member-ordering\n    async preloadRemote(preloadOptions) {\n        return this.remoteHandler.preloadRemote(preloadOptions);\n    }\n    initShareScopeMap(scopeName, shareScope, extraOptions = {}) {\n        this.sharedHandler.initShareScopeMap(scopeName, shareScope, extraOptions);\n    }\n    formatOptions(globalOptions, userOptions) {\n        const { shared } = share.formatShareConfigs(globalOptions, userOptions);\n        const { userOptions: userOptionsRes, options: globalOptionsRes } = this.hooks.lifecycle.beforeInit.emit({\n            origin: this,\n            userOptions,\n            options: globalOptions,\n            shareInfo: shared\n        });\n        const remotes = this.remoteHandler.formatAndRegisterRemote(globalOptionsRes, userOptionsRes);\n        const { shared: handledShared } = this.sharedHandler.registerShared(globalOptionsRes, userOptionsRes);\n        const plugins = [\n            ...globalOptionsRes.plugins\n        ];\n        if (userOptionsRes.plugins) {\n            userOptionsRes.plugins.forEach((plugin)=>{\n                if (!plugins.includes(plugin)) {\n                    plugins.push(plugin);\n                }\n            });\n        }\n        const optionsRes = polyfills._extends({}, globalOptions, userOptions, {\n            plugins,\n            remotes,\n            shared: handledShared\n        });\n        this.hooks.lifecycle.init.emit({\n            origin: this,\n            options: optionsRes\n        });\n        return optionsRes;\n    }\n    registerPlugins(plugins) {\n        const pluginRes = registerPlugins$1(plugins, [\n            this.hooks,\n            this.remoteHandler.hooks,\n            this.sharedHandler.hooks,\n            this.snapshotHandler.hooks,\n            this.loaderHook\n        ]);\n        // Merge plugin\n        this.options.plugins = this.options.plugins.reduce((res, plugin)=>{\n            if (!plugin) return res;\n            if (res && !res.find((item)=>item.name === plugin.name)) {\n                res.push(plugin);\n            }\n            return res;\n        }, pluginRes || []);\n    }\n    registerRemotes(remotes, options) {\n        return this.remoteHandler.registerRemotes(remotes, options);\n    }\n    constructor(userOptions){\n        this.hooks = new PluginSystem({\n            beforeInit: new SyncWaterfallHook('beforeInit'),\n            init: new SyncHook(),\n            // maybe will change, temporarily for internal use only\n            beforeInitContainer: new AsyncWaterfallHook('beforeInitContainer'),\n            // maybe will change, temporarily for internal use only\n            initContainer: new AsyncWaterfallHook('initContainer')\n        });\n        this.version = \"0.6.15\";\n        this.moduleCache = new Map();\n        this.loaderHook = new PluginSystem({\n            // FIXME: may not be suitable , not open to the public yet\n            getModuleInfo: new SyncHook(),\n            createScript: new SyncHook(),\n            createLink: new SyncHook(),\n            // only work for manifest , so not open to the public yet\n            fetch: new AsyncHook(),\n            getModuleFactory: new AsyncHook()\n        });\n        // TODO: Validate the details of the options\n        // Initialize options with default values\n        const defaultOptions = {\n            id: share.getBuilderId(),\n            name: userOptions.name,\n            plugins: [\n                snapshotPlugin(),\n                generatePreloadAssetsPlugin()\n            ],\n            remotes: [],\n            shared: {},\n            inBrowser: sdk.isBrowserEnv()\n        };\n        this.name = userOptions.name;\n        this.options = defaultOptions;\n        this.snapshotHandler = new SnapshotHandler(this);\n        this.sharedHandler = new SharedHandler(this);\n        this.remoteHandler = new RemoteHandler(this);\n        this.shareScopeMap = this.sharedHandler.shareScopeMap;\n        this.registerPlugins([\n            ...defaultOptions.plugins,\n            ...userOptions.plugins || []\n        ]);\n        this.options = this.formatOptions(defaultOptions, userOptions);\n    }\n}\n\nlet FederationInstance = null;\nfunction init(options) {\n    // Retrieve the same instance with the same name\n    const instance = share.getGlobalFederationInstance(options.name, options.version);\n    if (!instance) {\n        // Retrieve debug constructor\n        const FederationConstructor = share.getGlobalFederationConstructor() || FederationHost;\n        FederationInstance = new FederationConstructor(options);\n        share.setGlobalFederationInstance(FederationInstance);\n        return FederationInstance;\n    } else {\n        // Merge options\n        instance.initOptions(options);\n        if (!FederationInstance) {\n            FederationInstance = instance;\n        }\n        return instance;\n    }\n}\nfunction loadRemote(...args) {\n    share.assert(FederationInstance, 'Please call init first');\n    const loadRemote1 = FederationInstance.loadRemote;\n    // eslint-disable-next-line prefer-spread\n    return loadRemote1.apply(FederationInstance, args);\n}\nfunction loadShare(...args) {\n    share.assert(FederationInstance, 'Please call init first');\n    // eslint-disable-next-line prefer-spread\n    const loadShare1 = FederationInstance.loadShare;\n    return loadShare1.apply(FederationInstance, args);\n}\nfunction loadShareSync(...args) {\n    share.assert(FederationInstance, 'Please call init first');\n    const loadShareSync1 = FederationInstance.loadShareSync;\n    // eslint-disable-next-line prefer-spread\n    return loadShareSync1.apply(FederationInstance, args);\n}\nfunction preloadRemote(...args) {\n    share.assert(FederationInstance, 'Please call init first');\n    // eslint-disable-next-line prefer-spread\n    return FederationInstance.preloadRemote.apply(FederationInstance, args);\n}\nfunction registerRemotes(...args) {\n    share.assert(FederationInstance, 'Please call init first');\n    // eslint-disable-next-line prefer-spread\n    return FederationInstance.registerRemotes.apply(FederationInstance, args);\n}\nfunction registerPlugins(...args) {\n    share.assert(FederationInstance, 'Please call init first');\n    // eslint-disable-next-line prefer-spread\n    return FederationInstance.registerPlugins.apply(FederationInstance, args);\n}\nfunction getInstance() {\n    return FederationInstance;\n}\n// Inject for debug\nshare.setGlobalFederationConstructor(FederationHost);\n\nObject.defineProperty(exports, \"loadScript\", ({\n  enumerable: true,\n  get: function () { return sdk.loadScript; }\n}));\nObject.defineProperty(exports, \"loadScriptNode\", ({\n  enumerable: true,\n  get: function () { return sdk.loadScriptNode; }\n}));\nexports.registerGlobalPlugins = share.registerGlobalPlugins;\nexports.FederationHost = FederationHost;\nexports.Module = Module;\nexports.getInstance = getInstance;\nexports.getRemoteEntry = getRemoteEntry;\nexports.getRemoteInfo = getRemoteInfo;\nexports.init = init;\nexports.loadRemote = loadRemote;\nexports.loadShare = loadShare;\nexports.loadShareSync = loadShareSync;\nexports.preloadRemote = preloadRemote;\nexports.registerPlugins = registerPlugins;\nexports.registerRemotes = registerRemotes;\n\n\n//# sourceURL=webpack://playground/../../node_modules/.pnpm/@module-federation+runtime@0.6.15/node_modules/@module-federation/runtime/dist/index.cjs.js?");

/***/ }),

/***/ "../../node_modules/.pnpm/@module-federation+runtime@0.6.15/node_modules/@module-federation/runtime/dist/polyfills.cjs.js":
/*!********************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@module-federation+runtime@0.6.15/node_modules/@module-federation/runtime/dist/polyfills.cjs.js ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nfunction _extends() {\n    _extends = Object.assign || function assign(target) {\n        for(var i = 1; i < arguments.length; i++){\n            var source = arguments[i];\n            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];\n        }\n        return target;\n    };\n    return _extends.apply(this, arguments);\n}\n\nfunction _object_without_properties_loose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\n\nexports._extends = _extends;\nexports._object_without_properties_loose = _object_without_properties_loose;\n\n\n//# sourceURL=webpack://playground/../../node_modules/.pnpm/@module-federation+runtime@0.6.15/node_modules/@module-federation/runtime/dist/polyfills.cjs.js?");

/***/ }),

/***/ "../../node_modules/.pnpm/@module-federation+runtime@0.6.15/node_modules/@module-federation/runtime/dist/share.cjs.js":
/*!****************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@module-federation+runtime@0.6.15/node_modules/@module-federation/runtime/dist/share.cjs.js ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar polyfills = __webpack_require__(/*! ./polyfills.cjs.js */ \"../../node_modules/.pnpm/@module-federation+runtime@0.6.15/node_modules/@module-federation/runtime/dist/polyfills.cjs.js\");\nvar sdk = __webpack_require__(/*! @module-federation/sdk */ \"../../node_modules/.pnpm/@module-federation+sdk@0.6.15/node_modules/@module-federation/sdk/dist/index.cjs.js\");\n\nfunction getBuilderId() {\n    //@ts-ignore\n    return  true ? \"polaris_app:1.0.0\" : 0;\n}\n\nconst LOG_CATEGORY = '[ Federation Runtime ]';\n// FIXME: pre-bundle ?\nconst logger = sdk.createLogger(LOG_CATEGORY);\n// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types\nfunction assert(condition, msg) {\n    if (!condition) {\n        error(msg);\n    }\n}\nfunction error(msg) {\n    if (msg instanceof Error) {\n        msg.message = `${LOG_CATEGORY}: ${msg.message}`;\n        throw msg;\n    }\n    throw new Error(`${LOG_CATEGORY}: ${msg}`);\n}\nfunction warn(msg) {\n    if (msg instanceof Error) {\n        msg.message = `${LOG_CATEGORY}: ${msg.message}`;\n        logger.warn(msg);\n    } else {\n        logger.warn(msg);\n    }\n}\n\nfunction addUniqueItem(arr, item) {\n    if (arr.findIndex((name)=>name === item) === -1) {\n        arr.push(item);\n    }\n    return arr;\n}\nfunction getFMId(remoteInfo) {\n    if ('version' in remoteInfo && remoteInfo.version) {\n        return `${remoteInfo.name}:${remoteInfo.version}`;\n    } else if ('entry' in remoteInfo && remoteInfo.entry) {\n        return `${remoteInfo.name}:${remoteInfo.entry}`;\n    } else {\n        return `${remoteInfo.name}`;\n    }\n}\nfunction isRemoteInfoWithEntry(remote) {\n    return typeof remote.entry !== 'undefined';\n}\nfunction isPureRemoteEntry(remote) {\n    return !remote.entry.includes('.json') && remote.entry.includes('.js');\n}\nfunction isObject(val) {\n    return val && typeof val === 'object';\n}\nconst objectToString = Object.prototype.toString;\n// eslint-disable-next-line @typescript-eslint/ban-types\nfunction isPlainObject(val) {\n    return objectToString.call(val) === '[object Object]';\n}\nfunction arrayOptions(options) {\n    return Array.isArray(options) ? options : [\n        options\n    ];\n}\nfunction getRemoteEntryInfoFromSnapshot(snapshot) {\n    const defaultRemoteEntryInfo = {\n        url: '',\n        type: 'global',\n        globalName: ''\n    };\n    if (sdk.isBrowserEnv()) {\n        return 'remoteEntry' in snapshot ? {\n            url: snapshot.remoteEntry,\n            type: snapshot.remoteEntryType,\n            globalName: snapshot.globalName\n        } : defaultRemoteEntryInfo;\n    }\n    if ('ssrRemoteEntry' in snapshot) {\n        return {\n            url: snapshot.ssrRemoteEntry || defaultRemoteEntryInfo.url,\n            type: snapshot.ssrRemoteEntryType || defaultRemoteEntryInfo.type,\n            globalName: snapshot.globalName\n        };\n    }\n    return defaultRemoteEntryInfo;\n}\n\nconst nativeGlobal = (()=>{\n    try {\n        return new Function('return this')();\n    } catch (e) {\n        return globalThis;\n    }\n})();\nconst Global = nativeGlobal;\nfunction definePropertyGlobalVal(target, key, val) {\n    Object.defineProperty(target, key, {\n        value: val,\n        configurable: false,\n        writable: true\n    });\n}\nfunction includeOwnProperty(target, key) {\n    return Object.hasOwnProperty.call(target, key);\n}\n// This section is to prevent encapsulation by certain microfrontend frameworks. Due to reuse policies, sandbox escapes.\n// The sandbox in the microfrontend does not replicate the value of 'configurable'.\n// If there is no loading content on the global object, this section defines the loading object.\nif (!includeOwnProperty(globalThis, '__GLOBAL_LOADING_REMOTE_ENTRY__')) {\n    definePropertyGlobalVal(globalThis, '__GLOBAL_LOADING_REMOTE_ENTRY__', {});\n}\nconst globalLoading = globalThis.__GLOBAL_LOADING_REMOTE_ENTRY__;\nfunction setGlobalDefaultVal(target) {\n    var _target___FEDERATION__, _target___FEDERATION__1, _target___FEDERATION__2, _target___FEDERATION__3, _target___FEDERATION__4, _target___FEDERATION__5;\n    if (includeOwnProperty(target, '__VMOK__') && !includeOwnProperty(target, '__FEDERATION__')) {\n        definePropertyGlobalVal(target, '__FEDERATION__', target.__VMOK__);\n    }\n    if (!includeOwnProperty(target, '__FEDERATION__')) {\n        definePropertyGlobalVal(target, '__FEDERATION__', {\n            __GLOBAL_PLUGIN__: [],\n            __INSTANCES__: [],\n            moduleInfo: {},\n            __SHARE__: {},\n            __MANIFEST_LOADING__: {},\n            __PRELOADED_MAP__: new Map()\n        });\n        definePropertyGlobalVal(target, '__VMOK__', target.__FEDERATION__);\n    }\n    var ___GLOBAL_PLUGIN__;\n    (___GLOBAL_PLUGIN__ = (_target___FEDERATION__ = target.__FEDERATION__).__GLOBAL_PLUGIN__) != null ? ___GLOBAL_PLUGIN__ : _target___FEDERATION__.__GLOBAL_PLUGIN__ = [];\n    var ___INSTANCES__;\n    (___INSTANCES__ = (_target___FEDERATION__1 = target.__FEDERATION__).__INSTANCES__) != null ? ___INSTANCES__ : _target___FEDERATION__1.__INSTANCES__ = [];\n    var _moduleInfo;\n    (_moduleInfo = (_target___FEDERATION__2 = target.__FEDERATION__).moduleInfo) != null ? _moduleInfo : _target___FEDERATION__2.moduleInfo = {};\n    var ___SHARE__;\n    (___SHARE__ = (_target___FEDERATION__3 = target.__FEDERATION__).__SHARE__) != null ? ___SHARE__ : _target___FEDERATION__3.__SHARE__ = {};\n    var ___MANIFEST_LOADING__;\n    (___MANIFEST_LOADING__ = (_target___FEDERATION__4 = target.__FEDERATION__).__MANIFEST_LOADING__) != null ? ___MANIFEST_LOADING__ : _target___FEDERATION__4.__MANIFEST_LOADING__ = {};\n    var ___PRELOADED_MAP__;\n    (___PRELOADED_MAP__ = (_target___FEDERATION__5 = target.__FEDERATION__).__PRELOADED_MAP__) != null ? ___PRELOADED_MAP__ : _target___FEDERATION__5.__PRELOADED_MAP__ = new Map();\n}\nsetGlobalDefaultVal(globalThis);\nsetGlobalDefaultVal(nativeGlobal);\nfunction resetFederationGlobalInfo() {\n    globalThis.__FEDERATION__.__GLOBAL_PLUGIN__ = [];\n    globalThis.__FEDERATION__.__INSTANCES__ = [];\n    globalThis.__FEDERATION__.moduleInfo = {};\n    globalThis.__FEDERATION__.__SHARE__ = {};\n    globalThis.__FEDERATION__.__MANIFEST_LOADING__ = {};\n}\nfunction getGlobalFederationInstance(name, version) {\n    const buildId = getBuilderId();\n    return globalThis.__FEDERATION__.__INSTANCES__.find((GMInstance)=>{\n        if (buildId && GMInstance.options.id === getBuilderId()) {\n            return true;\n        }\n        if (GMInstance.options.name === name && !GMInstance.options.version && !version) {\n            return true;\n        }\n        if (GMInstance.options.name === name && version && GMInstance.options.version === version) {\n            return true;\n        }\n        return false;\n    });\n}\nfunction setGlobalFederationInstance(FederationInstance) {\n    globalThis.__FEDERATION__.__INSTANCES__.push(FederationInstance);\n}\nfunction getGlobalFederationConstructor() {\n    return globalThis.__FEDERATION__.__DEBUG_CONSTRUCTOR__;\n}\nfunction setGlobalFederationConstructor(FederationConstructor, isDebug = sdk.isDebugMode()) {\n    if (isDebug) {\n        globalThis.__FEDERATION__.__DEBUG_CONSTRUCTOR__ = FederationConstructor;\n        globalThis.__FEDERATION__.__DEBUG_CONSTRUCTOR_VERSION__ = \"0.6.15\";\n    }\n}\n// eslint-disable-next-line @typescript-eslint/ban-types\nfunction getInfoWithoutType(target, key) {\n    if (typeof key === 'string') {\n        const keyRes = target[key];\n        if (keyRes) {\n            return {\n                value: target[key],\n                key: key\n            };\n        } else {\n            const targetKeys = Object.keys(target);\n            for (const targetKey of targetKeys){\n                const [targetTypeOrName, _] = targetKey.split(':');\n                const nKey = `${targetTypeOrName}:${key}`;\n                const typeWithKeyRes = target[nKey];\n                if (typeWithKeyRes) {\n                    return {\n                        value: typeWithKeyRes,\n                        key: nKey\n                    };\n                }\n            }\n            return {\n                value: undefined,\n                key: key\n            };\n        }\n    } else {\n        throw new Error('key must be string');\n    }\n}\nconst getGlobalSnapshot = ()=>nativeGlobal.__FEDERATION__.moduleInfo;\nconst getTargetSnapshotInfoByModuleInfo = (moduleInfo, snapshot)=>{\n    // Check if the remote is included in the hostSnapshot\n    const moduleKey = getFMId(moduleInfo);\n    const getModuleInfo = getInfoWithoutType(snapshot, moduleKey).value;\n    // The remoteSnapshot might not include a version\n    if (getModuleInfo && !getModuleInfo.version && 'version' in moduleInfo && moduleInfo['version']) {\n        getModuleInfo.version = moduleInfo['version'];\n    }\n    if (getModuleInfo) {\n        return getModuleInfo;\n    }\n    // If the remote is not included in the hostSnapshot, deploy a micro app snapshot\n    if ('version' in moduleInfo && moduleInfo['version']) {\n        const { version } = moduleInfo, resModuleInfo = polyfills._object_without_properties_loose(moduleInfo, [\n            \"version\"\n        ]);\n        const moduleKeyWithoutVersion = getFMId(resModuleInfo);\n        const getModuleInfoWithoutVersion = getInfoWithoutType(nativeGlobal.__FEDERATION__.moduleInfo, moduleKeyWithoutVersion).value;\n        if ((getModuleInfoWithoutVersion == null ? void 0 : getModuleInfoWithoutVersion.version) === version) {\n            return getModuleInfoWithoutVersion;\n        }\n    }\n    return;\n};\nconst getGlobalSnapshotInfoByModuleInfo = (moduleInfo)=>getTargetSnapshotInfoByModuleInfo(moduleInfo, nativeGlobal.__FEDERATION__.moduleInfo);\nconst setGlobalSnapshotInfoByModuleInfo = (remoteInfo, moduleDetailInfo)=>{\n    const moduleKey = getFMId(remoteInfo);\n    nativeGlobal.__FEDERATION__.moduleInfo[moduleKey] = moduleDetailInfo;\n    return nativeGlobal.__FEDERATION__.moduleInfo;\n};\nconst addGlobalSnapshot = (moduleInfos)=>{\n    nativeGlobal.__FEDERATION__.moduleInfo = polyfills._extends({}, nativeGlobal.__FEDERATION__.moduleInfo, moduleInfos);\n    return ()=>{\n        const keys = Object.keys(moduleInfos);\n        for (const key of keys){\n            delete nativeGlobal.__FEDERATION__.moduleInfo[key];\n        }\n    };\n};\nconst getRemoteEntryExports = (name, globalName)=>{\n    const remoteEntryKey = globalName || `__FEDERATION_${name}:custom__`;\n    const entryExports = globalThis[remoteEntryKey];\n    return {\n        remoteEntryKey,\n        entryExports\n    };\n};\n// This function is used to register global plugins.\n// It iterates over the provided plugins and checks if they are already registered.\n// If a plugin is not registered, it is added to the global plugins.\n// If a plugin is already registered, a warning message is logged.\nconst registerGlobalPlugins = (plugins)=>{\n    const { __GLOBAL_PLUGIN__ } = nativeGlobal.__FEDERATION__;\n    plugins.forEach((plugin)=>{\n        if (__GLOBAL_PLUGIN__.findIndex((p)=>p.name === plugin.name) === -1) {\n            __GLOBAL_PLUGIN__.push(plugin);\n        } else {\n            warn(`The plugin ${plugin.name} has been registered.`);\n        }\n    });\n};\nconst getGlobalHostPlugins = ()=>nativeGlobal.__FEDERATION__.__GLOBAL_PLUGIN__;\nconst getPreloaded = (id)=>globalThis.__FEDERATION__.__PRELOADED_MAP__.get(id);\nconst setPreloaded = (id)=>globalThis.__FEDERATION__.__PRELOADED_MAP__.set(id, true);\n\nconst DEFAULT_SCOPE = 'default';\nconst DEFAULT_REMOTE_TYPE = 'global';\n\n// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts\n// those constants are based on https://www.rubydoc.info/gems/semantic_range/3.0.0/SemanticRange#BUILDIDENTIFIER-constant\n// Copyright (c)\n// vite-plugin-federation is licensed under Mulan PSL v2.\n// You can use this software according to the terms and conditions of the Mulan PSL v2.\n// You may obtain a copy of Mulan PSL v2 at:\n//      http://license.coscl.org.cn/MulanPSL2\n// THIS SOFTWARE IS PROVIDED ON AN \"AS IS\" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.\n// See the Mulan PSL v2 for more details.\nconst buildIdentifier = '[0-9A-Za-z-]+';\nconst build = `(?:\\\\+(${buildIdentifier}(?:\\\\.${buildIdentifier})*))`;\nconst numericIdentifier = '0|[1-9]\\\\d*';\nconst numericIdentifierLoose = '[0-9]+';\nconst nonNumericIdentifier = '\\\\d*[a-zA-Z-][a-zA-Z0-9-]*';\nconst preReleaseIdentifierLoose = `(?:${numericIdentifierLoose}|${nonNumericIdentifier})`;\nconst preReleaseLoose = `(?:-?(${preReleaseIdentifierLoose}(?:\\\\.${preReleaseIdentifierLoose})*))`;\nconst preReleaseIdentifier = `(?:${numericIdentifier}|${nonNumericIdentifier})`;\nconst preRelease = `(?:-(${preReleaseIdentifier}(?:\\\\.${preReleaseIdentifier})*))`;\nconst xRangeIdentifier = `${numericIdentifier}|x|X|\\\\*`;\nconst xRangePlain = `[v=\\\\s]*(${xRangeIdentifier})(?:\\\\.(${xRangeIdentifier})(?:\\\\.(${xRangeIdentifier})(?:${preRelease})?${build}?)?)?`;\nconst hyphenRange = `^\\\\s*(${xRangePlain})\\\\s+-\\\\s+(${xRangePlain})\\\\s*$`;\nconst mainVersionLoose = `(${numericIdentifierLoose})\\\\.(${numericIdentifierLoose})\\\\.(${numericIdentifierLoose})`;\nconst loosePlain = `[v=\\\\s]*${mainVersionLoose}${preReleaseLoose}?${build}?`;\nconst gtlt = '((?:<|>)?=?)';\nconst comparatorTrim = `(\\\\s*)${gtlt}\\\\s*(${loosePlain}|${xRangePlain})`;\nconst loneTilde = '(?:~>?)';\nconst tildeTrim = `(\\\\s*)${loneTilde}\\\\s+`;\nconst loneCaret = '(?:\\\\^)';\nconst caretTrim = `(\\\\s*)${loneCaret}\\\\s+`;\nconst star = '(<|>)?=?\\\\s*\\\\*';\nconst caret = `^${loneCaret}${xRangePlain}$`;\nconst mainVersion = `(${numericIdentifier})\\\\.(${numericIdentifier})\\\\.(${numericIdentifier})`;\nconst fullPlain = `v?${mainVersion}${preRelease}?${build}?`;\nconst tilde = `^${loneTilde}${xRangePlain}$`;\nconst xRange = `^${gtlt}\\\\s*${xRangePlain}$`;\nconst comparator = `^${gtlt}\\\\s*(${fullPlain})$|^$`;\n// copy from semver package\nconst gte0 = '^\\\\s*>=\\\\s*0.0.0\\\\s*$';\n\n// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts\n// Copyright (c)\n// vite-plugin-federation is licensed under Mulan PSL v2.\n// You can use this software according to the terms and conditions of the Mulan PSL v2.\n// You may obtain a copy of Mulan PSL v2 at:\n//      http://license.coscl.org.cn/MulanPSL2\n// THIS SOFTWARE IS PROVIDED ON AN \"AS IS\" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.\n// See the Mulan PSL v2 for more details.\nfunction parseRegex(source) {\n    return new RegExp(source);\n}\nfunction isXVersion(version) {\n    return !version || version.toLowerCase() === 'x' || version === '*';\n}\nfunction pipe(...fns) {\n    return (x)=>fns.reduce((v, f)=>f(v), x);\n}\nfunction extractComparator(comparatorString) {\n    return comparatorString.match(parseRegex(comparator));\n}\nfunction combineVersion(major, minor, patch, preRelease) {\n    const mainVersion = `${major}.${minor}.${patch}`;\n    if (preRelease) {\n        return `${mainVersion}-${preRelease}`;\n    }\n    return mainVersion;\n}\n\n// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts\n// Copyright (c)\n// vite-plugin-federation is licensed under Mulan PSL v2.\n// You can use this software according to the terms and conditions of the Mulan PSL v2.\n// You may obtain a copy of Mulan PSL v2 at:\n//      http://license.coscl.org.cn/MulanPSL2\n// THIS SOFTWARE IS PROVIDED ON AN \"AS IS\" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.\n// See the Mulan PSL v2 for more details.\nfunction parseHyphen(range) {\n    return range.replace(parseRegex(hyphenRange), (_range, from, fromMajor, fromMinor, fromPatch, _fromPreRelease, _fromBuild, to, toMajor, toMinor, toPatch, toPreRelease)=>{\n        if (isXVersion(fromMajor)) {\n            from = '';\n        } else if (isXVersion(fromMinor)) {\n            from = `>=${fromMajor}.0.0`;\n        } else if (isXVersion(fromPatch)) {\n            from = `>=${fromMajor}.${fromMinor}.0`;\n        } else {\n            from = `>=${from}`;\n        }\n        if (isXVersion(toMajor)) {\n            to = '';\n        } else if (isXVersion(toMinor)) {\n            to = `<${Number(toMajor) + 1}.0.0-0`;\n        } else if (isXVersion(toPatch)) {\n            to = `<${toMajor}.${Number(toMinor) + 1}.0-0`;\n        } else if (toPreRelease) {\n            to = `<=${toMajor}.${toMinor}.${toPatch}-${toPreRelease}`;\n        } else {\n            to = `<=${to}`;\n        }\n        return `${from} ${to}`.trim();\n    });\n}\nfunction parseComparatorTrim(range) {\n    return range.replace(parseRegex(comparatorTrim), '$1$2$3');\n}\nfunction parseTildeTrim(range) {\n    return range.replace(parseRegex(tildeTrim), '$1~');\n}\nfunction parseCaretTrim(range) {\n    return range.replace(parseRegex(caretTrim), '$1^');\n}\nfunction parseCarets(range) {\n    return range.trim().split(/\\s+/).map((rangeVersion)=>rangeVersion.replace(parseRegex(caret), (_, major, minor, patch, preRelease)=>{\n            if (isXVersion(major)) {\n                return '';\n            } else if (isXVersion(minor)) {\n                return `>=${major}.0.0 <${Number(major) + 1}.0.0-0`;\n            } else if (isXVersion(patch)) {\n                if (major === '0') {\n                    return `>=${major}.${minor}.0 <${major}.${Number(minor) + 1}.0-0`;\n                } else {\n                    return `>=${major}.${minor}.0 <${Number(major) + 1}.0.0-0`;\n                }\n            } else if (preRelease) {\n                if (major === '0') {\n                    if (minor === '0') {\n                        return `>=${major}.${minor}.${patch}-${preRelease} <${major}.${minor}.${Number(patch) + 1}-0`;\n                    } else {\n                        return `>=${major}.${minor}.${patch}-${preRelease} <${major}.${Number(minor) + 1}.0-0`;\n                    }\n                } else {\n                    return `>=${major}.${minor}.${patch}-${preRelease} <${Number(major) + 1}.0.0-0`;\n                }\n            } else {\n                if (major === '0') {\n                    if (minor === '0') {\n                        return `>=${major}.${minor}.${patch} <${major}.${minor}.${Number(patch) + 1}-0`;\n                    } else {\n                        return `>=${major}.${minor}.${patch} <${major}.${Number(minor) + 1}.0-0`;\n                    }\n                }\n                return `>=${major}.${minor}.${patch} <${Number(major) + 1}.0.0-0`;\n            }\n        })).join(' ');\n}\nfunction parseTildes(range) {\n    return range.trim().split(/\\s+/).map((rangeVersion)=>rangeVersion.replace(parseRegex(tilde), (_, major, minor, patch, preRelease)=>{\n            if (isXVersion(major)) {\n                return '';\n            } else if (isXVersion(minor)) {\n                return `>=${major}.0.0 <${Number(major) + 1}.0.0-0`;\n            } else if (isXVersion(patch)) {\n                return `>=${major}.${minor}.0 <${major}.${Number(minor) + 1}.0-0`;\n            } else if (preRelease) {\n                return `>=${major}.${minor}.${patch}-${preRelease} <${major}.${Number(minor) + 1}.0-0`;\n            }\n            return `>=${major}.${minor}.${patch} <${major}.${Number(minor) + 1}.0-0`;\n        })).join(' ');\n}\nfunction parseXRanges(range) {\n    return range.split(/\\s+/).map((rangeVersion)=>rangeVersion.trim().replace(parseRegex(xRange), (ret, gtlt, major, minor, patch, preRelease)=>{\n            const isXMajor = isXVersion(major);\n            const isXMinor = isXMajor || isXVersion(minor);\n            const isXPatch = isXMinor || isXVersion(patch);\n            if (gtlt === '=' && isXPatch) {\n                gtlt = '';\n            }\n            preRelease = '';\n            if (isXMajor) {\n                if (gtlt === '>' || gtlt === '<') {\n                    // nothing is allowed\n                    return '<0.0.0-0';\n                } else {\n                    // nothing is forbidden\n                    return '*';\n                }\n            } else if (gtlt && isXPatch) {\n                // replace X with 0\n                if (isXMinor) {\n                    minor = 0;\n                }\n                patch = 0;\n                if (gtlt === '>') {\n                    // >1 => >=2.0.0\n                    // >1.2 => >=1.3.0\n                    gtlt = '>=';\n                    if (isXMinor) {\n                        major = Number(major) + 1;\n                        minor = 0;\n                        patch = 0;\n                    } else {\n                        minor = Number(minor) + 1;\n                        patch = 0;\n                    }\n                } else if (gtlt === '<=') {\n                    // <=0.7.x is actually <0.8.0, since any 0.7.x should pass\n                    // Similarly, <=7.x is actually <8.0.0, etc.\n                    gtlt = '<';\n                    if (isXMinor) {\n                        major = Number(major) + 1;\n                    } else {\n                        minor = Number(minor) + 1;\n                    }\n                }\n                if (gtlt === '<') {\n                    preRelease = '-0';\n                }\n                return `${gtlt + major}.${minor}.${patch}${preRelease}`;\n            } else if (isXMinor) {\n                return `>=${major}.0.0${preRelease} <${Number(major) + 1}.0.0-0`;\n            } else if (isXPatch) {\n                return `>=${major}.${minor}.0${preRelease} <${major}.${Number(minor) + 1}.0-0`;\n            }\n            return ret;\n        })).join(' ');\n}\nfunction parseStar(range) {\n    return range.trim().replace(parseRegex(star), '');\n}\nfunction parseGTE0(comparatorString) {\n    return comparatorString.trim().replace(parseRegex(gte0), '');\n}\n\n// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts\n// Copyright (c)\n// vite-plugin-federation is licensed under Mulan PSL v2.\n// You can use this software according to the terms and conditions of the Mulan PSL v2.\n// You may obtain a copy of Mulan PSL v2 at:\n//      http://license.coscl.org.cn/MulanPSL2\n// THIS SOFTWARE IS PROVIDED ON AN \"AS IS\" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.\n// See the Mulan PSL v2 for more details.\nfunction compareAtom(rangeAtom, versionAtom) {\n    rangeAtom = Number(rangeAtom) || rangeAtom;\n    versionAtom = Number(versionAtom) || versionAtom;\n    if (rangeAtom > versionAtom) {\n        return 1;\n    }\n    if (rangeAtom === versionAtom) {\n        return 0;\n    }\n    return -1;\n}\nfunction comparePreRelease(rangeAtom, versionAtom) {\n    const { preRelease: rangePreRelease } = rangeAtom;\n    const { preRelease: versionPreRelease } = versionAtom;\n    if (rangePreRelease === undefined && Boolean(versionPreRelease)) {\n        return 1;\n    }\n    if (Boolean(rangePreRelease) && versionPreRelease === undefined) {\n        return -1;\n    }\n    if (rangePreRelease === undefined && versionPreRelease === undefined) {\n        return 0;\n    }\n    for(let i = 0, n = rangePreRelease.length; i <= n; i++){\n        const rangeElement = rangePreRelease[i];\n        const versionElement = versionPreRelease[i];\n        if (rangeElement === versionElement) {\n            continue;\n        }\n        if (rangeElement === undefined && versionElement === undefined) {\n            return 0;\n        }\n        if (!rangeElement) {\n            return 1;\n        }\n        if (!versionElement) {\n            return -1;\n        }\n        return compareAtom(rangeElement, versionElement);\n    }\n    return 0;\n}\nfunction compareVersion(rangeAtom, versionAtom) {\n    return compareAtom(rangeAtom.major, versionAtom.major) || compareAtom(rangeAtom.minor, versionAtom.minor) || compareAtom(rangeAtom.patch, versionAtom.patch) || comparePreRelease(rangeAtom, versionAtom);\n}\nfunction eq(rangeAtom, versionAtom) {\n    return rangeAtom.version === versionAtom.version;\n}\nfunction compare(rangeAtom, versionAtom) {\n    switch(rangeAtom.operator){\n        case '':\n        case '=':\n            return eq(rangeAtom, versionAtom);\n        case '>':\n            return compareVersion(rangeAtom, versionAtom) < 0;\n        case '>=':\n            return eq(rangeAtom, versionAtom) || compareVersion(rangeAtom, versionAtom) < 0;\n        case '<':\n            return compareVersion(rangeAtom, versionAtom) > 0;\n        case '<=':\n            return eq(rangeAtom, versionAtom) || compareVersion(rangeAtom, versionAtom) > 0;\n        case undefined:\n            {\n                // mean * or x -> all versions\n                return true;\n            }\n        default:\n            return false;\n    }\n}\n\n// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts\n// Copyright (c)\n// vite-plugin-federation is licensed under Mulan PSL v2.\n// You can use this software according to the terms and conditions of the Mulan PSL v2.\n// You may obtain a copy of Mulan PSL v2 at:\n//      http://license.coscl.org.cn/MulanPSL2\n// THIS SOFTWARE IS PROVIDED ON AN \"AS IS\" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.\n// See the Mulan PSL v2 for more details.\nfunction parseComparatorString(range) {\n    return pipe(// handle caret\n    // ^ --> * (any, kinda silly)\n    // ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0\n    // ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0\n    // ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0\n    // ^1.2.3 --> >=1.2.3 <2.0.0-0\n    // ^1.2.0 --> >=1.2.0 <2.0.0-0\n    parseCarets, // handle tilde\n    // ~, ~> --> * (any, kinda silly)\n    // ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0\n    // ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0\n    // ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0\n    // ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0\n    // ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0\n    parseTildes, parseXRanges, parseStar)(range);\n}\nfunction parseRange(range) {\n    return pipe(// handle hyphenRange\n    // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`\n    parseHyphen, // handle trim comparator\n    // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`\n    parseComparatorTrim, // handle trim tilde\n    // `~ 1.2.3` => `~1.2.3`\n    parseTildeTrim, // handle trim caret\n    // `^ 1.2.3` => `^1.2.3`\n    parseCaretTrim)(range.trim()).split(/\\s+/).join(' ');\n}\nfunction satisfy(version, range) {\n    if (!version) {\n        return false;\n    }\n    const parsedRange = parseRange(range);\n    const parsedComparator = parsedRange.split(' ').map((rangeVersion)=>parseComparatorString(rangeVersion)).join(' ');\n    const comparators = parsedComparator.split(/\\s+/).map((comparator)=>parseGTE0(comparator));\n    const extractedVersion = extractComparator(version);\n    if (!extractedVersion) {\n        return false;\n    }\n    const [, versionOperator, , versionMajor, versionMinor, versionPatch, versionPreRelease] = extractedVersion;\n    const versionAtom = {\n        operator: versionOperator,\n        version: combineVersion(versionMajor, versionMinor, versionPatch, versionPreRelease),\n        major: versionMajor,\n        minor: versionMinor,\n        patch: versionPatch,\n        preRelease: versionPreRelease == null ? void 0 : versionPreRelease.split('.')\n    };\n    for (const comparator of comparators){\n        const extractedComparator = extractComparator(comparator);\n        if (!extractedComparator) {\n            return false;\n        }\n        const [, rangeOperator, , rangeMajor, rangeMinor, rangePatch, rangePreRelease] = extractedComparator;\n        const rangeAtom = {\n            operator: rangeOperator,\n            version: combineVersion(rangeMajor, rangeMinor, rangePatch, rangePreRelease),\n            major: rangeMajor,\n            minor: rangeMinor,\n            patch: rangePatch,\n            preRelease: rangePreRelease == null ? void 0 : rangePreRelease.split('.')\n        };\n        if (!compare(rangeAtom, versionAtom)) {\n            return false; // early return\n        }\n    }\n    return true;\n}\n\nfunction formatShare(shareArgs, from, name, shareStrategy) {\n    let get;\n    if ('get' in shareArgs) {\n        // eslint-disable-next-line prefer-destructuring\n        get = shareArgs.get;\n    } else if ('lib' in shareArgs) {\n        get = ()=>Promise.resolve(shareArgs.lib);\n    } else {\n        get = ()=>Promise.resolve(()=>{\n                throw new Error(`Can not get shared '${name}'!`);\n            });\n    }\n    if (shareArgs.strategy) {\n        warn(`\"shared.strategy is deprecated, please set in initOptions.shareStrategy instead!\"`);\n    }\n    var _shareArgs_version, _shareArgs_scope, _shareArgs_strategy;\n    return polyfills._extends({\n        deps: [],\n        useIn: [],\n        from,\n        loading: null\n    }, shareArgs, {\n        shareConfig: polyfills._extends({\n            requiredVersion: `^${shareArgs.version}`,\n            singleton: false,\n            eager: false,\n            strictVersion: false\n        }, shareArgs.shareConfig),\n        get,\n        loaded: (shareArgs == null ? void 0 : shareArgs.loaded) || 'lib' in shareArgs ? true : undefined,\n        version: (_shareArgs_version = shareArgs.version) != null ? _shareArgs_version : '0',\n        scope: Array.isArray(shareArgs.scope) ? shareArgs.scope : [\n            (_shareArgs_scope = shareArgs.scope) != null ? _shareArgs_scope : 'default'\n        ],\n        strategy: ((_shareArgs_strategy = shareArgs.strategy) != null ? _shareArgs_strategy : shareStrategy) || 'version-first'\n    });\n}\nfunction formatShareConfigs(globalOptions, userOptions) {\n    const shareArgs = userOptions.shared || {};\n    const from = userOptions.name;\n    const shareInfos = Object.keys(shareArgs).reduce((res, pkgName)=>{\n        const arrayShareArgs = arrayOptions(shareArgs[pkgName]);\n        res[pkgName] = res[pkgName] || [];\n        arrayShareArgs.forEach((shareConfig)=>{\n            res[pkgName].push(formatShare(shareConfig, from, pkgName, userOptions.shareStrategy));\n        });\n        return res;\n    }, {});\n    const shared = polyfills._extends({}, globalOptions.shared);\n    Object.keys(shareInfos).forEach((shareKey)=>{\n        if (!shared[shareKey]) {\n            shared[shareKey] = shareInfos[shareKey];\n        } else {\n            shareInfos[shareKey].forEach((newUserSharedOptions)=>{\n                const isSameVersion = shared[shareKey].find((sharedVal)=>sharedVal.version === newUserSharedOptions.version);\n                if (!isSameVersion) {\n                    shared[shareKey].push(newUserSharedOptions);\n                }\n            });\n        }\n    });\n    return {\n        shared,\n        shareInfos\n    };\n}\nfunction versionLt(a, b) {\n    const transformInvalidVersion = (version)=>{\n        const isNumberVersion = !Number.isNaN(Number(version));\n        if (isNumberVersion) {\n            const splitArr = version.split('.');\n            let validVersion = version;\n            for(let i = 0; i < 3 - splitArr.length; i++){\n                validVersion += '.0';\n            }\n            return validVersion;\n        }\n        return version;\n    };\n    if (satisfy(transformInvalidVersion(a), `<=${transformInvalidVersion(b)}`)) {\n        return true;\n    } else {\n        return false;\n    }\n}\nconst findVersion = (shareVersionMap, cb)=>{\n    const callback = cb || function(prev, cur) {\n        return versionLt(prev, cur);\n    };\n    return Object.keys(shareVersionMap).reduce((prev, cur)=>{\n        if (!prev) {\n            return cur;\n        }\n        if (callback(prev, cur)) {\n            return cur;\n        }\n        // default version is '0' https://github.com/webpack/webpack/blob/main/lib/sharing/ProvideSharedModule.js#L136\n        if (prev === '0') {\n            return cur;\n        }\n        return prev;\n    }, 0);\n};\nconst isLoaded = (shared)=>{\n    return Boolean(shared.loaded) || typeof shared.lib === 'function';\n};\nfunction findSingletonVersionOrderByVersion(shareScopeMap, scope, pkgName) {\n    const versions = shareScopeMap[scope][pkgName];\n    const callback = function(prev, cur) {\n        return !isLoaded(versions[prev]) && versionLt(prev, cur);\n    };\n    return findVersion(shareScopeMap[scope][pkgName], callback);\n}\nfunction findSingletonVersionOrderByLoaded(shareScopeMap, scope, pkgName) {\n    const versions = shareScopeMap[scope][pkgName];\n    const callback = function(prev, cur) {\n        if (isLoaded(versions[cur])) {\n            if (isLoaded(versions[prev])) {\n                return Boolean(versionLt(prev, cur));\n            } else {\n                return true;\n            }\n        }\n        if (isLoaded(versions[prev])) {\n            return false;\n        }\n        return versionLt(prev, cur);\n    };\n    return findVersion(shareScopeMap[scope][pkgName], callback);\n}\nfunction getFindShareFunction(strategy) {\n    if (strategy === 'loaded-first') {\n        return findSingletonVersionOrderByLoaded;\n    }\n    return findSingletonVersionOrderByVersion;\n}\nfunction getRegisteredShare(localShareScopeMap, pkgName, shareInfo, resolveShare) {\n    if (!localShareScopeMap) {\n        return;\n    }\n    const { shareConfig, scope = DEFAULT_SCOPE, strategy } = shareInfo;\n    const scopes = Array.isArray(scope) ? scope : [\n        scope\n    ];\n    for (const sc of scopes){\n        if (shareConfig && localShareScopeMap[sc] && localShareScopeMap[sc][pkgName]) {\n            const { requiredVersion } = shareConfig;\n            const findShareFunction = getFindShareFunction(strategy);\n            const maxOrSingletonVersion = findShareFunction(localShareScopeMap, sc, pkgName);\n            //@ts-ignore\n            const defaultResolver = ()=>{\n                if (shareConfig.singleton) {\n                    if (typeof requiredVersion === 'string' && !satisfy(maxOrSingletonVersion, requiredVersion)) {\n                        const msg = `Version ${maxOrSingletonVersion} from ${maxOrSingletonVersion && localShareScopeMap[sc][pkgName][maxOrSingletonVersion].from} of shared singleton module ${pkgName} does not satisfy the requirement of ${shareInfo.from} which needs ${requiredVersion})`;\n                        if (shareConfig.strictVersion) {\n                            error(msg);\n                        } else {\n                            warn(msg);\n                        }\n                    }\n                    return localShareScopeMap[sc][pkgName][maxOrSingletonVersion];\n                } else {\n                    if (requiredVersion === false || requiredVersion === '*') {\n                        return localShareScopeMap[sc][pkgName][maxOrSingletonVersion];\n                    }\n                    if (satisfy(maxOrSingletonVersion, requiredVersion)) {\n                        return localShareScopeMap[sc][pkgName][maxOrSingletonVersion];\n                    }\n                    for (const [versionKey, versionValue] of Object.entries(localShareScopeMap[sc][pkgName])){\n                        if (satisfy(versionKey, requiredVersion)) {\n                            return versionValue;\n                        }\n                    }\n                }\n            };\n            const params = {\n                shareScopeMap: localShareScopeMap,\n                scope: sc,\n                pkgName,\n                version: maxOrSingletonVersion,\n                GlobalFederation: Global.__FEDERATION__,\n                resolver: defaultResolver\n            };\n            const resolveShared = resolveShare.emit(params) || params;\n            return resolveShared.resolver();\n        }\n    }\n}\nfunction getGlobalShareScope() {\n    return Global.__FEDERATION__.__SHARE__;\n}\nfunction getTargetSharedOptions(options) {\n    const { pkgName, extraOptions, shareInfos } = options;\n    const defaultResolver = (sharedOptions)=>{\n        if (!sharedOptions) {\n            return undefined;\n        }\n        const shareVersionMap = {};\n        sharedOptions.forEach((shared)=>{\n            shareVersionMap[shared.version] = shared;\n        });\n        const callback = function(prev, cur) {\n            return !isLoaded(shareVersionMap[prev]) && versionLt(prev, cur);\n        };\n        const maxVersion = findVersion(shareVersionMap, callback);\n        return shareVersionMap[maxVersion];\n    };\n    var _extraOptions_resolver;\n    const resolver = (_extraOptions_resolver = extraOptions == null ? void 0 : extraOptions.resolver) != null ? _extraOptions_resolver : defaultResolver;\n    return Object.assign({}, resolver(shareInfos[pkgName]), extraOptions == null ? void 0 : extraOptions.customShareInfo);\n}\n\nexports.DEFAULT_REMOTE_TYPE = DEFAULT_REMOTE_TYPE;\nexports.DEFAULT_SCOPE = DEFAULT_SCOPE;\nexports.Global = Global;\nexports.addGlobalSnapshot = addGlobalSnapshot;\nexports.addUniqueItem = addUniqueItem;\nexports.arrayOptions = arrayOptions;\nexports.assert = assert;\nexports.error = error;\nexports.formatShareConfigs = formatShareConfigs;\nexports.getBuilderId = getBuilderId;\nexports.getFMId = getFMId;\nexports.getGlobalFederationConstructor = getGlobalFederationConstructor;\nexports.getGlobalFederationInstance = getGlobalFederationInstance;\nexports.getGlobalHostPlugins = getGlobalHostPlugins;\nexports.getGlobalShareScope = getGlobalShareScope;\nexports.getGlobalSnapshot = getGlobalSnapshot;\nexports.getGlobalSnapshotInfoByModuleInfo = getGlobalSnapshotInfoByModuleInfo;\nexports.getInfoWithoutType = getInfoWithoutType;\nexports.getPreloaded = getPreloaded;\nexports.getRegisteredShare = getRegisteredShare;\nexports.getRemoteEntryExports = getRemoteEntryExports;\nexports.getRemoteEntryInfoFromSnapshot = getRemoteEntryInfoFromSnapshot;\nexports.getTargetSharedOptions = getTargetSharedOptions;\nexports.getTargetSnapshotInfoByModuleInfo = getTargetSnapshotInfoByModuleInfo;\nexports.globalLoading = globalLoading;\nexports.isObject = isObject;\nexports.isPlainObject = isPlainObject;\nexports.isPureRemoteEntry = isPureRemoteEntry;\nexports.isRemoteInfoWithEntry = isRemoteInfoWithEntry;\nexports.logger = logger;\nexports.nativeGlobal = nativeGlobal;\nexports.registerGlobalPlugins = registerGlobalPlugins;\nexports.resetFederationGlobalInfo = resetFederationGlobalInfo;\nexports.setGlobalFederationConstructor = setGlobalFederationConstructor;\nexports.setGlobalFederationInstance = setGlobalFederationInstance;\nexports.setGlobalSnapshotInfoByModuleInfo = setGlobalSnapshotInfoByModuleInfo;\nexports.setPreloaded = setPreloaded;\nexports.warn = warn;\n\n\n//# sourceURL=webpack://playground/../../node_modules/.pnpm/@module-federation+runtime@0.6.15/node_modules/@module-federation/runtime/dist/share.cjs.js?");

/***/ }),

/***/ "../../node_modules/.pnpm/@module-federation+sdk@0.6.15/node_modules/@module-federation/sdk/dist/index.cjs.js":
/*!********************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@module-federation+sdk@0.6.15/node_modules/@module-federation/sdk/dist/index.cjs.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar isomorphicRslog = __webpack_require__(/*! isomorphic-rslog */ \"../../node_modules/.pnpm/isomorphic-rslog@0.0.4/node_modules/isomorphic-rslog/dist/browser/index.cjs\");\nvar polyfills = __webpack_require__(/*! ./polyfills.cjs.js */ \"../../node_modules/.pnpm/@module-federation+sdk@0.6.15/node_modules/@module-federation/sdk/dist/polyfills.cjs.js\");\n\nconst FederationModuleManifest = 'federation-manifest.json';\nconst MANIFEST_EXT = '.json';\nconst BROWSER_LOG_KEY = 'FEDERATION_DEBUG';\nconst BROWSER_LOG_VALUE = '1';\nconst NameTransformSymbol = {\n    AT: '@',\n    HYPHEN: '-',\n    SLASH: '/'\n};\nconst NameTransformMap = {\n    [NameTransformSymbol.AT]: 'scope_',\n    [NameTransformSymbol.HYPHEN]: '_',\n    [NameTransformSymbol.SLASH]: '__'\n};\nconst EncodedNameTransformMap = {\n    [NameTransformMap[NameTransformSymbol.AT]]: NameTransformSymbol.AT,\n    [NameTransformMap[NameTransformSymbol.HYPHEN]]: NameTransformSymbol.HYPHEN,\n    [NameTransformMap[NameTransformSymbol.SLASH]]: NameTransformSymbol.SLASH\n};\nconst SEPARATOR = ':';\nconst ManifestFileName = 'mf-manifest.json';\nconst StatsFileName = 'mf-stats.json';\nconst MFModuleType = {\n    NPM: 'npm',\n    APP: 'app'\n};\nconst MODULE_DEVTOOL_IDENTIFIER = '__MF_DEVTOOLS_MODULE_INFO__';\nconst ENCODE_NAME_PREFIX = 'ENCODE_NAME_PREFIX';\nconst TEMP_DIR = '.federation';\nconst MFPrefetchCommon = {\n    identifier: 'MFDataPrefetch',\n    globalKey: '__PREFETCH__',\n    library: 'mf-data-prefetch',\n    exportsKey: '__PREFETCH_EXPORTS__',\n    fileName: 'bootstrap.js'\n};\n\nvar ContainerPlugin = /*#__PURE__*/Object.freeze({\n  __proto__: null\n});\n\nvar ContainerReferencePlugin = /*#__PURE__*/Object.freeze({\n  __proto__: null\n});\n\nvar ModuleFederationPlugin = /*#__PURE__*/Object.freeze({\n  __proto__: null\n});\n\nvar SharePlugin = /*#__PURE__*/Object.freeze({\n  __proto__: null\n});\n\nfunction isBrowserEnv() {\n    return typeof window !== 'undefined';\n}\nfunction isBrowserDebug() {\n    try {\n        if (isBrowserEnv() && window.localStorage) {\n            return localStorage.getItem(BROWSER_LOG_KEY) === BROWSER_LOG_VALUE;\n        }\n    } catch (error) {\n        return false;\n    }\n    return false;\n}\nfunction isDebugMode() {\n    if (typeof process !== 'undefined' && process.env && process.env['FEDERATION_DEBUG']) {\n        return Boolean(process.env['FEDERATION_DEBUG']);\n    }\n    if (typeof FEDERATION_DEBUG !== 'undefined' && Boolean(FEDERATION_DEBUG)) {\n        return true;\n    }\n    return isBrowserDebug();\n}\nconst getProcessEnv = function() {\n    return typeof process !== 'undefined' && process.env ? process.env : {};\n};\n\nconst PREFIX = '[ Module Federation ]';\nfunction setDebug(loggerInstance) {\n    if (isDebugMode()) {\n        loggerInstance.level = 'verbose';\n    }\n}\nfunction setPrefix(loggerInstance, prefix) {\n    loggerInstance.labels = {\n        warn: `${prefix} Warn`,\n        error: `${prefix} Error`,\n        success: `${prefix} Success`,\n        info: `${prefix} Info`,\n        ready: `${prefix} Ready`,\n        debug: `${prefix} Debug`\n    };\n}\nfunction createLogger(prefix) {\n    const loggerInstance = isomorphicRslog.createLogger({\n        labels: {\n            warn: `${PREFIX} Warn`,\n            error: `${PREFIX} Error`,\n            success: `${PREFIX} Success`,\n            info: `${PREFIX} Info`,\n            ready: `${PREFIX} Ready`,\n            debug: `${PREFIX} Debug`\n        }\n    });\n    setDebug(loggerInstance);\n    setPrefix(loggerInstance, prefix);\n    return loggerInstance;\n}\nconst logger = createLogger(PREFIX);\n\nconst LOG_CATEGORY = '[ Federation Runtime ]';\n// entry: name:version   version : 1.0.0 | ^1.2.3\n// entry: name:entry  entry:  https://localhost:9000/federation-manifest.json\nconst parseEntry = (str, devVerOrUrl, separator = SEPARATOR)=>{\n    const strSplit = str.split(separator);\n    const devVersionOrUrl = getProcessEnv()['NODE_ENV'] === 'development' && devVerOrUrl;\n    const defaultVersion = '*';\n    const isEntry = (s)=>s.startsWith('http') || s.includes(MANIFEST_EXT);\n    // Check if the string starts with a type\n    if (strSplit.length >= 2) {\n        let [name, ...versionOrEntryArr] = strSplit;\n        if (str.startsWith(separator)) {\n            versionOrEntryArr = [\n                devVersionOrUrl || strSplit.slice(-1)[0]\n            ];\n            name = strSplit.slice(0, -1).join(separator);\n        }\n        let versionOrEntry = devVersionOrUrl || versionOrEntryArr.join(separator);\n        if (isEntry(versionOrEntry)) {\n            return {\n                name,\n                entry: versionOrEntry\n            };\n        } else {\n            // Apply version rule\n            // devVersionOrUrl => inputVersion => defaultVersion\n            return {\n                name,\n                version: versionOrEntry || defaultVersion\n            };\n        }\n    } else if (strSplit.length === 1) {\n        const [name] = strSplit;\n        if (devVersionOrUrl && isEntry(devVersionOrUrl)) {\n            return {\n                name,\n                entry: devVersionOrUrl\n            };\n        }\n        return {\n            name,\n            version: devVersionOrUrl || defaultVersion\n        };\n    } else {\n        throw `Invalid entry value: ${str}`;\n    }\n};\nconst composeKeyWithSeparator = function(...args) {\n    if (!args.length) {\n        return '';\n    }\n    return args.reduce((sum, cur)=>{\n        if (!cur) {\n            return sum;\n        }\n        if (!sum) {\n            return cur;\n        }\n        return `${sum}${SEPARATOR}${cur}`;\n    }, '');\n};\nconst encodeName = function(name, prefix = '', withExt = false) {\n    try {\n        const ext = withExt ? '.js' : '';\n        return `${prefix}${name.replace(new RegExp(`${NameTransformSymbol.AT}`, 'g'), NameTransformMap[NameTransformSymbol.AT]).replace(new RegExp(`${NameTransformSymbol.HYPHEN}`, 'g'), NameTransformMap[NameTransformSymbol.HYPHEN]).replace(new RegExp(`${NameTransformSymbol.SLASH}`, 'g'), NameTransformMap[NameTransformSymbol.SLASH])}${ext}`;\n    } catch (err) {\n        throw err;\n    }\n};\nconst decodeName = function(name, prefix, withExt) {\n    try {\n        let decodedName = name;\n        if (prefix) {\n            if (!decodedName.startsWith(prefix)) {\n                return decodedName;\n            }\n            decodedName = decodedName.replace(new RegExp(prefix, 'g'), '');\n        }\n        decodedName = decodedName.replace(new RegExp(`${NameTransformMap[NameTransformSymbol.AT]}`, 'g'), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.AT]]).replace(new RegExp(`${NameTransformMap[NameTransformSymbol.SLASH]}`, 'g'), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.SLASH]]).replace(new RegExp(`${NameTransformMap[NameTransformSymbol.HYPHEN]}`, 'g'), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.HYPHEN]]);\n        if (withExt) {\n            decodedName = decodedName.replace('.js', '');\n        }\n        return decodedName;\n    } catch (err) {\n        throw err;\n    }\n};\nconst generateExposeFilename = (exposeName, withExt)=>{\n    if (!exposeName) {\n        return '';\n    }\n    let expose = exposeName;\n    if (expose === '.') {\n        expose = 'default_export';\n    }\n    if (expose.startsWith('./')) {\n        expose = expose.replace('./', '');\n    }\n    return encodeName(expose, '__federation_expose_', withExt);\n};\nconst generateShareFilename = (pkgName, withExt)=>{\n    if (!pkgName) {\n        return '';\n    }\n    return encodeName(pkgName, '__federation_shared_', withExt);\n};\nconst getResourceUrl = (module, sourceUrl)=>{\n    if ('getPublicPath' in module) {\n        let publicPath;\n        if (!module.getPublicPath.startsWith('function')) {\n            publicPath = new Function(module.getPublicPath)();\n        } else {\n            publicPath = new Function('return ' + module.getPublicPath)()();\n        }\n        return `${publicPath}${sourceUrl}`;\n    } else if ('publicPath' in module) {\n        return `${module.publicPath}${sourceUrl}`;\n    } else {\n        console.warn('Cannot get resource URL. If in debug mode, please ignore.', module, sourceUrl);\n        return '';\n    }\n};\n// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types\nconst assert = (condition, msg)=>{\n    if (!condition) {\n        error(msg);\n    }\n};\nconst error = (msg)=>{\n    throw new Error(`${LOG_CATEGORY}: ${msg}`);\n};\nconst warn = (msg)=>{\n    console.warn(`${LOG_CATEGORY}: ${msg}`);\n};\nfunction safeToString(info) {\n    try {\n        return JSON.stringify(info, null, 2);\n    } catch (e) {\n        return '';\n    }\n}\n// RegExp for version string\nconst VERSION_PATTERN_REGEXP = /^([\\d^=v<>~]|[*xX]$)/;\nfunction isRequiredVersion(str) {\n    return VERSION_PATTERN_REGEXP.test(str);\n}\n\nconst simpleJoinRemoteEntry = (rPath, rName)=>{\n    if (!rPath) {\n        return rName;\n    }\n    const transformPath = (str)=>{\n        if (str === '.') {\n            return '';\n        }\n        if (str.startsWith('./')) {\n            return str.replace('./', '');\n        }\n        if (str.startsWith('/')) {\n            const strWithoutSlash = str.slice(1);\n            if (strWithoutSlash.endsWith('/')) {\n                return strWithoutSlash.slice(0, -1);\n            }\n            return strWithoutSlash;\n        }\n        return str;\n    };\n    const transformedPath = transformPath(rPath);\n    if (!transformedPath) {\n        return rName;\n    }\n    if (transformedPath.endsWith('/')) {\n        return `${transformedPath}${rName}`;\n    }\n    return `${transformedPath}/${rName}`;\n};\nfunction inferAutoPublicPath(url) {\n    return url.replace(/#.*$/, '').replace(/\\?.*$/, '').replace(/\\/[^\\/]+$/, '/');\n}\n// Priority: overrides > remotes\n// eslint-disable-next-line max-lines-per-function\nfunction generateSnapshotFromManifest(manifest, options = {}) {\n    var _manifest_metaData, _manifest_metaData1;\n    const { remotes = {}, overrides = {}, version } = options;\n    let remoteSnapshot;\n    const getPublicPath = ()=>{\n        if ('publicPath' in manifest.metaData) {\n            if (manifest.metaData.publicPath === 'auto' && version) {\n                // use same implementation as publicPath auto runtime module implements\n                return inferAutoPublicPath(version);\n            }\n            return manifest.metaData.publicPath;\n        } else {\n            return manifest.metaData.getPublicPath;\n        }\n    };\n    const overridesKeys = Object.keys(overrides);\n    let remotesInfo = {};\n    // If remotes are not provided, only the remotes in the manifest will be read\n    if (!Object.keys(remotes).length) {\n        var _manifest_remotes;\n        remotesInfo = ((_manifest_remotes = manifest.remotes) == null ? void 0 : _manifest_remotes.reduce((res, next)=>{\n            let matchedVersion;\n            const name = next.federationContainerName;\n            // overrides have higher priority\n            if (overridesKeys.includes(name)) {\n                matchedVersion = overrides[name];\n            } else {\n                if ('version' in next) {\n                    matchedVersion = next.version;\n                } else {\n                    matchedVersion = next.entry;\n                }\n            }\n            res[name] = {\n                matchedVersion\n            };\n            return res;\n        }, {})) || {};\n    }\n    // If remotes (deploy scenario) are specified, they need to be traversed again\n    Object.keys(remotes).forEach((key)=>remotesInfo[key] = {\n            // overrides will override dependencies\n            matchedVersion: overridesKeys.includes(key) ? overrides[key] : remotes[key]\n        });\n    const { remoteEntry: { path: remoteEntryPath, name: remoteEntryName, type: remoteEntryType }, types: remoteTypes, buildInfo: { buildVersion }, globalName, ssrRemoteEntry } = manifest.metaData;\n    const { exposes } = manifest;\n    let basicRemoteSnapshot = {\n        version: version ? version : '',\n        buildVersion,\n        globalName,\n        remoteEntry: simpleJoinRemoteEntry(remoteEntryPath, remoteEntryName),\n        remoteEntryType,\n        remoteTypes: simpleJoinRemoteEntry(remoteTypes.path, remoteTypes.name),\n        remoteTypesZip: remoteTypes.zip || '',\n        remoteTypesAPI: remoteTypes.api || '',\n        remotesInfo,\n        shared: manifest == null ? void 0 : manifest.shared.map((item)=>({\n                assets: item.assets,\n                sharedName: item.name,\n                version: item.version\n            })),\n        modules: exposes == null ? void 0 : exposes.map((expose)=>({\n                moduleName: expose.name,\n                modulePath: expose.path,\n                assets: expose.assets\n            }))\n    };\n    if ((_manifest_metaData = manifest.metaData) == null ? void 0 : _manifest_metaData.prefetchInterface) {\n        const prefetchInterface = manifest.metaData.prefetchInterface;\n        basicRemoteSnapshot = polyfills._extends({}, basicRemoteSnapshot, {\n            prefetchInterface\n        });\n    }\n    if ((_manifest_metaData1 = manifest.metaData) == null ? void 0 : _manifest_metaData1.prefetchEntry) {\n        const { path, name, type } = manifest.metaData.prefetchEntry;\n        basicRemoteSnapshot = polyfills._extends({}, basicRemoteSnapshot, {\n            prefetchEntry: simpleJoinRemoteEntry(path, name),\n            prefetchEntryType: type\n        });\n    }\n    if ('publicPath' in manifest.metaData) {\n        remoteSnapshot = polyfills._extends({}, basicRemoteSnapshot, {\n            publicPath: getPublicPath()\n        });\n    } else {\n        remoteSnapshot = polyfills._extends({}, basicRemoteSnapshot, {\n            getPublicPath: getPublicPath()\n        });\n    }\n    if (ssrRemoteEntry) {\n        const fullSSRRemoteEntry = simpleJoinRemoteEntry(ssrRemoteEntry.path, ssrRemoteEntry.name);\n        remoteSnapshot.ssrRemoteEntry = fullSSRRemoteEntry;\n        remoteSnapshot.ssrRemoteEntryType = ssrRemoteEntry.type || 'commonjs-module';\n    }\n    return remoteSnapshot;\n}\nfunction isManifestProvider(moduleInfo) {\n    if ('remoteEntry' in moduleInfo && moduleInfo.remoteEntry.includes(MANIFEST_EXT)) {\n        return true;\n    } else {\n        return false;\n    }\n}\n\n// eslint-disable-next-line @typescript-eslint/no-explicit-any\nasync function safeWrapper(callback, disableWarn) {\n    try {\n        const res = await callback();\n        return res;\n    } catch (e) {\n        !disableWarn && warn(e);\n        return;\n    }\n}\nfunction isStaticResourcesEqual(url1, url2) {\n    const REG_EXP = /^(https?:)?\\/\\//i;\n    // Transform url1 and url2 into relative paths\n    const relativeUrl1 = url1.replace(REG_EXP, '').replace(/\\/$/, '');\n    const relativeUrl2 = url2.replace(REG_EXP, '').replace(/\\/$/, '');\n    // Check if the relative paths are identical\n    return relativeUrl1 === relativeUrl2;\n}\nfunction createScript(info) {\n    // Retrieve the existing script element by its src attribute\n    let script = null;\n    let needAttach = true;\n    let timeout = 20000;\n    let timeoutId;\n    const scripts = document.getElementsByTagName('script');\n    for(let i = 0; i < scripts.length; i++){\n        const s = scripts[i];\n        const scriptSrc = s.getAttribute('src');\n        if (scriptSrc && isStaticResourcesEqual(scriptSrc, info.url)) {\n            script = s;\n            needAttach = false;\n            break;\n        }\n    }\n    if (!script) {\n        const attrs = info.attrs;\n        script = document.createElement('script');\n        script.type = (attrs == null ? void 0 : attrs['type']) === 'module' ? 'module' : 'text/javascript';\n        let createScriptRes = undefined;\n        if (info.createScriptHook) {\n            createScriptRes = info.createScriptHook(info.url, info.attrs);\n            if (createScriptRes instanceof HTMLScriptElement) {\n                script = createScriptRes;\n            } else if (typeof createScriptRes === 'object') {\n                if ('script' in createScriptRes && createScriptRes.script) {\n                    script = createScriptRes.script;\n                }\n                if ('timeout' in createScriptRes && createScriptRes.timeout) {\n                    timeout = createScriptRes.timeout;\n                }\n            }\n        }\n        if (!script.src) {\n            script.src = info.url;\n        }\n        if (attrs && !createScriptRes) {\n            Object.keys(attrs).forEach((name)=>{\n                if (script) {\n                    if (name === 'async' || name === 'defer') {\n                        script[name] = attrs[name];\n                    // Attributes that do not exist are considered overridden\n                    } else if (!script.getAttribute(name)) {\n                        script.setAttribute(name, attrs[name]);\n                    }\n                }\n            });\n        }\n    }\n    const onScriptComplete = async (prev, // eslint-disable-next-line @typescript-eslint/no-explicit-any\n    event)=>{\n        var _info_cb;\n        clearTimeout(timeoutId);\n        // Prevent memory leaks in IE.\n        if (script) {\n            script.onerror = null;\n            script.onload = null;\n            safeWrapper(()=>{\n                const { needDeleteScript = true } = info;\n                if (needDeleteScript) {\n                    (script == null ? void 0 : script.parentNode) && script.parentNode.removeChild(script);\n                }\n            });\n            if (prev && typeof prev === 'function') {\n                var _info_cb1;\n                const result = prev(event);\n                if (result instanceof Promise) {\n                    var _info_cb2;\n                    const res = await result;\n                    info == null ? void 0 : (_info_cb2 = info.cb) == null ? void 0 : _info_cb2.call(info);\n                    return res;\n                }\n                info == null ? void 0 : (_info_cb1 = info.cb) == null ? void 0 : _info_cb1.call(info);\n                return result;\n            }\n        }\n        info == null ? void 0 : (_info_cb = info.cb) == null ? void 0 : _info_cb.call(info);\n    };\n    script.onerror = onScriptComplete.bind(null, script.onerror);\n    script.onload = onScriptComplete.bind(null, script.onload);\n    timeoutId = setTimeout(()=>{\n        onScriptComplete(null, new Error(`Remote script \"${info.url}\" time-outed.`));\n    }, timeout);\n    return {\n        script,\n        needAttach\n    };\n}\nfunction createLink(info) {\n    // <link rel=\"preload\" href=\"script.js\" as=\"script\">\n    // Retrieve the existing script element by its src attribute\n    let link = null;\n    let needAttach = true;\n    const links = document.getElementsByTagName('link');\n    for(let i = 0; i < links.length; i++){\n        const l = links[i];\n        const linkHref = l.getAttribute('href');\n        const linkRef = l.getAttribute('ref');\n        if (linkHref && isStaticResourcesEqual(linkHref, info.url) && linkRef === info.attrs['ref']) {\n            link = l;\n            needAttach = false;\n            break;\n        }\n    }\n    if (!link) {\n        link = document.createElement('link');\n        link.setAttribute('href', info.url);\n        let createLinkRes = undefined;\n        const attrs = info.attrs;\n        if (info.createLinkHook) {\n            createLinkRes = info.createLinkHook(info.url, attrs);\n            if (createLinkRes instanceof HTMLLinkElement) {\n                link = createLinkRes;\n            }\n        }\n        if (attrs && !createLinkRes) {\n            Object.keys(attrs).forEach((name)=>{\n                if (link && !link.getAttribute(name)) {\n                    link.setAttribute(name, attrs[name]);\n                }\n            });\n        }\n    }\n    const onLinkComplete = (prev, // eslint-disable-next-line @typescript-eslint/no-explicit-any\n    event)=>{\n        // Prevent memory leaks in IE.\n        if (link) {\n            link.onerror = null;\n            link.onload = null;\n            safeWrapper(()=>{\n                const { needDeleteLink = true } = info;\n                if (needDeleteLink) {\n                    (link == null ? void 0 : link.parentNode) && link.parentNode.removeChild(link);\n                }\n            });\n            if (prev) {\n                // eslint-disable-next-line @typescript-eslint/no-explicit-any\n                const res = prev(event);\n                info.cb();\n                return res;\n            }\n        }\n        info.cb();\n    };\n    link.onerror = onLinkComplete.bind(null, link.onerror);\n    link.onload = onLinkComplete.bind(null, link.onload);\n    return {\n        link,\n        needAttach\n    };\n}\nfunction loadScript(url, info) {\n    const { attrs = {}, createScriptHook } = info;\n    return new Promise((resolve, _reject)=>{\n        const { script, needAttach } = createScript({\n            url,\n            cb: resolve,\n            attrs: polyfills._extends({\n                fetchpriority: 'high'\n            }, attrs),\n            createScriptHook,\n            needDeleteScript: true\n        });\n        needAttach && document.head.appendChild(script);\n    });\n}\n\nfunction importNodeModule(name) {\n    if (!name) {\n        throw new Error('import specifier is required');\n    }\n    const importModule = new Function('name', `return import(name)`);\n    return importModule(name).then((res)=>res).catch((error)=>{\n        console.error(`Error importing module ${name}:`, error);\n        throw error;\n    });\n}\nconst loadNodeFetch = async ()=>{\n    const fetchModule = await importNodeModule('node-fetch');\n    return fetchModule.default || fetchModule;\n};\nconst lazyLoaderHookFetch = async (input, init)=>{\n    // @ts-ignore\n    const loaderHooks = __webpack_require__.federation.instance.loaderHook;\n    const hook = (url, init)=>{\n        return loaderHooks.lifecycle.fetch.emit(url, init);\n    };\n    const res = await hook(input, init || {});\n    if (!res || !(res instanceof Response)) {\n        const fetchFunction = typeof fetch === 'undefined' ? await loadNodeFetch() : fetch;\n        return fetchFunction(input, init || {});\n    }\n    return res;\n};\nfunction createScriptNode(url, cb, attrs, createScriptHook) {\n    if (createScriptHook) {\n        const hookResult = createScriptHook(url);\n        if (hookResult && typeof hookResult === 'object' && 'url' in hookResult) {\n            url = hookResult.url;\n        }\n    }\n    let urlObj;\n    try {\n        urlObj = new URL(url);\n    } catch (e) {\n        console.error('Error constructing URL:', e);\n        cb(new Error(`Invalid URL: ${e}`));\n        return;\n    }\n    const getFetch = async ()=>{\n        //@ts-ignore\n        if (true) {\n            try {\n                //@ts-ignore\n                const loaderHooks = __webpack_require__.federation.instance.loaderHook;\n                if (loaderHooks.lifecycle.fetch) {\n                    return lazyLoaderHookFetch;\n                }\n            } catch (e) {\n                console.warn('federation.instance.loaderHook.lifecycle.fetch failed:', e);\n            }\n        }\n        return typeof fetch === 'undefined' ? loadNodeFetch() : fetch;\n    };\n    const handleScriptFetch = async (f, urlObj)=>{\n        try {\n            var //@ts-ignore\n            _vm_constants;\n            const res = await f(urlObj.href);\n            const data = await res.text();\n            const [path, vm] = await Promise.all([\n                importNodeModule('path'),\n                importNodeModule('vm')\n            ]);\n            const scriptContext = {\n                exports: {},\n                module: {\n                    exports: {}\n                }\n            };\n            const urlDirname = urlObj.pathname.split('/').slice(0, -1).join('/');\n            const filename = path.basename(urlObj.pathname);\n            var _vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER;\n            const script = new vm.Script(`(function(exports, module, require, __dirname, __filename) {${data}\\n})`, {\n                filename,\n                importModuleDynamically: (_vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER = (_vm_constants = vm.constants) == null ? void 0 : _vm_constants.USE_MAIN_CONTEXT_DEFAULT_LOADER) != null ? _vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER : importNodeModule\n            });\n            script.runInThisContext()(scriptContext.exports, scriptContext.module, eval('require'), urlDirname, filename);\n            const exportedInterface = scriptContext.module.exports || scriptContext.exports;\n            if (attrs && exportedInterface && attrs['globalName']) {\n                const container = exportedInterface[attrs['globalName']] || exportedInterface;\n                cb(undefined, container);\n                return;\n            }\n            cb(undefined, exportedInterface);\n        } catch (e) {\n            cb(e instanceof Error ? e : new Error(`Script execution error: ${e}`));\n        }\n    };\n    getFetch().then(async (f)=>{\n        if ((attrs == null ? void 0 : attrs['type']) === 'esm' || (attrs == null ? void 0 : attrs['type']) === 'module') {\n            return loadModule(urlObj.href, {\n                fetch: f,\n                vm: await importNodeModule('vm')\n            }).then(async (module)=>{\n                await module.evaluate();\n                cb(undefined, module.namespace);\n            }).catch((e)=>{\n                cb(e instanceof Error ? e : new Error(`Script execution error: ${e}`));\n            });\n        }\n        handleScriptFetch(f, urlObj);\n    }).catch((err)=>{\n        cb(err);\n    });\n}\nfunction loadScriptNode(url, info) {\n    return new Promise((resolve, reject)=>{\n        createScriptNode(url, (error, scriptContext)=>{\n            if (error) {\n                reject(error);\n            } else {\n                var _info_attrs, _info_attrs1;\n                const remoteEntryKey = (info == null ? void 0 : (_info_attrs = info.attrs) == null ? void 0 : _info_attrs['globalName']) || `__FEDERATION_${info == null ? void 0 : (_info_attrs1 = info.attrs) == null ? void 0 : _info_attrs1['name']}:custom__`;\n                const entryExports = globalThis[remoteEntryKey] = scriptContext;\n                resolve(entryExports);\n            }\n        }, info.attrs, info.createScriptHook);\n    });\n}\nasync function loadModule(url, options) {\n    const { fetch: fetch1, vm } = options;\n    const response = await fetch1(url);\n    const code = await response.text();\n    const module = new vm.SourceTextModule(code, {\n        // @ts-ignore\n        importModuleDynamically: async (specifier, script)=>{\n            const resolvedUrl = new URL(specifier, url).href;\n            return loadModule(resolvedUrl, options);\n        }\n    });\n    await module.link(async (specifier)=>{\n        const resolvedUrl = new URL(specifier, url).href;\n        const module = await loadModule(resolvedUrl, options);\n        return module;\n    });\n    return module;\n}\n\nfunction normalizeOptions(enableDefault, defaultOptions, key) {\n    return function(options) {\n        if (options === false) {\n            return false;\n        }\n        if (typeof options === 'undefined') {\n            if (enableDefault) {\n                return defaultOptions;\n            } else {\n                return false;\n            }\n        }\n        if (options === true) {\n            return defaultOptions;\n        }\n        if (options && typeof options === 'object') {\n            return polyfills._extends({}, defaultOptions, options);\n        }\n        throw new Error(`Unexpected type for \\`${key}\\`, expect boolean/undefined/object, got: ${typeof options}`);\n    };\n}\n\nexports.BROWSER_LOG_KEY = BROWSER_LOG_KEY;\nexports.BROWSER_LOG_VALUE = BROWSER_LOG_VALUE;\nexports.ENCODE_NAME_PREFIX = ENCODE_NAME_PREFIX;\nexports.EncodedNameTransformMap = EncodedNameTransformMap;\nexports.FederationModuleManifest = FederationModuleManifest;\nexports.MANIFEST_EXT = MANIFEST_EXT;\nexports.MFModuleType = MFModuleType;\nexports.MFPrefetchCommon = MFPrefetchCommon;\nexports.MODULE_DEVTOOL_IDENTIFIER = MODULE_DEVTOOL_IDENTIFIER;\nexports.ManifestFileName = ManifestFileName;\nexports.NameTransformMap = NameTransformMap;\nexports.NameTransformSymbol = NameTransformSymbol;\nexports.SEPARATOR = SEPARATOR;\nexports.StatsFileName = StatsFileName;\nexports.TEMP_DIR = TEMP_DIR;\nexports.assert = assert;\nexports.composeKeyWithSeparator = composeKeyWithSeparator;\nexports.containerPlugin = ContainerPlugin;\nexports.containerReferencePlugin = ContainerReferencePlugin;\nexports.createLink = createLink;\nexports.createLogger = createLogger;\nexports.createScript = createScript;\nexports.createScriptNode = createScriptNode;\nexports.decodeName = decodeName;\nexports.encodeName = encodeName;\nexports.error = error;\nexports.generateExposeFilename = generateExposeFilename;\nexports.generateShareFilename = generateShareFilename;\nexports.generateSnapshotFromManifest = generateSnapshotFromManifest;\nexports.getProcessEnv = getProcessEnv;\nexports.getResourceUrl = getResourceUrl;\nexports.inferAutoPublicPath = inferAutoPublicPath;\nexports.isBrowserEnv = isBrowserEnv;\nexports.isDebugMode = isDebugMode;\nexports.isManifestProvider = isManifestProvider;\nexports.isRequiredVersion = isRequiredVersion;\nexports.isStaticResourcesEqual = isStaticResourcesEqual;\nexports.loadScript = loadScript;\nexports.loadScriptNode = loadScriptNode;\nexports.logger = logger;\nexports.moduleFederationPlugin = ModuleFederationPlugin;\nexports.normalizeOptions = normalizeOptions;\nexports.parseEntry = parseEntry;\nexports.safeToString = safeToString;\nexports.safeWrapper = safeWrapper;\nexports.sharePlugin = SharePlugin;\nexports.simpleJoinRemoteEntry = simpleJoinRemoteEntry;\nexports.warn = warn;\n\n\n//# sourceURL=webpack://playground/../../node_modules/.pnpm/@module-federation+sdk@0.6.15/node_modules/@module-federation/sdk/dist/index.cjs.js?");

/***/ }),

/***/ "../../node_modules/.pnpm/@module-federation+sdk@0.6.15/node_modules/@module-federation/sdk/dist/polyfills.cjs.js":
/*!************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@module-federation+sdk@0.6.15/node_modules/@module-federation/sdk/dist/polyfills.cjs.js ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nfunction _extends() {\n    _extends = Object.assign || function assign(target) {\n        for(var i = 1; i < arguments.length; i++){\n            var source = arguments[i];\n            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];\n        }\n        return target;\n    };\n    return _extends.apply(this, arguments);\n}\n\nexports._extends = _extends;\n\n\n//# sourceURL=webpack://playground/../../node_modules/.pnpm/@module-federation+sdk@0.6.15/node_modules/@module-federation/sdk/dist/polyfills.cjs.js?");

/***/ }),

/***/ "../../node_modules/.pnpm/@module-federation+webpack-bundler-runtime@0.6.15/node_modules/@module-federation/webpack-bundler-runtime/dist/constant.cjs.js":
/*!***************************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@module-federation+webpack-bundler-runtime@0.6.15/node_modules/@module-federation/webpack-bundler-runtime/dist/constant.cjs.js ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nvar sdk = __webpack_require__(/*! @module-federation/sdk */ \"../../node_modules/.pnpm/@module-federation+sdk@0.6.15/node_modules/@module-federation/sdk/dist/index.cjs.js\");\n\nconst FEDERATION_SUPPORTED_TYPES = [\n    'script'\n];\n\nObject.defineProperty(exports, \"ENCODE_NAME_PREFIX\", ({\n\tenumerable: true,\n\tget: function () { return sdk.ENCODE_NAME_PREFIX; }\n}));\nexports.FEDERATION_SUPPORTED_TYPES = FEDERATION_SUPPORTED_TYPES;\n\n\n//# sourceURL=webpack://playground/../../node_modules/.pnpm/@module-federation+webpack-bundler-runtime@0.6.15/node_modules/@module-federation/webpack-bundler-runtime/dist/constant.cjs.js?");

/***/ }),

/***/ "../../node_modules/.pnpm/@module-federation+webpack-bundler-runtime@0.6.15/node_modules/@module-federation/webpack-bundler-runtime/dist/index.cjs.js":
/*!************************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@module-federation+webpack-bundler-runtime@0.6.15/node_modules/@module-federation/webpack-bundler-runtime/dist/index.cjs.js ***!
  \************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar runtime = __webpack_require__(/*! @module-federation/runtime */ \"../../node_modules/.pnpm/@module-federation+runtime@0.6.15/node_modules/@module-federation/runtime/dist/index.cjs.js\");\nvar constant = __webpack_require__(/*! ./constant.cjs.js */ \"../../node_modules/.pnpm/@module-federation+webpack-bundler-runtime@0.6.15/node_modules/@module-federation/webpack-bundler-runtime/dist/constant.cjs.js\");\nvar sdk = __webpack_require__(/*! @module-federation/sdk */ \"../../node_modules/.pnpm/@module-federation+sdk@0.6.15/node_modules/@module-federation/sdk/dist/index.cjs.js\");\nvar polyfills = __webpack_require__(/*! ./polyfills.cjs.js */ \"../../node_modules/.pnpm/@module-federation+webpack-bundler-runtime@0.6.15/node_modules/@module-federation/webpack-bundler-runtime/dist/polyfills.cjs.js\");\n\nfunction _interopNamespaceDefault(e) {\n  var n = Object.create(null);\n  if (e) {\n    Object.keys(e).forEach(function (k) {\n      if (k !== 'default') {\n        var d = Object.getOwnPropertyDescriptor(e, k);\n        Object.defineProperty(n, k, d.get ? d : {\n          enumerable: true,\n          get: function () { return e[k]; }\n        });\n      }\n    });\n  }\n  n.default = e;\n  return Object.freeze(n);\n}\n\nvar runtime__namespace = /*#__PURE__*/_interopNamespaceDefault(runtime);\n\nfunction attachShareScopeMap(webpackRequire) {\n    if (!webpackRequire.S || webpackRequire.federation.hasAttachShareScopeMap || !webpackRequire.federation.instance || !webpackRequire.federation.instance.shareScopeMap) {\n        return;\n    }\n    webpackRequire.S = webpackRequire.federation.instance.shareScopeMap;\n    webpackRequire.federation.hasAttachShareScopeMap = true;\n}\n\nfunction remotes(options) {\n    const { chunkId, promises, chunkMapping, idToExternalAndNameMapping, webpackRequire, idToRemoteMap } = options;\n    attachShareScopeMap(webpackRequire);\n    if (webpackRequire.o(chunkMapping, chunkId)) {\n        chunkMapping[chunkId].forEach((id)=>{\n            let getScope = webpackRequire.R;\n            if (!getScope) {\n                getScope = [];\n            }\n            const data = idToExternalAndNameMapping[id];\n            const remoteInfos = idToRemoteMap[id];\n            // @ts-ignore seems not work\n            if (getScope.indexOf(data) >= 0) {\n                return;\n            }\n            // @ts-ignore seems not work\n            getScope.push(data);\n            if (data.p) {\n                return promises.push(data.p);\n            }\n            const onError = (error)=>{\n                if (!error) {\n                    error = new Error('Container missing');\n                }\n                if (typeof error.message === 'string') {\n                    error.message += `\\nwhile loading \"${data[1]}\" from ${data[2]}`;\n                }\n                webpackRequire.m[id] = ()=>{\n                    throw error;\n                };\n                data.p = 0;\n            };\n            const handleFunction = (fn, arg1, arg2, d, next, first)=>{\n                try {\n                    const promise = fn(arg1, arg2);\n                    if (promise && promise.then) {\n                        const p = promise.then((result)=>next(result, d), onError);\n                        if (first) {\n                            promises.push(data.p = p);\n                        } else {\n                            return p;\n                        }\n                    } else {\n                        return next(promise, d, first);\n                    }\n                } catch (error) {\n                    onError(error);\n                }\n            };\n            const onExternal = (external, _, first)=>external ? handleFunction(webpackRequire.I, data[0], 0, external, onInitialized, first) : onError();\n            // eslint-disable-next-line no-var\n            var onInitialized = (_, external, first)=>handleFunction(external.get, data[1], getScope, 0, onFactory, first);\n            // eslint-disable-next-line no-var\n            var onFactory = (factory)=>{\n                data.p = 1;\n                webpackRequire.m[id] = (module)=>{\n                    module.exports = factory();\n                };\n            };\n            const onRemoteLoaded = ()=>{\n                try {\n                    const remoteName = sdk.decodeName(remoteInfos[0].name, sdk.ENCODE_NAME_PREFIX);\n                    const remoteModuleName = remoteName + data[1].slice(1);\n                    return webpackRequire.federation.instance.loadRemote(remoteModuleName, {\n                        loadFactory: false,\n                        from: 'build'\n                    });\n                } catch (error) {\n                    onError(error);\n                }\n            };\n            const useRuntimeLoad = remoteInfos.length === 1 && constant.FEDERATION_SUPPORTED_TYPES.includes(remoteInfos[0].externalType) && remoteInfos[0].name;\n            if (useRuntimeLoad) {\n                handleFunction(onRemoteLoaded, data[2], 0, 0, onFactory, 1);\n            } else {\n                handleFunction(webpackRequire, data[2], 0, 0, onExternal, 1);\n            }\n        });\n    }\n}\n\nfunction consumes(options) {\n    const { chunkId, promises, chunkMapping, installedModules, moduleToHandlerMapping, webpackRequire } = options;\n    attachShareScopeMap(webpackRequire);\n    if (webpackRequire.o(chunkMapping, chunkId)) {\n        chunkMapping[chunkId].forEach((id)=>{\n            if (webpackRequire.o(installedModules, id)) {\n                return promises.push(installedModules[id]);\n            }\n            const onFactory = (factory)=>{\n                installedModules[id] = 0;\n                webpackRequire.m[id] = (module)=>{\n                    delete webpackRequire.c[id];\n                    module.exports = factory();\n                };\n            };\n            const onError = (error)=>{\n                delete installedModules[id];\n                webpackRequire.m[id] = (module)=>{\n                    delete webpackRequire.c[id];\n                    throw error;\n                };\n            };\n            try {\n                const federationInstance = webpackRequire.federation.instance;\n                if (!federationInstance) {\n                    throw new Error('Federation instance not found!');\n                }\n                const { shareKey, getter, shareInfo } = moduleToHandlerMapping[id];\n                const promise = federationInstance.loadShare(shareKey, {\n                    customShareInfo: shareInfo\n                }).then((factory)=>{\n                    if (factory === false) {\n                        return getter();\n                    }\n                    return factory;\n                });\n                if (promise.then) {\n                    promises.push(installedModules[id] = promise.then(onFactory).catch(onError));\n                } else {\n                    // @ts-ignore maintain previous logic\n                    onFactory(promise);\n                }\n            } catch (e) {\n                onError(e);\n            }\n        });\n    }\n}\n\nfunction initializeSharing({ shareScopeName, webpackRequire, initPromises, initTokens, initScope }) {\n    if (!initScope) initScope = [];\n    const mfInstance = webpackRequire.federation.instance;\n    // handling circular init calls\n    var initToken = initTokens[shareScopeName];\n    if (!initToken) initToken = initTokens[shareScopeName] = {\n        from: mfInstance.name\n    };\n    if (initScope.indexOf(initToken) >= 0) return;\n    initScope.push(initToken);\n    const promise = initPromises[shareScopeName];\n    if (promise) return promise;\n    var warn = (msg)=>typeof console !== 'undefined' && console.warn && console.warn(msg);\n    var initExternal = (id)=>{\n        var handleError = (err)=>warn('Initialization of sharing external failed: ' + err);\n        try {\n            var module = webpackRequire(id);\n            if (!module) return;\n            var initFn = (module)=>module && module.init && // @ts-ignore compat legacy mf shared behavior\n                module.init(webpackRequire.S[shareScopeName], initScope);\n            if (module.then) return promises.push(module.then(initFn, handleError));\n            var initResult = initFn(module);\n            // @ts-ignore\n            if (initResult && typeof initResult !== 'boolean' && initResult.then) // @ts-ignore\n            return promises.push(initResult['catch'](handleError));\n        } catch (err) {\n            handleError(err);\n        }\n    };\n    const promises = mfInstance.initializeSharing(shareScopeName, {\n        strategy: mfInstance.options.shareStrategy,\n        initScope,\n        from: 'build'\n    });\n    attachShareScopeMap(webpackRequire);\n    const bundlerRuntimeRemotesOptions = webpackRequire.federation.bundlerRuntimeOptions.remotes;\n    if (bundlerRuntimeRemotesOptions) {\n        Object.keys(bundlerRuntimeRemotesOptions.idToRemoteMap).forEach((moduleId)=>{\n            const info = bundlerRuntimeRemotesOptions.idToRemoteMap[moduleId];\n            const externalModuleId = bundlerRuntimeRemotesOptions.idToExternalAndNameMapping[moduleId][2];\n            if (info.length > 1) {\n                initExternal(externalModuleId);\n            } else if (info.length === 1) {\n                const remoteInfo = info[0];\n                if (!constant.FEDERATION_SUPPORTED_TYPES.includes(remoteInfo.externalType)) {\n                    initExternal(externalModuleId);\n                }\n            }\n        });\n    }\n    if (!promises.length) {\n        return initPromises[shareScopeName] = true;\n    }\n    return initPromises[shareScopeName] = Promise.all(promises).then(()=>initPromises[shareScopeName] = true);\n}\n\nfunction handleInitialConsumes(options) {\n    const { moduleId, moduleToHandlerMapping, webpackRequire } = options;\n    const federationInstance = webpackRequire.federation.instance;\n    if (!federationInstance) {\n        throw new Error('Federation instance not found!');\n    }\n    const { shareKey, shareInfo } = moduleToHandlerMapping[moduleId];\n    try {\n        return federationInstance.loadShareSync(shareKey, {\n            customShareInfo: shareInfo\n        });\n    } catch (err) {\n        console.error('loadShareSync failed! The function should not be called unless you set \"eager:true\". If you do not set it, and encounter this issue, you can check whether an async boundary is implemented.');\n        console.error('The original error message is as follows: ');\n        throw err;\n    }\n}\nfunction installInitialConsumes(options) {\n    const { moduleToHandlerMapping, webpackRequire, installedModules, initialConsumes } = options;\n    initialConsumes.forEach((id)=>{\n        webpackRequire.m[id] = (module)=>{\n            // Handle scenario when module is used synchronously\n            installedModules[id] = 0;\n            delete webpackRequire.c[id];\n            const factory = handleInitialConsumes({\n                moduleId: id,\n                moduleToHandlerMapping,\n                webpackRequire\n            });\n            if (typeof factory !== 'function') {\n                throw new Error(`Shared module is not available for eager consumption: ${id}`);\n            }\n            module.exports = factory();\n        };\n    });\n}\n\nfunction initContainerEntry(options) {\n    const { webpackRequire, shareScope, initScope, shareScopeKey, remoteEntryInitOptions } = options;\n    if (!webpackRequire.S) return;\n    if (!webpackRequire.federation || !webpackRequire.federation.instance || !webpackRequire.federation.initOptions) return;\n    const federationInstance = webpackRequire.federation.instance;\n    var name = shareScopeKey || 'default';\n    federationInstance.initOptions(polyfills._extends({\n        name: webpackRequire.federation.initOptions.name,\n        remotes: []\n    }, remoteEntryInitOptions));\n    federationInstance.initShareScopeMap(name, shareScope, {\n        hostShareScopeMap: (remoteEntryInitOptions == null ? void 0 : remoteEntryInitOptions.shareScopeMap) || {}\n    });\n    if (webpackRequire.federation.attachShareScopeMap) {\n        webpackRequire.federation.attachShareScopeMap(webpackRequire);\n    }\n    if (typeof webpackRequire.federation.prefetch === 'function') {\n        webpackRequire.federation.prefetch();\n    }\n    // @ts-ignore\n    return webpackRequire.I(name, initScope);\n}\n\nconst federation = {\n    runtime: runtime__namespace,\n    instance: undefined,\n    initOptions: undefined,\n    bundlerRuntime: {\n        remotes,\n        consumes,\n        I: initializeSharing,\n        S: {},\n        installInitialConsumes,\n        initContainerEntry\n    },\n    attachShareScopeMap,\n    bundlerRuntimeOptions: {}\n};\n\nmodule.exports = federation;\n\n\n//# sourceURL=webpack://playground/../../node_modules/.pnpm/@module-federation+webpack-bundler-runtime@0.6.15/node_modules/@module-federation/webpack-bundler-runtime/dist/index.cjs.js?");

/***/ }),

/***/ "../../node_modules/.pnpm/@module-federation+webpack-bundler-runtime@0.6.15/node_modules/@module-federation/webpack-bundler-runtime/dist/polyfills.cjs.js":
/*!****************************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@module-federation+webpack-bundler-runtime@0.6.15/node_modules/@module-federation/webpack-bundler-runtime/dist/polyfills.cjs.js ***!
  \****************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nfunction _extends() {\n    _extends = Object.assign || function assign(target) {\n        for(var i = 1; i < arguments.length; i++){\n            var source = arguments[i];\n            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];\n        }\n        return target;\n    };\n    return _extends.apply(this, arguments);\n}\n\nexports._extends = _extends;\n\n\n//# sourceURL=webpack://playground/../../node_modules/.pnpm/@module-federation+webpack-bundler-runtime@0.6.15/node_modules/@module-federation/webpack-bundler-runtime/dist/polyfills.cjs.js?");

/***/ }),

/***/ "webpack/container/entry/polaris_app":
/*!***********************!*\
  !*** container entry ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var moduleMap = {\n\t\"./anyModule\": () => {\n\t\treturn Promise.all(/*! __federation_expose_anyModule */[__webpack_require__.e(\"vendors\"), __webpack_require__.e(\"webpack_sharing_consume_default_react_react-_f0d8\"), __webpack_require__.e(\"__federation_expose_anyModule\")]).then(() => (() => ((__webpack_require__(/*! ./modules/anyModule.tsx */ \"./modules/anyModule.tsx\")))));\n\t}\n};\nvar get = (module, getScope) => {\n\t__webpack_require__.R = getScope;\n\tgetScope = (\n\t\t__webpack_require__.o(moduleMap, module)\n\t\t\t? moduleMap[module]()\n\t\t\t: Promise.resolve().then(() => {\n\t\t\t\tthrow new Error('Module \"' + module + '\" does not exist in container.');\n\t\t\t})\n\t);\n\t__webpack_require__.R = undefined;\n\treturn getScope;\n};\nvar init = (shareScope, initScope, remoteEntryInitOptions) => {\n\treturn __webpack_require__.federation.bundlerRuntime.initContainerEntry({\twebpackRequire: __webpack_require__,\n\t\tshareScope: shareScope,\n\t\tinitScope: initScope,\n\t\tremoteEntryInitOptions: remoteEntryInitOptions,\n\t\tshareScopeKey: \"default\"\n\t})\n};\n\n__webpack_require__(/*! ./node_modules/.federation/entry.5887b7e08de1c0b7b3d2dc801b1f1886.js */ \"./node_modules/.federation/entry.5887b7e08de1c0b7b3d2dc801b1f1886.js\")\n\n// This exports getters to disallow modifications\n__webpack_require__.d(exports, {\n\tget: () => (get),\n\tinit: () => (init)\n});\n\n//# sourceURL=webpack://playground/container_entry?");

/***/ }),

/***/ "../../node_modules/.pnpm/isomorphic-rslog@0.0.4/node_modules/isomorphic-rslog/dist/browser/index.cjs":
/*!************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/isomorphic-rslog@0.0.4/node_modules/isomorphic-rslog/dist/browser/index.cjs ***!
  \************************************************************************************************************/
/***/ ((module) => {

eval("\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, \"__esModule\", { value: true }), mod);\n\n// src/browser/index.ts\nvar browser_exports = {};\n__export(browser_exports, {\n  createLogger: () => createLogger2,\n  logger: () => logger\n});\nmodule.exports = __toCommonJS(browser_exports);\n\n// src/browser/color.ts\nvar supportsSubstitutions = void 0;\nvar supportColor = () => {\n  if (typeof supportsSubstitutions !== \"undefined\") {\n    return supportsSubstitutions;\n  }\n  try {\n    console.log(\"%c\", \"color:\");\n    supportsSubstitutions = true;\n  } catch (e) {\n    supportsSubstitutions = false;\n  }\n  return supportsSubstitutions;\n};\nvar ansiToCss = {\n  \"bold\": \"font-weight: bold;\",\n  \"red\": \"color: red;\",\n  \"green\": \"color: green;\",\n  \"yellow\": \"color: yellow;\",\n  \"magenta\": \"color: magenta;\",\n  \"cyan\": \"color: cyan;\",\n  \"gray\": \"color: gray;\"\n};\nvar formatter = (key) => supportColor() ? (input) => {\n  if (Array.isArray(input)) {\n    const [label, style] = input;\n    return [`%c${label.replace(\"%c\", \"\")}`, style ? `${ansiToCss[key]}${style}` : `${ansiToCss[key] || \"\"}`];\n  }\n  return [`%c${String(input).replace(\"%c\", \"\")}`, ansiToCss[key] || \"\"];\n} : (input) => [String(input)];\nvar bold = formatter(\"bold\");\nvar red = formatter(\"red\");\nvar green = formatter(\"green\");\nvar yellow = formatter(\"yellow\");\nvar magenta = formatter(\"magenta\");\nvar cyan = formatter(\"cyan\");\nvar gray = formatter(\"gray\");\n\n// src/browser/utils.ts\nfunction getLabel(type, logType, labels) {\n  let label = [\"\"];\n  if (\"label\" in logType) {\n    label = [labels[type] || logType.label || \"\"];\n    label = bold(logType.color ? logType.color(label) : label[0]);\n  }\n  label = label.filter(Boolean);\n  return label;\n}\nfunction finalLog(label, text, args, message) {\n  if (label.length) {\n    if (Array.isArray(message)) {\n      console.log(...label, ...message);\n    } else {\n      console.log(...label, text);\n    }\n  } else {\n    Array.isArray(message) ? console.log(...message) : console.log(text, ...args);\n  }\n}\n\n// src/constants.ts\nvar LOG_LEVEL = {\n  error: 0,\n  warn: 1,\n  info: 2,\n  log: 3,\n  verbose: 4\n};\n\n// src/utils.ts\nvar errorStackRegExp = /at\\s.*:\\d+:\\d+[\\s\\)]*$/;\nvar anonymousErrorStackRegExp = /at\\s.*\\(<anonymous>\\)$/;\nvar isErrorStackMessage = (message) => errorStackRegExp.test(message) || anonymousErrorStackRegExp.test(message);\n\n// src/createLogger.ts\nvar createLogger = (options = {}, { getLabel: getLabel2, handleError, finalLog: finalLog2, greet, LOG_TYPES: LOG_TYPES2 }) => {\n  let maxLevel = options.level || \"log\";\n  let customLabels = options.labels || {};\n  let log = (type, message, ...args) => {\n    if (LOG_LEVEL[LOG_TYPES2[type].level] > LOG_LEVEL[maxLevel]) {\n      return;\n    }\n    if (message === void 0 || message === null) {\n      return console.log();\n    }\n    let logType = LOG_TYPES2[type];\n    let text = \"\";\n    const label = getLabel2(type, logType, customLabels);\n    if (message instanceof Error) {\n      if (message.stack) {\n        let [name, ...rest] = message.stack.split(\"\\n\");\n        if (name.startsWith(\"Error: \")) {\n          name = name.slice(7);\n        }\n        text = `${name}\n${handleError(rest.join(\"\\n\"))}`;\n      } else {\n        text = message.message;\n      }\n    } else if (logType.level === \"error\" && typeof message === \"string\") {\n      let lines = message.split(\"\\n\");\n      text = lines.map((line) => isErrorStackMessage(line) ? handleError(line) : line).join(\"\\n\");\n    } else {\n      text = `${message}`;\n    }\n    finalLog2(label, text, args, message);\n  };\n  let logger2 = {\n    // greet\n    greet: (message) => log(\"log\", greet(message))\n  };\n  Object.keys(LOG_TYPES2).forEach((key) => {\n    logger2[key] = (...args) => log(key, ...args);\n  });\n  Object.defineProperty(logger2, \"level\", {\n    get: () => maxLevel,\n    set(val) {\n      maxLevel = val;\n    }\n  });\n  Object.defineProperty(logger2, \"labels\", {\n    get: () => customLabels,\n    set(val) {\n      customLabels = val;\n    }\n  });\n  logger2.override = (customLogger) => {\n    Object.assign(logger2, customLogger);\n  };\n  return logger2;\n};\n\n// src/browser/gradient.ts\nvar startColor = [189, 255, 243];\nvar endColor = [74, 194, 154];\nvar isWord = (char) => !/[\\s\\n]/.test(char);\nfunction gradient(message) {\n  if (!supportColor()) {\n    return [message];\n  }\n  const chars = [...message];\n  const words = chars.filter(isWord);\n  const steps = words.length - 1;\n  if (steps === 0) {\n    console.log(`%c${message}`, `color: rgb(${startColor.join(\",\")}); font-weight: bold;`);\n    return [message];\n  }\n  let output = \"\";\n  let styles = [];\n  chars.forEach((char) => {\n    if (isWord(char)) {\n      const progress = words.indexOf(char) / steps;\n      const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * progress);\n      const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * progress);\n      const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * progress);\n      output += `%c${char}`;\n      styles.push(`color: rgb(${r},${g},${b}); font-weight: bold;`);\n    } else {\n      output += char;\n    }\n  });\n  return [output, ...styles];\n}\n\n// src/browser/constants.ts\nvar LOG_TYPES = {\n  // Level error\n  error: {\n    label: \"error\",\n    level: \"error\",\n    color: red\n  },\n  // Level warn\n  warn: {\n    label: \"warn\",\n    level: \"warn\",\n    color: yellow\n  },\n  // Level info\n  info: {\n    label: \"info\",\n    level: \"info\",\n    color: cyan\n  },\n  start: {\n    label: \"start\",\n    level: \"info\",\n    color: cyan\n  },\n  ready: {\n    label: \"ready\",\n    level: \"info\",\n    color: green\n  },\n  success: {\n    label: \"success\",\n    level: \"info\",\n    color: green\n  },\n  // Level log\n  log: {\n    level: \"log\"\n  },\n  // Level debug\n  debug: {\n    label: \"debug\",\n    level: \"verbose\",\n    color: magenta\n  }\n};\n\n// src/browser/createLogger.ts\nfunction createLogger2(options = {}) {\n  return createLogger(options, {\n    handleError: (msg) => msg,\n    getLabel,\n    gradient,\n    finalLog,\n    LOG_TYPES,\n    greet: (msg) => {\n      return gradient(msg);\n    }\n  });\n}\n\n// src/browser/index.ts\nvar logger = createLogger2();\n// Annotate the CommonJS export names for ESM import in node:\n0 && (0);\n\n\n//# sourceURL=webpack://playground/../../node_modules/.pnpm/isomorphic-rslog@0.0.4/node_modules/isomorphic-rslog/dist/browser/index.cjs?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/federation runtime */
/******/ 	(() => {
/******/ 		if(!__webpack_require__.federation){
/******/ 			__webpack_require__.federation = {
/******/ 				initOptions: {"name":"polaris_app","remotes":[],"shareStrategy":"version-first"},
/******/ 				chunkMatcher: function(chunkId) {return /^(__federation_expose_anyModule|polaris_app|vendors)$/.test(chunkId)},
/******/ 				rootOutputDir: "",
/******/ 				initialConsumes: undefined,
/******/ 				bundlerRuntimeOptions: {}
/******/ 			};
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + {"vendors":"c6d3a8f68627b22f0cb5","__federation_expose_anyModule":"4601572d579db91a8ee8"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("polaris_app." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("f29dc59939b3ad875b05")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "playground:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	(() => {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = (name, initScope) => {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = (msg) => {
/******/ 				if (typeof console !== "undefined" && console.warn) console.warn(msg);
/******/ 			};
/******/ 			var uniqueName = "playground";
/******/ 			var register = (name, version, factory, eager) => {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			var initExternal = (id) => {
/******/ 				var handleError = (err) => (warn("Initialization of sharing external failed: " + err));
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = (module) => (module && module.init && module.init(__webpack_require__.S[name], initScope))
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 				case "default": {
/******/ 					register("react-dom", "18.3.1", () => (Promise.all([__webpack_require__.e("vendors"), __webpack_require__.e("webpack_sharing_consume_default_react_react-_8b07")]).then(() => (() => (__webpack_require__(/*! ../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js */ "../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js"))))));
/******/ 					register("react", "18.3.1", () => (__webpack_require__.e("vendors").then(() => (() => (__webpack_require__(/*! ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js */ "../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"))))));
/******/ 				}
/******/ 				break;
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	(() => {
/******/ 		__webpack_require__.federation.initOptions.shared = {	"react-dom": [{	version: "18.3.1",
/******/ 				get: () => (Promise.all([__webpack_require__.e("vendors"), __webpack_require__.e("webpack_sharing_consume_default_react_react-_8b07")]).then(() => (() => (__webpack_require__(/*! ../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js */ "../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js"))))),
/******/ 				scope: ["default"],
/******/ 				shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"react": [{	version: "18.3.1",
/******/ 				get: () => (__webpack_require__.e("vendors").then(() => (() => (__webpack_require__(/*! ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js */ "../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"))))),
/******/ 				scope: ["default"],
/******/ 				shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],}
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = (name, initScope) => {
/******/ 			return __webpack_require__.federation.bundlerRuntime.I({	shareScopeName: name,
/******/ 				webpackRequire: __webpack_require__,
/******/ 				initPromises: initPromises,
/******/ 				initTokens: initTokens,
/******/ 				initScope: initScope,
/******/ 			})
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				// inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results).then(function () {});
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								}
/******/ 								return setStatus("ready").then(function () {
/******/ 									return updatedModules;
/******/ 								});
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/consumes */
/******/ 	(() => {
/******/ 		var installedModules = {};
/******/ 		var moduleToHandlerMapping = {
/******/ 			"webpack/sharing/consume/default/react/react?f0d8": {
/******/ 				getter: () => (__webpack_require__.e("vendors").then(() => (() => (__webpack_require__(/*! react */ "../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"))))),
/******/ 				shareInfo: {
/******/ 					shareConfig: {
/******/ 					  "fixedDependencies": false,
/******/ 					  "requiredVersion": false,
/******/ 					  "strictVersion": false,
/******/ 					  "singleton": true,
/******/ 					  "eager": false
/******/ 					},
/******/ 					scope: ["default"],
/******/ 				},
/******/ 				shareKey: "react",
/******/ 			},
/******/ 			"webpack/sharing/consume/default/react/react?8b07": {
/******/ 				getter: () => (__webpack_require__.e("vendors").then(() => (() => (__webpack_require__(/*! react */ "../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js"))))),
/******/ 				shareInfo: {
/******/ 					shareConfig: {
/******/ 					  "fixedDependencies": false,
/******/ 					  "requiredVersion": "^18.3.1",
/******/ 					  "strictVersion": false,
/******/ 					  "singleton": true,
/******/ 					  "eager": false
/******/ 					},
/******/ 					scope: ["default"],
/******/ 				},
/******/ 				shareKey: "react",
/******/ 			}
/******/ 		};
/******/ 		// no consumes in initial chunks
/******/ 		var chunkMapping = {
/******/ 			"webpack_sharing_consume_default_react_react-_f0d8": [
/******/ 				"webpack/sharing/consume/default/react/react?f0d8"
/******/ 			],
/******/ 			"webpack_sharing_consume_default_react_react-_8b07": [
/******/ 				"webpack/sharing/consume/default/react/react?8b07"
/******/ 			]
/******/ 		};
/******/ 		__webpack_require__.f.consumes = (chunkId, promises) => {
/******/ 			__webpack_require__.federation.bundlerRuntime.consumes({
/******/ 			chunkMapping: chunkMapping,
/******/ 			installedModules: installedModules,
/******/ 			chunkId: chunkId,
/******/ 			moduleToHandlerMapping: moduleToHandlerMapping,
/******/ 			promises: promises,
/******/ 			webpackRequire:__webpack_require__
/******/ 			});
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"polaris_app": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(/^(__federation_expose_anyModule|polaris_app|vendors)$/.test(chunkId)) {
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdateplayground"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result = newModuleFactory
/******/ 						? getAffectedModuleEffects(moduleId)
/******/ 						: {
/******/ 								type: "disposed",
/******/ 								moduleId: moduleId
/******/ 							};
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err1) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err1,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err1);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkplayground"] = self["webpackChunkplayground"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("webpack/container/entry/polaris_app");
/******/ 	polaris_app = __webpack_exports__;
/******/ 	
/******/ })()
;