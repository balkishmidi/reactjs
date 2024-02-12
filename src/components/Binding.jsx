import React from 'react';
import { useState } from 'react';
export function Binding (props){
    const [nbB, setNbB] = useState(props.nbB);
    return(
        <div>
            <h1>Composant B</h1>
            <p>Type: {props.type}</p>
        </div>
    )
}