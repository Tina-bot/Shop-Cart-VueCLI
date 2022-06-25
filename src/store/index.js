import { createStore } from "vuex";

export default createStore({
  state: {
    products: [
      { title: "candy 🍬", price: 10, quantity: 0 },
      { title: "chocolate 🍫", price: 25, quantity: 0 },
      { title: "lollipop 🍭", price: 15, quantity: 0 },
    ],
  },
  getters: {},
  mutations: {
    add(state, index) {
      state.products[index].quantity++;
    },
    delete(state, index) {
      state.products[index].quantity--;
    },
    clear(state) {
      state.products.forEach((item) => (item.quantity = 0));
    },
  },
  actions: {},
  modules: {},
});
