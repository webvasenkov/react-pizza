import {PizzasApi} from "../api";

const GET_PIZZAS = 'pizzas/GET_PIZZAS'
const SET_IS_LOADING = 'pizzas/SET_IS_LOADING'

const initialState = {
    pizzas: [],
    isLoading: true
}

const pizzasReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PIZZAS:
            return {...state, pizzas: [...action.pizzas]}
        case SET_IS_LOADING:
            return {...state, isLoading: action.loading}
        default:
            return state
    }
}

const getPizzas = (pizzas) => ({type: GET_PIZZAS, pizzas})
const setIsLoading = (loading) => ({type: SET_IS_LOADING, loading})

export const setPizzas = (category, sort) => async (dispatch) => {
    dispatch(setIsLoading(true))
    const response = await PizzasApi.getPizzas(category, sort)
    const pizzas = response.data
    dispatch(getPizzas(pizzas))
    dispatch(setIsLoading(false))
}

export default pizzasReducer

