import React from "react";
import classNames from 'classnames'

const SortPopup = ({selected, handleSelected, itemsPopup}) => {
    return (
        <div className="sort__popup">
            <ul>
                {itemsPopup.map((item, i) => <li
                    className={classNames({'active': i === selected})}
                    onClick={() => handleSelected(i)}>{item}</li>)}
            </ul>
        </div>
    )
}

export default SortPopup