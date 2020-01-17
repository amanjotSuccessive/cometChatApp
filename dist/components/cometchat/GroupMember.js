"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GroupMember = function GroupMember(_ref) {
    var name = _ref.name,
        status = _ref.status,
        uid = _ref.uid,
        avatar = _ref.avatar,
        banned = _ref.banned,
        handleBanUnbanMember = _ref.handleBanUnbanMember,
        handleKickMember = _ref.handleKickMember,
        subjectUID = _ref.subjectUID,
        ownerRights = _ref.ownerRights;


    var action_button = void 0;
    var tab_title = void 0;
    var classes = void 0;
    var status_classes = "status mr-1 status-";
    status_classes += status;

    if (banned === false) {
        if (uid !== subjectUID && ownerRights) {
            action_button = _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    "div",
                    { className: "mb-2 mt-3 pr-2 ban-member" },
                    _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faBan, title: "Ban Member", onClick: function onClick() {
                            return handleBanUnbanMember(uid, banned);
                        } })
                ),
                _react2.default.createElement(
                    "div",
                    { className: "mb-2 mt-3 pr-2 kick-member" },
                    _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faTrashAlt, title: "Kick Member", onClick: function onClick() {
                            return handleKickMember(uid);
                        } })
                )
            );
        }

        tab_title = "";
        classes = "contact-tab p-2 bg-white ban-member-tab";
        return _react2.default.createElement(
            "div",
            { className: classes,
                title: tab_title },
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
    } else {
        if (uid !== subjectUID && ownerRights) {
            action_button = _react2.default.createElement(
                "div",
                { className: "mb-2 mt-3 pr-2 unban-member" },
                _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faUserPlus })
            );
        }

        tab_title = "Unban member from group";
        classes = "contact-tab p-2 bg-white unban-member-tab";

        return _react2.default.createElement(
            "div",
            { className: classes,
                title: tab_title, onClick: function onClick() {
                    return handleBanUnbanMember(uid, banned);
                } },
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
    }
};

exports.default = GroupMember;