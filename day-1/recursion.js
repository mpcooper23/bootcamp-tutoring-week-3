// Problem #1 //
function getIncompleteTasks(){
    
}
// Problem #2 //
function mapTasks(){
    
}

// Problem #3 //
function getTasksByFrequency(){
   
}

// Problem #4 //
function getTask(){
    
}


// Problem #5 //
function getTasksWithTag(array){
   
}

// Problem #6 //
function getObjects(array, output={}){
    if (array.length === 0){
        return output;
    }
    output[array[0].task] = array[0].recurs + " - Priority: " + array[0].priority;
    return getObjects(array.slice(1), output);
};

console.log(getObjects(tasks));


// use recursion to create an object

