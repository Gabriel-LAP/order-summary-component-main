const $planContent = document.querySelector('.order-sumary-plan-content').children

const $link = document.querySelector('.change-link')

const $opaque = document.querySelector('.opaque-container')

const $plans = document.querySelector('.plans')

const $planBtn = [...document.querySelectorAll('.plan-btn')]

const $closeBtn = document.querySelector('.close-btn')


$link.addEventListener('click', (e) => {
    e.preventDefault()
    $opaque.style.cssText = `
        display: inline;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.5);
        width: 100%;
        height: 103%;
        display: flex;
        justify-content: center;
        align-items: center;
        backdrop-filter: blur(2px);

    `

})

$planBtn.map((e) => {
    e.addEventListener('click', () => {
        for (i = 0; i < $planContent.length; i++) {
            const textPlanBtn = e.children[i].outerText

            $planContent[i].textContent = textPlanBtn

        }

        $opaque.style.cssText = `
            display: none;
        `
    })

})

$closeBtn.addEventListener('click', () => {
    $opaque.style.cssText = `
            display: none;
    `

})







