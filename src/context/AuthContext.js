import { Children, createContext,useReducer } from "react";
export const AuthContext =createContext()

export const authReducer =(state,action)=>{
    switch (action.type){
        default: 
          return state
    }
}

export const AuthContextProvider=({children})=>{
    const [tstate ,dispatch ]= useReducer(authReducer,{
        user:null
    })
    
    return (
        <AuthContext.Provider value={{...state ,dispatch}}>
            {children}
        </AuthContext.Provider>
    )

}

