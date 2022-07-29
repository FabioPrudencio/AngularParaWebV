var cursoModulo = angular.module('cursoModulo',[]);

cursoModulo.controller("cursoCtrl", function ($scope) {
    $scope.professores = [
        {codigo: 1, nome: 'Fabio Prudencio', email: 'fabio@gamil.com', telefone: '1999-9999'},
        {codigo: 2, nome: 'abio Prudencio', email: 'abio@gamil.com', telefone: '2999-9999'},
        {codigo: 3, nome: 'bio Prudencio', email: 'bio@gamil.com', telefone: '3999-9999'},
        {codigo: 4, nome: 'io Prudencio', email: 'io@gamil.com', telefone: '4999-9999'}
    ];

    $scope.cursos = [
        {codigo: 4, nome: 'Java para Web', diashorarios: 'Segundas e quartas, 19hrs', professor: {codigo: 4, nome: 'io Prudencio', email: 'io@gamil.com', telefone: '4999-9999'}},
        {codigo: 3, nome: 'Python', diashorarios: 'Terças e quintas, 18hrs', professor: {codigo: 1, nome: 'Fabio Prudencio', email: 'fabio@gamil.com', telefone: '1999-9999'}},
        {codigo: 2, nome: 'JavaScript', diashorarios: 'Terças e sextas, 16hrs', professor: {codigo: 2, nome: 'abio Prudencio', email: 'abio@gamil.com', telefone: '2999-9999'}},
        {codigo: 1, nome: 'Html-Css', diashorarios: 'Sábados, 14hrs', professor: {codigo: 3, nome: 'bio Prudencio', email: 'bio@gamil.com', telefone: '3999-9999'}}
    ];

    $scope.selecionaCurso = function(cursoSelecionado) {
        $scope.curso = cursoSelecionado;
    }

    $scope.limparCampos = function() {
        delete $scope.curso;
    }

    $scope.salvar = function() {
        $scope.cursos.push($scope.curso);
        $scope.limparCampos();
    }

    $scope.excluir = function() {
        $scope.cursos.splice($scope.cursos.indexOf($scope.curso),1);
        $scope.limparCampos();
    }

    $scope.hasCurso = function() {
        return $scope.cursos.some(function (curso){
            return $scope.curso;
        });
    }

});