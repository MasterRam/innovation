var watch = require('node-watch');
const fs = require('fs');
var copydir = require('copy-dir');
const compile = require('./compile.js');
watch('./lib', { recursive: true }, function (evt, name) {
  if (evt === 'remove') {
    remove(name);
  }
  if (evt === 'update') {
    update(name);
  }
  copydir('./lib/views', './dist/views', err => {
    if (err) throw err;
    console.log('www was copied to www');
  });
  console.log('=========================================');
  console.log('%s changed.', name);
  console.log('=========================================');
});

function remove(file) {

  const destination = file.replace(/lib/gi, `dist`);
  fs.exists(destination, function (exists) {
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
  const folder = destination.substr(0, (destination.lastIndexOf('\\')));
  const copyFile = err => {
    if (err) throw err;
    console.log('*.ejs was copied to dist...*.ejs');
  }
  console.log(folder + " Exists ?");
  fs.exists(folder, (exists) => {
    console.log(folder + " Exists " + exists);
    if (exists) {
      fs.copyFile(name, destination, copyFile);
    }
    else {
      fs.mkdir(folder, err => {
        if (!err) {
          fs.copyFile(name, destination, copyFile);
        }
      })
    }
  });
}

