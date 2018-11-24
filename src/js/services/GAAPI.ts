import { IPromise, IHttpResponse } from "angular";
import { PrayerBook } from "./GAAPIResponse";

export default class GAAPIService {
  constructor(private http: ng.IHttpService,private sce: any) {  }
  getPageViews(): IPromise<IHttpResponse<PrayerBook.GAAPIResponse>> {
    let URL =
      "https://gasuperproxyapi.appspot.com/query?id=ahFzfmdhc3VwZXJwcm94eWFwaXIVCxIIQXBpUXVlcnkYgICAgICAgAoM";
    this.sce.trustAsResourceUrl(URL);
    return this.http.jsonp(URL, { jsonpCallbackParam: "callback" });
  }
}
