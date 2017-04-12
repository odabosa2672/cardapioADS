angular.module('cardapioADSApp')

.controller('loginCtrl',function($scope,$location){

    $scope.usuario = {
        senha: null,
        login: null
    }

    var usuarioPadrao = {};
    usuarioPadrao.login = 'admin';
    usuarioPadrao.senha = 'admin';

    $scope.acessarSistema = function(usuarioInformado){
        if(usuarioInformado.login == usuarioPadrao.login && usuarioInformado.senha == usuarioPadrao.senha){
            console.log('login efetuado!!');
            $location.path('/home');
        }else{
            console.log('não foi dessa vez CHAMPZ!!');
        }
    }
});