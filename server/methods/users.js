Meteor.methods({
	'addUserToProject': function (userId,projectId) {
		UsersProjects.insert({userId: userId, projectId: projectId});
	},
	'startTask': function (userId, taskId ) {
		Meteor.call('startFocusPomo', userId, taskId);
		//Tasks.update(taskId, {$set: {status: 'doing'});
	},
	'startFocusPomo': function (userId, taskId) {
		Tasks.update(taskId, {$inc: { pomoCounter: 1}, $set: {status: 'doing'}});
		var i = 0;
		//1500
		while (i < 1500) {
			setTimeout(function () {
				Users.update(userId, { $set: {focusPomo: i}});
				i++;
			}, 1000);
		};
		Users.update(userId, { $set: {focusPomo: null}});
		Meteor.call('startDiffusePomo', userId);
	},
	'startDiffusePomo': function (userId) {
		var i = 0;
		while (i < 1500) {
			setTimeout(function () {
				Users.update(userId, { $set: {diffusePomo: i}});
				i++;
			}, 1000);
		};
		Users.update(userId, { $set: {diffusePomo: null}});
		Meteor.call('startFocusPomo', userId);
	},
	'stopPomo': function (userId) {
		Users.update(userId, { $set: {focusPomo: null, diffusePomo: null}});
	}
});