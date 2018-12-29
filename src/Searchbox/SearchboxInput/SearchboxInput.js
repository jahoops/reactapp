import React from 'react';

const searchboxinput = (props) => {
    return  (
        <input onChange={props.changed} placeholder={props.placeholder} value={props.value } />
    );
}

export default searchboxinput;