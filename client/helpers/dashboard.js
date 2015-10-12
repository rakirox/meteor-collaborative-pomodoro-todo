Meteor.subscribe('projectTasks');

Template.Dashboard.helpers({
	todoTasks: function () {
		return Tasks.find({status:"todo"}).fetch();
	},
	doingTasks: function () {
		return Tasks.find({status:"doing"}).fetch();
	},
	doneTasks: function () {
		return Tasks.find({status:"done"}).fetch();
	},
	currentTask: function () {
		return Session.get('currentTask');
	},
	currentPomodoro: function () {
		return Session.get('currentPomodoro');
	},
	secondsTimer: function () {
		return Session.get('secondsTimer');
	},
});