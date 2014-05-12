define(['world'], function(world){

	function init () {
		return 'hello '+world.init();
	}

	return {
		init: init
	}

});