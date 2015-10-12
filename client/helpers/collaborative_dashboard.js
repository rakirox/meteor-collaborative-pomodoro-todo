/**
 * Created by rakirox on 10/11/15.
 */
Template.CollaborativeDashboard.helpers({
    collaborators: function () {
        var currentProject = Session.get("currentProject");
        var collaborators = Meteor.users.find({_id: {$in : currentProject.collaborators}}).fetch();
        collaborators.forEach(
            function(collaborator){
                var tasks = Tasks.find({status:"doing",userId:collaborator._id, projectId: currentProject._id}).fetch();
                collaborator.tasks = tasks;
            }
        );
        console.log(collaborators);
        return collaborators;
    }
});