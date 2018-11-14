import { IHttpService, IHttpResponse, ISCEService } from "angular";
import PrayerService from "../services/prayerService";
import { PrayerBook } from "./prayer";
export namespace PrayerModule {
  export class PrayerController implements ng.IController {
    static $inject = ["PrayerService", "$http","$sce"];
    constructor(ps: PrayerService, $http: ng.IHttpService, $sce:ISCEService ) {
      this.prayerSvc = ps;
      this.http = $http;
      //this.prayerSvc.GetPrayers().on((d)=>{});
      this.sce = $sce;
      this.load();
    }
    public prayerSvc: PrayerService;
    public http: IHttpService;
    public prayers: Array<PrayerBook.Prayer> = [];
    public sce : ISCEService;
    load(): void {
      let myThis: PrayerController = this;
      this.http.get<PrayerBook.Prayer[]>("data/prayers.json").then(response => {
        var items: PrayerBook.Prayer[] = response.data;
        console.log(`[prayers.component] Obtained prayers ${items.length} from server`);
        items.forEach(
          function(prayer, index) {
            prayer.id = index;

            myThis.prayers.push({
              id: prayer.id,
              title: prayer.title,
              content: ""
            });
            this.downloadPrayerContent(prayer);
          }.bind(this)
        );
      });
    }
    downloadPrayerContent(prayer): void {
      var path = "data/" + prayer.path;
      let myThis: PrayerController = this;
      this.http.get<string>(path).then(function(response) {
        var prayervm = myThis.getPrayervmByIdFromScope(prayer.id);
        prayervm.content = response.data;
      });
    }
    getPrayervmByIdFromScope(id): PrayerBook.Prayer {
      var prayervm:PrayerBook.Prayer;
      this.prayers.forEach((value, key) => {
        if (value.id === id) {
          prayervm = value;
        }
      });
      return prayervm;
    }
    renderHTML(html):string {
      if (typeof html !== "string") {
        html = html.join("");
      }
      return this.sce.trustAsHtml(html);
    };
  }
  export class PrayerComponent implements ng.IComponentOptions {
    public templateUrl: string;
    public controller: any;
    constructor() {
      this.templateUrl = "./views/prayers.component.html";
      this.controller = PrayerController;
    }
  }
  //ngMod.AdvModule.AppModule.getInstance().registerComponent("sample",new MainComponent());
}
