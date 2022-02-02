const Example = require("./Example");
//PRIMITIVE AND REFERENCE TYPES

///////////////////////////////////////////////////////////////

//primitives
//number, string, bool, null, undefined, symbol

const string = "data";
const number = 5;
const bool = true;
const error = null;
const res = undefined;
const sym = Symbol("hi");

///////////////////////////////////////////////////////////////

//Reference types
//anything of type object

//arrays
const array = [1, 2, 3, 4, 5];

//objects
const json = { name: "Nutcracko", id: 1234567, gender: "male" };
const FirstExample = new Example(9, "red");
console.log(FirstExample);

//functions
const newFunc = () => {
   console.log("Hello");
};
FirstExample.changeColor("blue");
console.log(FirstExample.color); //blue

//////////////////////////////////////////////////////////////

//creating a ref to a primitive value
let surname = "Lebron";
let refName = surname;

surname = "James";

console.log(surname); //James
console.log(refName); //Lebron

//////////////////////////////////////////////////////////////
//creating a ref to a ref value
let bmw = {
   type: "car",
   name: "116d",
};

let mercedes = bmw;

mercedes.name = "a180";

console.log(bmw.name); //a180
console.log(mercedes.name); //a180

//////////////////////////////////////////////////////////////

// === sign difference
//primitives
first = "hello";
second = "hello";
console.log(first === second); //true

//reference
const one = {
   type: "Car",
   color: "Blue",
};

const two = {
   type: "Car",
   color: "Blue",
};
console.log(one === two); //false

//RAM bolumleri nelerdir, hangileri developerlara aciktir
/* 
Internal memory =>small amounts of data that can be accessed quickly while the pc is running
and external memory => a storage device that can retain or store data persistently.

ROM and RAM => ROM is Read-Only Memory, mainly used for start or boot up a computer.
RAM is Random-Access Memory, temporarily stores data while the CPU is executing other tasks.

DRAM (Dynamic RAM) ve SRAM ( StaticRAM) 
DRAM is widely used as a computer's main memory. 
SRAM keeps data in the mmemory as long as power is supplied to the system unlike DRAM

Common DRAM types

Synchronous DRAM (SDRAM) syncs the memory speed with CPU clock speed.

Rambus DRAM (RDRAM) mainly used for video game devices and graphic cards

Double Data Rate SDRAM (DDR SDRAM) synchronous memory that nearly doubles the badwidth of a single SDRAM.

*/
