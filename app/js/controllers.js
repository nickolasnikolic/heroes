nonoApp.controller('IndexController', ['$scope', '$state', function($scope, $state) {
  //initial settings
  //redirect to /selection

  //react to situation where entry point is not authorized

  //set links to their actions

  //otherwise, show login button to be handled by the below button

}])

nonoApp.controller('HomeController', ['$scope', function($scope) {
  document.title = 'heroes - home'; //set the page title
}])

nonoApp.controller('SelectionController', ['$scope', function($scope) {
  document.title = 'heroes - selection'; //set the page title
}])

nonoApp.controller('ContactController', ['$scope', function($scope) {
  document.title = 'heroes - contact'; //set the page title
  $('#submitContact').click(function(){
    //push the message to the utility that sends email
    $.post('../api/contact', $scope.message)
      .success(function(data) {
        //do something about it
        console.log(data);
      })
      .error(function(error) {
        //do something about it
        console.log(error);
      });
  });
}]);
