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
                <td>Modélisation Aléatoire, Statistiques et Finances</td>
                <td>
                    <div class="liste">
                        <li>Banques et finances</li>
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
    current.innerHTML = "👉🏾 Les projets pour l'événement (06)"
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
        <div class="desc">
            <div class="pro">
                <img src="image.jpeg" alt="" >
                <p id="pnama">Conception d'un système de vote électronique sécurisé et décentralisé basé sur la technologie blockchain</p>
            </div>
            <p id="desc"></p>
        </div>
        <div class="desc">
            <div class="pro">
                <img src="cancer.jpeg" alt="" >
                <p id="pnama">Breast cancer prediction</p>
            </div>
            <p id="desc"></p>
        </div>
        <div class="desc">
            <div class="pro">
                <img src="serge.jpeg" alt="" >
                <p id="pnama">Sécurité sociale et guidance professionnelle</p>
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

        <div class="info_pro">
            <div>
                <img src="important.png" alt="" width="50px">
            </div>
            <div>
                <p id="bold">À l'endroit des porteurs des projets retenus</p>
                <p>Pour la présentation des projets retenus dans le cadre des journées, un <b>beamer</b> est attendu de chaque groupe ou porteur de projet. Merci de bien vouloir prendre celà en considération</p>
            </div>
        </div>
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

const plus = document.getElementById('plus')
const texte_change = document.getElementById('texte_change')
const moins = document.querySelector('#moins')
plus.addEventListener('click', (e) => {
    e.preventDefault()
    texte_change.innerHTML = "<b>'LES MATHS, ÇA SERT À QUOI ?'</b> <br><br> L'objectif principal de ces journées, est de démystifier les mathématiques en montrant, à travers des témoignages d'experts et des projets concrets d'étudiants, les innombrables applications de cette discipline dans le monde professionnel. <br><br>En tant que sponsor de cette journée, vous bénéficierez d'une forte visibilité auprès des étudiants et des professionnels présents. Vous pourrez non seulement améliorer votre image de marque auprès des étudiants et professionnels présents, mais également identifier en avant-première les futurs talents qui feront avancer votre secteur. Grâce aux témoignages d'experts et aux projets concrets qui seront présentés, vous réaliserez le rôle central que peuvent jouer les mathématiques et leurs applications infinies dans le développement technologique et économique de demain. <br><br>Votre soutien sera déterminant pour offrir aux participants une journée riche en découvertes. Rejoignez l'aventure et contribuez à inspirer la nouvelle génération de talents en mathématiques !"
    moins.innerHTML = 'voir moins'
    plus.innerHTML = ''
})
moins.addEventListener('click', (e) => {
    e.preventDefault()
    texte_change.innerHTML = "<b>'LES MATHS, ÇA SERT À QUOI ?'</b> <br><br> L'objectif principal de ces journées, est de démystifier les mathématiques en montrant, à travers des témoignages d'experts et des projets concrets d'étudiants, les innombrables applications de cette discipline dans le monde professionnel... "
    moins.innerHTML = ''
    plus.innerHTML = 'voir plus'

})