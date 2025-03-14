import { createRouter, createWebHistory } from 'vue-router'
import ParticipantListView from '@/views/ParticipantListView.vue'
import ParticipantDetailView from '@/views/participant/DetailView.vue'
import ParicipantEditView from '@/views/participant/EditView.vue'
import ParticipantLayoutView from '@/views/participant/LayoutView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import NetworkErrorView from '@/views/NetworkErrorView.vue'
import nProgress from 'nprogress'
import ParticipantService from '@/services/ParticipantService'
import { useParticipantStore } from '@/stores/participant'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'participant-list-view',
      component: ParticipantListView,
      props: (route) => ({
        page: parseInt(route.query.page as string) || 1,
      }),
    },
    {
      path: '/participant/:id',
      name: 'event-layout-view',
      component: ParticipantLayoutView,
      props: true,
      beforeEnter: (to) => {
        const id = parseInt(to.params.id as string)
        const participantStore = useParticipantStore()
        return ParticipantService
          .getParticipant(id)
          .then((response) => {
            participantStore.setParticipant(response.data)
          })
          .catch((error) => {
            if (error.response && error.response.status === 404) {
              return {
                name: '404-resource-view',
                params: { resource: 'participant' },
              }
            }
            return { name: 'network-error-view' }
          })
      },
      children: [
        {
          path: '',
          name: 'participant-detail-view',
          component: ParticipantDetailView,
          props: true,
        },
        {
          path: 'edit',
          name: 'participant-edit-view',
          component: ParicipantEditView,
          props: true,
        }
      ],
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/network-error',
      name: 'network-error-view',
      component: NetworkErrorView,
    },
    {
      path:'/404/:resource',
      name: '404-resource-view',
      component: NotFoundView,
      props: true,
    },
    {
      path:'/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach(() => {
  nProgress.start()
})

router.afterEach(() => {
  nProgress.done()
})
export default router
