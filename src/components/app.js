const React = require('react');

const {View} = require('../fake-react-native-web');
const {components} = require('../index');

const {Keypad, KeypadInput} = components;

const App = React.createClass({
    getInitialState() {
        let {defaultValue} = this.props
        return {
            keypadElement: null,
            value: defaultValue || "",
            focused: false
        }
    },

    render() {
        // console.log('app render')
        const {extraKeys, focusCallback, blurCallback} = this.props

        return <View>
            <div style={{margin: 3, marginTop: 5, marginBottom: 98}}>
                <KeypadInput
                    value={this.state.value}
                    keypadElement={this.state.keypadElement}
                    ref={ref => this.keypadInput = ref}
                    onChange={(value, cb) => {
                        this.setState({value}, cb);
                        var mydiv = document.getElementById(this.props.containerid);
                        mydiv.setAttribute("math-input-value", {value}.value); } }
                    onFocus={() => {
                        this.setState({focused: true})
                        this.state.keypadElement && this.state.keypadElement.activate()
                        focusCallback && focusCallback()
                        }
                    }
                    onBlur={() => {
                        if (this.state.focused) {
                            this.setState({focused: false})
                            this.state.keypadElement && this.state.keypadElement.dismiss()
                            blurCallback && blurCallback()
                        }
                    }}
                />
            </div>
            <Keypad
                onDismiss={() => {
                    if (this.state.focused) {
                        this.setState({focused: false})
                        this.keypadInput.mathField.blur()
                        this.keypadInput._blur()
                        setTimeout(() => {
                            blurCallback && blurCallback()
                        }, 300)
                    }
                }}
                onElementMounted={node => {
                    if (node && !this.state.keypadElement) {
                        this.setState({keypadElement: node});
                    }
                }}
                extraKeys={extraKeys}
            />
        </View>;
    },
});

module.exports = App;
