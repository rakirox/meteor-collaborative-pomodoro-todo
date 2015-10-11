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
    });

    rd.show();
  },
  'click .startPomo': function (event) {
    //Meteor.call('startFocusPomo', 'WShuyzjQ6D9pAjRCj', 'bJNQtpCX5SmviBXWM');
  },
  'click .dropdown-menu a.doingTaskOption': function (event) {
    Session.set('tenSecondsTimer', 10);
    initTenSecondsTask(this._id);
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
        Session.set('tenSecondsTimer', 10 - count);
    }
  }
  intervalId = window.setInterval(instance, interval);
  Session.set('interval', intervalId);
};