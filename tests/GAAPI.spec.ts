import * as angular from "angular";
import { IRootScopeService } from "angular";
import "angular-mocks";
import GAAPIService from "../src/js/services/GAAPI";

describe("GAAPITest", function() {
    var httpBackend;
    let GAAPIService: GAAPIService;

    beforeEach(angular.mock.module("prayerBook"));

    beforeEach(angular.mock.inject(function(GAAPI, _$http_,_$sce_) {
      console.log(`GAAPITest ${GAAPI}`)
      httpBackend = _$http_;
      GAAPIService = GAAPI;
    }));
    it("TS Should return API data when GAAPI is called", function() {
      var result = 0;
      GAAPIService.getPageViews().then(data => {
        console.log("Should return API data when GAAPI is called : " + GAAPIService);
        expect(data).toBeTruthy(result);
      });
    });
    it("TS Should return > 0 result when GAAPI is called", function() {
      GAAPIService.getPageViews().then(response => {
        console.log(
          "Should return > 0 result when GAAPI is called. value" +
            response.data
        );
        expect(response.data).toBeGreaterThan(0);
      });
    });
  });