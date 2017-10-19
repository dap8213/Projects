function start() {
    var rotator = document.getElementById('images');
    var delayInSeconds = 2;

    var images = ['Beach.jpg', 'Colombia.jpg', 'Island.jpg', 'castle.jpg', 'China.jpg'];
    var num = 0;
    var changeImage = function() {
        var len = images.length;
        rotator.src = images[num++];
        if (num == len) {
            num = 0;
        }
    };
    setInterval(changeImage, delayInSeconds * 1000);
};
window.onload=function(){
start();
};

$(document).ready(function() {



    $('#button2').click(function(e){
      e.preventDefault();
      $('body').fadeOut(3000)



  });
  });
