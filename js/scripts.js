$(function() {
  $("form#rate").submit(function(event) {
    var rating1 = parseInt($("input#rating1").val());
    var rating2 = parseInt($("input#rating2").val());
    var rating3 = parseInt($("input#rating3").val());

    if (rating1 > 5) {
      $("#rating").text("Antigua! Antigua has hundreds of beaches, from the bustling Pigeon Point to the kitesurfing paradise of Jabberwock Beach. It's fun to mix it up-a day spent in a secluded cove, another spent people-watching at a tourist magnet. When you're tired of sun and sand you can shoot 'em up at Reservoir Range, where archery and air pistols are a fun way to work out any lingering pre-vacation stress. A tour of the Antigua Distillery is a spirited way to experience a true taste of the island.");
    }

    else if (rating2 > 0 && rating3 > 0) {
      $("#rating").text("Palm Springs is an oasis for outdoor adventure, arts and culture, gaming and entertainment. The city's storied Hollywood legacy, Native American heritage and stunning collection of mid-century modern architecture reflect why Palm Springs is truly like no place else. Soar to the top of Mount San Jacinto, hike through ancient palm groves and along stunning scenic trails. Ride a cruiser through the scenic neighborhood, enjoy the Spanish style and mid-century modern architecture. Tour world class museums, leaving time for dining alfresco and walking to entertainment venues under the stars.");
    }

    else if (rating3 > 0 || rating1 > 0) {
      $("#rating").text("Honolulu! While you will find some kitsch in Honolulu, you'll also find art museums, bike paths, and some of the most beautiful scenery in the world. Popular Waikiki Beach has soft sands and great surf. For majestic Oahu views scramble to the top of Diamond Head - a 350-acre volcanic crater. Historic structures like Iolani Palace and Ali'iolani Hale are worth a visit on a non-beach day.");
    }


    else {
      console.log("stuff");
      $(".form-group").addClass("has-error");
    }

    $("#result").show();

      event.preventDefault();
  });
});
