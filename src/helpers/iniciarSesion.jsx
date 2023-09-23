import axios from 'axios';
import Cookies from 'universal-cookie';
export const iniciarSesion = async (data) => {
  const cookies = new Cookies()
  const urlServer = import.meta.env.VITE_REACT_APP_APIURL;
  const endpoint = "/api/auth/login";
  
    try {
      const response = await axios.post(urlServer + endpoint, data);
      cookies.set('token', response.data.token, {"path": "/"})
      cookies.set('usuario', response.data.usuario, {"path": "/"})
      return response
    } catch (error) {
      const {msg} = error.response.data;
      document.getElementById('errorMsg').innerHTML = `
      <p>
          ${msg}
      </p>`
    }
  };