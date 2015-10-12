/**
 * Created by rakirox on 10/10/15.
 */
Template.Register.events({
    'submit #register': function(event) {
        event.preventDefault();
        console.log("register submitted.");
        var emailVar = event.target.registerEmail.value;
        var passwordVar = event.target.registerPassword.value;
        var projectName = event.target.registerProject.value;
        Accounts.createUser({
            email: emailVar,
            password: passwordVar
        });
        Meteor.call("insertProject",{name:projectName,description:""});


    }
});
