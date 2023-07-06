module.exports = {
    extends: [
      'stylelint-config-standard-scss',
      'stylelint-config-recommended-vue'
    ],
    plugins: [
      'stylelint-order'
    ],
    overrides: [
      {
        files: ['**/*.(scss|css|html|vue)'],
        customSyntax: 'postcss-scss'
      },
      {
        files: ['**/*.(html|vue)'],
        customSyntax: 'postcss-html'
      }
    ],
    rules: {
      indentation: 4,
      'no-empty-source': null,
      'selector-class-pattern': '^(_[a-z]+\\-?[a-z]+?)*',
      'rule-empty-line-before': 'never',
      'color-function-notation': null,
      'no-descending-specificity': null
    }
}