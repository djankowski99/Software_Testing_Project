let functions = require('./CSC404_HW1Convert')
let prompt = require('prompt');

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
     studentid:
     {

     },
     homework1: { type: 'number'},
     homework2: { type: 'number'},
     homework3: { type: 'number'},
     test1: { type: 'number'},
     test2: { type: 'number'},
     att: { type: 'number',},
 
   }
};

//start the prompt
prompt.start();

//get the properties from the user
prompt.get(schema, function (err, result) 
{
   //log results from the user
   console.log('Command-line input received:');
   //user info
   console.log(' name:', result.name);
   console.log(' studentid:', result.studentid);
   //homework grades
   console.log(' homework1:', result.homework1);
   console.log(' homework2:', result.homework2);
   console.log(' homework3:', result.homework3);
   //test grades
   console.log(' test1:', result.test1);
   console.log(' test2:', result.test2);
   //attendance
   console.log(' attendance:', result.att);
});

