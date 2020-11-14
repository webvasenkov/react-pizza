import React, {useEffect} from 'react'
import Main from "./Main";
import {useDispatch, useSelector} from "react-redux";
import {getActiveCategory, getActiveSort, getCartPizzas, getLoading, getPizzas} from "../redux/selectors";
import {setCategory, setSortBy} from "../redux/reducers/filterReducer";
import {setPizzas} from "../redux/reducers/pizzasReducer";
import {addPizzas} from "../redux/reducers/cartReducer";


const MainContainer = () => {
    const dispatch = useDispatch()

    const setSort = (sort) => {
        dispatch(setSortBy(sort))
    }

    const onClickCategory = (index) => {
        dispatch(setCategory(index))
    }

    const onClickAddPizza = (pizza) => {
        dispatch(addPizzas(pizza))
    }

    const {pizzas, load, activeCategory, activeSort, pizzasInCart} = useSelector(({pizzas, filter, cart}) => {
        return {
            pizzas: getPizzas(pizzas),
            load: getLoading(pizzas),
            activeCategory: getActiveCategory(filter),
            activeSort: getActiveSort(filter),
            pizzasInCart: getCartPizzas(cart)
        }
    })

    useEffect(() => {
        dispatch(setPizzas(activeCategory, activeSort))
    }, [activeCategory, activeSort])


    return <Main pizzas={pizzas}
                 load={load}
                 activeCategory={activeCategory}
                 onClickCategory={onClickCategory}
                 activeSort={activeSort}
                 setCategory={setCategory}
                 setSort={setSort}
                 onClickAddPizza={onClickAddPizza}
                 pizzasInCart={pizzasInCart}
    />
}

export default MainContainer