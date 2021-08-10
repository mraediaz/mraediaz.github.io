var images = ["images/plants/1.png", "images/plants/2.png", "images/plants/3.png", "images/plants/4.png", "images/plants/5.png", "images/plants/6.png", "images/plants/7.png", "images/plants/8.png", "images/plants/9.png", "images/plants/10.png", "images/plants/11.png", "images/plants/12.png", "images/plants/13.png", "images/plants/14.png", "images/plants/15.png", "images/plants/16.png", "images/plants/17.png", "images/plants/18.png", "images/plants/19.png", "images/plants/20.png"]

var imgState = 0;

var imgTag = document.getElementById("imgClickAndChange");

imgTag.addEventListener("click", function (event) {
  imgState = (++imgState % 20);
    event.target.src = images[imgState];
});

