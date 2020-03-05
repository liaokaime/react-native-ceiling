"use strict";
/**
 * 单选
 *  不指定extractKey时，默认使用item的序列化字符串
 *  点击已选中的item时，不触发选中事件
 * Create by liaokai on 2020-03-04 17:54:20
 */
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
var react_1 = __importStar(require("react"));
var react_native_1 = require("react-native");
var Radio = /** @class */ (function (_super) {
    __extends(Radio, _super);
    function Radio(props) {
        var _this = _super.call(this, props) || this;
        //从props.data转换为state.data
        _this.propsData2StateData = function (data, initSelectIndex) {
            return data.map(function (value, index) {
                return {
                    data: value,
                    selected: initSelectIndex === index
                };
            });
        };
        //state初始化
        _this.state = {
            data: _this.propsData2StateData(_this.props.data, _this.props.initSelectIndex)
        };
        return _this;
    }
    /**重置**/
    Radio.prototype.reset = function () {
        this.setState({
            data: this.propsData2StateData(this.props.data)
        });
    };
    /**选择**/
    Radio.prototype.select = function (index) {
        this.setState({
            data: this.propsData2StateData(this.props.data, index)
        });
    };
    Radio.prototype.componentWillReceiveProps = function (nextProps, nextContext) {
        this.setState({
            data: this.propsData2StateData(nextProps.data, nextProps.initSelectIndex)
        });
    };
    Radio.prototype.render = function () {
        var _this = this;
        var _a = this.props, renderSelectedItem = _a.renderSelectedItem, renderUnSelectItem = _a.renderUnSelectItem, onSelect = _a.onSelect, extractKey = _a.extractKey;
        var data = this.state.data;
        return (react_1.default.createElement(react_1.default.Fragment, null, data.map(function (value, index) {
            var _a, _b;
            if (value.selected) {
                return react_1.default.createElement(react_native_1.View, { key: (_a = extractKey === null || extractKey === void 0 ? void 0 : extractKey(value.data)) !== null && _a !== void 0 ? _a : JSON.stringify(value.data) }, "renderSelectedItem(value.data)");
            }
            else {
                return react_1.default.createElement(react_native_1.TouchableOpacity, { key: (_b = extractKey === null || extractKey === void 0 ? void 0 : extractKey(value.data)) !== null && _b !== void 0 ? _b : JSON.stringify(value.data), onPress: function () {
                        var nextData = data.map(function (value1, index1) {
                            return {
                                data: value1.data,
                                selected: index1 === index
                            };
                        });
                        onSelect === null || onSelect === void 0 ? void 0 : onSelect(value.data, index);
                        setTimeout(function () {
                            _this.setState({
                                data: nextData
                            });
                        }, 0);
                    } }, renderUnSelectItem(value.data));
            }
        })));
    };
    return Radio;
}(react_1.Component));
exports.Radio = Radio;
