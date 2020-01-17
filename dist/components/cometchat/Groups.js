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

var _Group = require("./Group");

var _Group2 = _interopRequireDefault(_Group);

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _groupDefaultAvatar = require("../../resources/images/group-default-avatar.png");

var _groupDefaultAvatar2 = _interopRequireDefault(_groupDefaultAvatar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Groups = function (_Component) {
  _inherits(Groups, _Component);

  function Groups() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Groups);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Groups.__proto__ || Object.getPrototypeOf(Groups)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      groups: { joined: [], others: [] },
      searchString: "",
      unreadCounts: [],
      newGroupGuid: "",
      newGroupName: "",
      newGroupType: "public",
      newGroupPassword: "",
      protectedGroupPassword: ""
    }, _this.handleSearchStringChange = function (e) {
      _this.setState({ searchString: e.target.value });

      var groupsRequest = new _chat.CometChat.GroupsRequestBuilder().setLimit(50).setSearchKeyword(e.target.value).build();

      groupsRequest.fetchNext().then(function (groupList) {
        var groupListJoined = _lodash2.default.filter(groupList, function (o) {
          return o.hasJoined;
        });
        var groupListOthers = _lodash2.default.filter(groupList, function (o) {
          return !o.hasJoined && !o.isBanned;
        });
        _this.setState({
          groups: { joined: groupListJoined, others: groupListOthers }
        });
      });
    }, _this.refreshNewGroupFields = function () {
      _this.setState({
        newGroupGuid: "",
        newGroupName: "",
        newGroupType: "public",
        newGroupPassword: ""
      });
      _this.props.hideCreateGroupModal();
    }, _this.refreshPasswordField = function () {
      _this.setState({ protectedGroupPassword: "" });
      _this.props.hideAskPasswordModal();
    }, _this.handleCreateNewGroup = function () {
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
    }, _this.handleGroupNameChange = function (e) {
      _this.setState({ newGroupName: e.target.value });
    }, _this.handleGroupGuidChange = function (e) {
      _this.setState({ newGroupGuid: e.target.value });
    }, _this.handleGroupTypeChange = function (e) {
      _this.setState({ newGroupType: e.target.value, newGroupPassword: "" });
    }, _this.handleGroupPasswordChange = function (e) {
      _this.setState({ newGroupPassword: e.target.value });
    }, _this.handleProtectedGroupPasswordChange = function (e) {
      _this.setState({ protectedGroupPassword: e.target.value });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Groups, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (_lodash2.default.isEmpty(this.state.groups.joined) && _lodash2.default.isEmpty(this.state.groups.others) || this.props.activeGUID !== prevProps.activeGUID) {
        var groupsRequest = new _chat.CometChat.GroupsRequestBuilder().setLimit(30).setSearchKeyword(this.state.searchString).build();

        var groupListJoined = void 0;
        var groupListOthers = void 0;

        groupsRequest.fetchNext().then(function (groupList) {
          groupListJoined = _lodash2.default.filter(groupList, function (o) {
            return o.hasJoined;
          });
          groupListOthers = _lodash2.default.filter(groupList, function (o) {
            return !o.hasJoined && !o.isBanned;
          });
          _chat.CometChat.getUnreadMessageCountForAllGroups().then(function (unreadCounts) {
            _this2.setState({
              groups: { joined: groupListJoined, others: groupListOthers },
              unreadCounts: unreadCounts
            });
          }, function (error) {
            _this2.setState({
              groups: { joined: groupListJoined, others: groupListOthers },
              unreadCounts: []
            });
          });
        }, function (error) {
          _this2.setState({
            groups: { joined: [], others: [] },
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
        return _react2.default.createElement(
          "div",
          { className: "group-tab p-2 bg-white" },
          "Fetching groups ..."
        );
      } else {
        var show_groups_warning = "d-none mt-1";

        if (groups_length === 0 && this.state.searchString !== "") {
          show_groups_warning = "mt-1";
        }

        var joinedTitle = "";
        if (groups.joined.length > 0) joinedTitle = _react2.default.createElement(
          "div",
          { className: "groups-type-title" },
          "JOINED GROUPS"
        );

        var othersTitle = "";
        if (groups.others.length > 0) othersTitle = _react2.default.createElement(
          "div",
          { className: "groups-type-title" },
          "OTHER GROUPS"
        );

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
              { className: show_groups_warning },
              _react2.default.createElement(
                "i",
                null,
                "No matching groups found."
              )
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "groups-container bg-white" },
            _react2.default.createElement(
              "div",
              { className: "groups-listing" },
              joinedTitle,
              groups.joined.map(function (c) {
                return _react2.default.createElement(_Group2.default, {
                  key: c.guid,
                  askPassword: false,
                  guid: c.guid,
                  name: c.name,
                  icon: c.icon !== undefined ? c.icon : _groupDefaultAvatar2.default,
                  membersCount: c.membersCount,
                  handleGroupClick: _this3.props.handleGroupClick,
                  activeGUID: _this3.props.activeGUID,
                  unreadCount: _this3.state.unreadCounts[c.guid] !== undefined ? _this3.state.unreadCounts[c.guid] : 0
                });
              }),
              othersTitle,
              groups.others.map(function (c) {
                return _react2.default.createElement(_Group2.default, {
                  key: c.guid,
                  askPassword: c.type === "password" ? true : false,
                  guid: c.guid,
                  name: c.name,
                  icon: c.icon !== undefined ? c.icon : _groupDefaultAvatar2.default,
                  membersCount: c.membersCount,
                  handleGroupClick: _this3.props.handleGroupClick,
                  activeGUID: _this3.props.activeGUID,
                  unreadCount: _this3.state.unreadCounts[c.guid] !== undefined ? _this3.state.unreadCounts[c.guid] : 0
                });
              })
            )
          ),
          _react2.default.createElement(CreateGroupFormModal, {
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
          }),
          _react2.default.createElement(AskPasswordModal, {
            createGroupFormShow: this.props.createGroupFormShow,
            showAskPasswordModal: this.props.showAskPasswordModal,
            refreshPasswordField: this.refreshPasswordField,
            protectedGroupPassword: this.state.protectedGroupPassword,
            handleProtectedGroupPasswordChange: this.handleProtectedGroupPasswordChange,
            handleGroupClick: this.props.handleGroupClick,
            protectedGroupAskPasswordGuid: this.props.protectedGroupAskPasswordGuid
          })
        );
      }
    }
  }]);

  return Groups;
}(_react.Component);

function CreateGroupFormModal(_ref2) {
  var createGroupFormShow = _ref2.createGroupFormShow,
      refreshNewGroupFields = _ref2.refreshNewGroupFields,
      handleGroupNameChange = _ref2.handleGroupNameChange,
      handleGroupTypeChange = _ref2.handleGroupTypeChange,
      handleGroupPasswordChange = _ref2.handleGroupPasswordChange,
      handleCreateNewGroup = _ref2.handleCreateNewGroup,
      handleGroupGuidChange = _ref2.handleGroupGuidChange,
      newGroupType = _ref2.newGroupType,
      newGroupGuid = _ref2.newGroupGuid,
      newGroupName = _ref2.newGroupName,
      newGroupPassword = _ref2.newGroupPassword;

  var passwordDisabled = "disabled";
  if (newGroupType === "password") {
    passwordDisabled = "";
  }
  var showHideClassName = createGroupFormShow ? "modal fade display-block" : "modal fade display-none";
  var showHideBackdropClasses = createGroupFormShow ? "modal-backdrop fade in" : "";
  return _react2.default.createElement(
    "div",
    {
      className: showHideClassName,
      id: "exampleModal",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true"
    },
    _react2.default.createElement("div", { className: showHideBackdropClasses }),
    _react2.default.createElement(
      "div",
      { className: "modal-dialog modal-dialog-centered", role: "document" },
      _react2.default.createElement(
        "div",
        { className: "modal-content" },
        _react2.default.createElement(
          "div",
          { className: "modal-header" },
          _react2.default.createElement(
            "h5",
            { className: "modal-title", id: "exampleModalLabel" },
            _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faUsers }),
            " \xA0New group"
          ),
          _react2.default.createElement(
            "button",
            {
              onClick: function onClick() {
                return refreshNewGroupFields();
              },
              type: "button",
              className: "close",
              "data-dismiss": "modal",
              "aria-label": "Close"
            },
            _react2.default.createElement(
              "span",
              { "aria-hidden": "true" },
              "\xD7"
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "modal-body" },
          _react2.default.createElement(
            "form",
            null,
            _react2.default.createElement(
              "div",
              { className: "form-group" },
              _react2.default.createElement(
                "label",
                { htmlFor: "group-guid", className: "col-form-label" },
                "GUID:"
              ),
              _react2.default.createElement("input", {
                value: newGroupGuid,
                autoFocus: true,
                type: "text",
                className: "form-control",
                id: "group-guid",
                onChange: function onChange(e) {
                  return handleGroupGuidChange(e);
                }
              })
            ),
            _react2.default.createElement(
              "div",
              { className: "form-group" },
              _react2.default.createElement(
                "label",
                { htmlFor: "group-name", className: "col-form-label" },
                "Name:"
              ),
              _react2.default.createElement("input", {
                value: newGroupName,
                autoFocus: true,
                type: "text",
                className: "form-control",
                id: "group-name",
                onChange: function onChange(e) {
                  return handleGroupNameChange(e);
                }
              })
            ),
            _react2.default.createElement(
              "div",
              { className: "form-group" },
              _react2.default.createElement(
                "label",
                { htmlFor: "group-type", className: "col-form-label" },
                "Type:"
              ),
              _react2.default.createElement(
                "select",
                {
                  className: "form-control",
                  defaultValue: _chat.CometChat.GROUP_TYPE.PUBLIC,
                  id: "group-type",
                  onChange: function onChange(e) {
                    return handleGroupTypeChange(e);
                  }
                },
                _react2.default.createElement(
                  "option",
                  { value: _chat.CometChat.GROUP_TYPE.PUBLIC },
                  "Public"
                ),
                _react2.default.createElement(
                  "option",
                  { value: _chat.CometChat.GROUP_TYPE.PASSWORD },
                  "Password protected"
                ),
                _react2.default.createElement(
                  "option",
                  { value: _chat.CometChat.GROUP_TYPE.PRIVATE },
                  "Private"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "form-group", htmlFor: "group-password" },
              _react2.default.createElement(
                "label",
                { htmlFor: "group-password", className: "col-form-label" },
                "Password:"
              ),
              _react2.default.createElement("input", {
                disabled: passwordDisabled,
                value: newGroupPassword,
                type: "text",
                className: "form-control",
                id: "group-password",
                onChange: function onChange(e) {
                  return handleGroupPasswordChange(e);
                }
              })
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "modal-footer align-center" },
          _react2.default.createElement(
            "button",
            {
              type: "button",
              className: "btn btn-cc btn-sm btn-block",
              onClick: function onClick(event) {
                return handleCreateNewGroup(event);
              }
            },
            "Create"
          )
        )
      )
    )
  );
}

function AskPasswordModal(_ref3) {
  var refreshPasswordField = _ref3.refreshPasswordField,
      showAskPasswordModal = _ref3.showAskPasswordModal,
      createGroupFormShow = _ref3.createGroupFormShow,
      protectedGroupPassword = _ref3.protectedGroupPassword,
      handleProtectedGroupPasswordChange = _ref3.handleProtectedGroupPasswordChange,
      handleGroupClick = _ref3.handleGroupClick,
      protectedGroupAskPasswordGuid = _ref3.protectedGroupAskPasswordGuid;

  var modalClasses = showAskPasswordModal ? "modal fade display-block" : "modal fade display-none";
  var backdropClasses = showAskPasswordModal ? "modal-backdrop fade in" : "";
  return _react2.default.createElement(
    "div",
    {
      className: modalClasses,
      id: "exampleModal1",
      tabIndex: "-1",
      role: "dialog",
      "aria-labelledby": "exampleModalLabel",
      "aria-hidden": "true"
    },
    _react2.default.createElement("div", { className: backdropClasses }),
    _react2.default.createElement(
      "div",
      { className: "modal-dialog modal-dialog-centered", role: "document" },
      _react2.default.createElement(
        "div",
        { className: "modal-content" },
        _react2.default.createElement(
          "div",
          { className: "modal-header" },
          _react2.default.createElement(
            "h5",
            { className: "modal-title", id: "exampleModalLabel" },
            _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: _freeSolidSvgIcons.faUsers }),
            " \xA0Enter password to join"
          ),
          _react2.default.createElement(
            "button",
            {
              onClick: function onClick() {
                return refreshPasswordField();
              },
              type: "button",
              className: "close",
              "data-dismiss": "modal",
              "aria-label": "Close"
            },
            _react2.default.createElement(
              "span",
              { "aria-hidden": "true" },
              "\xD7"
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "modal-body" },
          _react2.default.createElement(
            "form",
            null,
            _react2.default.createElement(
              "div",
              { className: "form-group", htmlFor: "group-password" },
              _react2.default.createElement(
                "label",
                { htmlFor: "group-password", className: "col-form-label" },
                "Password:"
              ),
              _react2.default.createElement("input", {
                value: protectedGroupPassword,
                type: "text",
                className: "form-control",
                id: "group-password",
                onChange: function onChange(e) {
                  return handleProtectedGroupPasswordChange(e);
                }
              })
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "modal-footer align-center" },
          _react2.default.createElement(
            "button",
            {
              type: "button",
              className: "btn btn-cc btn-sm btn-block",
              onClick: function onClick() {
                return handleGroupClick(protectedGroupAskPasswordGuid, protectedGroupPassword);
              }
            },
            "Join"
          )
        )
      )
    )
  );
}

exports.default = Groups;