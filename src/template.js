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
function createTeam(data) {
    let output = '';
    data.forEach(data => {
        output += `<div class="card is-child">
        <div class="card box">
            <div class="card-content">
            <p class="title">${(data.name)}</p>                              
            <p class="subtitle">${(data.title)}</p>
            <p id="id"><strong>Employee ID:</strong> ${(data.id)}</p>
            <a href="mailto:${data.email}><strong>Email:</strong> ${(data.email)}</p>
            ${genCustomInfo(data)}
        </div>               
    </div>`
    })
    return output;
};
// Function for custom info for each class
function genCustomInfo(data) {
    if (data.getRole() === 'Manager') {
        return `<p><strong>Office Number:</strong> ${data.getOfficeNumber}</p>`
    }
    if (data.getRole() === 'Engineer') {
        return `<a href="https://github.com/${data.gitHub}><strong>GitHub:</strong> https://github.com/jermeewinn${data.getGithub}</a>`
    }
    if (data.getRole() === 'Intern') {
        return `<p><strong>School:</strong> ${data.getSchool}</p>`
    }
};

module.exports = template; 