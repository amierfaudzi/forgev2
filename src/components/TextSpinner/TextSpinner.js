// Code via this example - https://stackoverflow.com/questions/60841482/achieve-infinite-text-spinner-spinning-text-from-bottom-to-top-animation

import React from 'react';
import './TextSpinner.scss';

export default function TextSpinner() {
    return (
        <div className="text">This is a 
            <div className="items">
                <p className="item-1">test.</p>
                <p className="item-2">bug.</p>
                <p className="item-3">fail.</p>
            </div>
        </div>
    )
}
