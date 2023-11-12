
function count() {
    let beginnig = document.getElementById('home_text')
    let end = document.getElementById('end_text')
    let step = document.getElementById('step_text')
    let result = document.getElementById('result')

    if (beginnig.value.length == 0 || end.value.length ==0 || step.value.length ==0) {
        alert('[ERRO] Digite os dados')
    } else {
        result.innerHTML('Contando...')
        let beginnig = Number(beginnig.value)
        let end = Number(end.value)
        let step = Number(step.value)

        for ( let count = beginnig; count <= end; count += step) {
            result.innerHTML += `${c}`
        }
    }

}