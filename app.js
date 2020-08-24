console.log("linked")
// var passName =""




$('#beerButton').on('click', (event) => {
    const zipCode = $('input').val();  
    console.log(zipCode)
    event.preventDefault();



// const promise = $.ajax({
//     url:`https://api.openbrewerydb.org/breweries?by_postal=${zipCode}`
// });


$.ajax({
    url: `https://api.openbrewerydb.org/breweries?by_postal=${zipCode}`
    ,
    
  }).then(
      (data) => {
        $('#brewery').children().remove();
           let  i= (Math.floor(Math.random() * [data.length])) 
        // if(data[i].name == " "){
        //    passName = data[i].name
        $('#brewery').append($(`<li> ${data[i].name} </li>`).attr("draggable","true").attr("id" , "currentBrewery"))
        $('li').append($(`<p> Street Address: ${data[i].street} , ${data[i].city} , ${data[i].state}</p>`));

        //    }else{
          
        //    }
      })  
               
, ()=>{
        console.log("bad request")
       

    }
});
// });



