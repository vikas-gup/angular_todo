angular.module('angularDemoApp').component('myHello', {
  templateUrl: '/components/myHello/myHello.html',
  bindings: {
    obj: '='
  }
});