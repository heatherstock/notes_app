var list = new List();

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
    list.addNote("New note");
    test.arraysEqual(list.getNotes().text, ["New note"])
 }
 displaysList();
 