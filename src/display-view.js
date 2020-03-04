"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 选择性展示
 * Create by liaokai on 2020-02-11 21:20:28
 */
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var DisplayView = /** @class */ (function (_super) {
    __extends(DisplayView, _super);
    function DisplayView(props) {
        var _this = _super.call(this, props) || this;
        //state初始化
        _this.state = {};
        return _this;
    }
    DisplayView.prototype.render = function () {
        var _a = this.props, ifIs = _a.ifIs, elseShow = _a.elseShow, show = _a.show, justHide = _a.justHide;
        var _b = this.state;
        if (!justHide) {
            return ifIs ? show : elseShow;
        }
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_native_1.View, { style: [{ overflow: "hidden" }, { height: ifIs ? "auto" : 0 }] }, show),
            react_1.default.createElement(react_native_1.View, { style: [{ overflow: "hidden" }, { height: !ifIs ? "auto" : 0 }] }, elseShow)));
    };
    return DisplayView;
}(react_1.Component));
exports.DisplayView = DisplayView;
