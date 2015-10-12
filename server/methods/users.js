Meteor.methods({
	'addUserToProject': function (userId,projectId) {
		UsersProjects.insert({userId: userId, projectId: projectId});
	},
	'startTask': function (userId, taskId ) {
		Meteor.call('startFocusPomo', userId, taskId);
		//Tasks.update(taskId, {$set: {status: 'doing'});
	},
	'setFocusPomo': function (taskId, value) {
		Tasks.update(taskId, {$set: {currentPomo: value}});
		var i = 0;
	},
	'startDiffusePomo': function (userId) {
		console.log("starting diffusePomo");
		var i = 0;
		while (i < 1000) {
			setTimeout(function () {
				Users.update(userId, { $set: {diffusePomo: i} });
				i++;
			}, 1000);
		};
		Users.update(userId, { $set: {diffusePomo: null} });
		Meteor.call('startFocusPomo', userId);
	},
	'stopPomo': function (userId) {
		Users.update(userId, { $set: {focusPomo: null, diffusePomo: null} });
	}
});
