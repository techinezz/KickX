const fs = require('fs');
const path = 'C:\\Users\\leom1\\OneDrive\\Desktop\\ecommerce\\shoes-ecommerce\\.next\\server\\app\\product\\[slug]\\page.js';

fs.lstat(path, (err: any, stats: { isSymbolicLink: () => any; }) => {
  if (err) {
    console.error(err);
    return;
  }

  if (stats.isSymbolicLink()) {
    console.log('The file is a symbolic link.');
  } else {
    console.log('The file is not a symbolic link.');
  }
});