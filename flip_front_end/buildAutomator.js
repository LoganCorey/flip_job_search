const fs = require("fs");

/**
 * Moves build files to django static and template folders
 */

// move html file to template
fs.rename("./build/index.html", "../Flip_Job_Search/templates/index.html", function(err) {
    console.log(err);
});
fs.rename("./build/favicon.ico", "../Flip_Job_Search/templates/favicon.ico", function(err) {
    console.log(err);
});


// move css and js, note: these folders must be non existent first
fs.rename("./build/static/css", "../Flip_Job_Search/flip/static/css", function(err) {
    console.log(err);
});
fs.rename("./build/static/js", "../Flip_Job_Search/flip/static/js", function(err) {
    console.log(err);
});
