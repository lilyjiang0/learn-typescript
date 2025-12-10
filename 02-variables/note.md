## Basic Types
- boolean
- number (integer and floating point numbers)
- string (enclosed in single or double quotes)
- any (support any datatype)

## Define Variables
let <variableName>: <type> = <initial value>;

## Template Strings
'console.log(`Hi ${variableName} ${variableName}`)'

## Note
Even it encounters errors during compile, by default, tsc will still generate a .js file.

Prevent this with a compiler flag
'tsc -noEmitOnError sample-types.ts'