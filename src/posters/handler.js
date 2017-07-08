'use strict';

module.exports.get = (event, context, callback) => {
  console.log(event)
  console.log("--------------------")
  var year = event.pathParameters['year'];
  if (year) {
    console.log("year: " + year);
  } else {
    console.log("no year");
    year = new Date().getFullYear();
  }
  //var eventStr = JSON.stringify(event);


  const response = {
    statusCode: 200,
    body: JSON.stringify({
      'year':year,
      'index':0,
      'movielist' : {1234: 0, 1235: 0, 1236: 0}

    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
