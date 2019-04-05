var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

//functie om items en hoeveelheden toe te voegen aan lijst
function myFunction() {
    //waardes van item en hoeveelheid inlezen
    var newItem = document.getElementById("newItem").value;
    var newQuantity = document.getElementById("newQuantity").value;

    //nieuwe rij in tabel
    var tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    var newRow = tableRef.insertRow(tableRef.rows.length);
    var newCell = newRow.insertCell(0);
    var newCell1 = newRow.insertCell(1);
    //nieuwe waardes meegeven
    var newText  = document.createTextNode(newItem);
    var newText1  = document.createTextNode(newQuantity);
    newCell.appendChild(newText);
    newCell1.appendChild(newText1);
    //verwijder de waarden van de form
    document.getElementById("myForm").reset();    
    document.getElementById("myForm1").reset();    

}

//functie om een bepaalde rij te verwijderen
function deleteFunction(){
    var rowToDelete = document.getElementById("deleteRow").value;
    document.getElementById("myTable").deleteRow(rowToDelete); 
    //verwijder de waarden van de form
    document.getElementById("myFormDel").reset();    

}
