import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import { LoginArea } from '../../components/login_area/LoginArea';
import { Logo } from '../../components/logo/Logo';

function Header() {
    return (
        <header>
            <Logo />
            <Navbar />
            <LoginArea />
        </header>
    )
}

export default Header;