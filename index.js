'use strict'

const loadScript = require('simple-load-script');

const main = (callback) => {
	return new Promise((resolve, reject) => {
		loadScript('https://www.gstatic.com/charts/loader.js')
			.then((ref) => {
				resolve('Google charts loader as been imported')
				return callback(null, ref)
			})
			.catch(() => {
				reject('something went wrong while importingGoogle charts loader')
				return callback('Google charts loader was not imported', null)
			})
	})
}

module.exports = main
