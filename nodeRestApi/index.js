var express = require('express');
var app = express();
var fs = require("fs");

//------------------------------------------------

// ORDERS

/*
--------------------------------------------------
DELETING DATA FROM THE ORDERS JSON ARRAY IN JSONDATA
--------------------------------------------------
*/
app.delete('/deleteOrder/:id', function (req, res) {
   fs.readFile( __dirname + "/jsonData/" + "orders.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["order" + req.params.id];
       
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

/*
--------------------------------------------------
GETTING ORDERS BY THEIR IDs FROM ORDERS JSON FILE IN JSONDATA
--------------------------------------------------
*/
app.get('/orders/:id', function (req, res) {
   fs.readFile( __dirname + "/jsonData/" + "orders.json", 'utf8', function (err, data) {
       orders = JSON.parse( data );
       var order = orders["order" + req.params.id] 
       console.log( order );
       res.end( JSON.stringify(order));
   });
})

/*
--------------------------------------------------
POSTING DATA INTO THE ORDERS JSON ARRAY IN JSONDATA
--------------------------------------------------
*/
var order = {
   "order6" : {
    	"name" : "Watermelon Smoothie",
    	"type" : "Soft",
    	"by" : "Jane Doe",
    	"id" : 6
    }
};

app.post('/addOrder', function (req, res) {
   fs.readFile( __dirname + "/jsonData/" + "orders.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["order6"] = order["order6"];
       console.log( data );
       res.end( JSON.stringify(data));
   });
});

/*
--------------------------------------------------
GETTING ALL ORDERS FROM ORDERS JSON FILE IN JSONDATA
--------------------------------------------------
*/
app.get('/orders', function (req, res) {
   fs.readFile( __dirname + "/jsonData/" + "orders.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
});

//------------------------------------------------

// MENU ------------------------------------------

/*
--------------------------------------------------
DELETING DATA FROM THE MENU JSON ARRAY IN JSONDATA
--------------------------------------------------
*/
app.delete('/deleteMenu/:id', function (req, res) {
   fs.readFile( __dirname + "/jsonData/" + "menu.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["menu" + req.params.id];
       
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

/*
--------------------------------------------------
GETTING MENUS BY THEIR IDs FROM MENUS JSON FILE IN JSONDATA
--------------------------------------------------
*/
app.get('/menu/:id', function (req, res) {
   fs.readFile( __dirname + "/jsonData/" + "menu.json", 'utf8', function (err, data) {
       menus = JSON.parse( data );
       var menu = menus["menu" + req.params.id] 
       console.log( menu );
       res.end( JSON.stringify(menu));
   });
})


/*
--------------------------------------------------
POSTING DATA INTO THE MENU JSON ARRAY IN JSONDATA
--------------------------------------------------
*/
var menu = {
	   "menu6" : {
	    	"name" : "White Wine",
	    	"type" : "Hard"
	    }
};

app.post('/addMenu', function (req, res) {
   fs.readFile( __dirname + "/jsonData/" + "menu.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["menu6"] = menu["menu6"];
       console.log( data );
       res.end( JSON.stringify(data));
   });
});

/*
--------------------------------------------------
GETTING ALL MENU ITEMS FROM JSON FILE IN JSONDATA
--------------------------------------------------
*/
app.get('/menu', function (req, res) {
   fs.readFile( __dirname + "/jsonData/" + "menu.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
});


//------------------------------------------------

// HOME ------------------------------------------

/*
--------------------------------------------------
GETTING THE DOC FROM TXT FILE IN THE ROOT FOLDER
--------------------------------------------------
*/
app.get('/', function (req, res) {
   fs.readFile( __dirname + "/" + "index.txt", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
});

// for setting up the app's port and address and printing it in the console
var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("app listening at http://%s:%s", host, port)

});