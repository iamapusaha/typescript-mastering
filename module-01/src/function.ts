function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(2, 3);

const add2 = (num1: number, num2: number): number => num1 + num2;

const richUser = {
  name: "akash",
  age: 29,
  balance: 89,
  addBalance(balance: number): string {
    return `This is my last bank blance ${balance + this.balance}`;
  },
};
const ful = richUser.addBalance(2566);
console.log(ful);

const arr: number[] = [10, 20, 30, 40, 50];

const newArray: number[] = arr.map((e: number): number => e * e);
console.log(newArray);
