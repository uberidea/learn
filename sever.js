var http = require('http');
var path = require('path');
var fs   = require('fs');

//Missing Dependecies - mime 
var cache = {};
var server = http.createServer(function(request,response){
    var filePath = false;

    if(request.url=='/'){
        filePath = "/public/html/index.html";
    }else{
        filePath = "public" + request.url;
    }
    var absPath = './'+filePath;
});

function serveStatic(response,cache,absPath){
    if(cache[absPath]){
        sendFile(response,absPath,cache[absPath]);
    }else{
        fs.exists
    }
}  