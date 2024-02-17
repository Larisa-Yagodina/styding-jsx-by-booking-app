import React from 'react';
import CatalogItem from "./CatalogItem";

const catalogWrapper = {
    marginTop: '10px',
    paddingTop: '10px',
    boxShadow: '4px 4px 10px -4px rgba(34, 60, 80, 0.2) inset',
}
const catalogStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    columnGap: '10px',
    rowGap: '10px',
    paddingBottom: '15px',
    margin: '0 20px 0'
};

const Catalog = ({accommodation}) => {

    return (
        <div style={catalogWrapper}>
            <h2 style={{paddingLeft: '20px'}}>Start your journey</h2>
            <div style={catalogStyle}>
                {
                    accommodation.map(el => <CatalogItem key={el.id} catalogItem={el}/>)
                }
            </div>
        </div>
    );
};

export default Catalog;
