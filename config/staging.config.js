var config = {
	connection: process.env.MONGO_CONNECTION,
	options: { auto_reconnect: true },

	applicationUrl: 'https://app-stage.likeastore.com',
	siteUrl: 'https://stage.likeastore.com',

	// api keys
	services: {
		github: {
			appId: '47974c5d6fefbe07881e',
			appSecret: 'f1008ace415b3892bd36ef97443452a39dd7c29f'
		},

		twitter: {
			consumerKey: 'XDCQAahVo1EjhFqGoh5c2Q',
			consumerSecret: 'LppQuUU5FDTRwFJRwnlhfGj3IMDDTKmVCUm1JTHkA'
		},

		facebook: {
			appId: '554634024574376',
			appSecret: 'a8d2c5e643b67cdf80ed8b8832634b2c'
		},

		stackoverflow: {
			clientId: '1801',
			clientKey: 'L)KUpw85QEW105j43oik8g((',
			clientSecret: 'DadJ5kAh3YWlj0wv7EHqDg(('
		}
	},

	mandrill: {
		token: '2kXX0stV1Hf56y9DYZts3A'
	},

	logentries: {
		token: 'ee7930a7-7950-491f-b3aa-6657a928dbdb'
	},

	collector: {
		// scheduler cycle
		schedulerRestart: 1000,

		// after collector got to normal mode, next scheduled run in 15 mins
		nextNormalRunAfter: 1000 * 60 * 15,

		// after collector got to rateLimit mode, next scheduled run in hour
		nextRateLimitRunAfter: 1000 * 60 * 60,

		// initial mode quotes
		quotes: {
			facebook: {
				runAfter: 5000
			},

			github: {
				runAfter: 5000
			},

			gist: {
				runAfter: 5000
			},

			twitter: {
				runAfter: 60000
			},

			stackoverflow: {
				runAfter: 5000
			}
		},

		request: {
			timeout: 10000
		}
	}
};

module.exports = config;