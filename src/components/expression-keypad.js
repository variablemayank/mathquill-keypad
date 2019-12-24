/**
 * A keypad that includes all of the expression symbols.
 */

const React = require('react');
const {connect} = require('react-redux');
const {StyleSheet} = require('aphrodite');

const {View} = require('../fake-react-native-web');
const TwoPageKeypad = require('./two-page-keypad');
const ManyKeypadButton = require('./many-keypad-button');
const TouchableKeypadButton = require('./touchable-keypad-button');
const {
    row,
    column,
    oneColumn,
    fullWidth,
    roundedTopLeft,
    roundedTopRight,
} = require('./styles');
const {BorderStyles} = require('../consts');
const {valueGrey, controlGrey} = require('./common-style');
const {cursorContextPropType, keyIdPropType} = require('./prop-types');
const KeyConfigs = require('../data/key-configs');
const CursorContexts = require('./input/cursor-contexts');
const {toggleKeyType} = require('../actions');

const ExpressionKeypad = React.createClass({
    propTypes: {
        currentPage: React.PropTypes.number.isRequired,
        cursorContext: cursorContextPropType.isRequired,
        dynamicJumpOut: React.PropTypes.bool,
        extraKeys: React.PropTypes.arrayOf(keyIdPropType),
        roundTopLeft: React.PropTypes.bool,
        roundTopRight: React.PropTypes.bool,
        toggleNumAlphabets: React.PropTypes.func.isRequired,
        numPad: React.PropTypes.bool.isRequired,
    },

    statics: {
        rows: 4,
        columns: 5,
        // Though we include an infinite-key popover in the bottom-left, it's
        // assumed that we don't need to accommodate cases in which that key
        // contains more than four children.
        maxVisibleRows: 4,
        numPages: 2,
    },

    togglePad(e) {
        e.preventDefault();
        this.props.toggleNumAlphabets(!this.props.numPad);
    },

    render() {
      console.log('ffff', KeyConfigs);
        const {
            currentPage,
            cursorContext,
            dynamicJumpOut,
            extraKeys,
            roundTopLeft,
            roundTopRight,
        } = this.props;

        let dismissOrJumpOutKey;
        if (dynamicJumpOut) {
            switch (cursorContext) {
                case CursorContexts.IN_PARENS:
                    dismissOrJumpOutKey = KeyConfigs.JUMP_OUT_PARENTHESES;
                    break;

                case CursorContexts.IN_SUPER_SCRIPT:
                    dismissOrJumpOutKey = KeyConfigs.JUMP_OUT_EXPONENT;
                    break;

                case CursorContexts.IN_SUB_SCRIPT:
                    dismissOrJumpOutKey = KeyConfigs.JUMP_OUT_BASE;
                    break;

                case CursorContexts.BEFORE_FRACTION:
                    dismissOrJumpOutKey = KeyConfigs.JUMP_INTO_NUMERATOR;
                    break;

                case CursorContexts.IN_NUMERATOR:
                    dismissOrJumpOutKey = KeyConfigs.JUMP_OUT_NUMERATOR;
                    break;

                case CursorContexts.IN_DENOMINATOR:
                    dismissOrJumpOutKey = KeyConfigs.JUMP_OUT_DENOMINATOR;
                    break;

                case CursorContexts.NONE:
                default:
                    dismissOrJumpOutKey = KeyConfigs.DISMISS;
                    break;
            }
        } else {
            dismissOrJumpOutKey = KeyConfigs.DISMISS;
        }

        const rightPageStyle = [
            row,
            fullWidth,
            styles.rightPage,
            roundTopRight && roundedTopRight,
        ];
        const rightPage = <View style={rightPageStyle}>
            <View style={[column, oneColumn]}>
                <TouchableKeypadButton
                    keyConfig={this.props.numPad == true ? KeyConfigs.NUM_7 : KeyConfigs.a}
                    borders={BorderStyles.NONE}
                />
                <TouchableKeypadButton
                    keyConfig={this.props.numPad == true ? KeyConfigs.NUM_4 : KeyConfigs.x}
                    borders={BorderStyles.NONE}
                />
                <TouchableKeypadButton
                    keyConfig={this.props.numPad == true ? KeyConfigs.NUM_1 : KeyConfigs.p}
                    borders={BorderStyles.BOTTOM}
                />
                <ManyKeypadButton
                    keys={extraKeys}
                    borders={BorderStyles.NONE}
                />
            </View>
            <View style={[column, oneColumn]}>
                <TouchableKeypadButton
                    keyConfig={this.props.numPad == true ? KeyConfigs.NUM_8 : KeyConfigs.b}
                    borders={BorderStyles.NONE}
                />
                <TouchableKeypadButton
                    keyConfig={this.props.numPad == true ? KeyConfigs.NUM_5 : KeyConfigs.y}
                    borders={BorderStyles.NONE}
                />
                <TouchableKeypadButton
                    keyConfig={this.props.numPad == true ? KeyConfigs.NUM_2 : KeyConfigs.q}
                    borders={BorderStyles.NONE}
                />
                <TouchableKeypadButton
                    keyConfig={this.props.numPad == true ? KeyConfigs.NUM_0 : KeyConfigs.s}
                    borders={BorderStyles.LEFT}
                />
            </View>
            <View style={[column, oneColumn]}>
                <TouchableKeypadButton
                    keyConfig={this.props.numPad == true ? KeyConfigs.NUM_9 : KeyConfigs.c}
                    borders={BorderStyles.NONE}
                />
                <TouchableKeypadButton
                    keyConfig={this.props.numPad == true ? KeyConfigs.NUM_6 : KeyConfigs.z}
                    borders={BorderStyles.NONE}
                />
                <TouchableKeypadButton
                    keyConfig={this.props.numPad == true ? KeyConfigs.NUM_3 : KeyConfigs.r}
                    borders={BorderStyles.BOTTOM}
                />
                <TouchableKeypadButton
                    keyConfig={KeyConfigs.DECIMAL}
                    borders={BorderStyles.LEFT}
                />
            </View>
            <View style={[column, oneColumn]}>
                <TouchableKeypadButton
                    keyConfig={KeyConfigs.DIVIDE}
                    borders={BorderStyles.LEFT}
                />
                <TouchableKeypadButton
                    keyConfig={KeyConfigs.TIMES}
                    borders={BorderStyles.LEFT}
                />
                <TouchableKeypadButton
                    keyConfig={KeyConfigs.MINUS}
                    borders={BorderStyles.LEFT}
                />
                <TouchableKeypadButton
                    keyConfig={KeyConfigs.PLUS}
                    borders={BorderStyles.LEFT}
                />
            </View>
            <View style={[column, oneColumn]}>
                <TouchableKeypadButton
                    keyConfig={KeyConfigs.FRAC_INCLUSIVE}
                    style={roundTopRight && roundedTopRight}
                />
                {this.props.numPad == false ?
                    <View style={styles.keyboardType} onClick={this.togglePad}>123</View> :
                    <View style={styles.keyboardType} onClick={this.togglePad}>abc</View>
                }
                <TouchableKeypadButton
                    keyConfig={KeyConfigs.BACKSPACE}
                    borders={BorderStyles.LEFT}
                />
                <TouchableKeypadButton
                    keyConfig={dismissOrJumpOutKey}
                    borders={BorderStyles.LEFT}
                />
            </View>
        </View>;

        const leftPageStyle = [
            row,
            fullWidth,
            styles.leftPage,
            roundTopLeft && roundedTopLeft,
        ];
        const leftPage = <View style={leftPageStyle}>
            <View style={[column, oneColumn]}>
                <TouchableKeypadButton
                    keyConfig={KeyConfigs.EXP_2}
                    borders={BorderStyles.NONE}
                    style={roundTopLeft && roundedTopLeft}
                />
                <TouchableKeypadButton
                    keyConfig={KeyConfigs.SQRT}
                    borders={BorderStyles.NONE}
                />
                <TouchableKeypadButton
                    keyConfig={KeyConfigs.LOG}
                    borders={BorderStyles.BOTTOM}
                />
                <TouchableKeypadButton
                    keyConfig={KeyConfigs.SIN}
                    borders={BorderStyles.NONE}
                />
            </View>
            <View style={[column, oneColumn]}>
                <TouchableKeypadButton
                    keyConfig={KeyConfigs.EXP_3}
                    borders={BorderStyles.NONE}
                />
                <TouchableKeypadButton
                    keyConfig={KeyConfigs.CUBE_ROOT}
                    borders={BorderStyles.NONE}
                />
                <TouchableKeypadButton
                    keyConfig={KeyConfigs.LN}
                    borders={BorderStyles.BOTTOM}
                />
                <TouchableKeypadButton
                    keyConfig={KeyConfigs.COS}
                    borders={BorderStyles.NONE}
                />
            </View>
            <View style={[column, oneColumn]}>
                <TouchableKeypadButton
                    keyConfig={KeyConfigs.EXP}
                    borders={BorderStyles.NONE}
                />
                <TouchableKeypadButton
                    keyConfig={KeyConfigs.RADICAL}
                    borders={BorderStyles.NONE}
                />
                <TouchableKeypadButton
                    keyConfig={KeyConfigs.LOG_N}
                    borders={BorderStyles.BOTTOM}
                />
                <TouchableKeypadButton
                    keyConfig={KeyConfigs.TAN}
                    borders={BorderStyles.NONE}
                />
            </View>
            <View style={[column, oneColumn]}>
                <TouchableKeypadButton
                    keyConfig={KeyConfigs.GEQ}
                    borders={BorderStyles.LEFT}
                />
                <TouchableKeypadButton
                    keyConfig={KeyConfigs.EQUAL}
                    borders={BorderStyles.LEFT}
                />
                <TouchableKeypadButton keyConfig={KeyConfigs.LEQ} />
                <TouchableKeypadButton
                    keyConfig={KeyConfigs.LEFT_PAREN}
                    borders={BorderStyles.LEFT}
                />
            </View>
            <View style={[column, oneColumn]}>
                <TouchableKeypadButton
                    keyConfig={KeyConfigs.GT}
                    borders={BorderStyles.NONE}
                />
                <TouchableKeypadButton
                    keyConfig={KeyConfigs.NEQ}
                    borders={BorderStyles.NONE}
                />
                <TouchableKeypadButton
                    keyConfig={KeyConfigs.LT}
                    borders={BorderStyles.BOTTOM}
                />
                <TouchableKeypadButton
                    keyConfig={KeyConfigs.RIGHT_PAREN}
                    borders={BorderStyles.NONE}
                />
            </View>
        </View>;

        return <TwoPageKeypad
            currentPage={currentPage}
            rightPage={rightPage}
            leftPage={leftPage}
        />;
    },
});

const styles = StyleSheet.create({
    // NOTE(charlie): These backgrounds are applied to as to fill in some
    // unfortunate 'cracks' in the layout. However, not all keys in the first
    // page use this background color (namely, the 'command' keys, backspace and
    // dismiss).
    // TODO(charlie): Apply the proper background between the 'command' keys.
    rightPage: {
        backgroundColor: valueGrey,
    },

    leftPage: {
        backgroundColor: controlGrey,
    },

    keyboardType: {
      padding: '9px 0px !important',
      textAlign: 'center !important',
      backgroundColor: '#FAFAFA !important',
      border: '1px solid #D6D8DA !important',
      cursor: 'pointer',
    },
});

const mapStateToProps = (state) => {
    return {
        currentPage: state.pager.currentPage,
        cursorContext: state.input.cursor.context,
        dynamicJumpOut: !state.layout.navigationPadEnabled,
        numPad: state.layout.numPad,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleNumAlphabets: (numPadChange) => {
            dispatch(toggleKeyType(numPadChange));
        },
    };
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(ExpressionKeypad);
