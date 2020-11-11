import {PizzasApi} from "../../back/api";

const GET_PIZZAS = 'manin/GET_PIZZAS'

const initialState = {
    pizzas: []
}

const pizzasReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PIZZAS:
            return {...state, pizzas: [...action.pizzas]}
        default:
            return state
    }
}

const getPizzas = (pizzas) => ({type: GET_PIZZAS, pizzas})

export const setPizzas = () => async (dispatch) => {
    const response = await PizzasApi.getPizzas()
    dispatch(getPizzas(response.data.pizzas))
}

export default pizzasReducer

