import React from 'react';


export default  class ItemFilter extends React.Component{

    render() {
        return (

            <div className = "input-group-append" id = "button-addon4">
                <button className = "btn btn-outline-secondary" type = "button"> All </button>
                <button className = "btn btn-outline-secondary" type = "button"> Active </button>
                <button className = "btn btn-outline-secondary" type = "button"> Ended </button>
            </div>
        )
    }

}



