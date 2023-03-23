document.getElementById("ballet-items").style.display = 'none';
document.getElementById("basic-items").style.display = 'none';
document.getElementById("artsy-items").style.display = 'none';
document.getElementById("grunge-items").style.display = 'none';
document.getElementById("street-items").style.display = 'none'; 

if(localStorage.getItem("mC.style")!==null)
{
    let string = localStorage.getItem("mC.style")+"-items"; 
    document.getElementById(string).style.display = 'block';
}
let items = [];
if(localStorage.getItem("mC.items")!==null)
{
    document.getElementById("no-items").style.display = 'none'; 
    items = JSON.parse(localStorage.getItem("mC.items")); 

    /**
     * code for adding images to doc from: 
     * https://stackoverflow.com/questions/2735881/adding-images-to-an-html-document-with-javascript
     */

    for(let i =0; i < items.length; i++)
    {

        this.img = document.createElement("img");
        this.img.src= items[i];
        src = document.getElementById("closet");
        src.appendChild(this.img); 
        console.log(img.src);
    }
}

/**
 * below code from: https://stackoverflow.com/questions/22087076/how-to-make-a-simple-image-upload-using-javascript-html
 */
document.querySelector('input[type="file"]').addEventListener('change', function() {
    //event.preventDefault(); 
    let path = document.getElementById("new-item"); 
    let img = document.querySelector('img');
    img.onload = () =>
    {
        URL.revokeObjectURL(img.src); 
    }
    img.src = URL.createObjectURL(this.files[0]);
    console.log(img.src); 
    items.push(img.src); 
    localStorage.setItem("mC.items", JSON.stringify(items)); 
    document.getElementById("closet").appendChild(img);
})


    
