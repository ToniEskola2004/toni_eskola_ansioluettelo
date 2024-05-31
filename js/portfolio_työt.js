const laatikot1 = [
    {
        id: 1,
        projekti: "Noppapeli",
        tietoa: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatum impedit incidunt fuga enim. Quia eum labore debitis incidunt! Veniam commodi officia eos doloribus optio velit fuga accusantium reiciendis quis."
    },
    {
        id: 2,
        projekti: "Ristinolla",
        tietoa: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatum impedit incidunt fuga enim. Quia eum labore debitis incidunt! Veniam commodi officia eos doloribus optio velit fuga accusantium reiciendis quis."
    },
    {
        id: 3,
        projekti: "Labyrinttipeli",        
        tietoa: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatum impedit incidunt fuga enim. Quia eum labore debitis incidunt! Veniam commodi officia eos doloribus optio velit fuga accusantium reiciendis quis."
    },
    {
        id: 4,
        projekti: "Kiinalaiselle ravintolalle nettisivut",
        tietoa: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatum impedit incidunt fuga enim. Quia eum labore debitis incidunt! Veniam commodi officia eos doloribus optio velit fuga accusantium reiciendis quis."
    },
    {
        id: 5,
        projekti: "Suomalaiselle sisustus yrittäjälle nettisivut",
        tietoa: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatum impedit incidunt fuga enim. Quia eum labore debitis incidunt! Veniam commodi officia eos doloribus optio velit fuga accusantium reiciendis quis."
    }
];

const postContainer1 = document.querySelector('.portfolio-työt');

const postMethods1 = ()=>{
    laatikot1.forEach((postData)=>{
        const postElement1 = document.createElement('div');
        postElement1.id = postData.id;
        postElement1.classList.add('projektit');
        postElement1.innerHTML = `
        <h3 class="kortti-otsikko">${postData.projekti}</h3>
        <p class="kortti-teksti">${postData.tietoa}</p>`

        postContainer1.appendChild(postElement1);
    });
}
postMethods1();