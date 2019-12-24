const React = require('react');
//add
var ReactDOM = require('react-dom');
//
const {Provider} = require('react-redux');

const KeypadContainer = require('./keypad-container');
const {
    activateKeypad,
    dismissKeypad,
    configureKeypad,
    ConfigureManyKeypad,
    setCursor,
    setKeyHandler
} = require('../actions');
const createStore = require('../store');

const ProvidedKeypad = React.createClass({
    propTypes: {
        onElementMounted: React.PropTypes.func,
    },

    componentWillMount() {
        this.store = createStore();
    },

    activate() {
        this.store.dispatch(activateKeypad());
    },

    dismiss() {
        this.store.dispatch(dismissKeypad());
        // this.props.onKeyPadDismiss && this.props.onKeyPadDismiss()
    },

    configure(configuration, cb) {
        this.store.dispatch(configureKeypad(configuration));

        // HACK(charlie): In Perseus, triggering a focus causes the keypad to
        // animate into view and re-configure. We'd like to provide the option
        // to re-render the re-configured keypad before animating it into view,
        // to avoid jank in the animation. As such, we support passing a
        // callback into `configureKeypad`. However, implementing this properly
        // would require middleware, etc., so we just hack it on with
        // `setTimeout` for now.
        setTimeout(() => cb && cb());
    },

    configureMany(configuration, cb) {
        this.store.dispatch(ConfigureManyKeypad(configuration));
        
        setTimeout(() => cb && cb());
    },

    setCursor(cursor) {
        this.store.dispatch(setCursor(cursor));
    },

    setKeyHandler(keyHandler) {
        this.store.dispatch(setKeyHandler(keyHandler));
    },
   //add
  getDOMNode (){
    return ReactDOM.findDOMNode(this);
  },
  //

    render() {

        // console.log('provided-keypad render')
        const {onElementMounted, ...rest} = this.props;

        if(!rest.extraKeys || !rest.extraKeys.length){ delete rest.extraKeys}

        return <Provider store={this.store}>
            <KeypadContainer
                onElementMounted={(element) => {
                    // Append the dispatch methods that we want to expose
                    // externally to the returned React element.
                    const elementWithDispatchMethods = {
                        ...element,
                        activate: this.activate,
                        dismiss: this.dismiss,
                        configure: this.configure,
                        configureMany: this.configureMany,
                        setCursor: this.setCursor,
                        setKeyHandler: this.setKeyHandler,
                      //add
                      getDOMNode: this.getDOMNode,
                      //
                    };
                    onElementMounted &&
                        onElementMounted(elementWithDispatchMethods);
                }}
                
                {...rest}
            />
        </Provider>;
    },
});

module.exports = ProvidedKeypad;
