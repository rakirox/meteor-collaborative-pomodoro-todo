/**
 * Created by rakirox on 10/11/15.
 */


Template.navbar.helpers({
    currentEmailUser: function () {
        return Meteor.user().emails[0].address
    }
});