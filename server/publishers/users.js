//Meteor.publish('projectUsers', function (projectId) {
//	return UsersProjects.find({projectId: projectId});
//});
//
//Meteor.publish('userTasks', function (projectId) {
//	var currentUserId = this.userId;
//	return Tasks.find({ownerId: currentUserId, projectId: projectId});
//});

Meteor.publish('tasks', function () {
    //projects = Projects.find({
    //    $or: [
    //        { userId: this.userId },
    //        { collaborators : {$in : [this.userId]} }
    //    ]
    //});
    //var ids = [];
    //projects.forEach(function(project){
    //    ids.push(project._id);
    //});
    //console.log("ids");
    //console.log(ids);


    return Tasks.find(/*{projectId: {$or :ids}}*/);
});
Meteor.publish('userProjects', function () {
    project = Projects.find({
        $or: [
            { userId: this.userId },
            { collaborators : {$in : [this.userId]} }
        ]
    });
    return project;
});