import DefaultTheme from 'vitepress/theme'
import HomeLayout from './components/HomeLayout.vue'
import CardGrid from './components/CardGrid.vue'
import CardGridEx from './components/CardGridEx.vue'
import HeroButtons from './components/HeroButtons.vue'

export default {
  extends: DefaultTheme,
  Layout: HomeLayout,        // ✅ Override default layout
  enhanceApp({ app }) {
    app.component('CardGrid', CardGrid)
    app.component('CardGridEx', CardGridEx)
    app.component('HeroButtons', HeroButtons)
  }
}
