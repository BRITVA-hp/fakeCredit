<template>
  <section class="pt-10 sm:py-10 sm:px-5 section min-h-screen m-auto max-w-8xl bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-600">
    <div class="container sm:px-4 sm:py-12 rounded-xl sm:shadow-md m-auto sm:bg-gray-50">
      <h1 class="text-white sm:text-slate-600 px-2 sm:p-0 mb-4 lg:mb-6 text-left lg:text-center font-bold text-xl lg:text-2xl">Проверка скорингового балла ЧЕРЕЗ БКИ</h1>

      <div>
        <div class="md:grid lg:grid-cols-3 md:gap-6">
          <div class="lg:col-span-1">
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

                    <div class="col-span-6 sm:col-span-2">
                      <label for="first-name" class="block text-sm font-medium text-gray-700">ФИО</label>
                      <input placeholder="Иванов Иван Иванович" type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>

                    <div class="col-span-6 sm:col-span-2">
                      <label for="last-name" class="block text-sm font-medium text-gray-700">Дата рождения</label>
                      <input placeholder="дд.мм.гггг" type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>

                    <div class="col-span-6 sm:col-span-2">
                      <label for="last-name" class="block text-sm font-medium text-gray-700">Телефон</label>
                      <input placeholder="+7 (___) ___-____" type="text" name="last-name" id="last-name" autocomplete="family-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>

                    <hr class="col-span-6 my-4">

                    <h6 class="col-span-6 font-bold">Паспортные данные</h6>

                    <div class="col-span-6 sm:col-span-2">
                      <label for="first-name" class="block text-sm font-medium text-gray-700">Серия</label>
                      <input placeholder="1234" type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>

                    <div class="col-span-6 sm:col-span-2">
                      <label for="first-name" class="block text-sm font-medium text-gray-700">Номер</label>
                      <input placeholder="112233" type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>

                    <div class="col-span-6 sm:col-span-2">
                      <label for="first-name" class="block text-sm font-medium text-gray-700">Код подразделения</label>
                      <input placeholder="000-000" type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>

                    <div class="col-span-6 sm:col-span-4">
                      <label for="email-address" class="block text-sm font-medium text-gray-700">Кем выдан</label>
                      <input placeholder="Укажите организацию" type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>

                    <div class="col-span-6 sm:col-span-2">
                      <label for="first-name" class="block text-sm font-medium text-gray-700">Дата выдачи</label>
                      <input placeholder="дд.мм.гггг" type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label for="first-name" class="block text-sm font-medium text-gray-700">Адрес регистрации</label>
                      <input placeholder="Укажите адрес" type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label for="first-name" class="block text-sm font-medium text-gray-700">Адрес фактического проживания</label>
                      <input placeholder="Укажите адрес" type="text" name="first-name" id="first-name" autocomplete="given-name" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>

                    <hr class="col-span-6 my-4">

                    <h6 class="col-span-6 font-bold">Данные по кредиту</h6>

                    <div class="col-span-6 sm:col-span-3">
                      <label for="country" class="block text-sm font-medium text-gray-700">Цель кредитования</label>
                      <select id="country" name="country" autocomplete="country-name" class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                        <option>Бизнес</option>
                        <option>Рефинансирование</option>
                        <option>Рефинансирование+Потребительский</option>
                        <option>Улучшение жилищных условий</option>
                        <option>Потребительский</option>
                        <option>Автомобиль</option>
                        <option>Недвижимость</option>
                        <option>Ипотека 6.9%</option>
                      </select>
                    </div>

                    <div class="col-span-6 sm:col-span-3">
                      <label for="street-address" class="block text-sm font-medium text-gray-700">Сумма кредита</label>
                      <input placeholder="1 000 000" type="text" name="street-address" id="street-address" autocomplete="street-address" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                    </div>
                  </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:px-6">
                  <button type="submit" class="w-full sm:w-auto inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-6 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Отправить запрос в БКИ</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import textEffect from "@/assets/js/textEffect";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted() {
    textEffect('.effect')
  }
}
</script>

<style scoped>
</style>
