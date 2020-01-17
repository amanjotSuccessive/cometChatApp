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

var _Contact = require("./Contact");

var _Contact2 = _interopRequireDefault(_Contact);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _userDefaultAvatar = require("./../../resources/images/user-default-avatar.png");

var _userDefaultAvatar2 = _interopRequireDefault(_userDefaultAvatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contacts = function (_Component) {
  _inherits(Contacts, _Component);

  function Contacts() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Contacts);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Contacts.__proto__ || Object.getPrototypeOf(Contacts)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      contacts: [],
      contactsFetched: false,
      searchString: "",
      unreadCounts: []
    }, _this.handleSearchStringChange = function (e) {
      _this.setState({ searchString: e.target.value });

      var usersRequest = new _chat.CometChat.UsersRequestBuilder().setLimit(50).setSearchKeyword(e.target.value).hideBlockedUsers(true).build();

      usersRequest.fetchNext().then(function (userList) {
        _this.setState({ contacts: userList });
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Contacts, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (_lodash2.default.isEmpty(this.state.contacts) && this.state.contactsFetched === false || this.props.activeContactUID !== prevProps.activeContactUID || this.props.showBlockedContacts !== prevProps.showBlockedContacts || this.props.onlineUsers !== prevProps.onlineUsers) {
        var usersRequest = new _chat.CometChat.UsersRequestBuilder().setLimit(50).setSearchKeyword(this.state.searchString).hideBlockedUsers(true).build();

        usersRequest.fetchNext().then(function (userList) {
          _chat.CometChat.getUnreadMessageCountForAllUsers().then(function (unreadCounts) {
            _this2.setState({
              contacts: userList,
              unreadCounts: unreadCounts,
              contactsFetched: true
            });
          }, function (error) {
            _this2.setState({
              contacts: userList,
              unreadCounts: [],
              contactsFetched: true
            });
          });
        }, function (error) {
          _this2.setState({
            contacts: [],
            unreadCounts: [],
            contactsFetched: true
          });
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
            "No users available.",
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
                "No matching users found."
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "contact-listing bg-white" },
            contacts.map(function (c) {
              return _react2.default.createElement(_Contact2.default, {
                key: c.uid,
                uid: c.uid,
                name: c.name,
                avatar: c.avatar !== undefined ? c.avatar : _userDefaultAvatar2.default,
                status: c.status,
                lastActiveAt: new Date(c.lastActiveAt * 1000),
                handleContactClick: _this3.props.handleContactClick,
                activeContactUID: _this3.props.activeContactUID,
                unreadCount: _this3.state.unreadCounts[c.uid] !== undefined ? _this3.state.unreadCounts[c.uid] : 0
              });
            })
          )
        );
      }
    }
  }]);

  return Contacts;
}(_react.Component);

exports.default = Contacts;