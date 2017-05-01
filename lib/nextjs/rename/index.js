const component = require('./component');
const {capitalize} = require('../../utils');

module.exports = (argv) => {

  const type = argv[1];
  const name1 = argv[2];
  const name2 = argv[3];

  if (!name1) {
    console.log(`${capitalize(type)} original "name" is required`);
    return;
  }

  if (!name2) {
    console.log(`${capitalize(type)} new "name" is required`);
    return;
  }

  switch (type) {
    case 'component':
      component('component', name1, name2);
      break;
    case 'container':
      component('container', name1, name2);
      break;
    default:
      console.log(`What is a "${type}"?`);
  }

};
