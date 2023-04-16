<template>
    
        <div class="AddPage" style="">
            <div class="selects mx-4">  
                <div  data-status="unOpen"  class="selectDiv pt-4 mx-1"  @click="openSelect($event)"  >
                    <div class="selectInput"  >
                        <h5 class="m-0">Current Status</h5>
                        <div class="d-flex justify-contant-between align-items-center">
                            <p class="m-0 me-3 selectSmallText"> {{orderInfo.current_status ? orderInfo.current_status : 'Select'}}</p>
                            <i class="fa-solid fa-caret-down"></i>
                        </div>
                    </div>
                    <div  class="option selectOption" >
                        <div class="optionValue d-flex justify-content-between align-items-center" v-for="(value,i) in CurrentStatusList " v-bind:key="i" @click="this.orderInfo.current_status = value" :class="{'wihteBlueC':i % 2 === 0 }" >
                            <h5  class="m-0" :class="{'greenColor':value === this.orderInfo.current_status }" >{{value}}</h5>
                            <img v-if="value === this.orderInfo.current_status" src="../assets/check.png" style="width:1.5rem;height:1.5rem">
                        </div>
                    </div>
                </div>
                <div  data-status="unOpen"  class="selectDiv pt-4 mx-1"  @click="openSelect($event)"  >
                    <div class="selectInput"  >
                        <h5 class="m-0">Goods</h5>
                        <div class="d-flex justify-contant-between align-items-center">
                            <p class="m-0 me-3 selectSmallText"> {{orderInfo.goods_name ? orderInfo.goods_name : 'Select'}}</p>
                            <i class="fa-solid fa-caret-down"></i>
                        </div>
                    </div>
                    <div  class="option selectOption" >
                        <div class="optionValue d-flex justify-content-between align-items-center" v-for="(value,i) in Goods " v-bind:key="i" @click="this.orderInfo.goods_name = value.name_en" :class="{'wihteBlueC':i % 2 === 0 }" >
                            <h5  class="m-0" :class="{'greenColor':value.name_en === this.orderInfo.goods_name }" >{{value.name_en}}</h5>
                            <img v-if="value.name_en === this.orderInfo.goods_name" src="../assets/check.png" style="width:1.5rem;height:1.5rem">
                        </div>
                    </div>
                </div>                   
                <!-- <div  data-status="unOpen"  class="selectDiv pt-4 mx-1"  @click="openSelect($event)"  >
                    <div class="selectInput"  >
                        <h5 class="m-0">Stores</h5>
                        <div class="d-flex justify-contant-between align-items-center">
                            <p class="m-0 me-3 selectSmallText"> {{orderInfo.store ? orderInfo.store : 'Select'}}</p>
                            <i class="fa-solid fa-caret-down"></i>
                        </div>
                    </div>
                    <div  class="option selectOption" >
                        <div class="optionValue d-flex justify-content-between align-items-center" v-for="(value,i) in s " v-bind:key="i" @click="this.orderInfo.store = value.name_en" :class="{'wihteBlueC':i % 2 === 0 }" >
                            <h5  class="m-0" :class="{'greenColor':value.name_en === this.orderInfo.store }" >{{value.name_en}}</h5>
                            <img v-if="value.name_en === this.orderInfo.store" src="../assets/check.png" style="width:1.5rem;height:1.5rem">
                        </div>
                    </div>
                </div> -->
                <button class="selectGoods mx-1 mt-4">SELECT GOODS</button>
            </div>
            <div class="inputsContainer row ">     
                <div class="py-3 py-lg-5  col-6 inputsCol ">      
                    <p class="titelInput ms-3">Main Details</p>
                    <div class="d-flex flex-column gap-2">
                        <!-- <div  data-status="unOpen" class="textInputDiv"  @click.self="customInput($event)" >
                            <div class="d-flex align-items-center" style="width:40%">
                                <i class="fa-solid fa-box inputIcon"></i>
                                <p class="m-0">Goods Name</p>
                            </div>
                            <input  v-model="goodsName" class="customInput" type="text">
                            <h5 id="" style="margin-left: 30px !important;" class="m-0 inputTextValue">{{this.orderInfo.goodsName}}</h5>
                        </div> -->
                        <!-- <div  data-status="unOpen" class="textInputDiv"  @click.self="customInput($event)" >
                            <div class="d-flex align-items-center" style="width:40%">
                                <i class="fa-solid fa-box inputIcon"></i>
                                <p class="m-0">Goods Name</p>
                            </div>
                            <input list="brow" v-model="orderInfo.goodsName" class="customInput" >
                            <datalist id="brow">
                                <option v-for="(good,i) in Goods" :key="i" :value="good.name_en"></option>
                            </datalist>  
                            <h5 id="" style="margin-left: 30px !important;" class="m-0 inputTextValue">{{this.orderInfo.goodsName}}</h5>
                        </div> -->
                        <div  data-status="unOpen" class="textInputDiv"  @click.self="customInput($event)" >
                            <div class="d-flex align-items-center" style="width:40%">
                                <i class="fa-solid fa-tags inputIcon"></i>
                                <p class="m-0">Brand Name</p>
                            </div>
                            <input list="brands" v-model="orderInfo.brand_name" class="customInput" type="text">
                            <datalist id="brands">
                                <option v-for="(brand,i) in JSON.parse(JSON.stringify(this.brandsList))[0]" :key="i" :value="brand.name"></option>
                            </datalist>  
                            <h5 id="" style="margin-left: 30px !important;" class="m-0 inputTextValue">{{this.orderInfo.brand_name}}</h5>
                        </div>
                        <div  data-status="unOpen" class="textInputDiv"  @click.self="customInput($event)" >
                            <div class="d-flex align-items-center" style="width:40%">
                                <i class="fa-solid fa-calendar-days inputIcon"></i>
                                <p class="m-0">etd</p>
                            </div>
                            <input  v-model="orderInfo.etd" class="customInput" type="date">
                            <h5 id="" style="margin-left: 30px !important;" class="m-0 inputTextValue">{{this.orderInfo.etd}}</h5>
                        </div>
                        <div  data-status="unOpen" class="textInputDiv"  @click.self="customInput($event)" >
                            <div class="d-flex align-items-center" style="width:40%">
                                <i class="fa-solid fa-calendar inputIcon"></i>
                                <p class="m-0">eta</p>
                            </div>
                            <input  v-model="orderInfo.eta" class="customInput" type="date">
                            <h5 id="" style="margin-left: 30px !important;" class="m-0 inputTextValue">{{this.orderInfo.eta}}</h5>
                        </div>
                        <div  data-status="unOpen" class="textInputDiv"  @click.self="customInput($event)" >
                            <div class="d-flex align-items-center" style="width:40%">
                                <i class="fa-solid fa-circle-dollar-to-slot inputIcon"></i>
                                <p class="m-0">B/l No.</p>
                            </div>
                            <input  v-model="orderInfo.bi_number" class="customInput" type="text">
                            <h5 id="" style="margin-left: 30px !important;" class="m-0 inputTextValue">{{this.orderInfo.bi_number}}</h5>
                        </div>
                        <div  data-status="unOpen" class="textInputDiv"  @click.self="customInput($event)" >
                            <div class="d-flex align-items-center" style="width:40%">
                                <i class="fa-solid fa-clipboard inputIcon"></i>
                                <p class="m-0">Invoice No.</p>
                            </div>
                            <input  v-model="orderInfo.invoice_no" class="customInput" type="text">
                            <h5 id="" style="margin-left: 30px !important;" class="m-0 inputTextValue">{{this.orderInfo.invoice_no}}</h5>
                        </div>
                        <div  data-status="unOpen" class="textInputDiv"  @click.self="customInput($event)" >
                            <div class="d-flex align-items-center" style="width:40%">
                                <i class="fa-solid fa-building-columns inputIcon"></i>
                                <p class="m-0">Bank</p>
                            </div>
                            <input  v-model="orderInfo.bank_name" class="customInput" type="text">
                            <h5 id="" style="margin-left: 30px !important;" class="m-0 inputTextValue">{{this.orderInfo.bank_name}}</h5>
                        </div>
                        <div  data-status="unOpen" class="textInputDiv"  @click.self="customInput($event)" >
                            <div class="d-flex align-items-center" style="width:40%">
                                <i class="fa-solid fa-user-tie inputIcon"></i>
                                <p class="m-0">Supplier</p>
                            </div>
                            <input list="Suppliers" v-model="orderInfo.supplier" class="customInput" type="text">
                            <datalist id="Suppliers">
                                <option v-for="(Supplier,i) in JSON.parse(JSON.stringify(this.suppliersList))[0]" :key="i" :value="Supplier.name"></option>
                            </datalist>  
                            <h5 id="" style="margin-left: 30px !important;" class="m-0 inputTextValue">{{this.orderInfo.supplier}}</h5>
                        </div>
                        <div  data-status="unOpen" class="textInputDiv"  @click.self="customInput($event)" >
                            <div class="d-flex align-items-center" style="width:40%">
                                <i class="fa-solid fa-box inputIcon"></i>
                                <p class="m-0">Container</p>
                            </div>
                            <input  v-model="orderInfo.container" class="customInput" type="text">
                            <h5 id="" style="margin-left: 30px !important;" class="m-0 inputTextValue">{{this.orderInfo.container}}</h5>
                        </div>
                        <div  data-status="unOpen" class="textInputDiv"  @click.self="customInput($event)" >
                            <div class="d-flex align-items-center" style="width:40%">
                                <i class="fa-regular fa-clock inputIcon"></i>
                                <p class="m-0">FREE TIME</p>
                            </div>
                            <input  v-model="orderInfo.free_time" class="customInput" type="number">
                            <h5 id="" style="margin-left: 30px !important;" class="m-0 inputTextValue">{{this.orderInfo.free_time}}</h5>
                        </div>
                        <!-- <div  data-status="unOpen" class="textInputDiv"  @click.self="customInput($event)" >
                            <div class="d-flex align-items-center" style="width:40%">
                                <i class="fa-solid fa-dolly inputIcon"></i>
                                <p class="m-0">Notes</p>
                            </div>
                            <input  v-model="orderInfo.notes" class="customInput" type="text">
                            <h5 id="" style="margin-left: 30px !important;" class="m-0 inputTextValue">{{this.orderInfo.notes}}</h5>
                        </div> -->
                        <div  data-status="unOpen" class="textInputDiv"  @click.self="customInput($event)" >
                            <div class="d-flex align-items-center" style="width:40%">
                                <i class="fa-solid fa-plus-minus inputIcon"></i>
                                <p class="m-0">payment</p>
                            </div>
                            <input  v-model="orderInfo.payment" class="customInput" type="number">
                            <h5 id="" style="margin-left: 30px !important;" class="m-0 inputTextValue">{{this.orderInfo.payment}}</h5>
                        </div>

                    </div>
                </div>

                <div class="py-3 py-lg-5 col-6 inputsCol">  
                    <p class="titelInput ms-3">Statuses</p>
                    <!-- <div  data-status="unOpen" class="textInputDiv"  @click.self="customInput($event)" >
                        <input placeholder="Doc Rcvd date" v-model="orderInfo.x" class="customInput customInput2 notNone"  type="text">
                    </div> -->
                    <div  data-status="unOpen" class="textInputDiv mt-2"  @click.self="customInput($event)" >
                        <input placeholder="document receive at" v-model="orderInfo.document_receive_at" class="customInput customInput2 notNone"  type="date">
                    </div>
                    <div  data-status="unOpen"  class="selectDiv pt-2 mx-1"  @click="openSelect($event)"  >
                        <div class="selectInput notBorder" style="border:none" >
                            <h5 class="m-0 selectText">Doc Status</h5>
                            <div class="d-flex justify-contant-between align-items-center">
                                <p class="m-0 me-3 selectSmallText" style="color:#6AAA69;"> {{this.orderInfo.doc_status ? this.orderInfo.doc_status : ''}}</p>
                                <i class="fa-solid fa-caret-down" style="color:#6AAA69" ></i>
                            </div>
                        </div>
                        <div  class="option selectOption" >
                            <div class="optionValue d-flex justify-content-between align-items-center" v-for="(value,i) in DocStatusList " v-bind:key="i" @click="this.orderInfo.doc_status = value" :class="{'wihteBlueC':i % 2 === 0 }" >
                                <h5  class="m-0" :class="{'greenColor':value === this.orderInfo.doc_status }" >{{value}}</h5>
                                <img v-if="value === this.orderInfo.doc_status" src="../assets/check.png" style="width:1.5rem;height:1.5rem">
                            </div>
                        </div>
                    </div>
                    <div  data-status="unOpen"  class="selectDiv pt-2 mx-1"  @click="openSelect($event)"  >
                        <div class="selectInput notBorder" style="border:none" >
                            <h5 class="m-0 selectText">Clearing Status</h5>
                            <div class="d-flex justify-contant-between align-items-center">
                                <p class="m-0 me-3 selectSmallText" style="color:#6AAA69;"> {{this.orderInfo.clearing_status ? this.orderInfo.clearing_status : ''}}</p>
                                <i class="fa-solid fa-caret-down" style="color:#6AAA69" ></i>
                            </div>
                        </div>
                        <div  class="option selectOption" >
                            <div class="optionValue d-flex justify-content-between align-items-center" v-for="(value,i) in ClearingStatues " v-bind:key="i" @click="this.orderInfo.clearing_status = value" :class="{'wihteBlueC':i % 2 === 0 }" >
                                <h5  class="m-0" :class="{'greenColor':value === this.orderInfo.clearing_status }" >{{value}}</h5>
                                <img v-if="value === this.orderInfo.clearing_status" src="../assets/check.png" style="width:1.5rem;height:1.5rem">
                            </div>
                        </div>
                    </div>
                    <div  data-status="unOpen"  class="selectDiv pt-2 mx-1"  @click="openSelect($event)"  >
                        <div class="selectInput notBorder" style="border:none" >
                            <h5 class="m-0 selectText">Clearing Agent Status</h5>
                            <div class="d-flex justify-contant-between align-items-center">
                                <p class="m-0 me-3 selectSmallText" style="color:#6AAA69;"> {{this.orderInfo.clearing_agent_status ? this.orderInfo.clearing_agent_status : ''}}</p>
                                <i class="fa-solid fa-caret-down" style="color:#6AAA69" ></i>
                            </div>
                        </div>
                        <div  class="option selectOption" >
                            <div class="optionValue d-flex justify-content-between align-items-center" v-for="(value,i) in ClearingAgentStatus " v-bind:key="i" @click="this.orderInfo.clearing_agent_status = value" :class="{'wihteBlueC':i % 2 === 0 }" >
                                <h5  class="m-0" :class="{'greenColor':value === this.orderInfo.clearing_agent_status }" >{{value}}</h5>
                                <img v-if="value === this.orderInfo.clearing_agent_status" src="../assets/check.png" style="width:1.5rem;height:1.5rem">
                            </div>
                        </div>
                    </div>
                    <div  data-status="unOpen"  class="selectDiv pt-2 mx-1"  @click="openSelect($event)"  >
                        <div class="selectInput notBorder" style="border:none" >
                            <h5 class="m-0 selectText">Arrival Notice</h5>
                            <div class="d-flex justify-contant-between align-items-center">
                                <p class="m-0 me-3 selectSmallText" style="color:#6AAA69;"> {{this.orderInfo.arrival_notice ? this.orderInfo.arrival_notice : ''}}</p>
                                <i class="fa-solid fa-caret-down" style="color:#6AAA69" ></i>
                            </div>
                        </div>
                        <div  class="option selectOption" >
                            <div class="optionValue d-flex justify-content-between align-items-center" v-for="(value,i) in ArrivalNotice " v-bind:key="i" @click="this.orderInfo.arrival_notice = value" :class="{'wihteBlueC':i % 2 === 0 }" >
                                <h5  class="m-0" :class="{'greenColor':value === this.orderInfo.arrival_notice }" >{{value}}</h5>
                                <img v-if="value === this.orderInfo.arrival_notice" src="../assets/check.png" style="width:1.5rem;height:1.5rem">
                            </div>
                        </div>
                    </div>

                    <div  data-status="unOpen"  class="selectDiv pt-2 mx-1"  @click="openSelect($event)"  >
                        <div class="selectInput notBorder" style="border:none" >
                            <h5 class="m-0 selectText">DHL Status of Doc</h5>
                            <div class="d-flex justify-contant-between align-items-center">
                                <p class="m-0 me-3 selectSmallText" style="color:#6AAA69;"> {{this.orderInfo.dhl_status ? this.orderInfo.dhl_status : ''}}</p>
                                <i class="fa-solid fa-caret-down" style="color:#6AAA69" ></i>
                            </div>
                        </div>
                        <div  class="option selectOption" >
                            <div class="optionValue d-flex justify-content-between align-items-center" v-for="(value,i) in DHLStatus " v-bind:key="i" @click="this.orderInfo.dhl_status = value" :class="{'wihteBlueC':i % 2 === 0 }" >
                                <h5  class="m-0" :class="{'greenColor':value === this.orderInfo.dhl_status }" >{{value}}</h5>
                                <img v-if="value === this.orderInfo.dhl_status" src="../assets/check.png" style="width:1.5rem;height:1.5rem">
                            </div>
                        </div>
                    </div>
                    <p class="titelInput ms-3 " style="margin-top:48px">Other Details</p>
                    <!-- <div  data-status="unOpen" class="textInputDiv"  @click.self="customInput($event)" >
                        <input placeholder="PI" v-model="orderInfo.PI" class="customInput customInput2 notNone"  type="text">
                    </div> -->
                    <!-- <div  data-status="unOpen" class="textInputDiv mt-2"  @click.self="customInput($event)" >
                        <input placeholder="arrival notice" v-model="orderInfo.arrival_notice" class="customInput customInput2 notNone"  type="text">
                    </div> -->
                    <div  data-status="unOpen" class="textInputDiv mt-2"  @click.self="customInput($event)" >
                        <input placeholder="ref id" v-model="orderInfo.ref_id" class="customInput customInput2 notNone"  type="text">
                    </div>
                    <div  data-status="unOpen" class="textInputDiv mt-2"  @click.self="customInput($event)" >
                        <input placeholder="sael" v-model="orderInfo.sael" class="customInput customInput2 notNone"  type="text">
                    </div>
                    <div  data-status="unOpen" class="textInputDiv mt-2"  @click.self="customInput($event)" >
                        <input placeholder="Bank Advice" v-model="orderInfo.bank_advice" class="customInput customInput2 notNone"  type="text">
                    </div>
                </div>
                <div class="py-3 py-lg-5 col-6 inputsCol">   
                    <p class="titelInput ms-3 " style="">َ</p>   
                    <div  data-status="unOpen" class="textInputDiv " style=""  @click.self="customInput($event)" >
                        <input placeholder="Net Weight (Kg):" v-model="orderInfo.net_weight" class="customInput customInput2 notNone"  type="number">
                    </div>
                    <div  data-status="unOpen" class="textInputDiv mt-2"  @click.self="customInput($event)" >
                        <input placeholder="shipping line" v-model="orderInfo.shipping_line" class="customInput customInput2 notNone"  type="text">
                    </div>
                    <div  data-status="unOpen" class="textInputDiv mt-2"  @click.self="customInput($event)" >
                        <input placeholder="Gross Weight (Kg)" v-model="orderInfo.gross_weight" class="customInput customInput2 notNone"  type="number">
                    </div>
                    <div  data-status="unOpen" class="textInputDiv mt-2"  @click.self="customInput($event)" >
                        <input placeholder="preservation" v-model="orderInfo.preservation" class="customInput customInput2 notNone"  type="text">
                    </div>
                    <div  data-status="unOpen" class="textInputDiv mt-2"  @click.self="customInput($event)" >
                        <input placeholder="OFF LOADED AT" v-model="orderInfo.off_loaded_at" class="customInput customInput2 notNone"  type="text">
                    </div>
                    <div  data-status="unOpen" class="textInputDiv mt-2"  @click.self="customInput($event)" >
                        <input placeholder="pod" v-model="orderInfo.pod" class="customInput customInput2 notNone"  type="text">
                    </div>
                    <div  data-status="unOpen" class="textInputDiv mt-2"  @click.self="customInput($event)" >
                        <input placeholder="PRICE" v-model="orderInfo.price" class="customInput customInput2 notNone"  type="number">
                    </div>
                    <div  data-status="unOpen" class="textInputDiv mt-2"  @click.self="customInput($event)" >
                        <input placeholder="COO" v-model="orderInfo.coo" class="customInput customInput2 notNone"  type="text">
                    </div>
                    <div  data-status="unOpen" class="textInputDiv mt-2"  @click.self="customInput($event)" >
                        <input placeholder="HS. Code" v-model="orderInfo.hs_code" class="customInput customInput2 notNone"  type="text">
                    </div>
                    <div  data-status="unOpen" class="textInputDiv mt-2"  @click.self="customInput($event)" >
                        <input placeholder="CARTONS" v-model="orderInfo.cartons" class="customInput customInput2 notNone"   type="number">
                    </div>
                    <div  data-status="unOpen" class="textInputDiv mt-2"  @click.self="customInput($event)" >
                        <input placeholder="Notes" v-model="orderInfo.notes" class="customInput customInput2 notNone"   type="text">
                    </div>
                    <div  data-status="unOpen" class="textInputDiv mt-2"  @click.self="customInput($event)" >
                        <input placeholder="shelf life" v-model="orderInfo.shelf_life" class="customInput customInput2 notNone"   type="text">
                    </div>
                </div>
            </div>

            <button hidden id="AddOrder" type="button" @click="submit()">
              </button>

            <!-- Modal -->
            <button hidden id="modalBtn" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              </button>
              
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-body d-flex flex-column">
                        <img src="../assets/bigCheck.png" alt="">
                        <h3 style="margin-top:16px">Request Sent Successfully</h3>
                        <p style="margin-top:24px">We send notifnotification to selected clearance
                            agent “Ali Yassen”</p>
                            <button class="btn prymaryBtn w-75" style="color:white;height:50px;margin-top:25px" >Done</button>
                            <button class="btn  w-75" style="color:#6AAA69;background-color:#FFFFFF;border-radius:15px;height:50px;margin-top:15px" >Call Clearance Agent</button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- <div class='addPlus' style="position: absolute;bottom: 10%;left:10%;
              right:10%;
              background: #FFFFFF;
              box-shadow: 0px -3px 20px rgba(0, 0, 0, 0.1);
              border-radius: 15px;height:100px;width:100px;display:none"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src="../assets/plus.png" style="width:75%">
              </div> -->
        </div>
        
  </template>
  
<script>

/* eslint-disable */  import functions from  "../assets/js/js.js";
import { mapActions,mapGetters  } from 'vuex';

import _axios from '../axios'

  export default {
    name: 'AddPage',
    components: {

    },
    data() {
    return {
            orderInfo:{
                goods_name:"",
                brand_name:"",
                supplier:"",
                current_status: "",
                doc_status: "",
                dhl_status: "",
                clearing_status: "",
                clearing_agent_status: "",
                arrival_notice: "",
                ref_id: "",
                etd: "",
                eta: "",
                invoice_no: "",
                document_receive_at: "",
                shipping_line: "",
                bank_name: "",
                bank_advice: "",
                payment: "",
                bi_number: "",
                container: "",
                free_time: "",
                sael: "",
                cartons: "",
                shelf_life: "", 
                net_weight: "",
                gross_weight: "",
                preservation: "",
                pod: "",
                price: "",
                coo: "",
                hs_code: "",
                notes: "",
                off_loaded_at: "",
                // store:""
            },
            
            CurrentStatusList:['Shipping','In the Sea','Arrived','With Clearance Agent','Needs attention','Finished'],
            DocStatusList:['Arrived','Need attention','Arrived to bank','Shipped','Arrived from bank'],
            DHLStatus:['Shipped','Arrived','Need attention'],
            ClearingStatues:['Ready to sale','Waiting to authorize','Unauthorized'],
            ArrivalNotice:['Arrived to bank','Picked from bank','none'],
            ClearingAgentStatus:['Notification Sent','Take Paper','Container Ready'],
            suppliersList:[],
            brandsList:[],
     }
    },
    methods:{
        customInput(el){
            functions.customInputa(el)
        },
        openSelect(el){
            functions.openSelect(el)
        },
        Sucond_Btn(){
            document.getElementById('Sucond_Btn')
            Sucond_Btn.style.display ='none';
            // document.getElementById('First_Btn').addEventListener('click', this.$router.push('/AddPage'))
        },
        CustoStyle(){
            // document.getElementsByClassName('userSearchDiv')[0].style.display ='none';
            // document.getElementsByClassName('buttonsDiv')[0].style.width ='100%';
            // document.getElementsByClassName('buttonsDiv')[0].style.justifyContent ='flex-end';
            // document.getElementsByClassName('addBtnOrder')[0].style.width ='300px';
            // document.getElementById('Sucond_Btn').style.display ='none';
        },
        suppliers(){
            _axios.get('/api/suppliers',{ headers: {
                'Authorization': `token ${window.localStorage.token}`}})
                .then(response => {
                // this.suppliersList.push(response.data)
                this.suppliersList = [response.data]
            })
            .catch(error => {
                console.log('Error')
                console.error(error.response);
            });
        },
        brands(){
            _axios.get('/api/brands',{ headers: {
                'Authorization': `token ${window.localStorage.token}`}})
                .then(response => {
                this.brandsList = [response.data]
                console.log(this.brandsList)
            })
            .catch(error => {
                console.log('Error')
                console.error(error.response);
            });
        },
        First_Btn(){
        const First_Btn = document.getElementById('First_Btn')
        First_Btn.querySelector('p').innerText='SAVE ORDR'
        First_Btn.addEventListener('click',function() {document.getElementById('AddOrder').click();})
    },
    submit(){
        console.log(this.orderInfo)
        const store = this.$store.dispatch('AddOrder',this.orderInfo)
    },

    },
    computed:{
        ...mapGetters(['Goods','s'])
        
    },
    created(){
        this.First_Btn()
        this.CustoStyle()
        console.log(this.$route.fullPath)
        this.$store.dispatch('GetGood')
        this.$store.dispatch('Getstore')
        this.$store.dispatch('GetOrders')
        this.suppliers()
        this.brands()
        // functions.addOrderNav()
    },
    mounted(){
        if ( !window.localStorage.token){
            this.$router.push({name:'Login'})
    }
    }
  }
  </script>
  
  <style scoped>
  .modal-dialog{
    max-width: 656px !important;
    height:446px !important ;
  }
  .modal-body p{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
    width: 75%;
    
    color: #000000;
  }
  
</style>
  <style>
  .modal-body{
    background: #F1F1F1;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    border:none;
    justify-content: center;
    align-items: center;
   background:#FFFFFF;
   position: relative;
  }
  .modal-body img{
    width: 102px;
    height: 102px;
  }
  .modal-body h3{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    color: #000000;
    width: 75%;
  }

  .wihteBlueC{
    background-color: #6F95B51A;
  }
  .greenColor{
    color: #6AAA69;
  }
  .inputsContainer{
    margin:0px 30px !important;

  }
    .textInputDiv{
        width: 390px;
        background-color: white;
        padding: 15px 15px;
        background: #FFFFFF;
        border-radius: 15px;
        color:  #6F95B5;
        margin: 0px !important;
    }
    .selects{
       display: flex;
       flex-wrap: wrap; 
       justify-content: center;
       align-items: center;
       
    }
  .selectDiv{
    display: block;
    flex-direction: column;

  }
  .customInput {
    margin-left:30px ;
    border: none;
    width: calc(100% - 30px);
    outline: none;
    display: none;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
    background-color:white !important;
  }
  .customInput:focus {

    background-color:white !important;
  }
  .customInput2{
    border: none;
    width: calc(100% - 30px);
    outline: none;
    display: block !important;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
  }
 
  .inputIcon{
    margin-right: 11px !important;
    
  }
  .selectGoods{
    background: linear-gradient(268.77deg, #6AAA69 3.02%, #003F5E 138.89%);
    border-radius: 15px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    text-transform: uppercase;
    width: 204px;
    height: 50px;
    color: #FFFFFF;
    border: none;
  }
  .inputTextValue{
    white-space: nowrap;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
    width: 10px;
  }
  .titelInput{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    color: #003F5E;
  }
  .AddPage{

    width: 76.5%; 
    border-left: 4px dashed #B0B0B0;
  }
  .index{
    background-color:#EEEEEE ;
  }

  .selectDiv{
    width: 390px;

  }
  .selectInput{

    background: #FFFFFF;
    border: 1px solid #6AAA69;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
  }
  .selectText{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
  }
  .selectOption{
    display: none;
    width: 390px;
    background: #FFFFFF;
    border: 1px solid #6AAA69;
    border-top: none;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-bottom-right-radius:15px ;
    border-bottom-left-radius: 15px;
    
    
  }
  .optionValue{
    padding: 0px 15px;
  }

  .selectOption h5{

    padding: 15px 0px;
    
  }

    .selectSmallText{
        font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */

    text-align: right;
    text-transform: uppercase;

    color: #000000;
    }
    
    .notNone::placeholder{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: #B0B0B0;
    }
    
  @media only screen and (min-width: 1675px){
    .inputsCol{
        width:33.33333333%  !important;
    }

  }

  @media only screen and (max-width: 992px){
    .addPlus{
        display: flex !important;
        justify-content: center;
        align-items: center;
    }
    .AddPage{
      width: 100%;
      height: 230vh;
    }
    .inputsContainer{
        justify-content: center;
    }
    .B{
        height: 170px;
    }
    .NavContent{
      flex-direction: column-reverse;
      position: relative;
    }
    .selects{
        justify-content: center;
    }
    @media only screen and (max-width: 1071px){
        .selects{
            flex-direction: column !important;
        }
    }
  }
  @media only screen and (max-width: 900px){
    .addPlus{
        bottom:7% !important;
        width: 75px !important;
        height: 75px !important;
    }
    .inputsCol{
        width:100%  !important;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .AddPage{
        height: 2900px !important;
    }
    .titelInput {
        margin-right: 1rem !important;
    }
  }


  </style>