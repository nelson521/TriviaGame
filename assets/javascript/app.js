$(document).ready(function () {
  var timeStarts = 16;
  var win;
  var lost;
  var correctAnswer = ["alfred", "lois lane", "mary jane", "scott", "britney spears"];
  var userResponse = [];
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
    updateTimer();
    $(this).hide();
  });

  $('button.submit').on('click', function() {
    var radioVal = $("input[name='ques1']:checked").val();
    
  });
  
  

  



  
});