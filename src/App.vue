<template>
  <section class="section overflow-hidden pt-10 sm:py-10 sm:px-5 min-h-screen m-auto bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-600 flex items-stretch">

    <main-app @loadingAppTrue="loadingAppTrue" @mainAppFalse="mainAppFalse" v-if="mainApp" />

    <transition>
      <loading-app v-if="loadingApp" />
    </transition>

  </section>
</template>

<script>
import mainApp from './components/Main.vue'
import loadingApp from './components/Loading'

export default {
  name: 'App',
  components: {
    mainApp,
    loadingApp
  },
  data() {
    return {
      mainApp: false,
      loadingApp: true,
      lastApp: true
    }
  },
  methods: {
    mainAppFalse() {
      this.mainApp = false
    },
    loadingAppTrue() {
      this.loadingApp = true
    },
    loadingAppFalse() {
      this.loadingApp = false
    },
    lastAppTrue() {
      this.lastApp = true
    },
    lastAppFalse() {
      this.lastApp = false
    }
  }
}
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
