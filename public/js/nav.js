// jquery UI Tab function
        $( function() {
            $( "#tabs" ).tabs({
                collapsible: true
                });
        } );
    // colapsable nav for mobile 
       $(document).ready(function(){
            $('.mobile_menu').on('click', function(){
                var currentHeight = $('.single-nav').height();

                if(currentHeight < 5){ 
                    var newHeight = $('.single-nav > ul').height() + 15;
                    $('.single-nav').animate({'height':newHeight + 'px'}, 750)


                }else{
                    $('.single-nav').animate({'height':'0px'},750, function(){
                        $(this).removeAttr('style');
                    });


                }
            });

            $(window).resize(function(){
                    if( $(this).width()> 599){
                        $('.single-nav').removeAttr('style');
                    }
            });
// fuction to make the page smooth//
             $('a[href*="#"]:not([href="#"])').click(function() {
              if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                  $('html, body').animate({
                    scrollTop: target.offset().top
                  }, 1000);
                  return false;
                }
              }
            });
         })




       // image rotate


        window.onload = function(){           
        var myImage = document.getElementById("mainImage");
        setInterval(changeImage,2000);

        var imageArray = ["images/rota1.jpg","images/rota2.jpg","images/rota3.jpg"];
        var imageIndex = 0;

        function changeImage() {
         myImage.setAttribute("src",imageArray[imageIndex]);
         imageIndex++;
        if (imageIndex >= imageArray.length) {
        imageIndex = 0;
            }
        }


    };