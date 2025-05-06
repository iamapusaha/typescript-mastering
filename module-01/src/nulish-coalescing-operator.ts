const isAuthorized = null;
const result = isAuthorized ?? "guest";
const result1 = isAuthorized ? isAuthorized : "guest";
console.log({ result, result1 });
