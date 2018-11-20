import { IPromise, IHttpResponse } from "angular";
import { PrayerBook } from "./GAAPIResponse";

export default class GAAPIService {
  static $inject = ["$http", "$sce"];
  http: ng.IHttpService;
  sce: any;
  constructor($http: ng.IHttpService, $sce: any) {
      this.http = $http,
      this.sce = $sce
  }
  getPageViews(): IPromise<IHttpResponse<PrayerBook.GAAPIResponse>> {
    //Below $http call never works as the origin is different. So need to use JSONP technique. Refer the script section in index.html page for details.
    //There a script tag is added which points to the GASuperProxy url with a callback function at the end. It will trigger the below jsonpHandler method.

    let URL =
      "https://gasuperproxyapi.appspot.com/query?id=ahFzfmdhc3VwZXJwcm94eWFwaXIVCxIIQXBpUXVlcnkYgICAgICAgAoM";
    this.sce.trustAsResourceUrl(URL);
    return this.http.jsonp(URL, { jsonpCallbackParam: "callback" });
    // .success(function (e) {
    // });
  }
}
