import { IPromise, IHttpResponse } from "angular";

export default class GAAPIService {
  static $inject = ["$http", "$sce"];
  http: ng.IHttpService;
  sce: any;
  constructor($http: ng.IHttpService, $sce: any) {
      this.http = $http,
      this.sce = $sce
  }
  getPageViews(): IPromise<IHttpResponse<{}>> {
    //Below $http call never works as the origin is different. So need to use JSONP technique. Refer the script section in index.html page for details.
    //There a script tag is added which points to the GASuperProxy url with a callback function at the end. It will trigger the below jsonpHandler method.

    let url =
      "https://gasuperproxyapi.appspot.com/query?id=ahFzfmdhc3VwZXJwcm94eWFwaXIVCxIIQXBpUXVlcnkYgICAgICAgAoM";
    this.sce.trustAsResourceUrl(url);
    return this.http.jsonp(url, { jsonpCallbackParam: "callback" });
    // .success(function (e) {
    // });
  }
}
