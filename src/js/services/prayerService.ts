import { IHttpService, IPromise, IHttpResponse } from "angular";
import { PrayerBook } from "../controllers/prayer";

export default class PrayerService {
  static $inject = ["$http"];
  http: ng.IHttpService;
  constructor($http: IHttpService) {
    this.http = $http;
  }
  GetPrayers(): IPromise<IHttpResponse<PrayerBook.Prayer>> {
    return this.http.get<PrayerBook.Prayer>("");
  }
}
