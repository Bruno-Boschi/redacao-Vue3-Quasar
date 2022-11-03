const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "dashboard",
        component: () => import("pages/dashboard/DashboardPage.vue"),
      },

      //Materias
      {
        path: "/materias/postadas",
        name: "postadas",
        component: () => import("pages/materias/PostadasPage.vue"),
      },
      {
        path: "/materias/revisar",
        name: "revisar",
        component: () => import("pages/materias/RevisarPage.vue"),
      },
      {
        path: "/materias/leilao",
        name: "leilao",
        component: () => import("pages/materias/LeilaoPage.vue"),
      },
      {
        path: "/materias/categorias",
        name: "categorias",
        component: () => import("pages/materias/CategoriasPage.vue"),
      },
      {
        path: "/materias/criar-demandas",
        name: "criar-demandas",
        component: () => import("pages/materias/CriarDemandasPage.vue"),
      },
      {
        path: "/materias/dominios",
        name: "dominios",
        component: () => import("pages/materias/DominiosPage.vue"),
      },

      //FINANCEIRO
      {
        path: "/financeiro/pagamentos-pendentes",
        name: "pagamentos-pendentes",
        component: () => import("pages/financeiro/PagPendentesPage.vue"),
      },
      {
        path: "/financeiro/pagamentos-realizados",
        name: "pagamentos-realizados",
        component: () => import("pages/financeiro/PagRealizadosPage.vue"),
      },
      {
        path: "/financeiro/faturamento-dominio",
        name: "faturamento-dominio",
        component: () => import("pages/financeiro/FatDominioPage.vue"),
      },

      //SUPORTE
      {
        path: "/suporte/meus-chamados",
        name: "meus-chamados",
        component: () => import("pages/suporte/MeusChamadosPage.vue"),
      },

      //Usuarios
      {
        path: "/usuarios/redatores",
        name: "redatores",
        component: () => import("pages/usuarios/RedatoresPage.vue"),
      },
      {
        path: "/usuarios/publishers",
        name: "publishers",
        component: () => import("pages/usuarios/PublishersPage.vue"),
      },
      {
        path: "/usuarios/administradores",
        name: "administradores",
        component: () => import("pages/usuarios/AdministradoresPage.vue"),
      },

      //FAQ
      {
        path: "/faq",
        name: "faq",
        component: () => import("pages/faq/FaqPage.vue"),
      },
      {
        path: "/faq/faq-pesquisar",
        name: "faq-pesquisar",
        component: () => import("pages/faq/FaqPesquisarPage.vue"),
      },

      //VIDEOS
      {
        path: "/videos/aulas-videos",
        name: "aulas-videos",
        component: () => import("pages/videos/AulasVideosPage.vue"),
      },
      {
        path: "/videos/video-pesquisar",
        name: "videos-pesquisar",
        component: () => import("pages/videos/VideosPesquisarPage.vue"),
      },

      //AVISOS
      {
        path: "/avisos",
        name: "avisos",
        component: () => import("pages/avisos/AvisosPage.vue"),
      },
      {
        path: "/avisos/ultimos-avisos",
        name: "ultimos-avisos",
        component: () => import("src/pages/avisos/UltimosAvisosPage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
