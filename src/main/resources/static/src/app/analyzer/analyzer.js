angular.module('ngBoilerplate.analyzer',['ui.router', 'ngResource', 'base64'])
.config(function($stateProvider) {
    $stateProvider.state('testAnalyzer', {
            url:'/testAnalyzer',
            views: {
                'main': {
                    templateUrl:'analyzer/analyzerTest.tpl.html',
                    controller: 'TestAnalyzerCtrl'
                }
            },
            data : { pageTitle : "Test Analyzer" },
            resolve: {
            benchmarks: function(benchmarkService2) {
                 return benchmarkService2.getAllBenchmarksForThisUser();
             },
             analyzers: function(analyzerService) {
                    return analyzerService.getAllAnalyzers();
             },
             role: function(accountService) {
                 return accountService.getRole();
             },
             IsLoged: function(accountService) {
                return accountService.isUserLoggedIn();
             }
         }
   })
   .state('analyzerManagement', {
            url:'/analyzerManagement',
            views: {
                'main': {
                    templateUrl:'analyzer/analyzer.tpl.html',
                    controller: 'AnalyzerCtrl'
                }
            },
            data : { pageTitle : "Analyzer Management" },
            resolve: {    
             analyzers: function(analyzerService) {
                 return analyzerService.getAllAnalyzers();
             },      
             role: function(accountService) {
                 return accountService.getRole();
             },
             IsLoged: function(accountService) {
                return accountService.isUserLoggedIn();
             }
        }
    });
})
.factory('benchmarkService2', function($resource) {
    var service = {};
    service.getAllBenchmarksForThisUser = function() {
     var Benchmark = $resource("/LuceneAnalyzerTester/rest/benchmark/getAll2");
        return Benchmark.get().$promise.then(function(data) {
            return data.benchmarks;
          });
    };
    return service;
})
.factory('analyzerUploadService', ["$resource", function($resource) {
    var baseUrl = '/LuceneAnalyzerTester/rest/analyzer';
    return $resource(baseUrl, {},
        {
            add: {
                url: baseUrl + '/newAnalyzer',
                headers: {
                    'Content-Type': undefined
                },
                transformRequest: angular.identity,
                method: 'POST'
            }
        });
}])
.controller("TestAnalyzerCtrl", function($scope,$http,$state,benchmarks,analyzers,role,IsLoged) {

    $scope.model = {};
    $scope.testModel = {};
    $scope.resultDocs = {};
    $scope.isLoggedIn = IsLoged;
    $scope.role = role;
    $scope.analyzers = analyzers;
    $scope.currentBenchmark = {};
    $scope.currentBenchmark.searchModel = {};
    $scope.allBenchmarkAnalyzerResultDocs = {};
    $scope.allTestingkAnalyzerResultDocs = {};
    $scope.ready = false;
    $scope.showDetails = false;
    $scope.haveBenchmark = false;
    var currentIndex = 0;
    $scope.sortType = 'fileName'; 
    $scope.sortReverse = false;  
    
    if(analyzers.length !== 0) {
       $scope.selectedAnalyzer = analyzers[0].analyzer_Id;
    }
    
	if(benchmarks.length !== 0) {
        $scope.currentBenchmark = benchmarks[0];
        $scope.haveBenchmark = true;
        currentIndex = 0;
	}
	else {
        $scope.haveBenchmark = false;
	} 
	
	$scope.model.analyzerType = "standardSerbianAnalyzer";
	
	$scope.previous = function() {
         if(currentIndex - 1 < 0) {
             currentIndex = benchmarks.length-1;
             $scope.currentBenchmark = benchmarks[currentIndex];
         }
         else {
            currentIndex = currentIndex - 1;
            $scope.currentBenchmark = benchmarks[currentIndex];
         }
	};
	
	$scope.next = function() {
         if(currentIndex + 1 >= benchmarks.length) { 
            currentIndex = 0;
            $scope.currentBenchmark = benchmarks[currentIndex];
         }
         else {
            currentIndex = currentIndex + 1;
            $scope.currentBenchmark = benchmarks[currentIndex];
         }
	};
    $scope.changeFilter = function() {
        if($scope.filterSelected === true) {
            $scope.allBenchmarkAnalyzerResultDocsFiltered = [];
            $scope.allTestingkAnalyzerResultDocsFiltered = [];
            $scope.allBenchmarkAnalyzerResultDocsTemp = $scope.allBenchmarkAnalyzerResultDocs;
            $scope.allTestingkAnalyzerResultDocsTemp = $scope.allTestingkAnalyzerResultDocs;
            
            for(var i=0; i<$scope.allBenchmarkAnalyzerResultDocs.length; i++) {
              for(var j=0; j<$scope.allTestingkAnalyzerResultDocs.length; j++) {
                 if($scope.allBenchmarkAnalyzerResultDocs[i].fileName == $scope.allTestingkAnalyzerResultDocs[j].fileName) {
                     if($scope.allBenchmarkAnalyzerResultDocs[i].relevant !== $scope.allTestingkAnalyzerResultDocs[j].relevant) {
                         $scope.allBenchmarkAnalyzerResultDocsFiltered.push($scope.allBenchmarkAnalyzerResultDocs[i]);
                     }
                 }
              }
            }
            
            for(var f=0; f<$scope.allTestingkAnalyzerResultDocs.length; f++) {
              for(var s=0; s<$scope.allBenchmarkAnalyzerResultDocs.length; s++) {
                 if($scope.allTestingkAnalyzerResultDocs[f].fileName == $scope.allBenchmarkAnalyzerResultDocs[s].fileName) {
                     if($scope.allTestingkAnalyzerResultDocs[f].relevant !== $scope.allBenchmarkAnalyzerResultDocs[s].relevant) {
                         $scope.allTestingkAnalyzerResultDocsFiltered.push($scope.allTestingkAnalyzerResultDocs[f]);
                     }
                 }
              }
            }
            $scope.allBenchmarkAnalyzerResultDocs = $scope.allBenchmarkAnalyzerResultDocsFiltered;
            $scope.allTestingkAnalyzerResultDocs =  $scope.allTestingkAnalyzerResultDocsFiltered;
            
        } else {
            $scope.allBenchmarkAnalyzerResultDocs = $scope.allBenchmarkAnalyzerResultDocsTemp;
            $scope.allTestingkAnalyzerResultDocs = $scope.allTestingkAnalyzerResultDocsTemp;
        }
        
    };
	
	$scope.models = [];
	$scope.selectedResult = null;
    $scope.setSelectedResult = function (index, analysisResult) {  //function that sets the value of selectedRow to current index
         if (index == $scope.selectedResult) {           
             $scope.selectedResult = null;
             $scope.showDetails = false;
         }
         else {
			$scope.selectedResult = index; 
			$scope.selectedAnalysisResult = analysisResult;    
			var a = analysisResult.documentsBenchmark;
            var b = analysisResult.restDocumentsBenchmark;
            $scope.allBenchmarkAnalyzerResultDocs = a.concat(b);
            var c = analysisResult.documents;
            var d = analysisResult.restDocuments;
            $scope.allTestingkAnalyzerResultDocs = c.concat(d);
			$scope.showDetails = true;
			$scope.models = [];
			if($scope.filterSelected === true) {
                 $scope.changeFilter();
			}
         }
     };
	
	$scope.testAnalyzer = function() {
            //$scope.currentBenchmark.analyzerType = $scope.selectedAnalyzer;
            $http.post('/LuceneAnalyzerTester/rest/analyzer/test', $scope.currentBenchmark).success(function(data, status) {                     
              $scope.analysisResultList = data.analysisResultList;
             
                if(data.analysisResultList.length === 0) {              
                      $scope.ready = false;
                } 
                else { 
                   $scope.ready = true;
                                     
                   $scope.average_precision = 0;
                   for(var i=0; i<data.analysisResultList.length; i++) {
                       //$scope.analysisResultList[i].analysisResultModel.precision = Number($scope.analysisResultList[i].analysisResultModel.precision.toFixed(2));
                       $scope.average_precision = $scope.average_precision + $scope.analysisResultList[i].analysisResultModel.precision;
                   }
                   $scope.average_precision = $scope.average_precision/data.analysisResultList.length;
                   $scope.average_precision = $scope.average_precision.toFixed(2);
                   
                   $scope.average_retrieval = 0;
                   for(var k=0; k<data.analysisResultList.length; k++) {
                       //$scope.analysisResultList[i].analysisResultModel.retrieval = Number($scope.analysisResultList[i].analysisResultModel.retrieval.toFixed(2));
                       $scope.average_retrieval = $scope.average_retrieval + data.analysisResultList[k].analysisResultModel.retrieval;
                   }
                   $scope.average_retrieval = $scope.average_retrieval/data.analysisResultList.length;
                   $scope.average_retrieval = $scope.average_retrieval.toFixed(2);
                   
                   $scope.average_fmera = 0;
                   for(var j=0; j<data.analysisResultList.length; j++) {
                       //$scope.analysisResultList[i].analysisResultModel.fmera = Number($scope.analysisResultList[i].analysisResultModel.fmera.toFixed(2));
                       $scope.average_fmera = $scope.average_fmera + data.analysisResultList[j].analysisResultModel.fmera;
                   }
                   $scope.average_fmera = $scope.average_fmera/data.analysisResultList.length;  
                   $scope.average_fmera = $scope.average_fmera.toFixed(2);              
                    
                   $scope.average_correctness = 0;
                   for(var s=0; s<data.analysisResultList.length; s++) {
                       //$scope.analysisResultList[i].analysisResultModel.correctness = Number($scope.analysisResultList[i].analysisResultModel.correctness.toFixed(2));
                       $scope.average_correctness = $scope.average_correctness + data.analysisResultList[s].analysisResultModel.correctness;
                   }
                   $scope.average_correctness = $scope.average_correctness/data.analysisResultList.length;       
                   $scope.average_correctness = $scope.average_correctness.toFixed(2);                                  
                }
              
			}).error(function(data, status) {
				alert("Error ... " + status);
            });
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
})
.controller("AnalyzerCtrl", function($scope,$state,$http,analyzerUploadService,analyzers,role,IsLoged) {
    
    $scope.isLoggedIn = IsLoged;
    $scope.role = role;
    $scope.analyzers = analyzers;
    $scope.addMode = false;
    $scope.selectedAnalyzer = null;
    $scope.message = ""; 
    
    $scope.selectedRow = null;
    $scope.setClickedRow = function (index, analyzer) {  //function that sets the value of selectedRow to current index
         if (index == $scope.selectedRow) {           
             $scope.selectedRow = null;
             $scope.selectedAnalyzer = null;
         }
         else {
			$scope.selectedRow = index; 
			$scope.selectedAnalyzer = analyzer; 
			$scope.message = "";     
			$scope.addMode = false;
         }
     };
    
    $scope.uploadFile=function(){
      var formData = new FormData();
      formData.append('formDataJson', JSON.stringify($scope.touristObject));  
      formData.append('file', file.files[0]);
      formData.append('name', $scope.analyzer.name);
      formData.append('description', $scope.analyzer.description);
   
            analyzerUploadService.add(formData).$promise.then(function () {
                $http.get("/LuceneAnalyzerTester/rest/analyzer/getAll").success(function(data, status) {
                   $scope.analyzers = data.analyzers;              
                }).error(function(data, status) {
                 alert("Error ... " + status);
                });                   
            }, function () {
                alert('Error while uploading analyzer!');
            });
   };
  
   $scope.removeAnalyzer = function() {
    if($scope.selectedAnalyzer !== null) {
       $scope.message = "";
       $http.post('/LuceneAnalyzerTester/rest/analyzer/remove', $scope.selectedAnalyzer.analyzer_Id).success(function(data, status) {                     
                $http.get('/LuceneAnalyzerTester/rest/analyzer/getAll').success(function(data, status) { 
                     $scope.analyzers = data.analyzers;
                     $scope.selectedAnalyzer = null;
                }).error(function(data, status) {
                    alert("Error ... " + status);
                });
			}).error(function(data, status) {
				alert("Error ... " + status);
            });
            
     }
     else {
         $scope.message = "Please select analyzer from the list first!";
     }
   };
  
   $scope.changeToAddMode = function() {
        $scope.addMode = true;
        $scope.message = "";
   };
  
   $scope.backFromAddMode = function() {
        $scope.addMode = false;
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
