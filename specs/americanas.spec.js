describe('Americanas', function () {
    it('Buscar por um produto existente', function () {
        //browser.waitForAngularEnabled(false);
        //browser.driver.manage().window().maximize();
        browser.ignoreSynchronization = true;
        browser.get('http://www.americanas.com');
        element(by.id('h_search-input')).sendKeys('ps4');
        element(by.id('h_search-btn')).click();
        //expect(element(by.css('h1.page-title')).getText()).toContain('ps4');
        expect(element(by.css('h1.page-title')).getText()).toBe('ps4');
    });
});