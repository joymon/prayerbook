describe("GAAPITest", function() {
  var httpBackend, GAAPI;
  beforeEach(module("prayerBook"));
  beforeEach(inject(function(_GAAPI_, $http) {
    httpBackend = $http;
    GAAPI = _GAAPI_;
  }));
  it("Should return API data when GAAPI is called", function() {
    var result = 0;
    GAAPI.getPageViews().then(data => {
      console.log("Should return API data when GAAPI is called : " + GAAPI);
      expect(data).toBeTruthy(result);
    });
    
  });
  it("Should return > 0 result when GAAPI is called", function() {
    GAAPI.getPageViews().then(response => {
      console.log(
        "Should return > 0 result when GAAPI is called. value" +
          response.data.rows[0][0]
      );
      expect(response.data.rows[0][0]).toBeGreaterThan(0);
    });
  });
});