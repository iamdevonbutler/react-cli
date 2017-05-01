# React Redux cli

CLI for common tasks when building apps w/ react and redux.

## Usage
`cd` into your app root.

Add a `rr-cli.config.js` file.

Run commands - e.g. rr add component NAME -scss

## rr-cli.config.js
```javascript
{
  "type": "next.js|rruhe",  
}
```


## Next.js usage (type === 'next.js')

### Commands

* add component (rr add component NAME)
* add page (rr add page NAME)
* remove component (rr remove component NAME)
* remove page (rr remove page NAME)
* rename component (rr rename component NAME)
* rename page (rr rename page NAME)
* add redux duck (rr add module NAME)


## React redux universal hot example usage (type === 'rruhe')

### Commands

* add component (rr add component NAME)
* add container (rr add container NAME)
* remove component (rr remove component NAME)
* remove container (rr remove container NAME)
* rename component (rr rename component NAME)
* rename container (rr rename container NAME)
* add redux duck (rr add module NAME)

### Options
* -scss
* -asyncConnect
* -connect
