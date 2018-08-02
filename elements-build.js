const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/elements-survey/runtime.js',
    './dist/elements-survey/polyfills.js',
    './dist/elements-survey/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/framework-poll.js');
  await fs.copyFile('./dist/elements-survey/styles.css', 'elements/styles.css');
  await fs.copy('./dist/elements-survey/assets/', 'elements/assets/');
})();
