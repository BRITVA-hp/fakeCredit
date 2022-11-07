<template>
  <div class="container sm:px-4 sm:py-12 rounded-xl sm:shadow-md mx-auto sm:bg-gray-50 relative">

    <h2 class="text-white sm:text-slate-600 px-2 sm:p-0 font-bold text-xl lg:text-2xl">Выполняется запрос.</h2>
    <h3 class="text-white sm:text-slate-600 px-2 sm:p-0 mb-4 lg:mb-6 font-bold text-md lg:text-xl">Ожидайте решения банков.</h3>

    <ul ref="ul" class="text-green-300 sm:text-green-500 relative">
      <li
        ref="li"
        v-for="(li, liIndex) in itemsRender"
        :key="liIndex"
        :class="{ 'loading__li--process' : liIndex + 1 === counter }"
        class="loading__li--end loading__li"
      >{{ li }}</li>
    </ul>

    <span class="loading__loader"></span>
    <robot-app
      :class="{ 'robot--loading--end' : this.counter > this.items.length }"
      class="robot robot--loading z-40"
    ></robot-app>
  </div>
</template>

<script>
import RobotApp from "@/components/Robot";

export default {
  name: "LoadingApp",
  components: {
    RobotApp
  },
  data() {
    return {
      jump: false,
      delay: 54000,
      items: [
        'Обработка данных',
        'Отправка данных в банки партнеры',
        'Проверка наличия просрочек',
        'Государственные задолженности',
        'Получение ответа от банков'
      ],
      itemsRender: [],
      counter: 1
    }
  },
  mounted() {
    const val = this.delay/this.items.length
    this.itemsRender.push(this.items[0])

    const timerId = setInterval(() => {
      if (this.counter === this.items.length) {
        clearInterval(timerId)
        this.counter++
        setInterval(() => {
          this.$emit('loadingAppFalse')
          this.$emit('lastAppTrue')
        }, 2000)
        return
      }
      this.itemsRender.push(this.items[this.counter])
      this.counter++
    }, val)
  }
}
</script>

<style scoped>

</style>