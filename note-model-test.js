function takesNoteOnInstantiation() {
    var note = new Note("New note");
    test.isTrue(note.text === "New note");
};
takesNoteOnInstantiation();

function returnsNotes() {
    var note = new Note("New note");
    test.isTrue(note.returnNotes() === "New note");
};
returnsNotes();

function hasEmptyArray(){
   var list = new List();
   test.isTrue(list.notes.length === 0);
};
hasEmptyArray();

function storesListinArray(){
  var list = new List();
  var note = new Note("new note");

  for ( var i = 0; i< list.notes.length; i++){
    test.isTrue(list.notes[i]=== "new note");
    }

};

storesListinArray();
