'use strict';

angular.module('mvAngularUtilities')
  .factory('mv', function () {

    // String Utils
    var mvString = {
      // This function capitalise the first letter of a string.
      capitalize: function(string){
        if(!string) return string;
        if(typeof string != "string") return string;
        if(string.length < 1) return string;
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
      },
      // This function capitalise the first letter of every words in a string.
      title: function(string){
        if(!string) return string;
        if(typeof string != "string") return string;
        if(string.length < 1) return string;
        return  string.toLowerCase().replace(/(?:^|\s)\S/g, function(l) { return l.toUpperCase(); });
      }
    }

    // Digit Utils
    var mvDigit = {

    }

    // Array Utils
    var mvArray = {
      // This function returns the index an object in the array
      // If the object is not a child of the array it returns -1
      indexOf: function(child, parent){
        if(!parent || !child) return -1;
        if(!$.isArray(parent)) return -1;
        if(typeof child == 'object' && !$.isArray(child)){
          if(!child.id) return -1;
          child = child.id ? child.id : child;
          for (var i = 0; i < parent.length; i++) {
            if((parent[i].id ? parent[i].id : parent[i]) == child){
              return i;
            }
          };
        } else {
          return parent.indexOf(child);
        }
      }
    }

    return {
      string: mvString,
      digit: mvDigit,
      array: mvArray
    }
  });