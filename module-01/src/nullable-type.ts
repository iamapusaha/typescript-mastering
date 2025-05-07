{
  const testing = (value: string | null) => {
    if (value) {
      console.log("serching");
    } else {
      console.log("noting to search");
    }
  };
  testing(null);
}
