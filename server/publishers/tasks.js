

Meteor.publish('projectTasks', function (projectId) {
	return Tasks.find({projectId: projectId});
});