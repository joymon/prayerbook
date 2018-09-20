var pack = require('../package');
var fs = require('fs');

fs.writeFile("src/views/version.html", pack.version, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The version is patched");
});

if (fs.existsSync("./src/js/app.js")) {
    console.log("Exists js");
}
if (fs.existsSync("./src/JS/app.js")) {
    console.log("Exists JS");
}
