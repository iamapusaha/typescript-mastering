const myName: string = "Apu Saha";
const PhoneNumber: number = 1751383056;
const isGf: boolean = false;
const x: undefined = undefined;
const y: null = null;

//any data type
let d: string;
// d = 45566;
d = "my ex";
// d = true;
// d = undefined;
// d = null;

const friends: string[] = ["apple", "komla", "angor"];
// friends.push(450);

const trueFalse = [true, false, true, false];
// trueFalse.push("hello man");

const friendsList: [string, string, string] = ["batas", "Akash", "sakib"];
friendsList[0] = "5555";

const customer: {
  firstName: string;
  middleName?: string; //optional type
  lastName: string;
  company: "mash connect"; //type ---> literal types
  readonly position: string;
} = {
  firstName: "Apu",
  lastName: "saha",
  company: "mash connect",
  position: "web developer",
};

// customer.company = "apple";
customer.position = "digital marketer";
