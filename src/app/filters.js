angular.module("demo-contract-app").filter("defaultImage", function () {
    return function (input, param) {
        if (!param) {
            param = "/img/avatar.png";
        }
        if (!input) {
            return param;
        }
        return input;
    };
});
