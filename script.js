var images = ["images/flower/2.PNG", "images/flower/3.PNG", "images/flower/4.PNG", "images/flower/5.PNG", "images/flower/6.PNG", "images/flower/7.PNG", "images/flower/8.PNG", "images/flower/9.PNG", "images/flower/10.PNG", "images/flower/11.PNG", "images/flower/12.PNG", "images/flower/13.PNG", "images/flower/14.PNG", "images/flower/15.PNG", "images/flower/16.PNG"]

var imgState = 0;

var imgTag = document.getElementById("imgClickAndChange");

imgTag.addEventListener("click", function (event) {
  imgState = (++imgState % 15);
    event.target.src = images[imgState];
});

