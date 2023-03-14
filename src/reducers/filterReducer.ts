import {FilterValuesType} from "../App";

export const FilterReducer =(state: FilterValuesType, action: ChangeTilterACType): FilterValuesType=> {
    switch (action.type){
        case "CHANGE=FILTER": {
            return action.payload.value
        }
        default:
            return state
    }
}

type ChangeTilterACType = ReturnType<typeof changeFilterAC>
export const changeFilterAC =(value: FilterValuesType)=>{
    return {
        type: "CHANGE=FILTER",
        payload:{
            value
        }as const
    }
}