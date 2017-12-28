# Magique
Magique is a dead-simple, highly-readable way to write HTML in JavaScript. It's particularly designed for templating, so if you find yourself writing a lot of wrapping tags (like `<b>` and `<i>`) around strings, you'll find this package useful.

## Example
```ts
import { b, i } from 'magique';

b('hello') // yields <strong>hello</strong>
i('hello') // yields <em>hello</em>
```

## Usage
### TypeScript/ES6
```ts
import { bold } from 'magique';
bold('hello');

/* OR */

import * as magique from 'magique';
magique.bold('hello');
```

### ES5
```js
var magique = require('magique');
magique.bold('hello');

/* OR */

var bold = require('magique').bold;
bold('hello');
```

## Supported Tags and Aliases
| Tag                                | Aliases          | Returns                                  | Usage                                          |
| ---------------------------------- | ---------------- | ---------------------------------------- | ---------------------------------------------- |
| `b`                                | `bold`, `strong` | `<strong>str</strong>`                   | b(str)                                         |
| `i`                                | `italic`, `em`   | `<em>str</em>`                           | i(str)                                         |
| `a`                                | `link`           | `<a>str</a>` or `<a href="href">str</a>` | a(str) OR a(str, href)                         |
| `br`                               | N/A              | `<br />`                                 | br()                                           |
| `hX`                               | `header`         | `<hX>str</hX>`                           | `h(level)(str)` where level is between 1 and 6 |
| `h1`, `h2`, `h3`, `h4`, `h5`, `h6` | N/A              | `<h1>str</h1>`                           | `h1(str)`                                      |
