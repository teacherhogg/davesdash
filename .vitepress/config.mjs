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
      { text: 'Computers', link: '/computers' },
      { text: 'Location', link: 'http://100.109.90.65:8090/login' },
      { text: 'Slideshow', link: 'http://100.73.51.56:3283/?weather=rotate' }
    ],

    sidebar: [
      {
        text: 'Servers',
        items: [
          { text: 'Vortex Server', link: '/computers/vortex_server' },
          { text: 'Dell Optiplex', link: '/computers/dell_optiplex' },
          { text: 'Helix Server', link: '/computers/helix_server' },
          { text: 'Twist Server', link: '/computers/twist_server' },
          { text: 'Spiral Server', link: '/computers/spiral_server' }
        ]
      },
      {
        text: 'Laptops',
        items: [
          { text: 'Macbook Pro', link: '/computers/macbook_pro' },
          { text: 'HP Laptop', link: '/computers/hp_laptop' },
          { text: 'Dell Laptop', link: '/computers/dell_laptop' },
          { text: 'Cabin Laptop', link: '/computers/cabin_laptop' }
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
          { text: 'Photos', link: '/topics/photos' },
          { text: 'Mira Vaults', link: '/topics/miravaults' },
          { text: 'Tailscale', link: '/topics/tailscale' },
          { text: 'Syncthing', link: '/topics/syncthing' },
          { text: 'Smart Home', link: '/topics/smarthome' },
          { text: 'Network Admin', link: '/topics/network_admin' },
          { text: 'POJO', link: '/topics/pojo' },
          { text: 'Web Services', link: '/topics/web_services' },
          { text: 'Finances', link: '/topics/finances' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/teacherhogg/davesdash' }
    ]
  }
})
