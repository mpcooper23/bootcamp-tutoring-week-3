1. Create a function called `getIncompleteTasks` that takes in one parameter - `array` - which represents an array of task objects like the one shown in data.js. This function should use recursion to create a new array of only the task objects whose `completed` property is marked `false`.
2. Create a function called `mapTasks` that takes in one parameter - `array` - which represents an array of task objects like the one shown in data.js. This function should use recursion to create a new array of strings that include the task's name and whether it's been completed. The strings should be formatted as seen in the example below.
```javascript
// example output
mapTasks(tasks);
/*
[
'Feed cat - Status: Incomplete', 
'Get groceries - Status: Complete', 
'Order pet medication - Status: Incomplete', 
'Pay rent - Status: Complete', 
'Do dishes - Status: Incomplete'
]
*/
```
3. Create a function called `getTasksByFrequency` that takes in two parameters - `array` & `frequency`; `array` represents an array of task objects like the one shown in data.js; `frequency` represents a string of how often a tasks recurs. This function should use recursion to return a new array of the task names that recur at the input frequency.
```javascript
// example output
getTasksByFrequency(tasks, 'Weekly'); // => ['Feed cat', 'Get groceries', 'Do dishes']
```