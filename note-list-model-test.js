var list = new List();
var testList = new List();
var testNote = new Note('New note');
var note = new Note('New note');


function hasEmptyArray(){
    expect.toBeTrue(list.notes.length === 0);
 };
 hasEmptyArray();
 
 function storesListinArray(){
    list.addNote(note);
    expect.toBeEqual(list.notes, ["New note"]);
 };
 storesListinArray();

 function displaysList() {
    testList.notes.push(testNote);
    expect.arraysToBeEqual(testList.getNotes(), [testNote]);
 }
 displaysList();
 