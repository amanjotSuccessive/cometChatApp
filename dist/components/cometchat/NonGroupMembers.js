"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _chat = require("@cometchat-pro/chat");

var _NonGroupMember = require("./NonGroupMember");

var _NonGroupMember2 = _interopRequireDefault(_NonGroupMember);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _userDefaultAvatar = require("./../../resources/images/user-default-avatar.png");

var _userDefaultAvatar2 = _interopRequireDefault(_userDefaultAvatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonGroupMembers = function (_Component) {
  _inherits(NonGroupMembers, _Component);

  function NonGroupMembers() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, NonGroupMembers);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = NonGroupMembers.__proto__ || Object.getPrototypeOf(NonGroupMembers)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      nonGroupMembers: [],
      nonMembersFetched: false,
      searchString: ""
    }, _this.handleAddMember = function (uid) {

      var GUID = _this.props.activeGUID;
      var membersList = [new _chat.CometChat.GroupMember(uid, _chat.CometChat.GROUP_MEMBER_SCOPE.PARTICIPANT)];

      _chat.CometChat.addMembersToGroup(GUID, membersList, []).then(function (response) {
        _this.props.refreshActiveConversation(GUID);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(NonGroupMembers, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (_lodash2.default.isEmpty(this.state.groupMembers) && this.state.membersFetched === false && this.props.activeGUID !== undefined || this.props.activeGUID !== prevProps.activeGUID || this.props.activeGUIDMemberCount !== prevProps.activeGUIDMemberCount) {
        var GUID = this.props.activeGUID;

        var limit = 30;

        var groupMemberRequest = new _chat.CometChat.GroupMembersRequestBuilder(GUID).setLimit(limit).build();

        groupMemberRequest.fetchNext().then(function (groupMembers) {
          var usersRequest = new _chat.CometChat.UsersRequestBuilder().setLimit(50).setSearchKeyword(_this2.state.searchString).hideBlockedUsers(true).build();

          usersRequest.fetchNext().then(function (userList) {
            _lodash2.default.forEach(groupMembers, function (g) {
              var u_index = _lodash2.default.findIndex(userList, function (o) {
                return o.uid === g.uid;
              });
              _lodash2.default.pullAt(userList, [u_index]);
            });

            _this2.setState({
              nonGroupMembers: userList,
              nonMembersFetched: true
            });
          }, function (error) {
            _this2.setState({
              nonGroupMembers: [],
              nonMembersFetched: true
            });
          });
        }, function (error) {
          _this2.setState({ nonGroupMembers: [], nonMembersFetched: true });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          nonGroupMembers = _state.nonGroupMembers,
          nonMembersFetched = _state.nonMembersFetched;

      var nonGroupMembers_length = nonGroupMembers.length;

      if (nonGroupMembers_length === 0) {
        if (nonMembersFetched) {
          return _react2.default.createElement(
            "div",
            { className: "empty-contacts p-2 bg-white" },
            "No new group members to add.",
            " "
          );
        } else {
          return _react2.default.createElement(
            "div",
            { className: "contact-tab p-2 bg-white" },
            "Fetching users..."
          );
        }
      } else {
        return _react2.default.createElement(
          _react2.default.Fragment,
          null,
          _react2.default.createElement(
            "div",
            { className: "group-member-listing bg-white" },
            _react2.default.createElement(
              "div",
              { className: "group-member-title" },
              "Non group Members"
            ),
            nonGroupMembers.map(function (c) {
              return _react2.default.createElement(_NonGroupMember2.default, {
                key: c.uid,
                uid: c.uid,
                name: c.name,
                avatar: c.avatar === undefined ? _userDefaultAvatar2.default : c.avatar,
                status: c.status,
                handleAddMember: _this3.handleAddMember,
                subjectUID: _this3.props.subjectUID,
                ownerRights: _this3.props.ownerRights
              });
            })
          )
        );
      }
    }
  }]);

  return NonGroupMembers;
}(_react.Component);

exports.default = NonGroupMembers;