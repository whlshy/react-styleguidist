"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./Button.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The only true button.
 */
function Button(_ref) {
  var color = _ref.color,
      size = _ref.size,
      children = _ref.children;
  var styles = {
    color: color,
    fontSize: Button.sizes[size]
  };
  return _react.default.createElement("button", {
    className: "button",
    style: styles
  }, children);
}

Button.propTypes = {
  /**
   * Button label.
   */
  children: _propTypes.default.string.isRequired,
  color: _propTypes.default.string,
  size: _propTypes.default.oneOf(['small', 'normal', 'large'])
};
Button.defaultProps = {
  color: '#333',
  size: 'normal'
};
Button.sizes = {
  small: '10px',
  normal: '14px',
  large: '18px'
};