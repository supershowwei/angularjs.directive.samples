angular.module("indexApp")
    .controller("indexController",
    [
        function () {
            var self = this;

            self.name = "軟體主廚";

            //self.name = function () {
            //    alert("軟體主廚");
            //}
        }
    ]);