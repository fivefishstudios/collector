var moment = require('moment');
var config = require('../../config');
var items = require('../db/items');
var networks = require('../db/networks');
var logger = require('../utils/logger');

function executor(state, connectors, callback) {
	var service = state.service;
	var connector = connectors[service];

	connector(state, connectorExecuted);

	function connectorExecuted(err, state, results) {
		if (err) {
			logger.error({message: 'connector execution failed', connector: service, state: state, error: err});
		}

		saveConnectorState(state, connectorStateSaved);

		function connectorStateSaved (err) {
			if (err) {
				logger.error({message: 'connector save state failed', connector: service, state: state, error: err});
			}

			saveConnectorResults(results, connectorResultsSaved);
		}

		function connectorResultsSaved (err) {
			if (err) {
				logger.error({message: 'connector save items failed', connector: service, state: state, error: err});
			}

			callback(null);
		}

		function saveConnectorState (state, callback) {
			if (state) {
				return networks.update(state, callback);
			}

			callback (null);
		}

		function saveConnectorResults(results, callback) {
			if (results) {
				return items.update(results, callback);
			}

			callback (null);
		}
	}
}

module.exports = executor;