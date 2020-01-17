"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _cometchat_white = require("../../resources/images/cometchat_white.png");

var _cometchat_white2 = _interopRequireDefault(_cometchat_white);

var _ironman2x = require("../../resources/images/ironman@2x.png");

var _ironman2x2 = _interopRequireDefault(_ironman2x);

var _captainamerica2x = require("../../resources/images/captainamerica@2x.png");

var _captainamerica2x2 = _interopRequireDefault(_captainamerica2x);

var _spiderman2x = require("../../resources/images/spiderman@2x.png");

var _spiderman2x2 = _interopRequireDefault(_spiderman2x);

var _wolverine2x = require("../../resources/images/wolverine@2x.png");

var _wolverine2x2 = _interopRequireDefault(_wolverine2x);

var _loading = require("../../resources/images/loading1.gif");

var _loading2 = _interopRequireDefault(_loading);

var _DemoUser = require("./DemoUser");

var _DemoUser2 = _interopRequireDefault(_DemoUser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginForm = function (_Component) {
  _inherits(LoginForm, _Component);

  function LoginForm() {
    _classCallCheck(this, LoginForm);

    return _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).apply(this, arguments));
  }

  _createClass(LoginForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.uid !== "") window.location = "/#/chat";
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          "div",
          { className: "cc-logo" },
          _react2.default.createElement("img", { src: _cometchat_white2.default, alt: "cometchat logo" })
        ),
        _react2.default.createElement(
          "div",
          { className: "border-0 login-form-box bg-white px-5 py-5 col-lg-6 col-sm-12 col-md-9 col-xs-12" },
          _react2.default.createElement(
            "form",
            { className: "" },
            _react2.default.createElement(
              "div",
              { className: "form-group" },
              _react2.default.createElement("input", {
                required: true,
                className: "form-control form-control-lg",
                placeholder: "Enter UID",
                type: "text",
                onChange: function onChange(e) {
                  return _this2.props.handleInputChange(e);
                }
              })
            ),
            _react2.default.createElement(
              "div",
              { className: "form-group mb-0 mt-3" },
              _react2.default.createElement(
                "button",
                {
                  disabled: this.props.loginBtnDisabled,
                  className: "btn btn-cc btn-lg btn-block",
                  id: "cc_login_btn",
                  onClick: function onClick(event) {
                    return _this2.props.handleLogin(event);
                  }
                },
                this.props.loginBtnDisabled ? "Processing" : "Login",
                this.props.loginBtnDisabled ? _react2.default.createElement("img", { className: "loader", src: _loading2.default, alt: "loading..." }) : ""
              )
            ),
            _react2.default.createElement(
              "p",
              { className: "text-center mt-3 info-text" },
              "Haven't created a user yet? Select one of our default users for testing :"
            ),
            _react2.default.createElement(
              "div",
              null,
              _react2.default.createElement(_DemoUser2.default, {
                name: "IronMan",
                avatar: _ironman2x2.default,
                uid: "superhero1",
                margin: "mr-2",
                handleDemoLogin: this.props.handleDemoLogin
              }),
              _react2.default.createElement(_DemoUser2.default, {
                name: "CaptainAmerica",
                avatar: _captainamerica2x2.default,
                uid: "superhero2",
                margin: "",
                handleDemoLogin: this.props.handleDemoLogin
              }),
              _react2.default.createElement(_DemoUser2.default, {
                name: "SpiderMan",
                avatar: _spiderman2x2.default,
                uid: "superhero3",
                margin: "mr-2",
                handleDemoLogin: this.props.handleDemoLogin
              }),
              _react2.default.createElement(_DemoUser2.default, {
                name: "Wolverine",
                avatar: _wolverine2x2.default,
                uid: "superhero4",
                margin: "",
                handleDemoLogin: this.props.handleDemoLogin
              })
            )
          )
        )
      );
    }
  }]);

  return LoginForm;
}(_react.Component);

exports.default = LoginForm;