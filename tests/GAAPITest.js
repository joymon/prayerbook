describe('Sample', function () {

    var httpBackend, GAAPI;
    beforeEach(module("prayerBook"));
    beforeEach(inject(function (_GAAPI_, $http) {
        httpBackend = $http;
        GAAPI = _GAAPI_;
    }));
    it("Sould return API data when GAAPI is called", function () {
        var result = 0;
        
        expect(GAAPI.pageviews).toBe(result);
            console.log('Should return API data when GAAPI is called : ' + GAAPI.pageviews)
    });
});
