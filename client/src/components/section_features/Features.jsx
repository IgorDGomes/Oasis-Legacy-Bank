import React from 'react';
import { FeatComponent } from '../feature_component/FeatComponent';

export function Features() {
    return (
        <section className="features">
            <FeatComponent class='feature_section safety' svg='Lock' />
            <FeatComponent class='feature_section financial' svg='Trending' />
            <FeatComponent class='feature_section top' svg='LeaderBoard' />
            <FeatComponent class='feature_section accessibility' svg='Language' />
            <FeatComponent class='feature_section favorite' svg='Favorite' />
        </section>
    );
}