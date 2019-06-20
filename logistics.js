describe("Create Logistic Request", function(){
    // Setting out the time out
    var originalTimeout;
    beforeEach(function () {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });
    afterEach(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
    //Create Logistic Request
    it('Should be able to create logistics request', function(){
        browser.driver.findElement(By.xpath("//a[contains(text(),'Logistics')]")).click();
        browser.waitForAngular();
        browser.driver.findElement(By.xpath("//a[contains(@href, '#/createNewRequest')]")).click();
        browser.waitForAngular();
        element(by.id("description")).click();
        browser.waitForAngular();
        element(by.name("description")).sendKeys("Automated description message for logistic request");
        browser.waitForAngular();
        element(by.id("requesterPhoneNumber")).click();
        browser.waitForAngular();
        element(by.name("requesterPhoneNumber")).sendKeys("0722000000");
        browser.waitForAngular();
        //Location, Dept, Warehouse
        element(by.id("deliveryInstructions")).click();
        browser.waitForAngular();
        element(by.name("deliveryInstructions")).sendKeys("Automated delivery instruction");
        browser.waitForAngular();
        //Project name
        element(by.id("receiverPhoneNumber")).click();
        browser.waitForAngular();
        element(by.name("receiverPhoneNumber")).sendKeys("0733000000");
        browser.waitForAngular();
        //Date Picker
        
    });
});