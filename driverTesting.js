//homework1
 //prompt module
 var prompt = require('prompt');
 //schema for user input
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
      att1: { type: 'number'},
      att2: { type: 'number'},
      att3: { type: 'number'},
      att4: { type: 'number'},
      att5: { type: 'number'}
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
    console.log(' att1:', result.att1);
    console.log(' att2:', result.att2);
    console.log(' att3:', result.att3);
    console.log(' att4:', result.att4);
    console.log(' att5:', result.att5);
 });