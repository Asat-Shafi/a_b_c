
function myfunction() {

    var age = document.querySelector("input").value;

if(age>=1 && age<=7)

    
{
 document.getElementById('text').innerHTML = "child";
}
else {
    document.getElementById('text').innerHTML = "";
}
}