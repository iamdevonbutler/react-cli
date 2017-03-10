const fs = require('fs');
const {getOpts, capitalize} = require('../../../utils');
const Parser = require('../../../parser');
const fixture = fs.readFileSync(`${__dirname}/fixture`, {encoding: 'utf-8'});

module.exports = (argv, type) => {
  var exists, rootDest, dest, parser, file;

  const name = argv[2];
  const options = getOpts(argv);

  rootDest = `./src/${type}s/${name}`;
  exists = fs.existsSync(rootDest);
  if (exists) {
    console.log(`${capitalize(type)} "${name}" already exists.`);
    return;
  }

  fs.mkdirSync(rootDest);
  console.log(`Created ${type} "${name}"`);

  dest = `${rootDest}/${capitalize(name)}.js`;
  parser = new Parser(fixture, {name: capitalize(name)}, options);
  file = parser
    .parse()
    .trimNewLines()
    .getFile();
  fs.writeFileSync(dest, file);
  console.log(`added ${name}.js`);

  if (options.scss) {
    dest = `${rootDest}/${capitalize(name)}.scss`;
    fs.writeFileSync(dest);
    console.log(`added ${name}.scss`);
  }

}
