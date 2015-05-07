# mv-ng-utils

Angular helpers written by Virmel and Mark

Services
--------------

**String**

    capitalize(string)
        param:  'hello world!'
        result: 'Hello world!'
    title(string)
        param:  'hello world!'
        result: 'Hello World!'

**Array**

    indexOf(child, parent)
        param1: {id: 101, name: 'Mark'}
        param2: [{id: 101, name: 'Mark', height: "5'10"}, {id: 102, name: 'Virmel', height: "5'9"}]
        result: 0

        param1: 'Mark'
        param2: ['Virmel', 'Mark', 'Glazel']
        result: 1

        param1: 'Keycee'
        param2: ['Virmel', 'Mark', 'Glazel']
        result: -1

**Digit**

Components
--------------
**Overlay**

        restrict: E