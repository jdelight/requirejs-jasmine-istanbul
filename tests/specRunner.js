require.config({
	paths: {
		'hello': '../hello',
		'world': '../world',
	},
});

require(
	[
	"hello",
	"world",
	"spec/test"
	],
	function( ){

		console.log('ready to run tests...');

		console.log(jasmine);

		var jasmineEnv = jasmine.getEnv();
		jasmineEnv.updateInterval = 1000;

		var htmlReporter = new jasmine.HtmlReporter();

		jasmineEnv.addReporter(htmlReporter);

		jasmineEnv.specFilter = function(spec) {
			return htmlReporter.specFilter(spec);
		};

		var currentWindowOnload = window.onload;

			if (currentWindowOnload) {
				currentWindowOnload();
			}

		function execJasmine() {
			jasmineEnv.execute();
		}

		execJasmine();
	});