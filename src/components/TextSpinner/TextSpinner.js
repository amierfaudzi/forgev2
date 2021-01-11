// Code via this example - https://stackoverflow.com/questions/60841482/achieve-infinite-text-spinner-spinning-text-from-bottom-to-top-animation

import React from 'react';
import './TextSpinner.scss';

export default function TextSpinner() {
    return (
        <div class="text">This is a 
            <div class="items">
                <p class="item-1">test.</p>
                <p class="item-2">bug.</p>
                <p class="item-3">fail.</p>
            </div>
        </div>
    )
}
