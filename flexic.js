var FlexicModule = function FlexicModule() {
    argMap = {};
    argIndex = {};
    type = '';
    host = '';
    headerMap = {};
    asyncMode = true;
    this.setAsync = function (async) {
        asyncMode = async;
        return this;
    };
    this.setArgs = function (argArray) {
        // create map/list with args
        for (var i = 0; i < argArray.length; i++) {
            argMap[argArray[i]] = null; //TODO: <-- what is this? argArray[i] is going to be a string, not an index
            argIndex[i] = argArray[i];
        }
        return this;
    };
    this.setType = function (typeInput) {
        // check if type is valid
        //TODO: enums if possible for this
        if (typeInput === 'GET' ||
            typeInput === 'PUT' ||
            typeInput === 'POST' ||
            typeInput === 'DELETE' ||
            typeInput === 'HEAD') {
            type = typeInput;
        }
        else {
            //throw exception here bc not a supported HTTP request
            throw 'Unsupported HTTP request';
        }
    };
    this.setHost = function (host) {
        parseHost(host);
        return this;
    };
    var parseHost = function (hostInput) {
        host = hostInput;
        //TODO: make private if possible
        // parse the host and "assign" any args to the map in argArray

    };
    this.setHeader = function (header, value) {
        // put into a map, assigning any values to args to the map in argArray
        headerMap[header] = value;
        return this;
    };
    this.setBody = function (data) {
        bodyData = data;
        return this;
    };
    this.run = function (args, //array of args
                         success, //func run on success
                         error) { //func run on error
        // actually use these args here
        // check if args is null or undefined
        // iterate through args otherwise
        console.log('args in run:');
        console.log(JSON.stringify(args));
        for (var i = 0; i < args.length; i++) {
            var actualArgName = argIndex[i];
            console.log('actualArgName: ' + actualArgName);
            argMap[actualArgName] = args[i];
        }

        console.log('started run request');

        var handleResponse = function (status, responseText) {
            if(status == 200){ //status = OK
                success(responseText);
            }
            else{
                //TODO: Handle depending on other statuses
            }
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
                default:
                    alert("error");
            }
        };

        var http = new XMLHttpRequest();
        var url = host;
        var requestType = type;

        http.onreadystatechange = handleStateChange;
        http.open(requestType, url, asyncMode);

        for (var key in headerMap) {
            if (headerMap.hasOwnProperty(key)) {
                // if the value begins with :
                var value = headerMap[key];
                if (value.indexOf(':') == 0) {
                    // replace the valid with the value from the argMap
                    var realValue = value.substring(1);
                    http.setRequestHeader(key, argMap[realValue]);
                    console.log('key: ' + key + ', value: ' + argMap[realValue]);
                } else {
                    http.setRequestHeader(key, headerMap[key]);
                }
            }
        }

        // if body has to be replaced
        if (bodyData.indexOf(':') == 0) {
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
    this.then = function (success, failure) {
        // asynchronous so only execute after run.handleResponse is completed TODO: do you mean this is synchronous?
        //TODO: Isn't this already handled when you pass in the success and failure function in run?
        // if success, call success

        // if failure, call failure

    };
};

var FlexicModules = {};

var Flexic = {
    createModule: function (moduleName) {
        var newModule = new FlexicModule(moduleName);
        // store newModule in datastructure
        FlexicModules[moduleName] = newModule;
        return newModule;
    },
    useModule: function (moduleName) {
        // use module stored in datastructure
        return FlexicModules[moduleName];
    }
};


