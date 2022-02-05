import {createStore} from "vuex";
import axios from "axios";
export default createStore({
    state: {
        posts: [],
        vidgets:[],
    },
    getters: {},
    mutations: {
        setPosts(state,postsArr) {
            this.state.posts = postsArr;
        },
        setVidgets(state,vidgArr) {
            this.state.vidgets = vidgArr;
        }
    },
    actions: {
        async fetchPosts({commit}) {
            try {
                const response = await axios.get('https://demo-api.vsdev.space/api/brom/sales');
                commit("setPosts",response.data);
            } catch (error) {
                alert('ERROR');
            }

        },
        async fetchVidgets({commit}) {
            try {
                const response = await axios.get('https://demo-api.vsdev.space/api/brom/left_widget');
                commit("setVidgets",response.data);
            } catch (error) {
                alert('ERROR');
            }

        },
    },
    modules: {},
})