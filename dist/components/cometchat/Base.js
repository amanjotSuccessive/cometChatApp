"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _chat = require("@cometchat-pro/chat");

require("@shopify/polaris/styles.css");

var _polaris = require("@shopify/polaris");

var _ChatContainer = require("./ChatContainer");

var _ChatContainer2 = _interopRequireDefault(_ChatContainer);

var _constants = require("../../constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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

    var init = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
            }, _callee, undefined);
        }));

        return function init() {
            return _ref.apply(this, arguments);
        };
    }();

    var login = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
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
            }, _callee2, undefined, [[0, 9]]);
        }));

        return function login() {
            return _ref2.apply(this, arguments);
        };
    }();

    var getCurrentUser = function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
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
            }, _callee3, undefined);
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
        return _react2.default.createElement(
            _polaris.SkeletonPage,
            { primaryAction: true, secondaryActions: 2 },
            _react2.default.createElement(
                _polaris.Layout,
                null,
                _react2.default.createElement(
                    _polaris.Layout.Section,
                    null,
                    _react2.default.createElement(
                        _polaris.Card,
                        { sectioned: true },
                        _react2.default.createElement(_polaris.SkeletonBodyText, null)
                    ),
                    _react2.default.createElement(
                        _polaris.Card,
                        { sectioned: true },
                        _react2.default.createElement(
                            _polaris.TextContainer,
                            null,
                            _react2.default.createElement(_polaris.SkeletonDisplayText, { size: "small" }),
                            _react2.default.createElement(_polaris.SkeletonBodyText, null)
                        )
                    ),
                    _react2.default.createElement(
                        _polaris.Card,
                        { sectioned: true },
                        _react2.default.createElement(
                            _polaris.TextContainer,
                            null,
                            _react2.default.createElement(_polaris.SkeletonDisplayText, { size: "small" }),
                            _react2.default.createElement(_polaris.SkeletonBodyText, null)
                        )
                    )
                ),
                _react2.default.createElement(
                    _polaris.Layout.Section,
                    { secondary: true },
                    _react2.default.createElement(
                        _polaris.Card,
                        null,
                        _react2.default.createElement(
                            _polaris.Card.Section,
                            null,
                            _react2.default.createElement(
                                _polaris.TextContainer,
                                null,
                                _react2.default.createElement(_polaris.SkeletonDisplayText, { size: "small" }),
                                _react2.default.createElement(_polaris.SkeletonBodyText, { lines: 2 })
                            )
                        ),
                        _react2.default.createElement(
                            _polaris.Card.Section,
                            null,
                            _react2.default.createElement(_polaris.SkeletonBodyText, { lines: 1 })
                        )
                    )
                )
            )
        );
    }

    return _react2.default.createElement(_ChatContainer2.default, { user: user, handleLogout: handleLogout });
};

exports.default = Base;