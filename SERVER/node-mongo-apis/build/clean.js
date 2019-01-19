const del = require('del');

del(['lib/**/*.js', 'lib/**/*.js.map', 'test/**/*.spec.js', 'test/**/*.spec.js.map']).then(paths => {
    console.log('----------------------------------------');
    console.log("Deleted " + paths.length + " temp files (.js,.js.map).");
    console.log('----------------------------------------');
});