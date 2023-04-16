<template>  
  <div class="header">
    <div class="logoDiv">
      <img class="logo" alt="logo" src="../assets/logo.png">  
      <p class="m-0">Dashboard</p>
    </div>
    <div class="headerS2">
      <div class="buttonsDiv d-flex " >
        <div class="addBtnOrder" id="First_Btn" style="background: linear-gradient(268.77deg, #6AAA69 3.02%, #003F5E 138.89%);">
          <p class="m-0" style="width:100%;cursor:pointer"> Add new Order</p>
        </div>
        <div class="addBtnOrder" id="Sucond_Btn" style="display: none;background-color:#003F5E !important">
          <img src="../assets/plusW.png" alt="">
          <p  class="m-0 w-100"> Add new Order</p>
        </div> 
      </div>

    </div>
  </div>
</template>

<script>
export default {
name: 'HeaderH',
components: {
}
}

</script>

<style scoped>
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
width: 100%;
gap: 1.5rem;
justify-content: flex-end;
transition: 1s;
}
.buttonsDiv .addBtnOrder{

border-radius: 15px;
display: flex;
align-items: center;
width: 227px;
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
width:300px !important;
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
justify-content: center;
}

}

@media only screen and (max-width: 490px){
.user p{
font-size: small;
}
}
</style>