var test = {
    toBeTrue: function(testParam) {
        if (!testParam) {
            throw new Error(`Expected true but got ${testParam}`);
        } else {
            console.log('True')
        }
    },

    toEqual: function(testParam, equalParam) {
        if (!testParam === equalParam) {
            throw new Error(`Expected ${equalParam}, but got ${testParam}`)
        }
    }
};

