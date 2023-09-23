import axios from 'axios';
export const registrarFavorito = async (id_usuario, id_producto, token) => {
    const urlServer = import.meta.env.VITE_REACT_APP_APIURL;
    const endpoint = "/api/favoritos";
    const headers = {
      'Authorization': `Bearer ${token}`
    };
    try {
      const categorias = await axios.post(urlServer + endpoint, {id_usuario, id_producto}, {headers});
      alert('Poducto añadido a tus favoritos')
    } catch (error) {
      console.log(error)
    }
  };