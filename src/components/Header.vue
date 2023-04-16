<!-- <template>
        <header class="">
          <img class="logo" alt="logo" src="../assets/logo.png">  
          <p class="m-0">Dashboard</p>
          <button id="addBtn" data-type="1" @click="write(),this.$router.push('/AddPage') " class=""><i class="fa-solid fa-plus"></i>ADD NWE ORDER</button>
          <h5 id="HText">NEW ORDER</h5>
          <div  id="headerUser" class="user">
            <h5>Ahmad Mohammed</h5>
            <img src="../assets/userIcon.png" alt="" >
          </div>
          <input id="headerSerch" type="text" placeholder="serch for">
        </header>
        <div class="BHeader ">
          <input id="headerSerch2" type="text" placeholder="serch for">
          <div  id="headerUser" class="user2">
            <h5>Ahmad Mohammed</h5>
            <img src="../assets/userIcon.png" alt="" >
          </div>
        </div>
  </template>
  
<script>
  
  export default {
    name: 'HeaderSction',
    components: {

    },
    data(){
      return{
        
      }
    },
    created() {
      console.log(window.location.pathname)
      if(window.location.pathname === '/AddPage'){
        this.write()
      }
    },
    methods:{
      write(){
        
          setTimeout(() => {
              var headerUser = document.getElementById('headerUser')
          var headerSerch = document.getElementById('headerSerch')
          var addBtn = document.getElementById('addBtn')
          var HText = document.getElementById('HText')
          if(addBtn.getAttribute("data-type") === '1'){
            addBtn.setAttribute("data-type", "2")
            addBtn.innerText='SAVE ORDER'
            
              if (window.innerWidth >= 1550){
                headerSerch.style.display='none'
            headerUser.style.display='none'
            HText.style.display='block'
                addBtn.style.left='calc(87%)'
                console.log('x')
              }
              else if (window.innerWidth >= 1220){
                headerSerch.style.display='none'
            headerUser.style.display='none'
            HText.style.display='block'
                addBtn.style.left='calc(87% - 3%)'
              }
              else if (window.innerWidth >= 992){
                headerSerch.style.display='none'
            headerUser.style.display='none'
            HText.style.display='block'
                addBtn.style.left='calc(87% - 5%)'
              }
              else{
                console.log('non')
              }
          }
          else if (addBtn.getAttribute("data-type") === '2'){
            document.getElementById('modalBtn').click();
          }
            },'1')
        

       
      }
    },

  }
  </script>
  
  <style>

  header{
    width: 100%;
    height: 117px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  .BHeader{
    display: none;
  }
  header img{
    width: 59px;
    position: absolute;
    left: 1.82%;
    right: 95.11%;
    top: 24.79%;
    bottom: 24.79%;
  }
  header p{
    position: absolute;
    left: 6.4%;
    right: 86.94%;
    top: 36.75%;
    bottom: 37.61%;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;

   
    text-transform: uppercase;
    
    color: black;
  }
  header button{
    background: linear-gradient(268.77deg, #6AAA69 3.02%, #003F5E 138.89%);
    border-radius: 15px;
    border: none;
    width: 227px;
    width: 12%;
    width: calc(12% - 15px);
    
    height: 75px;

    position: absolute;
    left: 21.33%;
    right: 66.86%;
    top: 17.95%;
    bottom: 17.95%;

    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    text-transform: uppercase;

    color: #FFFFFF;
    transition: 1s;
    padding-left: 15px;
  }
  header input{
    position: absolute;
    left: 77.21%;
    right: 1.98%;
    top: 17.95%;
    bottom: 17.95%;
    background: #F1F1F1;
    border-radius: 20.5px;
    border: none !important;
    outline: none;
    padding-left: 50px;
    background-image: url(../assets/serch.png);
    background-position: 15px 28px;
    background-repeat: no-repeat;
    background-size: 20px 20px;
    color: #003f5e;
    transition: 0.3s;
    width: 400px;
    width: 21% !important;
    height: 75px;
  }
  #HText{
    position: absolute;
    left: 21.33%;
    right: 66.86%;
    top: 35.95%;
    bottom: 17.95%;
    color: #003f5e;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    text-transform: uppercase;
    color: #6F95B5;
    white-space: nowrap;
    display: none;
  }
  header input::placeholder{

    color: #003F5E73;
  }
  header button p  {
    
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    padding-left: 20px;
    
 
  }
  header button i {
    position: absolute;
    left: -5%;
    right: 76.8%;
    top: 40%;
    bottom: 42.74%;
    
    
  }
  header button i::before {
    font-weight: bolder;
    
  }
  .user{
    position: absolute;
    left: 60.72%;
    right: 23.67%;
    top: 17.95%;
    bottom: 17.95%;
    background: #F1F1F1;
    border-radius: 20.5px;
    width: 300px;
    width: 15.5% ;
    height: 75px;
    display: flex;
    align-items: center;
    transition: 0.3s;

  }
  .user h5{
    position: absolute;
    left: 30%;
    right: 26.33%;
    top: 40.17%;
    bottom: 39.32%;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    /* identical to box height */
    white-space: nowrap;
    color: #000000;
    margin: 0;
    font-size: 95% !important;
  }
  .user img{
    position: absolute;
    left: 8%;
    width: 40px;
    height: 36px;
  }
  .user2{
    position: relative;
    background: #F1F1F1;
    border-radius: 20.5px;
    width: 300px;
    width: 15.5% ;
    height: 75px;
    display: flex;
    align-items: center;
    transition: 0.3s;
    width: 45% ;

  }
  .user2 h5{
    position: absolute;
    left: 30%;
    right: 26.33%;
    top: 40.17%;
    bottom: 39.32%;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    /* identical to box height */
    white-space: nowrap;
    color: #000000;
    margin: 0;
    font-size: 95% !important;
  }
  .user2 img{
    position: absolute;
    left: 8%;
    width: 40px;
    height: 36px;
  }
  .user2{
    display: none;
  }
  @media only screen and (max-width: 1550px){
    
    .user{
      width: 20% ;
      left: 54.72%;
    }
    header button{
      width: 15%;
    }
    @media only screen and (max-width: 1220px){
      #HText{
        left: 25%;
      }
      header button{
        width: 17%;
        left: 25%;

      }
      header p{
        left: 9.4%;
      }
      .user{
        width: 24% ;
        left: 52%;
      }
    }
    @media only screen and (max-width: 992px){
      #HText{
        display: none;
      }
      header button{
        top: 50%;  
        left: 50%; 
        transform: translate(-50%, -50%);
        width: 19%;
        font-size: 15px;
        
      }
      .user{
        top: 50%;  
        left: 83%; 
        transform: translate(-50%, -50%);
        width: 30% ;
      }
      header input{
        display: none;
      }
      header .logo{
        width: 75px;
       
        top: 50%;  
        transform: translate(0%, -50%);
      }
      header p{
        left: 11.9%;
        font-size: x-large;
        
      }
      .BHeader{
        height: 90px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 15px;
        background-color: #FFFFFF;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
      }
      header{
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0);
      }
      #headerSerch2{
        background: #F1F1F1;
        border-radius: 20.5px;
        border: none !important;
        outline: none;
        padding-left: 50px;
        background-image: url(../assets/serch.png);
        background-position: 15px 28px;
        background-repeat: no-repeat;
        background-size: 20px 20px;
        color: #003f5e;
        transition: 0.3s;
        height: 75px;
        width: 45% ;
      }
      #headerSerch2::placeholder{
        color: #003F5E73;
      }
      .user{
        left: 80%; 
        width: 36%;
      }
      header button{
        left: 80%; 
        width: 36%;
        font-size: 17px;


        display: none;
      }
      .user2 h5{
        font-size: 110% !important;
      }
      header p{
        left: 12.5%;
        top:35%;
        font-size: x-large;
      }
      .user2{
        width: 38%;
      }
      #headerSerch2{
        width: 100% ;
      }
      @media only screen and (max-width: 768px){
        .user{
          left: 73%; 
          width: 50%;
        }

        #headerSerch2{
          width: 100%;
        }
        .user2{
          width: 50%;
        }

        header p{
          left: 15%;
        }
      }
      @media only screen and (max-width: 576px){
        header p{
          left: 19%;
          top:40%;
          font-size: large;
        }
        .user2{
          width: 50%;
          font-size: 90%;
        }
      }
  
      @media only screen and (max-width: 500px){
        .user2{
          width: 100%;
          font-size: 90%;
        }
        .user2 h5{
         left: 35%;
         top: 35%;
         font-size: x-large !important;
        }
        .user2 img{
          width: 62px;
          height: 55px;
        }
        header button{
          font-size: 15px;
        }
        header p{
          left: 21%;
          top:40%;
          font-size: large;
        }
        .user{
          display: none;
        }
        .BHeader{
          flex-direction: column-reverse;
          height: 170px;
          padding-bottom: 10px;
        }
        .user2{
          display: block;
        }
        header img{
          left: 30%; 
        }
        header p{
          left: 50%; 

        }
      }
      @media only screen and (max-width: 425px){
        header img{
          left: 25%; 
        }
        header p{
          left: 48%; 

        }
        header button{
          left: 76%; 
          width: 40%;
          font-size: 15px;
        }
        .user2 h5{
          left: 32%;
          top: 35%;
          font-size:22px !important;
         }

      }
    }
  }
  </style> -->


<template>
        <!-- <header class="">
          <img class="logo" alt="logo" src="../assets/logo.png">  
          <p class="m-0">Dashboard</p>
          <button id="addBtn" data-type="1" @click="write(),this.$router.push('/AddPage') " class=""><i class="fa-solid fa-plus"></i>ADD NWE ORDER</button>
          <h5 id="HText">NEW ORDER</h5>
          <div  id="headerUser" class="user">
            <h5>Ahmad Mohammed</h5>
            <img src="../assets/userIcon.png" alt="" >
          </div>
          <input id="headerSerch" type="text" placeholder="serch for">
        </header>
        <div class="BHeader ">
          <input id="headerSerch2" type="text" placeholder="serch for">
          <div  id="headerUser" class="user2">
            <h5>Ahmad Mohammed</h5>
            <img src="../assets/userIcon.png" alt="" >
          </div>
        </div> -->
        
        <div class="header">
          <div class="logoDiv">
            <img class="logo" alt="logo" src="../assets/logo.png">  
            <p class="m-0">Dashboard</p>
          </div>
          <div class="headerS2">
            <div class="buttonsDiv d-flex " >
              <div class="addBtnOrder" id="First_Btn" style="background: linear-gradient(268.77deg, #6AAA69 3.02%, #003F5E 138.89%);cursor: pointer;">
                <img src="../assets/plusW.png" alt="">
                <p class="m-0"> Add new Order</p>
              </div>
              <div class="addBtnOrder" id="Sucond_Btn" style="display: none;background-color:#003F5E !important;cursor: pointer;">
                <img src="../assets/plusW.png" alt="">
                <p  class="m-0"> Add new Order</p>
              </div> 
            </div>
            <div class="userSearchDiv">
              <div class="user">
                <img src="../assets/userIcon.png" alt="">
                <p class="m-0 text-center">Ahmad Mohammed</p>
              </div>
              <div class="headerSerch">
                <img src="../assets/serch.png" alt="">
                <input type="text" placeholder="Search for...">
              </div>
            </div>
          </div>
        </div>
  </template>

  <script>
   export default {
    name: 'HeaderSction',
    components: {
    }
  }

</script>

<style>
.header{
  padding: 0 2.5%;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  min-height: 117px;
  display: flex;
  align-items: center;
}
.logoDiv{
  display: flex;
  gap: 30px;
  align-items: center;
  width: 23.5%;
}
.logoDiv img {
  height: 59px ;
  width: 59px ;
}
.logoDiv  {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  text-transform: uppercase;
  color: #121212;
}
.headerS2{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 23.5%);
  
}
.buttonsDiv{
  width: 45%;
  gap: 1.5rem;
  transition: 1s;
}
.buttonsDiv .addBtnOrder{
  
  border-radius: 15px;
  display: flex;
  align-items: center;
  width: 227px;
  width: 36%;
  height: 75px;
  gap: 20px;
  padding: 0 18px;
}
.buttonsDiv .addBtnOrder p{
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  
  
  color: #FFFFFF;
}
#Sucond_Btn{
  background-color: #003F5E;
}
.buttonsDiv .addBtnOrder img{
  width: 10%;
}
.userSearchDiv{
  display: flex;
  align-items: center;
  gap: 17px;
  width: 55%;
  justify-content: flex-end;
  transition: 1s;
}
.user{
  background: #F1F1F1;
  border-radius: 20.5px;
  width: 300px;
  width: 40%;
  height: 75px;
  display: flex;
  align-items: center;
  padding: 22px;
  gap: 21px;
}
.user p{
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
}
.user img{
  width: 40px;
}
.headerSerch{
  background: #F1F1F1;
  border-radius: 20.5px;
  width: 400px;
  width: 53%;
  height: 75px;
  display: flex;
  align-items: center;
  padding: 22px;
  gap: 21px;
}
.headerSerch img{
  width: 23px;
}
.headerSerch input{
  border: none;
  outline: none;
  background-color: #F1F1F1;
  width: 75%;
}
.addBtnOrder{
  transition: 1s;
}
@media only screen and (max-width: 1300px){
  .user{
    width: 45%;
  }
  .headerSerch{
    width: 45%;
  }
  .addBtnOrder{
    width:85% !important;
    margin-left: 15px;
  }
}
@media only screen and (max-width: 992px){
  .logoDiv{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .headerS2{
    flex-direction: column-reverse;
    gap: 30px;
    width: 100%;
    padding: 0 20px;
  }
  .userSearchDiv{
    width: 100%;
    justify-content: space-between;
  }
  .user{
    width: 50%;
  }
  .headerSerch{
    width: 50%;
  }
  .buttonsDiv {
    width: 100%;
  }
  .addBtnOrder{
    width: 300px !important;
  }
  .header{
    flex-direction: column;
    gap: 30px;
    padding: 20px 0;
  }
  .buttonsDiv {
  justify-content: space-between;
  }

}

@media only screen and (max-width: 490px){
  .user p{
    font-size: small;
  }
}
</style>