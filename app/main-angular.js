	var app = angular.module("app", ["ngRoute"]);

	// configure our routes
	app.config(function($routeProvider) {
      $routeProvider
			// route for the home page
			.when('/', {
				templateUrl : 'views/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'views/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'views/contact.html',
				controller  : 'contactController'
			})

			.when('/blog', {
				templateUrl : 'views/blog.html',
				controller  : 'blogController'
			})
			.otherwise({
    		    redirectTo: '/'
   			});
	});

	// create the controller and inject Angular's $scope
	app.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Soy el contenido principal el cual debe dar una explicacion breve del servicio o producto a vender.';
	});

	app.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	app.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});

	app.controller('blogController', function($scope,$http) {
		$scope.message = 'Aqui comparto algunas de mis opiniones y conocimientos';
		// $scope.listCategories = [
		// 	{"nombre":"Web Design"},
		// 	{"nombre":"HTML"},
		// 	{"nombre":"Freebies"},
		// 	{"nombre":"Javascript"},
		// 	{"nombre":"CSS"},
		// 	{"nombre":"JSON"}
		// ];
			$http.get('data/categories.json')
			.then(function(res){
					$scope.listCategories = res.data;
			})

			$scope.addPost = function(){
				$scope.listCategories.push({
					nombre: $scope.producto
				});
				$scope.producto = ' ';
			}

			$scope.deletePost = function(){
				$scope.listCategories.pop();
			}

	});	