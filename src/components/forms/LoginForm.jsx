
import { useEffect, useState } from 'react'
import './loginForm.scss'
import Cookies from 'universal-cookie'

import { useMarketplace } from '../../context'
import { useNavigate } from 'react-router-dom'
import { iniciarSesion } from '../../helpers/iniciarSesion'



export const LoginForm = () => {
  const {setUser} = useMarketplace()
  const navigate = useNavigate()
    
  const [formState, setFormState] = useState(  {
    email: '',
    password: '',
  })

      const {email, password} = formState;
    
      const onInputchange = async({target})=>{
        const {name, value} = target;
        await setFormState({
                ...formState,
                [name]: value       
        }) 
      }
      
      const onSubmit = async(event)=>{
        event.preventDefault();
          const response = await iniciarSesion(formState)
          if(response){
            setUser(response.data.usuario)
            alert('Sesión iniciada con exito!')
            navigate('/')
          }
      }    

  return (
    <div className='pb-5 body-bg'>
      <div className='form-wrapper'>
          <form 
          className='login-form'
          >
            
          <div className="mb-5">
              <label htmlFor="exampleInputEmail1" className="form-label">E-mail</label>
              <input 
              type="email" 
              className="form-control" 
              id="exampleInputEmail1" 
              aria-describedby="emailHelp"
              placeholder='correo...' 
              name='email'
              value={email}
              onChange={onInputchange}
              />
              
          </div>
          <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
              <input 
              type="password" 
              className="form-control" 
              id="exampleInputPassword1"
              placeholder='contraseña...'
              name='password'
              value = {password}
              onChange = {onInputchange}
              
              />
          </div>
          <button type="submit" className="btn btn-primary button-width" 
          onClick={onSubmit}
          >Iniciar Sesión</button>
          <hr />
          </form>
          <div>
            <button className="btn btn-success mb-4" onClick={()=>{navigate('/iniciar-sesion/registration')}}>Crear cuenta</button>
          </div>
      </div>
      <div id='errorMsg' className='text-center pb-5'></div>
    </div>
  )
}

