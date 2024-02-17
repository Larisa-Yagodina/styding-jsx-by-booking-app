import React from 'react';

const FooterMenu = (props) => {
    const {footerMenu} = props;

    return (
        <div>
            <br/>
            <h3>BookingApp.com</h3>
            {footerMenu.map((el, index) => <li key={index}>{el}</li>)}
        </div>
    );
};

export default FooterMenu;
