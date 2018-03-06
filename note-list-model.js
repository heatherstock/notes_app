(function(exports){

  function List(){
    this.notes = [];
  }

  List.prototype.addNote = function(newNote) {
    var note = new Note(newNote)
    this.notes.push(note);
  }

  List.prototype.getNotes = function() {
    return this.notes;
  }

  exports.List = List;
})(this);
