Router.route('/projects/new', function () {
  this.layout('Layout', {});
  this.render('newProject');
});


Router.route('/projects/:_id', function () {
  this.layout('Layout', {});
  this.render('showProject', {
    data: function () {
      return Projects.findOne({_id: this.params._id});
    }
  });
});

Router.route('/projects/:_id/edit', function () {
  this.layout('Layout', {});
  this.render('editProject', {
    data: function () {
      return Projects.findOne({_id: this.params._id});
    }
  });
});
