/**
 * This file contains configuration settings for the buttons in the keypad.
 */

/* globals i18n */

const Keys = require('../data/keys');
const {DecimalSeparators, IconTypes, KeyTypes} = require('../consts');
const {decimalSeparator} = require('../utils');

const KeyConfigs = {
    // Basic math keys.
    [Keys.PLUS]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a plus sign.
        ariaLabel: i18n._('Plus'),
    },
    [Keys.MINUS]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a minus sign.
        ariaLabel: i18n._('Minus'),
    },
    [Keys.NEGATIVE]: {
        type: KeyTypes.VALUE,
        // I18N: A label for a minus sign.
        ariaLabel: i18n._('Negative'),
    },
    [Keys.TIMES]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a multiplication sign (represented with an 'x').
        ariaLabel: i18n._('Multiply'),
    },
    [Keys.DIVIDE]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a division sign.
        ariaLabel: i18n._('Divide'),
    },
    [Keys.DECIMAL]: {
        type: KeyTypes.VALUE,
        // I18N: A label for a decimal symbol.
        ariaLabel: i18n._('Decimal'),
        icon: decimalSeparator === DecimalSeparators.COMMA ? {
            // TODO(charlie): Get an SVG icon for the comma, or verify with
            // design that the text-rendered version is acceptable.
            type: IconTypes.TEXT,
            data: ',',
        } : {
            type: IconTypes.SVG,
            data: Keys.PERIOD,
        },
    },
    [Keys.PERCENT]: {
        type: KeyTypes.VALUE,
        // I18N: A label for a percent sign.
        ariaLabel: i18n._('Percent'),
        icon: {
            type: IconTypes.MATH,
            data: '\\%',
        },
    },
    [Keys.CDOT]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a multiplication sign (represented as a dot).
        ariaLabel: i18n._('Multiply'),
    },
    [Keys.EQUAL]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Equals sign'),
    },
    [Keys.NEQ]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Not-equals sign'),
    },
    [Keys.GT]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a 'greater than' sign (represented as '>').
        ariaLabel: i18n._('Greater than sign'),
    },
    [Keys.LT]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a 'less than' sign (represented as '<').
        ariaLabel: i18n._('Less than sign'),
    },
    [Keys.GEQ]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Greater than or equal to sign'),
    },
    [Keys.LEQ]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Less than or equal to sign'),
    },
    [Keys.FRAC_INCLUSIVE]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a button that creates a new fraction and puts the
        // current expression in the numerator of that fraction.
        ariaLabel: i18n._('Fraction, with current expression in numerator'),
    },
    [Keys.FRAC_EXCLUSIVE]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a button that creates a new fraction next to the
        // cursor.
        ariaLabel: i18n._('Fraction, excluding the current expression'),
    },
    [Keys.EXP]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a button that will allow the user to input a custom
        // exponent.
        ariaLabel: i18n._('Custom exponent'),
    },
    [Keys.EXP_2]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a button that will square (take to the second
        // power) some math.
        ariaLabel: i18n._('Square'),
    },
    [Keys.EXP_3]: {
        type: KeyTypes.OPERATOR,
        // I18N: A label for a button that will cube (take to the third power)
        // some math.
        ariaLabel: i18n._('Cube'),
    },
    [Keys.SQRT]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Square root'),
    },
    [Keys.CUBE_ROOT]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cube root'),
    },
    [Keys.RADICAL]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Radical with custom root'),
    },
    [Keys.LEFT_PAREN]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Left parenthesis'),
    },
    [Keys.RIGHT_PAREN]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Right parenthesis'),
    },
    [Keys.LN]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Natural logarithm'),
    },
    [Keys.LOG]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Logarithm with base 10'),
    },
    [Keys.LOG_N]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Logarithm with custom base'),
    },
    [Keys.SIN]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Sine'),
    },
    [Keys.COS]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Cosine'),
    },
    [Keys.TAN]: {
        type: KeyTypes.OPERATOR,
        ariaLabel: i18n._('Tangent'),
    },
    [Keys.PI]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Pi'),
        icon: {
            type: IconTypes.MATH,
            data: '\\pi',
        },
    },
    [Keys.THETA]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Theta'),
        icon: {
            type: IconTypes.MATH,
            data: '\\theta',
        },
    },
    [Keys.ANGLE]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Angle'),
        icon: {
            type: IconTypes.MATH,
            data: '\\angle',
        },
    },
    [Keys.JIAO]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('JIAO'),
        icon: {
            type: IconTypes.MATH,
            data: '\\angle',
        },
    },
    [Keys.PHI]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Phi'),
        icon: {
            type: IconTypes.MATH,
            data: '\\phi',
        },
    },
    [Keys.PM]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Pm'),
        icon: {
            type: IconTypes.MATH,
            data: '\\pm',
        },
    },
    [Keys.DEGREE]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Degree'),
        icon: {
            type: IconTypes.MATH,
            data: '\\circ',
        },
    },
    [Keys.DU]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Du'),
        icon: {
            type: IconTypes.MATH,
            data: '\\circ',
        },
    },
    [Keys.PRIME]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('PRIME'),
        icon: {
          type: IconTypes.MATH,
          data: "'",
        },
    },
    [Keys.DPRIME]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('DPRIME'),
        icon: {
          type: IconTypes.MATH,
          data: "''",
        },
    },
    [Keys.DOT]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Dot'),
        icon: {
            type: IconTypes.MATH,
            data: '\\dot{x}',
        },
      },
    [Keys.SUBSCRIPT]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Subscript'),
        icon: {
            type: IconTypes.MATH,
            data: 'x_i',
        },
      },
    [Keys.VEC]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Vec'),
        icon: {
            type: IconTypes.MATH,
            data: '\\vec{a}',
        },
      },
    [Keys.OVERLINE]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Overline'),
        icon: {
            type: IconTypes.MATH,
            data: '\\overline{a}',
        },
      },
    [Keys.ABS]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Abs'),
        icon:{
            type: IconTypes.MATH,
            data: '\\left| \\frac{a}{b} \\right|',
        },
      },
    [Keys.FRAC_GROUP]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Frac group'),
        icon:{
            type: IconTypes.MATH,
            data: '\\left \\{  \\right .',
        },
      },
    [Keys.PARALLELOGRAM]: {
          type: KeyTypes.VALUE,
          ariaLabel: i18n._('Parallelogram'),
          icon:{
            type: IconTypes.MATH,
            data: '\\lozenge',
          },
      },
     [Keys.COORDINATE]: {
          type: KeyTypes.VALUE,
          ariaLabel: i18n._('Coordinate'),
          icon:{
            type: IconTypes.MATH,
            data: '\\left( {a,b} \\right)',
          },
      },
      [Keys.BRACKET]: {
          type: KeyTypes.VALUE,
          ariaLabel: i18n._('Bracket'),
          icon:{
            type: IconTypes.MATH,
            data: '\\left[ \\right]',
          },
      },
    [Keys.CIRC]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Circ'),
        icon: {
            type: IconTypes.MATH,
            data: '\\circ',
        },
    },
    [Keys.ALPHA]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Alpha'),
        icon: {
            type: IconTypes.MATH,
            data: '\\alpha',
        },
    },
    [Keys.BETA]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Beta'),
        icon: {
            type: IconTypes.MATH,
            data: '\\beta',
        },
    },
    [Keys.GAMMA]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Gamma'),
        icon: {
            type: IconTypes.MATH,
            data: '\\gamma',
        },
    },
    [Keys.DELTA]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Delta'),
        icon: {
            type: IconTypes.MATH,
            data: '\\Delta',
        },
    },
    [Keys.SMALLDELTA]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Smalldelta'),
        icon: {
            type: IconTypes.MATH,
            data: '\\delta',
        },
    },
    [Keys.EPSILON]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Eplison'),
        icon: {
            type: IconTypes.MATH,
            data: '\\epsilon',
        },
    },
    [Keys.VAREPSILON]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Varepsilon'),
        icon: {
            type: IconTypes.MATH,
            data: '\\varepsilon',
        },
    },
    [Keys.ZETA]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Zeta'),
        icon: {
            type: IconTypes.MATH,
            data: '\\zeta',
        },
    },
    [Keys.ETA]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Eta'),
        icon: {
            type: IconTypes.MATH,
            data: '\\eta',
        },
    },
    [Keys.VARTHETA]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Vartheta'),
        icon: {
            type: IconTypes.MATH,
            data: '\\vartheta',
        },
    },
    [Keys.IOTA]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Iota'),
        icon: {
            type: IconTypes.MATH,
            data: '\\iota',
        },
    },
    [Keys.KAPPA]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Kappa'),
        icon: {
            type: IconTypes.MATH,
            data: '\\kappa',
        },
    },
    [Keys.LAMBDA]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Lambda'),
        icon: {
            type: IconTypes.MATH,
            data: '\\lambda',
        },
    },
    [Keys.MU]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Mu'),
        icon: {
            type: IconTypes.MATH,
            data: '\\mu',
        },
    },
    [Keys.NU]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Nu'),
        icon: {
            type: IconTypes.MATH,
            data: '\\nu',
        },
    },
    [Keys.XI]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Xi'),
        icon: {
            type: IconTypes.MATH,
            data: '\\xi',
        },
    },
    [Keys.RHO]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Rho'),
        icon: {
            type: IconTypes.MATH,
            data: '\\rho',
        },
    },
    [Keys.SIGMA]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Sigma'),
        icon: {
            type: IconTypes.MATH,
            data: '\\sigma',
        },
    },
    [Keys.TAU]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Tau'),
        icon: {
            type: IconTypes.MATH,
            data: '\\tau',
        },
    },
    [Keys.UPSILON]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Upsilon'),
        icon: {
            type: IconTypes.MATH,
            data: '\\upsilon',
        },
    },
    [Keys.CHI]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Chi'),
        icon: {
            type: IconTypes.MATH,
            data: '\\chi',
        },
    },
    [Keys.PSI]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Psi'),
        icon: {
            type: IconTypes.MATH,
            data: '\\psi',
        },
    },
    [Keys.OMEGA]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Omega'),
        icon: {
            type: IconTypes.MATH,
            data: '\\omega',
        },
    },
    [Keys.MAO]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Mao'),
        icon: {
            type: IconTypes.MATH,
            data: ':',
        },
    },
    [Keys.ODOT]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Odot'),
        icon: {
            type: IconTypes.MATH,
            data: '\\odot',
        },
    },
    [Keys.BECAUSE]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Because'),
        icon: {
            type: IconTypes.MATH,
            data: '\\because',
        },
    },
    [Keys.THEREFORE]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Therefore'),
        icon: {
            type: IconTypes.MATH,
            data: '\\therefore',
        },
    },
    [Keys.TRIANGLE]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Triangle'),
        icon: {
            type: IconTypes.MATH,
            data: '\\bigtriangleup',
        },
    },
    [Keys.BIGTRIANGLEUP]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Triangle'),
        icon: {
            type: IconTypes.MATH,
            data: '\\bigtriangleup',
        },
    },
    // [Keys.CDOT]: {
    //     type: KeyTypes.VALUE,
    //     ariaLabel: i18n._('Cdot'),
    //     icon: {
    //         type: IconTypes.MATH,
    //         data: '\\cdot',
    //     },
    // },
    [Keys.APPROX]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Approx'),
        icon: {
            type: IconTypes.MATH,
            data: '\\approx',
        },
    },
    [Keys.SIM]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Sim'),
        icon: {
            type: IconTypes.MATH,
            data: '\\sim',
        },
    },
    [Keys.CONG]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Cong'),
        icon: {
            type: IconTypes.MATH,
            data: '\\cong',
        },
    },
    [Keys.PERP]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('Perp'),
        icon: {
            type: IconTypes.MATH,
            data: '\\perp',
        },
    },
    [Keys.QIE]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('QIE'),
        icon: {
            type: IconTypes.MATH,
            data: '\\&',
        },
    },
    [Keys.HUO]: {
        type: KeyTypes.VALUE,
        ariaLabel: i18n._('HUO'),
        icon: {
            type: IconTypes.MATH,
            data: '\\parallel',
        },
    },
    [Keys.NOOP]: {
        type: KeyTypes.EMPTY,
    },

    // Input navigation keys.
    [Keys.UP]: {
        type: KeyTypes.INPUT_NAVIGATION,
        ariaLabel: i18n._('Up arrow'),
    },
    [Keys.RIGHT]: {
        type: KeyTypes.INPUT_NAVIGATION,
        ariaLabel: i18n._('Right arrow'),
    },
    [Keys.DOWN]: {
        type: KeyTypes.INPUT_NAVIGATION,
        ariaLabel: i18n._('Down arrow'),
    },
    [Keys.LEFT]: {
        type: KeyTypes.INPUT_NAVIGATION,
        ariaLabel: i18n._('Left arrow'),
    },
    [Keys.JUMP_OUT_PARENTHESES]: {
        type: KeyTypes.INPUT_NAVIGATION,
        ariaLabel: i18n._('Navigate right out of a set of parentheses'),
    },
    [Keys.JUMP_OUT_EXPONENT]: {
        type: KeyTypes.INPUT_NAVIGATION,
        ariaLabel: i18n._('Navigate right out of an exponent'),
    },
    [Keys.JUMP_OUT_BASE]: {
        type: KeyTypes.INPUT_NAVIGATION,
        ariaLabel: i18n._('Navigate right out of a base'),
    },
    [Keys.JUMP_INTO_NUMERATOR]: {
        type: KeyTypes.INPUT_NAVIGATION,
        ariaLabel: i18n._('Navigate right into the numerator of a fraction'),
    },
    [Keys.JUMP_OUT_NUMERATOR]: {
        type: KeyTypes.INPUT_NAVIGATION,
        ariaLabel: i18n._(
            'Navigate right out of the numerator and into the denominator'),
    },
    [Keys.JUMP_OUT_DENOMINATOR]: {
        type: KeyTypes.INPUT_NAVIGATION,
        ariaLabel: i18n._(
            'Navigate right out of the denominator of a fraction'),
    },
    [Keys.BACKSPACE]: {
        type: KeyTypes.INPUT_NAVIGATION,
        // I18N: A label for a button that will delete some input.
        ariaLabel: i18n._('Delete'),
    },

    // Keypad navigation keys.
    [Keys.DISMISS]: {
        type: KeyTypes.KEYPAD_NAVIGATION,
        // I18N: A label for a button that will dismiss/hide a keypad.
        ariaLabel: i18n._('Dismiss'),
    },
};

// Add in any multi-function buttons. By default, these keys will mix in any
// configuration settings from their default child key (i.e., the first key in
// the `childKeyIds` array).
// TODO(charlie): Make the multi-function button's long-press interaction
// accessible.
KeyConfigs[Keys.FRAC_MULTI] = {
    childKeyIds: [Keys.FRAC_INCLUSIVE, Keys.FRAC_EXCLUSIVE],
};

// TODO(charlie): Use the numeral color for the 'Many' key.
KeyConfigs[Keys.MANY] = {
    type: KeyTypes.MANY,
    // childKeyIds will be configured by the client.
};

// Add in every numeral.
const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
for (const num of NUMBERS) {
    // TODO(charlie): Consider removing the SVG icons that we have for the
    // numeral keys. They can be rendered just as easily with text (though that
    // would mean that we'd be using text beyond the variable key).
    const textRepresentation = `${num}`;
    KeyConfigs[`NUM_${num}`] = {
        type: KeyTypes.VALUE,
        ariaLabel: textRepresentation,
        icon: {
            type: IconTypes.TEXT,
            data: textRepresentation,
        },
    };
}

// Add in every variable.
const LETTERS = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
];
for (const letter of LETTERS) {
    const lowerCaseVariable = letter.toLowerCase();
    const upperCaseVariable = letter.toUpperCase();

    for (const textRepresentation of [lowerCaseVariable, upperCaseVariable]) {
        KeyConfigs[textRepresentation] = {
            type: KeyTypes.VALUE,
            ariaLabel: textRepresentation,
            icon: {
                type: IconTypes.TEXT,
                data: textRepresentation,
            },
        };
    }
}

for (const key of Object.keys(KeyConfigs)) {
    KeyConfigs[key] = {
        id: key,
        // Default to an SVG icon indexed by the key name.
        icon: {
            type: IconTypes.SVG,
            data: key,
        },
        ...KeyConfigs[key],
    };
}

module.exports = KeyConfigs;
