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
        }
        this.render('Dashboard');
    }else{
        Router.go('/');
    }
});


Router.route('/collaborative', function () {
    if (user = Meteor.user()) {
        if(typeof Session.get('currentProject') === "undefined"){
            project = Projects.findOne();
            Session.set('currentProject', project);
        }
        congole.log(Projects.find(Session.get('currentProject')._id))
        this.render('CollaborativeDashboard');
    }else{
        Router.go('/');
    }
});