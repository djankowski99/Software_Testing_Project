let convert = require('./Convert')
let roundup = require('./RoundUp.js')
let prompt = require('prompt');

var schema =
{
  properties:
  {
    homework1: { type: 'number' },
    homework2: { type: 'number' },
    homework3: { type: 'number' },
    exam1: { type: 'number' },
    exam2: { type: 'number' },
    attendance: { type: 'number', },

  }
};

prompt.start();

//Finding all of the homework and exam grades from the user
prompt.get(schema, function (err, result) {
  console.log(' Homework1 Number Grade:', result.homework1);
  console.log(' Homework2 Number Grade:', result.homework2);
  console.log(' Homework3 Number Grade:', result.homework3);
  console.log(' Test1 Number Grade:', result.exam1);
  console.log(' Test2 Number Grade:', result.exam2);
  console.log(' attendanceendance:', result.attendance);

  //receive homework grades
  homework1 = result.homework1
  homework2 = result.homework2
  homework3 = result.homework3
  //receive exam grades
  exam1 = result.exam1
  exam2 = result.exam2
  attendance = result.attendance
  //weight homework grades
  homework1 = homework1 * .10;
  homework2 = homework2 * .10;
  homework3 = homework3 * .10;
  // weight exam grades 
  exam1 = exam1 * .35;
  exam2 = exam2 * .35;

  // average of 5 student grades  
  var avgGrade = (homework1 + homework2 + homework3 +
    exam1 + exam2);
  // output average grade before rounding                   
  console.log(avgGrade)
  // output rounded final number grade
  var finalNumberGrade = roundup.Round_Up(attendance, avgGrade)
  console.log(finalNumberGrade)
  //output final letter grade
  var grade = convert.convert(finalNumberGrade)
  console.log("Final Grade: " + finalNumberGrade + " " + grade)
});



