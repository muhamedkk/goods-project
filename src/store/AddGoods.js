import _axios from '../axios'

export default({
    state:{
       InfoList:[]
    },
    getters: {
        Goods: state  => state.InfoList
    },
    mutations:{
        GetGood(state, data) {
            state.InfoList = data;
          },
    },
    actions:{
        AddGood(contex,payload){
            _axios.post('/api/products',payload, { headers: {
                'Authorization': `token ${window.localStorage.token}`}
              })
            .then(response => {
                response
                contex.dispatch('GetGood')
                document.getElementById('GoodResponsText').innerText = 'Add Successfully'
                document.getElementById('GoodResponsModelButtom').click()
            })
            .catch(error => {
                console.log('Error')
                console.error(error.response.data);
            });
        },
        DeleteGood(contex,id){
            _axios.delete(`/api/products/${id}/`,{
            headers: {
                'Authorization': `token ${window.localStorage.token}`
            },
          })
       .then(response => {
        response
        console.log('Response')
        contex.dispatch('GetGood')
        document.getElementById('GoodResponsText').innerText = 'Delete Successfully'
        document.getElementById('GoodResponsModelButtom').click()
       })
        .catch(error => {
           console.error(error.response.data);
        });
        },
        EditGoodAction(contex,payload){
            _axios.put(`/api/products/${payload.id}/`,payload.info,{ headers: {
                'Authorization': `token ${window.localStorage.token}`}})
            .then(response => {
                response
                contex.dispatch('GetGood')
                document.getElementById('GoodResponsText').innerText = 'Edit Successfully'
                document.getElementById('GoodResponsModelButtom').click()
            })
            .catch(error => {
                console.log('Error')
                console.error(error.response.data);
            });
        },
        GetGood({ commit }){ 
            _axios.get('/api/products', { headers: {
                'Authorization': `token ${window.localStorage.token}`}
              })
            .then(response => {
              commit('GetGood', response.data);
          })
          .catch(error => {
              console.error(error);
          });}
    },
  })