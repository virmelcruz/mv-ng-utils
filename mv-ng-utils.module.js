'use strict';

angular.module('mvAngularUtilities', [
])
  .config(function ($provide) {
    // get executed during the provider registrations and configuration phase.
    $provide.value('version', '1.0.0');
  })
  .run(function ($rootScope, $location, Auth) {
    // get executed after the injector is created and are used to kickstart the application.
  });