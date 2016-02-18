$(function() {
  $("form#rate").submit(function(event) {
    var rating1 = parseInt($("input#rating1").val());
    var rating2 = parseInt($("input#rating2").val());
    var rating3 = parseInt($("input#rating3").val());

    var name = $("input#name").val();

    if (rating1 >= 5 && rating2 < 5 && rating3 < 5){

      $("#namedisplay").text(name);

      $("#rating").text("Antigua! Antigua has hundreds of beaches, from the bustling Pigeon Point to the kitesurfing paradise of Jabberwock Beach. It's fun to mix it up-a day spent in a secluded cove, another spent people-watching at a tourist magnet. When you're tired of sun and sand you can shoot 'em up at Reservoir Range, where archery and air pistols are a fun way to work out any lingering pre-vacation stress. A tour of the Antigua Distillery is a spirited way to experience a true taste of the island.");
    }

    else if (rating1 < 5 && rating2 >= 5 && rating3 < 5) {

      $("#namedisplay").text(name);

      $("#rating").text("Yosemite! Tucked into the mountains of California, Yosemite National Park is renowned for its granite cliffs and waterfalls. Half Dome and El Capitan are two of the formations made famous by photographer Ansel Adams. The valley is open year-round for camping, hiking, and climbing. Traffic is congested during peak season and park rangers encourage visitors to use the free shuttle system. For upscale visits, the Ahwahnee Hotel, built in 1927, is chic and luxurious.   ");
    }

    else if (rating1 < 5 && rating2 < 5 && rating3 >= 5) {

      $("#name").text(name);

      $("#rating").text("Honolulu! While you will find some kitsch in Honolulu, you'll also find art museums, bike paths, and some of the most beautiful scenery in the world. Popular Waikiki Beach has soft sands and great surf. For majestic Oahu views scramble to the top of Diamond Head - a 350-acre volcanic crater. Historic structures like Iolani Palace and Ali'iolani Hale are worth a visit on a non-beach day.");
    }

    else if (rating1 < 5 && rating2 < 5 && rating3 < 5) {
      $("#namedisplay").text(name);

      $("#rating").text("Palm Springs! Palm Springs is an oasis for outdoor adventure, arts and culture, gaming and entertainment. The city's storied Hollywood legacy, Native American heritage and stunning collection of mid-century modern architecture reflect why Palm Springs is truly like no place else. Soar to the top of Mount San Jacinto, hike through ancient palm groves and along stunning scenic trails. Ride a cruiser through the scenic neighborhood, enjoy the Spanish style and mid-century modern architecture. Tour world class museums, leaving time for dining alfresco and walking to entertainment venues under the stars.");
    }

    else if (rating1 < 5 && rating2 >= 5 && rating3 >= 5) {
      $("#namedisplay").text(name);

      $("#rating").text("Banff! Flanked on all sides by the Rockies, Banff offers an irresistible combination of perfect powder, luxury lodges, fine dining and lively nightlife. A thriving arts scene and proximity to Lake Louise and Kananaskis County add to its allure. Don't miss the hoodoos, intriguing rock spires, in Banff National Park.");
    }

    else if (rating1 >= 5 && rating2 >= 5 && rating3 < 5) {
      $("#namedisplay").text(name);

      $("#rating").text("La Push, Washington! La Push is the north-most point of Washington's Pacific Coast beaches. From La Push to Cape Flattery, the most northwest point of the continental United States, lies the Olympic National Park's National Wildlife Refuge. The beach lies on the south side of the Quillayute River's outlet into the Pacific Ocean at the north edge of the Quileute Indian Reservation. The beach, called First Beach, is a wide, crescent shaped, sandy beach with sea stacks between the beach and the western horizon. During migration, whales can be seen from the beach.");
    }

    else if (rating1 >= 5 && rating2 < 5 && rating3 >= 5) {
      $("#namedisplay").text(name);

      $("#rating").text("Dominican Republic! The white sand of Bavaro Beach, which was recognized by UNESCO, is consistently ranked as one of the best beaches in the world. In addition to the beach, this resort has a full-service Yhi Spa with a fully equipped gym, 3 pools, a family concierge, the Kids Zone (for children ages 1-12) and 2 a la carte restaurants. The Cocotal Golf Course & Country Club and Palma Real Shopping Village are only 2 minutes away. Movie nights, beach volleyball classes, salsa lessons, finger-painting, pizza-making classes and live music performances are just a few activities and workshops available to guests. Don't miss out on occasional deals that allow kids to stay for free.");
    }

    else if (rating1 >= 5 && rating2 >= 5 && rating3 >= 5) {
      $("#namedisplay").text(name);

      $("#rating").text("Travassa, Texas! When it comes to healthy getaways, there are plenty of destinations from which to choose, but few can hold a candle to Travaasa, outside Austin. Perched atop one of the hills in Texas Hill Country, the resort offers guests 5 pillars of experience: culture, fitness, wellness, culinary and adventure. Travaasa's greatest asset may just be its staff, who go above and beyond to make sure each of their guests have experiences that will make memories to last a lifetime.");
    }

    else {
      console.log("stuff");
      $(".form-group").addClass("has-error");
    }

    $("#result").fadeIn().show();

      event.preventDefault();
  });
});
