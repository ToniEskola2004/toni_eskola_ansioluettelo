const laatikot1 = [
    {
        id: "projekti1",
        projekti: "Bootstrap-table",
        tietoa: "Javascriptillä tehty bootstrap taulu muokkaus, poisto ja lisäys toiminnoilla. Käytetty javasctiptiä ja bootstrappiä",
        linkki: "bootstraptable/index (2).html",
        linkkiTeksti: "linkki pöytään"
    },
    {
        id: "projekti2",
        projekti: "Ristinolla",
        tietoa: "Tekemäni peli mikä käyttää pääosin javascriptiä. Todella mielenkiintoinen projekti, sillä tämä on kokonaan minun kirjoittama koodi ja se onkin siksi uniikki ratkaisu tehdä ristinolla peli.",
        linkki: "ristinolla/index.html",
        linkkiTeksti: "Ristinolla peli"
    },
    {
        id: "projekti3",
        projekti: "Labyrinttipeli",
        tietoa: "Tämä projekti on tehty lähinnä javascriptiä käyttäen. Se hyödyntää DfS-algorytmiä, mikä louhii halutun kokoisen labyrintin. (kesken)",
        linkki: "labyrintti_peli/index.html",
        linkkiTeksti: "Labyrinttipeli"
    },
    {
        id: "projekti4",
        projekti: "Kiinalaiselle ravintolalle nettisivut",
        tietoa: "Työ tehtiin koulussa ryhmätyönä kolmen ryhmissä. Sivusto on tehty html, css ja javascriptiä hyödyntäen. Etusivu ja footteri ovat minun käsialaani. Tässäkin projektissa pyrittiin toimimaan mahdolisimman aidon ohjelmistokehittäjätiimin tavoin. Joka aamu scrum meetting. kaikesta keskuteltiin ryhmän kanssa ja projekti jaettiin kaikien tekijöiden osaamisalueille.",
        linkki: "https://dpald.github.io/nettisivu_hengfeng/etusivu/index.html",
        linkkiTeksti: "Heng feng nettisivut"
    },
    {
        id: "projekti5",
        projekti: "Suomalaiselle sisustus yrittäjälle nettisivut",
        tietoa: "Tämä tehtiin myös koulussa ryhmätyönä. sivusto on tehty wordpressillä muutama toiminnallisuus javascriptillä ja hieman css:sää. Sivusto on Seo-optimoitu se skaalautuu mobiilille. Se on vielä puutteellinen. Projektissa pyrittiin toimimaan mahdollisimman oikea ohjemistokehittäjä tiimin tavoin. tähän kuului  Scrum-tiimi kokouksia, demoja ja projektinhallintaa. Johdin meidän tiimiämme ja järjestin tapaamiset ja kokoukset yrittäjän kanssa.",
        linkki: "https://sisustus.luksia.fi.zoner.dev/",
        linkkiTeksti: "qpinterior oy:n nettisivut"
    },
    {
        id: "projekti6",
        projekti: "javascript raketti",
        tietoa: "Tämä työ oli koulu tehtävä. Tehtävänä oli tehdä javascriptillä raketti, joka lähtee lentoon lähtölaskennan kautta ja tietyllä todennäköisyydellä laukaisu voi epäonnistua tai onnistua ja raketin tiloista kirjaantuu teksti näytölle.",
        linkki: "https://tonieskola2004.github.io/jsrocket/",
        linkkiTeksti: "linnki rakettiin"
    },
    {
        id: "projekti7",
        projekti: "Hexaly opitimointimallinnin",
        tietoa: "Tein työn yrityksessä harjoittelijana. Siinä käytettiin matemaattista optimointi mallinninta hexalyä, lisäksi myös javascriptillä tein aputyökaluja ohjelmaan.",
    },
    {
        id: "projekti8",
        projekti: "anagrammipeli",
        tietoa: "Koulutehtävä. anagrammipeli tehty suurimmaksi osaksi php:tä käyttäen",
        linkki: "https://github.com/ToniEskola2004/anagrammi_peli",
        linkkiTeksti: "linnki githubiin"
    },
    {
        id: "projekti9",
        projekti: "hirsipuu",
        tietoa: "Koulutehtävä tämäkin. Tethy skillshare kurssin pohjalta, mutta silti paljon itse tehtyjä osia kuten näppäimistö, tilastojen seurantaa, niiden ohjaus nappeja ja categorian vaihto nappia. Tehty lähes kokonaan php:lla",
        linkki: "https://github.com/ToniEskola2004/hangman",
        linkkiTeksti: "linnki githubiin"
    }
];

const postContainer1 = document.querySelector('.portfolio-työt');

const postMethods1 = () => {
    laatikot1.forEach((postData) => {
        const postElement1 = document.createElement('div');
        postElement1.id = postData.id;
        postElement1.classList.add('projektit');
        postElement1.innerHTML += `<h3 class="projekti-otsikko">${postData.projekti}</h3> <p class="projekti-teksti">${postData.tietoa}</p>`;
        if (postData.linkki != null) {
            postElement1.innerHTML += `<a class="projekti-button" type="button" href="${postData.linkki}">${postData.linkkiTeksti}</a>`
        }
        postContainer1.appendChild(postElement1);
    });
}
postMethods1();