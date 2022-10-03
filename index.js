const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Engineer = require('./lib/engineer');  
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const outputHTML = require('./src/outputHTML');
const teamMembers = [];
const OUTPUT_DIR = path.resolve(__dirname, 'output')
const outputPath = path.join(OUTPUT_DIR, 'finishedProduct.html')

const mainMenu = () => {
    return inquirer.prompt([{
        name: 'main',
        type: 'list',
        message: 'Which team member would you like to add?',
        choices: ['engineer', 'intern', 'manager', 'done']
    }])
        .then(userContinue => {
            
            switch (userContinue.main) {
                case "engineer":
                    console.log("Engineer chosen");
                    engineerPrompts();
                    break;
                case "intern":
                    console.log("Intern chosen");
                    internPrompts();
                    break;
                case "manager":
                    console.log("Manager chosen");
                    managerPrompts();
                    break;
                case "done":
                    console.log("Done chosen");
                    buildTeam();
                default:
                    console.log("Default called")
                    buildTeam();

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
            teamMembers.push(engineer);
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
            teamMembers.push(intern);
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
            teamMembers.push(manager);
            mainMenu();
        })
};
const buildTeam = () => {
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath,outputHTML(teamMembers),"utf-8");
}

mainMenu();