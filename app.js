
// this is the guess function, that takes the guess and solution and provides 
// a number of white and black pegs
function return_pegs_from_solution_and_guess(guess, solution) {

    var whitepeg_count = 0
    var blackpeg_count = 0

    // by defining these variables, I am allowed to seperate the strings of numbers 
    //that make up the solution and the guess in order to compare them
    var temp_guess = guess.split('') //['1', '1', '1', '1']
    var temp_solution = solution.split('')


    // To find the black_peg total, I use a for loop that iterates 4 times.
    // For each cycle, an integer of the guess and the solution is compared. 
    // If they are equal to each other I increase the blackpeg_count by 1
    for (var i=0; i < temp_guess.length; i++){
        if (temp_solution[i] === temp_guess[i]) {

            temp_solution[i] = '0'
            temp_guess[i] = '0'

            blackpeg_count = blackpeg_count + 1

        } 
    }

    /// To find the white_peg total, I use another for loop that iterates 4 times.
    // For each cycle, an integer of the guess and the solution is compared.
    // If they are equal to each other I increase the whitepeg_count by 1.
    // In order to avoid repetition, a clause is added to both loops such that 
    //counted matches are set to 0 when they are counted. Therefore, matches 
    //that satisfy the black_peg if statement will then fail the white_peg if statement.  
    for (var i=0; i < temp_solution.length; i++){
        for (var n=0; n < temp_guess.length; n++){

            if (temp_solution[i] === temp_guess[n] && temp_solution[i] !== '0') {
                
                temp_solution[i] = '0'
                temp_guess[n] = '0'

                whitepeg_count = whitepeg_count + 1

            }
        }
    }    
    return [blackpeg_count, whitepeg_count]
}

// testing for the first function
//console.log(return_pegs_from_solution_and_guess('1111', '2222')) // 0, 0
//console.log(return_pegs_from_solution_and_guess('3333', '5366')) // 1, 0
//console.log(return_pegs_from_solution_and_guess('3333', '3333')) // 4, 0
//console.log(return_pegs_from_solution_and_guess('1254', '2454')) // 2, 1
//console.log(return_pegs_from_solution_and_guess('4513', '6136')) // 0, 2
//console.log(return_pegs_from_solution_and_guess('1231', '1111')) // 2, 0
//console.log(return_pegs_from_solution_and_guess('1234', '4132')) // 1, 3
//console.log(return_pegs_from_solution_and_guess('1122', '1234')) // 1, 1

// this the the response function, which takes the whitepeg and blackpeg count,
// and creates a new array of possible solutions 
function array_response_to_returned_pegs(guess, solution, solution_set){

    // In order to solve Mastermind, you first use the function 
    //return_pegs_from_solution_and_guess(guess, solution) for the solution 
    //compared to the guess. The function will then output a whitepeg_count
    // and a blackpeg_count for the solution in relation to the guess, 
    // which is defined as master_peg_count

    var master_peg_count = return_pegs_from_solution_and_guess(guess, solution)


   
    
    // this code below gives an array called (peg_count_all) and fills it with
    // the white and black peg outputs of the guess with each solution. 

    var peg_count_all = []
    var new_array = []
    for (var i=0; i < solution_set.length; i++) {
        var solution = return_pegs_from_solution_and_guess(guess, solution_set[i])

    // Then, this function iterates through all possible solutions coupled with
    // the guess, and finds those that have a matching whitepeg_count and blackpeg_count 
    //to the result of (return_pegs_from_solution_and_guess(guess, solution)) 
        peg_count_all.push(solution)
        if (master_peg_count[0] == solution[0] && master_peg_count[1] == solution[1]) {

            // Then these matches are outputted into a new array
            new_array.push(solution_set[i])
        };

    } 

    return(new_array)
}


function array_response_final(solution){

    // here is the do statement within a for statement that iterates from guess 
    //to guess and solutionset to solutionset


    // This is a constructed the array of all 1296 possible solutions, that runs 
    // a for loop by pushing each combination of 1's and 6's to 4 digit strings 
    // within the array all_solutions
    var all_solutions = []

    for (var i=0; i < 1296; i++) {
        all_solutions.push((parseInt((i).toString(6)) + 1111).toString())
    }
    // The first guess, is set at a constant 1122, as this was shown by wikipedia
    // to be the most efficient first guess in finding the solution
    // Then, the code is edited such that a corresponding black and white peg count
    // is shown, allong with the number of solutions remaining
    var first_guess = '1122'
    console.log('Guess 1')
    console.log(first_guess)
    var peg_count = return_pegs_from_solution_and_guess(first_guess, solution)
    console.log('Peg Count Black: '  + peg_count[0] + ' Peg Count White: ' + peg_count[1])
    var new_solutions = array_response_to_returned_pegs(first_guess, solution, all_solutions)  
    console.log(new_solutions.length + " Possible Solutions Remaining" )
    
    // this while loop, runs through each of the continuing guesses after the first, 
    // and continues to provide white and black peg counts as well as the number of 
    // solutions remaining. Furthermore, a random new guess is chosen after each previous. 
    // Even though this is not the most efficent method, the solution can still be found 
    // 100% of the time this way.
    var v = 0;

    while (v < 9) {
        console.log('Guess ' + (2+v))
        new_guess = new_solutions[Math.floor(Math.random() * new_solutions.length)]
        console.log(new_guess)
        var peg_count = return_pegs_from_solution_and_guess(new_guess, solution)
        console.log('Peg Count Black: '  + peg_count[0] + ' Peg Count White: ' + peg_count[1])
        new_solutions = array_response_to_returned_pegs(new_guess, solution, new_solutions)
        console.log(new_solutions.length + " Possible Solutions Remaining" )
        if (new_solutions.length === 1) {
            console.log('Number of Guesses: ' + (2+v))
            var guesses = (2+v)
            break;
            
        }
        v += 1;
    }   
    return(new_solutions);
    // Run this line when running the test
    // return(v+2)
}

// Takes a sent argument (proccess.argv[2], puts it in the array resposne function)
// confirm that argv is a possible solution and only digits 1-6
//numbers outside of 1-6

// This next set makes sure that the provided input in the command window meets the 
// requirements for a solution. If a solution is not entered, is the incorrect
// length, and contains numbers not 1-6, then a message is returned which tells
// the inputter how to fix their mistake. Also, a command line argument was used, 
// and was augmented and found thanks to stack overflow. 
// (http://stackoverflow.com/questions/4351521/how-to-pass-command-line-arguments-to-node-js)
if (process.argv.length < 3) {
    console.log('Please enter a four number solution with numbers from 1 to 6, where numbers can be repeated')
} else if (process.argv[2].length !== 4) {
    console.log('The entered solution had too many or too little numbers, please enter one with exactly 4')
    // A regular expression is used here. As I found it quite difficult to find a 
    // way to check to make sure the solution contained only numbers from 1-6, this 
    // part of the code was found thanks to help I received.
} else if (!/[1-6][1-6][1-6][1-6]/.test(process.argv[2])){
    console.log('Your input is in the incorrect format, please make sure your input is a string of four numbers, each between 1 and 6')
} else {
    console.log('Is the answer? ' +  array_response_final(process.argv[2]))
}

// This code, shows that the solution can always be found within 10 trys
// 100 % of the time
// Here I redefined the solutions set
// var all_solutions = []

// for (var i=0; i < 1296; i++) {
//     all_solutions.push((parseInt((i).toString(6)) + 1111).toString())
// }
// This for loop takes each of the possible solutions and enters it into the
// (array_response_final) and returns Fail if the number of guesses is 
// greater than 10, and Success if the number of guesses is not greater than 10.
// for (i=0; all_solutions.length; i++){
//     array_response_final(all_solutions[i])
//     if (array_response_final > 10) { 
// uncomment out line 151 and comment out 149 when running these tests
//         console.log("Fail")
//     } else {
//         console.log("Success")
//     }
// }

