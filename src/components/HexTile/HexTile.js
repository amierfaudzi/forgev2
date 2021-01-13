import React from 'react';
import { useHistory } from 'react-router-dom';

export default function HexTile({data}) {

    let history = useHistory();

    const handleLearn = () => {

        console.log("This has been clicked and here is the skill", data);
        history.push('/learn');
    }

    return (
        <>
            <li className="hex" onClick={handleLearn}>
                <div className="hexIn">
                <div className="hexLink">
                    <img src={data.thumbnailUrl} alt=""/>
                    <h1>{data.skillName}</h1>
                    <p>{data.skillDescription}</p>
                </div>
                </div>
            </li>
        </>
    )
}
