import _axios from '../axios'

export default({
    state:{
        DInfoList:[]
    },
    getters: {
        Dri: state  => state.DInfoList
    },
    mutations:{
        AddDriver(state,DriverInfo){
            state.DInfoList.push({
            'EName':DriverInfo.DriverNameA,
            'AName':DriverInfo.DriverNameE,
            'phone':DriverInfo.DriverPhone})
        },
        Get(state, data) {
            state.DInfoList = data;
          },
    },
    actions:{
            AddDriverAction(contex,payload){
            console.log(payload)
            _axios.post('/api/driver',payload, { headers: {
                'Authorization': `token ${window.localStorage.token}`}
              })
            .then(response => {
                response
                contex.dispatch('GetDrivers')
                document.getElementById('DriverResponsText').innerText = 'ADD Successfully'
                document.getElementById('DriverResponsModelButtom').click()
            })
            .catch(error => {
                console.log('Error')
                console.error(error.response.data);
            });
            },
            EditDriverAction(contex,payload){
                _axios.put(`/api/driver/${payload.id}/`,payload.info, { headers: {
                'Authorization': `token ${window.localStorage.token}`}
              })
            .then(response => {
                response
                contex.dispatch('GetDrivers')
                document.getElementById('DriverResponsText').innerText = 'Edit Successfully'
                document.getElementById('DriverResponsModelButtom').click()
            })
            .catch(error => {
                console.log('Error')
                console.error(error.response.data);
            });
            },
            DeleteDriver(contex,id){
                _axios.delete(`/api/driver/${id}/`, { headers: {
                    'Authorization': `token ${window.localStorage.token}`}
                  },{
                headers: {
                    'Content-Type': 'application/json'
                },
              })
           .then(response => {
            response
            console.log('Response')
            contex.dispatch('GetDrivers')
            document.getElementById('DriverResponsText').innerText = 'DELETE Successfully'
            document.getElementById('DriverResponsModelButtom').click()
           })
            .catch(error => {
               console.error(error.response.data);
            });
            },
            GetDrivers({ commit }){ 
                _axios.get('/api/driver', { headers: {
                'Authorization': `token ${window.localStorage.token}`}
              })
              .then(response => {
                console.log(response.data);
                commit('Get', response.data);
                // commit('Geta');
            })
            .catch(error => {
                console.error(error);
            });
        },

    },
  })