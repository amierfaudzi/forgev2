// Code via this example - https://stackoverflow.com/questions/60841482/achieve-infinite-text-spinner-spinning-text-from-bottom-to-top-animation

import React from 'react';
import './TextSpinner.scss';

export default function TextSpinner() {
    return (
        <h1 className="text">Welcome, fellow
            <div className="items">
                <h1 className="item-1">scholar.</h1>
                <h1 className="item-2">adventurer.</h1>
                <h1 className="item-3">inquisitor.</h1>
            </div>
        </h1>
    )
}
