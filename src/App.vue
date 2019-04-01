<template>
  <div class="container">
      <mainMenu> 
        <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-xs-only">
            <v-btn
              flat
              v-for="item in menuItems"
              :key="item.title"
              :to="item.path">
              <v-icon left dark>{{ item.icon }}</v-icon>
              {{ item.title }}
            </v-btn>
            <v-btn flat @click="userSignOut" v-if="isAuthenticated">
              <v-icon left>exit_to_app</v-icon>
              Sign Out
            </v-btn>
         </v-toolbar-items>
          <btn btnColor="btn btn-small btn-info btn-popup"
             :cartIcon="true"
             @click.native="showPopupCart()">
             Cart
            <span class="btn-circle" v-if="hasProduct()">
               {{ getProductsInCart.length }}
            </span>
          </btn>
        <transition name="appear">
          <popupcart class="cart" v-if="getPopupCart"/>
        </transition>
   </mainMenu>
      <transition name="leave">
        <router-view></router-view>
      </transition>
      <maskBg v-if="getPopupCart" @click.native="showPopupCart()"/> 
      
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import mainMenu from './components/Menu';
import btn from './components/Btn';
import popupcart from './components/Popupcart';
import maskBg from './components/Mask';
export default {
   data () {
      return {
          sidebar: true,
          icons: [
            'fa fa-facebook-square',
            'fa fa-twitter-square',
            'fa fa-google-plus-square',
            'fa fa-linkedin-square',
            'fa fa-instagram-square'
        ]
      }
    },
  components: {
    mainMenu,
    btn,
    popupcart,
    maskBg,
    
  },
  methods: {
    userSignOut () {
        this.$store.dispatch('userSignOut')
      },
    ...mapActions([
      'showOrHiddenPopupCart',
    ]),
    hasProduct() {
      return this.getProductsInCart.length > 0;
    },
    showPopupCart() {
      this.showOrHiddenPopupCart();
    },
  },
  computed: {
      isAuthenticated () {
        return this.$store.getters.isAuthenticated
      },
        menuItems () {
          if (this.isAuthenticated) {
          } else {
            return [
              { title: 'Sign Up', path: '/signup', icon: 'face' },
              { title: 'Sign In', path: '/signin', icon: 'lock_open' }
            ]
          }
        },
      ...mapGetters([
        'getProductsInCart',
        'getPopupCart',
      ]),
  },
};
</script>

<style>

  @import './assets/css/normalize.css';
  @import url('https://fonts.googleapis.com/css?family=Roboto');
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #FAFAFA;
  }
  a {
    color: #000;
    text-decoration: none;
  }
  .v-btn__content {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: inherit;
    color: inherit;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    color: white;
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 0 auto;
    position: relative;
    -webkit-transition: .3s cubic-bezier(.25,.8,.5,1);
    transition: .3s cubic-bezier(.25,.8,.5,1);
    white-space: nowrap;
    width: inherit;
  }
  .container {
    width: 100%;
  }
  .indigo.lighten-1 {
      background-color: #101b5c!important;
      border-color: #5c6bc0!important;
  }
  .cart {
    position: absolute;
    top: 75px;
    right: 300px;
  }
  .btn-circle {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: #fff;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .leave-enter-active, .leave-leave-active {
    transition: all 1.2s;
  }
  .leave-enter, .leave-leave-to {
    opacity: 0;
    transform: translateX(-50%);
  }
  .appear-enter-active {
    animation: appear-animation .5s;
  }
  .appear-leave-active {
    animation: appear-animation .5s reverse;
  }
  @keyframes appear-animation {
    0% {
      transform: translateY(-50%);
      opacity: 0;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
</style>