import GAAPIService from "../services/GAAPI";
import { IHttpService, ui } from "angular";
import { IModalInstanceService } from "angular-ui-bootstrap";
export default class MainComponent implements ng.IComponentOptions {
  public templateUrl: string;
  public controller: any;
  constructor() {
    this.templateUrl = "./views/main.component.html";
    this.controller = MainController;
  }
}
export class MainController implements ng.IController {
  static $inject = ["$http", "$uibModal", "GAAPI"];
  constructor(
    $http: IHttpService,
    $modal: ui.bootstrap.IModalService,
    contentService: GAAPIService
  ) {
    this.gaAPI = contentService;
    this.isOnline = navigator.onLine;
    this.modal = $modal;
    this.gaAPI.getPageViews().then(response => {
      this.pageviews = response.data.rows[0][0];
    });
  }
  public pageviews: number;
  public version: string;
  public isOnline: boolean;
  gaAPI: GAAPIService;
  modal: ng.ui.bootstrap.IModalService;

  showCredits(): void {
    let modelSettings: ui.bootstrap.IModalSettings = {};
    modelSettings.component = "devcredits";
    //modelSettings.controller = "DevCreditsCtrl";
    modelSettings.animation = true;
    //modelSettings.templateUrl = "./views/modals/devCredits.html";
    //modelSettings.template = "<div><h1>I am modal</h1></div>"
    modelSettings.size = "lg";
    modelSettings.resolve = {};
    modelSettings.windowClass ='show';
    
    var modalInstance:IModalInstanceService = this.modal.open(modelSettings);
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

//ngMod.AdvModule.AppModule.getInstance().registerComponent("sample",new MainComponent());
