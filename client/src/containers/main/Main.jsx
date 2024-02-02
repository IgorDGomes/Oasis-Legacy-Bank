import React from 'react';
import { Hero } from '../../components/section_hero/Hero';
import { Customer } from '../../components/section_customer/Customer';
import { Features } from '../../components/section_features/Features';

function Main() {
    return (
        <main>
            <Hero />
            <Customer />
            <Features />
        </main>
    );
}

export default Main;