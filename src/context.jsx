import { createContext, useState, useEffect, useContext } from "react"



 const MarketplaceContext = createContext({})

 export const MarketplaceProvider = ({ children }) =>{

 
    const globalState = {
       
      }
        return (
            <MarketplaceContext.Provider
              value={globalState}
            >
              {children}
            </MarketplaceContext.Provider>
          );
 
 }

 export const useMarketplace = ()=> useContext(MarketplaceContext)