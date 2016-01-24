var Module = function Module (moduleName) {
    this.moduleName = moduleName;
    this.type = null;
    this.bodyData  = null;
    this.argArray  = null;
    this.path  = null;
    this.headerMap = null;
    this.args = function(argArray) {
        // create map/list with args
    };
    this.setType = function(type) {
        // check if type is valid
        this.type = type;
    };
    this.setPath = function(path) {
        parsePath(path);
    };
    var parsePath = function(path) {
        // make private if possible
        // parse the path and "assign" any args to the map in argArray
    };
    this.setHeader = function(header, value) {
        // put into a map, assigning any values to args to the map in argArray
    };
    this.setBody = function(data) {
        this.bodyData = data;
    };
    this.success = function() {
        // return response
    };
    this.error = function() {
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


var ModuleRunner = function ModuleRunner(module) {
    var module = module;
    var run = function(args) {
        // run the module

    }
};