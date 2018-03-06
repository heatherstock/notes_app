(function(exports) {
    var expect = {
        toBeTrue: function(testParam) {
            if (!testParam) {
                throw new Error(`Expected true but got ${testParam}`);
            } else {
                console.log('Passes Test')
            }
        },

        toBeEqual: function(testParam, equalityTest) {
            if (!testParam === equalityTest) {
                throw new Error(`Expected ${equalityTest}, but got ${testParam}`)
            } else {
            console.log('Passes Test')
            }
        }, 

        arraysToBeEqual: function(array1, array2) {
            for (var i = 0; i < array1.length; i++) {
                if (array1[i] !== array2[i]) {
                    throw new Error (`${array1[i]} does not equal ${array2[i]}`)
                } else {
                    console.log("Passes Test")
                }
            }
        }
    }

    var describe = function(string) {
        console.log(string);
    };

    var it = function(string) {
        console.log(' ' + string);
    };

exports.expect = expect;
exports.describe = describe;
exports.it = describe;
})(this);
