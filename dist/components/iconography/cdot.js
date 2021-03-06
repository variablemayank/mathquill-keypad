"use strict";

/**
 * An autogenerated component that renders the CDOT iconograpy in SVG.
 *
 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
 */
var React = require('react');

var Cdot = React.createClass({
    displayName: "Cdot",

    propTypes: {
        color: React.PropTypes.string.isRequired
    },

    render: function render() {
        return React.createElement(
            "svg",
            { width: "48", height: "48", viewBox: "0 0 48 48" },
            React.createElement(
                "g",
                { fill: "none", fillRule: "evenodd" },
                React.createElement("path", { fill: "none", d: "M0 0h48v48H0z" }),
                React.createElement(
                    "g",
                    { transform: "translate(12 12)" },
                    React.createElement("path", { fill: "none", d: "M0 0h24v24H0z" }),
                    React.createElement("circle", { fill: this.props.color, cx: "12", cy: "12", r: "3" })
                )
            )
        );
    }
});

module.exports = Cdot;