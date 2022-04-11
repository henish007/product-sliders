	$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})


  $(document).ready(function(){
        $("a.tab").click(function () {
            $(".active").removeClass("active");
            $(this).addClass("active");
            $(".content").hide();
            var x = $(this).attr("title");
            $("#"+x).show();
        });
      });