'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = require('@fortawesome/react-fontawesome');

var _freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');

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

  return _react2.default.createElement(
    'div',
    {
      className: contact_classes,
      onClick: function onClick() {
        return handleConversationClick(id, conversationType);
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
        'div',
        { className: 'm-0 text-light-grey contact-status' },
        _react2.default.createElement(
          'div',
          { className: 'status-text last-msg mb-0' },
          lastMessage
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'contact-view-arrow mb-3 mt-2 pr-2' },
      _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faAngleRight })
    )
  );
};

exports.default = Conversation;