var list = new List();
var testList = new List();
var testNote = new Note('New note');

function hasEmptyArray(){
    test.isTrue(list.notes.length === 0);
 };
 hasEmptyArray();
 
 function storesListinArray(){
    list.addNote("New note");
    test.isEqual(list.notes[0].text, "New note");
 };
 storesListinArray();

 function displaysList() {
    testList.notes.push(testNote);
    test.arraysEqual(testList.getNotes(), [testNote]);
 }
 displaysList();
 