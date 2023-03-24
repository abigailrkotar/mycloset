//hides all items
document.getElementById("ballet-items").style.display = 'none';
document.getElementById("basic-items").style.display = 'none';
document.getElementById("artsy-items").style.display = 'none';
document.getElementById("grunge-items").style.display = 'none';
document.getElementById("street-items").style.display = 'none'; 

//displays the items based on user's style from quiz
if(localStorage.getItem("mC.style")!==null)
{
    let string = localStorage.getItem("mC.style")+"-items"; 
    document.getElementById(string).style.display = 'block';
}

//if the user has a presaved closet, it loads it up 
let items = [];
if(localStorage.getItem("mC.items")!==null)
{
    items = JSON.parse(localStorage.getItem("mC.items")); 

    /**
     * code for adding images based off of 
     * https://stackoverflow.com/questions/2735881/adding-images-to-an-html-document-with-javascript
     * author: David Vassalo 
     * date accessed: March 23, 2023
     */

    for(let i =0; i < items.length; i++)
    {
        
        img = document.createElement("img");
        img.src= items[i];
        src = document.getElementById("closet");
        src.appendChild(this.img); 
        console.log(img.src);
    }
}

//on clicks for buttons that add items to closet

document.getElementById("add-basic1").addEventListener("click", event => {
    event.preventDefault(); 
    if(! items.includes(document.getElementById("b1").src))
    {
        items.push(document.getElementById("b1").src);
        localStorage.setItem("mC.items", JSON.stringify(items)); 
        document.getElementById("closet").appendChild(document.getElementById("b1"));
    }
    document.getElementById("add-basic1").style.display = 'none';
})
document.getElementById("add-bskirt").addEventListener("click", event => {
    event.preventDefault(); 
    if(! items.includes(document.getElementById("black-skirt").src))
    {
        items.push(document.getElementById("black-skirt").src);
        localStorage.setItem("mC.items", JSON.stringify(items)); 
        document.getElementById("closet").appendChild(document.getElementById("black-skirt"));
    }
    document.getElementById("add-bskirt").style.display = 'none';
})
document.getElementById("add-bskirt1").addEventListener("click", event => {
    event.preventDefault(); 
    if(! items.includes(document.getElementById("black-skirt3").src))
    {
        items.push(document.getElementById("black-skirt1").src);
        localStorage.setItem("mC.items", JSON.stringify(items)); 
        document.getElementById("closet").appendChild(document.getElementById("black-skirt1"));
    }
    document.getElementById("add-bskirt1").style.display = 'none';
})
document.getElementById("add-bskirt2").addEventListener("click", event => {
    event.preventDefault(); 
    if(! items.includes(document.getElementById("black-skirt3").src))
    {
        items.push(document.getElementById("black-skirt2").src);
        localStorage.setItem("mC.items", JSON.stringify(items)); 
        document.getElementById("closet").appendChild(document.getElementById("black-skirt2"));
    }

    document.getElementById("add-bskirt2").style.display = 'none';
})
document.getElementById("add-bskirt3").addEventListener("click", event => {
    event.preventDefault(); 
    if(! items.includes(document.getElementById("black-skirt3").src))
    {
        items.push(document.getElementById("black-skirt3").src);
        localStorage.setItem("mC.items", JSON.stringify(items)); 
        document.getElementById("closet").appendChild(document.getElementById("black-skirt3"));
    }

    document.getElementById("add-bskirt3").style.display = 'none';
})
document.getElementById("add-whitet").addEventListener("click", event => {
    event.preventDefault(); 
    if(! items.includes(document.getElementById("white-tank").src))
    {
        items.push(document.getElementById("white-tank").src);
        localStorage.setItem("mC.items", JSON.stringify(items)); 
        document.getElementById("closet").appendChild(document.getElementById("white-tank"));
    }
    document.getElementById("add-whitet").style.display = 'none';
})
document.getElementById("add-whitet1").addEventListener("click", event => {
    event.preventDefault(); 
    if(! items.includes(document.getElementById("white-tank1").src))
    {
        items.push(document.getElementById("white-tank1").src);
        localStorage.setItem("mC.items", JSON.stringify(items)); 
        document.getElementById("closet").appendChild(document.getElementById("white-tank1"));
    }
    
    document.getElementById("add-whitet1").style.display = 'none';
})
document.getElementById("add-wrap").addEventListener("click", event => {
    event.preventDefault(); 
    if(! items.includes(document.getElementById("wrap-top").src))
    {
        items.push(document.getElementById("wrap-top").src);
        localStorage.setItem("mC.items", JSON.stringify(items)); 
        document.getElementById("closet").appendChild(document.getElementById("wrap-top"));
    }
    
    document.getElementById("add-wrap").style.display = 'none';
})
document.getElementById("add-jskirt").addEventListener("click", event => {
    event.preventDefault(); 
    if(! items.includes(document.getElementById("jean-skirt").src))
    {
        items.push(document.getElementById("jean-skirt").src);
        localStorage.setItem("mC.items", JSON.stringify(items)); 
        document.getElementById("closet").appendChild(document.getElementById("jean-skirt"));
    }
    document.getElementById("add-jskirt").style.display = 'none';
})
document.getElementById("add-jskirt1").addEventListener("click", event => {
    event.preventDefault(); 
    if(! items.includes(document.getElementById("jean-skirt1").src))
    {
        items.push(document.getElementById("jean-skirt1").src);
        localStorage.setItem("mC.items", JSON.stringify(items)); 
        document.getElementById("closet").appendChild(document.getElementById("jean-skirt1"));
    }
    document.getElementById("add-jskirt1").style.display = 'none';
})
document.getElementById("add-bjean").addEventListener("click", event => {
    event.preventDefault(); 
    if(! items.includes(document.getElementById("baggy-jean").src))
    {
        items.push(document.getElementById("baggy-jean").src);
        localStorage.setItem("mC.items", JSON.stringify(items)); 
        document.getElementById("closet").appendChild(document.getElementById("baggy-jean"));
    }
    document.getElementById("add-bjean").style.display = 'none';
})
document.getElementById("add-bjean1").addEventListener("click", event => {
    event.preventDefault(); 
    if(! items.includes(document.getElementById("baggy-jean1").src))
    {
        items.push(document.getElementById("baggy-jean1").src);
        localStorage.setItem("mC.items", JSON.stringify(items)); 
        document.getElementById("closet").appendChild(document.getElementById("baggy-jean1"));
    }
    document.getElementById("add-bjean1").style.display = 'none';
})
document.getElementById("add-card").addEventListener("click", event => {
    event.preventDefault(); 
    if(! items.includes(document.getElementById("card").src))
    {
        items.push(document.getElementById("card").src);
        localStorage.setItem("mC.items", JSON.stringify(items)); 
        document.getElementById("closet").appendChild(document.getElementById("card"));
    }
    
    document.getElementById("add-card").style.display = 'none';
})






/**
 * code for saving images to local storage based off of
 * https://www.youtube.com/watch?v=8K2ihr3NC40 
 * 
 * author: Dcode, Dom 
 * date accessed: March 23, 2023
 * function takes the image file the user uploads and saves them to local storage
 */
document.querySelector('input[type="file"]').addEventListener('change', function() {
    //event.preventDefault(); 
    const reader = new FileReader();
    reader.addEventListener("load", () =>{ 
        let img = document.querySelector('img');
        img.src = reader.result; 
        document.getElementById("closet").appendChild(img);
        items.push(img.src);
        localStorage.setItem("mC.items", JSON.stringify(items)); 
    })

    reader.readAsDataURL(this.files[0]); 
    
})


    
