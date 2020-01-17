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

var _wait2x = require("../../resources/images/MsgStatusIcons/wait@2x.png");

var _wait2x2 = _interopRequireDefault(_wait2x);

var _sent2x = require("../../resources/images/MsgStatusIcons/sent@2x.png");

var _sent2x2 = _interopRequireDefault(_sent2x);

var _seen2x = require("../../resources/images/MsgStatusIcons/seen@2x.png");

var _seen2x2 = _interopRequireDefault(_seen2x);

var _delivered2x = require("../../resources/images/MsgStatusIcons/delivered@2x.png");

var _delivered2x2 = _interopRequireDefault(_delivered2x);

var _googleMapsLogo = require("../../resources/images/google-maps-logo.png");

var _googleMapsLogo2 = _interopRequireDefault(_googleMapsLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RenderConversation = function (_Component) {
  _inherits(RenderConversation, _Component);

  function RenderConversation() {
    _classCallCheck(this, RenderConversation);

    return _possibleConstructorReturn(this, (RenderConversation.__proto__ || Object.getPrototypeOf(RenderConversation)).apply(this, arguments));
  }

  _createClass(RenderConversation, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          msg = _props.msg,
          msgID = _props.msgID,
          msgType = _props.msgType,
          msgCategory = _props.msgCategory,
          sentAt = _props.sentAt,
          avatar = _props.avatar,
          readAt = _props.readAt,
          deliveredAt = _props.deliveredAt,
          editedAt = _props.editedAt,
          attachmentData = _props.attachmentData,
          handleMessageClick = _props.handleMessageClick,
          showMsgAction = _props.showMsgAction,
          handleMessageDelete = _props.handleMessageDelete,
          handleMessageEdit = _props.handleMessageEdit,
          scrollToBottom = _props.scrollToBottom;


      if (msgCategory === "incoming") {
        return _react2.default.createElement(RenderIcomingMsg, {
          msg: msg,
          msgID: msgID,
          msgType: msgType,
          sentAt: sentAt,
          editedAt: editedAt,
          avatar: avatar,
          attachmentData: attachmentData,
          handleMessageClick: handleMessageClick,
          showMsgAction: showMsgAction,
          scrollToBottom: scrollToBottom
        });
      } else if (msgCategory === "groupMember" || msgCategory === "call") {
        return _react2.default.createElement(RenderJoinedMsg, {
          msg: msg,
          msgID: msgID,
          msgType: msgType,
          sentAt: sentAt,
          avatar: avatar,
          msgCategory: msgCategory
        });
      } else {
        return _react2.default.createElement(RenderOutgoingMsg, {
          msg: msg,
          msgID: msgID,
          msgType: msgType,
          sentAt: sentAt,
          deliveredAt: deliveredAt,
          editedAt: editedAt,
          readAt: readAt,
          attachmentData: attachmentData,
          handleMessageClick: handleMessageClick,
          showMsgAction: showMsgAction,
          handleMessageEdit: handleMessageEdit,
          handleMessageDelete: handleMessageDelete,
          scrollToBottom: scrollToBottom
        });
      }
    }
  }]);

  return RenderConversation;
}(_react.Component);

function RenderJoinedMsg(_ref) {
  var msg = _ref.msg,
      msgType = _ref.msgType,
      sentAt = _ref.sentAt,
      msgCategory = _ref.msgCategory;

  var messageContent = "";
  if (msgCategory === "call") {
    msg = msg + " " + convertStringToDate(sentAt);
    var callIcon = _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faPhoneAlt, className: "mr-1" });
    if (msgType === "video") callIcon = _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faVideo, className: "mr-1" });
    messageContent = _react2.default.createElement(
      "div",
      { className: "msg-bubble ml-2 mr-1", title: msg },
      callIcon,
      msg
    );
  } else {
    messageContent = _react2.default.createElement(
      "div",
      { className: "msg-bubble ml-2 mr-1", title: msg },
      msg
    );
  }

  return _react2.default.createElement(
    "div",
    { className: "member-activity-msg mb-3" },
    _react2.default.createElement(
      "div",
      { className: "msg-row" },
      messageContent
    )
  );
}
function RenderIcomingMsg(_ref2) {
  var msg = _ref2.msg,
      msgType = _ref2.msgType,
      sentAt = _ref2.sentAt,
      editedAt = _ref2.editedAt,
      avatar = _ref2.avatar,
      attachmentData = _ref2.attachmentData,
      handleMessageClick = _ref2.handleMessageClick,
      scrollToBottom = _ref2.scrollToBottom;

  var messageContent = "";
  var messageEdited = "";
  var msgSentAt = _react2.default.createElement(
    "span",
    { className: "small msg-time" },
    convertStringToDate(sentAt)
  );

  if (editedAt !== undefined) {
    messageEdited = _react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement(
        "small",
        null,
        "..."
      ),
      " ",
      _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faPencilAlt, className: "msg-edited-indicator" })
    );
  }
  if (msgType === _chat.CometChat.MESSAGE_TYPE.TEXT) {
    if (msg === undefined) {
      messageContent = _react2.default.createElement(
        "div",
        { className: "msg-bubble msg-bubble-deleted-msg ml-2 mr-1" },
        msg === undefined ? "Message deleted" : msg
      );
      msgSentAt = "";
    } else {
      messageContent = _react2.default.createElement(
        "div",
        { className: "msg-bubble ml-2 mr-1" },
        msg,
        " ",
        messageEdited
      );
    }
  } else if (msgType === _chat.CometChat.MESSAGE_TYPE.IMAGE) {
    if (msg === undefined || msg === "") {
      messageContent = _react2.default.createElement(
        "div",
        { className: "msg-bubble msg-bubble-deleted-msg ml-2 mr-1" },
        "Message deleted"
      );
      msgSentAt = "";
    } else {
      messageContent = _react2.default.createElement(
        "div",
        { className: "msg-media-img ml-2 mr-1" },
        _react2.default.createElement(
          "a",
          {
            href: msg,
            title: "View picture message",
            target: "_blank",
            rel: "noopener noreferrer"
          },
          _react2.default.createElement("img", { src: msg, alt: "Pic message", onLoad: function onLoad() {
              return scrollToBottom();
            } }),
          _react2.default.createElement(
            "div",
            { className: "click-to-view-media" },
            _react2.default.createElement(
              "div",
              { className: "click-to-view-text" },
              _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faImage })
            )
          )
        )
      );
    }
  } else if (msgType === _chat.CometChat.MESSAGE_TYPE.VIDEO) {
    if (msg === undefined || msg === "") {
      messageContent = _react2.default.createElement(
        "div",
        { className: "msg-bubble msg-bubble-deleted-msg ml-2 mr-1" },
        "Message deleted"
      );
    } else {
      messageContent = _react2.default.createElement(
        "div",
        { className: "msg-media-file ml-2 mr-1" },
        _react2.default.createElement(
          "a",
          {
            href: msg,
            title: "Play video message",
            target: "_blank",
            rel: "noopener noreferrer"
          },
          _react2.default.createElement(
            "div",
            { className: "attachment-file-msg px-3 py-3" },
            _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faFilm }),
            _react2.default.createElement(
              "div",
              { className: "attachment-data" },
              _react2.default.createElement(
                "div",
                null,
                attachmentData !== undefined ? attachmentData.fileName : "File name not available"
              ),
              _react2.default.createElement(
                "small",
                null,
                attachmentData !== undefined ? formatFileSize(attachmentData.fileSize) : ""
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "click-to-view-media" },
            _react2.default.createElement(
              "div",
              { className: "click-to-view-text" },
              " ",
              _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faPlay })
            )
          )
        )
      );
    }
  } else if (msgType === _chat.CometChat.MESSAGE_TYPE.AUDIO) {
    if (msg === undefined || msg === "") {
      messageContent = _react2.default.createElement(
        "div",
        { className: "msg-bubble msg-bubble-deleted-msg ml-2 mr-1" },
        "Message deleted"
      );
    } else {
      messageContent = _react2.default.createElement(
        "div",
        { className: "msg-media-img ml-2 mr-1" },
        _react2.default.createElement(
          "audio",
          { controls: true, title: "Play audio message" },
          _react2.default.createElement("source", { src: msg, type: "audio/mpeg" }),
          "Your browser does not support the audio element."
        )
      );
    }
  } else if (msgType === _chat.CometChat.MESSAGE_TYPE.FILE) {
    if (msg === undefined || msg === "") {
      messageContent = _react2.default.createElement(
        "div",
        { className: "msg-bubble msg-bubble-deleted-msg ml-2 mr-1" },
        "Message deleted"
      );
    } else {
      messageContent = _react2.default.createElement(
        "div",
        { className: "msg-media-file ml-2 mr-1" },
        _react2.default.createElement(
          "a",
          {
            href: msg,
            title: "File message",
            target: "_blank",
            rel: "noopener noreferrer"
          },
          _react2.default.createElement(
            "div",
            { className: "attachment-file-msg px-3 py-3" },
            _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faFileAlt }),
            _react2.default.createElement(
              "div",
              { className: "attachment-data" },
              _react2.default.createElement(
                "div",
                null,
                attachmentData !== undefined ? attachmentData.fileName : "Filename not available."
              ),
              _react2.default.createElement(
                "small",
                null,
                attachmentData !== undefined ? formatFileSize(attachmentData.fileSize) : ""
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "click-to-view-media" },
            _react2.default.createElement(
              "div",
              { className: "click-to-view-text" },
              " ",
              _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faCloudDownloadAlt })
            )
          )
        )
      );
    }
  } else if (msgType === 'location') {
    messageContent = _react2.default.createElement(
      "div",
      { className: "msg-media-img location-marker ml-2 mr-1" },
      _react2.default.createElement(
        "a",
        {
          href: msg,
          title: "View location",
          target: "_blank",
          rel: "noopener noreferrer"
        },
        _react2.default.createElement("img", { src: _googleMapsLogo2.default, alt: "location message", onLoad: function onLoad() {
            return scrollToBottom();
          } }),
        _react2.default.createElement(
          "div",
          { className: "click-to-view-media" },
          _react2.default.createElement("div", { className: "click-to-view-text" })
        )
      )
    );
  }

  return _react2.default.createElement(
    "div",
    { className: "incoming-msg mb-3" },
    _react2.default.createElement(
      "div",
      { className: "msg-row text-left" },
      _react2.default.createElement(
        "div",
        { className: "msg-avatar" },
        _react2.default.createElement("img", { src: avatar, alt: "user avatar" })
      ),
      messageContent,
      msgSentAt
    )
  );
}

function RenderOutgoingMsg(_ref3) {
  var msg = _ref3.msg,
      msgID = _ref3.msgID,
      msgType = _ref3.msgType,
      sentAt = _ref3.sentAt,
      readAt = _ref3.readAt,
      deliveredAt = _ref3.deliveredAt,
      editedAt = _ref3.editedAt,
      attachmentData = _ref3.attachmentData,
      handleMessageClick = _ref3.handleMessageClick,
      showMsgAction = _ref3.showMsgAction,
      handleMessageEdit = _ref3.handleMessageEdit,
      handleMessageDelete = _ref3.handleMessageDelete,
      scrollToBottom = _ref3.scrollToBottom;

  var messageStatus = _react2.default.createElement("img", { src: _wait2x2.default, alt: "waitMsgIco" });

  if (readAt !== undefined) {
    messageStatus = _react2.default.createElement("img", { src: _seen2x2.default, alt: "seenMsgIco" });
  } else if (deliveredAt !== undefined) {
    messageStatus = _react2.default.createElement("img", { src: _delivered2x2.default, alt: "deliveredMsgIco" });
  } else if (sentAt !== undefined) {
    messageStatus = _react2.default.createElement("img", { src: _sent2x2.default, alt: "sentMsgIco" });
  }

  var msgSentAt = _react2.default.createElement(
    "span",
    { className: "small msg-time" },
    convertStringToDate(sentAt)
  );
  var messageContent = "";
  var msgReadReciepts = _react2.default.createElement(
    "span",
    { className: "small read-reciept" },
    messageStatus
  );
  var messageEdited = "";
  if (editedAt !== undefined) {
    messageEdited = _react2.default.createElement(
      _react2.default.Fragment,
      null,
      _react2.default.createElement(
        "small",
        null,
        "..."
      ),
      " ",
      _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faPencilAlt, className: "msg-edited-indicator" })
    );
  }
  if (msgType === _chat.CometChat.MESSAGE_TYPE.TEXT) {
    if (msg === undefined) {
      messageContent = _react2.default.createElement(
        "div",
        { className: "msg-bubble msg-bubble-deleted-msg ml-2 mr-1" },
        msg === undefined ? "Message deleted" : msg
      );
      msgSentAt = "";
      msgReadReciepts = "";
    } else {
      messageContent = _react2.default.createElement(
        "div",
        {
          className: "msg-bubble ml-2 mr-1",
          onClick: function onClick(e) {
            return handleMessageClick(e, 0);
          },
          onContextMenu: function onContextMenu(e) {
            return handleMessageClick(e, msgID);
          }
        },
        msg,
        " ",
        messageEdited
      );
    }
  } else if (msgType === _chat.CometChat.MESSAGE_TYPE.IMAGE) {
    if (msg === undefined || msg === "") {
      messageContent = _react2.default.createElement(
        "div",
        { className: "msg-bubble msg-bubble-deleted-msg ml-2 mr-1" },
        "Message deleted"
      );
      msgSentAt = "";
      msgReadReciepts = "";
    } else {
      messageContent = _react2.default.createElement(
        "div",
        {
          className: "msg-media-img ml-2 mr-1",
          onContextMenu: function onContextMenu(e) {
            return handleMessageClick(e, msgID);
          }
        },
        _react2.default.createElement(
          "a",
          {
            href: msg,
            title: "View picture message",
            target: "_blank",
            rel: "noopener noreferrer"
          },
          _react2.default.createElement("img", { src: msg, alt: "Pic message", onLoad: function onLoad() {
              return scrollToBottom();
            } }),
          _react2.default.createElement(
            "div",
            { className: "click-to-view-media" },
            _react2.default.createElement(
              "div",
              { className: "click-to-view-text" },
              _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faImage })
            )
          )
        )
      );
    }
  } else if (msgType === _chat.CometChat.MESSAGE_TYPE.VIDEO) {
    if (msg === undefined || msg === "") {
      messageContent = _react2.default.createElement(
        "div",
        { className: "msg-bubble msg-bubble-deleted-msg ml-2 mr-1" },
        "Message deleted"
      );
      msgSentAt = "";
      msgReadReciepts = "";
    } else {
      messageContent = _react2.default.createElement(
        "div",
        {
          className: "msg-media-file ml-2 mr-1",
          onContextMenu: function onContextMenu(e) {
            return handleMessageClick(e, msgID);
          }
        },
        _react2.default.createElement(
          "a",
          {
            href: msg,
            title: "Play video message",
            target: "_blank",
            rel: "noopener noreferrer"
          },
          _react2.default.createElement(
            "div",
            { className: "attachment-file-msg px-3 py-3" },
            _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faFilm }),
            _react2.default.createElement(
              "div",
              { className: "attachment-data" },
              _react2.default.createElement(
                "div",
                null,
                attachmentData !== undefined ? attachmentData.fileName : "Filename not available"
              ),
              _react2.default.createElement(
                "small",
                null,
                formatFileSize(attachmentData !== undefined ? attachmentData.fileSize : "")
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "click-to-view-media" },
            _react2.default.createElement(
              "div",
              { className: "click-to-view-text" },
              " ",
              _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faPlay })
            )
          )
        )
      );
    }
  } else if (msgType === _chat.CometChat.MESSAGE_TYPE.AUDIO) {
    if (msg === undefined || msg === "") {
      messageContent = _react2.default.createElement(
        "div",
        { className: "msg-bubble msg-bubble-deleted-msg ml-2 mr-1" },
        "Message deleted"
      );
      msgSentAt = "";
      msgReadReciepts = "";
    } else {
      messageContent = _react2.default.createElement(
        "div",
        {
          className: "msg-media-img ml-2 mr-1",
          onContextMenu: function onContextMenu(e) {
            return handleMessageClick(e, msgID);
          }
        },
        _react2.default.createElement(
          "audio",
          { controls: true, title: "Play audio message" },
          _react2.default.createElement("source", { src: msg, type: "audio/mpeg" }),
          "Your browser does not support the audio element."
        )
      );
    }
  } else if (msgType === _chat.CometChat.MESSAGE_TYPE.FILE) {
    if (msg === undefined || msg === "") {
      messageContent = _react2.default.createElement(
        "div",
        { className: "msg-bubble msg-bubble-deleted-msg ml-2 mr-1" },
        "Message deleted"
      );
      msgSentAt = "";
      msgReadReciepts = "";
    } else {
      messageContent = _react2.default.createElement(
        "div",
        {
          className: "msg-media-file ml-2 mr-1",
          onContextMenu: function onContextMenu(e) {
            return handleMessageClick(e, msgID);
          }
        },
        _react2.default.createElement(
          "a",
          {
            href: msg,
            title: "File message",
            target: "_blank",
            rel: "noopener noreferrer"
          },
          _react2.default.createElement(
            "div",
            { className: "attachment-file-msg px-3 py-3" },
            _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faFileAlt }),
            _react2.default.createElement(
              "div",
              { className: "attachment-data" },
              _react2.default.createElement(
                "div",
                null,
                attachmentData !== undefined ? attachmentData.fileName : ""
              ),
              _react2.default.createElement(
                "small",
                null,
                formatFileSize(attachmentData !== undefined ? attachmentData.fileSize : "")
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "click-to-view-media" },
            _react2.default.createElement(
              "div",
              { className: "click-to-view-text" },
              " ",
              _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faCloudDownloadAlt })
            )
          )
        )
      );
    }
  } else if (msgType === 'location') {
    if (msg === undefined || msg === "") {
      messageContent = _react2.default.createElement(
        "div",
        { className: "msg-bubble msg-bubble-deleted-msg ml-2 mr-1" },
        "Message deleted"
      );
      msgSentAt = "";
      msgReadReciepts = "";
    } else {
      messageContent = _react2.default.createElement(
        "div",
        {
          className: "msg-media-img location-marker ml-2 mr-1",
          onContextMenu: function onContextMenu(e) {
            return handleMessageClick(e, msgID);
          }
        },
        _react2.default.createElement(
          "a",
          {
            href: msg,
            title: "View location",
            target: "_blank",
            rel: "noopener noreferrer"
          },
          _react2.default.createElement("img", { width: "170px", src: _googleMapsLogo2.default, alt: "location message", onLoad: function onLoad() {
              return scrollToBottom();
            } }),
          _react2.default.createElement(
            "div",
            { className: "click-to-view-media" },
            _react2.default.createElement("div", { className: "click-to-view-text" })
          )
        )
      );
    }
  }
  return _react2.default.createElement(
    "div",
    { className: "outgoing-msg mb-3" },
    _react2.default.createElement(
      "div",
      { className: "msg-row text-right" },
      msgSentAt,
      messageContent,
      _react2.default.createElement(RenderContextMenu, {
        showMsgAction: showMsgAction,
        msgID: msgID,
        msgType: msgType,
        msg: msg,
        handleMessageDelete: handleMessageDelete,
        handleMessageEdit: handleMessageEdit,
        handleMessageClick: handleMessageClick
      }),
      msgReadReciepts
    )
  );
}

function RenderContextMenu(_ref4) {
  var showMsgAction = _ref4.showMsgAction,
      msgID = _ref4.msgID,
      msgType = _ref4.msgType,
      msg = _ref4.msg,
      handleMessageClick = _ref4.handleMessageClick,
      handleMessageEdit = _ref4.handleMessageEdit,
      handleMessageDelete = _ref4.handleMessageDelete;

  var classes = "msgActions";
  if (!showMsgAction) classes += " d-none";
  var editedOption = void 0;
  if (msgType === _chat.CometChat.MESSAGE_TYPE.TEXT) {
    editedOption = _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      className: "text-info mr-2",
      icon: _freeSolidSvgIcons.faPencilAlt,
      onClick: function onClick() {
        return handleMessageEdit(msg);
      },
      title: "Edit message"
    });
  }
  return _react2.default.createElement(
    "div",
    { className: classes },
    _react2.default.createElement(
      "div",
      { className: "msgActionList" },
      editedOption,
      _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        className: "text-danger mr-3",
        icon: _freeSolidSvgIcons.faTrashAlt,
        onClick: function onClick() {
          return handleMessageDelete();
        },
        title: "Delete message"
      }),
      _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        className: "text-secondary ml-2",
        icon: _freeSolidSvgIcons.faTimes,
        onClick: function onClick(e) {
          return handleMessageClick(e, 0);
        },
        title: "Close message actions"
      })
    )
  );
}

function convertStringToDate(strTime) {
  var timestamp = Number(strTime) * 1000;
  var date = new Date(timestamp);
  var timestr = formatAMPM(date);
  return timestr.toString();
}

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

function formatFileSize(bytes, decimalPoint) {
  if (bytes === 0) return "0 Bytes";
  var k = 1000,
      dm = decimalPoint || 2,
      sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
      i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

exports.default = RenderConversation;