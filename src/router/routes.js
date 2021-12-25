const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
            path: '',
            component: () =>
                import ('pages/Index.vue')
        }]
    },

    {
        path: '/p',
        component: () =>
            import ('layouts/SitesLayout.vue'),
        children: [{
                path: 'aboutme',
                component: () =>
                    import ('pages/About.vue')
            },
            {
                path: 'imprint',
                component: () =>
                    import ('pages/Imprint.vue'),
            },
        ]
    },


    // Always leave this as last one,
    // but you can also remove it
    {
        path: '*',
        component: () =>
            import ('pages/Error404.vue')
    }
]

export default routes