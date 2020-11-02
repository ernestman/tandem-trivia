# Tandem Trivia

## How to run the project
- Install Node and npm
- Open terminal/command line and clone this git repository
- run ```npm install```
- run ```npm start```
- Navigate to (http://localhost:3000)

### Dependencies:
- Node
- React
- React-DOM
- webpack
- Babel
- jQuery

### Challenge
Your goal is to create an application that displays trivia questions with multiple-choice answers to select from.
Use creative license in terms of how you want us to see this game. At minimum, the player can view the question(s), the answer choices, the correct answer upon submission, and their score. It could be a user interface (UI), command-line-tool, etc. Feel free to use whatever framework or language you are comfortable with.
We would also like to see a README which includes any information about how to run the code, any known issues or complexity we should look out for, and any additional features you would like to have added to make your trivia app even more awesome.

### Assumptions
- A round of trivia has 10 Questions
- All questions are multiple-choice questions
- Your score does not need to update in real time
- Results can update on form submit, button click, or any interaction you choose
- We will provide you with the trivia data such as the questions, correct and incorrect answers via a JSON file.

### Acceptance Criteria
- A user can view questions
- Questions with their multiple choice options must be displayed one at a time.
- Questions should not repeat in a round.
- A user can select only 1 answer out of the 4 possible answers.
- The correct answer must be revealed after a user has submitted their answer
- A user can see the score they received at the end of the round

## Approach
- Tandem Trivia was built using React and JavaScript, and some jQuery.
- One of the main design decisions I made for this project was figuring out how to structure the application state to account for user interaction, like clicking the start button and selecting options for each question. I decided to use React Hooks for this project because it makes it easier for us to handle and change our application state, allowing us to deal with individual entities instead of one giant Object. 
- I decided to implement some jQuery to handle the logic of rendering clicked options and showing the correct answer. Using the ```toggleClass``` allowed the game to visually show the correct and incorrect answers upon selection.
- I decided to use setTimeout when it came to user interaction with each question. Instead of needing to click a button to move onto the next question, setTimeout allows the Trivia game to move onto the next question shortly after selecting an option for each question. 