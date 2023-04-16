<template>

    <div class="listDiv" style="">
        <div class="headerListPage">
            <div>
                <h2 class="pageLabel m-0">Latest Orders</h2>
            </div>
            <div class="d-flex headerListPageBtns">
                <button class="prymaryBtn" style="margin-right: 10px;">All</button>
                <button class="secondBtn" style="margin-right: 10px;">Shipping</button>
                <button class="secondBtn" style="margin-right: 10px;">In the Sea</button>
                <button class="secondBtn" style="margin-right: 10px;">Arrived</button>
                <button class="secondBtn" style="margin-right: 10px;">With Clearance Agent</button>
                <button class="secondBtn" style="margin-right: 10px;">Needs attention</button>
                <button class="secondBtn" style="margin-right: 10px;">Finished</button>
            </div>
        </div>
        <div class="contanetList" >
            <div class="orderDiv mt-4" v-for="(order,i) in Orders"  v-bind:key="i">
                <div class="orderDivS1 ">
                    <div class="d-flex align-items-center h-100">
                        <p class=" orderText x">Ref: 0902934234</p>
                        <p class="m-0 orderText">Documents Status: {{order.doc_status}}</p>
                    </div>
                    <div class="d-flex align-items-center">
                        <div class="me-2" style="width:18px;height:18px;background: #003F5E;border-radius:50%"></div>
                        <p class="x2 orderText" style="color:#003F5E">Documents Status: {{order.doc_status}}</p>
                        <img style="width:50px;" class="editIcon" src="../assets/edit.png" alt="">
                    </div>
                </div>
                <div class="orderDivS2 ">
                    <div class="info ">
                        <div class="d-flex align-items-center">
                            <i class="fa-solid fa-tags "></i>
                            <p class="m-0">Brand</p>
                        </div>
                        <h6 class="text-center m-0">{{order.brand_name}}</h6>
                    </div>
                    <div class="info ">
                        <div class="d-flex align-items-center">
                            <i class="fa-solid fa-box "></i>
                            <p class="m-0">Goods Name</p>
                        </div>
                        <h6 class="text-center m-0">{{order.goods_name}}</h6>
                    </div>
                    <div class="info ">
                        <div class="d-flex align-items-center">
                            <i class="fa-solid fa-box"></i>
                            <p class="m-0">Container</p>
                        </div>
                        <h6 class="text-center m-0">{{order.cartons}}</h6>
                    </div>
                    <div class="info ">
                        <div class="d-flex align-items-center">
                            <i class="fa-solid fa-plus-minus"></i>
                            <p class="m-0">Amount</p>
                        </div>
                        <h6 class="text-center m-0">{{order.payment}}</h6>
                    </div>
                    <div class="info ">
                        <div class="d-flex align-items-center">
                            <i class="fa-solid fa-user-tie"></i>
                            <p class="m-0">Sublier</p>
                        </div>
                        <h6 class="text-center m-0">{{order.supplier}}</h6>
                    </div>
                    <div class="info ">
                        <div class="d-flex align-items-center">
                            <i class="fa-solid fa-building-columns"></i>
                            <p class="m-0">Bank Name</p>
                        </div>
                        <h6 class="text-center m-0">{{order.bank_name}}</h6>
                    </div>
                    <div class="info ">
                        <div class="d-flex align-items-center">
                            <i class="fa-solid fa-circle-dollar-to-slot"></i>
                            <p class="m-0">B/l No.</p>
                        </div>
                        <h6 class="text-center m-0">{{order.bi_number}}</h6>
                    </div>
                    <div class="info">
                        <div class="d-flex align-items-center">
                            <i class="fa-solid fa-clipboard"></i>
                            <p class="m-0">Pay Amount</p>
                        </div>
                        <h6 class="text-center m-0" style="color:#6AAA69">D.K{{order.amount}}</h6>
                    </div>
                    <div style="margin-left:auto">
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                </div>
            </div>
           
        </div>
        <div class="b" style="height:200px;display:none;">
        </div>
        <button id="addPage" hidden @click="this.$router.push('/AddPage')"></button>
    </div>

</template>

<script>
import { mapGetters  } from 'vuex';
export default {
name: 'orderList',
components: {

}, 
    data(){
        return{
        }
    },
    methods:{
    Sucond_Btn(){
        const Button = document.getElementById('Sucond_Btn')
        Button.style.display='none';
    },
    // addPush(){
    //     this.$router.push('/AddPage');
    // },
    First_Btn(){
        const First_Btn = document.getElementById('First_Btn')
        First_Btn.querySelector('p').innerText='ADD NEW ORDER'
        First_Btn.addEventListener('click',function(){document.getElementById('addPage').click()})
    }
    },
    computed:{
        ...mapGetters(['Orders'])
    },
    created(){
        this.Sucond_Btn()
        this.First_Btn()
        this.$store.dispatch('GetOrders')
        // functions.addOrderNav()
    },
    mounted(){
        if ( !window.localStorage.token){
      this.$router.push({name:'Login'})
    }
    }
}
</script>

<style>
.headerListPageBtns{
    flex-wrap: wrap;
}
.listDiv{
    padding: 51px;
    width: 76.5%; 
    border-left: 4px dashed #B0B0B0;
}
.pageLabel{
    font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 30px;
line-height: 45px;
text-transform: uppercase;
color: #000000;
}
.headerListPage{
    display: flex;
   
    justify-content: space-between;
    align-items: center;
}
i{
    margin-right: 0 !important;
}
@media only screen and (max-width: 992px){
    .b{
        display: block !important;
    }
}
@media only screen and (max-width: 1642px){
    .headerListPage{
        flex-direction: column;
    }
    .headerListPageBtns button{
        margin-top: 15px !important;
    }
}
</style>