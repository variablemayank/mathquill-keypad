'use strict';

var React = require('react');

var _require = require('../fake-react-native-web'),
    View = _require.View;

var _require2 = require('../index'),
    components = _require2.components;

var Keypad = components.Keypad,
    KeypadInput = components.KeypadInput;


var App = React.createClass({
    displayName: 'App',
    getInitialState: function getInitialState() {
        var defaultValue = this.props.defaultValue;

        return {
            keypadElement: null,
            value: defaultValue || "",
            focused: false
        };
    },
    render: function render() {
        var _this = this;

        // console.log('app render')
        var _props = this.props,
            extraKeys = _props.extraKeys,
            focusCallback = _props.focusCallback,
            blurCallback = _props.blurCallback;


        return React.createElement(
            View,
            null,
            React.createElement(
                'div',
                { style: { margin: 3, marginTop: 5, marginBottom: 98 } },
                React.createElement(KeypadInput, {
                    value: this.state.value,
                    keypadElement: this.state.keypadElement,
                    ref: function ref(_ref) {
                        return _this.keypadInput = _ref;
                    },
                    onChange: function onChange(value, cb) {
                        _this.setState({ value: value }, cb);
                        var mydiv = document.getElementById(_this.props.containerid);
                        mydiv.setAttribute("math-input-value", { value: value }.value);
                    },
                    onFocus: function onFocus() {
                        _this.setState({ focused: true });
                        _this.state.keypadElement && _this.state.keypadElement.activate();
                        focusCallback && focusCallback();
                    },
                    onBlur: function onBlur() {
                        if (_this.state.focused) {
                            _this.setState({ focused: false });
                            _this.state.keypadElement && _this.state.keypadElement.dismiss();
                            blurCallback && blurCallback();
                        }
                    }
                })
            ),
            React.createElement(Keypad, {
                onDismiss: function onDismiss() {
                    if (_this.state.focused) {
                        _this.setState({ focused: false });
                        _this.keypadInput.mathField.blur();
                        _this.keypadInput._blur();
                        setTimeout(function () {
                            blurCallback && blurCallback();
                        }, 300);
                    }
                },
                onElementMounted: function onElementMounted(node) {
                    if (node && !_this.state.keypadElement) {
                        _this.setState({ keypadElement: node });
                    }
                },
                extraKeys: extraKeys
            })
        );
    }
});

module.exports = App;