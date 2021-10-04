import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { 
        path: '/',
        redirect: '/pokemon'
    },

    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import(/* webpackChunkName: "PokemonLayout" */ '@/modules/pokemon/layouts/PokemonLayout'),  
        children: [
            { 
                path: 'home',
                name: 'pokemon-home',
                component: () => import(
                    /* webpackChunkName: "ListPage" */
                    '@/modules/pokemon/pages/ListPage'
                ) 
            },
            { 
                path: 'about',
                name: 'pokemon-about',
                component: () => import(
                    /* webpackChunkname: "AboutPage" */ 
                    '@/modules/pokemon/pages/AboutPage'
                )
            },
            { 
                path: 'pokemonid/:id',
                name: 'pokemon-id',
                component: () => import(
                    /* webpackChunkname: "PokemonPage" */ 
                    '@/modules/pokemon/pages/PokemonPage'
                ),
                props: ( route ) => {
                    const id = Number( route.params.id )
                    return isNaN( id ) ? { id: 1 } : { id }
                }
            },
            { 
                path: '',
                redirect: { name: 'pokemon-about' }
            }
        ]
    },

    // DBZ Layout
    { 
        path: '/dbz',
        name: 'dbz',
        component: () => import(/* webpackChunkName: "DbzLayout" */ '@/modules/dbz/layouts/DragonBallLayout'),
        children: [
            {   
                path: 'chracters',
                name: 'dbz-characters',
                component: () => import(
                    /* webpackChunkName: "CharactersPage" */
                    '@/modules/dbz/pages/Characters'
                )
            },
            { 
                path: 'about',
                name: 'dbz-about',
                component: () => import(
                    /* webpackChunkName: "AboutPage" */
                    '@/modules/dbz/pages/About'
                )
            },
            {
                path: '',
                redirect: { name: 'dbz-characters' }
            }
        ]
    },

    { 
        path: '/:pathMatch(.*)*',
        component: () => import(
            /* webpackChunkname: "NotFoundPage" */
            '@/modules/shared/pages/NoPageFound'
        )
    },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

// Guard Global - Sync
router.beforeEach( ( to, from, next ) => {
    const random = Math.random() * 100
    if ( random > 50 ) {
        console.log('authenticated');
        next()
    } else {
        console.log(random, 'blocked for beforeEach Guard');
        next({ name: 'pokemon-home' })
    }
})

export default router