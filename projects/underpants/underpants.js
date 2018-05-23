// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity()
* Arguments:
*   1) Anything
* Objectives:
*   1) Returns <anything> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value) {
   return value;
};

/** _.typeOf()
* Arguments:
*   1) Anything
* Objectives:
*   1) Return the type of <anything> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

_.typeOf = function(value) {
    if (Array.isArray(value)) {
        return "array";
    } else if (value === null) {
        return "null";
    } else if (value === 'object') {
        return "object";
    } else {
        return typeof value;
    }
};

/** _.first()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Gotchas:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

_.first = function(array, number) {
    if (Array.isArray(array) != true) {
        return [];
    }
    if (typeof number != 'number') {
        return array[0];
    }
    if (number < 0) {
        return [];
    }
    if (array.length < number) {
        return array;
    }
    var arr = [];
    for (var i = 0; i < number; i++) {
        var num = array[i];
        arr.push(num);
    }
    return arr;
};

/** _.last()
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Gotchas:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number) {
    if (Array.isArray(array) != true) {
        return [];
    }
    if (typeof number != 'number') {
        return array[array.length - 1];
    }
    if (number < 0) {
        return [];
    }
    if (array.length < number) {
        return array;
    }
    var arr = [];
    for (var i = array.length - number; i < array.length; i++) {
        var num = array[i];
        arr.push(num);
    }
    return arr;
};

var arr = ['a','b','c','d','e'];

/** _.each()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for(var key in collection) {
            action(collection[key], key, collection);
        }
    }
};

/** _.indexOf()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Gotchas:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

_.indexOf = function(array, value) {
    for (var i = 0; i < array.length; i++) {
        var val = array[i];
        if (val === value) {
            return i;
        }
    }
    return -1;
};

/** _.filter()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Gotchas:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

_.filter = function(array, func) {
    var emptyArray = [];
    for(var i = 0; i < array.length; i++) {
        var e = array[i];
        
        if(func(e, i, array)=== true) {
            emptyArray.push(e);
        }
    }
    return emptyArray;
};

/** _.reject()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse of _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function(array, func) {
   
        var emptyArray = [];
    for(var i = 0; i < array.length; i++) {
        var e = array[i];
        
        if(func(e, i, array)=== false) {
            emptyArray.push(e);
        }
    }
    return emptyArray;
    
};

/** _.partition()
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Gotchas:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

_.partition = function(array, func) {
    var truthy = [];
    var falsy = [];
    for(var i = 0; i <= array.length - 1; i++) {
        if (func(array[i])) {
            truthy.push(array[i]);
        } else {
            falsy.push(array[i]);
        }
         
    }
    // var partitioned = [_.filter(array,func), _.reject(array,func)]
    var partitioned = [truthy, falsy];
    return partitioned;
};

/** _.unique()
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

_.unique = function(array) {
     var arr = [];
     
     for(var i = 0; i < array.length; i++) {
        var value = array[i];
     
        if(_.indexOf(arr, value) === -1) {
            arr.push(value);
        }
     }
     return arr;
};

/** _.map()
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

_.map = function(collection, func) {
     var newArr = [];
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            var element = collection[i];
            newArr.push(func(element, i, collection));
        } 
    } else {
        for (var key in collection) {
            var value = collection[key];
            newArr.push(func(value, key, collection));
        }
    }
    return newArr;
};

 
/** _.pluck()
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

_.pluck = function(objArr, property) {
     return _.map(objArr, function(element, index, collection) {
        return element[property]; 
    });
};

/** _.contains()
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Gotchas:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(arr, value) {
 return (arr.includes(value)) ? true : false;
};

/** _.every()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

_.every = function(collection, func) {
    var arc = [];
    var  all = true;
    if (typeof func === 'function') {
    _.each(collection, function(element, index, arr) {
        if (func(element, index, arr)) {
            arc.push(element);
        } else {
            all = false;
        }
    });  
    } else {
        if (Array.isArray(collection)) {
            for (var i = 0; i < collection.length; i++) {
                if (collection[i] === false) {
                    return all = false;
                }
            }
        } else {
            all = true;
        }
    }
    return all;
};

/** _.some()
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Gotchas:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collection, func) {
    var arc = [];
    var  all = false;
    if (typeof func === 'function') {
    _.each(collection, function(element, index, arr) {
        if (func(element, index, arr)) {
            arc.push(element);
            all = true;
        } else {
            all !== true;
        }
    });  
    } else {
        if (Array.isArray(collection)) {
            for (var i = 0; i < collection.length; i++) {
                if (collection[i] === true) {
                    return all = true;
                }
            }
        } else {
            all = false;
        }
    }
    return all;
};

/** _.reduce()
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed>
*   5) After the last iteration, return the return value of the final <function> call
* Gotchas:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([4,5,6], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
* 
*   seed = 0;
*   prevResult = seed --> 0
*   prevResult = 0 + 1 --> 1
*   prevResult = 1 + 2 --> 3
*   prevResult = 3 + 3 --> 6
* 
*/

_.reduce = function(arr, func, seed) {
    _.each(arr, function(element, index, arr) {
        if (seed === undefined) {
            seed = arr[0];
        } else {
            seed = func(seed, element, index);
        }
    });
    return seed;
};

/** _.extend()
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

_.extend = function(obj) {
   _.each(arguments, function(extendObject) {
        _.each(extendObject, function(value, key) {
            obj[key] = value;
        });
    });
    return obj;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}