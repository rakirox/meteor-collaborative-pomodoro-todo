Meteor.methods({
  'insertTask': function (task) {
    var currentUserId = Meteor.userId();
    tasks = Tasks.insert({
      name: task.name,
      description: task.description,
      subTasks: task.subTasks,
      projectId: task.projectId,
      ownerId: currentUserId,
      userId: '',
      status: 'todo'
    });
  },
  'updateTask': function (taskId, taskParams) {
    var currentUserId = Meteor.userId();
    task = Tasks.update(taskId, {$set: taskParams});
  },
  'deleteTask': function (taskId) {
    var currentUserId = Meteor.userId();
    Tasks.remove({ _id: taskId, ownerId: currentUserId});
  },
  'doingTask': function (taskId) {
    console.log("calling doingTask");
    var currentUserId = Meteor.currentUserId;
    Tasks.update({status:'doing'}, {$set:{status:"todo", userId: currentUserId}}, {multi:true});
    Tasks.update(taskId, {$set: {status: 'doing'}});
  },
  'todoTask': function (taskId) {
    console.log("dsdds");
    Tasks.update(taskId, {$set: {status: 'todo', userId: null}});
  },
  'doneTask': function (taskId) {
    var currentUserId = Meteor.currentUserId;
    Tasks.update(taskId, {$set: {status: 'done'}});
  }
});