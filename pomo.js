if (Meteor.isServer) {
  Meteor.startup(function () {
    console.log("running from server")
  });
}


Router.configure({
    layoutTemplate: 'Layout'
});

Router.route('/', function () {
    if (!Meteor.user()) {
        this.render('Register');
    }else{
        Router.go('/dashboard');
    }
});
Router.route('/dashboard', function () {
    if (user = Meteor.user()) {
        if(!Session.get('currentProject')){
            project = Projects.findOne();
            console.log("miaw");
            Session.set('currentProject', project);
            console.log(Session.get('currentProject')._id);
            Meteor.subscribe('projectTasks', Session.get('currentProject')._id);
        }
        this.render('Dashboard');
    } else{
        Router.go('/');
    }
});