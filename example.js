

var moduleOne = Flexic.createModule("moduleName")
    .args(["groupId", "subgroupId"])
    .setType("GET")
    .setPath("/api/groups/:groupId/:subgroupId")
    .setHeader("Content-type", "application/json")
    .success()
    .error();






Flexic.useModule("moduleName")
    .run()
    .success(console.log(response))
    .error(console.log(reponse));


