angular
.module('pgOrderingDir', ['ui.sortable'])
.directive('pgOrdering', function() {

  var urlByFormat = {
    'image': '/angular/directives/ordering/image.html'
  }

  return {
    templateUrl: '/angular/directives/ordering/base.html',
    scope: {
      items: '=',
      format: "@"
    },

    link: function(scope) {
      scope.dragControlListener = function() {

      }

      scope.getTemplateByFormat = function() {
        return urlByFormat[scope.format];
      }
    }
  }
});