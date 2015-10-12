/**
 * Created by rakirox on 10/11/15.
 */


Template.navbar.helpers({
    currentEmailUser: function () {
        return Meteor.user().emails[0].address
    },
    userProjects: function () {
        return Projects.find().fetch()
    },
    currentProject: function() {
        if(typeof Session.get('currentProject') === "undefined"){
            project = Projects.findOne();
            Session.set('currentProject', project);
        }
        return Session.get('currentProject');
    },
    currentPage: function(){
        if(Router.current().route.getName() === "collaborative"){
            return "Panel Colaborativo";
        } else {
            return "Mi Panel"
        }
    }
});

