import React, {useState} from "react";
import classNames from 'classnames'

const SortPopup = ({selected, onSelected, itemsPopup}) => {
    return (
        <div className="sort__popup">
            <ul>
                {itemsPopup.map((item, i) => <li
                    className={classNames({'active': i === selected})}
                    onClick={() => onSelected(i)}>{item}</li>)}
            </ul>
        </div>
    )
}

export default SortPopup