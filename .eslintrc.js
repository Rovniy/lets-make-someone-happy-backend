module.exports = {
	parser: 'babel-eslint',
	env: {
		node: true,
		es6: true,
		jest: true
	},
	extends: [
		'eslint:recommended'
	],
	parserOptions: {
		'ecmaVersion': 2020,
		'ecmaFeatures': {
			'experimentalObjectRestSpread': true
		}
	},
	globals: {
		_: false,
		'document': 'readonly',
		'navigator': 'readonly',
		'window': 'readonly',
	},
	rules: {
		'semi': [ 'warn', 'never' ],
		'quotes': [ 'warn', 'single' ],
		'indent': [ 'warn', 'tab', {
			'SwitchCase': 1
		}],
		'no-console': 'off',
		'no-prototype-builtins': 'off',
		'no-empty': [ 'warn', {
			'allowEmptyCatch': true
		}],
		'no-trailing-spaces': 'off',
		'no-case-declarations': 'off',
		'no-unused-vars': 'warn',
		'no-mixed-spaces-and-tabs': 'off',
		'object-curly-spacing': [ 'warn', 'always', {
			'arraysInObjects': true,
			'objectsInObjects': true
		}],
		'array-bracket-spacing': [ 'warn', 'always', {
			'singleValue': true,
			'objectsInArrays': false,
			'arraysInArrays': false
		}],
	}
}
