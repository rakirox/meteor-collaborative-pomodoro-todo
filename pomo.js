Router.configure({
  layoutTemplate: 'Layout'
});

Router.route('/', function () {
  if (!Meteor.user()) {
    this.layout('Public');
    this.render('Register');
  }else{
    Router.go('/dashboard');
  }
});

Router.route('/dashboard', function () {
  if (!Meteor.user()) Router.go('/');

  if(!Session.get('currentProject')){
    Session.set('currentProject', Projects.findOne());
  }
  else {
    checkingProject = Session.get('currentProject');
    if(typeof checkingProject === "undefined"){
      project = Projects.findOne();
      Session.set('currentProject', project);
    }
  }

  this.render('Dashboard');

});

Router.route('/collaborative', function () {
   // if (!Meteor.user()) Router.go('/');
    if(typeof Session.get('currentProject') === "undefined"){
        project = Projects.findOne();
        Session.set('currentProject', project);
    }
    this.render('CollaborativeDashboard');
});
