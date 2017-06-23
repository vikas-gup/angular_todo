'use strict';

/**
 * @ngdoc function
 * @name angularDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularDemoApp
 */
var app = angular.module('angularDemoApp');
app.controller('MainCtrl', function () {
	this.awesomeThings = [
	  'HTML5 Boilerplate',
	  'AngularJS',
	  'Karma'
	];

	//this.proxyDetails = {url: "localhost", port: "3000"};

	$(document).ready(function () {
        $('ul.nav > li').click(function (e) {
            e.preventDefault();
            $('ul.nav > li').removeClass('active');
            $(this).addClass('active');                
        });            
    });
});
