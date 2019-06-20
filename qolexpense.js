describe("Create Quality of Life (QOL) Expense", function () {
    // Create Quality of Life (QOL) Expense
    it('Should be able to create QOL Expense', function () {
        browser.driver.findElement(By.xpath("//a[contains(text(),'Expenses')]")).click();
        browser.waitForAngular();
        browser.driver.findElement(By.xpath("//a[contains(text(),'My Personal Expenses')]")).click();
        browser.waitForAngular();
        browser.driver.findElement(By.xpath("//a[contains(text(),'Create New Quality of Life Reimbursement')]")).click();
        browser.waitForAngular();
        element(by.xpath("//div[@id='wrapper']/div/form/div/div[2]/div/span/span/span[2]/span")).click();
        browser.waitForAngular();
        element(by.xpath("//ul[@id='ExpenseCodeId_listbox']/li[3]")).click();
        browser.waitForAngular();
        element(by.id("Description")).click();
        browser.waitForAngular();
        element(by.name("Description")).sendKeys("Automated description message for Quality of Life Reimbursement");
        browser.waitForAngular();
        element(by.css(".k-numerictextbox")).click();
        browser.waitForAngular();
        element(by.id("UnitPrice")).sendKeys('850');
        browser.waitForAngular();
        element(by.xpath("//div[@id='wrapper']/div/form/div/div[5]/div/span/span/span[2]/span")).click();
        browser.waitForAngular();
        element(by.xpath("//ul[@id='CurrencyId_listbox']/li[12]")).click();
        browser.waitForAngular();
        element(by.id("Comments")).click();
        browser.waitForAngular();
        element(by.name("Comments")).sendKeys("Automated comments message");
        browser.waitForAngular();
        element(by.name("submitButton")).click();
        browser.waitForAngular();
    });

});

