// ECMA MODULES

import { simple } from "./node4a.mjs";
simple();
import  simple2 from "./node4a.mjs";
simple2();


// to import all things once use *
import  * as a2 from "./node4a.mjs";
console.log(a2.simple());