Router.route('/projects/new', function () {
  this.layout('Public', {});
  this.render('newProject');
});


Router.route('/projects/:_id', function () {
  this.layout('Public', {});
  this.render('showProject', {
    data: function () {
      return Projects.findOne({_id: this.params._id});
    }
  });
});

Router.route('/projects/:_id/edit', function () {
  this.layout('Public', {});
  this.render('editProject', {
    data: function () {
      return Projects.findOne({_id: this.params._id});
    }
  });
});
