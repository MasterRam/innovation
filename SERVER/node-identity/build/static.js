const fs = require('fs');

// destination.txt will be created or overwritten by default.
var copydir = require('copy-dir');

copydir('./lib/views', './dist/views', err => {
  if (err) {
    console.log(err);
  } else {
    console.log('ok');
  }
});
// fs.copyFile('./lib/views', './dist/views', err => {
//   if (err) throw err;
//   console.log('*.ejs was copied to dist...*.ejs');
// });
copydir('./lib/bin', './dist/bin', err => {
  if (err) throw err;
  console.log('www was copied to www');
});
copydir('./lib/public', './dist/public', err => {
  if (err) throw err;
  console.log('www was copied to www');
});
