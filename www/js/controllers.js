angular.module('starter.controllers', ['ngMask'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http) {
  
  
//-------------------------------------------------------------------------------------------------------------

        //Codigo para API do CEP

 //-------------------------------------------------------------------------------------------------------------

  $scope.consultarEndereco = function (cep){
    var urlApi = 'https://viacep.com.br/ws/'+cep+'/json/';
    console.log(urlApi)
    $http.get(urlApi)
    .success(function (data){   
      console.log(data) 
        $scope.endereco = data; 
    })

    .error(function (data, status, headers, config) {
      alert('Sorry, no service available!')
    });
  }
  
  
});




