import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import EmployeeList from './views/employee/EmployeeList.vue'
import CustomerList from './views/customer/CustomerList.vue'
const misaRouters = [
    { path: '/employee', component: EmployeeList },
    { path: '/customer', component: CustomerList },
]
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes: misaRouters, // short for `routes: routes`
})
createApp(App).use(router).mount('#app')