Meteor.publish("tasks", function (projectId, state, userId) {
    return Tasks.find({projectId : projectId,state:state, userId:userId});
});
