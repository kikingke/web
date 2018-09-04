	var app = angular.module("myApp", ["ngRoute"]);

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
			});
	});

	// create the controller and inject Angular's $scope
	app.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Soy el contenido principal';
	});

	app.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	app.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});

	app.controller('blogController', function($scope) {
		$scope.message = 'Aqui comparto algunas de mis opiniones y conocimientos';
	});

	function contactController($scope) {
            $scope.countries = {
                'India': {
                    'Maharashtra': ['Pune', 'Mumbai', 'Nagpur', 'Akola'],
                    'Madhya Pradesh': ['Indore', 'Bhopal', 'Jabalpur'],
                    'Rajasthan': ['Jaipur', 'Ajmer', 'Jodhpur']
                },
                'USA': {
                    'Alabama': ['Montgomery', 'Birmingham'],
                    'California': ['Sacramento', 'Fremont'],
                    'Illinois': ['Springfield', 'Chicago']
                },
                'Australia': {
                    'New South Wales': ['Sydney'],
                    'Victoria': ['Melbourne']
                }
            };
            $scope.GetSelectedCountry = function () {
                $scope.strCountry = document.getElementById("country").value;
            };
            $scope.GetSelectedState = function () {
                $scope.strState = document.getElementById("state").value;
            };
        }
