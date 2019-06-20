var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	//Capabilities to be passed to the webdriver instance.
	  capabilities: {
	    'browserName': 'chrome',
	    chromeOptions: {
			// args:["--headless", "--disable-gpu", "window-size=1920, 1080", "--disable-browser-side-navigation"]
			args: ['--disable-gpu', '--no-sandbox', '--disable-extensions', '--disable-dev-shm-usage']
	    	}
	  },
	specs: ['portal.js', 'login.js', 'pexpense.js', 'normalprocurement.js', 'logistics.js', 'crearteinvoice,js'
	],

	onPrepare: function() {
		browser.driver.manage().window().maximize();
	    // Add a screenshot reporter and store screenshots to `/reports/screenshots`:
	    jasmine.getEnv().addReporter(new HtmlReporter({
	       baseDirectory: 'Reports/screenshots'
	    }).getJasmine2Reporter());
	    browser.driver.manage().timeouts().implicitlyWait(60000);
	 }
	
};