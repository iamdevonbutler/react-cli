const fs = require('fs');
const {capitalize, buildExportEntry} = require('../../../utils');
const Parser = require('../../../parser');
const fixture = fs.readFileSync(`${__dirname}/fixture`, {encoding: 'utf-8'});
const {EOL} = require('os');

module.exports = (type, name, options) => {
  var exists, dest, parser, file, string;

  dest = `./src/${type}s/${capitalize(name)}`;
  exists = fs.existsSync(dest);
  if (exists) {
    console.log(`${capitalize(type)} "${name}" already exists.`);
    return;
  }

  // Make file dir.
  fs.mkdirSync(dest);
  console.log(`Created ${type} "${capitalize(name)}"`);

  // Write js file.
  dest = `./src/${type}s/${capitalize(name)}/${capitalize(name)}.js`;
  parser = new Parser(fixture, {name: capitalize(name)}, options);
  file = parser
    .parse()
    .trimNewLines()
    .getFile();
  fs.writeFileSync(dest, file);
  console.log(`added ${name}.js`);

  // Add export entry to index.js
  dest = `./src/${type}s/index.js`;
  string = buildExportEntry(name);
  fs.appendFileSync(dest, string);

  if (options.scss) {
    dest = `./src/${type}s/${capitalize(name)}/${capitalize(name)}.scss`;
    fs.writeFileSync(dest, '');
    console.log(`added ${name}.scss`);
  }

}
