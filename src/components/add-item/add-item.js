import React, {Component} from 'react';

import './add-item.css'

export default class AddItem extends Component {


    state = {
        label: ''
    }

    onLabelChange = (e) => {

        this.setState({

            label: e.target.value
        })
    };

    onSubmit = (e) => {

        e.preventDefault();

        this.props.onAdd(this.state.label);

        this.setState({
            label: ''
        })

    }




    render() {



        return(
            <form className={'add-item d-flex alert alert-light'}
                    onSubmit={this.onSubmit}
                    role={'alert'}>

                <input
                    type={'text'}
                    className={'form-control'}
                    placeholder= {'What need to be add'}
                    onChange={this.onLabelChange}
                    value={this.state.label}
                />
                <button className={'btn btn-success w-100'}>Add</button>
            </form>
        )
    }


}