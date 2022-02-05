<template>
  <div>
    <h1>О нас</h1>
    <h2 v-html="text"></h2>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "DromAbout",
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
        const response = await axios.get('https://demo-api.vsdev.space/api/brom/about_page');
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