const laatikot1 = [
    {
        id: "projekti1",
        projekti: "1Noppapeli",
        tietoa: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatum impedit incidunt fuga enim. Quia eum labore debitis incidunt! Veniam commodi officia eos doloribus optio velit fuga accusantium reiciendis quis."
    },
    {
        id: "projekti2",
        projekti: "2Ristinolla",
        tietoa: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatum impedit incidunt fuga enim. Quia eum labore debitis incidunt! Veniam commodi officia eos doloribus optio velit fuga accusantium reiciendis quis."
    },
    {
        id: "projekti3",
        projekti: "3Labyrinttipeli",        
        tietoa: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatum impedit incidunt fuga enim. Quia eum labore debitis incidunt! Veniam commodi officia eos doloribus optio velit fuga accusantium reiciendis quis."
    },
    {
        id: "projekti4",
        projekti: "4Kiinalaiselle ravintolalle nettisivut",
        tietoa: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem voluptatum impedit incidunt fuga enim. Quia eum labore debitis incidunt! Veniam commodi officia eos doloribus optio velit fuga accusantium reiciendis quis."
    },
    {
        id: "projekti5",
        projekti: "5Suomalaiselle sisustus yrittäjälle nettisivut",
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
        <h3 class="projekti-otsikko">${postData.projekti}</h3>
        <p class="projekti-teksti">${postData.tietoa}</p>`

        postContainer1.appendChild(postElement1);
    });
}
postMethods1();