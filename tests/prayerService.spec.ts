import * as angular from "angular";
import "angular-mocks";
describe("PrayerServiceTest", function() {
  var httpBackend, prayerService;
  beforeEach(angular.mock.module("prayerBook"));
  beforeEach(inject(function(_PrayerService_, $http) {
    httpBackend = $http;
    prayerService = _PrayerService_;
  }));
  it("Prayerservice should not be undefined", function() {
    expect(prayerService).toBeTruthy();
  });
  
//   it("Prayerservice should have GetPrayers", function() {
//     expect(prayerService.GerPrayers).toBeTruthy();
//   });
//   it("Should return Prayer data when PrayerService is called", function() {
//     var result = 0;
//     prayerService.GerPrayers().then(data => {
//       expect(prayerService).toBeTruthy(result);
//     });
//     console.log(
//       "Should return API data when GAAPI is called : " + prayerService
//     );
//   });
//   it("Should return > 0 result when GAAPI is called", function() {
//     var result = 0;
//     prayerService.GerPrayers().then(response => {
//       console.log(
//         "Should return > 0 result when GAAPI is called. value" +
//           response.data.rows[0][0]
//       );
//       expect(response.data.rows[0][0]).toBeGreaterThan(0);
//     });
//   });
});
