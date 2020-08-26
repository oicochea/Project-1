console.log("linked")
// var passName =""


const userLiked= []

// const userDisliked= []


$('#beerButton').on('click', (event) => {
    const zipCode = $('input').val();  
    console.log(zipCode)
    // var userLiked = new LikedArray()
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
        $('#brewery').append($(`<li> ${data[i].name} </li>`).attr("draggable","true").attr("id" , "currentBrewery"))
        $('#currentBrewery').append($(`<p> Street Address: ${data[i].street}       , ${data[i].city} , ${data[i].state}</p>`))
        $('#currentBrewery').draggable({helper: 'clone' });
        $("#liked").droppable(
          {
            accept: "#currentBrewery",
            drop:function (ev, ui) {
              $("#currentBrewery").attr("id" , "movedBrewery")
              $("#movedBrewery").css({ 'background-color' : '', 'position' : '' });
            
            var droppedItem =$(ui.draggable).clone();
            $('#liked').append(droppedItem);
            userLiked.push(`${data[i].name}`);
            $('#brewery').children().remove();
            console.log($('#brewery').children())
         
            
           
            }
        })

        $("#disliked").droppable(
          {
            accept: "#currentBrewery",
            drop:function (ev, ui) {
              $("#currentBrewery").attr("id" , "movedBrewery");
              $("#movedBrewery").css({ 'background-color' : '', 'position' : '' });
            
            var droppedItem =$(ui.draggable).clone();
            $('#disliked').append(droppedItem);
            $('#brewery').children().remove();
            
           
            }
        })
        $('#breweryLink').attr("href", `${data[i].website_url}`)
        $('#phoneTag').attr ("href" , `tel:${data[i].phone}`)            
, ()=>{
        console.log("bad request")
       

    }  
  })
});

for(let i= 0 ;i <=userLiked.length;i++){
  $('#passedLiked').append($(`<li> ${userLiked[i]} </li>`))

}
var JSONreadyLiked = JSON.stringify(userLiked)

localStorage.setItem('usersLiked', JSONreadyLiked);
// console.log(JSON.parse(localStorage['userLiked']));


// $('#brewery').append($(`<li> ${data[i].name} </li>`).attr("draggable","true").attr("id" , "currentBrewery"))
// $('li').append($(`<p> Street Address: ${data[i].street}       , ${data[i].city} , ${data[i].state}</p>`))
// $('#breweryLink').attr("href", `${data[i].website_url}`)
// $('#phoneTag').attr ("href" , `tel:${data[i].phone}`)
// $('#brewery').append($(`<li> ${data[i].name} </li>`).attr("draggable","true").attr("id" , "currentBrewery"))
// $('li').append($(`<p> Street Address: ${data[i].street}       , ${data[i].city} , ${data[i].state}</p>`))
// $('#breweryLink').attr("href", `${data[i].website_url}`)
// $('#phoneTag').attr ("href" , `tel:${data[i].phone}`)
// $('#brewery').append($(`<li> ${data[i].name} </li>`).attr("draggable","true").attr("id" , "currentBrewery"))
// $('li').append($(`<p> Street Address: ${data[i].street}       , ${data[i].city} , ${data[i].state}</p>`))
// $('#breweryLink').attr("href", `${data[i].website_url}`)
// $('#phoneTag').attr ("href" , `tel:${data[i].phone}`)