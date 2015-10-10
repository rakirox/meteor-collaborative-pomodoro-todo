var clock = 10;

var timeLeft = function() {
    if (clock > 0) {
        clock--;
        Session.set("time", clock);
        return console.log(clock);
    } else {
        console.log("That's All Folks");
        return Meteor.clearInterval(interval);
    }
};

var interval = Meteor.setInterval(timeLeft, 1000);

if (Meteor.isClient) {
    Template.registerHelper("time", function() {
        return Session.get("time");
    });
}