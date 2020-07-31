module.exports = [
  '@vuepress/active-header-links',
  'demo-container',
  [
    '@vuepress/pwa',
    {
      serviceWorker: true,
      updatePopup: true
    }
  ],
  [
    "vuepress-plugin-auto-sidebar",
    {
      sidebar: true,
      nav: true,
      sidebarDeth: 3,
      collapsable: true
    }
  ]
]