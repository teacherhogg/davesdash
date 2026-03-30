import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dave's Dash",
  description: "Dave's Homelab Dashboard",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Computers',
        items: [
          { text: 'Vortex Server', link: '/computers/vortex_server' },
          { text: 'Dell Optiplex', link: '/computers/dell_optiplex' },
          { text: 'Helix Server', link: '/computers/helix_server' },
          { text: 'Spiral Server', link: '/computers/spiral_server' }
        ]
      },
      {
        text: 'Topics',
        items: [
          { text: 'Tailscale', link: '/topics/tailscale' },
          { text: 'Network Admin', link: '/topics/network_admin' },
          { text: 'POJO', link: '/topics/pojo' },
          { text: 'Web Services', link: '/topics/web_services' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/teacherhogg/davesdash' }
    ]
  }
})
