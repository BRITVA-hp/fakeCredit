export default (selector) => {
    const elem = document.querySelector(selector)
    const arrSym = elem.textContent.split('')
    const val = Math.round(elem.scrollWidth/Math.sqrt(2))
    const half = Math.floor(arrSym.length/2)

    elem.textContent = ''
    arrSym.forEach((sym, symIndex) => {
        const span = document.createElement('span')
        span.textContent = sym
        span.style.display = 'inline-block'
        span.style.transition = '1s'
        if (symIndex < half) {
            if (symIndex%2) {
                span.style.transform = 'translate(-' + val + 'px, -' + val + 'px)'
            } else {
                span.style.transform = 'translate(-' + val + 'px, ' + val + 'px)'
            }
        }
        elem.appendChild(span)
        let start = null;

        function step(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            span.style.transform = 'translateX(' + Math.min(progress / 10, 200) + 'px)';
            if (progress < val) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    })
}