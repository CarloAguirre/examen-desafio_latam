import axios from 'axios';
export const registrarUsuario = async (usuario, setSpinner) => {
    const urlServer = import.meta.env.VITE_REACT_APP_APIURL;
    const endpoint = "/api/usuarios";
    try {
      await axios.post(urlServer + endpoint, usuario);
      alert("Usuario registrado con éxito");
      setSpinner(false)
      window.location.href = "/iniciar-sesion"
    } catch (error) {
      setSpinner(false)
      const {msg} = error.response.data;
      document.getElementById('errorMsg').innerHTML = `
      <p>
          ${msg}
      </p>`
    }
  };