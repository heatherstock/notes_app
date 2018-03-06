function takesNoteOnInstantiation() {
    describe("New note"); 
    it("takes string as argument");

    var note = new Note("New note");
    expect.toBeTrue(note.text === "New note");
};
takesNoteOnInstantiation();

function returnsNotes() {
    describe("returnNotes");
    it("returns notes entered")
    var note = new Note("New note");
    expect.toBeTrue(note.returnNotes() === "New note");
};
returnsNotes();
