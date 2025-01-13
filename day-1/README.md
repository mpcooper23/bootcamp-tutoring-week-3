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
3. 