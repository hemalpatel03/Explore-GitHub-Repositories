angular.module('githubExplorer')
  .controller('MainController', ['$scope', 'GitHubService', function($scope, GitHubService) {
    $scope.searchQuery = '';
    $scope.repositories = [];
    $scope.user = null;
    $scope.repoDetails = null;

    $scope.searchRepos = function() {
      GitHubService.searchRepositories($scope.searchQuery).then(function(response) {
        $scope.repositories = response.data.items;
        $scope.repoDetails = null;
        $scope.user = null;
      });
    };

    $scope.getRepoDetails = function(repo) {
      GitHubService.getRepository(repo.owner.login, repo.name).then(function(response) {
        $scope.repoDetails = response.data;
        $scope.user = null;
      });
    };

    $scope.getUserProfile = function(username) {
      GitHubService.getUser(username).then(function(response) {
        $scope.user = response.data;
        $scope.repoDetails = null;
      });
    };
  }]);
