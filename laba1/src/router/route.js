import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router"
import PostPage from "@/pages/PostPage";
import About from "@/pages/About";
import AlonePostPage from "@/pages/AlonePostPage";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/posts",
    component: PostPage,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/posts/:id",
    component: AlonePostPage,
  },
];

const router = createRouter({
  routes,
  history:createWebHistory(process.env.BASE_URL)
})


export default router;
