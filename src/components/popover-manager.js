/**
 * A component that renders and animates the popovers that appear over the
 * multi-functional keys.
 */

const React = require('react');
const CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

const KeyConfigs = require('../data/key-configs');
const MultiSymbolPopover = require('./multi-symbol-popover');
const isPc = require('./platform')()
const {
    boundingBoxPropType,
    keyConfigPropType,
    popoverPropType,
} = require('./prop-types');
const zIndexes = require('./z-indexes');


// NOTE(charlie): These must be kept in sync with the transition durations and
// classnames specified in popover.css.
const animationTransitionName = 'popover';
const animationDurationMs = 200;

// A container component used to position a popover absolutely at a specific
// position.
const PopoverContainer = React.createClass({
    propTypes: {
        bounds: boundingBoxPropType.isRequired,
        childKeys: React.PropTypes.arrayOf(keyConfigPropType).isRequired,
    },

    render() {
        const {bounds, childKeys} = this.props;

        const containerStyle = {
            position: 'absolute',
            overflow: 'auto',
            maxHeight: isPc ? 257 : 'auto',
            // background:'#fff',
          boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
          // ipad上弹出层级问题
          zIndex: zIndexes.popover,
            ...bounds,
        };
      //add
      // const containerStyle = {
      //   position: 'absolute',
      //   ...bounds,
      // };
      //

        return <div style={containerStyle}>
            <MultiSymbolPopover keys={childKeys} />
        </div>;
    },
});

const PopoverManager = React.createClass({
    propTypes: {
        popover: popoverPropType,
    },

    render() {
        const {popover} = this.props;

        return <CSSTransitionGroup
            transitionName={animationTransitionName}
            transitionEnter={true}
            transitionLeave={false}
            transitionEnterTimeout={animationDurationMs}
        >
            {popover && <PopoverContainer
                key={popover.childKeyIds[0]}
                bounds={popover.bounds}
                childKeys={popover.childKeyIds.map(id => KeyConfigs[id])}
            />}
        </CSSTransitionGroup>;
    },
});

module.exports = PopoverManager;
