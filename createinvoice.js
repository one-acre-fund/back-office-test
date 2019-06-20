describe("Create Incoice Request", function () {
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
    it('Should be able to create invoice request', function () {
        browser.driver.findElement(By.xpath("//a[contains(text(),'Payments')]")).click();
        browser.waitForAngular();
        browser.actions().mouseMove(element(By.xpath("//a[contains(.,'Invoices')]"))).perform();
        browser.waitForAngular();
        browser.driver.findElement(By.xpath("//a[contains(text(),'Create New Invoice')]")).click();
        browser.waitForAngular();
        element(By.xpath("//div[@id='wrapper']/div/form/div/div/div/div/span/span/span[2]/span")).click();
        browser.waitForAngular();
        element(by.xpath("//ul[@id='HeaderCountryId_listbox']/li[4]")).click();
        browser.waitForAngular();
        element(By.xpath("//div[@id='wrapper']/div/form/div/div/div[2]/div/span/span/span[2]/span")).click();
        browser.waitForAngular();
        element(by.xpath("//ul[@id='HeaderCurrencyId_listbox']/li[12]")).click();
        browser.waitForAngular();
        element(by.id("HeaderDescription")).click();
        browser.waitForAngular();
        element(by.name("HeaderDescription")).sendKeys("Automated description message for invoice request");
        // browser.waitForAngular();
        // element(by.xpath("//div[@id='wrapper']/div/form/div/div[2]/div/div/span/span/span/span")).click();
        // browser.waitForAngular();
        // element(by.xpath("//ul[@id='HeaderVendorId_listbox']/li")).click();
        browser.waitForAngular();
        element(by.xpath("//div[@id='wrapper']/div/form/div/div[2]/div[4]/div/span/span/span")).click();
        browser.waitForAngular();
        element(by.xpath("//ul[@id='HeaderVendorId_listbox']/li")).click();
        browser.waitForAngular();
        element(by.xpath("//div[@id='wrapper']/div/form/div/div[3]/div/div/span/span/span")).click();
        browser.waitForAngular();
        element(by.xpath("//ul[@id='HeaderDepartmentId_listbox']/li[20]")).click();
        browser.waitForAngular();
        element(by.xpath("//div[@id='wrapper']/div/form/div/div[3]/div[2]/div/span/span/span")).click();
        browser.waitForAngular();
        element(by.xpath("//ul[@id='HeaderLocationId_listbox']/li[4]")).click();
        browser.waitForAngular();
        element(by.xpath("//div[@id='projectHeaderDropDownList']/span/span/span")).click();
        browser.waitForAngular();
        element(by.xpath("//li[contains(.,'(none)')]")).click();
        browser.waitForAngular();
        element(by.name("submitButton")).click();
        browser.waitForAngular();
        browser.driver.findElement(By.xpath("//a[contains(text(),'Add New Line')]")).click();
        browser.waitForAngular();
        


        //To review from here

        // element(by.xpath("//td[@id='invoice_active_cell']/span/span/span[2]/span")).click();
        // browser.waitForAngular();
        // element(by.xpath("//ul[@id='ItemId_listbox']/li[46]")).click();
        // browser.waitForAngular();
        // element(by.id("Description")).click();
        // browser.waitForAngular();
        // element(by.name("Description")).sendKeys("Automated description message for personal expenses");
        // browser.waitForAngular();
        // element(by.id("Quantity")).click();
        // browser.waitForAngular();
        // element(by.name("Quantity")).sendKeys("50");
        // browser.waitForAngular();
        // element(by.id("UnitPrice")).click();
        // browser.waitForAngular();
        // element(by.name("UnitPrice")).sendKeys("5000");
        // browser.waitForAngular();
        // browser.driver.findElement(By.xpath("//a[contains(text(),'Installment Information')]")).click();
        // browser.waitForAngular();
        // browser.driver.findElement(By.xpath("//a[contains(text(),'Add Installment Line')]")).click();
        // browser.waitForAngular();
        // element(by.id("Percent")).click();
        // browser.waitForAngular();
        // element(by.name("Percent")).sendKeys("0.6");
        // browser.waitForAngular();
        // browser.driver.findElement(By.xpath("//a[contains(text(),'Attachments and Notes')]")).click();
        // browser.waitForAngular();
        // browser.driver.findElement(By.xpath("//a[contains(text(),'Add new record')]")).click();
        // browser.waitForAngular();
        // element(by.id("Note")).click();
        // browser.waitForAngular();
        // element(by.name("Note")).sendKeys("Automated description message for personal expenses");
        // browser.waitForAngular();
        // browser.driver.findElement(By.xpath("//a[contains(text(),'Save Note Changes')]")).click();
        // browser.waitForAngular();
        // browser.driver.findElement(By.xpath("//a[contains(text(),'Invoice History')]")).click();
        // browser.waitForAngular();
        // browser.driver.findElement(By.xpath("//a[contains(text(),'Submit Invoice')]")).click();
        // browser.waitForAngular();
        // element(By.xpath("//div[@id='submission']/div[2]/div/span/span/span")).click();
        // browser.waitForAngular();
        // element(by.xpath("//ul[@id='HeaderApproverId_listbox']/li")).click();
        // browser.waitForAngular();
        // element(by.name("submitButton")).click();
        // browser.waitForAngular();
    });

});