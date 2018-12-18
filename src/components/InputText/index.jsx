import React from 'react';
import './inputText.css';

function InputText ({onSendText, userNameToReply, onCloseText}) {
  return (
    <form className='form' onSubmit={onSendText}>
      <textarea 
        className='textarea' 
        name='text' 
        defaultValue={(userNameToReply) ? `@${userNameToReply} ` : ''}
      >
      </textarea>
      <div className='butonsInput'>
        <button className='close' onClick={onCloseText}>Cerrar</button>
        <button className='send' type='submit'>Enviar</button>
      </div>
    </form>
  );
}

export default InputText;
