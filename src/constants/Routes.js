export default [

    { path: '/', component: null, exact: true },

    { path: '/login', component: null },

    { path: '/register', component: null },
    { path: '/register/verify', component: null },

    { path: '/account', component: null },

    { path: '/account/password', component: null },
    { path: '/account/password/verify', component: null },

    { path: '/account/password', component: null },
    { path: '/account/password/verify', component: null },

    { path: '/account/tokens', component: null },

    // content

    { path: '/content', component: null },

    { path: '/content/:generic', component: null },
    { path: '/content/:generic/:id', component: null },

    { path: '/content/attributes', component: null, exact: true },
    { path: '/content/attributes/:id', component: null, exact: true },

    { path: '/content/skills', component: null, exact: true },
    { path: '/content/skills/:id', component: null, exact: true },

    // 404

    { component: null },
];
