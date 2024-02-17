import React from 'react';

const catalogItemStyle = {
    minWidth: '230px',
    textAlign: 'center',
    padding: '5px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
}
const imgStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
}
const CatalogItem = ({catalogItem}) => {
    return (
        <div style={catalogItemStyle}>
                <img
                    src={catalogItem.img}
                    style={imgStyle}
                    alt="Картинка"/>
                <h3>{catalogItem.name}</h3>
                <p>{catalogItem.description}</p>
                <p>{catalogItem.city}</p>
                <p>Price: <b>${catalogItem.price}</b></p>
                <button>BOOK</button>
        </div>
    );
};

export default CatalogItem;
