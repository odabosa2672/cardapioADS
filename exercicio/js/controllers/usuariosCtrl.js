angular.module('cardapioADSApp').controller('usuariosCtrl',function($scope){

    $scope.usuario = {
        id: null,
        nome: null,
        login: null,
        senha: null
    }

    $scope.listaUsuarios = [];

    $scope.salvar = function(usuarioCadastrado){
        $scope.listaUsuarios.push(usuarioCadastrado);
        // reseta os campos dos usuarios 
        delete $scope.usuario;
        $('#cadastroUsuariosModal').modal('hide');
    }
});