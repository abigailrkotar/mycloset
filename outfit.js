
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

let curroutfit = [];; 

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
    if(localStorage.getItem("mC.outfits") === null)
    {
        console.log(curroutfit);
        localStorage.setItem("mC.outfits", JSON.stringify(curroutfit)); 
    }
    else
    {
        let outfits = [];
        outfits.push(JSON.parse(localStorage.getItem("mC.outfits")));
        console.log(outfits); 
        outfits.push(curroutfit); 
        console.log(outfits); 
        localStorage.setItem("mC.outfits", JSON.stringify(outfits)); 
    }
    curroutfit = []; 
    window.location.reload(); 
})

document.getElementById("scrap").addEventListener("click", () => {
    curroutfit = []; 
    window.location.reload(); 
})
