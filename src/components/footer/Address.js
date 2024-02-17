import React from 'react';

const Address = ({companyAddress}) => {

    return (
        <div>
            <h3>Contacts:</h3>
            <p>{companyAddress.address}</p>
            <p>ZIP: {companyAddress.zip}</p>
            <p>{companyAddress.email}</p>
            <p>Manager: {companyAddress.phoneNumber}</p>
        </div>
    )
};

export default Address;
