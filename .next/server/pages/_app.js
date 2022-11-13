"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./src/components/CSSReset.js

const CSSReset = external_styled_components_.createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: sans-serif;
    background-color: ${({ theme  })=>theme.backgroundBase};
    color: ${({ theme  })=>theme.textColorBase};
  }
  /* NextJS */
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  body {
    display: flex;
    flex: 1;
  }
  #__next {
    display: flex;
    flex: 1;
  }
  /* Globals */
  button,
  a {
    text-decoration: none;
    opacity: 1;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
`;

// EXTERNAL MODULE: ./src/components/Menu/components/ColorMode.js
var ColorMode = __webpack_require__(573);
;// CONCATENATED MODULE: ./src/components/RegisterVideo/styles.js

const StyledRegisterVideo = external_styled_components_default().div.withConfig({
    componentId: "sc-867cd9f3-0"
})`
  .add-video {
    width: 50px;
    height: 50px;
    font-size: 20px;
    color: inherit;
    position: fixed;
    bottom: 16px;
    right: 16px;
    border: 0;
    background-color: red;
    border-radius: 50%;
    z-index: 99;
    cursor: pointer;
  }
  .close-modal {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 8px;
    right: 16px;
    color: inherit;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  button[type="submit"] {
    background-color: red;
    padding: 8px 16px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    color: inherit;
  }
  form {
    width: 100%;
    padding: 5%;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    & > div {
      flex: 1;
      border-radius: 8px;
      max-width: 320px;
      background-color: ${({ theme  })=>theme.backgroundLevel2};
      display: flex;
      flex-direction: column;
      position: relative;
      padding: 16px;
      padding-top: 40px;
    }
  }
  input {
    border-radius: 2px;
    border: 1px solid ${({ theme  })=>theme.borderBase};
    padding: 8px 10px;
    margin-bottom: 10px;
    outline: none;
    color: #222222;
    background-color: #f9f9f9;
    color: ${({ theme  })=>theme.textColorBase};
    background-color: ${({ theme  })=>theme.backgroundBase};
  }
`;

// EXTERNAL MODULE: external "@supabase/supabase-js"
var supabase_js_ = __webpack_require__(885);
;// CONCATENATED MODULE: ./src/components/RegisterVideo/index.js




// Whiteboarding
// Custom Hook
function useForm(propsDoForm) {
    const [values, setValues] = external_react_default().useState(propsDoForm.initialValues);
    return {
        values,
        handleChange: (evento)=>{
            console.log(evento.target);
            const value = evento.target.value;
            const name = evento.target.name;
            setValues({
                ...values,
                [name]: value
            });
        },
        clearForm () {
            setValues({});
        }
    };
}
const PROJECT_URL = "https://nyypopdngefbljsmqlow.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55eXBvcGRuZ2VmYmxqc21xbG93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyMDU3NjQsImV4cCI6MTk4Mzc4MTc2NH0.GmmKZ_-gzxduHAYB699vFkpG7Lc_nv78pJCBu1UfzNo";
const supabase = (0,supabase_js_.createClient)(PROJECT_URL, PUBLIC_KEY);
function getThumbnail(url) {
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}
function RegisterVideo() {
    const formCadastro = useForm({
        initialValues: {
            titulo: "Frost punk",
            url: "https://www.youtube.com/watch?v=QsqatJxAUtk"
        }
    });
    const [formVisivel, setFormVisivel] = external_react_default().useState(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledRegisterVideo, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "add-video",
                onClick: ()=>setFormVisivel(true),
                children: "+"
            }),
            formVisivel ? /*#__PURE__*/ jsx_runtime_.jsx("form", {
                onSubmit: (evento)=>{
                    evento.preventDefault();
                    console.log(formCadastro.values);
                    // Contrato entre o nosso Front e o BackEnd
                    supabase.from("video").insert({
                        title: formCadastro.values.titulo,
                        url: formCadastro.values.url,
                        thumb: getThumbnail(formCadastro.values.url),
                        playlist: formCadastro.values.playlist
                    }).then((oqueveio)=>{
                        console.log(oqueveio);
                    }).catch((err)=>{
                        console.log(err);
                    });
                    setFormVisivel(false);
                    formCadastro.clearForm();
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "button",
                            className: "close-modal",
                            onClick: ()=>setFormVisivel(false),
                            children: "X"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            placeholder: "Titulo do v\xeddeo",
                            name: "titulo",
                            value: formCadastro.values.titulo,
                            onChange: formCadastro.handleChange
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            placeholder: "URL",
                            name: "url",
                            value: formCadastro.values.url,
                            onChange: formCadastro.handleChange
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                            placeholder: "Nome da playlist",
                            name: "playlist",
                            value: formCadastro.values.playlist,
                            onChange: formCadastro.handleChange
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            type: "submit",
                            children: "Cadastrar"
                        })
                    ]
                })
            }) : false
        ]
    });
}

;// CONCATENATED MODULE: ./pages/_app.js






const theme = {
    light: {
        backgroundBase: "#f9f9f9",
        backgroundLevel1: "#ffffff",
        backgroundLevel2: "#f0f0f0",
        borderBase: "#e5e5e5",
        textColorBase: "#222222"
    },
    dark: {
        backgroundBase: "#181818",
        backgroundLevel1: "#202020",
        backgroundLevel2: "#313131",
        borderBase: "#383838",
        textColorBase: "#FFFFFF"
    }
};
function ProviderWrapper(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(ColorMode/* default */.Z, {
        initialMode: "dark",
        children: props.children
    });
}
function MyApp({ Component , pageProps  }) {
    const contexto = external_react_default().useContext(ColorMode/* ColorModeContext */.k);
    //console.log(contexto.mode);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_styled_components_.ThemeProvider, {
        theme: theme[contexto.mode],
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(CSSReset, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(RegisterVideo, {})
        ]
    });
}
function _App(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(ProviderWrapper, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(MyApp, {
            ...props
        })
    });
}


/***/ }),

/***/ 573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ColorModeProvider),
/* harmony export */   "k": () => (/* binding */ ColorModeContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ColorModeContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({
    mode: "",
    setMode: ()=>{
        alert("Voc\xea precisa me configurar primeiro!");
    },
    toggleMode: ()=>{
        alert("Voc\xea precisa me configurar primeiro!");
    }
});
function ColorModeProvider(props) {
    const [mode, setMode] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(props.initialMode);
    function toggleMode() {
        if (mode === "dark") setMode("light");
        if (mode === "light") setMode("dark");
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ColorModeContext.Provider, {
        value: {
            mode: mode,
            setMode: setMode,
            toggleMode: toggleMode
        },
        children: props.children
    });
}


/***/ }),

/***/ 885:
/***/ ((module) => {

module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(301));
module.exports = __webpack_exports__;

})();