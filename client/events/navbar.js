/**
 * Created by rakirox on 10/10/15.
 */
Template.navbar.events({
    'click #logOut': function(event) {
        event.preventDefault();
        console.log("#logOut.");
        Accounts.logout();


    }
});