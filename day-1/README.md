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
4.  Create a function called `getTask` that takes in two parameters - `array` & `task` - `array` represents an array of task objects like the one shown in data.js; `task` represents a string of a task. This function should use recursion to search for a task. If the task is found, the function should return a string like this: `Task: <TASK NAME>`; if the input task is not found, the function should return a string like this: `Task: <not found>`.
```javascript
// example output
getTask('Order pet medication'); // => "Task: <ORDER PET MEDICATION>"
get Task('Order roach traps'); // => "Task: <not found>"
```
5. Create a function called `getTasksWithTag` that takes in one parameter - `array` - which represents an array of task objects like the one shown in data.js. This function should use the native reduce method to return a string containing each task name and in parenthesis the last tag in each task's `tags` array followed by a line break character. Use the example below to format your string.
```javascript
// example output
getTasksWithTag(tasks); // => 'Feed cat (physical)\nGet groceries (physical)\nOrder pet medication (internet)\nPay rent (internet)\nDo dishes (long)\n'
```
6. Create a function called `getObjects` that takes in one parameter - `array` - which represents an array of task objects like the one shown in data.js. This function should use recursion to return an object where each key is a task name and the value at each key is how often it recurs followed by a dash and the priority.
```javascript
// example output
getObjects(tasks);
/*
RETURNS =>
{
    'Feed cat': 'Weekly - Priority: 1', 
    'Get groceries': 'Weekly - Priority: 2', 
    'Order pet medication': 'Monthly - Priority: 3', 
    'Pay rent': 'Monthly - Priority: 4', 
    'Do dishes': 'Weekly - Priority: 5'
}
*/
```