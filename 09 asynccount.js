var http = require('http');
var bl = require('bl');

var counter = 0;
var responses = new Array(3);

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data)
  {
  	responses[0] = data.toString();
    counter++;
    if (counter == 3)
    {
      responses.forEach(function(string){
        console.log(string);
      });
    }  
  }));
});

http.get(process.argv[3], function (response) {
  response.pipe(bl(function (err, data)
  {
    responses[1] = data.toString();
    counter++;
    if (counter == 3)
    {
      responses.forEach(function(string){
        console.log(string);
      });
    }  
  }));
});

http.get(process.argv[4], function (response) {
  response.pipe(bl(function (err, data)
  {
    responses[2] = data.toString();
    counter++;
    if (counter == 3)
    {
      responses.forEach(function(string){
        console.log(string);
      });
    }  
  }));
});

// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//   for (var i = 0; i < 3; i++)
//     console.log(results[i])
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err)
//         return console.error(err)

//       results[index] = data.toString()
//       count++

//       if (count == 3)
//         printResults()
//     }))
//   })
// }

// for (var i = 0; i < 3; i++)
//   httpGet(i)
