var origFn = browser.driver.controlFlow().execute;

browser.driver.controlFlow().execute = function () {
    var args = arguments;
    // queue 100ms wait
    origFn.call(browser.driver.controlFlow(), function () {
        return protractor.promise.delayed(200);
    });
    return origFn.apply(browser.driver.controlFlow(), args);
};

describe("Back Office Portal Access (User)", function () {
    // Access the procurement page
    it('should access portal page', function () {
        browser.waitForAngularEnabled(false);
        browser.get("https://oaffinance-oaffinanceqa.azurewebsites.net/");
        browser.waitForAngular();
        expect(browser.getTitle()).toEqual('Home Page - One Acre Fund Back Office Portal');
    });
});