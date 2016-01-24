var Module = function Module (moduleName) {
    var moduleName = moduleName;
    var type = null;
    var bodyData  = null;
    var argArray  = null;
    var path  = null;
    var headerMap = null;
    var args = function(argArray) {
        // create map/list with args
    };
    var setType = function(type) {
        // check if type is valid
        this.type = type;
    };
    var setPath = function(path) {
        parsePath(path);
    };
    var parsePath = function(path) {
        // make private if possible
        // parse the path and "assign" any args to the map in argArray
    };
    var setHeader = function(header, value) {
        // put into a map, assigning any values to args to the map in argArray
    };
    var body = function(data) {
        this.bodyData = data;
    };
    var success = function() {
        // return response
    };
    var error = function() {
        // return response
    }
};



var Flexic = {
    createModule : function(moduleName) {
        var newModule = new Module(moduleName);
        // store newModule in datastructure
        return newModule;
    },
    useModule : function(moduleName) {
        // use module stored in datastructure
        // initialize ModuleRunner
        var moduleRunner = new ModuleRunner("get module");
        return moduleRunner;
    }
};


var ModuleRunner = function ModuleRunner() {
    var run = function() {
        // run the module
    }
};