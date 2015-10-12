Template.editProject.events({
  "submit form": function (event) {
    event.preventDefault();
    let projectAttrs = { updatedAt: new Date() };
    let projectId = event.target._id.value;
    projectAttrs['name'] = event.target.name.value;
    projectAttrs['description'] = event.target.description.value;
    project = Meteor.call("updateProject", projectId, projectAttrs);
    sessionProject = Session.get('currentProject');
    if (sessionProject && sessionProject._id === projectId) {
      console.log(Session.get('currentProject'));
      Session.set('currentProject', project);
    };
    Router.go("/dashboard");
  }
});
