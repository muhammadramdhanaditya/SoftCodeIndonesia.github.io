$(document).on("scroll", function() {
    simplyCountdown('.simply-countdown', {
            year: 2024, // required
            month: 4, // required
            day: 15, // required
            hours: 13, // Default is 0 [0-23] integer
            words: { //words displayed into the countdown
                days: { singular: 'Hari', plural: 'Hari' },
                hours: { singular: 'Jam', plural: 'Jam' },
                minutes: { singular: 'Menit', plural: 'Menit' },
                seconds: { singular: 'Detik', plural: 'Detik' }
            },
        
    });
    

    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".animate");
  
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];
  
      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
      } else {
        $(tag).removeClass("visible");
      }
    }


    $('.copyClipboard').click(function (e) { 
      e.preventDefault();
      var data = $(this).data("id");
      navigator.clipboard.writeText(data);
    });
});

