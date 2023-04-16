<template>

    <div class="goodsDetails" style="">
        <div class="headerListPage">
            <div>
                <h2 class="pageLabel m-0">STORES DETAILS</h2>
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
                <div class="col-3 text-center"><p style="color:white !important" class="m-0 TIG">Store Name / English</p></div>
                <div class="col-3 text-center"><p style="color:white !important" class="m-0 TIG">Store Name / Arabic</p></div>
                <div class="col-3 text-center"><p style="color:white !important" class="m-0 TIG">Email Address</p></div>
                <div class="col-3"><p></p></div>
            </div>
            
            <div  v-for="(store,i) in s" :key="i" class="GinfoDiv row align-items-center" >
                <div class="col-3 text-center"><p class="m-0 TIG">{{store.name_en}}</p></div>
                <div class="col-3 text-center"><p class="m-0 TIG">{{ store.name_ar }}</p></div>
                <div class="col-3 text-center"><p class="m-0 TIG">{{ store.email }}</p></div>
                <div class="col-3 d-flex gap-3 justify-content-center">
                    <img class='editIcon' style="width:50px;cursor: pointer;" @click="EditStoreBtn({'name_en':store.name_en,'name_ar':store.name_ar,'email':store.email,'id':store.id})" src="../assets/edit.png" alt="">
                    <img class='editIcon' style="width:50px;cursor: pointer;" @click="DeleteStore(store.id)" src="../assets/delete.png" alt="">
                    
                </div>
            </div>
        </div>

        <button @click="AddStoreBtn()" hidden id="addStoresModalBtn" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#StoresModalBtn">
        </button>
        <form   @submit.prevent="this.requestType ==='ADD' ?AddStore(this.StoreInformation):EditStore({'id':this.id,'info':this.StoreInformation})">
        <div class="modal fade" id="StoresModalBtn" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" style="height:529px !important;max-width:846px !important;">
            <div class="modal-content" style=" ">
              <div class="modal-body d-flex flex-column" >
                <div class="closeModel" data-bs-dismiss="modal" aria-label="Close">
                    <img src="../assets/close.png" class="w-50 h-50" alt="">
                </div>
                  <h3 style="margin-top:16px">NEW STORES</h3>
                  <p style="margin-top:24px">Select Report type to generate new report</p>

                    <div  data-status="unOpen" class="textInputDiv textInputDivBorder mt-3"  @click.self="customInput($event)" >
                        <div class="d-flex align-items-center" style="width:40%">
                            <i class="fa-solid fa-shop inputIcon"></i>
                            <p style="width:auto;white-space: nowrap;" class="m-0">Stores name (English)</p>
                        </div>
                        <input  v-model="StoreInformation.name_ar" class="customInput" type="text">
                        <h5 id="" style="margin-left: 30px !important;white-space: nowrap;width:5%" class="m-0 inputTextValue">{{this.StoreInformation.name_ar}}</h5>
                    </div>

                    <div  data-status="unOpen" class="textInputDiv textInputDivBorder mt-3"  @click.self="customInput($event)" >
                        <div class="d-flex align-items-center" style="width:40%">
                            <i class="fa-solid fa-shop inputIcon"></i>
                            <p style="width:auto;white-space: nowrap;" class="m-0">Stores name (Arabic)</p>
                        </div>
                        <input  v-model="StoreInformation.name_en" class="customInput" type="text">
                        <h5 id="" style="margin-left: 30px !important;white-space: nowrap;width:5%" class="m-0 inputTextValue">{{this.StoreInformation.name_en}}</h5>
                    </div>
                    <div  data-status="unOpen" class="textInputDiv textInputDivBorder  mt-3"  @click.self="customInput($event)" >
                        <div class="d-flex align-items-center" style="width:40%">
                            <i class="fa-solid fa-at inputIcon"></i>
                            <p style="width:auto;white-space: nowrap;" class="m-0">Email Address</p>
                        </div>
                        <input  v-model="StoreInformation.email" class="customInput" type="text">
                        <h5 id="" style="margin-left: 30px !important;white-space: nowrap;width:5%" class="m-0 inputTextValue ">{{this.StoreInformation.email}}</h5>
                    </div>
                    </div>
                    <div style="background: #FFFFFF; box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);border-radius: 15px 15px 0px 0px;height:104px;display: flex;justify-content: center;align-items: center;">
                        <button type="submit" class="btn prymaryBtn w-75" style="color:white;height:50px;width:350px !important" >ADD STORE</button>
                    </div>
            </div>
          </div>
        </div>
    </form>
    <button hidden id="storeResponsModelButtom" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#StoreResponsModel">
    </button>
    <div class="modal fade" id="StoreResponsModel" tabindex="-1" aria-labelledby="storeResponsTextLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body d-flex flex-column">
              <img src="../assets/bigCheck.png" alt="">
              <h3 id="storeResponsText" style="margin-top:16px"></h3>
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
            StoreInformation:{
                name_ar:'',
                name_en:'',
                email:''
            },
            id:'',
        }
    },
    methods:{
        customInput(el){
                functions.customInputa(el)
            },
    Sucond_Btn(){
        const Button = document.getElementById('Sucond_Btn')
        Button.style.display='none';
    },
    First_Btn(){
        const First_Btn = document.getElementById('First_Btn')
        First_Btn.querySelector('p').innerText='NEW STORES'
        First_Btn.addEventListener('click',function() {document.getElementById('addStoresModalBtn').click();})
    },
    AddStore(info){
        this.$store.dispatch('Addstore', info)
    },
    AddStoreBtn(){
        this.requestType = 'ADD'
        this.StoreInformation.name_en =''
        this.StoreInformation.name_ar = ''
        this.StoreInformation.email = ''
    },
    EditStoreBtn(info){
        console.log(info)
        document.getElementById('addStoresModalBtn').click()
        this.StoreInformation.name_en = info.name_en
        this.StoreInformation.name_ar =  info.name_ar
        this.StoreInformation.email =  info.email
        this.id = info.id
        this.requestType = 'EDIT'
    },
    EditStore(info){
        console.log(info)
        this.$store.dispatch('EditstoreAction', info)
    },
    async DeleteStore(id){
        this.$store.dispatch('Deletestore',id)
    },
    },
    computed:{
        ...mapGetters(['s'])
    },
    created(){
        this.Sucond_Btn()
        this.First_Btn()
    },
    mounted() {
    if ( !window.localStorage.token){
    this.$router.push({name:'Login'})
    }
    const store = this.$store.dispatch('Getstore')
    console.log(store)
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