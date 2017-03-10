const fs = require('fs');
const {capitalize, buildExportEntry} = require('../../../utils');

module.exports = (type, name1, name2) => {
  var dest, dest2, file, exists, scssFileExists;

  dest = `./src/${type}s/${name2}`;
  exists = fs.existsSync(dest);
  if (exists) {
    console.log(`${capitalize(type)} "${name2}" already exists.`);
    return;
  }

  // Rename container/component in export entry.
  dest = `./src/${type}s/index.js`;
  file = fs.readFileSync(dest, {encoding: 'utf-8'});
  file = file.replace(buildExportEntry(name1), buildExportEntry(name2));
  fs.writeFileSync(dest, file);

  // scss stuff.
  dest = `./src/${type}s/${capitalize(name1)}/${capitalize(name1)}.scss`;
  scssFileExists = fs.existsSync(dest);
  if (scssFileExists) {
    // Rename scss file path in js file.
    dest = `./src/${type}s/${capitalize(name1)}/${capitalize(name1)}.js`;
    file = fs.readFileSync(dest, {encoding: 'utf-8'});
    let requireLine = `require('./${capitalize(name1)}.scss')`;
    let requireLine1 = `require('./${capitalize(name2)}.scss')`;
    file = file.replace(requireLine, requireLine1);
    fs.writeFileSync(dest, file);

    // Rename scss file.
    dest = `./src/${type}s/${capitalize(name1)}/${capitalize(name1)}.scss`;
    dest2 = `./src/${type}s/${capitalize(name1)}/${capitalize(name2)}.scss`;
    fs.renameSync(dest, dest2);
  }

  // Rename component class in js file.
  dest = `./src/${type}s/${capitalize(name1)}/${capitalize(name1)}.js`;
  file = fs.readFileSync(dest, {encoding: 'utf-8'});
  let classLine = `export default class ${capitalize(name1)}`;
  let classLine1 = `export default class ${capitalize(name2)}`;
  file = file.replace(classLine, classLine1);
  fs.writeFileSync(dest, file);

  // Rename js file.
  dest = `./src/${type}s/${capitalize(name1)}/${capitalize(name1)}.js`;
  dest2 = `./src/${type}s/${capitalize(name1)}/${capitalize(name2)}.js`;
  fs.renameSync(dest, dest2);

  // Rename dir
  dest = `./src/${type}s/${capitalize(name1)}`;
  dest2 = `./src/${type}s/${capitalize(name2)}`;
  fs.renameSync(dest, dest2);

  console.log(`Renamed ${type} from "${name1}" to "${name2}"`);
};
