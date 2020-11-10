import React from 'react';

const CategoriesItem = ({children, onCategoriesItemClick, className}) => {
    return (
        <li onClick={onCategoriesItemClick} className={className}>{children}</li>
    )
}

export default CategoriesItem;

