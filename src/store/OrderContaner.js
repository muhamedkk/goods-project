import _axios from '../axios'
export default({
    state:{
       InfoList:[]
    },
    getters: {
        Orders: state  => state.InfoList
    },
    mutations:{
        Orders(state, data) {
            state.InfoList = data;
          },
    },
    actions:{
        GetOrders({ commit }){ 
            _axios.get('/api/containers', { headers: {
                'Authorization': `token ${window.localStorage.token}`}
              })
            .then(response => {
              commit('Orders', response.data);
          })
          .catch(error => {
              console.error(error);
          });},
          AddOrder(contex,payload){
            _axios.post('/api/containers',payload, { headers: {
                'Authorization': `token ${window.localStorage.token}`}
              })
            .then(response => {
                response
                contex.dispatch('GetOrders')
                // document.getElementById('storeResponsText').innerText = 'Delete Successfully'
                document.getElementById('modalBtn').click()
            })
            .catch(error => {
                console.log('Error')
                console.error(error.response.data);
            });
        },
    },
  })