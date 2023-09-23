import { createContext, useState, useEffect, useContext } from "react"
import Cookies from "universal-cookie";
import { obtenerCategorias } from "./helpers/obtenerCategorias";

 const MarketplaceContext = createContext({})

 export const MarketplaceProvider = ({ children }) =>{
  
const [productos, setProductos] = useState([]);
const [categoria, setCategoria] = useState('all')
const [selectedCategory, setSelectedCategory] = useState('all');
const [pageProductos, setPageProductos] = useState([])
const [categorias, setCategorias] = useState([])
const [categoriaId, setCategoriaId] = useState('')
const [favoritos, setFavoritos] = useState([])
const [carrito, setCarrito] = useState([])
const [index, setIndex] = useState(0);
const [qty, setQty] = useState([])
const [user, setUser] = useState({})

const urlServer = import.meta.env.VITE_REACT_APP_APIURL;
const cookies = new Cookies()

const dataFetch = async()=>{
  const response = await fetch(urlServer + '/api/productos')
  const data = await response.json()
  setProductos(data.productos)
  setPageProductos(data.productos)
}

useEffect(() => {
  const userCookie = cookies.get('usuario')
  if (userCookie) {
    try {
      setUser(userCookie);
    } catch (error) {
      setUser({})
    }
  }

  dataFetch()
}, []);

const categoriasFetch = async()=>{
  await obtenerCategorias()
  .then(response=> setCategorias(response.data.categorias))      
}

useEffect(() => {
  categoriasFetch()
}, [])

const filtrarProductos = async () => {
  if (categoria !== 'all') {
    try {
      const response = await fetch(urlServer + `/api/categorias/${categoria}`);
      const data = await response.json();
      const {id} = data.categoria[0];
      const newProductos = productos.filter(producto => Number(producto.id_categoria) === id);
      setPageProductos(newProductos);
      setCategoriaId(id)
    } catch (error) {
      console.error(error);
    }
  } else if (categoria === 'all') {
    setPageProductos(productos);
  }
};

useEffect(() => {
  filtrarProductos();
}, [categoria]);

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
       setFavoritos,
       carrito,
       setCarrito,
       index, 
       setIndex ,
       handleSelect,
       qty,
       setQty,
       categorias,
       setCategorias,
       urlServer,
       categoriaId  
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