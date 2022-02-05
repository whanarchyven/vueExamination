<template>
  <div class="aue">
    <loading v-model:active="isPostLoading"
             :can-cancel="false"
             :is-full-page="true"
             :color="'#008000'"
             />
    <modal-window v-model:show="dialogVisible">
      <h2>Оставьте комментарий !</h2>
      <h3>Представьтесь</h3>
      <my-input v-model:model-value="new_commentary.user_name" ></my-input>
      <h3>Что думаете насчёт статьи?</h3>
      <my-input v-model:model-value="new_commentary.comment"></my-input>
      <my-button @click="this.leaveComment" >Оставить комментарий</my-button>
    </modal-window>
    <my-button @click="$router.push('/store')">←</my-button>
    <h1>{{this.id}}. {{this.$store.state.posts[this.id-1].name}}</h1>
    <h2>{{this.$store.state.posts[this.id-1].desc}}</h2>
    <my-button @click="this.dialogVisible=true">Добавить коментарий</my-button>
    <div class="commentsBlock">
      <h3> Коментарии: </h3>
      <comments-list :id="this.id"></comments-list>

    </div>

  </div>

</template>

<script>
//import axios from 'axios';
import MyButton from "@/components/UI/MyButton";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import CommentsList from "../components/CommentsList";
import ModalWindow from "../components/UI/ModalWindow";
import MyInput from "../components/UI/MyInput";
import axios from "axios"
import {mapActions} from "vuex";
export default {
  name: "AlonePostPage",
  components: {MyInput, ModalWindow, CommentsList, MyButton,Loading},
  data(){
    return{
      dialogVisible:false,
      id:this.$route.params.id,
      name:"",
      description:"",
      isPostLoading:true,
      new_commentary:{
        comment:'',
        user_name:'',
      },
    }
  },

  methods:{

    // async fetchConcretPost(){
    //   try{
    //     this.isPostLoading=true;
    //     setTimeout(async ()=>{
    //       const needUrl="https://jsonplaceholder.typicode.com/posts/"+this.id;
    //       const response = await axios.get(needUrl);
    //       this.title=response.data.title;
    //       this.body=response.data.body;
    //       this.isPostLoading=false;
    //     },600);
    //
    //   }catch (error){
    //     alert('ERROR');
    //   }
    // }
    leaveComment(){
      axios.post('http://demo-api.vsdev.space/api/articles/'+this.$route.params.id+'/comments',this.new_commentary)
      // this.new_commentary.comment='';
      // this.new_commentary.user_name='';
      this.dialogVisible=false;
    },
    ...mapActions(['fetchPosts']),
    // zagruzka(){
    //
    // },
  },
  beforeMount() {
    this.fetchPosts();
    // this.name=this.$store.state.posts[this.id-1].name;
    // this.description=this.$store.state.posts[this.id-1].desc;
    this.isPostLoading=false;

  },
  mounted() {
  },
  computed:{

  },
  watch:{

  }
}
</script>

<style scoped>
.commentsBlock>h3{
  margin-top: 40px;
}
.commentsBlock{
  margin-left: 40px;
}
.aue{
  margin-left: 40px;
}
</style>