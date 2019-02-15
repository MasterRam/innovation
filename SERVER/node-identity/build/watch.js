var watch = require('node-watch');
const fs = require('fs');
const compile = require('./compile.js');
watch('./lib', { recursive: true }, function(evt, name) {
  if (evt === 'remove') {
    remove(name);
  }
  if (evt === 'update') {
    update(name);
  }
  console.log('=========================================');
  console.log('%s changed.', name);
  console.log('=========================================');
});

function remove(file) {
  const destination = file.replace(/lib/gi, 'dist');
  fs.exists(destination, function(exists) {
    if (exists) {
      //Show in green
      console.log('File [%s] exists. Deleting now ...', destination);
      fs.unlink(destination, () => {
        console.log('File [%s]. Deleted ...', destination);
      });
    } else {
      //Show in red
      console.log('File [%s] not found, so not deleting.', destination);
    }
  });
}

function update(name = '') {
  if (name.endsWith('.ts')) {
    compile.compile('tsconfig.json');
    return;
  }
  if (!name.endsWith('.ejs') && !name.endsWith('www')) {
    return;
  }
  const destination = name.replace(/lib/gi, 'dist');
  console.log('Destination : ' + destination);
  fs.copyFile(name, destination, err => {
    if (err) throw err;
    console.log('*.ejs was copied to dist...*.ejs');
  });
}
