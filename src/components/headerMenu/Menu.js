import React from 'react';
import MenuItem from "./MenuItem";

const Menu = ({menu}) => {

    return (
        <div style={{backgroundColor: '#F5F5F5'}}>
            <div className='menuStyle'>
                {
                    menu.map((el, ind) => <MenuItem key={ind} menuItem={el} />)
                }
            </div>
            <hr/>
        </div>
    );
};

export default Menu;
