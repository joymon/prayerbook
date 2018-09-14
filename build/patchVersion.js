var pack = require('../package');
var fs = require('fs');

fs.writeFile("src/views/version.html", pack.version, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The version is patched");
});