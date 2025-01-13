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
        it('should return a correct array of strings', function(){
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

    describe("getTasksByFrequency()", function(){
        it('should return an array', function(){
            assert.equal(Array.isArray(getTasksByFrequency(tasks, 'Weekly')), true);
        });
        it('should return a correct array of tasks', function(){
            const result = getTasksByFrequency(tasks, 'Weekly');
            const correct = ['Feed cat', 'Get groceries', 'Do dishes'];
            assert.deepEqual(result, correct);
        });
        it('should use recursion', function(){
            const func = sinon.spy(window, 'getTasksByFrequency');
            try {
                func(tasks, 'Weekly');
                assert.isAbove(func.callCount, 1);
            } finally {
                func.restore();
            }
        });
    });

    describe("getTask()", function(){
        it('should return a string', function(){
            assert.equal(typeof getTask(tasks, "Order pet medication"), 'string');
        });
        it('should return a correct string if found', function(){
            const result = getTask(tasks, 'Order pet medication');
            const correct = 'Task: <ORDER PET MEDICATION>'
            assert.deepEqual(result, correct);
        });
        it('should return a correct string if no matching task is found', function(){
            const result = getTask(tasks, 'Order roach traps');
            const correct = 'Task: <not found>'
            assert.deepEqual(result, correct);
        });
        it('should use recursion', function(){
            const func = sinon.spy(window, 'getTask');
            try {
                func(tasks, 'Order pet medication');
                assert.isAbove(func.callCount, 1);
            } finally {
                func.restore();
            }
        });
    });

    describe("getTasksWithTag()", function(){
        it('should return a string', function(){
            assert.equal(typeof getTasksWithTag(tasks), 'string');
        });
        it('should return a correct string', function(){
            const result = getTasksWithTag(tasks);
            const correct = 'Feed cat (physical)\nGet groceries (physical)\nOrder pet medication (internet)\nPay rent (internet)\nDo dishes (long)\n'
            assert.equal(result, correct);
        });
        it('should use recursion', function(){
            const func = sinon.spy(window, 'getTasksWithTag');
            try {
                func(tasks);
                assert.isAbove(func.callCount, 1);
            } finally {
                func.restore();
            }
        });

    });

        describe("getObjects()", function(){
            it('should return an object', function(){
                assert.equal(typeof getObjects(tasks), 'object');
                assert.equal(Array.isArray(getObjects(tasks)), false);
                assert.equal(getObjects(tasks) !== null, true);
            });
            it('should return a correct object', function(){
                const result = getObjects(tasks);
                const correct = {
                    'Feed cat': 'Weekly - Priority: 1', 
                    'Get groceries': 'Weekly - Priority: 2', 
                    'Order pet medication': 'Monthly - Priority: 3', 
                    'Pay rent': 'Monthly - Priority: 4', 
                    'Do dishes': 'Weekly - Priority: 5'
                }
                assert.deepEqual(result, correct);
            });
            it('should use recursion', function(){
                const func = sinon.spy(window, 'getObjects');
                try {
                    func(tasks);
                    assert.isAbove(func.callCount, 1);
                } finally {
                    func.restore();
                }
            });
    });


});