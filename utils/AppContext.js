import React, {createContext, useState} from "react";
export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const {children} = props;
  const [data, setData] = useState("Lee Kwang Soo")
  
  return (
    <AppContextProvider value={{data: data, setData: setData}}>
      {children}
    </AppContextProvider>  
  )
}