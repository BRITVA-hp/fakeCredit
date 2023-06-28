<template>
  <section class="section overflow-hidden pt-10 sm:py-10 sm:px-5 min-h-screen m-auto bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-600 flex items-stretch">

    <transition>
      <main-app @loading="loading" v-if="mainApp" />
    </transition>

    <transition>
      <loading-app @loadingAppFalse="loadingAppFalse" @lastAppTrue="lastAppTrue" v-if="loadingApp" />
    </transition>

    <transition>
      <last-app :client="client" v-if="lastApp" @lastAppFalse="lastAppFalse(), mainAppTrue()" @apply="apply()" />
    </transition>

  </section>

  <div v-if="loader" class="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity z-50">
    <span class="loading__loader loading__loader--main"></span>
  </div>
</template>

<script>
import mainApp from './components/Main.vue'
import loadingApp from './components/Loading'
import lastApp from './components/Last'
import { useToast } from "vue-toastification";

export default {
  name: 'App',
  components: {
    mainApp,
    loadingApp,
    lastApp
  },
  setup() {
    const toast = useToast();
    return { toast }
  },
  data() {
    return {
      client: {
        name: 'Иванов Иван Иванович',
        sum: 1000000,
        delay: 0
      },
      loader: false,
      mainApp: false,
      loadingApp: false,
      lastApp: true,
    }
  },
  methods: {
    apply() {
      this.loader = true
      const timeout = setTimeout(()=> {
        this.loader = false
        this.lastAppFalse()
        this.mainAppTrue()
        this.toast.success("Заявка успешно отправлена", {position: 'bottom-right'});
        clearTimeout(timeout)
      }, 5000)
    },
    loading(name, sum, delay) {
      this.mainAppFalse()
      this.loadingAppTrue()
      this.client.name = name
      this.client.sum = +sum.replace(/\D/g, '')
      this.client.delay = delay
    },
    mainAppTrue() {
      this.mainApp = true
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
