
import Cookies from 'universal-cookie';
import { useEffect, useState } from 'react'
import './loginForm.scss'
import { registrarProducto } from '../../helpers/registrarProducto'
import { useMarketplace } from '../../context';
import { cargarImagen } from '../../helpers/uploadImagen';
import { SpinnerLoading } from '../spinner/Spinner';
// import { cargarImagen } from '../../helpers/uploadImagen.js';


export const RegistrarProductoForm = () => {
    
    const cookies = new Cookies()
    const token = cookies.get('token')
    const usuario = cookies.get('usuario')
    const {categorias} = useMarketplace()
    const [spinner, setSpinner] = useState(false)
    const [archivo, setArchivo] = useState({
      img1: null,
      img2: null
    });
    const [formState, setFormState] = useState({
        nombre: '',
        id_categoria: 1,
        id_usuario: usuario ? usuario.id : '',
        precio: '',
        descripcion: '',
        img1: 'https://res.cloudinary.com/dezwpnks0/image/upload/v1696264904/no-image_sfbzvl.webp',
        img2: 'https://res.cloudinary.com/dezwpnks0/image/upload/v1696264904/no-image_sfbzvl.webp'
      })
    
      const {nombre, id_categoria, id_usuario, precio, descripcion} = formState;
    
      const onInputchange =({target})=>{
        const {name, value} = target;
          setFormState({
                ...formState,
                [name]: value       
        }) 
      }
      
      const {img1, img2} = archivo

      const onFileChange = ({target})=>{
        const {name, files} = target
        setArchivo({
          ...archivo,
          [name]: files[0]      
  }) 
      }

      const onSubmit = async(event)=>{
        event.preventDefault();
        setSpinner(true)
            await registrarProducto(formState, token)       
            .then(async(response)=>{
              const {id} = response.data.producto
              await cargarImagen(id, img1, img2, setSpinner)
            })
      }    

  return (
    <>
      <div className='pb-5 body-bg form-container'>
      <div className='form-wrapper'>
          <form 
          className='login-form'
          >
          <div className="mb-3">
                <label className="form-label">Nombre del producto</label>
                <input 
                type="text" 
                className="form-control" 
                placeholder='nombre' 
                name='nombre'
                value={nombre}
                onChange={onInputchange}
                />
            </div>
            <label className="form-label">Categoría</label>
            <div className="form-floating filter-custom">
                <select 
                className="form-select" 
                id="floatingSelect" 
                aria-label="Floating label select example"
                name='id_categoria'
                value={id_categoria}
                onChange={onInputchange}
                >
                  {
                    categorias && categorias.map(categoria =>(
                      <option value={`${categoria.id}`} className='text-center' key={categoria.id} >{categoria.nombre}</option>
                      ))
                    }
                </select>
                <label htmlFor="floatingSelect">Selecciona una categoria</label>
            </div>
            <div className="mb-3 mt-3">
                <label className="form-label">Precio</label>
                <input 
                type="number" 
                className="form-control" 
                placeholder='ej: 34.000' 
                name='precio'
                value={precio}
                onChange={onInputchange}
                />
            </div>
          <div className="mb-3">
                <label className="form-label">Descripción</label>
                <input 
                type="text" 
                className="form-control" 
                placeholder='descripcion del producto' 
                name='descripcion'
                value={descripcion}
                onChange={onInputchange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Imagenes de Producto</label>
                <input 
                type="file" 
                className="form-control" 
                name='img1'
                onChange={onFileChange}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Imagenes Logo</label>
                <input 
                type="file" 
                className="form-control" 
                name='img2'
                onChange={onFileChange}
                />
            </div>
          <hr />
          {
            (spinner === true) ? <SpinnerLoading />
            : 
          <button type="submit" className="btn btn-primary button-width" 
          onClick={onSubmit}
          >Crear producto</button>
          }
          </form>

      </div>
      <div id='errorMsg' className='text-center mt-3' ></div>
    </div>  
    </>
  )
}

