window.addEventListener("load", () => {

    let calledFlag = false
    let memeLevel = document.getElementById('range').value

    function gatorUnleasher(gators){
        calledFlag = true
        if (gators > 0) {
            document.getElementById('blueShape').append('🐊')
            gatorUnleasher(gators - 1)
        }
        if (memeLevel >= 1) {
            ebin.style.display = 'block'
        }
    }

    document.getElementById('gatorator').addEventListener('click', function(){
        let numGators = document.getElementById('gatorNum').value
        calledFlag = true
        gatorUnleasher(numGators)
    })

    let notBody = document.getElementById('wrapper')
    let ebin = document.getElementById('epilepsyWarning')
    let dank = document.getElementById('totodile')
    let danker = document.getElementById('totodile2')
    let dankest = document.getElementById('totodile3')
    let dankester = document.getElementById('totodile4')
    let dankesterest = document.getElementById('totodile5')
    let lit = document.getElementById('stars')

    document.getElementById('memeBar').addEventListener('mouseup', function(){
        memeLevel = document.getElementById('range').value
        if (memeLevel >= 1 && calledFlag === true){
            ebin.style.display = 'block'
        } else {
            ebin.style.display = 'none'
        }
        if (memeLevel >= 2){
            dank.style.display = 'block'
            danker.style.display = 'block'
            dankest.style.display = 'block'
            dankester.style.display = 'block'
            dankesterest.style.display = 'block'
            notBody.style.background = 'url(assets/space.gif)'
            notBody.style.backgroundSize = 'cover'
            lit.play()
            lit.muted=false
        } else {
            dank.style.display = 'none'
            danker.style.display = 'none'
            dankest.style.display = 'none'
            dankester.style.display = 'none'
            dankesterest.style.display = 'none'
            notBody.style.background = 'black'
            lit.muted=true
        }
        if (memeLevel == 3){
            document.body.style.animation = 'color 2s infinite linear'
            notBody.style.animation = 'orbit 2s linear infinite'
            notBody.style.filter = 'invert(1)'
            ebin.style.animation = 'orbitester 3.5s linear infinite'
        }
    })
})