import axios from 'axios';
export const obtenerCategorias = async () => {
    const urlServer = import.meta.env.VITE_REACT_APP_APIURL;
    const endpoint = "/api/categorias";
    try {
      const categorias = await axios.get(urlServer + endpoint);
      return categorias
    } catch (error) {
      console.log(error)
    }
  };