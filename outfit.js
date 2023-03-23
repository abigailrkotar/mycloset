let clothes = JSON.parse(localStorage.getItem("mC.items"));
let buttons = []; 
for(let i =0; i < clothes.length; i++)
{
    img = document.createElement("img");
    img.src = clothes[i]; 
    //document.getElementById("clothes").appendChild(this.img);
    let button = document.createElement("input");
    button.setAttribute('type', 'image');
    button.setAttribute('id', img.src);
    button.setAttribute('src', img.src)
    button.setAttribute('value', 'Add to Outfit');  
    buttons.push(button); 
}

let curroutfit = [];

for(let i = 0; i < buttons.length; i++)
{
    document.getElementById("clothes").appendChild(buttons[i]);
    buttons[i].addEventListener("click", (e) => {
        let image = e.target.id; 

        /**
        * code for adding images to doc from: 
        * https://stackoverflow.com/questions/2735881/adding-images-to-an-html-document-with-javascript
        */

        img = document.createElement("img");
        img.src = image;

        document.getElementById("outfit").appendChild(img);
        document.getElementById(image).style.display = 'none'; 
        curroutfit.push(img.src); 
        console.log(curroutfit);
    })

}

document.getElementById("love").addEventListener("click", () => {
    event.preventDefault(); 
    let outfits; 
    if(localStorage.getItem("mC.outfits") === null || localStorage.getItem("mC.outfits") === "")
    {
        outfits = [];
    }
    else
    {
        outfits = [];
        let pasto = (JSON.parse(localStorage.getItem("mC.outfits")));
        for(let i =0; i < pasto.length; i++)
        {
            outfits.push(pasto[i]);
        }
        console.log(outfits);
    }
    outfits.push(curroutfit); 
    console.log(outfits); 
    localStorage.setItem("mC.outfits", JSON.stringify(outfits)); 
    curroutfit = []; 
    window.location.reload(); 
})

document.getElementById("scrap").addEventListener("click", () => {
    curroutfit = []; 
    window.location.reload(); 
})


if(!( localStorage.getItem("mC.outfits") === null))
{
    let pastouts = JSON.parse(localStorage.getItem("mC.outfits")); 
    for(let o =0; o < pastouts.length; o++)
    {
        text = document.createElement("h3");
        text.innerHTML = "Outfit " + (o +1); 
        document.getElementById("past-outfits").appendChild(text);
        for(let i =0; i < pastouts[o].length; i++)
        {
            img = document.createElement("img");
            img.src = pastouts[o][i];
            document.getElementById("past-outfits").appendChild(img); 
        }
    }
}


document.getElementById("clear-past").addEventListener('click', () => {
    localStorage.setItem("mC.outfits", "");
    window.location.reload();
})
