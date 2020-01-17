'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _polaris = require('@shopify/polaris');

require('./App.css');

var _Base = require('./components/cometchat/Base');

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(props) {
  return _react2.default.createElement(
    _polaris.AppProvider,
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_Base2.default, { props: props })
    )
  );
};

exports.default = App;