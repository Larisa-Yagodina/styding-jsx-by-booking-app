import React from 'react';
import CatalogItem from "./CatalogItem";


const Catalog = ({accommodation}) => {

    return (
        <div className='catalog-wrapper'>
            <h2 style={{paddingLeft: '20px'}}>Start your journey</h2>
            <div className='catalog-style'>
                {
                    accommodation.map(el => <CatalogItem key={el.id} catalogItem={el}/>)
                }
            </div>
        </div>
    );
};

export default Catalog;
