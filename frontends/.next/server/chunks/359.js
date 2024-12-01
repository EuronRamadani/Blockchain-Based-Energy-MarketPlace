exports.id = 359;
exports.ids = [359];
exports.modules = {

/***/ 4175:
/***/ ((module) => {

// Exports
module.exports = {
	"background": "SideBar_background__C0yRF",
	"iconContainer": "SideBar_iconContainer__Y_df8",
	"fadeIn": "SideBar_fadeIn__mpAyd",
	"active": "SideBar_active__uH0x5"
};


/***/ }),

/***/ 5359:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SideBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_SideBar_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4175);
/* harmony import */ var _styles_SideBar_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_SideBar_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8998);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wagmi__WEBPACK_IMPORTED_MODULE_4__]);
wagmi__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function SideBar() {
    const { address , connector , isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useAccount)();
    const { data: ensAvatar  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.useEnsAvatar)({
        address
    });
    const [isExpanded, setIsExpanded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const toggleSidebar = ()=>{
        setIsExpanded(!isExpanded);
    };
    const formatString = (str)=>`${str.slice(0, 5)}....${str.slice(-3)}`;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${(_styles_SideBar_module_css__WEBPACK_IMPORTED_MODULE_5___default().background)} flex flex-col items-start justify-between transition-all duration-300 ease-in-out min-h-screen ${isExpanded ? "w-[30%]" : "w-[8.2%]"}`,
        onMouseEnter: toggleSidebar,
        onMouseLeave: toggleSidebar,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center justify-start gap-10 mt-[30px] ml-[35px]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        src: "/Logo.svg",
                        alt: "logo",
                        width: 57,
                        height: 64
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_styles_SideBar_module_css__WEBPACK_IMPORTED_MODULE_5___default().fadeIn)} ${isExpanded ? (_styles_SideBar_module_css__WEBPACK_IMPORTED_MODULE_5___default().active) : ""} p-4 bg-gray-200 my-4  font-poppins font-normal font-medium text-32 leading-48 text-white`,
                        children: "EnergySwap"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col items-start justify-center",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: `/`,
                        className: "flex items-center justify-start gap-10 ml-[35px] cursor-pointer",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_styles_SideBar_module_css__WEBPACK_IMPORTED_MODULE_5___default().iconContainer)} flex items-center justify-center`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    src: "images/Home.svg",
                                    alt: "Home",
                                    width: 37,
                                    height: 34
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_styles_SideBar_module_css__WEBPACK_IMPORTED_MODULE_5___default().fadeIn)} ${isExpanded ? (_styles_SideBar_module_css__WEBPACK_IMPORTED_MODULE_5___default().active) : ""} hover:text-green-500 font-poppins font-normal font-medium text-[24px] leading-[36px] text-white ml-[98px]`,
                                children: "Home"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: `/P2P`,
                        className: "flex items-center justify-start gap-10 mt-[45px] ml-[35px] ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_styles_SideBar_module_css__WEBPACK_IMPORTED_MODULE_5___default().iconContainer)} flex items-center justify-center`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    src: "images/P2P.svg",
                                    alt: "P2P",
                                    width: 37,
                                    height: 34
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_styles_SideBar_module_css__WEBPACK_IMPORTED_MODULE_5___default().fadeIn)} ${isExpanded ? (_styles_SideBar_module_css__WEBPACK_IMPORTED_MODULE_5___default().active) : ""} hover:text-green-500 font-poppins font-normal font-medium text-[24px] leading-[36px] text-white ml-[98px]`,
                                children: "P2P"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: `/Dashboard`,
                        className: "flex items-center justify-start gap-10 mt-[45px] ml-[35px] ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_styles_SideBar_module_css__WEBPACK_IMPORTED_MODULE_5___default().iconContainer)} flex items-center justify-center`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    src: "images/Dashboard.svg",
                                    alt: "Dashboard",
                                    width: 37,
                                    height: 34
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_styles_SideBar_module_css__WEBPACK_IMPORTED_MODULE_5___default().fadeIn)} ${isExpanded ? (_styles_SideBar_module_css__WEBPACK_IMPORTED_MODULE_5___default().active) : ""} hover:text-green-500 font-poppins font-normal font-medium text-[24px] leading-[36px] text-white ml-[98px]`,
                                children: "Dashboard"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: `/About`,
                        className: "flex items-center justify-start gap-10 mt-[45px] ml-[35px] ",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_styles_SideBar_module_css__WEBPACK_IMPORTED_MODULE_5___default().iconContainer)} flex items-center justify-center`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    src: "images/About.svg",
                                    alt: "About",
                                    width: 37,
                                    height: 34
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_styles_SideBar_module_css__WEBPACK_IMPORTED_MODULE_5___default().fadeIn)} ${isExpanded ? (_styles_SideBar_module_css__WEBPACK_IMPORTED_MODULE_5___default().active) : ""} hover:text-green-500 font-poppins font-normal font-medium text-[24px] leading-[36px] text-white ml-[98px]`,
                                children: "About"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center justify-start gap-8 mb-[30px] ml-[35px] ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        src: ensAvatar != undefined ? ensAvatar : "images/profile.svg",
                        alt: "About",
                        width: 64,
                        height: 64
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_styles_SideBar_module_css__WEBPACK_IMPORTED_MODULE_5___default().fadeIn)} ${isExpanded ? (_styles_SideBar_module_css__WEBPACK_IMPORTED_MODULE_5___default().active) : ""} font-poppins font-normal font-medium text-[24px] leading-[36px] text-white`,
                        children: address != undefined ? formatString(address) : "0x265....82a"
                    })
                ]
            })
        ]
    });
}
;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;