"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _chat = require("@cometchat-pro/chat");

var _constants = require("../../constants");

var _attachment = require("../../resources/images/attachment.png");

var _attachment2 = _interopRequireDefault(_attachment);

var _Path2x = require("../../resources/images/send.imageset/Path@2x.png");

var _Path2x2 = _interopRequireDefault(_Path2x);

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _Flip = require("react-reveal/Flip");

var _Flip2 = _interopRequireDefault(_Flip);

var _RenderConversation = require("./RenderConversation");

var _RenderConversation2 = _interopRequireDefault(_RenderConversation);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _groupDefaultAvatar = require("../../resources/images/group-default-avatar.png");

var _groupDefaultAvatar2 = _interopRequireDefault(_groupDefaultAvatar);

var _reactResponsive = require("react-responsive");

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GroupConversation = function (_Component) {
  _inherits(GroupConversation, _Component);

  function GroupConversation() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GroupConversation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GroupConversation.__proto__ || Object.getPrototypeOf(GroupConversation)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      members: []
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GroupConversation, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (this.props.activeConversation.guid !== prevProps.activeConversation.guid || _lodash2.default.isEmpty(this.state.members) && this.props.activeConversation.guid !== undefined || this.props.activeConversation.guid === prevProps.activeConversation.guid && this.props.activeConversation.membersCount !== prevProps.activeConversation.membersCount) {
        var subjectUID = this.props.subjectUID;
        var GUID = this.props.activeConversation.guid;
        var groupMemberRequest = new _chat.CometChat.GroupMembersRequestBuilder(GUID).setLimit(4).build();

        groupMemberRequest.fetchNext().then(function (groupMembers) {
          var members = [];
          if (!_lodash2.default.isEmpty(groupMembers)) {
            _lodash2.default.forEach(groupMembers, function (m) {
              if (m.uid === subjectUID) members = [].concat(_toConsumableArray(members), ["You"]);else members = [].concat(_toConsumableArray(members), [m.name]);
            });
          }
          _this2.setState({ members: members });
        }, function (error) {
          _this2.setState({ members: [] });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _props$activeConversa = this.props.activeConversation,
          activeGUID = _props$activeConversa.guid,
          activeGroupName = _props$activeConversa.name,
          activeGroupIcon = _props$activeConversa.icon;


      var attachment_show = this.props.showAttachmentOptions ? "chat-send-attachment" : "chat-send-attachment hidden";

      var utilities_contact_show = this.props.showContactUtilities ? "contact-utilities-list bg-white" : "contact-utilities-list bg-white hidden";

      var chat_body_header_classes = "chat-body-header py-3 d-flex ";
      var contact_name_classes = "mb-0 contact-name ";
      var contact_status_classes = "m-0 text-light-grey contact-status ";
      var chat_body_classes = "chat-body col-md-7 col-xl-8 col-sm-12 col-xs-12 p-0 ";
      var add_new_members = void 0;
      if (this.props.isMobile) {
        chat_body_header_classes += "px-2";
        contact_name_classes += "font-size-14";
        contact_status_classes += "font-size-14";

        chat_body_classes += this.props.chatBodyVisiblity;
      } else {
        chat_body_header_classes += "px-4";
      }

      if (this.props.ownerRights) {
        add_new_members = _react2.default.createElement(
          "p",
          {
            className: "u-optn",
            onClick: function onClick() {
              return _this3.props.handleAddGroupMemberToggle();
            }
          },
          _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faUsersCog }),
          "\xA0Add new members"
        );
      }

      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          "div",
          {
            className: chat_body_classes,
            onClick: function onClick(e) {
              return _this3.props.showHideAttachSection;
            }
          },
          _react2.default.createElement(
            "div",
            { className: chat_body_header_classes },
            _react2.default.createElement(
              "div",
              { className: "flex-fill" },
              _react2.default.createElement(
                _reactResponsive2.default,
                { maxDeviceWidth: 767 },
                _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, {
                  className: "mx-1",
                  icon: _freeSolidSvgIcons.faArrowLeft,
                  onClick: function onClick() {
                    return _this3.props.handleScreenChangesOnMobile();
                  }
                })
              ),
              _react2.default.createElement(
                "div",
                { className: "contact-avatar-small" },
                _react2.default.createElement("img", {
                  className: "mr-2",
                  src: activeGroupIcon === undefined ? _groupDefaultAvatar2.default : activeGroupIcon,
                  alt: "group icon"
                })
              ),
              _react2.default.createElement(
                "div",
                { className: "contact-data" },
                _react2.default.createElement(
                  "p",
                  { className: contact_name_classes },
                  activeGroupName
                ),
                _react2.default.createElement(
                  "div",
                  { className: contact_status_classes },
                  _react2.default.createElement(
                    "div",
                    { className: "status-text status-offline", id: "members-list-chat" },
                    !_lodash2.default.isEmpty(this.state.members) ? _lodash2.default.map(this.state.members).join(", ") : "",
                    this.state.members.length > 3 ? " and others" : ""
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "contact-calling-optns my-2" },
              _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, {
                icon: _freeSolidSvgIcons.faPhoneAlt,
                className: "ml-4",
                onClick: function onClick(e) {
                  return _this3.props.makeCall("1", activeGUID, _chat.CometChat.RECEIVER_TYPE.GROUP);
                }
              }),
              _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, {
                icon: _freeSolidSvgIcons.faVideo,
                className: "ml-4",
                onClick: function onClick(e) {
                  return _this3.props.makeCall("2", activeGUID, _chat.CometChat.RECEIVER_TYPE.GROUP);
                }
              })
            ),
            _react2.default.createElement(
              "div",
              {
                className: "contact-utilities my-2 ml-4",
                onClick: this.props.showHideContactUtilites
              },
              _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faEllipsisV })
            ),
            _react2.default.createElement(
              "div",
              { className: utilities_contact_show },
              _react2.default.createElement(
                "p",
                {
                  className: "u-optn",
                  onClick: function onClick() {
                    return _this3.props.handleToggleSubSidebar();
                  }
                },
                _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faUsers }),
                "\xA0View members"
              ),
              add_new_members,
              _react2.default.createElement(
                "p",
                {
                  className: "u-optn mb-0",
                  onClick: function onClick() {
                    return _this3.props.handleLeaveGroup(activeGUID);
                  }
                },
                _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faSignOutAlt }),
                "\xA0Leave group"
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "chat-body-conversation p-4" },
            this.props.msghistory.map(function (m) {
              if (m.category === "action" && m.type !== "groupMember") return false;

              var msg = "";
              var attachmentData = [];
              var showMsgAction = false;
              if (m.category === "call") {
                if (m.action === "initiated") {
                  if (m.sender.uid === _this3.props.subjectUID) {
                    msg = "Outgoing @ ";
                  } else {
                    msg = "Incoming @ ";
                  }
                } else return false;
              } else if (m.type === "groupMember") {
                msg = m["message"];
                if (m.sender.uid === _this3.props.subjectUID) {
                  //self actions in group
                  if (m.action === "joined" || m.action === "left") {
                    msg = "You " + m.action;
                  } else if (m.action === "banned" || m.action === "unbanned" || m.action === "kicked" || m.action === "added") {
                    msg = "You " + m.action + " " + m.actionOn.name;
                  }
                } else {
                  if ((m.action === "banned" || m.action === "unbanned") && m.actionFor.uid === _this3.props.subjectUID) {
                    msg = m.actionBy.name + " " + m.action + " You";
                  }
                }
              } else if (m.action !== undefined && m.action === "deleted") msg = "";else if (m.type === _chat.CometChat.MESSAGE_TYPE.TEXT) {
                msg = m["text"];
              } else if (m.data.attachments !== undefined && (m.type === _chat.CometChat.MESSAGE_TYPE.FILE || m.type === _chat.CometChat.MESSAGE_TYPE.IMAGE || m.type === _chat.CometChat.MESSAGE_TYPE.AUDIO || m.type === _chat.CometChat.MESSAGE_TYPE.VIDEO)) {
                msg = m.data.url;
              }

              if (m.type === _chat.CometChat.MESSAGE_TYPE.FILE || m.type === _chat.CometChat.MESSAGE_TYPE.VIDEO) {
                attachmentData = m.attachment;
              } else if (m.type === "location") {
                var lat = m.data.customData.latitude;
                var lon = m.data.customData.longitude;
                msg = "http://maps.google.com/maps?q=" + lat + "," + lon;
              }
              if (_this3.props.showMsgActionID === m.id) showMsgAction = true;
              if (m.category === "call") {
                return _react2.default.createElement(_RenderConversation2.default, {
                  key: m.id,
                  msg: msg,
                  msgType: m.type,
                  sentAt: m.sentAt,
                  editedAt: m.editedAt,
                  msgCategory: "call",
                  avatar: m.sender.avatar,
                  senderUID: m.sender.uid
                });
              } else if (m.type === "groupMember") {
                return _react2.default.createElement(_RenderConversation2.default, {
                  key: m.id,
                  msg: msg,
                  msgType: m.type,
                  sentAt: m.sentAt,
                  editedAt: m.editedAt,
                  msgCategory: "groupMember",
                  avatar: m.sender.avatar,
                  senderUID: m.sender.uid
                });
              } else if (m.sender.uid === _this3.props.subjectUID) {
                return _react2.default.createElement(_RenderConversation2.default, {
                  key: m.id,
                  msg: msg,
                  msgType: m.type,
                  sentAt: m.sentAt,
                  editedAt: m.editedAt,
                  readAt: m.readAt,
                  deliveredAt: m.deliveredAt,
                  msgCategory: "outgoing",
                  attachmentData: attachmentData,
                  senderUID: m.sender.uid,
                  handleMessageClick: _this3.props.handleMessageClick,
                  msgID: m.id,
                  showMsgAction: showMsgAction,
                  handleMessageDelete: _this3.props.handleMessageDelete,
                  handleMessageEdit: _this3.props.handleMessageEdit,
                  scrollToBottom: _this3.props.scrollToBottom
                });
              } else {
                return _react2.default.createElement(_RenderConversation2.default, {
                  key: m.id,
                  msg: msg,
                  msgType: m.type,
                  sentAt: m.sentAt,
                  editedAt: m.editedAt,
                  msgCategory: "incoming",
                  avatar: m.sender.avatar,
                  attachmentData: attachmentData,
                  senderUID: m.sender.uid,
                  handleMessageClick: _this3.props.handleMessageClick,
                  msgID: m.id,
                  showMsgAction: showMsgAction,
                  handleMessageDelete: _this3.props.handleMessageDelete,
                  handleMessageEdit: _this3.props.handleMessageEdit,
                  scrollToBottom: _this3.props.scrollToBottom
                });
              }
            }),
            this.props.scrollToBottom()
          ),
          _react2.default.createElement(
            "div",
            { className: "chat-body-sendmsg px-3 py-4" },
            _react2.default.createElement(
              "div",
              { className: "d-flex justify-content-between" },
              _react2.default.createElement(
                "div",
                { className: "mr-3" },
                _react2.default.createElement("img", {
                  src: _attachment2.default,
                  id: "attachmentIco",
                  alt: "attachmentIco",
                  onClick: function onClick(e) {
                    return _this3.props.showHideAttachSection(e);
                  }
                })
              ),
              _react2.default.createElement(
                "div",
                { className: "flex-fill" },
                _react2.default.createElement("input", {
                  type: "text",
                  className: "form-control",
                  id: "typeAMsg",
                  placeholder: "Type a message",
                  onChange: function onChange(e) {
                    return _this3.props.handleTextInputChange(e);
                  },
                  onKeyPress: function onKeyPress(e) {
                    return _this3.props.sendMessage(e, "text");
                  },
                  value: this.props.newMessage
                })
              ),
              _react2.default.createElement(
                "div",
                { className: "ml-3" },
                _react2.default.createElement("img", {
                  src: _Path2x2.default,
                  id: "sendMsgIco",
                  alt: "sendMsgIcon",
                  onClick: function onClick(e) {
                    return _this3.props.sendMessage(e, "text");
                  }
                })
              )
            )
          ),
          _react2.default.createElement(
            _Flip2.default,
            { bottom: true, when: this.props.showAttachmentOptions },
            _react2.default.createElement(
              "div",
              { className: "chat-send-attachment-outer" },
              _react2.default.createElement(
                "div",
                { className: attachment_show },
                _react2.default.createElement(
                  "div",
                  { className: "d-flex justify-content-between" },
                  _react2.default.createElement(
                    "div",
                    { className: "px-5 py-4 mx-1" },
                    _react2.default.createElement(
                      "div",
                      {
                        className: "attach-option",
                        title: "Send a picture message"
                      },
                      _react2.default.createElement(
                        "label",
                        { htmlFor: "attachment-type-2" },
                        _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faFileImage })
                      ),
                      _react2.default.createElement("input", {
                        type: "file",
                        id: "attachment-type-2",
                        onChange: function onChange(e) {
                          return _this3.props.handleAttachment(_constants.MESSAGE_TYPE_IMAGE);
                        }
                      })
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "px-5 py-4 mx-1" },
                    _react2.default.createElement(
                      "div",
                      { className: "attach-option", title: "Send a video message" },
                      _react2.default.createElement(
                        "label",
                        { htmlFor: "attachment-type-3" },
                        _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faFileVideo })
                      ),
                      _react2.default.createElement("input", {
                        type: "file",
                        id: "attachment-type-3",
                        onChange: function onChange(e) {
                          return _this3.props.handleAttachment(_constants.MESSAGE_TYPE_VIDEO);
                        }
                      })
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "px-5 py-4 mx-1" },
                    _react2.default.createElement(
                      "div",
                      { className: "attach-option", title: "Send a audio message" },
                      _react2.default.createElement(
                        "label",
                        { htmlFor: "attachment-type-4" },
                        _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faFileAudio })
                      ),
                      _react2.default.createElement("input", {
                        type: "file",
                        id: "attachment-type-4",
                        onChange: function onChange(e) {
                          return _this3.props.handleAttachment(_constants.MESSAGE_TYPE_AUDIO);
                        }
                      })
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "px-5 py-4 mx-1" },
                    _react2.default.createElement(
                      "div",
                      { className: "attach-option", title: "Send a file message" },
                      _react2.default.createElement(
                        "label",
                        { htmlFor: "attachment-type-5" },
                        _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faFileAlt })
                      ),
                      _react2.default.createElement("input", {
                        type: "file",
                        id: "attachment-type-5",
                        onChange: function onChange(e) {
                          return _this3.props.handleAttachment(_constants.MESSAGE_TYPE_FILE);
                        }
                      })
                    )
                  ),
                  _react2.default.createElement(
                    "div",
                    { className: "px-5 py-4 mx-1" },
                    _react2.default.createElement(
                      "div",
                      { className: "attach-option", title: "Send location" },
                      _react2.default.createElement(
                        "label",
                        { htmlFor: "attachment-type-1" },
                        _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faMapMarkerAlt, onClick: function onClick(e) {
                            return _this3.props.sendCustomMessage();
                          } })
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return GroupConversation;
}(_react.Component);

exports.default = GroupConversation;