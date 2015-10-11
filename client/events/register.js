/**
 * Created by rakirox on 10/10/15.
 */
Template.Register.events({
    'submit form': function(event) {
        event.preventDefault();
        console.log("Form submitted.");
        var emailVar = event.target.registerEmail.value;
        var passwordVar = event.target.registerPassword.value;
        var projectName = event.target.registerPassword.value;
        Projects.insert({})
        Accounts.createUser({
            email: emailVar,
            password: passwordVar
        });

    }
});
