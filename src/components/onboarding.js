import React from 'react';
import '../styles/onboarding.css';

export default function Onboarding(props) {
    return (
        <section className="onboard-section">
            <h2>Welcome to Movie surfer!</h2>
            <p className="intro-p">Love movies, TV or video games?</p>
            <p className="intro-p">Love listifying things?</p>
            <p className="intro-p">Just love the internet?!</p>
            <p className="intro-p">Then you're in the right place!</p>

            <h3 className="onboard-stories-header">With Movie Surfer you can:</h3>
            <ul className="onboard-ul">
                <li>Create lists of movies, TV shows or videos games</li>
                <li>Share the list with friends</li>
                <li>Sort through and rank your lists.</li>
            </ul>
        </section>
    );
}
