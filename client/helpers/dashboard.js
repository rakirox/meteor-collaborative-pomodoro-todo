Meteor.subscribe('projectTasks');

Template.Dashboard.helpers({
	tasks: function () {
		return Tasks.find().fetch();
	},
});