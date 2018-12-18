import React from 'react';
import './login.css';

function Login ({onAuth}) {
  return (
    <div className='login'>
      <p className='textLogin'>
        Necesitamos que inicies sesión con tu cuenta de Github para que puedas leer y escribir mensajes.
      </p>
      <button 
        className='buttonLogin' 
        onClick={onAuth}
      >
      <span className='fab fa-github'></span>
        Login con Github
      </button>
    </div>
  );
}

export default Login;