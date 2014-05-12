define(['world'], function(world){

	function init () {
		console.log('hello '+world.init());
	}

	return {
		init: init
	}

});