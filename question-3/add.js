const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'Logs');

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

process.chdir(dir);

for (let i = 0; i < 10; i++) {
  const name = 'log' + i + '.txt';
  fs.writeFileSync(name, 'Log file ' + i);
  console.log(name);
}