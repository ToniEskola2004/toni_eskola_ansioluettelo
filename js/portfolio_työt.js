const laatikot1 = [
    {
        id: "projekti1",
        projekti: "Noppapeli",
        tietoa: "Ensimmäinen tekemäni ohjelma mikä hyödyntää javascriptiä. Sekoittaa ja piirtää viisi noppaa. hyödynnetty myös html ja css.",
        linkki: "Noppien_pyörittäjä/index.html",
        linkkiTeksti: "Noppageneraattori"
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
        tietoa: "Tämä projekti on tehty lähinnä javascriptiä käyttäen. Se hyödyntää DfS-algorytmiä, mikä louhii halutun kokoisen labyrintin.",
        linkki: "labyrintti_peli/index.html",
        linkkiTeksti: "Labyrinttipeli"
    },
    {
        id: "projekti4",
        projekti: "Kiinalaiselle ravintolalle nettisivut",
        tietoa: "Työ tehtiin koulussa ryhmätyönä kolmen ryhmissä. Sivusto on tehty html, css ja javascriptiä hyödyntäen. Etusivu ja footteri ovat minun käsialaani.",
        linkki: "https://dpald.github.io/nettisivu_hengfeng/etusivu/index.html",
        linkkiTeksti: "Heng feng nettisivut"
    },
    {
        id: "projekti5",
        projekti: "Suomalaiselle sisustus yrittäjälle nettisivut",
        tietoa: "Tämä tehtiin myös koulussa ryhmätyönä. sivusto on tehty wordpressillä muutama toiminnallisuus javascriptillä ja hieman css:sää. Sivusto on Seo-optimoitu se skaalautuu mobiilille. Se on vielä puutteellinen.",
        linkki: "https://sisustus.luksia.fi.zoner.dev/",
        linkkiTeksti: "qpinterior oy:n nettisivut"
    }
];

const postContainer1 = document.querySelector('.portfolio-työt');

const postMethods1 = ()=>{
    laatikot1.forEach((postData)=>{
        const postElement1 = document.createElement('div');
        postElement1.id = postData.id;
        postElement1.classList.add('projektit');
        postElement1.innerHTML = `
        <h3 class="projekti-otsikko">${postData.projekti}</h3>
        <p class="projekti-teksti">${postData.tietoa}</p>
        <a class="projekti-button" type="button" href="${postData.linkki}">${postData.linkkiTeksti}</a>`

        postContainer1.appendChild(postElement1);
    });
}
postMethods1();