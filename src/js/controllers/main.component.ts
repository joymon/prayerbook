import  GAAPIService from "../services/GAAPI";
import { IHttpService } from "angular";

export module PrayerModule {
  export class MainController implements ng.IController {
    static $inject = ["$http", "GAAPI"];
    constructor($http: IHttpService, contentServie: GAAPIService) {
    }
    public content: string;
    public version: string;
  }
  export class MainComponent implements ng.IComponentOptions {
    public templateUrl: string;
    public controller: any;
    constructor() {
      this.templateUrl = "./prayers.component.html";
      this.controller = MainController;
    }
  }
  //ngMod.AdvModule.AppModule.getInstance().registerComponent("sample",new MainComponent());
}
