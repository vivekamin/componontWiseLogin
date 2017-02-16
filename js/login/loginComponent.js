loginApp.component('loginComponent' , {
    templateUrl : '/views/login.html',
    controller : loginController
    
})
    
function loginController($scope,sharedService)
                {
                    //controlle login component
                    $scope.checkLogin = function(){
                        sharedService.method1();
                    }
                    
                    $scope.checkLogin1 = function(user){
                        if(user == "admin"){
                            sharedService.method2();
                        }
                        else{
                        
                            alert("Wrong Username");
                            sharedService.method1();   
                        }
                    }
                    
                    sharedService.method1();
                    
                    
                    

                }