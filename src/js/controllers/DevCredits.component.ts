import { ui } from "angular";

export default class DevCreditsComponent implements ng.IComponentOptions {
  public templateUrl: string;
  public controller: any;
  public bindings:any
  constructor() {
    this.templateUrl = "./views/modals/devCredits.html";
    this.controller = DevCreditsController;
    this.bindings ={
      modalInstance :'<'
    }
  }
}
export class DevCreditsController implements ng.IController {
  private modalInstance: ng.ui.bootstrap.IModalInstanceService;
  public ok(): void {
    this.modalInstance.close();
  }

  public cancel(): void {
    this.modalInstance.dismiss();
  }
}
