var list = new List();
var testList = new List();
var testNote = new Note('New note');
var note = new Note('New note');


function hasEmptyArray(){
    describe('List');
    it('has empty array "notes" on instantiation')
    expect.toBeTrue(list.notes.length === 0);
 };
 hasEmptyArray();
 
 function storesListinArray(){
    describe('#addNote');
    it('adds instance of Note to the notes array');
    list.addNote('New note');
    expect.toBeEqual(list.notes[0].text, 'New note');
 };
 storesListinArray();

 function displaysList() {
     describe('#getNotes');
     it('returns the array of notes');
    testList.notes.push(testNote);
    expect.arraysToBeEqual(testList.getNotes(), [testNote]);
 }
 displaysList();
 