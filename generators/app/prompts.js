const { BOOTSTRAP_TYPES } = require('./constants');

module.exports.MAIN_PROMPTS = [
  {
    type: 'input',
    name: 'projectName',
    message: 'Your Project name',
    default: 'my-project',
    required: true,
    validate: val =>
      String(val).match(/^[a-z][-_0-9a-z]*$/)
        ? true
        : `${val} is not a valid name for a project. Please use a valid identifier name (alphanumeric).`
  },
  {
    type: 'confirm',
    name: 'configureGit',
    message: 'Do you want to configure a Github repo?',
    required: true
  },
  {
    when: values => values.configureGit,
    type: 'input',
    name: 'repoUrl',
    message: 'Enter your repo SSH url in order to clone with SSH',
    required: true,
    validate: val =>
      String(val).match(/(?:git|ssh|https?|git@[-\w.]+):(\/\/)?(.*?)(\.git)(\/?|#[-\d\w._]+?)$/)
        ? true
        : `${val} is not a valid url. Please enter a valid one.`
  },
  {
    type: 'confirm',
    name: 'ga',
    message: 'Add Google Analytics?',
    required: true
  },
  {
    when: values => values.ga,
    type: 'input',
    name: 'gaID',
    message: 'Enter Google Analytics tracking ID (or press ENTER to add it later)',
    default: 'UA-XXXXX-Y'
  },
  {
    type: 'list',
    name: 'customized',
    message: 'Which type of bootstrap do you want?',
    required: true,
    choices: BOOTSTRAP_TYPES
  }
];
