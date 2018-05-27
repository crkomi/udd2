angular.module('ngBoilerplate.account', ['ui.router', 'ngResource', 'base64'])
.config(function($stateProvider) {
    $stateProvider.state('login', {
        url:'/login',
        views: {
            'main': {
                templateUrl:'account/login.tpl.html',
                controller: 'LoginCtrl'
            }
        },
        data : { pageTitle : "Login" }
    })
    .state('register', {
            url:'/register',
            views: {
                'main': {
                    templateUrl:'account/register.tpl.html',
                    controller: 'RegisterCtrl'
                }
            },
            data : { pageTitle : "Registration" }
            }
    )
    .state('passwordChange', {
            url:'/passwordChange',
            views: {
                'main': {
                    templateUrl:'account/passwordChange.tpl.html',
                    controller: 'PasswordChangeCtrl'
                }
            },
            data : { pageTitle : "Password Change" },
             resolve: {
                role: function(accountService) {
                    return accountService.getRole();
                },
                IsLoged: function(accountService) {
                    return accountService.isUserLoggedIn();
                }
            }
            }
    )
    .state('management', {
            url:'/management',
            views: {
                'main': {
                    templateUrl:'account/management.tpl.html',
                    controller: 'AccountManagementCtrl'
                }
            },
            data : { pageTitle : "Account Management" },
            resolve: {
            accounts: function(accountService) {
                 return accountService.getAllAccounts();
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
.factory('sessionService', function($http, $base64, $resource) {
    var session = {};
    session.login = function(data) {
        return $http.post("/login", "username=" + data.name +
        "&password=" + data.password, {
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        } ).then(function(data) {
        }, function(data) {
            alert("Wrong username or password!");
        });
    };
    session.logout = function() {
  
    };
    session.isLoggedIn = function() {     
        return localStorage.getItem("session") != null;
    };
    return session;
})
.factory('accountService', function($resource) {
    var service = {};
    service.register = function(account, success, failure) {
        var Account = $resource("/LuceneAnalyzerTester/rest/accounts/create");
        Account.save({}, account, success, failure);
    };
    service.getAccountById = function(accountId) {
        var Account = $resource("/LuceneAnalyzerTester/rest/accounts/:paramAccountId");
        return Account.get({paramAccountId:accountId}).$promise;
    };
    service.getRole = function() {
     var Role = $resource("/LuceneAnalyzerTester/rest/accounts/role");
        return Role.get().$promise.then(function(data) {
            return data.role;
          });
    };
    service.isUserLoggedIn = function() {
        var Account = $resource("/LuceneAnalyzerTester/rest/accounts/logedIn");
         return Account.get().$promise.then(function(data) {
             return data.isLoged;
          });
    };
    service.userWithThisEmailExists = function(email) {
        var Account = $resource("/LuceneAnalyzerTester/rest/accounts/userExists");
         return Account.get({email:email}).$promise.then(function(data) {
            return data.exists;
         });
    };
    service.getAllAccounts = function() {
          var Account = $resource("/LuceneAnalyzerTester/rest/accounts/all");
          return Account.get().$promise.then(function(data) {
            return data.accounts;
          });
      };
    return service;
})
.controller("LoginCtrl", function($scope, sessionService, accountService, $state, $http, $timeout) {
    $scope.login = function() {
        $http.get('/LuceneAnalyzerTester/rest/accounts/userWithThisEmailAndPasswordExists/' + $scope.account.name + '/' + $scope.account.password).success(function(data, status) {
             if(data.exists === true) {
                 sessionService.login($scope.account);
                 $timeout(function(){ $state.go("home"); }, 1000);    
             }
             else {
             sessionService.login($scope.account);
                              $timeout(function(){ $state.go("home"); }, 1000);

             }                                          
			}).error(function(data, status) {
				alert("Error ... " + status);
			});
    };
})
.controller("RegisterCtrl", function($scope, sessionService, $http,  $state, accountService) {
	$scope.errorMessage = "";
    $scope.register = function() {
        $scope.account.status = "ACTIVE";
        $scope.account.role = "User";
        $http.get('/LuceneAnalyzerTester/rest/accounts/userExists/' + $scope.account.name).success(function(data, status) {
                   var exists = data.exists;
                     if(exists === false) { 
                         $scope.errorMessage = "";
                         if($scope.account.password == $scope.passwordRepeat) {
                             accountService.register($scope.account,
                             function(returnedData) {               
                                 $state.go("home");          
                             },
                             function() {
                                 alert("Error registering user");           
                             });
                         }
                         else {
                             $scope.errorMessage = "Passwords must match!";
                         }
                      }
         else {
            $scope.errorMessage = "User with this email already exists!";
         }                               
				}).error(function(data, status) {
					alert("Error ... " + status);
				});
    };
})
.controller("PasswordChangeCtrl", function($scope, $http, sessionService, accountService,role,IsLoged,$state) {
    $scope.isLoggedIn = IsLoged;
    $scope.role = role;
    $scope.errorMessage = "";
    $scope.changePassword = function() {
        if($scope.newPassword == $scope.newPasswordRepeat) {
             $http.get('/LuceneAnalyzerTester/rest/accounts/changePassword/' + $scope.oldPassword + '/' + $scope.newPassword).success(function(data, status) {
                   if(data == "ok") {
                      alert("Password is successfully updated!");
                      $scope.errorMessage = "";   
                   }
                   else {
                      alert("Sorry but password is not updated!");
                   }                                          
				}).error(function(data, status) {
					alert("Error ... " + status);
				});
          }
        else {
          $scope.errorMessage = "Your new passwords doesn't match!";
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
})
.controller("AccountManagementCtrl", function($scope, accounts, accountService, $http, role, IsLoged,$state) {
    $scope.accounts = accounts;
    $scope.Account = {};
    $scope.mode = "Add";
    $scope.isLoggedIn = IsLoged;
    $scope.role = role;
    
    $scope.selectedRow = null;
    $scope.setClickedRow = function (index, account) {  //function that sets the value of selectedRow to current index
         if (index == $scope.selectedRow) {
             $scope.mode = "Add";
             $scope.selectedRow = null;

             clearInputFields();
         }
         else {
            $scope.Account.account_id = account.account_id;
			$scope.Account.username = account.username;
			$scope.Account.password = account.password;
			$scope.Account.firstName = account.firstName;
			$scope.Account.lastName = account.lastName;
			$scope.Account.status = account.status;
			$scope.Account.role = account.role;
			
			$scope.selectedRow = index;             
			$scope.mode = "Update";
         }
     };
      
    $scope.createNewAccount = function() {
           if ($scope.mode == "Add") {              
                $http.post('/LuceneAnalyzerTester/rest/accounts/createByAdmin', $scope.Account).success(function(data, status) {                                        
                   $http.get('/LuceneAnalyzerTester/rest/accounts/all').success(function(data, status) {
                       $scope.accounts = data.accounts;                                         
                   }).error(function(data, status) {
                      alert("Error ... " + status);
                   });
					
				}).error(function(data, status) {
					alert("Error ... " + status);
                });
           }
           else {
                $http.post('/LuceneAnalyzerTester/rest/accounts/update', $scope.Account).success(function(data, status) {					
					$http.get('/LuceneAnalyzerTester/rest/accounts/all').success(function(data, status) {
                       $scope.accounts = data.accounts;                                                              
					}).error(function(data, status) {
						alert("Error ... " + status);
					});
				}).error(function(data, status) {
					alert("Error ... " + status);
                });
           }
    };
    
    $scope.removeAccount = function(id) {
        $http.post('/LuceneAnalyzerTester/rest/accounts/remove/' + id ).success(function(data, status) {
                   clearInputFields();                       
                   $http.get('/LuceneAnalyzerTester/rest/accounts/all').success(function(data, status) {
                       $scope.accounts = data.accounts;
                       $scope.mode = "Add";                                         
                   }).error(function(data, status) {
                      alert("Error ... " + status);
                   });
					
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
    
    function clearInputFields() {
         $scope.Account.username = null;
         $scope.Account.firstName = null;
         $scope.Account.lastName = null;
         $scope.Account.password = null;
         $scope.Account.status = null;
    }
});