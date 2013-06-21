    var fileData = []; // global variable to hold all of the data read in from the external file

    loadData(); // call the loadData function when the App starts

     

    function loadData() {

    // Process box data

    log(“Reading data…”);

    $.ajax({

    url: “main/media/images/myData.json”,

    dataType: ‘json’,

    success: function(data) {

    log(“Read card text file … “);

    fileData = data;

    log(“length of fileData is ” + fileData.length);

    },

    error: function(XMLHttpRequest, textStatus, errorThrown) {

    log(“Failed to load myData.json because: ” + errorThrown);

    },

    async: false

    });

    }
