<template>

        <div class="index-empty" style="">
          <img id="emptyImage" src="../assets/backRapor.png" alt="">
          <h6 id="emptyText">No any Reports yet</h6>
        </div>

  </template>
  
<script>
  

  
  export default {
    name: 'IndexPage',
    components: {

    }
  }
  </script>
  
  <style>
  .index{
    background-color:#EEEEEE ;
    
  }
  .index-empty{
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
  #emptyImage{
    width: 132.01px;
  }
  #emptyText{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    /* identical to box height */

    text-align: center;
    text-transform: uppercase;

    color: #6F95B5;
  }
  @media only screen and (max-width: 992px){
    .index-empty{
      width: 100%;
      height:100vh
    }
    
    .NavContent{
      flex-direction: column-reverse;
      position: relative;
    }
  }
  
  </style>