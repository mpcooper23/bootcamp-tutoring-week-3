describe ("Recursion Practice", function(){

    describe("getIncompleteTasks()", function(){
        it('should return an array', function(){
            assert.equal(Array.isArray(getIncompleteTasks(tasks)), true);
        });
        it('should return a correct array of incomplete tasks', function(){
            const result = getIncompleteTasks(tasks);
            const correct = [tasks[0], tasks[2], tasks[4]];
            assert.deepEqual(result, correct);
        });
        it('should use recursion', function(){
            const func = sinon.spy(window, 'getIncompleteTasks');
            try {
                func(tasks);
                assert.isAbove(func.callCount, 1);
            } finally {
                func.restore();
            }
        });
    });

    describe("mapTasks()", function(){
        it('should return an array', function(){
            assert.equal(Array.isArray(mapTasks(tasks)), true);
        });
        it('should return a correct array of incomplete tasks', function(){
            const result = mapTasks(tasks);
            const correct = [
                'Feed cat - Status: Incomplete', 
                'Get groceries - Status: Complete', 
                'Order pet medication - Status: Incomplete', 
                'Pay rent - Status: Complete', 
                'Do dishes - Status: Incomplete'
            ]
            assert.deepEqual(result, correct);
        });
        it('should use recursion', function(){
            const func = sinon.spy(window, 'mapTasks');
            try {
                func(tasks);
                assert.isAbove(func.callCount, 1);
            } finally {
                func.restore();
            }
        });
    });


});