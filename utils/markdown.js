function licenseBadge(license) {
    console.log(license) 
    if (license === "None") {
      return "";
    } else {
      return `
  ![license badge](https://img.shields.io/badge/license-${license}-brightblue)
      `;
    }
  }
  
  function licenseLink(license) {
    switch (license) {
      case "MIT":
        return `[MIT](https://www.mit.edu/~amini/LICENSE.md)`;
      case "Apache License 2.0":
        return `[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0.html)`;
      case "GNU GPLv3":
        return `[GNU GPLv3](http://www.gnu.org/licenses/gpl-3.0.html)`;
      case "Mozilla Public License 2.0":
        return `[Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/)`;
    }
  }
  
  function licenseSection(license) {
    if (license === "None") {
      return "";
    } else {
      return `<a name="license"></a>
      
  ## License
  This project is covered under the following license:
      
  ${licenseLink(license)}
      `;
    }
  }
  
  function tableOfContents(license) {
    if (license === "None") {
      return `
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)`;
    } else {
      return `
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)`;
    }
  }
  
  function markdown(data) {
    console.log(data);
    return `# ${data.title}
    ${licenseBadge(data.license)}
    ## Description
    ${data.description}
    ## Table of Contents
    ${tableOfContents(data.license)}
    <a name="installation"></a>
    ## Installation
    ${data.installation}
    <a name="usage"></a>
    ## Usage
    ${data.usage}
    ${licenseSection(data.license)}
    <a name="contributing"></a>
    ## Contributing
    ${data.contributing}
    <a name="tests"></a>
    ## Tests
    ${data.test}
    <a name="questions"></a>
    ## Questions
    If you have any questions, feel free to reach out at: [GitHub](https://github.com/${data.github}) or <${data.email}>
    `;
  }
  
  module.exports = markdown;