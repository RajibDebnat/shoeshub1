
import { createContext, useState } from "react";

const Context = createContext({
    isHomeOut : '',
    handleHomeOut:()=>{},

});



function ContextProvider({children}) {
    const [isOut,setIsOut]= useState(true);
    function homeOut(value){
        if(!value){
            setIsOut(value)

        }
    }
      const ctxValue = {
        isHomeOut:isOut,
        handleHomeOut:homeOut
      }      
  return (
    <Context.Provider value={ctxValue}>
    {children}
</Context.Provider>
  )
}

export { Context,ContextProvider}


