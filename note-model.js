(function(exports) {
    function Note(newNote) {
        this.text = newNote;
    }

    Note.prototype.returnNotes = function() {
        return this.text;
    };
    
    exports.Note = Note;
})(this);

