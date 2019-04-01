import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase'
import router from '@/router'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      user: null,
      error: null,
      loading: false,
     notebooks: [
      {
        name: 'Notebook Lenovo Ideapad 320 Intel® Core i5-7200u 8GB',
        price: 2259,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/132381/3/132381386G1.png',
        stars: 4.5,
        totalReviews: 230,
        details: 'The Lenovo V130 14-inch laptop delivers powerful performance in a patterned, textured cover that bespeaks modern style. A simple, clean design features a large, one-piece touchpad and hinges that open 180 degrees—perfect for collaborating. Powerful Intel® technology keeps you working productively, while enhanced security protects your critical data. And at well under 4 pounds, this device goes anywhere you need it to',
      },
      {
        name: 'Notebook Dell Inspiron i15-3567-A30P Intel Core 7ª i5 4GB',
        price: 2284,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/132381/3/132381386G1.png',
        stars: 3.4,
        totalReviews: 20,
        details: 'The Dell V130 14-inch laptop delivers powerful performance in a patterned, textured cover that bespeaks modern style. A simple, clean design features a large, one-piece touchpad and hinges that open 180 degrees—perfect for collaborating. Powerful Intel® technology keeps you working productively, while enhanced security protects your critical data. And at well under 4 pounds, this device goes anywhere you need it to',
      },
      {
        name: 'Notebook Samsung Essentials E21 Intel Celeron Dual Core',
        price: 1490,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/132165/8/132165801G1.jpg',
        stars: 1,
        totalReviews: 1.6,
        details: 'The Samsung V130 14-inch laptop delivers powerful performance in a patterned, textured cover that bespeaks modern style. A simple, clean design features a large, one-piece touchpad and hinges that open 180 degrees—perfect for collaborating. Powerful Intel® technology keeps you working productively, while enhanced security protects your critical data. And at well under 4 pounds, this device goes anywhere you need it to',
      },
      {
        name: 'Notebook Samsung Expert X22 Intel Core 7 i5 8GB',
        price: 2307,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/132260/6/132260681G1.jpg',
        stars: 4.4,
        totalReviews: 340,
        details: 'The Samsung V130 14-inch laptop delivers powerful performance in a patterned, textured cover that bespeaks modern style. A simple, clean design features a large, one-piece touchpad and hinges that open 180 degrees—perfect for collaborating. Powerful Intel® technology keeps you working productively, while enhanced security protects your critical data. And at well under 4 pounds, this device goes anywhere you need it to',

      },
      {
        name: 'Notebook VAIO Fit 15S B1211B Intel Core i5 4GB',
        price: 2599,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/133252/7/133252789G1.jpg',
        stars: 3,
        totalReviews: 30,                
        details: 'The VAIO V130 14-inch laptop delivers powerful performance in a patterned, textured cover that bespeaks modern style. A simple, clean design features a large, one-piece touchpad and hinges that open 180 degrees—perfect for collaborating. Powerful Intel® technology keeps you working productively, while enhanced security protects your critical data. And at well under 4 pounds, this device goes anywhere you need it to',

      },
      {
        name: 'Notebook Dell Alienware - i7 16GB',
        price: 14000,
        image: 'https://images-submarino.b2w.io/produtos/01/00/sku/34470/9/34470934G1.jpg',
        stars: 2,
        totalReviews: 248,
        details: 'The Dell V130 14-inch laptop delivers powerful performance in a patterned, textured cover that bespeaks modern style. A simple, clean design features a large, one-piece touchpad and hinges that open 180 degrees—perfect for collaborating. Powerful Intel® technology keeps you working productively, while enhanced security protects your critical data. And at well under 4 pounds, this device goes anywhere you need it to',     
      },
    ],

    smartphones: [
      {
        name: 'Smartphone Xiaomi Mi A1 dual Android one 7.1',
        price: 1199,
        image: 'https://images-americanas.b2w.io/produtos/01/00/sku/29296/2/29296259G1.jpg',
        stars: 1,
        totalReviews: 0.5,
        details: 'Xiaomi Camera: 12+20 MP Dual rear camera | 20 MP front camera. Display: 15.21 centimetres (5.99-inch) Full HD+ capacitive touchscreen display with 2160x1080 pixels and 403 ppi pixel density | 2.5D Corning Gorilla Glass 5. Memory, Storage & SIM: 4GB RAM | 64GB storage | Dual nano SIM with dual-standby (4G+4G). Operating System and Processor: Android v8.1 Oreo operating system with 2.2GHz Qualcomm snapdragon 660 octa core processor. Battery: 3010 mAH lithium Polymer battery. Warranty: 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase',
      },
      {
        name: 'Smartphone Moto G 5S Dual Chip Android 7.0',
        price: 929,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/132474/0/132474081G1.png',
        stars: 1.5,
        totalReviews: 11,
        details: 'Moto G Camera: 12+20 MP Dual rear camera | 20 MP front camera. Display: 15.21 centimetres (5.99-inch) Full HD+ capacitive touchscreen display with 2160x1080 pixels and 403 ppi pixel density | 2.5D Corning Gorilla Glass 5. Memory, Storage & SIM: 4GB RAM | 64GB storage | Dual nano SIM with dual-standby (4G+4G). Operating System and Processor: Android v8.1 Oreo operating system with 2.2GHz Qualcomm snapdragon 660 octa core processor. Battery: 3010 mAH lithium Polymer battery. Warranty: 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase',

      },
      {
        name: 'iPhone 8 Dourado 64GB Tela 4.7" IOS 11',
        price: 3949,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/132651/7/132651745G1.jpg',
        stars: 1,
        totalReviews: 2,
        details: 'iPhone 8 Camera: 12+20 MP Dual rear camera | 20 MP front camera. Display: 15.21 centimetres (5.99-inch) Full HD+ capacitive touchscreen display with 2160x1080 pixels and 403 ppi pixel density | 2.5D Corning Gorilla Glass 5. Memory, Storage & SIM: 4GB RAM | 64GB storage | Dual nano SIM with dual-standby (4G+4G). Operating System and Processor: Android v8.1 Oreo operating system with 2.2GHz Qualcomm snapdragon 660 octa core processor. Battery: 3010 mAH lithium Polymer battery. Warranty: 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase',

      },
      {
        name: 'Smartphone Samsung Galaxy S7 Edge',
        price: 1943,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/125911/8/125911828G1.png',
        stars: 5,
        totalReviews: 310,
        details: 'Samsung Galaxy S7 Edge Camera: 12+20 MP Dual rear camera | 20 MP front camera. Display: 15.21 centimetres (5.99-inch) Full HD+ capacitive touchscreen display with 2160x1080 pixels and 403 ppi pixel density | 2.5D Corning Gorilla Glass 5. Memory, Storage & SIM: 4GB RAM | 64GB storage | Dual nano SIM with dual-standby (4G+4G). Operating System and Processor: Android v8.1 Oreo operating system with 2.2GHz Qualcomm snapdragon 660 octa core processor. Battery: 3010 mAH lithium Polymer battery. Warranty: 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase', 
      },
      {
        name: 'Smartphone Motorola Moto G6 Plus',
        price: 1699,
        image: 'https://images-americanas.b2w.io/produtos/01/00/item/133453/1/133453185G1.jpg',
        stars: 2.9,
        totalReviews: 42,
        details: ' Motorola Moto G6 Plus Camera: 12+20 MP Dual rear camera | 20 MP front camera. Display: 15.21 centimetres (5.99-inch) Full HD+ capacitive touchscreen display with 2160x1080 pixels and 403 ppi pixel density | 2.5D Corning Gorilla Glass 5. Memory, Storage & SIM: 4GB RAM | 64GB storage | Dual nano SIM with dual-standby (4G+4G). Operating System and Processor: Android v8.1 Oreo operating system with 2.2GHz Qualcomm snapdragon 660 octa core processor. Battery: 3010 mAH lithium Polymer battery. Warranty: 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase',
      },
      {
        name: 'Smartphone Motorola Moto Z3 Play',
        price: 2999,
        image: 'https://images-submarino.b2w.io/produtos/01/00/item/133666/1/133666164G1.jpg',
        stars: 0.5,
        totalReviews: 1,
        details: 'Motorola Moto Z3 Camera: 12+20 MP Dual rear camera | 20 MP front camera. Display: 15.21 centimetres (5.99-inch) Full HD+ capacitive touchscreen display with 2160x1080 pixels and 403 ppi pixel density | 2.5D Corning Gorilla Glass 5. Memory, Storage & SIM: 4GB RAM | 64GB storage | Dual nano SIM with dual-standby (4G+4G). Operating System and Processor: Android v8.1 Oreo operating system with 2.2GHz Qualcomm snapdragon 660 octa core processor. Battery: 3010 mAH lithium Polymer battery. Warranty: 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase',        
      },
    ],
    cartProducts: [],
    currentProduct: {},
    showModal: false,
    showPopupCart: false,
  },

  getters: {
    isAuthenticated (state) {
      return state.user !== null && state.user !== undefined
    },
    getNotebooks: state => state.notebooks,
    getSmartphones: state => state.smartphones,
    getAllProducts: state => state.notebooks.concat(state.smartphones),
    getProductsInCart: state => state.cartProducts,
    getCurrentProduct: state => state.currentProduct,
    getShowModal: state => state.showModal,
    getPopupCart: state => state.showPopupCart,
  },

  mutations: {
      setUser (state, payload) {
      state.user = payload
      },
      setError (state, payload) {
        state.error = payload
      },
      setLoading (state, payload) {
        state.loading = payload
      },
      ADD_PRODUCT: (state, product) => {
        state.cartProducts.push(product);
      },
      REMOVE_PRODUCT: (state, index) => {
        state.cartProducts.splice(index, 1);
      },
      CURRENT_PRODUCT: (state, product) => {
        state.currentProduct = product;
      },
      SHOW_MODAL: (state) => {
        state.showModal = !state.showModal;
      },
      SHOW_POPUP_CART: (state) => {
        state.showPopupCart = !state.showPopupCart;
     },
  },

  actions: {
     userSignUp ({commit}, payload) {
      commit('setLoading', true)
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
      .then(firebaseUser => {
        commit('setUser', {email: firebaseUser.user.email})
        commit('setLoading', false)
        router.push('/smartphones')
      })
      .catch(error => {
        commit('setError', error.message)
        commit('setLoading', false)
      })
    },
    userSignIn ({commit}, payload) {
      commit('setLoading', true)
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
      .then(firebaseUser => {
        commit('setUser', {email: firebaseUser.email})
        commit('setLoading', false)
        commit('setError', null)
        router.push('/smartphones')
      })
      .catch(error => {
        commit('setError', error.message)
        commit('setLoading', false)
      })
    }, 
    autoSignIn ({commit}, payload) {
      commit('setUser', {email: payload.email})
    },
    userSignOut ({commit}) {
      firebase.auth().signOut()
      commit('setUser', null)
      router.push('/')
    },   
    addProduct: (context, product) => {
      context.commit('ADD_PRODUCT', product);
    },
    removeProduct: (context, index) => {
      context.commit('REMOVE_PRODUCT', index);
    },
    currentProduct: (context, product) => {
      context.commit('CURRENT_PRODUCT', product);
    },
    showOrHiddenModal: (context) => {
      context.commit('SHOW_MODAL');
    },
    showOrHiddenPopupCart: (context) => {
      context.commit('SHOW_POPUP_CART');
    },
  },
});
