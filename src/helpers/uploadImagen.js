import axios from 'axios';
import FormData from 'form-data'

export const cargarImagen = (id, archivo1, archivo2, setSpinner)=>{
const urlServer = import.meta.env.VITE_REACT_APP_APIURL;
// const urlServer = 'http://localhost:8080';
const endpoint = "/api/uploads/productos/";

var data = new FormData();
data.append("img1", archivo1, "/path/to/file");
data.append("img2", archivo2, "/path/to/file");

let config = {
  method: 'put',
  maxBodyLength: Infinity,
  url: urlServer + endpoint + id,
  // headers: { 
  //   ...data.getHeaders()
  // },
  data : data
};

axios.request(config)
.then((response) => {
  alert("producto creado exitosamente!");
  setSpinner(false)   
  window.location.href = "/mi-perfil"
})
.catch((error) => {
  setSpinner(false)
  const {msg} = error.response.data;
  document.getElementById('errorMsg').innerHTML = `
  <p>
      ${msg}
  </p>`
});

}
