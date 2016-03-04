//wait for the DOM elements to load before executing
$(document).ready(function () {

    // Create a function that runs whenever the submit button is clicked
    $("form").submit(function(e){        
        //prevent the submit button from refreshing the page
        e.preventDefault();
       
    

   
       

         });

    $("#submit-btn").click(changeBground);

        function changeBground () {

//here created a variable called city, brought city into jquery
            var city = $('#city-type').val();

 //correct for capitalization
            city = city.toLowerCase().trim();

//if the user inputs New York
            if (city == "new york" || city == "new york city" || city == "nyc") {
                $('body').removeClass().addClass('nyc');
        }            

//if the user inputs San Francisco
            if (city == "san francisco" || city == "sf" || city == "bay area") {
                $('body').removeClass().addClass('sf');
        }

 //if the user inputs Los Angeles, change the CSS class to '.la'
            if (city == "los angeles" || city == "la" || city == "lax") {
                 $('.body').removeClass().addClass('la');
         }


 // if the user inputs austin 
            if (city == "austin" || city == "atx") {
                $('.body').removeClass().addClass('austin');
        }
 
 // if the user inputs sydney
            if (city == "sydney" || city == "syd") {
                $('.body').removeClass().addClass('sydney');
        }

// if the user inputs washington, dc
            if (city == "dc" || city == "washington" || city == "washington dc" || city == "washington, dc") {
                $('body').removeClass().addClass('dc');

        }


//Started out to perfect the page by getting it to reset. 
//After flailing around w it a while, decided to review jquery basics again....
    // $("#sumbmit-btn").click(resetPage);

    //     function resetPage () {

    //         var city = $('#city-type').val();

    //     $("form").clearForm();



   // }
    
}

});






