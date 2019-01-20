//runs start function when button is clicked
$("#start").on("click", function() {
  game.start();
})

//Ends the game when the done button is clicked
$(document).on("click", "#done", function(event) {
  game.done();
});
//container to hold questions
var panel = $("#quiz-container");
//an array that contains objects that are the questions for the player. Each objects has a question, answer array and the correct answer
var questions = [{
  question: "Normal adult dogs have how many teeth?",
  answers: ["24", "38", "42", "32"],
  correctAnswer: "42"
}, {
  question: "Through what part of the body do dogs sweat?",
  answers: ["Mouth", "Ears", "Nose", "Paws"],
  correctAnswer: "Paws"
}, {
  question: "TRUE OR FALSE: Dogs can only see in black and white.",
  answers: ["True", "False"],
  correctAnswer: "False"
}, {
  question: "What is a dog’s most highly developed sense?",
  answers: ["Taste", "Smell", "Sight", "Touch"],
  correctAnswer: "Smell"
}, {
  question: "What is the most common training command taught to dogs?",
  answers: ["Stay", "Beg", "Sit", "Dance"],
  correctAnswer: "Sit"
}, {
  question: "Which dog breed is the smallest of them all?",
  answers: ["Dachshund", "Shih tzu", "Pomeranian", "Chihuahua"],
  correctAnswer: "Chihuahua"
}, {
  question: "The first dogs registered in the American Kennel Club belonged to what group?",
  answers: ["Herding", "Sporting", "Working", "Hound"],
  correctAnswer: "Sporting"
}, {
  question: "TRUE OR FALSE: Dalmatians are born with spots.",
  answers: ["True", "False"],
  correctAnswer: "Flase. The spots come later."
}, {
  question: "What is the most popular breed of dog, according to the American Kennel Club’s registrations?",
  answers: ["Golden retriever", "Beagle", "German Shepherd", "Labrador"],
  correctAnswer: "Labrador"
}, {
  question: "Which dog breed has a black tongue?",
  answers: ["Husky", "Weimaraner", "Chow chow", "Labrador"],
  correctAnswer: "Chow chow"
}]


//GAME OBJECT - store properties of the game object
var game = {
  correct: 0,
  incorrect: 0,
  timer: 0,
  counter: 120, //timer
  countdown: function() { //a method....function within a function is a method...an action being performed on an object
    game.counter--;
    $("#counter").html(game.counter);
    if (game.counter <= 0) {
      console.log("Times up!");
      game.done();
    }
  },
  //===================================================================================================================
  //Starts the Game
  //Loads the Questions
  //Starts the timer
  //populates the html with each question and its answers
  //===================================================================================================================
  start: function() {
    timer = setInterval(game.countdown, 1000) //every second the countdown function above will run....creating a timer
    $("#start-screen").prepend('<h2 id="counter-text">Time Remaining: <span id="counter">120</span> Seconds Left</h2>');
    $("#start").remove(); //removes start button after it is clicked and shows the questions
    $("#start-dog").remove();
    for (var i = 0; i < questions.length; i++) {
      //loops through the questions and adds each of them in a div to the html
      panel.append('<h3 class="questions">' + questions[i].question + '</h3>');
      for (var j = 0; j < questions[i].answers.length; j++) {
        //loops through the questions array, grabs the answers, turns them into a radio button input type,
        //gives each radio button a value that is the list of possible answers
        //gives them a name and a class(that isn't working yet bceause I'm probably doing it wrong)
        panel.append("<input type='radio' name='questions-" + i + "' value='" + questions[i].answers[j] + "' class='answers'>" + questions[i].answers[j]);
      }
    }
    panel.append("<button id='done'>CLICK WHEN DONE</button>");
  },
  //===================================================================================================================
  //Checks to make sure that each question has been answered
  //if a questions wasn't answered
  //  adds a score to correct correctAnswer
  //  else adds a score to incorrect answers
  //===================================================================================================================
  done: function() {
    $.each($("input[name='questions-0']:checked"), function() {
      if ($(this).val() == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    $.each(
      $('input[name="questions-1"]:checked'),
      function() {
        if ($(this).val() == questions[1].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });

    $.each(
      $('input[name="questions-2"]:checked'),
      function() {
        if ($(this).val() == questions[2].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });

    $.each(
      $('input[name="questions-3"]:checked'),
      function() {
        if ($(this).val() == questions[3].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });

    $.each(
      $('input[name="questions-4"]:checked'),
      function() {
        if ($(this).val() == questions[4].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });

    $.each(
      $('input[name="questions-5"]:checked'),
      function() {
        if ($(this).val() == questions[5].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });

    $.each(
      $('input[name="questions-6"]:checked'),
      function() {
        if ($(this).val() == questions[6].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });

    $.each(
      $('input[name="questions-7"]:checked'),
      function() {
        if ($(this).val() == questions[7].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });

    $.each(
      $('input[name="questions-8"]:checked'),
      function() {
        if ($(this).val() == questions[8].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });

    $.each(
      $('input[name="questions-9"]:checked'),
      function() {
        if ($(this).val() == questions[9].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });

    $.each(
      $('input[name="questions-10"]:checked'),
      function() {
        if ($(this).val() == questions[10].correctAnswer) {
          game.correct++;
        } else {
          game.incorrect++;
        }
      });

    this.result();

  },

  result: function() {
    clearInterval(timer);

    $("#start-screen h2").remove();
    panel.html("<h2>YOUR SCORE!</h2>");
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered Questions: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");

    $('#end-dog').prepend('<img id="end-dog-image" src="assets/images/puppy_with_bone.jpg" />')


  }
}
