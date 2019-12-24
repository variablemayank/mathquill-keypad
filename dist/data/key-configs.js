'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _KeyConfigs;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * This file contains configuration settings for the buttons in the keypad.
 */

/* globals i18n */

var Keys = require('../data/keys');

var _require = require('../consts'),
    DecimalSeparators = _require.DecimalSeparators,
    IconTypes = _require.IconTypes,
    KeyTypes = _require.KeyTypes;

var _require2 = require('../utils'),
    decimalSeparator = _require2.decimalSeparator;

var KeyConfigs = (_KeyConfigs = {}, _defineProperty(_KeyConfigs, Keys.PLUS, {
    type: KeyTypes.OPERATOR,
    // I18N: A label for a plus sign.
    ariaLabel: i18n._('Plus')
}), _defineProperty(_KeyConfigs, Keys.MINUS, {
    type: KeyTypes.OPERATOR,
    // I18N: A label for a minus sign.
    ariaLabel: i18n._('Minus')
}), _defineProperty(_KeyConfigs, Keys.NEGATIVE, {
    type: KeyTypes.VALUE,
    // I18N: A label for a minus sign.
    ariaLabel: i18n._('Negative')
}), _defineProperty(_KeyConfigs, Keys.TIMES, {
    type: KeyTypes.OPERATOR,
    // I18N: A label for a multiplication sign (represented with an 'x').
    ariaLabel: i18n._('Multiply')
}), _defineProperty(_KeyConfigs, Keys.DIVIDE, {
    type: KeyTypes.OPERATOR,
    // I18N: A label for a division sign.
    ariaLabel: i18n._('Divide')
}), _defineProperty(_KeyConfigs, Keys.DECIMAL, {
    type: KeyTypes.VALUE,
    // I18N: A label for a decimal symbol.
    ariaLabel: i18n._('Decimal'),
    icon: decimalSeparator === DecimalSeparators.COMMA ? {
        // TODO(charlie): Get an SVG icon for the comma, or verify with
        // design that the text-rendered version is acceptable.
        type: IconTypes.TEXT,
        data: ','
    } : {
        type: IconTypes.SVG,
        data: Keys.PERIOD
    }
}), _defineProperty(_KeyConfigs, Keys.PERCENT, {
    type: KeyTypes.VALUE,
    // I18N: A label for a percent sign.
    ariaLabel: i18n._('Percent'),
    icon: {
        type: IconTypes.MATH,
        data: '\\%'
    }
}), _defineProperty(_KeyConfigs, Keys.CDOT, {
    type: KeyTypes.OPERATOR,
    // I18N: A label for a multiplication sign (represented as a dot).
    ariaLabel: i18n._('Multiply')
}), _defineProperty(_KeyConfigs, Keys.EQUAL, {
    type: KeyTypes.OPERATOR,
    ariaLabel: i18n._('Equals sign')
}), _defineProperty(_KeyConfigs, Keys.NEQ, {
    type: KeyTypes.OPERATOR,
    ariaLabel: i18n._('Not-equals sign')
}), _defineProperty(_KeyConfigs, Keys.GT, {
    type: KeyTypes.OPERATOR,
    // I18N: A label for a 'greater than' sign (represented as '>').
    ariaLabel: i18n._('Greater than sign')
}), _defineProperty(_KeyConfigs, Keys.LT, {
    type: KeyTypes.OPERATOR,
    // I18N: A label for a 'less than' sign (represented as '<').
    ariaLabel: i18n._('Less than sign')
}), _defineProperty(_KeyConfigs, Keys.GEQ, {
    type: KeyTypes.OPERATOR,
    ariaLabel: i18n._('Greater than or equal to sign')
}), _defineProperty(_KeyConfigs, Keys.LEQ, {
    type: KeyTypes.OPERATOR,
    ariaLabel: i18n._('Less than or equal to sign')
}), _defineProperty(_KeyConfigs, Keys.FRAC_INCLUSIVE, {
    type: KeyTypes.OPERATOR,
    // I18N: A label for a button that creates a new fraction and puts the
    // current expression in the numerator of that fraction.
    ariaLabel: i18n._('Fraction, with current expression in numerator')
}), _defineProperty(_KeyConfigs, Keys.FRAC_EXCLUSIVE, {
    type: KeyTypes.OPERATOR,
    // I18N: A label for a button that creates a new fraction next to the
    // cursor.
    ariaLabel: i18n._('Fraction, excluding the current expression')
}), _defineProperty(_KeyConfigs, Keys.EXP, {
    type: KeyTypes.OPERATOR,
    // I18N: A label for a button that will allow the user to input a custom
    // exponent.
    ariaLabel: i18n._('Custom exponent')
}), _defineProperty(_KeyConfigs, Keys.EXP_2, {
    type: KeyTypes.OPERATOR,
    // I18N: A label for a button that will square (take to the second
    // power) some math.
    ariaLabel: i18n._('Square')
}), _defineProperty(_KeyConfigs, Keys.EXP_3, {
    type: KeyTypes.OPERATOR,
    // I18N: A label for a button that will cube (take to the third power)
    // some math.
    ariaLabel: i18n._('Cube')
}), _defineProperty(_KeyConfigs, Keys.SQRT, {
    type: KeyTypes.OPERATOR,
    ariaLabel: i18n._('Square root')
}), _defineProperty(_KeyConfigs, Keys.CUBE_ROOT, {
    type: KeyTypes.OPERATOR,
    ariaLabel: i18n._('Cube root')
}), _defineProperty(_KeyConfigs, Keys.RADICAL, {
    type: KeyTypes.OPERATOR,
    ariaLabel: i18n._('Radical with custom root')
}), _defineProperty(_KeyConfigs, Keys.LEFT_PAREN, {
    type: KeyTypes.OPERATOR,
    ariaLabel: i18n._('Left parenthesis')
}), _defineProperty(_KeyConfigs, Keys.RIGHT_PAREN, {
    type: KeyTypes.OPERATOR,
    ariaLabel: i18n._('Right parenthesis')
}), _defineProperty(_KeyConfigs, Keys.LN, {
    type: KeyTypes.OPERATOR,
    ariaLabel: i18n._('Natural logarithm')
}), _defineProperty(_KeyConfigs, Keys.LOG, {
    type: KeyTypes.OPERATOR,
    ariaLabel: i18n._('Logarithm with base 10')
}), _defineProperty(_KeyConfigs, Keys.LOG_N, {
    type: KeyTypes.OPERATOR,
    ariaLabel: i18n._('Logarithm with custom base')
}), _defineProperty(_KeyConfigs, Keys.SIN, {
    type: KeyTypes.OPERATOR,
    ariaLabel: i18n._('Sine')
}), _defineProperty(_KeyConfigs, Keys.COS, {
    type: KeyTypes.OPERATOR,
    ariaLabel: i18n._('Cosine')
}), _defineProperty(_KeyConfigs, Keys.TAN, {
    type: KeyTypes.OPERATOR,
    ariaLabel: i18n._('Tangent')
}), _defineProperty(_KeyConfigs, Keys.PI, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Pi'),
    icon: {
        type: IconTypes.MATH,
        data: '\\pi'
    }
}), _defineProperty(_KeyConfigs, Keys.THETA, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Theta'),
    icon: {
        type: IconTypes.MATH,
        data: '\\theta'
    }
}), _defineProperty(_KeyConfigs, Keys.ANGLE, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Angle'),
    icon: {
        type: IconTypes.MATH,
        data: '\\angle'
    }
}), _defineProperty(_KeyConfigs, Keys.JIAO, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('JIAO'),
    icon: {
        type: IconTypes.MATH,
        data: '\\angle'
    }
}), _defineProperty(_KeyConfigs, Keys.PHI, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Phi'),
    icon: {
        type: IconTypes.MATH,
        data: '\\phi'
    }
}), _defineProperty(_KeyConfigs, Keys.PM, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Pm'),
    icon: {
        type: IconTypes.MATH,
        data: '\\pm'
    }
}), _defineProperty(_KeyConfigs, Keys.DEGREE, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Degree'),
    icon: {
        type: IconTypes.MATH,
        data: '\\circ'
    }
}), _defineProperty(_KeyConfigs, Keys.DU, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Du'),
    icon: {
        type: IconTypes.MATH,
        data: '\\circ'
    }
}), _defineProperty(_KeyConfigs, Keys.PRIME, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('PRIME'),
    icon: {
        type: IconTypes.MATH,
        data: "'"
    }
}), _defineProperty(_KeyConfigs, Keys.DPRIME, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('DPRIME'),
    icon: {
        type: IconTypes.MATH,
        data: "''"
    }
}), _defineProperty(_KeyConfigs, Keys.DOT, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Dot'),
    icon: {
        type: IconTypes.MATH,
        data: '\\dot{x}'
    }
}), _defineProperty(_KeyConfigs, Keys.SUBSCRIPT, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Subscript'),
    icon: {
        type: IconTypes.MATH,
        data: 'x_i'
    }
}), _defineProperty(_KeyConfigs, Keys.VEC, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Vec'),
    icon: {
        type: IconTypes.MATH,
        data: '\\vec{a}'
    }
}), _defineProperty(_KeyConfigs, Keys.OVERLINE, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Overline'),
    icon: {
        type: IconTypes.MATH,
        data: '\\overline{a}'
    }
}), _defineProperty(_KeyConfigs, Keys.ABS, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Abs'),
    icon: {
        type: IconTypes.MATH,
        data: '\\left| \\frac{a}{b} \\right|'
    }
}), _defineProperty(_KeyConfigs, Keys.FRAC_GROUP, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Frac group'),
    icon: {
        type: IconTypes.MATH,
        data: '\\left \\{  \\right .'
    }
}), _defineProperty(_KeyConfigs, Keys.PARALLELOGRAM, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Parallelogram'),
    icon: {
        type: IconTypes.MATH,
        data: '\\lozenge'
    }
}), _defineProperty(_KeyConfigs, Keys.COORDINATE, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Coordinate'),
    icon: {
        type: IconTypes.MATH,
        data: '\\left( {a,b} \\right)'
    }
}), _defineProperty(_KeyConfigs, Keys.BRACKET, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Bracket'),
    icon: {
        type: IconTypes.MATH,
        data: '\\left[ \\right]'
    }
}), _defineProperty(_KeyConfigs, Keys.CIRC, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Circ'),
    icon: {
        type: IconTypes.MATH,
        data: '\\circ'
    }
}), _defineProperty(_KeyConfigs, Keys.ALPHA, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Alpha'),
    icon: {
        type: IconTypes.MATH,
        data: '\\alpha'
    }
}), _defineProperty(_KeyConfigs, Keys.BETA, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Beta'),
    icon: {
        type: IconTypes.MATH,
        data: '\\beta'
    }
}), _defineProperty(_KeyConfigs, Keys.GAMMA, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Gamma'),
    icon: {
        type: IconTypes.MATH,
        data: '\\gamma'
    }
}), _defineProperty(_KeyConfigs, Keys.DELTA, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Delta'),
    icon: {
        type: IconTypes.MATH,
        data: '\\Delta'
    }
}), _defineProperty(_KeyConfigs, Keys.SMALLDELTA, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Smalldelta'),
    icon: {
        type: IconTypes.MATH,
        data: '\\delta'
    }
}), _defineProperty(_KeyConfigs, Keys.EPSILON, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Eplison'),
    icon: {
        type: IconTypes.MATH,
        data: '\\epsilon'
    }
}), _defineProperty(_KeyConfigs, Keys.VAREPSILON, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Varepsilon'),
    icon: {
        type: IconTypes.MATH,
        data: '\\varepsilon'
    }
}), _defineProperty(_KeyConfigs, Keys.ZETA, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Zeta'),
    icon: {
        type: IconTypes.MATH,
        data: '\\zeta'
    }
}), _defineProperty(_KeyConfigs, Keys.ETA, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Eta'),
    icon: {
        type: IconTypes.MATH,
        data: '\\eta'
    }
}), _defineProperty(_KeyConfigs, Keys.VARTHETA, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Vartheta'),
    icon: {
        type: IconTypes.MATH,
        data: '\\vartheta'
    }
}), _defineProperty(_KeyConfigs, Keys.IOTA, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Iota'),
    icon: {
        type: IconTypes.MATH,
        data: '\\iota'
    }
}), _defineProperty(_KeyConfigs, Keys.KAPPA, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Kappa'),
    icon: {
        type: IconTypes.MATH,
        data: '\\kappa'
    }
}), _defineProperty(_KeyConfigs, Keys.LAMBDA, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Lambda'),
    icon: {
        type: IconTypes.MATH,
        data: '\\lambda'
    }
}), _defineProperty(_KeyConfigs, Keys.MU, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Mu'),
    icon: {
        type: IconTypes.MATH,
        data: '\\mu'
    }
}), _defineProperty(_KeyConfigs, Keys.NU, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Nu'),
    icon: {
        type: IconTypes.MATH,
        data: '\\nu'
    }
}), _defineProperty(_KeyConfigs, Keys.XI, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Xi'),
    icon: {
        type: IconTypes.MATH,
        data: '\\xi'
    }
}), _defineProperty(_KeyConfigs, Keys.RHO, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Rho'),
    icon: {
        type: IconTypes.MATH,
        data: '\\rho'
    }
}), _defineProperty(_KeyConfigs, Keys.SIGMA, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Sigma'),
    icon: {
        type: IconTypes.MATH,
        data: '\\sigma'
    }
}), _defineProperty(_KeyConfigs, Keys.TAU, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Tau'),
    icon: {
        type: IconTypes.MATH,
        data: '\\tau'
    }
}), _defineProperty(_KeyConfigs, Keys.UPSILON, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Upsilon'),
    icon: {
        type: IconTypes.MATH,
        data: '\\upsilon'
    }
}), _defineProperty(_KeyConfigs, Keys.CHI, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Chi'),
    icon: {
        type: IconTypes.MATH,
        data: '\\chi'
    }
}), _defineProperty(_KeyConfigs, Keys.PSI, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Psi'),
    icon: {
        type: IconTypes.MATH,
        data: '\\psi'
    }
}), _defineProperty(_KeyConfigs, Keys.OMEGA, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Omega'),
    icon: {
        type: IconTypes.MATH,
        data: '\\omega'
    }
}), _defineProperty(_KeyConfigs, Keys.MAO, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Mao'),
    icon: {
        type: IconTypes.MATH,
        data: ':'
    }
}), _defineProperty(_KeyConfigs, Keys.ODOT, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Odot'),
    icon: {
        type: IconTypes.MATH,
        data: '\\odot'
    }
}), _defineProperty(_KeyConfigs, Keys.BECAUSE, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Because'),
    icon: {
        type: IconTypes.MATH,
        data: '\\because'
    }
}), _defineProperty(_KeyConfigs, Keys.THEREFORE, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Therefore'),
    icon: {
        type: IconTypes.MATH,
        data: '\\therefore'
    }
}), _defineProperty(_KeyConfigs, Keys.TRIANGLE, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Triangle'),
    icon: {
        type: IconTypes.MATH,
        data: '\\bigtriangleup'
    }
}), _defineProperty(_KeyConfigs, Keys.BIGTRIANGLEUP, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Triangle'),
    icon: {
        type: IconTypes.MATH,
        data: '\\bigtriangleup'
    }
}), _defineProperty(_KeyConfigs, Keys.APPROX, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Approx'),
    icon: {
        type: IconTypes.MATH,
        data: '\\approx'
    }
}), _defineProperty(_KeyConfigs, Keys.SIM, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Sim'),
    icon: {
        type: IconTypes.MATH,
        data: '\\sim'
    }
}), _defineProperty(_KeyConfigs, Keys.CONG, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Cong'),
    icon: {
        type: IconTypes.MATH,
        data: '\\cong'
    }
}), _defineProperty(_KeyConfigs, Keys.PERP, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('Perp'),
    icon: {
        type: IconTypes.MATH,
        data: '\\perp'
    }
}), _defineProperty(_KeyConfigs, Keys.QIE, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('QIE'),
    icon: {
        type: IconTypes.MATH,
        data: '\\&'
    }
}), _defineProperty(_KeyConfigs, Keys.HUO, {
    type: KeyTypes.VALUE,
    ariaLabel: i18n._('HUO'),
    icon: {
        type: IconTypes.MATH,
        data: '\\parallel'
    }
}), _defineProperty(_KeyConfigs, Keys.NOOP, {
    type: KeyTypes.EMPTY
}), _defineProperty(_KeyConfigs, Keys.UP, {
    type: KeyTypes.INPUT_NAVIGATION,
    ariaLabel: i18n._('Up arrow')
}), _defineProperty(_KeyConfigs, Keys.RIGHT, {
    type: KeyTypes.INPUT_NAVIGATION,
    ariaLabel: i18n._('Right arrow')
}), _defineProperty(_KeyConfigs, Keys.DOWN, {
    type: KeyTypes.INPUT_NAVIGATION,
    ariaLabel: i18n._('Down arrow')
}), _defineProperty(_KeyConfigs, Keys.LEFT, {
    type: KeyTypes.INPUT_NAVIGATION,
    ariaLabel: i18n._('Left arrow')
}), _defineProperty(_KeyConfigs, Keys.JUMP_OUT_PARENTHESES, {
    type: KeyTypes.INPUT_NAVIGATION,
    ariaLabel: i18n._('Navigate right out of a set of parentheses')
}), _defineProperty(_KeyConfigs, Keys.JUMP_OUT_EXPONENT, {
    type: KeyTypes.INPUT_NAVIGATION,
    ariaLabel: i18n._('Navigate right out of an exponent')
}), _defineProperty(_KeyConfigs, Keys.JUMP_OUT_BASE, {
    type: KeyTypes.INPUT_NAVIGATION,
    ariaLabel: i18n._('Navigate right out of a base')
}), _defineProperty(_KeyConfigs, Keys.JUMP_INTO_NUMERATOR, {
    type: KeyTypes.INPUT_NAVIGATION,
    ariaLabel: i18n._('Navigate right into the numerator of a fraction')
}), _defineProperty(_KeyConfigs, Keys.JUMP_OUT_NUMERATOR, {
    type: KeyTypes.INPUT_NAVIGATION,
    ariaLabel: i18n._('Navigate right out of the numerator and into the denominator')
}), _defineProperty(_KeyConfigs, Keys.JUMP_OUT_DENOMINATOR, {
    type: KeyTypes.INPUT_NAVIGATION,
    ariaLabel: i18n._('Navigate right out of the denominator of a fraction')
}), _defineProperty(_KeyConfigs, Keys.BACKSPACE, {
    type: KeyTypes.INPUT_NAVIGATION,
    // I18N: A label for a button that will delete some input.
    ariaLabel: i18n._('Delete')
}), _defineProperty(_KeyConfigs, Keys.DISMISS, {
    type: KeyTypes.KEYPAD_NAVIGATION,
    // I18N: A label for a button that will dismiss/hide a keypad.
    ariaLabel: i18n._('Dismiss')
}), _KeyConfigs);

// Add in any multi-function buttons. By default, these keys will mix in any
// configuration settings from their default child key (i.e., the first key in
// the `childKeyIds` array).
// TODO(charlie): Make the multi-function button's long-press interaction
// accessible.
KeyConfigs[Keys.FRAC_MULTI] = {
    childKeyIds: [Keys.FRAC_INCLUSIVE, Keys.FRAC_EXCLUSIVE]
};

// TODO(charlie): Use the numeral color for the 'Many' key.
KeyConfigs[Keys.MANY] = {
    type: KeyTypes.MANY
    // childKeyIds will be configured by the client.
};

// Add in every numeral.
var NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = NUMBERS[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var num = _step.value;

        // TODO(charlie): Consider removing the SVG icons that we have for the
        // numeral keys. They can be rendered just as easily with text (though that
        // would mean that we'd be using text beyond the variable key).
        var textRepresentation = '' + num;
        KeyConfigs['NUM_' + num] = {
            type: KeyTypes.VALUE,
            ariaLabel: textRepresentation,
            icon: {
                type: IconTypes.TEXT,
                data: textRepresentation
            }
        };
    }

    // Add in every variable.
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = LETTERS[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var letter = _step2.value;

        var lowerCaseVariable = letter.toLowerCase();
        var upperCaseVariable = letter.toUpperCase();

        var _arr = [lowerCaseVariable, upperCaseVariable];
        for (var _i = 0; _i < _arr.length; _i++) {
            var _textRepresentation = _arr[_i];
            KeyConfigs[_textRepresentation] = {
                type: KeyTypes.VALUE,
                ariaLabel: _textRepresentation,
                icon: {
                    type: IconTypes.TEXT,
                    data: _textRepresentation
                }
            };
        }
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
    for (var _iterator3 = Object.keys(KeyConfigs)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var key = _step3.value;

        KeyConfigs[key] = _extends({
            id: key,
            // Default to an SVG icon indexed by the key name.
            icon: {
                type: IconTypes.SVG,
                data: key
            }
        }, KeyConfigs[key]);
    }
} catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
        }
    } finally {
        if (_didIteratorError3) {
            throw _iteratorError3;
        }
    }
}

module.exports = KeyConfigs;