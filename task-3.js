let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all")
request.send();


request.onload = function()
{
  
    let c = JSON.parse(request.responseText)
    c.map((s)=>{
        console.log(s.name)
    })
    c.map((s)=>{
        console.log(s.region)
    })
    c.map((s)=>{
        console.log(s.subregion)
    })
    c.map((s)=>{
        console.log(s.population)
    })
   
}
request.onerror = function() {
    console.log("error")
}; 

