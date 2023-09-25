
import Cookies from 'universal-cookie';
import { useEffect, useState } from 'react'
import './loginForm.scss'
import { registrarProducto } from '../../helpers/registrarProducto'
import { useMarketplace } from '../../context';


export const RegistrarProductoForm = () => {
    
    const cookies = new Cookies()
    const token = cookies.get('token')
    const usuario = cookies.get('usuario')
    const {categorias} = useMarketplace()
  

    const [formState, setFormState] = useState({
        nombre: '',
        id_categoria: '',
        id_usuario: usuario ? usuario.id : '',
        precio: '',
        descripcion: '',
        img1: 'https://res.cloudinary.com/dezwpnks0/image/upload/v1693410358/dreamcast_t7bbwa.webp',
        img2: 'https://res.cloudinary.com/dezwpnks0/image/upload/v1693330539/sega_abtjgg.webp'
      })
    
      const {nombre, id_categoria, id_usuario, precio, descripcion, img1, img2} = formState;
    
      const onInputchange =({target})=>{
        const {name, value} = target;
          setFormState({
                ...formState,
                [name]: value       
        }) 
      }
      
      const onSubmit = async(event)=>{
        event.preventDefault();
            await registrarProducto(formState, token)       
            // navigate('/mi-perfil')
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
                <label className="form-label">Imagenes (en desarrollo)</label>
                <input 
                type="file" 
                className="form-control" 
                name='imgs'
                // value={imgs}
                onChange={onInputchange}
                disabled
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

