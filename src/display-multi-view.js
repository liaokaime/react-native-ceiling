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
 * 多个组件选择性展示一个
 * Create by liaokai on 2020-03-03 11:58:09
 */
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var display_view_1 = require("./display-view");
var DisplayMultiView = /** @class */ (function (_super) {
    __extends(DisplayMultiView, _super);
    function DisplayMultiView(props) {
        var _this = _super.call(this, props) || this;
        //state初始化
        _this.state = {};
        return _this;
    }
    DisplayMultiView.prototype.render = function () {
        var _a = this.props, views = _a.views, showIndex = _a.showIndex;
        var _b = this.state;
        return (react_1.default.createElement(react_1.default.Fragment, null, views.map(function (value, index) {
            return react_1.default.createElement(display_view_1.DisplayView, { ifIs: showIndex === index, show: value, elseShow: react_1.default.createElement(react_native_1.View, null), justHide: true });
        })));
    };
    return DisplayMultiView;
}(react_1.Component));
exports.DisplayMultiView = DisplayMultiView;
