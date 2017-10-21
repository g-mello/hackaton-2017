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
  
  $scope.servicos = [
    {idServico: '1', descricao: 'Requerimento para limpeza de terrenos'},
    {idServico: '2', descricao: 'Requerimento de reparo de vias públicas'},
    {idServico: '3', descricao: 'Requerimento de poda de árvores'},
    {idServico: '4', descricao: 'Limpeza de área pública'},
    {idServico: '5', descricao: 'Limpeza de boca de lobo'},
    {idServico: '6', descricao: 'Limpeza de imóvel abandonado'},
    {idServico: '7', descricao: 'Colocação de lâmpada'},
    {idServico: '8', descricao: 'Retirada de boca de lobo'},
    {idServico: '9', descricao: 'Abertura de via pública'},
    {idServico: '10', descricao: 'Colocação e manutenção de semáforo'},
    {idServico: '11', descricao: 'Retirada de postes de iluminação pública'},
  ]
});




