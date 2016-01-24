var Module = function Module () {
    argMap = {};
    argIndex = {};
    headerMap = {};
    this.setArgs = function(argArray) {
        // create map/list with args
        for (var i=0; i<argArray.length; i++) {
            argMap[argArray[i]] = null;
            argIndex[i] = argArray[i];
        }
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
        headerMap[header] = value;
        return this;
    };
    this.setBody = function(data) {
        bodyData = data;
        return this;
    };
    this.run = function(args, success, error) {
        // actually use these args here
        // check if args is null or undefined
        // iterate through args otherwise
        console.log('args in run:');
        console.log(JSON.stringify(args));
        for (var i=0; i<args.length; i++) {
            var actualArgName = argIndex[i];
            console.log('actualArgName: '+actualArgName);
            argMap[actualArgName] = args[i];
        }

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

        for (var key in headerMap) {
            if (headerMap.hasOwnProperty(key)) {
                // if the value begins with :
                var value = headerMap[key];
                if (value.indexOf(':')==0) {
                    // replace the valid with the value from the argMap
                    var realValue = value.substring(1);
                    http.setRequestHeader(key, argMap[realValue]);
                    console.log('key: '+key+', value: '+argMap[realValue]);
                } else {
                    http.setRequestHeader(key, headerMap[key]);
                }
                //alert(key + " -> " + p[key]);
            }
        }

        // if body has to be replaced
        if (bodyData.indexOf(':')==0) {
            var bodyVar = bodyData.substring(1);
            bodyData = argMap[bodyVar];
        }

        //http.setRequestHeader("Content-type", "application/json"); // hardcoded change later

        console.log('argMap:');
        console.log(JSON.stringify(argMap));
        console.log('headerMap:');
        console.log(JSON.stringify(headerMap));
        console.log('argIndex:');
        console.log(JSON.stringify(argIndex));

        http.send(bodyData);


    };
    this.then = function(success, failure) {
        // asynchronous so only execute after run.handleResponse is completed

        // if success, call success

        // if failure, call failure


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


