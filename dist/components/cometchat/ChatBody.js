"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _chat = require("@cometchat-pro/chat");

var _ContactConversation = require("./ContactConversation");

var _ContactConversation2 = _interopRequireDefault(_ContactConversation);

var _GroupConversation = require("./GroupConversation");

var _GroupConversation2 = _interopRequireDefault(_GroupConversation);

var _constants = require("../../constants");

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatBody = function (_Component) {
  _inherits(ChatBody, _Component);

  function ChatBody() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ChatBody);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ChatBody.__proto__ || Object.getPrototypeOf(ChatBody)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      msghistory: [],
      newMessage: [],
      showAttachmentOptions: false,
      showContactUtilities: false,
      callTypeActive: 0,
      callSessionUniqID: "",
      showMsgActionID: 0,
      editingMessageActive: false
    }, _this.handleTextInputChange = function (e) {
      _this.setState({ newMessage: e.target.value });

      if (_this.props.activeConversation.uid !== undefined) {
        var receiverId = _this.props.activeConversation.uid;

        var receiverType = _chat.CometChat.RECEIVER_TYPE.USER;

        var typingNotification = new _chat.CometChat.TypingIndicator(receiverId, receiverType);

        if (e.target.value === "") _chat.CometChat.endTyping(typingNotification);else _chat.CometChat.startTyping(typingNotification);
      } else if (_this.props.activeConversation.guid !== undefined) {
        var _receiverId = _this.props.activeConversation.guid;

        var _receiverType = _chat.CometChat.RECEIVER_TYPE.GROUP;

        var _typingNotification = new _chat.CometChat.TypingIndicator(_receiverId, _receiverType);

        if (e.target.value === "") _chat.CometChat.endTyping(_typingNotification);else _chat.CometChat.startTyping(_typingNotification);
      }
    }, _this.showHideAttachSection = function (e) {
      _this.setState({ showAttachmentOptions: !_this.state.showAttachmentOptions });
    }, _this.showHideContactUtilites = function (e) {
      _this.setState({ showContactUtilities: !_this.state.showContactUtilities });
    }, _this.sendCustomMessage = function () {
      var location = window.navigator && window.navigator.geolocation;
      if (location) {
        location.getCurrentPosition(function (position) {
          var customData = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          };

          var customType = 'location';
          var receiverID = void 0;
          var receiverType = void 0;

          if (_this.props.activeConversation.guid !== undefined) {
            receiverID = _this.props.activeConversation.guid;
            receiverType = _chat.CometChat.RECEIVER_TYPE.GROUP;
          } else if (_this.props.activeConversation.uid !== undefined) {
            receiverID = _this.props.activeConversation.uid;
            receiverType = _chat.CometChat.RECEIVER_TYPE.USER;
          }
          var customMessage = new _chat.CometChat.CustomMessage(receiverID, receiverType, customType, customData);

          if (_this.state.editingMessageActive === true) {
            _this.handleMessageUpdate(receiverID, receiverType, customMessage);
          } else {
            _chat.CometChat.sendCustomMessage(customMessage).then(function (message) {
              _this.setState({
                showAttachmentOptions: !_this.state.showAttachmentOptions,
                msghistory: [].concat(_toConsumableArray(_this.state.msghistory), [message])
              });
              _this.scrollToBottom();

              _this.props.handleOnRecentMessageSent(message.id);
            }, function (error) {
              _this.setState({ newMessage: [] });
            });
          }
        }, function (error) {
          alert("Cannot detect your location.");
        });
      }
    }, _this.handleAttachment = function () {
      var fileType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants.MESSAGE_TYPE_MEDIA;

      var otherUID = void 0;
      var receiverType = void 0;

      if (_this.props.activeConversation.guid !== undefined) {
        otherUID = _this.props.activeConversation.guid;
        receiverType = _chat.CometChat.RECEIVER_TYPE.GROUP;
      } else if (_this.props.activeConversation.uid !== undefined) {
        otherUID = _this.props.activeConversation.uid;
        receiverType = _chat.CometChat.RECEIVER_TYPE.USER;
      }

      var messageType = _chat.CometChat.MESSAGE_TYPE.MEDIA;

      if (fileType === _constants.MESSAGE_TYPE_IMAGE) messageType = _chat.CometChat.MESSAGE_TYPE.IMAGE;else if (fileType === _constants.MESSAGE_TYPE_VIDEO) messageType = _chat.CometChat.MESSAGE_TYPE.VIDEO;else if (fileType === _constants.MESSAGE_TYPE_AUDIO) messageType = _chat.CometChat.MESSAGE_TYPE.AUDIO;else if (fileType === _constants.MESSAGE_TYPE_FILE) messageType = _chat.CometChat.MESSAGE_TYPE.FILE;

      var file = document.getElementById("attachment-type-" + fileType).files[0];

      var mediaMessage = new _chat.CometChat.MediaMessage(otherUID, file, messageType, receiverType);
      _chat.CometChat.sendMediaMessage(mediaMessage).then(function (message) {
        // Message sent successfully.
        _this.setState({
          showAttachmentOptions: !_this.state.showAttachmentOptions,
          msghistory: [].concat(_toConsumableArray(_this.state.msghistory), [message])
        });
        _this.scrollToBottom();
        _this.props.handleOnRecentMessageSent(message.id);
      }, function (error) {
        // Handle exception.
      });
    }, _this.sendMessage = function (e) {
      var code = e.keyCode ? e.keyCode : e.which;

      if (e.target.id === "sendMsgIco" || code === 13) {
        //Enter keycode

        var receiverID = void 0;
        var receiverType = void 0;

        if (_this.props.activeConversation.guid !== undefined) {
          receiverID = _this.props.activeConversation.guid;
          receiverType = _chat.CometChat.RECEIVER_TYPE.GROUP;
        } else if (_this.props.activeConversation.uid !== undefined) {
          receiverID = _this.props.activeConversation.uid;
          receiverType = _chat.CometChat.RECEIVER_TYPE.USER;
        }

        var messageText = _this.state.newMessage;

        var textMessage = new _chat.CometChat.TextMessage(receiverID, messageText, receiverType);

        if (_this.state.editingMessageActive === true) {
          _this.handleMessageUpdate(receiverID, receiverType, messageText);
        } else {
          _chat.CometChat.sendMessage(textMessage).then(function (message) {

            _this.setState({
              newMessage: [],
              msghistory: [].concat(_toConsumableArray(_this.state.msghistory), [message])
            });

            _this.scrollToBottom();
            _this.props.handleOnRecentMessageSent(message.id);
          }, function (error) {
            _this.setState({ newMessage: [] });
          });
        }
      }
    }, _this.scrollToBottom = function () {
      if (!_this.state.editingMessageActive) {
        var node = document.getElementsByClassName("chat-body-conversation");
        if (node[0] !== undefined) {
          var bottom = node[0].scrollHeight - node[0].scrollTop === node[0].clientHeight;
          if (!bottom) {
            node[0].scrollTop = node[0].scrollHeight;
          }
        }
      }
    }, _this.handleMessageClick = function (e, msgID) {
      e.preventDefault();
      if (e.type === "contextmenu") {
        //handle right click event
        _this.setState({ showMsgActionID: msgID });
      } else if (e.type === "click") {
        if (_this.state.editingMessageActive === true) _this.setState({
          showMsgActionID: 0,
          editingMessageActive: false,
          newMessage: []
        });else _this.setState({ showMsgActionID: 0 });
      }
    }, _this.handleMessageDelete = function () {
      var messageId = _this.state.showMsgActionID;

      _chat.CometChat.deleteMessage(messageId).then(function (message) {
        var msghistory = _this.state.msghistory;
        var messageKey = _lodash2.default.findIndex(msghistory, function (m) {
          return m.id === messageId;
        });
        msghistory[messageKey] = message;
        _this.setState({
          msghistory: msghistory,
          showMsgActionID: 0,
          editingMessageActive: false
        });
        _this.props.handleOnRecentMessageSent(messageId);
      }, function (error) {
        _this.setState({ showMsgActionID: 0, editingMessageActive: false });
      });
    }, _this.handleMessageEdit = function (msg) {
      _this.setState({ newMessage: msg, editingMessageActive: true });
    }, _this.handleMessageUpdate = function (receiverID, receiverType, messageText) {
      var messageId = _this.state.showMsgActionID;
      var textMessage = new _chat.CometChat.TextMessage(receiverID, messageText, receiverType);
      textMessage.setId(messageId);

      _chat.CometChat.editMessage(textMessage).then(function (message) {
        var msghistory = _this.state.msghistory;

        var messageKey = _lodash2.default.findIndex(msghistory, function (m) {
          return m.id === messageId;
        });

        msghistory[messageKey] = message;

        _this.setState({
          msghistory: msghistory,
          showMsgActionID: 0,
          editingMessageActive: false,
          newMessage: []
        });

        _this.props.handleOnRecentMessageSent(messageId);
      }, function (error) {});
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ChatBody, [{
    key: "componentDidUpdate",


    //fetch msg history
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (this.props.activeConversation.uid !== undefined && this.props.activeConversation.uid !== prevProps.activeConversation.uid || this.props.activeConversation.guid !== undefined && this.props.activeConversation.guid !== prevProps.activeConversation.guid || this.props.activeConversation.guid !== undefined && this.props.activeConversation.membersCount !== prevProps.activeConversation.membersCount || this.props.callActive !== prevProps.callActive) {
        var limit = 100;
        var receiverType = _chat.CometChat.RECEIVER_TYPE.USER;
        var messagesRequest = void 0;
        var otherUID = void 0;
        if (this.props.activeConversation.guid !== undefined) {
          otherUID = this.props.activeConversation.guid;
          messagesRequest = new _chat.CometChat.MessagesRequestBuilder().setLimit(limit).setGUID(otherUID).build();
          receiverType = _chat.CometChat.RECEIVER_TYPE.GROUP;
        } else {
          otherUID = this.props.activeConversation.uid;
          messagesRequest = new _chat.CometChat.MessagesRequestBuilder().setLimit(limit).setUID(otherUID).build();
        }

        messagesRequest.fetchPrevious().then(function (messages) {

          if (!_lodash2.default.isEmpty(messages)) {
            var last_message = _lodash2.default.last(messages);
            if (last_message.sender.uid !== _this2.props.subjectUID) {
              var messageId = last_message.id;
              if (last_message.receiverType === _chat.CometChat.RECEIVER_TYPE.GROUP) _chat.CometChat.markAsRead(messageId, last_message.receiverId, receiverType);else _chat.CometChat.markAsRead(messageId, last_message.sender.uid, receiverType);
            }
          }
          _this2.setState({ msghistory: messages });
          _this2.scrollToBottom();
        }, function (error) {
          _this2.setState({ msghistory: [] });
        });
      }
    }

    //new msg recieve listener
    //real time reciepts listener

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this3 = this;

      //listener1
      var listenerID = _constants.LISTENER_NEW_MESSAGE;

      _chat.CometChat.addMessageListener(listenerID, new _chat.CometChat.MessageListener({
        onTextMessageReceived: function onTextMessageReceived(textMessage) {
          console.log("textMessage", textMessage);
          var messageId = void 0;
          var receiverType = void 0;
          var senderID = void 0;
          if (textMessage.receiverType === _chat.CometChat.RECEIVER_TYPE.USER && textMessage.sender.uid === _this3.props.activeConversation.uid) {
            // Handle text message
            senderID = textMessage.sender.uid;
            messageId = textMessage.id;
            receiverType = textMessage.receiverType;

            if (senderID !== _this3.props.subjectUID) {
              _chat.CometChat.markAsRead(messageId, senderID, receiverType);
            }
            _this3.setState({
              msghistory: [].concat(_toConsumableArray(_this3.state.msghistory), [textMessage])
            });
            _this3.props.handleOnRecentMessageSent(messageId);
          } else if (textMessage.receiverType === _chat.CometChat.RECEIVER_TYPE.GROUP && textMessage.receiverId === _this3.props.activeConversation.guid) {
            if (textMessage.sender.uid !== _this3.props.subjectUID) {

              // Handle text message
              senderID = textMessage.receiverId;
              messageId = textMessage.id;
              receiverType = textMessage.receiverType;

              _chat.CometChat.markAsRead(messageId, senderID, receiverType);
              _this3.props.handleOnRecentMessageSent(messageId);
              _this3.setState({
                msghistory: [].concat(_toConsumableArray(_this3.state.msghistory), [textMessage])
              });
            }
          }
          _this3.scrollToBottom();
        },
        onMediaMessageReceived: function onMediaMessageReceived(mediaMessage) {
          console.log(mediaMessage);
          var messageId = void 0;
          var receiverType = void 0;
          var senderID = void 0;
          // Handle media message
          if (mediaMessage.sender.uid === _this3.props.activeConversation.uid) {
            _this3.setState({
              msghistory: [].concat(_toConsumableArray(_this3.state.msghistory), [mediaMessage])
            });
            senderID = mediaMessage.sender.uid;
            messageId = mediaMessage.id;

            receiverType = _chat.CometChat.RECEIVER_TYPE.USER;
            if (senderID !== _this3.props.subjectUID) _chat.CometChat.markAsRead(messageId, senderID, receiverType);
            _this3.props.handleOnRecentMessageSent(messageId);
          } else if (mediaMessage.receiverType === _chat.CometChat.RECEIVER_TYPE.GROUP && mediaMessage.sender.uid !== _this3.props.subjectUID && mediaMessage.receiverId === _this3.props.activeConversation.guid) {
            _this3.setState({
              msghistory: [].concat(_toConsumableArray(_this3.state.msghistory), [mediaMessage])
            });
            messageId = mediaMessage.id;
            receiverType = _chat.CometChat.RECEIVER_TYPE.GROUP;
            senderID = mediaMessage.receiverId;
            if (senderID !== _this3.props.subjectUID) _chat.CometChat.markAsRead(messageId, senderID, receiverType);

            _this3.props.handleOnRecentMessageSent(messageId);
          }
          _this3.scrollToBottom();
        },
        onMessagesRead: function onMessagesRead(messageReceipt) {
          var msghistory = [].concat(_toConsumableArray(_this3.state.msghistory));
          _lodash2.default.forEach(msghistory, function (value, key) {

            if (value.readAt === undefined) msghistory[key].readAt = messageReceipt.readAt;
          });
          _this3.setState({ msghistory: msghistory });
        },
        onMessagesDelivered: function onMessagesDelivered(messageReceipt) {
          var msghistory = [].concat(_toConsumableArray(_this3.state.msghistory));

          var index_in_history = _lodash2.default.findKey(msghistory, ["id", messageReceipt.messageId]);

          if (index_in_history !== undefined) {
            msghistory[index_in_history]["deliveredAt"] = messageReceipt.deliveredAt;
            _this3.setState({ msghistory: msghistory });
          }
        }
      }));

      var listenerID4 = _constants.LISTENER_RT_MSG_EDIT;

      _chat.CometChat.addMessageListener(listenerID4, new _chat.CometChat.MessageListener({
        onMessageEdited: function onMessageEdited(message) {
          var msghistory = _this3.state.msghistory;
          var messageKey = _lodash2.default.findIndex(msghistory, function (m) {
            return m.id === message.id;
          });
          msghistory[messageKey] = message;
          _this3.setState({ msghistory: msghistory });

          _this3.props.handleOnRecentMessageSent(message.id);
        }
      }));

      var listenerID5 = _constants.LISTENER_RT_MSG_DELETE;
      _chat.CometChat.addMessageListener(listenerID5, new _chat.CometChat.MessageListener({
        onMessageDeleted: function onMessageDeleted(message) {
          var msghistory = _this3.state.msghistory;
          var messageKey = _lodash2.default.findIndex(msghistory, function (m) {
            return m.id === message.id;
          });
          msghistory[messageKey] = message;
          _this3.setState({ msghistory: msghistory });
          _this3.props.handleOnRecentMessageSent(message.id);
        }
      }));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _chat.CometChat.removeMessageListener(_constants.LISTENER_NEW_MESSAGE);
      _chat.CometChat.removeMessageListener(_constants.LISTENER_REAL_TIME_RECIEPTS);
      _chat.CometChat.removeMessageListener(_constants.LISTENER_RT_MSG_EDIT);
      _chat.CometChat.removeMessageListener(_constants.LISTENER_RT_MSG_DELETE);
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.activeConversation.uid !== undefined) {
        return _react2.default.createElement(_ContactConversation2.default, {
          activeConversation: this.props.activeConversation,
          typingIndicatorUIDs: this.props.typingIndicatorUIDs,
          showAttachmentOptions: this.state.showAttachmentOptions,
          showContactUtilities: this.state.showContactUtilities,
          showHideAttachSection: this.showHideAttachSection,
          makeCall: this.props.makeCall,
          showHideContactUtilites: this.showHideContactUtilites,
          msghistory: this.state.msghistory,
          subjectUID: this.props.subjectUID,
          handleTextInputChange: this.handleTextInputChange,
          sendMessage: this.sendMessage,
          sendCustomMessage: this.sendCustomMessage,
          newMessage: this.state.newMessage,
          handleAttachment: this.handleAttachment,
          handleMessageClick: this.handleMessageClick,
          showMsgActionID: this.state.showMsgActionID,
          handleMessageDelete: this.handleMessageDelete,
          handleMessageEdit: this.handleMessageEdit,
          handleBlockUser: this.props.handleBlockUser,
          scrollToBottom: this.scrollToBottom,
          isMobile: this.props.isMobile,
          handleScreenChangesOnMobile: this.props.handleScreenChangesOnMobile,
          chatBodyVisiblity: this.props.chatBodyVisiblity
        });
      } else if (this.props.activeConversation.guid !== undefined) {
        return _react2.default.createElement(_GroupConversation2.default, {
          activeConversation: this.props.activeConversation,
          typingIndicatorUIDs: this.props.typingIndicatorUIDs,
          showAttachmentOptions: this.state.showAttachmentOptions,
          showContactUtilities: this.state.showContactUtilities,
          showHideAttachSection: this.showHideAttachSection,
          makeCall: this.props.makeCall,
          showHideContactUtilites: this.showHideContactUtilites,
          msghistory: this.state.msghistory,
          subjectUID: this.props.subjectUID,
          handleTextInputChange: this.handleTextInputChange,
          sendMessage: this.sendMessage,
          sendCustomMessage: this.sendCustomMessage,
          newMessage: this.state.newMessage,
          handleAttachment: this.handleAttachment,
          handleMessageClick: this.handleMessageClick,
          showMsgActionID: this.state.showMsgActionID,
          handleMessageDelete: this.handleMessageDelete,
          handleMessageEdit: this.handleMessageEdit,
          handleToggleSubSidebar: this.props.handleToggleSubSidebar,
          handleAddGroupMemberToggle: this.props.handleAddGroupMemberToggle,
          handleLeaveGroup: this.props.handleLeaveGroup,
          scrollToBottom: this.scrollToBottom,
          isMobile: this.props.isMobile,
          handleScreenChangesOnMobile: this.props.handleScreenChangesOnMobile,
          chatBodyVisiblity: this.props.chatBodyVisiblity,
          ownerRights: this.props.ownerRights
        });
      } else {
        var classes = "chat-body col-md-7 col-xl-8 col-sm-12 col-xs-12 p-0 no-active-chat ";
        classes += this.props.chatBodyVisiblity;
        return _react2.default.createElement(
          "div",
          { className: classes },
          _react2.default.createElement(
            "p",
            null,
            "Say Hi to someone today!"
          )
        );
      }
    }
  }]);

  return ChatBody;
}(_react.Component);

exports.default = ChatBody;