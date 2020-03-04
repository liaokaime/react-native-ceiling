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
 * 吸顶组件
 *   传入views数组中，如有包含多个list组件时，请使用listKey
 * Create by liaokai on 2020-03-02 11:05:01
 */
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var display_multi_view_1 = require("./display-multi-view");
var Ceiling = /** @class */ (function (_super) {
    __extends(Ceiling, _super);
    function Ceiling(props) {
        var _this = _super.call(this, props) || this;
        //state初始化
        _this.state = {
            tabIndex: 0
        };
        return _this;
    }
    Ceiling.prototype.render = function () {
        var _this = this;
        var _a = this.props, TabsClass = _a.TabsClass, views = _a.views, ListHeaderComponent = _a.ListHeaderComponent;
        return (react_1.default.createElement(react_native_1.SectionList, { ListHeaderComponent: ListHeaderComponent, stickySectionHeadersEnabled: true, renderSectionHeader: function (_a) {
                var section = _a.section;
                return (react_1.default.createElement(TabsClass, { onSwitch: function (page) {
                        _this.setState({ tabIndex: page });
                    } }));
            }, renderItem: function (_a) {
                var item = _a.item, index = _a.index;
                return react_1.default.createElement(display_multi_view_1.DisplayMultiView, { showIndex: _this.state.tabIndex, views: views });
            }, sections: [{ data: [""] }], keyExtractor: function (item) { return "fixedKey"; } }));
    };
    return Ceiling;
}(react_1.Component));
exports.Ceiling = Ceiling;
