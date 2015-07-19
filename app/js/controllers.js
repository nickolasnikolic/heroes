heroesApp.controller('IndexController', ['$scope', '$state', function($scope, $state) {
  //initial settings
  //redirect to /selection

  //react to situation where entry point is not authorized

  //set links to their actions

  //otherwise, show login button to be handled by the below button

}])

heroesApp.controller('HomeController', ['$scope', '$state', function($scope, $state) {
  document.title = 'heroes - home'; //set the page title

  $('#findJob').click(function(){
    $state.go('selection');
  });

}])

heroesApp.controller('SelectionController', ['$scope', function($scope) {
  document.title = 'heroes - selection'; //set the page title

  $scope.dummyFunction = function(){ console.log('here!!'); };

  $.getJSON('../api/selection')
  .success(function(data) {
    console.log(data);
    $scope.jobsData = data;
    $scope.$apply();

    //stack the job listings
    $('#gridDisplay').packery({
      // options
      itemSelector: '.job',
      gutter: 1
    });
  });
}])

heroesApp.controller('ContactController', ['$scope', function($scope) {
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
