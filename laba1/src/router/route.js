// import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router"
// import PostPage from "@/pages/PostPage";
//import About from "@/pages/About";
// import AlonePostPage from "@/pages/AlonePostPage";
import PostPageWithStorage from "@/pages/PostPageWithStorage";
import DromMain from "../pages/Exam/DromMain";
import DromAbout from "../pages/Exam/DromAbout";

const routes = [
  {
    path: "/",
    component: DromMain,
  },
  {
    path: "/about",
    component: DromAbout,
  },
  {
    path: "/store",
    component: PostPageWithStorage,
  },
];

const router = createRouter({
  routes,
  history:createWebHistory(process.env.BASE_URL)
})


export default router;
