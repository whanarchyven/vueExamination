<template>
  <div class="card">
    <img :src="this.developer.image">
    <div class="infoBlock">
      <h2>{{developer.title}}</h2>
      <h3>{{developer.text}}</h3>
    </div>
    <MyButton @click="goToSocialNetwork(developer.socialHref)" style="width: 80%">Ссылка на вк</MyButton>

  </div>
</template>

<script>
import MyButton from "@/components/UI/MyButton";

export default {
  name: "Card",
  components:{
    MyButton
  },
  data() {
    return {

    };
  },
  props:{
    developer:{
      image:{
        type:String,
        required:false,
      },
      title:{
        type:String,
        required: true,
      },
      text:{
        type:String,
        required:false,
      },
      socialHref:{
        type:String,
        required:false,
      }
    },
  },

  methods:{

    goToSocialNetwork(href){
      window.location.href=href;
    }
  }
}
</script>

<style scoped>
.card{
  border: 2px solid green;
  border-radius: 10px;
  padding: 15px;
  text-align: center;
  align-content: center;
  flex: 0 0 23%;
  margin-right: 1%;
  margin-left: 1%;
}

img{
  width: 70%;
  border-radius: 100%;
  border: 2px solid green;
}
.infoBlock{

  width: 70%;
  margin: auto;
}
</style>