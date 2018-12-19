const fs = require('fs');
const path = require('path');

let text = fs.readFileSync(	'cedict_ts.u8.txt','utf8');

console.log(text);