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
		Tasks.remove({ _id: taskId, ownerId: currentUserId});
	},
	'doingTask': function (taskId) {
		var currentUserId = Meteor.currentUserId;
		doingTasks = Tasks.find({status:'doing'});
		doingTasks.forEach( function (task) {
			Tasks.update(taskId, {$set: {status: 'doing'}});	
		});
		Tasks.update(taskId, {$set: {status: 'doing'}});
	},
	'todoTask': function (taskId) {
		var currentUserId = Meteor.currentUserId;
		Tasks.update(taskId, {$set: {status: 'todo'}});
	},
	'doneTask': function (taskId) {
		var currentUserId = Meteor.currentUserId;
		Tasks.update(taskId, {$set: {status: 'done'}});
	}
});