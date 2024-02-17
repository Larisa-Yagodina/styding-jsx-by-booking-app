import React from 'react';
import CatalogItem from "./CatalogItem";

const catalogStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    columnGap: '10px',
    rowGap: '10px',
    paddingBottom: '15px',
};
const Catalog = ({accommodation}) => {

    return (
        <div>
            <h2>Start your journey</h2>
            <div style={catalogStyle}>
                {
                    accommodation.map(el => <CatalogItem key={el.id} catalogItem={el}/>)
                }
            </div>
        </div>
    );
};

export default Catalog;
