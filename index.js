const inquirer = require('inquirer');
// const jest = require('jest');
const fs = require('fs');
const path = require('path');

const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const outputHTML = require('./dist/outputHTML');
const team = [];
const OUTPUT_DIR = path.resolve(__dirname, 'output')
const outputPath = path.join(OUTPUT_DIR, 'team.html')

const mainMenu = () => {
    return inquirer.prompt([{
        name: 'main',
        type: 'list',
        message: 'Which team member would you like to add?',
        choices: ['engineer', 'intern', 'manager', 'none']
    }])
        .then(userContinue => {
            switch (userContinue.menu) {
                case "engineer":
                    engineerPrompts();
                    break;
                case "intern":
                    internPrompts();
                    break;
                case "manager":
                    managerPrompts();
                    break;
                default:
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
    if (!fs.existsSync(OUTPUT_DIR)) 
    {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath,outputHTML(team),"utf-8");
}

mainMenu();