import React from 'react'
import './todo-list-item.css'

const TodoListItem = ( { label , important = false } ) => {

    const style = {

        color : important ? 'tomato' : 'black'
    }

    return (
        <span className={'box'}>
            <span style = { style } > { label } </span>

            <button type="button"
                    className = {"btn btn-outline-success "}>
                <img alt = 'img1' ></img>
            </button>
            <button type="button"
                    className = {"btn btn-outline-danger "}>
                <img alt = 'img2' ></img>
            </button>
        </span>
    );
}

export default TodoListItem;