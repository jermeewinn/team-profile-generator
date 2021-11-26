function template(data) {
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
        <section>
            <div class="tile is-parent is-justify-content-space-evenly  is-flex-wrap-wrap is-flex-direction-row">
                ${generateTeam(data)}
            </div>
        </section>
    </body>

</html>`
};
// Function for universal info for each team member
function generateTeam(data) {
    let output = '';
    data.forEach(element => {
        output += `<div class="card is-child m-4>
                        <div class="card box">
                            <div class="card-content">
                                <p class="title">${(element.employeeName)}</p>                              
                                <p class="subtitle">${(element.getRole)}</p>
                                <p id="id"><strong>Employee ID:</strong> ${(element.id)}</p>
                                <a href="mailto:${element.email}><strong>Email:</strong> ${(element.email)}</a>
                                ${genCustomInfo(element)}
                            </div>
                        </div>               
                    </div>`
    })
    return output;
};
// Function for custom info for each class
function genCustomInfo(element) {
    if (element.getRole() === 'Manager') {
        return `<p><strong>Office Number:</strong> ${element.getCustomInfo}</p>`
    }
    if (element.getRole() === 'Engineer') {
        return `<a href="https://github.com/${element.getCustomInfo}><strong>GitHub:</strong> https://github.com/${element.getCustomInfo}</a>`
    }
    if (element.getRole() === 'Intern') {
        return `<p><strong>School:</strong> ${element.getCustomInfo}</p>`
    }
};

module.exports = template;
console.log(template); 