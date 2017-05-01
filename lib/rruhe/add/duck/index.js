const fs = require('fs');
const {buildImportEntry} = require('../../../utils');
const Parser = require('../../../parser');
const fixture = fs.readFileSync(`${__dirname}/fixture`, {encoding: 'utf-8'});
const {EOL} = require('os');

module.exports = (name) => {
  var file, matches, pos;

  dest = `./src/redux/modules/${name}.js`;
  exists = fs.existsSync(dest);
  if (exists) {
    console.log(`Redux duck named "${name}" already exists.`);
    return;
  }

  // Add duck file.
  parser = new Parser(fixture, {name});
  file = parser
    .parse()
    .trimNewLines()
    .getFile();
  fs.writeFileSync(dest, file);
  console.log(`added ${dest}`);

  // Register duck in reducer file.
  dest = `./src/redux/modules/reducer.js`;
  file = fs.readFileSync(dest, {encoding: 'utf-8'});
  if (!dest) {
    console.log(`Reducer file not found`);
    return;
  }
  // add import entry.
  matches = file.match(/import.*\n\n/);
  pos = matches.index + matches[0].length;
  entry = buildImportEntry(name);
  file = file.slice(0, pos) + entry + file.slice(pos);
  // add export entry.
  matches = file.match(/export\sdefault.*\n/);
  pos = matches.index + matches[0].length;
  entry = `  ${name},${EOL}`
  file = file.slice(0, pos) + entry + file.slice(pos);
  fs.writeFileSync(dest, file);
  console.log(`Updated reducer file`);

}
