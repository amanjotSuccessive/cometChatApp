"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _chat = require("@cometchat-pro/chat");

var _constants = require("../../constants");

var _attachment = require("../../resources/images/attachment.png");

var _attachment2 = _interopRequireDefault(_attachment);

var _Path2x = require("../../resources/images/send.imageset/Path@2x.png");

var _Path2x2 = _interopRequireDefault(_Path2x);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _Flip = require("react-reveal/Flip");

var _Flip2 = _interopRequireDefault(_Flip);

var _RenderConversation = require("./RenderConversation");

var _RenderConversation2 = _interopRequireDefault(_RenderConversation);

var _reactResponsive = require("react-responsive");

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

var _userDefaultAvatar = require("./../resources/images/user-default-avatar.png");

var _userDefaultAvatar2 = _interopRequireDefault(_userDefaultAvatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContactConversation = function ContactConversation(props) {
  var _props$activeConversa = props.activeConversation,
      activeContactUID = _props$activeConversa.uid,
      activeContactName = _props$activeConversa.name,
      activeContactAvatar = _props$activeConversa.avatar,
      activeContactStatus = _props$activeConversa.status;


  var contact_status = activeContactStatus;

  //check for typing indicator
  var typingIndicator = _lodash2.default.findIndex(props.typingIndicatorUIDs, function (i) {
    return i === activeContactUID;
  });
  if (typingIndicator > -1) contact_status = _react2.default.createElement(
    "span",
    { className: "product_italic" },
    "typing..."
  );

  var act_status_classes = "status-text status-";

  act_status_classes += activeContactStatus;

  var attachment_show = props.showAttachmentOptions ? "chat-send-attachment" : "chat-send-attachment hidden";

  var utilities_contact_show = props.showContactUtilities ? "contact-utilities-list bg-white" : "contact-utilities-list bg-white hidden";

  var chat_body_header_classes = "chat-body-header py-3 d-flex ";
  if (props.isMobile) {
    chat_body_header_classes += "px-2";
  } else {
    chat_body_header_classes += "px-4";
  }
  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    _react2.default.createElement(
      "div",
      {
        className: "chat-body col-md-7 col-xl-8 col-sm-12 col-xs-12 p-0",
        onClick: function onClick(e) {
          return props.showHideAttachSection;
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
              className: "ml-1 mr-2 back-arrow",
              icon: _freeSolidSvgIcons.faArrowLeft,
              onClick: function onClick() {
                return props.handleScreenChangesOnMobile();
              }
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "contact-avatar-small" },
            _react2.default.createElement("img", {
              className: "mr-2",
              src: activeContactAvatar !== undefined ? activeContactAvatar : _userDefaultAvatar2.default,
              alt: "contact avatar"
            })
          ),
          _react2.default.createElement(
            "div",
            { className: "contact-data" },
            _react2.default.createElement(
              "p",
              { className: "mb-0 contact-name" },
              activeContactName
            ),
            _react2.default.createElement(
              "p",
              { className: "m-0 text-light-grey contact-status" },
              _react2.default.createElement(
                "span",
                { className: act_status_classes },
                contact_status
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
              return props.makeCall("1", activeContactUID);
            }
          }),
          _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, {
            icon: _freeSolidSvgIcons.faVideo,
            className: "ml-4",
            onClick: function onClick(e) {
              return props.makeCall("2", activeContactUID);
            }
          })
        ),
        _react2.default.createElement(
          "div",
          {
            className: "contact-utilities my-2 ml-4",
            onClick: props.showHideContactUtilites
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
                return props.handleBlockUser([activeContactUID]);
              }
            },
            _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faSignOutAlt }),
            "\xA0Block"
          )
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "chat-body-conversation p-4" },
        props.msghistory.map(function (m) {
          if (m.category === "action") return false;
          var msg = "";
          var attachmentData = [];
          var showMsgAction = false;
          var messageType = m.type;

          if (m.category === "call") {
            if (m.action === "initiated") {
              if (m.receiverId === props.subjectUID) {
                msg = "Incoming @ ";
              } else {
                msg = "Outgoing @ ";
              }
            } else return false;
          } else {
            if (m.action !== undefined && m.action === "deleted") msg = "";else if (m.type === _chat.CometChat.MESSAGE_TYPE.TEXT) {
              msg = m["text"];
            } else if (m.data.attachments !== undefined && (m.type === _chat.CometChat.MESSAGE_TYPE.FILE || m.type === _chat.CometChat.MESSAGE_TYPE.IMAGE || m.type === _chat.CometChat.MESSAGE_TYPE.AUDIO || m.type === _chat.CometChat.MESSAGE_TYPE.VIDEO)) {
              msg = m.data.url;
            }
          }

          if (m.type === _chat.CometChat.MESSAGE_TYPE.FILE || m.type === _chat.CometChat.MESSAGE_TYPE.VIDEO) {
            attachmentData = m.attachment;
          } else if (m.type === "location") {
            var lat = m.data.customData.latitude;
            var lon = m.data.customData.longitude;
            msg = "http://maps.google.com/maps?q=" + lat + "," + lon;
          }

          if (props.showMsgActionID === m.id) showMsgAction = true;
          if (m.category === "call") {
            return _react2.default.createElement(_RenderConversation2.default, {
              key: m.id,
              msg: msg,
              msgType: messageType,
              sentAt: m.sentAt,
              readAt: m.readAt,
              editedAt: m.editedAt,
              deliveredAt: m.deliveredAt,
              msgCategory: "call",
              attachmentData: attachmentData,
              handleMessageClick: props.handleMessageClick,
              msgID: m.id,
              showMsgAction: showMsgAction,
              handleMessageDelete: props.handleMessageDelete,
              handleMessageEdit: props.handleMessageEdit,
              scrollToBottom: props.scrollToBottom
            });
          } else if (m.sender.uid === props.subjectUID) {
            return _react2.default.createElement(_RenderConversation2.default, {
              key: m.id,
              msg: msg,
              msgType: messageType,
              sentAt: m.sentAt,
              readAt: m.readAt,
              editedAt: m.editedAt,
              deliveredAt: m.deliveredAt,
              msgCategory: "outgoing",
              attachmentData: attachmentData,
              handleMessageClick: props.handleMessageClick,
              msgID: m.id,
              showMsgAction: showMsgAction,
              handleMessageDelete: props.handleMessageDelete,
              handleMessageEdit: props.handleMessageEdit,
              scrollToBottom: props.scrollToBottom
            });
          } else {
            return _react2.default.createElement(_RenderConversation2.default, {
              key: m.id,
              msg: msg,
              msgType: messageType,
              sentAt: m.sentAt,
              editedAt: m.editedAt,
              msgCategory: "incoming",
              avatar: m.sender.avatar === undefined ? _userDefaultAvatar2.default : m.sender.avatar,
              attachmentData: attachmentData,
              handleMessageClick: props.handleMessageClick,
              msgID: m.id,
              showMsgAction: showMsgAction,
              handleMessageDelete: props.handleMessageDelete,
              handleMessageEdit: props.handleMessageEdit,
              scrollToBottom: props.scrollToBottom
            });
          }
        })
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
                return props.showHideAttachSection(e);
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
                return props.handleTextInputChange(e);
              },
              onKeyPress: function onKeyPress(e) {
                return props.sendMessage(e, "text");
              },
              value: props.newMessage
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
                return props.sendMessage(e, "text");
              }
            })
          )
        )
      ),
      _react2.default.createElement(
        _Flip2.default,
        { bottom: true, when: props.showAttachmentOptions },
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
                  { className: "attach-option", title: "Send a picture message" },
                  _react2.default.createElement(
                    "label",
                    { htmlFor: "attachment-type-2" },
                    _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faFileImage })
                  ),
                  _react2.default.createElement("input", {
                    type: "file",
                    id: "attachment-type-2",
                    onChange: function onChange(e) {
                      return props.handleAttachment(_constants.MESSAGE_TYPE_IMAGE);
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
                      return props.handleAttachment(_constants.MESSAGE_TYPE_VIDEO);
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
                      return props.handleAttachment(_constants.MESSAGE_TYPE_AUDIO);
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
                      return props.handleAttachment(_constants.MESSAGE_TYPE_FILE);
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
                        return props.sendCustomMessage();
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
};

exports.default = ContactConversation;