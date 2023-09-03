
import { useEffect, useState } from 'react'
import './loginForm.scss'
import Cookies from 'universal-cookie'

import { useMarketplace } from '../../context'
import { useNavigate } from 'react-router-dom'



export const LoginForm = () => {
    const {setUser} = useMarketplace()
    const navigate = useNavigate()
    useEffect(() => {
      const cookies = new Cookies();
      // const token = cookies.get("token")  <-- Aqui hay que evaluar si guardara el token en un useState o en las cookies
  }, [])
    const [formState, setFormState] = useState({
        id: 1,
        nombre: 'Tester',
        mail: '',
        password: '',
        rol: 'USER_ROLE'
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
            // loginFetch(password, email) <-- Asi se hara con el backend
            await setUser({...formState, mail: email, password: password })
            navigate('/')
      }    

  return (
    <div className='pb-5 body-bg form-container'>
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
      <div className="form-text text-light">*Modo beta: Puedes usar cualquier mail y contraseña para acceder</div>
      <div id='errorMsg' className='text-center mt-3' ></div>
    </div>
  )
}

