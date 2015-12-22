describe('Sample', function () {

    var httpBackend, GAAPI;
    beforeEach(module("prayerBook"));
    beforeEach(inject(function (_GAAPI_, $http) {
        httpBackend = $http;
        GAAPI = _GAAPI_;
    }));
    it('Hello test', function () {
        expect('test').toBe('test');
        console.log('Sample-Hello test : ' + 'Worked')
    });
    it("should return API data when GAAPI is called", function () {
        var result = 0;
        expect(GAAPI.pageviews).toBe(result);
    });
});