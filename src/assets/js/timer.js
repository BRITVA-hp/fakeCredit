export default (num) => {

  const timer = setInterval(function () {
    const seconds = num%60 // Получаем секунды
    const minutes = num/60%60 // Получаем минуты
    const hour = num/60/60%60 // Получаем часы
    if (num <= 0) {
      clearInterval(timer)
      alert("Время закончилось")
    } else {
      return `${Math.trunc(hour)} : ${Math.trunc(minutes)} : ${seconds}`
    }
    --num
  }, 1000)

}