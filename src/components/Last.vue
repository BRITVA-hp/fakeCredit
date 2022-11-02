<template>
  <div class="container px-3 sm:px-6 sm:py-4 lg:py-12 rounded-xl sm:shadow-md mx-auto sm:bg-gray-50 relative">
    <h3 class="text-white sm:text-slate-600 px-2 sm:p-0 font-bold text-xl lg:text-2xl mb-4 lg:mb-8 text-center">КАЗАНСКОЕ БЮРО <br> ФИНАНСОВЫХ РЕШЕНИЙ</h3>
    <div class="grid grid-cols-3 lg:gap-6 gap-3 items-start mb-8 lg:mb-12">

      <div class="col-span-3 lg:col-span-1 text-center lg:text-left">
        <p class="text-white sm:text-slate-600 font-bold text-md lg:text-xl">Ваш скоринговый балл:</p>
        <p class="text-red-500 text-xl lg:text-2xl font-bold">{{ score }}</p>
      </div>

      <div class="col-span-3 lg:col-span-1 text-center">
        <p class="text-white sm:text-slate-600 font-bold text-md lg:text-xl">Запрашиваемая сумма:</p>
        <p class="text-red-500 text-xl lg:text-2xl font-bold">{{ prettify(sum) }} ₽</p>
      </div>

      <div class="col-span-3 lg:col-span-1 text-center lg:text-right">
        <p class="text-white sm:text-slate-600 font-bold text-md lg:text-xl">Заявка действительна в течении:</p>
        <p class="text-red-500 text-xl lg:text-2xl font-bold">{{ time }}</p>
      </div>
    </div>

    <div class="grid grid-cols-12 lg:gap-6 gap-3 items-stretch">

      <div
        v-for="(card, cardIndex) in banksFinals"
        :key="cardIndex"
        class="last__card  col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-3 cursor-pointer relative shadow-md rounded-xl overflow-hidden">

        <div
          :class="card.agree ? 'text-green-500' : 'text-orange-500 last__card--inAgree'"
          class="absolute text-sm font-bold top-1 right-1/2 translate-x-1/2 z-20">{{ card.agree ? 'ОДОБРЕНО' : 'ОТКАЗ' }}</div>

        <div
          :class="card.agree ? '' : 'last__card--inactive'"
          class="bg-white flex flex-col justify-between w-full h-full p-4 relative z-10">

          <div class="flex justify-between">
            <img :src="card.logo" :alt="card.name">

            <p class="text-right text-sm font-bold">Cтавка:<br><span class="text-blue-500 text-lg">{{ card.agree ? '13%' : '-' }}</span></p>
          </div>

          <div class="flex justify-between items-center font-bold">
            <p class="text-sm">Одобренная сумма:</p>
            <p class="text-red-500 text-lg">{{ card.agree ? prettify(card.sum) + ' ₽' : '-' }}</p>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
// import timer from '../assets/js/timer'

export default {
  name: "LastApp",
  props: {
    sum: {
      required: true
    },
  },
  data() {
    return {
      totalTime: 5400,
      time: '',
      score: '',
      couplesIndex: '',
      banksFinals: [],
      couples: [
        {
          bank1: 'loko',
          bank2: 'otp'
        },
        {
          bank1: 'ubrir',
          bank2: 'unicredit'
        },
        {
          bank1: 'renessans',
          bank2: 'psb'
        }
      ],
      banks: [
        {
          name: 'loko',
          logo: '/img/banks/loko.png'
        },
        {
          name: 'otp',
          logo: '/img/banks/otp.png'
        },
        {
          name: 'ubrir',
          logo: '/img/banks/ubrir.png'
        },
        {
          name: 'unicredit',
          logo: '/img/banks/unicredit.png'
        },
        {
          name: 'renessans',
          logo: '/img/banks/renessans.png'
        },
        {
          name: 'psb',
          logo: '/img/banks/psb.png'
        },
        {
          name: 'rosselhoz',
          logo: '/img/banks/rosselhoz.png'
        },
        {
          name: 'rajffajzen',
          logo: '/img/banks/rajffajzen.png'
        },
        {
          name: 'alfa',
          logo: '/img/banks/alfa.png'
        },
        {
          name: 'rosgosstrah',
          logo: '/img/banks/rosgosstrah.png'
        },
        {
          name: 'smp',
          logo: '/img/banks/smp.png'
        },
        {
          name: 'open',
          logo: '/img/banks/open.png'
        },
        {
          name: 'vtb',
          logo: '/img/banks/vtb.png'
        },
      ]
    }
  },
  methods: {
    prettify(num) {
      const n = num.toString();
      return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
    }
  },
  created() {
    this.score = Math.round(Math.random() * (690 - 650) + 650)
    this.couplesIndex = Math.round(Math.random() * (2 - 0) + 0)
    const addPercent = Math.round(Math.random() * (35 -25) + 25)
    this.banks.forEach(el => {
      if (el.name === this.couples[this.couplesIndex].bank1) {
        this.banksFinals.unshift(el)
        this.banksFinals[0].agree = true
        this.banksFinals[0].sum = this.sum
      } else
      if(el.name === this.couples[this.couplesIndex].bank2) {
        this.banksFinals.unshift(el)
        this.banksFinals[0].agree = true
        const num = Math.round(this.sum + ((this.sum * addPercent)/100))
        this.banksFinals[0].sum =  num - (num % 1000)
      }
      else {
        this.banksFinals.push(el)
      }
    })
  },
  mounted() {
    function addZero(num) {
      if(num < 10) {
        return `0${num}`
      } else {
        return num
      }
    }

    const timer = setInterval(() => {
      const seconds = this.totalTime%60 // Получаем секунды
      const minutes = this.totalTime/60%60 // Получаем минуты
      const hour = this.totalTime/60/60%60 // Получаем часы
      if (this.totalTime <= 0) {
        clearInterval(timer)
        this.time = '00 : 00 : 00'
        alert("Время закончилось")
      } else {
        this.time = `${addZero(Math.trunc(hour))} : ${addZero(Math.trunc(minutes))} : ${addZero(seconds)}`
      }
      --this.totalTime
    }, 1000)
  }
}
</script>

<style scoped>

</style>