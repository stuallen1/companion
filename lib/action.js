var system;
var debug   = require('debug')('lib/action');

function action(system) {
	var self = this;

	return self;
}

action.prototype.func = function () {
	var self = this;
};

exports = module.exports = function (system) {
	return new action(system);
};