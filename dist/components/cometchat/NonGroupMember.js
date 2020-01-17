"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NonGroupMember = function NonGroupMember(_ref) {
  var name = _ref.name,
      status = _ref.status,
      uid = _ref.uid,
      avatar = _ref.avatar,
      handleAddMember = _ref.handleAddMember,
      subjectUID = _ref.subjectUID,
      ownerRights = _ref.ownerRights;

  var action_button = void 0;
  var tab_title = void 0;
  var classes = void 0;
  var status_classes = "status mr-1 status-";
  status_classes += status;

  if (uid !== subjectUID && ownerRights) {
    action_button = _react2.default.createElement(
      "div",
      { className: "mb-2 mt-3 pr-2 add-member" },
      _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faUserPlus })
    );
  }

  tab_title = "Add member to group";
  classes = "contact-tab p-2 bg-white add-member-tab";

  return _react2.default.createElement(
    "div",
    {
      className: classes,
      title: tab_title,
      onClick: function onClick() {
        return handleAddMember(uid);
      }
    },
    _react2.default.createElement(
      "div",
      { className: "contact-avatar-small" },
      _react2.default.createElement("img", { className: "mr-2", src: avatar, alt: name })
    ),
    _react2.default.createElement(
      "div",
      { className: "contact-data" },
      _react2.default.createElement(
        "p",
        { className: "mb-0 contact-name va-super" },
        name
      ),
      _react2.default.createElement(
        "p",
        { className: "m-0 text-light-grey contact-status" },
        _react2.default.createElement("span", { className: status_classes }),
        _react2.default.createElement(
          "span",
          { className: "status-text" },
          status
        )
      )
    ),
    action_button
  );
};

exports.default = NonGroupMember;