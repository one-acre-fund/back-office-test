describe("Back Office Portal Access (User)", function () {
    // Login to the procurement page
    it('Should be able to login to the portal', function () {
        browser.driver.findElement(By.xpath("//a[@href='/Account/Login']")).click();
        element(by.name("provider")).click();
        browser.waitForAngular();
        // Use your company email e.g janedoe@oneacrefund.org
        element(by.id("identifierId")).sendKeys("quality.assurance@oneacrefund.org");
        browser.waitForAngular();
        element(by.id("identifierNext")).click();
        browser.waitForAngular();
        //input here your password OAF_SOFTWARE_QA_TEAM
        element(by.name("password")).sendKeys("OAF_SOFTWARE_QA_TEAM");
        browser.waitForAngular();
        browser.driver.findElement($('#passwordNext').locator()).click();
        browser.waitForAngular();
    });
});