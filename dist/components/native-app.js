'use strict';

var React = require('react');

var _require = require('./fake-react-native-web'),
    View = _require.View;

var _require2 = require('./index'),
    components = _require2.components;

var Keypad = components.Keypad,
    KeypadInput = components.KeypadInput;

var KeyConfigs = require('./data/key-configs.js');

var ManualInput = function ManualInput(_ref) {
  var handler = _ref.handler;

  return React.createElement(
    'div',
    null,
    Object.keys(KeyConfigs).map(function (k) {
      return React.createElement(
        'button',
        { style: { display: "block" }, key: k, disabled: !handler, onClick: function onClick() {
            return handler(k);
          } },
        k,
        ' : ',
        KeyConfigs[k].ariaLabel
      );
    })
  );
};

var App = React.createClass({
  displayName: 'App',
  getInitialState: function getInitialState() {
    var _this = this;

    return {
      active: false,
      handler: null,
      keypadElement: {
        activate: function activate() {
          return _this.setState({ active: true });
        },
        dismiss: function dismiss() {
          return _this.setState({ active: false });
        },
        configure: function configure(config) {
          return console.log("configure:", config);
        },
        setCursor: function setCursor(cursor) {
          return console.log("Cursor:", cursor);
        },
        setKeyHandler: function setKeyHandler(handler) {
          return _this.setState({ handler: handler });
        },
        getDOMNode: function getDOMNode() {
          return null;
        }
      },
      // value: "",
      value: this.props.defaultValue || ""
    };
  },
  render: function render() {
    var _this2 = this;

    return React.createElement(
      View,
      null,
      React.createElement(
        'div',
        {
          // style={{
          //   marginTop: 10,
          //   marginLeft: 20,
          //   marginRight: 20,
          //   marginBottom: 40,
          // }}
          style: { margin: 3, marginTop: 5 }
        },
        React.createElement(KeypadInput, {
          value: this.state.value,
          ref: function ref(inp) {
            return _this2.inp = inp;
          },
          keypadElement: this.state.keypadElement,
          onChange: function onChange(value, cb) {
            _this2.setState({ value: value }, cb);
            //add
            var mydiv = document.getElementById(_this2.props.containerid);
            mydiv.setAttribute("math-input-value", { value: value }.value);
          },
          onFocus: function onFocus() {
            _this2.state.keypadElement && _this2.state.keypadElement.activate();
            focusCallback && focusCallback();
          },
          onBlur: function onBlur() {
            _this2.state.keypadElement && _this2.state.keypadElement.dismiss();
            blurCallback && blurCallback();
          }
          //
          // onFocus={() => this.state.keypadElement.activate()}
          // onBlur={() => this.state.keypadElement.dismiss()}
        })
      ),
      React.createElement(Keypad, {
        onElementMounted: function onElementMounted(node) {
          if (node && !_this2.state.keypadElement) {
            _this2.setState({ keypadElement: node });
          }
        },
        extraKeys: extraKeys
      }),
      React.createElement(ManualInput, { handler: this.state.handler })
    );
  }
});
module.exports = App;