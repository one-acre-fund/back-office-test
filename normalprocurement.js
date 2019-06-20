describe("Create Normal Procurement Request", function () {
    // Setting out the time out
    var originalTimeout;
    beforeEach(function () {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });
    afterEach(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
    // Create Procurement Request
    it('Should be able to create normal procurement request', function () {
        browser.driver.findElement(By.xpath("//a[contains(text(),'Procurement')]")).click();
        browser.waitForAngular();
        browser.driver.findElement(By.xpath("//a[contains(text(),'Create new request')]")).click();
        browser.waitForAngular();
        element(by.xpath("//form[@id='create-request']/div/div[4]/div/span/span/span[2]/span")).click();
        browser.waitForAngular();
        element(by.xpath("//ul[@id='ItemId_listbox']/li[20]")).click();
        browser.waitForAngular();
        element(by.xpath("//form[@id='create-request']/div/div[5]/div/span/span/span[2]/span")).click();
        browser.waitForAngular();
        element(by.xpath("//li[contains(.,'KISII STORE')]")).click();
        browser.waitForAngular();
        element(by.id("Comments")).click();
        browser.waitForAngular();
        element(by.name("Comments")).sendKeys("Automated description message for Normal procurement request");
        browser.waitForAngular();
        element(by.xpath("//form[@id='create-request']/div/div[8]/div/span/span/input")).click();
        browser.waitForAngular();
        element(by.id("Quantity")).sendKeys('850');
        browser.waitForAngular();
        element(by.xpath("//form[@id='create-request']/div[2]/div[2]/div/span/span/span")).click();
        browser.waitForAngular();
        element(by.xpath("//li[contains(.,'Kakamega post office')]")).click();
        browser.waitForAngular();
        element(by.xpath("//form[@id='create-request']/div[2]/div[3]/div/span/span/span")).click();
        browser.waitForAngular();
        element(by.xpath("//ul[@id='LocationId_listbox']/li[22]")).click();
        browser.waitForAngular();
        element(by.xpath("//form[@id='create-request']/div[2]/div[5]/div/span/span/span")).click();
        browser.waitForAngular();
        element(by.xpath("//li[contains(.,'(none)')]")).click();
        browser.waitForAngular();
        element(by.xpath("//form[@id='create-request']/div[2]/div[6]/div/span/span/span")).click();
        browser.waitForAngular();
        element(by.xpath("//li[contains(.,'General Need')]")).click();
        browser.waitForAngular();
        element(by.name("submitButton")).click();
        browser.waitForAngular();
    });

});