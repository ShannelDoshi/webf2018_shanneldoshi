    
    function myFunction() {
    var txt;
    if (confirm("Thank you for filling out the survey!")) {
        txt = "You pressed OK!";
    } else {
        txt = "You pressed Cancel!";
    }
}


$(document).ready(function(){
  var output = {name:"",
                answer1: 0,
                answer2: 0,
                answer3: 0,
                answer4: 0,
                answer5: 0,
                answer6: 0,
                answer7: 0,
                answer8: 0,
                answer9: 0,
                answer10: 0,
                answer11: 0
  }
  
 
  $('#name'). on('input', function(){
     output.name = $('#name').val()
      console.log(output)
  });
  
  
  
  
  $('#answer1'). on('input', function(){
     output.answer1 = $('#answer1').val()
      console.log(output)
  });
    
  $('#answer2'). on('input', function(){
     output.answer2 = $('#answer2').val()
      console.log(output)
  });
     $('#answer3'). on('input', function(){
     output.answer3 = $('#answer3').val()
      console.log(output)
      
  });$('#answer4'). on('input', function(){
     output.answer4 = $('#answer4').val()
      console.log(output)
      
  });$('#answer5'). on('input', function(){
     output.answer5 = $('#answer5').val()
      console.log(output)
      
  });$('#answer6'). on('input', function(){
     output.answer6 = $('#answer6').val()
      console.log(output)
      
  });$('#answer7'). on('input', function(){
     output.answer7 = $('#answer7').val()
      console.log(output)
      
  });$('#answer8'). on('input', function(){
     output.answer8 = $('#answer8').val()
      console.log(output)
      
  });$('#answer9'). on('input', function(){
     output.answer9 = $('#answer9').val()
      console.log(output)
      
  });$('#answer10'). on('input', function(){
     output.answer10 = $('#answer10').val()
      console.log(output)
      
  });$('#answer11'). on('input', function(){
     output.answer11 = $('#answer11').val()
      console.log(output)
  });
    
    // Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
    
    $('#nameAnswer').text(output.name)
    $('#1').text(output.answer1)
    $('#2').text(output.answer2)
    $('#3').text(output.answer3)
    $('#4').text(output.answer4)
    $('#5').text(output.answer5)
    $('#6').text(output.answer6)
    $('#7').text(output.answer7)
    $('#8').text(output.answer8)
    $('#9').text(output.answer9)
    $('#10').text(output.answer10)
    $('#11').text(output.answer11)
    
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} 
    
  });  







