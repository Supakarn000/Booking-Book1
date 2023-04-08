import { createContext, useReducer } from "react"

const INITIAL_STATE = {
    name:undefined,
    dates:[],
}

export const SearchContext = createContext(INITIAL_STATE)

const SerchReducer = (state,action) =>{
    switch(action.type){
        case "NEW_SEARCH":
            return action.payload;
        case "RESET_SEARCH":
            return INITIAL_STATE;
        default:
            return state;
    }
}


export const SearchContextProvider = ({ children }) => {
    const [state,dispatch] = useReducer(SerchReducer,INITIAL_STATE);

return(
    <SearchContext.Provider value={{name:state.name, dates:state.dates,dispatch}}>
        { children }
    </SearchContext.Provider>
)
};