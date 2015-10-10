Tasks = new Mongo.Collection('tasks');

// Calculate a default name for a list in the form of 'List A'
Tasks.defaultName = function() {
    var nextLetter = 'A', nextName = 'List ' + nextLetter;
    while (Lists.findOne({name: nextName})) {
        // not going to be too smart here, can go past Z
        nextLetter = String.fromCharCode(nextLetter.charCodeAt(0) + 1);
        nextName = 'List ' + nextLetter;
    }

    return nextName;
};

Projects = new Mongo.Collection('projects');
