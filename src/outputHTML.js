const createTeam = (team) => {
    console.log("running Create Team function");
    const html = [];
    const buildEngineer = engineer => {
        console.log("Creating Engineer...");
        let engineerHTML = `
        <div class="card" style="width:18rem;">
            <div class="card-header">
            ENGINEER<br>
            <i class="fas fa-mug-hot"></i>${engineer.name}</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">E-mail:<span id="email"><a href="mailto:${engineer.email}"> ${engineer.email}</a></span></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.gitHub}">${engineer.gitHub}</a></li>
            </ul>
        </div>
        `;
        html.push(engineerHTML);
        console.log("manager html push initiated");
    }
    const buildIntern = intern => {
        console.log("Creating Intern...");
        let internHTML = `
        <div class="card" style="width:18rem;">
            <div class="card-header">
            INTERN<br>
            <i class="fas fa-mug-hot"></i>${intern.name}</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">E-mail:<span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
        `;
        html.push(internHTML);
        console.log("manager html push initiated");
    }
    const buildManager = manager => {
        console.log("Creating Manager...");
        let managerHTML = `
        <div class="card" style="width:18rem;">
            <div class="card-header">
            MANAGER<br>
            <i class="fas fa-mug-hot"></i>${manager.name}</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">E-mail: <span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
                <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
            </ul>
        </div>
        `;
        html.push(managerHTML);
        console.log("manager html push initiated");
    }
    for (let i = 0; i < team.length; i++) {
        console.log([i]);
        if (team[i].getRole() === "Engineer") {
            buildEngineer(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            buildIntern(team[i]);

        }
        if (team[i].getRole() === "Manager") {
            buildManager(team[i]);
        }
    }
    console.log(team);
    return html.join('');
};

module.exports = (team) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>E-Z Team Generator</title>
    </head>
    <body>
    <header>
    <h1>Team Members
    </h1>
    </header>
    <main> ${createTeam(team)} </main>
    </body>
    </html>`
};




