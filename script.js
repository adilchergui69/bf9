

document.getElementById("box").style.display = "none";
var btn = document.getElementById("btn");
var search = document.getElementById("search");

var contry = ""
btn.addEventListener('click', function(event){
    contry = search.value
    event.preventDefault();
    document.getElementById('sec')


    async function gettalldata(){
    document.getElementById("text").style.display = "none";
    document.getElementById("box").style.display = "block";
    let param = "";
    if(contry.toLowerCase() == "usa" || contry.toLowerCase() == "us" || contry.toLowerCase() == "uk")
        param = contry.toLowerCase();
    else
        param = contry.substr(0, 1).toUpperCase() + contry.substr(1)
    let responses = await fetch("https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country="+param, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
            "x-rapidapi-key": "f11920ac97msh6df02003ca5a96ep168cc4jsn030bd644760d"
        }
    })

    let data = await responses.json();
    // let {confirmed, deaths, lastChecked,lastReported,location } = data.data;
    // document.getElementById('deaths').textContent = deaths;
    // document.getElementById('confirmed').textContent = confirmed;
    // document.getElementById('lastChecked').textContent = lastChecked.slice(0, -6) +"h";
    // document.getElementById('lastReported').textContent = lastReported.slice(11, -6) +"h";
    // document.getElementById('location').textContent = location;
    // console.log(data);


    let paramImg = "";
    if(contry.toLowerCase() == "usa" || contry.toLowerCase() == "us" ){
        paramImg = "united-states-of-america";
    }else
    paramImg = contry

   
    // document.getElementById('img').src=`https://www.countryflags.com/wp-content/uploads/${paramImg}-flag-png-large.png`
    // console.log(contry.substr(0, 1).toUpperCase() + contry.substr(1))
    console.log(data.data)

        document.getElementById("row").innerHTML+= 
        `<div class='col-md-4'>
        <div class='card mb-4 box-shadow mt-5'>
          <img id='img' class='card-img-top' data-src='holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" style="height: 225px; width: 100%; display: block;" src="https://www.countryflags.com/wp-content/uploads/${paramImg}-flag-png-large.png" data-holder-rendered='true'>
          <img id="img" class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" style="height: 225px; width: 100%; display: block;" src="https://www.countryflags.com/wp-content/uploads/${paramImg}-flag-png-large.png" data-holder-rendered="true">
          <div class="card-body">
            location:
            <p class="card-text"> ${data.data.location}</p>
            confirmed:
            <p class="card-text">${data.data.confirmed}</p>
            deaths:
            <p class="card-text">${data.data.deaths}</p>
            lastReported:
            <p class="card-text">${data.data.lastReported.slice(11, -6)} h</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
               <a href="https://covid19.who.int/table"><button type="button"  class="btn btn-sm btn-outline-secondary">View More</button></a> 
              </div>
              <small id="lastChecked" class="text-muted">${data.data.lastChecked.slice(0, -6)} h</small>
            </div>
          </div>
        </div>
    </div>
    `
    
        
    
    
}
// if (contry == "usa" ||contry == "us") {
    
// }

gettalldata().catch(err => {
	console.error(err);
});

});






// for (let i = 0; i < data.length; i++) {
//     document.getElementById("row").innerHTML+= 
//     `<div class='col-md-4'>
//     <div class='card mb-4 box-shadow mt-5'>
//       <img id='img' class='card-img-top' data-src='holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" style="height: 225px; width: 100%; display: block;" src="https://www.countryflags.com/wp-content/uploads/${paramImg}-flag-png-large.png" data-holder-rendered='true'>
//       <div class="card-body">
//         location:
//         <p class="card-text"> ${data[i].data.location}</p>
//         confirmed:
//         <p class="card-text">${data[i].data.confirmed}</p>
//         deaths:
//         <p class="card-text">${data[i].data.deaths}</p>
//         lastReported:
//         <p class="card-text">${data[i].data.lastReported.slice(11, -6)} h</p>
        
        
//         <div class="d-flex justify-content-between align-items-center">
//           <div class="btn-group">
//            <a href="https://covid19.who.int/table"><button type="button"  class="btn btn-sm btn-outline-secondary">View More</button></a> 
//           </div>
//           <small id="lastChecked" class="text-muted">${data[i].data.lastChecked.slice(0, -6)} h</small>
//         </div>
//       </div>
//     </div>
// </div>
// `

    
// }
