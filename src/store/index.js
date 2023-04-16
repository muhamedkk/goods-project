import { createStore } from 'vuex'



const  state ={ count:0}
const  mutations ={ 
  plusCount(state,payload){
    // state.count += ((payload.val1  ? payload.val1 != 0 : 0) + payload.val2)
    state.count += ((payload.val1 >0  ?  payload.val1 : 0) + (payload.val2 > 0  ?  payload.val2 : 0) )
  },
  CheckToken(state){
    state
    if ( !window.localStorage.token){
      this.$router.push({name:'Login'})
    }
  }
}
const  actions ={
  plusCount({commit},v){
    commit('plusCount',v)
  }
}
import OrderContaner from './OrderContaner'
import AddGoods from './AddGoods'
import AddDrivers from './AddDrivers'
import AddStores from './AddStores'
import login from './login'
export default createStore({
  state,
  getters: {},
  mutations,
  actions,
  modules: {
    OrderContaner,
    AddGoods,
    AddStores,
    AddDrivers,
    login,
  }
})
