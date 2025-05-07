{
  const getSpeedInMeterPerSec = (value: unknown) => {
    if (typeof value === "number") {
      const theConvertedResult = (value * 1000) / 3600;
      console.log(`this value is ${theConvertedResult} ms^-1`);
    } else if (typeof value === "string") {
      const [data, unit] = value.split(" ");
      const theConvertedValue = (parseInt(data) * 1000) / 3600;
      console.log(theConvertedValue);
    } else {
      console.log("this value is unknown");
    }
  };

  getSpeedInMeterPerSec(null);
}
