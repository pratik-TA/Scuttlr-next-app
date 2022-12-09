// import { createContext, useContext, useMemo, useState } from "react";

import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext();

export function AppWrapper({ children }) {

   const [appState, setAppState] = useState ()
   // error in useState

   const contextValue = useMemo(() => {
      return [appState, setAppState];
   }, [appState, setAppState]);

   return (
   <AuthContext.Provider value={contextValue}>
      {children}
   </AuthContext.Provider>
   );
}
export function useAppContext() {
   return useContext(AuthContext);
}