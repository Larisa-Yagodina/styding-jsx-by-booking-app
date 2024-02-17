import React from 'react';
import MenuItem from "./MenuItem";

const Menu = ({menu}) => {

    return (
        <div className='header-menu-wrapper'>
            <div className='menu-style'>
                {
                    menu.map((el, ind) => <MenuItem key={ind} menuItem={el} />)
                }
            </div>
        </div>
    );
};

export default Menu;
