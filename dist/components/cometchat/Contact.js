'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = require('@fortawesome/react-fontawesome');

var _freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');

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
  var unreadCountHtml = void 0;
  var contact_classes = "contact-tab p-2 bg-white";

  if (activeContactUID !== undefined && uid === activeContactUID) contact_classes += ' active';else {

    if (unreadCount > 0) {
      unreadCountHtml = _react2.default.createElement(
        'div',
        { className: 'unread-msg-count-contact mb-3 mt-2 pr-2' },
        _react2.default.createElement(
          'span',
          { className: 'badge badge-danger' },
          unreadCount
        )
      );
    }
  }

  return _react2.default.createElement(
    'div',
    {
      className: contact_classes,
      onClick: function onClick() {
        return handleContactClick(uid);
      }
    },
    _react2.default.createElement(
      'div',
      { className: 'contact-avatar-small' },
      _react2.default.createElement('img', { className: 'mr-2', src: avatar, alt: name })
    ),
    _react2.default.createElement(
      'div',
      { className: 'contact-data' },
      _react2.default.createElement(
        'p',
        { className: 'mb-0 contact-name' },
        name
      ),
      _react2.default.createElement(
        'p',
        { className: 'm-0 text-light-grey contact-status' },
        _react2.default.createElement('span', { className: status_classes }),
        _react2.default.createElement(
          'span',
          { className: 'status-text' },
          status
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'contact-view-arrow mb-3 mt-2 pr-2' },
      _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faAngleRight })
    ),
    unreadCountHtml
  );
};

exports.default = Contact;