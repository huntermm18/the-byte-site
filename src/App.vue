<template>
  <AppNavigation />
  <router-view />
  <AppFooterVue />
</template>

<script>
import AppNavigation from './components/AppNavigation.vue'
import AppFooterVue from './components/AppFooter.vue'
export default {
  components: {
    AppNavigation,
    AppFooterVue
  }
}

</script>

<style> 


</style>

