function GAAPI($http) {
    //Below $http call never works as the origin is different. So need to use JSONP technique. Refer the script section in index.html page for details. 
    //There a script tag is added which points to the GASuperProxy url with a callback function at the end. It will trigger the below jsonpHandler method.
    //callGASuperProxy();
    function callGASuperProxy(){
        alert('call')
        // $http.get('https://gasuperproxyapi.appspot.com/query?id=ahFzfmdhc3VwZXJwcm94eWFwaXIVCxIIQXBpUXVlcnkYgICAgICAgAoM&callback=jsonpHandler')
        // .success(function (e) {
        // });
    }   
    return { pageviews: pageviews };
}
var pageviews=0;
//called from a <script>in index.html
function jsonpHandler(e ){
    pageviews = parseInt( e.totalsForAllResults["ga:pageviews"],10);
}