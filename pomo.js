if (Meteor.isServer) {
  Meteor.startup(function () {
    console.log("running from server")
  });
}


Router.configure({
    // the default layout
    layoutTemplate: 'Layout'
});

Router.route('/', function () {
    // set the layout programmatically
    //this.layout('Layout');

    if (!Meteor.user()) {
        this.render('Register');
    }else{
        Router.go('/dashboard');
    }
});
Router.route('/dashboard', function () {


    // set the layout programmatically
    //this.layout('Layout');

    // render the PageOne template

    if (user = Meteor.user()) {
        if(!Session.get('currentProject')){
            project = Projects.findOne();
            console.log("miaw");
            console.log(project);
            Session.set('currentProject', project);
        }
        this.render('Dashboard');
    }else{
        Router.go('/');
    }
});

//Router.route('/MyPomodoro', function () {
//    // set the layout based on a reactive session variable
//    //this.layout(Session.get('layout') || 'LayoutOne');
//
//    // render the PageTwo template
//    this.render('PageTwo');
//
//    // render the PageTwoFooter template to the footer region
//    this.render('PageTwoFooter', {to: 'footer'});
//});

//Router.use(function () {
//    if (!this.willBeHandledOnServer())
//        console.error("No route found for url " + JSON.stringify(this.url) + ".");
//});
