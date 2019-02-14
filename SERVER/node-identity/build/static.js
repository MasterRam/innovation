const fs = require('fs');

// destination.txt will be created or overwritten by default.
fs.copyFile('../lib/**/*.ejs', '../dist/**/*.ejs', err => {
  if (err) throw err;
  console.log('*.ejs was copied to dist...*.ejs');
});
fs.copyFile('../lib/bin/www', '../dist/bin/www', err => {
  if (err) throw err;
  console.log('www was copied to www');
});
