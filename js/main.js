// add scripts
var app = angular.module("myapp", []);

app.controller("HelloController", function($scope) {
  $scope.hello = {};
  $scope.hello.title = "World";
  });

//change pet by dropdown
app.controller('PetPicker', function($scope) {
  $scope.data = {
  petSelect: "all animals",
  };
});

//change string to ALL CAPS or small italics
app.controller('YellWhisper', function($scope){
  $scope.data= {};
});

//show pi digits based on dropdown
app.controller('PiDigits', function($scope) {
  $scope.data = {
    digitsOfPi:'2'
  };
});

//tip calculator
app.controller('TipCalculator', function($scope) {
    $scope.data = {};
});


//madlib
app.controller('madLib', function($scope) {
    $scope.data = {};
});

//shows all symbols
app.controller('symbol-repeat', function($scope) {
    $scope.symbols = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
});

//shows duplicate numbers
app.controller('repeat-repeat', function($scope) {
    $scope.numbers = [1,1,2,5,6,9,9,9];
});

//sign up page with password
app.controller('sign-up-page', function($scope) {
    $scope.data = {};
});

//sign up page with password and color
app.controller('sign-up-page2', function($scope) {
  $scope.data = {};
});

//camera shop-order by rating and price
app.controller('camera-shop', function($scope) {
  $scope.cameras=[
      {
        title: "Nikon D3100 DSLR",
        image: "http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg",
        rating: 3.4,
        price: 369.99,
        onSale: true
      },
      {
        title: "Canon EOS 70D",
        image: "http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg",
        rating: 2.0,
        price: 1099.0,
        onSale: false
      },
      {
        title: "Nikon D810A",
        image:"http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg",
        rating: 4.2,
        price: 3796.95,
        onSale: true
      }
    ];
});

//change input from controller
app.controller('ExercisesController', function($scope){
  $scope.data = {
    FavColor:'teal',
    secondsInACentury:(60 * 60 * 24 * 365 * 100),
    rightNow: Date.now(),
  };

});

//random number picker
app.controller('EventsExercises', function($scope){
  $scope.data = {
    number:5
  };
  $scope.pickRandomNumber = function(){
    $scope.data.number = Math.floor(Math.random() * 10) + 1;
};
});

//word reverser
app.controller('WordReverser', function($scope){

});

//custom word reverser filter
app.filter("reverse", function() {
  return function(input) {
    var result = "";
    input = input || "";
    for (var i = 0; i <input.length; i++) {
      result = input.charAt(i) + result;
    }
    return result;
  };
});


//ping pong score keeper
app.controller('PingPong', function($scope){
  $scope.data={
    p1score:0,
    p2score:0,
    total:0,
    serve:1,
    p1wins:0,
    p2wins:0
    };
  $scope.scoreKeeper1=function(){
    $scope.data.p1score +=1;
    $scope.data.total +=1;
    if($scope.data.total===2){
      $scope.data.serve = 2;
    }
    else if($scope.data.total===4){
      $scope.data.serve=1;
      $scope.data.total=0;
    }
    if($scope.data.p1score === 11){
      $scope.data.p1wins +=1;
    }
    if($scope.data.p2score === 11){
      $scope.data.p2wins +=1;
    }
  };
  $scope.scoreKeeper2=function(){
    $scope.data.p2score +=1;
    $scope.data.total +=1;
    if($scope.data.total===2){
      $scope.data.serve = 2;
    }
    else if($scope.data.total===4){
      $scope.data.serve=1;
      $scope.data.total=0;
    }
    if($scope.data.p1score === 11){
      $scope.data.p1wins +=1;
    }
    if($scope.data.p2score === 11){
      $scope.data.p2wins +=1;
    }
  };
  $scope.reset=function(){
    $scope.data.p1score = 0;
    $scope.data.p2score = 0;
    $scope.data.total = 0;
    $scope.data.serve = 1;
  };
   $scope.resetAll=function(){
    $scope.reset();
    $scope.data.p1wins = 0;
    $scope.data.p2wins = 0;
  };
});

app.controller('ContactsApp', function($scope){
  $scope.contacts= [
    {
      name: "Harry Potter",
      email: "theBoyWhoLived@hogwarts.edu",
      phone: "555-8903-5234"
    },
    {
      name: "Ron Weasley",
      email: "hotGinger@hogwarts.edu",
      phone: "555-4325-65464"
    },
    {
      name: "Remus Lupin",
      email: "howlAtTheMoon@hogwarts.edu",
      phone: "555-412-9808"
    }
  ];
  $scope.newContact = function(){
    if($scope.newContactData.$valid){
      var newPeep=
        {
          name: $scope.name,
          email: $scope.email,
          phone: $scope.phone,
        };
      $scope.contacts.push(newPeep);
    }
  };
});













