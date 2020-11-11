import React, {useState} from 'react'
import classNames from 'classnames'
import {CategoriesItem} from "./";


const Categories = () => {
    const [selected, setSelected] = useState(0)
    const items = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    const handleSelected = (index) => {
        setSelected(index)
    }

    return (
        <div className="categories">
            <ul>
                {items.map((item, index) => <CategoriesItem
                    key={`${item}_${index}`}
                    onCategoriesItemClick={() => handleSelected(index)}
                    item={item}
                    index={index}
                    className={classNames({'active': index === selected})}
                >
                    {item}
                </CategoriesItem>)}
            </ul>
        </div>
    )
}

export default Categories