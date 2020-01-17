'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = require('@fortawesome/react-fontawesome');

var _freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');

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
  var unreadCountHtml = void 0;

  if (activeGUID !== undefined && guid === activeGUID) group_classes += ' active';

  return _react2.default.createElement(
    'div',
    {
      className: group_classes,
      onClick: function onClick() {
        return handleGroupClick(guid);
      } },
    _react2.default.createElement(
      'div',
      { className: 'group-icon-small' },
      _react2.default.createElement('img', { className: 'mr-2', src: icon, alt: name })
    ),
    _react2.default.createElement(
      'div',
      { className: 'group-data' },
      _react2.default.createElement(
        'p',
        { className: 'mb-0 group-name' },
        name
      ),
      _react2.default.createElement(
        'p',
        { className: 'm-0 text-light-grey contact-status' },
        _react2.default.createElement(
          'span',
          { className: 'status-text' },
          'Members : ',
          membersCount
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'group-view-arrow mb-3 mt-2 pr-2' },
      _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faAngleRight })
    ),
    unreadCountHtml
  );
};

exports.default = Group;