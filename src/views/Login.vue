<template>

    <div class="loginPage py-5" style="">
        <div class="d-flex flex-column align-items-center ">
            <img class="logo mb-4" alt="logo" style="width:230px" src="../assets/logo.png">  
            <div class="d-flex flex-column gap-2 mb-2">
                <h2 class="text-center">Sign IN</h2>
                <p class="text-center">Enter yout mobile number</p>
            </div>
            <form @submit.prevent="login(UserInfo)" class="d-flex flex-column align-items-center">
                <div class="d-flex flex-column  ">
                    <div  data-status="unOpen" class="textInputDiv mb-3"  @click.self="customInput($event)" >
                        <div class="d-flex align-items-center" style="width:40%">
                            <i class="fa-solid fa-at inputIcon"></i>
                            <p class="m-0">EMAIL</p>
                        </div>
                        <input  v-model="UserInfo.email" class="customInput" type="email">
                        <h5 id="" style="margin-left: 30px !important;" class="m-0 inputTextValue">{{this.UserInfo.email}}</h5>
                    </div>
                    <div  data-status="unOpen" class="textInputDiv"  @click.self="customInput($event)" >
                        <div class="d-flex align-items-center" style="width:40%">
                            <i class="fa-solid fa-unlock inputIcon"></i>
                            <p class="m-0">PASSWORD</p>
                        </div>
                        <input  v-model="UserInfo.password" class="customInput" type="password">
                        <h5 id="" style="margin-left: 30px !important;" class="m-0 inputTextValue ">{{this.setStar}}</h5>
                    </div>
                </div>
                <button type="submit" class="btn prymaryBtn w-75 mt-4" style="color: white; height: 50px; width: 390px !important;">LOGIN</button>             
            </form>
        </div>
        <div class="b"></div>
    </div>

</template>

<script>


/* eslint-disable */  import functions from  "../assets/js/js.js";
export default {
name: 'Login',
components: {

},
data(){
    return {
        UserInfo:{
            email:'',
            password:'',
        }
    }
},
methods:{
    customInput(el){
                functions.customInputa(el)
            },
    login(i){
          console.log(i.email)
          console.log(i.password)
          this.$store.dispatch('login',i)
            },
},
computed:{
    setStar(){
        function wordWrapToStringList (text, maxLength) {
            var textList=[]
            for(let  c = 1 ; c < maxLength ;c++){
                textList.push(text)
            }
        console.log(textList)
        return textList.join('')
        };
        return wordWrapToStringList('*',this.UserInfo.password.length)
    }
}
}
</script>

<style>


.loginPage{
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 19px;
width: 76.5%;
margin: 0;
border-left: 4px dashed #B0B0B0;
min-height: calc(100vh - 117px) !important;
}
@media only screen and (max-width: 992px){
    .loginPage{
        width: 100%;
        }
}
</style>