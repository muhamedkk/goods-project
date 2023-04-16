import _axios from '../axios'
export default({
    state:{
       InfoList:[]
    },
    getters: {
        s: state  => state.InfoList
    },
    mutations:{
        Getstore(state, data) {
            state.InfoList = data;
          },
    },
    actions:{
        Addstore(contex,payload){
            console.log(window.localStorage.token)
            _axios.post('/api/stores',payload, { headers: {
                'Authorization': `token ${window.localStorage.token}`}
              })
            .then(response => {
                response
                contex.dispatch('Getstore')
                document.getElementById('storeResponsText').innerText = 'Add Successfully'
                document.getElementById('storeResponsModelButtom').click()
            })
            .catch(error => {
                console.log('Error')
                console.error(error.response.data);
            });
        },
        Deletestore(contex,id){
            _axios.delete(`/api/stores/${id}/`,{
            headers: {
                'Authorization': `token ${window.localStorage.token}`
            },
          })
       .then(response => {
        response
        console.log('Response')
        contex.dispatch('Getstore')
        document.getElementById('storeResponsText').innerText = 'Delete Successfully'
        document.getElementById('storeResponsModelButtom').click()
       })
        .catch(error => {
           console.error(error);
        });
        },
        EditstoreAction(contex,payload){
            _axios.put(`/api/stores/${payload.id}/`,payload.info,{ headers: {
                'Authorization': `token ${window.localStorage.token}`}})
            .then(response => {
                response
                contex.dispatch('Getstore')
                document.getElementById('storeResponsText').innerText = 'Edit Successfully'
                document.getElementById('storeResponsModelButtom').click()
            })
            .catch(error => {
                console.log('Error')
                console.error(error);
            });
        },
        Getstore({ commit }){ 
            console.log(window.localStorage.token)
            _axios.get('/api/stores', { headers: {
                'Authorization': `token ${window.localStorage.token}`}
              })
            .then(response => {
              console.log(response.data);
              commit('Getstore', response.data);
          })
          .catch(error => {
              console.error(error);
          });}
    },
  })