console.log("beginning example.js");

Flexic.createModule('moduleOne')
    .setArgs([])
    .setType('GET')
    .setPath('http://httpbin.org/get');



Flexic.useModule('moduleOne')
    .run([], function success(response) {
            console.log('success here');
            console.log(response);
    },
    function error(response){
        console.log("error");
        console.log(response);
    });

