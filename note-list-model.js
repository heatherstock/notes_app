(function(exports){

  function List(){
    this.notes = [];
  }

  List.prototype.addNote = function(newNote) {
    this.notes.push(newNote);
  }

  exports.List = List;
})(this);
