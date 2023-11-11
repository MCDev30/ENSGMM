const container = document.getElementById('container')
const current = document.getElementById('current')
const gmm = document.getElementById('gmm')
const projet = document.getElementById('projet')
const program = document.getElementById('program')

gmm.addEventListener('click', (e) => {
    e.preventDefault()
    current.innerHTML = "👉🏾 Tout savoir sur l'ENSGMM "
    container.innerHTML = ""
    container.innerHTML = `
        <div class="programme">
        <!-- <p>Programme de l'événement</p> -->
        <h4>Objectif Général</h4>
        <p>L'ENSGMM est chargée de former des Ingénieurs en Mathématiques appliquées, capable de la conception, de l'analyse et de la mise en oeuvre de modèles mathématiques avancés. <br></p>
        <h4>Conditions d'Admission</h4>
        <ul>
            <li>Avoir fait 2 années en cycle Préparatoire aux Écoles d'Ingénieur.</li>
            <li>Être sélectionné(e) en tant que boursier(ière)</li>
            <li>Être séléctionné(e) à titre payant à l'issu d'un concours d'entrée</li>
        </ul>
        <table>
            <tr id="tr">
                <td>Filière</td>
                <td>Débouchés</td>
            </tr>
            <tr>
                <td>Modélisation et Simulation numérique</td>
                <td>
                    <div class="liste">
                        <li>Conception, Modélisation et Simulation des Systèmes Mécaniques et Physiques complexes</li>
                        <li>Prévision de paramètres atmosphériques</li>
                        <li>Bureaux de calculs scientifiques</li>
                        <li>Études et conseils techniques</li>
                    </div>
                </td>
            </tr>
            <tr>
                <td>Modélisation Aléatoire, Statistiques et Finaces</td>
                <td>
                    <div class="liste">
                        <li>Banques et fiannces</li>
                        <li>Modélisation des marchés finaciers</li>
                        <li>Sociétés innovantes</li>
                        <li>Études et conseils techniques</li>
                    </div>
                </td>
            </tr>
            <tr>
                <td>Informatique, Logistique et Recherche Opérationnelle</td>
                <td>
                    <div class="liste">
                        <li>Recherche et développement</li>
                        <li>Modélisation et Optimisation de flux</li>
                        <li>Optimisation des trajets et/ou des chaînes de production</li>
                        <li>Systèmes d'Informations</li>
                    </div>
                </td>
            </tr>
        </table>
    </div>
        `
})

projet.addEventListener('click', (e) => {
    e.preventDefault()
    current.innerHTML = "👉🏾 Les projets pour l'événement"
    container.innerHTML = ""
    container.innerHTML = `
    <div class="programme">
    <div class="projets">
        <div class="desc">
            <div class="pro">
                <img src="palu.png" alt="">
                <p id="pnama">Modélisation Statistique Spatiale du paludisme en Afrique de l'Ouest</p>
            </div>
            <p id="desc"></p>
        </div>
        <div class="desc">
            <div class="pro">
                <img src="ia.jpeg" alt="" >
                <p id="pnama">Système de détection des infractions routières grâce à l'IA</p>
            </div>
            <p id="desc"></p>
        </div>
        <div class="desc">
            <div class="pro">
                <img src="finance.avif" alt="" >
                <p id="pnama">Prédiction de la volatilité des actions sur le marché de la BRVM</p>
            </div>
            <p id="desc"></p>
        </div>
    </div>
</div>   
    `
})

program.addEventListener('click', (e) => {
    e.preventDefault()
    current.innerHTML = "👉🏾 Important !"
    container.innerHTML = ""
    container.innerHTML = `
        <div class="programme">
        <p style="margin-bottom: 30px; text-align:center">Recevez les informations sur l'événement, en temps réels</p>
        <div class="view">
            <p id="close">X</p>
            <img id="vue" src="" width="100%">
        </div>
        <div class="affiches">
            <div class="card">
                <img id="aff1" src="sponsor.jpg" >
                <p style="padding-top: 20px;">Vous voulez faire partie de nos sponsors? Alors c'est le moment de passer à l'action. Nous serons ravis !</p>
            </div>
            <div class="card">
                <img id="aff2" src="coming.jpg">
                <p style="padding-top: 20px;">Elle approche à grand pas. Ne ratez pas cet événement qui va marquer l'histoire de l'ENSGMM</p>
            </div>
        </div>
    </div>
      `
})

const aff1 = document.getElementById("aff1")
const aff2 = document.getElementById("aff2")
const vue = document.getElementById('vue')
const view = document.querySelector('.view')
const close = document.getElementById('close')

aff1.addEventListener('click', (e) => {
    e.preventDefault()
    vue.src = "sponsor.jpg"
    view.classList.add('see')
})
aff2.addEventListener('click', (e) => {
    e.preventDefault()
    vue.src = "coming.jpg"
    view.classList.add('see')
})
close.addEventListener('click', (e) => {
    view.classList.remove('see')
})
