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
        $('#brewery').append($(`<li>${data[i].name}</li>`).attr("draggable","true").attr("id" , "currentBrewery"))
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
            userLiked.push(`${data[i].name}`)
            var JSONLikedList = JSON.stringify(userLiked);
            localStorage.setItem(userLiked,JSONLikedList);
            var passedBeers = JSON.parse(localStorage[userLiked])
            console.log(`${data[i].name}`)
            console.log(userLiked.length)
            console.log(passedBeers)


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




$(function() {
$.ajax({
  url: " https://api.openbrewerydb.org/breweries?by_postal=11706"
  ,
  
}).then(
    (data) => {
       $('.brewery1').css("background-image", "url(/Users/oscaricochea/Desktop/seir-flex-zen-work/projects/Project_1/dubc.jpg)")
      $('.brewery1').append($(`<li> ${data[0].name} </li>`).attr("id" , "creatorsFavs").addClass("editPick1"))
      $('.editPick1').append($(`<p> Street Address: ${data[0].street}       , ${data[0].city} , ${data[0].state}</p>`))
      $('.link1').attr("href", `${data[0].website_url}`)
      $(',phone1').attr ("href" , `tel:${data[0].phone}`)   

    })
  });

      $(function() {
        $.ajax({
          url: " https://api.openbrewerydb.org/breweries?by_postal=11706"
          ,
          
        }).then(
            (data) => {

               $('.brewery2').css("background-image", "url(/Users/oscaricochea/Desktop/seir-flex-zen-work/projects/Project_1/gsb.png)")
              $('.brewery2').append($(`<li> ${data[2].name} </li>`).attr("id" , "creatorsFavs").addClass("editPick2"))
              $('.editPick2').append($(`<p> Street Address: ${data[2].street}       , ${data[2].city} , ${data[2].state}</p>`))
              $('.link2').attr("href", `${data[2].website_url}`)
              $(',phone2').attr ("href" , `tel:${data[2].phone}`)   
        
            })
          });
        
    
      

          $(function() {
            $.ajax({
              url: " https://api.openbrewerydb.org/breweries?by_postal=11901"
              ,
              
            }).then(
                (data) => {
    
                   $('.brewery3').css("background-image", "url(/Users/oscaricochea/Desktop/seir-flex-zen-work/projects/Project_1/lirb.jpeg)")
                  $('.brewery3').append($(`<li> ${data[4].name} </li>`).attr("id" , "creatorsFavs").addClass("editPick3"))
                  $('.editPick3').append($(`<p> Street Address: ${data[4].street}       , ${data[4].city} , ${data[4].state}</p>`))
                  $(',phone3').attr ("href" , `tel:${data[4].phone}`)   
            
                })
              });

             
              $(function() {
                $.ajax({
                  url: "https://api.openbrewerydb.org/breweries?by_postal=11771"
                  ,
                  
                }).then(
                    (data) => {
        
                       $('.brewery4').css("background-image", "url(/Users/oscaricochea/Desktop/seir-flex-zen-work/projects/Project_1/obbc.jpg)")
                      $('.brewery4').append($(`<li> ${data[0].name} </li>`).attr("id" , "creatorsFavs").addClass("editPick4"))
                      $('.editPick4').append($(`<p> Street Address: ${data[0].street}       , ${data[0].city} , ${data[0].state}</p>`))
                      $('.link4').attr("href", `${data[0].website_url}`) 
                      $(',phone4').attr ("href" , `tel:${data[0].phone}`)
                        
                
                    })
                  });

// for(let i= 0 ;i <=userLiked.length;i++){
// //   console.log(userLiked[0])
//   $('#passedLiked').append($("<li>").attr("id","savedLiked" ))
//   $("#savedLiked").text(userLiked.join())
  

