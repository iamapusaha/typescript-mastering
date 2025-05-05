// spread operator
const bros1: string[] = ["akash", "batas", "ghum"];
const bros2: string[] = ["hard work", "planer", "success"];

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
const totalFriendsList = {
  ...friends1,
  ...friends2,
};
console.log(totalFriendsList);
