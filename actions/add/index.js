const component = require('./component');
const reduxModule = require('./reduxModule');

module.exports = (argv) => {

  const type = argv[1];

  switch (type) {
    case 'component':
      component(argv, 'component');
      break;
    case 'container':
      component(argv, 'container');
      break;
    case 'reduxModule':
      reduxModule(argv);
      break;
    default:
      console.log(`You can not add type "${type}"`);
  }

};
