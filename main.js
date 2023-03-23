/**
 * when submit button is clicked, checks 
 * what the user answered
 * and creates then finds the highest style score
 */

document.getElementById("submit").addEventListener("click", event => {

    // these arrays work together to compute the highest style
    let stylechoices = [0, 0, 0, 0, 0];
    let styles = ["ballet", "basic", "artsy", "grunge", "street"];

    if(document.getElementById("basic-1").checked)
    {
        stylechoices[1] ++; 
    }
    else if(document.getElementById("ballet-1").checked)
    {
        stylechoices[0]++;
    }
    else if(document.getElementById("artsy-1").checked)
    {
        stylechoices[2]++
    }
    else if(document.getElementById("grunge-1").checked)
    {
        stylechoices[3]++;
    }
    else if(document.getElementById("street-1").checked)
    {
        stylechoices[4]++; 
    }

    if(document.getElementById("basic-2").checked)
    {
        stylechoices[1]++;
    }
    else if(document.getElementById("ballet-2").checked)
    {
        stylechoices[0]++;
    }
    else if(document.getElementById("artsy-2").checked)
    {
        stylechoices[2]++;
    }
    else if(document.getElementById("grunge-2").checked)
    {
        stylechoices[3]++
    }
    else if(document.getElementById("street-2").checked)
    {
        stylechoices[4]++;
    }


    if(document.getElementById("basic-3").checked)
    {
        stylechoices[1]++; 
    }
    else if(document.getElementById("ballet-3").checked)
    {
        stylechoices[0]++;
    }
    else if(document.getElementById("artsy-3").checked)
    {
        stylechoices[2]++;
    }
    else if(document.getElementById("grunge-3").checked)
    {
        stylechoices[3]++;
    }
    else if(document.getElementById("street-3").checked)
    {
        stylechoices[4]++;
    }


    if(document.getElementById("basic-4").checked)
    {
        stylechoices[1]++; 
    }
    else if(document.getElementById("ballet-4").checked)
    {
        stylechoices[0]++;
    }
    else if(document.getElementById("artsy-4").checked)
    {
        stylechoices[2]++;
    }
    else if(document.getElementById("grunge-4").checked)
    {
        stylechoices[3]++;
    }
    else if(document.getElementById("street-4").checked)
    {
        stylechoices[4]++;
    }

    if(document.getElementById("basic-5").checked)
    {
        stylechoices[1]++; 
    }
    else if(document.getElementById("ballet-5").checked)
    {
        stylechoices[0]++;
    }
    else if(document.getElementById("artsy-5").checked)
    {
        stylechoices[2]++;
    }
    else if(document.getElementById("grunge-5").checked)
    {
        stylechoices[3]++;
    }
    else if(document.getElementById("street-5").checked)
    {
        stylechoices[4]++;
    }
    

    let greatest = stylechoices[0]; 
    let gindex = 0; 
    for(let i =0; i < stylechoices.length; i++)
    {
        if(stylechoices[i]>=greatest)
        {
            greatest = stylechoices[i];
            gindex = i; 
        }
    }
    // saves style to local storage 
    localStorage.setItem("mC.style", styles[gindex]); 
    //console.log(styles[gindex] + ": " + greatest); 
})

// hides all final pages
document.getElementById("ballet").style.display = 'none';
document.getElementById("basic").style.display = 'none';
document.getElementById("grunge").style.display = 'none';
document.getElementById("artsy").style.display = 'none';
document.getElementById("street").style.display = 'none';
document.getElementById("next-butt").style.display = 'none';
document.getElementById("main-nav").style.display='none';


// if the user has a style, display that style page
if(localStorage.getItem("mC.style")!== null)
{
    document.getElementById("styles").style.display = 'none'; 
    document.getElementById(localStorage.getItem("mC.style")).style.display = 'block';
    document.getElementById("next-butt").style.display = 'block'; 
    document.getElementById("main-nav").style.display= 'block'; 
}