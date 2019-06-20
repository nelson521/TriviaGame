$(document).ready(function () {
  var timeStarts = 15;
  $('#countDown').text(timeStarts);
  var timer; 
  // Hide the game 
  $('div.container2').hide();
  // function updates the timer 
  function updateTimer() {
    timeStarts = timeStarts - 1;
    if(timeStarts === 0) {
      console.log('Game Ended!');
      clearInterval(timer);
    }
    $('#countDown').text(timeStarts);
  }
// Reveal the game when clicked
  $('button').on('click', function () {
    $('div.container2').show();
    // Start timer once you click the button
    timer = setInterval(updateTimer, 1000);
    // timer goes backwards starting a 15
  });

  
});