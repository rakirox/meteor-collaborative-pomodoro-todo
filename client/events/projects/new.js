Template.newProject.events({
  "submit form": function (event) {
    event.preventDefault();
    console.log("submited");
    var projectAttrs = { createdAt: new Date(), updatedAt: new Date() };
    projectAttrs['userId'] = Meteor.userId();
    projectAttrs['name'] = event.target.name.value;
    projectAttrs['description'] = event.target.description.value;

    project = Meteor.call("insertProject", projectAttrs);
    Router.go("/dashboard");
  }
});
