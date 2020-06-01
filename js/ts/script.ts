fetch('projects.json').then((result) => {
    result.json()
        .then(function (projects) {
            build(projects);
        });
});

//Créer les objets
let build = (projects) => {
    for (let json_project of projects) {
        let project = new Project(json_project);

        project.display();
    }

}
