Template.Dashboard.events({
  'click .fixed-action-btn': function() {
    var shareDialogInfo = {
      template: Template.addTaskDialog,
      title: "Add a story",
      removeOnHide: true,
      buttons: {
        "cancel": { class: 'btn-danger', label: 'Cancel' },
        "save": { closeModalOnClick: false, class: 'btn-info', label: 'save'}
      },
      doc: {
        task: {}
      }
    }

    var modal = ReactiveModal.initDialog(shareDialogInfo);

    modal.buttons.save.on('click', function(button){
        modal.hide();
        var taskName = $(modal.modalTarget).find('[name=taskName]').val();
        var taskDescription = $(modal.modalTarget).find('[name=taskDescription]').val();
        var projectId = Session.get('currentProject')._id;
        var task = {name:taskName,description:taskDescription,subTasks:[],projectId : projectId};
        console.log(task);
        Meteor.call('insertTask',task);
    });

    modal.show();
    console.log("derp");
  },
  'click .editTask': function() {
    var shareDialogInfo = {
      template: Template.addTaskDialog,
      title: "Edit "+this.name,
      removeOnHide: true,
      buttons: {
        "cancel": { class: 'btn-danger', label: 'Cancel' },
        "save": { closeModalOnClick: false, class: 'btn-info', label: 'save' }
      },
      doc: { task: this }
    }

    var modal = ReactiveModal.initDialog(shareDialogInfo);

    modal.buttons.save.on('click', function(button){

      var taskId = $(modal.modalTarget).find('[name=taskId]').val();
      var taskName = $(modal.modalTarget).find('[name=taskName]').val();
      var taskDescription = $(modal.modalTarget).find('[name=taskDescription]').val();
      var taskParams = {
          name:taskName,
          description:taskDescription,
          subTasks:[]
        };
      console.log(taskId);
      console.log(taskParams);
      Meteor.call('updateTask', taskId, taskParams);
      modal.hide();
    });

    modal.show();
  },

  'click .deleteTask': function (event) {
    var shareDialogInfo = {
      template: Template.deleteTaskDialog,
      title: "Are you sure you want to delete:",
      removeOnHide: true,
      buttons: {
        "cancel": { class: 'btn-danger', label: 'Cancel' },
        "delete": { closeModalOnClick: false, class: 'btn-info', label: 'Delete this!' }
      },
      doc: { task: this }
    }

    var modal = ReactiveModal.initDialog(shareDialogInfo);

    modal.buttons.delete.on('click', function(button){
      var taskId = $(modal.modalTarget).find('[name=taskId]').val();
      console.log(taskId);
      Meteor.call('deleteTask', taskId);
      modal.hide();
    });

    modal.show();
  },

  'click .startPomo': function (event) {
    //Meteor.call('startFocusPomo', 'WShuyzjQ6D9pAjRCj', 'bJNQtpCX5SmviBXWM');
  },
  'click .doingTaskOption': function (event) {
    Session.set('secondsTimer', 10);
    initTenSecondsTask(this._id);
  },
  'click .todoTaskOption': function (event) {
    window.clearInterval(Session.get('interval'));
    Session.set('secondsTimer', null);
    Meteor.call('todoTask', this._id);
  }
});

var initTenSecondsTask = function (taskId) {
  var shareDialogInfo = {
    template: Template.tenSecondsDialog,
    title: "Ten seconds to continue",
    modalDialogClass: "add-modal-dialog",
    modalBodyClass: "add-modal-body",
    modalFooterClass: "add-modal-footer",
    removeOnHide: true,
    buttons: {
      "cancel": {
        closeModalOnClick: false,
        class: 'btn-danger',
        label: 'Cancel'
      }
    }
  };

  var rd = ReactiveModal.initDialog(shareDialogInfo);

  rd.buttons.cancel.on('click', function(button){
    window.clearInterval(Session.get('interval'));
    rd.hide();
  });

  rd.show();

  doTimer(10, function(){
    Meteor.call('doingTask',taskId);
    rd.hide();
    doPomoTimer(taskId,rd);
  });
};

var doPomoTimer = function (taskId,rd) {
  doTimer(60, function() {
    Meteor.call('doingTask',taskId);
    rd.hide();
    doDiffuseTimer(taskId);
  });
};
var doDiffuseTimer = function (taskId,rd) {
  doTimer(10, function() {
    Meteor.call('doingTask',taskId);
    rd.hide();
    doPomoTimer();
  });
};
doTimer = function (seconds, onComplete) {
  var count = 0,
      interval = 1000;
  function instance() {
    if(count++ == seconds) {
      window.clearInterval(Session.get('interval'));
        onComplete();
    } else {
        Session.set('secondsTimer', seconds - count);
    }
  }
  intervalId = window.setInterval(instance, interval);
  Session.set('interval', intervalId);
};
