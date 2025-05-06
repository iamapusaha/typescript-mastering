type FrontendDeveloper = "fokiraDeveloper" | "expreinessDeveloper";
type BackendDeveloper = FrontendDeveloper | "withHeavyknowgeofbackend";

const selfDeveloper: BackendDeveloper = "withHeavyknowgeofbackend";

const pHeroMake: FrontendDeveloper = "expreinessDeveloper";

type User = {
  name: string;
  age: number;
  bloodGroup: "A+" | "B+" | "Ab+";
  gender: "male" | "female";
};

const gpeople: User = {
  name: "abbas ali",
  age: 72,
  bloodGroup: "A+",
  gender: "male",
};
