'use strict';

module.exports = {
    // naming convetion: verb + noun
    // the noun should be one of the other properties in the object that's
    // being dispatched
    dismissKeypad: function dismissKeypad() {
        return {
            type: 'DismissKeypad'
        };
    },
    activateKeypad: function activateKeypad() {
        return {
            type: 'ActivateKeypad'
        };
    },


    /**
     * Configure the keypad with the provided configuration parameters.
     *
     * See: `prop-types.js#keypadConfigurationPropType`.
     */
    configureKeypad: function configureKeypad(configuration) {
        return {
            type: 'ConfigureKeypad',
            configuration: configuration
        };
    },
    ConfigureManyKeypad: function ConfigureManyKeypad(configuration) {
        return {
            type: 'ConfigureManyKeypad',
            configuration: configuration
        };
    },
    setPageSize: function setPageSize(pageWidthPx, pageHeightPx) {
        return {
            type: 'SetPageSize',
            pageWidthPx: pageWidthPx,
            pageHeightPx: pageHeightPx
        };
    },
    toggleKeyType: function toggleKeyType(numPad) {
        return {
            type: 'ToggleKeyType',
            numPad: numPad
        };
    },
    removeEcho: function removeEcho(animationId) {
        return {
            type: 'RemoveEcho',
            animationId: animationId
        };
    },


    // Input-related actions.
    setKeyHandler: function setKeyHandler(keyHandler) {
        return {
            type: 'SetKeyHandler',
            keyHandler: keyHandler
        };
    },
    setCursor: function setCursor(cursor) {
        return {
            type: 'SetCursor',
            cursor: cursor
        };
    }
};