import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dave's Dash",
  description: "Dave's Homelab Dashboard",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Topics', link: '/topics' },
      { text: 'Computers', link: '/computers' }
    ],

    sidebar: [
      {
        text: 'Servers',
        items: [
          { text: 'Vortex Server', link: '/computers/vortex_server' },
          { text: 'Dell Optiplex', link: '/computers/dell_optiplex' },
          { text: 'Helix Server', link: '/computers/helix_server' },
          { text: 'Spiral Server', link: '/computers/spiral_server' }
        ]
      },
      {
        text: 'Laptops',
        items: [
          { text: 'Macbook Pro', link: '/computers/macbook_pro' },
          { text: 'HP Laptop', link: '/computers/hp_laptop' },
          { text: 'Dell Laptop', link: '/computers/dell_laptop' }
        ]
      },
      {
        text: 'Desktops',
        items: [
          { text: 'iMac Small', link: '/computers/imac_small' },
          { text: 'iMac Big', link: '/computers/imac_big' }
        ]
      },
      {
        text: 'Topics',
        items: [
          { text: 'Tailscale', link: '/topics/tailscale' },
          { text: 'Syncthing', link: '/topics/syncthing' },
          { text: 'Smart Home', link: '/topics/smarthome' },
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
