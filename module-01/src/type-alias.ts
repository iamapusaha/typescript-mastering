{
  type Person = {
    name: string;
    age: string;
    position: string;
    batch: number;
    joiningDate: number;
  };
  const person: Person = {
    name: "mokbul",
    age: "27",
    position: "jr software enginer",
    batch: 985,
    joiningDate: 27 - 12 - 26,
  };
  const person1: Person = {
    name: "mokbul",
    age: "27",
    position: "jr software enginer",
    batch: 985,
    joiningDate: 27 - 12 - 26,
  };
  const person3: Person = {
    name: "mokbul",
    age: "27",
    position: "jr software enginer",
    batch: 985,
    joiningDate: 27 - 12 - 26,
  };
  type Add = (num1: number, num2: number) => number;

  const add: Add = (num1, num2) => num1 * num2;
}
