# Project-1

# Oscar Icochea Calenzani Brewlette Read Me

## Working URL

https://oicochea.github.io/Project-1/

## Technologies used:
Drag and Drop into appendTo

Brewery API - https://api.openbrewerydb.org/breweries

Sticky Nav to jump to a second page and a section for the suggestions

Input that passes on the zip code for the user to call up random brewerys in the entered zipcode

## Approach:

Started with a bare bone site, This was to stablish the api being called and that it was functioning well.
I then created divs to space out where my strcutures needed to be.
Did not create the creator selections yet at this point.
I the worked on the UL locations for the apending portion
I then workend on background and the location of the passing information, as well as adding the icons for the phone number and website, so the user can quickly reach those pages.

I then worked on the backgournd image and my sticky nav
After i did all my drag and drop coding, this was the hardest part of the project and took me the most time. In my situation it was just not a drag and drop, I had a drag and drop and append, both to a liked and disliked brewery. 
After research i found the the solution would be to create a clone and make that dragable and appendable and then .remove the previous LI in the current brewery selection, we only needed 1 clone and dragbble function but we needed 2 dropabble tags to allow for the item to be dropped in the correct UL.

Once it would be appended we removed the class and id to give them new ones that chnage the styling to match the chalkboard theme.

I then added the recomendation section with 4 different api pulls as they are static pulls, that is why i was not able to use the same pull.

Then I optimized  the site for mobile with Meadia Querys and css Flex

## Things I am currently working on....
I am messing with local storage to allow the an array push based on the dragged to location, i would then push the araay as an object to the local storage and be able to call it in the profile page for the user to have  a list.
Would also like to link the google places API to pass rating and reviews that can be passed in a MODAL display when clicking the randomized brewery.







