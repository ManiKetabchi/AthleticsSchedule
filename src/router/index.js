import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: () => import("../views/Home.vue") },
        { path: "/register", component: () => import("../views/Register.vue") },
        { path: "/sign-in", component: () => import("../views/SignIn.vue") },

        { 
            path: "/feed", 
            component: () => import("../views/Feed.vue"),
            meta: {
                requiresAuth: true,
            }
        },
    ]
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (getAuth().currentUser) {
            next();
        } else {
            alert("You dont have access!");
            next("/");
        }
    } else {
        next();
    }
});



export default router;