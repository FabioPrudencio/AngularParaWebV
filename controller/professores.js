var professoresModulo = angular.module('professoresModulo',[]);

professoresModulo.controller("professoresCtrl", function ($scope) {
    $scope.professores = [
        {codigo: 1, nome: 'Fabio Prudencio', email: 'fabio@gamil.com', telefone: '1999-9999'},
        {codigo: 2, nome: 'abio Prudencio', email: 'abio@gamil.com', telefone: '2999-9999'},
        {codigo: 3, nome: 'bio Prudencio', email: 'bio@gamil.com', telefone: '3999-9999'},
        {codigo: 4, nome: 'io Prudencio', email: 'io@gamil.com', telefone: '4999-9999'}
    ];

    $scope.selecionaProfessor = function(professorSelecionado) {
        $scope.professor = professorSelecionado;
    }

    $scope.limparCampos = function() {
        delete $scope.professor;
    }

    $scope.salvar = function() {
        $scope.professores.push($scope.professor);
        $scope.limparCampos();
    }

    $scope.excluir = function() {
        $scope.professores.splice($scope.professores.indexOf($scope.professor),1);
        $scope.limparCampos();
    }

    $scope.hasProfessor = function() {
        return $scope.professores.some(function (professor){
            return $scope.professor;
        });
    }

});