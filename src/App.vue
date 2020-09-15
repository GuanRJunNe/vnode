<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
    <button @click="guan">关瑞军</button>
    <button @click='rui'>关冰冰</button>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  methods:{
    guan(){
      // var url="http://localhost:3000"
      // axios.get(url+'/product')
      // .then(res=>{
      //   console.log(res);
      // })
      // .catch(error=>{
      //   console.log(error); 
      // })
    },
    rui(){
      var url = 'http://localhost:3000'
      axios.post(url+'/order',{name:'guanguan',age:12})
      .then(res=>{
        console.log(res);
      })
      .catch(error=>{
        console.log(error);
      })
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
