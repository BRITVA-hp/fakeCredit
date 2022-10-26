<template>
  <HelloWorld/>
</template>

<script>
import HelloWorld from './components/Main.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
