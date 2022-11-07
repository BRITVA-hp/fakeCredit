<template>
  <div class="container sm:px-4 sm:py-12 rounded-xl sm:shadow-md m-auto sm:bg-gray-50">

    <h1 class="text-white sm:text-slate-600 px-2 sm:p-0 mb-4 lg:mb-6 text-left lg:text-center font-bold text-xl lg:text-2xl">Проверка скорингового балла ЧЕРЕЗ БКИ</h1>

    <div>
      <div class="md:grid lg:grid-cols-3 md:gap-6">
        <div class="lg:col-span-1 relative">

          <robot-app class="robot robot--main relative"></robot-app>

          <div class="px-4 sm:px-0">
            <h3 class="text-sm lg:text-lg font-medium leading-6 mb-3 lg:mb-5 text-green-300 sm:text-sky-500">ТОЛЬКО ДЛЯ СЛУЖЕБНОГО   ПОЛЬЗОВАНИЯ</h3>
            <ul class="list-disc pl-6 lg:pl-8 text-green-300 sm:text-sky-500">
              <li class="effect lg:mb-2">Точность расчетов</li>
              <li class="lg:mb-2">Достоверность данных</li>
              <li class="lg:mb-2">Конфиденциальность</li>
            </ul>
          </div>
        </div>
        <div class="mt-5 lg:col-span-2 lg:mt-0">
          <form action="#" method="POST">
            <div class="overflow-hidden shadow sm:rounded-md">
              <div class="bg-white px-4 py-5 pb-10 sm:p-6 sm:pb-12">
                <div class="grid grid-cols-6 gap-6">

                  <h6 class="col-span-6 font-bold">Основные данные</h6>

                  <div class="col-span-6 sm:col-span-2 relative">
                    <label for="first-name" class="block text-sm font-medium text-gray-700">ФИО</label>
                    <input
                        v-model="name"
                        placeholder="Иванов Иван Иванович"
                        type="text"
                        name="first-name"
                        id="first-name"
                        autocomplete="given-name"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    <p v-if="v$.name.$invalid && v$.$dirty" class="absolute left-2 top-6 text-xs text-red-600">Обязательное поле</p>
                  </div>

                  <div class="col-span-6 sm:col-span-2 relative">
                    <label for="last-name" class="block text-sm font-medium text-gray-600">Дата рождения</label>
                    <input
                        v-model="DOB"
                        v-maska="'##.##.####'"
                        placeholder="дд.мм.гггг"
                        type="text"
                        name="last-name"
                        id="last-name"
                        autocomplete="family-name"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    <p v-if="v$.DOB.$invalid && v$.$dirty" class="absolute left-2 top-6 text-xs text-red-600">Обязательное поле</p>
                    <p v-else-if="v$.DOB.minLength.$invalid && v$.$dirty" class="absolute left-2 top-6 text-xs text-red-600">Неверный формат</p>
                  </div>

                  <div class="col-span-6 sm:col-span-2 relative">
                    <label for="last-name" class="block text-sm font-medium text-gray-700">Телефон</label>
                    <input
                      v-model="phone"
                      v-maska="'+7 (###) ###-####'"
                        placeholder="+7 (___) ___-____"
                        type="text"
                        name="last-name"
                        id="last-name"
                        autocomplete="family-name"
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    <p v-if="v$.phone.required.$invalid && v$.$dirty" class="absolute left-2 top-6 text-xs text-red-600">Обязательное поле</p>
                    <p v-else-if="v$.phone.minLength.$invalid && v$.$dirty" class="absolute left-2 top-6 text-xs text-red-600">Неверный формат</p>
                  </div>
                  <hr class="col-span-6 my-4">

                  <h6 class="col-span-6 font-bold">Паспортные данные</h6>

                  <div class="col-span-6 sm:col-span-2 relative">
                    <label for="first-name" class="block text-sm font-medium text-gray-700">Серия</label>
                    <input
                      v-maska="'####'"
                      v-model="series"
                      placeholder="1234"
                      type="text"
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    <p v-if="v$.series.required.$invalid && v$.$dirty" class="absolute left-2 top-6 text-xs text-red-600">Обязательное поле</p>
                    <p v-else-if="v$.series.minLength.$invalid && v$.$dirty" class="absolute left-2 top-6 text-xs text-red-600">Неверный формат</p>
                  </div>

                  <div class="col-span-6 sm:col-span-2 relative">
                    <label for="first-name" class="block text-sm font-medium text-gray-700">Номер</label>
                    <input
                      v-model="number"
                      v-maska="'######'"
                      placeholder="112233"
                      type="text"
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    <p v-if="v$.number.required.$invalid && v$.$dirty" class="absolute left-2 top-6 text-xs text-red-600">Обязательное поле</p>
                    <p v-else-if="v$.number.minLength.$invalid && v$.$dirty" class="absolute left-2 top-6 text-xs text-red-600">Неверный формат</p>
                  </div>

                  <div class="col-span-6 sm:col-span-2 relative">
                    <label for="first-name" class="block text-sm font-medium text-gray-700">Код подразделения</label>
                    <input
                      v-model="code"
                      v-maska="'###-###'"
                      placeholder="000-000"
                      type="text"
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    <p v-if="v$.code.required.$invalid && v$.$dirty" class="absolute left-2 top-6 text-xs text-red-600">Обязательное поле</p>
                    <p v-else-if="v$.code.minLength.$invalid && v$.$dirty" class="absolute left-2 top-6 text-xs text-red-600">Неверный формат</p>
                  </div>

                  <div class="col-span-6 sm:col-span-4 relative">
                    <label for="email-address" class="block text-sm font-medium text-gray-700">Кем выдан</label>
                    <input
                      v-model="organ"
                      placeholder="Укажите организацию"
                      type="text"
                      name="email-address"
                      id="email-address"
                      autocomplete="email"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    <p v-if="v$.organ.required.$invalid && v$.$dirty" class="absolute left-2 top-6 text-xs text-red-600">Обязательное поле</p>
                  </div>

                  <div class="col-span-6 sm:col-span-2 relative">
                    <label for="first-name" class="block text-sm font-medium text-gray-700">Дата выдачи</label>
                    <input
                      v-model="date"
                      v-maska="'##.##.####'"
                      placeholder="дд.мм.гггг"
                      type="text"
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    <p v-if="v$.date.required.$invalid && v$.$dirty" class="absolute left-2 top-6 text-xs text-red-600">Обязательное поле</p>
                    <p v-else-if="v$.date.minLength.$invalid && v$.$dirty" class="absolute left-2 top-6 text-xs text-red-600">Неверный формат</p>
                  </div>

                  <div class="col-span-6 sm:col-span-3 relative">
                    <label for="first-name" class="block text-sm font-medium text-gray-700">Адрес регистрации</label>
                    <input
                      v-model="address"
                      placeholder="Укажите адрес"
                      type="text"
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    <p v-if="v$.address.required.$invalid && v$.$dirty" class="absolute left-2 top-6 text-xs text-red-600">Обязательное поле</p>
                  </div>

                  <div class="col-span-6 sm:col-span-3 relative">
                    <label for="first-name" class="block text-sm font-medium text-gray-700">Адрес фактического проживания</label>
                    <input
                      v-model="addressF"
                      placeholder="Укажите адрес"
                      type="text"
                      name="first-name"
                      id="first-name"
                      autocomplete="given-name"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />

                    <div class="flex items-center mt-2">
                      <input
                        @change="matchesAddress()"
                        v-model="matches"
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
                      <label for="remember-me" class="ml-2 block text-sm text-gray-900">Совпадает с адресом регистрации</label>
                    </div>
                    <p v-if="v$.addressF.required.$invalid && v$.$dirty" class="absolute left-2 top-6 text-xs text-red-600">Обязательное поле</p>
                  </div>

                  <hr class="col-span-6 my-4">

                  <h6 class="col-span-6 font-bold">Данные по кредиту</h6>

                  <div class="col-span-6 sm:col-span-3 relative">
                    <label for="country" class="block text-sm font-medium text-gray-700">Цель кредитования</label>
                    <select
                      v-model="goal"
                      id="country" name="country" autocomplete="country-name" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                      <option value="Бизнес">Бизнес</option>
                      <option value="Рефинансирование">Рефинансирование</option>
                      <option value="Рефинансирование+Потребительский">Рефинансирование+Потребительский</option>
                      <option value="Улучшение жилищных условий">Улучшение жилищных условий</option>
                      <option value="Потребительский">Потребительский</option>
                      <option value="Автомобиль">Автомобиль</option>
                      <option value="Недвижимость">Недвижимость</option>
                      <option value="Ипотека 6.9%">Ипотека 6.9%</option>
                    </select>
                  </div>
                  <div class="col-span-6 sm:col-span-3 relative">
                    <label for="street-address" class="block text-sm font-medium text-gray-700">Сумма кредита</label>
                    <input
                      v-model="sum"
                      @input="sumMask()"
                      placeholder="1 000 000"
                      type="text"
                      name="street-address"
                      id="street-address"
                      autocomplete="street-address"
                      class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    <p v-if="v$.sum.required.$invalid && v$.$dirty" class="absolute left-2 top-6 text-xs text-red-600">Обязательное поле</p>
                  </div>
                </div>
              </div>
              <div class="bg-gray-50 px-4 py-3 sm:px-6">
                <button @click.prevent="sendData" type="submit" class="w-full sm:w-auto inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-6 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Отправить запрос в БКИ</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import RobotApp from "@/components/Robot";

export default {
  name: 'HelloWorld',
  components: {
    RobotApp
  },
  setup() {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      name: '',
      DOB: '',
      phone: '',
      series: '',
      number: '',
      code: '',
      organ: '',
      date: '',
      address: '',
      addressF: '',
      matches: false,
      goal: 'Бизнес',
      sum: ''
    }
  },
  methods: {
    clearData() {
      this.name = ''
      this.DOB = ''
      this.phone = ''
      this.series = ''
      this.number = ''
      this.code = ''
      this.organ = ''
      this.date = ''
      this.address = ''
      this.addressF = ''
      this.matches = false
      this.goal = 'Бизнес'
      this.sum = ''
    },
    sumMask() {
      this.sum = this.sum.replace(/\D/g, '')
      this.sum = this.sum.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ')
    },
    matchesAddress() {
      this.matches ? this.addressF = this.address : this.addressF = ''
    },
    sendData() {
      if(this.v$.$invalid) {
        this.v$.$touch()
        return
      }
      this.$emit('loading', this.sum)
      this.v$.$reset()
      this.clearData()
    }
  },
  validations () {
    return {
      name: { required },
      DOB: {
        required,
        minLength: minLength(10)
      },
      phone: {
        required,
        minLength: minLength(17)
      },
      series: {
        required,
        minLength: minLength(4)
      },
      number: {
        required,
        minLength: minLength(6)
      },
      code: {
        required,
        minLength: minLength(7)
      },
      organ: { required },
      date: {
        required,
        minLength: minLength(10)
      },
      address: { required },
      addressF: { required },
      sum: { required }
    }
  }
}
</script>

<style scoped>
</style>
