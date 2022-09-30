const outputHTML = (team) => {
    const html = [];
    const engineerPrompts = engineer => {
        console.log("Creating engineer...");
        let engineerHTML =
            `
            <div class="card" style="width:18rem;">
                <div class="card-header">
                    ${engineer.name} <br>
                    <i class="fas fa-mug-hot"></i>Manager
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${engineer.idNum}</li>
                    <li class="list-group-item">E-mail:<span id="email"><ahref="mailto:${engineer.email}">${engineer.email}</a></span></li>
                    li class="list-group-item">GitHub: <a target="_blank" href="https://github.com/${engineer.gitHub}"></li>
                </ul>
            </div>
        `
    }
    const internPrompts = intern => {
        console.log("Creating Intern...");
        let internHTML =
            `
        <div class="card" style="width:18rem;">
    <div class="card-header">
        ${intern.name} <br>
        <i class="fas fa-mug-hot"></i>Intern
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.idNum}</li>
        <li class="list-group-item">E-mail:<span id="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
        <li class="list-group-item">School: ${intern.school}</li>
    </ul>
</div>
        `
    }

    const managerPrompts = manager => {
        console.log("Creating Manager...");
        let managerHTML =
            `
        <div class="card" style="width:18rem;">
    <div class="card-header">
        ${manager.name} <br>
        <i class="fas fa-mug-hot"></i>Manager
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.idNum}</li>
        <li class="list-group-item">E-mail:<span id="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
        <li class="list-group-item">Office Number: ${manager.officeNum}</li>
    </ul>
</div>
        `
    };
};
