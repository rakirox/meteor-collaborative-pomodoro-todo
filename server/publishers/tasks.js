Meteor.publish("tasks", function (projectId, state, userId) {
    return Tasks.find({projectId : projectId,state:state, userId:userId});
});

Meteor.publish("tasks", function (projectId, state) {
    return Tasks.find({projectId : projectId,state:state});
});