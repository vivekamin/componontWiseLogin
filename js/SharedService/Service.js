loginApp.factory('sharedService' , function($rootScope,$http){
    
   var factory = {}; 
    factory.synLogin = true;

	factory.method1 = function() {
			//..
        
        factory.synLogin=false;
        //alert(factory.synLogin);
        $rootScope.$broadcast('synLogin', factory.synLogin);
		}

	factory.method2 = function() {
			//..
     
        
        factory.synLogin=true;
          $rootScope.$broadcast('synLogin', factory.synLogin);
		}

	return factory;
});



