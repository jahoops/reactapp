import React from 'react';

const searchboxlist = (props) => {
    let listItems = null;

    listItems = props.children.map((item, index) => {
        return <tr key={index} eid={item.id}><td>{item.group}</td><td>{item.name}</td></tr>
    })

    const style = {
        position: "absolute"
    }

    return  (
        <table style={ style }><tbody>{listItems}</tbody></table>
    );
}

export default searchboxlist;