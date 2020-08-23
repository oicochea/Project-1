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
    url: `https://api.openbrewerydb.org/breweries?by_postal=${zipCode}`,
  }).then(
      (data) => {
        $('#brewery').children().remove();
           let  i= (Math.floor(Math.random() * [data.length])) 
        //    passName = data[i].name
        $('#brewery').append($(`<li> ${data[i].name} </li> </br>`))
        $('li').append($(`<p> Street Address: ${data[i].street} , ${data[i].city} , ${data[i].state}</p>`));
    } 
, ()=>{
        console.log("bad request")
    });



    // const promise2 = $.ajax({
    //     url:`https://serpapi.com/playground?q=${passName}&tbm=isch&ijn=0`
    // });
    
    
    // $.ajax({
    //     url: `https://serpapi.com/playground?q=${passName}&tbm=isch&ijn=0`,
    //   }).then(
    //       (data) => {
    //         var imageUrl = data.images_results[0].link
    //         $('li').css("background-image", "url(" + imageUrl + ")")
    //     } 
    // , ()=>{
    //         console.log("bad request")
    //     });

});



$( function() { 
    $("li").draggable(); 
} ); 

  