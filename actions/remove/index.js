const component = require('./component');
// const reduxModule = require('./reduxModule');

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
    case 'container':
      component('container', name);
      break;
    // case 'reduxModule':
      // reduxModule(argv);
      // break;
    default:
      console.log(`What is a "${type}"?`);
  }

};
