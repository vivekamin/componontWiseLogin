var loginApp = angular.module('loginApp' , ['ngComponentRouter']);


loginApp.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
});

loginApp.value('$routerRootComponent', 'app');


loginApp.component('app', {
  templateUrl:'/views/app.html',
  $routeConfig: [
    {path: '/login-component', name: 'LoginComponent', component: 'loginComponent'},
    {path: '/about-component', name: 'AboutComponent', component: 'aboutComponent'},
    {path: '/contact-component', name: 'ContactComponent', component: 'contactComponent'}
  ],
    controller : appController
});

function appController($scope,$location)
                {
                    //controller login component
                    $scope.loginSuccess=false;
                    
                     $scope.$on('synLogin', function (event, arg) { 
                                $scope.receiver = 'got your ' + arg;
                                alert($scope.receiver);
                                if(arg == true)
                                    {
                                    $scope.loginSuccess = arg;
                                    $location.path('/about-component');
                                    
                                    }
                                else 
                                    {
                                        $scope.loginSuccess = arg;
                                        $location.path('/login-component');
                                        
                                    }
                                
                              });
                    $scope.logout = function(){
                        $scope.loginSuccess = false;
                        $location.path('/login-component');
                        
                    };
                    

                }



loginApp.run(function() {
    alert("loginApp run");
});




