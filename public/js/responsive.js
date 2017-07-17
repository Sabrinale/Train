
        window.onload = function(){           
        var myImage = document.getElementById("mainImage");
        setInterval(changeImage,15000);

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

