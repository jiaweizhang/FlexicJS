var Module = function Module (name) {
    moduleName = name;
    argMap = {};
    headerMap = {};
    this.setArgs = function(argArray) {
        // create map/list with args
        return this;
    };
    this.setType = function(typeInput) {
        // check if type is valid
        type = typeInput;
        return this;
    };
    this.setPath = function(path) {
        parsePath(path);
        return this;
    };
    var parsePath = function(pathInput) {
        path = pathInput;
        // make private if possible
        // parse the path and "assign" any args to the map in argArray
    };
    this.setHeader = function(header, value) {
        // put into a map, assigning any values to args to the map in argArray
        return this;
    };
    this.setBody = function(data) {
        this.bodyData = data;
        return this;
    };
    this.run = function(args) {
        // actually use these args here
        // check if args is null or undefined
        // iterate through args otherwise
        console.log('started run request');
        var xhttp = new XMLHttpRequest();
        xhttp.open(type, path, false);
        xhttp.send();
        response = xhttp.responseText;
        console.log(response);
        console.log(xhttp.responseText);
        return this;
    };
    this.then = function(callback) {
        callback("some random response text here");
        callback(response);
    };
};

var modules = {};

var Flexic = {
    createModule : function(moduleName) {
        var newModule = new Module(moduleName);
        // store newModule in datastructure
        modules[moduleName] = newModule;
        return newModule;
    },
    useModule : function(moduleName) {
        // use module stored in datastructure
        console.log(modules[moduleName]);
        return modules[moduleName];
    }
};


