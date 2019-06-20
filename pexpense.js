describe("Create Normal Personal Expense", function () {
    // Setting out the time out
    var originalTimeout;
    beforeEach(function () {
        originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    });
    afterEach(function () {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });
    // Create Personal Expense
    it('Should be able to create normal personal expense', function () {
        browser.driver.findElement(By.xpath("//a[contains(text(),'Expenses')]")).click();
        browser.waitForAngular();
        browser.driver.findElement(By.xpath("//a[contains(text(),'My Personal Expenses')]")).click();
        browser.waitForAngular();
        browser.driver.findElement(By.xpath("//a[contains(text(),'Create New Personal Expense')]")).click();
        browser.waitForAngular();
        element(by.xpath("//div[@id='wrapper']/div/form/div/div[2]/div/span/span/span[2]/span")).click();
        browser.waitForAngular();
        element(by.xpath("//ul[@id='ExpenseCodeId_listbox']/li[3]")).click();
        browser.waitForAngular();
        element(by.id("Description")).click();
        browser.waitForAngular();
        element(by.name("Description")).sendKeys("Automated description message for personal expenses");
        browser.waitForAngular();
        // element(by.css(".k-numerictextbox")).click();
        element(by.xpath("//div[@id='wrapper']/div/form/div/div[4]/div/span/span/input")).click();
        browser.waitForAngular();
        element(by.id("Quantity")).sendKeys('5');
        browser.waitForAngular();
        element(by.xpath("//div[@id='wrapper']/div/form/div/div[5]/div/span/span/input")).click();
        browser.waitForAngular();
        element(by.id("UnitPrice")).sendKeys('980');
        browser.waitForAngular();
        //Selecting Approver
        element(by.xpath("//div[@id='wrapper']/div/form/div[2]/div/div/span/span/span")).click();
        browser.waitForAngular();
        element(by.xpath("//ul[@id='Approver_listbox']/li")).click();
        browser.waitForAngular();
        element(by.id("Comments")).click();
        browser.waitForAngular();
        element(by.name("Comments")).sendKeys("Automated comments message");
        browser.waitForAngular();
        element(by.xpath("//div[@id='projectCodeDropdown']/span/span/span")).click();
        browser.waitForAngular();
        element(by.xpath("//li[contains(.,'(none)')]")).click();
        browser.waitForAngular();
        element(by.xpath("//div[@id='locationDropdown']/span/span/span")).click();
        browser.waitForAngular();
        element(by.xpath("//li[contains(.,'Kenya Headquarters')]")).click();
        browser.waitForAngular();
        element(by.name("submitButton")).click();
        browser.waitForAngular();
    });

});