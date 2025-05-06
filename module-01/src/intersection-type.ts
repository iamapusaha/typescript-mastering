{
  type FrontendDeveloper = {
    skills: string[];
    desigination1: "frontendDeveloper";
  };
  type BackendDeveloper = {
    skills: string[];
    desigination2: "backendDeveloper";
  };

  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

  const developer: FullStackDeveloper = {
    skills: ["html", "css", "js", "react", "nextjs", "nodejs"],
    desigination1: "frontendDeveloper",
    desigination2: "backendDeveloper",
  };
}
