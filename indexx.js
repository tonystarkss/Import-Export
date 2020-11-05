import { capitalizeString } from "./string_function"
const cap = capitalizeString("hello!");

console.log(cap);
// Import Example

const capitalizedString = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export { capitalizedString };

export const foo = "bar";
export const bar = "foo";
//Export Example

import * as stringFunction from "string_function";
//Import everything from a file *

export default function subtract(x,y) {return x - y;}
//Defualt export

import subtract from "string_function"

subtract(7,4);
//Import defualt export