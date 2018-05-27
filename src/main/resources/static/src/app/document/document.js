angular.module('ngBoilerplate.document',['ui.router', 'ngResource', 'base64'])
.config(function($stateProvider) {
    $stateProvider.state('uploadDocuments', {
            url:'/uploadDocuments',
            views: {
                'main': {
                    templateUrl:'document/document.tpl.html',
                    controller: 'DocumentCtrl'
                }
            },
            data : { pageTitle : "Documents Management" },
            resolve: {
                role: function(accountService) {
                    return accountService.getRole();
                },
                IsLoged: function(accountService) {
                    return accountService.isUserLoggedIn();
                },
                directories: function(documentService) {
                    return documentService.getAllDirectoriesForThisUser();
                }
            }
        });
})
.factory('ObjectService', ["$resource", function($resource) {
    var baseUrl = '/LuceneAnalyzerTester/rest/documents';
    return $resource(baseUrl, {},
        {
            add: {
                url: baseUrl + '/newDocuments',
                headers: {
                    'Content-Type': undefined
                },
                transformRequest: angular.identity,
                method: 'POST'
            }
        });
}])
.factory('documentService', function($resource) {
    var service = {};
    service.getAllDirectoriesForThisUser = function() {
     var Directory = $resource("/LuceneAnalyzerTester/rest/documents/getUserDirectories");
        return Directory.get().$promise.then(function(data) {
            return data.directories;
          });
    };
    return service;
})
.controller("DocumentCtrl", function($scope,$http,$state,ObjectService,role,IsLoged,directories) {

    $scope.isLoggedIn = IsLoged;
    $scope.role = role;
    $scope.directories = directories;
    $scope.createMode = false;
    $scope.uploadMode = false;
    $scope.showFilesNames = false;
    $scope.message = "";
    $scope.selectedDir = null;
       
	$scope.uploadFile=function(){
      var formData = new FormData();
      formData.append('formDataJson', JSON.stringify($scope.touristObject));
      formData.append('directoryName', $scope.selectedDirectory.name);
      var files = file.files;
      for (var i = 0 ; i < files.length ; i ++){
         formData.append('files', files[i]);
      }  
            ObjectService.add(formData).$promise.then(function () {
                $http.get('/LuceneAnalyzerTester/rest/documents/getUserDirectories').success(function(data, status) {                     
                  $scope.directories = data.directories;
                  $scope.createMode = false;                
                }).error(function(data, status) {
                   alert("Error ... " + status);
                });
            }, function () {
                alert('Error while uploading documents!');
            });
  };
  
  $scope.changeCreateMode = function() {
      if($scope.createMode === false) {
         $scope.createMode = true;
         $scope.uploadMode = false;
         $scope.showFilesNames = false;
         $scope.message = "";
      }
      else {
         $scope.createMode = false;
      }
  };
  
  $scope.changeToUploadMode = function(dir) {
      if($scope.selectedDir !== null) {
         $scope.message = "";
         $scope.uploadMode = true;
         $scope.showFilesNames = false;
         $scope.createMode = false;
         $scope.selectedDirectory = $scope.selectedDir;
      } else {
         $scope.message = "Please select directory from the list first!";
      }
  };
  
  $scope.backFromUploadMode = function() {
         $scope.uploadMode = false;
         $scope.selectedRow = null;
         $scope.selectedDir = null;
  };
  
  $scope.createNewDirectory = function() {
        $http.post('/LuceneAnalyzerTester/rest/documents/newDirectory', $scope.directoryName).success(function(data, status) {                                 
                $http.get('/LuceneAnalyzerTester/rest/documents/getUserDirectories').success(function(data, status) {                     
                  $scope.directories = data.directories;            
                }).error(function(data, status) {
                   alert("Error ... " + status);
                });
			}).error(function(data, status) {
				alert("Error ... " + status);
            });
  };
  
  $scope.removeDirectory = function() {
     if($scope.selectedDir !== null) {
        $scope.message = "";
        $http.post('/LuceneAnalyzerTester/rest/documents/removeDirectory/'+ $scope.selectedDir.name + '/' + $scope.selectedDir.createdBy).success(function(data, status) {                                  
                $http.get('/LuceneAnalyzerTester/rest/documents/getUserDirectories').success(function(data, status) {                     
                  $scope.directories = data.directories;
                  $scope.selectedRow = null;
                  $scope.selectedDir = null;    
                  $scope.showFilesNames = false;         
                }).error(function(data, status) {
                   alert("Error ... " + status);
                });
			}).error(function(data, status) {
				alert("Error ... " + status);
            });
      } else {
          $scope.message = "Please select directory from the list first!";
      }
  };
  
    $scope.selectedRow = null;
    $scope.setClickedRow = function (index, dir) {  //function that sets the value of selectedRow to current index
         if (index == $scope.selectedRow) {           
             $scope.selectedRow = null;
             $scope.selectedDir = null;
             $scope.showFilesNames = false; 
         }
         else {
			$scope.selectedRow = index; 
			$scope.selectedDir = dir;    
			$http.get('/LuceneAnalyzerTester/rest/documents/getFilesNames/' + dir.name).success(function(data, status) {                     
                  $scope.filesNames = data;     
                  $scope.showFilesNames = true;       
                }).error(function(data, status) {
                   alert("Error ... " + status);
                });        
         }
     };
  
  $scope.logout = function() {   
		$scope.isLoggedIn = false;
		$http.post("/logout")
        .success(function () {  
           $state.go("home");         
        })
        .error(function (data) {
        });    
    };
        
});


