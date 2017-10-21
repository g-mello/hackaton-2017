// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova', 'ngMask'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.dadosTerreno', {
      url: '/dadosTerreno',
      views: {
        'menuContent': {
          templateUrl: 'templates/dadosTerreno.html'
        }
      }
  })

  .state('app.duvidas', {
      url: '/duvidas',
      views: {
        'menuContent': {
          templateUrl: 'templates/duvidas.html'
        }
      }
  })

  .state('app.patrocinio', {
      url: '/patrocinio',
      views: {
        'menuContent': {
          templateUrl: 'templates/patrocinio.html'
        }
      }
  })

  .state('app.versao', {
      url: '/versao',
      views: {
        'menuContent': {
          templateUrl: 'templates/versao.html'
        }
      }
  })

  .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html'
        }
      }
  })

  .state('app.enviarImagem', {
      url: '/enviarImagem',
      views: {
        'menuContent': {
          templateUrl: 'templates/enviarImagem.html'
        }
      }
  })

  .state('app.dadosSolicitante', {
      url: '/dadosSolicitante',
      views: {
        'menuContent': {
          templateUrl: 'templates/dadosSolicitante.html'
        }
      }
  })

  .state('app.buscarSolicitacoes', {
    url: '/buscarSolicitacoes',
    views: {
      'menuContent': {
        templateUrl: 'templates/buscarSolicitacoes.html'
      }
    }
  })

  .state('app.map', {
    url: '/map',
    views: {
      'menuContent': {
        templateUrl: 'templates/map.html'
      }
    }
  })

  .state('app.mapa', {
      url: '/mapa',
      views: {
        'menuContent': {
          templateUrl: 'templates/map.html',
          controller: 'MapCtrl'
        }
      }
  })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
})

.controller('MapCtrl', function($scope, $state, $cordovaGeolocation) {
  var options = {timeout: 10000, enableHighAccuracy: true};
 
  $cordovaGeolocation.getCurrentPosition(options).then(function(position){
 
    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

 
    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    google.maps.event.addListenerOnce($scope.map, 'idle', function(){

      var image = 'https://scontent.frao1-2.fna.fbcdn.net/v/t34.0-12/22686503_1402165943229326_1716830734_n.png?oh=83e34602f58858017efe79be96bef769&oe=59ED6AA1';

      var marca1 = new google.maps.Marker({
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        position: latLng,
        icon:image
      }); 
    });
 
  }, function(error){
    console.log("Could not get location");
  });
})

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

  $scope.inserirCidadao = function(){
        $http.post('http://localhost:3000/PostCidadao', $scope.cidadao)
        .then(function (response){
            alert("Cidadao inserido com sucesso");
            $scope.cidadao = {};
        });
			
  };

});
