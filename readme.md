
## MasterMind

#### Input Directions
This code runs through node command `node app.js 'solution'`, where the solution is provided by the user.
Instead of including the colors red, orange, yellow, green, blue, and purple, the program uses the numbers 1-6 
to illustrate guess and solution inputs. Also, if an input error occurs, the terminal will instead return a message that tells the user the error they made.

---
#### Application Output
After inputting the solution, the application will show how many guesses it takes, the peg response after each guess,
and the number of possible solutions remaining after each guess. Then, after finding the answer, the solution is revealed to the user.


```
node app.js '1234'

Guess 1
1122
Peg Count Black: 1 Peg Count White: 1
208 Possible Solutions Remaining
Guess 2
2526
Peg Count Black: 0 Peg Count White: 1
39 Possible Solutions Remaining
Guess 3
1461
Peg Count Black: 1 Peg Count White: 1
10 Possible Solutions Remaining
Guess 4
1315
Peg Count Black: 1 Peg Count White: 1
3 Possible Solutions Remaining
Guess 5
1243
Peg Count Black: 2 Peg Count White: 2
1 Possible Solutions Remaining
Number of Guesses: 5
Is the answer? 1234
```

---
#### Further Notes
Code is included at the bottom of the application, which inputs every possible solution into the `array_response_final` function to prove that a solution can be found within 10 guesses each time.

Comments are also included at all sections of the code to explain the processes of the application.

---
