webpackJsonp([3],{

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SampleNestedDynamicParent = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(37);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SampleNestedDynamicParent = exports.SampleNestedDynamicParent = function (_React$Component) {
	    _inherits(SampleNestedDynamicParent, _React$Component);
	
	    function SampleNestedDynamicParent() {
	        var _ref;
	
	        _classCallCheck(this, SampleNestedDynamicParent);
	
	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }
	
	        var _this = _possibleConstructorReturn(this, (_ref = SampleNestedDynamicParent.__proto__ || Object.getPrototypeOf(SampleNestedDynamicParent)).call.apply(_ref, [this].concat(args)));
	
	        _this.ComponentSampleNestedDynamicChild = null;
	        return _this;
	    }
	
	    _createClass(SampleNestedDynamicParent, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            var _this2 = this;
	
	            var p1 = new Promise(function (resolve) {
	                __webpack_require__.e/* nsure */(4, function () {
	                    resolve({
	                        SampleNestedDynamicChild: __webpack_require__(198)
	                    });
	                });
	            });
	
	            p1.then(function (o) {
	                _this2.ComponentSampleNestedDynamicChild = o.SampleNestedDynamicChild.SampleNestedDynamicChild;
	                _this2.setState({ SampleNestedDynamicChild: o.SampleNestedDynamicChild.SampleNestedDynamicChild });
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var s = "this is from sample nested Dynamic parent!";
	            var ComponentSampleNestedDynamicChild = this.ComponentSampleNestedDynamicChild;
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'div',
	                    null,
	                    s
	                ),
	                ComponentSampleNestedDynamicChild && _react2.default.createElement(ComponentSampleNestedDynamicChild, null),
	                this.state != null && 'SampleNestedDynamicChild' in this.state && _react2.default.createElement(this.state.SampleNestedDynamicChild, null)
	            );
	        }
	    }]);
	
	    return SampleNestedDynamicParent;
	}(_react2.default.Component);

/***/ })

});
//# sourceMappingURL=SampleNestedDynamicParent.js.map