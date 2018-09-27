import { IHttpService } from "angular";

export default class PrayerService{
    static $inject =['$http']
    http: ng.IHttpService;
    constructor($http:IHttpService){
        this.http = $http;
    }
     GetPrayers():any {

    }
}