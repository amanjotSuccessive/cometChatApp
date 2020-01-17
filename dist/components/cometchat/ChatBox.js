"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _chat = require("@cometchat-pro/chat");

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _Contacts = require("./Contacts");

var _Contacts2 = _interopRequireDefault(_Contacts);

var _Conversations = require("./Conversations");

var _Conversations2 = _interopRequireDefault(_Conversations);

var _Groups = require("./Groups");

var _Groups2 = _interopRequireDefault(_Groups);

var _ChatBody = require("./ChatBody");

var _ChatBody2 = _interopRequireDefault(_ChatBody);

var _Icon24px2x = require("../../resources/images/contact/Icon 24px@2x.png");

var _Icon24px2x2 = _interopRequireDefault(_Icon24px2x);

var _Icon24px2x3 = require("../../resources/images/recent/Icon 24px@2x.png");

var _Icon24px2x4 = _interopRequireDefault(_Icon24px2x3);

var _ic_people_outline2x = require("../../resources/images/group/ic_people_outline@2x.png");

var _ic_people_outline2x2 = _interopRequireDefault(_ic_people_outline2x);

var _constants = require("../../constants");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _BlockedContacts = require("./BlockedContacts");

var _BlockedContacts2 = _interopRequireDefault(_BlockedContacts);

var _GroupMembers = require("./GroupMembers");

var _GroupMembers2 = _interopRequireDefault(_GroupMembers);

var _NonGroupMembers = require("./NonGroupMembers");

var _NonGroupMembers2 = _interopRequireDefault(_NonGroupMembers);

var _Fade = require("react-reveal/Fade");

var _Fade2 = _interopRequireDefault(_Fade);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatBox = function (_Component) {
  _inherits(ChatBox, _Component);

  function ChatBox() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ChatBox);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ChatBox.__proto__ || Object.getPrototypeOf(ChatBox)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      activeConversation: [],
      activeSidebar: 3, //1 = contacts, 2 = groups, 3 = recent
      activeSubSidebar: false, // activeSidebar = 1 & true == blocked contacts, activeSidebar = 2 & true == group members,
      addNewGroupMember: false,
      typingIndicatorUIDs: [],
      showSidebarUtilitiesC: false,
      createGroupFormShow: false,
      showAskPasswordModal: false,
      protectedGroupAskPasswordGuid: 0,
      onlineUsers: 0,
      lastMessageId: 0,
      isMobile: window.innerWidth < 768
    }, _this.handleOnRecentMessageSent = function (lastMessageId) {

      _this.setState({ lastMessageId: lastMessageId });
    }, _this.handleContactClick = function (uid) {
      if (_this.state.activeConversation.uid !== uid) {
        _chat.CometChat.getUser(uid).then(function (user) {
          _this.setState({ activeConversation: user });
        }, function (error) {
          _this.setState({ activeConversation: [] });
        });
      }
    }, _this.handleConversationClick = function (id, conversationType) {
      console.log(id);
      if (conversationType === "user") {
        _this.handleContactClick(id);
      } else {
        _this.handleGroupClick(id);
      }
    }, _this.handleGroupClick = function (guid) {
      var groupPassword = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

      _chat.CometChat.getGroup(guid).then(function (group) {
        if (!group.hasJoined) {
          if (group.type === "password" && groupPassword === "") {
            _this.setState({
              showAskPasswordModal: true,
              protectedGroupAskPasswordGuid: guid
            });
          } else {
            var GUID = guid;
            var password = groupPassword;
            var groupType = group.type;

            _chat.CometChat.joinGroup(GUID, groupType, password).then(function (group) {
              _this.setState({
                activeConversation: group,
                showAskPasswordModal: false,
                protectedGroupAskPasswordGuid: 0
              });
            }, function (error) {
              _this.setState({
                activeConversation: [],
                showAskPasswordModal: false,
                protectedGroupAskPasswordGuid: 0
              });
            });
          }
        } else {
          _this.setState({ activeConversation: group });
        }
      }, function (error) {
        _this.setState({ activeConversation: [] });
      });
    }, _this.handleTabClick = function (type) {
      if (_this.state.activeSidebar !== type) {
        _this.setState({
          activeSidebar: type,
          activeConversation: [],
          showSidebarUtilitiesC: false,
          activeSubSidebar: false,
          addNewGroupMember: false
        });
      }
    }, _this.showHideSidebarUtilites = function (e) {
      _this.setState({ showSidebarUtilitiesC: !_this.state.showSidebarUtilitiesC });
    }, _this.handleBlockUser = function (usersList) {
      _chat.CometChat.blockUsers(usersList).then(function (list) {
        _this.setState({ activeConversation: [] });
      });
    }, _this.handleToggleSubSidebar = function () {
      _this.setState({
        activeSubSidebar: true,
        addNewGroupMember: false,
        showSidebarUtilitiesC: false
      });
    }, _this.handleAddGroupMemberToggle = function () {
      _this.setState({
        activeSubSidebar: true,
        addNewGroupMember: true,
        showSidebarUtilitiesC: false
      });
    }, _this.showCreateGroupModal = function () {
      _this.setState({
        createGroupFormShow: true,
        showSidebarUtilitiesC: false
      });
    }, _this.hideCreateGroupModal = function () {
      _this.setState({
        createGroupFormShow: false
      });
    }, _this.hideAskPasswordModal = function () {
      _this.setState({
        showAskPasswordModal: false
      });
    }, _this.handleLeaveGroup = function (guid) {
      var GUID = guid; // guid of the group to join

      _chat.CometChat.leaveGroup(GUID).then(function (hasLeft) {
        _this.setState({
          activeConversation: [],
          activeSubSidebar: false,
          addNewGroupMember: false
        });
      }, function (error) {});
    }, _this.refreshActiveConversation = function (GUID) {
      _this.handleGroupClick(GUID);
    }, _this.updateWindowDimensions = function () {
      var isMobile = window.innerWidth < 768;
      _this.setState({ isMobile: isMobile });
    }, _this.handleScreenChangesOnMobile = function () {
      if (_this.state.activeSubSidebar) _this.setState({ activeSubSidebar: false, addNewGroupMember: false });else if (!_lodash2.default.isEmpty(_this.state.activeConversation)) _this.setState({ activeConversation: [] });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ChatBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener("resize", this.updateWindowDimensions);

      var listenerId = _constants.LISTENER_TYPING_INDICATOR;

      _chat.CometChat.addMessageListener(listenerId, new _chat.CometChat.MessageListener({
        onTypingStarted: function onTypingStarted(typingIndicator) {
          var typingUID = typingIndicator.sender.uid;

          var currentUIDs = _this2.state.typingIndicatorUIDs;

          var typingIndicatorUIDs = _lodash2.default.concat(currentUIDs, typingUID);

          _this2.setState({ typingIndicatorUIDs: typingIndicatorUIDs });
        },
        onTypingEnded: function onTypingEnded(typingIndicator) {
          var typingUID = typingIndicator.sender.uid;

          var currentUIDs = _this2.state.typingIndicatorUIDs;

          var typingIndicatorUIDs = _lodash2.default.pull(currentUIDs, typingUID);

          _this2.setState({ typingIndicatorUIDs: typingIndicatorUIDs });
        }
      }));

      var listenerID2 = _constants.LISTENER_RT_PRESENCE;

      _chat.CometChat.addUserListener(listenerID2, new _chat.CometChat.UserListener({
        onUserOnline: function onUserOnline(onlineUser) {
          var onlineUsers = _this2.state.onlineUsers;
          onlineUsers = onlineUsers + 1;
          if (_this2.state.activeConversation.uid !== undefined && onlineUser.uid === _this2.state.activeConversation.uid) {
            var activeConversation = _this2.state.activeConversation;
            activeConversation = onlineUser;
            var _onlineUsers = _this2.state.onlineUsers;
            _onlineUsers = _onlineUsers + 1;
            _this2.setState({ activeConversation: activeConversation, onlineUsers: _onlineUsers });
          } else {
            _this2.setState({ onlineUsers: onlineUsers });
          }
          _this2.props.notify(onlineUser.name + " is now online", "success");
        },
        onUserOffline: function onUserOffline(offlineUser) {
          var onlineUsers = _this2.state.onlineUsers;
          onlineUsers = onlineUsers - 1;
          if (onlineUsers < 0) onlineUsers = 0;
          if (_this2.state.activeConversation.uid !== undefined && offlineUser.uid === _this2.state.activeConversation.uid) {
            var activeConversation = _this2.state.activeConversation;
            activeConversation = offlineUser;
            _this2.setState({ activeConversation: activeConversation, onlineUsers: onlineUsers });
          } else {
            _this2.setState({ onlineUsers: onlineUsers });
          }
          _this2.props.notify(offlineUser.name + " is now offline", "warn");
        }
      }));

      var listenerID5 = _constants.RT_GROUP_MEMBER_ACTIONS;

      _chat.CometChat.addGroupListener(listenerID5, new _chat.CometChat.GroupListener({
        onGroupMemberJoined: function onGroupMemberJoined(message, joinedUser, joinedGroup) {
          if (_this2.state.activeConversation.guid !== undefined && joinedGroup.guid === _this2.state.activeConversation.guid) {
            var activeConversation = joinedGroup;
            activeConversation.membersCount = _this2.state.activeConversation.membersCount + 1;
            _this2.setState({ activeConversation: activeConversation });
          }
        },
        onGroupMemberLeft: function onGroupMemberLeft(message, leavingUser, group) {
          if (_this2.state.activeConversation.guid !== undefined && group.guid === _this2.state.activeConversation.guid) {
            var activeConversation = group;
            activeConversation.membersCount = _this2.state.activeConversation.membersCount - 1;
            _this2.setState({ activeConversation: activeConversation });
          }
        },
        onGroupMemberKicked: function onGroupMemberKicked(message, kickedUser, kickedBy, kickedFrom) {
          var activeConversation = kickedFrom;
          if (_this2.state.activeConversation.guid !== undefined && kickedFrom.guid === _this2.state.activeConversation.guid) {
            if (_this2.props.user.uid === kickedUser.uid) activeConversation = [];

            _this2.setState({ activeConversation: activeConversation });
            if (_lodash2.default.isEmpty(activeConversation)) {
              _this2.props.notify(kickedBy.name + " kicked you from group " + kickedFrom.name, "error");
            }
          }
        },
        onGroupMemberBanned: function onGroupMemberBanned(message, bannedUser, bannedBy, bannedFrom) {
          var activeConversation = bannedFrom;
          if (_this2.state.activeConversation.guid !== undefined && bannedFrom.guid === _this2.state.activeConversation.guid) {
            if (_this2.props.user.uid === bannedUser.uid) activeConversation = [];

            _this2.setState({ activeConversation: activeConversation });
            if (_lodash2.default.isEmpty(activeConversation)) {
              _this2.props.notify(bannedBy.name + " banned you from group " + bannedFrom.name, "error");
            }
          }
        },
        onGroupMemberUnbanned: function onGroupMemberUnbanned(message, unbannedUser, unbannedBy, unbannedFrom) {
          var activeConversation = unbannedFrom;
          if (_this2.state.activeConversation.guid !== undefined && unbannedFrom.guid === _this2.state.activeConversation.guid) {
            if (_this2.props.user.uid === unbannedUser.uid) activeConversation = [];

            _this2.setState({ activeConversation: activeConversation });
          }
        }
      }));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.updateWindowDimensions);
      _chat.CometChat.removeMessageListener(_constants.LISTENER_TYPING_INDICATOR);
      _chat.CometChat.removeMessageListener(_constants.LISTENER_RT_PRESENCE);
      _chat.CometChat.removeMessageListener(_constants.RT_GROUP_MEMBER_ACTIONS);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var conversation_classes = "conversations px-4";
      var contact_classes = "contacts px-4";
      var blocked_contact_classes = "contacts px-4";
      var group_member_classes = "contacts px-4";
      var non_group_member_classes = "contacts px-4";
      var group_classes = "groups px-4";
      var contact_sidebar_classes = "py-3 flex-fill";
      var conversation_sidebar_classes = "py-3 flex-fill";
      var group_sidebar_classes = "py-3 flex-fill";
      var activeTabName = void 0;
      var utilities_sidebar_show = void 0;
      var blockedUsersOption = void 0;
      var createGroupOption = void 0;
      var showBlockedContacts = false;
      var showGroupMembers = false;
      var showNonGroupMembers = false;
      var sidebarContactsUtilityLabel = void 0;
      var sidebarContactsUtilityIcon = void 0;
      if (this.state.activeSidebar === 2) {
        group_sidebar_classes += " active";
        utilities_sidebar_show = this.state.showSidebarUtilitiesC ? "contact-utilities-list bg-white" : "contact-utilities-list bg-white hidden";
        if (this.state.activeSubSidebar) {
          if (this.state.addNewGroupMember) {
            showNonGroupMembers = true;
          } else {
            showGroupMembers = true;
          }
        }

        if (showGroupMembers) {
          group_member_classes += " active";
          activeTabName = "Group Members";
        } else if (showNonGroupMembers) {
          non_group_member_classes += " active";
          activeTabName = "Add new Members";
        } else {
          group_classes += " active";
          activeTabName = "Groups";
          sidebarContactsUtilityIcon = _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faUsers, title: "Add new group" });
          sidebarContactsUtilityLabel = "Create Group";
          createGroupOption = _react2.default.createElement(
            "div",
            {
              className: "create-group-option mb-2",
              onClick: this.showCreateGroupModal
            },
            sidebarContactsUtilityIcon,
            _react2.default.createElement(
              "span",
              { className: "" },
              "\xA0 ",
              sidebarContactsUtilityLabel
            )
          );
        }
      } else if (this.state.activeSidebar === 1) {

        contact_sidebar_classes += " active";
        utilities_sidebar_show = this.state.showSidebarUtilitiesC ? "contact-utilities-list bg-white" : "contact-utilities-list bg-white hidden";

        showBlockedContacts = this.state.activeSubSidebar;

        if (showBlockedContacts) {
          blocked_contact_classes += " active";
          activeTabName = "Blocked Users";
          sidebarContactsUtilityLabel = "Users";
          sidebarContactsUtilityIcon = _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faUserAlt, title: "Available Users" });
        } else {
          contact_classes += " active";
          activeTabName = "Users";
          sidebarContactsUtilityLabel = "Blocked Users";
          sidebarContactsUtilityIcon = _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, {
            icon: _freeSolidSvgIcons.faUserAltSlash,
            title: "Block/Unblock Users"
          });
        }

        blockedUsersOption = _react2.default.createElement(
          "div",
          {
            className: "blocked-users-list-option mb-2",
            onClick: this.handleToggleSubSidebar
          },
          sidebarContactsUtilityIcon,
          _react2.default.createElement(
            "span",
            { className: "" },
            "\xA0 ",
            sidebarContactsUtilityLabel
          )
        );
      } else {
        conversation_sidebar_classes += " active";

        utilities_sidebar_show = this.state.showSidebarUtilitiesC ? "contact-utilities-list bg-white" : "contact-utilities-list bg-white hidden";

        conversation_classes += " active";
        activeTabName = "Conversations";
      }

      var chatSidebarVisiblity = "";
      var chatBodyVisiblity = "";
      if (this.state.isMobile) {
        if (this.state.activeSidebar === 1) {
          if (!_lodash2.default.isEmpty(this.state.activeConversation)) {
            chatSidebarVisiblity = "hidden";
          } else {
            chatBodyVisiblity = "hidden";
          }
        } else {
          //groups
          if (this.state.activeSubSidebar) {
            chatBodyVisiblity = "hidden";
          } else {
            if (!_lodash2.default.isEmpty(this.state.activeConversation)) {
              chatSidebarVisiblity = "hidden";
            } else {
              chatBodyVisiblity = "hidden";
            }
          }
        }
      }

      var chatSidebarClasses = "chat-sidebar col-md-5 col-xl-4 col-sm-12 col-xs-12 p-0 ";
      chatSidebarClasses += chatSidebarVisiblity;

      var navBtnSidebar = void 0;
      var sidebarUtlitiesIcoClasses = "sidebar-contact-utilities my-2 ml-4 ";

      if (this.state.activeSubSidebar) {
        // blocked contacts
        navBtnSidebar = _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: _freeSolidSvgIcons.faArrowLeft,
          className: "ml-1 mr-2 back-arrow",
          onClick: function onClick() {
            return _this3.handleScreenChangesOnMobile();
          }
        });
        sidebarUtlitiesIcoClasses += " d-none";
      } else {
        sidebarUtlitiesIcoClasses += " d-inline-block";
      }
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          "div",
          { className: chatSidebarClasses },
          _react2.default.createElement(
            "div",
            { className: "chat-sidebar-title px-4 py-3 m-0" },
            _react2.default.createElement(
              "h3",
              { className: "d-inline-block" },
              navBtnSidebar,
              activeTabName
            ),
            _react2.default.createElement(
              "div",
              {
                className: sidebarUtlitiesIcoClasses,
                onClick: this.showHideSidebarUtilites
              },
              _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faEllipsisV })
            ),
            _react2.default.createElement(
              "div",
              { className: utilities_sidebar_show },
              blockedUsersOption,
              createGroupOption,
              _react2.default.createElement(
                "div",
                { className: "logout-row", onClick: this.props.handleLogout },
                _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faPowerOff, title: "Logout" }),
                _react2.default.createElement(
                  "span",
                  { className: "" },
                  "\xA0 Logout"
                )
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: conversation_classes },
            _react2.default.createElement(_Conversations2.default, {
              handleConversationClick: this.handleConversationClick,
              activeID: this.state.activeConversation.uid !== undefined ? this.state.activeConversation.uid : this.state.activeConversation.guid !== undefined ? this.state.activeConversation.guid : "",
              typingIndicatorUIDs: this.state.typingIndicatorUIDs,
              onlineUsers: this.state.onlineUsers,
              lastMessageId: this.state.lastMessageId
            })
          ),
          _react2.default.createElement(
            "div",
            { className: contact_classes },
            _react2.default.createElement(_Contacts2.default, {
              handleContactClick: this.handleContactClick,
              activeContactUID: this.state.activeConversation.uid !== undefined ? this.state.activeConversation.uid : "",
              typingIndicatorUIDs: this.state.typingIndicatorUIDs,
              showBlockedContacts: showBlockedContacts,
              onlineUsers: this.state.onlineUsers
            })
          ),
          _react2.default.createElement(
            "div",
            { className: group_classes },
            _react2.default.createElement(_Groups2.default, {
              handleGroupClick: this.handleGroupClick,
              activeGUID: this.state.activeConversation.guid !== undefined ? this.state.activeConversation.guid : "",
              showGroupMembers: showGroupMembers,
              createGroupFormShow: this.state.createGroupFormShow,
              showAskPasswordModal: this.state.showAskPasswordModal,
              hideCreateGroupModal: this.hideCreateGroupModal,
              hideAskPasswordModal: this.hideAskPasswordModal,
              protectedGroupAskPasswordGuid: this.state.protectedGroupAskPasswordGuid
            })
          ),
          _react2.default.createElement(
            _Fade2.default,
            { right: true },
            _react2.default.createElement(
              "div",
              { className: blocked_contact_classes },
              _react2.default.createElement(_BlockedContacts2.default, {
                showBlockedContacts: showBlockedContacts,
                handleScreenChangesOnMobile: this.handleScreenChangesOnMobile
              })
            )
          ),
          _react2.default.createElement(
            _Fade2.default,
            { right: true },
            _react2.default.createElement(
              "div",
              { className: group_member_classes },
              _react2.default.createElement(_GroupMembers2.default, {
                showGroupMembers: showGroupMembers,
                activeGUID: this.state.activeConversation.guid !== undefined ? this.state.activeConversation.guid : "",
                activeGUIDMemberCount: this.state.activeConversation.membersCount,
                ownerRights: this.state.activeConversation.owner !== undefined && this.state.activeConversation.owner === this.props.user.uid || this.state.activeConversation.scope === "admin" ? true : false,
                subjectUID: this.props.user.uid,
                refreshActiveConversation: this.refreshActiveConversation,
                handleScreenChangesOnMobile: this.handleScreenChangesOnMobile
              })
            )
          ),
          _react2.default.createElement(
            _Fade2.default,
            { right: true },
            _react2.default.createElement(
              "div",
              { className: non_group_member_classes },
              _react2.default.createElement(_NonGroupMembers2.default, {
                showNonGroupMembers: showNonGroupMembers,
                activeGUID: this.state.activeConversation.guid !== undefined ? this.state.activeConversation.guid : "",
                activeGUIDMemberCount: this.state.activeConversation.membersCount,
                ownerRights: this.state.activeConversation.owner !== undefined && this.state.activeConversation.owner === this.props.user.uid || this.state.activeConversation.scope === "admin" ? true : false,
                subjectUID: this.props.user.uid,
                refreshActiveConversation: this.refreshActiveConversation,
                handleScreenChangesOnMobile: this.handleScreenChangesOnMobile
              })
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "sidebar-tabs d-flex" },
            _react2.default.createElement(
              "div",
              {
                id: "conversation-sidebar",
                className: conversation_sidebar_classes,
                onClick: function onClick(e) {
                  return _this3.handleTabClick(3);
                } },
              _react2.default.createElement("img", { src: _Icon24px2x4.default, alt: "conversationIcon" }),
              _react2.default.createElement(
                "p",
                { className: "m-0 text-font-grey" },
                "Conversations"
              )
            ),
            _react2.default.createElement(
              "div",
              {
                id: "contacts-sidebar",
                className: contact_sidebar_classes,
                onClick: function onClick(e) {
                  return _this3.handleTabClick(1);
                }
              },
              _react2.default.createElement("img", { src: _Icon24px2x2.default, alt: "contactIcon" }),
              _react2.default.createElement(
                "p",
                { className: "m-0 text-font-grey" },
                "Users"
              )
            ),
            _react2.default.createElement(
              "div",
              {
                id: "groups-sidebar",
                className: group_sidebar_classes,
                onClick: function onClick(e) {
                  return _this3.handleTabClick(2);
                }
              },
              _react2.default.createElement("img", { src: _ic_people_outline2x2.default, alt: "groupIcon" }),
              _react2.default.createElement(
                "p",
                { className: "m-0 text-font-grey" },
                "Groups"
              )
            )
          )
        ),
        _react2.default.createElement(_ChatBody2.default, {
          activeConversation: this.state.activeConversation,
          subjectUID: this.props.user.uid,
          handleShowingCallNotification: this.props.handleShowingCallNotification,
          makeCall: this.props.makeCall,
          callActive: this.props.callActive,
          typingIndicatorUIDs: this.state.typingIndicatorUIDs,
          activeSidebar: this.state.activeSidebar,
          handleBlockUser: this.handleBlockUser,
          handleToggleSubSidebar: this.handleToggleSubSidebar,
          handleAddGroupMemberToggle: this.handleAddGroupMemberToggle,
          handleLeaveGroup: this.handleLeaveGroup,
          chatBodyVisiblity: chatBodyVisiblity,
          isMobile: this.state.isMobile,
          handleOnRecentMessageSent: this.handleOnRecentMessageSent,
          handleScreenChangesOnMobile: this.handleScreenChangesOnMobile,
          ownerRights: this.state.activeConversation.owner !== undefined && this.state.activeConversation.owner === this.props.user.uid || this.state.activeConversation.scope === "admin" ? true : false
        })
      );
    }
  }]);

  return ChatBox;
}(_react.Component);

exports.default = ChatBox;