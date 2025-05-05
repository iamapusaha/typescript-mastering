"use strict";
function add(num1, num2) {
    return num1 + num2;
}
add(2, 3);
const add2 = (num1, num2) => num1 + num2;
const richUser = {
    name: "akash",
    age: 29,
    balance: 89,
    addBalance(balance) {
        return `This is my last bank blance ${balance + this.balance}`;
    },
};
const ful = richUser.addBalance(2566);
console.log(ful);
const arr = [10, 20, 30, 40, 50];
const newArray = arr.map((e) => e * e);
console.log(newArray);
