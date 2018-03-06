function takesNoteOnInstantiation() {
    var note = new Note("New note");
    assert.isTrue(note.text === "New note");
};
takesNoteOnInstantiation();



function returnsNotes() {
    var note = new Note("New note");
    assert.isTrue(note.returnNotes() === "New note");
};
returnsNotes();
