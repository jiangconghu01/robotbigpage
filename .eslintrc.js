module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  'extends': [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/prettier"
  ],
  rules: {
    'eqeqeq': ['error', 'always'], // 强制使用三个等于号
    'no-undef':'warn',
    'semi': 0, // 语句可以不需要分号结尾
    'no-use-before-define': [1, 'nofunc'], // 未定义前不能使用
    'max-lines': ['error', { 'max': 6000, 'skipBlankLines': true }],
    'no-mixed-spaces-and-tabs': 'warn', // 禁止使用空格和tab混合缩进
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 1 }], // promise 以及 数组的链式操作需要另起一行
    'vue/attribute-hyphenation': ['error', 'always'], // prop变量使用破折号，而不是驼峰。这里做统一，不然以后全局修改prop有可能碰到要修改不全的情况
    'vue/html-indent': 0,
    'curly': 2, // 必须使用 if(){} 中的{}
    'vue/prop-name-casing': ['warn', 'camelCase'], //建议使用驼峰命名
    'vue/this-in-template': ['error', 'never'], //不允许在template里面使用this
    'no-trailing-spaces': 1, //一行结束后面不要有空格
    'vue/max-attributes-per-line': [ // template里面写的一行多少个prop属性,单行3个，多余3个的必须每行写一个prop，不然不容易看
      'warn',
      {
        singleline: 4,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'no-catch-shadow': 'error', //禁止catch子句参数与外部作用域变量同名
    'vue/v-bind-style': ['error', 'shorthand'], // 必须使用:来绑定
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn', // 只允许在开发环境中使用debugger
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'warn',
    'no-unused-vars': 0, // 禁止出现未使用过的变量
    'spaced-comment': 0, // 强制在注释中 // 或 /* 使用一致的空格
    'newline-per-chained-call':0
  },
  parserOptions: {
    ecmaVersion: 6,
    parser: 'babel-eslint'
  },
  plugins: ['vue']
}
