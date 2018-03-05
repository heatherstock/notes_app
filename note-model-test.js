(function(exports) {
    function takesNoteOnInstantiation() {
        var note = new Note("New note");
        
        if (note.text !== "New note") {
            throw new Error("New note not stored");
        }
    };
    takesNoteOnInstantiation();
})(this);

(function(exports) {
    function returnsNotes() {
        var note = new Note("New note");

        if (note.returnNotes() !== "New note") {
            throw new Error("New note not returned");
        }
    };
    returnsNotes();
})(this);