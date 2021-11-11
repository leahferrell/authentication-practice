const path = require('path')

module.exports = {
	webpack: {
		alias: {
			'components': path.resolve(__dirname, 'src/components'),
			'services': path.resolve(__dirname, 'src/services'),
			'utils': path.resolve(__dirname, 'src/utils'),
			'views': path.resolve(__dirname, 'src/views')
		}
	},
	devServer: {
		proxy: {
			'/api': 'http://localhost:8080'
		}
	}
}
