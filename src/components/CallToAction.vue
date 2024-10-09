<template>
    <div class="container">
        <div class="text">
            <div class="title">Promotion</div>
            <div class="content">Profitez de -10% sur votre première réservation !</div>
        </div>
        <div class="imgCtn">
            <div class="image"></div>
        </div>
        <div class="text">
        <div class="title">nouvelles recettes</div>
        <div class="content">Découvrez nos nouvelles recettes délicieuses!</div>
       
    </div>
    </div>
</template>

<style scoped>
.imgCtn {
    display: flex;
    justify-content: center;
}
.image {
      
       background-image: url("../assets/table.jpg");
       background-size: cover;
       padding-top: 20vh;
       height : 10vh;
       width: 90%;
       display: flex;
       align-items: center;
       justify-content: center;
       justify-content: space-between;
       flex-direction: column; 
    }
    .text {
        text-align: center;
        padding-top: 20px;
        color: #6C9E41;
    }
    .title {
        padding: 10px 18px;
        color: #6C9E41;
        margin: 5px 0 0 0;
        font-family: 'Fredoka', sans-serif;
        font-size: 25px;
    }
    .content {
        padding: 7px 90px;
        color: #6C9E41;
        font-family: 'Rag 123', sans-serif;     
        margin: 5px 0 0 0;
        font-family: 'Arial', sans-serif;
        font-size: 15px;
    }
    
</style>






