angular.module('ngBoilerplate.benchmark',['ui.router', 'ngResource', 'base64','checklist-model'])
.config(function($stateProvider) {
    $stateProvider.state('benchmark', {
            url:'/benchmark',
            views: {
                'main': {
                    templateUrl:'benchmark/benchmark.tpl.html',
                    controller: 'BenchmarkCtrl'
                }
            },
            data : { pageTitle : "Create Benchmark" },
             resolve: {
                role: function(accountService) {
                    return accountService.getRole();
                },
                IsLoged: function(accountService) {
                    return accountService.isUserLoggedIn();
                },
                benchmarks: function(benchmarkService) {
                    return benchmarkService.getAllBenchmarksForThisUser();
                },
                directories: function(documentService) {
                    return documentService.getAllDirectoriesForThisUser();
                },
                analyzers: function(analyzerService) {
                    return analyzerService.getAllAnalyzers();
                }
            }
            }
    );
})
.factory('benchmarkService', function($resource) {
    var service = {};
    service.getAllBenchmarksForThisUser = function() {
     var Benchmark = $resource("/LuceneAnalyzerTester/rest/benchmark/getAll");
        return Benchmark.get().$promise.then(function(data) {
            return data.benchmarks;
          });
    };
    return service;
})
.factory('analyzerService', function($resource) {
    var service = {};
    service.getAllAnalyzers = function() {
     var Analyzer = $resource("/LuceneAnalyzerTester/rest/analyzer/getAll");
        return Analyzer.get().$promise.then(function(data) {
            return data.analyzers;
          });
    };
    return service;
})
.controller("BenchmarkCtrl", function($scope, $http, $state, role, IsLoged, benchmarks, directories, analyzers) {

    $scope.resultDocs = {};
    $scope.restDocs = {};
    $scope.ready = false;
    $scope.showSuggestions = false;
    $scope.model = {};
    $scope.newBenchmark = {};
    $scope.benchmarkModel = {};
    $scope.queryAndRelevantDocumentsModel = {};
    $scope.benchmarks = benchmarks;
    $scope.directories = directories;
    $scope.analyzers = analyzers;
    $scope.isLoggedIn = IsLoged;
    $scope.role = role;
    $scope.showQueriesAndRelevantDocs = false;
    $scope.showQueryRelevantDocs = false;
    $scope.modeCreateBenchmark = false;
    $scope.modeCreateQuery = false;
    $scope.message = "";
    $scope.message2 = "Show all Queries and Relevant Documents for this Bencmark";
    $scope.selectedBenchmark = null;
    
    $scope.model.textSearchType = "regular";
    
    $scope.relevant = {
        docs: []
    };
    
    $scope.relavantForThisQuery = {
       docs: []
    };
    
    $scope.newBenchmark.analyzerType = "standardSerbianAnalyzer";
    
    if(directories.length !== 0) {
       $scope.newBenchmark.directoryName = directories[0].name;
    }
    
    if(analyzers.length !== 0) {
       $scope.newBenchmark.analyzerType = analyzers[0].analyzer_Id;
    }
    
    $scope.selectedRow = null;
    $scope.setClickedRow = function (index, benchmark) {  //function that sets the value of selectedRow to current index
         if (index == $scope.selectedRow) {           
             $scope.selectedRow = null;
             $scope.showQueriesAndRelevantDocs = false;  
             $scope.modeCreateQuery = false;
             $scope.ready = false;
             $scope.showSuggestions = false;
         }
         else {
			$scope.selectedRow = index; 
			$scope.selectedBenchmark = benchmark; 
			$scope.message = "";
			$http.get('/LuceneAnalyzerTester/rest/benchmark/getAllQueriesAndRelevantDocs/' + benchmark.benchmark_id).success(function(data, status) {
                 //$scope.showQueriesAndRelevantDocs = true;                 
                 $scope.queriesAndRelevantDocs = data.queryAndRelevantDocumentsList;
                 $scope.modeCreateBenchmark = false;  
                 $scope.modeCreateQuery = true;
               
            }).error(function(data, status) {
                 alert("Error ... " + status);
            });         
         }
     };
     
    $scope.selectedQueryRow = null;
    $scope.setSelectedQuery = function (index, query) {  //function that sets the value of selectedRow to current index
         if (index == $scope.selectedQueryRow) {           
             $scope.selectedQueryRow = null;
             $scope.showQueryRelevantDocs = false;
             $scope.relavantForThisQuery.docs = [];   
      
         }
         else {
			$scope.selectedQueryRow = index; 
			$scope.selectedQuery = query; 
			$http.get('/LuceneAnalyzerTester/rest/benchmark/getRelevantDocsForThisQuery/' + query.queryAndRelevantDocuments_Id + '/' + $scope.selectedBenchmark.benchmark_id).success(function(data, status) {                
                 $scope.relevantDocs = data.relevantDocs; 
                 $scope.restDocs = data.restDocs;  
                 $scope.showQueryRelevantDocs = true; 
                 
                 for(var i=0; i<data.relevantDocs.length; i++) {
                      $scope.relavantForThisQuery.docs.push(data.relevantDocs[i].uid);
                 }         
               
            }).error(function(data, status) {
                 alert("Error ... " + status);
            });         
         }
     };
     
    $scope.changeToAddMode = function() {
        $scope.modeCreateBenchmark = true;  
        $scope.modeCreateQuery = false;   
        $scope.message = "";
    };
    
    $scope.changeRelevantDocs = function() {
         $scope.queryAndRelevantDocumentsModel = {};
         $scope.queryAndRelevantDocumentsModel.relevantDocuments = $scope.relavantForThisQuery.docs;
         $scope.queryAndRelevantDocumentsModel.queryAndRelevantDocuments_Id = $scope.selectedQuery.queryAndRelevantDocuments_Id;
         $http.post('/LuceneAnalyzerTester/rest/benchmark/updateRelevantDocsForThisQuery',  $scope.queryAndRelevantDocumentsModel).success(function(data, status) {                   
              $http.get('/LuceneAnalyzerTester/rest/benchmark/getRelevantDocsForThisQuery/' + $scope.selectedQuery.queryAndRelevantDocuments_Id + '/' + $scope.selectedBenchmark.benchmark_id).success(function(data, status) {                
                 $scope.relevantDocs = data.relevantDocs; 
                 $scope.restDocs = data.restDocs;  
                 $scope.showQueryRelevantDocs = true; 
                 $scope.relavantForThisQuery.docs = [];  
                 for(var i=0; i<data.relevantDocs.length; i++) {
                      $scope.relavantForThisQuery.docs.push(data.relevantDocs[i].uid);
                 }  
                 $scope.selectedQuery.allBenchmarkDocuments = data.relevantDocs.length + data.restDocs.length;
                 $scope.selectedQuery.numOfRelevant = data.relevantDocs.length;
               }).error(function(data, status) {
                   alert("Error ... " + status);
               });    
			}).error(function(data, status) {
				alert("Error ... " + status);
            });
    };
    
	$scope.searchDocs = function() {
            $scope.relevant.docs = [];    
            $scope.model.indexDir = $scope.selectedBenchmark.indexDir;
            $scope.model.analyzerId = $scope.selectedBenchmark.analyzerType;
            $http.post('/LuceneAnalyzerTester/rest/search/search', $scope.model).success(function(data, status) {                   
                $scope.resultDocs = data.documents;
                $scope.restDocs = data.restDocuments;
                if(data.documents.length === 0) {              
                      $scope.highlights = data.suggestions;
                      $scope.ready = false;
                      $scope.showSuggestions = true;
                } 
                else { 
                   $scope.ready = true;
                   $scope.benchmarkModel.searchModel = $scope.model;
                   for(var i=0; i<data.documents.length; i++) {
                      $scope.relevant.docs.push(data.documents[i].uid);
                   }
                }
			}).error(function(data, status) {
				alert("Error ... " + status);
            });
	};
	
	$scope.moreSearch = function(value) {
          $scope.relevant.docs = [];    
          $scope.model.indexDir = $scope.selectedBenchmark.indexDir;
          $scope.model.analyzerId = $scope.selectedBenchmark.analyzerType;
          $scope.model.text = value;
          $scope.model.textSearchType = "regular";
          $http.post('/LuceneAnalyzerTester/rest/search/search', $scope.model).success(function(data, status) {                                  
                $scope.resultDocs = data.documents;
                $scope.restDocs = data.restDocuments;
                $scope.showSuggestions = false;
                if(data.documents.length === 0) {              
                      $scope.highlights = data.suggestions;
                      $scope.ready = false;
                      $scope.showSuggestions = true;
                }
                else { 
                   $scope.ready = true;
                   for(var i=0; i<data.documents.length; i++) {
                      $scope.relevant.docs.push(data.documents[i].uid);
                   }
                }          
			}).error(function(data, status) {
				alert("Error ... " + status);
            });
	};
	
	$scope.saveBenchmark = function() {
           $scope.queryAndRelevantDocumentsModel.benchmark_id = $scope.selectedBenchmark.benchmark_id;
           $scope.queryAndRelevantDocumentsModel.searchModel = $scope.model;
           $scope.queryAndRelevantDocumentsModel.relevantDocuments = $scope.relevant.docs;
           $http.post('/LuceneAnalyzerTester/rest/benchmark/save', $scope.queryAndRelevantDocumentsModel).success(function(data, status) {                     
                alert("Success!");
                $http.get('/LuceneAnalyzerTester/rest/benchmark/getAllQueriesAndRelevantDocs/'+ $scope.selectedBenchmark.benchmark_id).success(function(data, status) {                     
                   $scope.queriesAndRelevantDocs = data.queryAndRelevantDocumentsList;
                }).error(function(data, status) {
                    alert("Error ... " + status);
                });
			}).error(function(data, status) {
				alert("Error ... " + status);
            });
	
	};
	
	$scope.createBenchmark = function() {
           $http.post('/LuceneAnalyzerTester/rest/benchmark/create', $scope.newBenchmark).success(function(data, status) {                     
                $http.get('/LuceneAnalyzerTester/rest/benchmark/getAll').success(function(data, status) {                     
                    $scope.benchmarks = data.benchmarks;
                }).error(function(data, status) {
                    alert("Error ... " + status);
                });
			}).error(function(data, status) {
				alert("Error ... " + status);
            });
	
	};
	
	$scope.removeBenchmark = function() {
        if($scope.selectedBenchmark !== null) {
           $scope.message = "";
           $http.post('/LuceneAnalyzerTester/rest/benchmark/remove', $scope.selectedBenchmark.benchmark_id).success(function(data, status) {                     
                $http.get('/LuceneAnalyzerTester/rest/benchmark/getAll').success(function(data, status) { 
                    $scope.showQueriesAndRelevantDocs = false;
                    $scope.modeCreateBenchmark = false;
                    $scope.modeCreateQuery = false;     
                    $scope.ready = false;               
                    $scope.benchmarks = data.benchmarks;
                }).error(function(data, status) {
                    alert("Error ... " + status);
                });
			}).error(function(data, status) {
				alert("Error ... " + status);
            });
       } else {
          $scope.message = "Please select benchmark from the list first!";
       }
	};
	
	$scope.removeQueryAndRelevantDocs = function(id) {
           $http.post('/LuceneAnalyzerTester/rest/benchmark/removeQueryAndRelevantDocuments', id).success(function(data, status) {                     
                $http.get('/LuceneAnalyzerTester/rest/benchmark/getAllQueriesAndRelevantDocs/'+ $scope.selectedBenchmark.benchmark_id).success(function(data, status) {                     
                   $scope.queriesAndRelevantDocs = data.queryAndRelevantDocumentsList;
                }).error(function(data, status) {
                    alert("Error ... " + status);
                });
			}).error(function(data, status) {
				alert("Error ... " + status);
            });
	};
	
	$scope.backFromCreateMode = function() {
		$scope.modeCreateBenchmark = false;
	};
	
	$scope.changeShowQueriesAndRelevantDocs = function() {
		if($scope.showQueriesAndRelevantDocs === false) {
			$scope.showQueriesAndRelevantDocs = true;
			$scope.message2 = "Hide all Queries and Relevant Documents for this Bencmark";			
		} else {
			$scope.showQueriesAndRelevantDocs = false;
            $scope.message2 = "Show all Queries and Relevant Documents for this Bencmark";
        }
	};
	
	$scope.getPdf = function(location){
          $http.get('/LuceneAnalyzerTester/rest/documents/download/', {params: {'location': location},responseType: 'arraybuffer'})
              .success(function (data) {
                   var file = new Blob([data], {type: 'application/pdf'});
                   var fileURL = URL.createObjectURL(file);
                   window.open(fileURL);
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
});
