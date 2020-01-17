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

var _Conversation = require("./Conversation");

var _Conversation2 = _interopRequireDefault(_Conversation);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _userDefaultAvatar = require("../../resources/images/user-default-avatar.png");

var _userDefaultAvatar2 = _interopRequireDefault(_userDefaultAvatar);

var _groupDefaultAvatar = require("../../resources/images/group-default-avatar.png");

var _groupDefaultAvatar2 = _interopRequireDefault(_groupDefaultAvatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Conversations = function (_Component) {
  _inherits(Conversations, _Component);

  function Conversations() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Conversations);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Conversations.__proto__ || Object.getPrototypeOf(Conversations)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      conversations: [],
      conversationsFetched: false,
      searchString: "",
      unreadCounts: []
    }, _this.handleSearchStringChange = function (e) {

      _this.setState({ searchString: e.target.value });

      var search_string = e.target.value;

      var conversationsRequest = new _chat.CometChat.ConversationsRequestBuilder().setLimit(100).build();

      conversationsRequest.fetchNext().then(function (conversationList) {

        var keys_to_remove = [];

        if (conversationList.length > 0) {
          _lodash2.default.forEach(conversationList, function (c, k) {

            if (_lodash2.default.toLower(c.conversationWith.name).indexOf(_lodash2.default.toLower(search_string)) < 0) {
              keys_to_remove = _lodash2.default.concat(keys_to_remove, k);
            }
          });

          _lodash2.default.pullAt(conversationList, keys_to_remove);

          _this.setState({ conversations: conversationList });
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Conversations, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (_lodash2.default.isEmpty(this.state.conversations) && this.state.conversationsFetched === false || this.props.lastMessageId !== prevProps.lastMessageId) {
        var conversationsRequest = new _chat.CometChat.ConversationsRequestBuilder().setLimit(50).build();

        conversationsRequest.fetchNext().then(function (conversationList) {

          _this2.setState({
            conversations: conversationList,
            conversationsFetched: true
          });
        }, function (error) {

          _this2.setState({
            conversations: [],
            conversationsFetched: true
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          conversations = _state.conversations,
          conversationsFetched = _state.conversationsFetched;


      var conversations_length = conversations.length;

      if (conversations_length === 0 && this.state.searchString === "") {
        if (conversationsFetched) {
          return _react2.default.createElement(
            "div",
            { className: "empty-contacts p-2 bg-white" },
            "No conversations available.",
            " "
          );
        } else {
          return _react2.default.createElement(
            "div",
            { className: "contact-tab p-2 bg-white" },
            "Fetching conversations..."
          );
        }
      } else {
        var show_contacts_warning = "d-none mt-1";

        if (conversations_length === 0 && this.state.searchString !== "") {
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
              _react2.default.createElement("input", {
                type: "text",
                className: "form-control",
                placeholder: "Search name",
                name: "search",
                onChange: function onChange(e) {
                  return _this3.handleSearchStringChange(e);
                },
                value: this.state.searchString
              })
            ),
            _react2.default.createElement(
              "small",
              { className: show_contacts_warning },
              _react2.default.createElement(
                "i",
                null,
                "No matching conversations found."
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "contact-listing bg-white" },
            conversations.map(function (c) {
              return _react2.default.createElement(_Conversation2.default, {
                key: c.conversationId,
                id: c.conversationWith.uid !== undefined ? c.conversationWith.uid : c.conversationWith.guid !== undefined ? c.conversationWith.guid : "",
                name: c.conversationWith.name,
                avatar: c.conversationWith.avatar !== undefined ? c.conversationWith.avatar : c.conversationWith.icon !== undefined ? c.conversationWith.icon : c.conversationType === _chat.CometChat.RECEIVER_TYPE.GROUP ? _groupDefaultAvatar2.default : _userDefaultAvatar2.default,
                lastMessage: c.lastMessage === undefined ? '...' : c.lastMessage.category === "message" && c.lastMessage.type === "text" ? c.lastMessage.data.text : c.lastMessage.category === "message" ? c.lastMessage.type : c.lastMessage.category === "action" && c.lastMessage.action !== "deleted" ? c.lastMessage.message : c.lastMessage.category === "action" && c.lastMessage.action === "deleted" ? 'Message deleted' : false,
                handleConversationClick: _this3.props.handleConversationClick,
                activeID: _this3.props.activeID,
                conversationType: c.conversationType
              });
            })
          )
        );
      }
    }
  }]);

  return Conversations;
}(_react.Component);

exports.default = Conversations;