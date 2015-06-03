angular
.module('pgOrderingDir', ['ui.sortable'])
.directive('pgOrdering', function() {

  var urlByFormat = {
    'image': '/angular/directives/ordering/image.html',
    'audio': '/angular/directives/ordering/audio.html',
    'text': '/angular/directives/ordering/text.html'
  }

  return {
    templateUrl: '/angular/directives/ordering/base.html',
    scope: {
      items: '=',
      format: "@",
      requireField: "@"
    },

    link: function(scope) {

      if (scope.dragControlListener == null) {
        scope.dragControlListener = {
          accept: function (src, dst) {
            return !scope.requireField || scope.requireField in src.itemScope.item;
          }
        }
      }

      scope.getTemplateByFormat = function() {
        return urlByFormat[scope.format];
      }
    }
  }
});