import React from 'react';

const menuItemStyle = {
    paddingRight: '25px',
};
const MenuItem = ({menuItem}) => {

    return (
        <div style={menuItemStyle}>
            {menuItem}
        </div>
    );
};

export default MenuItem;
