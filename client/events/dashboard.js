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
    });

    rd.show();
    console.log("derp");
  }
});
