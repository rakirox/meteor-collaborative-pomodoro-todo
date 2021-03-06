//Meteor.subscribe('projectTasks', Session.get('currentProject')._id);
Template.Dashboard.helpers({
	todoTasks: function () {
    var currentProject = Session.get("currentProject");
		return Tasks.find({status:"todo", projectId: currentProject._id}).fetch();
	},
	doingTasks: function () {
    var currentProject = Session.get("currentProject");
    var userId = Meteor.user()._id;
    return Tasks.find({status:"doing", projectId: currentProject._id }).fetch();
		// return Tasks.find({status:"doing", projectId: currentProject._id, userId: userId }).fetch();
	},
	doneTasks: function () {
        var currentProject = Session.get("currentProject");
		return Tasks.find({status:"done", projectId: currentProject._id}).fetch();
	},
	currentTask: function () {
		return Session.get('currentTask');
	},
	currentPomodoro: function () {
		return Meteor.user().profile.currentFocusPomo;
	},
	secondsTimer: function () {
		return Session.get('secondsTimer');
	},
	'currentTask': function () {
    var currentUserId = Meteor.userId();
    return Tasks.find({status:'doing', userId: currentUserId}).fetch();
  }
});