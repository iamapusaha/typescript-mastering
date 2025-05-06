{
  type User = {
    id: number;
    address: {
      presentAddress: string;
      parmanentAddress?: string;
    };
  };

  const user: User = {
    id: 8264,
    address: {
      presentAddress: "mowakhali, dhaka",
    },
  };
  const parmanentAddress =
    user?.address?.parmanentAddress ?? "no address found";
  console.log(parmanentAddress);
}
