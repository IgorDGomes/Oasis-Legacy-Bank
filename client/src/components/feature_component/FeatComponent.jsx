import React from 'react';
import { LockOutlined, TrendingUp, Leaderboard, Language, Favorite } from '@mui/icons-material';

export function FeatComponent(props) {

    const icons = {
        'Lock': [
            <LockOutlined />,
            <h3>Your safety is our top priority</h3>,
            <p>We've implemented the latest security measures to protect your money and personal information.</p>
        ],
        'Trending': [
            <TrendingUp />,
            <h3>Financial growth</h3>,
            <p>Choose our bank, where your wealth is on the rise. With smart financial solutions and steady growth, we're here to help individuals and businesses build and increase their wealth.</p>
        ],
        'LeaderBoard': [
            <Leaderboard />,
            <h3>Our bank is a top choice worldwide</h3>,
            <p>Whether you're an individual or a business, we offer top-notch financial solutions with a commitment to excellence.</p>
        ],
        'Language': [
            <Language />,
            <h3>Accessbility</h3>,
            <p>Our bank is easily accessible with numerous branches and ATMs, making it convenient for you to find us wherever you go.</p>
        ],
        'Favorite': [
            <Favorite />,
            <h3>Your favorite Bank</h3>,
            <p>Our bank is a favorite among people because of the trust and satisfaction we bring to our customers.</p>
        ],
    };

    const selectedIcon = icons[props.svg];

    return (
        <div className={props.class}>
            {selectedIcon}
        </div>
    );
}