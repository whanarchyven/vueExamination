import {createStore} from "vuex";
import axios from "axios";
export default createStore({
    state: {
        posts: [],
    },
    getters: {},
    mutations: {
        setPosts(state,postsArr) {
            this.state.posts = postsArr;
        }
    },
    actions: {
        async fetchPosts({commit}) {
            try {
                const response = await axios.get('http://demo-api.vsdev.space/api/articles');
                commit("setPosts",response.data);
            } catch (error) {
                alert('ERROR');
            }

        },
    },
    modules: {},
})