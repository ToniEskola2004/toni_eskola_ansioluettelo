const laatikot = [
    {
        kiinnostuksenKohde: "Taekwondo",
        image: "../kuvat/",
        imageAlt: "Taekwondo-ottelu",
        tietoa: "Taekwondoa olen harrastanut jo 11-vuotiaasta lähtien, hieman taukoa ollut välissä. Seuran nimi missä harrastan on mudo lohja. Vyön väri on vihreä. Tykkään lähinnä otella ja tässä käynkin yleensä ottelemssa seurani valmentajan järjestämässä aktiviteetissa Veikkolassa."
    },
    {
        kiinnostuksenKohde: "Rubikinkuutiot",
        image: "../kuvat/",
        imageAlt: "rubiikinkuutio",
        tietoa: "Olen harrastellu speed cubing:ia pienestä lähetien sillon täälöin, tauoittain. Henkilökohtainen ennätykseni 3x3 rubiikin kuutiossa 24.25sec. metodi CFOP, avg cross 5sec, f2l 9sec, oll 5sec ja pll 4sec. Main kuutio X-Man tornado v3, omistan myös MoYu RS3M:än."
    },
    {
        kiinnostuksenKohde: "Kuntosali",
        image: "../kuvat/",
        imageAlt: "käsipaino",
        tietoa: "Kuntosalia olen harrastellut noin vuoden. Lempi päiväni on selkäpäivä, ja -liikkeeni on dipit. kuntosalilla tulee käytyä 3viikossa ja arviolta noi 2h."
    },
    {
        kiinnostuksenKohde: "Vapaa-ajalla urheilu",
        image: "../kuvat/",
        imageAlt: "urheilu",
        tietoa: "Käyn aina silloi tällöin urheilemassa vapaaajalla. Muunmuassa lenkkeilyä, taekwondoa, pyöräilyä mitä nyt ykinä keksinkään."
    },
    {
        kiinnostuksenKohde: "Koodaus",
        image: "../kuvat/",
        imageAlt: "koodi",
        tietoa: "Tykkään vapaa-ajallani myös koodata tietokoneella erilasia ohjelmia täysin nollasta itse. Muunmuassa javascriptillä. Minusta ongelmien ratkonta on hauskaa ja pienenä tykkäsin koulussa matematiikasta mikä myös houkutellut minut koodaamaan."
    },
    {
        kiinnostuksenKohde: "Tietokoneet",
        image: "../kuvat/",
        imageAlt: "tietokone",
        tietoa: "Tietokoneet ovat olleet jo pitkään intohimonani ja olen niitä muutaman rakentanut. Tällä hetkellä minulla on ryzen 7 5700x, 16gb ramia, samsung 980 pro 1tb ja rtx 3070. Myös kaikki tekniikka aiheinen kiinnostaa valtavasti."
    }
];

const postContainer = document.querySelector('.laatikot-container');

const postMethods = ()=>{
    laatikot.forEach((postData)=>{
        const postElement = document.createElement('div');
        postElement.classList.add('kortti');
        postElement.innerHTML = `
        <h3 class="kortti-otsikko">${postData.kiinnostuksenKohde}</h3>
        <img src="${postData.image}" alt="${postData.imageAlt}" class="kortti-kuva">
        <p class="kortti-teksti">${postData.tietoa}</p>`

        postContainer.appendChild(postElement);
    });
}
postMethods();