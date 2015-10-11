Template.currentCard.helpers({	
	currentTask: function () {;
		return Session.get('currentTask');
	}
});

Template.Dashboard.events({
  'click .dropdown-menu a.doneTaskOption': function (event) {
  	console.log(this)
    Meteor.call('doneTask',this._id);
  }
});
