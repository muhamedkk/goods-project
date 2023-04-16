<template>
    <div class="RNav1">
  <div  class="RNav">
    <div @click="navActive($event),openSettings($event),this.$router.push('/orderList')" class="NavBtn active ">
      <i class=" fa-solid fa-house " style="color:white" ></i>
      <p class=" " style="color:white">HOME</p>
    </div>
    <div @click="navActive($event),openSettings($event)" class="NavBtn">
      <i class="fa-solid fa-coins"></i>
      <p>FINANCE</p>
    </div>
    <div @click="navActive($event),openSettings($event)" class="NavBtn">
      <i class="fa-solid fa-box"></i>
      <p>ORDERS</p>
    </div>
    <div @click="navActive($event),openSettings($event)" ref="myDiv" class="NavBtn">
      <i class="fa-solid fa-clipboard"></i>
      <p>REPORTS</p>
    </div>
    <div @click="navActive($event),openSettings($event)"  ref="myDiv" class="NavBtn">
      <i class="fa-solid fa-gears"></i>
      <p>SETTINGS</p>
    </div>
    <div style="background-color:white" id="settings">
      <div @click="subNavActive($event),this.$router.push('/Goods')" ref="myDiv" class="subNavBarBtn NavBtn ">
        <i style="font-size:150%;" class="fa-solid fa-box inputIcon subNavBarIcon"></i>
        <p class="subNavBarText">GOODS</p>
      </div>
      <div @click="subNavActive($event),this.$router.push('/Drivers')" ref="myDiv" class="subNavBarBtn NavBtn">
        <i style="font-size:150%;"  class="fa-solid fa-user subNavBarIcon"></i>
        <p class="subNavBarText subNavBarIcon">DRIVERS</p>
      </div>
      <!-- subNavBarIcon -->
      <div @click="subNavActive($event),this.$router.push('/Stores')" ref="myDiv" class="subNavBarBtn NavBtn">
        <i style="font-size:150%;" class="fa-solid fa-shop inputIcon subNavBarIcon"></i>
        <p class="subNavBarText">STORES</p>
      </div>
    </div>
  </div>
      </div>
  </template>
  
<script>
  
  export default {
    name: 'NavBar',
    data() {
    return {
      
     }
    },
    components: {
    },
    methods:{
      navActive(el){
          var active= document.getElementsByClassName('active')
          active[0].querySelector('i').style.color='#6F95B5'
          active[0].querySelector('p').style.color='#6F95B5'
          active[0].className = 'NavBtn'
          el.currentTarget.querySelector('p').style.color='white'; 
          el.currentTarget.querySelector('i').style.color='white'; 
          el.currentTarget.className += " active "; 
      },
      subNavActive(el){
          var subActive= document.getElementsByClassName('subNavBarBtn')
          for(var c=0; c<subActive.length; c++){
            subActive[c].setAttribute('class', 'subNavBarBtn NavBtn');
          }
          el.currentTarget.className += " subActive "; 
          el.currentTarget.style.backgroundColor ='white'
      },
      openSettings(el){
        const ele = document.getElementById('settings')
        if (el.currentTarget.querySelector('p').innerText !== 'SETTINGS'){
          ele.style.display = 'none'
        }else{
          const computedStyle = window.getComputedStyle(ele);
          if (computedStyle.display === 'block' || computedStyle.display === 'flex' ){
            ele.style.display = 'none';
          }else{
            ele.style.display = 'flex';
            ele.style.flexDirection = 'column';
          }
        }
      },
    },
    computed:{

    },
    created() {
    },
  }

  </script>
  
  <style >
#settings{
  display: none;
}
  .subNavBarBtn p{
    font-size: 100% !important;
  }
  .subNavBarBtn:hover{
    background-color: white !important;
    color: #6AAA69 !important;
  }
  .subNavBarBtn:hover .subNavBarIcon {
    color: #6AAA69 !important;
  }
  .subNavBarBtn:hover .subNavBarText{
    color: #6AAA69 !important;
  }
  .subActive p{
    color: #6AAA69 !important;
  }
  .subActive i{
    color: #6AAA69 !important;
  }
  .RNav1{
    width: 23.5%;
    height: calc(100vh - 117px);
    background-color: #EEEEEE;
    margin: 0;
  }

  .NavBtn{
    width: 100%;
    height: 76px;
    border: none;
    display: flex;
    align-items: center;
    padding: 0px 43px;
    padding:0px 10%;
    cursor: pointer;
    
  }
  .NavBtn i{
    color: #6F95B5;
    font-size:40px;
    font-size:270%;
  }
  .NavBtn p{
    margin: 0;
    margin-left:17px ;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    font-size: 135%;
    line-height: 30px;
    text-transform: uppercase;
    color: #6F95B5;
  }
  .NavBtn:hover{
    background-color: #003F5E;
    color: white;
  }
  .active{
    background-color: #003F5E;
    color: white;
  }
  .activeColor{
    color: white !important;
  }

   .NavBtn:hover.NavBtn p  {
   color: white ;
  }
   .NavBtn:hover.NavBtn i  {
   color: white ;
  }
  @media only screen and (max-width: 992px){
    .b{
      height: 150px;
    }
    #settings{
      height: 300px;
      width: 100px;
      position: absolute;
      right: 3%;
      bottom: 100%;
      display: flex ;
      flex-direction: column;
      align-items: center;
    }
    .RNav1{
      width: 90%;
      border:none;
      background-color: white;
      height: 20px;
      position: absolute;
      bottom: 0%;
      left: 50%; 
      height: 100px;
      transform: translate(-50%, -50%);
      background: #FFFFFF;
      box-shadow: 0px -3px 20px rgba(0, 0, 0, 0.1);
      border-radius: 20px;
      
    }
    .RNav{
      height: 100%;
        display: flex;
        align-items: center;
    }
    .NavBtn{
        width: 20%;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2px;
        height: 100%;
    }
    .NavBtn p{
        margin: 0;
    }
  }
  @media only screen and (max-width: 768px){

  .NavBtn i{
    font-size:29px;
    font-size:190%;
  }
  .NavBtn p{
    font-size: 20px;
    font-size: 100%;
  }
  @media only screen and (max-width: 475px){
    .NavBtn i{
        font-size:29px;
        font-size:190%;
      }
      .NavBtn p{
        font-size: 20px;
        font-size: 70%;
      }
  }
  }
  


  </style>