"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _chat = require("@cometchat-pro/chat");

var _GroupMember = require("./GroupMember");

var _GroupMember2 = _interopRequireDefault(_GroupMember);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _userDefaultAvatar = require("./../resources/images/user-default-avatar.png");

var _userDefaultAvatar2 = _interopRequireDefault(_userDefaultAvatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GroupMembers = function (_Component) {
    _inherits(GroupMembers, _Component);

    function GroupMembers() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, GroupMembers);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GroupMembers.__proto__ || Object.getPrototypeOf(GroupMembers)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            groupMembers: [],
            bannedMembers: [],
            nonMembers: [],
            groupMembersFetched: false,
            bannedMembersFetched: false,
            searchString: ""
        }, _this.handleBanUnbanMember = function (UID, isbanned) {
            if (_this.props.subjectUID !== UID && _this.props.ownerRights) {
                var GUID = _this.props.activeGUID;

                if (!isbanned) //active member
                    {
                        _chat.CometChat.banGroupMember(GUID, UID).then(function (response) {
                            var groupMembers = _this.state.groupMembers;
                            var memberIndex = _lodash2.default.findIndex(_this.state.groupMembers, function (m) {
                                return m.uid === UID;
                            });
                            var bannedMembers = [].concat(_toConsumableArray(_this.state.bannedMembers), [groupMembers[memberIndex]]);
                            _lodash2.default.pullAt(groupMembers, [memberIndex]);
                            _this.setState({ groupMembers: groupMembers, bannedMembers: bannedMembers });
                            _this.props.refreshActiveConversation(GUID);
                        }, function (error) {});
                    } else //banned member
                    {
                        _chat.CometChat.unbanGroupMember(GUID, UID).then(function (response) {
                            var bannedMembers = _this.state.bannedMembers;
                            var memberIndex = _lodash2.default.findIndex(bannedMembers, function (m) {
                                return m.uid === UID;
                            });
                            _lodash2.default.pullAt(bannedMembers, [memberIndex]);
                            _this.setState({ bannedMembers: bannedMembers });
                            _this.props.refreshActiveConversation(GUID);
                        }, function (error) {});
                    }
            } else {
                alert("You are not authorized");
            }
        }, _this.handleKickMember = function (UID) {
            if (_this.props.subjectUID !== UID && _this.props.ownerRights) {
                var GUID = _this.props.activeGUID;

                _chat.CometChat.kickGroupMember(GUID, UID).then(function (response) {
                    var groupMembers = _this.state.groupMembers;
                    var memberIndex = _lodash2.default.findIndex(_this.state.groupMembers, function (m) {
                        return m.uid === UID;
                    });
                    _lodash2.default.pullAt(groupMembers, [memberIndex]);
                    _this.setState({ groupMembers: groupMembers });
                    _this.props.refreshActiveConversation(GUID);
                }, function (error) {});
            } else {
                alert("You are not authorized");
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(GroupMembers, [{
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
            var _this2 = this;

            if (_lodash2.default.isEmpty(this.state.groupMembers) && this.state.groupMembersFetched === false && this.props.activeGUID !== undefined || this.props.activeGUID !== prevProps.activeGUID || this.props.activeGUIDMemberCount !== prevProps.activeGUIDMemberCount) {

                var GUID = this.props.activeGUID;

                var limit = 30;

                var groupMemberRequest = new _chat.CometChat.GroupMembersRequestBuilder(GUID).setLimit(limit).build();

                groupMemberRequest.fetchNext().then(function (groupMembers) {

                    var bannedMembersRequest = new _chat.CometChat.BannedMembersRequestBuilder(GUID).setLimit(limit).build();

                    bannedMembersRequest.fetchNext().then(function (bannedMembers) {

                        _this2.setState({ groupMembers: groupMembers, groupMembersFetched: true, bannedMembers: bannedMembers, bannedMembersFetched: true });
                    }, function (error) {

                        _this2.setState({ bannedMembers: [], bannedMembersFetched: true });
                    });
                }, function (error) {

                    _this2.setState({ groupMembers: [], groupMembersFetched: true });
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var _state = this.state,
                groupMembers = _state.groupMembers,
                groupMembersFetched = _state.groupMembersFetched,
                bannedMembers = _state.bannedMembers;

            var groupMembers_length = groupMembers.length;
            var bannedMembers_length = bannedMembers.length;

            if (groupMembers_length === 0 && bannedMembers_length) {
                if (groupMembersFetched) {
                    return _react2.default.createElement(
                        "div",
                        { className: "empty-contacts p-2 bg-white" },
                        "No group members. "
                    );
                } else {
                    return _react2.default.createElement(
                        "div",
                        { className: "contact-tab p-2 bg-white" },
                        "Fetching group members..."
                    );
                }
            } else {

                var activeTitle = void 0;
                var bannedTitle = "";

                if (groupMembers.length > 0) activeTitle = _react2.default.createElement(
                    "div",
                    { className: "group-member-title" },
                    "Active Members"
                );

                if (bannedMembers.length > 0) bannedTitle = _react2.default.createElement(
                    "div",
                    { className: "group-member-title" },
                    "Banned Members"
                );

                return _react2.default.createElement(
                    _react2.default.Fragment,
                    null,
                    _react2.default.createElement(
                        "div",
                        { className: "group-member-listing bg-white" },
                        activeTitle,
                        groupMembers.map(function (c) {
                            return _react2.default.createElement(_GroupMember2.default, {
                                key: c.uid,
                                uid: c.uid,
                                name: c.name,
                                avatar: c.avatar === undefined ? _userDefaultAvatar2.default : c.avatar,
                                status: c.status,
                                handleBanUnbanMember: _this3.handleBanUnbanMember,
                                handleKickMember: _this3.handleKickMember,
                                subjectUID: _this3.props.subjectUID,
                                banned: false,
                                ownerRights: _this3.props.ownerRights
                            });
                        }),
                        bannedTitle,
                        bannedMembers.map(function (c) {
                            return _react2.default.createElement(_GroupMember2.default, {
                                key: c.uid,
                                uid: c.uid,
                                name: c.name,
                                avatar: c.avatar === undefined ? _userDefaultAvatar2.default : c.avatar,
                                status: c.status,
                                handleBanUnbanMember: _this3.handleBanUnbanMember,
                                subjectUID: _this3.props.subjectUID,
                                banned: true,
                                ownerRights: _this3.props.ownerRights
                            });
                        })
                    )
                );
            }
        }
    }]);

    return GroupMembers;
}(_react.Component);

exports.default = GroupMembers;