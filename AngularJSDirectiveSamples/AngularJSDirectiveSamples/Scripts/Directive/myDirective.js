angular.module("directive-module", []).directive("myDirective", function () {
    return {
        replace: true,
        restrict: "E",
        scope: {
            name: "="
        },
        //template: "<div><h2>我叫 {{ name }}</h2></div>",
        //template: "<div><input id='Button1' type='button' value='button' ng-click='name()' /></div>"
        template: "<div>我叫 {{ name }} <input id='Button1' type='button' value='button' ng-click='hello()' /></div>",
        link: function (scope, element, attrs) {
            scope.hello = function () {
                alert("hello" + scope.name + "\nouterHTML: " + element[0].outerHTML + "\nid: " + attrs.id);
            };
        }
    };
});