/*🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️ Task 1: Warm-up! 🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️🏋️‍♂️*/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge;
if (votingAge>18){
  console.log(true)
}




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let variableA="yes"
let variableB=1
if(variableB=1){let variableA="no";}





//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method


(Number("1999"))


//Task d: Write a function to multiply a*b 

function multiply(a,b){
  return a*b;
  }

  



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears(a){
  return(a*7)
}



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal, one month = 1/12) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  

function hungryDog(w,a){
    if(a>.999){
      if (w<5.1){return(w*.05)}
      else if (w<10.1){return(w*.04)}
      else if (w<15.1){return(w*.03)}
      else if (w>15.1){return(w*.02)}
    }
    else if (a<.999){
      if (a>6.9){return(w*.04)}
      else if (a>3.9){return(w*.05)}
      else if (a>1.9){return(w*.10)}
      }
      return (hungryDog(15,1))
      console.log(hungryDog(15,1))
    }
  



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 


function game(rpc){
  if (rpc==="rock"){var choice=0}
  else if (rpc==="paper"){var choice=1}
  else if (rpc==="scissors"){var choice=2}
  var computer=Math.floor((Math.random()*3))
    if(choice===computer){return("it's a tie")}
    else if (choice===0 && computer===1){return("you lose!")}
    else if (choice===0 && computer===2){return("you win!")}
    else if (choice===1 && computer===0){return("you win!")}
    else if (choice===1 && computer===2){return("you lose!")}
    else if (choice===2 && computer===0){return("you lose!")}
    else if (choice===2 && computer===1){return ("you win!")}

}

  
  

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function miles(km){
    return(km*0.621371)
  }
  





//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  

function feet(f){
    return(f*30.48)
  }
 


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should return (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  

function annoyingSong(s){
  for(let i=s;i>0;i--){
    
    console.log(i+" bottles of soda on the wall "+i+" bottles of soda, take one down pass it around "+ (i-1) +" bottles of soda on the wall")
    if(i===1){return(i+" bottles of soda on the wall "+i+" bottles of soda, take one down pass it around "+ (i-1) +" bottles of soda on the wall")}
    }

}
annoyingSong(5)


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀*/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function grade(g){
  if(g>89){return("A")}
  else if(g>79){return("B")}
  else if(g>69){return("C")}
  else if(g>59){return("D")}
  else{return("F")}
  }
  
  
  
  

/*💪💪💪💪💪💪💪💪💪💪 Stretch 💪💪💪💪💪💪💪💪💪💪*/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method



function vowelCounter(/*add your code here*/) {
    /*add your code here*/
}



/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
function foo(){
    console.log('its working');
    return 'bar';
}
/*🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Don't touch the code after this line! 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑*/
export default{
    foo,
    multiply,
    dogYears,
    hungryDog,
    game,
    miles,
    feet,
    annoyingSong,
    grade,
    vowelCounter
}