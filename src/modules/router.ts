import { createRouter, createWebHistory } from 'vue-router';
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';

const routes = setupLayouts(generatedRoutes);
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to: any, from: any) => {
//   console.log('to', to);
// });

// router.afterEach((to: any, from: any) => {
//   console.log('to', to);
// });

export default router;
