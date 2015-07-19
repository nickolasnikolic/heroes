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

heroesApp.controller('SelectionController', ['$scope', '$state', function($scope, $state) {
  document.title = 'heroes - selection'; //set the page title

  $scope.dummyFunction = function(){ console.log('here!!'); };

  $.getJSON('../api/selection/' + 'housekeeper/' + '12345')
    .success(function(data) {

      /*
      //json key:
      [
      {
            "jobtitle": "Web Developer / Programmer Paid Internship",
            "company": "GCG",
            "city": "Los Angeles",
            "state": "CA",
            "country": "US",
            "formattedLocation": "Los Angeles, CA",
            "source": "Indeed",
            "date": "Wed, 15 Jul 2015 01:26:09 GMT",
            "snippet": "Experience with PHP</b> and ASP preferred. We are a Start-up Tech & Creative Design Agency head-quartered in the Penthouse in one of downtown’s premier buildings....",
            "url": "http://www.indeed.com/viewjob?jk=7c5ad7fd6dcd0817&qd=iPpA4_HSyy9aiRo4QLyc3RDB7aycETF3F5B6ESq0bN5D_K4aloMIAphR4Dk1NLv7_5NnWWGTuQiiwcCbFYgxrx6nojn63AzuMLy1372sZMY&indpubnum=4779755742469402&atk=19qk3humaa38ifho",
            "onmousedown": "indeed_clk(this, '3326');",
            "jobkey": "7c5ad7fd6dcd0817",
            "sponsored": false,
            "expired": false,
            "indeedApply": true,
            "formattedLocationFull": "Los Angeles, CA 90017",
            "formattedRelativeTime": "4 days ago"
        }
      ]
      */

      console.log(data.results);
      $scope.jobsData = data.results;
      $scope.$apply();

      //stack the job listings
      $('#gridDisplay').packery({
        // options
        itemSelector: '.job',
        gutter: 1
      });
    })
    .error(function(error){
      console.log('error:');
      console.log(error);
    });

    

}])

heroesApp.controller('ContactController', ['$scope', '$state', function($scope, $state) {
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
