{
  const user = {
    salar: "5k",
    exprencies: "10y",
    id: 89436,
    name: {
      firstName: "apu",
      middleName: "kumar",
      lastName: "saha",
    },
    goal: "biya kora",
  };

  const {
    salar,
    name: { firstName: nickName },
  } = user;
  console.log(salar, nickName);

  const myFriends: string[] = ["akash", "batas", "kajol", "mahti"];

  const [a, b, x, ...y] = myFriends;
  console.log(a, b, x, y);
}
