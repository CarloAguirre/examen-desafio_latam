import { createContext, useState, useEffect, useContext } from "react"



 const MarketplaceContext = createContext({})

 export const MarketplaceProvider = ({ children }) =>{
  
const [productos, setProductos] = useState([]);
const [categoria, setCategoria] = useState('all')
const [selectedCategory, setSelectedCategory] = useState('all');
const [pageProductos, setPageProductos] = useState([])
const [user, setUser] = useState({
  id: 1,
  nombre: 'Juan Godoy',
  mail: 'juan@juan.com',
  password: '123456',
  rol: 'USER_ROLE'
})
useEffect(() => {
  const fetchProductos = async()=> {
    try {
      const response = await fetch('/db/productos.json');
      const data = await response.json();
      setProductos(data);
      setPageProductos(data)
    } catch (error) {
      console.error('Error en el fetch', error);
    }
  }
  fetchProductos();
}, []);

useEffect(() => {
  const filtrarProductos = ()=>{
    if(categoria != 'all'){
      const newProductos = productos.filter(producto=> producto.categoria === categoria)
      setPageProductos(newProductos)
    }else if(categoria === 'all'){
      setPageProductos(productos)
    }
  } 
  filtrarProductos()
}, [categoria, productos])

    const globalState = {
       productos,
       pageProductos,
       setPageProductos,
       setCategoria,
       selectedCategory, 
       setSelectedCategory,
       user    
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