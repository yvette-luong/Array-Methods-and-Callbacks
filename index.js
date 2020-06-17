import {fifaData} from './fifa.js';


console.log(fifaData)

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 
1-investigate data =  
2-access data by console.log followwing pieces of data 



(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

// function taskA (data, year){
//     const finalGame = data.filter(function(match){
//         return match.Year === year && match.Stage === "Final"
        
//     }) 
//     console.log(finalGame)
    
//     const homeTeamName = finalGame[0]["Home Team Name"]
//     return homeTeamName
  
// }
//     // const homeTeamGoals = finalGame[0]["Home Team Goals"]
//     // return homeTeamGoals 

// console.log(taskA(fifaData,2010))



// function taskB (data) {
//     const finalGame = data.filter(function(match) {
//         return match.Year === 2014 && match.Stage === "Final"
//     }) 
//     console.log(finalGame)
//     const awayTeamName = finalGame[0]["Away Team Name"]
//     return awayTeamName 
// }
// console.log(taskB(fifaData))


// console.log(fifaData[fifaData.findIndex(num =>{
//     return(num.Year === 2014 && num.Stage === 'Final')
//  })]['Home Team Name']);

// console.log(fifaData[fifaData.findIndex(num =>{
//     return(num.Year === 2014 && num.Stage === 'Final')
//  })]['Away Team Name']);

//  console.log(fifaData[fifaData.findIndex(num =>{
//     return(num.Year === 2014 && num.Stage === 'Final')
//  })]['Home Team Goals']);


//  console.log(fifaData[fifaData.findIndex(num =>{
//     return(num.Year === 2014 && num.Stage === 'Final')
//  })]['Away Team Goals']);

//  console.log(fifaData[fifaData.findIndex(num =>{
//     return(num.Year === 2014 && num.Stage === 'Final')
//  })]['Win conditions']);

function getWinners2014(){
    const finals2014 = fifaData.filter((item)=>(item['Year'] === 2014 && item['Stage'] === 'Final'))
    // console.log(finals2014)

    if (finals2014[0]['Home Team Goals'] > finals2014[0]['Away Team Goals'])
       {
            console.log(finals2014[0]['Home Team Name'])

        } else {
            console.log(finals2014[0]['Away Team Name']) 
        }
//         return finals2014;     
}
// console.log(getWinners2014());


// .map(item => {
//     if(item['Home Team Goals'] > item['Away Team Goals'])
//     {
//         console.log(item['Home Team Name'])
//     } else

//         console.log(item['Away Team Name']) 
// });

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data 

1- function (data)
2- return : an array pf object--only finals data
*/


function getFinals(data) {
   
 const finalsData = data.filter(function(item){
        return item.Stage === "Final";
    });
    return finalsData;
}
// console.log(getFinals(fifaData))
   


/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`,
 and returns an array called `years` containing all of the years in the dataset

1 - function (callbackOfGetFinals)
2 - return : an array called 'years' which contain years in the dataset 

*/

function getYears(getFinalsCb) {

    const finals = getFinalsCb(fifaData)

    const years  = finals.map(function(item){
        return item.Year;
    });
    return years;
};

// console.log(getYears(getFinals));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners`

1 - function ( callbackOfGetFinals)
2 - determine the winner : home or away for each 'finals' game.
3 - return an ARRAY 'winners' = [name of all winning countries]
*/ 

function getWinners(callback, data) {
    const winners = [];
    callback(data).map(element =>{
        if(element['Home Team Goals'] > element['Away Team Goals']){
            winners.push(element['Home Team Name'])
        
        } else {
            winners.push(element['Away Team Name']);
        }
    })
    return winners;
};

// console.log(getWinners(getFinals,fifaData));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 
 1 - function (callbackgetWinners, callbackgetYears)
 2 - return : string :  "In {year}, {country} won the world cup!" 

 */

// function getWinnersByYear(cbGetWinners, cbGetYears) {
//     const winners   = cbGetWinners(fifaData)
//     const years     = cbGetYears(fifaData)
//     for (let i = 0 ; i < getYears(cbGetYears,fifaData).length; i++) {
//         console.log('In ${getYears(cbGetYears,fifaData)[i]}, ${getWinners(cdGetWinners,fifaData)[i]} won the world cup!')
//     }

// console.log(getWinnersByYear(getWinners, getYears))


function getWinnersByYear(callback1,callback2,data) {
    const winners =  getWinners(callback1,data) //returns winners array;
    const years =   getYears(callback2,data) //returns years array 
    for(let i = 0; i <years.length; i++ ){
     console.log(`In ${years[i]}, ${years[i]} won the world cup!`)
      }
//     }
// getWinnersByYear(getWinners, getYears, fifaData)
getWinnersByYear(getWinners(getFinals,fifaData),getYears(getFinals))
 // console.log(winners)
 // console.log(years)


/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) 

1 - function (data)
2 - return : THE AVERAGE NUM of hometeam goals & awayteam goals scored / match 


*/

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

// /* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
