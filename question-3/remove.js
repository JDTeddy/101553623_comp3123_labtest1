const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'Logs');

if (fs.existsSync(dir)) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    console.log('delete files...' + file);
    fs.unlinkSync(path.join(dir, file));
  }

  fs.rmdirSync(dir);
}