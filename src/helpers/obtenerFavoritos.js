import axios from 'axios';
export const obtenerFavoritos = async () => {
    const urlServer = import.meta.env.VITE_REACT_APP_APIURL;
    const endpoint = "/api/favoritos";
    try {
      const favoritos = await axios.get(urlServer + endpoint);
      return favoritos
    } catch (error) {
      console.log(error)
    }
  };