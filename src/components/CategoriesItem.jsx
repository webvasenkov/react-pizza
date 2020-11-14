import React from 'react';

const CategoriesItem = ({children, onCategoriesItemClick, className, index}) => {
    return (
        <li onClick={() => onCategoriesItemClick(index)} className={className}>{children}</li>
    )
}

export default CategoriesItem;

