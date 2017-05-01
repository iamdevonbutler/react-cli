const fs = require('fs');
const {capitalize, buildExportEntry} = require('../../../utils');

module.exports = (type, name1, name2) => {
  var dest, dest2, file, exists, scssFileExists;

  dest = `./${type}s/${name2}`;
  exists = fs.existsSync(dest);
  if (exists) {
    console.log(`${capitalize(type)} "${name2}" already exists.`);
    return;
  }

  // Rename component class in js file.
  dest = `./${type}s/${capitalize(name1)}.js`;
  file = fs.readFileSync(dest, {encoding: 'utf-8'});
  let classLine = `class ${capitalize(name1)} extends Component`;
  let classLine1 = `class ${capitalize(name2)} extends Component`;
  file = file.replace(classLine, classLine1);
  fs.writeFileSync(dest, file);

  // Rename js file.
  dest = `./${type}s/${capitalize(name1)}.js`;
  dest2 = `./${type}s/${capitalize(name2)}.js`;
  fs.renameSync(dest, dest2);

  console.log(`Renamed ${type} from "${name1}" to "${name2}"`);
};
