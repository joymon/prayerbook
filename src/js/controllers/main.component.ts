import GAAPIService from "../services/GAAPI";
import { IHttpService, ui } from "angular";
import { IModalInstanceService } from "angular-ui-bootstrap";
import InternetMonitoringService from "../services/InternetMonitoringService"
export default class MainComponent implements ng.IComponentOptions {
  public templateUrl: string;
  public controller: any;
  constructor() {
    this.templateUrl = "./views/main.component.html";
    this.controller = MainController;
  }
}

export class MainController implements ng.IController {
  static $inject = ["$uibModal", "GAAPI","InternetMonitoringService"];
  constructor(
    private $modal: ui.bootstrap.IModalService,
    private GAAPI: GAAPIService,
    private internetMonitoringService:InternetMonitoringService
  ) {
    this.isOnline = this.internetMonitoringService.isConnected;
    this.GAAPI.getPageViews().then(response => {
      this.pageviews = response.data.rows[0][0];
    });
    this.internetMonitoringService.subscribe((isConnected)=>{
      this.isOnline = isConnected;
    });
  }
  public pageviews: number;
  public isOnline: boolean;

  showCredits(): void {
    let modelSettings: ui.bootstrap.IModalSettings = {};
    modelSettings.component = "devcredits";
    modelSettings.animation = true;
    modelSettings.size = "lg";
    modelSettings.resolve = {};
    modelSettings.windowClass ='show';
    
    var modalInstance:IModalInstanceService = this.$modal.open(modelSettings);
    modalInstance.rendered.then(()=>console.log(' modal redered'));
    modalInstance.opened.then((value)=>console.log(' modal opened'))
    modalInstance.result.then(
      selectedItem => {
        console.log("something selected");
      },
      reason => {
        console.log(`Error - ${reason}`);
      }
    );
  }
}