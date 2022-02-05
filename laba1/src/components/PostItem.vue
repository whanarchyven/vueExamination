<template>
  <div class="post" style="display: flex; justify-content: space-between">
    <div style="flex:0 0 75%;display: inline-block">
      <div class="post-header" v-if="post.type=='car'" style="border: 2px solid hsl(353, 100%, 43%);padding: 20px">
        <img src="@/assets/images/car_img.png" style="display: inline-block;width: 40px">
        <h1 key="{{post.id}}" style="display: inline-block;margin-left: 10px">{{post.model}}, {{post.price}}</h1>
        <div class="descrip" style="display: block">
          <div class="descrip-left" style="display: inline-block">
            <p><strong> Тип:</strong> {{post.car_type}}</p>
            <p><strong> Объём двигателя:</strong> {{post.engine_volume}} л.</p>
            <p><strong> Мощность двигателя:</strong> {{post.engine_power}} л.с.</p>
          </div>
          <div class="descrip-right" style="display: inline-block;margin-left: 100px">
            <p><strong>Город: </strong> {{post.city}}</p>
            <p><strong>Адрес: </strong> {{post.address}}</p>
            <p><strong>Телефон: </strong> {{post.phone}}</p>
          </div>
        </div>
      </div>
      <div class="post-header" v-if="post.type=='apartment'" style="border: 2px solid blue;padding: 20px">
        <img src="@/assets/images/home_image.png" style="display: inline-block;width: 40px">
        <h1 key="{{post.id}}" style="display: inline-block;margin-left: 10px">{{post.rooms}}-х комнатная квартира, {{post.price}}</h1>
        <div class="descrip" style="display: block">
          <div class="descrip-left" style="display: inline-block;vertical-align: top">
            <p><strong> Комнат:</strong> {{post.rooms}}</p>
            <p><strong> Площадь:</strong> {{post.square}} м2</p>
          </div>
          <div class="descrip-right" style="display: inline-block;margin-left: 100px">
            <p><strong>Город: </strong> {{post.city}}</p>
            <p><strong>Адрес: </strong> {{post.address}}</p>
            <p><strong>Телефон: </strong> {{post.phone}}</p>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>


export default {
  name: "PostItem",
  components: {},
  props:{
    post:{
      type:Object,
      required:true,
    }
  },
  methods:{
    deletePost(){
      this.$emit('remove',this.post);
      //console.log(this.post);
    }
  }
}
</script>

<style scoped>
.post{
  padding: 15px;
  margin-top: 10px;
}
/*button{*/
/*  height: 75%;*/
/*  width: 100%;*/
/*  background: green;*/
/*  border: 1px solid black;*/
/*  margin: auto;*/
/*  color: white;*/
/*}*/
</style>