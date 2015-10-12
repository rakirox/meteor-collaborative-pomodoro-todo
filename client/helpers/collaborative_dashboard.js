/**
 * Created by rakirox on 10/11/15.
 */
Template.Dashboard.helpers({
    Tasks: function () {
        var currentProject = Session.get("currentProject");
        return Tasks.find({status:"doing",projectId: currentProject._id}).fetch();
    }
});