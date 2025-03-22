// Problem #1 //

/*
Create a function called `getIncompleteTasks` that takes in one parameter - `array` - 
which represents an array of task objects like the one shown in data.js. This function 
should use recursion to create a new array of only the task objects whose `completed` 
property is marked `false`.
*/

function getIncompleteTasks(array, output = []){
    //base
    if (array.length === 0){
        return output;
    }
    //recursion
    if(array[0].completed === false){
        output.push(array[0]);
    }
    return getIncompleteTasks(array.slice(1), output)

}
// Problem #2 //

/**
 * Create a function called `mapTasks` that takes in one parameter - `array` - which 
 * represents an array of task objects like the one shown in data.js. This function 
 * should use recursion to create a new array of strings that include the task's name 
 * and whether it's been completed. The strings should be formatted as seen in the example 
 * below.
 * 
 */
function mapTasks(array, output = []){
    //base case
    if (array.length === 0){
        return output
    }
    //recursive case
    if(array[0].completed === false){
output.push(array[0])
    }
    return mapTasks(array[0].slice(1), output)
}

// Problem #3 //
/**
 * Create a function called `getTasksByFrequency` that takes in two parameters - `array` & `frequency`; 
 * `array` represents an array of task objects like the one shown in data.js; `frequency` represents
 * a string of how often a tasks recurs. This function should use recursion to return a new array of the 
 * task names that recur at the input frequency.
 */

function getTasksByFrequency(array, output = []){
    if (array.length === 0) {
        return output; // Base case: return the accumulated output array if the input array is empty
    }

    const currentTask = array[0];
    if (currentTask.frequency === frequency) {
        output.push(currentTask.name); // Include the task name if the frequency matches
    }

    return getTasksByFrequency(array.slice(1), frequency, output); // Recursive case
}

// Problem #4 //

/**
 * Create a function called `getTask` that takes in two parameters - `array` & `task` - 
 * `array` represents an array of task objects like the one shown in data.js; `task` represents 
 * a string of a task. This function should use recursion to search for a task. If the task is found, 
 * the function should return a string like this: `Task: <TASK NAME>`; if the input task is not found, 
 * the function should return a string like this: `Task: <not found>`.
 */
function getTask(array, output = []){
    if (array.length === 0) {
        return `Task: <not found>`; // Base case: return not found if the array is empty
    }

    const currentTask = array[0];
    if (currentTask.name === task) {
        return `Task: ${currentTask.name}`; // Return the task name if it matches
    }

    return getTask(array.slice(1), task); // Recursive case
}


// Problem #5 //
/**
 * Create a function called `getTasksWithTag` that takes in one parameter - `array` - 
 * which represents an array of task objects like the one shown in data.js. This function 
 * should use the native reduce method to return a string containing each task name and in 
 * parenthesis the last tag in each task's `tags` array followed by a line break character. 
 * Use the example below to format your string.
 * 
 */

function getTasksWithTag(array){
    return array.reduce((result, task) => {
        const lastTag = task.tags[task.tags.length - 1] || ''; // Get the last tag or an empty string if no tags
        return result + `${task.name} (${lastTag})\n`; // Append formatted string to the result
    }, '');
}

// Problem #6 //
/**
 * Create a function called `getObjects` that takes in one parameter - `array` - 
 * which represents an array of task objects like the one shown in data.js. 
 * This function should use recursion to return an object where each key is a 
 * task name and the value at each key is how often it recurs followed by a dash 
 * and the priority.
 * 
 */

function getObjects(array){
    if (array.length === 0) {
        return result; // Base case: return the accumulated result object if the input array is empty
    }

    const currentTask = array[0];
    result[currentTask.name] = `${currentTask.frequency} - ${currentTask.priority}`;

    return getObjects(array.slice(1), result); // Recursive case
};
