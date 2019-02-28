
var convert = require('./conversionModule');
var round = require('./roundingModule');
var prompt = require('prompt');
var attendanceCount = 0;
var finalGrade;


var schema = 
{
    properties: 
    {
     name: 
     {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Name must only be letters, spaces, or dashes',
        required: true

     },
     homework_1_grade: 
     { 
        pattern: /\d/,
        message: 'Must be a number',
        required: true

     },
     homework_2_grade: 
     { 
        pattern: /\d/,  
        message: 'Must be a number',
        required: true
     },
     homework_3_grade: 
     { 
        pattern: /\d/,
        message: 'Must be a number',
        required: true
     },
     test_1_grade: 
     { 
        pattern: /\d/,
        message: 'Must be a number',
        required: true
     },
     test_2_grade: 
     { 
        pattern: /\d/,
        message: 'Must be a number',
        required: true
     },
    
     attendanceDay1: 
     { 
        pattern: /[0-1]/,
        message: 'Please enter 1 for Yes, or 0 for No',
        required: true
     },

     attendanceDay2: 
     { 
        pattern: /[0-1]/,
        message: 'Please enter 1 for Yes, or 0 for No',
        required: true
     },

     attendanceDay3: 
     { 
        pattern: /[0-1]/,
        message: 'Please enter 1 for Yes, or 0 for No',
        required: true
     },
    
     attendanceDay4: 
     { 
        pattern: /[0-1]/,
        message: 'Please enter 1 for Yes, or 0 for No',
        required: true
     },

     attendanceDay5: 
     { 
        pattern: /[0-1]/,
        message: 'Please enter 1 for Yes, or 0 for No',
        required: true
     },
}
};



//start the prompt
prompt.start();

//get the properties from the user
prompt.get(schema, function (err,result) 
{

    var homework1 = result.homework_1_grade;

    var homework2 = result.homework_2_grade;

    var homework3 = result.homework_3_grade;

    var test1 = result.test_1_grade;

    var test2 = result.test_2_grade;

    var grade = convert.convert(homework1,homework2,homework3,test1,test2);

    attendanceCount = attendanceCount + parseInt(result.attendanceDay1);

    attendanceCount = attendanceCount + parseInt(result.attendanceDay2);

    attendanceCount = attendanceCount + parseInt(result.attendanceDay3);

    attendanceCount = attendanceCount + parseInt(result.attendanceDay4);

    attendanceCount = attendanceCount + parseInt(result.attendanceDay5);


    console.log("Grade:" + grade);

    console.log("Attendance Count: " + attendanceCount);

    console.log("Round Up Granted: " + round.round(grade,attendanceCount));



    if (round.round(grade,attendanceCount)== true)
    {

        Math.ceil(grade);

    }

    else
    {

        Math.floor(grade);

    }



switch(grade)

{

case 
93,94,95,96,97,98,99,100:

finalGrade = 
"A+";

break;

case 
90,91,92:

finalGrade = 
"A";

break;

case 
87,88,89:

finalGrade = 
"B+";

break;

case 
83,84,85,86:

finalGrade = 
"B";

break;

case 
80,81,82:

finalGrade = 
"B-";

break;

case 
77,78,79:

finalGrade = 
"C+";

break;

case 
73,74,75,76:

finalGrade = 
"C";

break;

case 
70,71,72:

finalGrade = 
"C-";

break;

case 
67,68,69:

finalGrade = 
"D+";

break;

case 
63,64,65,66:

finalGrade = 
"D";

break;

case 
60,61,62:

finalGrade = 
"D-";

break;

default:

finalGrade = 
"F";

break; 



} 



console.log("Final Grade: " +
finalGrade + 
" (" + grade + 
")");

});
