angular.module('cardapioADSApp',['ngRoute'])

.config( function($routeProvider){

    var rota = {};
    rota.templateUrl = '';
    rota.controller = '';
        
    $routeProvider.when('/',{
        templateUrl: 'view/login.html',
        controller: 'loginCtrl'
    }).when('/home',{
        templateUrl: 'view/home.html',
        controller: 'homeCtrl'
    }).when('/pedidos',{
        templateUrl: 'view/pedidos.html',
        controller: 'pedidosCtrl'
    }).when('/produtos',{
        templateUrl: 'view/produtos.html',
        controller: 'pedidosCtrl'
    }).when('/clientes',{
        templateUrl: 'view/clientes.html',
        controller: 'clientesCtrl'
    }).when('/usuarios',{
        templateUrl: 'view/usuarios.html',
        controller: 'usuariosCtrl'
    });

    $routeProvider.otherwise({
        redirectTo: '/'
    });
    }
);