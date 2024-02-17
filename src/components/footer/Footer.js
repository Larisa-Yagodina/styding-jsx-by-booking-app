import React from 'react';
import Address from "./Address";
import FooterMenu from "./FooterMenu";

const footerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
};

const Footer = ({companyAddress, footerMenu}) => {

    return (
        <div>
            <div style={footerStyle}>
               <Address companyAddress={companyAddress} />
               <FooterMenu footerMenu={footerMenu} />
            </div>
        </div>
    );
};

export default Footer;
