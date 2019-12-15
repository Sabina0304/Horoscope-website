

$(document).ready(function() {


  // var url = 'http://horoscope-lhl.herokuapp.com/horoscopes/aries + '


  function printHoroscope(data){

    $('.results').html(" ");


    $('<div class="horoscope_item"></div>')
      .append('<h2 class="horoscope_horoscope">' + data.sign.toUpperCase() + '</h2>')
      .append('<h2 class="horoscope_horoscope">' + data.date + '</h2>')
    .append('<h2 class="horoscope_horoscope">' + data.horoscope + '</h2>')


    // .append('<p class="horoscpe_date">' + data.date + '<p>')
    .appendTo('.results');
  }



  $('form button').on('click', function(event) {
    // console.log($(this));
    var sign = $(this).html().toLowerCase();

    $.get("http://horoscope-lhl.herokuapp.com/horoscopes/" + sign, function(data){
      printHoroscope(data);

    })

    $('.results').slideDown(500);
  })


  $('form').on('submit', function(event) {
      event.preventDefault();
  });


  $('button').on('click', function(event){
    event.preventDefault();

  })

  $('button').on('click', function(event){
  $('form').slideUp(600);
  })
// press on button and form slide up

  $('input').on('click', function(){
  $(this).addClass('yellow');
  })

  $('.goBack').on('click', function(){
    $('form').slideDown(500);
    $('.results').slideUp(500);
  })

// console.log(response.beers[0].name)

  });
