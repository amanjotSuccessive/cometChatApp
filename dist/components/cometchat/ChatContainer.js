"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _chat = require("@cometchat-pro/chat");

var _ChatBox = require("./ChatBox");

var _ChatBox2 = _interopRequireDefault(_ChatBox);

var _Zoom = require("react-reveal/Zoom");

var _Zoom2 = _interopRequireDefault(_Zoom);

var _Slide = require("react-reveal/Slide");

var _Slide2 = _interopRequireDefault(_Slide);

var _callaudio_answer2x = require("../../resources/images/callaudio_answer@2x.png");

var _callaudio_answer2x2 = _interopRequireDefault(_callaudio_answer2x);

var _callaudio_hangup2x = require("../../resources/images/callaudio_hangup@2x.png");

var _callaudio_hangup2x2 = _interopRequireDefault(_callaudio_hangup2x);

var _reactResponsive = require("react-responsive");

var _reactResponsive2 = _interopRequireDefault(_reactResponsive);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _reactToastify = require("react-toastify");

require("react-toastify/dist/ReactToastify.min.css");

var _groupDefaultAvatar = require("../../resources/images/group-default-avatar.png");

var _groupDefaultAvatar2 = _interopRequireDefault(_groupDefaultAvatar);

var _userDefaultAvatar = require("./../../resources/images/user-default-avatar.png");

var _userDefaultAvatar2 = _interopRequireDefault(_userDefaultAvatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChatContainer = function (_Component) {
  _inherits(ChatContainer, _Component);

  function ChatContainer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ChatContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ChatContainer.__proto__ || Object.getPrototypeOf(ChatContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      user: [],
      showCallNotification: false,
      call: []
    }, _this.makeCall = function () {
      var callTypeActive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var receiverID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var receiverType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _chat.CometChat.RECEIVER_TYPE.USER;

      if (_lodash2.default.isEmpty(_this.state.call)) {
        var callType = _chat.CometChat.CALL_TYPE.AUDIO;

        if (callTypeActive === "2") callType = _chat.CometChat.CALL_TYPE.VIDEO;
        var call = new _chat.CometChat.Call(receiverID, callType, receiverType);

        _chat.CometChat.initiateCall(call).then(function (outGoingCall) {
          _this.handleShowingCallNotification(outGoingCall);
          // perform action on success. Like show your calling screen.
        }, function (error) {
          _this.setState({ call: [] });
        });
      }
    }, _this.handleShowingCallNotification = function (call) {
      _this.setState({ call: call });
    }, _this.handleStartCall = function () {
      var sessionID = _this.state.call.sessionId;

      _chat.CometChat.startCall(sessionID, document.getElementById("callScreen"), new _chat.CometChat.OngoingCallListener({
        onUserJoined: function onUserJoined(user) {
          /* Notification received here if another user joins the call. */
          console.log("User joined call:", user);
          _this.notify("Call connected", "success");
          /* this method can be use to display message or perform any actions if someone joining the call */
        },
        onUserLeft: function onUserLeft(user) {
          /* Notification received here if another user left the call. */
          console.log("User left call:", user);
          // this.setState({call : []});
          /* this method can be use to display message or perform any actions if someone leaving the call */
        },
        onCallEnded: function onCallEnded(call) {
          /* Notification received here if current ongoing call is ended. */
          console.log("Call ended:", call);
          _this.setState({ call: [] });
          /* hiding/closing the call screen can be done here. */
        }
      }));
    }, _this.handleAcceptCall = function () {
      var sessionID = _this.state.call.sessionId;

      _chat.CometChat.acceptCall(sessionID).then(function (call) {
        console.log("Call accepted successfully:", call);
        _this.setState({ call: call });
        // start the call using the startCall() method
        _this.handleStartCall();
      }, function (error) {
        console.log("Call acceptance failed with error", error);
        _this.setState({ call: [] });
        // handle exception
      });
    }, _this.handleRejectCall = function () {
      var sessionID = _this.state.call.sessionId;
      var status = _chat.CometChat.CALL_STATUS.REJECTED;
      _chat.CometChat.rejectCall(sessionID, status).then(function (call) {
        console.log("Call rejected successfully:", call);
        _this.setState({ call: [] });
      }, function (error) {
        console.log("Call rejection failed with error", error);
      });
    }, _this.notify = function (msg, type) {
      if (type === "success") {
        _reactToastify.toast.success(msg);
      } else if (type === "warn") {
        _reactToastify.toast.warn(msg);
      } else if (type === "error") {
        _reactToastify.toast.error(msg);
      } else {
        _reactToastify.toast.info(msg);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ChatContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.user.authToken !== "") {
        _chat.CometChat.getLoggedinUser().then(function (user) {
          _this2.setState({ user: user });
        });
      } else window.location = "/#/login";

      var listnerID = "CALL_LISTENER";
      _chat.CometChat.addCallListener(listnerID, new _chat.CometChat.CallListener({
        onIncomingCallReceived: function onIncomingCallReceived(call) {
          console.log("Incoming call:", call);
          _this2.handleShowingCallNotification(call);
        },
        onOutgoingCallAccepted: function onOutgoingCallAccepted(call) {
          console.log("Outgoing call accepted:", call);
          _this2.setState({ call: call });
          _this2.handleStartCall();
        },
        onOutgoingCallRejected: function onOutgoingCallRejected(call) {
          if (!_lodash2.default.isEmpty(_this2.state.call)) {
            _this2.notify("Call rejected", "error");
          }
          console.log("Outgoing call rejected:", call);

          _this2.setState({ call: [] });
        },
        onIncomingCallCancelled: function onIncomingCallCancelled(call) {
          if (!_lodash2.default.isEmpty(_this2.state.call)) {
            _this2.notify("Call cancelled", "error");
          }
          _this2.setState({ call: [] });
        }
      }));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      _chat.CometChat.removeCallListener("CALL_LISTENER");
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.props.user.authToken === "") return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          "h3",
          null,
          "Checking if user is logged in ..."
        )
      );

      var _state$user = this.state.user,
          name = _state$user.name,
          avatar = _state$user.avatar;


      var callIncomingNotification = "call-notification-panel mt-3 mr-3 px-3 py-1 hidden";

      var callOutgoingNotification = "call-notification-panel mt-3 mr-3 px-3 py-1 hidden";

      var receiverData = void 0;
      var initiatorData = void 0;

      var callScreenClasses = "d-none";
      var chatBoxClasses = "row";

      if (!isEmpty(this.state.call) && (this.state.call.action === "initiated" || this.state.call.status === "initiated")) {
        var _state$call = this.state.call,
            caller = _state$call.callInitiator,
            callee = _state$call.callReceiver;

        if (this.state.call.receiverType === _chat.CometChat.RECEIVER_TYPE.USER) {
          if (callee !== undefined && callee.uid === this.state.user.uid) {
            //incoming call
            callIncomingNotification = "call-notification-panel mt-3 mr-3 px-3 py-1";
            //incoming call
            initiatorData = _react2.default.createElement(
              "div",
              { className: "call-reciever-data d-inline-block mr-3" },
              _react2.default.createElement("img", { src: caller.avatar === undefined ? _userDefaultAvatar2.default : caller.avatar, alt: "caller pic" }),
              _react2.default.createElement(
                "h4",
                { className: "d-inline-block" },
                caller.name
              )
            );
          } else {
            //outgoing call
            callOutgoingNotification = "call-notification-panel mt-3 mr-3 px-3 py-1";

            receiverData = _react2.default.createElement(
              "div",
              { className: "call-reciever-data d-inline-block mr-3" },
              _react2.default.createElement("img", { src: callee.avatar === undefined ? _userDefaultAvatar2.default : callee.avatar, alt: "callee pic" }),
              _react2.default.createElement(
                "h4",
                { className: "d-inline-block" },
                callee.name
              )
            );
          }
        } else if (this.state.call.receiverType === _chat.CometChat.RECEIVER_TYPE.GROUP) {
          if (caller !== undefined && caller.uid === this.state.user.uid) {
            //outgoing call
            callOutgoingNotification = "call-notification-panel mt-3 mr-3 px-3 py-1";
            receiverData = _react2.default.createElement(
              "div",
              { className: "call-reciever-data d-inline-block mr-3" },
              _react2.default.createElement("img", {
                src: callee.icon !== undefined ? callee.icon : _groupDefaultAvatar2.default,
                alt: "callee pic"
              }),
              _react2.default.createElement(
                "h4",
                { className: "d-inline-block" },
                callee.name
              )
            );
          } else {
            //incoming call
            callIncomingNotification = "call-notification-panel mt-3 mr-3 px-3 py-1";
            initiatorData = _react2.default.createElement(
              "div",
              { className: "call-reciever-data d-inline-block mr-3" },
              _react2.default.createElement("img", { src: caller.avatar === undefined ? _userDefaultAvatar2.default : caller.avatar, alt: "caller pic" }),
              _react2.default.createElement(
                "h4",
                { className: "d-inline-block" },
                caller.name
              )
            );
          }
        }
      }
      if (!isEmpty(this.state.call) && this.state.call.action === "ongoing") {
        callScreenClasses = "";
        chatBoxClasses = "row";
      }
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          "div",
          { className: chatBoxClasses },
          _react2.default.createElement(
            _Slide2.default,
            { top: true },
            _react2.default.createElement(
              "div",
              { className: "col-md-12 col-xl-10 col-sm-12 col-xs-12 p-0 align-center" },
              _react2.default.createElement(
                "div",
                { className: "border-0 row chat-box bg-white" },
                _react2.default.createElement(_ChatBox2.default, {
                  user: this.state.user,
                  handleShowingCallNotification: this.handleShowingCallNotification,
                  makeCall: this.makeCall,
                  callActive: !_lodash2.default.isEmpty(this.state.call) ? this.state.call.action : false,
                  handleLogout: this.props.handleLogout,
                  notify: this.notify
                })
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: callIncomingNotification },
          _react2.default.createElement(
            "h5",
            null,
            "Incoming Call"
          ),
          _react2.default.createElement(
            "div",
            { id: "audioCallNotification" },
            initiatorData,
            _react2.default.createElement(
              "div",
              { className: "call-action-btns d-inline-block mx-2" },
              _react2.default.createElement("img", {
                src: _callaudio_hangup2x2.default,
                alt: "Reject call",
                onClick: function onClick() {
                  return _this3.handleRejectCall();
                }
              })
            ),
            _react2.default.createElement(
              "div",
              { className: "call-action-btns d-inline-block" },
              _react2.default.createElement("img", {
                src: _callaudio_answer2x2.default,
                alt: "Answer call",
                onClick: function onClick() {
                  return _this3.handleAcceptCall();
                }
              })
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: callOutgoingNotification },
          _react2.default.createElement(
            "h5",
            null,
            "Outgoing Call"
          ),
          _react2.default.createElement(
            "div",
            { id: "audioCallNotification" },
            receiverData
          )
        ),
        _react2.default.createElement("div", { id: "callScreen", className: callScreenClasses }),
        _react2.default.createElement(
          _reactResponsive2.default,
          { minDeviceWidth: 992 },
          _react2.default.createElement(_reactToastify.ToastContainer, null)
        )
      );
    }
  }]);

  return ChatContainer;
}(_react.Component);

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}
exports.default = ChatContainer;