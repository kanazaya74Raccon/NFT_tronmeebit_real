import Vue from 'vue'
import  Router  from 'vue-router'
import Home from '../views/Home.vue'
import Gallery from '../views/Gallery.vue'
import Marketplace from '../views/Marketplace.vue'
import Mymint from '../views/Mymint.vue'
import Profile from '../views/Profile.vue'
import GalleryDetail from '../views/GalleryDetail'

Vue.use(Router)

export default new Router({
    props: ['index'],
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/list/all',
            name: 'Gallery',
            component: Gallery
        },
        {
            path: '/marketplace',
            name: 'Marketplace',
            component: Marketplace
        },
        {
            path: '/mymint',
            name: 'Mymint',
            component: Mymint
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile
        },
        {
            path: '/details/:index',
            name: 'GalleryDetail',
            component: GalleryDetail
        },
    ]
})