loginApp.component('loginComponent' , {
    templateUrl : '/views/login.html',
    controller : loginController
    
})
    
function loginController($scope,loginService)
                {
                    //controlle login component
                    $scope.checkLogin = function(){
                        loginService.method1();
                    }
                    
                    $scope.checkLogin1 = function(){
                        loginService.method2();
                    }
                    
                    
                    

                }