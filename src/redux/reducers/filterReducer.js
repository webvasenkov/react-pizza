const SET_CATEGORY = 'filter/SET_CATEGORY'
const SET_SORT_BY = 'filter/SET_SORT_BY'

const initialState = {
    activeCategory: null,
    sortBy: {
        sort: 'popular',
        order: 'desc'
    }
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return {...state, activeCategory: action.category}
        case SET_SORT_BY:
            debugger
            return {...state, sortBy: {...state.sortBy, sort: action.sort}}
        default:
            return state
    }
}

export const setCategory = (category) => ({type: SET_CATEGORY, category})
export const setSortBy = (sort) => ({type: SET_SORT_BY, sort})

export default filterReducer

