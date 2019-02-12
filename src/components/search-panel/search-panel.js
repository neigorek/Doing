import React from 'react'
import ItemFilter from '../item-filter';


    const SearchPanel = () => {

            const SearchText = 'There Search input';

            const SearchStyle = {
                fontSize: '20px',
                border: '1px dotted black'
            };

            return (<div className="input-group">
                        <input style = { SearchStyle } type = "text" className = "form-control" placeholder = { SearchText }
                        aria-describedby = "button-addon4"/>

                    <ItemFilter/>

                    </div>

            );
    }

export default SearchPanel;