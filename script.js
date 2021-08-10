var images = ["images/flower/2.png", "images/flower/3.png", "images/flower/4.png", "images/flower/5.png", "images/flower/6.png", "images/flower/7.png", "images/flower/8.png", "images/flower/9.png", "images/flower/10.png", "images/flower/11.png", "images/flower/12.png", "images/flower/13.png", "images/flower/14.png", "images/flower/15.png", "images/flower/16.png"]

var imgState = 0;

var imgTag = document.getElementById("imgClickAndChange");

imgTag.addEventListener("click", function (event) {
  imgState = (++imgState % 15);
    event.target.src = images[imgState];
});

