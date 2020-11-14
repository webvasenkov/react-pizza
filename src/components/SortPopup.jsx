import React from "react";
import classNames from 'classnames'

const SortPopup = ({activeSort, handleSelected, itemsPopup}) => {
    debugger
    return (
        <div className="sort__popup">
            <ul>
                {itemsPopup.map(({type, name}, i) => <li
                    key={`${type}_${i}`}
                    className={classNames({'active': type === activeSort.sort})}
                    onClick={() => handleSelected(type)}>{name}</li>)}
            </ul>
        </div>
    )
}

export default SortPopup