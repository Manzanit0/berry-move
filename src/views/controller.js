
angular.module('Berry-move', [])
.controller('BerryController', function($scope, $http, $window, AuthenticationService) {
    const controller = this;

    controller.originOrg = {};
    controller.destinationOrg = {};
    controller.stagedMetadata = {}; // Represents the selected metadata tu deploy.

    // Logins to an org.
    controller.login = function(username, password, org) {

    }

    // Retrieves metadata from origin org..
    controller.retrieveMetadata = function() {

    }

    // Deploys staged metadata to destination org..
    controller.deployMetadata = function() {
        
    }

    // Adds metadata from the display list to the stage.
    controller.stageMetadata = function(metadata){

    }
});
