myApp.controller('BarnYardController', ['$scope', '$http', function($scope, $http) {
  console.log('barn controller up');
  var key = '26c8db19eb970914fd86b9230e45863a';
  var baseURL = 'http://api.petfinder.com/';
  $scope.breed = '';

  $scope.getRandomPet = function() {
    console.log('button clicked');
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=barnyard'; //check casing of 'pig'
    query += '&output=basic';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

    console.log(request);

    $http.jsonp(request).then(
      function(response) {
        console.log(response.data);
        $scope.animal = response.data.petfinder.pet;
        $scope.breed = $scope.animal.animal.$t;
      }
    )
  }

}]);
