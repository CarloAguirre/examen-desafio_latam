import axios from 'axios';

export const registrarProducto = async (producto, token) => {
    const urlServer = import.meta.env.VITE_REACT_APP_APIURL;
    const endpoint = "/api/productos";
    const headers = {
      'Authorization': `Bearer ${token}`
    };
    try {
      await axios.post(urlServer + endpoint, producto, { headers });
      alert("producto creado exitosamente!");
      window.location.href = "/mi-perfil"
    } catch (error) {
      console.log(error)
      const {msg} = error.response.data;
      document.getElementById('errorMsg').innerHTML = `
      <p>
          ${msg}
      </p>`
    }
  };