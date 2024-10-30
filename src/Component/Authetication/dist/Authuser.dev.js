"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _axios = _interopRequireDefault(require("axios"));

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Authuser = function Authuser() {
  var navigate = (0, _reactRouterDom.useNavigate)();

  var getToken = function getToken() {
    var tokenString = sessionStorage.getItem("token");
    var userToken = JSON.parse(tokenString);
    return userToken;
  };

  var getUser = function getUser() {
    var userString = JSON.parse(sessionStorage.getItem("user"));
    return userString;
  };

  var saveToken = function saveToken(user, token) {
    sessionStorage.setItem("token", JSON.stringify(token));
    sessionStorage.setItem("user", JSON.stringify(user));
  };

  var _useState = (0, _react.useState)(getToken()),
      _useState2 = _slicedToArray(_useState, 2),
      token = _useState2[0],
      setToken = _useState2[1];

  var _useState3 = (0, _react.useState)(getUser()),
      _useState4 = _slicedToArray(_useState3, 2),
      user = _useState4[0],
      setUser = _useState4[1];

  var http = _axios["default"].create({
    baseURL: "http://localhost:5001/userAPI",
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer ".concat(token)
    }
  });

  var logout = function logout() {
    sessionStorage.clear();
    setToken(null);
    setUser(null);
    navigate("/");
  }; //  const logout=()=>
  //  {
  //   sessionStorage.clear();
  //   settoken(null);
  //   setuser(null);
  //   Navigate('/')
  //  }


  return {
    setToken: saveToken,
    token: token,
    user: user,
    http: http,
    logout: logout
  };
};

var _default = Authuser;
exports["default"] = _default;
//# sourceMappingURL=Authuser.dev.js.map
