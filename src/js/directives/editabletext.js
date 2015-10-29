/**
 * Created by Nathan Bellette on 29/10/2015.
 */

(function(){
    angular.module('ng-edit').directive('editableText', editableText);

    function editableText(){
        var directive = {
            restrict: 'A',
            replace: true,
            scope: {

            },
            controller: function($scope){

            },
            template: '<div><input type="text" class="form-control" ng-hide="editorEnabled" ng-model="value"></div>\n<div><p class="form-control-static">{{ value }}</p></div>'
        };

        return directive;
    }

})();