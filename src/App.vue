<template>
  <section class="section overflow-hidden pt-10 sm:py-10 sm:px-5 min-h-screen m-auto bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-600 flex items-stretch">

    <main-app @loading="loading" v-if="mainApp" />

    <transition>
      <loading-app @loadingAppFalse="loadingAppFalse" @lastAppTrue="lastAppTrue" v-if="loadingApp" />
    </transition>

    <transition>
      <last-app :sum="sum" v-if="lastApp"></last-app>
    </transition>

  </section>
</template>

<script>
import mainApp from './components/Main.vue'
import loadingApp from './components/Loading'
import lastApp from './components/Last'

export default {
  name: 'App',
  components: {
    mainApp,
    loadingApp,
    lastApp
  },
  data() {
    return {
      sum: 100000,
      mainApp: false,
      loadingApp: false,
      lastApp: true
    }
  },
  methods: {
    loading(sum) {
      this.mainAppFalse()
      this.loadingAppTrue()
      this.sum = sum
    },
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
.v-enter-active {
  transition: opacity 0.5s ease;
}

.v-enter-from {
  opacity: 0;
}
</style>
