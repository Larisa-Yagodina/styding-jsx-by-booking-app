import React from 'react';
import MenuItem from "./MenuItem";

const menuStyle = {
    paddingTop: '30px',
    display: 'flex',
};
const Menu = ({menu}) => {

    return (
        <div style={{backgroundColor: '#F5F5F5'}}>
            <div style={menuStyle}>
                {
                    menu.map((el, ind) => <MenuItem key={ind} menuItem={el} />)
                }
            </div>
            <hr/>
        </div>
    );
};

export default Menu;
