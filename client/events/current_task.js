Template.currentCard.helpers({
	currentTask: function () {;
		return Session.get('currentTask');
	}
});

Template.currentCard.events({
  'click .doneTaskOption': function (event) {
    Meteor.call('doneTask',this._id);
  },
  'click .todoTaskOption': function (event) {
  	Session.set('secondsTimer', 0);
  	Meteor.call('todoTask',this._id);
  }
});
