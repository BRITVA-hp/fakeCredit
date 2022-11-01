<template>
  <div class="container sm:px-4 sm:py-12 rounded-xl sm:shadow-md mx-auto sm:bg-gray-50 relative">

    <h2 class="text-white sm:text-slate-600 px-2 sm:p-0 font-bold text-xl lg:text-2xl">Выполняется запрос.</h2>
    <h3 class="text-white sm:text-slate-600 px-2 sm:p-0 mb-4 lg:mb-6 font-bold text-md lg:text-xl">Ожидайте решения банков.</h3>

    <ul ref="ul" class="text-green-300 sm:text-green-500 relative">
      <div
        :style="'top: ' + top + 'px'"
        :class="{ 'loading__robot--jump' : jump && this.counter <= this.items.length, 'loading__robot--end' : counter > items.length }"
        class="loading__robot"></div>

      <li
        ref="li"
        v-for="(li, liIndex) in itemsRender"
        :key="liIndex"
        :class="{ 'loading__li--process' : liIndex + 1 === counter }"
        class="loading__li--end loading__li"
      ><span class="loading__li__window">
        <span class="loading__li__field">
          <span class="loading__li__card loading__li__card--pls">Загрузка</span><span class="loading__li__card">{{ li }}</span>
        </span>
      </span></li>
    </ul>

    <span class="loading__loader"></span>

  </div>
</template>

<script>
export default {
  name: "LoadingApp",
  watch: {
    counter() {
      this.jump = true
      const timeoutId = setTimeout(() => {
        this.jump = false
        clearTimeout(timeoutId)
      }, 1800)
    }
  },
  data() {
    return {
      jump: false,
      top: 0,
      delay: 20000,
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
      }
      if (this.counter < this.items.length) {
        this.itemsRender.push(this.items[this.counter])
      }
      if (this.counter < this.items.length) {
        this.top = this.counter * 24
      } else {
        this.top = document.documentElement.scrollHeight
      }
      this.counter++
    }, val)
  }
}
</script>

<style scoped>

</style>