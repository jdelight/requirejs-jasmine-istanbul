define([
	'world'
], function(
	world
) {

	function init() {
		return 'hello ' + world.init();
	}

	function conditional(pred) {
		if (pred) {
			return 'a';
		}
	}

	return {
		init: init,
		conditional: conditional
	}

});