
import HomePage from '../views/HomePage.vue'
import PokedexPage from '../views/PokedexPage.vue'
import PokemonPage from '../views/PokemonPage.vue'

export const routes = [
    {
        path: '/',
        component: HomePage,

    },
    {
        path: '/pokedex',
        component: PokedexPage
    },
    {
        path:'/pokedex/:id',
        component: PokemonPage
    }
];

