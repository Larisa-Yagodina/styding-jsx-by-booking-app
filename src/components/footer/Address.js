import React from 'react';

const Address = ({companyAddress}) => {

    return (
        <div>
            <h3>Contacts:</h3>
            <p>{companyAddress.address}</p>
            <p>{companyAddress.zip}</p>
            <p>{companyAddress.email}</p>
            <p>{companyAddress.phoneNumber}</p>
        </div>
    )
};

export default Address;
