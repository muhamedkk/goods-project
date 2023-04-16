<template>
    <div  data-status="unOpen" class="textInputDiv"  @click.self="customInput($event)" >
        <div class="d-flex align-items-center" style="width:40%">
            <i class="fa-regular fa-clock inputIcon"></i>
            <p style="width:auto" class="m-0">{{title}}</p>
        </div>
        <input @keyup="setValue()"  v-model="isVisible" class="customInput" type="text">
        <h5 id="" style="margin-left: 30px !important;" class="m-0 inputTextValue">{{value}}</h5>
    </div>
</template>

<script>
export default {
name: 'Custom_Input',
props: {
    title: String,
    value: String,
  },
components: {
  
}, 
    data(){
        return {
        isVisible:''
        }
    },
    methods:{
    customInput(el){
        var textInputDiv = el.currentTarget
        var customInput = textInputDiv.querySelector(".customInput")
        var inputTextValue = textInputDiv.querySelector(".inputTextValue")
        if (textInputDiv.getAttribute('data-status') === 'unOpen'){
        textInputDiv.setAttribute("style", "color:  #6AAA69;border:solid 1px #6AAA69")
        customInput.style.display='block'
        customInput.focus()
        inputTextValue.style.display='none'
        textInputDiv.setAttribute("data-status", "open");
        }
    },
    setValue(){
        console.log(this.$props.title)
        // this.$props.value = this.isVisible
    }
    },
    computed:{
    },

//   watch: {
//     value() {
//       this.isVisible = this.$props.value
//     }
//     }

}
</script>

<style>
.textInputDiv{
    width: 390px;
    background-color: white;
    padding: 15px 15px;
    background: #FFFFFF;
    border-radius: 15px;
    color:  #6F95B5;
    margin: 0px !important;
   
}
.customInput2{
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
  }
  .inputTextValue{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
    
  }
</style>