"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactstrap = require("reactstrap");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var NotificationAlert = /*#__PURE__*/function (_React$Component) {
  function NotificationAlert(props) {
    var _this;
    _classCallCheck(this, NotificationAlert);
    _this = _callSuper(this, NotificationAlert, [props]);
    _this.state = {
      notifyTL: [],
      notifyTC: [],
      notifyTR: [],
      notifyBL: [],
      notifyBC: [],
      notifyBR: [],
      notifyID: []
    };
    _this.onDismiss = _this.onDismiss.bind(_this);
    _this.notificationAlert = _this.notificationAlert.bind(_this);
    _this.refNotification = /*#__PURE__*/_react["default"].createRef();
    return _this;
  }
  // to stop the warning of calling setState of unmounted component
  _inherits(NotificationAlert, _React$Component);
  return _createClass(NotificationAlert, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      for (var i = 0; i < this.state.notifyID.length; i++) {
        window.clearTimeout(this.state.notifyID[i]);
      }
    }
  }, {
    key: "onDismiss",
    value: function onDismiss(nNumber, place, noAnimate) {
      var notify = [];
      var sNotify = this.state["notify" + place.toUpperCase()];
      var dNotify;
      for (var i = 0; i < sNotify.length; i++) {
        if (sNotify[i].key !== nNumber + "") {
          if (sNotify[i].props.className.indexOf("fadeOutUp") !== -1) {
            dNotify = /*#__PURE__*/_react["default"].cloneElement(sNotify[i]);
          } else {
            if (noAnimate === undefined) {
              var animation;
              if (place.indexOf("b") !== -1) {
                animation = sNotify[i].key > nNumber + "" ? " animated moveDown" : "";
              } else {
                animation = sNotify[i].key > nNumber + "" ? " animated moveUp" : "";
              }
              dNotify = /*#__PURE__*/_react["default"].cloneElement(sNotify[i], {
                className: "alert-with-icon" + animation
              });
            } else {
              dNotify = /*#__PURE__*/_react["default"].cloneElement(sNotify[i], {
                className: "alert-with-icon"
              });
            }
          }
          notify.push(dNotify);
        } else {
          if (noAnimate === undefined) {
            dNotify = /*#__PURE__*/_react["default"].cloneElement(sNotify[i], {
              className: "alert-with-icon animated fadeOutUp"
            });
            notify.push(dNotify);
          }
        }
      }
      if (noAnimate === undefined) {
        var id = setTimeout(function () {
          this.onDismiss(nNumber, place, "noAnimate");
        }.bind(this), 800);
        this.setState({
          notifyID: [id].concat(this.state.notifyID)
        });
      }
      sNotify = {};
      sNotify["notify" + place.toUpperCase()] = notify;
      this.setState(sNotify);
    }
  }, {
    key: "notificationAlert",
    value: function notificationAlert(options) {
      var _this2 = this;
      var notify = this.state["notify" + options.place.toUpperCase()];
      var nNumber = notify.length;
      if (notify.length > 0) {
        if (options.place.indexOf("b") !== -1) {
          nNumber = parseInt(notify[0].key, 10) + 1;
        } else {
          nNumber = parseInt(notify[notify.length - 1].key, 10) + 1;
        }
      }
      var toggle;
      if (options.closeButton !== false) {
        toggle = function toggle() {
          return _this2.onDismiss(nNumber, options.place);
        };
      }
      var notification = /*#__PURE__*/_react["default"].createElement(_reactstrap.Alert, {
        color: options.type,
        className: "alert-with-icon animated fadeInDown",
        toggle: toggle,
        key: nNumber,
        onClick: this.props.onClick
      }, options.icon !== undefined && /*#__PURE__*/_react["default"].createElement("span", {
        "data-notify": "icon",
        className: options.icon
      }), /*#__PURE__*/_react["default"].createElement("span", {
        "data-notify": "message"
      }, options.message));
      if (options.place.indexOf("b") !== -1) {
        notify.unshift(notification);
      } else {
        notify.push(notification);
      }
      var sNotify = {};
      sNotify["notify" + options.place.toUpperCase()] = notify;
      // aici pui notify[notify.length-1].key
      if (options.autoDismiss > 0) {
        var id = setTimeout(function () {
          this.onDismiss(nNumber, options.place);
        }.bind(this), options.autoDismiss * 1000 + (notify.length - 1) * 1000);
        this.setState({
          notifyID: [id].concat(this.state.notifyID)
        });
      }
      this.setState(sNotify);
    }
  }, {
    key: "showAllNotifications",
    value: function showAllNotifications(place) {
      if (this.state["notify" + place.toUpperCase()].length > 0) {
        var style = {
          display: "inline-block",
          margin: "0px auto",
          position: "fixed",
          transition: "all 0.5s ease-in-out",
          zIndex: this.props.zIndex
        };
        if (place.indexOf("t") !== -1) {
          style["top"] = "20px";
          switch (place) {
            case "tl":
              style["left"] = "20px";
              break;
            case "tc":
              style["left"] = "0px";
              style["right"] = "0px";
              break;
            case "tr":
              style["right"] = "20px";
              break;
            default:
              break;
          }
        } else {
          style["bottom"] = "20px";
          switch (place) {
            case "bl":
              style["left"] = "20px";
              break;
            case "bc":
              style["left"] = "0px";
              style["right"] = "0px";
              break;
            case "br":
              style["right"] = "20px";
              break;
            default:
              break;
          }
        }
        return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_reactstrap.Col, {
          xs: "11",
          sm: "4",
          style: style
        }, this.state["notify" + place.toUpperCase()].map(function (prop, key) {
          return prop;
        })));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.refNotification
      }, this.showAllNotifications("tl"), this.showAllNotifications("tc"), this.showAllNotifications("tr"), this.showAllNotifications("bl"), this.showAllNotifications("bc"), this.showAllNotifications("br")));
    }
  }]);
}(_react["default"].Component);
NotificationAlert.defaultProps = {
  zIndex: 9999,
  onClick: function onClick() {}
};
NotificationAlert.propTypes = {
  zIndex: _propTypes["default"].number,
  onClick: _propTypes["default"].func
};
var _default = exports["default"] = NotificationAlert;
