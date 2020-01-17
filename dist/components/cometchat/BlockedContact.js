'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = require('@fortawesome/react-fontawesome');

var _freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlockedContact = function BlockedContact(_ref) {
    var name = _ref.name,
        uid = _ref.uid,
        avatar = _ref.avatar,
        handleUnBlockUser = _ref.handleUnBlockUser,
        activeContactUID = _ref.activeContactUID;


    var contact_classes = "contact-tab blocked-tab p-2 bg-white";

    if (activeContactUID !== undefined && uid === activeContactUID) contact_classes += ' active';
    return _react2.default.createElement(
        'div',
        { className: contact_classes,
            onClick: function onClick() {
                return handleUnBlockUser([uid]);
            }, title: 'Unblock contact' },
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
                { className: 'mb-0 contact-name va-super' },
                name
            )
        ),
        _react2.default.createElement(
            'div',
            { className: 'mb-2 mt-3 pr-2 contact-unblock' },
            _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faUserPlus })
        )
    );
};

exports.default = BlockedContact;