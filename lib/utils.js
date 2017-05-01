const {EOL} = require('os');

const self = module.exports;

self.getOpts = (argv) => {
  return argv
   .map(item => item[0] === '-' ? item.slice(1) : null)
   .filter(Boolean)
   .reduce((prev, current) => {
     prev[current] = true;
     return prev;
   }, {});
};

self.capitalize = (string) => {
  return string[0].toUpperCase() + string.slice(1);
};

self.buildExportEntry = (name) => {
  return `export ${self.capitalize(name)} from './${self.capitalize(name)}/${self.capitalize(name)}';${EOL}`;
};

self.buildImportEntry = (name) => {
  return `import ${name} from './${name}';${EOL}`;
};
