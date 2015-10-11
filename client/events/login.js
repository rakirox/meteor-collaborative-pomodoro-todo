/**
 * Created by rakirox on 10/10/15.
 */
Template.Login.events({
    'submit #login': function(event) {
        event.preventDefault();
        var emailVar = event.target.loginEmail.value;
        var passwordVar = event.target.loginPassword.value;


        Meteor.loginWithPassword(emailVar,passwordVar);
        console.log("Login submitted.");
    }
});