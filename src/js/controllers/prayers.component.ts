import { IHttpService, IHttpResponse, ISCEService } from "angular";
import PrayerService from "../services/prayerService";
import { PrayerBook } from "./prayer";

  export class PrayerController implements ng.IController {
    static $inject = ["PrayerService", "$http","$sce"];
    public prayers: Array<PrayerBook.Prayer> = [];
    constructor(private prayerSvc: PrayerService, private http: IHttpService, private sce:ISCEService ) {
      this.load();
    }

    load(): void {
      let myThis: PrayerController = this;
      this.http.get<PrayerBook.Prayer[]>("data/prayers.json").then(response => {
        console.log(`[prayers.component] Obtained ${response.data.length} prayers from server. Getting content for individual prayers`);
        myThis.prayers =  response.data.map((value,index)=>{
          value.id = index;
          return value;
        });
        response.data.forEach(value=>{ myThis.downloadPrayerContent(value)});
      });
    }
    downloadPrayerContent(prayer): void {
      var path = "data/" + prayer.path;
      let myThis: PrayerController = this;
      this.http.get<string>(path).then(function(response) {
        prayer.content = response.data;
      });
    }
    renderHTML(html):string {
      if (html !== undefined && typeof html !== "string") {
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
