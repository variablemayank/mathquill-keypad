/**
 * An autogenerated component that renders the RADICAL iconograpy in SVG.
 *
 * Generated with: https://gist.github.com/crm416/3c7abc88e520eaed72347af240b32590.
 */
const React = require('react');

const Radical = React.createClass({
    propTypes: {
        color: React.PropTypes.string.isRequired,
    },

    render() {
        return <svg width="48" height="48" viewBox="0 0 48 48"><g fill="none" fillRule="evenodd"><path fill="none" d="M0 0h48v48H0z"/><path d="M13 16.997c0-.55.453-.997.997-.997h6.006c.55 0 .997.453.997.997v6.006c0 .55-.453.997-.997.997h-6.006c-.55 0-.997-.453-.997-.997v-6.006zM15 18h4v4h-4v-4z" fill={this.props.color}/><path stroke={this.props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M14 29l4 6 9-14h7"/></g></svg>;
    },
});

module.exports = Radical;