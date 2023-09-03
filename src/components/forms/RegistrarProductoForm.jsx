
import { useEffect, useState } from 'react'
import './loginForm.scss'
import Cookies from 'universal-cookie'

import { useMarketplace } from '../../context'
import { useNavigate } from 'react-router-dom'


export const RegistrarProductoForm = () => {
    const {setUser} = useMarketplace()
    const navigate = useNavigate()
    useEffect(() => {
      const cookies = new Cookies();
      // const token = cookies.get("token")  <-- Aqui hay que evaluar si guardara el token en un useState o en las cookies
  }, [])
    const [formState, setFormState] = useState({
        usuario_id: '',
        categoria_id: '',
        nombre: '',
        precio: '',
        descripcion: '',
        imgs: ''
      })
    
      const {nombre, precio, descripcion, imgs} = formState;
    
      const onInputchange = async({target})=>{
        const {name, value} = target;
        await setFormState({
                ...formState,
                [name]: value       
        }) 
      }
      
      const onSubmit = async(event)=>{
        event.preventDefault();
            alert("Se requiere la implementacion del backend para realizar esta acción")
            // createProductFetch(password, email) <-- Asi se hara con el backend          
            navigate('/mi-perfil')
      }    

  return (
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
                placeholder='Tu nombre' 
                name='nombre'
                value={nombre}
                onChange={onInputchange}
                />
            </div>
            <div className="mb-3">
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
                <label className="form-label">Imagenes</label>
                <input 
                type="file" 
                className="form-control" 
                name='imgs'
                value={imgs}
                onChange={onInputchange}
                />
            </div>
          <hr />
          <button type="submit" className="btn btn-primary button-width" 
          onClick={onSubmit}
          >Crear producto</button>
          </form>

      </div>
      <div id='errorMsg' className='text-center mt-3' ></div>
    </div>
  )
}

