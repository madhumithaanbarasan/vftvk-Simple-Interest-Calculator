
    function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    t = document.getElementById("years").value;
    results=document.getElementById("result");
    
    result.innerHTML=(p*r*t)/100;
    

}
        
