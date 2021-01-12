import React from 'react'

export default function DormantHex({ toggleModal }) {
    return (
        <li className="honeycomb-cell" onClick={toggleModal}>
            <div className="honeycomb-cell__title">Add a new skill</div>
        </li>
    )
}
