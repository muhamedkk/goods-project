window.onclick = function(ev){
    // console.log(ev.target)
    var divs=document.getElementsByClassName('textInputDiv')
    for(var i=0;i<= divs.length;i++){
        try{
        var div = divs[i]
        if(div === ev.target ){
            console.log("");
        }
        else{
            var customInput = div.querySelector(".customInput")
            var inputTextValue = div.querySelector(".inputTextValue")
            if (div === ev.target.parentElement ){
                console.log("");
            }else{
                if(div.classList.contains('textInputDivBorder')){
                    div.setAttribute("style", "color:#6F95B5;")
                }else{
                    div.setAttribute("style", "color:#6F95B5;border:none")
                }
                
            }   
            if(customInput.classList.contains('notNone')){
                customInput.style.display='block'
            }
            else{
                customInput.style.display='none'
            }
            inputTextValue.style.display='block'
            div.setAttribute("data-status", "unOpen");
            }
        }
        catch{
            console.log("");
        }
    }
    var selectDiv=document.getElementsByClassName('selectDiv')
    for(var a=0;a<= selectDiv.length;a++){
        try{   
        var sDiv = selectDiv[a]
        var select = sDiv.querySelector(".selectInput")
        var option = sDiv.querySelector(".option")
        if(select === ev.target ){
            console.log("");
        }
        else{
            if(select.classList.contains('notBorder') ){
                select.setAttribute("style", "border:none;border-bottom-right-radius: px;border-bottom-left-radius: 15px;")        
            }
            else{
                select.setAttribute("style", "border-bottom: 1px solid #6AAA69;border-bottom-right-radius: px;border-bottom-left-radius: 15px;")
            }
            option.setAttribute("style", "display: none;")
            sDiv.setAttribute("style", "position: relative;")
            sDiv.setAttribute("data-status", "unOpen");
            document.getElementById("blur").style.display = "none";
            if (document.querySelectorAll('[data-status="open"').length > 0 && document.querySelectorAll('[data-status="open"')[0].classList.contains('selectDiv')){
                document.getElementById("blur").style.display = "block";    
            }
            }
        }
        catch{
            console.log("");
        }   

    }
}




setTimeout(() => {
    var customInput2 = document.getElementsByClassName("customInput2")
    console.log(customInput2.length)
    for(var i = 0; i < customInput2.length; i++){
        customInput2[i].addEventListener("click",function(){
            this.parentElement.setAttribute("style", "color:  #6AAA69;border:solid 1px #6AAA69 ;")
            console.log(this.parentElement)
        });
    }
  }, "1000")


var customInputa =  function customInput(el){
    console.log('=================')
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
 }

 var openSelect =  function openSelect2(el){
     var selectDiv = el.currentTarget
     var select = selectDiv.querySelector(".selectInput")
     var option = selectDiv.querySelector(".option")
     // var option = document.getElementById(`option${n}`)
     // var selectDiv = document.getElementById(`selectDiv${n}`)
     if(selectDiv.getAttribute('data-status') === 'unOpen'){
         select.setAttribute("style", "border-bottom: none;border-bottom-right-radius: 0;border-bottom-left-radius: 0;")
         option.setAttribute("style", "display: block;position: absolute;")
         selectDiv.setAttribute("style", "position: relative;z-index: 21;")
         selectDiv.setAttribute("data-status", "open");
         document.getElementById("blur").style.display = "block";
     }
     else{
         if(select.classList.contains('notBorder') ){
             select.setAttribute("style", "border:none;border-bottom-right-radius: px;border-bottom-left-radius: 15px;")
         }
         else{
             select.setAttribute("style", "border-bottom: 1px solid #6AAA69;border-bottom-right-radius: px;border-bottom-left-radius: 15px;")
         }
         option.setAttribute("style", "display: none;")
         selectDiv.setAttribute("style", "position: relative;")
         selectDiv.setAttribute("data-status", "unOpen");
         document.getElementById("blur").style.display = "none";
     }
     console.log(selectDiv.getAttribute('data-status'))
 }

 
 export default {customInputa,openSelect}
