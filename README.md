# jspa <sup><sub>0.0.1</sub></sup>
### Javascript Persistence API

[![Greenkeeper badge](https://badges.greenkeeper.io/Download/jspa.svg)](https://greenkeeper.io/)

[![npm](https://img.shields.io/npm/v/jspa.svg)](https://npmjs.com/package/jspa)
[![license](https://img.shields.io/npm/l/jspa.svg)](https://creativecommons.org/licenses/by/4.0/)
[![travis](https://img.shields.io/travis/Download/jspa.svg)](https://travis-ci.org/Download/jspa)
[![greenkeeper](https://img.shields.io/david/Download/jspa.svg)](https://greenkeeper.io/)
![mind BLOWN](https://img.shields.io/badge/mind-BLOWN-ff69b4.svg)


## Install with NPM
```sh
npm install --save jspa
```

## Direct download
* [jspa.umd.js](https://cdn.rawgit.com/download/jspa/0.0.1/jspa.umd.js)
* [jspa.min.js](https://cdn.rawgit.com/download/jspa/0.0.1/jspa.min.js)


## Include in your app

### require
```js
var Entity = require('jspa').Entity
```

### import
```js
import { Entity } from 'jspa'
```

### AMD
```js
define(['jspa'], function(jspa){
  var Entity = jspa.Entity
});
```

### Script tag
```html
<script src="https://cdn.rawgit.com/download/jspa/0.0.1/jspa.min.js"></script>
<script>
  var Entity = jspa.Entity
</script>
```

## Usage

```js
import { Entity } from 'jspa'

@Entity
class Message {
  // ...
}
```

## Issues
Add an issue in this project's [issue tracker](https://github.com/download/jspa/issues)
to let me know of any problems you find, or questions you may have.

## Copyright
Copyright 2017 by [Stijn de Witt](https://StijnDeWitt.com). Some rights reserved.

## License
Licensed under the [Creative Commons Attribution 4.0 International (CC-BY-4.0)](https://creativecommons.org/licenses/by/4.0/) Open Source license.

