function takesNoteOnInstantiation() {
    describe("Note"); 
    it("takes string as argument on instantiation");

    var note = new Note("New note");
    expect.toBeTrue(note.text === "New note");
};
takesNoteOnInstantiation();

function returnsNotes() {
    describe("#returnNotes");
    it("returns note entered")
    var note = new Note("New note");
    expect.toBeTrue(note.returnNotes() === "New note");
};
returnsNotes();
