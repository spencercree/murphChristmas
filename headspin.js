$(document).ready(function(){
  var spins = 0,
      $message = $('<div id=\'message\'/>'),
      $head = $('#head'),
      $body = $('body'),
      realTaco = '/assets/img/taco.jpg',
      iconTaco = '/assets/img/simple-taco.gif',
      degree = 0,
      intervalSpeed = 40,
      browserType =  navigator.userAgent.match(/webkit/i),
      timer;


  function spin() {
    timer = setInterval(
      function() {

        /*if(browserType != null) {*/
          degree += 10;
          if (degree === 360) {
            $head.animate({rotate: '0deg'}, 0);
          } else {
            var rotate = 'rotate(' + degree + 'deg)';
            $head.css({
                '-webkit-transform': rotate,
                '-moz-transform': rotate,
                '-o-transform': rotate,
                '-ms-transform': rotate,
                'transform': rotate
            });
          }
        /*} else {
          degree += 2;
          rotate($head, degree);
        }*/

        if(degree > 360){
          $('#spins').show();
          degree = 0;
          spins++;
          $('#spins').html(spins);
        }
        if(spins === 10){
          $message.html('You really like Christmas!');
          $body.append($message);
          $message.fadeIn('slow');
        }
        if(spins === 20){
          $message.html('All I want for Christmas is YOUUUUUUU!');
          $body.append($message);
        }
        if(spins === 30){
          $message.fadeOut('slow');
        }
        if(spins === 100){
          $message.html('One hundred spins! It\'s a Christmas miracle.');
          $body.append($message);
          $message.fadeIn('slow');
        }
        if(spins === 120){
          $message.fadeOut('slow');
        }
        if(spins === 10000){
          $message.html('All Mariah wants for Christmas is you!');
          $body.append($message);
          $message.fadeIn('slow');
        }
        if(spins === 100000){
          $message.html('Murph is now the only person who likes Christmas more than you.');
          $body.append($message);
        }
        if(spins === 1000000){
          $message.html('You officially like Christmas more than Murph!');
          $body.append($message);
        }
      },
    intervalSpeed);
  }

  function rotate(object, degrees) {
    object.css({
      '-webkit-transform' : 'rotate('+degrees+'deg)',
      '-moz-transform' : 'rotate('+degrees+'deg)',
      '-ms-transform' : 'rotate('+degrees+'deg)',
      '-o-transform' : 'rotate('+degrees+'deg)',
      'transform' : 'rotate('+degrees+'deg)',
      'zoom' : 1
    });
  }

  // $head.dblclick(function(){
  //   var currentHead = $(this).find('img').attr('src');
  //   if (currentHead === realHead) {
  //     $(this).find('img').attr('src', iconTaco);
  //   } else {
  //     $(this).find('img').attr('src', realTaco);
  //   }
  // });

  spin();
});