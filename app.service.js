angular.module('githubExplorer')
  .service('GitHubService', ['$http', function($http) {
    const apiUrl = 'https://api.github.com';

    this.searchRepositories = function(query) {
      return $http.get(`${apiUrl}/search/repositories?q=${query}`);
    };

    this.getRepository = function(owner, repo) {
      return $http.get(`${apiUrl}/repos/${owner}/${repo}`);
    };

    this.getUser = function(username) {
      return $http.get(`${apiUrl}/users/${username}`);
    };
  }]);
