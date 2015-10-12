/**
 * Created by rakirox on 10/10/15.
 */
Template.navbar.events({
    'click #logOut': function(event) {
        event.preventDefault();
        Accounts.logout();


    },
    'click .panelCol': function(event) {
        event.preventDefault();
        Router.go('/collaborative');
    },
    'click .panelMi': function(event) {
        event.preventDefault();
        Router.go('/dashboard');

    }
});

Template.singleProject.events({
    'click': function(event) {
        event.preventDefault();
        console.log("#project click.");
        console.log(this.project);
        Session.set('currentProject', this.project);

    }
});