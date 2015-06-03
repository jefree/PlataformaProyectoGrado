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
      dragControlListener: '='
    },

    link: function(scope) {

      scope.getTemplateByFormat = function() {
        return urlByFormat[scope.format];
      }
    }
  }
});