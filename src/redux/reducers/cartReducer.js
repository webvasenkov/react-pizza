const ADD_PIZZAS = 'cart/ADD_PIZZAS'
const CLEAR_CART = 'cart/CLEAR_CART'
const REMOVE_CART_PIZZA = 'cart/REMOVE_CART_PIZZA'
const PLUS_PIZZA = 'cart/PLUS_PIZZA'
const MINUS_PIZZA = 'cart/MINUS_PIZZA'

const initialState = {
    pizzas: {},
    totalPrice: 0,
    totalCount: 0
}

const summerPrice = arr => arr.reduce((sum, obj) => sum + obj.price, 0)
const getResult = (state, action, newItems) => {
    return ({
        ...state.pizzas, [action.idPizza]: {
            items: newItems,
            totalPrice: summerPrice(newItems)
        }
    })
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIZZAS: {
            const currentItem = state.pizzas[action.pizza.id]
                ? [...state.pizzas[action.pizza.id].items, action.pizza]
                : [action.pizza]

            const newItems = {
                ...state.pizzas,
                [action.pizza.id]: {
                    items: currentItem,
                    totalPrice: summerPrice(currentItem)
                }
            }

            const itemsPizza = Object.values(newItems).map(obj => obj.items)
            const allPizzas = [].concat.apply([], itemsPizza)
            const totalPrice = summerPrice(allPizzas)

            return {
                ...state, pizzas: newItems,
                totalCount: allPizzas.length,
                totalPrice
            }
        }

        case CLEAR_CART:
            return {...state, pizzas: {}, totalPrice: 0, totalCount: 0}
        case REMOVE_CART_PIZZA: {
            const {[action.idPizza]: omit, ...res} = state.pizzas
            const totalPrice = state.totalPrice - state.pizzas[action.idPizza].totalPrice
            const totalCount = state.totalCount - state.pizzas[action.idPizza].items.length
            return {...state, pizzas: res, totalPrice, totalCount}
        }

        case MINUS_PIZZA: {
            const oldItems = state.pizzas[action.idPizza].items
            const newItems = oldItems.length > 1 ?
                oldItems.slice(1) : oldItems
            const result = getResult(state, action, newItems)

            const itemsPizza = Object.values(result).map(obj => obj.items)
            const allPizzas = [].concat.apply([], itemsPizza)
            const totalPrice = summerPrice(allPizzas)
            return {
                ...state, pizzas: result,
                totalPrice,
                totalCount: allPizzas.length
            }
        }

        case PLUS_PIZZA: {
            const oldItems = state.pizzas[action.idPizza].items
            const newItems = [...oldItems, oldItems[0]]
            const result = getResult(state, action, newItems)

            const itemsPizza = Object.values(result).map(obj => obj.items)
            const allPizzas = [].concat.apply([], itemsPizza)
            const totalPrice = summerPrice(allPizzas)

            return {
                ...state, pizzas: result,
                totalPrice,
                totalCount: allPizzas.length
            }
        }
        default:
            return state
    }
}

export const addPizzas = (pizza) => ({type: ADD_PIZZAS, pizza})
export const clearCart = () => ({type: CLEAR_CART})
export const removeCartPizza = (idPizza) => ({type: REMOVE_CART_PIZZA, idPizza})
export const minusPizza = (idPizza) => ({type: MINUS_PIZZA, idPizza})
export const plusPizza = (idPizza) => ({type: PLUS_PIZZA, idPizza})

export default cartReducer