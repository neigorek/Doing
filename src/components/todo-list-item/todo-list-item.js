import React from 'react'
import './todo-list-item.css'



export default class TodoListItem extends React.Component {


    state = {

        done: false,
        important: false

    };

    onLabelClick = () => {

        console.log(`Done: ${this.props.label}`);

        this.setState(({done})=>{

            return{
                done: !done
            }

        })
};

    onMarkImportant = () => {
        this.setState(({important}) =>
            {
                return {
                    important: !important
                }

            }
        )
    }

    render() {

        const { label, onDeleted } = this.props;

        const { done, important } = this.state;

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
                  onClick={ this.onLabelClick }> { label } </span>

            <div className={ 'boxbtn' }>
                <button type="button"
                        className = {"btnIt btn btn-outline-success "}
                        onClick={this.onMarkImportant}>
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

