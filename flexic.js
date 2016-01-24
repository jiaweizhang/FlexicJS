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
    this.run = function(args, success, error) {
        // actually use these args here
        // check if args is null or undefined
        // iterate through args otherwise

        console.log('started run request');

        var handleResponse = function (status, responseText) {
            response = responseText;
            success(response);
        };
        var handleStateChange = function () {
            switch (http.readyState) {
                case 0 : // UNINITIALIZED
                case 1 : // LOADING
                case 2 : // LOADED
                case 3 : // INTERACTIVE
                    break;
                case 4 : // COMPLETED
                    handleResponse(http.status, http.responseText);
                    return this;
                    break;
                default: alert("error");
            }
        };

        var http=new XMLHttpRequest();
        var url = path; // fill in here
        var requestType = type; // check if valid (or maybe check upon setting)

        http.onreadystatechange=handleStateChange;
        http.open(requestType, url, true);
        http.setRequestHeader("Content-type", "application/json"); // hardcoded change later
        http.send(null);


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


