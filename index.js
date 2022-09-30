const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const path = require('path');

const engineer = require('./lib/employee');
const intern = require('./lib/intern');
const manager = require('./lib/manager');
const team = [];


const outputHTML = require('./dist/outputHTML');
const outputDir = path.resolve(__dirname, 'output')
const outputPath = path.join(outputDir, 'team.html')

const mainMenu = () => {
    return inquirer.prompt([{
        name: 'main',
        type: 'list',
        message: 'Which team member would you like to add?',
        choices: ['engineer', 'intern', 'manager', 'none']
    }])
        .then(userContinue => {
            if (userContinue == "manager") {
                managerPrompts();
            } else if (userContinue == "intern") {
                internPrompts();
            } else if (userContinue == "engineer") {
                engineerPrompts();
            } else {
                console.log("No new employee chosen, generating page");
                createTeam();
            }
        })
};

const engineerPrompts = () => {
    return inquirer.prompt([{
        name: 'name',
        type: 'input',
        message: 'What is the engineer\'s name?'
    },
    {
        name: 'idNum',
        type: 'input',
        message: 'What is their ID number?'
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is their e-mail address?'
    },
    {
        name: 'gitHub',
        type: 'input',
        message: 'What is their GitHub name?'
    },
    ])
        .then(answers => {
            console.log(answers);
            const engineer = new Engineer(answers.name, answers.idNum, answers.email, answers.gitHub);
            team.push(engineer);
            mainMenu();
        })
};

const internPrompts = () => {
    return inquirer.prompt([{
        name: 'name',
        type: 'input',
        message: 'What is the intern\'s name?'
    },
    {
        name: 'idNum',
        type: 'input',
        message: 'What is their ID number?'
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is their e-mail address?'
    },
    {
        name: 'school',
        type: 'input',
        message: 'Which school are they attending?'
    },
    ])
        .then(answers => {
            console.log(answers);
            const intern = new Intern(answers.name, answers.idNum, answers.email, answers.school);
            team.push(manager);
            mainMenu();
        })
};

const managerPrompts = () => {
    return inquirer.prompt([{
        name: 'name',
        type: 'input',
        message: 'What is the manager\'s name?'
    },
    {
        name: 'idNum',
        type: 'input',
        message: 'What is their ID number?'
    },
    {
        name: 'email',
        type: 'input',
        message: 'What is their e-mail address?'
    },
    {
        name: 'officeNum',
        type: 'input',
        message: 'What is their office number?'
    },
    ])
        .then(answers => {
            console.log(answers);
            const manager = new Manager(answers.name, answers.idNum, answers.email, answers.officeNum);
            team.push(manager);
            mainMenu();
        })
};


const createTeam = () => {
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir)
    }
    fs.writeFileSync(outputPath, outputHTML(team), "utf-8");
}

mainMenu();