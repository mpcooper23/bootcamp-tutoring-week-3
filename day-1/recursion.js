// Problem #1 // filter
function getIncompleteTasks(){
    
}
// use recursion to create a map
function mapTasks(array, output=[]){
    if (array.length === 0){
        return output;
    }
    let status;
    if (array[0].completed === true){
        status = 'Complete';
    } else {
        status = 'Incomplete'
    };
    output.push(`${array[0].task} - Status: ${status}`);
    return mapTasks(array.slice(1), output);
}

console.log(mapTasks(tasks));

// use recursion to create a string

// use recursion to find an item

// use recursion to create an object

