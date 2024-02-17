import React from 'react';

const catalogItemStyle = {
    minWidth: '230px',
    textAlign: 'center',
    padding: '5px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
}
const descriptionWrapper = {
    // height: '60%',
}
const imgWrapper = {
    // width: '100%',
    // height: '40%',
}
const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
}
const CatalogItem = ({catalogItem}) => {
    return (
        <div style={catalogItemStyle}>
            <div style={imgWrapper}>
                <img
                    src={catalogItem.img}
                    style={imgStyle}
                    alt="Картинка"/>
            </div>
            <div style={descriptionWrapper}>
                <h3>{catalogItem.name}</h3>
                <p>{catalogItem.description}</p>
                <p>{catalogItem.city}</p>
                <p>Price: <b>${catalogItem.price}</b></p>
                <button>BOOK</button>
            </div>
        </div>
    );
};

export default CatalogItem;
