import React from 'react'
import {Categories, Sort, PizzaBlock} from "../components";

const Main = ({pizzas}) => {
    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories/>
                    <Sort/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {pizzas.map(pizza => {
                        return (
                            <PizzaBlock key={pizza.id} {...pizza}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Main