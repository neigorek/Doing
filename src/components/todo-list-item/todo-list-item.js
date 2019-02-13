import React from 'react'
import './todo-list-item.css'



export default class TodoListItem extends React.Component {



    render() {

        const { label, onDeleted,
            onToggleImportant, onToggleDone,
            done, important } = this.props;


        let classNames = ' box ';

        if (done){

            classNames += ' done ';
        }
        if (important){

            classNames += ' important ';
        }

        return (
            <span className={classNames}>
            <span className={'item-label'}
                  onClick={ onToggleDone }> { label } </span>

            <div className={ 'boxbtn' }>
                <button type="button"
                        className = {"btnIt btn btn-outline-success "}
                        onClick={onToggleImportant}>
                    <img src = "/img/mark.png" alt = 'img1' width="25px" height="25px" />
                </button>

                <button type="button"
                        className = {"btnIt btn btn-outline-danger "}
                        onClick = {onDeleted}>
                    <img src = '/img/trash.png' alt = 'img2' width="25px" height="25px"  />
                </button>
            </div>
        </span>
        );
    }
}

