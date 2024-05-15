import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Usestatehook from "./UseStateHook/Usestatehook";
import Useeffecthook from "./UseEffectHook/Useeffecthook";
import Usememohook from "./UseMemoHook/Usememo";
import Demo from "./UseContextHook";
import UseReducerExample from "./UseReducerHook/Usereducerhook";
import UseImperativeHookExample from "./UseImperativeHook/Useimperativehook";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Usestatehook /> */}
    {/* <Useeffecthook /> */}
    {/* <Usememohook /> */}
    {/* <Demo /> */}
    {/* <UseReducerExample /> */}
    <UseImperativeHookExample />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
