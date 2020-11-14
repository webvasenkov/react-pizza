import React, {useState} from 'react'
import classNames from 'classnames'
import {CategoriesItem} from "./";

const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']


const Categories = React.memo(({activeCategory, onClickCategory}) => {
        return (
            <div className="categories">
                <ul>
                    <CategoriesItem
                        onCategoriesItemClick={onClickCategory}
                        index={null}
                        className={classNames({'active': null === activeCategory})}
                    >
                        Все
                    </CategoriesItem>

                    {categories.map((category, index) => <CategoriesItem
                        key={`${category}_${index}`}
                        onCategoriesItemClick={onClickCategory}
                        item={category}
                        index={index}
                        className={classNames({'active': index === activeCategory})}
                    >
                        {category}
                    </CategoriesItem>)}
                </ul>
            </div>
        )
    }
)

export default Categories