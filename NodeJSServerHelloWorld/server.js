// this file automatically starts the server if everthing goes as planned

// array of our json to return
var array = {
    Name: 'Jefffery Clonne',
    Age: '21',
    Profession: 'Developer',
    Team: 'Derrick and Taufik'
};

// require http-server node module
var http = require('http'),
	//port
    PORT = 8888,

    //bootup the server
    server = function(request,response){
        response.writeHead(200,{'Content-Type':'application/json'});

        // printing json string
        response.end(JSON.stringify(array));
    }

//now create
http.createServer(server).listen(PORT);

//return in terminal
console.log('Server started.');