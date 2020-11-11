const SET_CATEGORY = 'filter/SET_CATEGORY'
const SET_SORT_BY = 'filter/SET_SORT_BY'

const initialState = {
    category: 0,
    sortBy: 'popular'
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return {...state, category: action.category}
        case SET_SORT_BY:
            return {...state, sortBy: action.sortBy}
        default:
            return state
    }
}

export default filterReducer