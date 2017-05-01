const component = require('./component');
const duck = require('./duck');
const {capitalize, getOpts} = require('../../utils');

module.exports = (argv) => {

  const type = argv[1];
  const name = argv[2];
  const options = getOpts(argv);

  if (!name) {
    console.log(`${capitalize(type)} "name" is required`);
    return;
  }

  switch (type) {

    case 'component':
      component('component', name, options);
      break;
    case 'components':
      argv.slice(2)
        .filter(name => name[0] !== '-')
        .forEach(name => component('component', name, options));
      break;

    case 'page':
      component('page', name, options);
      break;
    case 'pages':
      argv.slice(2)
        .filter(name => name[0] !== '-')
        .forEach(name => component('page', name, options));
      break;

    case 'duck':
      duck(name);
      break;

    default:
      console.log(`What is a "${type}"?`);
  }

};
