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
