const axios = require("axios");

const instance = axios.create({
        baseURL: '/'
    }
)

export const PizzasApi = {
    async getPizzas(category, {sort, order}) {
        return instance.get(`${category !== null ? `pizzas?category=${category}&_sort=${sort}&_order=${order}` : `pizzas?_sort=${sort}&_order=${order}`}`)
    }
}