import React from 'react';
import LogoImage from '../../assets/images/logo.png';

export function Logo() {
    return (
        <div className='logo'>
            <a href='' title='Oasis Legacy Bank'>
                <img src={LogoImage} alt='Oasis Legacy Logo' />
            </a>
        </div>
    );
}