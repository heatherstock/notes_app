(function(exports) {
    function takesNoteOnInstantiation() {
        var note = new Note("New note");
        
        if (note.text !== "New note") {
            throw new Error("New note not stored");
        }
    };
    takesNoteOnInstantiation();
})(this);