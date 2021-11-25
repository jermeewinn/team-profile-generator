function template() {
    return `
    <!DOCTYPE html>
<html>

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Team-Profile Generator</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    </head>

    <body>
        <section class="section hero is-danger">
            <div class="container">
                <header class="title is-1 level-iten has-text-centered">
                    My Team
                </header>
            </div>
        </section>
        <section class="tile is-parent is-justify-content-space-evenly  is-flex-wrap-wrap is-flex-direction-row">
           ${generateTeam(data)}
        </section>
    </body>

</html>`
};
// Function for universal info for each team member
function createTeam(element) {
    let output = '';
    data.forEach(element => {
        output += `<div class="card is-child">
        <div class="card box">
            <div class="card-content">
            <p class="title">${(element.name)}</p>                              
            <p class="subtitle">${(element.title)}</p>
            <p id="id"><strong>Employee ID:</strong> ${(element.id)}</p>
            <p><strong>Email:</strong> ${(element.email)}</p>
            ${genCustomInfo(element)}
        </div>               
    </div>`
    })
    return output;
};
// Function for custom info for each class
function genCustomInfo(element) {
    if (element.getRole() === 'Manager') {
        return `<p><strong>Office Number:</strong> ${element.getOfficeNumber}</p>`
    }
    if (element.getRole() === 'Engineer') {
        return `<p><strong>GitHub:</strong> ${element.getGithub}</p>`
    }
    if (element.getRole() === 'Intern') {
        return `<p><strong>School:</strong> ${element.getSchool}</p>`
    }
};

module.exports = template; 