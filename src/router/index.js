import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: () => import("@/components/Banner")
    },
    {
        path: "/about",
        name: "AboutPage",
        component: () => import("@/components/About")
    },
    {
        path: "/services",
        name: "ServicePage",
        component: () => import("@/components/Services")
    },
    {
        path: "/references",
        name: "ReferencePage",
        component: () => import("@/components/Referances")
    },
    {
        path: "/Contact",
        name: "ContactPage",
        component: () => import("@/components/Contact")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;