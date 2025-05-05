"use strict";
// spread operator
const bros1 = ["akash", "batas", "ghum"];
const bros2 = ["hard work", "planer", "success"];
bros1.push(...bros2);
const friends1 = {
    ghora: "akash",
    valo: "badhon",
    krap: "autunu",
};
const friends2 = {
    kala: "kalu",
    dola: "niloy",
    pdh: "shuvo",
};
const totalFriendsList = Object.assign(Object.assign({}, friends1), friends2);
console.log(totalFriendsList);
