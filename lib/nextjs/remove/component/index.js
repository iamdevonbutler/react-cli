const {capitalize, buildExportEntry} = require('../../../utils');
const fs = require('fs');
const fse = require('fs-extra');
const {EOL} = require('os');

module.exports = (type, name) => {
  var dest, exists, file, string, index;

  dest = `./${type}s/${capitalize(name)}.js`;
  exists = fs.existsSync(dest);
  if (!exists) {
    console.log(`${capitalize(type)} "${name}" does not exist.`);
    return;
  }

  // Remove dir and contents.
  fse.removeSync(dest);
  console.log(`Removed ${type} "${name}"`);
};
