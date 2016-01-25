console.log("beginning example.js");

var exampleModule = new FlexicModule()
    .setArgs(['arg1', 'arg2', 'arg3'])
    .setType('POST')
    .setPath('http://httpbin.org/post')
    .setBody(':arg3')
    .setHeader('Content-type', ':arg2')
    .setHeader('Authorization', ':arg1');



exampleModule.useModule()
    .run(['Bearer ', 'application/json', 'some body here'], function success(response) {
            console.log('success here');
            console.log(response);
    },
    function error(response){
        console.log("error");
        console.log(response);
    });


// Desired syntax:

/*

Flexic.useModule('moduleOne')
    .run(['Bearer '])
    .then(function success(response) {
            console.log('success here');
            console.log(response);
        },
        function error(response){
            console.log("error");
            console.log(response);
        });

*/