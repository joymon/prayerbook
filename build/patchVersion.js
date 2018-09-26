var pack = require('../package');
var fs = require('fs');
//Patch version for display
fs.writeFile("src/views/version.html", pack.version, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The version is patched");
});
//Patch version to service worker cache name
let swPath="src/service-worker.js";
fs.readFile(swPath, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    var result = data.replace(/v(\d+.)(\d+.)(\d+)/g, pack.version);
  
    fs.writeFile(swPath, result, 'utf8', function (err) {
       if (err) return console.log(err);
    });
  });