import {TaskType} from "../Todolist";
import {v1} from "uuid";

//here is the brain of the app


export const TasksReducer =(state: TaskType[], action: GeneralType): TaskType[]=> {
    switch (action.type) { //action is object
        case "REMOVE-TASK": {
            return state.filter(el=> el.id!==action.payload.id) //without destructuring doesn't work reducer
        }
        case "ADD-TASK": {
            let newTask =  {id: v1(), title: action.payload.title, isDone: true }
            return [...state, newTask]
        }

        default:
            return state
    }
}
type GeneralType = RemoveTaskAC | AddTaskACType //general is type for all types


type RemoveTaskAC = ReturnType<typeof removeTaskAC> //return "return" type object
export const removeTaskAC =(id: string)=> {
    return{ //return {object}
        type: "REMOVE-TASK",
        payload: { //all time action have payload
            id //or id:id
        }
    } as const //typification object like const obj
}

type AddTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC =(title: string)=> {
    return {
        type: "ADD-TASK",
        payload: {
            title
        }
    }as const
}

