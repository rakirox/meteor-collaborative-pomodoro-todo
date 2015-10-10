Meteor.subscribe('projectTasks');
Template.Hello.helpers({
	tasks: function () {
		return Tasks.find().fetch();
	},
});