import React, {useState} from 'react'
import classNames from 'classnames'
import {CategoriesItem} from "./";


const Categories = () => {
    const [select, setSelect] = useState(0)
    const items = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    const handleSelected = (index) => {
        setSelect(index)
    }

    return (
        <div className="categories">
            {console.log(select)}
            <ul>
                {items.map((item, index) => <CategoriesItem
                    key={`${item}_${index}`}
                    onCategoriesItemClick={() => handleSelected(index)}
                    item={item}
                    index={index}
                    className={classNames({'active': index === select})}
                >
                    {item}
                </CategoriesItem>)}
            </ul>
        </div>
    )
}

export default Categories