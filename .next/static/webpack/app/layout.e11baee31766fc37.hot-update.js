"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/components/Home/SideNav.js":
/*!****************************************!*\
  !*** ./src/components/Home/SideNav.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _barrel_optimize_names_Divider_List_ListItem_ListItemButton_ListItemIcon_ListItemText_mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Divider,List,ListItem,ListItemButton,ListItemIcon,ListItemText!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/List/List.js\");\n/* harmony import */ var _barrel_optimize_names_Divider_List_ListItem_ListItemButton_ListItemIcon_ListItemText_mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Divider,List,ListItem,ListItemButton,ListItemIcon,ListItemText!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/ListItem/ListItem.js\");\n/* harmony import */ var _barrel_optimize_names_Divider_List_ListItem_ListItemButton_ListItemIcon_ListItemText_mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Divider,List,ListItem,ListItemButton,ListItemIcon,ListItemText!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/ListItemButton/ListItemButton.js\");\n/* harmony import */ var _barrel_optimize_names_Divider_List_ListItem_ListItemButton_ListItemIcon_ListItemText_mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=Divider,List,ListItem,ListItemButton,ListItemIcon,ListItemText!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/ListItemIcon/ListItemIcon.js\");\n/* harmony import */ var _barrel_optimize_names_Divider_List_ListItem_ListItemButton_ListItemIcon_ListItemText_mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! __barrel_optimize__?names=Divider,List,ListItem,ListItemButton,ListItemIcon,ListItemText!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/ListItemText/ListItemText.js\");\n/* harmony import */ var _barrel_optimize_names_Divider_List_ListItem_ListItemButton_ListItemIcon_ListItemText_mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! __barrel_optimize__?names=Divider,List,ListItem,ListItemButton,ListItemIcon,ListItemText!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Divider/Divider.js\");\n/* harmony import */ var _mui_icons_material_AccountTree__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material/AccountTree */ \"(app-pages-browser)/./node_modules/@mui/icons-material/AccountTree.js\");\n/* harmony import */ var _mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/icons-material/Home */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Home.js\");\n/* harmony import */ var _mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/icons-material/Add */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Add.js\");\n/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/icons-material/Edit */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Edit.js\");\n/* harmony import */ var _mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/icons-material/Delete */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Delete.js\");\n/* harmony import */ var _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/Settings */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Settings.js\");\n/* harmony import */ var _mui_icons_material_Support__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Support */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Support.js\");\n/* harmony import */ var _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Logout */ \"(app-pages-browser)/./node_modules/@mui/icons-material/Logout.js\");\n/* harmony import */ var _AddFlow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AddFlow */ \"(app-pages-browser)/./src/components/Home/AddFlow.js\");\n/* harmony import */ var _app_flow_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/flow-provider */ \"(app-pages-browser)/./src/app/flow-provider.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst PLACEHOLDER_LINKS = [\n    {\n        text: \"Settings\",\n        icon: _mui_icons_material_Settings__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n    },\n    {\n        text: \"Support\",\n        icon: _mui_icons_material_Support__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    },\n    {\n        text: \"Logout\",\n        icon: _mui_icons_material_Logout__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    }\n];\nfunction SideNav() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [alertOpen, setAlertOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)();\n    const { refresh, setRefresh } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_app_flow_provider__WEBPACK_IMPORTED_MODULE_5__.FlowContext);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/api/flows\").then((res)=>res.json()).then((res)=>setData(res.data));\n    }, [\n        refresh\n    ]);\n    const handleClose = ()=>{\n        setOpen(false);\n    };\n    const createQueryString = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((name, value)=>{\n        const params = new URLSearchParams(searchParams);\n        params.set(name, value);\n        return params.toString();\n    }, [\n        searchParams\n    ]);\n    const handleAddFlow = async (name, description)=>{\n        if (name.trim() === \"\") {\n            setAlertOpen(true);\n            return;\n        }\n        // try {\n        //   const body = {\n        //     name: name,\n        //     description: description,\n        //   };\n        //   const response = await fetch(\"/api/flows/create\", {\n        //     method: \"POST\",\n        //     body: JSON.stringify(body),\n        //   });\n        //   if (!response.ok) {\n        //     throw new Error(`HTTP error! status: ${response.status}`);\n        //   }\n        //   const result = await response.json();\n        // } catch (error) {\n        //   console.log(error);\n        // }\n        router.push(\"/flows/create?\" + createQueryString(\"name\", name) + \"&\" + createQueryString(\"description\", description));\n        setOpen(false);\n    };\n    const handleDeleteFlow = async (id)=>{\n        try {\n            await fetch(\"/api/flows/\" + id, {\n                method: \"DELETE\"\n            }).then((res)=>res.json()).then(router.push(\"/\"));\n        } catch (error) {\n            console.log(error);\n        }\n        router.push(\"/\");\n        setRefresh({});\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Divider_List_ListItem_ListItemButton_ListItemIcon_ListItemText_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Divider_List_ListItem_ListItemButton_ListItemIcon_ListItemText_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        disablePadding: true,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Divider_List_ListItem_ListItemButton_ListItemIcon_ListItemText_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                component: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),\n                                href: \"/\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Divider_List_ListItem_ListItemButton_ListItemIcon_ListItemText_mui_material__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Home__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/Home/SideNav.js\",\n                                            lineNumber: 110,\n                                            columnNumber: 15\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/Home/SideNav.js\",\n                                        lineNumber: 109,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Divider_List_ListItem_ListItemButton_ListItemIcon_ListItemText_mui_material__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                                        primary: \"Flows\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/Home/SideNav.js\",\n                                        lineNumber: 112,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/Home/SideNav.js\",\n                                lineNumber: 108,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Divider_List_ListItem_ListItemButton_ListItemIcon_ListItemText_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                onClick: ()=>{\n                                    setOpen(true);\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Add__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/Home/SideNav.js\",\n                                    lineNumber: 119,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/Home/SideNav.js\",\n                                lineNumber: 114,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, \"/\", true, {\n                        fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/Home/SideNav.js\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AddFlow__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        open: open,\n                        handleClose: handleClose,\n                        alertOpen: alertOpen,\n                        handleAddFlow: handleAddFlow\n                    }, void 0, false, {\n                        fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/Home/SideNav.js\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, this),\n                    data.map((param)=>{\n                        let { name, id } = param;\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Divider_List_ListItem_ListItemButton_ListItemIcon_ListItemText_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            disablePadding: true,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Divider_List_ListItem_ListItemButton_ListItemIcon_ListItemText_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                    component: (next_link__WEBPACK_IMPORTED_MODULE_2___default()),\n                                    href: \"/flows/\" + id,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Divider_List_ListItem_ListItemButton_ListItemIcon_ListItemText_mui_material__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_AccountTree__WEBPACK_IMPORTED_MODULE_16__[\"default\"], {}, void 0, false, {\n                                                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/Home/SideNav.js\",\n                                                lineNumber: 132,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/Home/SideNav.js\",\n                                            lineNumber: 131,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Divider_List_ListItem_ListItemButton_ListItemIcon_ListItemText_mui_material__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                                            primary: name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/Home/SideNav.js\",\n                                            lineNumber: 134,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/Home/SideNav.js\",\n                                    lineNumber: 130,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Divider_List_ListItem_ListItemButton_ListItemIcon_ListItemText_mui_material__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_17__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/Home/SideNav.js\",\n                                            lineNumber: 137,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Delete__WEBPACK_IMPORTED_MODULE_18__[\"default\"], {\n                                            onClick: ()=>handleDeleteFlow(id)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/Home/SideNav.js\",\n                                            lineNumber: 138,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/Home/SideNav.js\",\n                                    lineNumber: 136,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, id, true, {\n                            fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/Home/SideNav.js\",\n                            lineNumber: 129,\n                            columnNumber: 11\n                        }, this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/Home/SideNav.js\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Divider_List_ListItem_ListItemButton_ListItemIcon_ListItemText_mui_material__WEBPACK_IMPORTED_MODULE_19__[\"default\"], {\n                sx: {\n                    mt: \"auto\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/Home/SideNav.js\",\n                lineNumber: 143,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Divider_List_ListItem_ListItemButton_ListItemIcon_ListItemText_mui_material__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                children: PLACEHOLDER_LINKS.map((param)=>{\n                    let { text, icon: Icon } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Divider_List_ListItem_ListItemButton_ListItemIcon_ListItemText_mui_material__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                        disablePadding: true,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Divider_List_ListItem_ListItemButton_ListItemIcon_ListItemText_mui_material__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Divider_List_ListItem_ListItemButton_ListItemIcon_ListItemText_mui_material__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {}, void 0, false, {\n                                        fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/Home/SideNav.js\",\n                                        lineNumber: 149,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/Home/SideNav.js\",\n                                    lineNumber: 148,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Divider_List_ListItem_ListItemButton_ListItemIcon_ListItemText_mui_material__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n                                    primary: text\n                                }, void 0, false, {\n                                    fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/Home/SideNav.js\",\n                                    lineNumber: 151,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/Home/SideNav.js\",\n                            lineNumber: 147,\n                            columnNumber: 13\n                        }, this)\n                    }, text, false, {\n                        fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/Home/SideNav.js\",\n                        lineNumber: 146,\n                        columnNumber: 11\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/Home/SideNav.js\",\n                lineNumber: 144,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/yangyueHelen/Desktop/material-ui-nextjs/src/components/Home/SideNav.js\",\n        lineNumber: 105,\n        columnNumber: 5\n    }, this);\n}\n_s(SideNav, \"jqg3y4Oxr4WAVuNbaRZBae2nmgY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams\n    ];\n});\n_c = SideNav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideNav);\nvar _c;\n$RefreshReg$(_c, \"SideNav\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0hvbWUvU2lkZU5hdi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUM0RTtBQUMvQztBQUNnQztBQVF0QztBQUN1QztBQUNkO0FBQ0Y7QUFDRTtBQUNJO0FBQ0k7QUFDRjtBQUNGO0FBQ3BCO0FBQ2tCO0FBRWxELE1BQU13QixvQkFBb0I7SUFDeEI7UUFBRUMsTUFBTTtRQUFZQyxNQUFNUCxvRUFBWUE7SUFBQztJQUN2QztRQUFFTSxNQUFNO1FBQVdDLE1BQU1OLG1FQUFXQTtJQUFDO0lBQ3JDO1FBQUVLLE1BQU07UUFBVUMsTUFBTUwsa0VBQVVBO0lBQUM7Q0FDcEM7QUFFRCxTQUFTTTs7SUFDUCxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBRzVCLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkMsTUFBTSxDQUFDNkIsTUFBTUMsUUFBUSxHQUFHOUIsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDK0IsV0FBV0MsYUFBYSxHQUFHaEMsK0NBQVFBLENBQUM7SUFDM0MsTUFBTWlDLFNBQVM1QiwwREFBU0E7SUFDeEIsTUFBTTZCLGVBQWU1QixnRUFBZUE7SUFDcEMsTUFBTSxFQUFFNkIsT0FBTyxFQUFFQyxVQUFVLEVBQUUsR0FBR2pDLGlEQUFVQSxDQUFDbUIsMkRBQVdBO0lBRXREckIsZ0RBQVNBLENBQUM7UUFDUm9DLE1BQU0sY0FDSEMsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUksSUFDdEJGLElBQUksQ0FBQyxDQUFDQyxNQUFRWCxRQUFRVyxJQUFJWixJQUFJO0lBQ25DLEdBQUc7UUFBQ1E7S0FBUTtJQUVaLE1BQU1NLGNBQWM7UUFDbEJYLFFBQVE7SUFDVjtJQUVBLE1BQU1ZLG9CQUFvQnhDLGtEQUFXQSxDQUNuQyxDQUFDeUMsTUFBTUM7UUFDTCxNQUFNQyxTQUFTLElBQUlDLGdCQUFnQlo7UUFDbkNXLE9BQU9FLEdBQUcsQ0FBQ0osTUFBTUM7UUFF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UUFDSEMsNERBQWVBOzs7S0FMN0JvQjtBQWtJVCwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ib21lL1NpZGVOYXYuanM/NTk3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQge1xuICBMaXN0LFxuICBMaXN0SXRlbSxcbiAgTGlzdEl0ZW1CdXR0b24sXG4gIExpc3RJdGVtVGV4dCxcbiAgTGlzdEl0ZW1JY29uLFxuICBEaXZpZGVyLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IEFjY291bnRUcmVlSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9BY2NvdW50VHJlZVwiO1xuaW1wb3J0IEhvbWVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0hvbWVcIjtcbmltcG9ydCBBZGRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0FkZFwiO1xuaW1wb3J0IEVkaXRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0VkaXRcIjtcbmltcG9ydCBEZWxldGVJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0RlbGV0ZVwiO1xuaW1wb3J0IFNldHRpbmdzSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9TZXR0aW5nc1wiO1xuaW1wb3J0IFN1cHBvcnRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL1N1cHBvcnRcIjtcbmltcG9ydCBMb2dvdXRJY29uIGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsL0xvZ291dFwiO1xuaW1wb3J0IEFkZEZsb3cgZnJvbSBcIi4vQWRkRmxvd1wiO1xuaW1wb3J0IHsgRmxvd0NvbnRleHQgfSBmcm9tIFwiQC9hcHAvZmxvdy1wcm92aWRlclwiO1xuXG5jb25zdCBQTEFDRUhPTERFUl9MSU5LUyA9IFtcbiAgeyB0ZXh0OiBcIlNldHRpbmdzXCIsIGljb246IFNldHRpbmdzSWNvbiB9LFxuICB7IHRleHQ6IFwiU3VwcG9ydFwiLCBpY29uOiBTdXBwb3J0SWNvbiB9LFxuICB7IHRleHQ6IFwiTG9nb3V0XCIsIGljb246IExvZ291dEljb24gfSxcbl07XG5cbmZ1bmN0aW9uIFNpZGVOYXYoKSB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbYWxlcnRPcGVuLCBzZXRBbGVydE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU2VhcmNoUGFyYW1zKCk7XG4gIGNvbnN0IHsgcmVmcmVzaCwgc2V0UmVmcmVzaCB9ID0gdXNlQ29udGV4dChGbG93Q29udGV4dCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChcIi9hcGkvZmxvd3NcIilcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAudGhlbigocmVzKSA9PiBzZXREYXRhKHJlcy5kYXRhKSk7XG4gIH0sIFtyZWZyZXNoXSk7XG5cbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgc2V0T3BlbihmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgY3JlYXRlUXVlcnlTdHJpbmcgPSB1c2VDYWxsYmFjayhcbiAgICAobmFtZSwgdmFsdWUpID0+IHtcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoUGFyYW1zKTtcbiAgICAgIHBhcmFtcy5zZXQobmFtZSwgdmFsdWUpO1xuXG4gICAgICByZXR1cm4gcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgfSxcbiAgICBbc2VhcmNoUGFyYW1zXVxuICApO1xuXG4gIGNvbnN0IGhhbmRsZUFkZEZsb3cgPSBhc3luYyAobmFtZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgICBpZiAobmFtZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgIHNldEFsZXJ0T3Blbih0cnVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gdHJ5IHtcbiAgICAvLyAgIGNvbnN0IGJvZHkgPSB7XG4gICAgLy8gICAgIG5hbWU6IG5hbWUsXG4gICAgLy8gICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAvLyAgIH07XG4gICAgLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9mbG93cy9jcmVhdGVcIiwge1xuICAgIC8vICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIC8vICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcbiAgICAvLyAgIH0pO1xuICAgIC8vICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIC8vICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgLy8gICB9XG5cbiAgICAvLyAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgLy8gfVxuICAgIHJvdXRlci5wdXNoKFxuICAgICAgXCIvZmxvd3MvY3JlYXRlP1wiICtcbiAgICAgICAgY3JlYXRlUXVlcnlTdHJpbmcoXCJuYW1lXCIsIG5hbWUpICtcbiAgICAgICAgXCImXCIgK1xuICAgICAgICBjcmVhdGVRdWVyeVN0cmluZyhcImRlc2NyaXB0aW9uXCIsIGRlc2NyaXB0aW9uKVxuICAgICk7XG5cbiAgICBzZXRPcGVuKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVEZWxldGVGbG93ID0gYXN5bmMgKGlkKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGZldGNoKFwiL2FwaS9mbG93cy9cIiArIGlkLCB7XG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKHJvdXRlci5wdXNoKFwiL1wiKSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICAgIHNldFJlZnJlc2goe30pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxMaXN0PlxuICAgICAgICA8TGlzdEl0ZW0ga2V5PXtcIi9cIn0gZGlzYWJsZVBhZGRpbmc+XG4gICAgICAgICAgPExpc3RJdGVtQnV0dG9uIGNvbXBvbmVudD17TGlua30gaHJlZj1cIi9cIj5cbiAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgIDxIb21lSWNvbiAvPlxuICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJGbG93c1wiPjwvTGlzdEl0ZW1UZXh0PlxuICAgICAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XG4gICAgICAgICAgPExpc3RJdGVtQnV0dG9uXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxBZGRJY29uIC8+XG4gICAgICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cbiAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgPEFkZEZsb3dcbiAgICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICAgIGhhbmRsZUNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgICBhbGVydE9wZW49e2FsZXJ0T3Blbn1cbiAgICAgICAgICBoYW5kbGVBZGRGbG93PXtoYW5kbGVBZGRGbG93fVxuICAgICAgICA+PC9BZGRGbG93PlxuICAgICAgICB7ZGF0YS5tYXAoKHsgbmFtZSwgaWQgfSkgPT4gKFxuICAgICAgICAgIDxMaXN0SXRlbSBrZXk9e2lkfSBkaXNhYmxlUGFkZGluZz5cbiAgICAgICAgICAgIDxMaXN0SXRlbUJ1dHRvbiBjb21wb25lbnQ9e0xpbmt9IGhyZWY9e1wiL2Zsb3dzL1wiICsgaWR9PlxuICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICAgIDxBY2NvdW50VHJlZUljb24gLz5cbiAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17bmFtZX0gLz5cbiAgICAgICAgICAgIDwvTGlzdEl0ZW1CdXR0b24+XG4gICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxuICAgICAgICAgICAgICA8RWRpdEljb24+PC9FZGl0SWNvbj5cbiAgICAgICAgICAgICAgPERlbGV0ZUljb24gb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlRmxvdyhpZCl9PjwvRGVsZXRlSWNvbj5cbiAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxuICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICkpfVxuICAgICAgPC9MaXN0PlxuICAgICAgPERpdmlkZXIgc3g9e3sgbXQ6IFwiYXV0b1wiIH19IC8+XG4gICAgICA8TGlzdD5cbiAgICAgICAge1BMQUNFSE9MREVSX0xJTktTLm1hcCgoeyB0ZXh0LCBpY29uOiBJY29uIH0pID0+IChcbiAgICAgICAgICA8TGlzdEl0ZW0ga2V5PXt0ZXh0fSBkaXNhYmxlUGFkZGluZz5cbiAgICAgICAgICAgIDxMaXN0SXRlbUJ1dHRvbj5cbiAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgICA8SWNvbiAvPlxuICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXt0ZXh0fSAvPlxuICAgICAgICAgICAgPC9MaXN0SXRlbUJ1dHRvbj5cbiAgICAgICAgICA8L0xpc3RJdGVtPlxuICAgICAgICApKX1cbiAgICAgIDwvTGlzdD5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlTmF2O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VDYWxsYmFjayIsInVzZUNvbnRleHQiLCJMaW5rIiwidXNlUm91dGVyIiwidXNlU2VhcmNoUGFyYW1zIiwiTGlzdCIsIkxpc3RJdGVtIiwiTGlzdEl0ZW1CdXR0b24iLCJMaXN0SXRlbVRleHQiLCJMaXN0SXRlbUljb24iLCJEaXZpZGVyIiwiQWNjb3VudFRyZWVJY29uIiwiSG9tZUljb24iLCJBZGRJY29uIiwiRWRpdEljb24iLCJEZWxldGVJY29uIiwiU2V0dGluZ3NJY29uIiwiU3VwcG9ydEljb24iLCJMb2dvdXRJY29uIiwiQWRkRmxvdyIsIkZsb3dDb250ZXh0IiwiUExBQ0VIT0xERVJfTElOS1MiLCJ0ZXh0IiwiaWNvbiIsIlNpZGVOYXYiLCJkYXRhIiwic2V0RGF0YSIsIm9wZW4iLCJzZXRPcGVuIiwiYWxlcnRPcGVuIiwic2V0QWxlcnRPcGVuIiwicm91dGVyIiwic2VhcmNoUGFyYW1zIiwicmVmcmVzaCIsInNldFJlZnJlc2giLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiaGFuZGxlQ2xvc2UiLCJjcmVhdGVRdWVyeVN0cmluZyIsIm5hbWUiLCJ2YWx1ZSIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInNldCIsInRvU3RyaW5nIiwiaGFuZGxlQWRkRmxvdyIsImRlc2NyaXB0aW9uIiwidHJpbSIsInB1c2giLCJoYW5kbGVEZWxldGVGbG93IiwiaWQiLCJtZXRob2QiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJGcmFnbWVudCIsImRpc2FibGVQYWRkaW5nIiwiY29tcG9uZW50IiwiaHJlZiIsInByaW1hcnkiLCJvbkNsaWNrIiwibWFwIiwic3giLCJtdCIsIkljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Home/SideNav.js\n"));

/***/ })

});