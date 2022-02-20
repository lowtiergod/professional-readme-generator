const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project? (Required)",
    validate: (titleInput) => {
      if (titleInput) {
        return true;
      } else {
        console.log("Please enter a title!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a description of your project. (Required)",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter a description!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message:
      "Please enter installation instructions for your project. (Required)",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log("Please enter installation instructions!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter usage information for your project. (Required)",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter usage information!");
        return false;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "Which license would you like to include? (Check all that apply)",
    choices: [ "MIT",
      "Apache License 2.0",
      "GNU GPLv3",
      "Mozilla Public License 2.0",
      "None",
    ],
  },
  {
    type: "input",
    name: "contributing",
    message:
      "Enter contribution guidelines for your project. (Required)",
    validate: (contributingInput) => {
      if (contributingInput) {
        return true;
      } else {
        console.log("Enter contribution guidelines!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "test",
    message: "Enter test instructions for your project. (Required)",
    validate: (testInput) => {
      if (testInput) {
        return true;
      } else {
        console.log("Enter test instructions!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username. (Required)",
    validate: (githubInput) => {
      if (githubInput) {
        return true;
      } else {
        console.log("Enter your GitHub username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address. (Required)",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Enter your email address!");
        return false;
      }
    },
  },
];

const promptQuestions = () => {
  return inquirer.prompt(questions);
};
