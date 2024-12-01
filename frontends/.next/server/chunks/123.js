"use strict";
exports.id = 123;
exports.ids = [123];
exports.modules = {

/***/ 6123:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ TopNav)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6921);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__]);
_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function TopNav() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const currentUrl = router.asPath;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex items-center justify-between w-full p-10",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: `/`,
                className: "flex items-center justify-center gap-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: "/logo.svg",
                        alt: "logo",
                        width: 57,
                        height: 64
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "font-poppins font-normal font-medium text-32 leading-48 text-white",
                        children: "EnergySwap"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.ConnectButton.Custom, {
                children: ({ account , chain , openAccountModal , openChainModal , openConnectModal , authenticationStatus , mounted  })=>{
                    // Note: If your app doesn't use authentication, you
                    // can remove all 'authenticationStatus' checks
                    const ready = mounted && authenticationStatus !== "loading";
                    const connected = ready && account && chain && (!authenticationStatus || authenticationStatus === "authenticated");
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ...!ready && {
                            "aria-hidden": true,
                            "style": {
                                opacity: 0,
                                pointerEvents: "none",
                                userSelect: "none"
                            }
                        },
                        children: (()=>{
                            if (!connected && currentUrl == "/") {
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: `/ConnectWallet`,
                                    className: "flex items-center justify-center gap-6",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "border-4 border-borderWalletBtn rounded-lg bg-transparent text-white hover:bg-green-500 hover:text-white font-poppins font-normal font-semibold text-24 leading-36 text-center px-4 py-2 transition-colors duration-300",
                                        children: "Connect Wallet"
                                    })
                                });
                            }
                            if (!connected) {
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    className: "text-white hover:text-green-500 font-poppins font-normal font-semibold text-[32px] leading-[48px] text-center px-4 py-2 transition-colors duration-300",
                                    onClick: openConnectModal,
                                    type: "button",
                                    children: "connect wallet"
                                });
                            }
                            if (chain.unsupported) {
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                    onClick: openChainModal,
                                    type: "button",
                                    children: "Wrong network"
                                });
                            }
                            if (currentUrl == "/") {
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: `/ConnectWallet`,
                                    className: "text-white hover:text-green-500 font-poppins font-normal font-semibold text-[32px] leading-[48px] text-center px-4 py-2 transition-colors duration-300",
                                    type: "button",
                                    children: "connected wallet"
                                });
                            }
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    gap: 12
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        className: "text-white hover:text-green-500 font-poppins font-normal font-semibold text-[32px] leading-[48px] text-center px-4 py-2 transition-colors duration-300",
                                        onClick: openChainModal,
                                        style: {
                                            display: "flex",
                                            alignItems: "center"
                                        },
                                        type: "button",
                                        children: [
                                            chain.hasIcon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    background: "tranparent",
                                                    width: "40px",
                                                    height: "40px",
                                                    borderRadius: 999,
                                                    overflow: "hidden",
                                                    marginRight: 4
                                                },
                                                children: chain.iconUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    alt: chain.name ?? "Chain icon",
                                                    src: chain.iconUrl,
                                                    style: {
                                                        width: "40px",
                                                        height: "40px"
                                                    }
                                                })
                                            }),
                                            chain.name
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        className: "text-white hover:text-green-500 font-poppins font-normal font-semibold text-[32px] leading-[48px] text-center px-4 py-2 transition-colors duration-300",
                                        onClick: openAccountModal,
                                        type: "button",
                                        children: [
                                            account.displayName,
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                            "connected wallet"
                                        ]
                                    })
                                ]
                            });
                        })()
                    });
                }
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;