const {capitalize} = require('../../utils');
const component = require('./component');
const fs = require('fs');
const fse = require('fs-extra');

module.exports = (argv) => {
  var dest, exists;
  const type = argv[1];
  const name = argv[2];

  if (!name) {
    console.log(`"name" is required`);
    return;
  }

  if (type !== 'container' || type != 'component') {
    console.log(`You can not remove type "${type}"`);
    return;
  }

  dest = `./src/${type}s/${name}`;
  exists = fs.existsSync(dest);
  if (!exists) {
    console.log(`${capitalize(type)} "${name}" does not exist.`);
    return;
  }

  fse.removeSync(dest);
  console.log(`Removed ${type} "${name}"`);

};
