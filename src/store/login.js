import _axios from '../axios'
export default({
    state:{},
    getters: {},
    mutations:{
        login(state,UserInfo){
            console.log(UserInfo)
        },
    },
    actions:{
        login({ commit },payload){
            _axios.post('/api/login/',payload)
            .then(response => {
                console.log(response.data.token)
                window.localStorage['token'] = response.data.token
            })
            .catch(error => {
                console.log('Error')
                console.error(error.response.data);
            });
            commit('login',payload)
        }
    },
  })