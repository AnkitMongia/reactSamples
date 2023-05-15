import React from "react";

function TodoItem(props){

    function handleClick(){
        props.onChecked(props.id);
    }

    return (
        <li onClick={handleClick}>{props.text}</li>
    );
}

export default TodoItem;