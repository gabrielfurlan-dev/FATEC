import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../components/Home.vue")
    },
    {
        path: "/products",
        name: "products",
        component: () => import("../components/product/Index.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;