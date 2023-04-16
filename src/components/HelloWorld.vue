<template>
  <div class="">
    <h1>{{ msg }}</h1>
    <h1>{{name}}</h1>
    <br>
    <h1>count = {{this.$store.state.count}}</h1>
    <input type="number" v-model="num1">
    <input type="number" v-model="num2">
    <button @click="plusCount({val1:num1,val2:num2}) ;secondFunction();">+</button>

  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data(){
    return{
      name:this.$store.state.myname,
      num1:Number,
      num2:Number,
    }
  },
  methods:{
    ...mapActions(['plusCount']),
    secondFunction(){
      this.num1=Number
      this.num2=Number
    }
  },
  computed:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
