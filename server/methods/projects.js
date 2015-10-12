Meteor.methods({
    'insertProject': function (project) {
        var currentUserId = Meteor.userId();
        project = Projects.insert({
            name: project.name,
            description: project.description,
            userId: currentUserId,
            collaborators : [currentUserId]
        });
    }
});