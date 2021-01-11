import React from 'react';
import './Armory.scss';
import HexagonList from '../../HexagonList/HexagonList';

export default function Armory() {
    return (
        <div>
            <div className="armory__title">
                This is the armory
            </div>

            <div>
                <HexagonList/>
            </div>
        </div>
    )
}
