import React, { useEffect } from 'react'
import { RegistrarProductoForm } from '../../components/forms/RegistrarProductoForm'
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

export const RegistrarProductoView = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const userToken = cookies.get('token');

  useEffect(() => {
    if (!userToken) {
      alert('Sesión expirada. Vuelve a iniciar sesión');
      navigate('/iniciar-sesion');
    }
  }, [userToken, navigate]);
  return (
    <RegistrarProductoForm />
  )
}

