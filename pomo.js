if (Meteor.isServer) {
  Meteor.startup(function () {
    console.log("running from server")
  });
}
