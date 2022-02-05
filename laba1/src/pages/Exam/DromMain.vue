<template>
  <div>
    <h1>Добро пожаловать!</h1>
    <img :src="this.image" style="width: 80%;">
    <h2 v-html="text"></h2>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DromMain",
  data() {
    return {
      image: '',
      text: '',
    }
  },
  methods: {
    async fetchPosts() {
      try {
        this.isPostLoading = true;
        const response = await axios.get('https://demo-api.vsdev.space/api/brom/home_page');
        this.image = response.data.image;
        this.text = response.data.text;
      } catch (error) {
        alert('ERROR');
      }

    },
  },
  beforeMount() {
    this.fetchPosts();
  }
}
</script>

<style scoped>

</style>