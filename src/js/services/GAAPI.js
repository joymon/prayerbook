function GAAPI($http) {
    //Below $http call never works as the origin is different. So need to use JSONP technique. Refer the script section in index.html page for details. 
    //There a script tag is added which points to the GASuperProxy url with a callback function at the end. It will trigger the below jsonpHandler method.
    //callGASuperProxy();
    function callGASuperProxy(){
        $http.get('https://gasuperproxyapi.appspot.com/query?id=ahFzfmdhc3VwZXJwcm94eWFwaXIVCxIIQXBpUXVlcnkYgICAgICAgAoM&callback=jsonpHandler')
        .success(function (e) {
            alert(e);
        });
    }   
    return { pageviews: pageviews };
}
var pageviews;
function jsonpHandler(e ){
    pageviews = e.totalsForAllResults["ga:pageviews"];
}