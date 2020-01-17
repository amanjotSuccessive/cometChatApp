"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DemoUser = function DemoUser(_ref) {
  var uid = _ref.uid,
      name = _ref.name,
      avatar = _ref.avatar,
      margin = _ref.margin,
      handleDemoLogin = _ref.handleDemoLogin;

  var classes = "test-user-box mb-3 d-inline-flex p-1 ";
  classes += margin;
  return _react2.default.createElement(
    "div",
    { className: classes, id: uid, onClick: function onClick(e) {
        return handleDemoLogin(e, uid);
      } },
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement("img", { className: "user-avatar-small mr-2", src: avatar, alt: name })
    ),
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "p",
        { className: "mb-0 demo-user-name" },
        name
      ),
      _react2.default.createElement(
        "p",
        { className: "m-0 text-font-grey demo-user-uid" },
        uid
      )
    )
  );
};

exports.default = DemoUser;