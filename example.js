console.log("beginning example.js");

Flexic.createModule('moduleOne')
    .setArgs([])
    .setType('GET')
    .setPath('http://httpbin.org/get');



Flexic.useModule('moduleOne')
    .run([])
    .then(function callback(response){
        console.log('something here');
        console.log(response);
    });

