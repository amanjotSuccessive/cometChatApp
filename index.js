"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _polaris = require("@shopify/polaris");

require("./App.css");

var _Base = _interopRequireDefault(require("./components/cometchat/Base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(props) {
  return _react.default.createElement(_polaris.AppProvider, null, _react.default.createElement("div", null, _react.default.createElement(_Base.default, {
    props: props
  })));
};

var _default = App;
exports.default = _default;
"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _chat = require("@cometchat-pro/chat");

require("@shopify/polaris/styles.css");

var _polaris = require("@shopify/polaris");

var _ChatContainer = _interopRequireDefault(require("./ChatContainer"));

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Base = function Base(props) {
  var UID = props.match.params.uid;

  var _useState = (0, _react.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      user = _useState4[0],
      setUser = _useState4[1];

  (0, _react.useEffect)(function () {
    init();
    login();
  }, []);

  var init =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _chat.CometChat.init(_constants.CC_APP_ID, new _chat.CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(_constants.CC_API_REGION).build());

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function init() {
      return _ref.apply(this, arguments);
    };
  }();

  var login =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var _user;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return _chat.CometChat.login(UID, _constants.CC_API_KEY);

            case 3:
              _user = _context2.sent;
              console.log("user login: ", _user);
              setUser(_user);
              setTimeout(function () {
                setLoading(false);
              }, 1000);
              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);
              console.log("-----error", _context2.t0);

            case 12:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 9]]);
    }));

    return function login() {
      return _ref2.apply(this, arguments);
    };
  }();

  var getCurrentUser =
  /*#__PURE__*/
  function () {
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3() {
      var user;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _chat.CometChat.getLoggedinUser();

            case 2:
              user = _context3.sent;
              console.log("user getCurrentUser: ", user);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function getCurrentUser() {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleLogout = function handleLogout() {
    _chat.CometChat.logout().then(function () {
      window.location.reload(true);
    }, function (error) {
      window.location.reload(true);
    });
  };

  if (loading) {
    return _react.default.createElement(_polaris.SkeletonPage, {
      primaryAction: true,
      secondaryActions: 2
    }, _react.default.createElement(_polaris.Layout, null, _react.default.createElement(_polaris.Layout.Section, null, _react.default.createElement(_polaris.Card, {
      sectioned: true
    }, _react.default.createElement(_polaris.SkeletonBodyText, null)), _react.default.createElement(_polaris.Card, {
      sectioned: true
    }, _react.default.createElement(_polaris.TextContainer, null, _react.default.createElement(_polaris.SkeletonDisplayText, {
      size: "small"
    }), _react.default.createElement(_polaris.SkeletonBodyText, null))), _react.default.createElement(_polaris.Card, {
      sectioned: true
    }, _react.default.createElement(_polaris.TextContainer, null, _react.default.createElement(_polaris.SkeletonDisplayText, {
      size: "small"
    }), _react.default.createElement(_polaris.SkeletonBodyText, null)))), _react.default.createElement(_polaris.Layout.Section, {
      secondary: true
    }, _react.default.createElement(_polaris.Card, null, _react.default.createElement(_polaris.Card.Section, null, _react.default.createElement(_polaris.TextContainer, null, _react.default.createElement(_polaris.SkeletonDisplayText, {
      size: "small"
    }), _react.default.createElement(_polaris.SkeletonBodyText, {
      lines: 2
    }))), _react.default.createElement(_polaris.Card.Section, null, _react.default.createElement(_polaris.SkeletonBodyText, {
      lines: 1
    }))))));
  }

  return _react.default.createElement(_ChatContainer.default, {
    user: user,
    handleLogout: handleLogout
  });
};

var _default = Base;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlockedContact = function BlockedContact(_ref) {
  var name = _ref.name,
      uid = _ref.uid,
      avatar = _ref.avatar,
      handleUnBlockUser = _ref.handleUnBlockUser,
      activeContactUID = _ref.activeContactUID;
  var contact_classes = "contact-tab blocked-tab p-2 bg-white";
  if (activeContactUID !== undefined && uid === activeContactUID) contact_classes += ' active';
  return _react.default.createElement("div", {
    className: contact_classes,
    onClick: function onClick() {
      return handleUnBlockUser([uid]);
    },
    title: "Unblock contact"
  }, _react.default.createElement("div", {
    className: "contact-avatar-small"
  }, _react.default.createElement("img", {
    className: "mr-2",
    src: avatar,
    alt: name
  })), _react.default.createElement("div", {
    className: "contact-data"
  }, _react.default.createElement("p", {
    className: "mb-0 contact-name va-super"
  }, name)), _react.default.createElement("div", {
    className: "mb-2 mt-3 pr-2 contact-unblock"
  }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faUserPlus
  })));
};

var _default = BlockedContact;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _chat = require("@cometchat-pro/chat");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _BlockedContact = _interopRequireDefault(require("./BlockedContact"));

var _lodash = _interopRequireDefault(require("lodash"));

var _userDefaultAvatar = _interopRequireDefault(require("../../resources/images/user-default-avatar.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BlockedContacts =
/*#__PURE__*/
function (_Component) {
  _inherits(BlockedContacts, _Component);

  function BlockedContacts(props) {
    var _this;

    _classCallCheck(this, BlockedContacts);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BlockedContacts).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleSearchStringChange", function (e) {
      _this.setState({
        searchString: e.target.value
      });

      var limit = 50;
      var blockedUsersRequest = new _chat.CometChat.BlockedUsersRequestBuilder().setSearchKeyword(e.target.value).setLimit(limit).build();
      blockedUsersRequest.fetchNext().then(function (userList) {
        _this.setState({
          contacts: userList,
          contactsFetched: false
        });
      }, function (error) {
        _this.setState({
          contacts: [],
          contactsFetched: false
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleUnBlockUser", function (usersList) {
      _chat.CometChat.unblockUsers(usersList).then(function (list) {
        var contacts = _this.state.contacts;

        _lodash.default.forEach(list, function (v, k) {
          _lodash.default.remove(contacts, function (c) {
            return c.uid === k;
          });
        });

        _this.setState({
          contacts: contacts
        });
      });
    });

    _this.state = {
      contacts: [],
      contactsFetched: false,
      searchString: ""
    };
    return _this;
  }

  _createClass(BlockedContacts, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (_lodash.default.isEmpty(this.state.contacts) && this.state.contactsFetched === false || this.props.showBlockedContacts !== prevProps.showBlockedContacts) {
        var limit = 50;
        var blockedUsersRequest = new _chat.CometChat.BlockedUsersRequestBuilder().setLimit(limit).setSearchKeyword(this.state.searchString).build();
        blockedUsersRequest.fetchNext().then(function (userList) {
          _this2.setState({
            contacts: userList,
            contactsFetched: true
          });
        }, function (error) {
          _this2.setState({
            contacts: [],
            contactsFetched: true
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          contacts = _this$state.contacts,
          contactsFetched = _this$state.contactsFetched;
      var contacts_length = contacts.length;

      if (contacts_length === 0 && this.state.searchString === "") {
        if (contactsFetched) {
          return _react.default.createElement("div", {
            className: "empty-contacts p-2 bg-white"
          }, "No users available. ");
        } else {
          return _react.default.createElement("div", {
            className: "contact-tab p-2 bg-white"
          }, "Fetching users...");
        }
      } else {
        var show_contacts_warning = "d-none mt-1";

        if (contacts_length === 0 && this.state.searchString !== "") {
          show_contacts_warning = "mt-1";
        }

        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
          className: "search-container mb-3"
        }, _react.default.createElement("div", {
          className: "input-group"
        }, _react.default.createElement("div", {
          className: "input-group-btn"
        }, _react.default.createElement("button", {
          className: "btn btn-default",
          type: "submit"
        }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: _freeSolidSvgIcons.faSearch
        }))), _react.default.createElement("input", {
          type: "text",
          className: "form-control",
          placeholder: "Search name",
          name: "search",
          onChange: function onChange(e) {
            return _this3.handleSearchStringChange(e);
          },
          value: this.state.searchString
        })), _react.default.createElement("small", {
          className: show_contacts_warning
        }, _react.default.createElement("i", null, "No matching users found."))), _react.default.createElement("div", {
          className: "contact-listing bg-white"
        }, contacts.map(function (c) {
          return _react.default.createElement(_BlockedContact.default, {
            key: c.uid,
            uid: c.uid,
            name: c.name,
            avatar: c.avatar === undefined ? _userDefaultAvatar.default : c.avatar,
            handleUnBlockUser: _this3.handleUnBlockUser
          });
        })));
      }
    }
  }]);

  return BlockedContacts;
}(_react.Component);

var _default = BlockedContacts;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _chat = require("@cometchat-pro/chat");

var _ContactConversation = _interopRequireDefault(require("./ContactConversation"));

var _GroupConversation = _interopRequireDefault(require("./GroupConversation"));

var _constants = require("../../constants");

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ChatBody =
/*#__PURE__*/
function (_Component) {
  _inherits(ChatBody, _Component);

  function ChatBody() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ChatBody);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ChatBody)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      msghistory: [],
      newMessage: [],
      showAttachmentOptions: false,
      showContactUtilities: false,
      callTypeActive: 0,
      callSessionUniqID: "",
      showMsgActionID: 0,
      editingMessageActive: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleTextInputChange", function (e) {
      _this.setState({
        newMessage: e.target.value
      });

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
    });

    _defineProperty(_assertThisInitialized(_this), "showHideAttachSection", function (e) {
      _this.setState({
        showAttachmentOptions: !_this.state.showAttachmentOptions
      });
    });

    _defineProperty(_assertThisInitialized(_this), "showHideContactUtilites", function (e) {
      _this.setState({
        showContactUtilities: !_this.state.showContactUtilities
      });
    });

    _defineProperty(_assertThisInitialized(_this), "sendCustomMessage", function () {
      var location = window.navigator && window.navigator.geolocation;

      if (location) {
        location.getCurrentPosition(function (position) {
          var customData = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          };
          var customType = 'location';
          var receiverID;
          var receiverType;

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
              _this.setState({
                newMessage: []
              });
            });
          }
        }, function (error) {
          alert("Cannot detect your location.");
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleAttachment", function () {
      var fileType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants.MESSAGE_TYPE_MEDIA;
      var otherUID;
      var receiverType;

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
      }, function (error) {// Handle exception.
      });
    });

    _defineProperty(_assertThisInitialized(_this), "sendMessage", function (e) {
      var code = e.keyCode ? e.keyCode : e.which;

      if (e.target.id === "sendMsgIco" || code === 13) {
        //Enter keycode
        var receiverID;
        var receiverType;

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
            _this.setState({
              newMessage: []
            });
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "scrollToBottom", function () {
      if (!_this.state.editingMessageActive) {
        var node = document.getElementsByClassName("chat-body-conversation");

        if (node[0] !== undefined) {
          var bottom = node[0].scrollHeight - node[0].scrollTop === node[0].clientHeight;

          if (!bottom) {
            node[0].scrollTop = node[0].scrollHeight;
          }
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMessageClick", function (e, msgID) {
      e.preventDefault();

      if (e.type === "contextmenu") {
        //handle right click event
        _this.setState({
          showMsgActionID: msgID
        });
      } else if (e.type === "click") {
        if (_this.state.editingMessageActive === true) _this.setState({
          showMsgActionID: 0,
          editingMessageActive: false,
          newMessage: []
        });else _this.setState({
          showMsgActionID: 0
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMessageDelete", function () {
      var messageId = _this.state.showMsgActionID;

      _chat.CometChat.deleteMessage(messageId).then(function (message) {
        var msghistory = _this.state.msghistory;

        var messageKey = _lodash.default.findIndex(msghistory, function (m) {
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
        _this.setState({
          showMsgActionID: 0,
          editingMessageActive: false
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleMessageEdit", function (msg) {
      _this.setState({
        newMessage: msg,
        editingMessageActive: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleMessageUpdate", function (receiverID, receiverType, messageText) {
      var messageId = _this.state.showMsgActionID;
      var textMessage = new _chat.CometChat.TextMessage(receiverID, messageText, receiverType);
      textMessage.setId(messageId);

      _chat.CometChat.editMessage(textMessage).then(function (message) {
        var msghistory = _this.state.msghistory;

        var messageKey = _lodash.default.findIndex(msghistory, function (m) {
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
    });

    return _this;
  }

  _createClass(ChatBody, [{
    key: "componentDidUpdate",
    //fetch msg history
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (this.props.activeConversation.uid !== undefined && this.props.activeConversation.uid !== prevProps.activeConversation.uid || this.props.activeConversation.guid !== undefined && this.props.activeConversation.guid !== prevProps.activeConversation.guid || this.props.activeConversation.guid !== undefined && this.props.activeConversation.membersCount !== prevProps.activeConversation.membersCount || this.props.callActive !== prevProps.callActive) {
        var limit = 100;
        var receiverType = _chat.CometChat.RECEIVER_TYPE.USER;
        var messagesRequest;
        var otherUID;

        if (this.props.activeConversation.guid !== undefined) {
          otherUID = this.props.activeConversation.guid;
          messagesRequest = new _chat.CometChat.MessagesRequestBuilder().setLimit(limit).setGUID(otherUID).build();
          receiverType = _chat.CometChat.RECEIVER_TYPE.GROUP;
        } else {
          otherUID = this.props.activeConversation.uid;
          messagesRequest = new _chat.CometChat.MessagesRequestBuilder().setLimit(limit).setUID(otherUID).build();
        }

        messagesRequest.fetchPrevious().then(function (messages) {
          if (!_lodash.default.isEmpty(messages)) {
            var last_message = _lodash.default.last(messages);

            if (last_message.sender.uid !== _this2.props.subjectUID) {
              var messageId = last_message.id;
              if (last_message.receiverType === _chat.CometChat.RECEIVER_TYPE.GROUP) _chat.CometChat.markAsRead(messageId, last_message.receiverId, receiverType);else _chat.CometChat.markAsRead(messageId, last_message.sender.uid, receiverType);
            }
          }

          _this2.setState({
            msghistory: messages
          });

          _this2.scrollToBottom();
        }, function (error) {
          _this2.setState({
            msghistory: []
          });
        });
      }
    } //new msg recieve listener
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
          var messageId;
          var receiverType;
          var senderID;

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
          var messageId;
          var receiverType;
          var senderID; // Handle media message

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
          var msghistory = _toConsumableArray(_this3.state.msghistory);

          _lodash.default.forEach(msghistory, function (value, key) {
            if (value.readAt === undefined) msghistory[key].readAt = messageReceipt.readAt;
          });

          _this3.setState({
            msghistory: msghistory
          });
        },
        onMessagesDelivered: function onMessagesDelivered(messageReceipt) {
          var msghistory = _toConsumableArray(_this3.state.msghistory);

          var index_in_history = _lodash.default.findKey(msghistory, ["id", messageReceipt.messageId]);

          if (index_in_history !== undefined) {
            msghistory[index_in_history]["deliveredAt"] = messageReceipt.deliveredAt;

            _this3.setState({
              msghistory: msghistory
            });
          }
        }
      }));

      var listenerID4 = _constants.LISTENER_RT_MSG_EDIT;

      _chat.CometChat.addMessageListener(listenerID4, new _chat.CometChat.MessageListener({
        onMessageEdited: function onMessageEdited(message) {
          var msghistory = _this3.state.msghistory;

          var messageKey = _lodash.default.findIndex(msghistory, function (m) {
            return m.id === message.id;
          });

          msghistory[messageKey] = message;

          _this3.setState({
            msghistory: msghistory
          });

          _this3.props.handleOnRecentMessageSent(message.id);
        }
      }));

      var listenerID5 = _constants.LISTENER_RT_MSG_DELETE;

      _chat.CometChat.addMessageListener(listenerID5, new _chat.CometChat.MessageListener({
        onMessageDeleted: function onMessageDeleted(message) {
          var msghistory = _this3.state.msghistory;

          var messageKey = _lodash.default.findIndex(msghistory, function (m) {
            return m.id === message.id;
          });

          msghistory[messageKey] = message;

          _this3.setState({
            msghistory: msghistory
          });

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
        return _react.default.createElement(_ContactConversation.default, {
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
        return _react.default.createElement(_GroupConversation.default, {
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
        return _react.default.createElement("div", {
          className: classes
        }, _react.default.createElement("p", null, "Say Hi to someone today!"));
      }
    }
  }]);

  return ChatBody;
}(_react.Component);

exports.default = ChatBody;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _chat = require("@cometchat-pro/chat");

var _lodash = _interopRequireDefault(require("lodash"));

var _Contacts = _interopRequireDefault(require("./Contacts"));

var _Conversations = _interopRequireDefault(require("./Conversations"));

var _Groups = _interopRequireDefault(require("./Groups"));

var _ChatBody = _interopRequireDefault(require("./ChatBody"));

var _Icon24px2x = _interopRequireDefault(require("../../resources/images/contact/Icon 24px@2x.png"));

var _Icon24px2x2 = _interopRequireDefault(require("../../resources/images/recent/Icon 24px@2x.png"));

var _ic_people_outline2x = _interopRequireDefault(require("../../resources/images/group/ic_people_outline@2x.png"));

var _constants = require("../../constants");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _BlockedContacts = _interopRequireDefault(require("./BlockedContacts"));

var _GroupMembers = _interopRequireDefault(require("./GroupMembers"));

var _NonGroupMembers = _interopRequireDefault(require("./NonGroupMembers"));

var _Fade = _interopRequireDefault(require("react-reveal/Fade"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ChatBox =
/*#__PURE__*/
function (_Component) {
  _inherits(ChatBox, _Component);

  function ChatBox() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ChatBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ChatBox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeConversation: [],
      activeSidebar: 3,
      //1 = contacts, 2 = groups, 3 = recent
      activeSubSidebar: false,
      // activeSidebar = 1 & true == blocked contacts, activeSidebar = 2 & true == group members,
      addNewGroupMember: false,
      typingIndicatorUIDs: [],
      showSidebarUtilitiesC: false,
      createGroupFormShow: false,
      showAskPasswordModal: false,
      protectedGroupAskPasswordGuid: 0,
      onlineUsers: 0,
      lastMessageId: 0,
      isMobile: window.innerWidth < 768
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnRecentMessageSent", function (lastMessageId) {
      _this.setState({
        lastMessageId: lastMessageId
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleContactClick", function (uid) {
      if (_this.state.activeConversation.uid !== uid) {
        _chat.CometChat.getUser(uid).then(function (user) {
          _this.setState({
            activeConversation: user
          });
        }, function (error) {
          _this.setState({
            activeConversation: []
          });
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleConversationClick", function (id, conversationType) {
      console.log(id);

      if (conversationType === "user") {
        _this.handleContactClick(id);
      } else {
        _this.handleGroupClick(id);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleGroupClick", function (guid) {
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
          _this.setState({
            activeConversation: group
          });
        }
      }, function (error) {
        _this.setState({
          activeConversation: []
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleTabClick", function (type) {
      if (_this.state.activeSidebar !== type) {
        _this.setState({
          activeSidebar: type,
          activeConversation: [],
          showSidebarUtilitiesC: false,
          activeSubSidebar: false,
          addNewGroupMember: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "showHideSidebarUtilites", function (e) {
      _this.setState({
        showSidebarUtilitiesC: !_this.state.showSidebarUtilitiesC
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlockUser", function (usersList) {
      _chat.CometChat.blockUsers(usersList).then(function (list) {
        _this.setState({
          activeConversation: []
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleToggleSubSidebar", function () {
      _this.setState({
        activeSubSidebar: true,
        addNewGroupMember: false,
        showSidebarUtilitiesC: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleAddGroupMemberToggle", function () {
      _this.setState({
        activeSubSidebar: true,
        addNewGroupMember: true,
        showSidebarUtilitiesC: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "showCreateGroupModal", function () {
      _this.setState({
        createGroupFormShow: true,
        showSidebarUtilitiesC: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hideCreateGroupModal", function () {
      _this.setState({
        createGroupFormShow: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "hideAskPasswordModal", function () {
      _this.setState({
        showAskPasswordModal: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleLeaveGroup", function (guid) {
      var GUID = guid; // guid of the group to join

      _chat.CometChat.leaveGroup(GUID).then(function (hasLeft) {
        _this.setState({
          activeConversation: [],
          activeSubSidebar: false,
          addNewGroupMember: false
        });
      }, function (error) {});
    });

    _defineProperty(_assertThisInitialized(_this), "refreshActiveConversation", function (GUID) {
      _this.handleGroupClick(GUID);
    });

    _defineProperty(_assertThisInitialized(_this), "updateWindowDimensions", function () {
      var isMobile = window.innerWidth < 768;

      _this.setState({
        isMobile: isMobile
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleScreenChangesOnMobile", function () {
      if (_this.state.activeSubSidebar) _this.setState({
        activeSubSidebar: false,
        addNewGroupMember: false
      });else if (!_lodash.default.isEmpty(_this.state.activeConversation)) _this.setState({
        activeConversation: []
      });
    });

    return _this;
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

          var typingIndicatorUIDs = _lodash.default.concat(currentUIDs, typingUID);

          _this2.setState({
            typingIndicatorUIDs: typingIndicatorUIDs
          });
        },
        onTypingEnded: function onTypingEnded(typingIndicator) {
          var typingUID = typingIndicator.sender.uid;
          var currentUIDs = _this2.state.typingIndicatorUIDs;

          var typingIndicatorUIDs = _lodash.default.pull(currentUIDs, typingUID);

          _this2.setState({
            typingIndicatorUIDs: typingIndicatorUIDs
          });
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

            _this2.setState({
              activeConversation: activeConversation,
              onlineUsers: _onlineUsers
            });
          } else {
            _this2.setState({
              onlineUsers: onlineUsers
            });
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

            _this2.setState({
              activeConversation: activeConversation,
              onlineUsers: onlineUsers
            });
          } else {
            _this2.setState({
              onlineUsers: onlineUsers
            });
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

            _this2.setState({
              activeConversation: activeConversation
            });
          }
        },
        onGroupMemberLeft: function onGroupMemberLeft(message, leavingUser, group) {
          if (_this2.state.activeConversation.guid !== undefined && group.guid === _this2.state.activeConversation.guid) {
            var activeConversation = group;
            activeConversation.membersCount = _this2.state.activeConversation.membersCount - 1;

            _this2.setState({
              activeConversation: activeConversation
            });
          }
        },
        onGroupMemberKicked: function onGroupMemberKicked(message, kickedUser, kickedBy, kickedFrom) {
          var activeConversation = kickedFrom;

          if (_this2.state.activeConversation.guid !== undefined && kickedFrom.guid === _this2.state.activeConversation.guid) {
            if (_this2.props.user.uid === kickedUser.uid) activeConversation = [];

            _this2.setState({
              activeConversation: activeConversation
            });

            if (_lodash.default.isEmpty(activeConversation)) {
              _this2.props.notify(kickedBy.name + " kicked you from group " + kickedFrom.name, "error");
            }
          }
        },
        onGroupMemberBanned: function onGroupMemberBanned(message, bannedUser, bannedBy, bannedFrom) {
          var activeConversation = bannedFrom;

          if (_this2.state.activeConversation.guid !== undefined && bannedFrom.guid === _this2.state.activeConversation.guid) {
            if (_this2.props.user.uid === bannedUser.uid) activeConversation = [];

            _this2.setState({
              activeConversation: activeConversation
            });

            if (_lodash.default.isEmpty(activeConversation)) {
              _this2.props.notify(bannedBy.name + " banned you from group " + bannedFrom.name, "error");
            }
          }
        },
        onGroupMemberUnbanned: function onGroupMemberUnbanned(message, unbannedUser, unbannedBy, unbannedFrom) {
          var activeConversation = unbannedFrom;

          if (_this2.state.activeConversation.guid !== undefined && unbannedFrom.guid === _this2.state.activeConversation.guid) {
            if (_this2.props.user.uid === unbannedUser.uid) activeConversation = [];

            _this2.setState({
              activeConversation: activeConversation
            });
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
      var activeTabName;
      var utilities_sidebar_show;
      var blockedUsersOption;
      var createGroupOption;
      var showBlockedContacts = false;
      var showGroupMembers = false;
      var showNonGroupMembers = false;
      var sidebarContactsUtilityLabel;
      var sidebarContactsUtilityIcon;

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
          sidebarContactsUtilityIcon = _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
            icon: _freeSolidSvgIcons.faUsers,
            title: "Add new group"
          });
          sidebarContactsUtilityLabel = "Create Group";
          createGroupOption = _react.default.createElement("div", {
            className: "create-group-option mb-2",
            onClick: this.showCreateGroupModal
          }, sidebarContactsUtilityIcon, _react.default.createElement("span", {
            className: ""
          }, "\xA0 ", sidebarContactsUtilityLabel));
        }
      } else if (this.state.activeSidebar === 1) {
        contact_sidebar_classes += " active";
        utilities_sidebar_show = this.state.showSidebarUtilitiesC ? "contact-utilities-list bg-white" : "contact-utilities-list bg-white hidden";
        showBlockedContacts = this.state.activeSubSidebar;

        if (showBlockedContacts) {
          blocked_contact_classes += " active";
          activeTabName = "Blocked Users";
          sidebarContactsUtilityLabel = "Users";
          sidebarContactsUtilityIcon = _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
            icon: _freeSolidSvgIcons.faUserAlt,
            title: "Available Users"
          });
        } else {
          contact_classes += " active";
          activeTabName = "Users";
          sidebarContactsUtilityLabel = "Blocked Users";
          sidebarContactsUtilityIcon = _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
            icon: _freeSolidSvgIcons.faUserAltSlash,
            title: "Block/Unblock Users"
          });
        }

        blockedUsersOption = _react.default.createElement("div", {
          className: "blocked-users-list-option mb-2",
          onClick: this.handleToggleSubSidebar
        }, sidebarContactsUtilityIcon, _react.default.createElement("span", {
          className: ""
        }, "\xA0 ", sidebarContactsUtilityLabel));
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
          if (!_lodash.default.isEmpty(this.state.activeConversation)) {
            chatSidebarVisiblity = "hidden";
          } else {
            chatBodyVisiblity = "hidden";
          }
        } else {
          //groups
          if (this.state.activeSubSidebar) {
            chatBodyVisiblity = "hidden";
          } else {
            if (!_lodash.default.isEmpty(this.state.activeConversation)) {
              chatSidebarVisiblity = "hidden";
            } else {
              chatBodyVisiblity = "hidden";
            }
          }
        }
      }

      var chatSidebarClasses = "chat-sidebar col-md-5 col-xl-4 col-sm-12 col-xs-12 p-0 ";
      chatSidebarClasses += chatSidebarVisiblity;
      var navBtnSidebar;
      var sidebarUtlitiesIcoClasses = "sidebar-contact-utilities my-2 ml-4 ";

      if (this.state.activeSubSidebar) {
        // blocked contacts
        navBtnSidebar = _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
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

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
        className: chatSidebarClasses
      }, _react.default.createElement("div", {
        className: "chat-sidebar-title px-4 py-3 m-0"
      }, _react.default.createElement("h3", {
        className: "d-inline-block"
      }, navBtnSidebar, activeTabName), _react.default.createElement("div", {
        className: sidebarUtlitiesIcoClasses,
        onClick: this.showHideSidebarUtilites
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faEllipsisV
      })), _react.default.createElement("div", {
        className: utilities_sidebar_show
      }, blockedUsersOption, createGroupOption, _react.default.createElement("div", {
        className: "logout-row",
        onClick: this.props.handleLogout
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faPowerOff,
        title: "Logout"
      }), _react.default.createElement("span", {
        className: ""
      }, "\xA0 Logout")))), _react.default.createElement("div", {
        className: conversation_classes
      }, _react.default.createElement(_Conversations.default, {
        handleConversationClick: this.handleConversationClick,
        activeID: this.state.activeConversation.uid !== undefined ? this.state.activeConversation.uid : this.state.activeConversation.guid !== undefined ? this.state.activeConversation.guid : "",
        typingIndicatorUIDs: this.state.typingIndicatorUIDs,
        onlineUsers: this.state.onlineUsers,
        lastMessageId: this.state.lastMessageId
      })), _react.default.createElement("div", {
        className: contact_classes
      }, _react.default.createElement(_Contacts.default, {
        handleContactClick: this.handleContactClick,
        activeContactUID: this.state.activeConversation.uid !== undefined ? this.state.activeConversation.uid : "",
        typingIndicatorUIDs: this.state.typingIndicatorUIDs,
        showBlockedContacts: showBlockedContacts,
        onlineUsers: this.state.onlineUsers
      })), _react.default.createElement("div", {
        className: group_classes
      }, _react.default.createElement(_Groups.default, {
        handleGroupClick: this.handleGroupClick,
        activeGUID: this.state.activeConversation.guid !== undefined ? this.state.activeConversation.guid : "",
        showGroupMembers: showGroupMembers,
        createGroupFormShow: this.state.createGroupFormShow,
        showAskPasswordModal: this.state.showAskPasswordModal,
        hideCreateGroupModal: this.hideCreateGroupModal,
        hideAskPasswordModal: this.hideAskPasswordModal,
        protectedGroupAskPasswordGuid: this.state.protectedGroupAskPasswordGuid
      })), _react.default.createElement(_Fade.default, {
        right: true
      }, _react.default.createElement("div", {
        className: blocked_contact_classes
      }, _react.default.createElement(_BlockedContacts.default, {
        showBlockedContacts: showBlockedContacts,
        handleScreenChangesOnMobile: this.handleScreenChangesOnMobile
      }))), _react.default.createElement(_Fade.default, {
        right: true
      }, _react.default.createElement("div", {
        className: group_member_classes
      }, _react.default.createElement(_GroupMembers.default, {
        showGroupMembers: showGroupMembers,
        activeGUID: this.state.activeConversation.guid !== undefined ? this.state.activeConversation.guid : "",
        activeGUIDMemberCount: this.state.activeConversation.membersCount,
        ownerRights: this.state.activeConversation.owner !== undefined && this.state.activeConversation.owner === this.props.user.uid || this.state.activeConversation.scope === "admin" ? true : false,
        subjectUID: this.props.user.uid,
        refreshActiveConversation: this.refreshActiveConversation,
        handleScreenChangesOnMobile: this.handleScreenChangesOnMobile
      }))), _react.default.createElement(_Fade.default, {
        right: true
      }, _react.default.createElement("div", {
        className: non_group_member_classes
      }, _react.default.createElement(_NonGroupMembers.default, {
        showNonGroupMembers: showNonGroupMembers,
        activeGUID: this.state.activeConversation.guid !== undefined ? this.state.activeConversation.guid : "",
        activeGUIDMemberCount: this.state.activeConversation.membersCount,
        ownerRights: this.state.activeConversation.owner !== undefined && this.state.activeConversation.owner === this.props.user.uid || this.state.activeConversation.scope === "admin" ? true : false,
        subjectUID: this.props.user.uid,
        refreshActiveConversation: this.refreshActiveConversation,
        handleScreenChangesOnMobile: this.handleScreenChangesOnMobile
      }))), _react.default.createElement("div", {
        className: "sidebar-tabs d-flex"
      }, _react.default.createElement("div", {
        id: "conversation-sidebar",
        className: conversation_sidebar_classes,
        onClick: function onClick(e) {
          return _this3.handleTabClick(3);
        }
      }, _react.default.createElement("img", {
        src: _Icon24px2x2.default,
        alt: "conversationIcon"
      }), _react.default.createElement("p", {
        className: "m-0 text-font-grey"
      }, "Conversations")), _react.default.createElement("div", {
        id: "contacts-sidebar",
        className: contact_sidebar_classes,
        onClick: function onClick(e) {
          return _this3.handleTabClick(1);
        }
      }, _react.default.createElement("img", {
        src: _Icon24px2x.default,
        alt: "contactIcon"
      }), _react.default.createElement("p", {
        className: "m-0 text-font-grey"
      }, "Users")), _react.default.createElement("div", {
        id: "groups-sidebar",
        className: group_sidebar_classes,
        onClick: function onClick(e) {
          return _this3.handleTabClick(2);
        }
      }, _react.default.createElement("img", {
        src: _ic_people_outline2x.default,
        alt: "groupIcon"
      }), _react.default.createElement("p", {
        className: "m-0 text-font-grey"
      }, "Groups")))), _react.default.createElement(_ChatBody.default, {
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
      }));
    }
  }]);

  return ChatBox;
}(_react.Component);

var _default = ChatBox;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _chat = require("@cometchat-pro/chat");

var _ChatBox = _interopRequireDefault(require("./ChatBox"));

var _Zoom = _interopRequireDefault(require("react-reveal/Zoom"));

var _Slide = _interopRequireDefault(require("react-reveal/Slide"));

var _callaudio_answer2x = _interopRequireDefault(require("../../resources/images/callaudio_answer@2x.png"));

var _callaudio_hangup2x = _interopRequireDefault(require("../../resources/images/callaudio_hangup@2x.png"));

var _reactResponsive = _interopRequireDefault(require("react-responsive"));

var _lodash = _interopRequireDefault(require("lodash"));

var _reactToastify = require("react-toastify");

require("react-toastify/dist/ReactToastify.min.css");

var _groupDefaultAvatar = _interopRequireDefault(require("../../resources/images/group-default-avatar.png"));

var _userDefaultAvatar = _interopRequireDefault(require("../../resources/images/user-default-avatar.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ChatContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(ChatContainer, _Component);

  function ChatContainer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ChatContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ChatContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      user: [],
      showCallNotification: false,
      call: []
    });

    _defineProperty(_assertThisInitialized(_this), "makeCall", function () {
      var callTypeActive = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var receiverID = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var receiverType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _chat.CometChat.RECEIVER_TYPE.USER;

      if (_lodash.default.isEmpty(_this.state.call)) {
        var callType = _chat.CometChat.CALL_TYPE.AUDIO;
        if (callTypeActive === "2") callType = _chat.CometChat.CALL_TYPE.VIDEO;
        var call = new _chat.CometChat.Call(receiverID, callType, receiverType);

        _chat.CometChat.initiateCall(call).then(function (outGoingCall) {
          _this.handleShowingCallNotification(outGoingCall); // perform action on success. Like show your calling screen.

        }, function (error) {
          _this.setState({
            call: []
          });
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleShowingCallNotification", function (call) {
      _this.setState({
        call: call
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleStartCall", function () {
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
          console.log("User left call:", user); // this.setState({call : []});

          /* this method can be use to display message or perform any actions if someone leaving the call */
        },
        onCallEnded: function onCallEnded(call) {
          /* Notification received here if current ongoing call is ended. */
          console.log("Call ended:", call);

          _this.setState({
            call: []
          });
          /* hiding/closing the call screen can be done here. */

        }
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "handleAcceptCall", function () {
      var sessionID = _this.state.call.sessionId;

      _chat.CometChat.acceptCall(sessionID).then(function (call) {
        console.log("Call accepted successfully:", call);

        _this.setState({
          call: call
        }); // start the call using the startCall() method


        _this.handleStartCall();
      }, function (error) {
        console.log("Call acceptance failed with error", error);

        _this.setState({
          call: []
        }); // handle exception

      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleRejectCall", function () {
      var sessionID = _this.state.call.sessionId;
      var status = _chat.CometChat.CALL_STATUS.REJECTED;

      _chat.CometChat.rejectCall(sessionID, status).then(function (call) {
        console.log("Call rejected successfully:", call);

        _this.setState({
          call: []
        });
      }, function (error) {
        console.log("Call rejection failed with error", error);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "notify", function (msg, type) {
      if (type === "success") {
        _reactToastify.toast.success(msg);
      } else if (type === "warn") {
        _reactToastify.toast.warn(msg);
      } else if (type === "error") {
        _reactToastify.toast.error(msg);
      } else {
        _reactToastify.toast.info(msg);
      }
    });

    return _this;
  }

  _createClass(ChatContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.user.authToken !== "") {
        _chat.CometChat.getLoggedinUser().then(function (user) {
          _this2.setState({
            user: user
          });
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

          _this2.setState({
            call: call
          });

          _this2.handleStartCall();
        },
        onOutgoingCallRejected: function onOutgoingCallRejected(call) {
          if (!_lodash.default.isEmpty(_this2.state.call)) {
            _this2.notify("Call rejected", "error");
          }

          console.log("Outgoing call rejected:", call);

          _this2.setState({
            call: []
          });
        },
        onIncomingCallCancelled: function onIncomingCallCancelled(call) {
          if (!_lodash.default.isEmpty(_this2.state.call)) {
            _this2.notify("Call cancelled", "error");
          }

          _this2.setState({
            call: []
          });
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

      if (this.props.user.authToken === "") return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("h3", null, "Checking if user is logged in ..."));
      var _this$state$user = this.state.user,
          name = _this$state$user.name,
          avatar = _this$state$user.avatar;
      var callIncomingNotification = "call-notification-panel mt-3 mr-3 px-3 py-1 hidden";
      var callOutgoingNotification = "call-notification-panel mt-3 mr-3 px-3 py-1 hidden";
      var receiverData;
      var initiatorData;
      var callScreenClasses = "d-none";
      var chatBoxClasses = "row";

      if (!isEmpty(this.state.call) && (this.state.call.action === "initiated" || this.state.call.status === "initiated")) {
        var _this$state$call = this.state.call,
            caller = _this$state$call.callInitiator,
            callee = _this$state$call.callReceiver;

        if (this.state.call.receiverType === _chat.CometChat.RECEIVER_TYPE.USER) {
          if (callee !== undefined && callee.uid === this.state.user.uid) {
            //incoming call
            callIncomingNotification = "call-notification-panel mt-3 mr-3 px-3 py-1"; //incoming call

            initiatorData = _react.default.createElement("div", {
              className: "call-reciever-data d-inline-block mr-3"
            }, _react.default.createElement("img", {
              src: caller.avatar === undefined ? _userDefaultAvatar.default : caller.avatar,
              alt: "caller pic"
            }), _react.default.createElement("h4", {
              className: "d-inline-block"
            }, caller.name));
          } else {
            //outgoing call
            callOutgoingNotification = "call-notification-panel mt-3 mr-3 px-3 py-1";
            receiverData = _react.default.createElement("div", {
              className: "call-reciever-data d-inline-block mr-3"
            }, _react.default.createElement("img", {
              src: callee.avatar === undefined ? _userDefaultAvatar.default : callee.avatar,
              alt: "callee pic"
            }), _react.default.createElement("h4", {
              className: "d-inline-block"
            }, callee.name));
          }
        } else if (this.state.call.receiverType === _chat.CometChat.RECEIVER_TYPE.GROUP) {
          if (caller !== undefined && caller.uid === this.state.user.uid) {
            //outgoing call
            callOutgoingNotification = "call-notification-panel mt-3 mr-3 px-3 py-1";
            receiverData = _react.default.createElement("div", {
              className: "call-reciever-data d-inline-block mr-3"
            }, _react.default.createElement("img", {
              src: callee.icon !== undefined ? callee.icon : _groupDefaultAvatar.default,
              alt: "callee pic"
            }), _react.default.createElement("h4", {
              className: "d-inline-block"
            }, callee.name));
          } else {
            //incoming call
            callIncomingNotification = "call-notification-panel mt-3 mr-3 px-3 py-1";
            initiatorData = _react.default.createElement("div", {
              className: "call-reciever-data d-inline-block mr-3"
            }, _react.default.createElement("img", {
              src: caller.avatar === undefined ? _userDefaultAvatar.default : caller.avatar,
              alt: "caller pic"
            }), _react.default.createElement("h4", {
              className: "d-inline-block"
            }, caller.name));
          }
        }
      }

      if (!isEmpty(this.state.call) && this.state.call.action === "ongoing") {
        callScreenClasses = "";
        chatBoxClasses = "row";
      }

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
        className: chatBoxClasses
      }, _react.default.createElement(_Slide.default, {
        top: true
      }, _react.default.createElement("div", {
        className: "col-md-12 col-xl-10 col-sm-12 col-xs-12 p-0 align-center"
      }, _react.default.createElement("div", {
        className: "border-0 row chat-box bg-white"
      }, _react.default.createElement(_ChatBox.default, {
        user: this.state.user,
        handleShowingCallNotification: this.handleShowingCallNotification,
        makeCall: this.makeCall,
        callActive: !_lodash.default.isEmpty(this.state.call) ? this.state.call.action : false,
        handleLogout: this.props.handleLogout,
        notify: this.notify
      }))))), _react.default.createElement("div", {
        className: callIncomingNotification
      }, _react.default.createElement("h5", null, "Incoming Call"), _react.default.createElement("div", {
        id: "audioCallNotification"
      }, initiatorData, _react.default.createElement("div", {
        className: "call-action-btns d-inline-block mx-2"
      }, _react.default.createElement("img", {
        src: _callaudio_hangup2x.default,
        alt: "Reject call",
        onClick: function onClick() {
          return _this3.handleRejectCall();
        }
      })), _react.default.createElement("div", {
        className: "call-action-btns d-inline-block"
      }, _react.default.createElement("img", {
        src: _callaudio_answer2x.default,
        alt: "Answer call",
        onClick: function onClick() {
          return _this3.handleAcceptCall();
        }
      })))), _react.default.createElement("div", {
        className: callOutgoingNotification
      }, _react.default.createElement("h5", null, "Outgoing Call"), _react.default.createElement("div", {
        id: "audioCallNotification"
      }, receiverData)), _react.default.createElement("div", {
        id: "callScreen",
        className: callScreenClasses
      }), _react.default.createElement(_reactResponsive.default, {
        minDeviceWidth: 992
      }, _react.default.createElement(_reactToastify.ToastContainer, null)));
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

var _default = ChatContainer;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contact = function Contact(_ref) {
  var name = _ref.name,
      status = _ref.status,
      uid = _ref.uid,
      avatar = _ref.avatar,
      handleContactClick = _ref.handleContactClick,
      activeContactUID = _ref.activeContactUID,
      unreadCount = _ref.unreadCount;
  var status_classes = "status mr-1 status-";
  status_classes += status;
  var unreadCountHtml;
  var contact_classes = "contact-tab p-2 bg-white";
  if (activeContactUID !== undefined && uid === activeContactUID) contact_classes += ' active';else {
    if (unreadCount > 0) {
      unreadCountHtml = _react.default.createElement("div", {
        className: "unread-msg-count-contact mb-3 mt-2 pr-2"
      }, _react.default.createElement("span", {
        className: "badge badge-danger"
      }, unreadCount));
    }
  }
  return _react.default.createElement("div", {
    className: contact_classes,
    onClick: function onClick() {
      return handleContactClick(uid);
    }
  }, _react.default.createElement("div", {
    className: "contact-avatar-small"
  }, _react.default.createElement("img", {
    className: "mr-2",
    src: avatar,
    alt: name
  })), _react.default.createElement("div", {
    className: "contact-data"
  }, _react.default.createElement("p", {
    className: "mb-0 contact-name"
  }, name), _react.default.createElement("p", {
    className: "m-0 text-light-grey contact-status"
  }, _react.default.createElement("span", {
    className: status_classes
  }), _react.default.createElement("span", {
    className: "status-text"
  }, status))), _react.default.createElement("div", {
    className: "contact-view-arrow mb-3 mt-2 pr-2"
  }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faAngleRight
  })), unreadCountHtml);
};

var _default = Contact;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _chat = require("@cometchat-pro/chat");

var _constants = require("../../constants");

var _attachment = _interopRequireDefault(require("../../resources/images/attachment.png"));

var _Path2x = _interopRequireDefault(require("../../resources/images/send.imageset/Path@2x.png"));

var _lodash = _interopRequireDefault(require("lodash"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _Flip = _interopRequireDefault(require("react-reveal/Flip"));

var _RenderConversation = _interopRequireDefault(require("./RenderConversation"));

var _reactResponsive = _interopRequireDefault(require("react-responsive"));

var _userDefaultAvatar = _interopRequireDefault(require("../../resources/images/user-default-avatar.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ContactConversation = function ContactConversation(props) {
  var _props$activeConversa = props.activeConversation,
      activeContactUID = _props$activeConversa.uid,
      activeContactName = _props$activeConversa.name,
      activeContactAvatar = _props$activeConversa.avatar,
      activeContactStatus = _props$activeConversa.status;
  var contact_status = activeContactStatus; //check for typing indicator

  var typingIndicator = _lodash.default.findIndex(props.typingIndicatorUIDs, function (i) {
    return i === activeContactUID;
  });

  if (typingIndicator > -1) contact_status = _react.default.createElement("span", {
    className: "product_italic"
  }, "typing...");
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

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: "chat-body col-md-7 col-xl-8 col-sm-12 col-xs-12 p-0",
    onClick: function onClick(e) {
      return props.showHideAttachSection;
    }
  }, _react.default.createElement("div", {
    className: chat_body_header_classes
  }, _react.default.createElement("div", {
    className: "flex-fill"
  }, _react.default.createElement(_reactResponsive.default, {
    maxDeviceWidth: 767
  }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    className: "ml-1 mr-2 back-arrow",
    icon: _freeSolidSvgIcons.faArrowLeft,
    onClick: function onClick() {
      return props.handleScreenChangesOnMobile();
    }
  })), _react.default.createElement("div", {
    className: "contact-avatar-small"
  }, _react.default.createElement("img", {
    className: "mr-2",
    src: activeContactAvatar !== undefined ? activeContactAvatar : _userDefaultAvatar.default,
    alt: "contact avatar"
  })), _react.default.createElement("div", {
    className: "contact-data"
  }, _react.default.createElement("p", {
    className: "mb-0 contact-name"
  }, activeContactName), _react.default.createElement("p", {
    className: "m-0 text-light-grey contact-status"
  }, _react.default.createElement("span", {
    className: act_status_classes
  }, contact_status)))), _react.default.createElement("div", {
    className: "contact-calling-optns my-2"
  }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faPhoneAlt,
    className: "ml-4",
    onClick: function onClick(e) {
      return props.makeCall("1", activeContactUID);
    }
  }), _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faVideo,
    className: "ml-4",
    onClick: function onClick(e) {
      return props.makeCall("2", activeContactUID);
    }
  })), _react.default.createElement("div", {
    className: "contact-utilities my-2 ml-4",
    onClick: props.showHideContactUtilites
  }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faEllipsisV
  })), _react.default.createElement("div", {
    className: utilities_contact_show
  }, _react.default.createElement("p", {
    className: "u-optn",
    onClick: function onClick() {
      return props.handleBlockUser([activeContactUID]);
    }
  }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faSignOutAlt
  }), "\xA0Block"))), _react.default.createElement("div", {
    className: "chat-body-conversation p-4"
  }, props.msghistory.map(function (m) {
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
      return _react.default.createElement(_RenderConversation.default, {
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
      return _react.default.createElement(_RenderConversation.default, {
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
      return _react.default.createElement(_RenderConversation.default, {
        key: m.id,
        msg: msg,
        msgType: messageType,
        sentAt: m.sentAt,
        editedAt: m.editedAt,
        msgCategory: "incoming",
        avatar: m.sender.avatar === undefined ? _userDefaultAvatar.default : m.sender.avatar,
        attachmentData: attachmentData,
        handleMessageClick: props.handleMessageClick,
        msgID: m.id,
        showMsgAction: showMsgAction,
        handleMessageDelete: props.handleMessageDelete,
        handleMessageEdit: props.handleMessageEdit,
        scrollToBottom: props.scrollToBottom
      });
    }
  })), _react.default.createElement("div", {
    className: "chat-body-sendmsg px-3 py-4"
  }, _react.default.createElement("div", {
    className: "d-flex justify-content-between"
  }, _react.default.createElement("div", {
    className: "mr-3"
  }, _react.default.createElement("img", {
    src: _attachment.default,
    id: "attachmentIco",
    alt: "attachmentIco",
    onClick: function onClick(e) {
      return props.showHideAttachSection(e);
    }
  })), _react.default.createElement("div", {
    className: "flex-fill"
  }, _react.default.createElement("input", {
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
  })), _react.default.createElement("div", {
    className: "ml-3"
  }, _react.default.createElement("img", {
    src: _Path2x.default,
    id: "sendMsgIco",
    alt: "sendMsgIcon",
    onClick: function onClick(e) {
      return props.sendMessage(e, "text");
    }
  })))), _react.default.createElement(_Flip.default, {
    bottom: true,
    when: props.showAttachmentOptions
  }, _react.default.createElement("div", {
    className: "chat-send-attachment-outer"
  }, _react.default.createElement("div", {
    className: attachment_show
  }, _react.default.createElement("div", {
    className: "d-flex justify-content-between"
  }, _react.default.createElement("div", {
    className: "px-5 py-4 mx-1"
  }, _react.default.createElement("div", {
    className: "attach-option",
    title: "Send a picture message"
  }, _react.default.createElement("label", {
    htmlFor: "attachment-type-2"
  }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faFileImage
  })), _react.default.createElement("input", {
    type: "file",
    id: "attachment-type-2",
    onChange: function onChange(e) {
      return props.handleAttachment(_constants.MESSAGE_TYPE_IMAGE);
    }
  }))), _react.default.createElement("div", {
    className: "px-5 py-4 mx-1"
  }, _react.default.createElement("div", {
    className: "attach-option",
    title: "Send a video message"
  }, _react.default.createElement("label", {
    htmlFor: "attachment-type-3"
  }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faFileVideo
  })), _react.default.createElement("input", {
    type: "file",
    id: "attachment-type-3",
    onChange: function onChange(e) {
      return props.handleAttachment(_constants.MESSAGE_TYPE_VIDEO);
    }
  }))), _react.default.createElement("div", {
    className: "px-5 py-4 mx-1"
  }, _react.default.createElement("div", {
    className: "attach-option",
    title: "Send a audio message"
  }, _react.default.createElement("label", {
    htmlFor: "attachment-type-4"
  }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faFileAudio
  })), _react.default.createElement("input", {
    type: "file",
    id: "attachment-type-4",
    onChange: function onChange(e) {
      return props.handleAttachment(_constants.MESSAGE_TYPE_AUDIO);
    }
  }))), _react.default.createElement("div", {
    className: "px-5 py-4 mx-1"
  }, _react.default.createElement("div", {
    className: "attach-option",
    title: "Send a file message"
  }, _react.default.createElement("label", {
    htmlFor: "attachment-type-5"
  }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faFileAlt
  })), _react.default.createElement("input", {
    type: "file",
    id: "attachment-type-5",
    onChange: function onChange(e) {
      return props.handleAttachment(_constants.MESSAGE_TYPE_FILE);
    }
  }))), _react.default.createElement("div", {
    className: "px-5 py-4 mx-1"
  }, _react.default.createElement("div", {
    className: "attach-option",
    title: "Send location"
  }, _react.default.createElement("label", {
    htmlFor: "attachment-type-1"
  }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faMapMarkerAlt,
    onClick: function onClick(e) {
      return props.sendCustomMessage();
    }
  }))))))))));
};

var _default = ContactConversation;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _chat = require("@cometchat-pro/chat");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _Contact = _interopRequireDefault(require("./Contact"));

var _lodash = _interopRequireDefault(require("lodash"));

var _userDefaultAvatar = _interopRequireDefault(require("../../resources/images/user-default-avatar.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Contacts =
/*#__PURE__*/
function (_Component) {
  _inherits(Contacts, _Component);

  function Contacts() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Contacts);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Contacts)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      contacts: [],
      contactsFetched: false,
      searchString: "",
      unreadCounts: []
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearchStringChange", function (e) {
      _this.setState({
        searchString: e.target.value
      });

      var usersRequest = new _chat.CometChat.UsersRequestBuilder().setLimit(50).setSearchKeyword(e.target.value).hideBlockedUsers(true).build();
      usersRequest.fetchNext().then(function (userList) {
        _this.setState({
          contacts: userList
        });
      });
    });

    return _this;
  }

  _createClass(Contacts, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (_lodash.default.isEmpty(this.state.contacts) && this.state.contactsFetched === false || this.props.activeContactUID !== prevProps.activeContactUID || this.props.showBlockedContacts !== prevProps.showBlockedContacts || this.props.onlineUsers !== prevProps.onlineUsers) {
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

      var _this$state = this.state,
          contacts = _this$state.contacts,
          contactsFetched = _this$state.contactsFetched;
      var contacts_length = contacts.length;

      if (contacts_length === 0 && this.state.searchString === "") {
        if (contactsFetched) {
          return _react.default.createElement("div", {
            className: "empty-contacts p-2 bg-white"
          }, "No users available.", " ");
        } else {
          return _react.default.createElement("div", {
            className: "contact-tab p-2 bg-white"
          }, "Fetching users...");
        }
      } else {
        var show_contacts_warning = "d-none mt-1";

        if (contacts_length === 0 && this.state.searchString !== "") {
          show_contacts_warning = "mt-1";
        }

        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
          className: "search-container mb-3"
        }, _react.default.createElement("div", {
          className: "input-group"
        }, _react.default.createElement("div", {
          className: "input-group-btn"
        }, _react.default.createElement("button", {
          className: "btn btn-default",
          type: "submit"
        }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: _freeSolidSvgIcons.faSearch
        }))), _react.default.createElement("input", {
          type: "text",
          className: "form-control",
          placeholder: "Search name",
          name: "search",
          onChange: function onChange(e) {
            return _this3.handleSearchStringChange(e);
          },
          value: this.state.searchString
        })), _react.default.createElement("small", {
          className: show_contacts_warning
        }, _react.default.createElement("i", null, "No matching users found."))), _react.default.createElement("div", {
          className: "contact-listing bg-white"
        }, contacts.map(function (c) {
          return _react.default.createElement(_Contact.default, {
            key: c.uid,
            uid: c.uid,
            name: c.name,
            avatar: c.avatar !== undefined ? c.avatar : _userDefaultAvatar.default,
            status: c.status,
            lastActiveAt: new Date(c.lastActiveAt * 1000),
            handleContactClick: _this3.props.handleContactClick,
            activeContactUID: _this3.props.activeContactUID,
            unreadCount: _this3.state.unreadCounts[c.uid] !== undefined ? _this3.state.unreadCounts[c.uid] : 0
          });
        })));
      }
    }
  }]);

  return Contacts;
}(_react.Component);

var _default = Contacts;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Conversation = function Conversation(_ref) {
  var name = _ref.name,
      lastMessage = _ref.lastMessage,
      id = _ref.id,
      avatar = _ref.avatar,
      conversationType = _ref.conversationType,
      handleConversationClick = _ref.handleConversationClick,
      activeID = _ref.activeID;
  if (lastMessage === false) return false;
  var contact_classes = "contact-tab p-2 bg-white";
  if (activeID !== undefined && id === activeID) contact_classes += ' active';
  return _react.default.createElement("div", {
    className: contact_classes,
    onClick: function onClick() {
      return handleConversationClick(id, conversationType);
    }
  }, _react.default.createElement("div", {
    className: "contact-avatar-small"
  }, _react.default.createElement("img", {
    className: "mr-2",
    src: avatar,
    alt: name
  })), _react.default.createElement("div", {
    className: "contact-data"
  }, _react.default.createElement("p", {
    className: "mb-0 contact-name"
  }, name), _react.default.createElement("div", {
    className: "m-0 text-light-grey contact-status"
  }, _react.default.createElement("div", {
    className: "status-text last-msg mb-0"
  }, lastMessage))), _react.default.createElement("div", {
    className: "contact-view-arrow mb-3 mt-2 pr-2"
  }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faAngleRight
  })));
};

var _default = Conversation;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _chat = require("@cometchat-pro/chat");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _Conversation = _interopRequireDefault(require("./Conversation"));

var _lodash = _interopRequireDefault(require("lodash"));

var _userDefaultAvatar = _interopRequireDefault(require("../../resources/images/user-default-avatar.png"));

var _groupDefaultAvatar = _interopRequireDefault(require("../../resources/images/group-default-avatar.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Conversations =
/*#__PURE__*/
function (_Component) {
  _inherits(Conversations, _Component);

  function Conversations() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Conversations);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Conversations)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      conversations: [],
      conversationsFetched: false,
      searchString: "",
      unreadCounts: []
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearchStringChange", function (e) {
      _this.setState({
        searchString: e.target.value
      });

      var search_string = e.target.value;
      var conversationsRequest = new _chat.CometChat.ConversationsRequestBuilder().setLimit(100).build();
      conversationsRequest.fetchNext().then(function (conversationList) {
        var keys_to_remove = [];

        if (conversationList.length > 0) {
          _lodash.default.forEach(conversationList, function (c, k) {
            if (_lodash.default.toLower(c.conversationWith.name).indexOf(_lodash.default.toLower(search_string)) < 0) {
              keys_to_remove = _lodash.default.concat(keys_to_remove, k);
            }
          });

          _lodash.default.pullAt(conversationList, keys_to_remove);

          _this.setState({
            conversations: conversationList
          });
        }
      });
    });

    return _this;
  }

  _createClass(Conversations, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (_lodash.default.isEmpty(this.state.conversations) && this.state.conversationsFetched === false || this.props.lastMessageId !== prevProps.lastMessageId) {
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

      var _this$state = this.state,
          conversations = _this$state.conversations,
          conversationsFetched = _this$state.conversationsFetched;
      var conversations_length = conversations.length;

      if (conversations_length === 0 && this.state.searchString === "") {
        if (conversationsFetched) {
          return _react.default.createElement("div", {
            className: "empty-contacts p-2 bg-white"
          }, "No conversations available.", " ");
        } else {
          return _react.default.createElement("div", {
            className: "contact-tab p-2 bg-white"
          }, "Fetching conversations...");
        }
      } else {
        var show_contacts_warning = "d-none mt-1";

        if (conversations_length === 0 && this.state.searchString !== "") {
          show_contacts_warning = "mt-1";
        }

        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
          className: "search-container mb-3"
        }, _react.default.createElement("div", {
          className: "input-group"
        }, _react.default.createElement("div", {
          className: "input-group-btn"
        }, _react.default.createElement("button", {
          className: "btn btn-default",
          type: "submit"
        }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: _freeSolidSvgIcons.faSearch
        }))), _react.default.createElement("input", {
          type: "text",
          className: "form-control",
          placeholder: "Search name",
          name: "search",
          onChange: function onChange(e) {
            return _this3.handleSearchStringChange(e);
          },
          value: this.state.searchString
        })), _react.default.createElement("small", {
          className: show_contacts_warning
        }, _react.default.createElement("i", null, "No matching conversations found."))), _react.default.createElement("div", {
          className: "contact-listing bg-white"
        }, conversations.map(function (c) {
          return _react.default.createElement(_Conversation.default, {
            key: c.conversationId,
            id: c.conversationWith.uid !== undefined ? c.conversationWith.uid : c.conversationWith.guid !== undefined ? c.conversationWith.guid : "",
            name: c.conversationWith.name,
            avatar: c.conversationWith.avatar !== undefined ? c.conversationWith.avatar : c.conversationWith.icon !== undefined ? c.conversationWith.icon : c.conversationType === _chat.CometChat.RECEIVER_TYPE.GROUP ? _groupDefaultAvatar.default : _userDefaultAvatar.default,
            lastMessage: c.lastMessage === undefined ? '...' : c.lastMessage.category === "message" && c.lastMessage.type === "text" ? c.lastMessage.data.text : c.lastMessage.category === "message" ? c.lastMessage.type : c.lastMessage.category === "action" && c.lastMessage.action !== "deleted" ? c.lastMessage.message : c.lastMessage.category === "action" && c.lastMessage.action === "deleted" ? 'Message deleted' : false,
            handleConversationClick: _this3.props.handleConversationClick,
            activeID: _this3.props.activeID,
            conversationType: c.conversationType
          });
        })));
      }
    }
  }]);

  return Conversations;
}(_react.Component);

var _default = Conversations;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DemoUser = function DemoUser(_ref) {
  var uid = _ref.uid,
      name = _ref.name,
      avatar = _ref.avatar,
      margin = _ref.margin,
      handleDemoLogin = _ref.handleDemoLogin;
  var classes = "test-user-box mb-3 d-inline-flex p-1 ";
  classes += margin;
  return _react.default.createElement("div", {
    className: classes,
    id: uid,
    onClick: function onClick(e) {
      return handleDemoLogin(e, uid);
    }
  }, _react.default.createElement("div", null, _react.default.createElement("img", {
    className: "user-avatar-small mr-2",
    src: avatar,
    alt: name
  })), _react.default.createElement("div", null, _react.default.createElement("p", {
    className: "mb-0 demo-user-name"
  }, name), _react.default.createElement("p", {
    className: "m-0 text-font-grey demo-user-uid"
  }, uid)));
};

var _default = DemoUser;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Group = function Group(_ref) {
  var name = _ref.name,
      guid = _ref.guid,
      icon = _ref.icon,
      membersCount = _ref.membersCount,
      handleGroupClick = _ref.handleGroupClick,
      activeGUID = _ref.activeGUID,
      unreadCount = _ref.unreadCount;
  var group_classes = "group-tab p-2 bg-white";
  var unreadCountHtml;
  if (activeGUID !== undefined && guid === activeGUID) group_classes += ' active';
  return _react.default.createElement("div", {
    className: group_classes,
    onClick: function onClick() {
      return handleGroupClick(guid);
    }
  }, _react.default.createElement("div", {
    className: "group-icon-small"
  }, _react.default.createElement("img", {
    className: "mr-2",
    src: icon,
    alt: name
  })), _react.default.createElement("div", {
    className: "group-data"
  }, _react.default.createElement("p", {
    className: "mb-0 group-name"
  }, name), _react.default.createElement("p", {
    className: "m-0 text-light-grey contact-status"
  }, _react.default.createElement("span", {
    className: "status-text"
  }, "Members : ", membersCount))), _react.default.createElement("div", {
    className: "group-view-arrow mb-3 mt-2 pr-2"
  }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faAngleRight
  })), unreadCountHtml);
};

var _default = Group;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _chat = require("@cometchat-pro/chat");

var _constants = require("../../constants");

var _attachment = _interopRequireDefault(require("../../resources/images/attachment.png"));

var _Path2x = _interopRequireDefault(require("../../resources/images/send.imageset/Path@2x.png"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _Flip = _interopRequireDefault(require("react-reveal/Flip"));

var _RenderConversation = _interopRequireDefault(require("./RenderConversation"));

var _lodash = _interopRequireDefault(require("lodash"));

var _groupDefaultAvatar = _interopRequireDefault(require("../../resources/images/group-default-avatar.png"));

var _reactResponsive = _interopRequireDefault(require("react-responsive"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GroupConversation =
/*#__PURE__*/
function (_Component) {
  _inherits(GroupConversation, _Component);

  function GroupConversation() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, GroupConversation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GroupConversation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      members: []
    });

    return _this;
  }

  _createClass(GroupConversation, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (this.props.activeConversation.guid !== prevProps.activeConversation.guid || _lodash.default.isEmpty(this.state.members) && this.props.activeConversation.guid !== undefined || this.props.activeConversation.guid === prevProps.activeConversation.guid && this.props.activeConversation.membersCount !== prevProps.activeConversation.membersCount) {
        var subjectUID = this.props.subjectUID;
        var GUID = this.props.activeConversation.guid;
        var groupMemberRequest = new _chat.CometChat.GroupMembersRequestBuilder(GUID).setLimit(4).build();
        groupMemberRequest.fetchNext().then(function (groupMembers) {
          var members = [];

          if (!_lodash.default.isEmpty(groupMembers)) {
            _lodash.default.forEach(groupMembers, function (m) {
              if (m.uid === subjectUID) members = [].concat(_toConsumableArray(members), ["You"]);else members = [].concat(_toConsumableArray(members), [m.name]);
            });
          }

          _this2.setState({
            members: members
          });
        }, function (error) {
          _this2.setState({
            members: []
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props$activeCon = this.props.activeConversation,
          activeGUID = _this$props$activeCon.guid,
          activeGroupName = _this$props$activeCon.name,
          activeGroupIcon = _this$props$activeCon.icon;
      var attachment_show = this.props.showAttachmentOptions ? "chat-send-attachment" : "chat-send-attachment hidden";
      var utilities_contact_show = this.props.showContactUtilities ? "contact-utilities-list bg-white" : "contact-utilities-list bg-white hidden";
      var chat_body_header_classes = "chat-body-header py-3 d-flex ";
      var contact_name_classes = "mb-0 contact-name ";
      var contact_status_classes = "m-0 text-light-grey contact-status ";
      var chat_body_classes = "chat-body col-md-7 col-xl-8 col-sm-12 col-xs-12 p-0 ";
      var add_new_members;

      if (this.props.isMobile) {
        chat_body_header_classes += "px-2";
        contact_name_classes += "font-size-14";
        contact_status_classes += "font-size-14";
        chat_body_classes += this.props.chatBodyVisiblity;
      } else {
        chat_body_header_classes += "px-4";
      }

      if (this.props.ownerRights) {
        add_new_members = _react.default.createElement("p", {
          className: "u-optn",
          onClick: function onClick() {
            return _this3.props.handleAddGroupMemberToggle();
          }
        }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: _freeSolidSvgIcons.faUsersCog
        }), "\xA0Add new members");
      }

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
        className: chat_body_classes,
        onClick: function onClick(e) {
          return _this3.props.showHideAttachSection;
        }
      }, _react.default.createElement("div", {
        className: chat_body_header_classes
      }, _react.default.createElement("div", {
        className: "flex-fill"
      }, _react.default.createElement(_reactResponsive.default, {
        maxDeviceWidth: 767
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        className: "mx-1",
        icon: _freeSolidSvgIcons.faArrowLeft,
        onClick: function onClick() {
          return _this3.props.handleScreenChangesOnMobile();
        }
      })), _react.default.createElement("div", {
        className: "contact-avatar-small"
      }, _react.default.createElement("img", {
        className: "mr-2",
        src: activeGroupIcon === undefined ? _groupDefaultAvatar.default : activeGroupIcon,
        alt: "group icon"
      })), _react.default.createElement("div", {
        className: "contact-data"
      }, _react.default.createElement("p", {
        className: contact_name_classes
      }, activeGroupName), _react.default.createElement("div", {
        className: contact_status_classes
      }, _react.default.createElement("div", {
        className: "status-text status-offline",
        id: "members-list-chat"
      }, !_lodash.default.isEmpty(this.state.members) ? _lodash.default.map(this.state.members).join(", ") : "", this.state.members.length > 3 ? " and others" : "")))), _react.default.createElement("div", {
        className: "contact-calling-optns my-2"
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faPhoneAlt,
        className: "ml-4",
        onClick: function onClick(e) {
          return _this3.props.makeCall("1", activeGUID, _chat.CometChat.RECEIVER_TYPE.GROUP);
        }
      }), _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faVideo,
        className: "ml-4",
        onClick: function onClick(e) {
          return _this3.props.makeCall("2", activeGUID, _chat.CometChat.RECEIVER_TYPE.GROUP);
        }
      })), _react.default.createElement("div", {
        className: "contact-utilities my-2 ml-4",
        onClick: this.props.showHideContactUtilites
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faEllipsisV
      })), _react.default.createElement("div", {
        className: utilities_contact_show
      }, _react.default.createElement("p", {
        className: "u-optn",
        onClick: function onClick() {
          return _this3.props.handleToggleSubSidebar();
        }
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faUsers
      }), "\xA0View members"), add_new_members, _react.default.createElement("p", {
        className: "u-optn mb-0",
        onClick: function onClick() {
          return _this3.props.handleLeaveGroup(activeGUID);
        }
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faSignOutAlt
      }), "\xA0Leave group"))), _react.default.createElement("div", {
        className: "chat-body-conversation p-4"
      }, this.props.msghistory.map(function (m) {
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
          return _react.default.createElement(_RenderConversation.default, {
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
          return _react.default.createElement(_RenderConversation.default, {
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
          return _react.default.createElement(_RenderConversation.default, {
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
          return _react.default.createElement(_RenderConversation.default, {
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
      }), this.props.scrollToBottom()), _react.default.createElement("div", {
        className: "chat-body-sendmsg px-3 py-4"
      }, _react.default.createElement("div", {
        className: "d-flex justify-content-between"
      }, _react.default.createElement("div", {
        className: "mr-3"
      }, _react.default.createElement("img", {
        src: _attachment.default,
        id: "attachmentIco",
        alt: "attachmentIco",
        onClick: function onClick(e) {
          return _this3.props.showHideAttachSection(e);
        }
      })), _react.default.createElement("div", {
        className: "flex-fill"
      }, _react.default.createElement("input", {
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
      })), _react.default.createElement("div", {
        className: "ml-3"
      }, _react.default.createElement("img", {
        src: _Path2x.default,
        id: "sendMsgIco",
        alt: "sendMsgIcon",
        onClick: function onClick(e) {
          return _this3.props.sendMessage(e, "text");
        }
      })))), _react.default.createElement(_Flip.default, {
        bottom: true,
        when: this.props.showAttachmentOptions
      }, _react.default.createElement("div", {
        className: "chat-send-attachment-outer"
      }, _react.default.createElement("div", {
        className: attachment_show
      }, _react.default.createElement("div", {
        className: "d-flex justify-content-between"
      }, _react.default.createElement("div", {
        className: "px-5 py-4 mx-1"
      }, _react.default.createElement("div", {
        className: "attach-option",
        title: "Send a picture message"
      }, _react.default.createElement("label", {
        htmlFor: "attachment-type-2"
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faFileImage
      })), _react.default.createElement("input", {
        type: "file",
        id: "attachment-type-2",
        onChange: function onChange(e) {
          return _this3.props.handleAttachment(_constants.MESSAGE_TYPE_IMAGE);
        }
      }))), _react.default.createElement("div", {
        className: "px-5 py-4 mx-1"
      }, _react.default.createElement("div", {
        className: "attach-option",
        title: "Send a video message"
      }, _react.default.createElement("label", {
        htmlFor: "attachment-type-3"
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faFileVideo
      })), _react.default.createElement("input", {
        type: "file",
        id: "attachment-type-3",
        onChange: function onChange(e) {
          return _this3.props.handleAttachment(_constants.MESSAGE_TYPE_VIDEO);
        }
      }))), _react.default.createElement("div", {
        className: "px-5 py-4 mx-1"
      }, _react.default.createElement("div", {
        className: "attach-option",
        title: "Send a audio message"
      }, _react.default.createElement("label", {
        htmlFor: "attachment-type-4"
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faFileAudio
      })), _react.default.createElement("input", {
        type: "file",
        id: "attachment-type-4",
        onChange: function onChange(e) {
          return _this3.props.handleAttachment(_constants.MESSAGE_TYPE_AUDIO);
        }
      }))), _react.default.createElement("div", {
        className: "px-5 py-4 mx-1"
      }, _react.default.createElement("div", {
        className: "attach-option",
        title: "Send a file message"
      }, _react.default.createElement("label", {
        htmlFor: "attachment-type-5"
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faFileAlt
      })), _react.default.createElement("input", {
        type: "file",
        id: "attachment-type-5",
        onChange: function onChange(e) {
          return _this3.props.handleAttachment(_constants.MESSAGE_TYPE_FILE);
        }
      }))), _react.default.createElement("div", {
        className: "px-5 py-4 mx-1"
      }, _react.default.createElement("div", {
        className: "attach-option",
        title: "Send location"
      }, _react.default.createElement("label", {
        htmlFor: "attachment-type-1"
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faMapMarkerAlt,
        onClick: function onClick(e) {
          return _this3.props.sendCustomMessage();
        }
      }))))))))));
    }
  }]);

  return GroupConversation;
}(_react.Component);

var _default = GroupConversation;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GroupMember = function GroupMember(_ref) {
  var name = _ref.name,
      status = _ref.status,
      uid = _ref.uid,
      avatar = _ref.avatar,
      banned = _ref.banned,
      handleBanUnbanMember = _ref.handleBanUnbanMember,
      handleKickMember = _ref.handleKickMember,
      subjectUID = _ref.subjectUID,
      ownerRights = _ref.ownerRights;
  var action_button;
  var tab_title;
  var classes;
  var status_classes = "status mr-1 status-";
  status_classes += status;

  if (banned === false) {
    if (uid !== subjectUID && ownerRights) {
      action_button = _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
        className: "mb-2 mt-3 pr-2 ban-member"
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faBan,
        title: "Ban Member",
        onClick: function onClick() {
          return handleBanUnbanMember(uid, banned);
        }
      })), _react.default.createElement("div", {
        className: "mb-2 mt-3 pr-2 kick-member"
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faTrashAlt,
        title: "Kick Member",
        onClick: function onClick() {
          return handleKickMember(uid);
        }
      })));
    }

    tab_title = "";
    classes = "contact-tab p-2 bg-white ban-member-tab";
    return _react.default.createElement("div", {
      className: classes,
      title: tab_title
    }, _react.default.createElement("div", {
      className: "contact-avatar-small"
    }, _react.default.createElement("img", {
      className: "mr-2",
      src: avatar,
      alt: name
    })), _react.default.createElement("div", {
      className: "contact-data"
    }, _react.default.createElement("p", {
      className: "mb-0 contact-name va-super"
    }, name), _react.default.createElement("p", {
      className: "m-0 text-light-grey contact-status"
    }, _react.default.createElement("span", {
      className: status_classes
    }), _react.default.createElement("span", {
      className: "status-text"
    }, status))), action_button);
  } else {
    if (uid !== subjectUID && ownerRights) {
      action_button = _react.default.createElement("div", {
        className: "mb-2 mt-3 pr-2 unban-member"
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faUserPlus
      }));
    }

    tab_title = "Unban member from group";
    classes = "contact-tab p-2 bg-white unban-member-tab";
    return _react.default.createElement("div", {
      className: classes,
      title: tab_title,
      onClick: function onClick() {
        return handleBanUnbanMember(uid, banned);
      }
    }, _react.default.createElement("div", {
      className: "contact-avatar-small"
    }, _react.default.createElement("img", {
      className: "mr-2",
      src: avatar,
      alt: name
    })), _react.default.createElement("div", {
      className: "contact-data"
    }, _react.default.createElement("p", {
      className: "mb-0 contact-name va-super"
    }, name), _react.default.createElement("p", {
      className: "m-0 text-light-grey contact-status"
    }, _react.default.createElement("span", {
      className: status_classes
    }), _react.default.createElement("span", {
      className: "status-text"
    }, status))), action_button);
  }
};

var _default = GroupMember;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _chat = require("@cometchat-pro/chat");

var _GroupMember = _interopRequireDefault(require("./GroupMember"));

var _lodash = _interopRequireDefault(require("lodash"));

var _userDefaultAvatar = _interopRequireDefault(require("../../resources/images/user-default-avatar.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GroupMembers =
/*#__PURE__*/
function (_Component) {
  _inherits(GroupMembers, _Component);

  function GroupMembers() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, GroupMembers);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GroupMembers)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      groupMembers: [],
      bannedMembers: [],
      nonMembers: [],
      groupMembersFetched: false,
      bannedMembersFetched: false,
      searchString: ""
    });

    _defineProperty(_assertThisInitialized(_this), "handleBanUnbanMember", function (UID, isbanned) {
      if (_this.props.subjectUID !== UID && _this.props.ownerRights) {
        var GUID = _this.props.activeGUID;

        if (!isbanned) //active member
          {
            _chat.CometChat.banGroupMember(GUID, UID).then(function (response) {
              var groupMembers = _this.state.groupMembers;

              var memberIndex = _lodash.default.findIndex(_this.state.groupMembers, function (m) {
                return m.uid === UID;
              });

              var bannedMembers = [].concat(_toConsumableArray(_this.state.bannedMembers), [groupMembers[memberIndex]]);

              _lodash.default.pullAt(groupMembers, [memberIndex]);

              _this.setState({
                groupMembers: groupMembers,
                bannedMembers: bannedMembers
              });

              _this.props.refreshActiveConversation(GUID);
            }, function (error) {});
          } else //banned member
          {
            _chat.CometChat.unbanGroupMember(GUID, UID).then(function (response) {
              var bannedMembers = _this.state.bannedMembers;

              var memberIndex = _lodash.default.findIndex(bannedMembers, function (m) {
                return m.uid === UID;
              });

              _lodash.default.pullAt(bannedMembers, [memberIndex]);

              _this.setState({
                bannedMembers: bannedMembers
              });

              _this.props.refreshActiveConversation(GUID);
            }, function (error) {});
          }
      } else {
        alert("You are not authorized");
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleKickMember", function (UID) {
      if (_this.props.subjectUID !== UID && _this.props.ownerRights) {
        var GUID = _this.props.activeGUID;

        _chat.CometChat.kickGroupMember(GUID, UID).then(function (response) {
          var groupMembers = _this.state.groupMembers;

          var memberIndex = _lodash.default.findIndex(_this.state.groupMembers, function (m) {
            return m.uid === UID;
          });

          _lodash.default.pullAt(groupMembers, [memberIndex]);

          _this.setState({
            groupMembers: groupMembers
          });

          _this.props.refreshActiveConversation(GUID);
        }, function (error) {});
      } else {
        alert("You are not authorized");
      }
    });

    return _this;
  }

  _createClass(GroupMembers, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (_lodash.default.isEmpty(this.state.groupMembers) && this.state.groupMembersFetched === false && this.props.activeGUID !== undefined || this.props.activeGUID !== prevProps.activeGUID || this.props.activeGUIDMemberCount !== prevProps.activeGUIDMemberCount) {
        var GUID = this.props.activeGUID;
        var limit = 30;
        var groupMemberRequest = new _chat.CometChat.GroupMembersRequestBuilder(GUID).setLimit(limit).build();
        groupMemberRequest.fetchNext().then(function (groupMembers) {
          var bannedMembersRequest = new _chat.CometChat.BannedMembersRequestBuilder(GUID).setLimit(limit).build();
          bannedMembersRequest.fetchNext().then(function (bannedMembers) {
            _this2.setState({
              groupMembers: groupMembers,
              groupMembersFetched: true,
              bannedMembers: bannedMembers,
              bannedMembersFetched: true
            });
          }, function (error) {
            _this2.setState({
              bannedMembers: [],
              bannedMembersFetched: true
            });
          });
        }, function (error) {
          _this2.setState({
            groupMembers: [],
            groupMembersFetched: true
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          groupMembers = _this$state.groupMembers,
          groupMembersFetched = _this$state.groupMembersFetched,
          bannedMembers = _this$state.bannedMembers;
      var groupMembers_length = groupMembers.length;
      var bannedMembers_length = bannedMembers.length;

      if (groupMembers_length === 0 && bannedMembers_length) {
        if (groupMembersFetched) {
          return _react.default.createElement("div", {
            className: "empty-contacts p-2 bg-white"
          }, "No group members. ");
        } else {
          return _react.default.createElement("div", {
            className: "contact-tab p-2 bg-white"
          }, "Fetching group members...");
        }
      } else {
        var activeTitle;
        var bannedTitle = "";
        if (groupMembers.length > 0) activeTitle = _react.default.createElement("div", {
          className: "group-member-title"
        }, "Active Members");
        if (bannedMembers.length > 0) bannedTitle = _react.default.createElement("div", {
          className: "group-member-title"
        }, "Banned Members");
        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
          className: "group-member-listing bg-white"
        }, activeTitle, groupMembers.map(function (c) {
          return _react.default.createElement(_GroupMember.default, {
            key: c.uid,
            uid: c.uid,
            name: c.name,
            avatar: c.avatar === undefined ? _userDefaultAvatar.default : c.avatar,
            status: c.status,
            handleBanUnbanMember: _this3.handleBanUnbanMember,
            handleKickMember: _this3.handleKickMember,
            subjectUID: _this3.props.subjectUID,
            banned: false,
            ownerRights: _this3.props.ownerRights
          });
        }), bannedTitle, bannedMembers.map(function (c) {
          return _react.default.createElement(_GroupMember.default, {
            key: c.uid,
            uid: c.uid,
            name: c.name,
            avatar: c.avatar === undefined ? _userDefaultAvatar.default : c.avatar,
            status: c.status,
            handleBanUnbanMember: _this3.handleBanUnbanMember,
            subjectUID: _this3.props.subjectUID,
            banned: true,
            ownerRights: _this3.props.ownerRights
          });
        })));
      }
    }
  }]);

  return GroupMembers;
}(_react.Component);

var _default = GroupMembers;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _chat = require("@cometchat-pro/chat");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _Group = _interopRequireDefault(require("./Group"));

var _lodash = _interopRequireDefault(require("lodash"));

var _groupDefaultAvatar = _interopRequireDefault(require("../../resources/images/group-default-avatar.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Groups =
/*#__PURE__*/
function (_Component) {
  _inherits(Groups, _Component);

  function Groups() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Groups);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Groups)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      groups: {
        joined: [],
        others: []
      },
      searchString: "",
      unreadCounts: [],
      newGroupGuid: "",
      newGroupName: "",
      newGroupType: "public",
      newGroupPassword: "",
      protectedGroupPassword: ""
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearchStringChange", function (e) {
      _this.setState({
        searchString: e.target.value
      });

      var groupsRequest = new _chat.CometChat.GroupsRequestBuilder().setLimit(50).setSearchKeyword(e.target.value).build();
      groupsRequest.fetchNext().then(function (groupList) {
        var groupListJoined = _lodash.default.filter(groupList, function (o) {
          return o.hasJoined;
        });

        var groupListOthers = _lodash.default.filter(groupList, function (o) {
          return !o.hasJoined && !o.isBanned;
        });

        _this.setState({
          groups: {
            joined: groupListJoined,
            others: groupListOthers
          }
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "refreshNewGroupFields", function () {
      _this.setState({
        newGroupGuid: "",
        newGroupName: "",
        newGroupType: "public",
        newGroupPassword: ""
      });

      _this.props.hideCreateGroupModal();
    });

    _defineProperty(_assertThisInitialized(_this), "refreshPasswordField", function () {
      _this.setState({
        protectedGroupPassword: ""
      });

      _this.props.hideAskPasswordModal();
    });

    _defineProperty(_assertThisInitialized(_this), "handleCreateNewGroup", function () {
      var GUID = _this.state.newGroupGuid;
      var groupName = _this.state.newGroupName;
      var groupType = _this.state.newGroupType;
      var password = "";

      if (_this.state.newGroupType === "password") {
        password = _this.state.newGroupPassword;
      }

      var group = new _chat.CometChat.Group(GUID, groupName, groupType, password);

      _chat.CometChat.createGroup(group).then(function (group) {
        var groups = _this.state.groups;
        groups.joined = [].concat(_toConsumableArray(groups.joined), [group]);

        _this.setState({
          groups: groups,
          newGroupGuid: "",
          newGroupName: "",
          newGroupPassword: "",
          newGroupType: "public"
        });

        _this.props.hideCreateGroupModal();
      }, function (error) {});
    });

    _defineProperty(_assertThisInitialized(_this), "handleGroupNameChange", function (e) {
      _this.setState({
        newGroupName: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleGroupGuidChange", function (e) {
      _this.setState({
        newGroupGuid: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleGroupTypeChange", function (e) {
      _this.setState({
        newGroupType: e.target.value,
        newGroupPassword: ""
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleGroupPasswordChange", function (e) {
      _this.setState({
        newGroupPassword: e.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleProtectedGroupPasswordChange", function (e) {
      _this.setState({
        protectedGroupPassword: e.target.value
      });
    });

    return _this;
  }

  _createClass(Groups, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (_lodash.default.isEmpty(this.state.groups.joined) && _lodash.default.isEmpty(this.state.groups.others) || this.props.activeGUID !== prevProps.activeGUID) {
        var groupsRequest = new _chat.CometChat.GroupsRequestBuilder().setLimit(30).setSearchKeyword(this.state.searchString).build();
        var groupListJoined;
        var groupListOthers;
        groupsRequest.fetchNext().then(function (groupList) {
          groupListJoined = _lodash.default.filter(groupList, function (o) {
            return o.hasJoined;
          });
          groupListOthers = _lodash.default.filter(groupList, function (o) {
            return !o.hasJoined && !o.isBanned;
          });

          _chat.CometChat.getUnreadMessageCountForAllGroups().then(function (unreadCounts) {
            _this2.setState({
              groups: {
                joined: groupListJoined,
                others: groupListOthers
              },
              unreadCounts: unreadCounts
            });
          }, function (error) {
            _this2.setState({
              groups: {
                joined: groupListJoined,
                others: groupListOthers
              },
              unreadCounts: []
            });
          });
        }, function (error) {
          _this2.setState({
            groups: {
              joined: [],
              others: []
            },
            unreadCounts: []
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var groups = this.state.groups;
      var groups_length = groups.joined.length + groups.others.length;

      if (groups_length === 0 && this.state.searchString === "") {
        return _react.default.createElement("div", {
          className: "group-tab p-2 bg-white"
        }, "Fetching groups ...");
      } else {
        var show_groups_warning = "d-none mt-1";

        if (groups_length === 0 && this.state.searchString !== "") {
          show_groups_warning = "mt-1";
        }

        var joinedTitle = "";
        if (groups.joined.length > 0) joinedTitle = _react.default.createElement("div", {
          className: "groups-type-title"
        }, "JOINED GROUPS");
        var othersTitle = "";
        if (groups.others.length > 0) othersTitle = _react.default.createElement("div", {
          className: "groups-type-title"
        }, "OTHER GROUPS");
        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
          className: "search-container mb-3"
        }, _react.default.createElement("div", {
          className: "input-group"
        }, _react.default.createElement("div", {
          className: "input-group-btn"
        }, _react.default.createElement("button", {
          className: "btn btn-default",
          type: "submit"
        }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: _freeSolidSvgIcons.faSearch
        }))), _react.default.createElement("input", {
          type: "text",
          className: "form-control",
          placeholder: "Search name",
          name: "search",
          onChange: function onChange(e) {
            return _this3.handleSearchStringChange(e);
          },
          value: this.state.searchString
        })), _react.default.createElement("small", {
          className: show_groups_warning
        }, _react.default.createElement("i", null, "No matching groups found."))), _react.default.createElement("div", {
          className: "groups-container bg-white"
        }, _react.default.createElement("div", {
          className: "groups-listing"
        }, joinedTitle, groups.joined.map(function (c) {
          return _react.default.createElement(_Group.default, {
            key: c.guid,
            askPassword: false,
            guid: c.guid,
            name: c.name,
            icon: c.icon !== undefined ? c.icon : _groupDefaultAvatar.default,
            membersCount: c.membersCount,
            handleGroupClick: _this3.props.handleGroupClick,
            activeGUID: _this3.props.activeGUID,
            unreadCount: _this3.state.unreadCounts[c.guid] !== undefined ? _this3.state.unreadCounts[c.guid] : 0
          });
        }), othersTitle, groups.others.map(function (c) {
          return _react.default.createElement(_Group.default, {
            key: c.guid,
            askPassword: c.type === "password" ? true : false,
            guid: c.guid,
            name: c.name,
            icon: c.icon !== undefined ? c.icon : _groupDefaultAvatar.default,
            membersCount: c.membersCount,
            handleGroupClick: _this3.props.handleGroupClick,
            activeGUID: _this3.props.activeGUID,
            unreadCount: _this3.state.unreadCounts[c.guid] !== undefined ? _this3.state.unreadCounts[c.guid] : 0
          });
        }))), _react.default.createElement(CreateGroupFormModal, {
          createGroupFormShow: this.props.createGroupFormShow,
          handleGroupPasswordChange: this.handleGroupPasswordChange,
          handleGroupNameChange: this.handleGroupNameChange,
          handleGroupTypeChange: this.handleGroupTypeChange,
          handleGroupGuidChange: this.handleGroupGuidChange,
          handleCreateNewGroup: this.handleCreateNewGroup,
          newGroupGuid: this.state.newGroupGuid,
          newGroupName: this.state.newGroupName,
          newGroupType: this.state.newGroupType,
          newGroupPassword: this.state.newGroupPassword,
          refreshNewGroupFields: this.refreshNewGroupFields
        }), _react.default.createElement(AskPasswordModal, {
          createGroupFormShow: this.props.createGroupFormShow,
          showAskPasswordModal: this.props.showAskPasswordModal,
          refreshPasswordField: this.refreshPasswordField,
          protectedGroupPassword: this.state.protectedGroupPassword,
          handleProtectedGroupPasswordChange: this.handleProtectedGroupPasswordChange,
          handleGroupClick: this.props.handleGroupClick,
          protectedGroupAskPasswordGuid: this.props.protectedGroupAskPasswordGuid
        }));
      }
    }
  }]);

  return Groups;
}(_react.Component);

function CreateGroupFormModal(_ref) {
  var createGroupFormShow = _ref.createGroupFormShow,
      refreshNewGroupFields = _ref.refreshNewGroupFields,
      handleGroupNameChange = _ref.handleGroupNameChange,
      handleGroupTypeChange = _ref.handleGroupTypeChange,
      handleGroupPasswordChange = _ref.handleGroupPasswordChange,
      handleCreateNewGroup = _ref.handleCreateNewGroup,
      handleGroupGuidChange = _ref.handleGroupGuidChange,
      newGroupType = _ref.newGroupType,
      newGroupGuid = _ref.newGroupGuid,
      newGroupName = _ref.newGroupName,
      newGroupPassword = _ref.newGroupPassword;
  var passwordDisabled = "disabled";

  if (newGroupType === "password") {
    passwordDisabled = "";
  }

  var showHideClassName = createGroupFormShow ? "modal fade display-block" : "modal fade display-none";
  var showHideBackdropClasses = createGroupFormShow ? "modal-backdrop fade in" : "";
  return _react.default.createElement("div", {
    className: showHideClassName,
    id: "exampleModal",
    tabIndex: "-1",
    role: "dialog",
    "aria-labelledby": "exampleModalLabel",
    "aria-hidden": "true"
  }, _react.default.createElement("div", {
    className: showHideBackdropClasses
  }), _react.default.createElement("div", {
    className: "modal-dialog modal-dialog-centered",
    role: "document"
  }, _react.default.createElement("div", {
    className: "modal-content"
  }, _react.default.createElement("div", {
    className: "modal-header"
  }, _react.default.createElement("h5", {
    className: "modal-title",
    id: "exampleModalLabel"
  }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faUsers
  }), " \xA0New group"), _react.default.createElement("button", {
    onClick: function onClick() {
      return refreshNewGroupFields();
    },
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, _react.default.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"))), _react.default.createElement("div", {
    className: "modal-body"
  }, _react.default.createElement("form", null, _react.default.createElement("div", {
    className: "form-group"
  }, _react.default.createElement("label", {
    htmlFor: "group-guid",
    className: "col-form-label"
  }, "GUID:"), _react.default.createElement("input", {
    value: newGroupGuid,
    autoFocus: true,
    type: "text",
    className: "form-control",
    id: "group-guid",
    onChange: function onChange(e) {
      return handleGroupGuidChange(e);
    }
  })), _react.default.createElement("div", {
    className: "form-group"
  }, _react.default.createElement("label", {
    htmlFor: "group-name",
    className: "col-form-label"
  }, "Name:"), _react.default.createElement("input", {
    value: newGroupName,
    autoFocus: true,
    type: "text",
    className: "form-control",
    id: "group-name",
    onChange: function onChange(e) {
      return handleGroupNameChange(e);
    }
  })), _react.default.createElement("div", {
    className: "form-group"
  }, _react.default.createElement("label", {
    htmlFor: "group-type",
    className: "col-form-label"
  }, "Type:"), _react.default.createElement("select", {
    className: "form-control",
    defaultValue: _chat.CometChat.GROUP_TYPE.PUBLIC,
    id: "group-type",
    onChange: function onChange(e) {
      return handleGroupTypeChange(e);
    }
  }, _react.default.createElement("option", {
    value: _chat.CometChat.GROUP_TYPE.PUBLIC
  }, "Public"), _react.default.createElement("option", {
    value: _chat.CometChat.GROUP_TYPE.PASSWORD
  }, "Password protected"), _react.default.createElement("option", {
    value: _chat.CometChat.GROUP_TYPE.PRIVATE
  }, "Private"))), _react.default.createElement("div", {
    className: "form-group",
    htmlFor: "group-password"
  }, _react.default.createElement("label", {
    htmlFor: "group-password",
    className: "col-form-label"
  }, "Password:"), _react.default.createElement("input", {
    disabled: passwordDisabled,
    value: newGroupPassword,
    type: "text",
    className: "form-control",
    id: "group-password",
    onChange: function onChange(e) {
      return handleGroupPasswordChange(e);
    }
  })))), _react.default.createElement("div", {
    className: "modal-footer align-center"
  }, _react.default.createElement("button", {
    type: "button",
    className: "btn btn-cc btn-sm btn-block",
    onClick: function onClick(event) {
      return handleCreateNewGroup(event);
    }
  }, "Create")))));
}

function AskPasswordModal(_ref2) {
  var refreshPasswordField = _ref2.refreshPasswordField,
      showAskPasswordModal = _ref2.showAskPasswordModal,
      createGroupFormShow = _ref2.createGroupFormShow,
      protectedGroupPassword = _ref2.protectedGroupPassword,
      handleProtectedGroupPasswordChange = _ref2.handleProtectedGroupPasswordChange,
      handleGroupClick = _ref2.handleGroupClick,
      protectedGroupAskPasswordGuid = _ref2.protectedGroupAskPasswordGuid;
  var modalClasses = showAskPasswordModal ? "modal fade display-block" : "modal fade display-none";
  var backdropClasses = showAskPasswordModal ? "modal-backdrop fade in" : "";
  return _react.default.createElement("div", {
    className: modalClasses,
    id: "exampleModal1",
    tabIndex: "-1",
    role: "dialog",
    "aria-labelledby": "exampleModalLabel",
    "aria-hidden": "true"
  }, _react.default.createElement("div", {
    className: backdropClasses
  }), _react.default.createElement("div", {
    className: "modal-dialog modal-dialog-centered",
    role: "document"
  }, _react.default.createElement("div", {
    className: "modal-content"
  }, _react.default.createElement("div", {
    className: "modal-header"
  }, _react.default.createElement("h5", {
    className: "modal-title",
    id: "exampleModalLabel"
  }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faUsers
  }), " \xA0Enter password to join"), _react.default.createElement("button", {
    onClick: function onClick() {
      return refreshPasswordField();
    },
    type: "button",
    className: "close",
    "data-dismiss": "modal",
    "aria-label": "Close"
  }, _react.default.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"))), _react.default.createElement("div", {
    className: "modal-body"
  }, _react.default.createElement("form", null, _react.default.createElement("div", {
    className: "form-group",
    htmlFor: "group-password"
  }, _react.default.createElement("label", {
    htmlFor: "group-password",
    className: "col-form-label"
  }, "Password:"), _react.default.createElement("input", {
    value: protectedGroupPassword,
    type: "text",
    className: "form-control",
    id: "group-password",
    onChange: function onChange(e) {
      return handleProtectedGroupPasswordChange(e);
    }
  })))), _react.default.createElement("div", {
    className: "modal-footer align-center"
  }, _react.default.createElement("button", {
    type: "button",
    className: "btn btn-cc btn-sm btn-block",
    onClick: function onClick() {
      return handleGroupClick(protectedGroupAskPasswordGuid, protectedGroupPassword);
    }
  }, "Join")))));
}

var _default = Groups;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _cometchat_white = _interopRequireDefault(require("../../resources/images/cometchat_white.png"));

var _ironman2x = _interopRequireDefault(require("../../resources/images/ironman@2x.png"));

var _captainamerica2x = _interopRequireDefault(require("../../resources/images/captainamerica@2x.png"));

var _spiderman2x = _interopRequireDefault(require("../../resources/images/spiderman@2x.png"));

var _wolverine2x = _interopRequireDefault(require("../../resources/images/wolverine@2x.png"));

var _loading = _interopRequireDefault(require("../../resources/images/loading1.gif"));

var _DemoUser = _interopRequireDefault(require("./DemoUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LoginForm =
/*#__PURE__*/
function (_Component) {
  _inherits(LoginForm, _Component);

  function LoginForm() {
    _classCallCheck(this, LoginForm);

    return _possibleConstructorReturn(this, _getPrototypeOf(LoginForm).apply(this, arguments));
  }

  _createClass(LoginForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.uid !== "") window.location = "/#/chat";
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
        className: "cc-logo"
      }, _react.default.createElement("img", {
        src: _cometchat_white.default,
        alt: "cometchat logo"
      })), _react.default.createElement("div", {
        className: "border-0 login-form-box bg-white px-5 py-5 col-lg-6 col-sm-12 col-md-9 col-xs-12"
      }, _react.default.createElement("form", {
        className: ""
      }, _react.default.createElement("div", {
        className: "form-group"
      }, _react.default.createElement("input", {
        required: true,
        className: "form-control form-control-lg",
        placeholder: "Enter UID",
        type: "text",
        onChange: function onChange(e) {
          return _this.props.handleInputChange(e);
        }
      })), _react.default.createElement("div", {
        className: "form-group mb-0 mt-3"
      }, _react.default.createElement("button", {
        disabled: this.props.loginBtnDisabled,
        className: "btn btn-cc btn-lg btn-block",
        id: "cc_login_btn",
        onClick: function onClick(event) {
          return _this.props.handleLogin(event);
        }
      }, this.props.loginBtnDisabled ? "Processing" : "Login", this.props.loginBtnDisabled ? _react.default.createElement("img", {
        className: "loader",
        src: _loading.default,
        alt: "loading..."
      }) : "")), _react.default.createElement("p", {
        className: "text-center mt-3 info-text"
      }, "Haven't created a user yet? Select one of our default users for testing :"), _react.default.createElement("div", null, _react.default.createElement(_DemoUser.default, {
        name: "IronMan",
        avatar: _ironman2x.default,
        uid: "superhero1",
        margin: "mr-2",
        handleDemoLogin: this.props.handleDemoLogin
      }), _react.default.createElement(_DemoUser.default, {
        name: "CaptainAmerica",
        avatar: _captainamerica2x.default,
        uid: "superhero2",
        margin: "",
        handleDemoLogin: this.props.handleDemoLogin
      }), _react.default.createElement(_DemoUser.default, {
        name: "SpiderMan",
        avatar: _spiderman2x.default,
        uid: "superhero3",
        margin: "mr-2",
        handleDemoLogin: this.props.handleDemoLogin
      }), _react.default.createElement(_DemoUser.default, {
        name: "Wolverine",
        avatar: _wolverine2x.default,
        uid: "superhero4",
        margin: "",
        handleDemoLogin: this.props.handleDemoLogin
      })))));
    }
  }]);

  return LoginForm;
}(_react.Component);

var _default = LoginForm;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NonGroupMember = function NonGroupMember(_ref) {
  var name = _ref.name,
      status = _ref.status,
      uid = _ref.uid,
      avatar = _ref.avatar,
      handleAddMember = _ref.handleAddMember,
      subjectUID = _ref.subjectUID,
      ownerRights = _ref.ownerRights;
  var action_button;
  var tab_title;
  var classes;
  var status_classes = "status mr-1 status-";
  status_classes += status;

  if (uid !== subjectUID && ownerRights) {
    action_button = _react.default.createElement("div", {
      className: "mb-2 mt-3 pr-2 add-member"
    }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faUserPlus
    }));
  }

  tab_title = "Add member to group";
  classes = "contact-tab p-2 bg-white add-member-tab";
  return _react.default.createElement("div", {
    className: classes,
    title: tab_title,
    onClick: function onClick() {
      return handleAddMember(uid);
    }
  }, _react.default.createElement("div", {
    className: "contact-avatar-small"
  }, _react.default.createElement("img", {
    className: "mr-2",
    src: avatar,
    alt: name
  })), _react.default.createElement("div", {
    className: "contact-data"
  }, _react.default.createElement("p", {
    className: "mb-0 contact-name va-super"
  }, name), _react.default.createElement("p", {
    className: "m-0 text-light-grey contact-status"
  }, _react.default.createElement("span", {
    className: status_classes
  }), _react.default.createElement("span", {
    className: "status-text"
  }, status))), action_button);
};

var _default = NonGroupMember;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _chat = require("@cometchat-pro/chat");

var _NonGroupMember = _interopRequireDefault(require("./NonGroupMember"));

var _lodash = _interopRequireDefault(require("lodash"));

var _userDefaultAvatar = _interopRequireDefault(require("../../resources/images/user-default-avatar.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NonGroupMembers =
/*#__PURE__*/
function (_Component) {
  _inherits(NonGroupMembers, _Component);

  function NonGroupMembers() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NonGroupMembers);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NonGroupMembers)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      nonGroupMembers: [],
      nonMembersFetched: false,
      searchString: ""
    });

    _defineProperty(_assertThisInitialized(_this), "handleAddMember", function (uid) {
      var GUID = _this.props.activeGUID;
      var membersList = [new _chat.CometChat.GroupMember(uid, _chat.CometChat.GROUP_MEMBER_SCOPE.PARTICIPANT)];

      _chat.CometChat.addMembersToGroup(GUID, membersList, []).then(function (response) {
        _this.props.refreshActiveConversation(GUID);
      });
    });

    return _this;
  }

  _createClass(NonGroupMembers, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (_lodash.default.isEmpty(this.state.groupMembers) && this.state.membersFetched === false && this.props.activeGUID !== undefined || this.props.activeGUID !== prevProps.activeGUID || this.props.activeGUIDMemberCount !== prevProps.activeGUIDMemberCount) {
        var GUID = this.props.activeGUID;
        var limit = 30;
        var groupMemberRequest = new _chat.CometChat.GroupMembersRequestBuilder(GUID).setLimit(limit).build();
        groupMemberRequest.fetchNext().then(function (groupMembers) {
          var usersRequest = new _chat.CometChat.UsersRequestBuilder().setLimit(50).setSearchKeyword(_this2.state.searchString).hideBlockedUsers(true).build();
          usersRequest.fetchNext().then(function (userList) {
            _lodash.default.forEach(groupMembers, function (g) {
              var u_index = _lodash.default.findIndex(userList, function (o) {
                return o.uid === g.uid;
              });

              _lodash.default.pullAt(userList, [u_index]);
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
          _this2.setState({
            nonGroupMembers: [],
            nonMembersFetched: true
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$state = this.state,
          nonGroupMembers = _this$state.nonGroupMembers,
          nonMembersFetched = _this$state.nonMembersFetched;
      var nonGroupMembers_length = nonGroupMembers.length;

      if (nonGroupMembers_length === 0) {
        if (nonMembersFetched) {
          return _react.default.createElement("div", {
            className: "empty-contacts p-2 bg-white"
          }, "No new group members to add.", " ");
        } else {
          return _react.default.createElement("div", {
            className: "contact-tab p-2 bg-white"
          }, "Fetching users...");
        }
      } else {
        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
          className: "group-member-listing bg-white"
        }, _react.default.createElement("div", {
          className: "group-member-title"
        }, "Non group Members"), nonGroupMembers.map(function (c) {
          return _react.default.createElement(_NonGroupMember.default, {
            key: c.uid,
            uid: c.uid,
            name: c.name,
            avatar: c.avatar === undefined ? _userDefaultAvatar.default : c.avatar,
            status: c.status,
            handleAddMember: _this3.handleAddMember,
            subjectUID: _this3.props.subjectUID,
            ownerRights: _this3.props.ownerRights
          });
        })));
      }
    }
  }]);

  return NonGroupMembers;
}(_react.Component);

var _default = NonGroupMembers;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _chat = require("@cometchat-pro/chat");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _wait2x = _interopRequireDefault(require("../../resources/images/MsgStatusIcons/wait@2x.png"));

var _sent2x = _interopRequireDefault(require("../../resources/images/MsgStatusIcons/sent@2x.png"));

var _seen2x = _interopRequireDefault(require("../../resources/images/MsgStatusIcons/seen@2x.png"));

var _delivered2x = _interopRequireDefault(require("../../resources/images/MsgStatusIcons/delivered@2x.png"));

var _googleMapsLogo = _interopRequireDefault(require("../../resources/images/google-maps-logo.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RenderConversation =
/*#__PURE__*/
function (_Component) {
  _inherits(RenderConversation, _Component);

  function RenderConversation() {
    _classCallCheck(this, RenderConversation);

    return _possibleConstructorReturn(this, _getPrototypeOf(RenderConversation).apply(this, arguments));
  }

  _createClass(RenderConversation, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          msg = _this$props.msg,
          msgID = _this$props.msgID,
          msgType = _this$props.msgType,
          msgCategory = _this$props.msgCategory,
          sentAt = _this$props.sentAt,
          avatar = _this$props.avatar,
          readAt = _this$props.readAt,
          deliveredAt = _this$props.deliveredAt,
          editedAt = _this$props.editedAt,
          attachmentData = _this$props.attachmentData,
          handleMessageClick = _this$props.handleMessageClick,
          showMsgAction = _this$props.showMsgAction,
          handleMessageDelete = _this$props.handleMessageDelete,
          handleMessageEdit = _this$props.handleMessageEdit,
          scrollToBottom = _this$props.scrollToBottom;

      if (msgCategory === "incoming") {
        return _react.default.createElement(RenderIcomingMsg, {
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
        return _react.default.createElement(RenderJoinedMsg, {
          msg: msg,
          msgID: msgID,
          msgType: msgType,
          sentAt: sentAt,
          avatar: avatar,
          msgCategory: msgCategory
        });
      } else {
        return _react.default.createElement(RenderOutgoingMsg, {
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

    var callIcon = _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faPhoneAlt,
      className: "mr-1"
    });

    if (msgType === "video") callIcon = _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faVideo,
      className: "mr-1"
    });
    messageContent = _react.default.createElement("div", {
      className: "msg-bubble ml-2 mr-1",
      title: msg
    }, callIcon, msg);
  } else {
    messageContent = _react.default.createElement("div", {
      className: "msg-bubble ml-2 mr-1",
      title: msg
    }, msg);
  }

  return _react.default.createElement("div", {
    className: "member-activity-msg mb-3"
  }, _react.default.createElement("div", {
    className: "msg-row"
  }, messageContent));
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

  var msgSentAt = _react.default.createElement("span", {
    className: "small msg-time"
  }, convertStringToDate(sentAt));

  if (editedAt !== undefined) {
    messageEdited = _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("small", null, "..."), " ", _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faPencilAlt,
      className: "msg-edited-indicator"
    }));
  }

  if (msgType === _chat.CometChat.MESSAGE_TYPE.TEXT) {
    if (msg === undefined) {
      messageContent = _react.default.createElement("div", {
        className: "msg-bubble msg-bubble-deleted-msg ml-2 mr-1"
      }, msg === undefined ? "Message deleted" : msg);
      msgSentAt = "";
    } else {
      messageContent = _react.default.createElement("div", {
        className: "msg-bubble ml-2 mr-1"
      }, msg, " ", messageEdited);
    }
  } else if (msgType === _chat.CometChat.MESSAGE_TYPE.IMAGE) {
    if (msg === undefined || msg === "") {
      messageContent = _react.default.createElement("div", {
        className: "msg-bubble msg-bubble-deleted-msg ml-2 mr-1"
      }, "Message deleted");
      msgSentAt = "";
    } else {
      messageContent = _react.default.createElement("div", {
        className: "msg-media-img ml-2 mr-1"
      }, _react.default.createElement("a", {
        href: msg,
        title: "View picture message",
        target: "_blank",
        rel: "noopener noreferrer"
      }, _react.default.createElement("img", {
        src: msg,
        alt: "Pic message",
        onLoad: function onLoad() {
          return scrollToBottom();
        }
      }), _react.default.createElement("div", {
        className: "click-to-view-media"
      }, _react.default.createElement("div", {
        className: "click-to-view-text"
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faImage
      })))));
    }
  } else if (msgType === _chat.CometChat.MESSAGE_TYPE.VIDEO) {
    if (msg === undefined || msg === "") {
      messageContent = _react.default.createElement("div", {
        className: "msg-bubble msg-bubble-deleted-msg ml-2 mr-1"
      }, "Message deleted");
    } else {
      messageContent = _react.default.createElement("div", {
        className: "msg-media-file ml-2 mr-1"
      }, _react.default.createElement("a", {
        href: msg,
        title: "Play video message",
        target: "_blank",
        rel: "noopener noreferrer"
      }, _react.default.createElement("div", {
        className: "attachment-file-msg px-3 py-3"
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faFilm
      }), _react.default.createElement("div", {
        className: "attachment-data"
      }, _react.default.createElement("div", null, attachmentData !== undefined ? attachmentData.fileName : "File name not available"), _react.default.createElement("small", null, attachmentData !== undefined ? formatFileSize(attachmentData.fileSize) : ""))), _react.default.createElement("div", {
        className: "click-to-view-media"
      }, _react.default.createElement("div", {
        className: "click-to-view-text"
      }, " ", _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faPlay
      })))));
    }
  } else if (msgType === _chat.CometChat.MESSAGE_TYPE.AUDIO) {
    if (msg === undefined || msg === "") {
      messageContent = _react.default.createElement("div", {
        className: "msg-bubble msg-bubble-deleted-msg ml-2 mr-1"
      }, "Message deleted");
    } else {
      messageContent = _react.default.createElement("div", {
        className: "msg-media-img ml-2 mr-1"
      }, _react.default.createElement("audio", {
        controls: true,
        title: "Play audio message"
      }, _react.default.createElement("source", {
        src: msg,
        type: "audio/mpeg"
      }), "Your browser does not support the audio element."));
    }
  } else if (msgType === _chat.CometChat.MESSAGE_TYPE.FILE) {
    if (msg === undefined || msg === "") {
      messageContent = _react.default.createElement("div", {
        className: "msg-bubble msg-bubble-deleted-msg ml-2 mr-1"
      }, "Message deleted");
    } else {
      messageContent = _react.default.createElement("div", {
        className: "msg-media-file ml-2 mr-1"
      }, _react.default.createElement("a", {
        href: msg,
        title: "File message",
        target: "_blank",
        rel: "noopener noreferrer"
      }, _react.default.createElement("div", {
        className: "attachment-file-msg px-3 py-3"
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faFileAlt
      }), _react.default.createElement("div", {
        className: "attachment-data"
      }, _react.default.createElement("div", null, attachmentData !== undefined ? attachmentData.fileName : "Filename not available."), _react.default.createElement("small", null, attachmentData !== undefined ? formatFileSize(attachmentData.fileSize) : ""))), _react.default.createElement("div", {
        className: "click-to-view-media"
      }, _react.default.createElement("div", {
        className: "click-to-view-text"
      }, " ", _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faCloudDownloadAlt
      })))));
    }
  } else if (msgType === 'location') {
    messageContent = _react.default.createElement("div", {
      className: "msg-media-img location-marker ml-2 mr-1"
    }, _react.default.createElement("a", {
      href: msg,
      title: "View location",
      target: "_blank",
      rel: "noopener noreferrer"
    }, _react.default.createElement("img", {
      src: _googleMapsLogo.default,
      alt: "location message",
      onLoad: function onLoad() {
        return scrollToBottom();
      }
    }), _react.default.createElement("div", {
      className: "click-to-view-media"
    }, _react.default.createElement("div", {
      className: "click-to-view-text"
    }))));
  }

  return _react.default.createElement("div", {
    className: "incoming-msg mb-3"
  }, _react.default.createElement("div", {
    className: "msg-row text-left"
  }, _react.default.createElement("div", {
    className: "msg-avatar"
  }, _react.default.createElement("img", {
    src: avatar,
    alt: "user avatar"
  })), messageContent, msgSentAt));
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

  var messageStatus = _react.default.createElement("img", {
    src: _wait2x.default,
    alt: "waitMsgIco"
  });

  if (readAt !== undefined) {
    messageStatus = _react.default.createElement("img", {
      src: _seen2x.default,
      alt: "seenMsgIco"
    });
  } else if (deliveredAt !== undefined) {
    messageStatus = _react.default.createElement("img", {
      src: _delivered2x.default,
      alt: "deliveredMsgIco"
    });
  } else if (sentAt !== undefined) {
    messageStatus = _react.default.createElement("img", {
      src: _sent2x.default,
      alt: "sentMsgIco"
    });
  }

  var msgSentAt = _react.default.createElement("span", {
    className: "small msg-time"
  }, convertStringToDate(sentAt));

  var messageContent = "";

  var msgReadReciepts = _react.default.createElement("span", {
    className: "small read-reciept"
  }, messageStatus);

  var messageEdited = "";

  if (editedAt !== undefined) {
    messageEdited = _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("small", null, "..."), " ", _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faPencilAlt,
      className: "msg-edited-indicator"
    }));
  }

  if (msgType === _chat.CometChat.MESSAGE_TYPE.TEXT) {
    if (msg === undefined) {
      messageContent = _react.default.createElement("div", {
        className: "msg-bubble msg-bubble-deleted-msg ml-2 mr-1"
      }, msg === undefined ? "Message deleted" : msg);
      msgSentAt = "";
      msgReadReciepts = "";
    } else {
      messageContent = _react.default.createElement("div", {
        className: "msg-bubble ml-2 mr-1",
        onClick: function onClick(e) {
          return handleMessageClick(e, 0);
        },
        onContextMenu: function onContextMenu(e) {
          return handleMessageClick(e, msgID);
        }
      }, msg, " ", messageEdited);
    }
  } else if (msgType === _chat.CometChat.MESSAGE_TYPE.IMAGE) {
    if (msg === undefined || msg === "") {
      messageContent = _react.default.createElement("div", {
        className: "msg-bubble msg-bubble-deleted-msg ml-2 mr-1"
      }, "Message deleted");
      msgSentAt = "";
      msgReadReciepts = "";
    } else {
      messageContent = _react.default.createElement("div", {
        className: "msg-media-img ml-2 mr-1",
        onContextMenu: function onContextMenu(e) {
          return handleMessageClick(e, msgID);
        }
      }, _react.default.createElement("a", {
        href: msg,
        title: "View picture message",
        target: "_blank",
        rel: "noopener noreferrer"
      }, _react.default.createElement("img", {
        src: msg,
        alt: "Pic message",
        onLoad: function onLoad() {
          return scrollToBottom();
        }
      }), _react.default.createElement("div", {
        className: "click-to-view-media"
      }, _react.default.createElement("div", {
        className: "click-to-view-text"
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faImage
      })))));
    }
  } else if (msgType === _chat.CometChat.MESSAGE_TYPE.VIDEO) {
    if (msg === undefined || msg === "") {
      messageContent = _react.default.createElement("div", {
        className: "msg-bubble msg-bubble-deleted-msg ml-2 mr-1"
      }, "Message deleted");
      msgSentAt = "";
      msgReadReciepts = "";
    } else {
      messageContent = _react.default.createElement("div", {
        className: "msg-media-file ml-2 mr-1",
        onContextMenu: function onContextMenu(e) {
          return handleMessageClick(e, msgID);
        }
      }, _react.default.createElement("a", {
        href: msg,
        title: "Play video message",
        target: "_blank",
        rel: "noopener noreferrer"
      }, _react.default.createElement("div", {
        className: "attachment-file-msg px-3 py-3"
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faFilm
      }), _react.default.createElement("div", {
        className: "attachment-data"
      }, _react.default.createElement("div", null, attachmentData !== undefined ? attachmentData.fileName : "Filename not available"), _react.default.createElement("small", null, formatFileSize(attachmentData !== undefined ? attachmentData.fileSize : "")))), _react.default.createElement("div", {
        className: "click-to-view-media"
      }, _react.default.createElement("div", {
        className: "click-to-view-text"
      }, " ", _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faPlay
      })))));
    }
  } else if (msgType === _chat.CometChat.MESSAGE_TYPE.AUDIO) {
    if (msg === undefined || msg === "") {
      messageContent = _react.default.createElement("div", {
        className: "msg-bubble msg-bubble-deleted-msg ml-2 mr-1"
      }, "Message deleted");
      msgSentAt = "";
      msgReadReciepts = "";
    } else {
      messageContent = _react.default.createElement("div", {
        className: "msg-media-img ml-2 mr-1",
        onContextMenu: function onContextMenu(e) {
          return handleMessageClick(e, msgID);
        }
      }, _react.default.createElement("audio", {
        controls: true,
        title: "Play audio message"
      }, _react.default.createElement("source", {
        src: msg,
        type: "audio/mpeg"
      }), "Your browser does not support the audio element."));
    }
  } else if (msgType === _chat.CometChat.MESSAGE_TYPE.FILE) {
    if (msg === undefined || msg === "") {
      messageContent = _react.default.createElement("div", {
        className: "msg-bubble msg-bubble-deleted-msg ml-2 mr-1"
      }, "Message deleted");
      msgSentAt = "";
      msgReadReciepts = "";
    } else {
      messageContent = _react.default.createElement("div", {
        className: "msg-media-file ml-2 mr-1",
        onContextMenu: function onContextMenu(e) {
          return handleMessageClick(e, msgID);
        }
      }, _react.default.createElement("a", {
        href: msg,
        title: "File message",
        target: "_blank",
        rel: "noopener noreferrer"
      }, _react.default.createElement("div", {
        className: "attachment-file-msg px-3 py-3"
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faFileAlt
      }), _react.default.createElement("div", {
        className: "attachment-data"
      }, _react.default.createElement("div", null, attachmentData !== undefined ? attachmentData.fileName : ""), _react.default.createElement("small", null, formatFileSize(attachmentData !== undefined ? attachmentData.fileSize : "")))), _react.default.createElement("div", {
        className: "click-to-view-media"
      }, _react.default.createElement("div", {
        className: "click-to-view-text"
      }, " ", _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faCloudDownloadAlt
      })))));
    }
  } else if (msgType === 'location') {
    if (msg === undefined || msg === "") {
      messageContent = _react.default.createElement("div", {
        className: "msg-bubble msg-bubble-deleted-msg ml-2 mr-1"
      }, "Message deleted");
      msgSentAt = "";
      msgReadReciepts = "";
    } else {
      messageContent = _react.default.createElement("div", {
        className: "msg-media-img location-marker ml-2 mr-1",
        onContextMenu: function onContextMenu(e) {
          return handleMessageClick(e, msgID);
        }
      }, _react.default.createElement("a", {
        href: msg,
        title: "View location",
        target: "_blank",
        rel: "noopener noreferrer"
      }, _react.default.createElement("img", {
        width: "170px",
        src: _googleMapsLogo.default,
        alt: "location message",
        onLoad: function onLoad() {
          return scrollToBottom();
        }
      }), _react.default.createElement("div", {
        className: "click-to-view-media"
      }, _react.default.createElement("div", {
        className: "click-to-view-text"
      }))));
    }
  }

  return _react.default.createElement("div", {
    className: "outgoing-msg mb-3"
  }, _react.default.createElement("div", {
    className: "msg-row text-right"
  }, msgSentAt, messageContent, _react.default.createElement(RenderContextMenu, {
    showMsgAction: showMsgAction,
    msgID: msgID,
    msgType: msgType,
    msg: msg,
    handleMessageDelete: handleMessageDelete,
    handleMessageEdit: handleMessageEdit,
    handleMessageClick: handleMessageClick
  }), msgReadReciepts));
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
  var editedOption;

  if (msgType === _chat.CometChat.MESSAGE_TYPE.TEXT) {
    editedOption = _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      className: "text-info mr-2",
      icon: _freeSolidSvgIcons.faPencilAlt,
      onClick: function onClick() {
        return handleMessageEdit(msg);
      },
      title: "Edit message"
    });
  }

  return _react.default.createElement("div", {
    className: classes
  }, _react.default.createElement("div", {
    className: "msgActionList"
  }, editedOption, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    className: "text-danger mr-3",
    icon: _freeSolidSvgIcons.faTrashAlt,
    onClick: function onClick() {
      return handleMessageDelete();
    },
    title: "Delete message"
  }), _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    className: "text-secondary ml-2",
    icon: _freeSolidSvgIcons.faTimes,
    onClick: function onClick(e) {
      return handleMessageClick(e, 0);
    },
    title: "Close message actions"
  })));
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

var _default = RenderConversation;
exports.default = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MESSAGE_TYPE_FILE = exports.MESSAGE_TYPE_AUDIO = exports.MESSAGE_TYPE_VIDEO = exports.MESSAGE_TYPE_IMAGE = exports.MESSAGE_TYPE_MEDIA = exports.RT_GROUP_MEMBER_ACTIONS = exports.LISTENER_RT_MSG_DELETE = exports.LISTENER_RT_MSG_EDIT = exports.LISTENER_RT_PRESENCE = exports.LISTENER_TYPING_INDICATOR = exports.LISTENER_NEW_CALL = exports.LISTENER_NEW_MESSAGE_GROUP = exports.LISTENER_REAL_TIME_RECIEPTS = exports.LISTENER_NEW_MESSAGE = exports.CC_API_REGION = exports.CC_API_KEY = exports.CC_APP_ID = void 0;
//******** NOTE : THIS IS THE LATEST VERSION OF COMETCHAT - {currently - V2}, app keys created using v1.* are not supported. **********/

/* 
    APP CONSTANTS
*/
var CC_APP_ID = "12388487f11d670"; //Get your APP ID from dashboard and replace

exports.CC_APP_ID = CC_APP_ID;
var CC_API_KEY = "821c5191dadd134bc96c7bf4b9be9f85b5133bdf"; //Get your APP ID from dashboard and replace

exports.CC_API_KEY = CC_API_KEY;
var CC_API_REGION = "us"; //Get your APP REGION from dashboard and replace

/* 
    LISTENER CONSTANTS
*/

exports.CC_API_REGION = CC_API_REGION;
var LISTENER_NEW_MESSAGE = "LISTENER_NEW_MESSAGE";
exports.LISTENER_NEW_MESSAGE = LISTENER_NEW_MESSAGE;
var LISTENER_REAL_TIME_RECIEPTS = "LISTENER_REAL_TIME_RECIEPTS";
exports.LISTENER_REAL_TIME_RECIEPTS = LISTENER_REAL_TIME_RECIEPTS;
var LISTENER_NEW_MESSAGE_GROUP = "LISTENER_NEW_MESSAGE_GROUP";
exports.LISTENER_NEW_MESSAGE_GROUP = LISTENER_NEW_MESSAGE_GROUP;
var LISTENER_NEW_CALL = "LISTENER_NEW_CALL";
exports.LISTENER_NEW_CALL = LISTENER_NEW_CALL;
var LISTENER_TYPING_INDICATOR = "LISTENER_TYPING_INDICATOR";
exports.LISTENER_TYPING_INDICATOR = LISTENER_TYPING_INDICATOR;
var LISTENER_RT_PRESENCE = "LISTENER_RT_PRESENCE";
exports.LISTENER_RT_PRESENCE = LISTENER_RT_PRESENCE;
var LISTENER_RT_MSG_EDIT = "LISTENER_RT_MSG_EDIT";
exports.LISTENER_RT_MSG_EDIT = LISTENER_RT_MSG_EDIT;
var LISTENER_RT_MSG_DELETE = "LISTENER_RT_MSG_DELETE";
exports.LISTENER_RT_MSG_DELETE = LISTENER_RT_MSG_DELETE;
var RT_GROUP_MEMBER_ACTIONS = "RT_GROUP_MEMBER_ACTIONS";
/* 
    MESSAGE TYPE CONSTANTS
*/

exports.RT_GROUP_MEMBER_ACTIONS = RT_GROUP_MEMBER_ACTIONS;
var MESSAGE_TYPE_MEDIA = "1";
exports.MESSAGE_TYPE_MEDIA = MESSAGE_TYPE_MEDIA;
var MESSAGE_TYPE_IMAGE = "2";
exports.MESSAGE_TYPE_IMAGE = MESSAGE_TYPE_IMAGE;
var MESSAGE_TYPE_VIDEO = "3";
exports.MESSAGE_TYPE_VIDEO = MESSAGE_TYPE_VIDEO;
var MESSAGE_TYPE_AUDIO = "4";
exports.MESSAGE_TYPE_AUDIO = MESSAGE_TYPE_AUDIO;
var MESSAGE_TYPE_FILE = "5";
exports.MESSAGE_TYPE_FILE = MESSAGE_TYPE_FILE;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("bootstrap/dist/css/bootstrap.css");

var _App = _interopRequireDefault(require("./App"));

require("./ccstyles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _App.default;
exports.default = _default;
"use strict";

// Make the DIV element draggable:
dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;

  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault(); // get the mouse cursor position at startup:

    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement; // call a function whenever the cursor moves:

    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault(); // calculate the new cursor position:

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY; // set the element's new position:

    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = register;
exports.unregister = unregister;
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    var publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);

    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebook/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', function () {
      var swUrl = "".concat(process.env.PUBLIC_URL, "/service-worker.js");

      if (isLocalhost) {
        // This is running on localhost. Let's check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, config); // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.

        navigator.serviceWorker.ready.then(function () {
          console.log('This web app is being served cache-first by a service ' + 'worker. To learn more, visit https://bit.ly/CRA-PWA');
        });
      } else {
        // Is not localhost. Just register service worker
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}
