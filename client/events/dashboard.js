Template.Dashboard.events({
  'click .fixed-action-btn': function() {
    var shareDialogInfo = {
      template: Template.addTaskDialog,
      title: "Add a task",
      modalDialogClass: "add-modal-dialog", //optional
      modalBodyClass: "add-modal-body", //optional
      modalFooterClass: "add-modal-footer",//optional
      removeOnHide: true, //optional. If this is true, modal will be removed from DOM upon hiding
      buttons: {
        "cancel": {
          class: 'btn-danger',
          label: 'Cancel'
        },
        "save": {
          closeModalOnClick: false, // if this is false, dialog doesnt close automatically on click
          class: 'btn-info',
          label: 'save'
        }

      },
      doc: {  // Provide data context for Template.appShareDialog
        app: "My Application"
      }
    }

    var rd = ReactiveModal.initDialog(shareDialogInfo);

    rd.buttons.save.on('click', function(button){
        rd.hide();
        console.log('okok');
        var taskName = $(rd.modalTarget).find('[name=taskName]').val();
        var taskDescription = $(rd.modalTarget).find('[name=taskDescription]').val();
        var projectId = Session.get('currentProject')._id;
        var task = {name:taskName,description:taskDescription,subTasks:[],projectId : projectId};
        console.log(task);
        Meteor.call('insertTask',task);
    });

    rd.show();
    console.log("derp");
  },
  'click .startPomo': function (event) {
    //Meteor.call('startFocusPomo', 'WShuyzjQ6D9pAjRCj', 'bJNQtpCX5SmviBXWM');
  },
  'click .dropdown-menu a.doingTaskOption': function (event) {
    Session.set('currentTask', Tasks.find({_id: this._id}).fetch()[0]);
    Meteor.call('doingTask',this._id);
  }
});
