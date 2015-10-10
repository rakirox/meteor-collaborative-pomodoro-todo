Meteor.publish("tasks", function (projectId, state) {
    return Tasks.find({});
});