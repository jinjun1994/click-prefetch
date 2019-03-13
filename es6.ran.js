const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/es6.ran.js',
	// externals: 'lodash',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'es6-ran.js',
	}
}