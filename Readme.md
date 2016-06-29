
# birthstone [![Build Status](https://travis-ci.org/ekimng/birthstone.svg?branch=master)](https://travis-ci.org/ekimng/birthstone) [![Coverage Status](https://coveralls.io/repos/github/ekimng/birthstone/badge.svg?branch=master)](https://coveralls.io/github/ekimng/birthstone?branch=master)

  Determine the birthstone(s) from the given month (according to AGTA).

# Installation

```bash
$ npm install birthstone
```

# Example

To get the birthstone(s) for the given month (zero-based value (where zero indicates the first month of the year)):

```js
var birthstone = require('birthstone');

birthstone();
//=> ["Garnet"] (The birthstone of the current month (assuming the current month is January)) 

birthstone(0);
//=> ["Garnet"] (January birthstone)

birthstone(11);
//=> ["Turquoise", "Zircon", "Tanzanite"] (December birthstone)

birthstone(12);
//=> Error 
```

## License

The MIT License (MIT)

Copyright (c) 2016 Mike Ng <ekimng@outlook.com> 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
