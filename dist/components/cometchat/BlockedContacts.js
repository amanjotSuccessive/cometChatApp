"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _chat = require("@cometchat-pro/chat");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _BlockedContact = require("./BlockedContact");

var _BlockedContact2 = _interopRequireDefault(_BlockedContact);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _userDefaultAvatar = require("../../resources/images/user-default-avatar.png");

var _userDefaultAvatar2 = _interopRequireDefault(_userDefaultAvatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BlockedContacts = function (_Component) {
    _inherits(BlockedContacts, _Component);

    function BlockedContacts(props) {
        _classCallCheck(this, BlockedContacts);

        var _this = _possibleConstructorReturn(this, (BlockedContacts.__proto__ || Object.getPrototypeOf(BlockedContacts)).call(this, props));

        _this.handleSearchStringChange = function (e) {
            _this.setState({ searchString: e.target.value });

            var limit = 50;

            var blockedUsersRequest = new _chat.CometChat.BlockedUsersRequestBuilder().setSearchKeyword(e.target.value).setLimit(limit).build();

            blockedUsersRequest.fetchNext().then(function (userList) {

                _this.setState({ contacts: userList, contactsFetched: false });
            }, function (error) {
                _this.setState({ contacts: [], contactsFetched: false });
            });
        };

        _this.handleUnBlockUser = function (usersList) {
            _chat.CometChat.unblockUsers(usersList).then(function (list) {

                var contacts = _this.state.contacts;

                _lodash2.default.forEach(list, function (v, k) {

                    _lodash2.default.remove(contacts, function (c) {

                        return c.uid === k;
                    });
                });

                _this.setState({ contacts: contacts });
            });
        };

        _this.state = {
            contacts: [],
            contactsFetched: false,
            searchString: ""
        };
        return _this;
    }

    _createClass(BlockedContacts, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
            var _this2 = this;

            if (_lodash2.default.isEmpty(this.state.contacts) && this.state.contactsFetched === false || this.props.showBlockedContacts !== prevProps.showBlockedContacts) {

                var limit = 50;

                var blockedUsersRequest = new _chat.CometChat.BlockedUsersRequestBuilder().setLimit(limit).setSearchKeyword(this.state.searchString).build();

                blockedUsersRequest.fetchNext().then(function (userList) {
                    _this2.setState({ contacts: userList, contactsFetched: true });
                }, function (error) {
                    _this2.setState({ contacts: [], contactsFetched: true });
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var _state = this.state,
                contacts = _state.contacts,
                contactsFetched = _state.contactsFetched;


            var contacts_length = contacts.length;

            if (contacts_length === 0 && this.state.searchString === "") {
                if (contactsFetched) {
                    return _react2.default.createElement(
                        "div",
                        { className: "empty-contacts p-2 bg-white" },
                        "No users available. "
                    );
                } else {
                    return _react2.default.createElement(
                        "div",
                        { className: "contact-tab p-2 bg-white" },
                        "Fetching users..."
                    );
                }
            } else {
                var show_contacts_warning = "d-none mt-1";

                if (contacts_length === 0 && this.state.searchString !== "") {
                    show_contacts_warning = "mt-1";
                }

                return _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        "div",
                        { className: "search-container mb-3" },
                        _react2.default.createElement(
                            "div",
                            { className: "input-group" },
                            _react2.default.createElement(
                                "div",
                                { className: "input-group-btn" },
                                _react2.default.createElement(
                                    "button",
                                    { className: "btn btn-default", type: "submit" },
                                    _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faSearch })
                                )
                            ),
                            _react2.default.createElement("input", { type: "text", className: "form-control", placeholder: "Search name", name: "search",
                                onChange: function onChange(e) {
                                    return _this3.handleSearchStringChange(e);
                                },
                                value: this.state.searchString })
                        ),
                        _react2.default.createElement(
                            "small",
                            { className: show_contacts_warning },
                            _react2.default.createElement(
                                "i",
                                null,
                                "No matching users found."
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "contact-listing bg-white" },
                        contacts.map(function (c) {
                            return _react2.default.createElement(_BlockedContact2.default, {
                                key: c.uid,
                                uid: c.uid,
                                name: c.name,
                                avatar: c.avatar === undefined ? _userDefaultAvatar2.default : c.avatar,
                                handleUnBlockUser: _this3.handleUnBlockUser
                            });
                        })
                    )
                );
            }
        }
    }]);

    return BlockedContacts;
}(_react.Component);

exports.default = BlockedContacts;