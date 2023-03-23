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