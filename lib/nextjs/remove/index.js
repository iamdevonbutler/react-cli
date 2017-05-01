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

    case 'page':
      component('page', name);
      break;
    case 'pages':
      argv.slice(2)
        .filter(name => name[0] !== '-')
        .forEach(name => component('page', name));
      break;

    default:
      console.log(`What is a "${type}"?`);
  }

};
