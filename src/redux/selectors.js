export const getPizzas = (pizzas) => {
    return pizzas.pizzas
}

export const getLoading = (pizzas) => {
    return pizzas.isLoading
}

export const getActiveCategory = (filter) => {
    return filter.activeCategory
}

export const getActiveSort = (filter) => {
    return filter.sortBy
}

export const getCartPizzas = (cart) => {
    return cart.pizzas
}

export const getTotalCount = (cart) => {
    return cart.totalCount
}

export const getTotalPrice = (cart) => {
    return cart.totalPrice
}