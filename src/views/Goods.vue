<template>

    <div class="goodsDetails" style="">
        <div class="headerListPage">
            <div>
                <h2 class="pageLabel m-0">GOODS DETAILS</h2>
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
                <div class="col-2 text-center"><p style="color:white !important" class="m-0 TIG">Goods Name / English</p></div>
                <div class="col-2 text-center"><p style="color:white !important" class="m-0 TIG">Goods Name / Arabic</p></div>
                <div class="col-2 text-center"><p style="color:white !important" class="m-0 TIG">Goods Code</p></div>
                <div class="col-2 text-center"><p style="color:white !important" class="m-0 TIG">Goods quantity</p></div>
                <div class="col-4"><p></p></div>
            </div>
            <div v-for="(good,i) in Goods" :key="i" class="GinfoDiv row align-items-center"  >
                <div class="col-2 text-center"><p class="m-0 TIG">{{good.name_en}}</p></div>
                <div class="col-2 text-center"><p class="m-0 TIG">{{good.name_ar}}</p></div>
                <div class="col-2 text-center"><p class="m-0 TIG">{{good.product_sku}}</p></div>
                <div class="col-2 text-center"><p class="m-0 TIG">{{good.quantity}}</p></div>
                <div class="col-4 d-flex gap-3 justify-content-center">
                    <img class='editIcon' style="width:50px;cursor: pointer;" @click="EditGoodBtn({'name_en':good.name_en,'name_ar':good.name_ar,'product_sku':good.product_sku,'quantity':good.quantity,'id':good.id})" src="../assets/edit.png" alt="">
                    <img class='editIcon' style="width:50px;cursor: pointer;" @click="DeleteGood(good.id)" src="../assets/delete.png" alt="">
                </div>
            </div>
        </div>
        <button @click="AddGoodBtn()" hidden id="addGoodsModalBtn" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#GoodsModalBtn">
        </button>
        <form  @submit.prevent="this.requestType ==='ADD' ?AddGood(this.GoodInformation):EditGood({'id':this.id,'info':this.GoodInformation})">
        <div class="modal fade" id="GoodsModalBtn" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" style="height:529px !important;max-width:846px !important;">
                <div class="modal-content" style=" ">
                <div class="modal-body d-flex flex-column" >
                    <div class="closeModel" data-bs-dismiss="modal" aria-label="Close">
                        <img src="../assets/close.png" class="w-50 h-50" alt="">
                    </div>
                    <h3 style="margin-top:16px">NEW GOODS</h3>
                    <p style="margin-top:24px">Select Report type to generate new report</p>
                        <div class="d-flex headerListPageBtns" style="margin-bottom:10px;width: 75%;    justify-content: center;">
                            <button class="secondBtn secondBtnActive" style="margin-right: 10px;">cat1</button>
                            <button class="secondBtn" style="margin-right: 10px;">cat2</button>
                            <button class="secondBtn" style="margin-right: 10px;">cat3</button>
                            <button class="secondBtn" style="margin-right: 10px;">cat4</button>
                        </div>
                            <div  data-status="unOpen" class="textInputDiv textInputDivBorder mt-3"  @click.self="customInput($event)" >
                                <div class="d-flex align-items-center" style="width:40%">
                                    <i class="fa-solid fa-tags inputIcon"></i>
                                    <p style="width:auto;white-space: nowrap;" class="m-0">Goods name (English)</p>
                                </div>
                                <input  v-model="GoodInformation.name_en" class="customInput" type="text">
                                <h5 id="" style="margin-left: 30px !important;white-space: nowrap;width:5%" class="m-0 inputTextValue">{{this.GoodInformation.name_en}}</h5>
                            </div>
                            <div  data-status="unOpen" class="textInputDiv textInputDivBorder mt-3"  @click.self="customInput($event)" >
                                <div class="d-flex align-items-center" style="width:40%">
                                    <i class="fa-solid fa-tags inputIcon"></i>
                                    <p style="width:auto;white-space: nowrap;" class="m-0">Goods name (Arabic)</p>
                                </div>
                                <input  v-model="GoodInformation.name_ar" class="customInput" type="text">
                                <h5 id="" style="margin-left: 30px !important;white-space: nowrap;width:5%" class="m-0 inputTextValue">{{this.GoodInformation.name_ar}}</h5>
                            </div>
                            <div  data-status="unOpen" class="textInputDiv textInputDivBorder  mt-3"  @click.self="customInput($event)" >
                                <div class="d-flex align-items-center" style="width:40%">
                                    <i class="fa-solid fa-barcode inputIcon"></i>
                                    <p style="width:auto;white-space: nowrap;" class="m-0">Goods Code</p>
                                </div>
                                <input  v-model="GoodInformation.product_sku" class="customInput" type="text">
                                <h5 id="" style="margin-left: 30px !important;white-space: nowrap;width:5%" class="m-0 inputTextValue ">{{this.GoodInformation.product_sku}}</h5>
                            </div>
                            <div  data-status="unOpen" class="textInputDiv textInputDivBorder  mt-3"  @click.self="customInput($event)" >
                                <div class="d-flex align-items-center" style="width:40%">
                                    <i class="fa-solid fa-barcode inputIcon"></i>
                                    <p style="width:auto;white-space: nowrap;" class="m-0">Goods Quantity</p>
                                </div>
                                <input  v-model="GoodInformation.quantity" class="customInput" type="text">
                                <h5 id="" style="margin-left: 30px !important;white-space: nowrap;width:5%" class="m-0 inputTextValue ">{{this.GoodInformation.quantity}}</h5>
                            </div>
                            </div>
                            <div style="background: #FFFFFF;box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);border-radius: 15px 15px 0px 0px;height:104px;display: flex;justify-content: center;align-items: center;">
                                <button type="submit" class="btn prymaryBtn w-75" style="color:white;height:50px;width:350px !important" >Add Goods</button>
                            </div>   
                    </div>
                </div>
            </div>
        </form>        
        
        <button hidden id="GoodResponsModelButtom" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#GoodResponsModel">
        </button>
        <div class="modal fade" id="GoodResponsModel" tabindex="-1" aria-labelledby="GoodResponsModelLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body d-flex flex-column">
                  <img src="../assets/bigCheck.png" alt="">
                  <h3 id="GoodResponsText" style="margin-top:16px"></h3>
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
name: 'goodsDetails',
components: {
    Header,
}, 
    data(){
        return{
            GoodInformation:{
                name_en:'',
                name_ar:'',
                product_sku:'',
                quantity:'',
            },
            requestType:'',
            id:'',
        }
    },
    methods:{
    async DeleteGood(id){
        this.$store.dispatch('DeleteGood',id)
    },
    customInput(el){
                functions.customInputa(el)
            },
    Sucond_Btn(){
        const Button = document.getElementById('Sucond_Btn')
        Button.style.display='flex';
        Button.style.background='#003F5E !important';
        Button.querySelector('p').innerText='new Category'
    },
    First_Btn(){
        const First_Btn = document.getElementById('First_Btn')
        First_Btn.querySelector('p').innerText='new Goods'
        First_Btn.addEventListener('click',function() {document.getElementById('addGoodsModalBtn').click();})
    },
    // ...mapActions(['AddAction']),
    AddGood(info){
        this.$store.dispatch('AddGood', info)
    },
    AddGoodBtn(){
        this.requestType = 'ADD'
        this.GoodInformation.name_en =''
        this.GoodInformation.name_ar = ''
        this.GoodInformation.product_sku =''
        this.GoodInformation.quantity =''
    },
    EditGoodBtn(info){
        console.log(info)
        document.getElementById('addGoodsModalBtn').click()
        this.GoodInformation.name_en = info.name_en
        this.GoodInformation.name_ar =  info.name_ar
        this.GoodInformation.product_sku = info.product_sku
        this.GoodInformation.quantity = info.quantity
        this.id = info.id
        this.requestType = 'EDIT'
    },
    EditGood(info){
        console.log(info)
        this.$store.dispatch('EditGoodAction', info)
    },
    },
    computed:{
        ...mapGetters(['Goods'])
    },
    created(){
        this.Sucond_Btn()
        this.First_Btn()
    },
    mounted() {
    if ( !window.localStorage.token){
    this.$router.push({name:'Login'})
    }
    const Goods = this.$store.dispatch('GetGood')
    console.log(Goods)
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