'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * A component that renders and animates the popovers that appear over the
 * multi-functional keys.
 */

var React = require('react');
var CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

var KeyConfigs = require('../data/key-configs');
var MultiSymbolPopover = require('./multi-symbol-popover');
var isPc = require('./platform')();

var _require = require('./prop-types'),
    boundingBoxPropType = _require.boundingBoxPropType,
    keyConfigPropType = _require.keyConfigPropType,
    popoverPropType = _require.popoverPropType;

var zIndexes = require('./z-indexes');

// NOTE(charlie): These must be kept in sync with the transition durations and
// classnames specified in popover.css.
var animationTransitionName = 'popover';
var animationDurationMs = 200;

// A container component used to position a popover absolutely at a specific
// position.
var PopoverContainer = React.createClass({
    displayName: 'PopoverContainer',

    propTypes: {
        bounds: boundingBoxPropType.isRequired,
        childKeys: React.PropTypes.arrayOf(keyConfigPropType).isRequired
    },

    render: function render() {
        var _props = this.props,
            bounds = _props.bounds,
            childKeys = _props.childKeys;


        var containerStyle = _extends({
            position: 'absolute',
            overflow: 'auto',
            maxHeight: isPc ? 257 : 'auto',
            // background:'#fff',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
            // ipad上弹出层级问题
            zIndex: zIndexes.popover
        }, bounds);
        //add
        // const containerStyle = {
        //   position: 'absolute',
        //   ...bounds,
        // };
        //

        return React.createElement(
            'div',
            { style: containerStyle },
            React.createElement(MultiSymbolPopover, { keys: childKeys })
        );
    }
});

var PopoverManager = React.createClass({
    displayName: 'PopoverManager',

    propTypes: {
        popover: popoverPropType
    },

    render: function render() {
        var popover = this.props.popover;


        return React.createElement(
            CSSTransitionGroup,
            {
                transitionName: animationTransitionName,
                transitionEnter: true,
                transitionLeave: false,
                transitionEnterTimeout: animationDurationMs
            },
            popover && React.createElement(PopoverContainer, {
                key: popover.childKeyIds[0],
                bounds: popover.bounds,
                childKeys: popover.childKeyIds.map(function (id) {
                    return KeyConfigs[id];
                })
            })
        );
    }
});

module.exports = PopoverManager;