import EmtpyView from '@/apps/certificate/presentation/views/EmtpyView.vue'
import VerifyCertificateView from '@/apps/certificate/presentation/views/VerifyCertificateView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
	{
		path: "/certificate/verify",
		name: 'verify-certificate',
		component: VerifyCertificateView
	},

	{
		path: "/empty/",
		name: "empty",
		component: EmtpyView
	}

  ],
})

export default router
