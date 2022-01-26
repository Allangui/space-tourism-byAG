import * as VueRouter from 'vue-router'

import HomePage from '../pages/home.vue'

const DestinationPage = () => import ('../pages/destination.vue')
const CrewPage = () => import ('../pages/crew.vue')
const TechnologyPage = () => import ('../pages/technology.vue')

const DestinationMoon = () => import ('../components/destinationMoon.vue')
const DestinationMars = () => import ('../components/destinationMars.vue')
const DestinationEuropa = () => import ('../components/destinationEuropa.vue')
const DestinationTitan = () => import ('../components/destinationTitan.vue')

const CrewDouglas = () => import ('../components/crewDouglas.vue')
const CrewMark = () => import ('../components/crewMark.vue')
const CrewVictor = () => import ('../components/crewVictor.vue')
const CrewAnousheh = () => import ('../components/crewAnousheh.vue')

const TechnologyLaunch = () => import ('../components/technologyLaunch.vue')
const TechnologySpaceport = () => import ('../components/technologySpaceport.vue')
const TechnologyCapsule = () => import ('../components/technologyCapsule.vue')


const NotFoundPage = () => import ('../pages/notfound.vue')




const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes : [
        {
            path : '/home',
            alias: '/',
            name : 'Home',
            component : HomePage
        },
        {
            path : '/destination',
            name : 'Destination',
            component : DestinationPage,
            children: [
                {
                    path:'',
                    alias:'/destination/moon',
                    component:DestinationMoon
                },{
                    path:'mars',
                    component:DestinationMars
                },{
                    path:'europa',
                    component:DestinationEuropa
                },{
                    path:'titan',
                    component:DestinationTitan
                },
            ]
        },
        {
            path : '/crew',
            name : 'Crew',
            component : CrewPage,
            children : [
                {
                    path:'',
                    alias:'/crew/douglas',
                    component:CrewDouglas
                },
                {
                    path:'mark',
                    component:CrewMark
                },
                {
                    path:'victor',
                    component:CrewVictor
                },
                {
                    path:'anousheh',
                    component:CrewAnousheh
                }
            ]
        },
        {
            path : '/technology',
            name : 'Technology',
            component : TechnologyPage,
            children: [
                {
                    path:'',
                    alias:'/technology/launch',
                    component:TechnologyLaunch
                },
                {
                    path:'spaceport',
                    alias:'/technology/spaceport',
                    component:TechnologySpaceport
                },
                {
                    path:'capsule',
                    alias:'/technology/capsule',
                    component:TechnologyCapsule
                }
            ]
        },
        {
            path: '/notfound',
            name:'NotFound',
            component: NotFoundPage
        },
        {
            path:'/:pathMatch(.*)*',
            // (.*) --> le . signifie qu'on accepte toute sorte de caractères et le                                                                              * pour dire qu'on l’accepte plusieurs fois (par ex le '/')
            redirect: (to) => {
                return { name:'NotFound', params: { pathMatch : to.params.pathMatch}}
                //fonction pour retourner la valeur du mauvais chemin-> voir doc
            }
        },
        
    ]
})

router.beforeEach((to,from)=>{
    let tempPath= to.fullPath
    if( tempPath.length > 1 &&  tempPath.charAt(tempPath.length-1)=== '/'){
        console.log('BEFORE EACH TO: ', to)
        console.log('BEFORE EACH from: ', from)
        return to.fullPath= to.fullPath.substring(0, to.fullPath.length - 1)

    
    }
})

export default router