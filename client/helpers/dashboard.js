Meteor.subscribe('projectTasks');

Template.Dashboard.helpers({
	tasks: function () {
		return Tasks.find().fetch();
	},
	currentTask: function () {
		return Session.get('currentTask');
	}
});