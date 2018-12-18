import React from 'react';
import { Link } from 'react-router-dom';
import './profileBar.css';

function ProfileBar ({ picture, username, onOpenText }) {
  return (
    <div className='profileBar'>
      <Link to='/profile'>
        <figure>
          <img className='avatarProfileBar' src={picture} alt="avatarProfileBar"/>
        </figure>
      </Link>
      <span className='userNameProfile'>Hola @{username}!</span>
      <button className='profileButton' onClick={onOpenText}>
        <span className='fa fa-lg fa-edit'></span>
        Tweet!
      </button>
    </div>
  );
}

export default ProfileBar;