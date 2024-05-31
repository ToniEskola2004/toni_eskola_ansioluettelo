const laatikot = [
    {
        kiinnostuksenKohde: "Taekwondo",
        image: "../kuvat/",
        imageAlt: "Taekwondo-ottelu",
        tietoa: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatum impedit incidunt fuga enim. Quia eum labore debitis incidunt! Veniam commodi officia eos doloribus optio velit fuga accusantium reiciendis quis."
    },
    {
        kiinnostuksenKohde: "Rubikinkuutiot",
        image: "../kuvat/",
        imageAlt: "rubiikinkuutio",
        tietoa: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatum impedit incidunt fuga enim. Quia eum labore debitis incidunt! Veniam commodi officia eos doloribus optio velit fuga accusantium reiciendis quis."
    },
    {
        kiinnostuksenKohde: "Kuntosali",
        image: "../kuvat/",
        imageAlt: "käsipaino",
        tietoa: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatum impedit incidunt fuga enim. Quia eum labore debitis incidunt! Veniam commodi officia eos doloribus optio velit fuga accusantium reiciendis quis."
    },
    {
        kiinnostuksenKohde: "Vapaa-ajalla urheilu",
        image: "../kuvat/",
        imageAlt: "urheilu",
        tietoa: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatum impedit incidunt fuga enim. Quia eum labore debitis incidunt! Veniam commodi officia eos doloribus optio velit fuga accusantium reiciendis quis."
    },
    {
        kiinnostuksenKohde: "Koodaus",
        image: "../kuvat/",
        imageAlt: "koodi",
        tietoa: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatum impedit incidunt fuga enim. Quia eum labore debitis incidunt! Veniam commodi officia eos doloribus optio velit fuga accusantium reiciendis quis."
    },
    {
        kiinnostuksenKohde: "Tietokoneet",
        image: "../kuvat/",
        imageAlt: "tietokone",
        tietoa: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatum impedit incidunt fuga enim. Quia eum labore debitis incidunt! Veniam commodi officia eos doloribus optio velit fuga accusantium reiciendis quis."
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