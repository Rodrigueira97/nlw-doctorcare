window.addEventListener('scroll', roleomouse)

roleomouse()
function roleomouse() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    ativarMenuPorSessao(home)
    ativarMenuPorSessao(services)
    ativarMenuPorSessao(about)
    ativarMenuPorSessao(contact)

}

function ativarMenuPorSessao(section) {
    //linha Alvo

    const metadeDaTela = scrollY + innerHeight / 2

    // Verificar se a sessão passou da linha
    // Quais dados vou precisar?

    //topo da sessão
    const topoSessao = section.offsetTop
    //altura da sessão(serve para pegar a parte de baixo)
    const fundoSessao = section.offsetHeight
    //saber se o topo da sessão bateu na metade dela
    const topoNaMetadeDaSessao = metadeDaTela >= topoSessao

    const aondeTerminaSessao = topoSessao + fundoSessao

    const baseMenorQueMetade = aondeTerminaSessao <= metadeDaTela

    //limites da sessão
    const limiteSessao = topoNaMetadeDaSessao && !baseMenorQueMetade

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (limiteSessao) {
        menuElement.classList.add('active')
    }

}

function showNavOnScroll() {

    const navigation = document.querySelector('#navigation')

    if (scrollY > 0) {
        navigation.classList.add('scroll')
    }
    else {
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll() {
    if (scrollY > 400) {
        backToTopButton.classList.add('show')
    }
    else {
        backToTopButton.classList.remove('show')
    }
}

function abrirmenu() {
    document.body.classList.add('menu-expanded')
}

function fecharMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distancia: '30px',
    duration: 700,
}).reveal(` 
 #home,
 #home img,
 #home .stats, 
 #services, 
 #services header, 
 #services .card,
 #about,
 #about header,
 #about .content`)

// voce pode usar no lugar das aspas('') ou sinal de asento agudo para quebrar o texto(``)
