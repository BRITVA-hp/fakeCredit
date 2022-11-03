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
          @click="activeBank(cardIndex)"
          :class="card.checked ? 'border-green-500' : 'border-transparent'"
          class="last__card border-2 col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-3 cursor-pointer relative shadow-md rounded-xl overflow-hidden">

          <div
            :class="card.agree ? 'text-green-500' : 'text-orange-500 last__card--inAgree'"
            class="absolute text-sm font-bold top-1 right-1/2 translate-x-1/2 z-20">{{ card.agree ? 'ОДОБРЕНО' : 'ОТКАЗ' }}</div>

          <div
            :class="card.agree ? '' : 'last__card--inactive'"
            class="bg-white flex flex-col justify-between w-full h-full p-4 relative z-10">

            <div class="flex justify-between">
              <img :src="card.logo" :alt="card.name">

              <p class="text-right text-sm font-bold">Cтавка:<br><span class="text-blue-500 text-lg">{{ card.agree ? card.percent + ' %' : '-' }}</span></p>
            </div>

            <div class="flex justify-between items-center font-bold">
              <p class="text-sm">Одобренная сумма:</p>
              <p class="text-red-500 text-lg">{{ card.agree ? prettify(card.sum) + ' ₽' : '-' }}</p>
            </div>
          </div>

        </div>

      </div>

      <transition name="modal">
        <div
          v-show="modal"
          class="relative z-30">
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div>
                    <div class="mb-3 flex justify-center">
                      <img :src="modalContent.img" alt="bank">
                    </div>
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 class="text-lg leading-6 font-bold mb-2">Условия:</h3>
                      <div>
                        <div class="flex justify-between flex-col sm:flex-row mb-1">
                          <p>Процентная ставка:</p>
                          <p class="font-bold text-red-500">{{ modalContent.percent + ' %' }}</p>
                        </div>
                        <div class="flex justify-between flex-col sm:flex-row">
                          <p>Одобренная сумма:</p>
                          <p class="font-bold text-red-500">{{ modalContent.sum ? prettify(modalContent.sum) : '' }} ₽</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    @click="apply"
                    type="button" class="inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm">Подать заявку</button>
                  <button
                    @click="closeModal"
                    type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Отмена</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>

</template>

<script>

export default {
  emits: ["lastAppFalse", 'apply'],
  name: "LastApp",
  props: {
    sum: {
      required: true
    },
  },
  data() {
    return {
      totalTime: 7200,
      time: '',
      score: '',
      banksFinals: [],
      modal: false,
      modalContent: {},
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
    apply() {
      this.$emit('apply')
    },
    closeModal() {
      this.modal = false
      this.modalContent.percent = {}
      this.banksFinals.forEach(bank => {
        bank.checked = false
      })
    },
    activeBank(index) {
      if(!this.banksFinals[index].agree) {
        return
      }
      this.banksFinals.forEach(bank => {
        bank.checked = false
      })
      this.banksFinals[index].checked = true
      this.modalContent.img = this.banksFinals[index].logo
      this.modalContent.percent = this.banksFinals[index].percent
      this.modalContent.sum = this.banksFinals[index].sum
      this.modal = true
    },
    prettify(num) {
      const n = num.toString();
      return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
    }
  },
  created() {

    //генерация скорингового балла
    this.score = Math.round(Math.random() * (690 - 650) + 650)

    //генерация одобренных сумм
    const addPercent = Math.round(Math.random() * (35 -25) + 25)
    const fullSum = Math.round(this.sum + ((this.sum * addPercent)/100))

    //генерация одобренных банков
    let num = Math.random() * (3 - 0) + 0
    if (Math.trunc(num) === 3) {
      num = 2
    }
    const couplesIndex = Math.trunc(num)
    this.banks.forEach(el => {
      if (el.name === this.couples[couplesIndex].bank1) {
        this.banksFinals.unshift(el)
        this.banksFinals[0].agree = true
        this.banksFinals[0].sum = this.sum

        //генерация годового процента
        if(this.sum < 1000000) {
          this.banksFinals[0].percent = (Math.random() * (16 - 12.5) + 12.5).toFixed(1)
        } else {
          this.banksFinals[0].percent = (Math.random() * (12.5 - 10.4) + 10.4).toFixed(1)
        }
      } else
      if(el.name === this.couples[couplesIndex].bank2) {
        this.banksFinals.unshift(el)
        this.banksFinals[0].agree = true
        this.banksFinals[0].sum =  fullSum - (fullSum % 1000)

        //генерация годового процента
        if(this.sum < 1000000) {
          this.banksFinals[0].percent = (Math.random() * (16 - 12.5) + 12.5).toFixed(1)
        } else {
          this.banksFinals[0].percent = (Math.random() * (12.5 - 10.4) + 10.4).toFixed(1)
        }
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

    //таймер
    const timer = setInterval(() => {
      const seconds = this.totalTime%60 // Получаем секунды
      const minutes = this.totalTime/60%60 // Получаем минуты
      const hour = this.totalTime/60/60%60 // Получаем часы
      if (this.totalTime <= 0) {
        clearInterval(timer)
        this.time = '00 : 00 : 00'
        alert("Время закончилось")
        this.$emit('lastAppFalse')
      } else {
        this.time = `${addZero(Math.trunc(hour))} : ${addZero(Math.trunc(minutes))} : ${addZero(seconds)}`
      }
      --this.totalTime
    }, 1000)
  }
}
</script>

<style scoped>
.last-enter-active {
  transition: opacity 0.5s ease;
}

.last-enter-from {
  opacity: 0;
}

/* we will explain what these classes do next! */
.modal-enter-active {
  transition: opacity 0.5s ease;
}

.modal-enter-from {
  opacity: 0;
}
</style>