var configValues = require('./config');


module.exports = {
	getDbConnectionString: () => `mongodb://${configValues.username}:${configValues.password}@ds143342.mlab.com:43342/guilfoyleanton`
}