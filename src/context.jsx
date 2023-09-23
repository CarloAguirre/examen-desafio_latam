import { createContext, useState, useEffect, useContext } from "react"
import Cookies from "universal-cookie";

 const MarketplaceContext = createContext({})

 export const MarketplaceProvider = ({ children }) =>{
  
const [productos, setProductos] = useState([]);
const [categoria, setCategoria] = useState('all')
const [selectedCategory, setSelectedCategory] = useState('all');
const [pageProductos, setPageProductos] = useState([])
const [favoritos, setFavoritos] = useState([])
const [carrito, setCarrito] = useState([])
const [index, setIndex] = useState(0);
const [qty, setQty] = useState([])
const [user, setUser] = useState({})

const urlServer = import.meta.env.VITE_REACT_APP_APIURL;
const cookies = new Cookies()

const productosFetch = async()=>{
  const response = await fetch(urlServer + '/api/productos')
  const data = await response.json()
  setProductos(data.productos)
  setPageProductos(data.productos)
}

useEffect(() => {
  const userCookie = cookies.get('usuario')
  if (userCookie) {
    try {
      // const userObject = JSON.parse(userCookie);
      setUser(userCookie);
    } catch (error) {
      setUser({})
    }
  }

  productosFetch()
}, []);

// useEffect(() => {
//   const fetchProductos = async()=> {
//     try {
//       const productosFetch = await fetch('/db/productos.json');
//       const productosData = await productosFetch.json();
//       setProductos(productosData);
//       setPageProductos(productosData)

//       const favoritosFetch = await fetch('/db/favoritos.json');
//       const favoritosData = await favoritosFetch.json();
//       setFavoritos(favoritosData)
//     } catch (error) {
//       console.error('Error en el fetch', error);
//     }
//   }
//   fetchProductos();
// }, []);

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

const handleSelect = (selectedIndex) => {
  setIndex(selectedIndex);
};

    const globalState = {
       productos,
       pageProductos,
       setPageProductos,
       setCategoria,
       selectedCategory, 
       setSelectedCategory,
       user,
       setUser,
       favoritos,
       carrito,
       setCarrito,
       index, 
       setIndex ,
       handleSelect,
       qty,
       setQty  
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