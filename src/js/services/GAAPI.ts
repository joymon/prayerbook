export default function GAAPI($http,$sce) {
    //Below $http call never works as the origin is different. So need to use JSONP technique. Refer the script section in index.html page for details. 
    //There a script tag is added which points to the GASuperProxy url with a callback function at the end. It will trigger the below jsonpHandler method.
    this.getPageViews=function(){
        let url='https://gasuperproxyapi.appspot.com/query?id=ahFzfmdhc3VwZXJwcm94eWFwaXIVCxIIQXBpUXVlcnkYgICAgICAgAoM';
        $sce.trustAsResourceUrl(url);
        return $http.jsonp(url,{jsonpCallbackParam: 'callback'})
        // .success(function (e) {
        // });
    }   
}