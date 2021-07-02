"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./Placeholder.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Image placeholders.
 */
var Placeholder = /*#__PURE__*/function (_Component) {
  _inherits(Placeholder, _Component);

  var _super = _createSuper(Placeholder);

  function Placeholder() {
    _classCallCheck(this, Placeholder);

    return _super.apply(this, arguments);
  }

  _createClass(Placeholder, [{
    key: "getImageUrl",
    value: function getImageUrl() {
      var _this$props = this.props,
          type = _this$props.type,
          width = _this$props.width,
          height = _this$props.height;
      var types = {
        animal: "http://placeimg.com/".concat(width, "/").concat(height, "/animals"),
        bacon: "http://baconmockup.com/".concat(width, "/").concat(height),
        bear: "http://www.placebear.com/".concat(width, "/").concat(height),
        beard: "http://placebeard.it/".concat(width, "/").concat(height),
        cat: "http://lorempixel.com/".concat(width, "/").concat(height, "/cats"),
        city: "http://lorempixel.com/".concat(width, "/").concat(height, "/city"),
        food: "http://lorempixel.com/".concat(width, "/").concat(height, "/food"),
        nature: "http://lorempixel.com/".concat(width, "/").concat(height, "/nature"),
        people: "http://lorempixel.com/".concat(width, "/").concat(height, "/people")
      };
      return types[type];
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          width = _this$props2.width,
          height = _this$props2.height,
          alt = _this$props2.alt;
      return _react.default.createElement("img", {
        className: "placeholder",
        src: this.getImageUrl(),
        width: width,
        height: height,
        alt: alt
      });
    }
  }]);

  return Placeholder;
}(_react.Component);

exports.default = Placeholder;

_defineProperty(Placeholder, "propTypes", {
  type: _propTypes.default.oneOf(['animal', 'bacon', 'beard', 'bear', 'cat', 'food', 'city', 'nature', 'people']),
  width: _propTypes.default.number,
  height: _propTypes.default.number,
  alt: _propTypes.default.string
});

_defineProperty(Placeholder, "defaultProps", {
  type: 'animal',
  width: 150,
  height: 150,
  alt: 'Photo of an animal'
});