import { ElementFinder, browser, by, element } from 'protractor';
describe('PrayerBook homepage', function () { //Suite in Jasmine
    it('should open home page with title', function () {
        browser.get('http://localhost:8080');
        browser.getTitle().then(function (text) {
            expect(text).toEqual("കുടുംബ പ്രാര്‍ത്ഥന");
        });
    });
});
