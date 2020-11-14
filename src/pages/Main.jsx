import React from 'react'
import {Categories, Sort, PizzaBlock} from "../components";
import PreloaderPizzas from "../components/PreloaderPizzas";
import PropTypes from 'prop-types'

const Main = ({pizzas, load, activeCategory, onClickCategory, activeSort, setSort, onClickAddPizza, pizzasInCart}) => {
    return (
        <div className="content">
            <div className="container">
                <div className="content__top">
                    <Categories activeCategory={activeCategory} onClickCategory={onClickCategory}/>
                    <Sort activeSort={activeSort} setSort={setSort}/>
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {load ? Array(10).fill(0).map((preloader, i) => <PreloaderPizzas key={i}/>)
                        : pizzas.map(pizza => {
                            return (
                                <PizzaBlock key={pizza.id} onClickAddPizza={onClickAddPizza} pizzasInCart={pizzasInCart[pizza.id] && pizzasInCart[pizza.id].items.length} {...pizza}/>
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

Main.propTypes = {
    pizzas: PropTypes.arrayOf(PropTypes.object).isRequired,
    load: PropTypes.bool.isRequired,
    activeCategory: PropTypes.number.isRequired,
    onClickAddPizza: PropTypes.func
}

Main.defaultProps = {
    pizzas: [],
    load: false,
    activeCategory: 0
}

export default Main