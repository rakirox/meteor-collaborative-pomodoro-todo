Meteor.methods({
	'insertTask': function (task) {
		var currentUserId = Meteor.userId();
		tasks = Tasks.insert({
			name: task.name,
			description: task.description,
			subTasks: task.subTasks,
			projectId: task.projectId,
			ownerId: currentUserId,
			userId: currentUserId
		});
	},
	'deleteTask': function (taskId) {
		var currentUserId = Meteor.userId();
		task.remove({ _id: taskId, ownerId: currentUserId});
	}
});