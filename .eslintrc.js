// .eslintrc.js
module.exports = {
    extends: ['next', 'next/core-web-vitals'],
    rules: {
      // Disable the rule for unescaped entities in JSX
      'react/no-unescaped-entities': 'off',
      
      // Alternative: Only disable the rule for specific characters
      /*
      'react/no-unescaped-entities': [
        'error',
        {
          forbid: [
            {
              char: '>',
              alternatives: ['&gt;']
            },
            {
              char: '}',
              alternatives: ['&#125;']
            }
          ]
        }
      ],
      */
      
      // You might also want to add these common rules
      '@typescript-eslint/no-unused-vars': ['warn'],
      'react/prop-types': 'off',
    }
  };