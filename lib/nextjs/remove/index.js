const component = require('./component');

module.exports = (argv) => {

  const type = argv[1];
  const name = argv[2];

  if (!name) {
    console.log(`${type} "name" is required`);
    return;
  }

  switch (type) {

    case 'component':
      component('component', name);
      break;
    case 'components':
      argv.slice(2)
        .filter(name => name[0] !== '-')
        .forEach(name => component('component', name));
      break;

    case 'container':
      component('container', name);
      break;
    case 'containers':
      argv.slice(2)
        .filter(name => name[0] !== '-')
        .forEach(name => component('container', name));
      break;

    default:
      console.log(`What is a "${type}"?`);
  }

};
