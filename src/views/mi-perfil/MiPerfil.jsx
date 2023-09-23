import React, { useEffect } from 'react';
import { MiPerfil } from '../../components/mi-perfil/MiPerfil';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';

export const MiPerfilView = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const userToken = cookies.get('token');

  useEffect(() => {
    if (!userToken) {
      alert('Sesión expirada. Vuelve a iniciar sesión');
      navigate('/iniciar-sesion');
    }
  }, [userToken, navigate]);

  return <MiPerfil />;
};
