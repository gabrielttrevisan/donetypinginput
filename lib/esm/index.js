var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import * as React from "react";
var DoneTypingInput = function (_a) {
    var onDoneTyping = _a.onDoneTyping, _b = _a.doneTypingTimer, doneTypingTimer = _b === void 0 ? 500 : _b, properties = __rest(_a, ["onDoneTyping", "doneTypingTimer"]);
    var _c = React.useState(), typingTimer = _c[0], setTypingTimer = _c[1];
    var keyUpHandler = function () {
        clearTimeout(typingTimer);
        setTypingTimer(setTimeout(onDoneTyping, doneTypingTimer));
    };
    var keyDownHandler = function () {
        clearTimeout(typingTimer);
    };
    return (React.createElement("input", __assign({ onKeyUp: keyUpHandler, onKeyDown: keyDownHandler }, properties)));
};
export default DoneTypingInput;
