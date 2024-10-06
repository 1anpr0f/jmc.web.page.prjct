const body = document.getElementsByTagName('body')[0]
setInterval(() => {
    body.style.background=`rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
}, 500);