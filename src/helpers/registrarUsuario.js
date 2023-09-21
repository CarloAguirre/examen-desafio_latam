import axios from 'axios';
export const registrarUsuario = async (usuario) => {
    const urlServer = import.meta.env.VITE_REACT_APP_APIURL;
    const endpoint = "/api/usuarios";
    try {
      await axios.post(urlServer + endpoint, usuario);
      alert("Usuario registrado con éxito");
      window.location.href = "/iniciar-sesion"
    } catch (error) {
      const {msg} = error.response.data;
      document.getElementById('errorMsg').innerHTML = `
      <p>
          ${msg}
      </p>`
    }
  };