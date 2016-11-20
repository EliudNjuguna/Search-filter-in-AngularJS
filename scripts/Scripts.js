
var app = angular
				.module("myModule",[])
				.controller('myController', function($scope){
					var employees = [
						{ name: "Ken", gender: "Male", salary: 20000.453, city: "Nairobi" },
						{ name: "Ben", gender: "Male", salary: 23300 , city: "London"},
						{ name: "Mary", gender: "Female", salary: 54000 ,city: "Las Vegas"},
						{ name: "Samuel", gender: "Male", salary: 97000,city: "Dublin"},
						{ name: "James",  gender: "Male", salary: 61000,city:"Manchester"},
						{ name: "Ben", gender: "Male", salary: 55000, city: "London" }, 
						{ name: "Sara", gender: "Female", salary: 68000, city: "Chennai" }, 
						{ name: "Mark", gender: "Male", salary: 57000, city: "London" }, 
						{ name: "Pam", gender: "Female", salary: 53000, city: "Chennai" }, 
						{ name: "Todd", gender: "Male", salary: 60000, city: "London" }
						
					];
					$scope.employees = employees;
					$scope.rowLimit = 3;

				});
					
