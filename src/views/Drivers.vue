<template>

    <div class="goodsDetails" style="">
        <div class="headerListPage">
            <div>
                <h2 class="pageLabel m-0">DREVERS DETAILS</h2>
            </div>
            <div class="d-flex headerListPageBtns">
                <button class="prymaryBtn" style="margin-right: 10px;">All</button>
                <button class="secondBtn" style="margin-right: 10px;">cat1</button>
                <button class="secondBtn" style="margin-right: 10px;">cat2</button>
                <button class="secondBtn" style="margin-right: 10px;">cat3</button>
                <button class="secondBtn" style="margin-right: 10px;">cat4</button>
                <button class="secondBtn" style="margin-right: 10px;">cat5</button>
                <button class="secondBtn" style="margin-right: 10px;">cat6</button>
            </div>
        </div>
        <div class="mt-5">
            <div class="GinfoDiv row align-items-center" style="background-color:#003F5E !important;">
                <div class="col-2 text-center"><p style="color:white !important" class="m-0 TIG">Driver Name / English</p></div>
                <div class="col-2 text-center"><p style="color:white !important" class="m-0 TIG">Driver Name / Arabic</p></div>
                <div class="col-2 text-center"><p style="color:white !important" class="m-0 TIG">phone Number</p></div>
                <div class="col-2 text-center"><p style="color:white !important" class="m-0 TIG">id no</p></div>
                <div class="col-4"><p></p></div>
            </div>
            <div v-for="(driver,i) in Dri" :key="i"  class="GinfoDiv row align-items-center" >
                <div class="col-2 text-center"><p class="m-0 TIG">{{driver.name}}</p></div>
                <div class="col-2 text-center"><p class="m-0 TIG">{{driver.name_en}}</p></div>
                <div class="col-2 text-center"><p class="m-0 TIG">{{driver.phone_number}}</p></div>
                <div class="col-2 text-center"><p class="m-0 TIG">{{driver.id_no}}</p></div>
                <div class="col-4 d-flex gap-3 justify-content-center">
                    <img class='editIcon' style="width:50px;cursor: pointer;" @click="EditDriverBtn({'name':driver.name,'name_en':driver.name_en,'phone_number':driver.phone_number,'id_no':driver.id_no,'id':driver.id})" src="../assets/edit.png" alt="">
                    <img class='editIcon' style="width:50px;cursor: pointer;" @click="Delete(driver.id)" src="../assets/delete.png" alt="">

                </div>
            </div>
        </div>

        <button @click="AddDriverBtn()" hidden id="addDriversModalBtn" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#DriversModalBtn">
        </button>
        <form  @submit.prevent="this.requestType ==='ADD' ?AddDriver(this.DriverInformation):EditDriver({'id':this.id,'info':this.DriverInformation})">
        <!-- <form  @submit.prevent="AddDriver(this.DriverInformation)"> -->
            <div class="modal fade" id="DriversModalBtn" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" style="height:464px !important;max-width:846px !important;">
                <div class="modal-content" style=" ">
                <div class="modal-body d-flex flex-column" >
                    <div class="closeModel" data-bs-dismiss="modal" aria-label="Close">
                        <img src="../assets/close.png" class="w-50 h-50" alt="">
                    </div>
                    <h3 style="margin-top:16px">NEW DREVER</h3>
                    <p style="margin-top:24px">Select Report type to generate new report</p>
                        <div  data-status="unOpen" class="textInputDiv textInputDivBorder mt-3"  @click.self="customInput($event)" >
                            <div class="d-flex align-items-center" style="width:40%">
                                <i class="fa-solid fa-user inputIcon"></i>
                                <p style="width:auto;white-space: nowrap;" class="m-0">Drive name (English)</p>
                            </div>
                            <input  v-model="DriverInformation.name" class="customInput" type="text">
                            <h5 id="" style="margin-left: 30px !important;white-space: nowrap;width:5%" class="m-0 inputTextValue">{{this.DriverInformation.name}}</h5>
                        </div>
                        <div  data-status="unOpen" class="textInputDiv textInputDivBorder mt-3"  @click.self="customInput($event)" >
                            <div class="d-flex align-items-center" style="width:40%">
                                <i class="fa-solid fa-user inputIcon"></i>
                                <p style="width:auto;white-space: nowrap;" class="m-0">Drive name (Arabic)</p>
                            </div>
                            <input  v-model="DriverInformation.name_en" class="customInput" type="text">
                            <h5 id="" style="margin-left: 30px !important;white-space: nowrap;width:5%" class="m-0 inputTextValue">{{this.DriverInformation.name_en}}</h5>
                        </div>
                        <div  data-status="unOpen" class="textInputDiv textInputDivBorder  mt-3"  @click.self="customInput($event)" >
                            <div class="d-flex align-items-center" style="width:40%">
                                <i class="fa-solid fa-phone inputIcon"></i>
                                <p style="width:auto;white-space: nowrap;" class="m-0">phone Number</p>
                            </div>
                            <input  v-model="DriverInformation.phone_number" class="customInput" type="text">
                            <h5 id="" style="margin-left: 30px !important;white-space: nowrap;width:5%" class="m-0 inputTextValue ">{{this.DriverInformation.phone_number}}</h5>
                        </div>
                        <div  data-status="unOpen" class="textInputDiv textInputDivBorder  mt-3"  @click.self="customInput($event)" >
                            <div class="d-flex align-items-center" style="width:40%">
                                <i class="fa-solid fa-phone inputIcon"></i>
                                <p style="width:auto;white-space: nowrap;" class="m-0">id no</p>
                            </div>
                            <input  v-model="DriverInformation.id_no" class="customInput" type="text">
                            <h5 id="" style="margin-left: 30px !important;white-space: nowrap;width:5%" class="m-0 inputTextValue ">{{this.DriverInformation.id_no}}</h5>
                        </div>
                        </div>
                        <div style="background: #FFFFFF; box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);border-radius: 15px 15px 0px 0px;height:104px;display: flex;justify-content: center; align-items: center;">
                            <button type='submit' class="btn prymaryBtn w-75" style="color:white;height:50px;width:350px !important" >ADD DRIVER</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>

        <button hidden id="DriverResponsModelButtom" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#DriverResponsModel">
        </button>
        <div class="modal fade" id="DriverResponsModel" tabindex="-1" aria-labelledby="DriverResponsModelLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body d-flex flex-column">
                  <img src="../assets/bigCheck.png" alt="">
                  <h3 id="DriverResponsText" style="margin-top:16px"></h3>
                  <!-- <p style="margin-top:24px">We send notifnotification to selected clearance
                      agent “Ali Yassen”</p> -->
                      <button class="btn prymaryBtn w-75 " style="color:white;height:50px;margin-top:25px" data-bs-dismiss="modal" aria-label="Close" >Done</button>
                      <!-- <button class="btn  w-75" style="color:#6AAA69;background-color:#FFFFFF;border-radius:15px;height:50px;margin-top:15px" >Call Clearance Agent</button> -->
              </div>
            </div>
          </div>
        </div>
    </div>

    
</template>

<script>

import Header from '@/components/Custom_Input.vue'
/* eslint-disable */  import functions from  "../assets/js/js.js";
import { mapActions,mapGetters  } from 'vuex';
export default {
name: 'Drivers',
components: {
    Header,
}, 
    data(){
        return{
            DriverInformation:{
                name:'',
                name_en:'',
                phone_number:'',
                id_no:'',
            },
            requestType:'',
            id:'',
        }
    },
    methods:{
    async Delete(id){
        this.$store.dispatch('DeleteDriver',id)
    },
    customInput(el){
            functions.customInputa(el)
        },
    Sucond_Btn(){
        const Button = document.getElementById('Sucond_Btn')
        Button.style.display='none';
    },
    First_Btn(){
        const First_Btn = document.getElementById('First_Btn')
        First_Btn.querySelector('p').innerText='NEW DRIVER'
        First_Btn.addEventListener('click',function() {document.getElementById('addDriversModalBtn').click();})
    },
    AddDriverBtn(){
        this.requestType = 'ADD'
        this.DriverInformation.name =''
        this.DriverInformation.name_en = ''
        this.DriverInformation.phone_number =''
        this.DriverInformation.id_no =''
    },

    AddDriver(info){
        console.log(info)
        this.$store.dispatch('AddDriverAction', info)
    },
    EditDriverBtn(info){
        document.getElementById('addDriversModalBtn').click()
        this.DriverInformation.name = info.name
        this.DriverInformation.name_en = info.name_en
        this.DriverInformation.phone_number = info.phone_number
        this.DriverInformation.id_no = info.id_no
        this.id = info.id
        this.requestType = 'EDIT'
    },
    EditDriver(info){
        console.log(info)
        this.$store.dispatch('EditDriverAction', info)
    },
    },
    
    computed:{
        ...mapGetters(['Dri']),

    },
    created(){
        this.Sucond_Btn()
        this.First_Btn()
    },
    mounted() {
    if ( !window.localStorage.token){
      this.$router.push({name:'Login'})
    }
    const Dri = this.$store.dispatch('GetDrivers')
  }
  
}
</script>

<style scoped>

</style>>

<style>
.textInputDivBorder{
    border: solid 1px #6F95B5;
}
.goodsDetails{
width: 76.5%;
margin: 0;
border-left: 4px dashed #B0B0B0;
padding: 51px;
min-height: calc(100vh - 117px);
}
.GinfoDiv{
    border-radius: 15px;
    height: 68px;
    margin-top: 4px !important;
    background-color:#ffffff
}
.GinfoDiv div p{
    font-family: 'Poppins';
    font-style: normal;
    font-size: 14px;
    font-weight: bold;
    line-height: 21px;
    color: black;

}
@media only screen and (max-width: 992px){
    .goodsDetails{
        width: 100%;
        }
}
</style>