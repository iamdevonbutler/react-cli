const fs = require('fs');
const {capitalize, buildExportEntry} = require('../../../utils');
const Parser = require('../../../parser');
const fixture = fs.readFileSync(`${__dirname}/fixture`, {encoding: 'utf-8'});
const {EOL} = require('os');

module.exports = (type, name, options) => {
  var exists, dest, parser, file, string;

  dest = `./${type}s/${capitalize(name)}`;
  exists = fs.existsSync(dest);
  if (exists) {
    console.log(`${capitalize(type)} "${name}" already exists.`);
    return;
  }

  // Write js file.
  dest = `./${type}s/${capitalize(name)}.js`;
  options = Object.assign({}, options, {
    isPage: type === 'page',
    isComponent: type === 'component',
  });
  parser = new Parser(fixture, {name: capitalize(name)}, options);
  file = parser
    .parse()
    .trimNewLines()
    .getFile();
  fs.writeFileSync(dest, file);
  console.log(`added ${dest}`);

}
