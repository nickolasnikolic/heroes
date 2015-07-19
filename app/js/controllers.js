nonoApp.controller('IndexController', ['$scope', '$state', function($scope, $state) {
  //initial settings
  //redirect to /selection

  //react to situation where entry point is not authorized

  //set links to their actions

  //otherwise, show login button to be handled by the below button

}])

nonoApp.controller('HomeController', ['$scope', '$state', function($scope, $state) {
  document.title = 'heroes - home'; //set the page title

  $('#findJob').click(function(){
    $state.go('selection');
  });

}])

nonoApp.controller('SelectionController', ['$scope', function($scope) {
  document.title = 'heroes - selection'; //set the page title

  $scope.dummyData = [
    {
      'heading': "First one",
      'articles': [
        {'title': 1},
        {'title': 2},
        {'title': 3},
        {'title': 4}
      ]
    },{
      'heading': "Second one",
      'articles': [
        {'title': 1},
        {'title': 2},
        {'title': 3},
        {'title': 4},
        {'title': 5},
      ]
    },{
      'heading': "Third one",
      'articles': [
        {'title': 1},
        {'title': 2}
      ]
    },{
      'heading': "fourth one",
      'articles': [
        {'title': 1}
      ]
    },{
      'heading': "fifth one",
      'articles': [
        {'title': 1}
      ]
    },{
      'heading': "sixth one",
      'articles': [
        {'title': 1}
      ]
    },{
      'heading': "First one",
      'articles': [
        {'title': 1},
        {'title': 2},
        {'title': 3},
        {'title': 4}
      ]
    },{
      'heading': "Second one",
      'articles': [
        {'title': 1},
        {'title': 2},
        {'title': 3},
        {'title': 4},
        {'title': 5},
      ]
    },{
      'heading': "Third one",
      'articles': [
        {'title': 1},
        {'title': 2}
      ]
    },{
      'heading': "fourth one",
      'articles': [
        {'title': 1}
      ]
    },{
      'heading': "fifth one",
      'articles': [
        {'title': 1}
      ]
    },{
      'heading': "sixth one",
      'articles': [
        {'title': 1}
      ]
    },{
      'heading': "First one",
      'articles': [
        {'title': 1},
        {'title': 2},
        {'title': 3},
        {'title': 4}
      ]
    },{
      'heading': "Second one",
      'articles': [
        {'title': 1},
        {'title': 2},
        {'title': 3},
        {'title': 4},
        {'title': 5},
      ]
    },{
      'heading': "Third one",
      'articles': [
        {'title': 1},
        {'title': 2}
      ]
    },{
      'heading': "fourth one",
      'articles': [
        {'title': 1}
      ]
    },{
      'heading': "fifth one",
      'articles': [
        {'title': 1}
      ]
    },{
      'heading': "sixth one",
      'articles': [
        {'title': 1}
      ]
    },{
      'heading': "First one",
      'articles': [
        {'title': 1},
        {'title': 2},
        {'title': 3},
        {'title': 4}
      ]
    },{
      'heading': "Second one",
      'articles': [
        {'title': 1},
        {'title': 2},
        {'title': 3},
        {'title': 4},
        {'title': 5},
      ]
    },{
      'heading': "Third one",
      'articles': [
        {'title': 1},
        {'title': 2}
      ]
    },{
      'heading': "fourth one",
      'articles': [
        {'title': 1}
      ]
    },{
      'heading': "fifth one",
      'articles': [
        {'title': 1}
      ]
    },{
      'heading': "sixth one",
      'articles': [
        {'title': 1}
      ]
    },{
      'heading': "First one",
      'articles': [
        {'title': 1},
        {'title': 2},
        {'title': 3},
        {'title': 4}
      ]
    },{
      'heading': "Second one",
      'articles': [
        {'title': 1},
        {'title': 2},
        {'title': 3},
        {'title': 4},
        {'title': 5},
      ]
    },{
      'heading': "Third one",
      'articles': [
        {'title': 1},
        {'title': 2}
      ]
    },{
      'heading': "fourth one",
      'articles': [
        {'title': 1}
      ]
    },{
      'heading': "fifth one",
      'articles': [
        {'title': 1}
      ]
    },{
      'heading': "sixth one",
      'articles': [
        {'title': 1}
      ]
    }
  ];
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
