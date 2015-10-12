Meteor.publish('projectUsers', function (projectId) {
	return UsersProjects.find({projectId: projectId});
});

Meteor.publish('userTasks', function (projectId) {
	var currentUserId = this.userId;
	return Tasks.find({createdBy: currentUserId, projectId: projectId});
});

Meteor.publish('userProjects', function () {
    project = Projects.find({
        $or: [
            { userId: this.userId },
            { collaborators : {$in : [this.userId]} }
        ]
    });
    return project;
});