import React from 'react';
import './profile.css';

function Profile ({picture, displayName, username, emailAddress, location}) {
  return (
    <div className='profile'>
      <img className='avatarProfileUser' src={picture} alt='avatarProfile' />
      <span className='nameProfile'>{displayName}</span>
      <ul className='data'>
        <li className='li'>
          <span className='fa fa-user' />
          <span className='textProfile'>{username}</span>
        </li>
        <li className='li'>
          <span className='fa fa-envelope' />
          <span className='textProfile'>{emailAddress}</span>
        </li>
        <li className='li'>
          <span className='fa fa-map-marker' />
          <span className='textProfile'>{location}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;