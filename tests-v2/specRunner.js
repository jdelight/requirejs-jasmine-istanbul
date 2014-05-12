require.config({
	paths: {
		'hello': '../src-cov/hello',
		'world': '../src-cov/world',
	},
});

require(
	[
		"hello",
		"world",
		"spec/hello.test"
	],
	function() {

		console.log('ready to run tests...');

		console.log(jasmine);

		var jasmineEnv = jasmine.getEnv();
		jasmineEnv.updateInterval = 1000;

		var htmlReporter = new jasmineRequire.HtmlReporter();

		jasmineEnv.addReporter(htmlReporter);

		jasmineEnv.specFilter = function(spec) {
			return htmlReporter.specFilter(spec);
		};

		function execJasmine() {
			jasmineEnv.execute();
		}

		function sendCoverageData() {
			var res, req = new XMLHttpRequest();
			data = JSON.stringify(window.__coverage__);
			req.open('post', '/cov', false);
			res = req.send(data);
		}

		execJasmine();

		sendCoverageData();


	});