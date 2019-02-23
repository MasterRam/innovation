const del = require('del');

del(['dist.test']).then(paths => {
    console.log('----------------------------------------');
    console.log("Deleted " + paths.length + " temp files (.js,.js.map).");
    console.log('----------------------------------------');
});
