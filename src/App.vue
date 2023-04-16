<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/index">index</router-link>
  </nav> -->
  <div class="index">
    <div id="blur"></div>
    <Header v-if="$route.fullPath !== '/AddPage'"></Header>
    <header-h v-if="$route.fullPath === '/AddPage'"></header-h>
    <div class="d-flex NavContent">
      <nav-bar></nav-bar>
      <!-- <div id="xBackground"></div> -->
      <router-view/>
    </div>

  </div>
</template>

<script>
  
  import Header from '@/components/Header.vue'
  import HeaderH from '@/components/HeaderH.vue'
  import NavBar from '@/components/NavBar.vue'
  
  export default {
    name: 'APP',
    components: {
      Header,
      HeaderH,
      NavBar
    },
    mounted() {
      if ( !window.localStorage.token){
      this.$router.push({name:'Login'})
    }
  },
  created: function() {
  // const socket = new WebSocket('wss://192.168.0.103:8080/ws');
  // console.log(socket)
  }
  }
</script>

<style>
#blur{
  position: absolute !important;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 63, 94, 0.11);
  z-index: 20;
  display: none;
}
.index{
  background-color:#EEEEEE ;
  position: relative;
}
#xBackground{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgba(0, 63, 94, 0.11);
}
  @media only screen and (max-width: 992px){
    
    .NavContent{
      flex-direction: column-reverse;
      position: relative;
    }

  }
</style>
