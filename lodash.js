'use strict';

const { WARN } = require('./utils');

module.exports = {
  plugins: ['lodash'],
  rules: {
    // plugin:lodash *************************************************************
    // rules URL: https://github.com/wix/eslint-plugin-lodash#list-of-provided-rules
    'lodash/callback-binding': WARN,
    'lodash/chain-style': [WARN, 'explicit'],
    'lodash/chaining': [WARN, 'always'],
    'lodash/collection-method-value': WARN,
    'lodash/collection-ordering': [
      WARN,
      { method: 'orderByExplicit', useArray: 'as-needed' },
    ],
    'lodash/collection-return': WARN,
    'lodash/consistent-compose': WARN,
    'lodash/identity-shorthand': WARN,
    'lodash/import-scope': [WARN, 'member'],
    'lodash/matches-prop-shorthand': WARN,
    'lodash/matches-shorthand': WARN,
    'lodash/no-commit': WARN,
    'lodash/no-double-unwrap': WARN,
    'lodash/no-extra-args': WARN,
    'lodash/no-unbound-this': WARN,
    'lodash/path-style': WARN,
    'lodash/prefer-compact': WARN,
    'lodash/prefer-constant': WARN,
    'lodash/prefer-filter': WARN,
    'lodash/prefer-find': WARN,
    'lodash/prefer-flat-map': WARN,
    'lodash/prefer-get': WARN,
    'lodash/prefer-immutable-method': WARN,
    'lodash/prefer-includes': WARN,
    'lodash/prefer-invoke-map': WARN,
    'lodash/prefer-is-nil': WARN,
    'lodash/prefer-lodash-chain': WARN,
    'lodash/prefer-lodash-method': WARN,
    'lodash/prefer-lodash-typecheck': WARN,
    'lodash/prefer-map': WARN,
    'lodash/prefer-matches': WARN,
    'lodash/prefer-noop': WARN,
    'lodash/prefer-over-quantifier': WARN,
    'lodash/prefer-reject': WARN,
    'lodash/prefer-some': WARN,
    'lodash/prefer-startswith': WARN,
    'lodash/prefer-thru': WARN,
    'lodash/prefer-times': WARN,
    'lodash/prefer-wrapper-method': WARN,
    'lodash/preferred-alias': WARN,
    'lodash/prop-shorthand': WARN,
    'lodash/unwrap': WARN,
  },
};