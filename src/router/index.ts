import { createRouter, createWebHistory } from 'vue-router'
import SymptomSubmissionView from '../views/SymptomSubmissionView.vue'
import PatientView from '../views/IncomingPatientsView.vue'


const routes = [
    {
        path: '/',
        name: 'SymptomSubmissionView',
        component: SymptomSubmissionView,
    },
    {
        path: '/incoming-patients',
        name: 'IncomingPatientsView',
        component: PatientView,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
