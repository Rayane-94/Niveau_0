
interface Task {
    name: string,
    description: string
}


export function addTask(
    tasks: Array<Task>, 
    name: string, 
    description:string ) : Array<Task>{

    let newTask :Task = {
        name:name,
        description:description
    }
    
    return tasks.concat([newTask]) 

}