import Vue from 'vue'
import Router from 'vue-router'
import ProductList from '@/components/ProductList'
import ProductDetailView from '@/views/ProductDetailView'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ProductList',
      component: ProductList
    },
	{
		path:'/detail',
		name: 'ProductDetailView',
		component: ProductDetailView
	}
  ]
})
