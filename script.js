



document.getElementById('navToggle').addEventListener('click', ()=> {
    document.getElementById('navbar').classList.toggle('active')

    document.getElementById('navToggle').classList.toggle('active')
})


const trendValueElement = document.getElementById('trendValue');
const trendValue = parseFloat(trendValueElement.textContent);

function trendColor() {
    if (trendValue < 0) {
        trendValueElement.classList.add('red')
    } else {trendValueElement.classList.add('green')}
}

trendColor()

