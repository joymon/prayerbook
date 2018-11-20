import { ui } from "angular";

export default class DevCreditsComponent {
  public templateUrl: string;
  public controller: any;
  constructor() {
    this.templateUrl = "./views/modals/devCredits.html";
    this.controller = DevCreditsController;
  }
}
export class DevCreditsController implements ng.IController {
  static $inject = ["$uibModalInstance"];
  public modalInstance: ui.bootstrap.IModalInstanceService;
  constructor($modalInstance: ui.bootstrap.IModalServiceInstance) {
    this.modalInstance = $modalInstance;
  }
  public ok(): void {
    this.modalInstance.close();
  }

  public cancel(): void {
    this.modalInstance.dismiss();
  }
}
