import React from 'react'
import Cart from "./Cart";
import {useSelector, useDispatch} from "react-redux";
import {getCartPizzas, getTotalCount, getTotalPrice} from "../redux/selectors";
import {clearCart, minusPizza, plusPizza, removeCartPizza} from "../redux/reducers/cartReducer";

const CartContainer = () => {
    const dispatch = useDispatch()
    const {pizzas, totalCount, totalPrice} = useSelector(({cart}) => {
        return {
            pizzas: getCartPizzas(cart),
            totalCount: getTotalCount(cart),
            totalPrice: getTotalPrice(cart)
        }
    })

    const groupPizzas = Object.keys(pizzas).map(key => pizzas[key].items[0])

    const onClickClearCart = () => {
        window.confirm('Вы действительно хотите очистить корзину?') && dispatch(clearCart())
    }

    const onClickRemovePizza = (id) => {
        dispatch(removeCartPizza(id))
    }

    const onMinusPizza = (id) => {
        dispatch(minusPizza(id))
    }

    const onPlusPizza = (id) => {
        dispatch(plusPizza(id))
    }

    return <Cart
        pizzas={pizzas}
        totalCount={totalCount}
        totalPrice={totalPrice}
        groupPizzas={groupPizzas}
        onClickClearCart={onClickClearCart}
        onClickRemovePizza={onClickRemovePizza}
        onMinusPizza={onMinusPizza}
        onPlusPizza={onPlusPizza}
    />
}

export default CartContainer