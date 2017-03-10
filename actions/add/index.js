const component = require('./component');
const reduxModule = require('./reduxModule');
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
    case 'container':
      component('container', name, options);
      break;
    // case 'reduxModule':
      // reduxModule(argv);
      // break;
    default:
      console.log(`What is a "${type}"?`);
  }

};
