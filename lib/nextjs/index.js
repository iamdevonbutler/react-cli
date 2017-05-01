const add = require('./add');
const remove = require('./remove');
const rename = require('./rename');

module.exports = function(argv, config) {
  const action = argv[0];
  switch (action) {
    case 'add':
      add(argv);
      break;
    case 'remove':
      remove(argv);
      break;
    case 'rename':
      rename(argv);
      break;
    default:
      console.log('Wrong command kid.');
  }
};
