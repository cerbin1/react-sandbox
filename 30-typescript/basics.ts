let age: number;
age = 12;

let userName: string;
userName = "John";

let isInstructor: boolean;
isInstructor = true;
// arrays
let hobbies: string[];
hobbies = ["Sports", "Cooking"];

// Type Aliases
type Person = {
  name: string;
  age: number;
};

// objects
let person: Person;
let people: Person[];

// Type inference
let course = "React - The Complete Guide"; // infer type - string

// Union types
let id: string | number;
id = 1;
id = "123";

// Functions & types
function add(a: number, b: number): number {
  return a + b;
}
function printValue(value: any): void {
  console.log(value);
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
const numberArray = insertAtBeginning([1, 2, 3], -1);
const stringArray = insertAtBeginning(["a", "b", "c"], "d");
// numberArray[0].split(""); // compilation error
stringArray[0].split("");
