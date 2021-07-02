"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./LocalTag.styl");

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

var LocalTag = /*#__PURE__*/function (_Component) {
  _inherits(LocalTag, _Component);

  var _super = _createSuper(LocalTag);

  function LocalTag(props) {
    var _this;

    _classCallCheck(this, LocalTag);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (prevProps, prevState) {
      var _this$props = _this.props,
          nowtag = _this$props.nowtag,
          setCID = _this$props.setCID,
          tags = _this$props.tags,
          localname = _this$props.localname;
      var localtags = JSON.parse(localStorage.getItem(localname)) || [];

      if ((nowtag == null || nowtag == 0) && localtags.length > 0) {
        setCID(localtags[0].cid);
      }

      if (nowtag != null && nowtag != 0 && localtags.filter(function (f) {
        return f.cid == nowtag;
      }).length == 0 && tags.filter(function (f) {
        return f.CID == nowtag;
      }).length > 0) {
        var _tags$filter$ = tags.filter(function (f) {
          return f.CID == nowtag;
        })[0],
            CName = _tags$filter$.CName,
            CID = _tags$filter$.CID;

        _this.addItem(CName, CID);
      }

      if (tags.length >= localtags.length || tags.length > 0) {
        localtags.map(function (m) {
          if (tags.filter(function (f) {
            return f.CID == m.cid;
          }).length == 0) {
            _this.delItem(m.cid);
          }

          if (tags.filter(function (f) {
            return f.CID == m.cid && f.CName != m.tagname;
          }).length > 0) {
            _this.updateItems();
          }
        });
      }

      if (prevProps.tags.length != 0 && tags.length == 0) {
        localStorage.setItem(localname, JSON.stringify([]));

        _this.updateTags();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateTags", function () {
      var localname = _this.props.localname;
      var localtags = JSON.parse(localStorage.getItem(localname)) || [];

      _this.setState({
        localtags: localtags
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateItems", function () {
      var _this$props2 = _this.props,
          tags = _this$props2.tags,
          localname = _this$props2.localname;
      var localtags = JSON.parse(localStorage.getItem(localname)) || [];
      localtags.map(function (m, index) {
        if (tags.filter(function (f) {
          return f.CID == m.cid;
        }).length > 0) {
          localtags[index].tagname = tags.filter(function (f) {
            return f.CID == m.cid;
          })[0].CName;
        }
      });
      localStorage.setItem(localname, JSON.stringify(localtags));

      _this.updateTags();
    });

    _defineProperty(_assertThisInitialized(_this), "addItem", function (tagname, cid) {
      var localname = _this.props.localname;
      var localtags = JSON.parse(localStorage.getItem(localname)) || [];
      if (localtags.filter(function (f) {
        return f.cid == cid;
      }).length == 0) localtags.push({
        tagname: tagname,
        cid: cid
      });
      localStorage.setItem(localname, JSON.stringify(localtags));
      var setOpenTags = _this.props.setOpenTags;
      setOpenTags(false);

      _this.updateTags();
    });

    _defineProperty(_assertThisInitialized(_this), "delItem", function (cid) {
      var localname = _this.props.localname;
      var localtags = JSON.parse(localStorage.getItem(localname)) || [];
      localtags = localtags.filter(function (f) {
        return f.cid != cid;
      });
      localStorage.setItem(localname, JSON.stringify(localtags));
      var setCID = _this.props.setCID;
      if (localtags.length == 0) setCID(null);else setCID(localtags[0].cid);

      _this.updateTags();
    });

    var _localtags = []; // JSON.parse(localStorage.getItem(localname)) ||

    _this.state = {
      localtags: _localtags
    };
    return _this;
  }

  _createClass(LocalTag, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props3 = this.props,
          nowtag = _this$props3.nowtag,
          setCID = _this$props3.setCID,
          localname = _this$props3.localname;
      this.updateTags();
      var localtags = JSON.parse(localStorage.getItem(localname)) || [];

      if ((nowtag == null || nowtag == 0) && localtags.length > 0) {
        setCID(localtags[0].cid);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          tags = _this$props4.tags,
          nowtag = _this$props4.nowtag,
          setCID = _this$props4.setCID,
          opentags = _this$props4.opentags,
          setOpenTags = _this$props4.setOpenTags,
          tagref = _this$props4.tagref,
          clickAdd = _this$props4.clickAdd,
          addname = _this$props4.addname;
      var localtags = this.state.localtags;
      !!tags || (tags = []);
      return _react.default.createElement("div", {
        className: "collectiontag"
      }, _react.default.createElement("div", {
        ref: tagref
      }, _react.default.createElement("div", {
        className: "storagetab"
      }, _react.default.createElement("div", {
        className: "flex tab"
      }, localtags.map(function (m) {
        return _react.default.createElement("div", {
          key: m.cid,
          title: m.tagname,
          className: "ltags".concat(m.cid == nowtag ? " tabselect" : "")
        }, _react.default.createElement("div", {
          className: "ltagcover",
          onClick: function onClick(e) {
            return setCID(m.cid);
          }
        }), _react.default.createElement("span", {
          className: "oneline"
        }, m.tagname), _react.default.createElement("div", {
          className: "relative pointer align-items",
          onClick: function onClick(e) {
            return _this2.delItem(m.cid);
          }
        }, _react.default.createElement("span", {
          className: "material-icons-outlined close"
        }, "close")));
      })), _react.default.createElement("div", {
        className: "flex align-items"
      }, localtags.length > 0 && _react.default.createElement("div", {
        className: "updown pointer",
        onClick: function onClick(e) {
          return setOpenTags(!opentags);
        }
      }, _react.default.createElement("span", {
        className: "material-icons-outlined"
      }, opentags ? "arrow_drop_up" : "arrow_drop_down")), _react.default.createElement("div", {
        className: "ctags pointer align-items",
        onClick: function onClick(e) {
          return clickAdd();
        }
      }, _react.default.createElement("span", {
        className: "material-icons-outlined add"
      }, "add"), _react.default.createElement("span", null, addname)))), (!!opentags || localtags.length == 0) && _react.default.createElement("div", {
        className: "flex alltags"
      }, tags.map(function (m) {
        return _react.default.createElement("div", {
          key: m.CID,
          className: "ctags pointer".concat(m.CID == nowtag ? " cselect" : ""),
          onClick: function onClick(e) {
            return setCID(m.CID), _this2.addItem(m.CName, m.CID);
          },
          title: m.CName
        }, m.CName);
      }))));
    }
  }]);

  return LocalTag;
}(_react.Component); // export default CSSModules(LocalTag, styles)


exports.default = LocalTag;

_defineProperty(LocalTag, "propTypes", {
  /** 標籤陣列*/
  tags: _propTypes.default.array,

  /** 目前所在標籤 CID*/
  nowtag: _propTypes.default.number,

  /** localstorage 名稱*/
  localname: _propTypes.default.string,

  /** localstorage 名稱*/
  addname: _propTypes.default.string,

  /** 標籤打開狀態(是否顯示標籤)*/
  opentags: _propTypes.default.bool,

  /** React.createRef()*/
  tagref: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.shape({
    current: _propTypes.default.any
  })]),

  /** 切換標籤 CID*/
  setCID: _propTypes.default.func,

  /** 切換是否打開標籤列表*/
  setOpenTags: _propTypes.default.func,

  /** 按下新增分類事件*/
  clickAdd: _propTypes.default.func
});

_defineProperty(LocalTag, "defaultProps", {
  tags: [{
    CID: 1,
    CName: "標籤一"
  }],
  nowtag: 1,
  localname: "localtag",
  addname: "新增分類",
  tagref: null,
  opentags: true,
  setCID: function setCID(cid) {
    return cid;
  },
  setOpenTags: function setOpenTags(tf) {
    return tf;
  },
  clickAdd: function clickAdd() {}
});